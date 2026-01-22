# College of AI Website

A modern, bilingual (Korean/English) website for the College of AI built with React, TypeScript, and Vite.

## 🌟 Features

- **Bilingual Support** - Full Korean and English language support with real-time switching
- **Responsive Design** - Mobile-friendly layout that works across all devices
- **Modern UI** - Clean, professional design with smooth animations
- **SPA Navigation** - Client-side routing using React Router

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with overview and key information |
| `/intro` | Introduction to the College of AI |
| `/departments` | Department information and faculty |
| `/admissions` | Admission requirements and procedures |
| `/course-information` | Course listings and curriculum details |
| `/graduation-requirements` | Graduation requirements and credits |

## 🛠️ Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM v7
- **Styling:** CSS

## 📁 Project Structure

```
college-of-ai/
├── components/          # Reusable UI components
│   ├── Navbar.tsx       # Navigation bar with language toggle
│   ├── Footer.tsx       # Site footer
│   └── Breadcrumbs.tsx  # Breadcrumb navigation
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Introduction.tsx
│   ├── Departments.tsx
│   ├── Admissions/
│   ├── CourseInfo.tsx
│   └── GraduationRequirements/
├── App.tsx              # Main app with routing
├── i18n.ts              # Internationalization strings
├── types.ts             # TypeScript type definitions
├── index.html           # HTML entry point
└── vite.config.ts       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <directory-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🌐 Internationalization

The website supports both Korean (한국어) and English. Language strings are managed in `i18n.ts`. To add or modify translations:

1. Open `i18n.ts`
2. Add/modify strings in both `ko` and `en` objects
3. Use the translation function in components
