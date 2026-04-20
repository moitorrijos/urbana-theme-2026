export const categories = ["Recreation", "Dining", "Business", "Wellness"] as const;

export type AmenityCategory = (typeof categories)[number];

export interface Amenity {
  category: AmenityCategory;
  image: string;
  heroImage: string;
  icon: string;
  iconColor: "sky-blue" | "gold-warm";
  title: string;
  description: string;
}

export const amenities: Amenity[] = [
  {
    category: "Recreation",
    image:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&h=1080&fit=crop",
    icon: "waves",
    iconColor: "sky-blue",
    title: "Infinity Pool",
    description: "Rooftop pool with panoramic city views, open year-round",
  },
  {
    category: "Recreation",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop",
    icon: "dumbbell",
    iconColor: "sky-blue",
    title: "Fitness Center",
    description: "State-of-the-art equipment and personal training available",
  },
  {
    category: "Recreation",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop",
    icon: "party-popper",
    iconColor: "gold-warm",
    title: "Grand Ballroom",
    description: "Elegant venue for weddings and corporate events",
  },
  {
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
    icon: "utensils",
    iconColor: "sky-blue",
    title: "Fine Dining",
    description: "Award-winning restaurant with international cuisine",
  },
  {
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&h=1080&fit=crop",
    icon: "wine",
    iconColor: "gold-warm",
    title: "Rooftop Bar",
    description: "Craft cocktails with stunning skyline views until late",
  },
  {
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop",
    icon: "coffee",
    iconColor: "sky-blue",
    title: "Cafe Lounge",
    description: "Artisan coffee and pastries in a relaxed atmosphere",
  },
  {
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
    icon: "briefcase",
    iconColor: "sky-blue",
    title: "Business Center",
    description: "Fully equipped workspace with high-speed connectivity",
  },
  {
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1920&h=1080&fit=crop",
    icon: "presentation",
    iconColor: "gold-warm",
    title: "Meeting Rooms",
    description: "Private rooms with AV equipment for up to 50 guests",
  },
  {
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=1080&fit=crop",
    icon: "concierge-bell",
    iconColor: "sky-blue",
    title: "Concierge Service",
    description: "24/7 dedicated assistance for all your needs",
  },
  {
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop",
    icon: "sparkles",
    iconColor: "gold-warm",
    title: "Luxury Spa",
    description: "Rejuvenating treatments and therapeutic massages",
  },
  {
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop",
    icon: "heart-pulse",
    iconColor: "sky-blue",
    title: "Sauna & Steam",
    description: "Relaxation facilities for ultimate wellness experience",
  },
  {
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1920&h=1080&fit=crop",
    icon: "leaf",
    iconColor: "gold-warm",
    title: "Yoga Studio",
    description: "Daily classes with certified instructors included",
  },
];

export const icons: Record<string, string> = {
  waves:
    '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  "party-popper":
    '<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',
  utensils:
    '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  dumbbell:
    '<path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/>',
  wine: '<path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>',
  coffee:
    '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
  briefcase:
    '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  presentation:
    '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>',
  "concierge-bell":
    '<path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"/><path d="M20 16a8 8 0 1 0-16 0"/><path d="M12 4v4"/><path d="M10 4h4"/>',
  sparkles:
    '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  "heart-pulse":
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
};

export const groupedAmenities: Amenity[] = categories.flatMap((category) =>
  amenities.filter((amenity) => amenity.category === category),
);
