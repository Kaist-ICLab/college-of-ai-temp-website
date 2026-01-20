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

interface AISUndergraduateProps {
  language: 'en' | 'ko';
}

const AISUndergraduate: React.FC<AISUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <RequirementBox>
      <RequirementTitle title={t('ais_ug_title')} subtitle={t('ais_ug_subtitle')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        {/* Graduation Credits */}
        <section>
          <SectionHeader title={t('ais_ug_grad_credits')} />
          <div className="ml-3 sm:ml-4 space-y-1">
            <NoteText>{t('ais_ug_track_note')}</NoteText>
          </div>
        </section>

        {/* Special Note / Basic Choice */}
        <section>
          <SectionHeader title={t('ais_ug_special_note_title')} />
          <div className="ml-3 sm:ml-4 space-y-6">
            <div>
              <p className="font-bold text-gray-800 mb-2">{t('ais_ug_basic_req')}</p>
              <div className="ml-2">
                <BulletItem>{t('ais_ug_basic_1')}</BulletItem>
              </div>
              <div className="mt-2 space-y-1 ml-2">
                <NoteText>{t('ais_ug_basic_double_note')}</NoteText>
                <div className="ml-3">
                  <BulletItem>{t('ais_ug_basic_double_1')}</BulletItem>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major */}
        <section>
          <SectionHeader title={t('ais_ug_major_req')} />

          <div className="ml-3 sm:ml-4 space-y-8">
            {/* Mandatory */}
            <div>
              <SubSectionHeader title={t('ais_ug_mandatory_title')} />
              <ul className="ml-3 sm:ml-4 space-y-3">
                {[1, 2, 3, 4].map(idx => (
                  <li key={idx} className="flex gap-2 items-start text-gray-500">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                    <span>{t(`ais_ug_mandatory_${idx}`)}</span>
                  </li>
                ))}
              </ul>
              <NoteText className="mt-3 ml-3 sm:ml-4">{t('ais_ug_mandatory_note')}</NoteText>
            </div>

            {/* Elective */}
            <div>
              <SubSectionHeader title={t('ais_ug_elective_title')} />
              <div className="ml-3 sm:ml-4 space-y-2">
                {[1, 2, 3].map(idx => (
                  <BulletItem key={idx} className="text-gray-500">
                    {t(`ais_ug_elective_${idx}`)}
                  </BulletItem>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Major Types */}
        <section className="space-y-10">
          <div>
            <SectionHeader title={t('ais_ug_intensive_title')} />
          </div>

          <div>
            <SectionHeader title={t('ais_ug_inter_title')} />
            <p className="ml-3 sm:ml-4">{t('ais_ug_inter_desc')}</p>
          </div>

          <div>
            <SectionHeader title={t('ais_ug_minor_title')} />
            <div className="ml-3 sm:ml-4 space-y-2">
              <p>{t('ais_ug_minor_desc')}</p>
              <NoteText>{t('ais_ug_minor_note')}</NoteText>
            </div>
          </div>

          <div>
            <SectionHeader title={t('ais_ug_double_title')} />
            <p className="ml-3 sm:ml-4">{t('ais_ug_double_desc')}</p>
          </div>

          <div>
            <SectionHeader title={t('ais_ug_research_title')} />
            <div className="ml-3 sm:ml-4 space-y-3">
              <p>{t('ais_ug_research_desc')}</p>
              <div className="space-y-2">
                <NoteText>{t('ais_ug_research_note_1')}</NoteText>
                <NoteText>{t('ais_ug_research_note_2')}</NoteText>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RequirementBox>
  );
};

export default AISUndergraduate;
