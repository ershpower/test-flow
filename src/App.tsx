import React, { useState } from 'react';
import './App.css';
import Bezie from './components/Bezie/Bezie';
import Man from './assets/man.webp';

const DELAY = 200;
const diffX = 40;
const diffY = 10;

function App() {
    const [point1, setPoint1] = useState({ x: 600, y: 700 });
    const [point2, setPoint2] = useState({ x: 800, y: 334 });

    return (
        <div className="App">
            <div className="container">
                <div className="y"></div>
                <div className="x"></div>
                {/*<div className="man">*/}
                {/*    <img*/}
                {/*        src={Man}*/}
                {/*        alt="man"*/}
                {/*        className="man"*/}
                {/*        style={{*/}
                {/*            transform: `translate(${point2.x - 20}px, -${point2.y}px)`,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="graphic">
                    <Bezie point1={point1} point2={point2} />
                </div>
            </div>
        </div>
    );
}

export default App;
