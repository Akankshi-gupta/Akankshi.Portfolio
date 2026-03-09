import KanImage from "../assets/Kan-innovations.png"

function Experience(){
    return(
        <section id="experience" className="min-h-screen px-5 md:px-10 lg:px-10 py-20 relative overflow-hidden">
            {/* <div className="absolute top-0 w-full h-24 bg-gradient-to-t from-transparent to-[#0F111A]"></div> */}
            <div className="absolute top-1/4 left-1/4 w-86 h-86 bg-purple-600/20 blur-[120px] rounded-full z-0 "></div>
            <div className="absolute bottom-1/4 right-1/4 w-86 h-86 bg-cyan-600/20 blur-[120px] rounded-full z-0"></div>
            <div className="flex gap-6 mb-5">
                <div className="md::w-[10%] lg:w-[10%] flex justify-end">
                    <div className="bg-white rounded-full h-10 w-10 flex justify-center items-center">
                        <img src={KanImage} alt="" className="h-6"/>
                    </div>
                </div>
                <div className="md:w-[90%] lg:w-[90%]">
                    <p className="font-bold text-xl text-white">Kan Innovations Pvt. Ltd.</p>
                    <p className="text-lg text-white">3 yrs 4 mos </p>
                    <p className="text-lg text-gray-400">Mumbai, Maharashtra, India</p>
                </div>
            </div>
            <div className="flex gap-6 mb-5">
                <div className="w-[10%] flex justify-end relative">
                    <div className="absolute top-11 left-[50%] md:left-[94%] lg:left-[94%] bottom-0 w-px bg-gray-400"></div>
                    <div className="bg-gray-400 w-2.5 h-2.5 mt-2 rounded-full"></div>
                </div>
                <div className="md:w-[90%] lg:w-[90%]">
                    <p className="font-medium text-xl text-white">FrontEnd Developer</p>
                    <p className="text-lg text-white">Full-time</p>
                    <p className="text-lg text-gray-400">June-2023 - Present. 2 yrs 9 mos</p>
                    <ul className="list-disc list-inside marker:text-gray-400 text-white">
                        <li>
                            Collaborate with designers, backend engineers, and product managers to build scalable, high-quality web applications.
                        </li>
                        <li>
                            Develop modern, responsive, and user-centric interfaces using HTML, CSS, Bootstrap, JavaScript and ReactJS.
                        </li>
                        <li>
                            Convert pixel-perfect UI/UX designs into accessible and consistent frontend components.
                        </li>
                        <li>
                            Integrate backend APIs and dynamic data with efficient state management and error handling.
                        </li>
                        <li>
                            Create interactive dashboards and data visualizations using Plotly.js and D3.js.
                        </li>
                        <li>
                            Build modular, reusable components following modern frontend best practices.
                        </li>
                        <li>
                            Optimize performance through clean code, efficient DOM manipulation, and improved rendering.
                        </li>
                        <li>
                            Implement PDF generation and automation workflows using Playwright.
                        </li>
                        <li>
                            Contribute to code reviews, debugging, feature enhancements, and ongoing UI improvements.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="w-[10%] flex justify-end">
                    <div className="bg-gray-400 w-2.5 h-2.5 mt-2 rounded-full"></div>
                </div>
                <div className="md:w-[90%] lg:w-[90%]">
                    <p className="font-medium text-xl text-white">FrontEnd Developer</p>
                    <p className="text-lg text-white">Internship</p>
                    <p className="text-lg text-gray-400">Nov-2022 - May-2023. 7 mos</p>
                    <ul className="list-disc list-inside marker:text-gray-400 text-white">
                        <li>
                            Created pixel-perfect, responsive UI pages using modern CSS and JavaScript.
                        </li>
                        <li>
                            Implemented basic UI animations and interactive components, including timers.
                        </li>
                        <li>
                            Worked closely with designers and developers to refine layouts and improve visual consistency.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience;