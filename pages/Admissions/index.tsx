import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../i18n';
import './styles.css';

const Admissions: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      {/* Hero Section */}
      <div className="admissions-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {t('admissions')}
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mx-auto max-w-3xl">
              {t('admissions_hero_desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="admissions-container">

        {/* External Links Grid */}
        <div className="links-grid">

          {/* KAIST Admissions Office Card */}
          <a
            href="https://admission.kaist.ac.kr/home"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card group"
          >
            <div className="card-icon-container">
              <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            <div className="card-content">
              <h3 className="card-title">
                {t('visit_admission_site')}
              </h3>

              <p className="card-desc">
                {t('visit_kaist_admissions')}
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

          {/* International Track Card */}
          <a
            href="https://admission.kaist.ac.kr/intl-graduate"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card group"
          >
            <div className="card-icon-container">
              <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div className="card-content">
              <h3 className="card-title">
                {t('intl_grad_admission')}
              </h3>

              <p className="card-desc">
                {t('intl_admission_track_title')}
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

        </div>

      </div>
    </div>
  );
};

export default Admissions;
