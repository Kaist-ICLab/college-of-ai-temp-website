
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
      </div>
    </div>
  );
};

export default Breadcrumbs;
