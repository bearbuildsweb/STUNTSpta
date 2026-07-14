export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // lucide-react icon name
  linkText: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  unit: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuestionnaireResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  packageId?: string;
  eventDate: string;
  location: string;
  budget: string;
  visualMood: string[];
  notes: string;
  createdAt: string;
}
