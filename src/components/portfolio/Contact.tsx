
import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "No Message Sent",
      description: "This Form is not working please use above information for contact!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Send className="mr-2 h-5 w-5 text-cyan-400" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 resize-none"
                />
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-gray-700/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">nikhilkanojia693@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">+91 8766291686</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-pink-400 mr-3" />
                    <span className="text-gray-300">Delhi, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 bg-transparent hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/nikhil-kanojia69/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-400 text-gray-400 hover:bg-gray-400 bg-transparent hover:text-gray-900 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/404nix" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-500 text-red-400 hover:bg-red-500 bg-transparent hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:nikhilkanojia693@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                
                <p className="text-gray-400 text-sm mt-4">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
