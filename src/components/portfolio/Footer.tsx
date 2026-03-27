import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/404Nix",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/nikhil-kanojia69/",
        label: "LinkedIn",
    },
    {
        icon: Mail,
        href: "mailto:nikhilkanojia693@gmail.com",
        label: "Email",
    },
    {
        icon: ExternalLink,
        href: "https://portfolio-react-jet-delta.vercel.app/",
        label: "Portfolio",
    },
];

export const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-gray-900/90 backdrop-blur-md border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Portfolio
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building clean, scalable web applications with
                            modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-400 hover:text-cyan-400 text-sm text-left transition-colors duration-200 py-1"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                            Connect
                        </h3>
                        <div className="flex flex-col gap-2">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 group"
                                >
                                    <Icon
                                        size={15}
                                        className="group-hover:scale-110 transition-transform duration-200"
                                    />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider + Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Nikhil Kanojia. All rights
                        reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Built with{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-medium">
                            React & Tailwind CSS
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
