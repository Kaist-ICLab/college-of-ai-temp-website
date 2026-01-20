import React from 'react';
import { useTranslation } from '../../../i18n';
import './styles.css';

interface AIFGraduateProps {
  language: 'en' | 'ko';
}

const AIFGraduate: React.FC<AIFGraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  const renderSection = (prefix: string) => (
    <div className="requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-8 md:p-12 mb-8 md:mb-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t(`${prefix}_title`)}</h2>
      </div>

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        {/* Graduation Credits */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t(`${prefix}_grad_credits`)}</h3>
          </div>
        </section>

        {/* Common Mandatory */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t(`${prefix}_common_req`)}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-2">
            <div className="flex gap-2 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t(`${prefix}_common_1`)}</p>
            </div>
            <p className="italic ml-5 sm:ml-7 text-gray-500">{t(`${prefix}_common_1_note`)}</p>
            <div className="flex gap-2 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t(`${prefix}_common_2`)}</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t(`${prefix}_common_3`)}</p>
            </div>
          </div>
        </section>

        {/* Major Mandatory */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t(`${prefix}_major_req`)}</h3>
          </div>
          <ul className="ml-3 sm:ml-4 space-y-2">
            {[1, 2, 3, 4].map(idx => (
              <li key={idx} className="flex gap-2 items-start text-gray-500">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                <span>{t(`${prefix}_major_${idx}`)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Elective Courses */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t(`${prefix}_elective_req`)}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-3">
            <div className="flex gap-2 items-start text-gray-500">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t(`${prefix}_elective_1`)}</p>
            </div>
            <div className="flex gap-2 items-start text-gray-500">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t(`${prefix}_elective_2`)}</p>
            </div>
            <p className="italic text-gray-500">{t(`${prefix}_elective_note`)}</p>
          </div>
        </section>

        {/* Research Courses */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-[#004191] rounded-full"></span>
            <h3 className="font-bold text-gray-900 text-lg">{t(`${prefix}_research_req`)}</h3>
          </div>
          <div className="ml-3 sm:ml-4 space-y-3">
            <div className="flex gap-2 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t(`${prefix}_research_1`)}</p>
            </div>
            {t(`${prefix}_research_1_note`) && t(`${prefix}_research_1_note`) !== `${prefix}_research_1_note` && (
              <p className="italic ml-5 sm:ml-7 text-gray-500">{t(`${prefix}_research_1_note`)}</p>
            )}
            <div className="flex gap-2 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
              <p>{t(`${prefix}_research_2`)}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 md:space-y-12">
      {renderSection('aif_ms')}
      {renderSection('aif_phd')}
      {renderSection('aif_int')}
    </div>
  );
};

export default AIFGraduate;
