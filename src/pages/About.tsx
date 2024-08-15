import profilePic from '../assets/images/profile.png';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h1>
      <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full mx-auto"/>
      {/* Add more about yourself here */}
    </div>
  );
};

export default About;
  