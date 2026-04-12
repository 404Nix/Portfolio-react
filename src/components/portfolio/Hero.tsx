import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Terminal, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Subtle glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50"></div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
        >
          <Terminal size={16} />
          <span className="text-sm font-mono tracking-wider">STATUS: ONLINE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6"
        >
          <span className="glitch-effect neon-text-cyan text-primary" data-text="404 —">404 —</span>
          <br className="md:hidden" />
          <span className="ml-0 md:ml-4 text-white">Developer Found</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4"
        >
          Hi, I'm Nikhil Kanojia (Nix). I build scalable full-stack applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-12 text-lg md:text-xl font-mono text-secondary neon-text-purple mb-10"
        >
          {'>'} I specialize in{' '}
          <Typewriter
            words={['MERN Stack', 'Real-Time Applications', 'Backend Architecture']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide text-black bg-primary rounded-md overflow-hidden transition-all hover:bg-cyan-400 neon-border-cyan"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://drive.google.com/file/d/1f5L1Q-73bTeoQwzqmZzVa6kPfGc3Q76K/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide text-white bg-transparent border border-white/20 rounded-md transition-all hover:bg-white/5 backdrop-blur-sm"
          >
            Resume
            <Download size={18} className="translate-y-0 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
