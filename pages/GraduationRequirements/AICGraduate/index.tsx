import React from 'react';
import { useTranslation } from '../../../i18n';
import {
  RequirementBox,
  RequirementTitle,
  SectionHeader,
  BulletItem,
  NoteText,
} from '../components/SharedComponents';
import './styles.css';

interface AICGraduateProps {
  language: 'en' | 'ko';
}

const AICGraduate: React.FC<AICGraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  const renderProgramSection = (prefix: string) => {
    const hasResearchNote = t(`${prefix}_research_note`) && t(`${prefix}_research_note`) !== `${prefix}_research_note`;

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
              <BulletItem>
                <div>
                  <p>{t(`${prefix}_common_1`)}</p>
                  <NoteText>{t(`${prefix}_common_1_note`)}</NoteText>
                </div>
              </BulletItem>
              <BulletItem>{t(`${prefix}_common_2`)}</BulletItem>
              <BulletItem>{t(`${prefix}_common_3`)}</BulletItem>
            </div>
          </section>

          {/* Major Mandatory */}
          <section>
            <SectionHeader title={t(`${prefix}_major_req`)} />
          </section>

          {/* Elective Courses */}
          <section>
            <SectionHeader title={t(`${prefix}_elective_req`)} />
            <div className="ml-3 sm:ml-4 space-y-2">
              <BulletItem>{t(`${prefix}_elective_1`)}</BulletItem>
              <BulletItem>
                <div>
                  <p>{t(`${prefix}_elective_2`)}</p>
                </div>
              </BulletItem>
              <NoteText indented>{t(`${prefix}_elective_note`)}</NoteText>
            </div>
          </section>

          {/* Research Courses */}
          <section>
            <SectionHeader title={t(`${prefix}_research_req`)} />
            <div className="ml-3 sm:ml-4 space-y-2">
              <BulletItem>{t(`${prefix}_research_1`)}</BulletItem>
              {hasResearchNote && <NoteText>{t(`${prefix}_research_note`)}</NoteText>}
            </div>
          </section>
        </div>
      </RequirementBox>
    );
  };

  return (
    <div className="space-y-8 md:space-y-12">
      {renderProgramSection('aic_ms')}
      {renderProgramSection('aic_phd')}
      {renderProgramSection('aic_int')}
    </div>
  );
};

export default AICGraduate;
