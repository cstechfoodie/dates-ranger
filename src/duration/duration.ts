import * as constant from '../commons/constant';

export class Duration {
  private today: Date = new Date();

  public constructor(standAt?: string) {
    this.today = standAt
      ? new Date(standAt).toDateString() === 'Invalid Date'
        ? new Date()
        : new Date(standAt)
      : new Date();
  }

  get standAt(): string {
    return this.today.toLocaleDateString();
  }

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
    return duration;
  }

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
