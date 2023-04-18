import { useState } from 'react';
import './Game.css';

interface GameProps {
    maxItems: number;
}

const Game = ({ maxItems }: GameProps) => {
    const [itemsRemaining, setItemsRemaining] = useState(maxItems);
    const [currentPlayer, setCurrentPlayer] = useState('Player One');
    const [winner, setWinner] = useState('');

    const removeItems = (amount: number) => {
        const newItemsRemaining = itemsRemaining - amount;
        if (newItemsRemaining < 0) {
            setWinner('Player Two');
        } else if (newItemsRemaining === 0) {
            setWinner(currentPlayer);
        } else {
            setItemsRemaining(newItemsRemaining);
            setCurrentPlayer(currentPlayer === 'Player One' ? 'Player Two' : 'Player One');
        }
    };

    const handleItemClick = () => {
        if (winner) {
            // Reset the game if there's a winner
            setItemsRemaining(maxItems);
            setCurrentPlayer('Player One');
            setWinner('');
        }
    };

    const handleResetClick = () => {
        setItemsRemaining(maxItems);
        setCurrentPlayer('Player One');
        setWinner('');
    };


    return (
        <>
            <div className="items-container" onClick={handleItemClick}>
                {Array.from({ length: itemsRemaining }).map((_, index) => (
                    <div key={index} className="coin"></div>
                ))}
            </div>

            {winner ? <h2 className="winner">{winner} wins!</h2> : <h2 className="current-player">{currentPlayer}'s turn</h2>}

            {winner &&
                <button className="primary reset-button" onClick={handleResetClick}>
                    Reset
                </button>
            }

            <div className="controls-container">
                <div className={`${currentPlayer === 'Player One' && 'highlight'}`}>
                    <h3>Player One</h3>
                    <button className="secondary" onClick={() => removeItems(1)}>
                        Remove 1 item
                    </button>
                    <button className="secondary" onClick={() => removeItems(2)}>
                        Remove 2 items
                    </button>
                    <button className="secondary" onClick={() => removeItems(3)}>
                        Remove 3 items
                    </button>
                </div>

                <div className={`${currentPlayer === 'Player Two' && 'highlight'}`}>
                    <h3>Player Two</h3>
                    <button className="secondary" onClick={() => {
                        if (currentPlayer === 'Player Two') {
                            removeItems(1);
                        }
                    }}>
                        Remove 1 item
                    </button>
                    <button className="secondary" onClick={() => {
                        if (currentPlayer === 'Player Two') {
                            removeItems(2);
                        }
                    }}>
                        Remove 2 items
                    </button>
                    <button className="secondary" onClick={() => {
                        if (currentPlayer === 'Player Two') {
                            removeItems(3);
                        }
                    }}>
                        Remove 3 items
                    </button>
                </div>
            </div>
        </>
    );
};

export default Game;
