import interiorDesignImage from '@/shared/assets/projects/om-design-studio.png';
import auraDesignImage from '@/shared/assets/projects/aura-design.png';
import recipeSearchImage from '@/shared/assets/projects/recipe-search.png';
import todoListImage from '@/shared/assets/projects/todo-list.png';
import weatherAppImage from '@/shared/assets/projects/weather-app.png';
import nutritionImage from '@/shared/assets/projects/nutrition.png';

export const projectCategories = [
  { id: 'all', label: 'All projects' },
  { id: 'highlighted', label: 'Top frontend work' },
  { id: 'team', label: 'Team project' },
  { id: 'solo', label: 'Solo projects' },
];

export const projectPlaceholders = [
  {
    id: 'interior-design-web-app',
    label: 'Project 01',
    title: 'Interior Design Web App',
    subtitle: 'Team Project',
    category: 'team',
    filterGroups: ['highlighted', 'team'],
    emphasis: 'primary',
    description:
      'A team internship project for an interior design studio, developed within a structured frontend architecture and collaborative Git workflow.',
    contributionSummary:
      "Built reusable UI components and responsive sections, implemented an admin modal form for creating and editing portfolio content with validation and loading states, and worked on separating data and business logic from presentational UI within the project's FSD architecture.",
    contributionDetails: [
      'Reusable TextArea component with register support and maxLength character counter',
      'Responsive Work Process section using local data',
      'Separation of data and loading logic from presentational UI for the About functionality',
      'Admin modal and main form for creating and editing portfolio cards',
      'Loading existing data by id, category and type selects, Russian and English title and description fields',
      'Required-field validation, validation errors, form reset behavior, and submit loading state',
    ],
    stack: [
      'React',
      'JavaScript',
      'Redux Toolkit / RTK Query',
      'SCSS Modules',
      'Feature-Sliced Design (FSD)',
      'Git/GitHub',
    ],
    liveDemo: 'https://olesya-martin.netlify.app/',
    github: null,
    image: interiorDesignImage,
    imageAlt: 'Interior Design Web App screenshot preview',
  },
  {
    id: 'aura-design',
    label: 'Project 02',
    title: 'Aura Design',
    subtitle: 'Furniture E-commerce App',
    category: 'solo',
    filterGroups: ['highlighted', 'solo'],
    emphasis: 'primary',
    description:
      'A responsive furniture e-commerce application built with React and Redux Toolkit. Features dynamic product filtering, quantity controls, and a Redux-powered shopping cart with real-time totals and cart updates.',
    contributionSummary: null,
    contributionDetails: [],
    stack: [
      'React',
      'Redux Toolkit',
      'JavaScript',
      'React Router',
      'CSS3',
      'Vite',
    ],
    liveDemo: 'https://auradesigne.netlify.app/',
    github: 'https://github.com/NataliiaLitskevych/aura-designe',
    image: auraDesignImage,
    imageAlt: 'Aura Design furniture e-commerce screenshot preview',
  },
  {
    id: 'recipe-search',
    label: 'Project 03',
    title: 'Recipe Search',
    subtitle: 'Recipe & Nutrition App',
    category: 'solo',
    filterGroups: ['highlighted', 'solo'],
    emphasis: 'primary',
    description:
      'A responsive React application for searching recipes by ingredients or dish name using the Edamam API. Displays recipe details, ingredients, serving size, cooking instructions, and nutritional information including protein, fat, and carbohydrates.',
    contributionSummary: null,
    contributionDetails: [],
    stack: ['React', 'JavaScript ES6+', 'Edamam API', 'CSS3', 'Vite'],
    liveDemo: 'https://bestrecipesearch.netlify.app/',
    github: 'https://github.com/NataliiaLitskevych/Recipe-Search',
    image: recipeSearchImage,
    imageAlt: 'Recipe Search recipe and nutrition screenshot preview',
  },
  {
    id: 'to-do-list',
    label: 'Project 04',
    title: 'To Do List',
    subtitle: 'React Task Manager',
    category: 'solo',
    filterGroups: ['solo'],
    emphasis: 'secondary',
    description:
      'A responsive React task management application that allows users to add, edit, complete, and delete tasks. Built to demonstrate component-based UI, React state management, props, form handling, and user interactions.',
    contributionSummary: null,
    contributionDetails: [],
    stack: ['React', 'JavaScript ES6+', 'CSS3', 'Create React App'],
    liveDemo: 'https://nataliialitskevych.github.io/my-todo-app/',
    github: 'https://github.com/NataliiaLitskevych/To-Do-List',
    image: todoListImage,
    imageAlt: 'To Do List task manager screenshot preview',
  },
  {
    id: 'weather-forecast-app',
    label: 'Project 05',
    title: 'Weather Forecast App',
    subtitle: null,
    category: 'solo',
    filterGroups: ['solo'],
    emphasis: 'secondary',
    description:
      'A responsive weather application built with vanilla JavaScript and the OpenWeather API. Users can search for weather by city, view current conditions, temperature, feels-like values, daily min/max, and see dynamic backgrounds based on the weather.',
    contributionSummary: null,
    contributionDetails: [],
    stack: ['JavaScript ES6+', 'HTML5', 'CSS3', 'OpenWeather API'],
    liveDemo:
      'https://weather-app-nataliia-litskevych.netlify.app/',
    github: 'https://github.com/NataliiaLitskevych/Weather-App',
    image: weatherAppImage,
    imageAlt: 'Weather Forecast App screenshot preview',
  },
  {
    id: 'nutrition-analyzer',
    label: 'Project 06',
    title: 'Nutrition Analyzer',
    subtitle: 'Nutrition Analysis App',
    category: 'solo',
    filterGroups: ['solo'],
    emphasis: 'secondary',
    description:
      'A responsive React application for analyzing ingredients with the Edamam Nutrition Analysis API. Users can enter multiple ingredients and view a per-ingredient breakdown along with total nutritional values.',
    contributionSummary: null,
    contributionDetails: [],
    stack: ['React', 'JavaScript (ES6+)', 'CSS3', 'Edamam Nutrition Analysis API'],
    liveDemo: 'https://nutrition-analyze.netlify.app/',
    github: 'https://github.com/NataliiaLitskevych/nutrition-analyzer.git',
    image: nutritionImage,
    imageAlt: 'Nutrition Analyzer screenshot preview',
  },
];
