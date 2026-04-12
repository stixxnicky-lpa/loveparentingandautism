import { useEffect, useState } from 'react'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'

export function BuyButton({
  productId,
  className = '',
}: {
  productId: number
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleClick = async () => {
    setLoading(true)
    try {
      const url = await createCheckoutSession({ data: productId })
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setLoading(false)
    }
  }

  if (stripeEnabled === false) {
    return (
      <button
        disabled
        className={`px-5 py-2.5 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed ${className}`}
        style={{ backgroundColor: 'var(--color-teal)', color: 'white' }}
        title="Checkout is not available"
      >
        Buy Direct
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading || stripeEnabled === null}
      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity disabled:opacity-60 disabled:cursor-wait ${className}`}
      style={{ backgroundColor: 'var(--color-teal)', color: 'white' }}
    >
      {loading ? 'Processing...' : 'Buy Direct'}
    </button>
  )
}

