import React, { useState, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StatementBanner from './components/StatementBanner';
import { LanguageContext } from './contexts/LanguageContext';
import PageLoader from './components/PageLoader';

// Lazy loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const Introduction = React.lazy(() => import('./pages/Introduction'));
const Departments = React.lazy(() => import('./pages/Departments'));
const Admissions = React.lazy(() => import('./pages/Admissions'));
const CourseInfo = React.lazy(() => import('./pages/CourseInfo'));
const GraduationRequirements = React.lazy(() => import('./pages/GraduationRequirements/index'));
const Notice = React.lazy(() => import('./pages/Notice'));
const NoticeDetail = React.lazy(() => import('./pages/Notice').then(module => ({ default: module.NoticeDetail })));


const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('kaist_ai_preferred_language');
    return (saved === 'en' || saved === 'ko') ? saved : 'ko';
  });
  
  const [showBanner, setShowBanner] = useState<boolean>(() => {
    return localStorage.getItem('kaist_ai_statement_banner_closed') !== 'true';
  });

  React.useEffect(() => {
    localStorage.setItem('kaist_ai_preferred_language', language);
  }, [language]);

  const handleCloseBanner = () => {
    localStorage.setItem('kaist_ai_statement_banner_closed', 'true');
    setShowBanner(false);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
          {showBanner && <StatementBanner onClose={handleCloseBanner} />}
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/intro" element={<Introduction />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/course-information" element={<CourseInfo />} />
                <Route path="/graduation-requirements" element={<GraduationRequirements />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/notice/:eventId" element={<NoticeDetail />} />
              </Routes>
            </Suspense>
          </main >
          <Footer />
        </div >
      </HashRouter >
    </LanguageContext.Provider >
  );
};

export default App;
