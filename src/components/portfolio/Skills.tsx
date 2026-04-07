import { motion } from "framer-motion";
import { Server, Layout, Database, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Layout,
      color: "text-primary",
      borderColor: "border-primary/30",
      shadow: "hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]",
      skills: ["Java", "JavaScript", "SQL", "Python"]
    },
    {
      title: "Frontend Development",
      icon: Layout,
      color: "text-secondary",
      borderColor: "border-secondary/30",
      shadow: "hover:shadow-[0_0_20px_rgba(191,0,255,0.2)]",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Responsive UI", "Form Handling"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-400",
      borderColor: "border-green-400/30",
      shadow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "CRUD Operations", "Authentication", "Socket.IO"]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "text-orange-400",
      borderColor: "border-orange-400/30",
      shadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]",
      skills: ["MongoDB", "MySQL", "Git & GitHub", "Jira", "Postman", "VS Code"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-right flex flex-col md:items-end"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white flex items-center justify-end gap-4 w-full">
            <div className="h-[1px] flex-1 bg-white/10 mr-4 max-w-sm hidden md:block"></div>
            <span className="text-primary font-mono text-xl">03.</span>
            Tech_Arsenal
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">Technologies and tools I use to build robust digital solutions.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`glass rounded-xl p-6 border ${category.borderColor} transition-shadow duration-300 ${category.shadow} flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-xl font-bold font-['Space_Grotesk']">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded border border-white/10 text-gray-300 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
