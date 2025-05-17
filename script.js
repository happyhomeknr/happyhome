// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Navbar hide/show on scroll
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove('nav-hidden');
    return;
  }

  if (currentScroll > lastScroll && !navbar.classList.contains('nav-hidden')) {
    navbar.classList.add('nav-hidden');
  } else if (currentScroll < lastScroll && navbar.classList.contains('nav-hidden')) {
    navbar.classList.remove('nav-hidden');
  }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      if (entry.target.classList.contains('section-title')) {
        entry.target.style.transform = 'translateY(0) scale(1)';
      }
    }
  });
}, observerOptions);

// Apply fade-in animation to elements
document.querySelectorAll('.project-card, .contact-card, .video-card, .section-title').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  if (element.classList.contains('section-title')) {
    element.style.transform = 'translateY(20px) scale(0.95)';
  }
  observer.observe(element);
});

// Stagger animation for project cards
document.querySelectorAll('.project-card, .video-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.5;

  hero.style.backgroundPositionY = `${rate}px`;
});

// Redirect to art gallery on button click
const artGalleryButton = document.getElementById('GoToProjectGallery');
if (artGalleryButton) {
  artGalleryButton.addEventListener('click', function () {
    // Redirect to the art gallery page (replace with your actual URL)
    window.location.href = 'art-gallery.html';
  });
}

// Debugging message
console.log("Homepage script connected!");
