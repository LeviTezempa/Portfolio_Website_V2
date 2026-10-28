// Created a constant for my services to pass in my info such as id, title
// description
const services = [
  {
    id: 1,
    title: "Simple Web Applications",
    description: "Small functional apps such as task managers, study tools, and basic CRUD systems."
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Simple and intuitive layouts that improve user experience."
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Complete applications from frontend design to backend logic."
  },
  {
    id: 4,
    title: "AI-Assisted Tools",
    description: "Smart utilities powered by basic AI and automation concepts."
  },
  {
    id: 5,
    title: "Data Handling",
    description: "Organized, accurate, and structured data for reliable results."
  },
  {
    id: 6,
    title: "Problem Solving",
    description: "Practical solutions built through strong software engineering principles."
  },
{
    id: 7,
    title: "Video Editing",
    description: "Clean and simple video edits for short clips, social media content, and personal projects."
  },
  {
    id: 8,
    title: "Poster & Graphic Design",
    description: "Minimal and modern posters or graphics for events, promotions, or personal branding."
  },
];


export default function Services() {
    return (
        <main className="content-page">
            <h1>My Services</h1>
            <p>Here are some services I offer to help clients achieve their goals.</p>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.id}>
                    <span className="service-number">0{service.id}</span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </article>
              ))}
            </div>
        </main>
    )
}       