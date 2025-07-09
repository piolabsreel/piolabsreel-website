document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


    //nav func

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
            const offset = -index * 100;
            document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        }

        function nextItem() {
            currentIndex = (currentIndex + 1) % totalItems; 
            showItem(currentIndex);
        }

        function prevItem() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
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


        //quiz box begin 

        function handleServiceSelection() {
      const selected = document.getElementById("servicePurposeSelect").value;
      const result = document.getElementById("serviceQuizResult");

      if (selected === "create") {
        result.innerHTML = "Great! Explore our <a href='/create'>Creative Services</a> for talents and artists.";
      } else if (selected === "embed") {
        result.innerHTML = "Awesome! See how your brand can <a href='/embed'>Embed in our content</a>.";
      } else if (selected === "sell") {
        result.innerHTML = "Perfect! Check out our <a href='/sell'>Ad & Commercial Video Production</a> for businesses.";
      } else if (selected === "customer") {
        result.innerHTML = "Alright! Use <a href='#contact-scroll2'>Contact Form</a> | info@piolabsreel.com.";
      } else {
        result.innerHTML = "Please choose an option above.";
      }
    }

    //quiz box end

//expanding package div

const cards = [
    {
        element: document.getElementById('card1'),
        titleElement: document.getElementById('title1'),
        originalTitle: "Title One",
        newTitle: "New Title One",
        newImage: 'https://via.placeholder.com/300/4a90e2/ffffff?text=New+Image+One'
    },
    {
        element: document.getElementById('card2'),
        titleElement: document.getElementById('title2'),
        originalTitle: "Title Two",
        newTitle: "New Title Two",
        newImage: 'https://via.placeholder.com/300/0056b3/ffffff?text=New+Image+Two'
    },
    {
        element: document.getElementById('card3'),
        titleElement: document.getElementById('title3'),
        originalTitle: "Title Three",
        newTitle: "New Title Three",
        newImage: 'https://via.placeholder.com/300/007bff/ffffff?text=New+Image+Three'
    },
    {
        element: document.getElementById('card4'),
        titleElement: document.getElementById('title4'),
        originalTitle: "Title Four",
        newTitle: "New Title Four",
        newImage: 'https://via.placeholder.com/300/80bfff/ffffff?text=New+Image+Four'
    },
    {
        element: document.getElementById('card5'),
        titleElement: document.getElementById('title5'),
        originalTitle: "Title Five",
        newTitle: "New Title Five",
        newImage: 'https://via.placeholder.com/300/99ccff/ffffff?text=New+Image+Five'
    },
    {
        element: document.getElementById('card6'),
        titleElement: document.getElementById('title6'),
        originalTitle: "Title Six",
        newTitle: "New Title Six",
        newImage: 'https://via.placeholder.com/300/b3d1ff/ffffff?text=New+Image+Six'
    }
];

cards.forEach(card => {
    card.element.addEventListener('click', (event) => {
        // Close all other cards
        cards.forEach(c => {
            if (c.element !== card.element && c.element.classList.contains('expanded')) {
                c.titleElement.textContent = c.originalTitle; // Revert title
                c.element.classList.remove('expanded');
                c.element.style.backgroundImage = "url('https://via.placeholder.com/300')"; // Reset background image
            }
        });

        // Toggle the clicked card
        if (!card.element.classList.contains('expanded') || event.target.closest('.arrow')) {
            if (!card.element.classList.contains('expanded')) {
                card.titleElement.textContent = card.newTitle; // Change title when expanded
                card.element.style.backgroundImage = `url(${card.newImage})`; // Change background image
            } else {
                card.titleElement.textContent = card.originalTitle; // Revert title when collapsed
                card.element.style.backgroundImage = "url('https://via.placeholder.com/300')"; // Reset background image
            }
            card.element.classList.toggle('expanded');
        }
    });
});