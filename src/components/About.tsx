export default function About(){
    return(
        <div>
             <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-gray-600 pb-2">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Background
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Hi, I&apos;m Abin Antony, a passionate full-stack developer
                  with expertise in modern web technologies. I specialize in
                  building dynamic, responsive, and user-friendly applications.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Expertise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both front-end and back-end
                  technologies, I thrive on creating seamless digital
                  experiences that make a difference.
                </p>
              </div>
            </div>
          </section>
        </div>
    )
}