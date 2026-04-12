export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  etsyUrl: string
  format?: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Love, Parenting & Autism',
    image: '/Front cover.png',
    description:
      "Written from the heart after 26 years of lived experience alongside autism, this book is a warm, honest, and deeply personal guide for neurotypical parents navigating family life. It's not a clinical manual — it's the book I wished I'd had. Whether you're newly diagnosed or years into the journey, you'll find yourself nodding along, exhaling with relief, and feeling truly seen.",
    shortDescription:
      'A heartfelt guide for neurotypical parents navigating family life alongside autism — warm, honest, and deeply personal.',
    price: 1299,
    etsyUrl: 'https://www.etsy.com/shop/loveparentingautism',
    format: 'Paperback & Digital',
  },
  {
    id: 2,
    name: 'The Autism Relationship Guide',
    image: '/placeholder.png',
    description:
      "Relationships are beautiful and complicated at the best of times. Add autism to the mix and there's a whole new layer of nuance to navigate. This digital guide walks you through communication styles, sensory differences, and building genuine connection — all without losing yourself in the process. Written for neurotypical partners who love deeply and want to understand more.",
    shortDescription:
      'A gentle, practical guide for neurotypical partners navigating love and connection alongside autism.',
    price: 799,
    etsyUrl: 'https://www.etsy.com/shop/loveparentingautism',
    format: 'Digital Download (PDF)',
  },
  {
    id: 3,
    name: 'Tees & Mugs',
    image: '/Jake Birthday.png',
    description:
      "Browse our range of autism-awareness tees and mugs — designed with heart and a touch of humour, perfect for the whole family. Every piece is a little reminder that you are not alone on this journey.",
    shortDescription:
      'Autism-awareness tees and mugs designed with heart — perfect for the whole family.',
    price: 1000,
    etsyUrl: 'https://loveparentingautism.etsy.com',
    format: 'Etsy Shop',
  },
 ]

export default products
