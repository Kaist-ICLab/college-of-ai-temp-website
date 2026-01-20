
import { Translation } from './types';

export const translations: Translation = {
  kaist_ai: { en: 'College of AI', ko: 'AI대학' },
  member: { en: 'Member', ko: '구성원' },
  faculty: { en: 'Faculty', ko: '교수진' },
  admission_team: { en: 'Admission Team', ko: '행정팀' },
  student_council: { en: 'Student Council', ko: '학생회' },
  admissions: { en: 'Admissions', ko: '입학안내' },
  academics: { en: 'Academics', ko: '학사안내' },
  departments: { en: 'Departments', ko: '학과소개' },
  department_programs: { en: 'Department programs', ko: '학과프로그램' },
  introduction: { en: 'Introduction', ko: '대학소개' },
  research: { en: 'Research', ko: '연구' },
  research_areas: { en: 'Research Areas', ko: '연구 분야' },
  publications: { en: 'Publications', ko: '연구 성과' },
  education: { en: 'Education', ko: '교육' },
  ug_courses: { en: 'Undergraduate Courses', ko: '학부 교과과정' },
  grad_courses: { en: 'Graduate Courses', ko: '대학원 교과과정' },
  graduation_reqs: { en: 'Graduation Requirements', ko: '졸업 요건' },
  campus_life: { en: 'Campus Life', ko: '캠퍼스 생활' },
  giving: { en: 'Giving', ko: '발전기금' },
  search: { en: 'SEARCH', ko: '검색' },
  home: { en: 'HOME', ko: '홈' },
  welcome_msg: { en: 'Welcome Message', ko: '학장 인사말' },
  overview: { en: 'Overview', ko: '대학 개요' },
  degree_programs: { en: 'Degree Programs', ko: '학위 과정' },
  graduation_req: { en: 'Graduation Requirements', ko: '졸업 요건' },
  undergraduate: { en: 'Undergraduate', ko: '학부' },
  graduate: { en: 'Graduate', ko: '대학원' },
  master: { en: 'Master\'s', ko: '석사' },
  doctor: { en: 'Doctoral', ko: '박사' },
  integrated: { en: 'Integrated', ko: '석박사통합' },
  dept_ai_computing: { en: 'Department of AI Computing', ko: '인공지능컴퓨팅학과' },
  dept_ai_systems: { en: 'Department of AI Systems', ko: '인공지능시스템학과' },
  dept_ax: { en: 'Department of AX', ko: 'AX학과 (인공지능전환)' },
  dept_ai_future: { en: 'Department of AI Future', ko: '인공지능미래전략학과' },
  read_more: { en: 'Read More', ko: '자세히 보기' },
  website: { en: 'Website', ko: '홈페이지' },
  degrees_offered: { en: 'Degrees Offered', ko: '학위 과정' },
  eligibility: { en: 'Eligibility', ko: '지원 자격' },
  visit_admission_site: { en: 'Visit Official Admission Website', ko: '공식 입학 홈페이지 방문' },
  application_info: { en: 'Application Information', ko: '지원 정보' },
  application_timeline: { en: 'Application Timeline', ko: '전형 일정' },
  application_guide: { en: 'Application Guide', ko: '모집 요강' },
};

export const useTranslation = (lang: 'en' | 'ko') => {
  return (key: string) => {
    return translations[key] ? translations[key][lang] : key;
  };
};
