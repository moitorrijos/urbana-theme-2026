export interface Room {
  image: string;
  title: string;
  category: string;
  price: number;
}

export const rooms: Room[] = [
  {
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
    title: 'Premium Suite',
    category: 'Premium',
    price: 245,
  },
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    title: 'Presidential Suite',
    category: 'Presidential',
    price: 445,
  },
  {
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
    title: 'Classic Room',
    category: 'Classic',
    price: 145,
  },
  {
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
    title: 'Premium Deluxe',
    category: 'Premium',
    price: 295,
  },
  {
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    title: 'Classic Double',
    category: 'Classic',
    price: 165,
  },
  {
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
    title: 'Presidential Penthouse',
    category: 'Presidential',
    price: 695,
  },
  {
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
    title: 'Premium Skyline',
    category: 'Premium',
    price: 325,
  },
  {
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',
    title: 'Presidential Grand',
    category: 'Presidential',
    price: 545,
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    title: 'Classic Queen',
    category: 'Classic',
    price: 135,
  },
];

export const categories = ['Premium', 'Presidential', 'Classic'] as const;
