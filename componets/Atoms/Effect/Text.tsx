"use client"

import {motion} from 'framer-motion';

import {ReactNode} from "react";

const TextEffect = (props: { children: ReactNode, className: string }) => {
    const fadeInVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{duration: 1}}>
            <p className={props.className}>{props.children}</p>
        </motion.div>
    )
}

export default TextEffect


