const cards = [
    { name: "The Fool", meaning: "New beginnings, adventure, and potential.", description: "Symbolizes new beginnings, adventure, and potential. It represents the start of a journey, whether positive or negative, and is associated with the energy of Uranus, embodying intellectual freedom and the dynamism of the air element. The imagery of The Fool includes elements like yellow boots (representing self-assurance and ambition), a white rose (symbolizing purity and loyalty), and mountains (indicating life's challenges). When appearing upright, it indicates a time for new beginnings and openness to opportunities, encouraging adventure and risk-taking. However, if reversed, it suggests fear of taking risks, missed opportunities due to hesitation, or naivety leading to potential failures. Overall, The Fool reminds us of the importance of embracing new adventures with courage and optimism, while also cautioning against reckless decisions and the need for balance between risk and caution." },
    { name: "The Magus", meaning: "Manifestation, desire, and influence.", description: "Signifies that you possess the power to manifest your desires and influence your surroundings. It encourages you to tap into your creative potential and take decisive action to bring your dreams into reality. This card is a reminder of your inherent ability to shape your destiny through focused intentions, visualization, and taking inspired action. It suggests aligning your thoughts, emotions, and actions to manifest your desires effectively. Embrace your inner strength and confidence to overcome obstacles and navigate life's challenges with grace and resilience. The Magus card also emphasizes the importance of aligning your personal will with higher guidance, suggesting that by tuning into the rhythm of the universe, you can amplify your ability to create positive change." },
    { name: "The Priestess", meaning: "Intuition and subconscious mysteries.", description: "Also known as the High Priestess, symbolizes intuition, inner wisdom, and the mysteries of the subconscious mind. Today, this card is a reminder to trust your inner voice and intuition over logical reasoning. It encourages you to delve into the depths of your subconscious for guidance and to recognize the importance of balancing the conscious and unconscious aspects of yourself. The High Priestess is a guardian of esoteric knowledge, guiding you towards a deeper understanding of life's mysteries and the importance of spiritual growth. Embrace the unknown, trust in the journey, and cultivate a connection with your inner wisdom to navigate life's complexities with courage and faith." },
    { name: "The Empress", meaning: "Love, abundance, and nurturing.", description: "Symbolizes love, abundance, and nurturing. Today, this card encourages you to embrace these qualities in your life. It suggests focusing on creating and nurturing relationships, both romantic and platonic, by offering love, support, and care. Embrace the abundance in your life, whether it's financial, creative, or emotional, and recognize the value of what you have. Connect with nature to find balance and inspiration. Tap into your creative potential and express yourself freely. Remember to care for yourself and others, fostering a supportive environment that nurtures growth and happiness." },
    { name: "The Emperor", meaning: "Authority, structure, and leadership.", description: "Symbolizes authority, structure, and leadership in various aspects of your life. Today, this card indicates that you are in a position of power or responsibility, where your actions and decisions carry significant weight. It encourages you to approach situations with a structured plan, applying logic and discipline to achieve your goals. Whether in love, career, or personal development, the Emperor advises you to lead with confidence, ambition, and a clear vision for the future. Embrace the qualities of stability, strength, and leadership to navigate through challenges and opportunities with determination and foresight." },
    { name: "The High Priest", meaning: "Wisdom and traditional teachings.", description: "Signifies wisdom and traditional teachings for you today. This symbolism draws parallels between the role of the High Priest in ancient traditions and the concept of seeking wisdom and guidance from established knowledge and practices. It encourages you to look towards traditional teachings and wisdom as a source of insight and direction in your life. This might involve studying ancient texts, consulting with elders or experts in your field, or exploring philosophies and teachings that have stood the test of time. Embrace the wisdom of the past to inform your present actions and future decisions." },
    { name: "The Lovers", meaning: "Love, choice, and partnership.", description: "Symbolizes a pivotal moment regarding love, choice, and partnership. It encourages you to explore deep connections and the essence of true love, emphasizing the importance of making conscious choices that align with your values and aspirations. This card suggests that you are at a crossroads where you must decide between different paths, each offering its own set of experiences and outcomes. It's a call to stay true to yourself, to embrace your personal beliefs and values, and to seek a harmonious balance in your relationships. Whether you're navigating a new romance, evaluating existing partnerships, or considering personal growth, The Lovers card advises you to listen to your intuition, prioritize self-love and self-acceptance, and make decisions that will lead to fulfillment and joy. Remember, this card extends beyond romantic love to encompass meaningful friendships and the relationship with yourself, reminding you of the value of soul connections and the transformative power of love." },
    { name: "The Chariot", meaning: "Victory, determination, and control.", description: "Signifies victory, determination, and control today. It encourages you to harness your inner strength and willpower to overcome challenges and achieve your goals. This card is a call to action, urging you to take control of your circumstances and steer your life in the direction you desire, despite facing opposition or conflicting forces. It's a reminder to maintain focus, confidence, and determination, even when faced with obstacles or distractions. Whether in love, career, or personal endeavors, The Chariot suggests that with disciplined action and unwavering commitment, you can achieve success and fulfillment." },
    { name: "Justice", meaning: "Fairness, balance, and decision-making.", description: "Signifies the importance of fairness, balance, and making decisions with integrity. It reminds you that every action has consequences and urges you to act with honesty and fairness in all aspects of your life. This card suggests that it's crucial to weigh your options carefully and consider the potential outcomes of your choices. It's a call to seek balance and fairness in your personal and professional life, emphasizing the need for transparency and accountability. Whether you're navigating a challenging situation or making a significant decision, the Justice card advises you to approach it with a clear mind, considering the implications of your actions on yourself and others." },
    { name: "The Hermit", meaning: "Introspection, wisdom, and solitude.", description: "Signifies a call for introspection, wisdom, and solitude. It encourages you to step back, reflect on your life, and delve into your inner world to gain a deeper understanding of yourself. This period is about seeking spiritual enlightenment and inner guidance, which can lead to personal growth and self-discovery. The Hermit's solitary stance atop a mountain symbolizes achievement, growth, and the pursuit of higher truths. Embrace this time for introspection, trusting in your inner wisdom, and allowing it to illuminate your path forward." },
    { name: "Wheel of Fortune", meaning: "Change, destiny, and cycles.", description: "Signifies change, destiny, and the cycles inherent in life. It encourages embracing the ups and downs as part of the natural order, emphasizing the importance of adaptability and resilience. This card reminds you that life is in constant motion, and while fortunes may rise and fall, it's crucial to stay balanced and centered amidst these fluctuations. It symbolizes the interconnectedness of our actions and their impact on our future, suggesting that our current decisions and behaviors influence our destiny. The Wheel of Fortune also hints at the concept of karma, indicating that what goes around comes around. Ultimately, it's a call to action to live authentically, knowing that our choices today shape our tomorrow." },
    { name: "Strength", meaning: "Courage, resilience, and overcoming obstacles.", description: "Signifies that you possess the courage, resilience, and ability to overcome obstacles in your life. It encourages you to tap into your inner strength and self-control to face challenges with optimism and grace. This card is a reminder to embrace your power, especially in difficult times, and to use it wisely to achieve harmony and success. It suggests that by balancing your emotions and instincts with kindness and understanding, you can navigate through life's challenges with confidence and compassion." },
    { name: "The Hanged Man", meaning: "Sacrifice, transformation, and perspective shift.", description: "Signifies a need for sacrifice, transformation, and a shift in perspective. It encourages you to surrender to current circumstances, embracing change and new viewpoints that could lead to personal growth and enlightenment. This card suggests that by pausing and reflecting, you can unlock hidden potentials and move beyond limitations. It's a reminder to let go of what no longer serves you, opening the door to new opportunities and insights." },
    { name: "Death", meaning: "Endings, rebirth, and transformation.", description: "Symbolizes significant transformations, endings, and the beginning of new phases in your life. It suggests that you are undergoing or about to undergo a profound change that will lead to personal growth and renewal. This change may involve letting go of old habits, beliefs, or situations that no longer serve you, paving the way for something better and more aligned with your true self. While the imagery of the card can be intimidating, remember that it is a reminder of the natural cycle of life and death, emphasizing the importance of embracing change and transformation as a part of living fully" },
    { name: "The Alchemist", meaning: "Synthesis, creativity, and transformation.", description: "Signifies a time of synthesis, creativity, and transformation in your life today. It suggests that you are in a phase where you are combining various aspects of yourself or your circumstances to create something new and meaningful. This process involves a deep understanding of the elements within you or your situation, much like alchemy, which seeks to transform base metals into gold. It's a reminder to embrace change and the potential for growth that comes from it. Look for opportunities to innovate and express your creative side, as this could lead to significant advancements or breakthroughs in your personal or professional life" },
    { name: "The Devil", meaning: "Temptation, addiction, and materialism.", description: "Signifies that you are currently facing challenges related to temptation, addiction, and materialism. This card warns of being ensnared in situations that cause distress or unhappiness, such as unhealthy relationships, dead-end jobs, or cycles of self-destructive behavior. It highlights the allure of materialism and the dangers of succumbing to its temptations, urging you to focus on what truly matters beyond material possessions, status, or power. Recognizing the grip of these negative patterns and their damaging effects is the first step toward breaking free and embarking on a path toward healing and transformation." },
    { name: "The Tower", meaning: "Upheaval, awakening, and transformation.", description: "Signifies a period of upheaval, awakening, and transformation. It indicates that significant changes are imminent, which may initially appear chaotic but are essential for personal growth and development. These changes could involve breaking away from outdated beliefs, relationships, or situations that no longer serve your higher good. The card emphasizes the importance of embracing these changes, as they pave the way for a more authentic and fulfilling life. It's a call to question your current beliefs and to seek clarity and insight, leading to a deeper understanding of yourself and your surroundings. While the process might be challenging, it promises a journey towards strength, wisdom, and resilience." },
    { name: "The Star", meaning: "Hope, healing, and spiritual insight.", description: "Signifies a moment of hope, healing, and spiritual insight for you. This card encourages you to trust in the guidance and wisdom that comes from within and from the universe around you. It suggests that you are on the right path towards achieving your goals and that you should continue to follow your intuition and beliefs. The star itself, a universal symbol of guidance, protection, and divine inspiration, reminds you that you are supported and guided on your journey. Embrace this time as an opportunity for growth and reflection, knowing that you are surrounded by the divine and natural forces that support your endeavors." },
    { name: "The Moon", meaning: "Illusion, intuition, and the unconscious.", description: "Symbolizes illusion, intuition, and the unconscious. It encourages you to delve into your subconscious mind, tap into your intuitive powers, and trust your instincts. This card is a call to action for self-discovery and illumination, urging you to navigate through the uncertainties of life with grace and courage. Whether you're dealing with fears, navigating love and relationships, making career decisions, managing finances, or addressing health concerns, The Moon reminds you to listen to your inner wisdom and embrace the mysteries of the unconscious. It's a time to face your fears, understand hidden truths, and rely on your intuition to guide you towards a clearer path." },
    { name: "The Sun", meaning: "Joy, fulfillment, and vitality.", description: "Means you should focus on joy, fulfillment, and vitality. It's a call to embrace positivity, optimism, and the radiant energy within yourself. This card signifies a time of triumph, success, and personal growth, encouraging you to follow your instincts and aspirations with unwavering faith. Whether in love, career, health, or spirituality, the Sun card promotes growth, success, and happiness, urging you to appreciate the blessings in your life and pursue your goals with confidence." },
    { name: "The Aeon", meaning: "Revelation, accountability, and renewal.", description: "Symbolizes a profound shift towards understanding the interconnectedness of revelation, accountability, and renewal in your life today. It invites you to embrace a journey of self-discovery and transformation, encouraging you to delve deeper into your personal growth and development. This card suggests that significant changes are imminent, urging you to prepare yourself mentally, emotionally, and spiritually for what lies ahead. It emphasizes the importance of taking responsibility for your actions and decisions, acknowledging past mistakes, and learning from them to pave the way for a renewed sense of purpose and direction. Ultimately, The Aeon challenges you to seek enlightenment and wisdom, guiding you towards a path of continuous improvement and evolution." },
    { name: "The Universe", meaning: "Achievement, fulfillment, and cosmic balance.", description: "Signifies achievement, fulfillment, and cosmic balance today. It indicates that you have reached a significant milestone or completed a major project, reflecting a sense of accomplishment and fulfillment. This card also suggests that you have integrated various aspects of your life, achieving a state of inner balance and harmony. Embrace your successes and recognize the value of your accomplishments. Additionally, it invites you to expand your perspective, connecting with the broader cosmic forces and recognizing your role within the grand scheme of things. This is a time of spiritual growth and heightened awareness, encouraging you to celebrate your achievements and look forward to new beginnings with confidence and optimism." },
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

document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;

    console.log('Form submitted:', { username, email, question });

    alert('Thank you for your question!');
});

$(document).ready(function() {
    var down = false;
    var scrollLeft = 0;
    var x = 0;
  
    $('.right-box').mousedown(function(e) {
      down = true;
      scrollLeft = $(this).scrollLeft();
      x = e.clientX;
    }).mouseup(function() {
      down = false;
    }).mousemove(function(e) {
      if (down) {
        $(this).scrollLeft(scrollLeft + x - e.clientX);
      }
    }).mouseleave(function() {
      down = false;
    });
  });


  function setLanguage(language) {
    fetch(`assets/javascript/${language}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').innerText = data.title;
            document.getElementById('description').innerText = data.description;
        })
        .catch(error => console.error('Error loading language file:', error));
}

// Optionally, set a default language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en'); // Default to English
});


