import React, { FC } from 'react';
import './style.css';

interface IPoint {
    x: number;
    y: number;
}

interface IBezieProps {
    point1: IPoint;
    point2: IPoint;
}

const Bezie: FC<IBezieProps> = ({ point1, point2 }) => {
    return (
        <svg style={{ height: '700px', width: '1700px' }}>
            <defs>
                <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="#9d7aff" stopOpacity=".33"></stop>
                    <stop
                        offset=".987"
                        stopColor="#9d7aff"
                        stopOpacity="0"
                    ></stop>
                </linearGradient>
                <linearGradient id="grad_stroke" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="#9D7AFF"></stop>
                    <stop offset=".787" stopColor="#622BFC"></stop>
                    <stop offset="1" stopColor="#5c24fc" stopOpacity="0"></stop>
                </linearGradient>
            </defs>
            <g>
                {/*<circle cx="0" cy="700" r="6" fill="red" />*/}
                {/*<circle cx={point1.x} cy={point1.y} r="6" fill="green" />*/}
                {/*<circle cx={point2.x} cy={point2.y} r="6" fill="yellow" />*/}
                <path
                    d={`M 0 700 Q ${point1.x} ${point1.y} ${point2.x} ${point2.y}`}
                    fill="transparent"
                    stroke="url(#grad_stroke)"
                ></path>
                <path
                    d={`M 0 700 Q ${point1.x} ${point1.y} ${point2.x} ${point2.y} L ${point2.x} 700 Z`}
                    fill="url(#grad)"
                ></path>
            </g>
        </svg>
    );
};

export default Bezie;
