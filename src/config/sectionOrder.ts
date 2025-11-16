// Configuration for homepage section order
// You can easily reorder sections by changing the order of items in this array

export interface SectionConfig {
  id: string;
  component: string;
  enabled: boolean;
  props?: Record<string, any>;
}

export const homepageSections: SectionConfig[] = [
  {
    id: 'hero',
    component: 'Hero',
    enabled: true
  },
  {
    id: 'about',
    component: 'About',
    enabled: true
  },
  {
    id: 'projectShowcase',
    component: 'ProjectShowcase',
    enabled: true
  },
  {
    id: 'services',
    component: 'Services',
    enabled: true
  },
  {
    id: 'testimonials',
    component: 'Testimonials',
    enabled: true
  },
  {
    id: 'contactInfo',
    component: 'ContactInfo',
    enabled: true
  },
  {
    id: 'leadershipQuotes',
    component: 'LeadershipQuotes',
    enabled: true
  },
  {
    id: 'post',
    component: 'Post',
    enabled: true
  },
  {
    id: 'partners',
    component: 'Partners',
    enabled: true
  },
  {
    id: 'cta',
    component: 'CTA',
    enabled: true
  }
];