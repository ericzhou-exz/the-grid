import React, { useState } from 'react';
import './index.css'

class Card {
    id: number;
    value: string;
    isFlipped: boolean;

    constructor(id: number, value: string, isFlipped: boolean) {
        this.id = id;
        this.value = value;
        this.isFlipped = isFlipped;
    }

    public static shuffle(cards: Card[]): Card[] {
        let shuffledCards: Card[] = [];
        for (let i = 0; i < 25; i++) {
            const randIndex = Math.floor(Math.random() * cards.length);
            const randCard: Card = cards[randIndex];
            shuffledCards.push(randCard);
            cards.splice(randIndex, 1)
        }
        return shuffledCards;
    }

    public static generate(): Card[] {
        const words = Card.getWords();  
        const cards: Card[] = [];
        for (let i = 0; i < 25; i++) {
            const newCard = new Card(i, words[i], false);
            cards.push(newCard);
        }
        return cards;
    }

    private static getWords(): string[] {
        const words: string[] = [];
        for (let i = 0; i < 25; i++) {
            words.push("card");
        }
        return words;
    }

    public static render(cards: Card[]) {
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
}



function handleCardClick(id: number) {

    // TODO
}

function App() {
    //const [cards, setCards] = useState<Array<string>>([]);
    //const [flipped, setFlipped] = useState<Array<number>>([]);
    //const [solved, setSolved] = useState<Array<number>>([]);
    
    const shuffledCards = Card.shuffle(Card.generate());

    return (
        <div className='container'>
            {Card.render(shuffledCards)}
        </div>
    );
}
export default App;