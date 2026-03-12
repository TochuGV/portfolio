import { Card, Section } from '../ui'
import { ContactForm } from '../contact/ContactForm'

export const Contact = () => {
  return (
    <Section id="contact" title="Contact" gradientDirection="t">
      <Card className="p-8 max-w-2xl mx-auto">
        <p className="text-gray-300 text-lg mb-8 text-center">
          Have a project in mind? Let's talk!
        </p>
        <ContactForm />
      </Card>
    </Section>
  )
}