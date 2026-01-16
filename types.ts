import React from 'react';

export interface Chapter {
  id: string;
  name: string;
  rmName: string;
  rmMobile: string;
  location: string;
  meetingDay: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

export interface ImpactStat {
  icon: React.ElementType;
  title: string;
  description: string;
}