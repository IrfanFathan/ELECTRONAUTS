// Mobile toggle button 
function toggleNav() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('hidden');
  }
 
  // Scroll animation
  AOS.init({
    duration: 1000, // Animation duration
    once: true});


    
  
AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const teamSection = document.getElementById('teamSection');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          teamSection.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(teamSection);
  });