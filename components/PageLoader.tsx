import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const PageLoader: React.FC = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="flex justify-center items-center h-full min-h-[400px] w-full bg-white/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#002380] border-opacity-70 mb-4"></div>
        {/* Loading text */}
        <p className="text-gray-500 font-medium text-sm animate-pulse">
          {language === 'ko' ? '로딩 중...' : 'Loading...'}
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
