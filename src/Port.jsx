import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Port.css';
import AgaImg from './assets/Aga.jpg';
import p10 from './assets/p10.jpg';
import p11 from './assets/p11.jpg';
import p12 from './assets/p12.jpg';
import p13 from './assets/p13.jpg';
import p14 from './assets/p14.jpg';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.jpg';
import p7 from './assets/p7.jpg';
import p8 from './assets/p8.jpg';
import p9 from './assets/p9.jpg';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const portfolioImages = [p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14];

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <main className="p-10 mb-0">
      <nav className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0">Abubeker</h1>
        <div className="md:hidden">
          <i className='bx bx-menu cursor-pointer' onClick={toggleMenu}></i>
        </div>
        <ul className={`flex-col md:flex-row md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="text-lg text-gray-100 nav-link"><a href="#header">Home</a></li>
          <li className="text-lg text-gray-100 nav-link"><a href="#about">About</a></li>
          <li className="text-lg text-gray-100 nav-link"><a href="#portfolio">Portfolio</a></li>
          <li className="text-lg text-gray-100 nav-link"><a href="#projects">Projects</a></li>
          <li className="text-lg text-gray-100 nav-link"><a href="#service">Service</a></li>
          <li className="text-lg text-gray-100 nav-link"><a href="#cv">CV</a></li>
          <li className="text-lg text-gray-100 nav-link"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="header" className="p-32 flex flex-col justify-center items-center gap-3">
        <p className="text-2xl underline-custom">Hi, I'm Abubeker</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 pb-10">
          Web Developer
        </h1>
        
        <div className="flex flex-col items-center mt-10">
          <img 
            src={AgaImg} 
            className='w-32 h-auto sm:w-56 pt-0 pb-0 rounded-full border-4 border-blue-700 object-cover mt-4' 
            alt="Abubeker" 
          />
        </div>
        
        <div className="social-links"> 
          <a href="https://www.linkedin.com/in/abubeker-taha-7bbb21296" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://web.facebook.com/abubeker2" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="https://wa.me/+251968318913" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-whatsapp'></i>
          </a>
        </div>
      </section>

      <section id="about" className="pb-10 mb-5">
        <h1 className="text-3xl font-bold text-center underline-custom">About Me</h1>
        <p className='font-size pt-10 text-xl text-indigo-300'>
          I'm Abubeker Taha, a 5th year Electrical and Computer Engineering student at AAIT University. 
          Alongside my core engineering studies, I have developed a strong passion for 
          web development and 
          building responsive, user-centric digital experiences. Committed
          to continuous learning and
          professional growth, I aim to
          contribute to your institute network
          as developer.
        </p>
      </section>

      <section id="portfolio" className="pb-10 mb-5">
        <h1 className="text-3xl font-bold underline-custom">Portfolio</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {portfolioImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} className="w-full h-48 object-cover" alt={`Portfolio item ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="p-1">
        <h2 className="text-3xl font-bold underline-custom">Projects</h2>
        <div className="mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ProjectCard title="Tic-Tac-Toe Game" description="A classic Tic-Tac-Toe game built with JavaScript." link="https://tic-tac-toe-game-nu-nine.vercel.app/" />
          <ProjectCard title="Sign-Up Form" description="An interactive sign-up form with validation and user-friendly design." link="https://sign-up-five-orcin.vercel.app/" />
          <ProjectCard title="Weather App" description="A weather application that fetches data from an API to show current weather conditions." link="https://weather-app-flame-pi-58.vercel.app/" />
          <ProjectCard title="My Library" description="An application for managing personal book collections." link="https://my-library-neon.vercel.app/" />
          <ProjectCard title="Admin Dashboard" description="A responsive admin dashboard with user management features." link="https://admin-dashboard-iota-olive.vercel.app/" />
          <ProjectCard title="Calculator" description="A simple calculator application with basic arithmetic operations." link="https://calculator-api2.vercel.app/" />
          <ProjectCard title="CV Application" description="A web application for creating and managing CVs." link="https://cv-application-umber-xi.vercel.app/" />
          <ProjectCard title="Amphibia Memory Card" description="A fun memory card game featuring amphibian characters." link="https://amphibia-memory-card.vercel.app/" />
        </div>
      </section>

      <section id="service" className="py-16 ">
        <h1 className="text-3xl font-bold text-center mb-10 underline-custom">SERVICE I GIVE YOU</h1>
        <div className="max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="WEBSITE DESIGN" description="Creating visually appealing and user-friendly websites tailored to your business needs." />
          <ServiceCard title="UI/GUI" description="Designing intuitive user interfaces that enhance user interaction." />
          <ServiceCard title="SOFTWARE DEV" description="Developing robust software solutions that meet your business requirements." />
          <ServiceCard title="API DEVELOPMENT" description="Implementing RESTful APIs for seamless communication between frontend and backend." />
          <ServiceCard title="DATABASE MANAGEMENT" description="Managing and optimizing databases for data integrity and performance." />
          <ServiceCard title="RESPONSIVE WEB DESIGN" description="Creating responsive web applications for optimal viewing experiences across all devices." />
          <ServiceCard title="FULL STACK DEVELOPMENT" description="Building complete web solutions from front-end to back-end." />
          <ServiceCard title="E-COMMERCE SOLUTIONS" description="Developing full-featured e-commerce platforms for online businesses." />
        </div>
      </section>
    </main>
  );
}

const ProjectCard = ({ title, description, link }) => (
  <div className="border rounded-lg p-4 bg-slate-500 shadow">
    <h3 className="font-bold">{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
  </div>
);
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const ServiceCard = ({ title, description }) => (
  <div className="bg-slate-500 rounded-lg shadow-md p-5 transition-transform transform hover:scale-105 h-full flex flex-col">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <p className="mt-2 text-white flex-grow">{description}</p>
  </div>
);
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default App;