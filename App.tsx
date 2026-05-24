
import React, { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Departments from './pages/Departments';
import Admissions from './pages/Admissions';
import CourseInfo from './pages/CourseInfo';
import GraduationRequirements from './pages/GraduationRequirements/index';
import Notice, { NoticeDetail } from './pages/Notice';
import StatementBanner from './components/StatementBanner';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ko',
  setLanguage: () => { },
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ko');
  const [showBanner, setShowBanner] = useState<boolean>(() => {
    return localStorage.getItem('kaist_ai_statement_banner_closed') !== 'true';
  });

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
          </main >
          <Footer />
        </div >
      </HashRouter >
    </LanguageContext.Provider >
  );
};

export default App;
