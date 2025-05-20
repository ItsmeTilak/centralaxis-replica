'use client';

/**
 * Animation utilities for CentralAxis website
 * Uses IntersectionObserver to animate elements on scroll
 * And setup other animations throughout the site
 */

export const initAnimations = () => {
  // Add scroll animations for elements with data-animate attribute
  animateOnScroll();
  
  // Initialize logo slider if it exists
  initLogoSlider();
  
  // Initialize header scroll behavior
  initHeaderScroll();
};

/**
 * Animate elements when they enter the viewport
 */
const animateOnScroll = () => {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const animation = el.dataset.animate || 'fade-up';
        const delay = el.dataset.delay || 0;
        
        setTimeout(() => {
          el.classList.add('animated', animation);
          el.style.opacity = 1;
          
          // Stop observing after animation is added
          observer.unobserve(el);
        }, delay);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  animatedElements.forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });
};

/**
 * Initialize automatic logo slider
 */
const initLogoSlider = () => {
  const logoSlider = document.querySelector('.logo-slider');
  if (!logoSlider) return;
  
  // Clone the slider content to create infinite loop effect
  const sliderContent = logoSlider.querySelector('.logo-slider-content');
  if (!sliderContent) return;
  
  // Add automatic animation class
  sliderContent.classList.add('animate-marquee');
  
  // Clone the content for seamless looping
  const clone = sliderContent.cloneNode(true);
  clone.classList.add('logo-slider-content-clone', 'animate-marquee2');
  clone.setAttribute('aria-hidden', 'true');
  
  logoSlider.appendChild(clone);
};

/**
 * Initialize header scroll behavior
 * Add class to header when scrolling down
 */
const initHeaderScroll = () => {
  const header = document.querySelector('header');
  if (!header) return;
  
  let lastScrollY = window.scrollY;
  
  const onScroll = () => {
    const scrollY = window.scrollY;
    
    // Add class when scrolled down
    if (scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    lastScrollY = scrollY;
  };
  
  // Initial check
  onScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', onScroll, { passive: true });
};

/**
 * Create blob animation for hero section
 * @param {HTMLElement} container - The container element
 */
export const createBlobAnimation = (container) => {
  if (!container) return;
  
  const blob = document.createElement('div');
  blob.classList.add('gradient-blob');
  
  // Random starting position
  const startX = Math.random() * 80;
  const startY = Math.random() * 80;
  
  blob.style.left = `${startX}%`;
  blob.style.top = `${startY}%`;
  
  container.appendChild(blob);
  
  // Animate the blob with random movement
  let x = startX;
  let y = startY;
  let vx = Math.random() * 0.2 - 0.1;
  let vy = Math.random() * 0.2 - 0.1;
  
  const animate = () => {
    x += vx;
    y += vy;
    
    // Bounce off walls
    if (x < 0 || x > 80) vx = -vx;
    if (y < 0 || y > 80) vy = -vy;
    
    // Add some randomness to movement
    vx += (Math.random() - 0.5) * 0.02;
    vy += (Math.random() - 0.5) * 0.02;
    
    // Limit velocity
    vx = Math.max(Math.min(vx, 0.2), -0.2);
    vy = Math.max(Math.min(vy, 0.2), -0.2);
    
    blob.style.left = `${x}%`;
    blob.style.top = `${y}%`;
    
    requestAnimationFrame(animate);
  };
  
  animate();
  
  return blob;
};