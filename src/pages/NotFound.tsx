import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen grid items-center justify-center bg-[#050505] text-white p-4 font-mono relative overflow-hidden">
      {/* Background static noise effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDUwNTA1Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYjFiMWIiPjwvcmVjdD4KPC9zdmc+')] opacity-50"></div>
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 pointer-events-none"></div>

      <div className="relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <Terminal className="w-16 h-16 text-primary neon-text-cyan" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-4 tracking-tighter">
            <span className="glitch-effect text-primary" data-text="404">404</span>
          </h1>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent my-6"></div>

          <h2 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-gray-300 mb-6 uppercase tracking-widest">
            Error: Page essentially lost.
          </h2>
          
          <p className="text-lg md:text-xl text-primary font-mono bg-primary/10 inline-block px-4 py-2 rounded border border-primary/20 mb-8">
            <span className="text-gray-400">But you found:</span> {'>'} Nix
          </p>

          <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm">
            The resource requested at <span className="text-secondary">{location.pathname}</span> could not be located on this server. This might be a glitch in the matrix.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-black bg-primary rounded-sm overflow-hidden transition-all hover:bg-cyan-400 neon-border-cyan uppercase"
          >
            <Home className="w-4 h-4" />
            Return to Base
            
            {/* Cyberpunk accent */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-white group-hover:bg-black transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white group-hover:bg-black transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
