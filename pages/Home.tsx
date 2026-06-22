import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n";
import { useSEO } from "../hooks/useSEO";

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const [activeSlide, setActiveSlide] = useState(0);
  const [trackSlide, setTrackSlide] = useState(1);
  const [isTrackTransitionEnabled, setIsTrackTransitionEnabled] =
    useState(true);
  const [isSlideAnimating, setIsSlideAnimating] = useState(false);
  const [timerResetKey, setTimerResetKey] = useState(0);

  useSEO();

  const deptDescriptionsEn = {
    computing:
      "Cultivates AI-native professionals who can design, develop, and operate state-of-the-art AI models, including generative AI, multimodal AI, and agentic AI, based on a strong foundation in AI theory, algorithms, mathematics, and systems. The department focuses on cultivating creators of AI models themselves. Its curriculum integrates full-stack software capabilities across the entire AI pipeline, from model development to service design, implementation, and operation. Key areas include large language model (LLM) optimization, NPU-friendly algorithm design, distributed learning, and MLOps. Through this specialized approach, the department delivers AI education that goes beyond traditional computer science and nurtures designer-type talent equipped to lead the AI era.",
    systems:
      "Cultivates integrated AI systems professionals with expertise spanning AI semiconductors and hardware, algorithms and software, and application systems. Through education and research across the full spectrum of electrical and electronic engineering, the department covers key areas including AI semiconductors, on-device AI, physical AI system design, system architecture and AI security, ultra-low-latency AI and communication convergence systems, advanced packaging and heterogeneous integration, high-efficiency thermal management, and smart power systems. This comprehensive approach cultivates infrastructure-level talent for the AI era, namely professionals who integrate AI hardware and software, and carries strategic significance in securing leadership in AI system technologies through close alignment with Korea’s K-semiconductor capabilities.",
    ax: "Cultivates AI plus X convergence talent as an application-oriented department. Based on four specialized tracks covering Data and Content AI, Physical and Manufacturing AI, Bio and Materials AI, and AI Sustainability, the department cultivates field-ready convergence professionals who directly apply AI technologies to solve industrial and societal challenges. Graduates of the AX Department are expected to lead AI-driven transformation and productivity innovation across manufacturing and service industries, growing into industry-specialized experts who combine AI with domain knowledge in Korea’s core strengths, including semiconductors, automobiles, shipbuilding, gaming, and biotechnology. While leading overseas universities primarily focus on foundational AI education, KAIST’s AX Department differentiates itself by emphasizing industry-specific, application-oriented curricula.",
    future:
      "Focuses on the social impact and governance of AI technology. It educates students on ethical issues arising from AI technology, data and algorithm ethics, AI-related policies and systems, AI economics, and AI governance (law and systems). This cultivates future strategists who will lead the establishment of national AI strategies and the comprehensive AI transformation across society and the economy. The intent is to ensure social acceptability and sustainability during AI diffusion by nurturing AI ethics and policy experts, whose importance is on par with that of technology.",
  };

  const deptDescriptionsKo = {
    computing:
      "AI 이론, 알고리즘, 수학, 시스템 기반 교육을 통해 최신 AI 모델(예: 생성형 AI, 멀티모달 AI, 에이전틱 AI)을 설계·개발·운영할 수 있는 AI 핵심 인재(AI-Native)를 양성합니다. 즉, AI 모델 자체를 만드는 인재를 키우는 학과로, 대규모 언어모델(LLM) 최적화, NPU 친화적 알고리즘 설계, 분산 학습 및 MLOps 등 모델 개발부터 서비스 설계·개발·운영까지 잇는 풀스택 소프트웨어 역량을 교육과정에 통합합니다. 이를 통해 전통적인 컴퓨터 공학 교육과 차별화된 AI 전문 교육을 제공하며, AI 시대의 설계자형 인재를 육성합니다.",
    systems:
      " AI 구동을 위한 실리콘, 하드웨어부터 알고리즘과 소프트웨어, 응용 시스템까지 아우르는 통합형 AI 시스템 전문가를 양성합니다. 구체적으로 AI 반도체, 온-디바이스 AI, 물리 AI 시스템 설계, 시스템 아키텍쳐 및 AI 보안, 초저지연 AI-통신 융합 시스템, 첨단 패키징/이종집적 시스템 및 고효율 방열, 스마트 전력 시스템 등 전기전자공학 분야 전반에 걸친 AI 시스템 관련 교육 및 연구 기능을 통해 고성능·저전력 AI 반도체와 AI 컴퓨팅 시스템 설계·최적화 역량을 갖춘 전문가를 배출합니다. 이는 AI 시대의 인프라 계층을 담당할 인재, 즉 AI 하드웨어(HW) 및 소프트웨어(SW)를 통합하는 전문가를 키우는 것으로, 국내 K-반도체 역량과 연계하여 AI 시스템 기술의 주도권을 확보하려는 전략적 의미가 있습니다.",
    ax: "AI+X 융합 인재를 육성하는 응용학과입니다. 데이터·콘텐츠 AI, 물리·제조 AI, 바이오·소재 AI, AI 지속가능성 등 4개의 특화 트랙을 기반으로, AI 기술을 산업·사회 문제 해결에 직접 적용하는 현장형 융합 인재를 양성합니다. AX 학과 출신 인재들은 제조업, 서비스업 전반의 AI 전환과 생산성 혁신을 주도할 것으로 기대되며, 한국이 강점을 가진 반도체, 자동차, 조선, 게임, 바이오 등 분야의 도메인 지식을 AI와 결합한 산업 특화형 전문가로 성장하게 됩니다. 해외 유수 대학들이 주로 AI 기초기술 교육에 집중하는 데 비해, KAIST AX학과는 산업별 특화 교육과정을 강조함으로써 차별화된 경쟁력을 확보하려는 포지션을 취하고 있습니다.",
    future:
      "AI 기술의 사회적 영향과 거버넌스에 초점을 맞춘 학과입니다. AI 기술이 가져올 윤리적 문제, 데이터·알고리즘 윤리, AI 관련 정책·제도, AI 경제학, AI 거버넌스(법·제도) 등을 교육하여, 국가 차원의 AI 전략 수립과 사회·경제 전반의 AI 대전환을 선도할 미래 전략가를 육성합니다. 이는 기술 못지않게 중요한 AI 윤리·정책 전문가를 양성함으로써, AI 확산 과정에서의 사회적 수용성과 지속가능성을 담보하려는 취지입니다.",
  };

  const depts = language === "en" ? deptDescriptionsEn : deptDescriptionsKo;

  const sectionTitleClass =
    "text-3xl md:text-4xl font-bold text-gray-900 mb-10";

  const carouselSlides = [
    {
      id: "vision-declaration",
      eyebrow: language === "en" ? "Press Release" : "보도자료",
      titleLines:
        language === "en"
          ? ["KAIST College of AI Holds", "Vision Declaration Ceremony"]
          : ["AI대학 비전선포식 개최", "글로벌 AI 융합인재 양성 비전 제시"],
      imagePng: "/images/notice/AI_faculty_photo.jpg",
      imageAlt:
        language === "en"
          ? "KAIST College of AI Vision Declaration Ceremony"
          : "KAIST AI대학 비전선포식",
      imageClass: "object-center",
      primaryLink: "/notice/ai-college-vision-declaration",
      primaryLabel: t("read_more"),
    },
    {
      id: "main-banner",
      titleLines: ["AI-Natives Create Futures", "@ KAIST College of AI"],
      description:
        language === "en"
          ? "College of AI cultivates world-class talent through integrated education and research encompassing core AI technologies, industrial applications, and policy."
          : "AI 대학은 핵심 AI 기술, 산업 응용 및 정책을 아우르는 통합 교육과 연구를 통해 세계 수준의 인재를 양성합니다.",
      imageWebp: "/images/homepage3.webp",
      imagePng: "/images/homepage3.png",
      imageAlt: "KAIST College of AI Banner",
      imageClass: "scale-104 origin-left",
      primaryLink: "/intro",
      primaryLabel: t("introduction"),
      secondaryLink: "/admissions",
      secondaryLabel: t("admissions"),
    },
  ];
  const slideCount = carouselSlides.length;
  const renderedCarouselSlides = [
    carouselSlides[slideCount - 1],
    ...carouselSlides,
    carouselSlides[0],
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (isSlideAnimating) {
        return;
      }

      setIsSlideAnimating(true);
      setActiveSlide((current) => (current + 1) % slideCount);
      setTrackSlide((current) => current + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isSlideAnimating, slideCount, timerResetKey]);

  useEffect(() => {
    if (isTrackTransitionEnabled) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setIsTrackTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isTrackTransitionEnabled]);

  const goToPreviousSlide = () => {
    if (isSlideAnimating) {
      return;
    }

    setTimerResetKey((current) => current + 1);
    setIsSlideAnimating(true);
    setIsTrackTransitionEnabled(true);
    setActiveSlide((current) =>
      current === 0 ? slideCount - 1 : current - 1,
    );
    setTrackSlide((current) => current - 1);
  };
  const goToNextSlide = () => {
    if (isSlideAnimating) {
      return;
    }

    setTimerResetKey((current) => current + 1);
    setIsSlideAnimating(true);
    setIsTrackTransitionEnabled(true);
    setActiveSlide((current) =>
      current === slideCount - 1 ? 0 : current + 1,
    );
    setTrackSlide((current) => current + 1);
  };
  const goToSlide = (index: number) => {
    if (isSlideAnimating || index === activeSlide) {
      return;
    }

    setTimerResetKey((current) => current + 1);
    setIsSlideAnimating(true);
    setIsTrackTransitionEnabled(true);
    setActiveSlide(index);
    setTrackSlide(index + 1);
  };
  const handleTrackTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>,
  ) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    setIsSlideAnimating(false);

    if (trackSlide === slideCount + 1) {
      setIsTrackTransitionEnabled(false);
      setTrackSlide(1);
      return;
    }

    if (trackSlide === 0) {
      setIsTrackTransitionEnabled(false);
      setTrackSlide(slideCount);
    }
  };

  return (
    <div className="relative">
      {/* Hero Carousel */}
      <div className="relative h-[620px] overflow-hidden">
        <div
          className={`flex h-full ${isTrackTransitionEnabled
            ? "transition-transform duration-500 ease-in-out"
            : "transition-none"
            }`}
          style={{ transform: `translateX(-${trackSlide * 100}%)` }}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {renderedCarouselSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="relative h-full w-full shrink-0"
            >
              <picture>
                {slide.imageWebp && (
                  <source srcSet={slide.imageWebp} type="image/webp" />
                )}
                <img
                  src={slide.imagePng}
                  alt={slide.imageAlt}
                  className={`absolute inset-0 w-full h-full object-cover ${slide.imageClass}`}
                  fetchPriority={index === 1 ? "high" : undefined}
                  loading={index === 1 ? "eager" : "lazy"}
                />
              </picture>
              {slide.id !== "main-banner" && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30" />
              )}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-14 sm:px-16 lg:px-20 w-full text-white">
                  {slide.id !== "main-banner" && slide.eyebrow && (
                    <span className="inline-block text-xs md:text-sm font-black uppercase tracking-[0.24em] text-white/85 ml-2 mb-5 drop-shadow">
                      {slide.eyebrow}
                    </span>
                  )}
                  <h1
                    className={
                      slide.id === "main-banner"
                        ? "text-3xl md:text-6xl font-bold mb-5 leading-tight drop-shadow-lg"
                        : "text-3xl md:text-5xl font-black mb-5 leading-normal drop-shadow-lg max-w-4xl"
                    }
                  >
                    {slide.titleLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                  <p className="text-sm md:text-lg text-gray-100 max-w-3xl mb-8 leading-normal max-w-[40ch] md:max-w-[61ch] drop-shadow">
                    {slide.description}
                  </p>
                  <div className="flex space-x-6">
                    <Link
                      to={slide.primaryLink}
                      className="bg-[#002380]/85 hover:bg-[#002380]/50 px-7 py-3 rounded text-sm font-normal transition-all shadow-lg"
                    >
                      {slide.primaryLabel}
                    </Link>
                    {slide.secondaryLink && slide.secondaryLabel && (
                      <Link
                        to={slide.secondaryLink}
                        className="bg-white/10 hover:bg-white/30 backdrop-blur-md px-7 py-3 rounded text-sm font-normal border border-white/30"
                      >
                        {slide.secondaryLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goToPreviousSlide}
          className="absolute left-4 md:left-8 top-1/2 z-20 flex h-11 w-11 md:h-14 md:w-14 -translate-y-1/2 items-center justify-center rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Previous slide"
        >
          <svg
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={goToNextSlide}
          className="absolute right-4 md:right-8 top-1/2 z-20 flex h-11 w-11 md:h-14 md:w-14 -translate-y-1/2 items-center justify-center rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Next slide"
        >
          <svg
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {carouselSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full border border-white/90 transition-all ${index === activeSlide
                ? "bg-white scale-110"
                : "bg-white/10 hover:bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      {/* Vision Declaration Video */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitleClass}>
            {language === "ko" ? "AI대학 비전선포식" : "College of AI Vision Declaration"}
          </h2>
          <div className="mt-8 relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/DbGM6ETBgYY"
              title={language === "ko" ? "KAIST AI대학 비전선포식" : "KAIST College of AI Vision Declaration Ceremony"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 2. Departments - Refined for compact layout */}
      <section className="bg-gray-50 py-24 border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className={sectionTitleClass}>{t("departments")}</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                id: "computing",
                num: "01",
                name: t("dept_ai_computing"),
                text: depts.computing,
                url: "https://aic.kaist.ac.kr/",
                imageWebp: "/images/aicomputing_pic.webp",
                imagePng: "/images/aicomputing_pic.png",
              },
              {
                id: "systems",
                num: "02",
                name: t("dept_ai_systems"),
                text: depts.systems,
                url: "https://ai-systems.kaist.ac.kr/",
                imageWebp: "/images/aisystems_pic.webp",
                imagePng: "/images/aisystems_pic.png",
              },
              {
                id: "ax",
                num: "03",
                name: t("dept_ax"),
                text: depts.ax,
                url: "https://ax.kaist.ac.kr/",
                imageWebp: "/images/ax_pic.webp",
                imagePng: "/images/ax_pic.png",
              },
              {
                id: "future",
                num: "04",
                name: t("dept_ai_future"),
                text: depts.future,
                url: "https://fx.kaist.ac.kr/",
                imageWebp: "/images/aifuture_pic.webp",
                imagePng: "/images/aifuture_pic.png",
              },
            ].map((dept) => (
              <div
                key={dept.id}
                className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col md:flex-row-reverse"
              >
                {/* Thumbnail Image - Aligned right on md+ */}
                <div className="h-48 md:h-auto md:w-[35%] overflow-hidden relative">
                  <picture>
                    <source srcSet={dept.imageWebp} type="image/webp" />
                    <img
                      src={dept.imagePng}
                      alt={dept.name}
                      className="w-full h-full object-cover scale-130 group-hover:scale-140 transition-transform duration-700 ease-out"
                    />
                  </picture>
                  <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
                </div>

                {/* Card Content Area - Shorter height and clamped text */}
                <div className="p-6 md:p-8 md:w-[65%] relative flex flex-col z-10">
                  {/* Background Number Accent */}
                  <div className="absolute top-2 right-8 text-7xl font-black text-gray-50 group-hover:text-blue-50/40 transition-colors pointer-events-none italic z-0 select-none">
                    {dept.num}
                  </div>

                  {/* Selection Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#002380]/10 group-hover:bg-[#002380] transition-all duration-500"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#002380] transition-colors leading-tight">
                      {dept.name}
                    </h3>
                    <div className="w-10 h-0.5 bg-gray-100 group-hover:w-20 group-hover:bg-[#002380] transition-all duration-300 mb-4"></div>
                  </div>

                  <p className="text-left text-gray-600 leading-relaxed text-sm md:text-base text-justify mb-2 relative z-10">
                    {dept.text}
                  </p>

                  <div className="mt-auto pt-4 relative z-10">
                    <a
                      href={dept.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-[#002380] group-hover:translate-x-1 transition-transform duration-500"
                    >
                      <span>{t("read_more")}</span>
                      <svg
                        className="ml-2 w-5 h-5"
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
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
