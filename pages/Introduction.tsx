import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../App";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "../i18n";

const Introduction: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Content for the Welcome Message
  const deansMessageEn = `
    Welcome to the College of Artificial Intelligence at KAIST.
    Artificial Intelligence has become a fundamental force reshaping scientific innovation, industrial structures, and the way society functions. The College of AI at KAIST was established to move beyond short-term technological demands and to proactively define the future direction and role of AI. We seek not only to advance what AI can do, but also to reflect on what AI should do for society.
    The College provides an integrated educational and research framework that spans the full AI lifecycle, from algorithms and models to systems, applications, and human–AI interaction. Through interdisciplinary collaboration across science and engineering, including AI for Science, the College fosters new knowledge creation and accelerates scientific discovery.
    With a clear vision for the future, the College of AI is committed to educating individuals who combine strong foundations with problem-solving capability and social responsibility. We aim not merely to anticipate the future, but to shape it through AI. We invite your continued interest and support.
    Thank you.
  `;

  const deansMessageKo = `
    KAIST AI대학 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
    인공지능(AI)은 과학기술 혁신과 산업 구조, 나아가 사회의 작동 방식을 근본적으로 변화시키는 핵심 동력으로 자리 잡고 있습니다. KAIST AI대학은 이러한 변화에 대응해 단기적 기술 수요를 넘어, 미래 사회가 요구할 AI의 방향과 역할을 선도적으로 설계하기 위해 설립되었습니다. AI가 무엇을 할 수 있는가를 넘어, 무엇을 해야 하는가를 함께 고민하는 대학이 되고자 합니다.
    KAIST AI대학은 알고리즘과 모델, 시스템과 응용, 인간과 AI의 상호작용에 이르기까지 AI 전 주기를 아우르는 교육·연구 체계를 바탕으로, 다양한 과학기술 분야와의 융합을 통해 AI for Science를 포함한 초학제 연구를 확장해 나가고 있습니다.
    또한 미래 AI 시대에 요구되는 인재상을 중심에 두고, 기초 역량과 문제 해결 능력, 사회적 책임 의식을 함께 갖춘 인재 양성을 지향합니다. KAIST AI대학은 미래를 예측하는 데 그치지 않고, AI로 미래를 만들어가는 대학이 되고자 합니다. 지속적인 관심과 성원을 부탁드립니다.
    감사합니다.
  `;

  // Sidebar items mapped to match Navbar (Overview removed as requested)
  const sidebarItems = [
    { name: "welcome_msg", path: "/intro" },
    { name: "departments", path: "/departments" },
    { name: "degree_programs", path: "/academics" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          {/* Desktop Side Menu Toggle */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`hidden lg:flex absolute -left-10 top-0 z-20 bg-white border border-gray-200 text-[#004191] rounded-full p-2 shadow-md hover:bg-gray-50 transition-all duration-300 ${isSidebarCollapsed ? "translate-x-10 rotate-180" : "translate-x-64 -translate-x-1/2 rotate-0"}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Side Menu */}
          <aside
            className={`flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden
              ${isSidebarCollapsed ? "lg:w-0 lg:opacity-0 lg:mr-0" : "w-full lg:w-64 lg:opacity-100 lg:mr-4"}
            `}
          >
            <div className="min-w-[256px]">
              <h2 className="text-xl font-black text-gray-900 border-b-2 border-[#004191] pb-4 mb-6 uppercase tracking-tight">
                {t("introduction")}
              </h2>
              <ul className="space-y-1">
                {sidebarItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`group flex items-center p-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-blue-50 text-[#004191] font-bold shadow-sm"
                            : "text-gray-500 hover:text-[#004191] hover:bg-gray-50"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-3 transition-all ${
                            isActive
                              ? "bg-[#004191] scale-125"
                              : "bg-transparent group-hover:bg-gray-300"
                          }`}
                        ></span>
                        <span className="text-sm">{t(item.name)}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100 hidden lg:block">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {t("admissions")}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {language === "en"
                    ? "Join the community of global AI leaders."
                    : "글로벌 AI 리더의 공동체에 참여하세요."}
                </p>
                <Link
                  to="/admissions"
                  className="text-xs font-bold text-[#004191] hover:underline flex items-center"
                >
                  {t("read_more")}
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                {t("welcome_msg")}
              </h1>
              {/* Mobile Menu Indicator */}
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="lg:hidden flex items-center space-x-2 text-[#004191] font-bold text-xs bg-blue-50 px-4 py-2 rounded-lg"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isSidebarCollapsed ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span>
                  {isSidebarCollapsed ? "Show Sidebar" : "Hide Sidebar"}
                </span>
              </button>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-[2.5rem] overflow-hidden mb-12 flex flex-col md:flex-row gap-0 items-stretch">
              <div className="flex-grow p-8 md:p-14 order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#004191] mb-8 italic leading-tight">
                  "Shape the future through Artificial Intelligence."
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-6 text-justify text-base md:text-lg">
                  {(language === "en" ? deansMessageEn : deansMessageKo)
                    .split("\n")
                    .filter((p) => p.trim())
                    .map((para, i) => (
                      <p key={i}>{para.trim()}</p>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-50 flex justify-end">
                  <div className="text-right">
                    <p className="font-black text-gray-900 text-xl tracking-tight">
                      {language === "en" ? "Eunho Yang" : "양 은 호"}
                    </p>
                    <p className="text-[#004191] font-bold text-xs uppercase tracking-widest mt-1">
                      {language === "en"
                        ? "Dean, College of AI"
                        : "KAIST AI대학 학장"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-80 flex-shrink-0 order-1 md:order-2 bg-gray-50">
                <div className="h-full w-full grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsjemrQJ1aY8GXzDH7zyW2PeSr0NoRlUL0Q&s"
                    alt="Dean"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
