export declare class Duration {
    private today;
    constructor(standAt?: string);
    get standAt(): string;
    static btwDates(...dates: string[] | Date[]): number;
    btwTodayAndDestination(target: string | Date): number;
}
