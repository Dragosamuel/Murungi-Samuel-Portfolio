// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add scrolled class for navbar styling
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    
    // Add animation classes to sections when they come into view
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                // In a real application, you would send the form data to a server here
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Add animation delay classes to cards for staggered animation
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Gallery lightbox functionality
    const galleryImages = document.querySelectorAll('#gallery .card-img-top');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // Create modal for image preview
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="Full size image">
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal when clicking on close button or outside the image
            modal.querySelector('.close').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
            
            // Re-enable body scroll when modal is closed
            const closeHandler = () => {
                document.body.style.overflow = '';
                modal.removeEventListener('click', closeHandler);
            };
            
            modal.querySelector('.close').addEventListener('click', closeHandler);
        });
    });
    
    // Download button functionality
    const downloadButtons = document.querySelectorAll('.document-list a');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const documentName = this.querySelector('span').textContent;
            alert(`In a full implementation, this would download: ${documentName}`);
        });
    });
    
    // Add hover effect to profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        profileImg.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add animation to social icons on hover
    const socialIcons = document.querySelectorAll('.social-links .btn');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Function to handle window resize events
window.addEventListener('resize', function() {
    // Adjust elements based on screen size if needed
});

// Function to handle print events
window.addEventListener('beforeprint', function() {
    // Prepare the page for printing if needed
});

// Function to handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Page is now visible
    } else {
        // Page is now hidden
    }
});