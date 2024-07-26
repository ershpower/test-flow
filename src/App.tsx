import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import Bezie from './components/Bezie/Bezie';
import { generateRandomNumberInRange } from './utils';
import Man from './assets/man.webp';

const DELAY = 200;
const diffX = 40;
const diffY = 10;

function App() {
    const [point1, setPoint1] = useState({ x: 600, y: 700 });
    const [point2, setPoint2] = useState({ x: 800, y: 334 });

    useEffect(() => {
        const timer = setInterval(() => {
            const generatedNumber = generateRandomNumberInRange(
                point2.x - diffX,
                point2.x + diffX
            );

            setPoint2((prev) => ({
                ...prev,
                x: generatedNumber,
            }));
        }, DELAY);

        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            const generatedNumber = generateRandomNumberInRange(
                point2.y - diffY,
                point2.y + diffY
            );
            setPoint2((prev) => ({
                ...prev,
                y: generatedNumber,
            }));
        }, DELAY);

        return () => clearInterval(timer);
    }, []);

    const handleChangePoint2X = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPoint2((prev) => ({
            ...prev,
            x: +value,
        }));
    };

    const handleChangePoint2Y = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const reversedValue = 700 - +value;
        setPoint2((prev) => ({
            ...prev,
            y: +reversedValue,
        }));
    };

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
                            transform: `translate(${point2.x - 20}px, -${point2.y}px)`,
                        }}
                    />
                </div>
                <div className="graphic">
                    <Bezie point1={point1} point2={point2} />
                </div>
            </div>
            правее
            <input
                type="range"
                min={600}
                max={1700}
                onChange={handleChangePoint2X}
            />
            <br />
            выше
            <input
                type="range"
                min={0}
                max={700}
                onChange={handleChangePoint2Y}
            />
        </div>
    );
}

export default App;
