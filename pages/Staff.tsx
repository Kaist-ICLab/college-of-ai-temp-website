import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "../i18n";
import { useSEO } from "../hooks/useSEO";

interface StaffMember {
  nameKo: string;
  nameEn: string;
  dutiesKo: string[];
  dutiesEn: string[];
  phone: string;
}

const Staff: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  useSEO();

  const staffData: StaffMember[] = [
    {
      nameKo: "김세림",
      nameEn: "Kim Serim",
      dutiesKo: ["팀 업무 총괄"],
      dutiesEn: ["Team Operations Management"],
      phone: "1209",
    },
    {
      nameKo: "박현제",
      nameEn: "Park Hyunje",
      dutiesKo: [
        "AI사업 기획·운영",
        "AI대학 학과장회의 및 주요 위원회 지원",
        "예산 관리",
        "별정직 인사 관리",
      ],
      dutiesEn: [
        "AI Project Planning & Operation",
        "Support for Department Head Meetings & Key Committees",
        "Budget Management",
        "Contract-based Staff HR Management",
      ],
      phone: "1202",
    },
    {
      nameKo: "송채빈",
      nameEn: "Song Chaebin",
      dutiesKo: ["대학원 입시", "석박사과정 지원"],
      dutiesEn: [
        "Graduate School Admissions",
        "Support for Master's & Ph.D. Programs",
      ],
      phone: "1204",
    },
    {
      nameKo: "조앵녀",
      nameEn: "Jo Aengnyeo",
      dutiesKo: ["교원인사 (전임/비전임)", "문서 관리"],
      dutiesEn: ["Faculty HR (Full-time/Part-time)", "Document Management"],
      phone: "1206",
    },
    {
      nameKo: "장수영",
      nameEn: "Jang Suyoung",
      dutiesKo: ["학사/교과", "학사과정 지원"],
      dutiesEn: ["Academic Affairs/Curriculum", "Undergraduate Program Support"],
      phone: "1205",
    },
    {
      nameKo: "조하늬",
      nameEn: "Jo Hanui",
      dutiesKo: ["홍보", "연구비/예산", "AI사업 운영·지원"],
      dutiesEn: [
        "Public Relations",
        "Research Funding & Budget",
        "AI Project Operation & Support",
      ],
      phone: "1203",
    },
    {
      nameKo: "이세영",
      nameEn: "Lee Seyoung",
      dutiesKo: [
        "AI학부 (AI컴퓨팅학과, AI시스템학과) 지원",
        "국제협력",
      ],
      dutiesEn: [
        "Support for School of AI (Dept. of AI Computing, Dept. of AI Systems)",
        "International Cooperation",
      ],
      phone: "1207",
    },
    {
      nameKo: "이대수",
      nameEn: "Lee Daesoo",
      dutiesKo: [
        "AX학과, AI미래학과 지원",
        "시설 및 공간·자산 관리",
        "연구실 안전·보안, 전문연구요원 복무 관리",
      ],
      dutiesEn: [
        "Support for AX Dept. & Dept. of AI and Future Studies",
        "Facility & Space/Asset Management",
        "Lab Safety & Security, Alternative Military Service Researcher Management",
      ],
      phone: "1208",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex justify-center mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight text-center relative">
            {t("staff_guide")}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#002380] rounded-full"></div>
          </h1>
        </div>


        <div className="max-w-5xl mx-auto overflow-hidden rounded-[1.5rem] border border-gray-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#002380] text-white">
                  <th className="px-4 py-4 md:px-6 font-bold text-sm md:text-base w-32 md:w-40">
                    {language === "en" ? "Name" : "성명"}
                  </th>
                  <th className="px-4 py-4 md:px-6 font-bold text-sm md:text-base">
                    {language === "en" ? "Duties" : "업무"}
                  </th>
                  <th className="px-4 py-4 md:px-6 font-bold text-sm md:text-base w-32 md:w-40">
                    {language === "en" ? "Phone" : "전화번호"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((member, idx) => (
                  <tr
                    key={member.nameKo}
                    className={`border-t border-gray-100 ${idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                      }`}
                  >
                    <td className="px-4 py-4 md:px-6 align-top font-bold text-gray-900 text-sm md:text-base whitespace-nowrap">
                      {language === "en" ? member.nameEn : member.nameKo}
                    </td>
                    <td className="px-4 py-4 md:px-6 align-top">
                      <ul className="space-y-1.5">
                        {(language === "en" ? member.dutiesEn : member.dutiesKo).map(
                          (duty, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                            >
                              <span className="mt-2 w-1.5 h-1.5 bg-[#002380] rounded-full flex-shrink-0" />
                              <span>{duty}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </td>
                    <td className="px-4 py-4 md:px-6 align-top text-gray-700 font-semibold text-sm md:text-base whitespace-nowrap">
                      {member.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 text-sm md:text-base text-gray-600 space-y-1 px-2">
          <p>
            <span className="font-bold text-gray-900">
              {language === "en" ? "Address: " : "주소: "}
            </span>
            {language === "en"
              ? "Rm. C309, 3F, KI Bldg., KAIST, College of AI Academic Affairs Team"
              : "KAIST KI빌딩 3층 C309, AI대학교학팀"}
          </p>
          <p>
            <span className="font-bold text-gray-900">
              {language === "en" ? "Main Line: " : "대표전화: "}
            </span>
            042-350-1202~1209
          </p>
          <p>
            <span className="font-bold text-gray-900">
              {language === "en" ? "Fax: " : "팩스: "}
            </span>
            042-350-1200
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
