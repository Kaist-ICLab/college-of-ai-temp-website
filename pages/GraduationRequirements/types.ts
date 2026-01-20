// Types for Graduation Requirements page

export type DeptId = 'aic' | 'ais' | 'ax' | 'aif';
export type TabId = 'ug' | 'grad';

export interface DeptConfig {
    id: DeptId;
    name: string;
}

export const DEPTS: DeptConfig[] = [
    { id: 'aic', name: 'dept_ai_computing' },
    { id: 'ais', name: 'dept_ai_systems' },
    { id: 'ax', name: 'dept_ax' },
    { id: 'aif', name: 'dept_ai_future' },
];
