import React from 'react'
import './NavBar.scss'
import {motion} from "framer-motion";
import SideBar from '../SideBar/SideBar';

const NavBar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <SideBar/>
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1.5}}
        transition={{duration:0.5}}
        >
            Harsha M Terdal
            </motion.span>
        <div className="social">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
            <a href="#"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
