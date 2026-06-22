import React from "react";

export const GradapplyLink = () => (
  <a
    href="https://gradapply.kaist.ac.kr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#002380] hover:underline break-all"
  >
    https://gradapply.kaist.ac.kr
  </a>
);

export const eligibilityRows = [
  {
    course: "석사과정",
    criteria: "학사학위자 (혹은 입학시점까지 졸업이 가능한 학사 졸업예정자)",
  },
  {
    course: "박사과정",
    criteria: "석사학위자 (혹은 입학시점까지 졸업이 가능한 석사 졸업예정자)",
  },
  {
    course: "석박사 통합과정",
    criteria: "학사학위자 (혹은 입학시점까지 졸업이 가능한 학사 졸업예정자)",
  },
  {
    course: "(KAIST석사재학생)\n석박사 통합과정",
    criteria:
      "한국과학기술원 석사과정을 1학기만 이수한 자\n(2학기 이상 이수자는 자격 없음)",
  },
  {
    course: "(KAIST학사재학생)\n학∙석박통합연계과정",
    criteria:
      "1. 입시 기준일까지 3학기~4학기만 이수한 KAIST 학사과정 재학생 (5학기 이상 이수자는 자격 없음)\n2. 69학점 이상의 학점을 취득\n3. 누적 평점평균이 3.7 이상 (단, KAIST 소속으로 수행한 우수 연구실적을 제출하는 경우 성적제한 없음)",
  },
];

export const categoriesRows = [
  {
    type: "국비 장학생",
    desc: "학생 교육경비의 일부를 정부재원으로 지원하는 제도입니다.",
  },
  {
    type: "KAIST 장학생",
    desc: "학생 교육경비를 지도교수의 연구비에서 지원하는 제도로 입학 시 학생은 교육경비를 지원하는 교수의 지도학생이 되므로 교수의 전공에 따라 학생의 전공분야가 제한될 수 있습니다.",
  },
  {
    type: "일반 장학생",
    desc: "산업체/연구기관/국가기관/교육기관의 추천을 받아 추천기관이 교육비를 부담하는 제도입니다. 지원자는 소속 기관장으로부터 교육비 부담 및 추천 서류를 제출해야 합니다.",
  },
];

export interface ScheduleRow {
  category: React.ReactNode;
  timeline: React.ReactNode;
  method: React.ReactNode;
}

export const schedule1Rows: ScheduleRow[] = [
  {
    category: "원서접수\n(서류제출 포함)",
    timeline: "2026. 03. 27(금) 10:00\n~ 04. 07(화) 17:30",
    method: (
      <span>
        KAIST 입시시스템 (<GradapplyLink />
        )에서 지원서 작성 및 전형료 결제
      </span>
    ),
  },
  {
    category: "1단계 합격자 발표",
    timeline: "2026. 05. 14(목) 14:00 이후",
    method: (
      <span>
        KAIST 입시시스템 (<GradapplyLink /> 합격자발표){"\n"}개인별 2단계 전형
        일정 및 장소 확인{"\n"}(입시시스템을 통하여 공지)
      </span>
    ),
  },
  {
    category: "2단계 전형(면접)",
    timeline: "2026. 05. 16(토)\n~ 05. 26(화)",
    method: "",
  },
  {
    category: "최종합격자 발표",
    timeline: "2026. 06. 25(목) 14:00 이후",
    method: (
      <span>
        KAIST 입시시스템{"\n"}(<GradapplyLink /> 합격자 발표)
      </span>
    ),
  },
];

export const schedule2Rows: ScheduleRow[] = [
  {
    category: "원서접수\n(서류제출 포함)",
    timeline: "2026. 04. 08(수) 10:00\n~ 04. 14(화) 17:30",
    method: (
      <span>
        KAIST 입시시스템 (<GradapplyLink />
        )에서 지원서 작성 및 전형료 결제
      </span>
    ),
  },
  {
    category: "1단계 합격자 발표",
    timeline: "2026. 05. 14(목) 14:00 이후",
    method: (
      <span>
        KAIST 입시시스템 (<GradapplyLink /> 합격자발표){"\n"}개인별 2단계 전형
        일정 및 장소 확인{"\n"}(입시시스템을 통하여 공지)
      </span>
    ),
  },
  {
    category: "2단계 전형(면접)",
    timeline: "2026. 05. 16(토)\n~ 05. 26(화)",
    method: "",
  },
  {
    category: "최종합격자 발표",
    timeline: "2026. 06. 25(목) 14:00 이후",
    method: (
      <span>
        KAIST 입시시스템{"\n"}(<GradapplyLink /> 합격자 발표)
      </span>
    ),
  },
];

export const advisorTimingRows = [
  { course: "석사과정", timing: "최종 합격자 발표 및 석사 OT 이후 매칭" },
  {
    course: "박사과정",
    timing:
      "원서접수 전 매칭: 원서접수 전 지도예정교수 컨택하여 사전 협의 후 지원\n온라인 원서접수 시 지도예정교수 1명 입력 필수",
  },
  {
    course: "재학생\n석박사통합과정",
    timing:
      "원서접수 전 매칭: 원서접수 전 지도예정교수 컨택하여 사전 협의 후 지원\n온라인 원서접수 시 지도예정교수 1명 입력 필수",
  },
  {
    course: "학∙석박통합\n연계과정",
    timing: "원서접수 전 매칭: 원서접수 전 지도예정교수와 사전협의 후 지원",
  },
];

export const aicAdvisorBullets = [
  "국비로 입학한 학생은 AI컴퓨팅학과 모든 교수를 지도교수로 신청할 수 있습니다. 신청한 지도교수가 국비TO가 있고 학생지도를 희망할 경우 매칭이 됩니다.",
  "교수의 연구비에서 지원받는 KAIST 장학생으로 입학한 학생은 연구비 지원 교수만이 지도교수가 될 수 있습니다.",
  "KAIST프로그램 장학생은 KAIST프로그램 참여 교수만을 지도교수로 신청할 수 있습니다.",
  "일반 장학생은 AI컴퓨팅학과 모든 교수를 지도교수로 신청할 수 있습니다.",
];

export const aisAdvisorBullets = [
  "국비로 입학한 학생은 AI시스템학과 모든 교수를 지도교수로 신청할 수 있습니다. 신청한 지도교수가 국비TO가 있고 학생 지도를 희망할 경우 매칭이 됩니다.",
  "교수의 연구비에서 지원받는 KAIST 장학생으로 입학한 학생은 연구비 지원 교수만이 지도교수가 될 수 있습니다.",
  "KAIST프로그램 장학생은 KAIST프로그램 참여 교수만을 지도교수로 신청할 수 있습니다.",
  "일반 장학생은 AI시스템학과 모든 교수를 지도교수로 신청할 수 있습니다.",
];

export const axAdvisorBullets = [
  "국비로 입학한 학생은 AX학과 모든 교수를 지도교수로 신청할 수 있습니다. 신청한 지도교수가 국비TO가 있고 학생 지도를 희망할 경우 매칭이 됩니다.",
  "교수의 연구비에서 지원받는 KAIST 장학생으로 입학한 학생은 연구비 지원 교수만이 지도교수가 될 수 있습니다.",
  "KAIST프로그램 장학생은 KAIST프로그램 참여 교수만을 지도교수로 신청할 수 있습니다.",
  "일반 장학생은 AX학과 모든 교수 (겸임 교수 포함)를 지도교수로 신청할 수 있습니다.",
];

export const aifAdvisorBullets = [
  "국비로 입학한 학생은 AI미래학과 모든 교수 (겸임 교수 포함)를 지도교수로 신청할 수 있습니다. 신청한 지도교수가 국비TO가 있고 학생 지도를 희망할 경우 매칭이 됩니다.",
  "교수의 연구비에서 지원받는 KAIST 장학생으로 입학한 학생은 연구비 지원 교수만이 지도교수가 될 수 있습니다.",
  "일반 장학생은 AI미래학과 모든 교수 (겸임 교수 포함)를 지도교수로 신청할 수 있습니다.",
];
