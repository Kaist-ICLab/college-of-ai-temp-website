import React from 'react';
import { useTranslation } from '../../../i18n';
import {
  RequirementBox,
  RequirementTitle,
  SectionHeader,
  SubSectionHeader,
  BulletItem,
  NoteText,
} from '../components/SharedComponents';
import './styles.css';

interface AICUndergraduateProps {
  language: 'en' | 'ko';
}

const AICUndergraduate: React.FC<AICUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <RequirementBox>
      <RequirementTitle title={t('aic_ug_title')} subtitle={t('aic_ug_subtitle')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        {/* Graduation Credits */}
        <section>
          <SectionHeader title={t('aic_grad_credits')} />
          <div className="ml-3 sm:ml-4 space-y-1">
            <NoteText>{t('aic_track_note')}</NoteText>
          </div>
        </section>

        {/* Basic Requirement */}
        <section>
          <SectionHeader title={t('aic_basic_req')} />
          <div className="ml-3 sm:ml-4 space-y-3">
            <div className="flex gap-2 items-start">
              <div className="mt-1.5 w-max">
                <div className="w-2 h-2 rounded-full border-2 border-[#004191]"></div>
              </div>
              <p>{t('aic_mas109_req')}</p>
            </div>
            <NoteText>{t('aic_basic_note')}</NoteText>
          </div>
        </section>

        {/* Major Requirements */}
        <section>
          <SectionHeader title={t('aic_major_req')} />

          <div className="ml-3 sm:ml-4 space-y-8">
            {/* Mandatory */}
            <div>
              <SubSectionHeader title={t('aic_mandatory_title')} />
              <ul className="ml-3 sm:ml-4 space-y-1.5">
                {[1, 2, 3, 4].map(idx => (
                  <li key={idx} className="flex gap-2 items-start text-gray-500">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                    <span>{t(`aic_mandatory_${idx}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elective */}
            <div>
              <SubSectionHeader title={t('aic_elective_title')} />
              <div className="ml-3 sm:ml-4 space-y-2">
                <BulletItem>{t('aic_elective_1')}</BulletItem>
                <BulletItem>
                  <div>
                    <p>{t('aic_elective_2')}</p>
                    <NoteText className="mt-1">{t('aic_elective_2_note')}</NoteText>
                  </div>
                </BulletItem>
                <BulletItem>{t('aic_elective_3')}</BulletItem>
              </div>
            </div>
          </div>
        </section>

        {/* Other Requirements */}
        <section className="space-y-10">
          <div>
            <SectionHeader title={t('aic_advanced_req')} />
            <p className="ml-3 sm:ml-4">{t('aic_advanced_desc')}</p>
          </div>

          <div>
            <SectionHeader title={t('aic_indiv_req')} />
            <p className="ml-3 sm:ml-4">{t('aic_indiv_desc')}</p>
          </div>

          <div>
            <SectionHeader title={t('aic_minor_req')} />
            <div className="ml-3 sm:ml-4 space-y-3">
              <p>{t('aic_minor_desc')}</p>
              <div className="space-y-1">
                <NoteText>{t('aic_minor_note_1')}</NoteText>
                <NoteText>{t('aic_minor_note_2')}</NoteText>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader title={t('aic_double_req')} />
            <div className="ml-3 sm:ml-4 space-y-3">
              <p>{t('aic_double_desc')}</p>
              <div className="space-y-1">
                <NoteText>{t('aic_double_note_1')}</NoteText>
                <NoteText>{t('aic_double_note_2')}</NoteText>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader title={t('aic_research_req')} />
            <div className="ml-3 sm:ml-4 space-y-3">
              <p>{t('aic_research_desc')}</p>
              <NoteText>{t('aic_research_note')}</NoteText>
            </div>
          </div>
        </section>
      </div>
    </RequirementBox>
  );
};

export default AICUndergraduate;
