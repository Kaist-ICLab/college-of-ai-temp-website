import React from 'react';
import { useTranslation } from '../../../i18n';
import {
  RequirementBox,
  RequirementTitle,
  SectionHeader,
  BulletItem,
  NoteText,
} from '../components/SharedComponents';

interface AISGraduateProps {
  language: 'en' | 'ko';
}

const AISGraduate: React.FC<AISGraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  // AIS has a unique structure with different note patterns per program
  const renderMasterSection = () => (
    <RequirementBox className="mb-8 md:mb-12">
      <RequirementTitle title={t('ais_ms_title')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        <section>
          <SectionHeader title={t('ais_ms_grad_credits')} />
        </section>

        <section>
          <SectionHeader title={t('ais_ms_common_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <NoteText>{t('ais_ms_common_note')}</NoteText>
            <BulletItem>{t('ais_ms_common_1')}</BulletItem>
            <BulletItem>{t('ais_ms_common_2')}</BulletItem>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ais_ms_major_req')} />
        </section>

        <section>
          <SectionHeader title={t('ais_ms_elective_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ais_ms_elective_1')}</BulletItem>
            <NoteText indented>{t('ais_ms_elective_note')}</NoteText>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ais_ms_research_req')} />
          <div className="ml-3 sm:ml-4">
            <BulletItem>{t('ais_ms_research_1')}</BulletItem>
          </div>
        </section>

        {/* Transitional Measures */}
        <section>
          <SectionHeader title={t('transitional_measures')} />
          <div className="ml-3 sm:ml-4">
            <p>{t('ais_ms_transit')}</p>
          </div>
        </section>
      </div>
    </RequirementBox>
  );

  const renderDoctoralSection = () => (
    <RequirementBox className="mb-8 md:mb-12">
      <RequirementTitle title={t('ais_phd_title')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        <section>
          <SectionHeader title={t('ais_phd_grad_credits')} />
        </section>

        <section>
          <SectionHeader title={t('ais_phd_common_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <NoteText>{t('ais_phd_common_note')}</NoteText>
            <BulletItem>{t('ais_phd_common_1')}</BulletItem>
            <BulletItem>{t('ais_phd_common_2')}</BulletItem>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ais_phd_major_req')} />
        </section>

        <section>
          <SectionHeader title={t('ais_phd_elective_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ais_phd_elective_1')}</BulletItem>
            <NoteText indented>{t('ais_phd_elective_note_1')}</NoteText>
            <NoteText indented>{t('ais_phd_elective_note_2')}</NoteText>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ais_phd_research_req')} />
          <div className="ml-3 sm:ml-4">
            <BulletItem>{t('ais_phd_research_1')}</BulletItem>
          </div>
        </section>

        {/* Transitional Measures */}
        <section>
          <SectionHeader title={t('transitional_measures')} />
          <div className="ml-3 sm:ml-4">
            <p>{t('ais_phd_transit')}</p>
          </div>
        </section>
      </div>
    </RequirementBox>
  );

  const renderIntegratedSection = () => (
    <RequirementBox>
      <RequirementTitle title={t('ais_int_title')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        <section>
          <SectionHeader title={t('ais_int_grad_credits')} />
        </section>

        <section>
          <SectionHeader title={t('ais_int_common_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <NoteText>{t('ais_int_common_note')}</NoteText>
            <BulletItem>{t('ais_int_common_1')}</BulletItem>
            <BulletItem>{t('ais_int_common_2')}</BulletItem>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ais_int_major_req')} />
        </section>

        <section>
          <SectionHeader title={t('ais_int_elective_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ais_int_elective_1')}</BulletItem>
            <NoteText indented>{t('ais_int_elective_note_1')}</NoteText>
            <NoteText indented>{t('ais_int_elective_note_2')}</NoteText>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ais_int_research_req')} />
          <div className="ml-3 sm:ml-4">
            <BulletItem>{t('ais_int_research_1')}</BulletItem>
          </div>
        </section>

        {/* Transitional Measures */}
        <section>
          <SectionHeader title={t('transitional_measures')} />
          <div className="ml-3 sm:ml-4">
            <p>{t('ais_int_transit')}</p>
          </div>
        </section>
      </div>
    </RequirementBox>
  );

  return (
    <div className="space-y-8 md:space-y-12">
      {renderMasterSection()}
      {renderDoctoralSection()}
      {renderIntegratedSection()}
    </div>
  );
};

export default AISGraduate;
