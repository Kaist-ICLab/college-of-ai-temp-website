import React from 'react';
import { useTranslation } from '../../../i18n';
import './styles.css';

interface AICGraduateProps {
  language: 'en' | 'ko';
}

const AICGraduate: React.FC<AICGraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Master's Box */}
      <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aic_ms_title')}</h2>
        </div>

        <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('aic_ms_grad_credits')}</h3>
            </div>
          </section>

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

          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('aic_ms_major_req')}</h3>
            </div>
          </section>

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

        <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('aic_phd_grad_credits')}</h3>
            </div>
          </section>

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

          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('aic_phd_major_req')}</h3>
            </div>
          </section>

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

        <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('aic_int_grad_credits')}</h3>
            </div>
          </section>

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

          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('aic_int_major_req')}</h3>
            </div>
          </section>

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
  );
};

export default AICGraduate;
