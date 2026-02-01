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

// ============================================
// SURPRISE SECTIONS CONFIGURATION
// ============================================

// ========================================== 
// SECTION 1: OPEN WHEN LETTERS - CONFIGURATION
// ========================================== 
// You can easily edit these letters!

const letters = [
    {
        title: "When You Miss Me 💕",
        message: `My Love,

I know sometimes the distance between us feels too far, or maybe you just wish I was there with you right now. I want you to know that no matter where I am, you're always in my heart and on my mind.

Close your eyes and imagine me holding you close. Can you feel it? That's how much I care about you. Every moment we're apart just makes me appreciate our time together even more.

Remember all the beautiful memories we've shared. Think about your smile, your laugh, the way your eyes light up. These thoughts keep me going every single day.

I'm always here for you, even when we're not physically together. You're never alone, my love.

Until we're together again, know that I'm thinking of you and missing you just as much. ❤️`
    },
    {
        title: "When You're Sad 💙",
        message: `Hey Beautiful,

I know life can be tough sometimes, and it's okay to feel sad. You don't always have to be strong - it's okay to let yourself feel what you're feeling.

But I want you to remember something: You are incredibly strong, even when you don't feel like it. You've overcome so much, and you'll get through this too.

Think about all the times you've smiled, all the times you've laughed so hard your stomach hurt. Those moments are still there, waiting for you. This sadness is temporary, but your strength is permanent.

Do something kind for yourself today. Take a warm bath, listen to your favorite music, eat something delicious. You deserve to be taken care of, especially by yourself.

And remember, I'm always here. If you need to talk, cry, or just have someone listen - I'm here. You mean the world to me, and seeing you sad breaks my heart.

Better days are coming, my love. I promise. 🌈`
    },
    {
        title: "When You Need a Laugh 😄",
        message: `Hey You! 😊

Remember that time when I tried to be smooth and ended up being hilariously awkward instead? Yeah, that's just one of my many talents! 😂

Here's a joke for you:
Why did I fall in love with you?
Because you're the only person who laughs at my terrible jokes and still thinks I'm funny! 💕

But seriously, your laugh is my favorite sound in the entire world. The way your whole face lights up, the way your eyes crinkle - it's absolutely beautiful.

I hope this letter brought at least a small smile to your face. And if it didn't, well... I'll just have to try harder next time! Maybe I'll learn some magic tricks or become a stand-up comedian. Whatever it takes to see that beautiful smile! ✨

Keep shining, beautiful. The world needs your light and your laughter! 😄`
    },
    {
        title: "When You Can't Sleep 🌙",
        message: `Sweet Dreams, My Love,

I know it's late and sleep won't come easily tonight. Sometimes our minds just won't quiet down, right?

Let me tell you a bedtime story...

Once upon a time, there was someone so special, so wonderful, that even the stars would stop twinkling just to admire them. That someone is you. ✨

Every night, the moon watches over you, and I like to think it's keeping you safe for me. When you look up at the night sky, remember that we're under the same sky, looking at the same stars.

Take a deep breath. Let go of your worries for tonight. Tomorrow is a new day, full of new possibilities. But for now, just rest.

Imagine my arms around you, keeping you warm and safe. Imagine my voice softly telling you that everything will be okay. Because it will be.

Close your eyes, my love. Let yourself drift away. Dream of beautiful things. Dream of us. Dream of all the wonderful moments yet to come.

Sweet dreams, beautiful. I'll be here when you wake up. 🌟

Goodnight. 💤`
    },
    {
        title: "When You Need Motivation 💪",
        message: `Hey Superstar! 🌟

First of all, I want you to know that I believe in you. Not just a little bit - I believe in you with every fiber of my being.

You are capable of AMAZING things. Do you know that? Sometimes we forget how strong we are, how much we've already accomplished, how far we've come.

Look at everything you've overcome. Look at everything you've achieved. You did that! YOU! And you can do so much more.

Whatever challenge you're facing right now, whatever goal seems too far away, whatever dream feels impossible - I want you to know that you CAN do this.

Break it down into small steps. Take it one day at a time. One hour at a time if you need to. Progress is progress, no matter how small.

And remember - you don't have to do this alone. I'm here, cheering you on every step of the way. I'm your biggest fan, your loudest cheerleader, your strongest supporter.

Now go out there and show the world what you're made of! I already know - you're made of pure awesomeness!

You've got this! 💪❤️`
    },
    {
        title: "When You're Happy 🎉",
        message: `My Beautiful Love! 😊

Seeing you happy is literally the best thing in the entire world! Your happiness is contagious, and right now, just thinking about your smile is making me smile too!

I love how your whole face lights up when you're happy. I love the way you laugh with your whole heart. I love how your positive energy just radiates and makes everything around you brighter.

Whatever made you happy today - hold onto that feeling! Bottle it up and save it for the days when you need a reminder of how beautiful life can be.

You deserve ALL the happiness in the world. You deserve every good thing, every beautiful moment, every reason to smile. And I hope I can be one of those reasons. 💕

Keep spreading that joy, beautiful. Keep being the amazing, wonderful, absolutely incredible person you are. The world is so much brighter because you're in it!

Thank you for being you. Thank you for sharing your happiness with me. Thank you for existing.

Never stop smiling, my love. It's my favorite thing about you (okay, it's ONE of my favorite things - there are too many to count!). 😄

Here's to more happy moments together! 🥂✨

I love you! ❤️`
    }
];

// ========================================== 
// SECTION 2: MEMORY MAP - CONFIGURATION
// ========================================== 
// Add your special locations here!

const memoryLocations = [
    {
        title: "Where We First Met",
        date: "The beginning of everything ✨",
        location: "The place where our story began",
        story: `This is where it all started. The moment I first saw you, I knew you were special. Even though we don't have pictures from that exact moment yet, this place will always hold a special meaning in my heart. It's where our journey together began, and I'll never forget how I felt that day. Every time I think about this place, I smile because it reminds me of how lucky I am to have found you. This is just the beginning of our story, and I can't wait to create more memories with you! 💝`,
        photoUrl: "" // Leave empty for placeholder, or add a photo URL when you have one
    },
    // Add more locations as your story grows!
    // Example:
    // {
    //     title: "Our First Date",
    //     date: "February 14, 2026",
    //     location: "The Restaurant Name, City",
    //     story: "Your story here...",
    //     photoUrl: "your-photo-url-here.jpg"
    // }
];

// ========================================== 
// SECTION 3: LOVE PLAYLIST - CONFIGURATION
// ========================================== 
// Customize your playlist here!

const playlist = [
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        note: "Because you ARE perfect, in every single way. This song reminds me of how I feel every time I'm with you - like everything is exactly as it should be. 💕"
    },
    {
        title: "A Thousand Years",
        artist: "Christina Perri",
        note: "I have loved you for a thousand years, and I'll love you for a thousand more. This song captures the timeless feeling of true love - that's what I feel for you. ⏳❤️"
    },
    {
        title: "Thinking Out Loud",
        artist: "Ed Sheeran",
        note: "When your legs don't work like they used to before... I'll still be falling for you. Growing old with you sounds like the most beautiful adventure. 🌹"
    },
    {
        title: "All of Me",
        artist: "John Legend",
        note: "You have all of me - my heart, my soul, my everything. I love all of you, every beautiful and imperfect part. You're my end and my beginning. 💝"
    },
    {
        title: "Make You Feel My Love",
        artist: "Adele",
        note: "I would do anything to make you feel loved, to make you smile, to see you happy. This song is my promise to always be there for you, no matter what. 🌟"
    }
    // Add more songs here as your playlist grows!
    // {
    //     title: "Song Name",
    //     artist: "Artist Name",
    //     note: "Why this song is special..."
    // }
];

// ========================================== 
// SECTION 4: STAR MAP - CONFIGURATION
// ========================================== 
// Set your special date and location

const starMapData = {
    // Update these when you have the actual date and location
    date: "January 29, 2026", // Example: "January 15, 2026"
    location: "Kalubowila, Sri Lanka", // Example: "Negombo, Sri Lanka"
    coordinates: "6.8°N, 79.8°E", // Example: "7.2°N, 79.8°E"
    // You can update this later when you remember the exact date
    specialDateTimestamp: null // Example: new Date('2026-01-15').getTime()
};

// ============================================
// MAIN GALLERY & ORIGINAL FUNCTIONS
// ============================================

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
createFloatingHearts();
loadGallery();
animateOnScroll();
animateStats();
initStarMap();
updateStarMapInfo();
initializeSurpriseSections();
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

// ============================================
// SURPRISE SECTIONS JAVASCRIPT
// ============================================

// ========================================== 
// SECTION 1: OPEN WHEN LETTERS - FUNCTIONS
// ========================================== 

function openEnvelope(index) {
    const letter = letters[index];
    const modal = document.getElementById('letterModal');
    const title = document.getElementById('letterTitle');
    const body = document.getElementById('letterBody');
    
    title.textContent = letter.title;
    body.textContent = letter.message;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Create floating hearts effect
    createLetterHearts();
}

function closeLetterModal() {
    const modal = document.getElementById('letterModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function createLetterHearts() {
    const modal = document.getElementById('letterModal');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.opacity = '0';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '10002';
            
            modal.appendChild(heart);
            
            heart.animate([
                { transform: 'translateY(0)', opacity: 0 },
                { transform: 'translateY(-100px)', opacity: 1, offset: 0.3 },
                { transform: 'translateY(-500px)', opacity: 0 }
            ], {
                duration: 3000,
                easing: 'ease-out'
            });
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
}

// ========================================== 
// SECTION 2: MEMORY MAP - FUNCTIONS
// ========================================== 

function showMemoryDetails(index) {
    const memory = memoryLocations[index];
    const details = document.getElementById('memoryDetails');
    const title = document.getElementById('memoryTitle');
    const date = document.getElementById('memoryDate');
    const photo = document.getElementById('memoryPhoto');
    const story = document.getElementById('memoryStory');
    
    title.textContent = memory.title;
    date.textContent = memory.date;
    story.textContent = memory.story;
    
    // Handle photo
    if (memory.photoUrl) {
        photo.innerHTML = `<img src="${memory.photoUrl}" alt="${memory.title}">`;
    } else {
        photo.innerHTML = '<div class="placeholder-text">📸 Photo coming soon...</div>';
    }
    
    details.classList.add('active');
    
    // Create map trail effect
    createMapTrail();
}

function closeMemoryDetails() {
    const details = document.getElementById('memoryDetails');
    details.classList.remove('active');
}

function createMapTrail() {
    // Add a sparkle effect when opening memory
    const mapContainer = document.querySelector('.map-background');
    if (!mapContainer) return;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.background = '#ff4081';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'twinkle 1s ease-out forwards';
            
            mapContainer.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 50);
    }
}

// ========================================== 
// SECTION 3: LOVE PLAYLIST - FUNCTIONS
// ========================================== 

let currentSongIndex = -1;

function playSong(index) {
    const song = playlist[index];
    const title = document.getElementById('currentSongTitle');
    const artist = document.getElementById('currentSongArtist');
    const note = document.getElementById('currentSongNote');
    const vinyl = document.querySelector('.vinyl-record');
    
    if (!title || !artist || !note || !vinyl) return;
    
    // Update current song info
    title.textContent = song.title;
    artist.textContent = song.artist;
    note.textContent = song.note;
    
    // Update active state
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Start vinyl animation
    vinyl.classList.add('playing');
    
    currentSongIndex = index;
    
    // Create music notes effect
    createMusicNotes();
}

function createMusicNotes() {
    const container = document.querySelector('.playlist-section');
    if (!container) return;
    
    const notes = ['🎵', '🎶', '🎼', '🎹'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            note.style.position = 'absolute';
            note.style.fontSize = Math.random() * 20 + 20 + 'px';
            note.style.left = Math.random() * 100 + '%';
            note.style.top = '50%';
            note.style.opacity = '0';
            note.style.pointerEvents = 'none';
            note.style.zIndex = '1';
            
            container.appendChild(note);
            
            note.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
                { transform: 'translateY(-100px) rotate(180deg)', opacity: 1, offset: 0.3 },
                { transform: 'translateY(-300px) rotate(360deg)', opacity: 0 }
            ], {
                duration: 2500,
                easing: 'ease-out'
            });
            
            setTimeout(() => note.remove(), 2500);
        }, i * 150);
    }
}

// ========================================== 
// SECTION 4: STAR MAP - FUNCTIONS
// ========================================== 

function initStarMap() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        drawStarMap();
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    function drawStarMap() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw stars
        const starCount = 200;
        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 2;
            const opacity = Math.random();
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
        }
        
        // Draw some brighter stars
        for (let i = 0; i < 30; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 1.5 + 1;
            
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.5, 'rgba(255, 200, 200, 0.5)');
            gradient.addColorStop(1, 'rgba(255, 200, 200, 0)');
            
            ctx.beginPath();
            ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        
        // Draw constellation (simplified Orion)
        drawConstellation(ctx, canvas.width, canvas.height);
    }
    
    function drawConstellation(ctx, width, height) {
        // Simplified Orion constellation
        const centerX = width / 2;
        const centerY = height / 2;
        const scale = Math.min(width, height) / 4;
        
        const stars = [
            {x: 0, y: -1.5},      // Betelgeuse
            {x: 0, y: 1.5},       // Rigel
            {x: -0.5, y: -0.3},   // Bellatrix
            {x: 0.5, y: -0.3},    // Mintaka
            {x: 0, y: 0},         // Alnilam
            {x: -0.2, y: 0.2},    // Alnitak
            {x: 0.2, y: 0.2},     // Belt star
        ];
        
        // Draw connections
        ctx.strokeStyle = 'rgba(255, 64, 129, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const connections = [
            [0, 2], [2, 3], [3, 4], [4, 5], [5, 1]
        ];
        
        connections.forEach(([from, to]) => {
            const start = stars[from];
            const end = stars[to];
            ctx.moveTo(centerX + start.x * scale, centerY + start.y * scale);
            ctx.lineTo(centerX + end.x * scale, centerY + end.y * scale);
        });
        ctx.stroke();
        
        // Draw stars
        stars.forEach(star => {
            const x = centerX + star.x * scale;
            const y = centerY + star.y * scale;
            
            // Glow effect
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
            gradient.addColorStop(0, 'rgba(255, 64, 129, 1)');
            gradient.addColorStop(0.5, 'rgba(255, 128, 171, 0.5)');
            gradient.addColorStop(1, 'rgba(255, 128, 171, 0)');
            
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Star center
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
        });
    }
    
    // Animate stars twinkling
    setInterval(() => {
        drawStarMap();
    }, 3000);
}

// Update star map info
function updateStarMapInfo() {
    const dateElement = document.getElementById('specialDate');
    const locationElement = document.getElementById('specialLocation');
    
    if (dateElement) dateElement.textContent = starMapData.date;
    if (locationElement) locationElement.textContent = starMapData.location;
}

// ========================================== 
// INITIALIZE SURPRISE SECTIONS
// ========================================== 

function initializeSurpriseSections() {
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLetterModal();
            closeMemoryDetails();
        }
    });
    
    // Add animation on scroll for surprise sections
    const surpriseObserver = new IntersectionObserver((entries) => {
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

    // Observe all surprise sections
    const sections = document.querySelectorAll('.open-when-section, .memory-map-section, .playlist-section, .starmap-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 1s ease';
        surpriseObserver.observe(section);
    });
}
