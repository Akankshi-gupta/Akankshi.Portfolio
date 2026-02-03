
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar(){
    const navLinks = [
        {name: 'About', target: 'about'},
        {name: 'Skills', target: 'skills'},
        {name: 'Experience', target: 'experience'},
        {name: 'Project', target: 'project'}
    ]
    return(
        <nav className='fixed top-0 w-full z-50 bg-[#0F111A]/80 backdrop-blur-md border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
                <div className='text-2xl font-bold tracking-tighter'>
                    Akankshi Gupta <span className='text-purple-500'>.</span>
                </div>
                <ul className='flex items-center gap-8'>
                    {navLinks.map((link)=>(
                        <li key={link.name} className='relative cursor-pointer'>
                            <Link to={link.target} spy={true} smooth={true} offset={-80} duration={500} className='text-sm font-medium text-slate-400 transition-hover hover:text-white' activeClass="text-white">
                                <motion.span whileHover={{ y: -2 }} className="block">
                                    {link.name}
                                </motion.span>
                            </Link>
                        </li>
                    ))}
                    <Link to='contact' smooth={true} offset={-80} duration={500}>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 bg-green-400 text-black font-bold rounded-full text-sm shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                            Contact
                        </motion.button>
                    </Link>
                    
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;