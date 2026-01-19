
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Breadcrumbs from '../components/Breadcrumbs';
import { useTranslation } from '../i18n';

const Departments: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  const deptData = [
    {
      id: 'computing',
      name: t('dept_ai_computing'),
      summary: language === 'en' 
        ? 'Cultivates AI-natives capable of designing, developing, and operating cutting-edge models (Generative, Multimodal, Agentic AI).' 
        : '최첨단 모델(생성형, 멀티모달, 에이전틱 AI)을 설계, 개발 및 운영할 수 있는 AI 네이티브 인재를 육성합니다.',
      keywords: ['LLM Optimization', 'NPU-friendly Algorithms', 'MLOps', 'Distributed Learning'],
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      id: 'systems',
      name: t('dept_ai_systems'),
      summary: language === 'en'
        ? 'Trains hardware and systems experts for AI operation, focusing on AI semiconductors and system architecture analysis.'
        : 'AI 반도체 및 시스템 아키텍처 분석에 중점을 두고, AI 운영을 위한 하드웨어 및 시스템 전문가를 교육합니다.',
      keywords: ['AI Semiconductors', 'High-speed Communication', 'Power/Thermal Management', 'HW/SW Integration'],
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
    },
    {
      id: 'ax',
      name: t('dept_ax'),
      summary: language === 'en'
        ? 'Applied department fostering AI+X convergence talent across 4 tracks: Data/Content, Physics/Mfg, Bio/Materials, and Sustainability.'
        : '데이터/콘텐츠, 물리/제조, 바이오/신소재, 지속가능성 등 4개 트랙에서 AI+X 융합 인재를 양성하는 응용 학과입니다.',
      keywords: ['Industry-specific Curriculum', 'Semiconductors/Bio', 'Robotics/Games', 'Sustainability'],
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      id: 'future',
      name: t('dept_ai_future'),
      summary: language === 'en'
        ? 'Focuses on social impact, ethics, policies, and governance of AI technology to cultivate future strategists.'
        : 'AI 기술의 사회적 영향, 윤리, 정책 및 거버넌스에 집중하여 미래 전략가를 양성합니다.',
      keywords: ['AI Ethics', 'Policy & Systems', 'AI Economics', 'Governance'],
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    }
  ];

  return (
    <div className="bg-gray-50 pb-20">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('departments')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Our college comprises four specialized departments that span the entire AI lifecycle.' 
              : '우리 대학은 AI 전 주기를 아우르는 4개의 전문 학과로 구성되어 있습니다.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {deptData.map((dept) => (
            <div key={dept.id} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-50 text-[#004191] rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dept.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 h-20 overflow-hidden">
                {dept.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {dept.keywords.map((kw) => (
                  <span key={kw} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
                    #{kw}
                  </span>
                ))}
              </div>
              <button className="w-full py-4 border border-[#004191] text-[#004191] font-bold rounded-lg hover:bg-[#004191] hover:text-white transition-all">
                {t('read_more')} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
