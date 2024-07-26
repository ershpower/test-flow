import React, { FC, useEffect, useState } from 'react';
// import './style.css';
import { useSpring, animated } from '@react-spring/web';
import { generateRandomNumberInRange } from '../../utils';

interface IBezieProps {
    randomX: number;
    randomY: number;
}

const Bezie: FC<IBezieProps> = ({ randomY, randomX }) => {
    const [pathLine, setPathLine] = useState('M 0 700 Q 600 700 800 334');
    const [pathShadow, setPathShadow] = useState(
        'M 0 700 Q 600 700 800 334 L 800 700 Z'
    );

    const props = useSpring({
        d: pathLine as string,
        s: pathShadow as string,
        config: { duration: 2000 }, // длительность анимации
    });

    useEffect(() => {
        // const randomX = generateRandomNumberInRange(760, 840);
        // const randomY = generateRandomNumberInRange(334, 300);
        const newPathLine = `M 0 700 Q 600 700 ${randomX} ${randomY}`;
        const newPathShadow = `M 0 700 Q 600 700 ${randomX} ${randomY} L 800 700 Z`;
        setPathLine(newPathLine);
        setPathShadow(newPathShadow);
    }, [randomX, randomY]);
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
                <animated.path
                    className={'line'}
                    // eslint-disable-next-line react/prop-types
                    d={props.d}
                    fill="transparent"
                    stroke="url(#grad_stroke)"
                ></animated.path>
                <animated.path
                    className={'shadow'}
                    // eslint-disable-next-line react/prop-types
                    d={props.s}
                    fill="url(#grad)"
                ></animated.path>
            </g>
        </svg>
    );
};

export default Bezie;
