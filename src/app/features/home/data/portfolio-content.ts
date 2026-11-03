import { PortfolioContent } from '../models/portfolio-content.model';

export const PORTFOLIO_CONTENT: PortfolioContent = {
  profile: {
    name: 'Vishnu P S',
    initials: 'VP',
    role: 'FULLSTACK DEVELOPER',
    location: 'FLEXIBLE ON LOCATION & WORK SETUP',
    timeZone: '',
    availability: 'Open to opportunities',
    headline: {
      firstLine: 'I turn big',
      secondLine: 'ideas into',
      accent: 'real impact.',
    },
    introduction:
      'A full-stack developer partnering with team to make web applications clearer, more useful, and more human.',
    photoUrl: '/vishnu.png',
    photoAlt: 'Abstract portrait placeholder. Replace it with a portrait of Vishnu.',
    email: 'vishnumanimala8133@gmail.com',
    socialLinks: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vishnu-p-s-627910259/' },
      { label: 'GitHub', url: 'https://github.com/vishnu-manimala' },
      // { label: '[Relevant platform]', url: 'https://www.behance.net/' },
    ],
  },
  metrics: [
    { value: 'Since 2013', label: 'PROFESSIONAL JOURNEY' },
    { value: 'Customer-focused', label: 'MARKETING & SERVICE' },
    { value: 'Team leadership', label: 'BRANCH MANAGEMENT' },
  ],
  experience: [
    {
      id: 'current-role',
      dates: '2025 Oct - NOW',
      title: 'Independent Collaborations & Family Business Support',
      organization: '',
      location: 'Manimala, Kottayam, Kerala',
      summary: 'Freelance collaborations · Family construction business',
      outcomes: [
        'Contributed to a small number of software projects while coordinating workers, raw-material flow, work progress, and employee issues in the family business.',
      ],
    },
    {
      id: 'previous-role',
      dates: '2024 Sept - 2025 Oct',
      title: 'Backend Developer',
      organization: '369 Degree Group',
      location: 'Perinthalmanna, Malappuram, kerala',
      summary:
        'Served as the sole backend developer, designing and developing backend systems for several websites and applications.',
      outcomes: [
        ' Designed and developed backend systems for multiple websites and apps.',
        'Worked with Node.js, Express.js, NestJS, and MongoDB.',
      ],
    },
    {
      id: 'early-role',
      dates: '20XX - 20XX',
      title: '[Earlier role, education, or independent work]',
      organization: '[Organization / program]',
      location: '[Location]',
      summary:
        '[The beginning: an early interest, a first opportunity, or the moment that pulled you into this field.]',
      outcomes: [],
    },
  ],
  skillGroups: [
    {
      id: 'development',
      label: 'A / DEVELOPMENT',
      skills: [
        'Javascript',
        'Node JS',
        'Express JS',
        'Nest JS',
        'Mongo DB',
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
      ],
    },
    {
      id: 'project-work',
      label: 'B / PROJECT WORK',
      skills: [
        'Backend collaboration',
        'Website management',
        'Hostinger hosting',
        'Internal audit & warehouse projects',
      ],
    },
    {
      id: 'business-operations',
      label: 'C / BUSINESS & OPERATIONS',
      skills: [
        'Marketing',
        'Customer service',
        'Branch management',
        'Worker coordination',
        'Materials & workflow coordination',
      ],
    },
  ],
  projects: [
    {
      id: 'project-one',
      title: '[Project or client name]',
      role: '[YOUR ROLE]',
      industry: '[INDUSTRY]',
      year: '[YEAR]',
      summary: '[The challenge in one sentence. What was at stake for the customer or business?]',
      outcome: '[Outcome / evidence]',
      visualTheme: 'art-orange',
      shapeOne: 'shape-sun',
      shapeTwo: 'shape-window',
      featured: true,
    },
    {
      id: 'project-two',
      title: '[Project name]',
      role: '[YOUR ROLE]',
      industry: '[INDUSTRY]',
      year: '[YEAR]',
      summary: '[Your specific contribution, the key decision, and what changed.]',
      outcome: '[Outcome / evidence]',
      visualTheme: 'art-lilac',
      shapeOne: 'shape-disc',
      shapeTwo: 'shape-grid',
      featured: false,
    },
    {
      id: 'project-three',
      title: '[Project name]',
      role: '[YOUR ROLE]',
      industry: '[INDUSTRY]',
      year: '[YEAR]',
      summary: '[A concise story of the problem, collaboration, and useful result.]',
      outcome: '[Outcome / evidence]',
      visualTheme: 'art-mint',
      shapeOne: 'shape-loop',
      shapeTwo: 'shape-pill',
      featured: false,
    },
  ],
  testimonial: null,
  about: {
    introduction:
      'I did not take a perfectly straight line to [YOUR FIELD]. I got here by following [a question, interest, or experience] - and learning to turn that curiosity into useful work.',
    chapters: [
      {
        label: '01 - THE BEGINNING',
        text: '[An early interest, a first job, a person, or a moment that changed how you saw your work.]',
      },
      {
        label: '02 - THE SHIFT',
        text: '[A challenge or turning point. What did it teach you about the work you want to do?]',
      },
      {
        label: '03 - STILL BECOMING',
        text: '[What matters to you now: how you work with people, what you keep learning, and the impact you hope to make.]',
      },
    ],
    offClock: '[A couple of real interests or rituals. Give people an easy conversation starter.]',
    visualCaption: '[A place, object, or moment that says something true about you.]',
  },
};
