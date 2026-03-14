// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and major elements (excluding hero)
document.querySelectorAll('section:not(.hero), .feature-card, .service-card, .step, .testimonial-card, .faq-item, .project-card, .process-wrapper').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
const form = document.querySelector('.hero-form form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const service = form.querySelector('select').value;
        const phone = form.querySelector('input[type="tel"]').value;

        if (!service || service === 'Select Service') {
            alert('Please select a service');
            return;
        }

        if (!phone) {
            alert('Please enter your phone number');
            return;
        }

        // Success message
        alert('Thank you! We will contact you shortly.');
        form.reset();
    });
}
