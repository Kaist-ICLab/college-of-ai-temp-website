import React from 'react';
import { useTranslation } from '../../../i18n';
import './styles.css';

interface AISUndergraduateProps {
  language: 'en' | 'ko';
}

const AISUndergraduate: React.FC<AISUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('ais_ug_title')}</h2>
        <p className="text-gray-500 italic">{t('ais_ug_subtitle')}</p>
      </div>

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        {/* Graduation Credits */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_grad_credits')}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-1">
            <p className="italic">{t('ais_ug_track_note')}</p>
          </div>
        </section>

        {/* Special Note / Basic Choice */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_special_note_title')}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-6">
            <div>
              <p className="font-bold text-gray-800 mb-2">{t('ais_ug_basic_req')}</p>
              <div className="flex gap-2 items-start ml-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                <p>{t('ais_ug_basic_1')}</p>
              </div>
              <div className="mt-2 space-y-1 ml-2">
                <p className="italic">{t('ais_ug_basic_double_note')}</p>
                <div className="flex gap-2 items-start ml-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                  <p>{t('ais_ug_basic_double_1')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_major_req')}</h3>
          </div>

          <div className="ml-3 sm:ml-4 space-y-8">
            {/* Mandatory */}
            <div>
              <div className="flex gap-2 items-center mb-3">
                <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                <p className="font-bold text-gray-800">{t('ais_ug_mandatory_title')}</p>
              </div>
              <ul className="ml-3 sm:ml-4 space-y-3">
                {[1, 2, 3, 4].map(idx => (
                  <li key={idx} className="flex gap-2 items-start text-gray-500">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                    <span>{t(`ais_ug_mandatory_${idx}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 italic ml-3 sm:ml-4 text-gray-500">{t('ais_ug_mandatory_note')}</p>
            </div>

            {/* Elective */}
            <div>
              <div className="flex gap-2 items-center mb-3">
                <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                <p className="font-bold text-gray-800">{t('ais_ug_elective_title')}</p>
              </div>
              <div className="ml-3 sm:ml-4 space-y-2">
                {[1, 2, 3].map(idx => (
                  <div key={idx} className="flex gap-2 items-start text-gray-500">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                    <p>{t(`ais_ug_elective_${idx}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Major Types */}
        <section className="space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_intensive_title')}</h3>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_inter_title')}</h3>
            </div>
            <p className="ml-3 sm:ml-4">{t('ais_ug_inter_desc')}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_minor_title')}</h3>
            </div>
            <div className="ml-3 sm:ml-4 space-y-2">
              <p>{t('ais_ug_minor_desc')}</p>
              <p className="italic">{t('ais_ug_minor_note')}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_double_title')}</h3>
            </div>
            <p className="ml-3 sm:ml-4">{t('ais_ug_double_desc')}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
              <h3 className="font-bold text-gray-900 text-lg">{t('ais_ug_research_title')}</h3>
            </div>
            <div className="ml-3 sm:ml-4 space-y-3">
              <p>{t('ais_ug_research_desc')}</p>
              <div className="space-y-2">
                <p className="italic">{t('ais_ug_research_note_1')}</p>
                <p className="italic">{t('ais_ug_research_note_2')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISUndergraduate;
