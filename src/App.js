import LoadingCard from "./LoadingCard";
import About from "./About";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Experience from "./Experience";
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer";

function App() {
  return (

    <div className="bg-radial-gradient scroll-smooth">
        <div className="stars" id="stars"></div>
        <div className="stars" id="stars2"></div>
        <div className="stars" id="stars3"></div>
        <LoadingCard />
        <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
