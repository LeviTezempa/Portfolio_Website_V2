// Import React hooks to managing page and state navigation
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    {/** hooks to direct user to a different page */}
    const navigate = useNavigate();
    
   {/**State to hold and track all the form text */}
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        navigate('/');
    };

    return (
        <main className="content-page contact-page">
            <h1>Contact</h1>
            <div className="contact-layout">
                <aside className="contact-panel">
                    <p className="eyebrow">GET IN TOUCH</p>
                    <h2>Have a project or opportunity in mind?</h2>
                    <p>I'm always open to discussing thoughtful digital products, software engineering opportunities, and creative collaborations.</p>
                    <dl>
                        <div><dt>Location</dt><dd>Markham, Ontario</dd></div>
                        <div><dt>Email</dt><dd>Provided in the resume</dd></div>
                    </dl>
                </aside>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="phone">Contact Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="button button-primary" type="submit">Send Message <span aria-hidden="true">↗</span></button>
                </form>
            </div>
        </main>
    );
}