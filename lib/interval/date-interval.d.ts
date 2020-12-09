export interface DateChoice {
    name: string;
    dayStartOffset: number;
    dayEndOffset: number;
}
export declare class DateInterval {
    private today;
    private choices;
    constructor(standAt?: string);
    getIntervalForYesterday(): string[];
    getIntervalForWeekToDate(newCycleDay?: string): string[];
    getIntervalForPreviousWeek(): string[];
    getIntervalForMonthToDate(): string[];
    getIntervalForPreviousMonth(): string[];
    getIntervalForYearToDate(): string[];
    getIntervalForPreviousYear(): string[];
    getIntervalForRecentNDays(n: number, inclusive?: boolean): string[];
    private getIntervalWithOffset;
    private getInterval;
    get standAt(): string;
}
