
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
            <Breadcrumbs />

            {/* Hero Section */}
            <div className="bg-gray-50 border-b border-gray-100 py-8 mb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center gap-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                                {t('graduation_reqs')}
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed mx-auto italic">
                                {t('check_common_reqs')}
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 mb-6 flex justify-center text-center">
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {activeTab === 'ug' && activeDept === 'aic' ? (
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aic_ug_title')}</h2>
                            <p className="text-gray-500 italic">{t('aic_ug_subtitle')}</p>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-8 text-[15px] leading-relaxed text-gray-600">
                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('credit_req_grad')}: {t('credit_req_grad_desc')}</h3>
                                </div>
                                <ul className="space-y-1 ml-4">
                                    <li className="flex gap-2">
                                        <span className="text-[#004191] font-bold">※</span>
                                        <span>{t('track_selection_note')}</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('elective_basic_courses')}</h3>
                                </div>
                                <div className="ml-4 space-y-3">
                                    <div className="flex gap-2 items-start">
                                        <div className="mt-1.5 w-max">
                                            <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                                        </div>
                                        <p>{t('mas109_req')}</p>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <span className="text-[#004191] font-bold">※</span>
                                        <p>{t('elective_general_note')}</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('major')}: {t('aic_major_credits_total')}</h3>
                                </div>
                                <div className="ml-4 space-y-5">
                                    <div>
                                        <div className="flex gap-2 items-center mb-2">
                                            <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                                            <p className="font-bold text-gray-800">{t('mandatory_major')}: 12 credits</p>
                                        </div>
                                        <ul className="ml-4 space-y-1.5">
                                            <li className="flex gap-2 items-center">
                                                <span className="w-1 h-px bg-gray-300"></span>
                                                {t('law_ethics_course')}
                                            </li>
                                            <li className="flex gap-2 items-center">
                                                <span className="w-1 h-px bg-gray-300"></span>
                                                {t('intro_ai_course')}
                                            </li>
                                            <li className="flex gap-2 items-center">
                                                <span className="w-1 h-px bg-gray-300"></span>
                                                {t('intro_ml_course')}
                                            </li>
                                            <li className="flex gap-2 items-center">
                                                <span className="w-1 h-px bg-gray-300"></span>
                                                {t('intro_dl_course')}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center mb-2">
                                            <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                                            <p className="font-bold text-gray-800">{t('elective_major')}: 32 credits {t('course_count_note')}</p>
                                        </div>
                                        <ul className="ml-4 space-y-1.5">
                                            <li className="flex gap-2 items-center">
                                                <span className="w-1 h-px bg-gray-300"></span>
                                                {t('cs_recognition')}
                                            </li>
                                            <li className="flex gap-2 items-center">
                                                <span className="w-1 h-px bg-gray-300"></span>
                                                {t('individual_study_note')}
                                            </li>
                                            <li className="ml-6 flex gap-2 items-start border-l border-blue-50 pl-3">
                                                <span className="text-[#004191] font-bold">※</span>
                                                <span>{t('individual_study_scope')}</span>
                                            </li>
                                            <li className="flex gap-2 items-center">
                                                <span className="w-1 h-px bg-gray-300"></span>
                                                {t('coe_recognition')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('advanced_major')}: {t('at_least_12_credits')}</h3>
                                </div>
                                <ul className="ml-4 space-y-1">
                                    <li className="flex gap-2 items-center">
                                        <span className="w-1 h-px bg-gray-300"></span>
                                        {t('advanced_major_desc')}
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('indiv_designed_major')}: {t('at_least_12_credits')}</h3>
                                </div>
                                <ul className="ml-4 space-y-1">
                                    <li className="flex gap-2 items-center">
                                        <span className="w-1 h-px bg-gray-300"></span>
                                        {t('indiv_designed_major_desc')}
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('minor')}: {t('at_least_21_credits')}</h3>
                                </div>
                                <ul className="ml-4 space-y-1.5">
                                    <li className="flex gap-2 items-center">
                                        <span className="w-1 h-px bg-gray-300"></span>
                                        {t('minor_desc')}
                                    </li>
                                    <li className="ml-6 flex gap-2 items-start border-l border-blue-50 pl-3">
                                        <span className="text-[#004191] font-bold">※</span>
                                        <span>{t('credit_count_note')}</span>
                                    </li>
                                    <li className="ml-6 flex gap-2 items-start border-l border-blue-50 pl-3">
                                        <span className="text-[#004191] font-bold">※</span>
                                        <span>{t('same_req_as_elective_major')}</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('double_major')}: {t('at_least_40_credits')}</h3>
                                </div>
                                <ul className="ml-4 space-y-1.5">
                                    <li className="flex gap-2 items-center">
                                        <span className="w-1 h-px bg-gray-300"></span>
                                        {t('double_major_desc')}
                                    </li>
                                    <li className="ml-6 flex gap-2 items-start border-l border-blue-50 pl-3">
                                        <span className="text-[#004191] font-bold">※</span>
                                        <span>{t('double_count_note')}</span>
                                    </li>
                                    <li className="ml-6 flex gap-2 items-start border-l border-blue-50 pl-3">
                                        <span className="text-[#004191] font-bold">※</span>
                                        <span>{t('same_req_as_elective_major')}</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
                                    <h3 className="font-bold text-gray-900">{t('research_courses')}: {t('at_least_3_credits')}</h3>
                                </div>
                                <ul className="ml-4 space-y-1.5">
                                    <li className="flex gap-2 items-center">
                                        <span className="w-1 h-px bg-gray-300"></span>
                                        {t('research_course_desc')}
                                    </li>
                                    <li className="ml-6 flex gap-2 items-start border-l border-blue-50 pl-3">
                                        <span className="text-[#004191] font-bold">※</span>
                                        <span>{t('double_major_exempt')}</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
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
