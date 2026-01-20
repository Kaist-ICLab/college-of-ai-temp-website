import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-[#2b333c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">College of AI</h2>
            <p className="text-gray-400 text-sm max-w-md">
              {language === "en"
                ? "Cultivating talent who will lead the national AI transition through integrated education and research."
                : "통합 교육 및 연구를 통해 국가 AI 전환을 선도할 인재를 육성합니다."}
            </p>
          </div>
          {/* SNS links removed as requested */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-gray-300">
              {language === "en" ? "Contact" : "문의처"}
            </h4>
            <div className="text-gray-400 space-y-1">
              {language === "en" ? (
                <>
                  <p>KAIST</p>
                  <p>291 Daehak-ro, Yuseong-gu, Daejeon 34141</p>
                  <p>T. 042-350-2114</p>
                </>
              ) : (
                <>
                  <p>대전광역시 유성구 대학로 291</p>
                  <p>한국과학기술원(KAIST)</p>
                  <p>T. 042-350-2114</p>
                </>
              )}
            </div>
          </div>
          {/* Information and Policy columns removed as requested */}
          <div className="flex flex-col justify-end">
            {/* Related sites dropdown commented out as requested
             <div className="bg-gray-800 p-3 rounded flex justify-between items-center cursor-pointer max-w-xs ml-auto md:ml-auto mr-auto md:mr-0 w-full">
                <span>{language === 'en' ? 'Department Website' : '관련 사이트'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
             </div>
             */}
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-8 flex flex-col md:flex-row justify-between border-t border-gray-700">
          <p>COPYRIGHT(C) 2026 KAIST. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
