
import React, { useState, createContext, useContext } from 'react';
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

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => { },
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={<Introduction />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/course-information" element={<CourseInfo />} />
              <Route path="/graduation-requirements" element={<GraduationRequirements />} />
            </Routes>
          </main >
          <Footer />
        </div >
      </HashRouter >
    </LanguageContext.Provider >
  );
};

export default App;
