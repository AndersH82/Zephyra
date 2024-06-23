const cards = [
    { name: "The Fool", meaning: "New beginnings, adventure, and potential.", description: "The Fool is a tarot card that symbolizes a new beginning, an adventure and unknown potential. It also represents a person who is willing to take risks and trust their intuition. Today it may mean that you are facing new opportunities and that it is time to be brave and open to change. Follow your heart and dare to take chances - you may discover unexpected paths forward!" },
    { name: "The Magus", meaning: "Manifestation, desire, and influence.", description: "Manifests desires and influences reality." },
    { name: "The Priestess", meaning: "Intuition and subconscious mysteries.", description: "Represents intuition and the mysteries of the subconscious." },
    { name: "The Empress", meaning: "Love, abundance, and nurturing.", description: "Symbolizes love, abundance, and nurturing." },
    { name: "The Emperor", meaning: "Authority, structure, and leadership.", description: "Represents authority, structure, and leadership." },
    { name: "The High Priest", meaning: "Wisdom and traditional teachings.", description: "Offers wisdom and teachings from tradition." },
    { name: "The Lovers", meaning: "Love, choice, and partnership.", description: "Symbolizes love, choice, and partnership." },
    { name: "The Chariot", meaning: "Victory, determination, and control.", description: "Represents victory, determination, and control." },
    { name: "Justice", meaning: "Fairness, balance, and decision-making.", description: "Stands for fairness, balance, and decision-making." },
    { name: "The Hermit", meaning: "Introspection, wisdom, and solitude.", description: "Symbolizes introspection, wisdom, and solitude." },
    { name: "Wheel of Fortune", meaning: "Change, destiny, and cycles.", description: "Represents change, destiny, and cycles." },
    { name: "Strength", meaning: "Courage, resilience, and overcoming obstacles.", description: "Represents courage, resilience, and overcoming obstacles." },
    { name: "The Hanged Man", meaning: "Sacrifice, transformation, and perspective shift.", description: "Symbolizes sacrifice, transformation, and perspective shift." },
    { name: "Death", meaning: "Endings, rebirth, and transformation.", description: "Represents endings, rebirth, and transformation." },
    { name: "The Alchemist", meaning: "Synthesis, creativity, and transformation.", description: "Represents synthesis, creativity, and transformation." },
    { name: "The Devil", meaning: "Temptation, addiction, and materialism.", description: "Symbolizes temptation, addiction, and materialism." },
    { name: "The Tower", meaning: "Upheaval, awakening, and transformation.", description: "Represents upheaval, awakening, and transformation." },
    { name: "The Star", meaning: "Hope, healing, and spiritual insight.", description: "Stands for hope, healing, and spiritual insight." },
    { name: "The Moon", meaning: "Illusion, intuition, and the unconscious.", description: "Symbolizes illusion, intuition, and the unconscious." },
    { name: "The Sun", meaning: "Joy, fulfillment, and vitality.", description: "Represents joy, fulfillment, and vitality." },
    { name: "The Aeon", meaning: "Revelation, accountability, and renewal.", description: "Represents revelation, accountability, and renewal." },
    { name: "The Universe", meaning: "Achievement, fulfillment, and cosmic balance.", description: "Symbolizes achievement, fulfillment, and cosmic balance." },
    { name: "Ace of Wands", meaning: "New beginnings, creativity, and potential.", description: "Symbolizes new beginnings, creativity, and potential." },
    { name: "Two of Wands", meaning: "Planning, cooperation, and strategic alliances.", description: "Represents planning, cooperation, and strategic alliances." },
    { name: "Three of Wands", meaning: "Collaboration, expansion, and shared visions.", description: "Symbolizes collaboration, expansion, and shared visions." },
    { name: "Four of Wands", meaning: "Stability, foundation, and family.", description: "Represents stability, foundation, and family." },
    { name: "Five of Wands", meaning: "Conflict, competition, and challenges.", description: "Symbolizes conflict, competition, and challenges." },
    { name: "Six of Wands", meaning: "Triumph, success, and recognition.", description: "Represents triumph, success, and recognition." },
    { name: "Seven of Wands", meaning: "Defense, resistance, and perseverance.", description: "Symbolizes defense, resistance, and perseverance." },
    { name: "Eight of Wands", meaning: "Speed, urgency, and communication.", description: "Represents speed, urgency, and communication." },
    { name: "Nine of Wands", meaning: "Caution, endurance, and vigilance.", description: "Symbolizes caution, endurance, and vigilance." },
    { name: "Ten of Wands", meaning: "Accomplishment, responsibility, and burden.", description: "Represents accomplishment, responsibility, and burden." },
    { name: "The Knight of Wands", meaning: "Adventure, enthusiasm, and initiative.", description: "Symbolizes adventure, enthusiasm, and initiative." },
    { name: "The King of Wands", meaning: "Leadership, vision, and innovation.", description: "Represents leadership, vision, and innovation." },
    { name: "Queen of Wands", meaning: "Independence, passion, and creativity.", description: "Symbolizes independence, passion, and creativity." },
    { name: "Page of Wands", meaning: "Exploration, curiosity, and news.", description: "Represents exploration, curiosity, and news." },
    { name: "Ace of Cups", meaning: "New emotional beginnings, love, and intuition.", description: "Symbolizes new emotional beginnings, love, and intuition." },
    { name: "Two of Cups", meaning: "Relationships, balance, and mutual understanding.", description: "Represents relationships, balance, and mutual understanding." },
    { name: "Three of Cups", meaning: "Community, celebration, and joy.", description: "Symbolizes community, celebration, and joy." },
    { name: "Four of Cups", meaning: "Contemplation, reflection, and inner contentment.", description: "Represents contemplation, reflection, and inner contentment." },
    { name: "Five of Cups", meaning: "Disappointment, loss, and regret.", description: "Symbolizes disappointment, loss, and regret." },
    { name: "Six of Cups", meaning: "Nostalgia, memory, and childhood.", description: "Represents nostalgia, memory, and childhood." },
    { name: "Seven of Cups", meaning: "Choices, imagination, and inner vision.", description: "Symbolizes choices, imagination, and inner vision." },
    { name: "Eight of Cups", meaning: "Letting go, retreat, and spiritual quest.", description: "Represents letting go, retreat, and spiritual quest." },
    { name: "Nine of Cups", meaning: "Fulfillment, desire, and contentment.", description: "Symbolizes fulfillment, desire, and contentment." },
    { name: "Ten of Cups", meaning: "Happiness, fulfillment, and emotional satisfaction.", description: "Represents happiness, fulfillment, and emotional satisfaction." },
    { name: "Knight of Cups", meaning: "Romance, idealism, and inspiration.", description: "Symbolizes romance, idealism, and inspiration." },
    { name: "King of Cups", meaning: "Emotional depth, compassion, and generosity.", description: "Represents emotional depth, compassion, and generosity." },
    { name: "Queen of Cups", meaning: "Intuition, creativity, and emotional insight.", description: "Symbolizes intuition, creativity, and emotional insight." },
    { name: "Page of Cups", meaning: "Curiosity, creativity, and emotional openness.", description: "Represents curiosity, creativity, and emotional openness." },
    { name: "Ace of Swords", meaning: "New ideas, clarity, and mental focus.", description: "Symbolizes new ideas, clarity, and mental focus." },
    { name: "Two of Swords", meaning: "Indecision, balance, and compromise.", description: "Represents indecision, balance, and compromise." },
    { name: "Three of Swords", meaning: "Sorrow, betrayal, and emotional pain.", description: "Symbolizes sorrow, betrayal, and emotional pain." },
    { name: "Four of Swords", meaning: "Rest, recovery, and inner peace.", description: "Represents rest, recovery, and inner peace." },
    { name: "Five of Swords", meaning: "Defeat, aggression, and misunderstanding.", description: "Symbolizes defeat, aggression, and misunderstanding." },
    { name: "Six of Swords", meaning: "Escape, exile, and emotional distance.", description: "Represents escape, exile, and emotional distance." },
    { name: "Seven of Swords", meaning: "Deceit, cunning, and hidden agendas.", description: "Symbolizes deceit, cunning, and hidden agendas." },
    { name: "Eight of Swords", meaning: "Confusion, limitation, and self-imposed barriers.", description: "Represents confusion, limitation, and self-imposed barriers." },
    { name: "Nine of Swords", meaning: "Despair, anxiety, and insomnia.", description: "Symbolizes despair, anxiety, and insomnia." },
    { name: "Ten of Swords", meaning: "Betrayal, loss, and finality.", description: "Represents betrayal, loss, and finality." },
    { name: "Knight of Swords", meaning: "Action, confrontation, and boldness.", description: "Symbolizes action, confrontation, and boldness." },
    { name: "King of Swords", meaning: "Intellect, logic, and decisiveness.", description: "Represents intellect, logic, and decisiveness." },
    { name: "Queen of Swords", meaning: "Independence, intelligence, and detachment.", description: "Symbolizes independence, intelligence, and detachment." },
    { name: "Page of Swords", meaning: "News, investigation, and intellectual curiosity.", description: "Represents news, investigation, and intellectual curiosity." },
    { name: "Ace of Pentacles", meaning: "Wealth, prosperity, and financial opportunity.", description: "Symbolizes wealth, prosperity, and financial opportunity." },
    { name: "Two of Pentacles", meaning: "Balance, adaptability, and duality.", description: "Represents balance, adaptability, and duality." },
    { name: "Three of Pentacles", meaning: "Craftsmanship, collaboration, and mastery.", description: "Symbolizes craftsmanship, collaboration, and mastery." },
    { name: "Four of Pentacles", meaning: "Security, accumulation, and material possessions.", description: "Represents security, accumulation, and material possessions." },
    { name: "Five of Pentacles", meaning: "Poverty, scarcity, and resourcefulness.", description: "Symbolizes poverty, scarcity, and resourcefulness." },
    { name: "Six of Pentacles", meaning: "Charity, sharing, and generosity.", description: "Represents charity, sharing, and generosity." },
    { name: "Seven of Pentacles", meaning: "Harvest, reward, and patience.", description: "Symbolizes harvest, reward, and patience." },
    { name: "Eight of Pentacles", meaning: "Skill, craftsmanship, and perfection.", description: "Represents skill, craftsmanship, and perfection." },
    { name: "Nine of Pentacles", meaning: "Wealth, independence, and luxury.", description: "Represents wealth, independence, and luxury." },
    { name: "Ten of Pentacles", meaning: "Success, legacy, and material fulfillment.", description: "Represents success, legacy, and material fulfillment." },
    { name: "Knight of Pentacles", meaning: "Diligence, hard work, and practicality.", description: "Symbolizes diligence, hard work, and practicality." },
    { name: "King of Pentacles", meaning: "Wealth, stability, and material success.", description: "Represents wealth, stability, and material success." },
    { name: "Queen of Pentacles", meaning: "Abundance, fertility, and nurturing.", description: "Symbolizes abundance, fertility, and nurturing." },
    { name: "Page of Pentacles", meaning: "Good fortune, prosperity, and potential.", description: "Represents good fortune, prosperity, and potential." }
];

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

    document.querySelector('.card .back').textContent = selectedCard.name;
    document.querySelector('.card-name').textContent = selectedCard.name;
    document.querySelector('.card-meaning').textContent = selectedCard.meaning;
    document.querySelector('.card-description').textContent = selectedCard.description;
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
    frontImage.src = 'assets/images/tarotkort.png';
    frontImage.style.width = '100%';
    frontImage.style.height = '100%';
    frontImage.style.objectFit = 'cover';
    front.appendChild(frontImage);

    const back = document.createElement('div');
    back.className = 'back';
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    back.textContent = randomCard.name;

    const description = document.createElement('div');
    description.className = 'card-description';
    description.textContent = randomCard.description;

    const meaning = document.createElement('div');
    meaning.className = 'card-meaning';
    meaning.textContent = randomCard.meaning;

    card.appendChild(front);
    card.appendChild(back);
    card.appendChild(description);
    card.appendChild(meaning);
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
        if (card.classList.contains('flipped')) {
            document.querySelector('.card-meaning').textContent = randomCard.meaning;
            document.querySelector('.card-description').textContent = randomCard.description;
        } else {
            document.querySelector('.card-meaning').textContent = '';
            document.querySelector('.card-description').textContent = '';
        }
    });
});