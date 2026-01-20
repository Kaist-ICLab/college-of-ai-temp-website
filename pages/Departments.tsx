import React, { useContext } from "react";
import { LanguageContext } from "../App";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "../i18n";

const Departments: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  const deptData = [
    {
      id: "computing",
      name: t("dept_ai_computing"),
      summary:
        language === "en"
          ? "Cultivates AI-native talent capable of designing, developing, and operating cutting-edge AI models (e.g., generative AI, multimodal AI, agentic AI) through education grounded in AI theory, algorithms, mathematics, and systems. Specifically, this department cultivates talent that creates AI models themselves. It integrates full-stack software competencies into the curriculum, spanning model development through service design, development, and operation—including large language model (LLM) optimization, NPU-friendly algorithm design, distributed learning, and MLOps. This provides specialized AI education distinct from traditional computer science, fostering designer-type talent for the AI era."
          : "AI 이론, 알고리즘, 수학, 시스템 기반 교육을 통해 최신 AI 모델(예: 생성형 AI, 멀티모달 AI, 에이전틱 AI)을 설계·개발·운영할 수 있는 AI 핵심 인재(AI-Native)를 양성한다. 즉, AI 모델 자체를 만드는 인재를 키우는 학과로, 대규모 언어모델(LLM) 최적화, NPU 친화적 알고리즘 설계, 분산 학습 및 MLOps 등 모델 개발부터 서비스 설계·개발·운영까지 잇는 풀스택 소프트웨어 역량을 교육과정에 통합한다. 이를 통해 전통적인 컴퓨터 공학 교육과 차별화된 AI 전문 교육을 제공하며, AI 시대의 설계자형 인재를 육성한다.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      id: "systems",
      name: t("dept_ai_systems"),
      summary:
        language === "en"
          ? "Cultivates integrated AI systems experts spanning silicon and hardware for AI operation, algorithms and software, and application systems. Specifically, through AI system-related education and research functions spanning the entire field of electrical and electronic engineering—including AI semiconductors, on-device AI, physical AI system design, system architecture and AI security, ultra-low-latency AI-communication convergence systems, advanced packaging/heterogeneous integration systems and high-efficiency heat dissipation, and smart power systems—it produces experts equipped with capabilities in designing and optimizing high-performance, low-power AI semiconductors and AI computing systems. This cultivates talent to serve as the infrastructure layer in the AI era—experts integrating AI hardware (HW) and software (SW). It holds strategic significance in securing leadership in AI system technology by linking with Korea's K-semiconductor capabilities."
          : "AI 구동을 위한 실리콘, 하드웨어부터 알고리즘과 소프트웨어, 응용 시스템까지 아우르는 통합형 AI 시스템 전문가를 양성한다. 구체적으로 AI 반도체, 온-디바이스 AI, 물리 AI 시스템 설계, 시스템 아키텍처 및 AI 보안, 초저지연 AI-통신 융합 시스템, 첨단 패키징/이종집적 시스템 및 고효율 방열, 스마트 전력 시스템 등 전기전자공학 분야 전반에 걸친 AI 시스템 관련 교육 및 연구 기능을 통해 고성능·저전력 AI 반도체와 AI 컴퓨팅 시스템 설계·최적화 역량을 갖춘 전문가를 배출한다. 이는 AI 시대의 인프라 계층을 담당할 인재, 즉 AI 하드웨어(HW) 및 소프트웨어(SW)를 통합하는 전문가를 키우는 것으로, 국내 K-반도체 역량과 연계하여 AI 시스템 기술의 주도권을 확보하려는 전략적 의미가 있다.",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
      id: "ax",
      name: t("dept_ax"),
      summary:
        language === "en"
          ? "An applied department fostering AI+X convergence talent. Based on four specialized tracks—Data/Content AI, Physical/Manufacturing AI, Bio/Materials AI, and AI Sustainability—it cultivates field-ready convergence professionals who directly apply AI technology to solve industrial and societal problems. Graduates from the AX Department are expected to lead AI transformation and productivity innovation across manufacturing and service industries. They will grow into industry-specialized experts who combine domain knowledge in Korea's strengths—semiconductors, automobiles, shipbuilding, gaming, and bio—with AI. While leading overseas universities primarily focus on foundational AI education, KAIST's AX Department positions itself to secure differentiated competitiveness by emphasizing industry-specific specialized curricula."
          : "AI+X 융합 인재를 육성하는 응용학과이다. 데이터·콘텐츠 AI, 물리·제조 AI, 바이오·소재 AI, AI 지속가능성 등 4개의 특화 트랙을 기반으로, AI 기술을 산업·사회 문제 해결에 직접 적용하는 현장형 융합 인재를 양성한다. AX 학과 출신 인재들은 제조업, 서비스업 전반의 AI 전환과 생산성 혁신을 주도할 것으로 기대되며, 한국이 강점을 가진 반도체, 자동차, 조선, 게임, 바이오 등 분야의 도메인 지식을 AI와 결합한 산업 특화형 전문가로 성장하게 된다. 해외 유수 대학들이 주로 AI 기초기술 교육에 집중하는 데 비해, KAIST AX학과는 산업별 특화 교육과정을 강조함으로써 차별화된 경쟁력을 확보하려는 포지션을 취하고 있다.",
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    },
    {
      id: "future",
      name: t("dept_ai_future"),
      summary:
        language === "en"
          ? "This department focuses on the social impact and governance of AI technology. It educates students on ethical issues arising from AI technology, data and algorithm ethics, AI-related policies and systems, AI economics, and AI governance (law and systems). This cultivates future strategists who will lead the establishment of national AI strategies and the comprehensive AI transformation across society and the economy. The intent is to ensure social acceptability and sustainability during AI diffusion by nurturing AI ethics and policy experts, whose importance is on par with that of technology."
          : "AI 기술의 사회적 영향과 거버넌스에 초점을 맞춘 학과이다. AI 기술이 가져올 윤리적 문제, 데이터·알고리즘 윤리, AI 관련 정책·제도, AI 경제학, AI 거버넌스(법·제도) 등을 교육하여, 국가 차원의 AI 전략 수립과 사회·경제 전반의 AI 대전환을 선도할 미래 전략가를 육성한다. 이는 기술 못지않게 중요한 AI 윤리·정책 전문가를 양성함으로써, AI 확산 과정에서의 사회적 수용성과 지속가능성을 담보하려는 취지이다.",
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    },
  ];

  const axTracks = [
    { en: "Data / Content AI", ko: "데이터·콘텐츠AI" },
    { en: "Physics / Mfg AI", ko: "물리·제조AI" },
    { en: "Bio / Materials AI", ko: "바이오·소재AI" },
    { en: "AI Sustainability", ko: "AI·지속가능성" },
  ];

  return (
    <div className="bg-gray-50 pb-20">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t("departments")}
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            {language === "en"
              ? "KAIST College of AI comprises four departments covering core artificial intelligence technologies, industrial applications, and policy."
              : "KAIST AI 대학은 인공지능 핵심 기술, 산업 응용, 정책 전반을 아우르는 네 개의 학과로 구성되어 있습니다."}
          </p>
        </div>

        {/* Visual Org Chart Section */}
        <div className="mb-24 overflow-x-auto pb-8">
          <div className="min-w-[800px] flex flex-col items-center">
            {/* Root: College of AI */}
            <div className="w-full max-w-4xl bg-[#004191] text-white py-4 px-8 rounded shadow-lg text-center font-bold text-2xl mb-8 relative">
              {language === "ko" ? `${t("kaist_ai")}` : t("kaist_ai")}
            </div>

            {/* Connecting Lines (Desktop) */}
            <div className="w-[70%] h-12 border-t-2 border-l-2 border-r-2 border-blue-200 relative mb-4">
              <div className="absolute left-1/2 top-0 h-12 border-l-2 border-blue-200 -translate-x-1/2"></div>
            </div>

            {/* Level 1: 3 Columns */}
            <div className="flex justify-between w-full max-w-6xl gap-8">
              {/* Pillar 1: AI School */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-100 text-gray-500 py-2 px-4 text-center font-bold text-lg mb-4 rounded">
                  {t("ai_school")}
                </div>
                <div className="w-full flex gap-4">
                  <div className="flex-1 bg-[#004191] text-white p-4 text-center font-bold rounded shadow-sm min-h-[120px] flex items-center justify-center">
                    {t("dept_ai_computing")}
                  </div>
                  <div className="flex-1 bg-[#004191] text-white p-4 text-center font-bold rounded shadow-sm min-h-[120px] flex items-center justify-center">
                    {t("dept_ai_systems")}
                  </div>
                </div>
              </div>

              {/* Pillar 2: AX Dept */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-[#004191] text-white py-3 px-4 text-center font-bold text-xl rounded shadow-md mb-4 h-[60px] flex items-center justify-center">
                  {t("dept_ax")}
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {axTracks.map((track, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 p-3 rounded shadow-sm flex flex-col items-center justify-center text-center"
                    >
                      <span className="bg-blue-400 text-white text-[10px] px-2 py-0.5 rounded-full mb-1 font-bold">
                        Track
                      </span>
                      <span className="text-xs font-bold text-gray-800 leading-tight">
                        {language === "en" ? track.en : track.ko}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 3: Future AI Dept */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-[#004191] text-white py-3 px-4 text-center font-bold text-xl rounded shadow-md mb-4 h-[60px] flex items-center justify-center">
                  {t("dept_ai_future")}
                </div>
                <div className="w-full bg-white border border-gray-200 p-6 rounded shadow-sm flex flex-col items-center justify-center text-center h-full">
                  <span className="bg-blue-400 text-white text-[10px] px-3 py-1 rounded-full mb-2 font-bold">
                    Track
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {language === "en" ? "Future Strategy" : "미래전략"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="grid grid-cols-1 gap-12 pt-10 border-t border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            {language === "en" ? "Department Details" : "상세 학과 안내"}
          </h2>
          {deptData.map((dept) => (
            <div
              key={dept.id}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center space-x-6 mb-8">
                <div className="p-4 bg-blue-50 text-[#004191] rounded-2xl shadow-sm">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={dept.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight">
                  {dept.name}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg text-justify whitespace-pre-line">
                {dept.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
