import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../i18n';
import './styles.css';

const Admissions: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  const links = [
    {
      title: 'admission_home',
      desc: 'admission_home_desc',
      url: 'https://admission.kaist.ac.kr/home',
      icon: (
        <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: 'undergraduate_korean',
      desc: 'undergraduate_korean_desc',
      url: 'https://admission.kaist.ac.kr/undergraduate',
      icon: null
    },
    {
      title: 'graduate_korean',
      desc: 'graduate_korean_desc',
      url: 'https://admission.kaist.ac.kr/graduate',
      icon: null
    },
    {
      title: 'undergraduate_intl',
      desc: 'undergraduate_intl_desc',
      url: 'https://admission.kaist.ac.kr/intl-undergraduate',
      icon: null
    },
    {
      title: 'graduate_intl',
      desc: 'graduate_intl_desc',
      url: 'https://admission.kaist.ac.kr/intl-graduate',
      icon: null
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      {/* Hero Section */}
      <div className="bg-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-7">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {t('admissions')}
            </h1>
            <div className="w-20 h-1 bg-[#002380] rounded-full"></div>
            <p className="text-lg text-gray-500 leading-relaxed mx-auto max-w-2xl">
              {t('admissions_hero_desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="admissions-container">

        {/* External Links Grid */}
        <div className="links-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-card group ${index === 0 ? 'col-span-full' : ''}`}
            >
              {link.icon && (
                <div className="card-icon-container">
                  {link.icon}
                </div>
              )}

              <div className="card-content">
                <h3 className="card-title">
                  {t(link.title)}
                </h3>

                <p className="card-desc">
                  {t(link.desc)}
                </p>
              </div>

              <div className="card-action-container">
                <span className="card-action">
                  {t('read_more')}
                  <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Admissions;
