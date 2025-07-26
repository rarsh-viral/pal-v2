const leftCards = document.querySelectorAll('.trade-card-left');
let currentLeft = 0;

function showLeftCard(idx) {
    leftCards.forEach((card, i) => {
        card.classList.toggle('active', i === idx);
    });
}

setInterval(() => {
    currentLeft = (currentLeft + 1) % leftCards.length;
    showLeftCard(currentLeft);
}, 3000); // Change every 3 seconds

// Show the first card on load
showLeftCard(currentLeft); 