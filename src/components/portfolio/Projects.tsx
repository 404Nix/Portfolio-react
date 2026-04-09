import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Vault404 — Secure Password Manager",
      description: [
        "Developed a production-grade password manager featuring AES encryption, JWT-based authentication, and session persistence.",
        "Engineered a containerized architecture using Docker multi-stage builds and Docker Compose, optimizing images for production.",
        "Deployed to Azure Container Apps with custom DNS configuration, ingress management, and automated production build workflows."
      ],
      tags: ["Node.js", "Express.js", "React", "MongoDB", "Docker", "Azure"],
      github: "https://github.com/404Nix/Vault404-PasswordManager",
      live: "https://vault404.app",
      featured: true,
    },
    {
      id: 2,
      title: "Gaming Analytics Dashboard",
      description: [
        "Built a full-stack dashboard to analyze player stats, game outcomes, rewards, and usage trends.",
        "Integrated real-time Socket.IO feeds for live data updates and JWT-secured access for user authentication.",
        "Developed a responsive UI with Tailwind CSS, providing a seamless experience across all devices."
      ],
      tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      github: "https://github.com/404Nix/Gaming-Analytics-Dashboard",
      live: "https://gaming-analytics-dashboard-l2st.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Fake News Detection System",
      description: [
        "Developed a fake news classifier pipeline mapping text using pre-trained BERT embeddings.",
        "Implemented advanced NLP fine-tuning techniques to improve classification accuracy.",
        "Analyzed large datasets to identify patterns and features indicative of misinformation."
      ],
      tags: ["Python", "TensorFlow", "BERT", "NLP"],
      github: "https://github.com/404Nix/FakeNewsDetection",
      live: "https://github.com/404Nix/FakeNewsDetection",
      featured: false,
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: [
        "Built a personal finance management app with real-time budget alerts and category analytics.",
        "Developed a responsive dark-themed dashboard using Redux Toolkit for state management.",
        "Integrated secure authentication and data persistence for a reliable user experience."
      ],
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
            className={`group relative overflow-hidden bg-white/[0.03] border border-secondary/25 rounded-sm p-8 flex flex-col transition-all duration-300 hover:border-secondary/50 ${project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
          >
            {/* Decorative Elements */}
            <div className="scanlines" />
            <div className="glow-corner-top opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glow-corner-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header Label Row */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2.5 py-1 text-[10px] font-bold font-mono tracking-widest uppercase bg-secondary/15 text-secondary border border-secondary/30 rounded-sm">
                  {project.featured ? "Featured" : "Project"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#00ffff] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-primary">
                  Live
                </span>
                <div className="ml-auto flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-extrabold font-syne text-white leading-none mb-2 group-hover:text-secondary transition-colors">
                {project.title.split('—')[0]}<span className="text-secondary">{project.title.includes('—') ? " — " + project.title.split('—')[1] : ""}</span>
              </h3>
              
              <a href={project.live} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[11px] font-mono text-primary opacity-80 hover:opacity-100 transition-opacity mb-6">
                <ExternalLink className="w-3 h-3" />
                {new URL(project.live).hostname}
              </a>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-secondary/50 via-primary/30 to-transparent mb-6" />

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 text-[10px] font-bold font-mono uppercase bg-white/[0.04] border border-white/10 text-gray-400 hover:border-secondary/50 hover:text-secondary-foreground transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description rendering */}
              <ul className="space-y-4 mb-8 flex-1">
                {project.description.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3 text-[13px] leading-relaxed text-gray-400">
                    <div className="mt-1 flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    </div>
                    <span className="group-hover:text-gray-300 transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
