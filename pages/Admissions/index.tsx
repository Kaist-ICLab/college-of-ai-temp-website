import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useTranslation } from "../../i18n";
import { DEPTS, DeptId } from "../GraduationRequirements/types";
import "./styles.css";
import { useSEO } from "../../hooks/useSEO";
import {
  eligibilityRows,
  categoriesRows,
  schedule1Rows,
  schedule2Rows,
  advisorTimingRows,
  aicAdvisorBullets,
  aisAdvisorBullets,
  axAdvisorBullets,
  aifAdvisorBullets,
} from "../../data/admissions";

type AdmissionTab = "ug" | "grad";

// ── Reusable UI ──────────────────────────────────────────

const SectionLabel: React.FC<{ label: string; title: string }> = ({
  label,
  title,
}) => (
  <h3 className="text-base font-bold text-gray-800 mb-4">
    <span className="text-[#002380] mr-1">{label}</span> {title}
  </h3>
);

const InfoTable: React.FC<{
  headers: string[];
  rows: React.ReactNode[][];
  colWidths?: string[];
}> = ({ headers, rows, colWidths }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full text-sm table-fixed">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          {headers.map((h, i) => (
            <th
              key={i}
              className={`px-4 py-3 text-left font-bold text-gray-700 whitespace-nowrap ${colWidths?.[i] ?? ""}`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr
            key={ri}
            className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
          >
            {row.map((cell, ci) => (
              <td
                key={ci}
                className="px-4 py-3 text-gray-600 whitespace-pre-line align-top"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

interface KoGradContentProps {
  degreePrograms: string;
  advisorBullets: string[];
  extraContent?: React.ReactNode;
}

const KoGradContent: React.FC<KoGradContentProps> = ({
  degreePrograms,
  advisorBullets,
  extraContent,
}) => (
  <div className="p-6 md:p-8 space-y-10">
    {extraContent && <div className="mb-2">{extraContent}</div>}

    {/* 가. 학위과정 */}
    <div>
      <SectionLabel label="가." title="학위과정" />
      <p className="text-gray-600 text-sm leading-relaxed">{degreePrograms}</p>
    </div>

    {/* 나. 접수방법 */}
    <div>
      <SectionLabel label="나." title="접수방법" />
      <p className="text-gray-600 text-sm">
        KAIST 입시시스템을 통한 인터넷 접수
      </p>
    </div>

    {/* 다. 지원자격 */}
    <div>
      <SectionLabel label="다." title="지원자격" />
      <InfoTable
        headers={["과정", "지원 자격"]}
        colWidths={["w-44", ""]}
        rows={eligibilityRows.map((r) => [r.course, r.criteria])}
      />
    </div>

    {/* 라. 학생구분 */}
    <div>
      <SectionLabel label="라." title="학생구분" />
      <InfoTable
        headers={["구분", "내용"]}
        colWidths={["w-36", ""]}
        rows={categoriesRows.map((r) => [r.type, r.desc])}
      />
    </div>

    {/* 마. 지원일정 및 접수방법 */}
    <div>
      <SectionLabel label="마." title="지원일정 및 접수방법" />
      <p className="text-sm font-semibold text-gray-700 mb-3">
        ■ 2026학년도 가을학기 입학 신입생 입학전형 일정표
      </p>
      <InfoTable
        headers={["구분", "지원일정", "접수방법"]}
        colWidths={["w-34", "w-54", ""]}
        rows={schedule1Rows.map(
          (r) => [r.category, r.timeline, r.method] as React.ReactNode[],
        )}
      />
      <p className="text-sm font-semibold text-gray-700 mt-8 mb-3">
        ■ 2026학년도 가을학기 입학 (KAIST학사재학생) 학·석박통합연계과정 및
        (KAIST 석사과정 재학생 대상) 석사·박사학위통합과정 입학전형 일정표
      </p>
      <InfoTable
        headers={["구분", "지원일정", "접수방법"]}
        colWidths={["w-34", "w-54", ""]}
        rows={schedule2Rows.map(
          (r) => [r.category, r.timeline, r.method] as React.ReactNode[],
        )}
      />
    </div>

    {/* 바. 지도교수 신청 관련 사항 */}
    <div>
      <SectionLabel label="바." title="지도교수 신청 관련 사항" />
      <ul className="space-y-3 mb-6">
        {advisorBullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-[#002380] mt-0.5 shrink-0">·</span>
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm font-semibold text-gray-700 mb-3">
        · 지도교수 신청 시기
      </p>
      <InfoTable
        headers={["과정", "신청 시기"]}
        colWidths={["w-44", ""]}
        rows={advisorTimingRows.map((r) => [r.course, r.timing])}
      />
    </div>
  </div>
);



// ── Main Component ───────────────────────────────────────

const Admissions: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const location = useLocation();

  useSEO();

  const getInitialTab = (): AdmissionTab => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    return tab === "grad" ? "grad" : "ug";
  };

  const [activeTab, setActiveTab] = useState<AdmissionTab>(getInitialTab);
  const [activeDept, setActiveDept] = useState<DeptId>("aic");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "grad" || tab === "ug") setActiveTab(tab);
  }, [location.search]);

  const ugLinks = [
    {
      title: "admission_home",
      desc: "admission_home_desc",
      url: "https://admission.kaist.ac.kr/home",
      icon: (
        <svg
          className="card-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      fullWidth: true,
    },
    {
      title: "undergraduate_korean",
      desc: "undergraduate_korean_desc",
      url: "https://admission.kaist.ac.kr/undergraduate",
      icon: null,
      fullWidth: false,
    },
    {
      title: "undergraduate_intl",
      desc: "undergraduate_intl_desc",
      url: "https://admission.kaist.ac.kr/intl-undergraduate",
      icon: null,
      fullWidth: false,
    },
  ];

  const gradIntlLink = {
    title: "graduate_intl",
    desc: "graduate_intl_desc",
    url: "https://admission.kaist.ac.kr/intl-graduate",
  };

  const koGradDeptContent: Record<DeptId, React.ReactNode> = {
    aic: (
      <KoGradContent
        degreePrograms="석사과정, 박사과정, (KAIST석사재학생) 석박사 통합과정, (KAIST학사재학생) 학∙석박통합연계과정"
        advisorBullets={aicAdvisorBullets}
      />
    ),
    ais: (
      <KoGradContent
        degreePrograms="석사과정, 박사과정, 석박사 통합과정, (KAIST석사재학생) 석박사 통합과정, (KAIST학사재학생) 학∙석박통합연계과정"
        advisorBullets={aisAdvisorBullets}
      />
    ),
    ax: (
      <KoGradContent
        degreePrograms="석사과정, 박사과정, (KAIST석사재학생) 석박사 통합과정, (KAIST학사재학생) 학∙석박통합연계과정"
        advisorBullets={axAdvisorBullets}
      />
    ),
    aif: (
      <KoGradContent
        degreePrograms="석사과정, 박사과정, (KAIST석사재학생) 석박사 통합과정, (KAIST학사재학생) 학∙석박통합연계과정"
        advisorBullets={aifAdvisorBullets}
      />
    ),
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />

      {/* Hero */}
      <div className="bg-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-7">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {t("admissions")}
            </h1>
            <div className="w-20 h-1 bg-[#002380] rounded-full" />
            <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
              {t("admissions_hero_desc")}
            </p>
          </div>
        </div>
      </div>

      {/* ── Undergraduate ── */}
      {activeTab === "ug" && (
        <div className="admissions-container">
          <div className="links-grid">
            {ugLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-card group ${link.fullWidth ? "col-span-full" : ""}`}
              >
                {link.icon && (
                  <div className="card-icon-container">{link.icon}</div>
                )}
                <div className="card-content">
                  <h3 className="card-title">{t(link.title)}</h3>
                  <p className="card-desc">{t(link.desc)}</p>
                </div>
                <div className="card-action-container">
                  <span className="card-action">
                    {t("read_more")}
                    <svg
                      className="action-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── Graduate (English) ── */}
      {activeTab === "grad" && language === "en" && (
        <div className="admissions-container">
          <div className="links-grid">
            <a
              href={gradIntlLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card group col-span-full"
            >
              <div className="card-content">
                <h3 className="card-title">{t(gradIntlLink.title)}</h3>
                <p className="card-desc">{t(gradIntlLink.desc)}</p>
              </div>
              <div className="card-action-container">
                <span className="card-action">
                  {t("read_more")}
                  <svg
                    className="action-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* ── Graduate (Korean) — dept sub-tabs ── */}
      {activeTab === "grad" && language === "ko" && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Dept selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {DEPTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={`px-4 py-2 rounded-lg text-sm font-normal transition-all border ${activeDept === dept.id
                    ? "bg-[#002380] border-[#002380] text-white shadow-md"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
              >
                {t(dept.name)}
              </button>
            ))}
          </div>

          {/* Dept content */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {koGradDeptContent[activeDept]}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admissions;
