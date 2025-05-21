

document.addEventListener('DOMContentLoaded', function() {
    // get navigation elements
    const toggle = document.querySelector('.navbar-toggle');
    const links = document.querySelector('.navbar-links');
    
    // toggle mobile menu when NAV button is clicked
    toggle.addEventListener('click', function() {
      links.classList.toggle('active');
    });
    
    // close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 700) {
          links.classList.remove('active');
        }
      });
    });
    
    // close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
      const isClickInsideNavbar = toggle.contains(event.target) || 
                                 links.contains(event.target);
      
      if (!isClickInsideNavbar && links.classList.contains('active')) {
        links.classList.remove('active');
      }
    });
  });

  // thank you message for booking
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.booking-form form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent actual form submission
      alert('Thank you for your inquiry, we will be in touch soon. See you in Taniti!');
      form.reset(); // Reset the form after submission
    });
  });
