
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{t('admissions')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'KAIST is a community of global talents. We recruit passionate and extraordinary talents who enjoy exploring knowledge, fostering collaborative and ethical minds to benefit global society.'
              : 'KAIST는 세계적인 인재들의 공동체입니다. 지식 탐구를 즐기는 열정적이고 비범한 인재를 모집하며, 글로벌 사회에 기여할 협력적이고 윤리적인 지성을 지향합니다.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Graduate Admissions Card */}
          <div className="group bg-[#fcfdfe] border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors"></div>
            
            <div className="flex items-center space-x-4 mb-10 relative z-10">
              <div className="w-14 h-14 bg-[#004191] text-white flex items-center justify-center rounded-2xl shadow-lg shadow-blue-900/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900">{t('graduate')}</h2>
            </div>

            <div className="space-y-8 flex-grow">
              <section>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#004191] mb-3">{t('degrees_offered')}</h3>
                <div className="flex flex-wrap gap-2">
                  {['M.S.', 'M.S.&Ph.D Integrated', 'Ph.D'].map(deg => (
                    <span key={deg} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 shadow-sm">
                      {deg}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#004191] mb-3">{t('eligibility')}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {language === 'en' 
                    ? 'Refer to the graduate admission website to check requirements such as country of citizenship, academic qualification, and English language proficiency.'
                    : '국적, 학력, 영어 능력 등 상세한 지원 자격 요건은 대학원 입학 홈페이지에서 확인하시기 바랍니다.'}
                </p>
              </section>
            </div>

            <div className="mt-12">
              <a 
                href="https://admission.kaist.ac.kr/intl-graduate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#004191] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20"
              >
                {t('visit_admission_site')}
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* Undergraduate Admissions Card */}
          <div className="group bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-14 h-14 bg-gray-50 text-[#004191] border-2 border-[#004191] flex items-center justify-center rounded-2xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900">{t('undergraduate')}</h2>
            </div>

            <div className="space-y-8 flex-grow">
              <section>
                <p className="text-gray-700 leading-relaxed text-sm text-justify">
                  {language === 'en'
                    ? 'All undergraduate students are admitted to KAIST without declaring a particular major. They choose their major in their 2nd semester after exploring various fields of study.'
                    : '모든 학부생은 전공 선언 없이 KAIST에 입학합니다. 학생들은 2학기 동안 다양한 분야를 탐색한 후 자신의 전공을 선택하게 됩니다.'}
                </p>
              </section>

              <section>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">{t('application_info')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://admission.kaist.ac.kr/intl-undergraduate/application/ApplicationGuide/ApplicationTimeline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:text-[#004191] transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">{t('application_timeline')}</span>
                  </a>
                  <a 
                    href="https://admission.kaist.ac.kr/intl-undergraduate/application/ApplicationGuide/guide" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:text-[#004191] transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">{t('application_guide')}</span>
                  </a>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
               <a 
                href="https://admission.kaist.ac.kr/intl-undergraduate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm font-black text-[#004191] uppercase tracking-widest hover:translate-x-1 transition-transform"
              >
                <span>Visit Undergraduate Portal</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-24 bg-[#004191] rounded-[3rem] p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 0 L100 100 L0 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6">Need assistance with your application?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
              Our support team is here to guide you through every step of the international student admission process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a 
                 href="mailto:admission@kaist.ac.kr"
                 className="bg-white text-[#004191] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all"
               >
                 Email Support
               </a>
               <Link 
                 to="/intro"
                 className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
               >
                 Contact Faculty
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
