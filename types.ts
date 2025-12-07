export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Shirt' | 'Droplets' | 'Truck' | 'Wind';
  imageUrl: string;
}

export interface Breadcrumb {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
