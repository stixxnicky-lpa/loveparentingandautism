import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{ background: 'linear-gradient(135deg, var(--color-teal) 0%, #1e8a7d 100%)' }}
        className="relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-5 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white text-center md:text-left">
            <p style={{ color: 'var(--color-gold)', fontFamily: "'Inter', sans-serif" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
              For neurotypical parents & partners
            </p>
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              Navigating Love, Family &amp; Autism —{' '}
              <em className="italic font-normal">Together</em>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Real talk, heartfelt guides, and genuine support for neurotypical parents and partners living alongside autism — from someone who truly gets it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/shop" className="btn-gold text-base font-semibold" style={{ textDecoration: 'none', padding: '0.75rem 2rem' }}>
                Browse the Guides
              </Link>
              <Link to="/about" className="btn-outline text-base font-semibold border-white text-white hover:bg-white" style={{ textDecoration: 'none', padding: '0.75rem 2rem', borderColor: 'rgba(255,255,255,0.7)', color: 'white' }}>
                My Story
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 md:w-80 lg:w-96">
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '1.5rem',
              }}
              className="aspect-square flex items-center justify-center p-8"
            >
              <img
                src="/Front cover.png"
                alt="Love, Parenting & Autism book cover"
                className="w-full max-w-56 rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12" style={{ fill: 'var(--color-cream)' }}>
            <path d="M0,40 C360,70 1080,10 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* About Intro */}
      <section className="max-w-4xl mx-auto px-5 py-16 text-center">
        <p style={{ color: 'var(--color-teal)', fontFamily: "'Inter', sans-serif" }} className="text-sm font-semibold uppercase tracking-widest mb-3">
          A little about this space
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-3xl md:text-4xl font-bold mb-6">
          You're not alone in this
        </h2>
        <p style={{ color: 'var(--color-text-muted)' }} className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          I'm a neurotypical mum who has spent 26 years navigating family life alongside autism — and I've done a lot of it without a map. This space exists because I know how isolating it can feel, and how hard it is to find support that isn't clinical, preachy, or completely disconnected from real life.
        </p>
        <p style={{ color: 'var(--color-text-muted)' }} className="text-lg leading-relaxed max-w-2xl mx-auto">
          Everything you'll find here is warm, honest, and written from lived experience — the kind of thing you'd share with a close friend over a cup of tea.
        </p>
        <div className="mt-8">
          <Link to="/about" style={{ color: 'var(--color-teal)', textDecoration: 'underline', fontWeight: 500 }}>
            Read my full story →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div style={{ backgroundColor: 'var(--color-cream-dark)' }} className="h-px max-w-6xl mx-auto" />

      {/* Featured Products */}
      <section style={{ backgroundColor: 'var(--color-cream-dark)' }} className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <p style={{ color: 'var(--color-teal)' }} className="text-sm font-semibold uppercase tracking-widest mb-3">
              Guides &amp; Resources
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-3xl md:text-4xl font-bold">
              Start your journey here
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                style={{ backgroundColor: 'white', border: '1px solid var(--color-cream-dark)' }}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div style={{ backgroundColor: 'var(--color-cream)' }} className="aspect-square flex items-center justify-center p-6">
                  <img src={product.image} alt={product.name} className="w-full max-w-40 rounded-xl" />
                </div>
                <div className="p-6">
                  {product.format && (
                    <span style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }} className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full">
                      {product.format}
                    </span>
                  )}
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-xl font-bold mt-3 mb-2">
                    {product.name}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)' }} className="text-sm leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span style={{ color: 'var(--color-teal)' }} className="text-xl font-bold">
                      £{(product.price / 100).toFixed(2)}
                    </span>
                    <Link to="/products/$productId" params={{ productId: product.id.toString() }} className="btn-teal text-sm" style={{ textDecoration: 'none', padding: '0.5rem 1.25rem' }}>
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop" className="btn-teal text-base font-semibold" style={{ textDecoration: 'none', padding: '0.75rem 2.5rem' }}>
              Browse All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-text)' }} className="py-14">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl font-bold mb-4">
            You deserve support too
          </h2>
          <p className="text-lg leading-relaxed mb-6 opacity-80">
            Caring for an autistic family member is an act of profound love. These guides are here to make sure you don't have to figure it all out alone.
          </p>
          <Link to="/contact" className="btn-teal font-semibold" style={{ textDecoration: 'none', padding: '0.75rem 2.5rem' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

