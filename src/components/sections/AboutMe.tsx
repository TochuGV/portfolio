import { Card, Section } from "../ui"

export const AboutMe = () => {
  return (
    <Section id="about-me" title="About Me" gradientDirection="t">
      <Card className="p-8 md:p-10">
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a Full Stack Developer oriented toward structured systems design and 
          building resilient APIs. I integrate solutions from the server core 
          to the user interface, prioritizing architectural clarity and 
          consistency in system behavior within production environments.
        </p>
      </Card>
    </Section>
  )
}