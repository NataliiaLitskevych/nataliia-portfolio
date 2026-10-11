# Nataliia Litskevych — Frontend Developer Portfolio

A responsive personal portfolio showcasing frontend development work, selected projects, skills, and contact information.

## Tech stack

- React and JavaScript (ES6+)
- Vite
- Redux Toolkit and React Redux
- React Router
- SCSS Modules and Sass
- GSAP
- Sora font, bundled through Fontsource
- Vitest, React Testing Library, jest-dom, user-event, and jsdom
- ESLint

## Key features

- Responsive layouts for desktop, tablet, and mobile.
- Sticky header with desktop navigation and a mobile dropdown, keyboard support, Escape dismissal, and focus management.
- Active-section indication using IntersectionObserver and `aria-current`, plus section anchor offsets and a Back to top control.
- Project filtering and selection managed with Redux Toolkit.
- At 1160px and above, a sticky project detail panel with internal scrolling and persistent action links.
- Below 1160px, one inline detail panel after the selected card's row; tablet cards use two columns and mobile cards use one.
- Native links and buttons, concise project-card accessible names, expanded-state attributes, and visible keyboard focus indicators.
- Reduced-motion support for animations and scrolling.
- Résumé PDF viewing in a new tab, external Live Demo links, and GitHub links where available.
- Responsive Contact section with Email, LinkedIn, and GitHub actions.

## Architecture

The project uses Feature-Sliced Design (FSD) layers:

- **app** — application providers, routing, Redux store, and global styles.
- **pages** — composition of the portfolio home page.
- **widgets** — page sections such as Hero, Skills, Projects, Contact, and navigation.
- **features** — project-browser controls, state, and selectors.
- **entities** — project and skill data, plus project-filtering logic.
- **shared** — reusable UI components, hooks, utilities, and image assets.

React Router serves the home page at `/`; section navigation uses native fragment links. Tests are colocated with the relevant components and logic, with shared setup in `src/test`.

## Project structure

```text
public/
  resume.pdf
src/
  app/
  pages/
  widgets/
  features/
  entities/
  shared/
  test/
  main.jsx
index.html
package.json
vite.config.js
```

## Getting started

Use Node.js 20.19+ (20.x), 22.12+ (22.x), or 24+, and npm. This matches the locked Vite and jsdom requirements.

```sh
git clone https://github.com/NataliiaLitskevych/nataliia-portfolio.git portfolio-site
cd portfolio-site
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally after building. |
| `npm run lint` | Run ESLint. |
| `npm run test` | Run all tests once. |
| `npm run test:watch` | Run Vitest in watch mode. |

## Testing

Vitest runs in jsdom with React Testing Library, user-event, and jest-dom assertions. Tests cover project filters, selection and responsive detail placement, reduced-motion behavior, accessible names, navigation state and focus handling, and Back to top behavior. Media queries and browser observers are mocked where needed.

## Deployment

Live portfolio URL will be added after deployment.

## Author

Nataliia Litskevych

- [GitHub](https://github.com/NataliiaLitskevych)
- [LinkedIn](https://www.linkedin.com/in/nataliia-litskevych)
