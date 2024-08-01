import "./app.scss";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return <div>
      <Cursor/> 
    <section id="Homepage"><NavBar/>
     <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
     <section ><Skills/></section>
     <section id="Portfolio"><Parallax type="portfolio"/></section>
   <Portfolio/>
    <section id="Contact"><Contact/></section>  
   
    
  </div>
};

export default App;
