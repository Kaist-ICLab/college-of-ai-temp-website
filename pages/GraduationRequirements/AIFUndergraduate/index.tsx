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

interface AIFUndergraduateProps {
  language: 'en' | 'ko';
}

const AIFUndergraduate: React.FC<AIFUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <RequirementBox>
      <RequirementTitle title={t('aif_ug_title')} subtitle={t('aif_ug_subtitle')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        {/* Graduation Credits */}
        <section>
          <SectionHeader title={t('aif_ug_grad_credits')} />
          <div className="ml-3 sm:ml-4">
            <NoteText>{t('aif_ug_double_major_note')}</NoteText>
          </div>
        </section>

        {/* Basic Elective */}
        <section>
          <SectionHeader title={t('aif_ug_basic_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('aif_ug_basic_1')}</BulletItem>
            <NoteText>{t('aif_ug_basic_note')}</NoteText>
          </div>
        </section>

        {/* Major */}
        <section>
          <SectionHeader title={t('aif_ug_major_req')} />

          <div className="ml-3 sm:ml-4 space-y-8">
            {/* Mandatory */}
            <div>
              <SubSectionHeader title={t('aif_ug_mandatory_title')} />
              <ul className="ml-3 sm:ml-4 space-y-2">
                {[1, 2, 3, 4].map(idx => (
                  <li key={idx} className="flex gap-2 items-start text-gray-500">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#004191] shrink-0"></span>
                    <span>{t(`aif_ug_mandatory_${idx}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elective */}
            <div>
              <SubSectionHeader title={t('aif_ug_elective_title')} />
              <div className="ml-3 sm:ml-4 space-y-3">
                <BulletItem className="text-gray-500">
                  {t('aif_ug_elective_1')}
                </BulletItem>
                <BulletItem className="text-gray-500">
                  <div>
                    <p>{t('aif_ug_elective_2')}</p>
                    <NoteText>{t('aif_ug_elective_2_note')}</NoteText>
                  </div>
                </BulletItem>
                <BulletItem className="text-gray-500">
                  {t('aif_ug_elective_3')}
                </BulletItem>
                <BulletItem className="text-gray-500">
                  {t('aif_ug_elective_4')}
                </BulletItem>
              </div>
            </div>
          </div>
        </section>

        {/* Minor */}
        <section>
          <SectionHeader title={t('aif_ug_minor_title')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <p>{t('aif_ug_minor_desc')}</p>
            <div className="space-y-1">
              <NoteText>{t('aif_ug_minor_note_1')}</NoteText>
              <NoteText>{t('aif_ug_minor_note_2')}</NoteText>
            </div>
          </div>
        </section>

        {/* Double Major */}
        <section>
          <SectionHeader title={t('aif_ug_double_title')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <p>{t('aif_ug_double_desc')}</p>
            <div className="space-y-1">
              <NoteText>{t('aif_ug_double_note_1')}</NoteText>
              <NoteText>{t('aif_ug_double_note_2')}</NoteText>
            </div>
          </div>
        </section>
      </div>
    </RequirementBox>
  );
};

export default AIFUndergraduate;
