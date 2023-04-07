import React, { useState } from 'react';
import './index.css'

interface Card {
    id: number;
    value: string;
    isFlipped: boolean;
}

function getWords(): string[] {
    const words: string[] = [];
    for (let i = 0; i < 25; i++) {
        words.push("card");
    }
    return words;
}

function generateCards(words: string[]): Card[] {    
    const cards: Card[] = [];
    for (let i = 0; i < 25; i++) {
        const newCard: Card = {
            id: i,
            value: words[i],
            isFlipped: false,
        };
        cards.push(newCard);
    }
    return cards;
}

function shuffleCards(cards: Card[]): Card[] {
    let shuffledCards: Card[] = [];
    for (let i = 0; i < 25; i++) {
        const randIndex = Math.floor(Math.random() * cards.length);
        const randCard: Card = cards[randIndex];
        shuffledCards.push(randCard);
        cards.splice(randIndex, 1)
    }
    return shuffledCards;
}

function renderCards(cards: Card[]) {
    const buttons = [];
    for (let i = 0; i < 25; i++) {
        const button = (
        <button className="card">
            {cards[i].value + " " + cards[i].id + " " + cards[i].isFlipped}
        </button>
        );
    buttons.push(button);
    }
    return <div className="card-grid">{buttons}</div>;
}

function handleCardClick(col: number, row: number) {
    // TODO
}

function App() {
    //const [cards, setCards] = useState<Array<string>>([]);
    //const [flipped, setFlipped] = useState<Array<number>>([]);
    //const [solved, setSolved] = useState<Array<number>>([]);
    
    const cards = generateCards(getWords());
    const shuffledCards = shuffleCards(cards);
    

    return (
        <div className='container'>
            {renderCards(shuffledCards)}
        </div>
    );
}
export default App;