export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  badgeVariant?: string;
  inStock: boolean;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: "confirmed" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Watch",
    description:
      "Clean design, everyday durability. Sapphire crystal, stainless steel case.",
    price: 199,
    image: "/neutral/preview-watch.png",
    category: "Wearables",
    badge: "Popular",
    badgeVariant: "blue",
    inStock: true,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Canvas Backpack",
    description: "Water-resistant canvas backpack with padded laptop sleeve.",
    price: 89,
    originalPrice: 120,
    image: "/neutral/preview-backpack.png",
    category: "Bags",
    badge: "Sale",
    badgeVariant: "error",
    inStock: true,
    rating: 4.5,
  },
  {
    id: "3",
    name: "Wireless Headphones",
    description: "Premium noise-canceling headphones with 30hr battery life.",
    price: 249,
    image: "/neutral/preview-headphones.png",
    category: "Audio",
    badge: "New",
    badgeVariant: "success",
    inStock: true,
    rating: 4.9,
  },
  {
    id: "4",
    name: "Butter Croissant",
    description: "Flaky, laminated layers baked golden each morning.",
    price: 5,
    image: "https://lookaside.facebook.com/assets/astryx/Butter-Croissant.png",
    category: "Food",
    badge: "Fresh",
    badgeVariant: "teal",
    inStock: true,
    rating: 4.7,
  },
  {
    id: "5",
    name: "Buttermilk Pancakes",
    description: "Stacked tall with a melting pat of butter.",
    price: 12,
    image: "https://lookaside.facebook.com/assets/astryx/Butter-Pancake.png",
    category: "Food",
    badge: "Popular",
    badgeVariant: "orange",
    inStock: true,
    rating: 4.6,
  },
  {
    id: "6",
    name: "Belgian Waffle",
    description:
      "Deep pockets made for syrup and butter. Liège style, pearl sugar.",
    price: 14,
    image: "https://lookaside.facebook.com/assets/astryx/Butter-Waffle.png",
    category: "Food",
    badge: "New",
    badgeVariant: "purple",
    inStock: true,
    rating: 4.4,
  },
  {
    id: "7",
    name: "Linen Throw",
    description: "Premium linen throw blanket. Breathable and soft.",
    price: 79,
    image: "/neutral/preview-watch.png",
    category: "Home",
    inStock: true,
    rating: 4.3,
  },
  {
    id: "8",
    name: "Ceramic Mug",
    description: "Hand-crafted ceramic mug with minimalist design.",
    price: 24,
    image: "/neutral/preview-watch.png",
    category: "Home",
    badge: "Limited",
    badgeVariant: "yellow",
    inStock: false,
    rating: 4.2,
  },
];

export const orders: Order[] = [
  { id: "1043", date: "2026-06-28", status: "shipped", total: 248, items: 2 },
  { id: "1042", date: "2026-06-27", status: "delivered", total: 89, items: 1 },
  { id: "1041", date: "2026-06-26", status: "cancelled", total: 156, items: 3 },
  { id: "1040", date: "2026-06-25", status: "delivered", total: 412, items: 4 },
  { id: "1039", date: "2026-06-24", status: "delivered", total: 95, items: 1 },
  { id: "1038", date: "2026-06-23", status: "confirmed", total: 199, items: 1 },
];
