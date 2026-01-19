# Portfolio Website - TypeScript Version

A modern, type-safe portfolio website built with React, TypeScript, and TailwindCSS V4.

## Features

- **TypeScript**: Full type safety throughout the application
- **TailwindCSS V4**: Modern CSS framework with no config file needed
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations
- **React Icons**: Comprehensive icon library
- **EmailJS**: Contact form integration
- **Responsive Design**: Mobile-first approach
- **Simplified UI**: Clean, user-friendly interface

## Tech Stack

- React 18
- TypeScript 5.3
- Vite 7
- TailwindCSS V4
- React Router DOM
- Framer Motion
- React Icons
- EmailJS

## Project Structure

```
portfolio-ts/
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Hero, Projects, Experience, Skills
│   │   ├── ui/           # Reusable UI components
│   │   └── modals/       # Project modal
│   ├── pages/            # HomePage, AllProjectsPage
│   ├── types/            # TypeScript type definitions
│   ├── data/             # Projects, experience, skills data
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── styles/           # TailwindCSS V4 styles
├── public/               # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy assets from the old portfolio project (see ASSETS_SETUP.md)

3. Create a `.env` file:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Key Improvements

1. **Type Safety**: Full TypeScript implementation with strict mode
2. **Simplified Design**: Cleaner, more user-friendly interface
3. **Better Organization**: Well-structured component hierarchy
4. **Modern Stack**: Latest versions of all dependencies
5. **Performance**: Optimized with code splitting and lazy loading
6. **Maintainability**: Clean code with proper typing and documentation

## Notes

- All components are fully typed with TypeScript
- TailwindCSS V4 uses `@theme` directive instead of config file
- Custom hooks for scroll spy and intersection observer
- Reusable UI components for consistency
- Simplified animations for better performance
