import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Breadcrumbs from '../components/Breadcrumbs';
import { useTranslation } from '../i18n';

interface Course {
  code: string;
  name: { en: string; ko: string };
  level: string;
  required?: boolean;
}

interface DepartmentSection {
  title: { en: string; ko: string };
  courses: Course[];
  note?: { en: string; ko: string };
}

const CourseInfo: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation(language);

  const courseData: DepartmentSection[] = [
    {
      title: { en: 'Department of AI Computing', ko: 'AI 컴퓨팅학과' },
      courses: [
        { level: '1000-level', code: 'CS.10003', name: { en: 'Elements of AI', ko: '인공지능 기초' }, required: true },
        { level: '2000-level', code: 'CS.40700', name: { en: 'Introduction to Artificial Intelligence', ko: '인공지능 개론' }, required: true },
        { level: '2000-level', code: 'CS.30706', name: { en: 'Machine Learning', ko: '기계학습' }, required: true },
        { level: '2000-level', code: 'CS.20300', name: { en: 'System Programming', ko: '시스템프로그래밍' } },
        { level: '2000-level', code: 'CS.30704', name: { en: 'Introduction to Human-Computer Interaction', ko: '인간-컴퓨터 상호작용 개론' } },
        { level: '3000-level', code: 'CS.30707', name: { en: 'Introduction to Reinforcement Learning', ko: '강화학습 개론' } },
        { level: '3000-level', code: 'CS.30101', name: { en: 'Computer Organization', ko: '전산기조직' } },
        { level: '3000-level', code: 'CS.30300', name: { en: 'Operating Systems and Lab', ko: '운영체제 및 실험' } },
        { level: '4000-level', code: 'CS.40701', name: { en: 'Graph Machine Learning and Mining', ko: '그래프 기계학습 및 마이닝' } },
        { level: '4000-level', code: 'CS.40709', name: { en: 'Machine Learning for 3D Data', ko: '3차원 데이터를 위한 기계 학습' } },
        { level: '4000-level', code: 'CS.40806', name: { en: 'Wearable User Interface', ko: '웨어러블 사용자 인터페이스' } },
        { level: '5000-level+', code: 'CS.50700', name: { en: 'Artificial Intelligence and Machine Learning', ko: '인공지능 및 기계학습' } },
        { level: '5000-level+', code: 'CS.59900', name: { en: 'Special Topics in Computing <Resource Efficient AI Research>', ko: '컴퓨팅 특강 <리소스 효율적 AI 연구>' } },
        { level: '5000-level+', code: 'CS.50804', name: { en: 'Human-Computer Interaction', ko: '인간과 컴퓨터 상호작용' } },
        { level: '5000-level+', code: 'CS.50605', name: { en: 'IoT Data Science', ko: '사물인터넷 데이터 사이언스' } },
        { level: '5000-level+', code: 'CS.50705', name: { en: 'AI Ethics', ko: '인공지능 윤리' } },
      ],
    },
    {
      title: { en: 'Department of AI Systems', ko: 'AI 시스템학과' },
      courses: [
        // 2000-level Series
        { level: '2000-level', code: 'EE.20001A', name: { en: 'Circuit Theory', ko: '회로이론' }, required: true },
        { level: '2000-level', code: 'EE.20001B', name: { en: 'Circuit Theory', ko: '회로이론' }, required: true },
        { level: '2000-level', code: 'EE.20002A', name: { en: 'Signals and Systems', ko: '신호 및 시스템' }, required: true },
        { level: '2000-level', code: 'EE.20002B', name: { en: 'Signals and Systems', ko: '신호 및 시스템' }, required: true },
        { level: '2000-level', code: 'EE.20004', name: { en: 'Electromagnetics I', ko: '전기자기학 I' }, required: true },
        { level: '2000-level', code: 'EE.20009', name: { en: 'Introduction to Programming and Computer Systems', ko: '프로그래밍 및 컴퓨터시스템 개론' }, required: true },
        { level: '2000-level', code: 'EE.20010', name: { en: 'Probability and Introductory Random Processes', ko: '확률과 기초 확률과정' }, required: true },
        { level: '2000-level', code: 'EE.20011A', name: { en: 'Introduction to Physical Electronics', ko: '물리전자개론' }, required: true },
        { level: '2000-level', code: 'EE.20011B', name: { en: 'Introduction to Physical Electronics', ko: '물리전자개론' }, required: true },
        // 3000-level Series
        { level: '3000-level', code: 'EE.30003', name: { en: 'Digital System Design', ko: '디지털시스템' } },
        { level: '3000-level', code: 'EE.30004A', name: { en: 'Electronic Circuits', ko: '전자회로' } },
        { level: '3000-level', code: 'EE.30004B', name: { en: 'Electronic Circuits', ko: '전자회로' } },
        { level: '3000-level', code: 'EE.30012', name: { en: 'Introduction to Computer Architecture', ko: '컴퓨터 구조 개론' } },
        { level: '3000-level', code: 'EE.30021', name: { en: 'Communication Engineering', ko: '통신공학' } },
        { level: '3000-level', code: 'EE.30023', name: { en: 'Computer Network', ko: '컴퓨터 네트워크' } },
        { level: '3000-level', code: 'EE.30024', name: { en: 'Introduction to Cloud Computing', ko: '클라우드 컴퓨팅 개론' } },
        { level: '3000-level', code: 'EE.30026', name: { en: 'Introduction to Information Theory and Coding', ko: '정보이론 및 부호화 개론' } },
        { level: '3000-level', code: 'EE.30041', name: { en: 'Electromagnetics II', ko: '전기자기학 II' } },
        { level: '3000-level', code: 'EE.30052', name: { en: 'Fundamentals of Photonics', ko: '광공학개론' } },
        { level: '3000-level', code: 'EE.30062', name: { en: 'Semiconductor Devices', ko: '반도체소자' } },
        { level: '3000-level', code: 'EE.30081A', name: { en: 'Control System Engineering', ko: '제어시스템공학' } },
        { level: '3000-level', code: 'EE.30081B', name: { en: 'Control System Engineering', ko: '제어시스템공학' } },
        { level: '3000-level', code: 'EE.30091', name: { en: 'Power Electronics Control', ko: '전력전자제어' } },
        // 4000-level Series
        { level: '4000-level', code: 'EE.40003', name: { en: 'Analog Electronic Circuits', ko: '아날로그전자회로' } },
        { level: '4000-level', code: 'EE.40025', name: { en: 'Wireless Network', ko: '무선통신망' } },
        { level: '4000-level', code: 'EE.40032', name: { en: 'Digital Signal Processing', ko: '디지털신호처리' } },
        { level: '4000-level', code: 'EE.40041', name: { en: 'Introduction to Fiber Optic Communication Systems', ko: '광통신개론' } },
        { level: '4000-level', code: 'EE.40063', name: { en: 'Semiconductor IC Technology', ko: '반도체 집적회로 기술' } },
        { level: '4000-level', code: 'EE.40078', name: { en: 'Introduction to Multi-disciplinary Robotics', ko: '융합적로봇공학개론' } },
        { level: '4000-level', code: 'EE.40080', name: { en: 'Basics of Quantum Information and Quantum Computing', ko: '양자정보 및 컴퓨팅 기초' } },
        // 5000-level+ Series
        { level: '5000-level+', code: 'EE.50009', name: { en: 'Technical Writing', ko: '연구논문작성법' } },
        { level: '5000-level+', code: 'EE.50022', name: { en: 'Communication Theory', ko: '통신이론' } },
        { level: '5000-level+', code: 'EE.50023', name: { en: 'Convex Optimization Techniques', ko: '볼록최적화과정' } },
        { level: '5000-level+', code: 'EE.50028', name: { en: 'Engineering Random Processes', ko: '공학확률과정' } },
        { level: '5000-level+', code: 'EE.50031', name: { en: 'Statistical Learning Theory', ko: '통계적 학습이론' } },
        { level: '5000-level+', code: 'EE.50041', name: { en: 'Electromagnetic Theory', ko: '전자장이론' } },
        { level: '5000-level+', code: 'EE.50045', name: { en: 'Introductory Quantum Mechanics', ko: '양자역학 입문' } },
        { level: '5000-level+', code: 'EE.50055', name: { en: 'Optical Electronics', ko: '광전자공학' } },
        { level: '5000-level+', code: 'EE.50057', name: { en: 'Coding Theory', ko: '부호이론' } },
        { level: '5000-level+', code: 'EE.50061', name: { en: 'Introduction to VLSI Devices', ko: '집적회로소자개론' } },
        { level: '5000-level+', code: 'EE.50071', name: { en: 'Advanced Electronic Circuits', ko: '전자회로특론' } },
        { level: '5000-level+', code: 'EE.50074', name: { en: 'Computer Aided Design of VLSI Circuits and Systems', ko: 'VLSI를 위한 CAD' } },
        { level: '5000-level+', code: 'EE.50077', name: { en: 'Future Semiconductor Device Technology', ko: '미래 반도체 소자기술' } },
        { level: '5000-level+', code: 'EE.50081', name: { en: 'Linear Systems', ko: '선형시스템' } },
        { level: '5000-level+', code: 'EE.60019', name: { en: 'Mathematical Foundations of Reinforcement Learning', ko: '강화학습이론' } },
        { level: '5000-level+', code: 'EE.60075', name: { en: 'Digital Computer Arithmetic', ko: '디지털컴퓨터연산' } },
        { level: '5000-level+', code: 'EE.60076', name: { en: 'Analog Integrated Circuits', ko: '아날로그집적회로' } },
        { level: '5000-level+', code: 'EE.60078', name: { en: 'Digital Integrated Circuits', ko: '디지털집적회로' } },
      ],
    },
    {
      title: { en: 'Department of AX (AI Transformation)', ko: 'AX 학과' },
      note: {
        en: 'Cross-track recognition enabled: Courses taken in other AX tracks are counted toward graduation credit.',
        ko: '타 전공 트랙의 교과목이라 하더라도 AX학과 졸업이수 학점으로 인정됨.'
      },
      courses: [
        // Data & Content AI Track
        { level: 'Data & Content', code: 'IE.20041', name: { en: 'Engineering Statistics I', ko: '공학통계 I' }, required: true },
        { level: 'Data & Content', code: 'IE.20060', name: { en: 'Data Structure and Analysis', ko: '데이터 구조 및 분석' }, required: true },
        { level: 'Data & Content', code: 'ID.20019', name: { en: 'Computer-Aided Design', ko: '컴퓨터응용디자인' }, required: true },
        { level: 'Data & Content', code: 'CS.40700', name: { en: 'Introduction to Artificial Intelligence', ko: '인공지능 개론' } },
        { level: 'Data & Content', code: 'CS.30706', name: { en: 'Machine Learning', ko: '기계학습' } },
        { level: 'Data & Content', code: 'IE.30031', name: { en: 'Operations Research: Optimization', ko: 'OR : 최적화' } },
        { level: 'Data & Content', code: 'IE.30043', name: { en: 'Statistical Machine Learning', ko: '통계적 기계학습' } },
        { level: 'Data & Content', code: 'ID.30011', name: { en: 'Software Prototyping', ko: '소프트웨어프로토타이핑' } },
        { level: 'Data & Content', code: 'ID.49902', name: { en: 'Special Topics in DesignⅤ<Immersive Space>', ko: '미래디자인:AI와 사회' } },
        { level: 'Data & Content', code: 'CTP.40045', name: { en: 'Augmented Reality', ko: '증강현실' } },

        // Physical & Mfg Track
        { level: 'Physical & Mfg', code: 'IE.20051', name: { en: 'Manufacturing Process Innovation', ko: '제조프로세스 혁신' }, required: true },
        { level: 'Physical & Mfg', code: 'CS.40700', name: { en: 'Introduction to Artificial Intelligence', ko: '인공지능 개론' } },
        { level: 'Physical & Mfg', code: 'CS.30706', name: { en: 'Machine Learning', ko: '기계학습' } },
        { level: 'Physical & Mfg', code: 'ME.30040', name: { en: 'Engineering Design', ko: '공학설계' } },
        { level: 'Physical & Mfg', code: 'ME.30070', name: { en: 'Understanding of Materials and Processing', ko: '재료와 가공의 이해' } },
        { level: 'Physical & Mfg', code: 'IE.30031', name: { en: 'Operations Research: Optimization', ko: 'OR : 최적화' } },
        { level: 'Physical & Mfg', code: 'ME.40058', name: { en: 'Programming for Signal and Image Processing', ko: '신호 및 영상처리를 위한 프로그래밍' } },
        { level: 'Physical & Mfg', code: 'ME.40059', name: { en: 'Introduction to Visual Intelligence', ko: '시각지능개론' } },
        { level: 'Physical & Mfg', code: 'ME.40062', name: { en: 'Automatic Control', ko: '자동제어' } },

        // Bio & Materials Track
        { level: 'Bio & Materials', code: 'IE.20060', name: { en: 'Data Structure and Analysis', ko: '데이터 구조 및 분석' }, required: true },
        { level: 'Bio & Materials', code: 'MS.20011', name: { en: 'Introduction to Materials Science and Engineering', ko: '신소재과학개론' }, required: true },
        { level: 'Bio & Materials', code: 'BiS.20000', name: { en: 'Bioengineering Fundamentals', ko: '바이오 공학개론' }, required: true },
        { level: 'Bio & Materials', code: 'CS.40700', name: { en: 'Introduction to Artificial Intelligence', ko: '인공지능 개론' } },
        { level: 'Bio & Materials', code: 'CS.30706', name: { en: 'Machine Learning', ko: '기계학습' } },
        { level: 'Bio & Materials', code: 'BiS.33002', name: { en: 'Bio-Information Processing', ko: '바이오정보처리' } },
        { level: 'Bio & Materials', code: 'MS.30060', name: { en: 'Mechanical Behavior and Mechanics of Materials', ko: '소재의 기계적 물성 및 역학' } },
        { level: 'Bio & Materials', code: 'CBE.30041', name: { en: 'Process Simulation and Control', ko: '공정모사와 제어' } },
        { level: 'Bio & Materials', code: 'CoE.49901', name: { en: 'Special Topics in Smart Convergence<Protein & Artificial Intelligence>', ko: '스마트 융합특강<단백질과 인공지능>' } },
        { level: 'Bio & Materials', code: 'CBE.49900', name: { en: 'Special Topics in Chemical and Biomolecular Engineering<Chemical engineering of electronic devices>', ko: '생명화학공학특강<AI를 이용한 생화공 문제 해결>' }, required: false },
        { level: 'Bio & Materials', code: 'BCS.40010', name: { en: 'Laboratory in Experimental Data Analysis and Modeling', ko: '생체 데이터분석 및 모델링 실험' } },

        // Sustainability Track
        { level: 'Sustainability', code: 'CE.20012', name: { en: 'Environment and Sustainability: an Introduction for Engineers', ko: '환경과 지속가능성 개론' }, required: true },
        { level: 'Sustainability', code: 'CE.20030', name: { en: 'Introduction to Geotechnical Engineering', ko: '지반공학개론' } },
        { level: 'Sustainability', code: 'CE.20050', name: { en: 'Introduction to Smart City and Digital Infrastructure', ko: '스마트시티와 디지털 인프라스트럭쳐 개론' }, required: true },
        { level: 'Sustainability', code: 'CS.40700', name: { en: 'Introduction to Artificial Intelligence', ko: '인공지능 개론' } },
        { level: 'Sustainability', code: 'CS.30706', name: { en: 'Machine Learning', ko: '기계학습' } },
        { level: 'Sustainability', code: 'CE.30050', name: { en: 'Introduction to Mobility Systems Engineering', ko: '모빌리티시스템공학개론' } },
        { level: 'Sustainability', code: 'CE.40075', name: { en: 'Waste Management for Circular Environments', ko: '자원순환사회를 위한 폐기물관리' } },
        { level: 'Sustainability', code: 'CE.49903', name: { en: 'Special Topics in Civil and Environmental Engineering<Climate System Modeling>', ko: '건설 및 환경공학 특강<기후 시스템 모델링>' } },
        { level: 'Sustainability', code: 'GGS.50004', name: { en: 'Science of Climate Change', ko: '기후변화의 과학' } },
        { level: 'Sustainability', code: 'GGS.50021', name: { en: 'Integrated Assessment of Global Environmental Problems', ko: '글로벌 환경문제 통합평가론' } },
        { level: 'Sustainability', code: 'GGS.50023', name: { en: 'Methods in Climate and Environmental Health', ko: '기후 및 환경보건 연구방법론' } },
        { level: 'Sustainability', code: 'GGS.50030', name: { en: 'Bioindustry and Green Growth', ko: '바이오산업과 녹색성장' } },
        { level: 'Sustainability', code: 'GGS.50039', name: { en: 'Data Science Methodologies for Sustainable Technology Systems', ko: '지속가능 기술시스템을 위한 데이터 과학 방법론' } },
      ],
    },
    {
      title: { en: 'Department of AI Future', ko: 'AI 미래학과' },
      courses: [
        { level: '1000-level', code: 'CS.10003', name: { en: 'Elements of AI', ko: '인공지능 기초' } },
        { level: '2000-level', code: 'FSM.20001', name: { en: 'Introduction to Future Strategy', ko: '미래학 개론' } },
        { level: '2000-level', code: 'IE.20041', name: { en: 'Engineering Statistics I', ko: '공학통계 I' } },
        { level: '2000-level', code: 'IE.20060', name: { en: 'Data Structure and Analysis', ko: '데이터 구조 및 분석' } },
        { level: '2000-level', code: 'CE.20012', name: { en: 'Environment and Sustainability: an Introduction for Engineers', ko: '환경과 지속가능성 개론' } },
        { level: '3000-level', code: 'CS.30706', name: { en: 'Machine Learning', ko: '기계학습' } },
        { level: '3000-level', code: 'IP.30001', name: { en: 'Intellectual Property Overview', ko: '지식재산권 개요' } },
        { level: '4000-level', code: 'CS.40700', name: { en: 'Introduction to Artificial Intelligence', ko: '인공지능 개론' } },
        { level: '4000-level', code: 'IP.40007', name: { en: 'Entrepreneurial Law', ko: '기업가를 위한 법' } },
        { level: '4000-level', code: 'IP.40010', name: { en: 'Law, Technology and Innovation', ko: '법, 기술, 혁신' } },
        { level: '5000-level+', code: 'GGS.50021', name: { en: 'Integrated Assessment of Global Environmental Problems', ko: '글로벌 환경문제 통합평가론' } },
        { level: '5000-level+', code: 'GGS.50023', name: { en: 'Methods in Climate and Environmental Health', ko: '기후 및 환경보건 연구방법론' } },
        { level: '5000-level+', code: 'GGS.50004', name: { en: 'Science of Climate Change', ko: '기후변화의 과학' } },
        { level: '5000-level+', code: 'CC.50031', name: { en: 'Patent Analysis and Invention Disclosure', ko: '특허분석과 발명출원' } },
        { level: '5000-level+', code: 'CS.50705', name: { en: 'AI Ethics', ko: '인공지능 윤리' } },
      ],
    },
  ];

  const calculateRowSpans = (courses: Course[]) => {
    const rowSpans: { [index: number]: number } = {};
    let i = 0;
    while (i < courses.length) {
      let j = i + 1;
      while (j < courses.length && courses[j].level === courses[i].level) {
        j++;
      }
      rowSpans[i] = j - i;
      i = j;
    }
    return rowSpans;
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative mb-8">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                {t('course_information')}
              </h1>
              <div className="mt-7 w-20 h-1 bg-[#002380] rounded-full mx-auto"></div>
            </div>

            <p className="text-lg text-gray-500 leading-relaxed">
              {language === 'en'
                ? 'Approved Major Course List for the College of AI, Spring Semester 2026. Required major courses are indicated in bold.'
                : '2026학년도 봄학기 AI대학 전공 인정 교과목 리스트입니다. 굵은 글씨는 전공필수 과목입니다.'}
            </p>
          </div>
        </header>

        <div className="space-y-24">
          {courseData.map((dept, deptIdx) => {
            const rowSpans = calculateRowSpans(dept.courses);

            return (
              <section key={deptIdx} className="scroll-mt-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-1 h-10 bg-[#002380] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                      {language === 'en' ? dept.title.en : dept.title.ko}
                    </h2>
                  </div>
                  {dept.note && (
                    <p className="mt-4 md:mt-0 text-xs font-bold text-[#002380] italic bg-blue-50 px-4 py-2 rounded-lg">
                      {language === 'en' ? dept.note.en : dept.note.ko}
                    </p>
                  )}
                </div>

                <div className="overflow-hidden bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border-collapse">
                      <thead className="bg-gray-50/80">
                        <tr>
                          <th className="px-8 py-2 text-left text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-200">Category</th>
                          <th className="px-8 py-2 text-left text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-200">Code</th>
                          <th className="px-8 py-2 text-left text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-200">Course Name</th>
                          <th className="px-8 py-2 text-right text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-200">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {dept.courses.map((course, idx) => (
                          <tr key={idx} className="group hover:bg-gray-50/50 transition-colors">
                            {rowSpans[idx] !== undefined && (
                              <td
                                className="px-8 py-2 whitespace-nowrap align-top border-r border-gray-100"
                                rowSpan={rowSpans[idx]}
                              >
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-gray-100 text-gray-500 uppercase tracking-tighter sticky top-24">
                                  {course.level}
                                </span>
                              </td>
                            )}
                            <td className="px-8 py-2 whitespace-nowrap">
                              <code className={`text-sm ${course.required ? 'font-black' : 'font-bold'} text-[#002380]`}>{course.code}</code>
                            </td>
                            <td className="px-8 py-2">
                              <span className="text-base tracking-tight text-gray-700 font-medium">
                                {language === 'en' ? course.name.en : course.name.ko}
                              </span>
                            </td>
                            <td className="px-8 py-2 text-right whitespace-nowrap">
                              {course.required ? (
                                <span className="text-[10px] font-black text-[#002380] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                                  Required
                                </span>
                              ) : (
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                                  Elective
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;