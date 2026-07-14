import { ServiceItem, PricingPlan, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'personal',
    title: 'Personal Moments',
    description: 'Portraits • Graduations • Family Sessions • Celebrations',
    iconName: 'Camera',
    linkText: 'INQUIRE NOW'
  },
  {
    id: 'business',
    title: 'Business & Events',
    description: 'Corporate Events • Conferences • Brand Content • Promotional Videos',
    iconName: 'Briefcase',
    linkText: 'INQUIRE NOW'
  },
  {
    id: 'creative',
    title: 'Creative Studio',
    description: 'Podcast Recording • Studio Rental • Custom Productions',
    iconName: 'Mic',
    linkText: 'INQUIRE NOW'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: '$299',
    unit: 'Session',
    features: [
      'Single camera setup (Ultra HD)',
      'Up to 2 hours of active shooting',
      'Basic conceptual planning',
      'Professional color grading',
      '10 fully retouched high-res photos',
      'Delivery within 7 business days'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Production',
    price: '$599',
    unit: 'Package',
    isPopular: true,
    badge: 'MOST CHOSEN',
    features: [
      'Dual camera angles (Ultra HD & Cinema)',
      'Up to 5 hours of multi-location shooting',
      'Comprehensive script & concept design',
      'Advanced audio design & mixing',
      '30 retouched photos + 3-minute highlight film',
      'Delivery within 5 business days'
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate & Editorial',
    price: '$999',
    unit: 'Campaign',
    features: [
      'Full production crew & cinema rig',
      'Full-day active coverage (up to 10 hrs)',
      'Creative direction & styling consult',
      'Commercial broadcasting licensing',
      'Unlimited high-res photos + multi-cut video',
      'Priority 48-hour delivery'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Booking & Process',
    question: 'How far in advance should we book your services?',
    answer: 'We recommend booking 3 to 6 months in advance for standard shoots, and 6 to 12 months for weddings or large corporate campaigns. However, please reach out via our Questionnaire form to check last-minute availability!'
  },
  {
    id: 'faq-2',
    category: 'Post-Production',
    question: 'What is your standard delivery timeframe?',
    answer: 'Our standard delivery is 7 business days for Starter packages, 5 days for Standard, and 2 days for Corporate. We prioritize maintaining the absolute highest standard of editing and color grading.'
  },
  {
    id: 'faq-3',
    category: 'Logistics',
    question: 'Do you travel for shoots or destination weddings?',
    answer: 'Absolutely! We love filming and photographing in new landscapes. Travel within our base region is fully included, and we offer very reasonable, flat-rate travel packages for destination events and shoots globally.'
  },
  {
    id: 'faq-4',
    category: 'Equipment & Backup',
    question: 'What happens in case of bad weather or equipment failure?',
    answer: 'We carry dual camera rigs, backup lenses, audio recorders, and portable lighting arrays for every shoot. In case of extreme weather, we can easily pivot to an indoor setup or reschedule at no extra charge.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'logoipsum-1', label: 'METRIC STUDIO' },
  { name: 'logoipsum-2', label: 'AVANT GARDE' },
  { name: 'logoipsum-3', label: 'ELEVATE MEDIA' },
  { name: 'logoipsum-4', label: 'CRAFT CO.' }
];
