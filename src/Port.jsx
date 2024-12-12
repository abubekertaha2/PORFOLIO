import { useEffect } from 'react';
import './Port.css';
import AgaImg from './assets/Aga.jpg';
import p1 from './assets/p1.png';
import p10 from './assets/p10.jpg';
import p11 from './assets/p11.jpg';
import p12 from './assets/p12.jpg';
import p13 from './assets/p13.jpg';
import p14 from './assets/p14.jpg';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.jpg';
import p7 from './assets/p7.jpg';
import p8 from './assets/p8.jpg';
import p9 from './assets/p9.jpg';
function App() {
  const portfolioImages = [p3, p4, p5, p6, p7, p8, p9, p10,p11,p12,p13,p14];
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}, []);
  return (
    <main className="p-10 px-10 mb-0">
      <nav className="flex flex-row justify-between items-center relative">
        <h1 className="text-2xl font-semibold">Abubeker</h1>
        <ul className="flex flex-row justify-between items-center gap-5">
          <div className="text-1g text-gray-100 nav-link"><a href="#header">Home</a></div>
          <div className="text-1g text-gray-100 nav-link"><a href="#about">About</a></div>
          <div className="text-1g text-gray-100 nav-link"><a href="#portfolio">Portfolio</a></div>
          <div className="text-1g text-gray-100 nav-link"><a href="#projects">Projects</a></div>
          <div className="text-1g text-gray-100 nav-link"><a href="#service">Service</a></div>
          <div className="text-1g text-gray-100 nav-link"><a href="#cv">CV</a></div>
          <div className="text-1g text-gray-100 nav-link"><a href="#contact">Contact</a></div>
        </ul>
      </nav>
      <header id="header" className="p-32 flex flex-col jusftify-center items-center gap-3">
        <p className="text-2xl underline-custom">Hi, I'm Abubeker</p>
        <h1 className="text-5xl font-bold text-gray-200 pb-10">Web Developer</h1>
        <img src={AgaImg} className='w-56 h-56 rounded-full border-4 border-blue-700' alt="Abubeker" />
        <img src={p1} className='w-40 h-40 absolute top-40 left-20 rounded-full'/>
        <img src={p2} className='w-40 h-40 absolute top-40 right-20 rounded-full'/>
      </header>
      <section id="about" className="pb-10 mb-5">
        <h1 className="text-3xl font-bold text-center underline-custom">About Me</h1>
        <p className='pt-10 text-1xl text-indigo-300'>Im Abubeker Taha, a 5th year Electrical and Computer Engineering student at AAIT University. Alongside my core engineering studies, I've developed a strong passion for web development and building responsive, user-centric digital experiences.</p>
      </section>
      <section id="portfolio" className="pb-10 mb-5">
        <h1 className="text-3xl font-bold underline-custom">Portfolio</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {portfolioImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                className="w-full h-48 object-cover" 
                alt={`Portfolio item ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
      <section id="projects" className="p-10">
    <h2 className="text-3xl font-bold underline-custom">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-bold">Tic-Tac-Toe Game</h3>
            <p>A classic Tic-Tac-Toe game built with JavaScript. Players can take turns and see the winner.</p>
            <a href="https://tic-tac-toe-game-nu-nine.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-semibold">Sign-Up Form</h3>
            <p>An interactive sign-up form with validation and user-friendly design.</p>
            <a href="https://sign-up-five-orcin.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-semibold">Weather App</h3>
            <p>A weather application that fetches data from an API to show current weather conditions.</p>
            <a href="https://weather-app-flame-pi-58.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-semibold">My Library</h3>
            <p>An application for managing personal book collections with features to add, remove, and view books.</p>
            <a href="https://my-library-neon.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-semibold">Admin Dashboard</h3>
            <p>A responsive admin dashboard with user management and data visualization features.</p>
            <a href="https://admin-dashboard-iota-olive.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-semibold">Calculator</h3>
            <p>A simple calculator application with basic arithmetic operations.</p>
            <a href="https://calculator-api2.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-semibold">CV Application</h3>
            <p>A web application for creating and managing CVs with various templates.</p>
            <a href="https://cv-application-umber-xi.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>
        <div className="border rounded-lg p-4 bg-slate-500 shadow">
            <h3 className="font-semibold">Amphibia Memory Card</h3>
            <p>A fun memory card game featuring amphibian characters for players to match.</p>
            <a href="https://amphibia-memory-card.vercel.app/" target="_blank" className="text-blue-500">View Project</a>
        </div>

    </div>
</section>
      <section id="service" className="py-16 bg-blue-950">
        <h1 className="text-3xl font-bold text-center mb-10 underline-custom">SERVICE I GIVE YOU</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="box bg-slate-500 rounded-lg shadow-md p-5 transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold">WEBSITE DESIGN</h2>
              <p className="mt-2 text-white">Creating visually appealing and user-friendly websites tailored to your business needs. I focus on intuitive navigation, responsive layouts, and engaging user experiences.</p>
            </div>
            <div className="box bg-slate-500 rounded-lg shadow-md p-5 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold">UI/GUI</h2>
            <p className="mt-2 text-white">Designing intuitive user interfaces and graphical user interfaces that enhance user interaction and satisfaction. I prioritize usability and accessibility in all designs.</p>
        </div>
        <div className="box bg-slate-500 rounded-lg shadow-md p-5 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold">SOFTWARE DEV</h2>
            <p className="mt-2 text-white">Developing robust software solutions that meet the specific requirements of your business. I leverage modern technologies to build scalable and maintainable applications.</p>
        </div>
        <div className="box bg-slate-500 rounded-lg shadow-md p-5 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold">API DEVELOPMENT</h2>
            <p className="mt-2 text-white">Design and implement RESTful APIs to enable seamless communication between frontend and backend systems. This service enhances functionality and allows for efficient data exchange.</p>
        </div>
        <div className="box bg-slate-500 rounded-lg shadow-md p-5 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold">DATABASE MANAGEMENT</h2>
            <p className="mt-2 text-white">Managing and optimizing databases to ensure data integrity, security, and performance. I design schemas and write efficient queries to support application needs.</p>
        </div>
        <div className="box bg-slate-500 rounded-lg shadow-md p-5 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold">RESPONSIVE WEB DESIGN</h2>
            <p className="mt-2 text-white">Creating responsive web applications that provide optimal viewing experiences across all devices. I ensure your site looks great on desktops, tablets, and smartphones.</p>
        </div>
    </div>
</section>
    </main>
  )
}
export default App