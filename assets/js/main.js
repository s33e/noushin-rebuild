// Slideshow with robust touch swipe support
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.container = document.querySelector('.slideshow-container');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 50;
        
        this.init();
    }
    
    init() {
        if (!this.slides.length || !this.container) return;
        
        // Touch events
        this.container.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
            this.stopAutoSlide();
        }, { passive: true });
        
        this.container.addEventListener('touchmove', (e) => {
            // Prevent vertical scroll while swiping horizontally
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const diffX = Math.abs(touchX - this.touchStartX);
            const diffY = Math.abs(touchY - this.touchStartY);
            
            if (diffX > diffY) {
                e.preventDefault();
            }
        }, { passive: false });
        
        this.container.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.touchEndY = e.changedTouches[0].clientY;
            this.handleSwipe();
            this.startAutoSlide();
        }, { passive: true });
        
        // Mouse drag (desktop)
        let isDragging = false;
        let startX = 0;
        
        this.container.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            this.container.style.cursor = 'grabbing';
            this.stopAutoSlide();
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        document.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            this.container.style.cursor = 'grab';
            
            const endX = e.clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > this.minSwipeDistance) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            this.startAutoSlide();
        });
        
        // Set cursor
        this.container.style.cursor = 'grab';
        
        // Start auto-advance
        this.startAutoSlide();
    }
    
    handleSwipe() {
        const diffX = this.touchStartX - this.touchEndX;
        const diffY = this.touchStartY - this.touchEndY;
        
        // Only react to horizontal swipes
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > this.minSwipeDistance) {
            if (diffX > 0) {
                // Swiped left - next slide
                this.next();
            } else {
                // Swiped right - previous slide
                this.prev();
            }
        }
    }
    
    next() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlide();
    }
    
    prev() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    }
    
    updateSlide() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    startAutoSlide() {
        this.stopAutoSlide();
        this.slideInterval = setInterval(() => {
            this.next();
        }, 4000);
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
        if (!this.toggle || !this.menu) return;
        
        // Toggle menu
        this.toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.menu.classList.toggle('active');
            this.toggle.classList.toggle('active');
        });
        
        // Submenu toggle
        this.submenuParents.forEach(parent => {
            const link = parent.querySelector('a');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                parent.classList.toggle('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-toggle')) {
                this.menu.classList.remove('active');
                this.toggle.classList.remove('active');
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Slideshow();
    new MobileMenu();
});
