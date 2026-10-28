// create a project constant to pass in my project info
const projects = [
    {
        id: 1,
        name: "A Weather App",
        description: "I designed and built a simple React weather dashboard connected to a weather API. The result is a focused interface for searching a location and viewing current conditions.",
        role: "Frontend development and API integration",
        outcome: "A functional weather tool with a clear, responsive layout.",
        image: "/img/project_1.png"
    },
    {
        id: 2,
        name: "A News App",
        description: "I built a React news experience that organizes current stories into a browsable home feed with category-focused content.",
        role: "UI development, component design, and data handling",
        outcome: "A polished news interface that makes stories easy to scan.",
        image: "/img/project_2.png"
    },
    {
        id: 3,
        name: "A Face Recognition Employee Attendance System",
        description: "I developed a Python and OpenCV attendance concept that uses face recognition to identify employees and record attendance.",
        role: "Python development and computer-vision implementation",
        outcome: "An automated attendance workflow that demonstrates practical AI use.",
        image: "/img/project_2a.png"
    }
]

export default function Project() {
    return (
        <main className="content-page projects-page">
            <h1>My Projects</h1>
            <p>Here are some projects I've built to strengthen 
                my skills in AI, web development, and practical software design.
            </p>
            {projects.map((project) => (
                <article className="project-card" key={project.id}>
                           {/*my project image */} 
                    <img src={project.image} alt={project.name} /> {/*my project name*/}
                    <div className="project-card-copy">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p><strong>My role:</strong> {project.role}</p>
                        <p><strong>Outcome:</strong> {project.outcome}</p>
                    </div>
                </article>
            ))}
        </main>
    )
}