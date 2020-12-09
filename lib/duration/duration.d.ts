/**
 * Duration class
 */
export declare class Duration {
    private today;
    constructor(standAt?: string);
    /**
     * @returns the date user set as standAt or today's date in mm/dd/yyyy
     */
    get standAt(): string;
    /**
     * Calculate the displacement from the first date to the sencond date.
     * @param dates the two dates for calculating interval
     * @returns the number of days between two dates. Positive if the second date is greater; otherwise, negative
     */
    static btwDates(...dates: string[] | Date[]): number;
    /**
     * Calculate the displacement from today or the date the user has set to the target date.
     * @param target the date needed to be reached
     * @returns the number of days between two dates. Positive if target is a future date; otherwise, negative
     */
    btwTodayAndDestination(target: string | Date): number;
}
