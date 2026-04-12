import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactPage() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setSubmitted(true)
    setSending(false)
  }

  return (
    <div>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-teal) 0%, #1e8a7d 100%)' }} className="py-16 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-5">
          <p style={{ color: 'var(--color-gold)', fontFamily: "'Inter', sans-serif" }} className="text-sm font-semibold uppercase tracking-widest mb-3">
            Say hello
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg opacity-90">I'd love to hear from you</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10" style={{ fill: 'var(--color-cream)' }}>
            <path d="M0,30 C360,50 1080,10 1440,30 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-5 py-14">
        <div style={{ backgroundColor: 'white', border: '1px solid var(--color-cream-dark)' }} className="rounded-2xl p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div style={{ color: 'var(--color-teal)' }} className="text-5xl mb-6">💛</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-2xl font-bold mb-3">
                Message received!
              </h2>
              <p style={{ color: 'var(--color-text-muted)' }} className="leading-relaxed">
                Thank you so much for reaching out. I read every message personally and will get back to you as soon as I can. In the meantime, feel free to browse the guides.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-2xl font-bold mb-3">
                  Drop me a message
                </h2>
                <p style={{ color: 'var(--color-text-muted)' }} className="leading-relaxed">
                  Whether you have a question about one of the guides, want to share your own experience, or just want to say hello — I'd genuinely love to hear from you. No question is too small and no message too long.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label style={{ color: 'var(--color-text)', fontWeight: 500 }} className="block text-sm mb-1.5" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Sarah"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: '1.5px solid var(--color-cream-dark)',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: 'var(--color-text)', fontWeight: 500 }} className="block text-sm mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: '1.5px solid var(--color-cream-dark)',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: 'var(--color-text)', fontWeight: 500 }} className="block text-sm mb-1.5" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me what's on your mind..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      border: '1.5px solid var(--color-cream-dark)',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-xl font-semibold text-white transition-opacity disabled:opacity-60"
                  style={{ backgroundColor: 'var(--color-teal)' }}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
