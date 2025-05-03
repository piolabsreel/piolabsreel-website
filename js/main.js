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

links.forEach(link => {
    link.addEventListener('click', function() {
        menuBtn.checked = false; // Close the menu
    });
});

document.addEventListener('click', function(event) {
    if (!menuBtn.contains(event.target) && !document.querySelector('.menu-icon').contains(event.target)) {
        menuBtn.checked = false; // Close the menu
    }
});



// portfolio func
let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        let intervalId;

        function showItem(index) {
            document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        }

        function nextItem() {
            showItem(currentIndex);
        }

        function prevItem() {
            showItem(currentIndex);
        }

        function startCarousel() {
            intervalId = setInterval(nextItem, 10000);
        }

        function stopCarousel() {
            clearInterval(intervalId);
        }

        document.getElementById('nextBtn').addEventListener('click', nextItem);
        document.getElementById('prevBtn').addEventListener('click', prevItem);

        function showModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('modal').style.display = 'flex';
            stopCarousel(); 
        }

      
        function hideModal() {
            document.getElementById('modal').style.display = 'none';
            startCarousel();
        }

        
        items.forEach(item => {
            const img = item.querySelector('img');
            img.addEventListener('click', () => showModal(img.src));
        });

        
        document.getElementById('closeBtn').addEventListener('click', hideModal);

        
        startCarousel();

       
        showItem(currentIndex);

       
        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', () => {
            if (!document.getElementById('modal').style.display) {
                startCarousel();
            }
        });