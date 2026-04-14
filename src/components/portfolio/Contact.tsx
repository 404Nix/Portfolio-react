import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import AsciiCanvas from "./AsciiCanvas";

const COMMAND_LIST = [
  { name: "help", desc: "List all available commands" },
  { name: "about", desc: "Digital profile summary" },
  { name: "skills", desc: "View technical arsenal" },
  { name: "contact", desc: "Display contact methods" },
  { name: "socials", desc: "Social media links" },
  { name: "ls", desc: "List virtual system files" },
  { name: "cat [file]", desc: "Show content of a file" },
  { name: "send [msg]", desc: "Direct message to server" },
  { name: "whoami", desc: "Current protocol identification" },
  { name: "date", desc: "Display system date" },
  { name: "clear", desc: "Flush terminal history" },
];

const FILES: Record<string, string> = {
  "readme.md": "# Nix Communication Protocol\nThis is a secure terminal for reaching Nikhil Kanojia.",
  "intro.txt": "I'm a Full Stack Developer specialized in MERN stack and real-time systems.",
  "resume.pdf": "[BINARY_DATA] - Download available via 'resume' command.",
  "manifesto.log": "Building the future, one commit at a time.",
};

// Safe padding helper for wider browser compatibility
const padString = (str: string, length: number) => {
  let s = str || "";
  while (s.length < length) s += " ";
  return s;
};

export const Contact = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [isBooted, setIsBooted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  // Boot sequence using recursive setTimeout for better control
  useEffect(() => {
    isMounted.current = true;
    const bootSequence = [
      "INITIALIZING NIX_OS v4.0.4...",
      "LOADING KERNEL MODULES... DONE",
      "ESTABLISHING SECURE PROTOCOL... SSL_ENABLED",
      "WELCOME TO NIX TERMINAL INTERFACE.",
      "Type 'help' for available commands.",
      "----------------------------------------",
    ];

    let current = 0;
    let timerId: NodeJS.Timeout;

    const runBoot = () => {
      if (!isMounted.current) return;
      if (current < bootSequence.length) {
        setTerminalHistory(prev => [...prev, bootSequence[current]]);
        current++;
        timerId = setTimeout(runBoot, 150);
      } else {
        setIsBooted(true);
      }
    };

    runBoot();

    return () => {
      isMounted.current = false;
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleCommand = useCallback((input: string) => {
    const trimmedInput = (input || "").trim().toLowerCase();
    const [cmd, ...args] = trimmedInput.split(" ");
    const output: string[] = [`> ${input}`];

    switch (cmd) {
      case "help":
        output.push("Available Commands:");
        COMMAND_LIST.forEach(c => {
          output.push(`  ${padString(c.name, 12)} - ${c.desc}`);
        });
        break;

      case "about":
        output.push("Digital Profile: Nikhil Kanojia (Nix)");
        output.push("Title: Full Stack Developer");
        output.push("Focus: Scalable backend architecture & Interactive frontends.");
        break;

      case "skills":
        output.push("Technical Arsenal:");
        output.push("• Languages: Java, JavaScript, Python, SQL");
        output.push("• Frontend: React, Next.js, Redux, Tailwind");
        output.push("• Backend: Node.js, Express, Socket.io");
        output.push("• Databases: MongoDB, MySQL");
        break;

      case "contact":
        output.push("Communication Channels:");
        output.push("• Email: nikhilkanojia693@gmail.com");
        output.push("• Mobile: +91 8766291686");
        break;

      case "socials":
        output.push("Connected Nodes:");
        output.push("• GitHub: github.com/404Nix");
        output.push("• LinkedIn: linkedin.com/in/nikhil-kanojia69");
        break;

      case "ls":
        output.push("Directory: /home/guest/docs");
        output.push(Object.keys(FILES).join("   "));
        break;

      case "cat":
        const fileName = args[0];
        if (fileName && FILES[fileName]) {
          output.push(FILES[fileName]);
        } else {
          output.push(`cat: ${fileName || 'unspecified'}: No such file or directory`);
        }
        break;

      case "whoami":
        output.push("Nikhil Kanojia — Full Stack Developer & Tech Enthusiast.");
        break;

      case "date":
        output.push(new Date().toString());
        break;

      case "clear":
        setTerminalHistory(["Terminal cleared.", "Type 'help' for commands."]);
        return;

      case "send":
        const msg = args.join(" ");
        if (msg) {
          output.push("Package encryption... DONE");
          output.push("Transmitting payload...");
          setTimeout(() => {
            if (isMounted.current) {
               setTerminalHistory(prev => [...prev, "MESSAGE DELIVERED SUCCESSFULLY. Status: 200 OK"]);
            }
          }, 1000);
        } else {
          output.push("Usage: send [message]");
        }
        break;

      case "":
        break;

      default:
        output.push(`zsh: command not found: ${cmd}`);
    }

    setTerminalHistory(prev => [...prev, ...output]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    handleCommand(terminalInput);
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
          <p className="text-gray-400 mt-4 max-w-xl">Use the secure terminal below to communicate or browse my status.</p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: ASCII Art */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <AsciiCanvas 
              text="NIX"
              width={500} 
              height={400} 
              fontSize={8} 
              disturbRadius={100} 
              disturbStrength={35} 
            />
          </motion.div>

          {/* Right: Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
            <div className="relative glass rounded-xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
                  <TerminalIcon className="w-3 h-3" />
                  nix_os — 80x24
                </div>
                <div className="w-12"></div>
              </div>

              {/* Terminal Body */}
              <div 
                ref={terminalRef}
                className="h-[400px] overflow-y-auto p-6 font-mono text-sm scrollbar-thin scrollbar-thumb-white/10"
              >
                <div className="space-y-1">
                  {Array.isArray(terminalHistory) && terminalHistory.map((line, idx) => {
                    if (typeof line !== 'string') return null;
                    return (
                      <div 
                        key={idx} 
                        className={
                          line.startsWith('>') ? 'text-primary' : 
                          line.includes('SUCCESS') ? 'text-green-400' :
                          line.includes('error') ? 'text-red-400' :
                          'text-gray-300'
                        }
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {line}
                      </div>
                    );
                  })}
                  
                  {isBooted && (
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
                      <span className="text-primary">nix@portfolio:~$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                      />
                    </form>
                  )}
                </div>
              </div>
              
              {/* CRT Overlay Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_2px,3px_100%]"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Quick Links Footer */}
        <div className="mt-16 flex justify-center gap-8 border-t border-white/5 pt-8">
          <a href="mailto:nikhilkanojia693@gmail.com" className="text-gray-500 hover:text-primary transition-colors text-sm font-mono uppercase tracking-widest">Email</a>
          <a href="https://github.com/404Nix" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors text-sm font-mono uppercase tracking-widest">Github</a>
          <a href="https://linkedin.com/in/nikhil-kanojia69" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors text-sm font-mono uppercase tracking-widest">Linkedin</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
