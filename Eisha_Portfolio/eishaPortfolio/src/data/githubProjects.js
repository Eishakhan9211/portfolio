/**
 * Public GitHub repositories — https://github.com/Eishakhan9211
 */
export const GITHUB_PROFILE = 'https://github.com/Eishakhan9211';

export const projects = [
  {
    id: 1,
    title: 'Movie Insight Engine',
    description:
      'Data science project that analyzes IMDb’s dataset to visualize genre trends and recommend the newest movies through a dynamic search engine.',
    technologies: ['Python', 'Data Analysis', 'IMDb'],
    image: '/images/movie.png',
    link: `${GITHUB_PROFILE}/movie-insight-engine`,
    liveUrl: 'https://movie-insight-engine-plum.vercel.app/',
  },
  {
    id: 2,
    title: 'COVID Data Analysis',
    description:
      'Analyzes and visualizes the top ten countries impacted by COVID-19 using live datasets.',
    technologies: ['Python', 'Visualization', 'Public Data'],
    image: '/images/covid.png',
    link: `${GITHUB_PROFILE}/covid-data-analysis`,
    liveUrl: 'https://covid-data-analysis-j1ff.vercel.app/',
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    description:
      'Personal finance dashboard for tracking and exploring spending and accounts, built with Streamlit.',
    technologies: ['Streamlit', 'Python', 'TypeScript'],
    image: '/images/finance.png',
    link: `${GITHUB_PROFILE}/finance-dashboard`,
    liveUrl: 'https://finance-dashboard-psi-henna.vercel.app/',
  },
  {
    id: 4,
    title: 'Streamlit Sales Growth Analytics',
    description:
      'Interactive analytics dashboard for sales growth metrics and trends using Streamlit.',
    technologies: ['Streamlit', 'Python', 'Analytics'],
    image: '/images/streamlit-analysis.png',
    link: `${GITHUB_PROFILE}/streamlit-sales-growth-analytics`,
    liveUrl: 'https://streamlit-sales-growth-analytics.vercel.app/',
  },
  {
    id: 5,
    title: 'Coursera Python Projects',
    description:
      'Collection of Python assignments and notebooks completed through Coursera coursework.',
    technologies: ['Python', 'Jupyter'],
    image: '/images/coursera.jpg',
    link: `${GITHUB_PROFILE}/coursera-python-projects`,
  },
];

/** Shown on the home page featured section */
export const featuredProjects = projects.slice(0, 2);
