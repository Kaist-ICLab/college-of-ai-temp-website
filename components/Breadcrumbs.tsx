
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';
import { useTranslation } from '../i18n';

const Breadcrumbs: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const location = useLocation();

  const paths = location.pathname.split('/').filter(x => x);

  const getPathLabel = (path: string) => {
    const mapping: Record<string, string> = {
      'intro': 'introduction',
      'academics': 'academics',
      'graduation-requirements': 'graduation_reqs',
      'departments': 'departments',
      'programs': 'department_programs',
      'admissions': 'admissions'
    };

    const key = mapping[path] || path;
    const translated = t(key);

    // Fallback if translation returns key itself and it's not a mapping match
    if (translated === key && !mapping[path]) {
      return path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return translated;
  };

  return (
    <div className="bg-gray-50 py-3 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:text-[#004191]">{t('home')}</Link>
          {paths.map((p, idx) => (
            <React.Fragment key={p}>
              <span className="text-gray-300">/</span>
              <span className={idx === paths.length - 1 ? 'font-bold text-gray-700' : ''}>
                {getPathLabel(p)}
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex space-x-3">
          <button className="hover:text-[#004191]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
          </button>
          <button className="hover:text-[#004191]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
