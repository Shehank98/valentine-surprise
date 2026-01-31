// ============================================
// PHOTO CONFIGURATION
// ============================================

const photoFiles = [
'https://drive.google.com/thumbnail?id=1Gsx-TZZr3tmLVjSlSPKW0k72Q7O3qAm-&sz=w2000',
'https://drive.google.com/thumbnail?id=1vmEJmSWsAg3zFxbGeVh8prVNNFpwz5_2&sz=w2000',
'https://drive.google.com/thumbnail?id=1g11Fd7hzNqnlpsA2wcCT3Cis6XDIzKRu&sz=w2000',
'https://drive.google.com/thumbnail?id=1xzsj4z0TuSOsKVmbqhF2keahwTHNwc1k&sz=w2000',
'https://drive.google.com/thumbnail?id=1XD-CLif9BUDufuLNP4GpyZO7EKegWpk6&sz=w2000',
'https://drive.google.com/thumbnail?id=1Q75O1Grgb6Ii5LoL8L6EWxnnWsb_FFtW&sz=w2000',
'https://drive.google.com/thumbnail?id=12xhpo6DBgfOzybzbBA_8HCmf_LKu8JF7&sz=w2000',
'https://drive.google.com/thumbnail?id=1YWNPHMtWrBYfWen4YN0Qo7YGcx-_ynUY&sz=w2000',
'https://drive.google.com/thumbnail?id=1qF0e2IyEQoKs67OpQVMgnlOkYY-LCCsz&sz=w2000',
'https://drive.google.com/thumbnail?id=1qwa54bdvf_sKU0yqK98Lsy4cEeZYC-W3&sz=w2000',
'https://drive.google.com/thumbnail?id=14o8R-KxrDzziAsx1X8WxSAkwwJ3eAqry&sz=w2000',
'https://drive.google.com/thumbnail?id=1L5pc_QX8pnuTLGnZSADWqSLToSq0mO1Q&sz=w2000',
'https://drive.google.com/thumbnail?id=1ORif5Od43UFC6JYp2Ram-FrwaAT6P0Sw&sz=w2000',
'https://drive.google.com/thumbnail?id=1rK8ftI0EsFO2CMwU7pcuajMQgjIMfZZ1&sz=w2000',
'https://drive.google.com/thumbnail?id=1Zahxs0aQJWPZgTthUQ2JuCGvU5JF60HB&sz=w2000',
'https://drive.google.com/thumbnail?id=1maT-uWj-5w0LufeFVJIWA1IphtIY8fZK&sz=w2000',
'https://drive.google.com/thumbnail?id=1BnLT7PKSgubUp5AJA5zbT7WYMrd5WueV&sz=w2000',
'https://drive.google.com/thumbnail?id=1AawQfRS8-IABWqDVXJcWcyluav18iD5C&sz=w2000',
'https://drive.google.com/thumbnail?id=1Zaf-cTXx4yc5EklWNglwMo4pwto_gvc9&sz=w2000',
'https://drive.google.com/thumbnail?id=1fA2QfBIXBOWnfY4rXnln4Zg5pVYnWIXc&sz=w2000',
'https://drive.google.com/thumbnail?id=1dDACy0WfupW7IOVU_0YmPbvccLGIpTII&sz=w2000',
'https://drive.google.com/thumbnail?id=1T2M-MTd9bgn4nTirzaJLHIio_DYNXHh9&sz=w2000',
'https://drive.google.com/thumbnail?id=1yTTqjfdr_Lh0HEByQUqL-EU8yb6LADhx&sz=w2000',
'https://drive.google.com/thumbnail?id=1HMlJcaxZks2UvZD7480aDvz2AleIR2SL&sz=w2000',
];

let photosLoaded = 12; // Initial number of photos to display
let currentPhotoIndex = 0;

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
createFloatingHearts();
loadGallery();
animateOnScroll();
animateStats();
});

// Create floating hearts background
function createFloatingHearts() {
const container = document.getElementById('heartsContainer');
const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓'];

setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}, 500);
}

// Load photo gallery with row-based animations (MOBILE FIXED)
function loadGallery() {
const gallery = document.querySelector('.gallery-grid');

// Don't clear existing items, just add new ones
const existingCount = gallery.querySelectorAll('.gallery-item').length;
const photosToShow = photoFiles.slice(existingCount, photosLoaded);

// If no new photos to add, just re-apply animations and return
if (photosToShow.length === 0) {
    setTimeout(() => applyRowAnimations(), 100);
    return;
}

photosToShow.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = photo;
    img.alt = `Memory ${existingCount + index + 1}`;
    img.loading = 'lazy';
    
    // Error handling for missing images
    img.onerror = function() {
        const placeholder = document.createElement('div');
        placeholder.style.width = '100%';
        placeholder.style.paddingBottom = '100%';
        placeholder.style.background = 'linear-gradient(135deg, #ff1744 0%, #ff4081 50%, #ff80ab 100%)';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.fontSize = '3rem';
        placeholder.textContent = '💕';
        placeholder.style.position = 'relative';
        item.appendChild(placeholder);
        img.remove();
        // Make sure placeholder is visible
        item.classList.add('loaded');
    };
    
    // When image loads successfully, add loaded class as fallback
    img.onload = function() {
        item.classList.add('loaded');
    };
    
    item.appendChild(img);
    item.onclick = () => openLightbox(existingCount + index);
    
    gallery.appendChild(item);
});

// Apply animations after images are added and layout is calculated
// Use longer timeout on mobile for layout to settle
const isMobile = window.innerWidth <= 768;
const delay = isMobile ? 300 : 150;

setTimeout(() => {
    applyRowAnimations();
}, delay);

// Hide load more button if all photos are loaded
if (photosLoaded >= photoFiles.length) {
    const controls = document.querySelector('.gallery-controls');
    if (controls) {
        controls.style.display = 'none';
    }
}
}

// Apply alternating row animations with mobile fallback (MOBILE FIXED)
function applyRowAnimations() {
const gallery = document.querySelector('.gallery-grid');
const items = Array.from(gallery.querySelectorAll('.gallery-item'));

if (items.length === 0) return;

// On very small screens, use simple fade-in instead
const isMobile = window.innerWidth <= 480;

if (isMobile) {
    // Simple fade-in for mobile
    items.forEach((item, index) => {
        if (!item.classList.contains('slide-up') && !item.classList.contains('slide-down')) {
            item.style.animation = `fadeInGallery 0.8s ease-out forwards`;
            item.style.animationDelay = `${index * 0.05}s`;
        }
    });
    return;
}

// Group items by row based on their top position
const rows = [];
let currentRow = [];
let currentRowTop = null;
const tolerance = 10; // pixels

items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemTop = Math.round(rect.top);
    
    if (currentRowTop === null || Math.abs(itemTop - currentRowTop) < tolerance) {
        // Same row
        currentRow.push(item);
        currentRowTop = itemTop;
    } else {
        // New row
        if (currentRow.length > 0) {
            rows.push(currentRow);
        }
        currentRow = [item];
        currentRowTop = itemTop;
    }
});

// Push the last row
if (currentRow.length > 0) {
    rows.push(currentRow);
}

// Apply animations to each row with stagger
rows.forEach((row, rowIndex) => {
    const animationClass = rowIndex % 2 === 0 ? 'slide-up' : 'slide-down';
    
    row.forEach((item, itemIndex) => {
        // Only apply if not already animated
        if (!item.classList.contains('slide-up') && !item.classList.contains('slide-down')) {
            // Stagger delay for items in the same row
            item.style.animationDelay = `${rowIndex * 0.15 + itemIndex * 0.1}s`;
            item.classList.add(animationClass);
        }
    });
});
}

// Load more photos (MOBILE FIXED)
function loadMorePhotos() {
const previousCount = photosLoaded;
photosLoaded = Math.min(photosLoaded + 12, photoFiles.length);

// Load the new photos
loadGallery();

// Scroll to new photos after they load
setTimeout(() => {
    const gallery = document.querySelector('.gallery-grid');
    const items = gallery.querySelectorAll('.gallery-item');
    const newPhoto = items[previousCount];
    
    if (newPhoto) {
        newPhoto.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}, 500); // Increased delay to ensure images are loaded
}

// Lightbox functionality
function openLightbox(index) {
currentPhotoIndex = index;
const lightbox = document.getElementById('lightbox');
const img = document.getElementById('lightboxImg');

img.src = photoFiles[index];
lightbox.classList.add('active');
document.body.style.overflow = 'hidden';
}

function closeLightbox() {
const lightbox = document.getElementById('lightbox');
lightbox.classList.remove('active');
document.body.style.overflow = '';
}

function navigatePhoto(direction) {
currentPhotoIndex += direction;

if (currentPhotoIndex < 0) {
    currentPhotoIndex = photoFiles.length - 1;
} else if (currentPhotoIndex >= photoFiles.length) {
    currentPhotoIndex = 0;
}

const img = document.getElementById('lightboxImg');
img.style.opacity = '0';

setTimeout(() => {
    img.src = photoFiles[currentPhotoIndex];
    img.style.opacity = '1';
}, 200);
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
    closeLightbox();
} else if (e.key === 'ArrowLeft') {
    navigatePhoto(-1);
} else if (e.key === 'ArrowRight') {
    navigatePhoto(1);
}
});

// Close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function(e) {
if (e.target === this) {
    closeLightbox();
}
});

// Scroll to gallery
function scrollToGallery() {
document.getElementById('gallery').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
});
}

// Animate stats counter
function animateStats() {
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.love-stats');
if (statsSection) {
    observer.observe(statsSection);
}
}

function animateCounter(element, target) {
let current = 0;
const increment = target / 100;
const duration = 2000;
const stepTime = duration / 100;

const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
        element.textContent = formatNumber(target);
        clearInterval(timer);
    } else {
        element.textContent = formatNumber(Math.floor(current));
    }
}, stepTime);
}

function formatNumber(num) {
if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
} else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
}
return num.toString();
}

// Reveal hidden message
function revealMessage() {
const hiddenMessage = document.getElementById('hiddenMessage');
const lockedMessage = document.querySelector('.locked-message');
const revealBtn = document.getElementById('revealBtn');

lockedMessage.style.display = 'none';
hiddenMessage.classList.add('revealed');
revealBtn.style.display = 'none';

// Create heart rain effect
createHeartRain();
}

function createHeartRain() {
const container = document.getElementById('heartsContainer');

for (let i = 0; i < 50; i++) {
    setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, i * 50);
}
}

// Heart explosion effect
function showHeartExplosion() {
const explosion = document.getElementById('heartExplosion');
explosion.classList.add('active');
explosion.innerHTML = '';

const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓', '💘', '💞'];

for (let i = 0; i < 100; i++) {
    const heart = document.createElement('div');
    heart.className = 'explosion-heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    const angle = (Math.PI * 2 * i) / 100;
    const velocity = Math.random() * 300 + 200;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    heart.style.setProperty('--tx', tx + 'px');
    heart.style.setProperty('--ty', ty + 'px');
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.animationDelay = (Math.random() * 0.3) + 's';
    
    explosion.appendChild(heart);
}

setTimeout(() => {
    explosion.classList.remove('active');
}, 2000);
}

// Animate elements on scroll
function animateOnScroll() {
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all sections and cards (but NOT gallery items - they have their own animation)
const elements = document.querySelectorAll('.message-card, .reason-card, .final-card');
elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});
}

// Smooth scroll for all internal links
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

// Prevent image dragging
document.addEventListener('DOMContentLoaded', function() {
setTimeout(() => {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });
}, 1000);
});

// Add loading animation
window.addEventListener('load', function() {
document.body.style.opacity = '0';
setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '1';
}, 100);
});

// Re-apply animations when window is resized
let resizeTimer;
window.addEventListener('resize', function() {
clearTimeout(resizeTimer);
resizeTimer = setTimeout(() => {
    applyRowAnimations();
}, 250);
});
