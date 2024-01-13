import { FaLinkedinIn, FaGithub } from "react-icons/fa";

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

function Contact() {
  return (
    <div className=" text-white h-full font-Varela pb-9 flex flex-col items-center scroll-smooth relative z-20">
      <div className="w-4/6 text-center">
        <div className="reveal">
        <h1 className="text-5xl py-5 font-Varela text-start">Contact</h1>
        <hr className="w-full py-2" />
        
        <p className="text-2xl mb-2 ">
          I'm always open to new opportunities or collaborations. Feel free to get in touch!
        </p>

        <button onClick={() => (window.location = 'mailto:anaskhan2703@gmail.com')} class='glowing-btn'><span class='glowing-txt'>EM<span class='faulty-letter'>AI</span>L</span>
        </button>
        
        <div className="flex justify-center mt-10">
        <a href="https://www.linkedin.com/in/anaskhan2703" target="_blank">
          <FaLinkedinIn className="text-4xl mx-5 hover:text-lightcyan hover:cursor-pointer hover:scale-125 z-20 relative" />
        </a>
        <a href="https://github.com/anaskhan2703" target="_blank">
          <FaGithub className="text-4xl mx-5 hover:text-lightcyan hover:cursor-pointer hover:scale-125 z-20 relative" />
        </a>
        </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Contact;
