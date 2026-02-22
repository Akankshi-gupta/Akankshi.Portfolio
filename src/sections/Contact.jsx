import { MdArrowOutward } from "react-icons/md";

function Contact(){
    return(
        <div className="bg-[#0F111A] min-h-screen flex justify-center items-center px-10 py-20 text-white flex-col">
            <div className="flex flex-col justify-center items-center mb-12">
                <h1 className="text-5xl mb-5">Akankshi Gupta</h1>
                <p className="text-gray-400 px-40 text-center">Frontend Developer with 3+ years of experience building scalable, high-performance React applications with a strong focus on pixel-perfect UI, accessibility, and seamless user experiences.</p>
                <p className="font-bold text-3xl mt-8">Let's Get <i className="text-gray-300 font-semibold">Connected</i></p>
            </div>
            
            <div className="flex mb-12">
                <a href="mailto: akankshigp12345@gmail.com" className="bg-white px-4 py-2 rounded-full text-gray-700 mr-10"> akankshigp12345@gmail.com </a>
                <a href="/Akankshi_Gupta_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent hover:bg-purple-600 text-white px-4 py-2 rounded-full border border-purple-900 flex items-center justify-center">View Resume <span className="ml-1"> <MdArrowOutward /></span> </button>
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