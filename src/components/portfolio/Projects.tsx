import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CollaB - Real-Time Collaboration Board",
      description: "A real-time collaboration platform enabling organization-based teamwork, live updates, and role-based access. Built with Next.js, Convex, and Clerk with planned n8n workflow automation.",
      tags: ["Next.js", "TypeScript", "Convex", "Clerk", "Tailwind CSS"],
      github: "https://github.com/404Nix/realtime-collaboration-board",
      live: "https://github.com/404Nix/realtime-collaboration-board",
      featured: true,
    },
    {
      id: 2,
      title: "Gaming Analytics Dashboard",
      description: "Built a full-stack dashboard to analyze player stats, game outcomes, rewards, and usage trends with real-time Socket.IO feeds and JWT-secured access.",
      tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      github: "https://github.com/404Nix/Gaming-Analytics-Dashboard",
      live: "https://gaming-analytics-dashboard-l2st.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Fake News Detection System",
      description: "Developed a fake news classifier pipeline mapping text using pre-trained BERT embeddings and NLP fine-tuning techniques.",
      tags: ["Python", "TensorFlow", "BERT", "NLP"],
      github: "https://github.com/404Nix/FakeNewsDetection",
      live: "https://github.com/404Nix/FakeNewsDetection",
      featured: false,
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: "Built a personal finance management app with real-time budget alerts, category analytics, and a responsive dark-themed dashboard using Redux Toolkit.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/404Nix/ExpenseTracker",
      live: "https://expense-tracker-five-dusky-30.vercel.app/",
      featured: false,
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white flex items-center gap-4">
            <span className="text-primary font-mono text-xl">04.</span>
            Featured_Work
            <div className="h-[1px] flex-1 bg-white/10 ml-4 max-w-sm"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group glass rounded-xl p-6 border border-white/5 relative overflow-hidden flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <FolderGit2 className="w-10 h-10 text-primary" />
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
