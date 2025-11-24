import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
  ctaLink: string;
}

export type OS = 'Mac' | 'Windows' | 'Linux' | 'Unknown';

export interface FeatureCardProps {
  title: string;
  subtitle: string;
  colSpan?: string;
  children?: React.ReactNode;
  delay?: number;
}