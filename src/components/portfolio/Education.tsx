
import { Calendar, Award, BookOpen } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {/* Main Degree */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology</h3>
                <p className="text-xl text-cyan-400 font-semibold">Computer Science Engineering</p>
                <p className="text-gray-400 mt-1">Galgotias University</p>
              </div>
              <div className="flex items-center text-gray-400 mt-4 md:mt-0">
                <Calendar className="mr-2 h-4 w-4" />
                <span>2021 - 2025</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Relevant Coursework
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Database Management Systems</li>
                  <li>• Computer Networks</li>
                  <li>• Software Engineering</li>
                  <li>• Operating Systems</li>
                  <li>• Machine Learning</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Achievements
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• CGPA: 7.64/10</li>
                  <li>• Published Reseach paper</li>
                  <li>•  Solved 200+ DSA problems</li>
                </ul>
              </div>
            </div> 
          </div>

          {/* Certifications */}
          {/* <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-purple-400" />
              Certifications & Online Learning
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Full Stack Web Development", issuer: "freeCodeCamp", year: "2023" },
                { name: "React Developer Certification", issuer: "Meta", year: "2023" },
                { name: "JavaScript Algorithms", issuer: "HackerRank", year: "2022" },
                { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2024" },
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-purple-400/50 transition-all duration-300"
                >
                  <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                  <p className="text-gray-400 text-sm">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
