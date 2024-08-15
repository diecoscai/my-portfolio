import profilePic from '../assets/images/profile.png';

const Home = () => {
  return (
    <div className="bg-white dark:bg-dark-background text-darkGray dark:text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-64 bg-primary text-white">
        <h1 className="text-5xl font-bold mb-2">Diego Costa</h1>
        <p className="text-lg mb-4">Computer Enthusiast & Programmer Analyst</p>
        <div className="space-x-2">
          <a href="/path-to-your-resume.pdf" className="bg-accent text-black py-1 px-3 rounded-full hover:bg-opacity-75 transition duration-300 text-sm">Download CV</a>
          <a href="https://www.linkedin.com/in/diego-costa-caivano" className="bg-secondary text-white py-1 px-3 rounded-full hover:bg-opacity-75 transition duration-300 text-sm">LinkedIn</a>
          <a href="#contact" className="bg-accent text-black py-1 px-3 rounded-full hover:bg-opacity-75 transition duration-300 text-sm">Contact Me</a>
        </div>
      </section>
      
      {/* About Me Section */}
      <section className="py-20 bg-white dark:bg-dark-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <img src={profilePic} alt="Diego Costa" className="w-60 h-60 rounded-full mb-6 md:mb-0 md:mr-6 shadow-lg" />
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm Diego, a 31-year-old computer enthusiast currently pursuing a degree in Programmer Analyst at ORT, with an intermediate title in Web Programming. I'm a committed and skilled professional who collaborates effectively in teams, offering innovative solutions. Proactive and dedicated to continuous personal and professional growth, I'm always seeking new challenges to enhance my knowledge and explore emerging technologies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">JavaScript, Java</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">HTML, CSS</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">React, Ionic</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">AWS, IIS, Azure</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">Responsive Web Design</span>
            <span className="bg-white text-primary dark:bg-dark-background dark:text-primary p-4 rounded shadow transition duration-300 hover:scale-105">SQL</span>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-dark-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">Freelancer (Feb 2024 – Present)</h3>
              <p>Development of Front-End features using Angular.</p>
              <p>Development of Back-End features using Node.js.</p>
              <p>Requirements gathering with clients.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Entravision (Jun 2018 – Dec 2023)</h3>
              <p>Provided support and training on company platforms to ensure client satisfaction.</p>
              <p>Developed and optimized Spotify ad campaigns using HTML, CSS, and Bootstrap.</p>
              <p>Performed hotfixes on a DSP platform using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">ORT University (2022 - Present)</h3>
              <p>Programmer Analyst: C# (.NET), MVC, Web API, OOP, JavaScript, React, Redux, SQL, UML, Web Development, Algorithms and Data Structure</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Jóvenes a Programar (Jun 2021 - Dec 2021)</h3>
              <p>Web Development: JavaScript, HTML, CSS, Bootstrap</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
