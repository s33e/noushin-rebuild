// Simple, fast lightbox for gallery pages
class Lightbox {
    constructor() {
        this.currentIndex = 0;
        this.images = [];
        this.lightboxEl = null;
        this.init();
    }
    
    init() {
        // Create lightbox HTML
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <button class="lightbox-prev" aria-label="Previous">&lt;</button>
            <button class="lightbox-next" aria-label="Next">&gt;</button>
            <div class="lightbox-content">
                <img src="" alt="">
                <div class="lightbox-counter"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
        this.lightboxEl = lightbox;
        
        // Bind events
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.close());
        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());
        lightbox.querySelector('.lightbox-next').addEventListener('click', () => this.next());
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) this.close();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightboxEl.classList.contains('active')) return;
            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Touch swipe
        let touchStartX = 0;
        let touchEndX = 0;
        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
        
        // Attach to gallery images
        this.attachGallery();
    }
    
    attachGallery() {
        const galleryImages = document.querySelectorAll('.gallery-item img');
        this.images = Array.from(galleryImages).map(img => ({
            src: img.src.replace(/-\d+x\d+\./, '.'), // Get full size
            alt: img.alt
        }));
        
        galleryImages.forEach((img, index) => {
            img.parentElement.addEventListener('click', (e) => {
                e.preventDefault();
                this.open(index);
            });
            img.style.cursor = 'pointer';
        });
    }
    
    open(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightboxEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.lightboxEl.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
    
    updateImage() {
        const img = this.lightboxEl.querySelector('img');
        const counter = this.lightboxEl.querySelector('.lightbox-counter');
        const current = this.images[this.currentIndex];
        
        img.src = current.src;
        img.alt = current.alt;
        counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.gallery-grid')) {
        new Lightbox();
    }
});
