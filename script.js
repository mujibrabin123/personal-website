// Smooth scrolling for navigation links
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on smaller screens
const btnTalk = document.querySelector('.btn-talk');
const navigation = document.querySelector('.navigation');

btnTalk.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Simple animation on scroll
window.addEventListener('scroll', () => {
    const content = document.querySelector('.content');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
        content.classList.add('active');
    }
});
