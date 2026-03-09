import ProjectCard from "../components/ProjectCard";

function Project(){
    const projectName = [{name: 'Portfolio', about: 'Responsive portfolio built using React.js and Framer Motion with smooth animations and modern UI.', year: '2025', link:"https://akankshi-portfolio.vercel.app/"},{name: 'Smart Task Manager', about: 'A modern task management application built using React and Bootstrap.', year: '2026', link:"https://akankshi-gupta.github.io/Smart-Task-Manager/"}, {name: 'Covid19-status-worldwide', about: 'Built a real-time COVID-19 worldwide status dashboard using a public API to display confirmed, recovered, active, and death cases.', year: '2022', link: "https://akankshi-gupta.github.io/Covid19-status-worldwide/"}, {name: 'Enquit', about: 'A web application that lets you share, ask questions regarding anything anonymously without compromising your privacy may it be anything', year: '2022', link:"https://github.com/Akankshi-gupta/enquit"}]
    return(
        <section id="project" className="min-h-screen relative flex flex-wrap justify-center overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full z-0"></div>
            {
                projectName.map((projects, index)=>(
                    <ProjectCard key={index} projects={projects}></ProjectCard>
                ))
            }
        </section>
    )
}

export default Project;