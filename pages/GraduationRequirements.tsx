import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import Breadcrumbs from '../components/Breadcrumbs';
import { useTranslation } from '../i18n';

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

  return (
    <div className="bg-white min-h-screen pb-24 text-[#333]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          nav, footer, .breadcrumbs-nav, .hero-section, .dept-selector {
            display: none !important;
          }
          body, .page-container {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .requirement-box {
            border: none !important;
            background: transparent !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .text-gray-500 { color: #666 !important; }
          .text-[#004191] { color: #004191 !important; }
          @page {
            margin: 2cm;
          }
        }
      ` }} />

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
        {activeTab === 'ug' && activeDept === 'aic' ? (
          <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aic_ug_title')}</h2>
              <p className="text-gray-500 italic">{t('aic_ug_subtitle')}</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
              {/* Graduation Credits */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                  <h3 className="font-bold text-gray-900 text-lg">{t('aic_grad_credits')}</h3>
                </div>
                <div className="ml-3 sm:ml-4 space-y-1">
                  <p className="italic">{t('aic_track_note')}</p>
                </div>
              </section>

              {/* Elective Basic */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                  <h3 className="font-bold text-gray-900 text-lg">{t('aic_basic_req')}</h3>
                </div>
                <div className="ml-3 sm:ml-4 space-y-3">
                  <div className="flex gap-2 items-start">
                    <div className="mt-1.5 w-max">
                      <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                    </div>
                    <p>{t('aic_mas109_req')}</p>
                  </div>
                  <p className="italic">{t('aic_basic_note')}</p>
                </div>
              </section>

              {/* Major */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                  <h3 className="font-bold text-gray-900 text-lg">{t('aic_major_req')}</h3>
                </div>

                <div className="ml-3 sm:ml-4 space-y-8">
                  {/* Mandatory */}
                  <div>
                    <div className="flex gap-2 items-center mb-3">
                      <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                      <p className="font-bold text-gray-800">{t('aic_mandatory_title')}</p>
                    </div>
                    <ul className="ml-3 sm:ml-4 space-y-1.5">
                      {[1, 2, 3, 4].map(idx => (
                        <li key={idx} className="flex gap-2 items-start text-gray-500">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                          <span>{t(`aic_mandatory_${idx}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Elective */}
                  <div>
                    <div className="flex gap-2 items-center mb-3">
                      <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                      <p className="font-bold text-gray-800">{t('aic_elective_title')}</p>
                    </div>
                    <div className="ml-3 sm:ml-4 space-y-2">
                      <div className="flex gap-2 items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                        <p>{t('aic_elective_1')}</p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                        <div>
                          <p>{t('aic_elective_2')}</p>
                          <p className="mt-1 italic text-gray-500">{t('aic_elective_2_note')}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                        <p>{t('aic_elective_3')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Other Requirements */}
              <section className="space-y-10">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_advanced_req')}</h3>
                  </div>
                  <p className="ml-3 sm:ml-4">{t('aic_advanced_desc')}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_indiv_req')}</h3>
                  </div>
                  <p className="ml-3 sm:ml-4">{t('aic_indiv_desc')}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_minor_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-3">
                    <p>{t('aic_minor_desc')}</p>
                    <div className="space-y-1">
                      <p className="italic">{t('aic_minor_note_1')}</p>
                      <p className="italic">{t('aic_minor_note_2')}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_double_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-3">
                    <p>{t('aic_double_desc')}</p>
                    <div className="space-y-1">
                      <p className="italic">{t('aic_double_note_1')}</p>
                      <p className="italic">{t('aic_double_note_2')}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_research_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-3">
                    <p>{t('aic_research_desc')}</p>
                    <p className="italic">{t('aic_research_note')}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : activeTab === 'grad' && activeDept === 'aic' ? (
          <div className="space-y-8 md:space-y-12">
            {/* Master's Box */}
            <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aic_ms_title')}</h2>
              </div>

              {/* Content Sections */}
              <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
                {/* Graduation Credits */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_ms_grad_credits')}</h3>
                  </div>
                </section>

                {/* Common Mandatory */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_ms_common_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <div>
                        <p>{t('aic_ms_common_1')}</p>
                        <p className="italic text-gray-500">{t('aic_ms_common_1_note')}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_ms_common_2')}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_ms_common_3')}</p>
                    </div>
                  </div>
                </section>

                {/* Major Mandatory */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_ms_major_req')}</h3>
                  </div>
                </section>

                {/* Elective Courses */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_ms_elective_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_ms_elective_1')}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <div>
                        <p>{t('aic_ms_elective_2')}</p>
                        <p className="italic text-gray-500">{t('aic_ms_elective_note')}</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Research Courses */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_ms_research_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_ms_research_1')}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Doctoral Box */}
            <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aic_phd_title')}</h2>
              </div>

              {/* Content Sections */}
              <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
                {/* Graduation Credits */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_phd_grad_credits')}</h3>
                  </div>
                </section>

                {/* Common Mandatory */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_phd_common_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <div>
                        <p>{t('aic_phd_common_1')}</p>
                        <p className="italic text-gray-500">{t('aic_phd_common_1_note')}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_phd_common_2')}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_phd_common_3')}</p>
                    </div>
                  </div>
                </section>

                {/* Major Mandatory */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_phd_major_req')}</h3>
                  </div>
                </section>

                {/* Elective Courses */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_phd_elective_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_phd_elective_1')}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <div>
                        <p>{t('aic_phd_elective_2')}</p>
                      </div>
                    </div>
                    <p className="italic ml-5 sm:ml-7">{t('aic_phd_elective_note')}</p>
                  </div>
                </section>

                {/* Research Courses */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_phd_research_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_phd_research_1')}</p>
                    </div>
                    <p className="italic">{t('aic_phd_research_note')}</p>
                  </div>
                </section>
              </div>
            </div>

            {/* Integrated Program Box */}
            <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aic_int_title')}</h2>
              </div>

              {/* Content Sections */}
              <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
                {/* Graduation Credits */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_int_grad_credits')}</h3>
                  </div>
                </section>

                {/* Common Mandatory */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_int_common_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <div>
                        <p>{t('aic_int_common_1')}</p>
                        <p className="italic text-gray-500">{t('aic_int_common_1_note')}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_int_common_2')}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_int_common_3')}</p>
                    </div>
                  </div>
                </section>

                {/* Major Mandatory */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_int_major_req')}</h3>
                  </div>
                </section>

                {/* Elective Courses */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_int_elective_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_int_elective_1')}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <div>
                        <p>{t('aic_int_elective_2')}</p>
                      </div>
                    </div>
                    <p className="italic ml-5 sm:ml-7">{t('aic_int_elective_note')}</p>
                  </div>
                </section>

                {/* Research Courses */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                    <h3 className="font-bold text-gray-900 text-lg">{t('aic_int_research_req')}</h3>
                  </div>
                  <div className="ml-3 sm:ml-4 space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                      <p>{t('aic_int_research_1')}</p>
                    </div>
                    <p className="italic">{t('aic_int_research_note')}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-3xl border border-gray-100 print:hidden">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Requirement Content Not Available</h3>
            <p className="text-gray-500 max-w-md text-sm">Detailed requirements for this department/program are being updated to the new simplified format.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GraduationRequirements;
