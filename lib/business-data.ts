export const business = {
  name: "Charlie’s Waffles",
  category: 'Bakery and Cake Shop',
  address:
    'Kalpataru Enclave, M.G. Colony, Revenue Colony, Ramachandra Nagar, Anantapur, Andhra Pradesh 515001, India',
  phone: '080748 71753',
  phoneLink: 'tel:+918074871753',
  priceRange: '₹1–₹200 per person',
  openingTime: 'Opens at 5:00 PM',
  closingTime: null,
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Charlie's+Waffles+Anantapur+Andhra+Pradesh",
  orderUrl:
    'https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTF4dHpnbW1feBgBOgMI8A0%3D&hl=en-IN&gl=in&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=M7Tdaqi0CZuN4-EP19TNqAw&ei=M7Tdaqi0CZuN4-EP19TNqAw&fo_s=OA&opi=79508299&orderType=1&ebb=1&cs=0&foub=mcpp',
}

export const menuCategories = ['All', 'Waffles', 'Chocolate Desserts', 'Cakes', 'Beverages'] as const

export type MenuCategory = (typeof menuCategories)[number]

export type MenuItem = {
  name: string
  category: Exclude<MenuCategory, 'All'>
  description: string
  image: string
  imageAlt: string
  label?: string
  price?: string
}

// Replace these explicitly labeled samples with Charlie’s verified menu and prices.
export const menuItems: MenuItem[] = [
  {
    name: 'Sample waffle',
    category: 'Waffles',
    description: 'A placeholder for a signature waffle description.',
    image: '/menu-waffle.png',
    imageAlt: 'Golden waffle with strawberries and chocolate drizzle',
    label: 'Sample item',
  },
  {
    name: 'Sample chocolate dessert',
    category: 'Chocolate Desserts',
    description: 'A placeholder for a chocolate dessert description.',
    image: '/menu-dessert.png',
    imageAlt: 'Chocolate brownie served with vanilla ice cream',
    label: 'Sample item',
  },
  {
    name: 'Sample cake slice',
    category: 'Cakes',
    description: 'A placeholder for a cake description.',
    image: '/menu-cake.png',
    imageAlt: 'Slice of chocolate layer cake with ganache',
    label: 'Sample item',
  },
  {
    name: 'Beverage menu coming soon',
    category: 'Beverages',
    description: 'Add verified beverage options and details here.',
    image: '/menu-dessert.png',
    imageAlt: 'Chocolate dessert photograph used as a temporary menu visual',
    label: 'Placeholder',
  },
]
