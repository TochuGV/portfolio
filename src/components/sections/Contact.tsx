import { Button, Card, Section } from '../ui'

export const Contact = () => {
  return (
    <Section id="contact" title="Contact" gradientDirection="t">
      <Card className="p-8 max-w-2xl mx-auto">
        <p className="text-gray-300 text-lg mb-8 text-center">
          Have a project in mind? Let's talk!
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-blue-900/30 rounded-lg text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-blue-900/30 rounded-lg text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-800 border border-blue-900/30 rounded-lg text-gray-100 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <Button className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 disabled:opacity-50">
            Send Message
          </Button>
        </form>
      </Card>
    </Section>
  )
}