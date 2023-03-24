import { colors } from '@unovis/ts'

export type DataRecord = {
  name: string;
  startDate: number;
  endDate: number;
  type: ProductType | `${ProductType}`;
  description?: string;
}
export enum ProductType { Language = 'language', Database = 'db', Utilities = 'util', Framework = 'fw', Infrastructure = 'infra' }

export const colorMap: Record<ProductType, string> = {
  [ProductType.Language]: colors[0],
  [ProductType.Database]: colors[1],
  [ProductType.Utilities]: colors[2],
  [ProductType.Framework]: colors[3],
  [ProductType.Infrastructure]: colors[4],
}

const y2t = (year) => { return new Date(year, 1, 1).getTime()}

export const data = [
  {
    name: 'MSX-BASIC',
    type: 'language',
    startDate: y2t(1988),
    endDate: y2t(1991),
  },
  {
    name: 'Excel VBA',
    type: 'language',
    startDate: y2t(2003),
    endDate: Date.now(),
  },
  {
    name: 'Lotus Script',
    type: 'language',
    startDate: y2t(2005),
    endDate: y2t(2014),
  },
  {
    name: 'ASP.NET WebForms',
    type: 'fw',
    startDate: y2t(2012),
    endDate: y2t(2013),
  },
  {
    name: 'ASP.NET MVC',
    type: 'fw',
    startDate: y2t(2015),
    endDate: y2t(2018),
  },
  {
    name: 'C#',
    type: 'language',
    startDate: y2t(2012),
    endDate: y2t(2021),
  },
  {
    name: 'HTML/CSS',
    type: 'language',
    startDate: y2t(2012),
    endDate: y2t(2013),
  },
  {
    name: 'HTML/CSS',
    type: 'language',
    startDate: y2t(2015),
    endDate: Date.now(),
  },
  {
    name: 'JavaScript',
    type: 'language',
    startDate: y2t(2012),
    endDate: Date.now(),
  },
  {
    name: 'Java',
    type: 'language',
    startDate: y2t(2012),
    endDate: y2t(2014),
  },
  {
    name: 'Java',
    type: 'language',
    startDate: y2t(2017),
    endDate: y2t(2019),
  },
  {
    name: 'Objective-C',
    type: 'language',
    startDate: y2t(2013),
    endDate: y2t(2013),
  },
  {
    name: 'Python',
    type: 'language',
    startDate: y2t(2018),
    endDate: Date.now(),
  },
  {
    name: 'Go',
    type: 'language',
    startDate: y2t(2022),
    endDate: Date.now(),
  },
  {
    name: 'PHP(Laravel)',
    type: 'fw',
    startDate: y2t(2022),
    endDate: Date.now(),
  },
  {
    name: 'Git',
    type: 'util',
    startDate: y2t(2015),
    endDate: Date.now(),
  },
  {
    name: 'Docker (Compose)',
    type: 'util',
    startDate: y2t(2020),
    endDate: Date.now(),
  },
  {
    name: 'matplotlib',
    type: 'fw',
    startDate: y2t(2020),
    endDate: y2t(2022),
  },
  {
    name: 'Oracle Database',
    type: 'db',
    startDate: y2t(2011),
    endDate: y2t(2018),
  },
  {
    name: 'SQL Server',
    type: 'db',
    startDate: y2t(2012),
    endDate: y2t(2013),
  },
  {
    name: 'SQL Server',
    type: 'db',
    startDate: y2t(2020),
    endDate: y2t(2022),
  },
  {
    name: 'mysql',
    type: 'db',
    startDate: y2t(2022),
    endDate: Date.now(),
  },
  {
    name: 'postgresql',
    type: 'db',
    startDate: y2t(2022),
    endDate: Date.now(),
  },
  {
    name: 'AWS',
    type: 'infra',
    startDate: y2t(2022),
    endDate: Date.now(),
  },
  {
    name: 'Cloudflare',
    type: 'infra',
    startDate: y2t(2023),
    endDate: Date.now(),
  },
  {
    name: 'TypeScript',
    type: 'language',
    startDate: y2t(2023),
    endDate: Date.now(),
  },
].sort((p1, p2) => p1.startDate - p2.startDate) as DataRecord[]
