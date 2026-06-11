export type Biscuit = {
  id: string
  name: string
  description: string
  tag: string
  image: string
  featured?: boolean
}

export const biscuits: Biscuit[] = [
  {
    id: 'choc-chip',
    name: 'Choc-chip Biscuits',
    description: 'Golden-baked and loaded with rich chocolate chips — a family favourite.',
    tag: 'Homemade',
    image: '/assets/products/choc-chip.png',
    featured: true
  },
  {
    id: 'brownie-cookies',
    name: 'Brownie Cookies',
    description: 'Rich, fudgy and chocolate loaded — thick, decadent and irresistible.',
    tag: 'Specialty',
    image: '/assets/products/brownie-cookies.png',
    featured: true
  },
  {
    id: 'specialty-tray',
    name: 'Specialty Flavours',
    description: 'Chocolate dipped, cinnamon sugar, Romany cream style and filled surprises.',
    tag: 'New flavours',
    image: '/assets/products/specialty-tray.png',
    featured: true
  },
  {
    id: 'smarties',
    name: 'Smarties & Astros',
    description: 'Buttery biscuit dough folded through with colourful candy-coated chocolates.',
    tag: 'Homemade',
    image: '/assets/products/smarties.png'
  },
  {
    id: 'peanut-butter',
    name: 'Peanut Butter Biscuits',
    description: 'Soft, golden biscuits with a classic peanut butter flavour in every bite.',
    tag: 'Homemade',
    image: '/assets/products/peanut-butter.png'
  },
  {
    id: 'assorted',
    name: 'Assorted Biscuits',
    description: 'A beautiful mix from Marie\'s kitchen — perfect for gifting or sharing.',
    tag: 'Assorted',
    image: '/assets/products/assorted-stack.png'
  },
  {
    id: 'choc-brownie',
    name: 'Choc Brownies',
    description: 'Dense chocolate brownies with a glossy drizzle — R18 each or R65 for 4.',
    tag: 'Dessert',
    image: '/assets/products/choc-brownie.png'
  },
  {
    id: 'cheesecake',
    name: 'Homemade Cheesecake',
    description: 'Creamy plain cheesecake, beautifully finished — order with your choice of toppings.',
    tag: 'Dessert',
    image: '/assets/products/cheesecake.png'
  }
]

export function getFeaturedBiscuits(): Biscuit[] {
  return biscuits.filter((b) => b.featured)
}
