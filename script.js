// ============================================
// SECURE PHOTO CONFIGURATION
// ============================================

// OPTION 1: Use Google Drive (RECOMMENDED - FREE & PRIVATE)
// 1. Upload photos to Google Drive
// 2. Right-click each photo → Share → "Anyone with the link"
// 3. Copy the sharing link for each photo
// 4. Extract the FILE_ID from the link (between /d/ and /view)
// 5. Use format: https://drive.google.com/uc?export=view&id=FILE_ID

// OPTION 2: Use Imgur (Private Album)
// 1. Upload to imgur.com as HIDDEN album
// 2. Get direct image links
// 3. Paste links below

// OPTION 3: Use Cloudinary (Free tier)
// 1. Sign up at cloudinary.com
// 2. Upload photos
// 3. Get secure URLs with access control

// OPTION 4: Password Protection (see password-protection.js)

// ============================================
// CHOOSE YOUR METHOD:
// ============================================

// METHOD A: Google Drive Links (EASIEST & RECOMMENDED)
// Force image loading with better error handling
const photoFiles = [
'https://drive.google.com/thumbnail?id=1AawQfRS8-IABWqDVXJcWcyluav18iD5C&sz=w2000',
'https://drive.google.com/thumbnail?id=1AawQfRS8-IABWqDVXJcWcyluav18iD5C&sz=w2000',
'https://drive.google.com/thumbnail?id=1Zaf-cTXx4yc5EklWNglwMo4pwto_gvc9&sz=w2000',
'https://drive.google.com/thumbnail?id=1fA2QfBIXBOWnfY4rXnln4Zg5pVYnWIXc&sz=w2000',
'https://drive.google.com/thumbnail?id=1dDACy0WfupW7IOVU_0YmPbvccLGIpTII&sz=w2000',
'https://drive.google.com/thumbnail?id=1T2M-MTd9bgn4nTirzaJLHIio_DYNXHh9&sz=w2000',
'https://drive.google.com/thumbnail?id=1yTTqjfdr_Lh0HEByQUqL-EU8yb6LADhx&sz=w2000',
'https://drive.google.com/thumbnail?id=1HMlJcaxZks2UvZD7480aDvz2AleIR2SL&sz=w2000',
];

// METHOD B: Direct Image URLs (Imgur, Cloudinary, etc.)
// const photoFiles = [
//     'https://i.imgur.com/xxxxx.jpg',
//     'https://i.imgur.com/yyyyy.jpg',
//     // etc...
// ];

// METHOD C: ImgBB (Free, No Account Needed - but public)
// const photoFiles = [
//     'https://i.ibb.co/xxxxx/photo1.jpg',
//     'https://i.ibb.co/yyyyy/photo2.jpg',
// ];

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

// Load photo gallery
function loadGallery() {
    const gallery = document.querySelector('.gallery-grid');
    gallery.innerHTML = '';
    
    const photosToShow = photoFiles.slice(0, photosLoaded);
    
    photosToShow.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = (index * 0.05) + 's';
        
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Memory ${index + 1}`;
        img.loading = 'lazy';
        
        // Error handling for missing images
        img.onerror = function() {
            // Create a beautiful placeholder with gradient
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.background = 'linear-gradient(135deg, #ff1744 0%, #ff4081 50%, #ff80ab 100%)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.fontSize = '3rem';
            placeholder.textContent = '💕';
            item.appendChild(placeholder);
            img.remove();
        };
        
        item.appendChild(img);
        item.onclick = () => openLightbox(index);
        
        gallery.appendChild(item);
    });
    
    // Hide load more button if all photos are loaded
    if (photosLoaded >= photoFiles.length) {
        document.querySelector('.gallery-controls').style.display = 'none';
    }
}

// Load more photos
function loadMorePhotos() {
    photosLoaded = Math.min(photosLoaded + 12, photoFiles.length);
    loadGallery();
    
    // Scroll to new photos
    setTimeout(() => {
        const gallery = document.querySelector('.gallery-grid');
        const newPhotos = gallery.children[photosLoaded - 12];
        if (newPhotos) {
            newPhotos.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
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
    
    // Observe all sections and cards
    const elements = document.querySelectorAll('.message-card, .reason-card, .gallery-item, .final-card');
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

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    }
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
