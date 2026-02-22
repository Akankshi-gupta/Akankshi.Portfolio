import {motion} from "motion/react"

const skillCategories = [
    {
        title: "Frontend Core",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
        color: "from-cyan-500 to-blue-500",
        delay: 0.1
    },
    {
        title: "Frameworks & UI",
        skills: ["React.js", "Redux", "Context API", "jQuery", "Tailwind CSS", "Bootstrap", "Responsive Design"],
        color: "from-purple-500 to-pink-500",
        delay: 0.2
    },
    {
        title: "Tools & Workflow",
        skills: ["Git", "GitHub"],
        color: "from-orange-500 to-yellow-500",
        delay: 0.3
    }
];

function Skills(){
    return(
        <section id="skills" className="flex justify-center relative overflow-hidden py-14 bg-[#0F111A]">
            {/* <div className="absolute top-0 w-full h-24 bg-gradient-to-t from-transparent to-[#0F111A]"></div> */}
            <div className="absolute top-1/4 left-1/4 w-86 h-86 bg-purple-600/20 blur-[120px] rounded-full z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-86 h-86 bg-cyan-600/10 blur-[120px] rounded-full z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-sm uppercase tracking-[0.5em] text-purple-500 font-bold mb-4">My Toolkit</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">Technical Proficiency</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20, boxShadow:"0px 50px 20px transparent" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: category.delay }}
                        whileHover={{ y: -5, boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",borderColor: "rgba(168, 85, 247, 0.9)" }}
                        className="bg-[#161925]/50 backdrop-blur-xl border border-white/40 p-8 rounded-3xl transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} mb-6 flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                                <span className="text-white font-bold text-xl">{category.title[0]}</span>
                            </div>
                            
                            <h4 className="text-xl font-bold text-white mb-6 tracking-tight">{category.title}</h4>
                        
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                <span 
                                    key={sIdx}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-transparent"></div> */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10"></div> */}
            </div>
        </section>
    )
}

export default Skills;