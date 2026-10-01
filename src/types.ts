export interface Property {
  id: string;
  code: string;
  name: string;
  type: 'Apartment' | 'Luxury Duplex' | 'Executive Home' | 'Waterfront Residence' | 'Penthouse';
  location: string;
  neighborhood: string;
  priceNgn: number;
  bedrooms: number;
  bathrooms: number;
  sizeSqm: number;
  image: string;
  gallery: string[];
  description: string;
  featured?: boolean;
  features: string[];
  status: 'Available' | 'Sold' | 'Reserved';
}

export interface Neighborhood {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  propertiesCount: number;
  averagePrice: string;
  image: string;
  vibe: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  initials: string;
  rating: number;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: string;
}

export interface InspectionBooking {
  propertyId: string;
  propertyName: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
