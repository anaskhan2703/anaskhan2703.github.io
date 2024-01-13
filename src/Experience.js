import { Button, Timeline } from 'flowbite-react';

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

window.addEventListener("hashchange", reveal);

reveal();

function App(){

    return(
        <div className="text-white h-full font-Varela pb-9 scroll-smooth relative z-20 ">
            <div className="flex justify-center">
                <div className="w-4/6 h-5/6">
                  <div className='reveal'>
                <h1 className="text-5xl py-5 font-Varela reveal">Experience</h1>
                <hr className="w-full py-2 block"/>
                <div>
                <Timeline className='reveal'>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content className='bg-grey rounded-3xl p-5 '>
          <Timeline.Time className='text-white text-lg'>January 2023</Timeline.Time>
          <Timeline.Title className='text-white text-2xl'>Programming Instructor | <span className='text-white text-lg italic'>Best Brains Learning centers</span></Timeline.Title>
          <Timeline.Body className='text-white text-lg'>
            <ul>
                <li>Tutored <span className="text-lightcyan hover:text-darkcyan hover:cursor-default">Python</span> fundamentals to a class of 36 students including object-oriented, problem-solving, application design, building, and testing, and algorithm fundamentals</li>
                <li>Led a team of 2 tutors to run courses and supervise <span className="text-lightcyan hover:text-darkcyan hover:cursor-default">Software Engineering </span>project boot camps virtually and in person</li>
                <li>Delivered <span className="text-lightcyan hover:text-darkcyan hover:cursor-default">Web Development</span>  curriculum to a class of 8 students, ensuring efficient learning</li>
            </ul>
          </Timeline.Body>

        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content className='bg-grey rounded-3xl p-5 '>
          <Timeline.Time className='text-white text-lg'>May 2023</Timeline.Time>
          <Timeline.Title className='text-white text-2xl'>Programmer Assistant | <span className='text-white text-lg italic'>Lassonde School of Engineering</span></Timeline.Title>
          <Timeline.Body className='text-white text-lg'>
          <ul className="text-lg">
            <li>Utilized <span className="text-lightcyan hover:text-darkcyan hover:cursor-default">Salesforce Lightning</span> to create custom solutions, elevating user engagement by 25%</li>
            <li>Designed an interactive data visualization dashboard using <span className="text-lightcyan hover:text-darkcyan hover:cursor-default"> Power BI </span> for the Lassonde Co-op and Internship division to provide over 500 students with insight on placements</li>
            <li>Integrated automated plagiarism detection using <span className="text-lightcyan hover:text-darkcyan hover:cursor-default"> REST APIs</span>, ensuring streamlined monitoring of academic honesty.</li>
          </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content className='bg-grey rounded-3xl p-5'>
          <Timeline.Time className='text-white text-lg'>January 2024</Timeline.Time>
          <Timeline.Title className='text-white text-2xl'>Cybersecurity Intern | <span className='text-white text-lg italic'>City of Toronto</span></Timeline.Title>
          <Timeline.Body className='text-white text-lg'>
          <ul className="text-lg">
            <li>Leveraged <span className="text-lightcyan hover:text-darkcyan hover:cursor-default">Python</span> scripting to automate security processes, saving 5 hours of manual work each week</li>
            <li>Enhanced operational cyber standards, procedures, and processes, achieving a 20% improvement in alignment with <span className="text-lightcyan hover:text-darkcyan hover:cursor-default"> NIST framework </span> and other cyber security frameworks.</li>
            <li>Developed a monthly education plan to improve the IT security-related skills and technologies of 50+ staff members.</li>
            <li>Utilized <span className="text-lightcyan hover:text-darkcyan hover:cursor-default">SQL injection</span>, cross-site scripting, and <span className="text-lightcyan hover:text-darkcyan hover:cursor-default">OS command injection</span> to identify vulnerabilities in 30+ web applications.</li>
          </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default App;