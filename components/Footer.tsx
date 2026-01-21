import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { useTranslation } from "../i18n";

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  return (
    <footer className="bg-[#2b333c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand & Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-700 pb-4 mb-4 gap-8">
          {/* Brand & Description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://images.seeklogo.com/logo-png/40/2/kaist-korea-advanced-institute-of-science-and-tech-logo-png_seeklogo-402926.png"
                alt="KAIST Logo"
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none">
                  College of AI
                </span>
                <span className="text-gray-500 text-[9px] font-medium uppercase tracking-widest mt-1">
                  AI대학
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xl leading-relaxed whitespace-normal">
              {language === "en" ? (
                <>
                  Cultivating talent who will lead the national AI transition
                  <br />
                  through integrated education and research.
                </>
              ) : (
                "통합 교육 및 연구를 통해 국가 AI 전환을 선도할 인재를 육성합니다."
              )}
            </p>
          </div>

          {/* Contact Info  */}
          <div className="md:text-right flex-shrink-0 mt-4 md:mt-0">
            <div className="text-gray-400 text-sm space-y-1">
              {language === "en" ? (
                <>
                  <p className="font-bold text-gray-300 mb-1">KAIST</p>
                  <p>
                    291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea
                  </p>
                  <p>T. +82 42-350-2114</p>
                </>
              ) : (
                <>
                  <p className="font-bold text-gray-300 mb-1">
                    한국과학기술원(KAIST)
                  </p>
                  <p>대전광역시 유성구 대학로 291 (34141)</p>
                  <p>T. 042-350-2114</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-[11px] text-gray-500 flex flex-col md:flex-row justify-between items-center uppercase tracking-widest">
          <p>COPYRIGHT(C) 2026 KAIST. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
