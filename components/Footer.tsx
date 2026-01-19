
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-[#2b333c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">College of AI</h2>
            <p className="text-gray-400 text-sm max-w-md">
              {language === 'en' 
                ? 'Cultivating talent who will lead the national AI transition through integrated education and research.' 
                : '통합 교육 및 연구를 통해 국가 AI 전환을 선도할 인재를 육성합니다.'}
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Youtube</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-gray-300">Contact</h4>
            <p className="text-gray-400">042-350-2114</p>
            <p className="text-gray-400">291 Daehak-ro, Yuseong-gu, Daejeon 34141</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-gray-300">Information</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Visit/Map</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Academic Notice</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-gray-300">Policy</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Code of Ethics</a></li>
              <li><a href="#" className="hover:text-white">Information Disclosure</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-end">
             <div className="bg-gray-800 p-3 rounded flex justify-between items-center cursor-pointer">
                <span>Department Website</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
             </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-8 flex flex-col md:flex-row justify-between border-t border-gray-700">
          <p>COPYRIGHT(C) 2026 KAIST. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Visit Count: 1,234,567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
