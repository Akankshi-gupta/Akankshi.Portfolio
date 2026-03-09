import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-scroll';
import GridBackground from '../components/GridBackground';

function HeroSection(){
    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center bg-transparent sm:mb-20 lg:py-0 overflow-hidden">
            <GridBackground></GridBackground>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full z-0"></div>

            <div className="container mx-auto px-6 z-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 lg:gap-8 items-center justify-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className='mb-30 mt-20 md:mb-40 md:mt-20 lg:mb-0 lg:mt-20 text-center lg:text-left' >
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-black leading-[1.1] text-white mb-6 tracking-tight">
                            Designing and developing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 drop-shadow-sm">
                                Elegant, user-centric
                            </span> <br />
                            web interfaces.
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed font-light mx-auto lg:mx-0">
                            I am <span className="text-white font-medium italic">Akankshi Gupta</span>, a Frontend Developer with 3 years of experience. Building clean, intuitive, and interactive web experiences.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                            {/* <Link to="projects" smooth={true} duration={800} offset={-80}>
                                <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.4)" }} whileTap={{ scale: 0.95 }} className="px-8 md:px-10 py-4 bg-purple-600 text-white font-bold rounded-2xl transition-all text-sm md:text-base">
                                    View My Work
                                </motion.button>
                            </Link>

                            <motion.button whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }} whileTap={{ scale: 0.95 }} className="px-8 md:px-10 py-4 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-sm transition-all text-sm md:text-base">
                                Download CV
                            </motion.button> */}
                            <a href="/Akankshi_Gupta_CV.pdf" download>
                                <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.4)" }} whileTap={{ scale: 0.95 }} className="px-8 lg:px-10 py-4 bg-purple-600 text-white font-bold rounded-2xl transition-all text-sm md:text-base">
                                    Download CV
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div className="relative flex justify-center items-center order-1 lg:order-2 py-10 lg:py-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }}>
                        <motion.div animate={{ y: [0, -30, 0], rotate: [0, 2, -2, 0]}} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 text-[40px] md:text-[60px] lg:text-[80px] font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-700 select-none">
                            {'HTML'}
                            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] -z-10"></div>
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, 20, 0], x: [0, 15, 0] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-25 left-25 px-4 py-2 bg-[#1A1D2B]/60 backdrop-blur-md border border-cyan-400/50 rounded-xl text-cyan-400 font-bold text-xs shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        >
                            React.js
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, -25, 0], x: [0, -10, 0] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-35 right-30 px-4 py-2 bg-[#1A1D2B]/60 backdrop-blur-md border border-yellow-400/50 rounded-xl text-yellow-400 font-bold text-xs shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                        >
                            JavaScript
                        </motion.div>
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-0 left-5 px-4 py-2 bg-[#1A1D2B]/60 backdrop-blur-md border border-purple-500/50 rounded-xl text-purple-400 font-bold text-xs shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                        >
                            Redux
                        </motion.div>
                        <motion.div 
                            animate={{ x: [0, 20, 0] }} 
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 right-5 px-4 py-2 bg-[#1A1D2B]/60 backdrop-blur-md border border-blue-600/50 rounded-xl text-blue-500 font-bold text-xs shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                        >
                            Bootstrap
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-26 right-50  px-4 py-2 bg-[#1A1D2B]/60 backdrop-blur-md border border-cyan-400/50 rounded-xl text-cyan-400 font-bold text-xs shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        >
                            jquery
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, 30, 0], rotate: [0, -2, 2, 0]}} 
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                            className="absolute -top-20 right-3 z-0 text-[30px] md:text-[40px] lg:text-[50px] font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-slate-800 opacity-40 select-none"
                        >
                            {'REACT'}
                            <div className="absolute inset-0 bg-purple-500/10 blur-[60px] -z-10"></div>
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, -20, 0], rotate: [0, 3, -3, 0]}} 
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
                            className="absolute -bottom-20 -left-2  z-0 text-[30px] md:text-[40px] lg:text-[50px] font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-slate-800 opacity-40 select-none"
                        >
                            {'JS'}
                            <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] -z-10"></div>
                        </motion.div>
                        <motion.div 
                            animate={{ x: [0, 15, 0], y: [0, 20, 0]}} 
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} 
                            className="absolute -top-20 left-12 z-0 text-[25px] md:text-[35px] lg:text-[45px] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-slate-800 opacity-30 select-none"
                        >
                            {'CSS'}
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, -40, 0] }} 
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} 
                            className="absolute -bottom-40 right-25 z-0 text-[25px] md:text-[35px] lg:text-[45px] font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-slate-800 opacity-30 select-none"
                        >
                            {'REDUX'}
                        </motion.div>

                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
                            <div className="absolute top-0 w-8 md:w-10 h-8 md:h-10 bg-purple-500/20 border border-purple-500/50 rounded-lg backdrop-blur-sm text-white flex items-center justify-center font-bold">
                                {'</>'}
                            </div>
                            <div className="absolute bottom-10 right-10 w-5 md:w-6 h-5 md:h-6 bg-cyan-500/20 border border-cyan-500/50 rounded-md backdrop-blur-sm"></div>
                            <div className="absolute left-0 w-3 md:w-4 h-3 md:h-4 bg-white/10 border border-white/20 rounded-full"></div>
                            <div className="absolute top-40  w-8 md:w-10 h-8 md:h-10 bg-purple-500/20 border border-purple-500/50 rounded-lg backdrop-blur-sm text-white flex items-center justify-center font-bold">{'<>'}</div>
                            <div className="absolute -bottom-20 left-10 w-10 md:w-12 h-10 md:h-12 bg-pink-500/10 border border-pink-500/40 rounded-full backdrop-blur-sm text-pink-400 flex items-center justify-center text-[8px] font-bold">GIT</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30 z-1">
                <div className=" w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-white">Scroll</span>
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0F111A]" />
        </section>
    );
}

export default HeroSection;