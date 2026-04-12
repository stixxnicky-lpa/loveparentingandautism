import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">
      <Link to="/shop" style={{ color: 'var(--color-teal)' }} className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:opacity-70 transition-opacity no-underline">
        ← Back to Shop
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[45%]">
          <div style={{ backgroundColor: 'var(--color-cream-dark)', borderRadius: '1.5rem' }} className="aspect-square flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-64 rounded-xl shadow-md"
            />
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          {product.format && (
            <span style={{ backgroundColor: 'var(--color-cream-dark)', color: 'var(--color-teal)' }} className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
              {product.format}
            </span>
          )}
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            {product.name}
          </h1>
          <p style={{ color: 'var(--color-text-muted)' }} className="text-base leading-relaxed mb-6">
            {product.description}
          </p>

          <div style={{ borderTop: '1px solid var(--color-cream-dark)', borderBottom: '1px solid var(--color-cream-dark)' }} className="py-5 mb-6">
            <span style={{ color: 'var(--color-teal)' }} className="text-3xl font-bold">
              £{(product.price / 100).toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <BuyButton productId={product.id} className="flex-1 text-center justify-center" />
            <a
              href={product.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all border-2"
              style={{ borderColor: 'var(--color-gold)', color: 'var(--color-text)', backgroundColor: 'var(--color-gold)', textDecoration: 'none' }}
            >
              View on Etsy
            </a>
          </div>

          <p style={{ color: 'var(--color-text-muted)' }} className="text-xs mt-4 leading-relaxed">
            ✨ Digital downloads are delivered instantly after purchase. Paperback copies are dispatched within 3–5 working days.
          </p>
        </div>
      </div>
    </div>
  )
}

