
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fnd from '@/assets/Fake_news_detection.png';
import gaming_dashboard from '@/assets/gaming_dashboard.png'
import employee_management from '@/assets/Employee_management.png'
import drive from '@/assets/Drive.png'

const projects = [
  {
    title: "Gaming Analytics Dashboad",
    description: "Built a full-stack dashboard to analyze player stats, game outcomes, rewards, and usage trends.",
    technologies: ["ReactJS", "Vite", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Socket.IO"],
    github: "https://github.com/404Nix/Gaming-Analytics-Dashboard",
    demo: "https://gaming-analytics-dashboard-l2st.vercel.app/",
    image: gaming_dashboard,
  },
  {
    title: "Fake News Detection System",
    description: "Developed a fake news classifier using pre-trained BERT embeddings and fine-tuning.",
    technologies: ["Python", "Tensorflow", "BERT", "NLP"],
    github: "https://github.com/404Nix/FakeNewsDetection",
    demo: "https://github.com/404Nix/FakeNewsDetection",
    image: fnd,
  },
  {
    title: "Drive",
    description: " Built a secure cloud file storage system with user login and encrypted token authentication.",
    technologies: ["JavaScript", "Express.js", "express-validator", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/404Nix/Drive",
    demo: "https://github.com/404Nix/Drive",
    image: drive,
  },
  {
    title: "Employee Management System",
    description: " Developed a single-page application (SPA) for managing employee tasks and data.",
    technologies: ["ReactJS", "JavaScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/404Nix/Employee-Management-System",
    demo: "https://employee-management-system-khaki.vercel.app/",
    image: employee_management,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 bg-transparent hover:text-gray-900 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
