// Dark Mode Toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

// Check if the dark mode is already in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('bg-gray-900');
    body.classList.add('text-white');
} else {
    body.classList.remove('bg-gray-900');
    body.classList.remove('text-white');
}

// Toggle Dark Mode on button click
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('bg-gray-900')) {
        body.classList.remove('bg-gray-900');
        body.classList.remove('text-white');
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        body.classList.add('bg-gray-900');
        body.classList.add('text-white');
        localStorage.setItem('dark-mode', 'enabled');
    }
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");

// Show or hide scroll-to-top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to top on button click
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});