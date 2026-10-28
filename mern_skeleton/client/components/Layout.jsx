
import { Link } from 'react-router-dom';

// &apos: allows me to bypass the "'" issue in Jsx.

export default function Layout() {
    return (
        <header className="site-header">
            <Link className="brand" to="/" aria-label="Levi's Tech home">
                <img src="/logo.png" alt="" />
                <span>LEVI'S <b>TECH</b></span>
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/education">Education</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
            </nav>
            <Link className="header-contact" to="/contact">
                Let's talk <span aria-hidden="true">↗</span>
            </Link>
        </header>
    );
}