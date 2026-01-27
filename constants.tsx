
import React from 'react';
import { Project, Service, Skill } from './types';
import { 
  Layers, 
  Globe, 
  Server, 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';

// Custom X (formerly Twitter) Logo SVG
const XLogo = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus E-Commerce',
    shortDescription: 'Enterprise-grade MERN retail system with real-time analytics and global payments.',
    fullDescription: 'Nexus is a high-performance MERN stack application designed for scaling retail businesses. It features advanced search, real-time stock management via WebSockets, and a multi-step checkout with Stripe integration.',
    thumbnail: 'https://picsum.photos/seed/shop/1200/800',
    images: ['https://picsum.photos/seed/shop1/800/600', 'https://picsum.photos/seed/shop2/800/600'],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Stripe', 'Tailwind', 'Docker'],
    features: ['Real-time inventory sync', 'Dynamic discounts system', 'Admin Dashboard', 'JWT Authentication', 'Global Search Engine'],
    challenges: 'Handling concurrent state updates during high-traffic flash sales was the biggest technical hurdle.',
    learned: 'Deepened knowledge in Redux Toolkit and optimized MongoDB aggregation pipelines.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rajshekhar',
    category: 'Full-Stack'
  },
  {
    id: '2',
    title: 'CryptoVault 2.0',
    shortDescription: 'A multi-chain asset tracker and NFT gallery with Web3 wallet integration.',
    fullDescription: 'CryptoVault provides a unified interface for users to track their crypto portfolios across Ethereum, Polygon, and Solana. It integrates with Ethers.js and Alchemy API to fetch real-time balances and transaction histories.',
    thumbnail: 'https://picsum.photos/seed/crypto/1200/800',
    images: ['https://picsum.photos/seed/crypto1/800/600', 'https://picsum.photos/seed/crypto2/800/600'],
    techStack: ['React', 'TypeScript', 'Ethers.js', 'Framer Motion', 'Tailwind', 'Alchemy API'],
    features: ['Multi-wallet support', 'Live price charts', 'Transaction history', 'NFT Display', 'Gas fee estimation'],
    challenges: 'Normalizing data structures from different blockchain explorers was complex.',
    learned: 'Mastered async data fetching patterns and React Query.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rajshekhar',
    category: 'Web3'
  },
  {
    id: '3',
    title: 'DevSync Collaborative',
    shortDescription: 'Real-time collaborative workspace for remote development teams.',
    fullDescription: 'DevSync allows multiple developers to code in the same workspace simultaneously. Built with Socket.io for low-latency collaboration and WebRTC for peer-to-peer video calls.',
    thumbnail: 'https://picsum.photos/seed/code/1200/800',
    images: ['https://picsum.photos/seed/code1/800/600', 'https://picsum.photos/seed/code2/800/600'],
    techStack: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'Monaco Editor', 'Redis'],
    features: ['Real-time collaborative editing', 'Video/Audio chat', 'File system tree', 'Syntax highlighting', 'Group Chat'],
    challenges: 'Resolving code conflicts using Operational Transformation (OT) was a significant algorithmic challenge.',
    learned: 'Learned the internals of real-time conflict resolution and peer-to-peer networking.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rajshekhar',
    category: 'Full-Stack'
  },
  {
    id: '4',
    title: 'Zenith Dashboard',
    shortDescription: 'Modern admin panel with data visualization and CRM capabilities.',
    fullDescription: 'A comprehensive management dashboard built for high-scale B2B operations. Includes role-based access control and custom data exports.',
    thumbnail: 'https://picsum.photos/seed/dashboard/1200/800',
    images: ['https://picsum.photos/seed/dash1/800/600'],
    techStack: ['React', 'Material UI', 'Chart.js', 'Firebase', 'Express'],
    features: ['Data visualization', 'RBAC', 'Excel/PDF Export', 'Real-time notifications'],
    challenges: 'Optimizing large data tables for mobile responsiveness.',
    learned: 'Advanced usage of Chart.js and React hooks for performance.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rajshekhar',
    category: 'Frontend'
  },
  {
    id: '5',
    title: 'Pulse Analytics',
    shortDescription: 'Lightweight backend engine for tracking user behavior and events.',
    fullDescription: 'Pulse is a performant tracking engine that allows developers to integrate event monitoring without the overhead of heavy third-party tools.',
    thumbnail: 'https://picsum.photos/seed/pulse/1200/800',
    images: ['https://picsum.photos/seed/pulse1/800/600'],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Kafka'],
    features: ['High throughput event logging', 'Automated reporting', 'Webhook integration', 'Custom API'],
    challenges: 'Scaling to handle 10k events per second during peak hours.',
    learned: 'Distributed messaging queues and horizontal scaling.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rajshekhar',
    category: 'Backend'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Full Stack Development',
    description: 'Scalable and performant web applications built with the MERN stack.',
    fullDescription: 'I engineer robust, production-ready ecosystems from the ground up. By utilizing the MERN stack, I ensure your application can handle massive traffic while maintaining a snappy user experience.',
    features: [
      'Custom React SPA/SSR development',
      'REST & GraphQL API Architecture',
      'Complex State Management (Redux/Zustand)',
      'Real-time WebSocket integration',
      'Microservices Orchestration'
    ],
    benefits: [
      'Sub-second response times',
      'SEO-optimized architecture',
      'Infinite scalability potential',
      'Enterprise-grade security standards'
    ],
    icon: 'Layers',
    color: 'bg-blue-600'
  },
  {
    id: 's2',
    title: 'UI/UX Engineering',
    description: 'Modern, responsive, and accessible user interfaces using Tailwind and Framer Motion.',
    fullDescription: 'I bridge the gap between aesthetics and functionality. My focus is on high-fidelity animations, pixel-perfect layouts, and accessible design systems that convert visitors into loyal users.',
    features: [
      'Atomic Design System development',
      'Advanced Motion Design (Framer Motion)',
      'Responsive Mobile-First Interfaces',
      'WCAG 2.1 Accessibility Compliance',
      'SVG & Canvas based Visualizations'
    ],
    benefits: [
      'High user engagement rates',
      'Consistent multi-platform branding',
      'Intuitive navigation flows',
      'Optimized Core Web Vitals'
    ],
    icon: 'Globe',
    color: 'bg-purple-600'
  },
  {
    id: 's3',
    title: 'Backend Architecture',
    description: 'Robust API design, database modeling, and microservices using Node.js.',
    icon: 'Server',
    fullDescription: 'The backbone of any successful product is a solid data layer. I design database schemas and server-side logic that emphasize data integrity, security, and high-concurrency processing.',
    features: [
      'Distributed Systems design',
      'Database Optimization (NoSQL/SQL)',
      'Serverless Function implementation',
      'Payment Gateway integrations',
      'Auth & Identity Management (OAuth/JWT)'
    ],
    benefits: [
      '99.9% System Uptime focus',
      'Secure Data Encryption at rest',
      'Low-latency data processing',
      'Efficient resource utilization'
    ],
    color: 'bg-green-500'
  }
];

export const SKILLS: Skill[] = [
  { name: 'MongoDB', level: 90, category: 'Database' },
  { name: 'Express.js', level: 85, category: 'Backend' },
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'TypeScript', level: 82, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Redux', level: 85, category: 'Frontend' },
  { name: 'Docker', level: 70, category: 'Tools' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
  { name: 'X', icon: <XLogo size={20} />, url: 'https://x.com' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:hello@rajshekhar.dev' },
];
