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

interface AISUndergraduateProps {
  language: 'en' | 'ko';
}

const TOP_MARKERS_KO = ['가', '나', '다', '라', '마'];
const TOP_MARKERS_EN = ['A', 'B', 'C', 'D', 'E'];

const AISUndergraduate: React.FC<AISUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);
  const TOP = language === 'ko' ? TOP_MARKERS_KO : TOP_MARKERS_EN;

  return (
    <RequirementBox>
      <RequirementTitle title={t('ais_ug_title')} subtitle={t('ais_ug_subtitle')} />

      <div className="text-[15px] leading-relaxed text-gray-700">
        <OutlineTop marker={`${TOP[0]}.`}>{t('ais_ug_grad_credits')}</OutlineTop>
        <OutlineNote level={1}>{t('ais_ug_track_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[1]}.`}>{t('ais_ug_basic_req')}</OutlineTop>
        <OutlineCircle>{t('ais_ug_basic_1')}</OutlineCircle>
        <OutlineCircle>{t('ais_ug_basic_2')}</OutlineCircle>
        <OutlineNote level={1}>{t('ais_ug_basic_double_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[2]}.`}>{t('ais_ug_major_req')}</OutlineTop>
        <OutlineCircle>{t('ais_ug_mandatory_title')}</OutlineCircle>
        {[1, 2, 3].map((idx) => (
          <OutlineDash key={idx}>{t(`ais_ug_mandatory_${idx}`)}</OutlineDash>
        ))}
        <OutlineNote level={2}>{t('ais_ug_mandatory_note_1')}</OutlineNote>
        <OutlineNote level={2}>{t('ais_ug_mandatory_note_2')}</OutlineNote>
        <OutlineCircle>{t('ais_ug_elective_title')}</OutlineCircle>
        {[1, 2].map((idx) => (
          <OutlineDash key={idx}>{t(`ais_ug_elective_${idx}`)}</OutlineDash>
        ))}
        <OutlineNote level={2}>{t('ais_ug_elective_note')}</OutlineNote>

        <OutlineTop marker={`${TOP[3]}.`}>{t("ais_other_major_title")}</OutlineTop>
        <OutlineCircle>{t("ais_advanced_req")}</OutlineCircle>
        <OutlineDash>{t("ais_advanced_desc")}</OutlineDash>
        <OutlineCircle>{t("ais_minor_req")}</OutlineCircle>
        <OutlineDash>{t("ais_minor_desc_1")}</OutlineDash>
        <OutlineDash>{t("ais_minor_desc_2")}</OutlineDash>
        <OutlineDash>{t("ais_minor_desc_3")}</OutlineDash>
        <OutlineNote level={2}>{t("ais_minor_note_1")}</OutlineNote>
        <OutlineCircle>{t("ais_double_req")}</OutlineCircle>
        <OutlineDash>{t("ais_double_desc_1")}</OutlineDash>
        <OutlineDash>{t("ais_double_desc_2")}</OutlineDash>
        <OutlineDash>{t("ais_double_desc_3")}</OutlineDash>
        <OutlineNote level={2}>{t("ais_double_note_1")}</OutlineNote>
        <OutlineCircle>{t("ais_indiv_req")}</OutlineCircle>
        <OutlineDash>{t("ais_indiv_desc")}</OutlineDash>

        <OutlineTop marker={`${TOP[4]}.`}>{t("ais_research_req")}</OutlineTop>
        <OutlineCircle>{t("ais_research_desc")}</OutlineCircle>
        <OutlineNote level={1}>{t("ais_research_note")}</OutlineNote>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="font-bold text-gray-900 mb-2">
            ❏ {t('transitional_measures')}
          </p>
          <OutlineTop marker={`${TOP[0]}.`}>{t('ais_ug_transit')}</OutlineTop>
          <OutlineTop marker={`${TOP[1]}.`}>{t('ais_ug_transit_2')}</OutlineTop>
          <OutlineDash>{t("ais_ug_transit_list")}</OutlineDash>
        </div>
      </div>
    </RequirementBox>
  );
};

export default AISUndergraduate;
