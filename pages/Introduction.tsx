
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import Breadcrumbs from '../components/Breadcrumbs';
import { useTranslation } from '../i18n';

const Introduction: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const deansMessageEn = `
    Artificial intelligence (AI) is now transcending specific technological fields and becoming a key driving force fundamentally redefining scientific and technological innovation, industrial structures, and even how society operates. 
    College of AI was established to go beyond providing education that meets short-term technological demands and proactively design the direction and role of AI that future society will demand. 
    Our education and research system encompasses the entire AI cycle, from algorithms and models to systems and applications. We are expanding convergence with diverse scientific fields, including life sciences, robotics, physics, and chemistry. 
    We focus on cultivating individuals equipped with fundamental competencies, problem-solving skills, and a sense of social responsibility. We aim not merely to anticipate the future, but to shape it through AI.
  `;

  const deansMessageKo = `
    인공지능(AI)은 이제 특정 기술 분야를 넘어 과학 기술 혁신, 산업 구조, 그리고 사회 운영 방식을 근본적으로 재정의하는 핵심 동력이 되고 있습니다. 
    AI대학은 단기적인 기술적 요구에 부응하는 교육을 넘어, 미래 사회가 요구할 AI의 방향과 역할을 선제적으로 설계하기 위해 설립되었습니다. 
    우리의 교육 및 연구 시스템은 알고리즘과 모델에서 시스템과 응용에 이르기까지 AI 전 주기를 아우릅니다. 또한 생명과학, 로보틱스, 물리학, 화학 등 다양한 과학 분야와의 융합을 확대하고 있습니다. 
    우리는 기초 역량, 문제 해결 능력, 사회적 책임감을 갖춘 인재를 양성하는 데 집중합니다. 우리는 단순히 미래를 예측하는 것이 아니라, AI를 통해 미래를 직접 만들어 나가고자 합니다.
  `;

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          
          {/* Side Menu Toggle Button (Floating when collapsed on Desktop) */}
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`hidden lg:flex absolute -left-10 top-0 z-20 bg-white border border-gray-200 text-[#004191] rounded-full p-2 shadow-md hover:bg-gray-50 transition-all duration-300 ${isSidebarCollapsed ? 'translate-x-10 rotate-180' : 'translate-x-64 -translate-x-1/2 rotate-0'}`}
            title={isSidebarCollapsed ? "Expand Menu" : "Collapse Menu"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />``
            </svg>
          </button>

          {/* Side Menu */}
          <aside 
            className={`flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden
              ${isSidebarCollapsed ? 'lg:w-0 lg:opacity-0 lg:mr-0' : 'w-full lg:w-64 lg:opacity-100 lg:mr-4'}
            `}
          >
             <div className="min-w-[256px]">
               <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#004191] pb-4 mb-6">{t('introduction')}</h2>
               <ul className="space-y-2">
                  <li className="font-bold text-[#004191] bg-blue-50/80 p-3 rounded-xl flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#004191] rounded-full mr-3"></span>
                    {t('welcome_msg')}
                  </li>
                  <li className="text-gray-600 hover:text-[#004191] hover:bg-gray-50 p-3 rounded-xl transition-all cursor-pointer flex items-center">
                    <span className="w-1.5 h-1.5 bg-transparent group-hover:bg-gray-300 rounded-full mr-3"></span>
                    {t('overview')}
                  </li>
                  <li className="text-gray-600 hover:text-[#004191] hover:bg-gray-50 p-3 rounded-xl transition-all cursor-pointer flex items-center">
                    <span className="w-1.5 h-1.5 bg-transparent rounded-full mr-3"></span>
                    Vision & Mission
                  </li>
                  <li className="text-gray-600 hover:text-[#004191] hover:bg-gray-50 p-3 rounded-xl transition-all cursor-pointer flex items-center">
                    <span className="w-1.5 h-1.5 bg-transparent rounded-full mr-3"></span>
                    History
                  </li>
               </ul>
             </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{t('welcome_msg')}</h1>
              {/* Mobile Toggle Button */}
              <button 
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="lg:hidden flex items-center space-x-2 text-[#004191] font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg"
              >
                <svg className={`w-4 h-4 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>{isSidebarCollapsed ? "Open Menu" : "Close Menu"}</span>
              </button>
            </div>
            
            <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] overflow-hidden mb-12 flex flex-col md:flex-row gap-0 items-stretch">
               <div className="flex-grow p-8 md:p-12 order-2 md:order-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#004191] mb-8 italic leading-tight">
                    "Shape the future through Artificial Intelligence."
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-6 text-justify text-base md:text-lg">
                    {(language === 'en' ? deansMessageEn : deansMessageKo).split('\n').filter(p => p.trim()).map((para, i) => (
                      <p key={i}>{para.trim()}</p>
                    ))}
                  </div>
                  <div className="mt-10 pt-8 border-t border-gray-50 flex justify-end">
                    <div className="text-right">
                      <p className="font-black text-gray-900 text-xl tracking-tight">Eunho Yang</p>
                      <p className="text-[#004191] font-bold text-sm uppercase tracking-widest mt-1">Dean, College of AI</p>
                    </div>
                  </div>
               </div>
               <div className="w-full md:w-80 flex-shrink-0 order-1 md:order-2 bg-gray-50">
                  <div className="h-full w-full grayscale hover:grayscale-0 transition-all duration-700">
                     <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsjemrQJ1aY8GXzDH7zyW2PeSr0NoRlUL0Q&s" 
                      alt="Dean" 
                      className="w-full h-full object-cover" 
                     />
                  </div>
               </div>
            </div>

            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 border-l-4 border-[#004191] pl-6">{t('overview')}</h2>
              <div className="bg-gray-50/50 border border-gray-100 rounded-3xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                    {language === 'en' 
                      ? 'The establishment of the College of AI consolidates AI education and research capabilities, previously fragmented across various departments, into a single organization. This aligns with the international trend of "AI for Science," fostering innovation through convergence.'
                      : 'AI대학의 설립은 기존의 여러 학과에 흩어져 있던 AI 교육 및 연구 역량을 하나의 조직으로 통합한 것입니다. 이는 융합을 통한 혁신을 촉진하는 "과학을 위한 AI(AI for Science)"라는 국제적 흐름과 궤를 같이 합니다.'}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#004191]/20 transition-all">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-[#004191]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Strategic Investment</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Securing talent to lead national industrial innovation and building a sustainable AI ecosystem.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#004191]/20 transition-all">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-[#004191]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.477 2.387a2 2 0 001.414 1.96l2.387.477a2 2 0 001.96-1.414l.477-2.387a2 2 0 00-1.414-1.96l-2.387-.477z" /></svg>
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Full-stack AI Talent</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Equipped with end-to-end skills from theoretical algorithm design to deep hardware integration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
