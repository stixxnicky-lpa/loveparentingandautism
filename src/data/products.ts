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
    image: '/placeholder.png',
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
    name: 'Parenting Alongside Autism Journal',
    image: '/placeholder.png',
    description:
      "Sometimes you just need somewhere to put it all. This beautifully designed digital journal gives you prompts, reflection pages, and gentle frameworks to help you process the highs and the harder days. It's a space just for you — to celebrate the wins, untangle the confusion, and remind yourself that you're doing an incredible job.",
    shortDescription:
      'A guided digital journal for neurotypical parents — prompts and reflection pages to help you process and grow.',
    price: 599,
    etsyUrl: 'https://www.etsy.com/shop/loveparentingautism',
    format: 'Digital Download (PDF)',
  },
  {
    id: 4,
    name: 'Understanding Your Autistic Partner',
    image: '/placeholder.png',
    description:
      "This digital guide is for anyone in a relationship with an autistic partner who wants to build a stronger, more compassionate connection. It covers emotional regulation differences, social energy, sensory needs, and how to communicate in ways that truly land — all written with warmth, honesty, and zero judgement.",
    shortDescription:
      'Deepen your understanding and connection with your autistic partner through this warm, honest digital guide.',
    price: 699,
    etsyUrl: 'https://www.etsy.com/shop/loveparentingautism',
    format: 'Digital Download (PDF)',
  },
  {
    id: 5,
    name: "The Neurotypical Parent's Toolkit",
    image: '/placeholder.png',
    description:
      "A practical collection of printable tools, checklists, and conversation starters designed specifically for neurotypical parents. From morning routine cards to school communication templates, this toolkit helps you feel more prepared and less alone — whatever stage of the journey you're on.",
    shortDescription:
      'Printable tools, checklists and conversation starters for neurotypical parents — practical support for everyday life.',
    price: 499,
    etsyUrl: 'https://www.etsy.com/shop/loveparentingautism',
    format: 'Digital Download (Printable PDF)',
  },
]

export default products
