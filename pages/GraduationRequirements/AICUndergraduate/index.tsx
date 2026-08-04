import React from "react";
import { useTranslation } from "../../../i18n";
import {
  RequirementBox,
  RequirementTitle,
  OutlineTop,
  OutlineCircle,
  OutlineDash,
  OutlineNote,
} from "../components/SharedComponents";

interface AICUndergraduateProps {
  language: "en" | "ko";
}

const TRANSIT_COURSES: {
  code: string;
  designation: { en: string; ko: string };
  name: { en: string; ko: string };
}[] = [
  { code: "CS.20300", designation: { en: "Elective", ko: "전공선택" }, name: { en: "System Programming", ko: "시스템프로그래밍" } },
  { code: "CS.30701", designation: { en: "Required", ko: "전공필수" }, name: { en: "Introduction to Deep Learning", ko: "딥러닝 개론" } },
  { code: "CS.40700", designation: { en: "Required", ko: "전공필수" }, name: { en: "Introduction to Artificial Intelligence", ko: "인공지능개론" } },
  { code: "CS.30704", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Introduction to Human-Computer Interaction", ko: "인간-컴퓨터 상호작용 개론" } },
  { code: "CS.40804", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Introduction to Computer Vision", ko: "컴퓨터 비전 개론" } },
  { code: "CS.30706", designation: { en: "Required", ko: "전공필수" }, name: { en: "Machine Learning", ko: "기계학습" } },
  { code: "CS.30707", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Introduction to Reinforcement Learning", ko: "강화학습 개론" } },
  { code: "CS.40701", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Graph Machine Learning and Mining", ko: "그래프 기계학습 및 마이닝" } },
  { code: "CS.40703", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Introduction to Social Computing", ko: "소셜 컴퓨팅 개론" } },
  { code: "CS.40705", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Machine Learning for Natural Language Processing", ko: "자연언어처리를 위한 기계학습" } },
  { code: "CS.40709", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Machine Learning for 3D Data", ko: "3차원 데이터를 위한 기계학습" } },
  { code: "CS.40805", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Machine Learning for Computer Vision", ko: "컴퓨터비전을 위한 기계학습" } },
  { code: "CS.40806", designation: { en: "Elective", ko: "전공선택" }, name: { en: "Wearable User Interface", ko: "웨어러블 사용자 인터페이스" } },
  { code: "CS.50605", designation: { en: "Elective (M.S./Ph.D.)", ko: "선택(석/박사)" }, name: { en: "IoT Data Science", ko: "사물인터넷 데이터 사이언스" } },
  { code: "CS.50804", designation: { en: "Elective (M.S./Ph.D.)", ko: "선택(석/박사)" }, name: { en: "Human-Computer Interaction", ko: "인간과 컴퓨터 상호작용" } },
  { code: "CS.50705", designation: { en: "Elective (M.S./Ph.D.)", ko: "선택(석/박사)" }, name: { en: "AI Ethics", ko: "인공지능 윤리" } },
];

const TOP_MARKERS_KO = ["가", "나", "다", "라", "마"];
const TOP_MARKERS_EN = ["A", "B", "C", "D", "E"];
const PROVISO_MARKERS_KO = ["가", "나"];
const PROVISO_MARKERS_EN = ["A", "B"];

const AICUndergraduate: React.FC<AICUndergraduateProps> = ({ language }) => {
  const t = useTranslation(language);
  const TOP = language === "ko" ? TOP_MARKERS_KO : TOP_MARKERS_EN;
  const PROVISO = language === "ko" ? PROVISO_MARKERS_KO : PROVISO_MARKERS_EN;

  return (
    <RequirementBox>
      <RequirementTitle
        title={t("aic_ug_title")}
        subtitle={t("aic_ug_subtitle")}
      />

      <div className="text-[15px] leading-relaxed text-gray-700">
        <OutlineTop marker={`${TOP[0]}.`}>{t("aic_grad_credits")}</OutlineTop>
        <OutlineNote level={1}>{t("aic_track_note")}</OutlineNote>

        <OutlineTop marker={`${TOP[1]}.`}>{t("aic_basic_req")}</OutlineTop>
        <OutlineCircle>{t("aic_mas109_req")}</OutlineCircle>
        <OutlineCircle>{t("aic_mas109_req_2")}</OutlineCircle>
        <OutlineNote level={1}>{t("aic_basic_note")}</OutlineNote>

        <OutlineTop marker={`${TOP[2]}.`}>{t("aic_major_req")}</OutlineTop>
        <OutlineCircle>{t("aic_mandatory_title")}</OutlineCircle>
        <OutlineDash>{t("aic_mandatory_1")}</OutlineDash>
        <OutlineDash>{t("aic_mandatory_2")}</OutlineDash>
        <OutlineDash>{t("aic_mandatory_3")}</OutlineDash>
        <OutlineNote level={2}>{t("aic_mandatory_note_1")}</OutlineNote>
        <OutlineNote level={2}>{t("aic_mandatory_note_2")}</OutlineNote>
        <OutlineCircle>{t("aic_elective_title")}</OutlineCircle>
        <OutlineDash>{t("aic_elective_1")}</OutlineDash>
        <OutlineDash>{t("aic_elective_2")}</OutlineDash>
        <OutlineNote level={2}>{t("aic_elective_2_note")}</OutlineNote>

        <OutlineTop marker={`${TOP[3]}.`}>{t("aic_other_major_title")}</OutlineTop>
        <OutlineCircle>{t("aic_advanced_req")}</OutlineCircle>
        <OutlineDash>{t("aic_advanced_desc")}</OutlineDash>
        <OutlineCircle>{t("aic_minor_req")}</OutlineCircle>
        <OutlineDash>{t("aic_minor_desc")}</OutlineDash>
        <OutlineDash>{t("aic_minor_desc_2")}</OutlineDash>
        <OutlineNote level={2}>{t("aic_minor_note_1")}</OutlineNote>
        <OutlineCircle>{t("aic_double_req")}</OutlineCircle>
        <OutlineDash>{t("aic_double_desc")}</OutlineDash>
        <OutlineDash>{t("aic_double_desc_2")}</OutlineDash>
        <OutlineDash>{t("aic_double_desc_3")}</OutlineDash>
        <OutlineNote level={2}>{t("aic_double_note_1")}</OutlineNote>
        <OutlineCircle>{t("aic_indiv_req")}</OutlineCircle>
        <OutlineDash>{t("aic_indiv_desc")}</OutlineDash>

        <OutlineTop marker={`${TOP[4]}.`}>{t("aic_research_req")}</OutlineTop>
        <OutlineCircle>{t("aic_research_desc")}</OutlineCircle>
        <OutlineNote level={1}>{t("aic_research_note")}</OutlineNote>

        {/* Transitional Measures */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="font-bold text-gray-900 mb-2">
            ❏ {t("transitional_measures")}
          </p>
          <OutlineTop marker={`${PROVISO[0]}.`}>{t("aic_ug_transit")}</OutlineTop>
          <OutlineTop marker={`${PROVISO[1]}.`}>{t("aic_ug_transit_2")}</OutlineTop>
          <div className="ml-4 sm:ml-5 mt-3 overflow-x-auto rounded-2xl border border-gray-100">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-black text-gray-400 uppercase tracking-widest">
                    {language === "en" ? "Recognition" : "AIC 인정 과목구분"}
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-black text-gray-400 uppercase tracking-widest">
                    {language === "en" ? "Code" : "교과목코드"}
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-black text-gray-400 uppercase tracking-widest">
                    {language === "en" ? "Course Name" : "교과목명"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {TRANSIT_COURSES.map((course) => (
                  <tr key={course.code}>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-500">
                      {language === "en" ? course.designation.en : course.designation.ko}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <code className="text-[#002380] font-bold">{course.code}</code>
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {language === "en" ? course.name.en : course.name.ko}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </RequirementBox>
  );
};

export default AICUndergraduate;
