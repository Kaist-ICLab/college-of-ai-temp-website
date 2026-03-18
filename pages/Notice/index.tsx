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
    id: "ai-computing",
    dept: t("dept_ai_computing"),
    titleEn: "2026 FALL Admission Information Session",
    titleKo: "2026 가을학기 입시 설명회",
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
    titleEn: "2026 FALL Admission Information Session",
    titleKo: "2026 가을학기 입시 설명회",
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
    titleEn: "2026 FALL Admission Information Session",
    titleKo: "2026 가을학기 입시 설명회",
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
    titleEn: "2026 FALL Admission Information Session",
    titleKo: "2026 가을학기 입시 설명회",
    dateEn: "2026.3.24.(Tue) | 17:30",
    dateKo: "2026.3.24.(화) | 17:30",
    locationEn: "Room 2125, N5 Building, Main Campus",
    locationKo: "KAIST 본원 N5동 1층, 2125호",
    online: {
      platform: "Zoom",
      url: "https://kaist.zoom.us/j/82184059994",
    },
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
              <span className="shrink-0 text-xs font-bold bg-[#002380] text-white rounded-full px-3 py-1">
                {event.dept}
              </span>
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
                  <span className="text-sm text-gray-400 hidden sm:block">
                    추후 공지
                  </span>
                )
              ) : event.dateEn ? (
                <span className="text-sm text-gray-400 hidden sm:block">
                  {event.dateEn}
                </span>
              ) : (
                <span className="text-sm text-gray-400 hidden sm:block">
                  TBD
                </span>
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
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
          <span className="text-xs font-bold bg-[#002380] text-white rounded-full px-3 py-1">
            {event.dept}
          </span>
          <h1 className="mt-4 text-2xl md:text-3xl font-black text-gray-900">
            {language === "ko" ? event.titleKo : event.titleEn}
          </h1>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          {(language === "ko" ? event.dateKo : event.dateEn) ? (
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
