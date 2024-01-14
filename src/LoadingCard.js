import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useState, useEffect} from "react";
import { Button } from 'flowbite-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About"; // Import your About component
import Experience from "./Experience"; 
import Projects from "./Projects"; 
import Contact from "./Contact"; 
import Resume from "./assets/Resume.pdf"

function reveal(){

  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++){
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 150;
  if (elementTop < windowHeight - elementVisible){
    reveals[i].classList.add("active"); 
  } else {
    reveals[i].classList.remove("active");
  }
}
}

window.addEventListener("animationstart", reveal);

reveal();

function App() {

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen font-Varela">
      <div className="border-8 w-4/6 h-3/6 overflow-hidden rounded-3xl shadow-2xl shadow-lightcyan bg-darkblackZ border-grey phone:flex  justify-around tablet:h-4/6">
        <div className="text-lightcyan mx-5 laptop:items-center laptop:border-r-8 laptop:border-grey laptop:h-full laptop:w-4/6 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center laptop:text-8xl">Hello, <br /> I'm Anas Khan.</h1>
          <h1 className="text-md text-center mt-2 laptop:text-4xl">Third year Computer Science student at York University</h1>
          <a href={Resume} target="_blank" className="mt-2">
            <button className="group p-[3px] relative mt-2 laptop:text-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg transition-all duration-300 ease-in-out " />
              <div className="px-8 py-2 bg-black rounded-[6px] relative flex items-center justify-center transition-all duration-300 ease-linear group-hover:bg-transparent">
                <span className="text-white transition-all duration-300 ease-linear group-hover:translate-x-2">RESUME </span>
                <HiOutlineArrowRight className="text-white transition-all duration-300 ease-linear group-hover:translate-x-2"/>
              </div>  
            </button>
          </a>
        </div>
        <ul className=" hidden laptop:flex laptop:flex-col laptop:justify-around laptop:items-center laptop:w-2/6">
           <li className="px-4 text-4xl text-white cursor-pointer capitalize ease-in-out hover:scale-150 transition-transform duration-300 hover:text-lightcyan"><a href="#about">About</a></li>
           <li className="px-4 text-4xl text-white cursor-pointer capitalize ease-in-out hover:scale-150 transition-transform duration-300 hover:text-lightcyan"><a href="#experience">Experience</a></li>
           <li className="px-4 text-4xl text-white cursor-pointer capitalize ease-in-out hover:scale-150 transition-transform duration-300 hover:text-lightcyan"><a href="#projects">Projects</a></li>
           <li className="px-4 text-4xl text-white cursor-pointer capitalize ease-in-out hover:scale-150 transition-transform duration-300 hover:text-lightcyan"><a href="#contact">Contact</a></li>
           </ul>
      </div>
    </div>
  );
  
}

export default App;
