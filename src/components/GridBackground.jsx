import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-scroll';

function GridBackground(){
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" className="opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                        <motion.path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" initial={{ strokeDasharray: 200, strokeDashoffset: 200 }} animate={{ strokeDashoffset: 0 }} transition={{duration: 3,ease: "easeInOut",}}/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F111A_80%)]"></div>
        </div>
    )
}

export default GridBackground;