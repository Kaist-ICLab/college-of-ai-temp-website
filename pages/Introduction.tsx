import React, { useContext } from "react";
import { LanguageContext } from "../App";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "../i18n";

const Introduction: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

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

            <div className="bg-white border border-gray-100 shadow-sm rounded-[2.5rem] overflow-hidden mb-12 flex flex-col md:flex-row gap-0 items-stretch h-[860px]">
              <div className="flex-grow p-8 md:p-14 order-2 md:order-1 flex flex-col justify-start">
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
                      {language === "en" ? "Kuk-Jin Yoon" : "윤 국 진"}
                    </p>
                    <p className="text-[#002380] font-bold text-xs uppercase tracking-widest mt-1">
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
                    src="https://raw.githubusercontent.com/Kaist-ICLab/college-of-ai-temp-website/image_test/AI대학%20홈페이지%20사진%201.png"
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
