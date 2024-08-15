import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (mode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="bg-white dark:bg-dark-background shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-center items-center">
                <div className="space-x-4 text-xl font-bold text-gray-800 dark:text-white mr-auto">
                    <Link to="/" className="pointer-events-auto rounded-md border-2 border-primary px-4 py-2 text-primary dark:text-primary hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl bg-transparent font-thin">Home</Link>
                    <Link to="/projects" className="pointer-events-auto rounded-md border-2 border-primary px-4 py-2 text-primary dark:text-primary hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl bg-transparent font-thin">Projects</Link>
                    <Link to="/about" className="pointer-events-auto rounded-md border-2 border-primary px-4 py-2 text-primary dark:text-primary hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl bg-transparent font-thin">About</Link>
                    <Link to="/contact" className="pointer-events-auto rounded-md border-2 border-primary px-4 py-2 text-primary dark:text-primary hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl bg-transparent font-thin">Contact</Link>
                </div>
                <div className="">
                    <Button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4"
                        variant="secondary"
                    >
                        {darkMode ? '🌙' : '☀️'}
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
