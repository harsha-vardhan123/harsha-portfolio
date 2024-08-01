import React from 'react'
import { motion } from 'framer-motion';
import "./Hero.scss"

const textVarients = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVarients = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
  
  
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVarients} initial="initial" animate="animate" >
                    <motion.h2 variants={textVarients}>Harsha M Terdal</motion.h2>
                    <motion.h1 variants={textVarients}>Web developer and UI designer</motion.h1>
                    <motion.div className="buttons" variants={textVarients}>
                        <a href="#Portfolio"><button  variants={textVarients}>See the Latest Works</button></a>
                        <a href="#Contact"><button variants={textVarients}>Contact Me</button></a>
                    </motion.div>
                    <motion.img variants={textVarients} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVarients} initial="initial" animate="animate">
                I Love Web Development
            </motion.div>
            <div className="imageContainer">
                <img src="/me.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
