// Created a constant education to pass in my id, school, program
// years, location and description
const education = [
  {
    id: 1,
    school: "Centennial College",
    program: "Software Engineering Technology (Artificial Intelligence)",
    years: "2026 – Present",
    location: "Toronto, Ontario",
    description: "Focused on AI, full‑stack development, and modern software engineering practices."
  },
  {
    id: 2,
    school: "University of Bamenda",
    program: "Bachelor of Technology in Software Engineering",
    years: "2024 – 2025",
    location: "Bamenda, Cameroon",
    description: "Built strong foundations in programming, algorithms, and software design."
  },
  {
    id: 3,
    school: "IUGET University",
    program: "Higher National Diploma (HND) in Software Engineering",
    years: "2021 – 2023",
    location: "Douala, Cameroon",
    description: "Developed my foundations in software engineering and programming languages."
  }
];

export default function Education() {
    return (
        <main className="content-page">
            <h1>My Education</h1>
            <p>Here is a summary of my educational background and qualifications.</p>
             {education.map((edu) => (
            <article className="education-card" key={edu.id}>
                <h2>{edu.school}</h2>
                <p className="education-program">{edu.program}</p>
                <p><strong>{edu.years}</strong> · {edu.location}</p>
                <p>{edu.description}</p>
            </article>
        ))}
        </main>
    )
};