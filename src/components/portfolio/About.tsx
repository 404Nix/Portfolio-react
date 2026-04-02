import { motion } from "framer-motion";
import { Code2, GitCommit, LayoutGrid } from "lucide-react";

export const About = () => {
  const stats = [
    { label: "Projects Built", value: "4+", icon: LayoutGrid, color: "text-primary" },
    { label: "Tech Mastered", value: "15+", icon: Code2, color: "text-secondary" },
    { label: "DSA Solved", value: "200+", icon: GitCommit, color: "text-green-400" },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span>
            About_Me
            <div className="h-[1px] flex-1 bg-white/10 ml-4 max-w-sm"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              Hey. I'm <span className="text-white font-medium">Nikhil Kanojia (Nix)</span>, a Computer Science student at Galgotias University and a passionate backend developer. I build robust, scalable applications that solve real-world problems.
            </p>
            <p>
              My experience includes working as a <span className="text-primary neon-text-cyan">Backend Developer Intern</span> at Littlewise, where I architect secure APIs and integrate complex backend workflows. I obsess over <span className="text-secondary neon-text-purple">clean code</span> and high-performance server logic.
            </p>
            <p>
              When I'm not coding, you can find me solving DSA problems (200+ under my belt), experimenting with system architectures, or diving deep into the terminal.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/10 transition-colors cursor-default">
                  <stat.icon className={`w-6 h-6 ${stat.color} mb-1`} />
                  <span className="text-2xl font-bold text-white font-mono">{stat.value}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Avatar / Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            {/* Background elements */}
            <div className="absolute w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="absolute w-[200px] h-[200px] bg-secondary/10 rounded-full blur-[60px] translate-x-12 translate-y-12"></div>

            {/* Abstract Avatar Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 glass rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Terminal window mockup inside the avatar box */}
              <div className="absolute inset-4 bg-black/80 rounded-xl border border-white/5 font-mono p-4 flex flex-col shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-green-400 flex-1 flex flex-col justify-center space-y-2">
                  <p>{'>'} whoami</p>
                  <p className="text-gray-300">Nikhil</p>
                  <p className="mt-2">{'>'} cat skills.json | grep "superpower"</p>
                  <p className="text-primary">"Turning coffee into scalable APIs"</p>
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-gray-400 mt-2"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
