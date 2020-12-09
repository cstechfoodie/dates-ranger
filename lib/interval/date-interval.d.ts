export interface DateChoice {
    name: string;
    dayStartOffset: number;
    dayEndOffset: number;
}
export declare class DateInterval {
    private today;
    private choices;
    /**
     *
     * @param standAt the date the user set to stand at or today by default if no value passed in
     */
    constructor(standAt?: string);
    /**
     * @returns the date user set as standAt or today's date in mm/dd/yyyy
     */
    get standAt(): string;
    /**
     * Get interval YESTERDAY depending on where the user stand at. Today's date by default if user has NOT set the standAt property
     */
    getIntervalForYesterday(): string[];
    /**
     * Get interval WEEK TO DATE depending on where the user stand at. Today's date by default if user has NOT set the standAt property
     * @param newCycleDay select when the new week starts from "Mon", "Sun", and "Sat". "Mon" by default
     */
    getIntervalForWeekToDate(newCycleDay?: string): string[];
    /**
     * Get interval PREVIOUS WEEK depending on where the user stand at. Today's date by default if user has NOT set the standAt property
     */
    getIntervalForPreviousWeek(): string[];
    /**
     * Get interval MONTH TO DATE depending on where the user stand at. Today's date by default if user has NOT set the standAt property
     */
    getIntervalForMonthToDate(): string[];
    /**
     * Get interval PREVIOUS MONTH depending on where the user stand at. Today's date by default if user has NOT set the standAt property
     */
    getIntervalForPreviousMonth(): string[];
    /**
     * Get interval YEAR TO DATE depending on where the user stand at. Today's date by default if user has NOT set the standAt property
     */
    getIntervalForYearToDate(): string[];
    /**
     * Get interval PREVIOUS YEAR depending on where the user stand at. Today's date by default if user has NOT set the standAt property
     */
    getIntervalForPreviousYear(): string[];
    /**
     *
     * @param n the number of days in the period
     * @param inclusive if false, return an interval involving n days and n-1 24h-period; if true, return an interval involving n+1 days and n 24h-period
     * @example getIntervalForRecentNDays(n=5) [ '12/8/2020', '12/12/2020' ]
     * @example getIntervalForRecentNDays(n=5, inclusive=true) [ '12/7/2020', '12/12/2020' ]
     */
    getIntervalForRecentNDays(n: number, inclusive?: boolean): string[];
    private getIntervalWithOffset;
    private getInterval;
}
