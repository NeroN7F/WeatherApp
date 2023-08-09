"use client"

import React, {useState, useEffect} from 'react';

import {motion, useAnimation} from 'framer-motion';

interface CounterAnimationProps {
    target: number;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({target}) => {

    const [count, setCount] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        if (count < target) {
            controls.start({y: 0, opacity: 1, transition: {duration: 0.5}});
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [count, controls, target]);

    return (
        <div>
            <motion.div
                initial={{y: 20, opacity: 0}}
                animate={controls}
            >
                <p className='xl2' style={{fontWeight: 'bold'}}>{count}&deg;</p>
            </motion.div>
        </div>
    );

};

export default CounterAnimation;
