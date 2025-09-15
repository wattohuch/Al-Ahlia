// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const app = express();

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (including uploads)
app.use(express.static(__dirname));
app.use('/uploads', express.static(uploadsDir));

// Multer setup (for CV uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only PDF and Word documents
  if (file.mimetype === 'application/pdf' || 
      file.mimetype === 'application/msword' || 
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF and Word documents are allowed'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'princewalson@karunya.edu.in',
    pass: 'aphl tukh agrt vxca' // use App Password
  }
});

// Validate email function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ---------------- API ROUTES ----------------
// contact us form
app.post('/api/index/contact-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'walson549@gmail.com', // your receiving email
    subject: `Contact us - ${subject || 'No Subject'}`,
    html: `
      <h2>Contact Us</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Subject:</b> ${subject || 'N/A'}</p>
      <p><b>Message:</b><br>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  transporter.sendMail(mailOptions)
    .then(() => res.json({ success: true, message: "Inquiry sent!" }))
    .catch(err => res.status(500).json({ success: false, error: err.message }));
});

// Careers form
app.post('/api/contact/careers', upload.single('cv'), (req, res) => {
  try {
    const { candidateName, dob, careerEmail, education, nationality } = req.body;
    
    // Validation
    if (!candidateName || !dob || !careerEmail) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill all required fields" 
      });
    }
    
    if (!isValidEmail(careerEmail)) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide a valid email address" 
      });
    }
    
    const cv = req.file;
    if (!cv) {
      return res.status(400).json({ 
        success: false, 
        message: "Please upload your CV" 
      });
    }

    const mailOptions = {
      from: `"Al-Ahlia Careers" <princewalson@karunya.edu.in>`,
      to: 'walson549@gmail.com',
      replyTo: careerEmail,
      subject: `New Career Application - ${candidateName}`,
      html: `
        <h2>Career Application Received</h2>
        <p><b>Name:</b> ${candidateName}</p>
        <p><b>Date of Birth:</b> ${dob}</p>
        <p><b>Email:</b> ${careerEmail}</p>
        <p><b>Education/Qualifications:</b> ${education || 'Not provided'}</p>
        <p><b>Nationality:</b> ${nationality || 'Not provided'}</p>
        <p><b>Submitted on:</b> ${new Date().toLocaleString()}</p>
      `,
      attachments: [{
        filename: cv.originalname,
        path: cv.path
      }]
    };

    transporter.sendMail(mailOptions)
      .then(() => {
        res.json({ 
          success: true, 
          message: "Application submitted successfully!" 
        });
      })
      .catch(err => {
        console.error('Email error:', err);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit application. Please try again later." 
        });
      });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Server error. Please try again later." 
    });
  }
});

// General inquiries form
app.post('/api/contact/general', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill all required fields" 
      });
    }
    
    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide a valid email address" 
      });
    }

    const mailOptions = {
      from: `"Al-Ahlia Contact" <princewalson@karunya.edu.in>`,
      to: 'walson549@gmail.com',
      replyTo: email,
      subject: `General Inquiry - ${subject || 'No Subject'}`,
      html: `
        <h2>General Inquiry Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || 'Not provided'}</p>
        <p><b>Message:</b> ${message || 'Not provided'}</p>
        <p><b>Submitted on:</b> ${new Date().toLocaleString()}</p>
      `
    };

    transporter.sendMail(mailOptions)
      .then(() => {
        res.json({ 
          success: true, 
          message: "Your inquiry has been sent successfully!" 
        });
      })
      .catch(err => {
        console.error('Email error:', err);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send your inquiry. Please try again later." 
        });
      });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Server error. Please try again later." 
    });
  }
});

// Contractors form
app.post('/api/contact/contractors', (req, res) => {
  try {
    const { contractorName, business, phone, contractorEmail, fax, location, projectType, description } = req.body;
    
    // Validation
    if (!contractorName || !business || !phone || !contractorEmail) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill all required fields" 
      });
    }
    
    if (!isValidEmail(contractorEmail)) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide a valid email address" 
      });
    }

    const mailOptions = {
      from: `"Al-Ahlia Contractors" <princewalson@karunya.edu.in>`,
      to: 'walson549@gmail.com',
      replyTo: contractorEmail,
      subject: `New Contractor Registration - ${business}`,
      html: `
        <h2>Contractor Registration Received</h2>
        <p><b>Contractor Name:</b> ${contractorName}</p>
        <p><b>Business:</b> ${business}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${contractorEmail}</p>
        <p><b>Fax:</b> ${fax || 'Not provided'}</p>
        <p><b>Location:</b> ${location || 'Not provided'}</p>
        <p><b>Project Type:</b> ${projectType || 'Not provided'}</p>
        <p><b>Description:</b> ${description || 'Not provided'}</p>
        <p><b>Submitted on:</b> ${new Date().toLocaleString()}</p>
      `
    };

    transporter.sendMail(mailOptions)
      .then(() => {
        res.json({ 
          success: true, 
          message: "Contractor registration submitted successfully!" 
        });
      })
      .catch(err => {
        console.error('Email error:', err);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit registration. Please try again later." 
        });
      });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Server error. Please try again later." 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Catch-all for unknown API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: "API route not found" 
  });
});

// Serve the main page for any other GET request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Global error handler
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
  }
  
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'An unexpected error occurred. Please try again later.'
  });
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`API health check: http://localhost:${PORT}/api/health`);
});