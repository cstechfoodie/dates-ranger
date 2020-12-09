import { Duration } from './duration';
import { DateInterval } from '../interval/date-interval';
import { expect } from 'chai';
import 'mocha';

describe('durationBtwTodayAndTarget(destination) function', () => {
  it('get the duration from standAt(12/12/2020) to destination(12/13/2020) by (destination - standAt)', () => {
    const duration = new Duration('12/12/2020');
    expect(duration.btwTodayAndDestination('12/13/2020')).to.equal(1);
  });

  it('get the duration from standAt(12/12/2020) to destination(12/7/2020) by (destination - standAt)', () => {
    const duration = new Duration('12/12/2020');
    expect(duration.btwTodayAndDestination('12/7/2020')).to.equal(-5);
  });

  it('get the duration from standAt(today) to destination(today) by (destination - standAt)', () => {
    const duration = new Duration();
    expect(duration.btwTodayAndDestination(new Date())).to.equal(0);
  });

  it('set standAt with today if the standAt argument is unparsable', () => {
    const duration = new Duration('12/2?Asdsa!@##!@?0/20/2020');
    expect(duration.btwTodayAndDestination(new Date())).to.equal(0);
  });

  it('throw error when passed in unparsable dates', () => {
    expect(function () {
      const duration = new Duration();
      duration.btwTodayAndDestination('12/2?Asdsa!@##!@?0/20/2020');
    }).to.throw(Error);
  });
});

describe('btwDates(date1, date2) function', () => {
  it('get the number of days between date1 and date2 by (date2 - date1)', () => {
    expect(Duration.btwDates('12/13/2020', '12/20/2020')).to.equal(7);
  });

  it('get the number of days between date1 and date2 by (date2 - date1)', () => {
    expect(
      Duration.btwDates(new Date('12/13/2020'), new Date('12/20/2020'))
    ).to.equal(7);
  });

  it('get the number of days between date1 and date2 by (date2 - date1)', () => {
    expect(Duration.btwDates('12/13/2020', '12/10/2020')).to.equal(-3);
  });

  it('get the number of days between date1 and date2 by (date2 - date1)', () => {
    expect(
      Duration.btwDates(new Date('12/13/2020'), new Date('11/30/2020'))
    ).to.equal(-13);
  });

  it('get the number of days between date1 and date2 by (date2 - date1)', () => {
    expect(
      Duration.btwDates(...new DateInterval().getIntervalForPreviousYear())
    ).to.equal(364);
  });

  it('throw error when passed in 3 or more dates', () => {
    expect(function () {
      Duration.btwDates(...['12/13/2020', '12/14/2020', '12/15/2020']);
    }).to.throw(Error);
  });

  it('throw error when passed in unparsable dates', () => {
    expect(function () {
      Duration.btwDates(...['12/13/2020', '12/14/2?Asdsa!@##!@?0/20']);
    }).to.throw(Error);
  });

  it('throw error when passed in unparsable dates', () => {
    expect(function () {
      Duration.btwDates(...['12/2?Asdsa!@##!@?0/20/2020', '12/14/2020']);
    }).to.throw(Error);
  });
});

describe('get standAt() function', () => {
  it('get standAt', () => {
    const duration = new Duration('12/12/2020');
    expect(duration.standAt).to.equal('12/12/2020');
  });
});
