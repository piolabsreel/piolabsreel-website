document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    
});

const menuBtn = document.getElementById('menu-btn');
const links = document.querySelectorAll('.menu li a');

// Close the menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', function() {
        menuBtn.checked = false; // Close the menu
    });
});

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    if (!menuBtn.contains(event.target) && !document.querySelector('.menu-icon').contains(event.target)) {
        menuBtn.checked = false; // Close the menu
    }
});



let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let intervalId;

function showItem(index) {
    const offset = -index * 100; // Calculate offset to show the current item
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems; // Loop back to first item
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to last item
    showItem(currentIndex);
}

function startCarousel() {
    intervalId = setInterval(nextItem, 5000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

document.getElementById('nextBtn').addEventListener('click', nextItem);
document.getElementById('prevBtn').addEventListener('click', prevItem);

// Auto transition every 5 seconds
startCarousel();

// Show the first item initially
showItem(currentIndex);

// Pause the carousel on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);