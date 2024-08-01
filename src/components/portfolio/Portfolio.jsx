import React, { useRef } from 'react'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
import './Portfolio.scss';

const Items = [
    {
        id: 1,
        title:"Satyam International School Website",
        img: "./satyam.png" ,
        desc: "Using FIGMA, the entire website was designed. Reactjs, vite, and tailwindcss were then used to construct the responsive website, which is an SPA (single page application) with form validation and some CSS Animation.",
        desc2:"Using – FIGMA, REACTJS, TAILWINDCSS",
        link: "https://satyam-international.netlify.app/",
    },
    {
        id: 2,
        title:"Personal Portfolio",
        img: "./portfolio.png ",
        desc: "Developed a personal portfolio where you can see my works that i have done and you can also contact me.",
        desc2:"Using – Javascript, React , Framer-motion",
    },
    {
        id: 3,
        title:"Car Rental Landing Page",
        img: "./car-rental.png" ,
        desc: "The landing page of an application for a rental automobile Where the user can view the cars that are available and the pricing for a one-day rental",
        desc2:"Using – Javascript, React, Tailwindcss",
        link: "https://car-rental-app-2024.netlify.app/",
    },
    {
        id: 4,
        title:"Todo List",
        img: "./todo.png" ,
        desc: "A to-do list contains all the tasks that need to be done and can be ticked off accordingly.",
        desc2:"Using – Javascript, React, Tailwindcss",
        link: "https://todos-app-1987.netlify.app/",
    },
    {
        id: 5,
        title:"UI Designs (School CRM)",
        img: "./ui.png" ,
        desc: "User interface designs for School CRM, There are two sorts of users: ADMIN and Students, and each has their own design. Check out the design by clicking the button below.",
        desc2:"Using – Figma",
        link: "https://www.figma.com/design/kiskqNkHcQ0HT4Tosc73so/Final-Ajmer?node-id=9-22125&t=Td4pWQ0X1ee6tlmc-0",
    },
];

const Single =({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-400,400]);


    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" className='projectPreview' />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p>{item.desc2}</p>
                    <a href={item.link}>See Demo</a>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end" , "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,
    });


  return (
  <div className='portfolio' ref={ref}>
    <div className="progress">
        <h1 className='text-5xl'>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
    </div>
    {Items.map(item=>(
        <Single item={item} key={item.id}/>
    ))}
  </div>
  )
}

export default Portfolio
