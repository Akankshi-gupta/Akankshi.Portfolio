import { MdArrowOutward } from "react-icons/md";

function Contact(){
    return(
        <div className="bg-[#0F111A] min-h-screen flex justify-center items-center px-2 md:px-10 lg:px-10 py-20 text-white flex-col overflow-hidden relative">
            <div className="flex flex-col justify-center items-center mb-12">
                <h1 className="text-5xl mb-5 text-center">Akankshi Gupta</h1>
                <p className="text-gray-400 md:px-40 lg:px-40 text-center">Frontend Developer with 3+ years of experience building scalable, high-performance React applications with a strong focus on pixel-perfect UI, accessibility, and seamless user experiences.</p>
                <p className="font-bold text-3xl mt-8">Let's Get <i className="text-gray-300 font-semibold">Connected</i></p>
            </div>
            
            <div className="flex mb-12">
                <a href="mailto: akankshigp12345@gmail.com" className="bg-white flex justify-center items-center px-2 py-2 text-sm md:text-md md:px-4 md:py-2 lg:text-md lg:px-4 lg:py-2 rounded-full text-gray-700 mr-5 md:mr-10 lg:mr-10"> akankshigp12345@gmail.com </a>
                <a href="/Akankshi_Gupta_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent text-sm md:text-md lg:text-md hover:bg-purple-600 text-white px-2 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-full border border-purple-900 flex items-center justify-center">View Resume <span className="ml-1"> <MdArrowOutward /></span> </button>
                </a>
                
            </div>
            
            <div className="flex">
                <a href="https://www.linkedin.com/in/akankshi-gupta-783877209/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center justify-center mr-10">Linkedin <span className="text-sm ml-0.5"> <MdArrowOutward /></span></a>
                <a href="https://github.com/Akankshi-gupta" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center justify-center">Github <span className="text-sm ml-0.5"> <MdArrowOutward /></span></a>
            </div>
        </div>
    )
}

export default Contact;