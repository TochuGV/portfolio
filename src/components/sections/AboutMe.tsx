import { Shield, Eye, Anchor, Layers, Unlink } from "lucide-react"
import { Card, Divider, Section } from "../ui"

const concepts = [
  { label: "Decoupling", icon: Unlink },
  { label: "Security", icon: Shield },
  { label: "Observability", icon: Eye },
  { label: "Resilience", icon: Anchor },
  { label: "System Design", icon: Layers },
]

const status = [
  { label: "Open to work", active: true },
  { label: "Available for freelance", active: true },
  { label: "Sharpening React fundamentals", active: false },
]

export const AboutMe = () => {
  return (
    <Section id="about-me" title="About Me" gradientDirection="t">
      <Card className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-8 flex-1">
            <p className="text-gray-300 text-lg leading-relaxed">
              Developer who believes clarity in all its forms is what makes the
              difference between software that grows and software that just
              survives. I think of a system as something that has to make sense
              at every layer, from structure to behavior, because consistency
              across both is what makes it a system and not just a collection
              of parts.
            </p>

            <Divider />
            <div className="flex gap-3">
              {concepts.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex flex-1 items-center justify-center gap-2 px-4 py-2 rounded-full border border-blue-900/50 bg-slate-800/50 text-sm text-blue-300 whitespace-nowrap"
                >
                  <Icon size={14} />
                  {label}
                </span>
              ))}
            </div>
          </div>
          
          <Divider direction="vertical" />
          <div className="flex flex-col gap-4 md:min-w-56 justify-center">
            {status.map(({ label, active }) => (
              <div key={label} className="flex items-center gap-3 text-gray-300 text-base">
                {active ? (
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                ) : (
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
                )}
                {label}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  )
}