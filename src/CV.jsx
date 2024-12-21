import githubImage from './assets/1298743_github_git_logo_social_icon.png';
import phoneImage from './assets/5932589_call_doctor_hospital_icon.png';
import gmailImage from './assets/7089163_gmail_google_icon.png';
import './CV.css';

function Cv() {
    return (
        <div className="p-10 px-10 bg-slate-600 rounded-lg shadow-lg mt-0">
            <h1 id="cv" className="mt-10 mb-0 text-3xl font-bold text-center underline-custom">CV</h1>
            <header className="text-center">
                <h1 className="text-2xl font-bold">Abubeker Taha</h1>
                <div className='flex justify-center items-center mt-4'>
                    <img src={gmailImage} className="w-6 h-6 mr-2" alt="Gmail Icon" />
                    <p><a href="mailto:abubekertaha3@gmail.com" className="text-blue-500 hover:underline">abubekertaha3@gmail.com</a></p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <img src={phoneImage} className="w-6 h-6 mr-2" alt="Phone Icon" />
                    <p>(+251) 968-31-8913</p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <img src={githubImage} className="w-6 h-6 mr-2" alt="GitHub Icon" />
                    <p><a href="https://github.com/abubekertaha2" className="text-blue-500 hover:underline">github.com/abubekertaha2</a></p>
                </div>
            </header>
            <section className="cv-section mt-6">
                <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Profile</h2>
                <p className="font-size pt-10 text-xl text-indigo-300">
                    Driven Electrical and Computer
                    Engineering student with a strong
                    passion for front-end web
                    development. I possess a solid
                    foundation in programming,
                    computer architecture. Eager to
                    leverage my technical expertise and
                    problem-solving skills to create
                    intuitive, responsive, and visually
                    appealing web applications that
                    enhance user experience. Committed
                    to continuous learning and
                    professional growth, I aim to
                    contribute to your institute network
                    as developer.
                </p>
            </section>
            <section className="cv-section mt-6">
                <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Education</h2>
                <ul className="list-disc list-inside mt-2">
                    <li><b>Bachelor of Science in Electrical Engineering</b><br /> Addis Ababa University Institute of Technology</li>
                </ul>
            </section>
            <section className="cv-section mt-6">
                <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Experience</h2>
                <ul className="list-disc list-inside mt-2">
                    <li><b>Web Development Intern</b><br /><i>Info Tech Company, Remote</i> September 2024</li>
                    <li><b>Server-Side Development Intern</b><br /><i>Ethiopian Corporation Bank</i></li>
                </ul>
            </section>
            <section className="cv-section mt-6">
                <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Skills</h2>
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <span>Python</span>
                        <span>75%</span>
                    </div>
                    <div className="bg-gray-300 rounded-full h-4">
                        <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }} />
                        </div>
                    </div>
  
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <span>JavaScript / React</span>
                        <span>70%</span>
                    </div>
                    <div className="bg-gray-300 rounded-full h-4">
                        <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }} />
                        </div>
                    </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <span>HTML / HTML5</span>
                        <span>80%</span>
                    </div>
    <div className="bg-gray-300 rounded-full h-4">
      <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }} />
    </div>
  </div>

  <div className="mt-4">
    <div className="flex justify-between items-center mb-2">
      <span>CSS / Tailwind / Bootstrap</span>
      <span>75%</span>
    </div>
    <div className="bg-gray-300 rounded-full h-4">
      <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }} />
    </div>
  </div>
</section>
        </div>
    );
}

export default Cv;