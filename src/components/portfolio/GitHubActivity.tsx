import { motion } from "framer-motion";
import { Github, ExternalLink, Activity, Award, Code2 } from "lucide-react";

export const GitHubActivity = () => {
  const username = "404Nix";
  const theme = "tokyonight";
  const statsUrl = `https://github-readme-stats-alpha.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=00FFFF&icon_color=00FFFF&text_color=FFFFFF`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=0D1117&stroke=00FFFF&ring=BF00FF&fire=BF00FF&currStreakNum=00FFFF`;
  const langsUrl = `https://github-readme-stats-alpha.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=BF00FF&text_color=FFFFFF&langs_count=8&hide=html,css`;

  return (
    <section id="github" className="py-24 relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-secondary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span>
            GitHub_Activity
            <div className="h-[1px] flex-1 bg-white/10 ml-4 max-w-sm"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">My open-source contributions and development activity tracked in real-time.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass rounded-xl p-4 md:p-6 border border-white/5 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">System Stats</h3>
                </div>
                <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="flex-1 flex items-center justify-center min-h-[180px]">
                <img 
                  src={statsUrl} 
                  alt="GitHub Stats" 
                  className="w-full h-auto max-w-[450px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Streak Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass rounded-xl p-4 md:p-6 border border-white/5 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Commit Streak</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1 flex items-center justify-center min-h-[180px]">
                <img 
                  src={streakUrl} 
                  alt="GitHub Streak" 
                  className="w-full h-auto max-w-[450px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative glass rounded-xl p-4 md:p-8 border border-white/5 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Code2 className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Tech Stack Pulse</h3>
                </div>
                <p className="text-gray-400">
                  A visual representation of the languages I've used most across my projects. Currently deep diving into <span className="text-primary">Backend Architectures</span> and <span className="text-secondary">Full-stack React</span>.
                </p>
                <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                   <div className="px-4 py-2 bg-white/5 rounded-md border border-white/10 text-sm font-mono text-gray-300">
                      Repositories: <span className="text-primary font-bold">40+</span>
                   </div>
                   <div className="px-4 py-2 bg-white/5 rounded-md border border-white/10 text-sm font-mono text-gray-300">
                      Contributions: <span className="text-secondary font-bold">Dynamic</span>
                   </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center w-full min-h-[200px]">
                <img 
                  src={langsUrl} 
                  alt="Top Languages" 
                  className="w-full h-auto max-w-[400px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Profile Link CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 border border-white/10 rounded-full text-sm font-mono text-gray-400 hover:text-primary transition-all group"
          >
            VIEW FULL PROFILE ON GITHUB
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
