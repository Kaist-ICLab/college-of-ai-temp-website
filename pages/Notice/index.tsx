import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../../App";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useTranslation } from "../../i18n";

interface OnlineInfo {
  platform: string;
  url: string;
  meetingId?: string;
  password?: string;
}

interface NoticeEvent {
  id: string;
  dept: string;
  titleEn: string;
  titleKo: string;
  dateEn?: string;
  dateKo?: string;
  locationEn?: string;
  locationKo?: string;
  online?: OnlineInfo;
  registration?: string;
  posterPath?: string;
  posterCaptionEn?: string;
  posterCaptionKo?: string;
  imagePath?: string;
  imageCaptionEn?: string;
  imageCaptionKo?: string;
  bodyEn?: string[];
  bodyKo?: string[];
  signatureEn?: string;
  signatureKo?: string;
}

const PosterImage: React.FC<{ src?: string; alt: string }> = ({ src, alt }) => {
  const [hasError, setHasError] = React.useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full h-96 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 text-sm gap-2">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>포스터</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl shadow-lg object-contain"
      onError={() => setHasError(true)}
    />
  );
};

const useEvents = (t: (key: string) => string): NoticeEvent[] => [
    {
    id: "2027-ai-college",
    dept: t("kaist_ai"),
    titleEn: "2027 SPRING College of AI Graduate School Admission Information Session",
    titleKo: "2027 봄학기 AI대학 대학원 입시설명회",
    dateEn: "2026.6.19.(Fri) - 6.24.(Wed)",
    dateKo: "2026.6.19.(금) - 6.24.(수)",
    locationEn: "Varies by department",
    locationKo: "학과별 상이",
    online: {
      platform: "Zoom",
      url: "https://kaist.zoom.us/j/87879227353",
    },
    posterPath: "/images/notice/2027Spring_AICollege_poster.jpg",
  },
  {
    id: "ai-college-vision-declaration",
    dept: t("kaist_ai"),
    titleEn:
      "KAIST College of AI Holds Vision Declaration Ceremony, Presenting Its Vision for Cultivating Global AI Convergence Talent",
    titleKo: "AI대학 비전선포식 개최..글로벌 AI 융합인재 양성 비전 제시",
    dateEn: "2026.6.1.(Mon) | 10:00",
    dateKo: "2026.6.1.(월) | 10:00",
    imagePath: "/images/notice/AI_faculty_photo.jpg",
    imageCaptionEn: "KAIST College of AI Vision Declaration Ceremony",
    imageCaptionKo: "KAIST AI대학 비전선포식",
    posterPath: "/images/notice/KAIST AI대학 비전선포식_Eng.jpg",
    posterCaptionEn: "KAIST College of AI Vision Declaration Ceremony Poster",
    posterCaptionKo: "KAIST AI대학 비전선포식 포스터",
    bodyKo: [
      "우리 대학은 1일 오전 10시 KAIST 학술문화관(E9) 5층 정근모컨퍼런스홀에서 'KAIST AI대학 비전선포식'을 개최했다.",
      "이번 행사는 AI 시대를 선도할 핵심 인재 양성과 교육·연구 혁신, 산업 협력, 책임 있는 AI 생태계 구축을 위한 비전과 추진 방향을 대내외에 공유하기 위해 마련됐다.",
      "KAIST AI대학은 인공지능을 단순한 활용 도구가 아닌 과학기술, 산업, 교육, 사회 전반의 변화를 이끄는 새로운 지식 생산의 기반으로 보고 있다. 이에 따라 AI 핵심 기술을 선도할 연구 인재와 다양한 분야에서 AI를 창의적으로 활용할 융합 인재를 함께 양성하고, 모델·알고리즘·시스템·인프라·도메인 융합은 물론 미래 사회 설계와 책임 있는 AI까지 포괄하는 교육·연구 체계를 구축해 나갈 계획이다.",
      "비전선포식은 이광형 KAIST 총장의 환영사로 시작됐다. 이어 배경훈 부총리 겸 과학기술정보통신부 장관이 기조강연을 통해 AI 시대 핵심 인재 양성과 교육 혁신 방향을 제시했다. 본 세션에서는 윤국진 KAIST AI대학장이 'KAIST AI대학의 비전과 혁신 방향'을 주제로 AI대학의 중장기 비전과 주요 추진 전략을 발표했다.",
      "특히 이번 행사에서는 'KAIST AI대학 자문단(KAIST College of AI Advisory Board)' 위촉식도 함께 진행됐다. 자문단은 KAIST AI대학의 교육·연구·산업 협력·글로벌 협력·책임 있는 AI 구현 등을 위한 전략적 자문 역할을 맡게 된다.",
      "해외 자문위원으로는 세계적인 AI 석학인 요슈아 벤지오(Yoshua Bengio) 몬트리올대 교수와 조경현 뉴욕대 교수가 참여했으며, 국내에서는 한국과학기술연구원(KIST)을 비롯해 (가나다 순) 네이버클라우드, 루닛, 리벨리온, 삼성전자, SK텔레콤, 업스테이지, NC AI, 인애이블퓨전, 크래프톤, 현대자동차·포티투닷 등 국내 주요 AI·ICT 기업 및 연구기관 관계자들이 참여했다.",
      "이와 함께 'AI 시대의 새로운 교육·연구 문법'을 주제로 한 'KAIST AI 혁신 특별 세션'도 진행됐다. KAIST AI대학은 학생을 단순한 교육 수혜자가 아닌 미래 학습 방식과 연구 문화를 함께 설계하는 주체로 바라보고 있다. 이에 따라 학부생 대표들이 직접 발제자로 나서 대학 교육의 새로운 가능성을 제안했으며, 이어 AI대학장과 자문위원, 학생들이 함께 참여하는 패널 토론이 진행됐다.",
      "윤국진 KAIST AI대학장은 \"KAIST AI대학은 단순히 AI 기술을 가르치는 조직이 아니라 AI와 함께 인간의 지적 역량을 확장하고 새로운 지식과 미래를 설계하는 기관이 되고자 한다\"며, 세계적 수준의 인재 양성과 책임 있는 생태계 구축을 이끌어 나가겠다고 밝혔다.",
      "이광형 KAIST 총장은 \"AI는 이제 특정 분야의 기술을 넘어 과학기술과 산업, 사회 전반의 변화를 이끄는 핵심 동력이 되고 있다\"며, KAIST AI대학이 국가 인재 양성과 연구 혁신을 주도하는 국제 협력 플랫폼으로 발전하도록 지원하겠다고 밝혔다.",
      "배경훈 부총리는 AI가 실행 단계로 전환되는 시점에서 인재 투자가 가장 시급하다고 강조하며, 학생들과의 소통을 통해 대한민국의 차별화된 AI 교육 시스템을 구축하겠다고 말했다.",
    ],
    bodyEn: [
      "On June 1, KAIST held the 'KAIST College of AI Vision Declaration Ceremony' at 10 a.m. in the Jeong Keun-mo Conference Hall on the 5th floor of the Academic Cultural Complex (E9).",
      "The event was organized to share, both internally and externally, the College's vision and direction for cultivating the core talent who will lead the AI era, driving innovation in education and research, fostering industry collaboration, and building a responsible AI ecosystem.",
      "The KAIST College of AI views artificial intelligence not as a mere tool for utilization but as a foundation for new knowledge production that drives change across science and technology, industry, education, and society as a whole. Accordingly, the College plans to cultivate both research talent who will lead core AI technologies and convergence talent who will creatively apply AI across diverse fields, while building an education and research system that spans models, algorithms, systems, infrastructure, and domain convergence, as well as the design of future society and responsible AI.",
      "The ceremony opened with a welcoming address by KAIST President Kwang Hyung Lee. This was followed by a keynote speech from Deputy Prime Minister and Minister of Science and ICT Kyung-hun Bae, who presented directions for cultivating core talent and innovating education in the AI era. In the main session, Dean Kuk-Jin Yoon of the KAIST College of AI presented the College's mid- to long-term vision and key strategies under the theme 'The Vision and Direction of Innovation of the KAIST College of AI.'",
      "In particular, the event also featured an appointment ceremony for the 'KAIST College of AI Advisory Board.' The Advisory Board will serve a strategic advisory role for the College's education, research, industry collaboration, global cooperation, and the implementation of responsible AI.",
      "The international advisory members include world-renowned AI scholars Professor Yoshua Bengio of the University of Montreal and Professor Kyunghyun Cho of New York University. Domestic members include representatives from leading Korean AI and ICT companies and research institutions, including the Korea Institute of Science and Technology (KIST), as well as (in Korean alphabetical order) Naver Cloud, Lunit, Rebellions, Samsung Electronics, SK Telecom, Upstage, NC AI, EnableFusion, KRAFTON, and Hyundai Motor Company·42dot.",
      "Alongside this, the 'KAIST AI Innovation Special Session' was held under the theme 'A New Grammar for Education and Research in the AI Era.' The KAIST College of AI sees students not merely as beneficiaries of education but as agents who help design future modes of learning and research culture. Accordingly, undergraduate representatives served as presenters and proposed new possibilities for university education, followed by a panel discussion that brought together the Dean, advisory members, and students.",
      "Dean Kuk-Jin Yoon of the KAIST College of AI stated that 'the KAIST College of AI seeks to be not simply an organization that teaches AI technology, but an institution that expands human intellectual capacity together with AI and designs new knowledge and the future,' adding that the College will lead the cultivation of world-class talent and the building of a responsible ecosystem.",
      "KAIST President Kwang Hyung Lee remarked that 'AI has now become a key driving force that goes beyond the technology of a specific field to lead change across science and technology, industry, and society as a whole,' and pledged support for the KAIST College of AI to grow into an international cooperation platform that leads national talent cultivation and research innovation.",
      "Deputy Prime Minister Kyung-hun Bae emphasized that, at a time when AI is shifting into the implementation phase, investment in talent is the most urgent priority, and said the government will build a distinctive AI education system for Korea through communication with students.",
    ],
  },
  {
    id: "global-ai-hub-statement",
    dept: t("kaist_ai"),
    titleEn:
      "KAIST College of AI Faculty Statement on South Korea's Selection as a Global AI Hub",
    titleKo: "Global AI Hub 유치에 대한 AI대학 교수진 입장문",
    bodyKo: [
      "KAIST AI대학 교수 일동은 대한민국의 Global AI Hub 유치를 진심으로 환영합니다.",
      "이번 유치는 단순히 하나의 국제기구나 센터를 국내에 유치하는 의미를 넘어, 대한민국이 인공지능 시대의 국제 협력과 책임 있는 기술 활용에 본격적으로 기여할 수 있는 중요한 계기가 될 것입니다. 인공지능은 이제 국가의 미래 경쟁력을 좌우하고 산업과 사회 시스템 전반을 바꾸는 핵심 기술이 되었습니다. 앞으로는 AI 기술 경쟁력뿐 아니라 안전성, 신뢰성, 윤리, 거버넌스, 공공성과 같은 가치까지 함께 이해하고 실천할 수 있는 역량이 더욱 중요해질 것입니다.",
      "대한민국은 우수한 연구자와 기업, 반도체와 제조 역량, 빠른 디지털 전환 경험을 바탕으로 AI 분야에서 의미 있는 경쟁력을 축적해 왔습니다. 이번 Global AI Hub 유치는 이러한 역량을 국제사회와 연결하고, AI의 혜택을 보다 넓게 확산하는 데 기여할 수 있는 소중한 기회라고 생각합니다.",
      "무엇보다 중요한 것은 유치 그 자체보다 그 이후를 어떻게 준비하고 발전시켜 나가느냐일 것입니다. 국제사회가 함께 고민하는 다양한 문제를 AI와 연결하고, 이를 교육과 연구, 실증과 협력으로 발전시킬 수 있는 인재와 생태계를 갖추는 일이 필요합니다.",
      "KAIST AI대학은 AI 알고리즘과 모델, AI 반도체와 시스템, 산업 및 과학기술과의 융합, AI의 안전성과 거버넌스를 함께 다루는 교육과 연구를 지향하고 있습니다. 또한 국내 여러 대학, 연구기관, 기업, 공공기관과의 협력을 통해 대한민국의 AI 역량을 국제사회와 연결하는 데 힘을 보태고자 합니다.",
      "KAIST AI대학 교수 일동은 이번 Global AI Hub 유치가 대한민국이 AI 시대의 규칙을 단순히 따라가는 나라를 넘어, 국제사회와 함께 더 나은 방향을 만들어 가는 나라로 나아가는 출발점이 되기를 기대합니다. 앞으로도 인재 양성과 연구 협력의 측면에서 필요한 역할을 성실히 해 나가겠습니다.",
    ],
    signatureKo: "KAIST AI대학 교수 일동",
    bodyEn: [
      "The faculty of the KAIST College of AI sincerely welcomes the Republic of Korea's designation as a Global AI Hub.",
      "This designation is more than the hosting of an international organization or center in Korea; it marks an important turning point for the nation to make substantive contributions to international cooperation and the responsible use of technology in the age of artificial intelligence. AI has become a core technology that shapes a nation's future competitiveness and reshapes industry and social systems as a whole. Going forward, what will matter even more is the capacity to understand and uphold values such as safety, reliability, ethics, governance, and public benefit, alongside technical competitiveness.",
      "Korea has built meaningful competitiveness in AI on the strength of outstanding researchers and companies, its semiconductor and manufacturing capabilities, and its rapid digital transformation. We believe this Global AI Hub designation is a valuable opportunity to connect these strengths to the international community and to spread the benefits of AI more broadly.",
      "What matters most is not the designation itself, but how we prepare for and build on what comes next. We need to connect the challenges the international community grapples with to AI, and to cultivate the talent and ecosystem that can advance this through education, research, real-world implementation, and collaboration.",
      "The KAIST College of AI is committed to education and research that span AI algorithms and models, AI semiconductors and systems, the integration of AI with industry and science, and AI safety and governance. Through cooperation with universities, research institutes, companies, and public institutions in Korea, we aim to help connect the nation's AI capabilities to the international community.",
      "The faculty of the KAIST College of AI hope that this Global AI Hub designation will mark a starting point for Korea to move beyond simply following the rules of the AI era and instead help shape a better direction together with the international community. We will continue to faithfully carry out the role required of us in cultivating talent and advancing research cooperation.",
    ],
    signatureEn: "The Faculty of the KAIST College of AI",
  },
  {
    id: "ai-computing",
    dept: t("dept_ai_computing"),
    titleEn: "2026 FALL AI Computing Admission Information Session",
    titleKo: "2026 가을학기 AI컴퓨팅학과 입시 설명회",
    dateEn: "2026.3.20.(Fri) | 13:00",
    dateKo: "2026.3.20.(금) | 13:00",
    locationEn: "Room 210, KRAFTON Building (E3-5), Main Campus",
    locationKo: "KAIST 본원 크래프톤 빌딩(E3-5), 210호",
    online: {
      platform: "Zoom",
      url: "https://kaist.zoom.us/j/82925942795",
      meetingId: "829 2594 2795",
      password: "941822",
    },
    posterPath: "/images/notice/aicomputing_poster.webp",
  },
  {
    id: "ai-systems",
    dept: t("dept_ai_systems"),
    titleEn: "2026 FALL AI Systems Admission Information Session",
    titleKo: "2026 가을학기 AI시스템학과 입시 설명회",
    dateEn: "2026.3.19.(Thu) | 18:00",
    dateKo: "2026.3.19.(목) | 18:00",
    locationEn:
      "2nd Lecture Hall (Room 1220), IT Convergence Building (E3-2), Main Campus",
    locationKo: "KAIST 본원 정보전자공학동(E3-2), 제2공동강의실(1220호)",
    online: {
      platform: "Zoom",
      url: "https://kaist.zoom.us/j/85967815348",
      meetingId: "859 6781 5348",
      password: "828764",
    },
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLScEOO7KPkquyrqi1vUhv5dNLX7eK2UmGchjQpsdUS2GNVLG-Q/viewform",
    posterPath: "/images/notice/aisystems_poster.webp",
  },
  {
    id: "ax",
    dept: t("dept_ax"),
    titleEn: "2026 FALL AX Admission Information Session",
    titleKo: "2026 가을학기 AX학과 입시 설명회",
    dateEn: "2026.3.18.(Wed) | 17:30",
    dateKo: "2026.3.18.(수) | 17:30",
    locationEn: "Room 102, Creative Learning Bldg. (E11), Main Campus",
    locationKo: "KAIST 창의학습관 (E11), 102호",
    online: {
      platform: "Microsoft Teams",
      url: "https://teams.microsoft.com/meet/26377140295765?p=bUMlacWnA0o5KYlK5u",
    },
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSdGGhW9hCJ3UbxYsNLDt843ocqVo-fZAoX5VmczGesY3mWRAw/viewform",
    posterPath: "/images/notice/ax_poster.webp",
  },
  {
    id: "ai-future",
    dept: t("dept_ai_future"),
    titleEn: "2026 FALL AI and Future Studies Admission Information Session",
    titleKo: "2026 가을학기 AI미래학과 입시 설명회",
    dateEn: "2026.3.24.(Tue) | 12:00",
    dateKo: "2026.3.24.(화) | 12:00",
    locationEn: "Room 2125, N5 Building, Main Campus",
    locationKo: "KAIST 본원 N5동 1층, 2125호",
    online: {
      platform: "Zoom",
      url: "https://kaist.zoom.us/j/82184059994",
    },
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSeo39cpyP9-ga_-K1d86_KB1nMPwSMcpYI-P5vPA27KySuqyw/viewform",
    posterPath: "/images/notice/aifuture_poster.webp",
  },
];

/* ─── List View ─────────────────────────────────────────── */
const NoticeList: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const events = useEvents(t);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />

      {/* Hero */}
      <div className="bg-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-7">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {t("notice")}
            </h1>
            <div className="w-20 h-1 bg-[#002380] rounded-full" />
          </div>
        </div>
      </div>

      {/* Event List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-4">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/notice/${event.id}`}
            className="group flex items-center justify-between border border-gray-200 rounded-xl px-6 py-5 bg-white shadow-sm hover:border-[#002380] hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="text-gray-800 font-semibold group-hover:text-[#002380] transition-colors">
                {language === "ko" ? event.titleKo : event.titleEn}
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0 ml-4">
              {language === "ko" ? (
                event.dateKo ? (
                  <span className="text-sm text-gray-400 hidden sm:block">
                    {event.dateKo}
                  </span>
                ) : (
                  <span className="text-sm text-gray-400 hidden sm:block"></span>
                )
              ) : event.dateEn ? (
                <span className="text-sm text-gray-400 hidden sm:block">
                  {event.dateEn}
                </span>
              ) : (
                <span className="text-sm text-gray-400 hidden sm:block"></span>
              )}
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-[#002380] transition-colors"
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ─── Detail View ────────────────────────────────────────── */
const NoticeDetail: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);
  const { eventId } = useParams<{ eventId: string }>();
  const events = useEvents(t);

  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumbs />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-500">
          {language === "ko" ? "공지를 찾을 수 없습니다." : "Notice not found."}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        {/* Back */}
        <Link
          to="/notice"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#002380] transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
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
          {language === "ko" ? "목록으로" : "Back to list"}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-center text-gray-900">
            {language === "ko" ? event.titleKo : event.titleEn}
          </h1>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          {(language === "ko" ? event.bodyKo : event.bodyEn) ? (
            <div className="p-6 md:p-8 md:px-10 md:py-10">
              {(language === "ko" ? event.dateKo : event.dateEn) && (
                <div className="text-sm text-gray-500 mb-6">
                  {language === "ko" ? event.dateKo : event.dateEn}
                </div>
              )}
              {event.imagePath && (
                <figure className="mb-8">
                  <img
                    src={event.imagePath}
                    alt={language === "ko" ? event.titleKo : event.titleEn}
                    className="w-full rounded-xl shadow-md object-contain"
                  />
                  {(language === "ko"
                    ? event.imageCaptionKo
                    : event.imageCaptionEn) && (
                    <figcaption className="text-center text-sm text-gray-500 mt-3">
                      &lt; {language === "ko"
                        ? event.imageCaptionKo
                        : event.imageCaptionEn}{" "}
                      &gt;
                    </figcaption>
                  )}
                </figure>
              )}
              <div className="space-y-5 text-gray-800 leading-relaxed">
                {(language === "ko" ? event.bodyKo : event.bodyEn)?.map(
                  (paragraph, idx) => (
                    <p key={idx} className="text-[15px]">
                      {paragraph}
                    </p>
                  ),
                )}
              </div>
              {(language === "ko" ? event.signatureKo : event.signatureEn) && (
                <div className="mt-8 pt-6 border-t border-gray-200 text-right font-semibold text-gray-900">
                  {language === "ko" ? event.signatureKo : event.signatureEn}
                </div>
              )}
              {event.posterPath && (
                <figure className="mt-10 pt-8 border-t border-gray-200">
                  <img
                    src={event.posterPath}
                    alt={
                      (language === "ko"
                        ? event.posterCaptionKo
                        : event.posterCaptionEn) ??
                      (language === "ko" ? event.titleKo : event.titleEn)
                    }
                    className="w-full rounded-xl shadow-md object-contain"
                  />
                  {(language === "ko"
                    ? event.posterCaptionKo
                    : event.posterCaptionEn) && (
                    <figcaption className="text-center text-sm text-gray-500 mt-3">
                      &lt; {language === "ko"
                        ? event.posterCaptionKo
                        : event.posterCaptionEn}{" "}
                      &gt;
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ) : (language === "ko" ? event.dateKo : event.dateEn) ? (
            <div className="flex flex-col">
              {/* Details */}
              <div className="p-6 md:p-8 space-y-5">
                {/* Date */}
                <div className="flex items-start gap-4">
                  <span className="font-bold text-gray-700 w-28 shrink-0 text-sm">
                    {language === "ko" ? "일시" : "Date & Time"}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {language === "ko" ? event.dateKo : event.dateEn}
                  </span>
                </div>
                {/* Location */}
                {(language === "ko" ? event.locationKo : event.locationEn) && (
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-gray-700 w-28 shrink-0 text-sm">
                      {language === "ko" ? "장소" : "Venue"}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {language === "ko" ? event.locationKo : event.locationEn}
                    </span>
                  </div>
                )}

                {/* Online */}
                {event.online && (
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-gray-700 w-28 shrink-0 text-sm">
                      {language === "ko" ? "온라인" : "Online"}
                    </span>
                    <div className="text-sm space-y-1">
                      <a
                        href={event.online.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#002380] hover:underline font-medium block break-all"
                      >
                        {event.online.url}
                      </a>
                      {event.online.meetingId && (
                        <div className="text-gray-600">
                          <span className="text-gray-500">
                            {language === "ko" ? "회의 ID: " : "Meeting ID: "}
                          </span>
                          {event.online.meetingId}
                        </div>
                      )}
                      {event.online.password && (
                        <div className="text-gray-600">
                          <span className="text-gray-500">
                            {language === "ko" ? "암호: " : "Password: "}
                          </span>
                          {event.online.password}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Registration */}
                {event.registration && (
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-gray-700 w-28 shrink-0 text-sm">
                      {language === "ko" ? "사전등록" : "Register"}
                    </span>
                    <a
                      href={event.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#002380] hover:underline font-medium text-sm"
                    >
                      {language === "ko" ? "신청하기 →" : "Apply here →"}
                    </a>
                  </div>
                )}
              </div>

              {/* Poster */}
              <div className="border-t border-gray-200 bg-gray-50 p-6 md:p-8">
                <PosterImage
                  src={event.posterPath}
                  alt={`${event.dept} poster`}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="p-6 md:p-8">
                <p className="text-gray-500 text-sm">
                  {language === "ko"
                    ? "추후 공지 예정입니다."
                    : "Details to be announced."}
                </p>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 p-6 md:p-8">
                <PosterImage
                  src={event.posterPath}
                  alt={`${event.dept} poster`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Export ─────────────────────────────────────────────── */
export { NoticeDetail };
export default NoticeList;
