// 1. Scroll-Reveal Animation Function
// जब क्लाइंट पेज को नीचे स्क्रॉल करेगा, तब सेक्शन्स एनिमेट होकर स्क्रीन पर आएंगे।
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150; // कितनी दूरी पर एनीमेशन एक्टिव होना चाहिए

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', revealSections);

// रन करने के लिए शुरुआती कॉल (अगर कोई सेक्शन पहले से ही स्क्रीन पर आधा दिख रहा हो)
revealSections();


// 2. Navbar Background Change on Scroll
// जैसे ही क्लाइंट पेज स्क्रॉल करेगा, हेडर थोड़ा और गहरा और सॉलिड हो जाएगा।
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        header.style.background = 'rgba(15, 17, 21, 0.95)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(15, 17, 21, 0.85)';
    }
});