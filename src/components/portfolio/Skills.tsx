
const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-cyan-400 to-blue-500",
    skills: ["Java", "JavaScript", "Sql" ,"Python"],
  },
  {
    title: "Frontend Development",
    color: "from-purple-400 to-pink-500",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    color: "from-green-400 to-teal-500",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Databases & Tools",
    color: "from-orange-400 to-red-500",
    skills: ["MongoDB", "MySQL", "Git Github", "Jira"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative overflow-hidden"
                  >
                    <div className={`
                      p-3 text-center text-sm font-medium text-gray-300 
                      bg-gradient-to-r ${category.color} bg-opacity-10 
                      rounded-lg border border-gray-600/30 
                      hover:border-gray-500/50 transition-all duration-300
                      hover:transform hover:scale-105 cursor-pointer
                    `}>
                      {skill}
                    </div>
                    
                    {/* Hover effect */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r ${category.color} 
                      opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg
                    `} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Additional Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Problem Solving", "OOPS", "Team Collaboration", "Code Review", "DBMS", "Time Management", "Communication"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
