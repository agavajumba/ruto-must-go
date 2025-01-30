document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menu = document.getElementById('menu');
    const navList = document.querySelector('.navbar-section2 ul');
    
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
      navList.classList.toggle('active');
    });
  
    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar-section2') && !e.target.matches('#menu')) {
        navList.classList.remove('active');
      }
    });
  
    // Smooth scroll polyfill
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });