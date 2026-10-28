
import portrait from '../me.png';   

export default function About(){
    return (
        <main className="content-page about-page">
            <h1>About Me</h1>
            {/** passed my imported image here */}
            <div className="about-layout">       
                <img className="about-portrait" src={portrait} alt="Portrait of Levi Tezempa" />
                <div>
                    <p className="lead">I'm Levi Tezempa, a Software Engineering student specializing in Artificial Intelligence and modern web development.</p>
            <p>
                I enjoy building clean, functional 
                interfaces and learning how technology can solve real problems. 
                My background in data and hands‑on work has taught me to stay organized, 
                pay attention to detail, and always look for ways to improve.
                I’m currently studying Software Engineering Technology (Artificial Intelligence) 
                at Centennial College, where I’m expanding my skills in frontend development, 
                backend logic, and intelligent systems. I’m focused on growing as a developer 
                through real projects, continuous learning, and practical experience.
            </p>
                    <a className="button button-primary" href="/Levi_Tezempa_Resume.pdf" 
               target="_blank"  
               rel="noopener noreferrer">  {/** A button linked to my resume */}
                View My Resume
            </a>
                </div>
            </div>
        </main>
    )
}