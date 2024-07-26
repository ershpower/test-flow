import React, { useEffect, useState } from 'react';
import './App.css';
import Bezie from './components/Bezie/Bezie';
import Man from './assets/man.webp';
import { generateRandomNumberInRange } from './utils';

const DELAY = 200;
const diffX = 40;
const diffY = 10;

function App() {
    const [randomX, setRandomX] = useState(800);
    const [randomY, setRandomY] = useState(334);

    useEffect(() => {
        const timer = setInterval(() => {
            const newRandomX = generateRandomNumberInRange(760, 840);
            const newRandomY = generateRandomNumberInRange(334, 300);
            setRandomX(newRandomX);
            setRandomY(newRandomY);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="App">
            <div className="container">
                <div className="y"></div>
                <div className="x"></div>
                <div className="man">
                    <img
                        src={Man}
                        alt="man"
                        className="man"
                        style={{
                            transform: `translate(${randomX - 20}px, -${randomY}px)`,
                        }}
                    />
                </div>
                <div className="graphic">
                    <Bezie randomX={randomX} randomY={randomY} />
                </div>
            </div>
        </div>
    );
}

export default App;
