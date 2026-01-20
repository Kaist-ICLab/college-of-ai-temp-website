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

interface AXUndergraduateProps {
  language: 'en' | 'ko';
}

const AXUndergraduate: React.FC<AXUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <RequirementBox>
      <RequirementTitle title={t('ax_ug_title')} subtitle={t('ax_ug_subtitle')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        {/* Graduation Credits */}
        <section>
          <SectionHeader title={t('ax_ug_grad_credits')} />
          <div className="ml-3 sm:ml-4">
            <NoteText>{t('ax_ug_track_note')}</NoteText>
          </div>
        </section>

        {/* Basic Elective */}
        <section>
          <SectionHeader title={t('ax_ug_basic_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ax_ug_basic_1')}</BulletItem>
            <NoteText>{t('ax_ug_basic_note')}</NoteText>
          </div>
        </section>

        {/* Major */}
        <section>
          <SectionHeader title={t('ax_ug_major_req')} />

          <div className="ml-3 sm:ml-4 space-y-8">
            {/* Mandatory */}
            <div>
              <SubSectionHeader title={t('ax_ug_mandatory_title')} />
              <ul className="ml-3 sm:ml-4 space-y-2">
                {[1, 2, 3, 4].map(idx => (
                  <li key={idx} className="flex gap-2 items-start text-gray-500">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                    <span>{t(`ax_ug_mandatory_${idx}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elective */}
            <div>
              <SubSectionHeader title={t('ax_ug_elective_title')} />
              <div className="ml-3 sm:ml-4 space-y-3">
                <BulletItem className="text-gray-500">
                  <div>
                    <p>{t('ax_ug_elective_1')}</p>
                    <NoteText>{t('ax_ug_elective_1_note')}</NoteText>
                  </div>
                </BulletItem>
                <BulletItem className="text-gray-500">
                  {t('ax_ug_elective_2')}
                </BulletItem>
              </div>
            </div>
          </div>
        </section>

        {/* Intensive Major */}
        <section>
          <SectionHeader title={t('ax_ug_intensive_title')} />
          <p className="ml-3 sm:ml-4">{t('ax_ug_intensive_desc')}</p>
        </section>

        {/* Individually Designed */}
        <section>
          <SectionHeader title={t('ax_ug_inter_title')} />
          <p className="ml-3 sm:ml-4">{t('ax_ug_inter_desc')}</p>
        </section>

        {/* Minor */}
        <section>
          <SectionHeader title={t('ax_ug_minor_title')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <p>{t('ax_ug_minor_desc')}</p>
            <div className="space-y-1">
              <NoteText>{t('ax_ug_minor_note_1')}</NoteText>
              <NoteText>{t('ax_ug_minor_note_2')}</NoteText>
            </div>
          </div>
        </section>

        {/* Double Major */}
        <section>
          <SectionHeader title={t('ax_ug_double_title')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <p>{t('ax_ug_double_desc')}</p>
            <div className="space-y-1">
              <NoteText>{t('ax_ug_double_note_1')}</NoteText>
              <NoteText>{t('ax_ug_double_note_2')}</NoteText>
            </div>
          </div>
        </section>

        {/* Research */}
        <section>
          <SectionHeader title={t('ax_ug_research_title')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <p>{t('ax_ug_research_desc')}</p>
            <NoteText>{t('ax_ug_research_note')}</NoteText>
          </div>
        </section>
      </div>
    </RequirementBox>
  );
};

export default AXUndergraduate;
