export type Language = 'en' | 'pt';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  recommendedFrequency: string;
  image?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  content: string;
  avatarText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TownRoute {
  name: string;
  activeDays: string;
  isPopular?: boolean;
  status: 'active' | 'expanding' | 'waitlist';
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: 'Residential' | 'Commercial';
  serviceType: string;
  lotSize: string;
  frequency: string;
  notes: string;
}
