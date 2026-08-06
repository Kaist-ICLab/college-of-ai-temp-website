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

interface AIFUndergraduateProps {
  language: 'en' | 'ko';
}

const TOP_MARKERS_KO = ['가', '나', '다', '라', '마'];
const TOP_MARKERS_EN = ['A', 'B', 'C', 'D', 'E'];

const AIFUndergraduate: React.FC<AIFUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);
  const TOP = language === 'ko' ? TOP_MARKERS_KO : TOP_MARKERS_EN;

  return (
    <RequirementBox>
      <RequirementTitle title={t('aif_ug_title')} subtitle={t('aif_ug_subtitle')} />

      <div className="text-[15px] leading-relaxed text-gray-700">
        <OutlineTop marker={`${TOP[0]}.`}>{t('aif_ug_grad_credits')}</OutlineTop>
        <OutlineNote level={1}>{t('aif_ug_track_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[1]}.`}>{t('aif_ug_basic_req')}</OutlineTop>
        <OutlineCircle>{t('aif_ug_basic_1')}</OutlineCircle>
        <OutlineCircle>{t('aif_ug_basic_2')}</OutlineCircle>
        <OutlineNote level={1}>{t('aif_ug_basic_double_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[2]}.`}>{t('aif_ug_major_req')}</OutlineTop>
        <OutlineCircle>{t('aif_ug_mandatory_title')}</OutlineCircle>
        {[1, 2, 3, 4].map((idx) => (
          <OutlineDash key={idx}>{t(`aif_ug_mandatory_${idx}`)}</OutlineDash>
        ))}
        <OutlineCircle>{t('aif_ug_elective_title')}</OutlineCircle>
        {[1, 2, 3].map((idx) => (
          <OutlineDash key={idx}>{t(`aif_ug_elective_${idx}`)}</OutlineDash>
        ))}
        <OutlineNote level={2}>{t('aif_ug_elective_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[3]}.`}>{t("aif_other_major_title")}</OutlineTop>
        <OutlineCircle>{t("aif_advanced_req")}</OutlineCircle>
        <OutlineDash>{t("aif_advanced_desc")}</OutlineDash>
        <OutlineCircle>{t("aif_minor_req")}</OutlineCircle>
        <OutlineDash>{t("aif_minor_desc_1")}</OutlineDash>
        <OutlineDash>{t("aif_minor_desc_2")}</OutlineDash>
        <OutlineNote level={2}>{t("aif_minor_note_1")}</OutlineNote>
        <OutlineCircle>{t("aif_double_req")}</OutlineCircle>
        <OutlineDash>{t("aif_double_desc_1")}</OutlineDash>
        <OutlineDash>{t("aif_double_desc_2")}</OutlineDash>
        <OutlineDash>{t("aif_double_desc_3")}</OutlineDash>
        <OutlineDash>{t("aif_double_desc_4")}</OutlineDash>
        <OutlineNote level={2}>{t("aif_double_note_1")}</OutlineNote>
        <OutlineCircle>{t("aif_indiv_req")}</OutlineCircle>
        <OutlineDash>{t("aif_indiv_desc")}</OutlineDash>

        <OutlineTop marker={`${TOP[4]}.`}>{t("aif_research_req")}</OutlineTop>
        <OutlineCircle>{t("aif_research_desc")}</OutlineCircle>
        <OutlineNote level={1}>{t("aif_research_note")}</OutlineNote>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="font-bold text-gray-900 mb-2">
            ❏ {t('transitional_measures')}
          </p>
          <OutlineTop marker={`${TOP[0]}.`}>{t('aif_ug_transit')}</OutlineTop>
        </div>
      </div>
    </RequirementBox>
  );
};

export default AIFUndergraduate;
