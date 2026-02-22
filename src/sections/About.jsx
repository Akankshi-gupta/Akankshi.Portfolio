import myImage from "../assets/myImage.avif"

function About(){
    return(
        <section id="about" className="min-h-screen bg-[#0F111A] pb-24 relative grid place-items-center grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 bg-transparent backdrop-blur-md gap-2 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full z-0"></div>

            <div className="row-span-1 lg:col-span-1  flex items-center justify-center">
                <img src={myImage} alt="" className="border-2 object-cover object-top border-[#A855F7] rounded-xl w-70 h-70"/>
            </div>
            <div className="row-span-2 lg:col-span-2 flex flex-col justify-center items-center lg:items-start lg:pr-12">
                <p className="text-white text-2xl">Frontend Developer focused on UI/UX & clean interfaces</p>
                <hr className="w-full border-0 border-t-2 border-white my-2"/>
                <ul className="list-disc text-xl text-white px-2">
                    <li>Frontend Developer with 3+ years of experience building modern, responsive web interfaces  </li>
                    <li>Specialized in React.js, JavaScript, and scalable component-driven architecture </li>
                    <li>Strong focus on pixel-perfect UI, accessibility, and performance optimization  </li>
                    <li>Experienced in API integration, dynamic dashboards, and data visualization  </li>
                    <li>Enjoy enhancing interfaces with thoughtful interactions and visual polish</li>
                    <li>Collaborative problem-solver who bridges design and development</li>
                </ul>

            </div>
            {/* <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-transparent"></div> */}
        </section>
    )
}

export default About;