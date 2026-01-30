import React, { useContext } from "react";
import { LanguageContext } from "../App";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "../i18n";
import { useSEO } from "../hooks/useSEO";

const Introduction: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  useSEO();

  // Content for the Welcome Message
  const deansMessageEn = `
    Welcome to the College of Artificial Intelligence at KAIST.
    Artificial Intelligence is reshaping science, industry, and society at an unprecedented pace. The College of AI at KAIST was established to advance AI technologies while thoughtfully considering their long-term impact on science, society, and humanity. Moving beyond short-term technological trends, the College is committed to a sustainable and forward-looking understanding of AI’s role in the future.
    The College of AI provides an integrated educational and research environment spanning the full technical spectrum of AI, from algorithms and models to systems and applications. Through close collaboration across science and engineering, the College fosters interdisciplinary research, including AI for Science, that accelerates discovery and creates meaningful societal value. Considerations of sustainability, responsibility, and long-term impact are embedded within both research and education.
    With a clear vision for the future, the College of AI is dedicated to educating individuals with strong foundations, problem-solving capabilities, and social responsibility. By linking individual growth with broader societal progress, the College seeks to responsibly shape the future enabled by AI.
    Thank you for your interest in the College of AI at KAIST.
  `;

  const deansMessageKo = `
    KAIST AI대학 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
    인공지능(AI)은 과학기술 혁신과 산업 구조를 넘어 사회의 미래를 근본적으로 재편하는 핵심 동력으로 자리 잡고 있습니다. KAIST AI대학은 단기적인 기술 수요에 대응하는 교육을 넘어, AI 기술의 발전과 확산, 그리고 그 사회적·장기적 영향을 함께 고려하며 미래 사회가 요구하는 AI의 방향과 역할을 선도적으로 설계하기 위해 설립되었습니다.
    KAIST AI대학은 알고리즘과 모델, 시스템과 응용에 이르는 AI의 기술적 전 주기와 더불어, 다양한 과학기술 분야와의 융합을 통해 새로운 지식과 가치를 창출하는 교육·연구 체계를 갖추고 있습니다. 아울러 AI가 과학과 산업, 사회 전반에 미치는 영향과 지속가능한 발전에 대한 고민을 연구와 교육에 자연스럽게 녹여내며, AI for Science를 포함한 초학제 연구를 확장해 나가고 있습니다.
    또한 KAIST AI대학은 미래 AI 시대에 요구되는 인재상을 중심에 두고, 탄탄한 기초 역량과 문제 해결 능력, 그리고 사회적 책임 의식을 함께 갖춘 인재 양성을 지향합니다. 기술의 진보를 넘어 AI가 만들어갈 미래를 책임 있게 설계하고, 개인의 성장이 사회와 국가의 발전으로 이어질 수 있도록 교육과 연구의 방향성을 지속적으로 발전시켜 나가겠습니다.
    KAIST AI대학의 도전에 지속적인 관심과 성원을 부탁드립니다.

  `;

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          {/* Main Content */}
          <div className="flex-grow">
            {/* Title - Perfectly Centered */}
            <div className="flex justify-center mb-20">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight text-center relative">
                {t("welcome_msg")}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#002380] rounded-full"></div>
              </h1>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-[2.5rem] overflow-hidden mb-12 flex flex-col md:flex-row gap-0 items-stretch">
              <div className="flex-grow p-8 md:p-14 order-2 md:order-1 flex flex-col justify-start">
                <div className="text-gray-700 leading-relaxed space-y-6 text-left text-base md:text-lg">
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
                      {language === "en" ? "Kuk-Jin Yoon" : "윤 국 진"}
                    </p>
                    <p className="text-[#002380] font-bold text-xs uppercase tracking-widest mt-1">
                      {language === "en"
                        ? "Interim Dean, College of AI"
                        : "AI대학 학장 직무대행"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-80 flex-shrink-0 order-1 md:order-2 bg-gray-50">
                <div className="h-full w-full grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src="/images/deanPicv2.webp"
                    alt="Dean"
                    className="w-full h-full object-cover object-top w-full aspect-[3/4] origin-top scale-100"
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
