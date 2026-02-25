/* ============================================
   NEXORA - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initNavigation();
  initTypewriter();
  initScrollAnimations();
  initFAQ();
  initScrollProgress();
});

/* ============================================
   Navigation
   ============================================ */
function initNavigation() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // Scroll effect for navbar
  if (nav) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   Typewriter Effect
   ============================================ */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;
  
  const words = ['BUSINESSES', 'INSTITUTIONS', 'STARTUPS', 'ENTERPRISES'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Deleting
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      // Typing
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }
    
    // Word complete
    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  // Start typewriter
  setTimeout(type, 1000);
}

/* ============================================
   Scroll Animations
   ============================================ */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (!fadeElements.length) return;
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(el => observer.observe(el));
}

/* ============================================
   FAQ Accordion
   ============================================ */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Check if this item is already active
      const isActive = item.classList.contains('active');
      
      // Close all items (optional - for single-open behavior)
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ============================================
   Scroll Progress Bar
   ============================================ */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

/* ============================================
   Form Validation (for contact page)
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Please enter your name');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
      errors.push('Please enter a valid email');
    }
    
    if (!data.message || data.message.trim().length < 10) {
      errors.push('Please enter a message (at least 10 characters)');
    }
    
    if (errors.length > 0) {
      showFormMessage(errors.join('<br>'), 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      showFormMessage('Thank you! We\'ll get back to you within 24 hours.', 'success');
      form.reset();
    } catch (error) {
      showFormMessage('Something went wrong. Please try again.', 'error');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
  // Remove existing message
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) existingMessage.remove();
  
  // Create new message
  const messageEl = document.createElement('div');
  messageEl.className = `form-message form-message-${type}`;
  messageEl.innerHTML = message;
  
  const form = document.getElementById('contactForm');
  form.appendChild(messageEl);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    messageEl.remove();
  }, 5000);
}

/* ============================================
   Utility: Throttle Function
   ============================================ */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============================================
   Initialize contact form if on contact page
   ============================================ */
if (document.getElementById('contactForm')) {
  initContactForm();
}
