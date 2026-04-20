export interface Room {
  slug: string;
  image: string;
  gallery: string[];
  title: string;
  category: string;
  price: number;
  amenities: string[];
}

const slugify = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const PREMIUM_AMENITIES = [
  'King Bed',
  'City View',
  'Free High-Speed Wi-Fi',
  'Mini Bar',
  'Rain Shower',
  '50" Smart TV',
  'Nespresso Machine',
  'Work Desk',
  'In-Room Safe',
];

const PRESIDENTIAL_AMENITIES = [
  'King Bed',
  'Panoramic View',
  'Free High-Speed Wi-Fi',
  'Fully Stocked Bar',
  'Private Jacuzzi',
  '65" Smart TV',
  'Nespresso Machine',
  'Executive Work Desk',
  'Butler Service',
  'Private Balcony',
  'Walk-In Closet',
];

const CLASSIC_AMENITIES = [
  'Queen Bed',
  'City View',
  'Free Wi-Fi',
  'Complimentary Coffee',
  'Smart TV',
  'Rain Shower',
  'In-Room Safe',
];

const baseRooms: Omit<Room, 'slug'>[] = [
  {
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&h=900&fit=crop',
    ],
    title: 'Premium Suite',
    category: 'Premium',
    price: 245,
    amenities: PREMIUM_AMENITIES,
  },
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&h=900&fit=crop',
    ],
    title: 'Presidential Suite',
    category: 'Presidential',
    price: 445,
    amenities: PRESIDENTIAL_AMENITIES,
  },
  {
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=900&fit=crop',
    ],
    title: 'Classic Room',
    category: 'Classic',
    price: 145,
    amenities: CLASSIC_AMENITIES,
  },
  {
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&h=900&fit=crop',
    ],
    title: 'Premium Deluxe',
    category: 'Premium',
    price: 295,
    amenities: [...PREMIUM_AMENITIES, 'Lounge Access', 'Complimentary Breakfast'],
  },
  {
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=900&fit=crop',
    ],
    title: 'Classic Double',
    category: 'Classic',
    price: 165,
    amenities: [...CLASSIC_AMENITIES.filter((a) => a !== 'Queen Bed'), 'Two Double Beds'],
  },
  {
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&h=900&fit=crop',
    ],
    title: 'Presidential Penthouse',
    category: 'Presidential',
    price: 695,
    amenities: [...PRESIDENTIAL_AMENITIES, 'Private Rooftop Terrace', 'Dining Area for 8'],
  },
  {
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&h=900&fit=crop',
    ],
    title: 'Premium Skyline',
    category: 'Premium',
    price: 325,
    amenities: [...PREMIUM_AMENITIES, 'Floor-to-Ceiling Windows'],
  },
  {
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&h=900&fit=crop',
    ],
    title: 'Presidential Grand',
    category: 'Presidential',
    price: 545,
    amenities: [...PRESIDENTIAL_AMENITIES, 'Grand Piano', 'Library Nook'],
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&h=900&fit=crop',
    ],
    title: 'Classic Queen',
    category: 'Classic',
    price: 135,
    amenities: CLASSIC_AMENITIES,
  },
];

export const rooms: Room[] = baseRooms.map((r) => ({ ...r, slug: slugify(r.title) }));

export const categories = ['Premium', 'Presidential', 'Classic'] as const;
