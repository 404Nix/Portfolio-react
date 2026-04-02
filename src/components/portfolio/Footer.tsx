export const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 font-mono text-sm max-w-sm mx-auto group cursor-pointer">
          <span className="group-hover:text-primary transition-colors">© 2026 Nikhil Kanojia</span> — Built with React & ☕
          
          {/* Subtle glitch hover effect on the entire paragraph target */}
          <span className="block h-px w-0 bg-primary mt-1 mx-auto group-hover:w-full transition-all duration-500"></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
