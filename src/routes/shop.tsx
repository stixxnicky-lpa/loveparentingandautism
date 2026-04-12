import { createFileRoute, Link } from '@tanstack/react-router'
import products from '@/data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})

function ShopPage() {
  return (
    <div>
      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-teal) 0%, #1e8a7d 100%)' }} className="py-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-5">
          <p style={{ color: 'var(--color-gold)', fontFamily: "'Inter', sans-serif" }} className="text-sm font-semibold uppercase tracking-widest mb-3">
            Guides &amp; Resources
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Shop
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Digital guides and downloads created with love, for neurotypical parents and partners who deserve real, honest support.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10" style={{ fill: 'var(--color-cream)' }}>
            <path d="M0,30 C360,50 1080,10 1440,30 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              style={{ backgroundColor: 'white', border: '1px solid var(--color-cream-dark)' }}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <Link to="/products/$productId" params={{ productId: product.id.toString() }} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'var(--color-cream)' }} className="aspect-square flex items-center justify-center p-6">
                  <img src={product.image} alt={product.name} className="w-full max-w-40 rounded-xl" />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                {product.format && (
                  <span style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }} className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full w-fit">
                    {product.format}
                  </span>
                )}
                <Link to="/products/$productId" params={{ productId: product.id.toString() }} style={{ textDecoration: 'none' }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-xl font-bold mt-3 mb-2 hover:opacity-70 transition-opacity">
                    {product.name}
                  </h2>
                </Link>
                <p style={{ color: 'var(--color-text-muted)' }} className="text-sm leading-relaxed mb-4 flex-1">
                  {product.shortDescription}
                </p>
                <div style={{ borderTop: '1px solid var(--color-cream-dark)' }} className="pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ color: 'var(--color-teal)' }} className="text-xl font-bold">
                      £{(product.price / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <BuyButton productId={product.id} className="flex-1 text-center" />
                    <a
                      href={product.etsyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2.5 rounded-lg text-sm font-medium border-2 transition-all"
                      style={{ borderColor: 'var(--color-gold)', color: 'var(--color-text)', backgroundColor: 'var(--color-gold)', textDecoration: 'none' }}
                    >
                      View on Etsy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
