// RAHBAR Website JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Active Tab Highlighting on Scroll (Scrollspy)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSection}`) {
        item.classList.add('active');
      }
    });
  });

  // 3. FAQ Accordion Toggle
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const faqContent = faqItem.querySelector('.faq-content');

      // Close other open accordions for a cleaner accordion behavior
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
          const content = item.querySelector('.faq-content');
          if (content) content.classList.add('hidden');
        }
      });

      faqItem.classList.toggle('active');
      faqContent.classList.toggle('hidden');
    });
  });

  // 4. Contact & Email Notification Handler for filintamalik9057@gmail.com
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name') ? document.getElementById('form-name').value : 'Inquirer';
      const email = document.getElementById('form-email') ? document.getElementById('form-email').value : '';
      const phone = document.getElementById('form-phone') ? document.getElementById('form-phone').value : 'N/A';
      const org = document.getElementById('form-org') ? document.getElementById('form-org').value : 'N/A';
      const msg = document.getElementById('form-msg') ? document.getElementById('form-msg').value : '';

      const mailtoSubject = encodeURIComponent(`RAHBAR Demo Inquiry from ${name}`);
      const mailtoBody = encodeURIComponent(
        `Full Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Organization: ${org}\n\n` +
        `Message:\n${msg}`
      );

      // Open email client with prefilled details directly to filintamalik9057@gmail.com
      window.location.href = `mailto:filintamalik9057@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Display success message
      formSuccess.classList.remove('hidden');
      contactForm.reset();
    });
  }
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}