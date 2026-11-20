/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };


export const profile = {
  fullName: 'K. Chiranjeevi',
  displayName: 'Chiranjeevi',
  firstName: 'CHIRANJEEVI',

  seriesTag: 'THE SERIES',
  originalLabel: 'A CHIRANJEEVI ORIGINAL',

  role: 'BCA Student | Aspiring Full-Stack Developer',

  tagline: [
    'Full-Stack Development',
    'Python',
    'Technology Enthusiast'
  ],

  intro:
    'A final-year Bachelor of Computer Applications student at RNS First Grade College, interested in software development, problem-solving and building practical technology solutions. Experienced in college leadership, event coordination and student volunteering.',

  location: 'Bengaluru, Karnataka',

  email: 'YOUR_EMAIL',

  links: {
    linkedin: 'www.linkedin.com/in/kchiranjeevi1505',
    github: 'YOUR_GITHUB_URL',
  },

  resumePdf: '/assets/Chiranjeevi_Resume.pdf',

  portrait: {
    src: '/chiranjeevi-portfolio/assets/portrait-720.webp',
    srcSet: '/chiranjeevi-portfolio/assets/portrait-420.webp 420w, /chiranjeevi-portfolio/assets/portrait-720.webp 720w, /chiranjeevi-portfolio/assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Chiranjeevi',
  },

  interests: [
    'Full-Stack Development',
    'Artificial Intelligence',
    'Cloud Computing'
  ],
};



export const education = [
  {
    school: 'RNS First Grade College',
    place: 'Bengaluru, Karnataka',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Pursuing',
    score: 'CGPA 8.00',
  },
  {
    school: 'RNS Pre-University College',
    place: 'Bengaluru, Karnataka',
    degree: 'Pre-University College (PUC)',
    period: 'Completed',
    score: '90%',
  },
];

export const experience = [
  {
    company: 'Vistar Finance',
    role: 'IT Intern',
    place: 'Bengaluru, Karnataka',
    period: 'December 2026 – January 2027',
    points: [
      'Gained practical exposure to IT-related activities and professional workplace practices.',
      'Developed an understanding of IT operations and technical support workflows.',
    ],
  },
  {
    company: 'Pentagon Space Private Limited',
    role: 'Full-Stack Developer Intern',
    place: 'Bengaluru, Karnataka',
    period: 'December 2026 – March 2027',
    points: [
      'Undertaking internship training in Full-Stack Development.',
      'Building knowledge of frontend development, backend development and database integration.',
      'Developing practical software development skills through hands-on learning.',
    ],
  },
];




export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};


export const projects: Project[] = [
  {
    id: 'attendance-management',
    title: 'Attendance Management System',
    year: '2026',
    genre: 'Software Development',
    logline:
      'A student-focused project developed around attendance management.',
    stack: [],
    build: [
      'Developed an attendance management project as part of practical software development work.',
    ],
    features: [
      'Attendance management',
      'Student-related records',
    ],
    metrics: [],
    palette: {
      from: '#071b2b',
      via: '#124e66',
      to: '#05080d',
      accent: '#55c8e8',
    },
    motif: 'shield',
  },
  {
    id: 'blood-donor-website',
    title: 'Blood Donor Website',
    year: '2026',
    genre: 'Web Development',
    logline:
      'A website project focused on blood donation and donor connectivity.',
    stack: [],
    build: [
      'Developed a website project related to blood donation and connecting people with donor information.',
    ],
    features: [
      'Blood donation information',
      'Donor connectivity',
    ],
    metrics: [],
    palette: {
      from: '#280b12',
      via: '#751d32',
      to: '#080609',
      accent: '#ff5b78',
    },
    motif: 'flow',
  },
];


export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};



export const achievements: Achievement[] = [
  {
    id: 'aarohi',
    title: 'College Fest Organizer',
    org: 'Aarohi – RNS First Grade College',
    detail:
      'Contributed to organizing and managing the college fest on two occasions.',
    laurel: 'Event Management',
  },
  {
    id: 'cdc',
    title: 'Career Development Cell Coordinator',
    org: 'RNS First Grade College',
    detail:
      'Supported placement activities, recruitment drive preparations and coordination with visiting HR representatives.',
    laurel: 'Leadership',
  },
  {
    id: 'technical-head',
    title: 'Technical Head',
    org: 'RNS First Grade College',
    detail:
      'Coordinated technical class activities and supported departmental initiatives.',
    laurel: 'Technical Leadership',
  },
  {
    id: 'kabaddi',
    title: 'Sports Event Volunteer',
    org: 'Bangalore University Kabaddi Tournament',
    detail:
      'Volunteered during the Bangalore University Kabaddi tournament.',
    laurel: 'Sports Volunteering',
  },
  {
    id: 'blood-donation',
    title: 'Blood Donation Camp Participant',
    org: 'College Activities',
    detail:
      'Participated in two blood donation camps.',
    laurel: 'Community Participation',
  },
  {
    id: 'nss',
    title: 'NSS Participant',
    org: 'National Service Scheme',
    detail:
      'Participated in the NSS valedictory programme and related activities.',
    laurel: 'NSS Activities',
  },
  {
    id: 'police-marshal',
    title: 'Police Marshal Event Participant',
    org: 'College Activity',
    detail:
      'Participated in the Police Marshal event.',
    laurel: 'Event Participation',
  },
];



export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };


export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Programming fundamentals',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Intermediate' },
      { name: 'SQL', mono: 'SQL', note: 'Basic' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    subtitle: 'Currently learning',
    skills: [
      { name: 'AWS', mono: 'Aw', note: 'Learning' },
    ],
  },
  {
    id: 'interests',
    title: 'Areas of Interest',
    subtitle: 'Professional interests',
    skills: [
      { name: 'Full-Stack Development', mono: 'FS' },
      { name: 'Web Development', mono: 'WD' },
      { name: 'Artificial Intelligence', mono: 'AI' },
    ],
  },
];



/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */

export const skillEvidence: Record<string, string[]> = {
  Python: ['Academic and programming practice'],
  SQL: ['Database coursework and practice'],
  AWS: ['Currently learning'],
};


export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'BCA • Pursuing',
    synopsis: 'Building a strong foundation in computer applications, programming and computer science at RNS First Grade College.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The BCA Journey',
        description: 'Pursuing Bachelor of Computer Applications at RNS First Grade College, Bengaluru.',
        tags: ['BCA', 'Computer Applications'],
        runtime: 'Currently pursuing',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Academic Progress',
        description: 'Maintained an academic CGPA of 7.92 while developing technical and practical knowledge.',
        tags: ['CGPA 7.92', 'Academics'],
        runtime: 'BCA',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning by Building',
    period: 'Projects & Practice',
    synopsis: 'Turning classroom concepts into practical software and web development projects.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Attendance Management System',
        description: 'A practical software project focused on managing student attendance records.',
        tags: ['Python', 'Software Development'],
        runtime: 'Academic Project',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Blood Donor Website',
        description: 'A web development project focused on blood donation information and donor connectivity.',
        tags: ['Web Development', 'Website'],
        runtime: 'Academic Project',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Leadership & Beyond',
    period: 'College Activities',
    synopsis: 'Taking responsibility, coordinating activities and contributing to the college community.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Coordinator',
        description: 'Worked as Career Development Cell Coordinator, supporting placement activities and recruitment coordination.',
        tags: ['CDC', 'Leadership'],
        runtime: 'College Responsibility',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Technical Head',
        description: 'Coordinated technical class activities and supported departmental initiatives.',
        tags: ['Technical Activities', 'Teamwork'],
        runtime: 'College Responsibility',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Volunteer',
        description: 'Contributed to college events, NSS activities, blood donation camps and university-level sports volunteering.',
        tags: ['NSS', 'Volunteering', 'Events'],
        runtime: 'College Activities',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'The Next Chapter',
    period: 'In Progress',
    synopsis: 'Continuously improving technical skills and preparing for opportunities in the software industry.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Developer',
        description: 'Strengthening Python, SQL and web development skills through continuous practice.',
        tags: ['Python', 'SQL', 'Web Development'],
        runtime: 'Ongoing',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Explorer',
        description: 'Exploring cloud technologies, full-stack development and emerging areas of technology.',
        tags: ['AWS', 'Full-Stack', 'Technology'],
        runtime: 'Future Goals',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Academic achievement',
    title: 'BCA • 7.92 CGPA',
    detail: 'Pursuing at RNS First Grade College',
    palette: amber,
  },
  {
    label: 'Programming',
    title: 'Python',
    detail: 'Intermediate level',
    palette: ocean,
  },
  {
    label: 'Database',
    title: 'SQL',
    detail: 'Basic level',
    palette: jade,
  },
  {
    label: 'Cloud technology',
    title: 'AWS',
    detail: 'Currently learning',
    palette: violet,
  },
  {
    label: 'Software project',
    title: 'Attendance Management',
    detail: 'Student attendance management project',
    palette: crimson,
  },
  {
    label: 'Web project',
    title: 'Blood Donor Website',
    detail: 'Blood donation and donor connectivity',
    palette: crimson,
  },
  {
    label: 'Leadership',
    title: 'CDC Coordinator',
    detail: 'Career Development Cell',
    palette: ocean,
  },
  {
    label: 'Technical leadership',
    title: 'Technical Head',
    detail: 'Coordinating technical activities',
    palette: jade,
  },
  {
    label: 'Event management',
    title: 'Aarohi',
    detail: 'Managed the college fest twice',
    palette: amber,
  },
  {
    label: 'Community contribution',
    title: 'Volunteering',
    detail: 'NSS, blood donation camps and university sports activities',
    palette: violet,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introduction',
    title: 'K. Chiranjeevi',
    lines: [
      'BCA Final-Year Student',
      'RNS First Grade College, Bengaluru',
      'Technology enthusiast and aspiring developer',
    ],
    chips: ['BCA', 'Developer', 'Tech Enthusiast'],
  },
  {
    kicker: 'Education',
    title: 'The Academic Journey',
    lines: [
      'Bachelor of Computer Applications',
      'RNS First Grade College',
      'Academic CGPA: 7.92',
    ],
    chips: ['BCA', '7.92 CGPA'],
  },
  {
    kicker: 'Technical Skills',
    title: 'Building My Skills',
    lines: [
      'Python — Intermediate',
      'SQL — Basic',
      'AWS — Currently Learning',
      'Exploring Full-Stack Development',
    ],
    chips: ['Python', 'SQL', 'AWS'],
  },
  {
    kicker: 'Projects',
    title: 'Ideas Into Projects',
    lines: [
      'Attendance Management System',
      'Blood Donor Website',
      'Learning through practical development',
    ],
    chips: ['Software Development', 'Web Development'],
  },
  {
    kicker: 'Leadership',
    title: 'Beyond Academics',
    lines: [
      'Career Development Cell Coordinator',
      'Technical Head',
      'Managed Aarohi college fest twice',
      'Participated in NSS and volunteering activities',
    ],
    chips: ['Leadership', 'Teamwork', 'Event Management'],
  },
  {
    kicker: 'The Next Chapter',
    title: 'Always Moving Forward',
    lines: [
      'Improving programming and development skills',
      'Exploring cloud computing and new technologies',
      'Preparing for opportunities in the software industry',
    ],
    chips: ['Learn', 'Build', 'Grow'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Explore All',
    blurb: 'Explore my complete portfolio',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, projects and achievements',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Technical skills and projects',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'My journey, leadership and highlights',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Introduction • Education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects • 2026`, palette: crimson },
  picks: { nav: 'Highlights', card: 'My Highlights', meta: 'Selected achievements and skills', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'My Achievements', meta: `${achievements.length} Achievements`, palette: crimson },
  story: { nav: 'Resume', card: 'My Resume', meta: 'Education • Skills • Projects', palette: violet },
};
