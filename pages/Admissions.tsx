
import React, { useContext } from 'react';
// Import Link from react-router-dom to handle internal navigation
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import Breadcrumbs from '../components/Breadcrumbs';
import { useTranslation } from '../i18n';

const Admissions: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      {/* Hero Section */}
      <div className="hero-section bg-gray-50 border-b border-gray-100 py-8 mb-8">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">



        {/* External Links Section */}
        <div className="space-y-8 bg-gray-50 rounded-3xl p-8 sm:p-12">

          {/* KAIST Admissions Office */}
          <div>
            <p className="font-bold text-gray-900 mb-3">{t('visit_kaist_admissions')}</p>
            <a
              href="https://admission.kaist.ac.kr/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#004191] font-semibold hover:underline"
            >
              https://admission.kaist.ac.kr/home
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          <hr className="border-gray-200" />

          {/* International Track */}
          <div>
            <p className="font-bold text-gray-900 mb-4">{t('intl_admission_track_title')}</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://admission.kaist.ac.kr/intl-graduate"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <span className="flex-1 font-medium text-gray-700 group-hover:text-[#004191]">{t('intl_grad_admission')}</span>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#004191]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>

              <a
                href="https://admission.kaist.ac.kr/intl-graduate/Admission/YearlyTimelines"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <span className="flex-1 font-medium text-gray-700 group-hover:text-[#004191]">{t('intl_admission_timeline')}</span>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#004191]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Admissions;
