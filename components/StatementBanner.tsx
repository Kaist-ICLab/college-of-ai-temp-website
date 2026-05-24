import React from "react";
import { Link } from "react-router-dom";

interface StatementBannerProps {
  onClose: () => void;
}

const StatementBanner: React.FC<StatementBannerProps> = ({ onClose }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#031530] via-[#051d42] to-[#020d20] border-b border-[#0f3460]/40 text-white flex flex-col items-center justify-center text-center py-4 md:py-5 px-4 md:px-8 transition-all duration-300">
      {/* Cyber Network SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00c6ff" stopOpacity="0" />
            <stop offset="30%" stopColor="#0072ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00c6ff" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#0072ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00c6ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glow-lines" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00c6ff" stopOpacity="0" />
            <stop offset="100%" stopColor="#00c6ff" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Curves */}
        <path
          d="M 60,180 Q 300,100 520,60 T 720,60 T 920,60 Q 1140,100 1380,180"
          stroke="url(#cyber-grad)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
        />
        <path
          d="M 160,180 Q 380,120 560,85 T 720,85 T 880,85 Q 1060,120 1280,180"
          stroke="url(#cyber-grad)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 260,180 Q 460,140 600,110 T 720,110 T 840,110 Q 980,140 1180,180"
          stroke="url(#cyber-grad)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Central Neural Grid vertical lines */}
        <line
          x1="720"
          y1="10"
          x2="720"
          y2="110"
          stroke="url(#glow-lines)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <line
          x1="680"
          y1="20"
          x2="680"
          y2="110"
          stroke="url(#glow-lines)"
          strokeWidth="0.8"
        />
        <line
          x1="760"
          y1="20"
          x2="760"
          y2="110"
          stroke="url(#glow-lines)"
          strokeWidth="0.8"
        />
        <line
          x1="640"
          y1="40"
          x2="640"
          y2="110"
          stroke="url(#glow-lines)"
          strokeWidth="0.6"
        />
        <line
          x1="800"
          y1="40"
          x2="800"
          y2="110"
          stroke="url(#glow-lines)"
          strokeWidth="0.6"
        />
        <line
          x1="600"
          y1="60"
          x2="600"
          y2="110"
          stroke="url(#glow-lines)"
          strokeWidth="0.5"
        />
        <line
          x1="840"
          y1="60"
          x2="840"
          y2="110"
          stroke="url(#glow-lines)"
          strokeWidth="0.5"
        />

        {/* Neural Nodes */}
        <circle cx="720" cy="60" r="3.5" fill="#00c6ff" filter="url(#glow)" />
        <circle cx="680" cy="72" r="2.5" fill="#00c6ff" />
        <circle cx="760" cy="72" r="2.5" fill="#00c6ff" />
        <circle cx="640" cy="85" r="2" fill="#00c6ff" />
        <circle cx="800" cy="85" r="2" fill="#00c6ff" />
        <circle cx="600" cy="98" r="1.5" fill="#0072ff" />
        <circle cx="840" cy="98" r="1.5" fill="#0072ff" />
      </svg>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
        aria-label="Close Announcement"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-none w-full gap-1.5 px-4">
        {/* Title */}
        <h2 className="text-[13px] sm:text-[15px] md:text-[18px] lg:text-[21px] font-black tracking-wide leading-none uppercase select-none whitespace-normal md:whitespace-nowrap">
          STATEMENT FROM KAIST AI COLLEGE FACULTY REGARDING SOUTH KOREA'S BID FOR THE UN GLOBAL AI HUB
        </h2>

        {/* Subtitle */}
        <p className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13.5px] text-[#a4c1ee] font-medium select-none whitespace-normal md:whitespace-nowrap">
          대한민국, UN 글로벌 AI 허브 유치 지지 선언문 - KAIST AI대학원 교수 일동
          <span className="mx-2 opacity-50">/</span>
          Full Faculty Statement Supporting South Korea's UN Global AI Hub Bid
        </p>

        {/* Gold Action Button */}
        <div className="mt-1">
          <Link
            to="/notice/global-ai-hub-statement"
            className="inline-flex flex-col items-center justify-center bg-[#f0c842] hover:bg-[#fae273] text-[#031530] font-black py-2 px-8 rounded shadow-md hover:shadow-lg transition-all duration-200 group transform hover:scale-[1.03]"
          >
            <span className="text-[13px] leading-tight tracking-wider uppercase font-black">
              READ MORE
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] font-bold">전문 읽기</span>
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatementBanner;
