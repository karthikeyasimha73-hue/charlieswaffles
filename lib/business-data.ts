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
  description: string
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
      { name: 'Dark Delight Waffle Sandwich', price: 169, customizable: true, description: 'A golden Belgian waffle sandwich with a deep, delicious dark chocolate flavor.' },
      { name: 'Chocolate Waffle Sandwich', price: 169, customizable: true, description: 'A crisp-on-the-outside, soft-on-the-inside waffle sandwich with a classic chocolate taste.' },
      { name: 'Milk Mist Waffle Sandwich', price: 169, customizable: true, description: 'A golden waffle sandwich with a smooth, mellow milk-chocolate flavor.' },
      { name: 'Triple Chocolate Waffle Sandwich', price: 179, customizable: true, description: 'A Belgian waffle sandwich for chocolate lovers, layered with a trio of rich chocolate flavors.' },
      { name: 'KitKat Waffle Sandwich', price: 179, customizable: true, description: 'A crisp Belgian waffle sandwich with chocolate flavor and a playful KitKat-inspired crunch.' },
      { name: 'Nutella Waffle Sandwich', price: 179, customizable: true, description: 'A warm, golden waffle sandwich paired with the familiar chocolate-hazelnut taste of Nutella.' },
      { name: 'Dry Fruits Waffle Sandwich', price: 199, customizable: true, description: 'A freshly made waffle sandwich finished with the naturally sweet, nutty crunch of dry fruits.' },
    ],
  },
  {
    title: 'Mini Popsicle Waffles',
    category: 'Waffles',
    items: [
      { name: 'Dark Popsicle Waffle (Mini)', price: 89, customizable: true, description: 'A bite-sized popsicle-shaped waffle with a bold dark chocolate taste.' },
      { name: 'Milk Popsicle Waffle (Mini)', price: 89, customizable: true, description: 'A mini popsicle-shaped waffle with a smooth, creamy milk-chocolate flavor.' },
      { name: 'Triple Popsicle Waffle (Mini)', price: 89, customizable: true, description: 'A little waffle treat bringing together three delicious chocolate flavors.' },
      { name: 'Oreo Popsicle Waffle (Mini)', price: 89, customizable: true, description: 'A mini waffle with the familiar chocolate-and-cream flavor of Oreo.' },
      { name: 'KitKat Popsicle Waffle (Mini)', price: 89, customizable: true, description: 'A crisp little waffle with chocolate flavor and KitKat-inspired crunch.' },
      { name: 'Dry Fruits Popsicle Waffle (Mini)', price: 99, customizable: true, description: 'A bite-sized waffle with a satisfying crunch and nutty dry-fruit flavor.' },
    ],
  },
  {
    title: 'Belgium Waffles',
    category: 'Waffles',
    items: [
      { name: 'Dark Delight Waffle', price: 89, customizable: true, description: 'A golden Belgian waffle with a rich, satisfying dark chocolate flavor.' },
      { name: 'Chocolate Waffle', price: 89, customizable: true, description: 'A freshly made Belgian waffle with a timeless, comforting chocolate taste.' },
      { name: 'Milk Mist Waffle', price: 99, customizable: true, description: 'A warm Belgian waffle with a smooth and mellow milk-chocolate flavor.' },
      { name: 'Triple Chocolate Waffle', price: 99, customizable: true, description: 'A golden waffle made for chocolate lovers, with a trio of rich chocolate flavors.' },
      { name: 'Oreo Waffle', price: 99, customizable: true, description: 'A crisp Belgian waffle with the classic chocolate-and-cream taste of Oreo.' },
      { name: 'KitKat Waffle', price: 111, customizable: true, description: 'A warm waffle with chocolate flavor and KitKat-inspired crunch.' },
      { name: 'Dry Fruits Waffle', price: 123, customizable: true, description: 'A golden waffle with a nutty dry-fruit flavor and a delightful crunch.' },
    ],
  },
  {
    title: 'Snacks',
    category: 'Snacks',
    items: [
      { name: 'Peri Peri Fries', price: 99, description: 'Golden, crispy fries tossed with lively peri peri seasoning for a savory, gently spicy bite.' },
      { name: 'Salted Fries', price: 89, description: 'Classic golden fries, lightly salted and crisp on the outside with a fluffy center.' },
      {
        name: 'Veg Loaded Bowl',
        price: 199,
        description: 'A hearty vegetarian bowl loaded with French fries, potato shots, veg nuggets, veg fingers, and more.',
      },
    ],
  },
  {
    title: 'Belgium Waffle Cakes',
    category: 'Desserts',
    items: [
      { name: 'Chocolate Waffle Cake', price: 299, customizable: true, description: 'A celebratory waffle cake with a rich chocolate flavor, perfect for sharing a sweet moment.' },
      { name: 'White Waffle Cake', price: 299, customizable: true, description: 'A golden waffle cake with a smooth, delicate white-chocolate taste.' },
      { name: 'Double Waffle Cake', price: 349, customizable: true, description: 'A double-layer waffle cake made for extra-crispy, extra-special dessert moments.' },
      { name: 'Trio Waffle Cake', price: 349, customizable: true, description: 'A shareable waffle cake with three delicious flavors to enjoy together.' },
      { name: 'Classic Oreo Waffle Cake', price: 369, customizable: true, description: 'A waffle cake with the beloved chocolate-and-cream flavor of classic Oreo.' },
      { name: 'KitKat Waffle Cake', price: 379, customizable: true, description: 'A celebratory waffle cake with chocolate flavor and KitKat-inspired crunch.' },
      { name: 'Royal Bliss Dry Fruits Waffle Cake', price: 399, customizable: true, description: 'A festive waffle cake with the nutty sweetness and crunch of dry fruits.' },
    ],
  },
  {
    title: 'Ice Creams',
    category: 'Desserts',
    items: [
      { name: 'Vanilla Ice Cream', price: 89, description: 'A cool, creamy scoop with the gentle sweetness of classic vanilla.' },
      { name: 'Strawberry Ice Cream', price: 89, description: 'A refreshing, creamy scoop with bright and fruity strawberry flavor.' },
      { name: 'Chocolate Ice Cream', price: 99, description: 'A smooth, chilled treat with rich chocolate flavor in every spoonful.' },
      { name: 'Butterscotch Ice Cream', price: 99, description: 'Creamy ice cream with sweet butterscotch flavor for a comforting classic.' },
    ],
  },
  {
    title: 'Brownies',
    category: 'Desserts',
    items: [
      { name: 'Triple Brownie', price: 99, customizable: true, description: 'A soft, fudgy brownie bringing together three delicious chocolate flavors.' },
      { name: 'Double Brownie', price: 99, customizable: true, description: 'A rich brownie with a satisfying double dose of chocolate flavor.' },
      { name: 'White Choco Brownie', price: 99, customizable: true, description: 'A fudgy brownie paired with the sweet, creamy taste of white chocolate.' },
      { name: 'Milk Choco Brownie', price: 89, customizable: true, description: 'A soft brownie with a smooth, mellow milk-chocolate flavor.' },
      { name: 'Dark Choco Brownie', price: 89, customizable: true, description: 'A rich, fudgy brownie with the deep taste of dark chocolate.' },
    ],
  },
  {
    title: 'Bowl Cakes',
    category: 'Desserts',
    items: [
      { name: 'Dark Delight Bowl Cake', price: 89, customizable: true, description: 'A warm, soft bowl cake with a deep and satisfying dark chocolate flavor.' },
      { name: 'Chocolate Bowl Cake', price: 99, customizable: true, description: 'A cozy, single-serve bowl cake with a classic, rich chocolate taste.' },
      { name: 'Milk Mist Bowl Cake', price: 99, customizable: true, description: 'A soft bowl cake with a smooth and mellow milk-chocolate flavor.' },
      { name: 'Triple Bowl Cake', price: 99, customizable: true, description: 'A warm bowl cake bringing together three delicious chocolate flavors.' },
      { name: 'Oreo Bowl Cake', price: 99, customizable: true, description: 'A soft, comforting bowl cake with the classic chocolate-and-cream taste of Oreo.' },
      { name: 'KitKat Bowl Cake', price: 111, customizable: true, description: 'A warm bowl cake with chocolate flavor and KitKat-inspired crunch.' },
      { name: 'Dry Fruits Bowl Cake', price: 111, customizable: true, description: 'A soft bowl cake with nutty dry-fruit flavor and a delightful crunch.' },
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
