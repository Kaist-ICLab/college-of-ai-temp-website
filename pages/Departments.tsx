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
      summaryEn: (
        <>
          Cultivates <b>AI-native professionals</b> who can{" "}
          <b>design, develop, and operate state-of-the-art AI models</b>,
          including generative AI, multimodal AI, and agentic AI, based on a
          strong foundation in AI theory, algorithms, mathematics, and systems.
          The department focuses on cultivating <b>creators of AI models</b>{" "}
          themselves. Its curriculum integrates full-stack software{" "}
          <b>capabilities across the entire AI pipeline</b>, from model
          development to service design, implementation, and operation. Key
          areas include{" "}
          <b>
            large language model (LLM) optimization, NPU-friendly algorithm
            design, distributed learning, and MLOps
          </b>
          . Through this specialized approach, the department delivers AI
          education that goes beyond traditional computer science and nurtures{" "}
          <b>designer-type talent</b> equipped to lead the AI era.
        </>
      ),
      summaryKo: (
        <>
          AI 이론, 알고리즘, 수학, 시스템 기반 교육을 통해 최신{" "}
          <b>AI 모델(예: 생성형 AI, 멀티모달 AI, 에이전틱 AI)</b>을{" "}
          <b>설계·개발·운영할 수 있는 AI 핵심 인재(AI-Native)</b>를 양성한다.
          즉, <b>AI 모델 자체를 만드는 인재</b>를 키우는 학과로, 대규모
          언어모델(LLM) 최적화, <b>NPU 친화적 알고리즘 설계</b>,{" "}
          <b>
            분산 학습 및 MLOps등 모델 개발부터 서비스 설계·개발·운영까지 잇는
            풀스택 소프트웨어 역량
          </b>
          을 교육과정에 통합한다. 이를 통해 전통적인 컴퓨터 공학 교육과 차별화된{" "}
          <b>AI 전문 교육</b>을 제공하며, AI 시대의 <b>설계자형 인재</b>를
          육성한다.
        </>
      ),
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      id: "systems",
      name: t("dept_ai_systems"),
      summaryEn: (
        <>
          Cultivates <b>integrated AI systems professionals</b> with expertise
          spanning{" "}
          <b>
            AI semiconductors and hardware, algorithms and software, and
            application systems
          </b>
          . Through education and research across the full spectrum of
          electrical and electronic engineering, the department covers key areas
          including AI semiconductors, on-device AI, physical AI system design,
          system architecture and AI security, ultra-low-latency AI and
          communication convergence systems, advanced packaging and
          heterogeneous integration, high-efficiency thermal management, and
          smart power systems. This comprehensive approach cultivates
          infrastructure-level talent for the AI era, namely professionals who{" "}
          <b>integrate AI hardware and software</b>, and carries strategic
          significance in securing <b>leadership in AI system technologies</b>{" "}
          through close alignment with{" "}
          <b>Korea’s K-semiconductor capabilities.</b>
        </>
      ),
      summaryKo: (
        <>
          AI 구동을 위한{" "}
          <b>실리콘, 하드웨어부터 알고리즘과 소프트웨어, 응용 시스템</b>까지
          아우르는 <b>통합형 AI 시스템 전문가</b>를 양성한다. 구체적으로 AI
          반도체, 온-디바이스 AI, 물리 AI 시스템 설계, 시스템 아키텍처 및 AI
          보안, 초저지연 AI-통신 융합 시스템, 첨단 패키징/이종집적 시스템 및
          고효율 방열, 스마트 전력 시스템 등 <b>전기전자공학 분야 전반</b>에
          걸친 AI 시스템 관련 교육 및 연구 기능을 통해{" "}
          <b>고성능·저전력 AI 반도체</b>와{" "}
          <b>AI 컴퓨팅 시스템 설계·최적화 역량</b>을 갖춘 전문가를 배출한다.
          이는 AI 시대의 <b>인프라 계층</b>을 담당할 인재, 즉{" "}
          <b>AI 하드웨어(HW) 및 소프트웨어(SW)</b>를 통합하는 전문가를 키우는
          것으로, 국내 <b>K-반도체</b> 역량과 연계하여{" "}
          <b>AI 시스템 기술의 주도권</b>을 확보하려는 전략적 의미가 있다.
        </>
      ),
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
      id: "ax",
      name: t("dept_ax"),
      summaryEn: (
        <>
          Cultivates <b>AI plus X convergence talent</b> as an
          application-oriented department. Based on{" "}
          <b>four specialized tracks</b> covering{" "}
          <b>
            Data & Content AI, Physics & Manufacturing AI, Bio & Materials AI,
            and AI for Sustainability
          </b>
          , the department cultivates{" "}
          <b>field-ready convergence professionals</b> who directly apply AI
          technologies to <b>solve industrial and societal challenges</b>.
          Graduates of the AX Department are expected to lead{" "}
          <b>AI-driven transformation and productivity innovation</b> across
          manufacturing and service industries, growing into
          industry-specialized experts who combine AI with domain knowledge in
          Korea’s core strengths, including{" "}
          <b>
            semiconductors, automobiles, shipbuilding, gaming, and biotechnology
          </b>
          . While leading overseas universities primarily focus on foundational
          AI education, KAIST’s AX Department differentiates itself by
          emphasizing <b>industry-specific, application-oriented curricula</b>.
        </>
      ),
      summaryKo: (
        <>
          <b>AI+X 융합 인재</b>를 육성하는 응용학과이다.{" "}
          <b>데이터·콘텐츠 AI, 물리·제조 AI, 바이오·소재 AI, AI 지속가능성</b>{" "}
          등 <b>4개의 특화 트랙</b>을 기반으로, AI 기술을{" "}
          <b>산업·사회 문제 해결에 직접 적용</b>하는 <b>현장형 융합 인재</b>를
          양성한다. AX 학과 출신 인재들은 제조업, 서비스업 전반의 AI 전환과
          생산성 혁신을 주도할 것으로 기대되며, 한국이 강점을 가진{" "}
          <b>반도체, 자동차, 조선, 게임, 바이오</b> 등 분야의 도메인 지식을 AI와
          결합한 <b>산업 특화형 전문가</b>로 성장하게 된다. 해외 유수 대학들이
          주로 AI 기초기술 교육에 집중하는 데 비해, KAIST AX학과는{" "}
          <b>산업별 특화 교육과정</b>을 강조함으로써 <b>차별화된 경쟁력</b>을
          확보하려는 포지션을 취하고 있다.
        </>
      ),
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    },
    {
      id: "future",
      name: t("dept_ai_future"),
      summaryEn: (
        <>
          Focuses on the <b>social impact and governance of AI technology</b>.
          It educates students on ethical issues arising from{" "}
          <b>AI technology, data and algorithm ethics</b>,{" "}
          <b>
            AI-related policies and systems, AI economics, and AI governance
            (law and systems)
          </b>
          . This cultivates <b>future strategists</b> who will lead the
          establishment of{" "}
          <b>national AI strategies and the comprehensive AI transformation</b>{" "}
          across society and the economy. The intent is to{" "}
          <b>ensure social acceptability and sustainability</b> during AI
          diffusion by nurturing AI ethics and policy experts, whose importance
          is on par with that of technology.
        </>
      ),
      summaryKo: (
        <>
          AI 기술의 <b>사회적 영향과 거버넌스</b>에 초점을 맞춘 학과이다. AI
          기술이 가져올{" "}
          <b>
            윤리적 문제, 데이터·알고리즘 윤리, AI 관련 정책·제도, AI 경제학, AI
            거버넌스(법·제도)
          </b>{" "}
          등을 교육하여, <b>국가 차원의 AI 전략 수립</b>과{" "}
          <b>사회·경제 전반의 AI 대전환</b>을 선도할 <b>미래 전략가</b>를
          육성한다. 이는 기술 못지않게 중요한 <b>AI 윤리·정책 전문가</b>를
          양성함으로써, AI 확산 과정에서의 <b>사회적 수용성과 지속가능성</b>을
          담보하려는 취지이다.
        </>
      ),
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    },
  ];

  // Helper function to format department names in org chart specifically for English line breaks
  const formatDeptNameForChart = (key: string) => {
    const name = t(key);
    if (language === "en" && name.startsWith("Department of ")) {
      const rest = name.replace("Department of ", "");
      return (
        <div className="flex flex-col items-center">
          <span className="whitespace-nowrap">Department of</span>
          <span className="whitespace-nowrap">{rest}</span>
        </div>
      );
    }
    return name;
  };

  return (
    <div className="bg-white pb-20">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-12">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-center relative">
              {t("departments")}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#002380] rounded-full"></div>
            </h1>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            {language === "en"
              ? "KAIST College of AI comprises four departments covering core artificial intelligence technologies, industrial applications, and policy."
              : "KAIST AI대학은 인공지능 핵심 기술, 산업 응용, 정책 전반을 아우르는 네 개의 학과로 구성되어 있습니다."}
          </p>
        </div>

        {/* Visual Org Chart Section */}
        <div className="mx-[0%] mb-20">
          <div className="flex justify-center">
            <img
              src=
              {language === "en" ? "https://raw.githubusercontent.com/Kaist-ICLab/college-of-ai-temp-website/image_test/depEn.png"
                : "https://raw.githubusercontent.com/Kaist-ICLab/college-of-ai-temp-website/image_test/depKor.png"
              }
              alt="College of AI Organization Chart"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="grid grid-cols-1 gap-6 pt-24 border-t border-gray-100">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold font-black text-gray-900 tracking-tight">
              {language === "en" ? "Department Details" : "상세 학과 안내"}
            </h2>
            <div className="mt-4 w-12 h-1 bg-[#002380] rounded-full"></div>
          </div>
          {deptData.map((dept) => (
            <div
              key={dept.id}
              className="bg-white p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 max-w-5xl mx-auto w-full"
            >
              <div className="flex items-center space-x-4 mb-5 text-left">
                <div className="p-2.5 bg-blue-50 text-[#002380] rounded-xl shadow-sm">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
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
                <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  {dept.name}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify md:text-left">
                {language === "en" ? dept.summaryEn : dept.summaryKo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
