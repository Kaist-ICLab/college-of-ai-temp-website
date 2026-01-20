import React from 'react';
import './styles.css';

const RequirementEmptyState: React.FC = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-3xl border border-gray-100 print:hidden">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Requirement Content Not Available</h3>
      <p className="text-gray-500 max-w-md text-sm">Detailed requirements for this department/program are being updated to the new simplified format.</p>
    </div>
  );
};

export default RequirementEmptyState;
