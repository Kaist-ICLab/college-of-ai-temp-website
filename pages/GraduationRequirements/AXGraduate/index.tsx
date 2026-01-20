import React from 'react';
import { useTranslation } from '../../../i18n';
import {
  RequirementBox,
  RequirementTitle,
  SectionHeader,
  BulletItem,
  NoteText,
} from '../components/SharedComponents';

interface AXGraduateProps {
  language: 'en' | 'ko';
}

const AXGraduate: React.FC<AXGraduateProps> = ({ language }) => {
  const t = useTranslation(language);

  const renderMasterSection = () => (
    <RequirementBox className="mb-8 md:mb-12">
      <RequirementTitle title={t('ax_ms_title')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        <section>
          <SectionHeader title={t('ax_ms_grad_credits')} />
        </section>

        <section>
          <SectionHeader title={t('ax_ms_common_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ax_ms_common_1')}</BulletItem>
            <NoteText indented>{t('ax_ms_common_1_note')}</NoteText>
            <BulletItem>{t('ax_ms_common_2')}</BulletItem>
            <BulletItem>{t('ax_ms_common_3')}</BulletItem>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ax_ms_major_req')} />
        </section>

        <section>
          <SectionHeader title={t('ax_ms_elective_req')} />
          <div className="ml-3 sm:ml-4 space-y-4">
            <div className="space-y-1">
              <BulletItem>{t('ax_ms_elective_1')}</BulletItem>
              <NoteText indented>{t('ax_ms_elective_1_note')}</NoteText>
            </div>
            <BulletItem>{t('ax_ms_elective_2')}</BulletItem>
            <NoteText>{t('ax_ms_elective_note')}</NoteText>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ax_ms_research_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ax_ms_research_1')}</BulletItem>
            <BulletItem>{t('ax_ms_research_2')}</BulletItem>
          </div>
        </section>
      </div>
    </RequirementBox>
  );

  const renderDoctoralSection = () => (
    <RequirementBox className="mb-8 md:mb-12">
      <RequirementTitle title={t('ax_phd_title')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        <section>
          <SectionHeader title={t('ax_phd_grad_credits')} />
        </section>

        <section>
          <SectionHeader title={t('ax_phd_common_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ax_phd_common_1')}</BulletItem>
            <NoteText indented>{t('ax_phd_common_1_note')}</NoteText>
            <BulletItem>{t('ax_phd_common_2')}</BulletItem>
            <BulletItem>{t('ax_phd_common_3')}</BulletItem>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ax_phd_major_req')} />
        </section>

        <section>
          <SectionHeader title={t('ax_phd_elective_req')} />
          <div className="ml-3 sm:ml-4 space-y-4">
            <div className="space-y-1">
              <BulletItem>{t('ax_phd_elective_1')}</BulletItem>
              <NoteText indented>{t('ax_phd_elective_1_note')}</NoteText>
            </div>
            <div className="space-y-1">
              <NoteText>{t('ax_phd_elective_note_1')}</NoteText>
              <NoteText>{t('ax_phd_elective_note_2')}</NoteText>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ax_phd_research_req')} />
          <div className="ml-3 sm:ml-4 space-y-3">
            <BulletItem>{t('ax_phd_research_1')}</BulletItem>
            <NoteText indented>{t('ax_phd_research_1_note')}</NoteText>
            <BulletItem>{t('ax_phd_research_2')}</BulletItem>
          </div>
        </section>
      </div>
    </RequirementBox>
  );

  const renderIntegratedSection = () => (
    <RequirementBox>
      <RequirementTitle title={t('ax_int_title')} />

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
        <section>
          <SectionHeader title={t('ax_int_grad_credits')} />
        </section>

        <section>
          <SectionHeader title={t('ax_int_common_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ax_int_common_1')}</BulletItem>
            <NoteText indented>{t('ax_int_common_1_note')}</NoteText>
            <BulletItem>{t('ax_int_common_2')}</BulletItem>
            <BulletItem>{t('ax_int_common_3')}</BulletItem>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ax_int_major_req')} />
        </section>

        <section>
          <SectionHeader title={t('ax_int_elective_req')} />
          <div className="ml-3 sm:ml-4 space-y-4">
            <div className="space-y-1">
              <BulletItem>{t('ax_int_elective_1')}</BulletItem>
              <NoteText indented>{t('ax_int_elective_1_note')}</NoteText>
            </div>
            <NoteText>{t('ax_int_elective_note')}</NoteText>
          </div>
        </section>

        <section>
          <SectionHeader title={t('ax_int_research_req')} />
          <div className="ml-3 sm:ml-4 space-y-2">
            <BulletItem>{t('ax_int_research_1')}</BulletItem>
            <BulletItem>{t('ax_int_research_2')}</BulletItem>
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

export default AXGraduate;
