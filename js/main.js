// ================================================
// main.js - Main JavaScript for UTANA LABS
// ================================================

// ================================================
// Terminal Typing Effect
// ================================================
const typingTexts = [
    'cat classified_projects.log',
    'initializing_ai_systems...',
    'accessing_secure_network...',
    './broadcast_stream --live',
    'loading_neural_networks...'
];

let typingIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
    const typedTextElement = document.querySelector('.typed-text');
    
    if (!typedTextElement) return;
    
    const fullText = typingTexts[typingIndex];
    
    if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    typedTextElement.textContent = currentText;
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed /= 2;
    }
    
    if (!isDeleting && charIndex === fullText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % typingTexts.length;
        typeSpeed = 500; // Pause before next text
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// ================================================
// Smooth Scrolling
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ================================================
// Intersection Observer for Scroll Animations
// ================================================
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

// ================================================
// Random Glitch Effect
// ================================================
function triggerRandomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    if (glitchElements.length > 0) {
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        randomElement.style.animation = 'none';
        
        setTimeout(() => {
            randomElement.style.animation = '';
        }, 10);
    }
}

// ================================================
// Console Easter Egg
// ================================================
function displayConsoleMessage() {
    const styles = [
        'color: #00ff41',
        'font-size: 14px',
        'font-family: Courier New, monospace',
        'padding: 10px',
        'background: #0a0a0a'
    ].join(';');
    
    console.log('%c┌────────────────────────────────────────┐', styles);
    console.log('%c│  UTANA LABS - ACCESS GRANTED          │', styles);
    console.log('%c│  System Status: OPERATIONAL           │', styles);
    console.log('%c│  Security Level: MAXIMUM              │', styles);
    console.log('%c│  ─────────────────────────────────    │', styles);
    console.log('%c│  Welcome to the underground...        │', styles);
    console.log('%c│  Type "help" for available commands   │', styles);
    console.log('%c└────────────────────────────────────────┘', styles);
    
    // Define help command
    window.help = function() {
        console.log('%c[SYSTEM] Available commands:', 'color: #00ff41');
        console.log('%c  - status()     : Show system status', 'color: #888');
        console.log('%c  - broadcast()  : Show active broadcasts', 'color: #888');
        console.log('%c  - mission()    : Display mission statement', 'color: #888');
        console.log('%c  - classified() : Access classified data', 'color: #888');
    };
    
    window.status = function() {
        console.log('%c[OK] All systems operational', 'color: #00ff41');
        console.log('%c[OK] Video Generation: ACTIVE', 'color: #00ff41');
        console.log('%c[OK] AI Broadcasting: LIVE', 'color: #00ff41');
        console.log('%c[OK] Market Analysis: LIVE', 'color: #00ff41');
        console.log('%c[??] R&D Department: CLASSIFIED', 'color: #ffaa00');
    };
    
    window.broadcast = function() {
        console.log('%c[BROADCAST] Active Channels:', 'color: #ff0055');
        console.log('%c  - AI News: STREAMING 24/7', 'color: #888');
        console.log('%c  - Market Analysis: LIVE', 'color: #888');
        console.log('%c  - Total Viewers: CLASSIFIED', 'color: #888');
    };
    
    window.mission = function() {
        console.log('%c[MISSION] Core Directives:', 'color: #00ff41');
        console.log('%c  1. Push the boundaries of AI broadcasting', 'color: #888');
        console.log('%c  2. Achieve complete automation', 'color: #888');
        console.log('%c  3. Operate beyond traditional constraints', 'color: #888');
        console.log('%c  4. Experiment. Innovate. Disrupt.', 'color: #888');
    };
    
    window.classified = function() {
        console.log('%c[ACCESS DENIED]', 'color: #ff0055');
        console.log('%c[ERROR] Insufficient clearance level', 'color: #ff0055');
        console.log('%c[SYSTEM] This incident has been logged.', 'color: #ffaa00');
    };
}

// ================================================
// Network Monitor Effect
// ================================================
function createNetworkMonitor() {
    const messages = [
        '[NET] Packet received: 192.168.0.1:8080',
        '[AI] Neural network inference complete',
        '[SYS] Cache cleared successfully',
        '[DB] Query executed in 0.003s',
        '[STREAM] Broadcasting frame #',
        '[API] Request processed: 200 OK'
    ];
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            const message = messages[Math.floor(Math.random() * messages.length)];
            const frame = message.includes('#') ? message + Math.floor(Math.random() * 100000) : message;
            console.log(`%c${frame}`, 'color: #00ff41; font-size: 10px');
        }
    }, 3000);
}

// ================================================
// Initialize Everything
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('[SYSTEM] Initializing UTANA LABS interface...');
    
    // Start typing effect
    setTimeout(typeEffect, 1000);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    // Trigger random glitch every 5-10 seconds
    setInterval(triggerRandomGlitch, 5000 + Math.random() * 5000);
    
    // Display console easter egg
    displayConsoleMessage();
    
    // Start network monitor (optional - can be commented out if too noisy)
    // createNetworkMonitor();
    
    // Add hover effect to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const indicator = card.querySelector('.status-indicator');
            if (indicator) {
                indicator.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const indicator = card.querySelector('.status-indicator');
            if (indicator) {
                indicator.style.transform = 'scale(1)';
            }
        });
    });
    
    console.log('[OK] Interface loaded successfully');
    console.log('[HINT] Try typing "help" in the console...');
});

// ================================================
// Add random data corruption effect (rare)
// ================================================
setInterval(() => {
    if (Math.random() > 0.95) { // 5% chance every interval
        const overlay = document.querySelector('.glitch-overlay');
        if (overlay) {
            overlay.style.opacity = '0.1';
            setTimeout(() => {
                overlay.style.opacity = '0.02';
            }, 100);
        }
    }
}, 10000);

// ================================================
// Konami Code Easter Egg
// ================================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: #ff0055; font-size: 20px; font-weight: bold');
        console.log('%c[SYSTEM] Access level upgraded to: MAXIMUM', 'color: #00ff41; font-size: 14px');
        console.log('%c[SECRET] You have discovered the hidden protocol.', 'color: #00ff41');
        console.log('%c[DATA] Decrypting classified files...', 'color: #00ff41');
        
        setTimeout(() => {
            console.log('%c[COMPLETE] Welcome to the inner circle, operator.', 'color: #ff0055; font-size: 14px');
        }, 2000);
        
        // Visual effect
        document.body.style.animation = 'glitch-anim-1 0.3s';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    }
});
