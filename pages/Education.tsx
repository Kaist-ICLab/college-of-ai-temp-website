
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Breadcrumbs from '../components/Breadcrumbs';
import { useTranslation } from '../i18n';

const Education: React.FC = () => {
   const { language } = useContext(LanguageContext);
   const t = useTranslation(language);

   const [activeTab, setActiveTab] = React.useState<'ug' | 'grad'>('ug');

   return (
      <div className="bg-white">
         <Breadcrumbs />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold mb-10 text-gray-900">{t('academics')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
               <div className={`p-8 rounded-2xl border transition-all ${activeTab === 'ug' ? 'bg-[#f8faff] border-blue-100 shadow-sm' : 'bg-white border-gray-100 opacity-60'}`}>
                  <div className="text-[#004191] font-bold text-sm mb-2 uppercase tracking-widest">Program</div>
                  <h3 className="text-2xl font-bold mb-4">{t('undergraduate')}</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                     <li>• Major: 44+ credits</li>
                     <li>• Total: 138+ credits</li>
                     <li>• 11 core elective subjects</li>
                  </ul>
                  <button onClick={() => setActiveTab('ug')} className="text-[#004191] font-bold text-sm hover:underline">View Details &rarr;</button>
               </div>
               <div className={`p-8 rounded-2xl border transition-all ${activeTab === 'grad' ? 'bg-[#f8faff] border-blue-100 shadow-sm' : 'bg-white border-gray-100 opacity-60'}`}>
                  <div className="text-gray-400 font-bold text-sm mb-2 uppercase tracking-widest">Program</div>
                  <h3 className="text-2xl font-bold mb-4">{t('master')}</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                     <li>• Total: 33+ credits</li>
                     <li>• Research: 6+ credits</li>
                     <li>• Major: 18+ credits</li>
                  </ul>
                  <button onClick={() => setActiveTab('grad')} className="text-[#004191] font-bold text-sm hover:underline">View Details &rarr;</button>
               </div>
               <div className={`p-8 rounded-2xl border transition-all ${activeTab === 'grad' ? 'bg-[#f8faff] border-blue-100 shadow-sm' : 'bg-white border-gray-100 opacity-60'}`}>
                  <div className="text-gray-400 font-bold text-sm mb-2 uppercase tracking-widest">Program</div>
                  <h3 className="text-2xl font-bold mb-4">{t('doctor')}</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                     <li>• Total: 60+ credits</li>
                     <li>• Research: 30+ credits</li>
                     <li>• Seminar completion required</li>
                  </ul>
                  <button onClick={() => setActiveTab('grad')} className="text-[#004191] font-bold text-sm hover:underline">View Details &rarr;</button>
               </div>
            </div>

            <section className="mb-20">
               <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#004191] pl-4">{t('graduation_reqs')}</h2>
                  <div className="flex bg-gray-100 p-1 rounded-lg">
                     <button
                        onClick={() => setActiveTab('ug')}
                        className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'ug' ? 'bg-white text-[#004191] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                     >
                        {t('undergraduate')}
                     </button>
                     <button
                        onClick={() => setActiveTab('grad')}
                        className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'grad' ? 'bg-white text-[#004191] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                     >
                        {t('graduate')}
                     </button>
                  </div>
               </div>

               {activeTab === 'ug' ? (
                  <div className="overflow-x-auto border border-gray-200 rounded-lg animate-in fade-in duration-300">
                     <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-50">
                           <tr>
                              <th className="px-6 py-4 text-left font-bold text-gray-900">Category</th>
                              <th className="px-6 py-4 text-left font-bold text-gray-900">Details</th>
                           </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                           <tr>
                              <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50 w-48">Graduation Credits</td>
                              <td className="px-6 py-4">Total of 138 credits or more</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Major Required</td>
                              <td className="px-6 py-4">
                                 12 credits (AI Math, Intro to AI, Machine Learning, Deep Learning)
                              </td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Major Elective</td>
                              <td className="px-6 py-4">
                                 32 credits (10 or 11 subjects)
                              </td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Intensive Major</td>
                              <td className="px-6 py-4">Complete a total of 12 credits or more (AIC code)</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Minor / Double Major</td>
                              <td className="px-6 py-4">Minor: 21+ credits / Double: 40+ credits</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                     <div className="overflow-x-auto border border-gray-200 rounded-lg">
                        <h3 className="bg-gray-50 px-6 py-3 border-b border-gray-200 font-bold text-gray-900">{t('master')}</h3>
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                           <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                 <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50 w-40">Total Credits</td>
                                 <td className="px-6 py-4">33 credits or more</td>
                              </tr>
                              <tr>
                                 <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Major</td>
                                 <td className="px-6 py-4">18 credits or more</td>
                              </tr>
                              <tr>
                                 <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Research</td>
                                 <td className="px-6 py-4">6 credits or more (including Thesis)</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <div className="overflow-x-auto border border-gray-200 rounded-lg">
                        <h3 className="bg-gray-50 px-6 py-3 border-b border-gray-200 font-bold text-gray-900">{t('doctor')}</h3>
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                           <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                 <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50 w-40">Total Credits</td>
                                 <td className="px-6 py-4">60 credits or more</td>
                              </tr>
                              <tr>
                                 <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Major</td>
                                 <td className="px-6 py-4">36 credits or more</td>
                              </tr>
                              <tr>
                                 <td className="px-6 py-4 font-bold text-gray-700 bg-gray-50/50">Research</td>
                                 <td className="px-6 py-4">30 credits or more</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               )}
            </section>

            <section>
               <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('overview')} (Spring 2026)</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="#" className="flex items-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                     <svg className="w-10 h-10 text-green-600 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" /></svg>
                     <div>
                        <h4 className="font-bold">2026 Spring Curriculum (Excel)</h4>
                        <p className="text-xs text-gray-500">List of all AI major courses recognized.</p>
                     </div>
                  </a>
                  <a href="#" className="flex items-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                     <svg className="w-10 h-10 text-red-600 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                     <div>
                        <h4 className="font-bold">Academic Regulation Handbook</h4>
                        <p className="text-xs text-gray-500">Official guide for AI College students.</p>
                     </div>
                  </a>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Education;
