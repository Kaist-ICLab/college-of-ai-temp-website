import React from 'react';
import { useTranslation } from '../../../i18n';
import {
  RequirementBox,
  RequirementTitle,
  SectionHeader,
  BulletItem,
  NoteText,
} from '../components/SharedComponents';

interface AIFGraduateProps {
  language: 'en' | 'ko';
}

const AIFGraduate: React.FC<AIFGraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  const renderProgramSection = (prefix: string) => {
    const hasResearchNote = t(`${prefix}_research_1_note`) && t(`${prefix}_research_1_note`) !== `${prefix}_research_1_note`;

    return (
      <RequirementBox className="mb-8 md:mb-12">
        <RequirementTitle title={t(`${prefix}_title`)} />

        <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
          {/* Graduation Credits */}
          <section>
            <SectionHeader title={t(`${prefix}_grad_credits`)} />
          </section>

          {/* Common Mandatory */}
          <section>
            <SectionHeader title={t(`${prefix}_common_req`)} />
            <div className="ml-3 sm:ml-4 space-y-2">
              <BulletItem>{t(`${prefix}_common_1`)}</BulletItem>
              <NoteText indented>{t(`${prefix}_common_1_note`)}</NoteText>
              <BulletItem>{t(`${prefix}_common_2`)}</BulletItem>
              <BulletItem>{t(`${prefix}_common_3`)}</BulletItem>
            </div>
          </section>

          {/* Major Mandatory */}
          <section>
            <SectionHeader title={t(`${prefix}_major_req`)} />
            <ul className="ml-3 sm:ml-4 space-y-2">
              {[1, 2, 3, 4].map(idx => (
                <li key={idx} className="flex gap-2 items-start text-gray-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#002380] shrink-0"></span>
                  <span>{t(`${prefix}_major_${idx}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Elective Courses */}
          <section>
            <SectionHeader title={t(`${prefix}_elective_req`)} />
            <div className="ml-3 sm:ml-4 space-y-3">
              <BulletItem className="text-gray-500">{t(`${prefix}_elective_1`)}</BulletItem>
              <BulletItem className="text-gray-500">{t(`${prefix}_elective_2`)}</BulletItem>
              <NoteText>{t(`${prefix}_elective_note`)}</NoteText>
            </div>
          </section>

          {/* Research Courses */}
          <section>
            <SectionHeader title={t(`${prefix}_research_req`)} />
            <div className="ml-3 sm:ml-4 space-y-3">
              <BulletItem>{t(`${prefix}_research_1`)}</BulletItem>
              {hasResearchNote && <NoteText indented>{t(`${prefix}_research_1_note`)}</NoteText>}
              <BulletItem>{t(`${prefix}_research_2`)}</BulletItem>
            </div>
          </section>

          {/* Transitional Measures */}
          <section>
            <SectionHeader title={t('transitional_measures')} />
            <div className="ml-3 sm:ml-4">
              <p>{t(`${prefix}_transit`)}</p>
            </div>
          </section>
        </div>
      </RequirementBox>
    );
  };

  return (
    <div className="space-y-8 md:space-y-12">
      {renderProgramSection('aif_ms')}
      {renderProgramSection('aif_phd')}
      {renderProgramSection('aif_int')}
    </div>
  );
};

export default AIFGraduate;
