import * as constant from '../commons/constant';

export interface DateChoice {
  name: string;
  dayStartOffset: number;
  dayEndOffset: number;
}

export class DateInterval {
  private today: Date = new Date();
  private choices: DateChoice[] = [];

  public constructor(standAt?: string) {
    this.today = standAt
      ? new Date(standAt).toDateString() === 'Invalid Date'
        ? new Date()
        : new Date(standAt)
      : new Date();
    this.choices = [
      {
        name: 'Yesterday',
        dayStartOffset: 1,
        dayEndOffset: 1,
      },
      {
        name: 'Week to date',
        dayStartOffset: this.today.getDay() - 1,
        dayEndOffset: 0,
      },
      {
        name: 'Previous week',
        dayStartOffset: this.today.getDay() + 6,
        dayEndOffset: this.today.getDay(),
      },
      {
        name: 'Month to date',
        dayStartOffset: this.today.getDate() - 1,
        dayEndOffset: 0,
      },
      {
        name: 'Previous month',
        dayStartOffset: Math.floor(
          (this.today.getTime() -
            new Date(
              this.today.getFullYear(),
              this.today.getMonth() - 1,
              1
            ).getTime()) /
            (1000 * 3600 * 24)
        ),
        dayEndOffset: this.today.getDate(),
      },
      {
        name: 'Year to date',
        dayStartOffset: Math.floor(
          (this.today.getTime() -
            new Date(this.today.getFullYear(), 0, 1).getTime()) /
            (1000 * 3600 * 24)
        ),
        dayEndOffset: 0,
      },
      {
        name: 'Previous year',
        dayStartOffset: Math.floor(
          (this.today.getTime() -
            new Date(this.today.getFullYear() - 1, 0, 1).getTime()) /
            (1000 * 3600 * 24)
        ),
        dayEndOffset: Math.floor(
          (this.today.getTime() -
            new Date(this.today.getFullYear(), 0, 0).getTime()) /
            (1000 * 3600 * 24)
        ),
      },
    ];
  }

  public getIntervalForYesterday(): string[] {
    return this.getInterval(0);
  }

  public getIntervalForWeekToDate(newCycleDay: string = 'Mon'): string[] {
    let startOffset = this.today.getDay() - 1;
    let endOffset = 0;
    if (newCycleDay === 'Sun' || newCycleDay === 'Sunday') {
      startOffset = this.today.getDay();
    } else if (newCycleDay === 'Sat' || newCycleDay === 'Sataurday') {
      startOffset = (this.today.getDay() + 1) % 7;
    }
    return this.getIntervalWithOffset(startOffset, endOffset);
  }

  public getIntervalForPreviousWeek(): string[] {
    return this.getInterval(2);
  }
  public getIntervalForMonthToDate(): string[] {
    return this.getInterval(3);
  }

  public getIntervalForPreviousMonth(): string[] {
    return this.getInterval(4);
  }

  public getIntervalForYearToDate(): string[] {
    return this.getInterval(5);
  }

  public getIntervalForPreviousYear(): string[] {
    return this.getInterval(6);
  }

  public getIntervalForRecentNDays(
    n: number,
    inclusive: boolean = false
  ): string[] {
    const endOffSet = 0;
    return inclusive
      ? this.getIntervalWithOffset(n, endOffSet)
      : this.getIntervalWithOffset(n - 1, endOffSet);
  }

  private getIntervalWithOffset(start: number, end: number) {
    const startDate = new Date(
      Math.floor(this.today.getTime() - start * constant.DAY_IN_MILLISECONDS)
    ).toLocaleDateString();
    const endDate = new Date(
      Math.floor(this.today.getTime() - end * constant.DAY_IN_MILLISECONDS)
    ).toLocaleDateString();
    return [startDate, endDate];
  }

  private getInterval(option: number) {
    const startOffset = this.choices[option].dayStartOffset;
    const endOffSet = this.choices[option].dayEndOffset;
    return this.getIntervalWithOffset(startOffset, endOffSet);
  }

  get standAt(): string {
    return this.today.toLocaleDateString();
  }
}
