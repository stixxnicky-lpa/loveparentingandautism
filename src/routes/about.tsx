import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-teal) 0%, #1e8a7d 100%)' }} className="py-16 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-5">
          <p style={{ color: 'var(--color-gold)', fontFamily: "'Inter', sans-serif" }} className="text-sm font-semibold uppercase tracking-widest mb-3">
            My story
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-lg opacity-90">26 years alongside autism — and still learning to love it</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10" style={{ fill: 'var(--color-cream)' }}>
            <path d="M0,30 C360,50 1080,10 1440,30 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-5 py-14">
        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
          <div style={{ backgroundColor: 'var(--color-cream-dark)', borderRadius: '1.5rem' }} className="w-full md:w-64 aspect-square flex-shrink-0 flex items-center justify-center p-6">
            <img src="/placeholder.png" alt="About the author" className="w-full max-w-40 rounded-xl" />
          </div>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-3xl font-bold mb-4">
              Hi, I'm so glad you found me
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }} className="leading-relaxed text-lg">
              I'm a mum, a partner, and a neurotypical person who has spent 26 years navigating family life alongside autism — mostly without a map, and sometimes without a clue what I was doing. If that sounds familiar, you're in exactly the right place.
            </p>
          </div>
        </div>

        <div style={{ color: 'var(--color-text-muted)' }} className="prose prose-lg max-w-none space-y-6 leading-relaxed">
          <p>
            When autism first entered our family, I did what most of us do — I turned to books, websites, and professionals, looking for answers. And while there was plenty of information <em>about</em> autism, I couldn't find much that was written <em>for me</em>. For the neurotypical parent quietly struggling. For the partner trying to understand. For the person who loves deeply but sometimes feels completely lost.
          </p>

          <p>
            So I started writing it myself.
          </p>

          <p>
            Over the years, I've filled journals, scribbled notes, had tearful conversations with other parents, and pieced together a way of understanding our family that actually <em>works</em> for us. It hasn't always been pretty. There have been meltdowns (some of them mine), misunderstandings, and moments where I genuinely didn't know if I was doing more harm than good. But there has also been laughter, connection, growth, and a kind of deep love that I don't think I could have found any other way.
          </p>

          <p>
            I created this space because I believe neurotypical parents and partners deserve their own support — not to replace the support we give our autistic loved ones, but to stand alongside it. You can't pour from an empty cup. And you shouldn't have to figure all of this out on your own.
          </p>

          <p>
            My book, <em>Love, Parenting & Autism</em>, is the book I wished I'd had. It's warm, honest, and written from the trenches. It's not clinical. It doesn't talk about autism like it's a problem to be solved. It talks about real family life — the beautiful, complicated, sometimes exhausting, always love-filled reality of it.
          </p>

          <p>
            The digital guides grew from questions I kept getting asked — about relationships, communication, understanding sensory differences, keeping yourself afloat. Each one is written with the same honesty and warmth as the book.
          </p>

          <p style={{ fontStyle: 'italic', color: 'var(--color-text)', fontFamily: "'Playfair Display', serif", fontSize: '1.125rem' }}>
            Whatever brought you here — welcome. You belong here. And I hope something you find in this space helps you breathe a little easier.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--color-cream-dark)' }} className="pt-10 mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link to="/shop" className="btn-teal font-semibold" style={{ textDecoration: 'none', padding: '0.75rem 2rem' }}>
            Browse the Guides
          </Link>
          <Link to="/contact" className="btn-outline font-semibold" style={{ textDecoration: 'none', padding: '0.75rem 2rem' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
