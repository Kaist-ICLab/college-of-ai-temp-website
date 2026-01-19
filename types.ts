
export type Language = 'en' | 'ko';

export interface Translation {
  [key: string]: {
    en: string;
    ko: string;
  };
}

export enum RoutePath {
  Home = '/',
  Introduction = '/intro',
  Departments = '/departments',
  Academics = '/academics',
  Admissions = '/admissions',
}
