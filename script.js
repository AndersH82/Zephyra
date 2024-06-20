const cards = Array.from({ length: 78 }, (_, i) => `Card ${i + 1}`);

function drawCard() {
    const now = new Date();
    const month = now.getMonth();
    const week = Math.floor(now.getDate() / 7);
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const randomIndex = (month + week + day + hour + minute + second) % cards.length;
    const selectedCard = cards[randomIndex];

    document.querySelector('.card .back').textContent = selectedCard;
}

document.addEventListener('DOMContentLoaded', () => {
    const deck = document.querySelector('.deck');
    const card = document.createElement('div');
    card.className = 'card';

    const front = document.createElement('div');
    front.className = 'front';
    front.style.width = '100%';
    front.style.height = '100%';
    const frontImage = document.createElement('img');
    frontImage.src = 'images/tarotkort.png';
    frontImage.style.width = '100%';
    frontImage.style.height = '100%';
    frontImage.style.objectFit = 'cover';
    front.appendChild(frontImage);

    const back = document.createElement('div');
    back.className = 'back';
    back.textContent = cards[Math.floor(Math.random() * cards.length)];

    card.appendChild(front);
    card.appendChild(back);
    deck.appendChild(card);

    card.addEventListener('click', () => {
        const lastDrawDate = localStorage.getItem('lastDrawDate');
        const today = new Date().toISOString().split('T')[0];

        if (lastDrawDate === today) {
            alert('Only the first card is valid for the day. Welcome back tomorrow.');
        } else {
            drawCard();
            localStorage.setItem('lastDrawDate', today);
        }

        card.classList.toggle('flipped');
    });
});