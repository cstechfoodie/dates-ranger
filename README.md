# dates-ranger

Dates-ranger helps you find date interval and calculate duration much easier than ever. This library is light-weighted and dependency free, and it is purely developed in [Typescript](https://www.npmjs.com/package/typescript).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Background](#Background)
  - [Interval API](#Interval-API)
  - [Duration API](#Duration-API)
  - [TODO](#TODO)
- [Contributing](#contributing)
- [License](#license)

## Install

This node module is ditributed to [npm](https://www.npmjs.com/package/dates-ranger) with bi-weekly release in the year of 2021

You can install it by running:

```sh
npm install -g dates-ranger
```

## Usage

### Background

In many business, people would like to query data in a specific period, such as Week to Date", "Last Month" or "Recent Three Days", It is hard to find them as TODAY moves forwards. And in many calendar apps, people are interested in the duration between given dates. All is made easy with this library.

### Interval API

`Interval API` introduces `DateInterval(standAt?:string)` Object for methods returning `Array([startDate:string, endDate:string])`. These are:

```typescript
const interval = new DateInterval('12/12/2020'); //intialize an object with standAt='12/12/2020', default is TODAY
interval.getIntervalForYesterday(); //[ '12/11/2020', '12/11/2020' ]
interval.getIntervalForWeekToDate((newCycleDay = 'Mon')); //[ '12/7/2020', '12/12/2020' ]
interval.getIntervalForWeekToDate((newCycleDay = 'Sun')); //[ '12/6/2020', '12/12/2020' ]
interval.getIntervalForWeekToDate((newCycleDay = 'Sat')); //[ '12/12/2020', '12/12/2020' ]
interval.getIntervalForPreviousWeek(); //[ '11/30/2020', '12/6/2020' ]
interval.getIntervalForMonthToDate(); //[ '12/1/2020', '12/12/2020' ]
interval.getIntervalForPreviousMonth(); //[ '11/1/2020', '11/30/2020' ]
interval.getIntervalForYearToDate(); //[ '1/1/2020', '12/12/2020' ]
interval.getIntervalForPreviousYear(); //[ '1/1/2019', '12/31/2019' ]
interval.getIntervalForRecentNDays((n = 5)); //[ '12/8/2020', '12/12/2020' ]
interval.getIntervalForRecentNDays((n = 5), (inclusive = true)); //[ '12/7/2020', '12/12/2020' ]
```

### Duration API

`Duration API` introduces `Duration(standAt?:string)` Object for methods returning `counts:number`. These are:

```typescript
const duration = new Duration(); //by default, Today is where we stand at
duration.btwTodayAndDestination(new Date()); //return 0
duration = new Duration('12/12/2020'); //intialize an object with standAt='12/12/2020', so you see this date as TODAY
duration.btwTodayAndDestination('12/13/2020'); //return 1
duration.btwTodayAndDestination('12/7/2020'); //return -5

//static method
Duration.btwDates('12/13/2020', '12/10/2020'); //return -3
Duration.btwDates(new Date('12/13/2020'), new Date('11/30/2020')); //return -13
Duration.btwDates(...new DateInterval().getIntervalForPreviousYear()); //return 364
```

More usage info, please consult documentation and unit test.

### TODO

| Task                                                           | Expected Delivery |
| -------------------------------------------------------------- | ----------------- |
| TimeInterval to provide utilities for time interval operations | 12/31/2020        |
| Date Formater to let users easily format the output dates      | 1/15/2021         |

## Maintainer

[@cstechfoodie](https://github.com/cstechfoodie)

## Contributing

Please contribute! [Look at the issues](https://github.com/cstechfoodie/dates-ranger/issues).

## License

MIT © 2020 [Shunyu Wang](https://github.com/cstechfoodie)
