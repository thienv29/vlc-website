// Configuration for About page sections
// You can easily reorder sections by changing the order of items in this array

export interface AboutSectionConfig {
  id: string;
  component: string;
  enabled: boolean;
  props?: Record<string, any>;
  order: number;
}

export const aboutPageSections: AboutSectionConfig[] = [
  {
    id: 'introduction',
    component: 'AboutIntroduction',
    enabled: true,
    order: 1
  },
  {
    id: 'vision-mission-values', 
    component: 'VisionMissionValues',
    enabled: true,
    order: 2
  },
  {
    id: 'quality-certifications',
    component: 'QualityCertifications', 
    enabled: true,
    order: 3
  },
  {
    id: 'brand-culture',
    component: 'BrandCulture',
    enabled: true,
    order: 4
  }
];