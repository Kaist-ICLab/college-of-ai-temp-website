
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { useTranslation } from '../i18n';

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  const deansMessageEn = [
    "Welcome to the College of Artificial Intelligence at KAIST.",
    "Artificial Intelligence has become a fundamental force reshaping scientific innovation, industrial structures, and the way society functions. The College of AI at KAIST was established to move beyond short-term technological demands and to proactively define the future direction and role of AI. We seek not only to advance what AI can do, but also to reflect on what AI should do for society.",
    "The College provides an integrated educational and research framework that spans the full AI lifecycle, from algorithms and models to systems, applications, and human–AI interaction. Through interdisciplinary collaboration across science and engineering, including AI for Science, the College fosters new knowledge creation and accelerates scientific discovery.",
    "With a clear vision for the future, the College of AI is committed to educating individuals who combine strong foundations with problem-solving capability and social responsibility. We aim not merely to anticipate the future, but to shape it through AI. We invite your continued interest and support."
  ];

  const deansMessageKo = [
    "KAIST AI대학에 오신 것을 환영합니다.",
    "인공지능은 이제 기술적 영역을 넘어 과학적 혁신과 산업 구조, 그리고 사회의 작동 방식을 근본적으로 재정의하는 핵심 동력이 되었습니다. KAIST AI대학은 단기적인 기술적 요구에 부응하는 것을 넘어, 미래 AI의 방향과 역할을 선제적으로 정의하기 위해 설립되었습니다. 우리는 AI가 무엇을 할 수 있는지를 넘어, 사회를 위해 무엇을 해야 하는지를 고민합니다.",
    "우리 대학은 알고리즘과 모델부터 시스템, 응용 프로그램, 인간-AI 상호작용에 이르기까지 AI 전 주기를 아우르는 통합 교육 및 연구 체계를 제공합니다. 'AI for Science'를 포함한 공학 및 과학 전 분야와의 다학제적 협력을 통해 새로운 지식을 창출하고 과학적 발견을 가속화하고 있습니다.",
    "미래에 대한 명확한 비전을 바탕으로, KAIST AI대학은 탄탄한 기초 역량과 문제 해결 능력, 그리고 사회적 책임감을 겸비한 인재를 양성하는 데 매진하고 있습니다. 우리는 단순히 미래를 예측하는 것이 아니라, AI를 통해 미래를 직접 만들어 나가고자 합니다. 여러분의 지속적인 관심과 성원을 부탁드립니다."
  ];

  const deptDescriptionsEn = {
    computing: "Through AI theory, algorithms, mathematics, and systems-based education, we cultivate AI-natives capable of designing, developing, and operating cutting-edge AI models (e.g., generative AI, multimodal AI, and agentic AI). Specifically, this department cultivates individuals capable of creating AI models themselves. The curriculum integrates full-stack software capabilities, encompassing everything from model development to service design, development, and operation, including large-scale language model (LLM) optimization, NPU-friendly algorithm design, distributed learning, and MLOps. This differentiates the department from traditional computer engineering education, fostering AI-focused talent for the AI era.",
    systems: "The Department of Artificial Intelligence (AI) Systems trains hardware and systems experts for AI operation. Specifically, by providing education on AI semiconductor components and packaging, high-speed communication, power, and thermal management technologies, and AI system architecture analysis, we aim to produce experts equipped with the capabilities to design and optimize high-performance, low-power AI semiconductors and AI computing systems. This fosters talent who will be responsible for the infrastructure layer of the AI era—that is, experts who can integrate AI hardware (HW) and software (SW). This strategic goal is to secure leadership in AI hardware technology by linking it with Korea's K-semiconductor capabilities.",
    ax: "This is an applied department that fosters AI+X convergence talent. Based on four specialized tracks: Data and Content AI, Physics and Manufacturing AI, Bio and Materials AI, and AI Sustainability, it fosters field-oriented convergence talent who directly apply AI technology to solving industrial and social problems. Talents from the AX Department are expected to lead AI transformation and productivity innovation across the manufacturing and service industries, and will grow into industry-specialized experts who combine AI with domain knowledge in fields where Korea has strengths, such as semiconductors, automobiles, shipbuilding, games, and bio. While leading overseas universities mainly focus on basic AI technology education, the KAIST AX Department is positioned to secure differentiated competitiveness by emphasizing industry-specific specialized curriculum.",
    future: "This department focuses on the social impact and governance of AI technology. By teaching ethical issues related to AI technology, data and algorithm ethics, AI-related policies and systems, AI economics, and AI governance (laws and systems), we cultivate future strategists who will lead the development of national AI strategies and the AI transformation of society and the economy. The goal is to foster experts in AI ethics and policy, which are just as important as the technology itself, thereby ensuring social acceptance and sustainability during the AI diffusion process."
  };

  const deptDescriptionsKo = {
    computing: "인공지능 이론, 알고리즘, 수학 및 시스템 기반 교육을 통해 생성형 AI, 멀티모달 AI, 에이전틱 AI 등 최첨단 AI 모델을 설계, 개발 및 운영할 수 있는 AI 네이티브 인재를 육성합니다. 특히 이 학과는 학생 스스로 AI 모델을 직접 생성할 수 있는 능력을 배양하는 데 중점을 둡니다. 커리큘럼은 대규모 언어 모델(LLM) 최적화, NPU 친화적 알고리즘 설계, 분산 학습 및 MLOps를 포함하여 모델 개발부터 서비스 설계, 개발, 운영에 이르는 풀스택 소프트웨어 역량을 통합합니다. 이는 전통적인 컴퓨터 공학 교육과 차별화되며, AI 시대에 최적화된 인재를 양성합니다.",
    systems: "인공지능(AI) 시스템학과는 AI 운영을 위한 하드웨어 및 시스템 전문가를 양성합니다. 구체적으로 AI 반도체 소자 및 패키징, 초고속 통신, 전력 및 열 관리 기술, AI 시스템 아키텍처 분석에 대한 교육을 제공함으로써 고성능·저전력 AI 반도체 및 AI 컴퓨팅 시스템을 설계하고 최적화할 수 있는 역량을 갖춘 전문가 배출을 목표로 합니다. 이는 AI 하드웨어(HW)와 소프트웨어(SW)를 통합할 수 있는 AI 시대의 인프라 계층 전문가를 육성하며, 한국의 K-반도체 역량과 연계하여 AI 하드웨어 기술 리더십을 확보하는 전략적 목표를 가지고 있습니다.",
    ax: "AX학과는 AI+X 융합 인재를 양성하는 응용 학과입니다. 데이터 및 콘텐츠 AI, 물리 및 제조 AI, 바이오 및 신소재 AI, AI 지속가능성 등 4가지 전문 트랙을 바탕으로 산업 및 사회 문제를 해결하기 위해 AI 기술을 직접 적용하는 현장 중심의 융합 인재를 양성합니다. AX학과의 인재들은 제조 및 서비스 산업 전반의 AI 전환과 생산성 혁신을 주도하고, 반도체, 자동차, 조선, 게임, 바이오 등 한국이 강점을 가진 분야의 도메인 지식과 AI를 결합한 산업 특화 전문가로 성장하게 됩니다. 해외 유수 대학들이 주로 기초 AI 기술 교육에 집중하는 반면, KAIST AX학과는 산업별 특화 교육과정을 강조하여 차별화된 경쟁력을 확보하고 있습니다.",
    future: "인공지능미래전략학과는 AI 기술의 사회적 영향과 거버넌스에 집중합니다. AI 기술과 관련된 윤리적 이슈, 데이터 및 알고리즘 윤리, AI 관련 정책 및 제도, AI 경제학, AI 거버넌스(법 및 제도) 등을 교육하여 국가 AI 전략 수립과 사회·경제의 AI 전환을 선도할 미래 전략가를 육성합니다. 기술 자체만큼 중요한 AI 윤리 및 정책 전문가를 양성함으로써 AI 확산 과정에서의 사회적 수용성과 지속 가능성을 확보하는 것이 목표입니다."
  };

  const message = language === 'en' ? deansMessageEn : deansMessageKo;
  const depts = language === 'en' ? deptDescriptionsEn : deptDescriptionsKo;

  const sectionTitleClass = "text-3xl md:text-4xl font-bold text-gray-900 mb-10";

  return (
    <div className="relative">
      {/* Hero Banner */}
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src="https://oxgs.org/wp-content/uploads/2024/01/AI-governance-and-geopolitics-768x432.jpg" 
          alt="KAIST Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight italic">
              {language === 'en' 
                ? <>Leading the National<br/>AI Transition</>
                : <>국가 인공지능 전환을<br/>선도하는 인재 육성</>}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
              {language === 'en'
                ? 'College of AI cultivates world-class talent through integrated education and research encompassing core AI technologies, industrial applications, and policy.'
                : 'AI대학은 핵심 AI 기술, 산업 응용 및 정책을 아우르는 통합 교육과 연구를 통해 세계 수준의 인재를 양성합니다.'}
            </p>
            <div className="flex space-x-4">
              <Link to="/intro" className="bg-[#004191] hover:bg-[#003375] px-8 py-3 rounded text-sm font-bold transition-all shadow-lg">
                {t('introduction').toUpperCase()}
              </Link>
              <Link to="/admissions" className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-3 rounded text-sm font-bold border border-white/30 transition-all">
                {t('admissions').toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Introduction - Dean's Welcome Message */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitleClass}>
            {language === 'en' ? "Dean's Welcome Message" : "학장 인사말"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="relative">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsjemrQJ1aY8GXzDH7zyW2PeSr0NoRlUL0Q&s" 
                  alt="Dean" 
                  className="rounded-lg shadow-xl object-cover w-full aspect-[3/4]" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                  <p className="text-white font-bold text-lg">Eunho Yang</p>
                  <p className="text-white/80 text-sm">{language === 'en' ? 'Dean, College of AI' : 'AI대학 학장'}</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center h-full">
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
                {message.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "text-2xl font-bold text-[#004191] leading-snug mb-8" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Departments - Refined for compact layout */}
      <section className="bg-gray-50 py-24 border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className={sectionTitleClass}>
            {t('departments')}
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              { 
                id: 'computing', 
                num: '01', 
                name: t('dept_ai_computing'), 
                text: depts.computing,
                image: 'https://www.federaltimes.com/resizer/v2/YFKKAHFIPZB3PMZ4U3C7EBWM2M.jpg?auth=d18073870f26ffdce06329e2833bc1b8e3ee028cd280da61bc94f52c765cd906&width=1200&height=785' 
              },
              { 
                id: 'systems', 
                num: '02', 
                name: t('dept_ai_systems'), 
                text: depts.systems,
                image: 'https://data.militaryembedded.com/uploads/resize/1256/756/external/data.militaryembedded.com/uploads/articles/primary_images/1623767132.jpeg' 
              },
              { 
                id: 'ax', 
                num: '03', 
                name: t('dept_ax'), 
                text: depts.ax,
                image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/03/convergence-of-ai-and-iot-sm.webp' 
              },
              { 
                id: 'future', 
                num: '04', 
                name: t('dept_ai_future'), 
                text: depts.future,
                image: 'https://etimg.etb2bimg.com/thumb/msid-115886533,imgsize-315374,width-1200,height=627,overlay-etgovernment,resizemode-75/news/governance/global-ai-governance-needs-a-sharp-focus-to-combat-risks.jpg' 
              }
            ].map((dept) => (
              <div key={dept.id} className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col md:flex-row-reverse">
                
                {/* Thumbnail Image - Aligned right on md+ */}
                <div className="h-48 md:h-auto md:w-[35%] overflow-hidden relative">
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
                </div>

                {/* Card Content Area - Shorter height and clamped text */}
                <div className="p-6 md:p-8 md:w-[65%] relative flex flex-col z-10">
                  {/* Background Number Accent */}
                  <div className="absolute top-2 right-8 text-7xl font-black text-gray-50 group-hover:text-blue-50/40 transition-colors pointer-events-none italic z-0 select-none">
                    {dept.num}
                  </div>
                  
                  {/* Selection Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#004191]/10 group-hover:bg-[#004191] transition-all duration-500"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#004191] transition-colors leading-tight">
                      {dept.name}
                    </h3>
                    <div className="w-10 h-0.5 bg-gray-100 group-hover:w-20 group-hover:bg-[#004191] transition-all duration-500 mb-4"></div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify mb-2 relative z-10 line-clamp-4">
                    {dept.text}
                  </p>

                  <div className="mt-auto relative z-10">
                    <Link 
                      to="/departments" 
                      className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-[#004191] group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <span>{t('read_more')}</span>
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Summary of Education Programs */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <h2 className={sectionTitleClass + " mb-0"}>
              {language === 'en' ? 'Education Programs' : '교육 프로그램'}
            </h2>
            <Link to="/academics" className="group flex items-center text-[#004191] font-bold text-sm uppercase tracking-widest hover:translate-x-1 transition-transform mt-4 md:mt-0">
              Full Curriculum <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 bg-[#f8faff] rounded-3xl border border-blue-50 shadow-sm">
              <div className="text-[#004191] font-bold text-xs uppercase tracking-[0.2em] mb-4">Undergraduate</div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('undergraduate')}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                {language === 'en' 
                  ? 'Bachelor\'s program focusing on core algorithms, mathematics, and hands-on AI deployment (138+ credits).'
                  : '핵심 알고리즘, 수학 및 실전 AI 배포에 중점을 둔 학부 프로그램 (138학점 이상).'}
              </p>
            </div>
            <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Graduate School</div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('graduate')}</h3>
              <div className="space-y-4 mb-8">
                 <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <span className="text-sm font-bold text-gray-700">{t('master')}</span>
                    <span className="text-xs text-gray-400 italic">Advanced Research</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <span className="text-sm font-bold text-gray-700">{t('doctor')}</span>
                    <span className="text-xs text-gray-400 italic">Original Publications</span>
                 </div>
              </div>
            </div>
            <div className="p-10 bg-[#004191] text-white rounded-3xl shadow-xl shadow-[#004191]/20 flex flex-col justify-between">
              <div>
                <div className="text-white/50 font-bold text-xs uppercase tracking-[0.2em] mb-4">Special Track</div>
                <h3 className="text-2xl font-bold mb-6 italic">{t('integrated')}</h3>
                <p className="text-white/80 mb-8 leading-relaxed text-sm">
                  {language === 'en' 
                    ? 'Seamless track from Master\'s to Ph.D. for high-impact research innovation.'
                    : '고영향력 연구 혁신을 위한 석박사 통합 원스톱 트랙.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Admission Information */}
      <section className="bg-[#f0f7ff] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="#004191" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className={sectionTitleClass}>
            {language === 'en' ? 'Admission' : '입학 안내'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-gray-900">
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                {language === 'en' 
                  ? 'We seek collaborative and ethical minds whose innovation will benefit the global society. Join the pioneers building the future foundations of AI.'
                  : '우리는 전 세계 사회에 기여할 수 있는 협력적이고 윤리적인 혁신 인재를 찾고 있습니다. 미래 AI의 토대를 구축하는 선구자들과 함께하십시오.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link to="/admissions" className="bg-[#004191] hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold transition-all text-center shadow-lg shadow-[#004191]/20">
                   {t('undergraduate')}
                 </Link>
                 <Link to="/admissions" className="bg-white hover:bg-gray-50 text-gray-900 px-10 py-4 rounded-xl font-bold border border-gray-200 transition-all text-center">
                   {t('graduate')}
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
