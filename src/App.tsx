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
        words.push("foo");
    }
    return words;
}

function generateCards(): Card[] {
    const words = getWords();
    
    const cards: Card[] = [];
    let id = 0;
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

function handleCardClick(col: number, row: number) {
    // TODO
}
/*
function shuffleCards(cards): typeof cards {

}
*/

function App() {
    //const [cards, setCards] = useState<Array<string>>([]);
    //const [flipped, setFlipped] = useState<Array<number>>([]);
    //const [solved, setSolved] = useState<Array<number>>([]);
    
    const cards = generateCards();
    //console.log(cards[2].value);

    function renderCards() {
        const buttons = [];
        for (let i = 0; i < 25; i++) {
            const button = (
            <button className="card">
                {cards[i].value}
            </button>
            );
        buttons.push(button);
        }
        return <div className="card-grid">{buttons}</div>;
    }

    return (
        <div className='container'>
            {renderCards()}
        </div>
    );
}
export default App;