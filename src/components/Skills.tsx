import { Button } from "./ui/button";

export default function Skills(){
    return(
        <div>
            <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-gray-600 pb-2">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "Node.js",
                "TypeScript",
                "HTML",
                "CSS",
                "GitHub",
              ].map((skill) => (
                // <div
                //   key={skill}
                //   className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                // >
                //   <span className="text-gray-300">{skill}</span>
                // </div>
                <Button
                  key={skill}
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                >
                  {skill}
                </Button>
              ))}
            </div>
          </section>
        </div>
    )
}