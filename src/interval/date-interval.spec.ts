import { DateInterval } from './date-interval';
import { expect } from 'chai';
import 'mocha';

describe('getInterval() function', () => {
  it('log all getInterval call results', () => {
    const interval = new DateInterval('12/12/2020');
    console.log('getIntervalForYesterday', interval.getIntervalForYesterday());
    console.log(
      'getIntervalForWeekToDate(newCycleDay=Mon)',
      interval.getIntervalForWeekToDate()
    );
    console.log(
      'getIntervalForWeekToDate(newCycleDay=Sun)',
      interval.getIntervalForWeekToDate('Sun')
    );

    console.log(
      'getIntervalForWeekToDate(newCycleDay=Sat)',
      interval.getIntervalForWeekToDate('Sat')
    );

    console.log(
      'getIntervalForPreviousWeek',
      interval.getIntervalForPreviousWeek()
    );
    console.log(
      'getIntervalForMonthToDate',
      interval.getIntervalForMonthToDate()
    );

    console.log(
      'getIntervalForPreviousMonth',
      interval.getIntervalForPreviousMonth()
    );

    console.log('getIntervalForYearToDate', interval.getIntervalForYearToDate());
    console.log(
      'getIntervalForPreviousYear',
      interval.getIntervalForPreviousYear()
    );
    console.log(
      'getIntervalForRecentNDays(n=5)',
      interval.getIntervalForRecentNDays(5)
    );
    console.log(
      'getIntervalForRecentNDays(n=5, inclusive=true)',
      interval.getIntervalForRecentNDays(5, true)
    );

    // expect(result.getIntervalForYesterday()[0]).to.equal('12/6/2020');
  });

  it('set standAt with today if the standAt argument is unparsable', () => {
    const interval = new DateInterval('12/2?Asdsa!@##!@?0/20/2020');
    expect(interval.standAt).to.equal(new Date().toLocaleDateString());
  });
});
