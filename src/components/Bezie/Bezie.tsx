import React, { FC, useEffect, useRef, useState } from 'react';
// import './style.css';
import { useSpring, animated } from '@react-spring/web';
import Man from '../../assets/man.webp';
import { generateRandomNumberInRange } from '../../utils';
import { svgPathProperties } from 'svg-path-properties';

const Bezie = () => {
    const [pathLine, setPathLine] = useState('M 0 700 Q 600 700 800 334');
    const [pathShadow, setPathShadow] = useState(
        'M 0 700 Q 600 700 800 334 L 800 700 Z'
    );

    const [endPoint, setEndPoint] = useState<{ x: number; y: number }>({
        x: 800,
        y: 334,
    });

    const svgRef = useRef<SVGPathElement | null>(null);

    const props = useSpring({
        d: pathLine as string,
        s: pathShadow as string,
        config: { duration: 2000 }, // длительность анимации
        // onChange: () => {
        //     if (svgRef.current) {
        //         const prop = new svgPathProperties(
        //             svgRef.current.getAttribute('d') || ''
        //         );
        //         const end = prop.getPointAtLength(prop.getTotalLength());
        //         setEndPoint({ x: end.x, y: end.y });
        //     }
        // },
    });

    useEffect(() => {
        if (svgRef.current) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'attributes' &&
                        mutation.attributeName === 'd'
                    ) {
                        const data = mutation.target.getAttribute('d');
                        const coordinates = data.split(' ').slice(-2);
                        setEndPoint({ x: coordinates[0], y: coordinates[1] });
                    }
                });
            });
            observer.observe(svgRef.current, {
                attributes: true,
                attributeFilter: ['d'],
            });

            return () => observer.disconnect();
        }
    }, [pathShadow, pathLine]);

    // if (svgRef.current) {
    //     const prop = new svgPathProperties(
    //         svgRef.current.getAttribute('d') || ''
    //     );
    //     const end = prop.getPointAtLength(prop.getTotalLength());
    //     setEndPoint({ x: end.x, y: end.y });
    // }

    useEffect(() => {
        const timer = setInterval(() => {
            const randomX = generateRandomNumberInRange(760, 840);
            const randomY = generateRandomNumberInRange(334, 300);
            const newPathLine = `M 0 700 Q 600 700 ${randomX} ${randomY}`;
            const newPathShadow = `M 0 700 Q 600 700 ${randomX} ${randomY} L ${randomX} 700 Z`;

            setPathLine(newPathLine);
            setPathShadow(newPathShadow);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div
                className="man"
                style={{
                    transform: `translate(${endPoint.x}px, -${endPoint.y + 75}px)`,
                }}
            >
                <img src={Man} alt="man" className="man" />
            </div>
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
                    {/*<circle cx="0" cy="700" r="6" fill="red" />*/}
                    {/*<circle cx={point1.x} cy={point1.y} r="6" fill="green" />*/}
                    {/*<circle cx={point2.x} cy={point2.y} r="6" fill="yellow" />*/}
                    <animated.path
                        ref={svgRef}
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
        </div>
    );
};

export default Bezie;
