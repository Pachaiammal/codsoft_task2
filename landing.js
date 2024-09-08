// This script will handle any interactions or dynamic behaviors on the page
let currentIndex = 0;
const images = [
    "https://cdn1.smartprix.com/rx-iPz0s9mdO-w420-h420/vivo-s19.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5P7KA3Vc-mfGEvDp4rB3ZRWDZ8XW2Q-VFw&s",
    // Add more image URLs here
];

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("currentImage").src = images[currentIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Example: Buy Now button functionality
    document.getElementById('buy-now-button').addEventListener('click', function() {
        alert('Thank you for your purchase!');
    });
});
