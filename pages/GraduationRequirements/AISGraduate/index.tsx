import React from 'react';
import { useTranslation } from '../../../i18n';
import {
  RequirementBox,
  RequirementTitle,
  OutlineTop,
  OutlineCircle,
  OutlineNote,
} from '../components/SharedComponents';

interface AISGraduateProps {
  language: 'en' | 'ko';
}

const TOP_MARKERS_KO = ['가', '나', '다', '라', '마'];
const TOP_MARKERS_EN = ['A', 'B', 'C', 'D', 'E'];

const AISGraduate: React.FC<AISGraduateProps> = ({ language }) => {
  const t = useTranslation(language);
  const TOP = language === 'ko' ? TOP_MARKERS_KO : TOP_MARKERS_EN;

  const renderProgramSection = (prefix: string) => {
    const isDefined = (key: string) => t(key) && t(key) !== key;
    const hasCommon3 = isDefined(`${prefix}_common_3`);
    const electiveNote1Key = isDefined(`${prefix}_elective_note_1`)
      ? `${prefix}_elective_note_1`
      : `${prefix}_elective_note`;
    const hasElectiveNote2 = isDefined(`${prefix}_elective_note_2`);
    const hasResearch2 = isDefined(`${prefix}_research_2`);
    const hasResearchNote = isDefined(`${prefix}_research_note`);

    return (
      <RequirementBox className="mb-8 md:mb-12">
        <RequirementTitle title={t(`${prefix}_title`)} />

        <div className="text-[15px] leading-relaxed text-gray-700">
          <OutlineTop marker={`${TOP[0]}.`}>{t(`${prefix}_grad_credits`)}</OutlineTop>

          <OutlineTop marker={`${TOP[1]}.`}>{t(`${prefix}_common_req`)}</OutlineTop>
          <OutlineCircle>{t(`${prefix}_common_1`)}</OutlineCircle>
          <OutlineCircle>{t(`${prefix}_common_2`)}</OutlineCircle>
          {hasCommon3 && <OutlineCircle>{t(`${prefix}_common_3`)}</OutlineCircle>}

          <OutlineTop marker={`${TOP[2]}.`}>{t(`${prefix}_major_req`)}</OutlineTop>

          <OutlineTop marker={`${TOP[3]}.`}>{t(`${prefix}_elective_req`)}</OutlineTop>
          <OutlineCircle>{t(`${prefix}_elective_1`)}</OutlineCircle>
          <OutlineCircle>{t(`${prefix}_elective_2`)}</OutlineCircle>
          <OutlineNote level={1}>{t(`${prefix}_elective_note`)}</OutlineNote>
          {hasElectiveNote2 && <OutlineNote level={1}>{t(`${prefix}_elective_note_2`)}</OutlineNote>}

          <OutlineTop marker={`${TOP[4]}.`}>{t(`${prefix}_research_req`)}</OutlineTop>
          <OutlineCircle>{t(`${prefix}_research_1`)}</OutlineCircle>
          {hasResearch2 && <OutlineCircle>{t(`${prefix}_research_2`)}</OutlineCircle>}
          {hasResearchNote && <OutlineNote level={1}>{t(`${prefix}_research_note`)}</OutlineNote>}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="font-bold text-gray-900 mb-2">
              ❏ {t('transitional_measures')}
            </p>
            <OutlineTop marker={`${TOP[0]}.`}>{t(`${prefix}_transit`)}</OutlineTop>
          </div>
        </div>
      </RequirementBox>
    );
  };

  return (
    <div className="space-y-8 md:space-y-12">
      {renderProgramSection('ais_ms')}
      {renderProgramSection('ais_phd')}
      {renderProgramSection('ais_int')}
    </div>
  );
};

export default AISGraduate;
