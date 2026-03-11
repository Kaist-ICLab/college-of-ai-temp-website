import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../App';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../i18n';
import { DEPTS, DeptId } from '../GraduationRequirements/types';
import './styles.css';
import { useSEO } from '../../hooks/useSEO';

type AdmissionTab = 'ug' | 'grad';

const Admissions: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const location = useLocation();

  useSEO();

  const getInitialTab = (): AdmissionTab => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    return tab === 'grad' ? 'grad' : 'ug';
  };

  const [activeTab, setActiveTab] = useState<AdmissionTab>(getInitialTab);
  const [activeDept, setActiveDept] = useState<DeptId>('aic');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'grad' || tab === 'ug') setActiveTab(tab);
  }, [location.search]);

  const ugLinks = [
    {
      title: 'admission_home',
      desc: 'admission_home_desc',
      url: 'https://admission.kaist.ac.kr/home',
      icon: (
        <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      fullWidth: true,
    },
    {
      title: 'undergraduate_korean',
      desc: 'undergraduate_korean_desc',
      url: 'https://admission.kaist.ac.kr/undergraduate',
      icon: null,
      fullWidth: false,
    },
    {
      title: 'undergraduate_intl',
      desc: 'undergraduate_intl_desc',
      url: 'https://admission.kaist.ac.kr/intl-undergraduate',
      icon: null,
      fullWidth: false,
    },
  ];

  const gradIntlLink = {
    title: 'graduate_intl',
    desc: 'graduate_intl_desc',
    url: 'https://admission.kaist.ac.kr/intl-graduate',
  };

  // Korean graduate dept content — fill in per-department details here
  const koGradDeptContent: Record<DeptId, React.ReactNode> = {
    aic: (
      <div className="py-8 text-center text-gray-400 text-sm">준비 중입니다.</div>
    ),
    ais: (
      <div className="py-8 text-center text-gray-400 text-sm">준비 중입니다.</div>
    ),
    ax: (
      <div className="py-8 text-center text-gray-400 text-sm">준비 중입니다.</div>
    ),
    aif: (
      <div className="py-8 text-center text-gray-400 text-sm">준비 중입니다.</div>
    ),
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />

      {/* Hero */}
      <div className="bg-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-7">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {t('admissions')}
            </h1>
            <div className="w-20 h-1 bg-[#002380] rounded-full" />
            <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
              {t('admissions_hero_desc')}
            </p>
          </div>
        </div>
      </div>

      {/* ── Undergraduate ── */}
      {activeTab === 'ug' && (
        <div className="admissions-container">
          <div className="links-grid">
            {ugLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-card group ${link.fullWidth ? 'col-span-full' : ''}`}
              >
                {link.icon && (
                  <div className="card-icon-container">{link.icon}</div>
                )}
                <div className="card-content">
                  <h3 className="card-title">{t(link.title)}</h3>
                  <p className="card-desc">{t(link.desc)}</p>
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
      )}

      {/* ── Graduate (English) ── */}
      {activeTab === 'grad' && language === 'en' && (
        <div className="admissions-container">
          <div className="links-grid">
            <a
              href={gradIntlLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card group col-span-full"
            >
              <div className="card-content">
                <h3 className="card-title">{t(gradIntlLink.title)}</h3>
                <p className="card-desc">{t(gradIntlLink.desc)}</p>
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
      )}

      {/* ── Graduate (Korean) — dept sub-tabs ── */}
      {activeTab === 'grad' && language === 'ko' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Dept selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {DEPTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={`px-4 py-2 rounded-lg text-sm font-normal transition-all border ${
                  activeDept === dept.id
                    ? 'bg-[#002380] border-[#002380] text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                {t(dept.name)}
              </button>
            ))}
          </div>

          {/* Dept content */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {koGradDeptContent[activeDept]}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admissions;
