export const business = {
  name: "Charlie’s Waffles",
  category: 'Bakery and Cake Shop',
  address:
    'Kalpataru Enclave, M.G. Colony, Revenue Colony, Ramachandra Nagar, Anantapur, Andhra Pradesh 515001, India',
  phone: '080748 71753',
  phoneLink: 'tel:+918074871753',
  priceRange: 'Menu items ₹89–₹419',
  openingHours: 'Every day · 5:00–10:15 PM',
  closingTime: null,
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Charlie's+Waffles+Anantapur+Andhra+Pradesh",
  orderUrl:
    'https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTF4dHpnbW1feBgBOgMI8A0%3D&hl=en-IN&gl=in&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=M7Tdaqi0CZuN4-EP19TNqAw&ei=M7Tdaqi0CZuN4-EP19TNqAw&fo_s=OA&opi=79508299&orderType=1&ebb=1&cs=0&foub=mcpp',
}

export const menuCategories = ['All', 'Waffles', 'Snacks', 'Desserts', 'Hampers'] as const

export type MenuCategory = (typeof menuCategories)[number]
export type MenuGroupCategory = Exclude<MenuCategory, 'All'>

export type MenuItem = {
  name: string
  price: number
  customizable?: boolean
  description?: string
}

export type MenuGroup = {
  title: string
  category: MenuGroupCategory
  items: MenuItem[]
}

export const menuGroups: MenuGroup[] = [
  {
    title: 'Belgium Waffle Sandwiches',
    category: 'Waffles',
    items: [
      { name: 'Dark Delight Waffle Sandwich', price: 169, customizable: true },
      { name: 'Chocolate Waffle Sandwich', price: 169, customizable: true },
      { name: 'Milk Mist Waffle Sandwich', price: 169, customizable: true },
      { name: 'Triple Chocolate Waffle Sandwich', price: 179, customizable: true },
      { name: 'KitKat Waffle Sandwich', price: 179, customizable: true },
      { name: 'Nutella Waffle Sandwich', price: 179, customizable: true },
      { name: 'Dry Fruits Waffle Sandwich', price: 199, customizable: true },
    ],
  },
  {
    title: 'Mini Popsicle Waffles',
    category: 'Waffles',
    items: [
      { name: 'Dark Popsicle Waffle (Mini)', price: 89, customizable: true },
      { name: 'Milk Popsicle Waffle (Mini)', price: 89, customizable: true },
      { name: 'Triple Popsicle Waffle (Mini)', price: 89, customizable: true },
      { name: 'Oreo Popsicle Waffle (Mini)', price: 89, customizable: true },
      { name: 'KitKat Popsicle Waffle (Mini)', price: 89, customizable: true },
      { name: 'Dry Fruits Popsicle Waffle (Mini)', price: 99, customizable: true },
    ],
  },
  {
    title: 'Belgium Waffles',
    category: 'Waffles',
    items: [
      { name: 'Dark Delight Waffle', price: 89, customizable: true },
      { name: 'Chocolate Waffle', price: 89, customizable: true },
      { name: 'Milk Mist Waffle', price: 99, customizable: true },
      { name: 'Triple Chocolate Waffle', price: 99, customizable: true },
      { name: 'Oreo Waffle', price: 99, customizable: true },
      { name: 'KitKat Waffle', price: 111, customizable: true },
      { name: 'Dry Fruits Waffle', price: 123, customizable: true },
    ],
  },
  {
    title: 'Snacks',
    category: 'Snacks',
    items: [
      { name: 'Peri Peri Fries', price: 99 },
      { name: 'Salted Fries', price: 89 },
      {
        name: 'Veg Loaded Bowl',
        price: 199,
        description: 'Loaded with French fries and a mix of potato shots, veg nuggets, veg fingers, and more.',
      },
    ],
  },
  {
    title: 'Belgium Waffle Cakes',
    category: 'Desserts',
    items: [
      { name: 'Chocolate Waffle Cake', price: 299, customizable: true },
      { name: 'White Waffle Cake', price: 299, customizable: true },
      { name: 'Double Waffle Cake', price: 349, customizable: true },
      { name: 'Trio Waffle Cake', price: 349, customizable: true },
      { name: 'Classic Oreo Waffle Cake', price: 369, customizable: true },
      { name: 'KitKat Waffle Cake', price: 379, customizable: true },
      { name: 'Royal Bliss Dry Fruits Waffle Cake', price: 399, customizable: true },
    ],
  },
  {
    title: 'Ice Creams',
    category: 'Desserts',
    items: [
      { name: 'Vanilla Ice Cream', price: 89 },
      { name: 'Strawberry Ice Cream', price: 89 },
      { name: 'Chocolate Ice Cream', price: 99 },
      { name: 'Butterscotch Ice Cream', price: 99 },
    ],
  },
  {
    title: 'Brownies',
    category: 'Desserts',
    items: [
      { name: 'Triple Brownie', price: 99, customizable: true },
      { name: 'Double Brownie', price: 99, customizable: true },
      { name: 'White Choco Brownie', price: 99, customizable: true },
      { name: 'Milk Choco Brownie', price: 89, customizable: true },
      { name: 'Dark Choco Brownie', price: 89, customizable: true },
    ],
  },
  {
    title: 'Bowl Cakes',
    category: 'Desserts',
    items: [
      { name: 'Dark Delight Bowl Cake', price: 89, customizable: true },
      { name: 'Chocolate Bowl Cake', price: 99, customizable: true },
      { name: 'Milk Mist Bowl Cake', price: 99, customizable: true },
      { name: 'Triple Bowl Cake', price: 99, customizable: true },
      { name: 'Oreo Bowl Cake', price: 99, customizable: true },
      { name: 'KitKat Bowl Cake', price: 111, customizable: true },
      { name: 'Dry Fruits Bowl Cake', price: 111, customizable: true },
    ],
  },
  {
    title: 'Hampers',
    category: 'Hampers',
    items: [
      {
        name: 'Dry Fruits Brownie Hamper',
        price: 119,
        customizable: true,
        description: 'Rich, fudgy brownies loaded with the delightful crunch of dry fruits. A delicious combination of chocolatey goodness and nutty flavor in every bite.',
      },
      {
        name: 'Dark Choco Brownie Cake Hamper',
        price: 419,
        description: 'Pre-order only; order at least 2 hours in advance. Eggless brownie topped with hot, melted dark chocolate.',
      },
      {
        name: 'Oreo Kunafa Choco Fudge Hamper',
        price: 167,
        description: 'An indulgent chocolate fudge treat combining the creamy, chocolatey goodness of Oreo with crispy kunafa for an irresistible mix of rich flavors and crunchy textures.',
      },
      {
        name: 'Dry Fruits Kunafa Choco Fudge Hamper',
        price: 181,
        description: 'Decadent chocolate fudge paired with crispy kunafa strands and crunchy dry fruits. A delicious blend of rich chocolate, nutty flavors, and satisfying crunch.',
      },
      {
        name: 'Biscoff Waffle Sandwich Hamper',
        price: 189,
        description: 'A delicious waffle sandwich featuring the caramelized, spiced flavor of Biscoff, nestled between golden waffles for a crispy, sweet, and indulgent treat.',
      },
      {
        name: 'Oreo Waffle Sandwich Hamper',
        price: 179,
        description: 'Golden, crispy waffles layered with the irresistible chocolatey crunch of Oreo and creamy sweetness. A delightful dessert sandwich perfect for satisfying your sweet cravings.',
      },
    ],
  },
]
