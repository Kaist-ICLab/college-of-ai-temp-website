import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { DeptId, TabId, DEPTS } from './types';
import './styles.css';

const GraduationRequirements: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const location = useLocation();
  const navigate = useNavigate();

  // Parse URL params
  const getInitialState = () => {
    const params = new URLSearchParams(location.search);
    const deptParam = params.get('dept');
    const tabParam = params.get('tab');

    const validDepts: DeptId[] = ['aic', 'ais', 'ax', 'aif'];
    const validTabs: TabId[] = ['ug', 'grad'];

    return {
      dept: validDepts.includes(deptParam as DeptId) ? (deptParam as DeptId) : 'aic',
      tab: validTabs.includes(tabParam as TabId) ? (tabParam as TabId) : 'ug',
    };
  };

  const initialState = getInitialState();
  const [activeTab, setActiveTab] = useState<TabId>(initialState.tab);
  const [activeDept, setActiveDept] = useState<DeptId>(initialState.dept);

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('dept', activeDept);
    params.set('tab', activeTab);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [activeDept, activeTab, location.pathname, navigate]);

  // Get display name for current department (for print header)
  const getCurrentDeptName = () => {
    const dept = DEPTS.find(d => d.id === activeDept);
    return dept ? t(dept.name) : '';
  };

  // #17: Memoize renderContent to prevent unnecessary re-renders
  const content = useMemo(() => {
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
  }, [activeDept, activeTab, language]);

  return (
    <div className="bg-white min-h-screen pb-12 text-[#333]">
      <div className="breadcrumbs-nav print:hidden">
        <Breadcrumbs />
      </div>

      {/* Print-only Header (#4) */}
      <div className="hidden print:block mb-8 text-center border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          {t('graduation_reqs')} - {getCurrentDeptName()}
        </h1>
        <p className="text-sm text-gray-500">
          {activeTab === 'ug' ? t('undergraduate') : t('graduate')}
        </p>
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

            {/* Tab Selector with ARIA (#18) */}
            <div
              role="tablist"
              aria-label={t('graduation_reqs')}
              className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200"
            >
              <button
                role="tab"
                id="tab-ug"
                aria-selected={activeTab === 'ug'}
                aria-controls="tabpanel-content"
                onClick={() => setActiveTab('ug')}
                className={`px-10 py-3.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'ug' ? 'bg-[#004191] text-white shadow-lg shadow-[#004191]/20' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {t('undergraduate')}
              </button>
              <button
                role="tab"
                id="tab-grad"
                aria-selected={activeTab === 'grad'}
                aria-controls="tabpanel-content"
                onClick={() => setActiveTab('grad')}
                className={`px-10 py-3.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'grad' ? 'bg-[#004191] text-white shadow-lg shadow-[#004191]/20' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {t('graduate')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Department Selection with improved mobile layout (#9) */}
      <div className="dept-selector max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 mb-6 print:hidden">
        <div
          role="tablist"
          aria-label={t('departments')}
          className="flex overflow-x-auto sm:overflow-visible sm:flex-wrap justify-start sm:justify-center gap-2 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {DEPTS.map((dept) => (
            <button
              key={dept.id}
              role="tab"
              id={`dept-tab-${dept.id}`}
              aria-selected={activeDept === dept.id}
              aria-controls="tabpanel-content"
              onClick={() => setActiveDept(dept.id)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all border whitespace-nowrap flex-shrink-0 ${activeDept === dept.id
                ? 'bg-[#004191] border-[#004191] text-white shadow-md'
                : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
            >
              {t(dept.name)}
            </button>
          ))}
        </div>
      </div>

      <div
        id="tabpanel-content"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab} dept-tab-${activeDept}`}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 page-container"
      >
        {content}
      </div>
    </div>
  );
};

export default GraduationRequirements;
