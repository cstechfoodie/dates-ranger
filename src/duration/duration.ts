import * as constant from '../commons/constant';
/**
 * Duration class
 */
export class Duration {
  private today: Date = new Date();

  public constructor(standAt?: string) {
    this.today = standAt
      ? new Date(standAt).toDateString() === 'Invalid Date'
        ? new Date()
        : new Date(standAt)
      : new Date();
  }

  /**
   * @returns the date user set as standAt or today's date in mm/dd/yyyy
   */
  get standAt(): string {
    return this.today.toLocaleDateString();
  }

  /**
   * Calculate the displacement from the first date to the sencond date.
   * @param dates the two dates for calculating interval
   * @returns the number of days between two dates. Positive if the second date is greater; otherwise, negative
   */
  public static btwDates(...dates: string[] | Date[]): number {
    if (dates.length !== 2) {
      throw new Error('Arguments Error: Must pass in two parsable dates.');
    }
    const start = new Date(dates[0]);
    const end = new Date(dates[1]);
    if (start.toDateString() === 'Invalid Date') {
      throw new Error(`Arguments Error: ${start} is not a valid date string.`);
    }
    if (end.toDateString() === 'Invalid Date') {
      throw new Error(`Arguments Error: ${end} is not a valid date string.`);
    }
    const duration =
      (end.getTime() - start.getTime()) / constant.DAY_IN_MILLISECONDS;
    return Math.round(duration);
  }

  /**
   * Calculate the displacement from today or the date the user has set to the target date.
   * @param target the date needed to be reached
   * @returns the number of days between two dates. Positive if target is a future date; otherwise, negative
   */
  public btwTodayAndDestination(target: string | Date): number {
    if (typeof target === 'string') {
      target = new Date(target);
      if (target.toDateString() === 'Invalid Date') {
        throw new Error(`Arguments Error: Input is not a valid date string.`);
      }
    }
    return Duration.btwDates(
      this.today.toLocaleDateString(),
      (target as Date).toLocaleDateString()
    );
  }
}
