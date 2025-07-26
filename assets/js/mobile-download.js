// DOM Elements
const downloadBtn = document.getElementById('downloadBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const androidBtn = document.getElementById('androidBtn');
const iosBtn = document.getElementById('iosBtn');

// Show modal when download button is clicked
downloadBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close modal functions
const closeModal = () => {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
};

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking overlay
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Platform button handlers
androidBtn.addEventListener('click', () => {
    // Replace with your actual Google Play Store URL
    alert('Redirecting to Google Play Store...');
    // window.open('https://play.google.com/store/apps/details?id=your.app.package', '_blank');
    closeModal();
});

iosBtn.addEventListener('click', () => {
    // Replace with your actual App Store URL
    alert('Redirecting to Apple App Store...');
    // window.open('https://apps.apple.com/app/your-app-name/id123456789', '_blank');
    closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
        closeModal();
        resumeFloating();
    }
});

// Optional: Add floating animation
let isFloating = true;

// Change animation speed based on user preference
const changeFloatingSpeed = () => {
    if (window.innerWidth <= 768) {
        const btn = document.getElementById('downloadBtn');
        // Use slower animation for better user experience
        btn.style.animation = 'floatAroundSlow 15s infinite linear';
    }
};

// Initialize floating animation
changeFloatingSpeed();

// Pause animation when user hovers
downloadBtn.addEventListener('mouseenter', () => {
    downloadBtn.style.animationPlayState = 'paused';
});

downloadBtn.addEventListener('mouseleave', () => {
    if (isFloating) {
        downloadBtn.style.animationPlayState = 'running';
    }
});

// Pause animation when modal is open
downloadBtn.addEventListener('click', () => {
    isFloating = false;
    downloadBtn.style.animationPlayState = 'paused';
});

// Resume animation when modal closes
const resumeFloating = () => {
    isFloating = true;
    if (window.innerWidth <= 768) {
        downloadBtn.style.animationPlayState = 'running';
    }
};

closeBtn.addEventListener('click', resumeFloating);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        resumeFloating();
    }
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style); 