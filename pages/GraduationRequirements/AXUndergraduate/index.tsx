import React from 'react';
import { useTranslation } from '../../../i18n';
import {
  RequirementBox,
  RequirementTitle,
  OutlineTop,
  OutlineCircle,
  OutlineDash,
  OutlineNote,
} from '../components/SharedComponents';

interface AXUndergraduateProps {
  language: 'en' | 'ko';
}

const TOP_MARKERS_KO = ['가', '나', '다', '라', '마', '바', '사', '아'];
const TOP_MARKERS_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const AXUndergraduate: React.FC<AXUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);
  const TOP = language === 'ko' ? TOP_MARKERS_KO : TOP_MARKERS_EN;

  return (
    <RequirementBox>
      <RequirementTitle title={t('ax_ug_title')} subtitle={t('ax_ug_subtitle')} />

      <div className="text-[15px] leading-relaxed text-gray-700">
        <OutlineTop marker={`${TOP[0]}.`}>{t('ax_ug_grad_credits')}</OutlineTop>
        <OutlineNote level={1}>{t('ax_ug_track_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[1]}.`}>{t('ax_ug_basic_req')}</OutlineTop>
        <OutlineCircle>{t('ax_ug_basic_1')}</OutlineCircle>
        <OutlineNote level={1}>{t('ax_ug_basic_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[2]}.`}>{t('ax_ug_major_req')}</OutlineTop>
        <OutlineCircle>{t('ax_ug_mandatory_title')}</OutlineCircle>
        {[1, 2, 3, 4].map((idx) => (
          <OutlineDash key={idx}>{t(`ax_ug_mandatory_${idx}`)}</OutlineDash>
        ))}
        <OutlineCircle>{t('ax_ug_elective_title')}</OutlineCircle>
        <OutlineDash>{t('ax_ug_elective_1')}</OutlineDash>
        <OutlineNote level={2}>{t('ax_ug_elective_1_note')}</OutlineNote>
        <OutlineDash>{t('ax_ug_elective_2')}</OutlineDash>

        <OutlineTop marker={`${TOP[3]}.`}>{t('ax_ug_intensive_title')}</OutlineTop>
        <OutlineCircle>{t('ax_ug_intensive_desc')}</OutlineCircle>

        <OutlineTop marker={`${TOP[4]}.`}>{t('ax_ug_inter_title')}</OutlineTop>
        <OutlineCircle>{t('ax_ug_inter_desc')}</OutlineCircle>

        <OutlineTop marker={`${TOP[5]}.`}>{t('ax_ug_minor_title')}</OutlineTop>
        <OutlineCircle>{t('ax_ug_minor_desc')}</OutlineCircle>
        <OutlineNote level={1}>{t('ax_ug_minor_note_1')}</OutlineNote>
        <OutlineNote level={1}>{t('ax_ug_minor_note_2')}</OutlineNote>

        <OutlineTop marker={`${TOP[6]}.`}>{t('ax_ug_double_title')}</OutlineTop>
        <OutlineCircle>{t('ax_ug_double_desc')}</OutlineCircle>
        <OutlineNote level={1}>{t('ax_ug_double_note_1')}</OutlineNote>
        <OutlineNote level={1}>{t('ax_ug_double_note_2')}</OutlineNote>

        <OutlineTop marker={`${TOP[7]}.`}>{t('ax_ug_research_title')}</OutlineTop>
        <OutlineCircle>{t('ax_ug_research_desc')}</OutlineCircle>
        <OutlineNote level={1}>{t('ax_ug_research_note')}</OutlineNote>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="font-bold text-gray-900 mb-2">
            ❏ {t('transitional_measures')}
          </p>
          <OutlineTop marker={`${TOP[0]}.`}>{t('ax_ug_transit')}</OutlineTop>
        </div>
      </div>
    </RequirementBox>
  );
};

export default AXUndergraduate;
