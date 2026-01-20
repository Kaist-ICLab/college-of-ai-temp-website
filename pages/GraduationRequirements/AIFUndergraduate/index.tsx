import React from 'react';
import { useTranslation } from '../../../i18n';
import './styles.css';

interface AIFUndergraduateProps {
  language: 'en' | 'ko';
}

const AIFUndergraduate: React.FC<AIFUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('aif_ug_title')}</h2>
        <p className="text-gray-500 italic mb-4">{t('aif_ug_subtitle')}</p>
        <p className="text-gray-500 text-sm">{t('aif_ug_common_note')}</p>
      </div>

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        {/* Graduation Credits */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('aif_ug_grad_credits')}</h3>
          </div>
          <div className="ml-3 sm:ml-4">
            <p className="italic">{t('aif_ug_double_major_note')}</p>
          </div>
        </section>

        {/* Basic Elective */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('aif_ug_basic_req')}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-2">
            <div className="flex gap-2 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t('aif_ug_basic_1')}</p>
            </div>
            <p className="italic">{t('aif_ug_basic_note')}</p>
          </div>
        </section>

        {/* Major */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('aif_ug_major_req')}</h3>
          </div>

          <div className="ml-3 sm:ml-4 space-y-8">
            {/* Mandatory */}
            <div>
              <div className="flex gap-2 items-center mb-3">
                <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                <p className="font-bold text-gray-800">{t('aif_ug_mandatory_title')}</p>
              </div>
              <ul className="ml-3 sm:ml-4 space-y-2">
                {[1, 2, 3, 4].map(idx => (
                  <li key={idx} className="flex gap-2 items-start text-gray-500">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                    <span>{t(`aif_ug_mandatory_${idx}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elective */}
            <div>
              <div className="flex gap-2 items-center mb-3">
                <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
                <p className="font-bold text-gray-800">{t('aif_ug_elective_title')}</p>
              </div>
              <div className="ml-3 sm:ml-4 space-y-3">
                <div className="flex gap-2 items-start text-gray-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                  <p>{t('aif_ug_elective_1')}</p>
                </div>
                <div className="flex gap-2 items-start text-gray-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                  <div>
                    <p>{t('aif_ug_elective_2')}</p>
                    <p className="italic text-gray-500">{t('aif_ug_elective_2_note')}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start text-gray-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                  <p>{t('aif_ug_elective_3')}</p>
                </div>
                <div className="flex gap-2 items-start text-gray-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                  <p>{t('aif_ug_elective_4')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minor */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('aif_ug_minor_title')}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-2">
            <p>{t('aif_ug_minor_desc')}</p>
            <div className="space-y-1">
              <p className="italic">{t('aif_ug_minor_note_1')}</p>
              <p className="italic">{t('aif_ug_minor_note_2')}</p>
            </div>
          </div>
        </section>

        {/* Double Major */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t('aif_ug_double_title')}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-2">
            <p>{t('aif_ug_double_desc')}</p>
            <div className="space-y-1">
              <p className="italic">{t('aif_ug_double_note_1')}</p>
              <p className="italic">{t('aif_ug_double_note_2')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIFUndergraduate;
