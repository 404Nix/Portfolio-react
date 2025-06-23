
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Academic Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate B.Tech Computer Science Engineering student with a deep fascination for technology 
                and its potential to solve real-world problems. My academic journey has equipped me with strong 
                fundamentals in computer science principles, algorithms, and software development.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Passion & Goals</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in full-stack development and love creating seamless user experiences with modern 
                technologies. My goal is to become a versatile software engineer who can bridge the gap between 
                innovative ideas and practical implementations.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Problem Solving</h3>
              <p className="text-gray-300 leading-relaxed">
                I thrive on tackling complex challenges and finding elegant solutions. Whether it's optimizing 
                algorithms, debugging code, or architecting scalable systems, I approach every problem with 
                curiosity and determination.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                The tech world evolves rapidly, and I'm committed to staying current with emerging technologies, 
                best practices, and industry trends. I believe in learning by doing and constantly challenging 
                myself with new projects and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
