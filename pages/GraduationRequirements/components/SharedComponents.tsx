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

interface OutlineTopProps {
  marker: string;
  children: React.ReactNode;
}

/**
 * Top-level outline item (가/나/다... or A/B/C...), mirroring an official document's numbering
 */
export const OutlineTop: React.FC<OutlineTopProps> = ({ marker, children }) => (
  <div className="flex gap-2 items-baseline mt-5 first:mt-0">
    <span className="font-bold text-gray-900 shrink-0">{marker}</span>
    <span className="text-gray-800">{children}</span>
  </div>
);

interface OutlineLineProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Second-level outline bullet (○)
 */
export const OutlineCircle: React.FC<OutlineLineProps> = ({ children, className = '' }) => (
  <div className={`flex gap-2 items-start ml-4 sm:ml-5 mt-1.5 text-gray-700 ${className}`.trim()}>
    <span className="shrink-0">○</span>
    <span>{children}</span>
  </div>
);

/**
 * Third-level outline bullet (-)
 */
export const OutlineDash: React.FC<OutlineLineProps> = ({ children, className = '' }) => (
  <div className={`flex gap-2 items-start ml-8 sm:ml-10 mt-1 text-gray-600 ${className}`.trim()}>
    <span className="shrink-0">-</span>
    <span>{children}</span>
  </div>
);

/**
 * Fourth-level outline bullet (·)
 */
export const OutlineDot: React.FC<OutlineLineProps> = ({ children, className = '' }) => (
  <div className={`flex gap-2 items-start ml-12 sm:ml-14 mt-1 text-gray-600 ${className}`.trim()}>
    <span className="shrink-0">·</span>
    <span>{children}</span>
  </div>
);

interface OutlineNoteProps {
  children: React.ReactNode;
  level?: 1 | 2;
}

/**
 * Note line (※), indented to match the level it annotates
 */
export const OutlineNote: React.FC<OutlineNoteProps> = ({ children, level = 1 }) => (
  <p className={`italic text-gray-500 text-sm mt-1 ${level === 1 ? 'ml-4 sm:ml-5' : 'ml-8 sm:ml-10'}`}>
    {children}
  </p>
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
