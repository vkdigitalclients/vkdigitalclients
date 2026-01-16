import { Users, TrendingUp, ShieldCheck, HeartHandshake, Globe, Award } from 'lucide-react';
import { Chapter, Testimonial, ImpactStat } from './types';

export const IMPACT_STATS: ImpactStat[] = [
  {
    icon: TrendingUp,
    title: "Measurable Growth",
    description: "Trackable business generation and referral metrics."
  },
  {
    icon: Users,
    title: "Grassroots Empowerment",
    description: "Supporting local businesses to scale effectively."
  },
  {
    icon: ShieldCheck,
    title: "Network of Trust",
    description: "Verified professionals committed to ethical practices."
  },
  {
    icon: HeartHandshake,
    title: "Ethical Networking",
    description: "A professional alternative to traditional informal networks."
  },
  {
    icon: Globe,
    title: "Expanded Footprint",
    description: "Connect locally while accessing global opportunities."
  },
  {
    icon: Award,
    title: "Training & Social",
    description: "Regular workshops and social events for holistic growth."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    designation: 'CEO',
    company: 'TechFlow Solutions',
    quote: 'BYN has completely transformed how I view networking. The structured referrals have added 30% to my bottom line this year.',
    image: 'https://picsum.photos/100/100?random=1',
    rating: 5
  },
  {
    id: '2',
    name: 'Anita Desai',
    designation: 'Director',
    company: 'Desai Interiors',
    quote: 'The quality of professionals here is unmatched. It is not just about leads; it is about building mentorships and friendships.',
    image: 'https://picsum.photos/100/100?random=2',
    rating: 5
  },
  {
    id: '3',
    name: 'Vikram Singh',
    designation: 'Founder',
    company: 'GreenEarth Organics',
    quote: 'As a startup, the visibility I got through BYN was incredible. The referral bonus program is just the cherry on top.',
    image: 'https://picsum.photos/100/100?random=3',
    rating: 4
  }
];

export const CHAPTERS: Chapter[] = [
  {
    id: '1',
    name: 'Ameerpet',
    rmName: 'Sireesha',
    rmMobile: '81250xxxxx',
    location: 'Hotel Green Park',
    meetingDay: 'Friday'
  },
  {
    id: '2',
    name: 'KPHB',
    rmName: 'Pravallika',
    rmMobile: '92468xxxxx',
    location: 'Novotel Convention Centre',
    meetingDay: 'Wednesday'
  },
  {
    id: '3',
    name: 'Banjara Hills',
    rmName: 'Rohan',
    rmMobile: '98480xxxxx',
    location: 'Taj Krishna',
    meetingDay: 'Tuesday'
  },
  {
    id: '4',
    name: 'Gachibowli',
    rmName: 'Amit',
    rmMobile: '77990xxxxx',
    location: 'Sheraton Hyderabad',
    meetingDay: 'Thursday'
  }
];