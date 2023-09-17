const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navItems = document.querySelectorAll('ul li a');
const sections = document.querySelectorAll('.section');

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    sections.forEach(section => section.classList.add('dark-mode'));
} else {
    sections.forEach(section => section.classList.add('light-mode'));
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        sections.forEach(section => {
            section.classList.remove('light-mode');
            section.classList.add('dark-mode');
        });
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        sections.forEach(section => {
            section.classList.remove('dark-mode');
            section.classList.add('light-mode');
        });
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Close the toggle when a nav item is clicked (for small screens)
navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        const clickToggle = document.getElementById('click');
        if (window.innerWidth < 600) {
            clickToggle.checked = false;
        }

        const targetSectionId = navItem.getAttribute('href').substring(1);
        scrollToSection(targetSectionId);
    });
});
