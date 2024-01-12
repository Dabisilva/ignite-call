import { Dayjs } from "dayjs";

interface CalendarWeek {
  week: number;
  days: Array<{
    date: Dayjs;
    disabled: boolean;
  }>;
}

type CalendarWeeks = CalendarWeek[];

export type { CalendarWeek, CalendarWeeks };
