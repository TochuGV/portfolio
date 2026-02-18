import { Card, Section } from "../ui"

export const AboutMe = () => {
  return (
    <Section id="about-me" title="About Me" className="bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-10">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a Full Stack Developer and a 3rd-year Systems Engineering 
            student driven by a passion for scalable software. I specialize 
            in building secure, efficient web applications with a strong 
            emphasis on maintainability and documentation.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Currently exploring Cloud Architecture and advanced Backend patterns. 
            I combine strong theoretical foundations with practical, modern tech 
            stacks to solve complex problems.
          </p>
        </Card>
      </div>
    </Section>
  )
}