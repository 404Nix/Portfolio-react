import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Terminal as TerminalIcon, Send } from "lucide-react";

export const Contact = () => {
  const [isTerminalMode, setIsTerminalMode] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    "Welcome to the Nix communication protocol.",
    "Type 'help' for available commands or 'send [message]' to contact.",
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const newHistory = [...terminalHistory, `> ${terminalInput}`];

    if (terminalInput.toLowerCase() === 'help') {
      newHistory.push("Available commands:");
      newHistory.push("  send [msg]  - Send a message directly to Nix");
      newHistory.push("  clear       - Clear terminal history");
      newHistory.push("  socials     - List social media links");
    } else if (terminalInput.toLowerCase() === 'clear') {
      setTerminalHistory(["Terminal cleared."]);
      setTerminalInput("");
      return;
    } else if (terminalInput.toLowerCase() === 'socials') {
      newHistory.push("- GitHub: github.com/404Nix");
      newHistory.push("- LinkedIn: linkedin.com/in/nikhil-kanojia69");
    } else if (terminalInput.toLowerCase().startsWith('send ')) {
      newHistory.push("Sending message to server...");
      setTimeout(() => {
        setTerminalHistory(prev => [...prev, "MESSAGE DELIVERED SUCCESSFULLY. Returning payload [HTTP 200 OK]"]);
      }, 1000);
    } else {
      newHistory.push(`Command not found: ${terminalInput}`);
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050505]">
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
            <span className="text-primary font-mono text-xl">05.</span>
            Initiate_Contact
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Socials / Direct Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-2">Connect</h3>
              <p className="text-gray-400">Feel free to reach out via email or connect with me on social media.</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:nikhilkanojia693@gmail.com" className="inline-flex items-center gap-3 text-lg font-mono text-primary hover:text-cyan-300 transition-colors">
                  <Mail className="w-5 h-5" />
                  nikhilkanojia693@gmail.com
                </a>
                <a href="tel:+918766291686" className="inline-flex items-center gap-3 text-lg font-mono text-primary hover:text-cyan-300 transition-colors">
                  <span className="w-5 h-5 flex items-center justify-center font-bold">☎</span>
                  +91 876629XXXX
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/404Nix" className="p-3 glass rounded-full hover:bg-primary/20 hover:text-primary text-gray-400 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/nikhil-kanojia69" className="p-3 glass rounded-full hover:bg-secondary/20 hover:text-secondary text-gray-400 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <button
              onClick={() => setIsTerminalMode(!isTerminalMode)}
              className="mt-8 flex items-center gap-2 w-fit px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-sm text-gray-300 font-mono transition-colors"
            >
              <TerminalIcon className="w-4 h-4" />
              {isTerminalMode ? "Switch to Standard Form" : "Switch to Terminal Mode"}
            </button>
          </motion.div>

          {/* Form / Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>

            <div className="relative glass rounded-xl p-8 border border-white/10 shadow-2xl h-[450px]">
              <AnimatePresence mode="wait">
                {!isTerminalMode ? (
                  <motion.form
                    key="standard-form"
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                      <input type="text" className="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <input type="email" className="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="flex-1 min-h-[120px]">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                      <textarea className="w-full h-[calc(100%-28px)] resize-none bg-black/50 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Let's build something..."></textarea>
                    </div>
                    <button type="button" className="w-full py-3 bg-white/10 hover:bg-primary/20 text-white font-medium rounded border border-white/5 hover:border-primary/50 transition-all flex justify-center items-center gap-2 group">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="terminal-form"
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full font-mono text-sm"
                  >
                    <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-gray-500 ml-2">guest@nix404: ~/contact</span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-2 mb-4 scrollbar-thin scrollbar-thumb-white/10 text-gray-300 pr-2">
                      {terminalHistory.map((line, idx) => (
                        <div key={idx} className={`${line.startsWith('>') ? 'text-primary' : ''}`}>
                          {line}
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-4 border-t border-white/10">
                      <span className="text-primary">{'>'}</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                        autoFocus
                      />
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
