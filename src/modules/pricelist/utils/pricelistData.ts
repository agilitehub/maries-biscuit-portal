export const WHATSAPP_DISPLAY = '073 332 5032'
export const WHATSAPP_LINK = 'https://wa.me/27733325032'

export type BiscuitRow = {
  name: string
  g500: number
  kg1: number
  kg2: number
}

export const homemadeBiscuits: BiscuitRow[] = [
  { name: 'Plain', g500: 45, kg1: 80, kg2: 150 },
  { name: 'Choc-chip', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Caramel-chip', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Custard', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Raisin', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Coconut', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Smarties', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Astros', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Peanut Butter', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Assorted', g500: 50, kg1: 90, kg2: 170 },
  { name: 'Ginger', g500: 50, kg1: 90, kg2: 170 },
  { name: 'P-butter / choc-chip', g500: 60, kg1: 110, kg2: 210 },
  { name: 'Choc with white choc-chips', g500: 60, kg1: 110, kg2: 210 },
  { name: 'Choc p/butter', g500: 60, kg1: 110, kg2: 210 },
  { name: 'Coffee choc-chip', g500: 60, kg1: 110, kg2: 210 }
]

export const COVER_TAGLINE = 'Homemade with love'
export const HOMEMADE_SUBTITLE = 'Baked fresh to order'

export type SpecialtyItem = {
  name: string
  description?: string
  tiers: { label: string; price: number }[]
  badge?: string
}

export const specialtyFlavours: SpecialtyItem[] = [
  {
    name: 'Plain Shortbread',
    badge: 'New',
    tiers: [
      { label: '500g', price: 65 },
      { label: '1kg', price: 120 }
    ]
  },
  {
    name: 'Chocolate-Dipped Shortbread',
    badge: 'New',
    tiers: [
      { label: '500g', price: 80 },
      { label: '1kg', price: 150 }
    ]
  },
  {
    name: 'Romany Cream Style Biscuits',
    tiers: [
      { label: '250g', price: 30 },
      { label: '500g', price: 55 }
    ]
  },
  {
    name: 'Chocolate Dipped Biscuits',
    tiers: [
      { label: '500g', price: 70 },
      { label: '1kg', price: 120 }
    ]
  },
  {
    name: 'Cinnamon Sugar Biscuits',
    tiers: [
      { label: '500g', price: 60 },
      { label: '1kg', price: 110 }
    ]
  },
  {
    name: 'Chocolate Surprise Biscuits (Filled)',
    tiers: [
      { label: '500g', price: 75 },
      { label: '1kg', price: 140 }
    ]
  },
  {
    name: 'Brownie Cookies',
    description: 'Rich · Fudgy · Chocolate Loaded',
    tiers: [
      { label: '500g', price: 70 },
      { label: '1kg', price: 130 }
    ]
  },
  {
    name: 'Red Velvet',
    tiers: [
      { label: '500g', price: 70 },
      { label: '1kg', price: 130 },
      { label: '2kg', price: 250 }
    ]
  }
]

export type DessertItem = {
  name: string
  price: string
  badge?: string
}

export const desserts: DessertItem[] = [
  { name: 'Plain Cheesecake', price: 'R 450' },
  { name: 'With extra toppings', price: 'S.Q.' },
  { name: 'Lemon Meringue', price: 'R 230' },
  { name: 'Choc Brownies', price: 'R 18 each · R 65 for 4' }
]

export function formatRand(amount: number): string {
  return `R ${amount}`
}
