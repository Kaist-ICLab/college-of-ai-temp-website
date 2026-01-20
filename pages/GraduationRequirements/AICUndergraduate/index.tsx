import React from 'react';
import { useTranslation } from '../../../i18n';
import './styles.css';

interface AICUndergraduateProps {
  language: 'en' | 'ko';
}

const AICUndergraduate: React.FC<AICUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aic_ug_title')}</h2>
        <p className="text-gray-500 italic">{t('aic_ug_subtitle')}</p>
      </div>

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('aic_grad_credits')}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-1">
            <p className="italic">{t('aic_track_note')}</p>
          </div>
        </section>

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

        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('aic_major_req')}</h3>
          </div>

          <div className="ml-3 sm:ml-4 space-y-8">
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
  );
};

export default AICUndergraduate;
