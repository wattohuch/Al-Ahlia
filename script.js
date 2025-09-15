document.addEventListener('DOMContentLoaded', async function() {
    const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
    
    //Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        });
    }

    // --- Force scroll
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    //AOS Library
    AOS.init({
        duration: 800,
        once: true
    });

    // ---Scroll Effect ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
    
    // --- Mobile Menu---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-times');
            icon.classList.toggle('fa-bars');
        });
    }

    // --- Landmark Projects ---
    const projectsData = [
        {
            title: 'Wafra Seef Restaurant Complex',
            description: 'A premier dining destination featuring a collection of high-end restaurants with stunning seaside views, completed with our signature quality and attention to detail.',
            image: 'images/slide 4.jpeg', 
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.353382282244!2d48.00095391509953!3d29.38942628212555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c1d5db19095%3A0x5b59176a927a716f!2sKuwait%20Towers!5e0!3m2!1sen!2skw!4v1662635639845!5m2!1sen!2skw',
            subImages: [
                'images/Wafra/1.JPG',
                'images/Wafra/2.JPG',
                'images/Wafra/3.JPG',
                'images/Wafra/4.JPG',
                'images/Wafra/5.JPG'
                
            ]
        },
        {
            title: 'Nadia Residential Complex',
            description: 'A landmark of modern living in Salmiya, offering unparalleled luxury and comfort with state-of-the-art amenities and breathtaking views. This residential tower features a variety of apartment layouts, a fully equipped gym, a stunning rooftop pool, and dedicated parking for all residents. Our team managed the project from conception to completion, ensuring every detail met our high standards of excellence.',
            image: 'images/Nadia RC/1.JPG',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.353382282244!2d48.00095391509953!3d29.38942628212555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c1d5db19095%3A0x5b59176a927a716f!2sKuwait%20Towers!5e0!3m2!1sen!2skw!4v1662635639845!5m2!1sen!2skw',
            subImages: [
                'images/Nadia RC/2.JPG',
                'images/Nadia RC/3.JPG',
                'images/Nadia RC/4.JPG',
                'images/Nadia RC/5.JPG',
                'images/Nadia RC/6.JPG'
            ]
        },
        {
            title: 'Q Markets',
            description: 'A modern and spacious supermarket designed for an optimal shopping experience, constructed with efficiency and customer convenience in mind.',
            image: 'images/Q Markets/1.JPG',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.739493132629!2d47.92723131510019!3d29.319799982151785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9a456e545799%3A0x2b6a52479539154!2sThe%20Avenues!5e0!3m2!1sen!2skw!4v1662635712345!5m2!1sen!2skw',
            subImages: [
                'images/Q Markets/2.JPG',
                'images/Q Markets/3.JPG',
                'images/Q Markets/4.JPG',
                'images/Q Markets/5.JPG',
                'images/Q Markets/6.JPG'
            ]
        },
        {
            title: 'ViBES Restaurant',
            description: 'An trendy and vibrant restaurant space, delivered with a unique architectural flair that complements its dynamic atmosphere.',
            image: 'images/VIBES/VLOG.JPG',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.9961628373307!2d47.9304723150993!3d29.2801449821659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9a7b7e758e6f%3A0x67c5a53a91a2745a!2sSheikh%20Jaber%20Al-Ahmad%20Al-Jaber%20Al-Sabah%20Hospital!5e0!3m2!1sen!2skw!4v1662635765432!5m2!1sen!2skw',
            subImages: [
                'images/VIBES/1.JPG',
                'images/VIBES/2.JPG',
                'images/VIBES/3.JPG',
                'images/VIBES/4.JPG',
                'images/VIBES/5.JPG'   
            ]
        },
        {
            title: 'Luxurious Villa - Dina',
            description: 'An exquisite private residence showcasing bespoke craftsmanship and luxurious finishes, tailored to the client\'s vision of a dream home.',
            image: 'images/s51.jpg', 
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.739493132629!2d47.92723131510019!3d29.319799982151785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9a456e545799%3A0x2b6a52479539154!2sThe%20Avenues!5e0!3m2!1sen!2skw!4v1662635712345!5m2!1sen!2skw'
        }
    ];
// --- Dynamic Copyright Year ---
const copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}
    const slideshowSection = document.getElementById('projects-slideshow');
    if (slideshowSection) {
        const bgSlideshow = document.getElementById('background-slideshow');
        const infoCard = document.getElementById('project-info-card');
        const titleElement = infoCard.querySelector('h3');
        const descElement = infoCard.querySelector('p');
        const dotsContainer = document.getElementById('slideshow-dots-container');
        const mapFrame = document.getElementById('project-map');
        const prevButton = document.getElementById('prev-slide');
        const nextButton = document.getElementById('next-slide');
        const subGalleryContainer = document.getElementById('sub-gallery-container');

        let currentProjectIndex = 0;
        let slideInterval;

        const populateSubGallery = (project) => {
            subGalleryContainer.innerHTML = '';
            if (project.subImages && project.subImages.length > 0) {
                const allImages = [project.image, ...project.subImages];
                
                allImages.forEach((imgSrc, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = imgSrc;
                    thumb.classList.add('sub-gallery-thumb');
                    if (index === 0) thumb.classList.add('active');
                    
                    thumb.addEventListener('click', () => {
                        clearInterval(slideInterval);
                        const activeSlide = bgSlideshow.querySelector('.bg-slide.active');
                        activeSlide.style.backgroundImage = `url('${imgSrc}')`;
                        subGalleryContainer.querySelectorAll('.sub-gallery-thumb').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                    subGalleryContainer.appendChild(thumb);
                });
                subGalleryContainer.classList.remove('hidden');
            } else {
                subGalleryContainer.classList.add('hidden');
            }
        };

        const showProject = (index) => {
            const project = projectsData[index];
            
            //background slides
            const allBgSlides = bgSlideshow.querySelectorAll('.bg-slide');
            allBgSlides.forEach((slide, i) => {
                const isActive = i === index;
                slide.classList.toggle('active', isActive);
                if (isActive) {
                    slide.style.backgroundImage = `url('${project.image}')`;
                }
            });

            // Fade out old text
            infoCard.classList.remove('content-visible');

            // Wait for fade out, then update and fade in
            setTimeout(() => {
                titleElement.textContent = project.title;
                descElement.textContent = project.description;
                mapFrame.src = project.mapUrl;
                infoCard.classList.add('content-visible');
            }, 400); //responds CSS

            // Update dots
            const allDots = dotsContainer.querySelectorAll('.dot');
            allDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            
            populateSubGallery(project);
        };

        const nextProject = () => {
            currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
            showProject(currentProjectIndex);
        };

        const prevProject = () => {
            currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
            showProject(currentProjectIndex);
        };
        
        const startAutoplay = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextProject, 6000);
        };

        const initializeSlideshow = () => {
            bgSlideshow.innerHTML = '';
            dotsContainer.innerHTML = '';

            projectsData.forEach((_, index) => {
                const bgSlide = document.createElement('div');
                bgSlide.className = 'bg-slide';
                bgSlideshow.appendChild(bgSlide);

                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.addEventListener('click', () => {
                    if (currentProjectIndex === index) return;
                    currentProjectIndex = index;
                    showProject(currentProjectIndex);
                    startAutoplay();
                });
                dotsContainer.appendChild(dot);
            });
            
            prevButton.addEventListener('click', () => {
                prevProject();
                startAutoplay();
            });
            nextButton.addEventListener('click', () => {
                nextProject();
                startAutoplay();
            });

            showProject(0);
            startAutoplay();
        };

        initializeSlideshow();
    }

    // --- Project Gallery Filter ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.getAttribute('data-filter');
                projectCards.forEach(card => {
                    card.style.display = (filter === 'all' || card.getAttribute('data-filter') === filter) ? 'block' : 'none';
                });
            });
        });
    }
    // --- ONGOING PROJECTS ---
    const ongoingProjectsSection = document.getElementById('ongoing-projects');
    if (ongoingProjectsSection) {
        const slider = ongoingProjectsSection.querySelector('.ongoing-slider');
        const slides = Array.from(ongoingProjectsSection.querySelectorAll('.ongoing-slide'));
        const nextBtn = ongoingProjectsSection.querySelector('#ongoing-next');
        const prevBtn = ongoingProjectsSection.querySelector('#ongoing-prev');
        const thumbnailsContainer = ongoingProjectsSection.querySelector('.ongoing-thumbnails');
        
        //Info panel
        const titleEl = ongoingProjectsSection.querySelector('#ongoing-title');
        const completionEl = ongoingProjectsSection.querySelector('#ongoing-completion');
        const detailsEl = ongoingProjectsSection.querySelector('#ongoing-details');

        let currentIndex = 0;
        let slideCount = slides.length;
        let autoPlayTimer;

        //thumbnails
        slides.forEach((slide, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'ongoing-thumb';
            thumb.innerHTML = `<img src="${slide.querySelector('img').src}" alt="Thumbnail ${index + 1}">`;
            thumb.addEventListener('click', () => goToSlide(index));
            thumbnailsContainer.appendChild(thumb);
        });
        const thumbnails = Array.from(thumbnailsContainer.querySelectorAll('.ongoing-thumb'));

        function updateSlider(transition = true) {
            //Update info
            const activeSlide = slides[currentIndex];
            const status = activeSlide.dataset.status || '0';
            
            titleEl.textContent = activeSlide.dataset.title || '';
            completionEl.textContent = activeSlide.dataset.completion || '';
            detailsEl.textContent = activeSlide.dataset.details || '';

            slides.forEach((slide, index) => {
                slide.style.transition = transition ? 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out, filter 0.7s ease-in-out' : 'none';
                
                let className = 'hidden-prev';
                if (index === currentIndex) {
                    className = 'active';
                } else if (index === (currentIndex + 1) % slideCount) {
                    className = 'next';
                } else if (index === (currentIndex - 1 + slideCount) % slideCount) {
                    className = 'prev';
                } else if (index === (currentIndex + 2) % slideCount && slideCount > 3) {
                     className = 'hidden-next';
                }

                slide.className = 'ongoing-slide ' + className;
            });
            
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
            resetAutoplay();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlider();
        }

        function startAutoplay() {
            autoPlayTimer = setInterval(nextSlide, 6000);
        }

        function resetAutoplay() {
            clearInterval(autoPlayTimer);
            startAutoplay();
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });

        // Initialize
        updateSlider(false);
        startAutoplay();
    }
const timelineData = {
    1979: [
        { project: "Residential Buildings at Salmiya", client: "Moh'd Masha'an Al- Khodeir.", consultant: "Pan Arab Cons. Engs.", value: "250,000/-" }
    ],
    1980: [
        { project: "Aluminium Factory at Sabhan.", client: "Moh'd Masha'an Al- Khodeir.", consultant: "Eng. E. Talat", value: "70,000/-" },
        { project: "8 Storey Studio Apartments Building", client: "Al-Ahlia Investment Co.", consultant: "K.E.O", value: "420,000/-" },
        { project: "Marble Factory Extention", client: "Gulf Marble Factory", consultant: "Eng. E. Talat", value: "50,000/-" },
        { project: "Villa at Shuwaikh", client: "Khalid Al- Sultan", consultant: "K.E.O", value: "250,000/-" },
        { project: "Villa at Mishreef", client: "Shaha Al- Khalid", consultant: "Abu Al-Aifa Consultant", value: "70,000/-" }
    ],
    1981: [
        { project: "Four Residential Buildings at Yarmouk", client: "Tarik Bader Al- Salem", consultant: "K.E.O", value: "500,000/-" },
        { project: "Commercial Building at Comm. Area 6", client: "Suliman Sayed Ali", consultant: "Jazera Consl.", value: "250,000/-" },
        { project: "Ware Houses & Offices At Ardia-500 M.S", client: "Bader Al- Salem", consultant: "Kandeel Consl.", value: "250,000/-" },
        { project: "Ware Houses & Offices at Ardia-1200 M.S", client: "Faisal Al- Ali & Zuhair Al-Bader", consultant: "Test", value: "650,000/-" },
        { project: "2 villas at Yarmouk", client: "Al- Hajiri", consultant: "Arab Conslt.", value: "400,000/-" },
        { project: "Extention at Shuaiba Paper Products Fact.", client: "Shuaiba Paper Products Co.", consultant: "Test", value: "100,000/-" },
        { project: "Ware Houses & Offices At Ardia.", client: "Arabi Co.", consultant: "Kuwait Conslt.", value: "180,000/-" }
    ],
    1982: [
        { project: "Showrooms, Offices & Storage facilities at Farwaniah Built Up Area 27000 M. S.", client: "Union Reality Co. & Sultan Ben Essa & Sons.", consultant: "K.E.O", value: "1,000,000/-" },
        { project: "Warehouses & Office At Al Ardia, Area 10,000 M.S.", client: "Raad Co. & Al Hajiri Co.", consultant: "Test", value: "520,000/-" },
        { project: "Villa at Dahiya Abdullah Al Salem.", client: "Ahmed Sayed H. Al Gharabally.", consultant: "Jazeera Conslt.", value: "400,000/-" },
        { project: "Villa at Bida", client: "Faisal Al Ali", consultant: "K.E.O", value: "350,000/-" }
    ],
    1983: [
        { project: "Mosque at Bayan", client: "Mrs. Fatima Al Waqayn", consultant: "Arab Aconsl.", value: "550,000/-" },
        { project: "Villa at Mishref", client: "Zuhair Al Bader", consultant: "Archi Centre", value: "250,000/-" },
        { project: "Warehouses & Offices.", client: "Hamad Al Muttawa.", consultant: "Test", value: "140,000/-" },
        { project: "Concrete Additives Factory", client: "Al Ahlia Investment Co.", consultant: "C.E.D", value: "185,000/-" },
        { project: "Restaraunt & Mosque", client: "Ministry of Public Works.", consultant: "M.P.W", value: "220,000/-" },
        { project: "21 Storey Commercial Building At Sharq(Finishing Works)", client: "Salah Al Sultan", consultant: "K.E.O", value: "550,000/-" }
    ],
    1984: [
        { project: "Villa At Shuwaikh", client: "Mr. Abdulla Al-Essa", consultant: "Sami Al-Bader", value: "300,000/-" },
        { project: "Villa at Nuza", client: "Mr. Shakir Medouh", consultant: "Arab Consultants", value: "300,000/-" },
        { project: "Villa At Dahiya", client: "Mrs. Dia Behbehani", consultant: "Kuwait Eng. Center", value: "450,000/-" },
        { project: "4 Residential Buildings At Fintas", client: "Mrs. Munira Al-Nisif", consultant: "Jazera Conslt.", value: "1,150,000/-" },
        { project: "Ware Houses At Ardia", client: "Gulf Insurance Co.", consultant: "Associated Conslt Engineers", value: "1,280,000/-" }
    ],
    1985: [
        { project: "2000 M.S. Warehouses at Ardia", client: "Al-Watan News Paper", consultant: "Test", value: "130,000/-" },
        { project: "Commercial Building At Nugra", client: "Abdul Moshin Al-Sharhan", consultant: "Bobyan", value: "350,000/-" },
        { project: "Warehouses At Al-Ahamadi", client: "Sultan Center", consultant: "K.E.O", value: "130,000/-" }
    ],
    1986: [
        { project: "Sultan Center Salmiya", client: "Sultan Center", consultant: "K.E.O", value: "160,000/-" },
        { project: "2 Residential Buildings At Sharq", client: "Mr. Sulaiman Sayed Ali", consultant: "Arab Consultants", value: "700,000/-" }
    ],
    1987: [
        { project: "Office Complex Sawaber", client: "Dana Real Estate Co.", consultant: "Al-Fulaij Al-Mashour", value: "420,000/-" },
        { project: "Shampoo Factory Sabahan", client: "Moh'd Naser Al - Hajiri Co.", consultant: "Arab Consult.", value: "200,000/-" },
        { project: "Emulsified Bitumen Factory", client: "Al - Ahlia Chemicals", consultant: "Unetec", value: "100,000/-" }
    ],
    1992: [
        { project: "Wara Complex", client: "Wara Co.", consultant: "Jazera Consult.", value: "3,000,000/-" },
        { project: "3 Buildings at Jahra", client: "Mr. Hibishi & Partners", consultant: "Jazera Consult.", value: "410,000/-" },
        { project: "Villa At Finates", client: "Private", consultant: "PACE", value: "640,000/-" }
    ],
    1994: [
        { project: "Villa At Dahiya", client: "Private", consultant: "UNETEC", value: "370,000/-" },
        { project: "Villa At Shuwaikh", client: "Private", consultant: "Jazeera Conslt.", value: "600,000/-" },
        { project: "New Chemical Lab at E.P. Station", client: "M.E.W", consultant: "M.E.W", value: "620,000/-" }
    ],
    1995: [
        { project: "Shikha Sabikah Al-Sabah Mosque in Hawalli", client: "Shikha Sabikah Al-Sabah", consultant: "- TEST - Jazeera Conslt.", value: "1,000,000/-" },
        { project: "Kuwait Municipality", client: "Kuwait Municipality", consultant: "Kuwait Municipality", value: "1,000,000/-" }
    ],
    1996: [
        { project: "2 Residential buildings", client: "Private", consultant: "Kuwaiti Tech.", value: "250,000/-" },
        { project: "Chalets Benider", client: "Private", consultant: "Al-Dirah Consult.", value: "160,000/-" },
        { project: "Villa Dahiya", client: "Private", consultant: "Jassim Hayat Engineering Consultant", value: "230,000/-" },
        { project: "Villa Dahiya", client: "Private", consultant: "Jazera Consult.", value: "435,000/-" }
    ],
    1998: [
        { project: "Villa Dahiya", client: "Private", consultant: "Colette Bittar (Architect)", value: "250,000/-" },
        { project: "Nissan Car Showroom, Al-Rai", client: "Al-Babtain Group", consultant: "Dourwaza Eng.", value: "870,000/-" },
        { project: "Comm. Building Hawalli", client: "Shk. S. Al-Sabah", consultant: "Kuwaiti Tech.", value: "850,000/-" },
        { project: "Sultan Center Farwaniah", client: "Sultan Center", consultant: "K. E. O.", value: "85,000/-" }
    ],
    1999: [
        { project: "Clinics & Residential Complex - Salmiah", client: "Private", consultant: "Kuwaiti Tech.", value: "1,250,000/-" },
        { project: "Al Thuraya Comm. & Resd. Complex at Salmiah", client: "Private", consultant: "Kuwaiti Tech.", value: "2,200,000/-" },
        { project: "Villa Shuwaikh", client: "Private", consultant: "Kuwaiti Tech.", value: "2,000,000/-" },
        { project: "21 Residential Villas", client: "Private", consultant: "K. E. O.", value: "2,250,000/-" }
    ],
    2000: [
        { project: "6 Villas for Al-Ahlia", client: "Al-Ahlia Cont.", consultant: "Dourwaza Eng.", value: "360,000/-" },
        { project: "Shopping Center at Salmiah", client: "Khaled & Khaled Co", consultant: "Kuwaiti Tech.", value: "1,675,000/-" },
        { project: "Chalet at Benider", client: "Private", consultant: "Kuwaiti Tech.", value: "1000,000/-" },
        { project: "Diwaniya at Finatees", client: "Private", consultant: "PACE", value: "315,000/-" },
        { project: "Villa at Shuwaikh", client: "Private", consultant: "Jassim Qabazard", value: "500,000/-" },
        { project: "Villa at Shuwaikh", client: "Private", consultant: "Al-Jazeera Consultant", value: "450,000/-" }
    ],
    2001: [
        { project: "Private Villa at Dahia", client: "Issam Al-Bahar", consultant: "Unetec", value: "500,000/-" },
        { project: "Mosque at Sharq", client: "A. Al Qanaie", consultant: "Kuwaiti Tech.", value: "130,000/-" },
        { project: "Shereen Mosque at Sharq", client: "H of Yousif Behbehani", consultant: "Projacs & Al-Jazeera Consultant", value: "450,000/-" },
        { project: "Commercial Building Salhia", client: "Bader Al-Salem Al Abdul Wahab", consultant: "K.E.O", value: "2,250,000/- (Cost Plus)" },
        { project: "Jaber Al-Ali Mosque at South Surra", client: "Shk. Sabika Duaij Al-Sabah", consultant: "Arab Consultants", value: "430,000/-" },
        { project: "Showrooms & Stores Shuwaikh", client: "Mustafa Al-Sultan", consultant: "K.E.O", value: "325,000/- (Cost Plus)" }
    ],
    2002: [
        { project: "Residential Building at Salmiah", client: "Shk. Sabika Duaij Al-Sabah", consultant: "Dourwaza", value: "1,260,000/-" },
        { project: "Villa Moda - F.T.Z (Fashion Super Store) Shuwaikh", client: "Shk. M.Al-Sabah", consultant: "Gulf Consults", value: "3,300,000/-" }
    ],
    2003: [
        { project: "Commercial Shops at Surra", client: "Shk. Sabika Duaij Al-Sabah", consultant: "Dourwaza Consultant", value: "165,000/-" },
        { project: "Compounds Villas at Abul Hasaniah", client: "Dr. J. Al Essa", consultant: "Dourwaza Consultants", value: "550,000/-" },
        { project: "Porsche Showroom Cars Al Rai", client: "Behbehani Motor Cars Co.", consultant: "Saied Break Consultants", value: "650,000/-" },
        { project: "3 Private Chalets", client: "Dr. J. Al-Essa Mr. A. Al-Essa", consultant: "Al Banai Consult. Dourwaza Consult.", value: "250,000/-" }
    ],
    2004: [
        { project: "Renovation to Ward 4 Amiri Hospital", client: "Al-Ahlia Invest.", consultant: "Dourwaza Consult.", value: "125,000/-" },
        { project: "Residential Building at Salmiah", client: "Al - Khalid Int'l Group", consultant: "Nizar Al Anjari", value: "600,000/-" },
        { project: "Private Villa at Shuwaikh", client: "Dr. A. Sultan", consultant: "K.E.O", value: "450,000/-" }
    ],
    2005: [
        { project: "Private Villas at Finatees", client: "Mr. A. Al Mulla", consultant: "Al Zamami Consult.", value: "1,250,000/-" },
        { project: "Rakan Tower 32 Storeys at Fahed Al Salem Street", client: "Bader Al Salem Al Abdul Wahab & Sons", consultant: "K. E. O", value: "4,270,000/-" }
    ],
    2006: [
        { project: "Residential Building at Rumaithiya", client: "Al Khalid Int'l. Group", consultant: "Dar Nizar Al Anjari Consult.", value: "1,600,000/-" }
    ],
    2007: [
        { project: "Residential Bldg. at Salmiah", client: "Skh. Badria D. S. Al Sabah", consultant: "Dourwaza Eng.", value: "700,000/-" },
        { project: "School at Surra", client: "Child Evaluation & Teaching Center", consultant: "K. E. O.", value: "1,800,000/-" },
        { project: "Mubarak Tower at Mubarakiah", client: "Idarat Real Estate Co.", consultant: "Option-one", value: "2,000,000/-" },
        { project: "Aviation Complex & Engineering Building for Australian College", client: "AMAS Group Co.", consultant: "Dar Nizar Al Anjari Consult.", value: "1,500,000/-" }
    ],
    2008: [
        { project: "Shaikha Tower Salmiah", client: "Shk. S. Al Homaizi", consultant: "Dar Nizar Al Anjari Consultant", value: "2,500,000/-" },
        { project: "Al Safat Center - Qibla Fahed al Salem Str.", client: "Al Safat Real Estate", consultant: "Dar Nizar Al Anjari Consultant", value: "5,500,000/-" },
        { project: "American College for MEA - Fintas", client: "Al Arabiya Educt-ional Enterprises", consultant: "Dar Nizar Al Anjari Consultant", value: "2,700,000/-" },
        { project: "Residential Building Salmiah", client: "Al Khalid Int'l. Group", consultant: "Dar Nizar Al Anjari Consultant", value: "850,000/-" },
        { project: "Nadia Tower Salmiah", client: "M Al Sultan", consultant: "K. E. O Int'l. Consult.", value: "2,500,000/-" }
    ],
    2009: [
        { project: "Private Villa Bid'a", client: "K . AL- Sultan", consultant: "Option one", value: "3,600,000/-" },
        { project: "6 Residential Villas Yarmouk", client: "Mrs. F. AL-Masha'an", consultant: "AGI Architects", value: "1,250,000/-" },
        { project: "3 Residential Bldgs. Salmiya", client: "Al Khalid Inr'l. Group", consultant: "A. Al Fulaij & A. Mashhoor", value: "1,900,000/-" },
        { project: "Residential Building Salmiah", client: "Al Sharhan Group Co.", consultant: "Dar Nizar Al-Anjari Consultant", value: "512,000/-" }
    ],
    2010: [
        { project: "Hawalli Mall Hawalli - Beirut Street", client: "Al-Safat Investment", consultant: "Dar Nizar Al-Anjari", value: "13,000,000/-" }
    ],
    2011: [
        { project: "Two Private Villas Qadesiah", client: "Private", consultant: "- M. Besharah & Mashoor Conslt. - J. Qabazard Eng.", value: "350,000/-" },
        { project: "Mosque at Sabahia", client: "Shk. Salman Duaij Al Sabah", consultant: "Al-Alian Consultant", value: "1,100,000/-" },
        { project: "Luxury Villa at Shuwaikh", client: "Mr. Mustafa Al- Sultan", consultant: "K.E.O Int'l. Consult.", value: "2,000,000/-" }
    ],
    2012: [
        { project: "Residential Building Hawalli", client: "Al Khalid Inr'l. Group", consultant: "M. Besharah & Mashoor Conslt.", value: "500,000/-" }
    ],
    2013: [
        { project: "2 Private Villas Surra", client: "A. Al Faraj & Bebi Al Shamalli", consultant: "Dar Saoud Al Mhanna Eng.", value: "1,800,000/-" },
        { project: "Private Villa Mishref", client: "A . Behbehani", consultant: "Saied Break Consultant", value: "1,250,000/-" },
        { project: "Kidney Dialysis Center Shuwaikh", client: "Private", consultant: "Al Arabi Eng. Office", value: "1,260,000/-" },
        { project: "New Specialty Eye Center - Shaab", client: "Dr. K. Al Sabtti", consultant: "Gulf Consultant", value: "2,500,000/-" }
    ],
    2014: [
        { project: "Resturant Complex (Levels)at Mahboula", client: "A. Mubaraki", consultant: "Amal Al Sarraf Consultant", value: "1,500,000/-" },
        { project: "Resturant Zahra Complex- Salmaih", client: "Sultan Real Estate", consultant: "KEO", value: "230,000/-" }
    ],
    2015: [
        { project: "Resturant Complex (Light)at Mahboula", client: "Commercial Real Estate Co.", consultant: "Kuwait Eng. Burea", value: "1,750,000/-" },
        { project: "Private Villa Al-Shuwaikh", client: "Ibrahim Al-Anjari", consultant: "Ghaida Ghassa Al Khaled Eng. Consultant", value: "1,250,000/-" },
        { project: "Private Villa Al Shuwaikh", client: "Talib Al-Anjari", consultant: "Al Jazera Consultants", value: "1,500,000/-" },
        { project: "Two Residential Bldg., at Hawalli", client: "K. Al-Khalid", consultant: "Beshara Conslt. Engineers", value: "1,285,000/-" },
        { project: "Private Villa Shamiah", client: "Mrs. Moodi Al Marzouq", consultant: "Sami Al-Bassam Engineering", value: "1,250,000/-" },
        { project: "Residential Bldg., Salmiya", client: "Al Falai", consultant: "Besharah Consult. Engineers", value: "600,000/- (Cost Plus)" }
    ],
    2016: [
        { project: "Ghanima Commercial Center Shuwaikh", client: "Fahad Al Marzouk Printing & Publishing Establishment", consultant: "Dourwaza Engineering", value: "2,680,000/-" }
    ],
    2017: [
        { project: "Private Chalets Jeli'a", client: "Mr. Wael Abdul Ghafoor", consultant: "Besharah Consult., Engineers", value: "2,000,000/-" },
        { project: "Al Sayer Office & Stores Ardiya", client: "Monammed naser Al Sayer & Sons Company", consultant: "Dar Al Bannai Engineering", value: "11,000,000/-" }
    ],
    2018: [
        { project: "Al Khalid Residential Tower- Hawalli", client: "Al Khalid Int'l Group", consultant: "Besharah Consult., Engineers", value: "6,000,000/-" },
        { project: "Al Mutawa Restaurant Complex Phase -I & II Abu Al Hasanina", client: "Mr. Ahmed Abdul Aziz Al Mutawa", consultant: "Kuwait Engineering Bureau", value: "1,850,000/-" },
        { project: "Homoud Al Khaled Building Al-Manqaf", client: "Homoud Al-Ziad Al-Khaled", consultant: "Alpha Architects", value: "1,400,000/-" }
    ],
    2019: [
        { project: "Private Villa At Surra", client: "Mr. Wael Abdul Ghafoor", consultant: "Maryam Beshara Consulting Office", value: "1,550,000/-" },
        { project: "Alghanim Showroom Fahaheel", client: "Yusuf Ahmed Alghanim & Sons Co.", consultant: "Option One International", value: "7,200,000/-" },
        { project: "Private Villa At-Shuwaikh", client: "Mr. Talal Al Mulla", consultant: "AGI Architects", value: "2,500,000/-" }
    ],
    2020: [
        { project: "Private Villa Dahiyat Abdulla Al-Salem", client: "Mr. Hussam Marafi", consultant: "Maryam Beshara Consulting Office", value: "554,000/-" }
    ],
    2021: [
        { project: "Wafra Seef Commercial & Entertainment Bldg.", client: "The Public Institution For Social Security", consultant: "Al Habshi Engineering Consultants Office", value: "16,000,000/-" }
    ],
    2022: [
        { project: "Boubyan Bank New Data Center Ardiya", client: "Boubyan National Company", consultant: "Gulf Engineering Consultants", value: "4,200,000/-" }
    ],
    2023: [
        { project: "Private Villa Dahiyat Abdulla Al-Salem", client: "Mr. Nasser Al-Jallal", consultant: "Abdulla Al-Ajmi Engineering Consultants", value: "1,500,000/-" },
        { project: "Arcadia Villas Dahiyat Abdulla Al-Salem", client: "M Real Estate Company", consultant: "Ayed Al-Hajri Engineering Consultatns", value: "4,000,000/-" },
        { project: "The BLOQ Project Qurain Markets Phase I & Phase II", client: "M Real Estate Company", consultant: "DAR MIMAR Consultants", value: "5,260,000/-" },
        { project: "Al Sirhan Residential Development", client: "Messila", consultant: "AGI Architects", value: "3,500,000/-" },
        { project: "Shamael Medical Center Phase I", client: "Sha'ab", consultant: "DAR MIMAR", value: "3,500,000/-" }
    ],
    2025: [
        { project: "Private Villa Dahiyat Abdullah al-Salim", client: "Mrs. Sara Boodai", consultant: "AlHumaihi Architects", value: "1,500,000/-" }
    ]
};

    // --- Interactive Timeline ---
    const timelineTrack = document.querySelector('.timeline-track');
    if (timelineTrack) {
        // Dynamically create and inject timeline items
        for (const year in timelineData) {
            const projects = timelineData[year];
            let projectsHtml = '<div class="project-list">';
            projects.forEach(p => {
                projectsHtml += `
                    <div class="project-item">
                        <h4>${p.project}</h4>
                        <p><strong>Client:</strong> ${p.client}</p>
                        <p><strong>Consultant:</strong> ${p.consultant}</p>
                        <p><strong>Value (K.D):</strong> ${p.value}</p>
                    </div>`;
            });
            projectsHtml += '</div>';

            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-year">${year}</div>
                <div class="timeline-content">${projectsHtml}</div>`;
            
            timelineTrack.appendChild(timelineItem);
        }

        // Scrolling and Navigation Logic
        const timelineContainer = document.querySelector('.timeline-container');
        const prevBtn = document.querySelector('.timeline-nav-btn.prev');
        const nextBtn = document.querySelector('.timeline-nav-btn.next');
        
        if (timelineContainer && prevBtn && nextBtn) {
            let isDown = false;
            let startX;
            let scrollLeft;

            timelineContainer.addEventListener('mousedown', (e) => {
                isDown = true;
                timelineContainer.style.cursor = 'grabbing';
                startX = e.pageX - timelineContainer.offsetLeft;
                scrollLeft = timelineContainer.scrollLeft;
            });
            timelineContainer.addEventListener('mouseleave', () => { isDown = false; timelineContainer.style.cursor = 'grab'; });
            timelineContainer.addEventListener('mouseup', () => { isDown = false; timelineContainer.style.cursor = 'grab'; });
            timelineContainer.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - timelineContainer.offsetLeft;
                const walk = (x - startX) * 2;
                timelineContainer.scrollLeft = scrollLeft - walk;
            });

            nextBtn.addEventListener('click', () => {
                timelineContainer.scrollBy({ left: 350, behavior: 'smooth' });
            });
            prevBtn.addEventListener('click', () => {
                timelineContainer.scrollBy({ left: -350, behavior: 'smooth' });
            });
        }
    }
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            const url = window.location.href + '#' + section; // URL to be shared
            const title = document.title;

            const shareModal = document.createElement('div');
            shareModal.classList.add('share-modal');

            const modalContent = `
                <div class="share-modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Share this section</h3>
                    <div class="share-links">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" class="share-link facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
                        <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}" target="_blank" class="share-link twitter"><i class="fab fa-twitter"></i> Twitter</a>
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}" target="_blank" class="share-link linkedin"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
                        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}" target="_blank" class="share-link whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            `;

            shareModal.innerHTML = modalContent;
            document.body.appendChild(shareModal);

            const closeModal = shareModal.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(shareModal);
            });

            shareModal.addEventListener('click', function(event) {
                if (event.target === shareModal) {
                    document.body.removeChild(shareModal);
                }
            });
        });
    });

    //TESTIMONIALS SLIDER---
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const slides = document.querySelectorAll('.testimonial-slide');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        });
    }
    //contact form handler
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default browser form submission
            event.preventDefault();

            // *** FIX IS HERE ***
            // Create a FormData object from event.target, which is the form itself
            const formData = new FormData(event.target);
            
            // Convert FormData to a plain object
            const data = Object.fromEntries(formData.entries());

            // Show a temporary "sending" message
            if (formMessage) {
                formMessage.textContent = 'Sending...';
                formMessage.className = 'form-message'; // Reset classes
                formMessage.classList.add('success'); // Use success style for sending message
            }

            // Send the data to the backend API
            fetch('/api/contact/general', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(result => {
                if (formMessage) {
                    // Display the server's message
                    formMessage.textContent = result.message;

                    if (result.success) {
                        // If successful, show success message and clear the form
                        formMessage.className = 'form-message success';
                        event.target.reset(); 
                    } else {
                        // show error message
                        formMessage.className = 'form-message error';
                    }
                }
            })
            .catch(error => {
                // Handle network errors
                console.error('Error:', error);
                if (formMessage) {
                    formMessage.textContent = 'An error occurred. Please try again later.';
                    formMessage.className = 'form-message error';
                }
            });
        });
    }
});