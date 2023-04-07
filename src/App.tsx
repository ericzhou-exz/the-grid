import React, { useState } from 'react';
import './index.css'

/*
class Card {
    private id: number;
    private value: string;
    private isFlipped: boolean;

    constructor(value: string, id: number) {
        this.value = value;
        this.id = id;
        this.isFlipped = false;
    }
}

function generateCards = (): Card[] => {
    const cards: Card = [];


    for (let i = 0; i < 25; i++) {
        cards.push(card);
    }
    return cards;
}
/*
function shuffleCards(cards): typeof cards {

}
*/

function App() {
    const [cards, setCards] = useState<Array<string>>([]);
    const [flipped, setFlipped] = useState<Array<number>>([]);
    const [solved, setSolved] = useState<Array<number>>([]);
    
    function handleCardClick(col: number, row: number) {
        // TODO
    }



    function renderCards() {
        const cards = [];
        let id = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const card = (
                    <button className="card" onClick={() => handleCardClick(i, j)}>
                        {id}
                    </button>
                );
                cards.push(card);
                id++;
            }
        }
        return <div className="card-grid">{cards}</div>;
    }

    return (
        <div className='container'>
            {renderCards()}
        </div>
    );
}
export default App;