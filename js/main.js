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