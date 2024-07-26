import React, { ChangeEvent, useState } from 'react';
import './App.css';
import Bezie from './components/Bezie/Bezie';

function App() {
    const [point1, setPoint1] = useState({ x: 600, y: 700 });
    const [point2, setPoint2] = useState({ x: 600, y: 334 });

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
