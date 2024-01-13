import meImage from "./assets/aboutmepic.jpg";
import html from "./assets/html.png";
import java from "./assets/java.png";
import python from "./assets/python.png";
import tailwind from "./assets/tailwind.png";
import sql  from "./assets/sql.png";
import react from  "./assets/react.png";
import { Carousel } from 'flowbite-react';
import { Card } from 'flowbite-react';


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

function About(){
   
    
    const data = [
        {
            name: 'HTML',
            img: html
        },
        {
            name: 'Tailwind',
            img: tailwind
        },
        {
            name: 'ReactJS',
            img: react
        },
        {
            name: 'Python',
            img: python
        },
        {
            name: 'Java',
            img: java
        },
        {
            name: 'sql',
            img: sql
        }
    ]

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    return(
        <div className="reveal z-20 relative">
        <div className="text-white h-full font-Varela pb-9 scroll-smooth ">
            <div className="flex justify-center relative z-20  ">
            <div className=" w-4/6 h-5/6 flex">
                <div className="flex flex-col w-4/6 h-4/6">
                <h1 className="text-5xl py-5 font-Varela">About me</h1>
                <hr className="w-full py-2 "/>
                <h1 className="text-xl py-5 pr-2 relative z-20 ">Hello! My name is Anas Khan. I'm from Ontario, Canada and I am a student at York University, pursuing a BSc Hons. in Computer Science. </h1>
                <h1 className="text-xl py-5 pr-2 relative z-20">I'm very passionate in learning about the fields and subfields of Computer Science. Some of my areas of interest are Web development, Mobile App development, CyberSecurity, and big Data. </h1>
                <h1 className="text-xl py-5 pr-2 relative z-20">With a strong passion in computer science and a natural curiosity, I'm always seeking new challenges and opportunities to expand my skills and knowledge.</h1>
                </div>
                <div className="w-2/6 h-4/6 ">
                <img src={meImage} className="shadow-lg shadow-darkcyan rounded-full h-full object-fill bg-red-400 z-20 relative" alt=""></img>
                </div>
                </div>
            </div>
            <div className="flex justify-center z-20 ">
            <h1 className="pb-5 text-xl ">Some Technologies I have worked with</h1> 
            </div>
            
            <div className="flex justify-center items-center pb-5  ">
                <div className="w-1/6 h-80 rounded-3xl bg-grey shadow-lg shadow-darkcyan z-20 relative">
                    <Carousel>
                        <div className=" flex flex-col justify-center items-center rounded-3xl">
                        <img src= {html} className="w-3/6 "></img>
                        <h1 className="">HTML</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center rounded-3xl">
                        <img src= {tailwind} className="w-3/6 "></img>
                        <h1 className="">TailwindCSS</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center rounded-3xl">
                        <img src= {java} className="w-3/6 "></img>
                        <h1 className="">Java</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center rounded-3xl">
                        <img src= {react} className="w-3/6 "></img>
                        <h1 className="">ReactJS</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center rounded-3xl">
                        <img src= {sql} className="w-3/6 "></img>
                        <h1 className="">MySQL</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center rounded-3xl">
                        <img src= {python} className="w-3/6 "></img>
                        <h1 className="">Python</h1>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
        </div>
    );





}

export default About;