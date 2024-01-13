import { Card } from "flowbite-react";
import pokedex from "./assets/pokedex.png";
import LM from "./assets/LightningMath.png"
import weather from "./assets/WeatherApp.png"


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
  
  window.addEventListener("scroll", reveal);
  
  reveal();

function Projects(){


    return(
        <div className="text-white h-full font-Varela pb-9 scroll-smooth z-20 relative">
            <div className="flex justify-center"> 
            <div className="w-4/6 h-5/6">
            <div className="reveal">
            <h1 className="text-5xl py-5 font-Varela">Projects</h1>
            <hr className="w-full py-2"/>
            </div>
            
            
        <div className="grid grid-cols-3 grid-rows-0 gap-12 reveal">
            <div className="bg-grey w-full rounded-3xl shadow-md shadow-darkcyan ">
                <div className="relative overflow-hidden group hover:cursor-pointer">
                <a href="https://anaspokedex.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={pokedex} className="p-3"></img>
                            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-allduration-300">
                            <button className=" bg-black text-white py-2 px-2 m-2">HTML</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">CSS</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">ReactJs</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">APIs</button>
                            </div>
                            </a>
                        </div>
                        <h2 className="text-center text-xl">PokeTools App</h2>
                        <h3 className="px-3 pb-2">An interactive Web App that utilizes the official PokeApi to display and organize information on 800+ Pokemon</h3>
            </div>
            <div className=" bg-grey w-full rounded-3xl shadow-md shadow-darkcyan z-20">
                <div className="relative overflow-hidden group hover:cursor-pointer">
                <a href="https://github.com/anaskhan2703/Lightning_Math_Repo" target="_blank" rel="noopener noreferrer">
                            <img src={LM} className="p-3"></img>
                            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-allduration-300">
                            <button className=" bg-black text-white py-2 px-2 m-2">Java</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">JUnit</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">Figma</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">Android Studio</button>
                            </div>
                            </a>
                        </div>
                        <h2 className="text-center text-xl">LightningMath Android App</h2>
                        <h3 className="px-3 pb-2">A mobile app where the user has to solve a problem within the time frame. </h3>
            </div>
            <div className="bg-grey w-full rounded-3xl shadow-md shadow-darkcyan z-20">
                <div className="relative overflow-hidden group hover:cursor-pointer">
                <a href="https://anasweatherapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={weather} className="p-3"></img>
                            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-allduration-300">
                            <button className=" bg-black text-white py-2 px-2 m-2">HTML</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">CSS</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">ReactJs</button>
                            <button className=" bg-black text-white py-2 px-2 m-2">REST APIs</button>
                            </div>
                            </a>
                        </div>
                        <h2 className="text-center text-xl">Weather Detection App</h2>
                        <h3 className="px-3 pb-2">An Interactive web app that utilizes the weather.org API to display accurate weather, humidity, and wind speed of any city/country</h3>
            </div>
        </div>
    

            </div>
            </div>

        </div>
    );

}

export default Projects;


