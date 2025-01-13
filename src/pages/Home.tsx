import { useState } from 'react';
import profilePic from '../assets/images/profile.png';
import Modal from '../components/Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (

    <div className="bg-white dark:bg-dark-background text-darkGray dark:text-white min-h-screen">
      
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-64 bg-primary text-white">
        <h1 className="text-5xl font-bold mb-2">Diego Costa</h1>
        <p className="text-lg mb-4">Full Stack Developer</p>
        <div className="space-x-2">
          <a onClick={() => setIsModalOpen(true)} className="bg-accent text-black py-1 px-3 rounded-full hover:bg-opacity-75 transition duration-300 text-sm">Download CV</a>
          <a href="https://www.linkedin.com/in/diego-costa-caivano" className="bg-secondary text-white py-1 px-3 rounded-full hover:bg-opacity-75 transition duration-300 text-sm">LinkedIn</a>
          <a href="mailto:diecoscai@gmail.com" className="bg-accent text-black py-1 px-3 rounded-full hover:bg-opacity-75 transition duration-300 text-sm">Contact Me</a>
        </div>
      </section>
      
      {/* About Me Section */}
      <section className="py-20 bg-white dark:bg-dark-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <img src={profilePic} alt="Diego Costa" className="w-60 h-60 rounded-full mb-6 md:mb-0 md:mr-6 shadow-lg" />
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm Diego, a Full Stack Developer with a strong foundation in web development. Currently pursuing a degree in Programmer Analyst at ORT University, I combine academic knowledge with hands-on experience in both front-end and back-end technologies. I'm passionate about creating efficient, scalable solutions and continuously learning new technologies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">JavaScript, TypeScript</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">React, Angular</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">Node.js, .NET</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">HTML, CSS, Bootstrap</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">SQL, MongoDB</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">Git, AWS, Azure</span>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-dark-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Full Stack Developer - Freelance</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Feb 2024 - Present</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Development of Front-End features using Angular</li>
                <li>Development of Back-End features using Node.js</li>
                <li>Requirements gathering and client communication</li>
                <li>Implementation of responsive design principles</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Digital Marketing Specialist - Entravision</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Jun 2018 - Dec 2023</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Developed and optimized Spotify ad campaigns using HTML, CSS, and Bootstrap</li>
                <li>Performed hotfixes on DSP platform using HTML, CSS, and JavaScript</li>
                <li>Provided technical support and training on company platforms</li>
                <li>Managed client relationships and campaign optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">ORT University</h3>
              <p className="mb-2">2022 - Present</p>
              <p>Programmer Analyst</p>
              <ul className="list-disc list-inside space-y-2">
                <li>C# (.NET), MVC, Web API, OOP</li>
                <li>JavaScript, React, Redux</li>
                <li>SQL, UML, Algorithms and Data Structures</li>
                <li>Web Development Best Practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Jóvenes a Programar (CEIBAL)</h3>
              <p className="mb-2">Jun 2021 - Dec 2021</p>
              <p>Web Development Program</p>
              <ul className="list-disc list-inside space-y-2">
                <li>JavaScript Fundamentals</li>
                <li>HTML5 & CSS3</li>
                <li>Bootstrap Framework</li>
                <li>Testing Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
