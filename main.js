function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'ar', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
}

// --- Handle preloader ---
// We use the 'load' event to ensure all content, including images and videos, is fully loaded.
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Hide the preloader. A fade-out effect would be smoother if you add CSS transitions.
        preloader.style.display = 'none';
    }
});