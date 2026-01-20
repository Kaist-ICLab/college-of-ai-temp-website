import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';
import { useTranslation } from '../i18n';

interface SubItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  subcategories: SubItem[];
}

const Navbar: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = useTranslation(language);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      name: 'introduction',
      path: '/intro',
      subcategories: [
        { name: 'welcome_msg', path: '/intro' },
        { name: 'overview', path: '/intro' },
        { name: 'departments', path: '/departments' },
      ],
    },
    {
      name: 'course_info',
      path: '/course-information',
      subcategories: [
        { name: 'ug_courses', path: '/course-information' },
        { name: 'grad_courses', path: '/course-information' },
      ],
    },
    {
      name: 'education',
      path: '/academics',
      subcategories: [
        { name: 'admissions', path: '/admissions' },
        { name: 'graduation_req', path: '/graduation-requirements' },
      ],
    },
  ];

  return (
    <nav
      className="relative z-50 bg-white border-b border-gray-100 shadow-sm"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4" onClick={() => setActiveMenu(null)}>
            <img
              src="https://images.seeklogo.com/logo-png/40/2/kaist-korea-advanced-institute-of-science-and-tech-logo-png_seeklogo-402926.png"
              alt="KAIST Logo"
              className="h-24 w-auto object-contain transition-all duration-300"
            />
            <div className="h-11 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-[#004191] font-bold text-l sm:text-xl md:text-2xl tracking-tight leading-none">College of AI</span>
              <span className="text-gray-400 text-[12px] font-base uppercase tracking-widest">AI대학</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="h-full flex items-center relative group"
                onMouseEnter={() => setActiveMenu(item.name)}
              >
                <Link
                  to={item.path}
                  className={`text-base font-bold tracking-tight transition-colors py-2 border-b-2 ${location.pathname === item.path || activeMenu === item.name
                    ? 'text-[#004191] border-[#004191]'
                    : 'text-gray-700 border-transparent hover:text-[#004191]'
                    }`}
                >
                  {t(item.name)}
                </Link>
              </div>
            ))}
          </div>

          {/* Utils */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ko' : 'en')}
              className="text-[10px] font-bold text-gray-400 hover:text-[#004191] border border-gray-200 rounded px-2 py-1 transition-all"
            >
              {language === 'en' ? 'KOREAN' : 'ENGLISH'}
            </button>
            <button className="md:hidden p-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div >

      {/* Dropdown Panel */}
      < div
        className={`absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out origin-top ${activeMenu
          ? "opacity-100 scale-y-100 translate-y-0 visible"
          : "opacity-0 scale-y-95 -translate-y-2 invisible"
          }`}
        onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
          <div className="w-1/4 pr-12 border-r border-gray-100">
            <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">
              {activeMenu && t(activeMenu)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Discover the latest information and resources in the{" "}
              {activeMenu && t(activeMenu)} category.
            </p>
          </div >
          <div className="flex-grow pl-12 gap-8">
            {activeMenu &&
              navItems
                .find((i) => i.name === activeMenu)
                ?.subcategories.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="group flex items-center space-x-2"
                    onClick={() => setActiveMenu(null)}
                  >
                    <span className="w-1.5 h-1.5 bg-gray-200 group-hover:bg-[#004191] rounded-full transition-colors"></span>
                    <span className="text-gray-600 font-medium group-hover:text-[#004191] transition-colors">
                      {t(sub.name)}
                    </span>
                  </Link>
                ))}
          </div>
        </div >
      </div >
    </nav >
  );
};

export default Navbar;
