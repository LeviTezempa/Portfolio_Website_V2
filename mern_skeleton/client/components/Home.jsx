import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import portrait from '../me.png';
import SocialLinks from '../src/Link';
// My text array that are rotating
const roles = ['AI Development', 'Web Development', 'Software Engineering'];

// A custom hook that creates a type writer by 
// writing a letter at a time.
function useTypewriter(words, typingSpeed = 90, pause = 1500) {
	const [wordIndex, setWordIndex] = useState(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const currentWord = words[wordIndex];

		{/*After typing full word, pause the continue to the next*/}
		if (text === currentWord) {
			const nextWordTimer = setTimeout(() => {
				setWordIndex((index) => (index + 1) % words.length);
				setText('');
			}, pause);
			return () => clearTimeout(nextWordTimer);
		}

		{/**Adds the next letter of the word after the specified typing speed delay*/}
		const timer = setTimeout(() => {
			setText(currentWord.slice(0, text.length + 1));
		}, typingSpeed);

		return () => clearTimeout(timer);
	}, [text, typingSpeed, wordIndex, words, pause]);

	return text;
}

{/**UI Component element that floats badge around the portrait image via CSS animation */}
function FloatingBadge({ icon, label, className, delay }) {
	return (
		<div className={`floating-badge ${className}`} style={{ animationDelay: delay }}>
			<span className="badge-icon" aria-hidden="true">{icon}</span>
			<span>{label}</span>
		</div>
	);
}

export default function Home() {
	{/**Call custom typewriter hook to get the currently typed out text  */}
	const typedRole = useTypewriter(roles);

	return (
		<main className="home">
			<section className="hero" aria-labelledby="hero-title">
				<div className="hero-copy">
					<p className="eyebrow">SOFTWARE ENGINEERING IN AI</p>
					<h1 id="hero-title">
						Building digital
						<span>experiences</span>
						that matter.
					</h1>
					<p className="hero-description">
						Hi, I'm <strong>Levi Tezempa</strong>. I'm a software
						engineering student creating clean, thoughtful, and useful
						digital products for the modern web.
					</p>
					<p className="hero-role">
						<strong>Focused on </strong>
						<span>{typedRole}</span>
						<span className="typing-cursor" aria-hidden="true">|</span>
					</p>
					<div className="hero-actions">
						<Link className="button button-primary" to="/projects">
							Explore my work <span aria-hidden="true">↗</span>
						</Link>
						<Link className="button button-secondary" to="/about">
							More about me
						</Link>
					</div>
					<div className="hero-meta" aria-label="Availability">
						<span className="status-dot" />
						<span>Open to opportunities</span>
					</div>
					<SocialLinks />
				</div>
				<div className="hero-visual">  
					<div className="portrait-halo" />
					<div className="portrait-frame">
						<img src={portrait} alt="Portrait of Levi Tezempa" />
					</div>
					<FloatingBadge
						label="Design"
						delay="0s"
						className="floating-badge-design"
						icon={<svg viewBox="0 0 24 24" focusable="false"><path d="M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 0-3.6H12a1.6 1.6 0 0 1 0-3.2h2.3A6.7 6.7 0 0 0 12 3Z" /><circle cx="7.5" cy="10" r=".8" /><circle cx="10.5" cy="7.3" r=".8" /><circle cx="14.2" cy="7.1" r=".8" /></svg>}
					/>
					<FloatingBadge
						label="Code"
						delay="1.3s"
						className="floating-badge-code"
						icon={<svg viewBox="0 0 24 24" focusable="false"><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4l-3 16" /></svg>}
					/>
					<FloatingBadge
						label="Ideas"
						delay="2.6s"
						className="floating-badge-ideas"
						icon={<svg viewBox="0 0 24 24" focusable="false"><path d="M9 18h6M10 21h4M8.4 14.5A6 6 0 1 1 16 14c-.8.6-1 1.5-1 2H9.5c0-.6-.3-1.1-1.1-1.5Z" /><path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" /></svg>}
					/>
					<div className="floating-card floating-card-top">
						<span className="card-label">Currently learning</span>
						<strong>Intelligent systems</strong>
					</div>
					<div className="floating-card floating-card-bottom">
						<span className="card-number">01</span>
						<span>Scroll to explore</span>
						<span aria-hidden="true">↓</span>
					</div>
				</div>
			</section>

			<section className="home-intro" aria-label="Introduction">
				<p>From first idea to final interface, I turn problems into simple solutions.</p>
				<Link to="/contact" className="text-link">
					Let's work together <span aria-hidden="true">↗</span>
				</Link>
			</section>
		</main>
	);
}
