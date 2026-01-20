import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../App';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../i18n';
import AICUndergraduate from './AICUndergraduate/index';
import AICGraduate from './AICGraduate/index';
import AISUndergraduate from './AISUndergraduate/index';
import AISGraduate from './AISGraduate/index';
import AXUndergraduate from './AXUndergraduate/index';
import AXGraduate from './AXGraduate/index';
import AIFUndergraduate from './AIFUndergraduate/index';
import AIFGraduate from './AIFGraduate/index';
import RequirementEmptyState from './RequirementEmptyState/index';
import './styles.css';

const GraduationRequirements: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const [activeTab, setActiveTab] = useState<'ug' | 'grad'>('ug');
  const [activeDept, setActiveDept] = useState<'aic' | 'ais' | 'ax' | 'aif'>('aic');

  const depts = [
    { id: 'aic', name: 'dept_ai_computing' },
    { id: 'ais', name: 'dept_ai_systems' },
    { id: 'ax', name: 'dept_ax' },
    { id: 'aif', name: 'dept_ai_future' },
  ];

  const renderContent = () => {
    if (activeDept === 'aic') {
      return activeTab === 'ug' ? (
        <AICUndergraduate language={language} />
      ) : (
        <AICGraduate language={language} />
      );
    }
    if (activeDept === 'ais') {
      if (activeTab === 'ug') {
        return <AISUndergraduate language={language} />;
      } else {
        return <AISGraduate language={language} />;
      }
    }
    if (activeDept === 'ax') {
      if (activeTab === 'ug') {
        return <AXUndergraduate language={language} />;
      } else {
        return <AXGraduate language={language} />;
      }
    }
    if (activeDept === 'aif') {
      if (activeTab === 'ug') {
        return <AIFUndergraduate language={language} />;
      } else {
        return <AIFGraduate language={language} />;
      }
    }
    return <RequirementEmptyState />;
  };

  return (
    <div className="bg-white min-h-screen pb-24 text-[#333]">
      <div className="breadcrumbs-nav print:hidden">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <div className="hero-section bg-gray-50 border-b border-gray-100 py-8 mb-4 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                {t('graduation_reqs')}
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mx-auto italic">
                {t('grad_req_hero_desc')}
              </p>
            </div>

            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab('ug')}
                className={`px-10 py-3.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'ug' ? 'bg-[#004191] text-white shadow-lg shadow-[#004191]/20' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {t('undergraduate')}
              </button>
              <button
                onClick={() => setActiveTab('grad')}
                className={`px-10 py-3.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'grad' ? 'bg-[#004191] text-white shadow-lg shadow-[#004191]/20' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {t('graduate')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Department Selection */}
      <div className="dept-selector max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 mb-6 flex justify-center text-center print:hidden">
        <div className="flex flex-wrap justify-center gap-2">
          {depts.map((dept) => (
            <button
              key={dept.id}
              //@ts-ignore
              onClick={() => setActiveDept(dept.id)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all border ${activeDept === dept.id
                ? 'bg-[#004191] border-[#004191] text-white shadow-md'
                : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
            >
              {t(dept.name)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 page-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default GraduationRequirements;
