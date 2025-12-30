// Main JavaScript for UTANA LABS Terminal

// Matrix Background Effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixBg = document.querySelector('.matrix-bg');
    
    if (!matrixBg) return;
    
    matrixBg.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const matrixInterval = setInterval(draw, 35);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    return matrixInterval;
}

// Typing Effect for Terminal
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced Boot Sequence
function bootSequence() {
    const bootLines = document.querySelectorAll('.boot-line');
    const bootTexts = [
        'Initializing system...',
        'Loading neural networks...',
        'Running security checks...',
        'System ready.'
    ];
    
    bootLines.forEach((line, index) => {
        setTimeout(() => {
            const text = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';
            typeWriter(line, text, 30);
        }, index * 400);
    });
}

// Terminal Command Typing Effect
function initCommandTyping() {
    const commandElement = document.querySelector('.typing-text .command');
    if (commandElement) {
        const text = commandElement.textContent;
        setTimeout(() => {
            typeWriter(commandElement, text, 80);
        }, 2000);
    }
}

// Interactive Project Cards
function initProjectInteractions() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

// Random Glitch Effect
function randomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(element => {
        setInterval(() => {
            if (Math.random() > 0.95) {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = '';
                }, 100);
            }
        }, 2000);
    });
}

// System Status Indicators
function updateSystemStatus() {
    const statusIndicators = document.querySelectorAll('.status-indicator');
    
    statusIndicators.forEach(indicator => {
        setInterval(() => {
            indicator.style.opacity = Math.random() > 0.5 ? '1' : '0.5';
        }, Math.random() * 2000 + 1000);
    });
}

// Easter Egg: Konami Code
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    const terminal = document.querySelector('.terminal');
    terminal.style.animation = 'rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        terminal.style.animation = '';
    }, 5000);
}

// Console ASCII Art
function displayConsoleArt() {
    const art = `
    ██╗   ██╗████████╗ █████╗ ███╗   ██╗ █████╗ 
    ██║   ██║╚══██╔══╝██╔══██╗████╗  ██║██╔══██╗
    ██║   ██║   ██║   ███████║██╔██╗ ██║███████║
    ██║   ██║   ██║   ██╔══██║██║╚██╗██║██╔══██║
    ╚██████╔╝   ██║   ██║  ██║██║ ╚████║██║  ██║
     ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
                        LABS
    `;
    console.log('%c' + art, 'color: #00ff41; font-family: monospace;');
    console.log('%cWelcome to UTANA LABS Terminal', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cType "help" for available commands', 'color: #0f0;');
}

// Terminal Commands (Console Easter Egg)
const terminalCommands = {
    help: () => {
        console.log('%cAvailable commands:', 'color: #00ff41; font-weight: bold;');
        console.log('%c- about: Learn about UTANA LABS', 'color: #0f0;');
        console.log('%c- projects: List all projects', 'color: #0f0;');
        console.log('%c- contact: Get contact information', 'color: #0f0;');
        console.log('%c- matrix: Toggle matrix rain', 'color: #0f0;');
        console.log('%c- clear: Clear console', 'color: #0f0;');
    },
    about: () => {
        console.log('%cUTANA LABS', 'color: #00ff41; font-size: 18px; font-weight: bold;');
        console.log('Innovation meets technology. We build the future.');
    },
    projects: () => {
        console.log('%cActive Projects:', 'color: #00ff41; font-weight: bold;');
        console.log('1. YÜK Mobile App - Modern transportation solutions');
        console.log('2. AI Assistant Framework - Next-gen AI solutions');
        console.log('3. Blockchain Integration - Secure transaction systems');
    },
    contact: () => {
        console.log('%cContact Information:', 'color: #00ff41; font-weight: bold;');
        console.log('Email: contact@utanalabs.com');
        console.log('GitHub: github.com/utanapps');
    },
    clear: () => {
        console.clear();
        displayConsoleArt();
    }
};

// Expose commands to window
window.terminal = terminalCommands;

// Initialize everything when DOM is loaded
let matrixInterval;

function init() {
    displayConsoleArt();
    matrixInterval = createMatrixRain();
    bootSequence();
    initCommandTyping();
    initProjectInteractions();
    randomGlitch();
    updateSystemStatus();
    initKonamiCode();
    
    // Add cursor blink effect
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (matrixInterval) clearInterval(matrixInterval);
    } else {
        matrixInterval = createMatrixRain();
    }
});