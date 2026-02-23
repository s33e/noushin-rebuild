// Slideshow functionality with touch swipe support
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.container = document.querySelector('.slideshow-container');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        if (!this.slides.length) return;
        
        // Touch swipe listeners
        this.container.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.stopAutoSlide();
        }, { passive: true });
        
        this.container.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.startAutoSlide();
        }, { passive: true });
        
        // Mouse drag for desktop (optional)
        let isDragging = false;
        let startX = 0;
        
        this.container.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            this.stopAutoSlide();
        });
        
        this.container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        this.container.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const endX = e.clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.changeSlide(1); // Swipe left = next
                } else {
                    this.changeSlide(-1); // Swipe right = prev
                }
            }
            this.startAutoSlide();
        });
        
        this.container.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                this.startAutoSlide();
            }
        });
        
        // Start auto-advance
        this.startAutoSlide();
        
        // Pause on hover (desktop)
        this.container.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.container.addEventListener('mouseleave', () => {
            if (!isDragging) this.startAutoSlide();
        });
    }
    
    handleSwipe() {
        const swipeThreshold = 50; // Minimum swipe distance
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - next slide
                this.changeSlide(1);
            } else {
                // Swiped right - previous slide
                this.changeSlide(-1);
            }
        }
    }
    
    changeSlide(direction) {
        this.currentSlide += direction;
        
        if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        } else if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        
        this.updateSlide();
    }
    
    updateSlide() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    startAutoSlide() {
        this.slideInterval = setInterval(() => {
            this.changeSlide(1);
        }, 4000); // 4 seconds per slide
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Mobile menu
class MobileMenu {
    constructor() {
        this.toggle = document.querySelector('.mobile-menu-toggle');
        this.menu = document.querySelector('.nav-menu');
        this.submenuParents = document.querySelectorAll('.has-submenu');
        
        this.init();
    }
    
    init() {
        if (!this.toggle) return;
        
        // Toggle menu
        this.toggle.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            this.toggle.classList.toggle('active');
        });
        
        // Submenu toggle on mobile
        this.submenuParents.forEach(parent => {
            const link = parent.querySelector('a');
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    parent.classList.toggle('active');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && this.menu.classList.contains('active')) {
                this.menu.classList.remove('active');
                this.toggle.classList.remove('active');
            }
        });
    }
}

// Header scroll effect
class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }
    
    init() {
        if (!this.header) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Slideshow();
    new MobileMenu();
    new HeaderScroll();
});
