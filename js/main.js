document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    
});

document.addEventListener('click', function(event) {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Check if the click was outside the menu and the button
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menuBtn.checked = false; // Close the menu
    }
});

// Close the menu when a link is clicked
const links = document.querySelectorAll('.menu li a');
links.forEach(link => {
    link.addEventListener('click', function() {
        const menuBtn = document.getElementById('menu-btn');
        menuBtn.checked = false; // Close the menu
    });
});