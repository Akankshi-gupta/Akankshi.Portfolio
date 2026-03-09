function ProjectCard({projects}){
    return(
        <div className="border border-gray-400 p-5 md:p-8 lg:p-8 text-white w-full lg:w-[35%] h-62.5 my-8 mx-12 rounded-xl flex flex-col relative overflow-hidden group card-hover-effect">
            <div className="card-bg"></div>
            <div className="z-10">
                <p className="text-lg md:text-xl lg:text-xl">{projects.name}</p>
                <p className="text-md md:text-lg lg:text-lg text-gray-400">{projects.about}</p>
            </div>
            
            <div className="mt-auto flex justify-between z-10">
                <div className="rounded-full bg-gray-500 text-white px-4 md:px-6 md:py-1 lg:px-6 lg:py-1 flex items-center justify-center">{projects.year}</div>
                {/* <button className="px-8 py-2 border border-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] ">View Project</button> */}
                <a href={projects.link} target="_blank" rel="noopener noreferrer"className="px-5 py-1 md:px-8 md:py-2 lg:px-8 lg:py-2 border border-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] inline-block text-center cursor-pointer viewProject">
                    View Project
                </a>
            </div>
            {/* <div className="bg-red-500 hover:bg-blue-500">
            Test
            </div> */}
        </div>
    )
}

export default ProjectCard;