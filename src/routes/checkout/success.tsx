import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-5">
      <div style={{ backgroundColor: 'white', border: '1px solid var(--color-cream-dark)' }} className="rounded-2xl p-12 text-center max-w-lg shadow-sm">
        <div style={{ color: 'var(--color-teal)' }} className="text-6xl mb-6">✓</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-text)' }} className="text-3xl font-bold mb-4">
          Order Confirmed!
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }} className="mb-8 leading-relaxed">
          Thank you so much for your purchase. Your download will be with you shortly — I hope it brings you the clarity and comfort you're looking for. 💛
        </p>
        <Link
          to="/shop"
          className="btn-teal font-semibold"
          style={{ textDecoration: 'none', padding: '0.75rem 2rem' }}
        >
          Browse More Guides
        </Link>
      </div>
    </div>
  )
}

