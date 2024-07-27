import React from 'react';
import './App.css';
import { Bezie } from './components/Bezie/Bezie';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="y"></div>
                <div className="x"></div>
                <div className="graphic">
                    <Bezie />
                </div>
            </div>
        </div>
    );
}

export default App;
