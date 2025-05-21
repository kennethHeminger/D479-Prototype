document.addEventListener('DOMContentLoaded', function() {
    // Nav button
    const toggle = document.querySelector('.navbar-toggle');
    const links = document.querySelector('.navbar-links');

    // Check if elements exist
    if (!toggle || !links) {
        console.error('Could not find .navbar-toggle or .navbar-links');
    } else {
        function toggleMenu() {
            links.classList.toggle('active');
        }

        toggle.addEventListener('click', toggleMenu);
        toggle.addEventListener('touchend', toggleMenu);

        const navLinks = document.querySelectorAll('.navbar-links a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 700) {
                    links.classList.remove('active');
                }
            });
            link.addEventListener('touchend', function() {
                if (window.innerWidth <= 700) {
                    links.classList.remove('active');
                }
            });
        });

        // Close mobile menu when clicking outside of it
        document.addEventListener('click', function(event) {
            const isClickInsideNavbar = toggle.contains(event.target) || 
                                       links.contains(event.target);
            if (!isClickInsideNavbar && links.classList.contains('active')) {
                links.classList.remove('active');
            }
        });
    }

    // Thank you message for booking
    const form = document.querySelector('.booking-form form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            alert('Thank you for your inquiry, we will be in touch soon. See you in Taniti!');
            form.reset(); // Reset the form after submission
        });
    } else {
        console.log('No booking form found.');
    }
});
