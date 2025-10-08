document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    function toggleDarkMode() {
        const isDarkMode = body.classList.toggle('dark-mode');
        modeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
        
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Toggle Light Mode';
    } else {
        body.classList.remove('dark-mode');
        modeToggle.textContent = 'Toggle Dark Mode';
    }

    modeToggle.addEventListener('click', toggleDarkMode);

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    function toggleMobileNav() {
        mobileNav.classList.toggle('open');
    }

    hamburgerBtn.addEventListener('click', toggleMobileNav);
    
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('open')) {
                toggleMobileNav();
            }
        });
    });
});