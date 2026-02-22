
import { scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "motion/react"
import { useState, useEffect  } from 'react';

function Navbar(){
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState("");

    const navLinks = [
        {name: 'About', target: 'about'},
        {name: 'Skills', target: 'skills'},
        {name: 'Experience', target: 'experience'},
        {name: 'Project', target: 'project'}
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "skills", "experience", "project"];

            sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                const rect = element.getBoundingClientRect();

                if (rect.top <= 100 && rect.bottom >= 100) {
                setActive(id);
                }
            }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (target) =>{
        // setActive(target);
        if(location.pathname !== '/'){
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(target, {
                smooth: true,
                offset: -80,
                duration: 500
                });
            }, 100);
            } else {
            scroller.scrollTo(target, {
                smooth: true,
                offset: -80,
                duration: 500
            });
        }
    }

    return(
        <nav className='fixed top-0 w-full z-50 bg-[#0F111A]/80 backdrop-blur-md border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
                <div className='text-2xl font-bold tracking-tighter text-indigo-500'>
                    Akankshi Gupta <span className='text-purple-500'>.</span>
                </div>
                <ul className='flex items-center gap-8'>
                    {navLinks.map((link)=>(
                        <li key={link.name} className='relative cursor-pointer'>
                            {/* <ScrollLink to={link.target} spy={true} smooth={true} offset={-80} duration={500} className='text-sm font-medium text-slate-400 transition-hover hover:text-white' activeClass="text-white underline"> */}
                                <motion.span whileHover={{ y: -2 }} className={`cursor-pointer text-sm font-medium text-slate-400 transition-colors duration-300 ${active === link.target ? "text-white underline underline-offset-4 decoration-purple-500" : "text-slate-400"}`} onClick={() => handleClick(link.target)}>
                                    {link.name}
                                </motion.span>
                            {/* </ScrollLink> */}
                        </li>
                    ))}
                    {/* <RouterLink to='contact' smooth={true} offset={-80} duration={500}> */}
                        <motion.button onClick={()=> {navigate("/contact"); setActive('')}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 bg-green-400 text-black font-bold rounded-full text-sm shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                            Contact
                        </motion.button>
                    {/* </RouterLink> */}
                    
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;