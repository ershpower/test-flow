import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="y"></div>
                <div className="x"></div>
                <div className="grapgic">
                    <svg style={{ height: '700px' }}>
                        <defs>
                            <linearGradient
                                id="grad"
                                x1="0"
                                x2="1"
                                y1="0"
                                y2="1"
                            >
                                <stop
                                    stopColor="#9d7aff"
                                    stopOpacity=".33"
                                ></stop>
                                <stop
                                    offset=".987"
                                    stopColor="#9d7aff"
                                    stopOpacity="0"
                                ></stop>
                            </linearGradient>
                            <linearGradient
                                id="grad_stroke"
                                x1="0"
                                x2="1"
                                y1="0"
                                y2="1"
                            >
                                <stop stopColor="#9D7AFF"></stop>
                                <stop offset=".787" stopColor="#622BFC"></stop>
                                <stop
                                    offset="1"
                                    stopColor="#5c24fc"
                                    stopOpacity="0"
                                ></stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <path
                                d="M 0 499 Q 260.7359999996424 499 391.10399999946355 334.41040000022576"
                                fill="transparent"
                                stroke="url(#grad_stroke)"
                            ></path>
                            <path
                                d="M 0 499 Q 260.7359999996424 499 391.10399999946355 334.41040000022576 L 391.10399999946355 499 Z"
                                fill="url(#grad)"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default App;
