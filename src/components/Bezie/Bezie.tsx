import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { generateRandomNumberInRange } from '../../utils';
import Man from '../../assets/man.webp';
import './style.css';

const halfImgHeight = 75;
const halfImgWidth = 50;

export const Bezie = () => {
    const [pathVariants, setPathVariants] = useState({
        hidden: { d: 'M 0 700 Q 600 700 800 334' },
        visible: { d: 'M 0 700 Q 600 700 900 334' },
    });

    const [pathVariantsShadow, setPathVariantsShadow] = useState({
        hidden: { d: 'M 0 700 Q 600 700 800 334 L 800 700 Z' },
        visible: { d: 'M 0 700 Q 600 700 900 334 L 800 700 Z' },
    });

    const [coordinates, setCoordinates] = useState<string[]>([]);

    const bezieLineRef = useRef<any>(null);

    useEffect(() => {
        if (bezieLineRef.current) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'attributes' &&
                        mutation.attributeName === 'd'
                    ) {
                        const targetElement = mutation.target as Element;
                        const attributeD =
                            targetElement.getAttribute('d') || '';
                        const coordinates = attributeD.split(' ').slice(-2);
                        setCoordinates([...coordinates]);
                    }
                });
            });
            observer.observe(bezieLineRef.current, {
                attributes: true,
                attributeFilter: ['d'],
            });

            return () => observer.disconnect();
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const randomX = generateRandomNumberInRange(760, 840);
            const randomY = generateRandomNumberInRange(320, 350);

            const visiblePath = `M 0 700 Q 600 700 ${randomX} ${randomY}`;
            setPathVariants((prev) => ({
                ...prev,
                visible: { d: visiblePath },
            }));

            const visiblePathShadow = `M 0 700 Q 600 700 ${randomX} ${randomY} L ${randomX} 700 Z`;
            setPathVariantsShadow((prev) => ({
                ...prev,
                visible: { d: visiblePathShadow },
            }));
        }, 500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="wrapper">
            <div className="man">
                <img
                    src={Man}
                    alt="man"
                    className="man"
                    style={{
                        transform: `translate(${+coordinates[0] - halfImgWidth}px, ${+coordinates[1] - halfImgHeight}px)`,
                    }}
                />
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
                    {/*<circle*/}
                    {/*    cx={coordinates[0]}*/}
                    {/*    cy={coordinates[1]}*/}
                    {/*    r="6"*/}
                    {/*    fill="green"*/}
                    {/*/>*/}
                    {/*<circle cx={point2.x} cy={point2.y} r="6" fill="yellow" />*/}
                    <motion.path
                        ref={bezieLineRef}
                        fill="transparent"
                        stroke="url(#grad_stroke)"
                        strokeWidth="2"
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: {
                                duration: 0.5,
                                repeat: Infinity,
                            },
                        }}
                    ></motion.path>
                    <motion.path
                        variants={pathVariantsShadow}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: {
                                duration: 0.5,
                                repeat: Infinity,
                            },
                        }}
                        fill="url(#grad)"
                    ></motion.path>
                </g>
            </svg>
        </div>
    );
};
