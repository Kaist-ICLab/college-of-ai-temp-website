import React from 'react';

interface SectionHeaderProps {
  title: string;
}

/**
 * Blue vertical bar header used for requirement sections
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div className="flex items-center gap-2 mb-2">
    <span className="w-1.5 h-6 bg-[#002380] rounded-full"></span>
    <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
  </div>
);

interface SubSectionHeaderProps {
  title: string;
}

/**
 * Open circle header for subsections (e.g., mandatory/elective within major)
 */
export const SubSectionHeader: React.FC<SubSectionHeaderProps> = ({ title }) => (
  <div className="flex gap-2 items-center mb-2">
    <div className="w-2 h-2 rounded-full border-2 border-[#002380]"></div>
    <p className="font-bold text-gray-800">{title}</p>
  </div>
);

interface BulletItemProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Bullet point item with blue dot
 */
export const BulletItem: React.FC<BulletItemProps> = ({ children, className = '' }) => (
  <div className={`flex gap-2 items-start ${className}`.trim()}>
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#002380] shrink-0"></span>
    {typeof children === 'string' ? <p>{children}</p> : children}
  </div>
);

interface NoteTextProps {
  children: React.ReactNode;
  className?: string;
  indented?: boolean;
}

/**
 * Italic note text, optionally indented
 */
export const NoteText: React.FC<NoteTextProps> = ({ children, className = '', indented = false }) => (
  <p className={`italic text-gray-500 ${indented ? 'ml-5 sm:ml-7' : ''} ${className}`.trim()}>
    {children}
  </p>
);

interface RequirementBoxProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Requirement box container with rounded corners and gray background
 */
export const RequirementBox: React.FC<RequirementBoxProps> = ({ children, className = '' }) => (
  <div className={`requirement-box bg-gray-50 border border-gray-100 rounded-3xl p-5 sm:p-7 md:p-9 ${className}`.trim()}>
    {children}
  </div>
);

interface RequirementTitleProps {
  title: string;
  subtitle?: string;
}

/**
 * Title section for requirement boxes
 */
export const RequirementTitle: React.FC<RequirementTitleProps> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
    {subtitle && <p className="text-sm text-gray-500 italic">{subtitle}</p>}
  </div>
);
