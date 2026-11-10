import { PortfolioContent } from '../models/portfolio-content.model';

export const PORTFOLIO_CONTENT: PortfolioContent = {
  profile: {
    name: 'Vishnu P S',
    initials: 'VP',
    role: 'BACKEND & FULL-STACK DEVELOPER',
    location: 'Flexible on location and work setup',
    availability: 'Open to opportunities',
    headline: {
      firstLine: 'I turn big',
      secondLine: 'ideas into',
      accent: 'real impact.',
    },
    introduction:
      'I build reliable APIs and practical web applications, bringing a backend focus and a full-stack foundation.',
    photoUrl: '/vishnu.png',
    photoAlt: 'Portrait of Vishnu P S.',
    email: 'vishnumanimala8133@gmail.com',
    whatsappUrl:
      'https://wa.me/918075838724?text=Hi%20Vishnu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.',
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
      dates: 'November 2025 - Present',
      title: 'Freelance & Family Business Operations Support',
      organization: 'Independent · Family construction business',
      location: 'Manimala, Kottayam, Kerala',
      summary:
        'Taking on a small number of freelance and collaborative software contributions while supporting day-to-day operations in the family construction business.',
      highlights: [
        'Contributed to internal-auditing and warehouse-management projects for private companies.',
        'Contributed backend work to a school-bus management app.',
        'Coordinated workers, raw-material flow, work progress, and day-to-day employee issues in the family business.',
      ],
    },
    {
      id: 'previous-role',
      dates: 'September 2024 - October 2025',
      title: 'Backend Developer',
      organization: '369 Degree Group',
      location: 'Perinthalmanna, Malappuram, Kerala',
      summary:
        'Served as the sole backend developer, designing and developing backend systems for several websites and applications.',
      highlights: ['Worked with Node.js, Express.js, NestJS, and MongoDB.'],
    },
    {
      id: 'early-role',
      dates: 'February 2023 - August 2024',
      title: 'MEAN Stack Developer Intern',
      organization: 'Brototype',
      location: 'Kaniyapuram, Trivandrum, Kerala',
      summary: 'Built full-stack web projects during a MEAN stack developer internship.',
      highlights: [
        'Developed TripSync, a car-pooling application using the MEAN stack.',
        'Created a personal e-commerce project using Express.js with server-rendered views.',
      ],
    },
    {
      id: 'freelance-family-support-2020-2023',
      dates: '2020 - 2023',
      title: 'Freelance WordPress Projects & Family Business Support',
      organization: 'Independent projects · Family construction business',
      location: '',
      summary:
        'Took on freelance WordPress work for companies including Sridal and Waves Kuwait while supporting operations in the family construction business.',
      highlights: [
        'Completed freelance WordPress projects for Sridal and Waves Kuwait.',
        'Coordinated workers and raw-material flow, monitored work progress, and helped address day-to-day employee issues in the family business.',
      ],
    },
    {
      id: 'ceragem-career-progression',
      dates: '2013 - 2020',
      title: 'Marketing Executive to Branch Manager',
      organization: 'Ceragem India Pvt Ltd',
      location: '',
      summary:
        'Progressed through Marketing Executive, Service Person, Branch In-charge, and Branch Manager roles. As Branch Manager (2018–2020), worked at Lee’s Health Care for about 1.5 years before moving to Kpees Health Care. Managed healthcare product trial outlets where customers could try products over time before deciding whether to purchase.',
      highlights: [
        'Led a team of 8–12 staff and coordinated daily operations, schedules, and training.',
        'Supported customer engagement at outlets that welcomed at least 200 visitors on a typical day, explaining product trials and benefits.',
        'Organized lectures, customer appointments, and direct visits; oversaw sales and service and shared sales details for tax reporting.',
      ],
    },
  ],
  skillGroups: [
    {
      id: 'development',
      label: 'A / DEVELOPMENT',
      skills: [
        'JavaScript',
        'Node.js',
        'Express.js',
        'NestJS',
        'MongoDB',
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
      id: 'fortune-wolf',
      category: 'production',
      title: 'Fortune Wolf',
      role: 'Backend Developer · 369 Degree Group',
      industry: 'Presale platform',
      year: '2024–2025',
      summary:
        'Designed and built the application backend end to end, including APIs, product and inventory workflows, KYC and referral features, admin reporting, and payment integrations. Used ethers.js for selected payment-related operations.',
      outcome: 'Production · offline',
      technologies: [
        'NestJS',
        'TypeScript',
        'MongoDB',
        'Redis',
        'WebSockets',
        'ethers.js',
        'Stripe',
        'PayPal',
      ],
      visualTheme: 'art-orange',
      shapeOne: 'shape-sun',
      shapeTwo: 'shape-window',
      featured: true,
    },
    {
      id: 'betting-platform',
      category: 'production',
      title: 'Betting Platform Backend',
      role: 'Backend Developer · 369 Degree Group',
      industry: 'Betting platform',
      year: '2024–2025',
      summary:
        'Built the application backend end to end, covering betting workflows, scheduled draws, referral calculations, wallet operations, and administration APIs. Used ethers.js for selected payment-related operations.',
      outcome: 'Production · offline',
      technologies: ['Node.js', 'NestJS', 'MongoDB', 'BullMQ', 'ethers.js', 'JWT'],
      visualTheme: 'art-lilac',
      shapeOne: 'shape-disc',
      shapeTwo: 'shape-grid',
      featured: true,
    },
    {
      id: 'white-label-ecommerce',
      category: 'production',
      title: 'White-label E-commerce Backend',
      role: 'Backend Developer · 369 Degree Group',
      industry: 'E-commerce',
      year: '2024–2025',
      summary:
        'Developed a reusable backend for multiple storefronts, with product variants, SKU and inventory tracking, order workflows, role-based access, REST APIs, and Stripe and PayPal integrations.',
      outcome: 'Production · offline',
      technologies: ['Express.js', 'Node.js', 'MongoDB', 'Stripe', 'PayPal', 'JWT', 'Multer'],
      visualTheme: 'art-mint',
      shapeOne: 'shape-loop',
      shapeTwo: 'shape-pill',
      featured: false,
    },
    {
      id: 'tripsync',
      category: 'learning',
      title: 'TripSync',
      role: 'MEAN Stack Internship Project',
      industry: 'Car pooling',
      year: '2023–2024',
      summary:
        'Built a car-pooling application as an internship learning project, exploring rider and driver flows, ride creation and booking, and real-time communication.',
      outcome: 'Internship project',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Socket.IO'],
      visualTheme: 'art-orange',
      shapeOne: 'shape-sun',
      shapeTwo: 'shape-window',
      featured: false,
    },
    {
      id: 'express-ecommerce-learning',
      category: 'learning',
      title: 'Personal E-commerce Project',
      role: 'Personal learning project',
      industry: 'E-commerce',
      year: '2023–2024',
      summary:
        'Created a personal e-commerce project using Express.js and server-rendered views while learning full-stack development.',
      outcome: 'Learning project',
      technologies: ['Node.js', 'Express.js', 'Server-rendered views'],
      visualTheme: 'art-lilac',
      shapeOne: 'shape-disc',
      shapeTwo: 'shape-grid',
      featured: false,
    },
  ],
  testimonial: null,
  about: {
    introduction:
      'My interest in computers began in seventh standard. I chose computer science in higher secondary, completed a BTech in Computer Science and Engineering, and later did a Java internship. My route into software took a detour through a career working with people, but the goal stayed with me.',
    chapters: [
      {
        label: '01 / THE FIRST SPARK',
        text: 'After my degree and a Java internship, finding a software role took time. Family and financial responsibilities led me to begin working as a sales executive at Lee’s Health Care, Ceragem’s Kaloor branch.',
      },
      {
        label: '02 / A CAREER WITH PEOPLE',
        text: 'I enjoyed meeting people every day. We welcomed at least 200 visitors on a typical day, guided them through product trials, and explained the product, the company, and its benefits. I moved to the new Kpees Health Care branch in Kunnamkulam as an in-charge and later became branch manager. The work helped me grow in communication, customer service, and team leadership.',
        photoGroups: [
          {
            label: 'Lee’s Health Care · Kaloor',
            photos: [
              {
                id: 'lees-health-care-01',
                src: '/lees%20lecture.jpeg',
                alt: 'Vishnu leading a product information session with a colleague at Lee’s Health Care.',
                caption: 'Explaining the product to visitors',
                attribution: '',
                attributionUrl: '',
              },
              {
                id: 'lees-health-care-02',
                src: '/lees%20team.jpeg',
                alt: 'Vishnu and the Lee’s Health Care team together at their branch.',
                caption: 'The Lee’s Health Care team',
                attribution: '',
                attributionUrl: '',
              },
              {
                id: 'lees-health-care-03',
                src: '/less%20core%20team.jpeg',
                alt: 'Vishnu with colleagues from the Lee’s Health Care core team.',
                caption: 'A moment with the core team',
                attribution: '',
                attributionUrl: '',
              },
            ],
          },
          {
            label: 'Kpees Health Care · Kunnamkulam',
            photos: [
              {
                id: 'kpees-health-care-01',
                src: '/kpees%20onam.jpeg',
                alt: 'Vishnu and the Kpees Health Care team gathered around an Onam pookalam.',
                caption: 'Celebrating Onam with the Kpees team',
                attribution: '',
                attributionUrl: '',
              },
            ],
          },
        ],
      },
      {
        label: '03 / RETURNING TO SOFTWARE',
        text: 'When the pandemic disrupted the business, a friend and I began learning Google Apps Script and WordPress and took on freelance work. I then joined Brototype for an intensive MEAN stack program. Its learning roadmap, weekly reviews, and project support gave me a structured way back into software.',
        photoGroups: [
          {
            label: 'Brototype · MEAN stack internship',
            photos: [
              {
                id: 'brototype-01',
                src: '/broto_team1.jpg',
                alt: 'Vishnu and his Brototype cohort gathered around a table during their training.',
                caption: 'Learning alongside my Brototype cohort',
                attribution: '',
                attributionUrl: '',
              },
              {
                id: 'brototype-02',
                src: '/broto_team.jpg',
                alt: 'Brototype teammates gathered for a group photo at their training workspace.',
                caption: 'The people who shared the learning journey',
                attribution: '',
                attributionUrl: '',
              },
              {
                id: 'brototype-03',
                src: '/presentation.jpg',
                alt: 'Vishnu presenting to colleagues during his Brototype program.',
                caption: 'Presenting during the Brototype program',
                attribution: '',
                attributionUrl: '',
              },
            ],
          },
        ],
      },
      {
        label: '04 / PUTTING SKILLS TO WORK',
        text: 'After Brototype, I joined 369 Degree Group as a backend developer and owned backend work for several websites and applications. Today, I take on freelance and collaborative software work while helping coordinate operations in my family’s construction business. The experience I gained with customers and teams still shapes how I approach software: first understand the people and the problem.',
      },
    ],
    featuredPhoto: {
      src: '/kili.jpg',
      alt: 'Vishnu receiving a Brototype recognition gift during a stage event.',
      attribution: '',
      attributionUrl: '',
    },
    visualCaption: 'A milestone in my return to software',
  },
};
