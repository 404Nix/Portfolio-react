
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-gray-100 mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Nikhil Kanojia
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
            Computer Science Student | Web Developer | Tech Enthusiast
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Turning ideas into digital experiences through innovative code and creative problem-solving
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Button>
            

            <a
              href="https://drive.google.com/uc?export=download&id=15bGYkXL1synvikTYkqA606UGOEv_vk5V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>

          </div>

          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
