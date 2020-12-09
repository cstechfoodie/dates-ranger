"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInterval = void 0;
var constant = require("../commons/constant");
var DateInterval = /** @class */ (function () {
    function DateInterval(standAt) {
        this.today = new Date();
        this.choices = [];
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
                dayStartOffset: Math.floor((this.today.getTime() -
                    new Date(this.today.getFullYear(), this.today.getMonth() - 1, 1).getTime()) /
                    (1000 * 3600 * 24)),
                dayEndOffset: this.today.getDate(),
            },
            {
                name: 'Year to date',
                dayStartOffset: Math.floor((this.today.getTime() -
                    new Date(this.today.getFullYear(), 0, 1).getTime()) /
                    (1000 * 3600 * 24)),
                dayEndOffset: 0,
            },
            {
                name: 'Previous year',
                dayStartOffset: Math.floor((this.today.getTime() -
                    new Date(this.today.getFullYear() - 1, 0, 1).getTime()) /
                    (1000 * 3600 * 24)),
                dayEndOffset: Math.floor((this.today.getTime() -
                    new Date(this.today.getFullYear(), 0, 0).getTime()) /
                    (1000 * 3600 * 24)),
            },
        ];
    }
    DateInterval.prototype.getIntervalForYesterday = function () {
        return this.getInterval(0);
    };
    DateInterval.prototype.getIntervalForWeekToDate = function (newCycleDay) {
        if (newCycleDay === void 0) { newCycleDay = 'Mon'; }
        var startOffset = this.today.getDay() - 1;
        var endOffset = 0;
        if (newCycleDay === 'Sun' || newCycleDay === 'Sunday') {
            startOffset = this.today.getDay();
        }
        else if (newCycleDay === 'Sat' || newCycleDay === 'Sataurday') {
            startOffset = (this.today.getDay() + 1) % 7;
        }
        return this.getIntervalWithOffset(startOffset, endOffset);
    };
    DateInterval.prototype.getIntervalForPreviousWeek = function () {
        return this.getInterval(2);
    };
    DateInterval.prototype.getIntervalForMonthToDate = function () {
        return this.getInterval(3);
    };
    DateInterval.prototype.getIntervalForPreviousMonth = function () {
        return this.getInterval(4);
    };
    DateInterval.prototype.getIntervalForYearToDate = function () {
        return this.getInterval(5);
    };
    DateInterval.prototype.getIntervalForPreviousYear = function () {
        return this.getInterval(6);
    };
    DateInterval.prototype.getIntervalForRecentNDays = function (n, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var endOffSet = 0;
        return inclusive
            ? this.getIntervalWithOffset(n, endOffSet)
            : this.getIntervalWithOffset(n - 1, endOffSet);
    };
    DateInterval.prototype.getIntervalWithOffset = function (start, end) {
        var startDate = new Date(Math.floor(this.today.getTime() - start * constant.DAY_IN_MILLISECONDS)).toLocaleDateString();
        var endDate = new Date(Math.floor(this.today.getTime() - end * constant.DAY_IN_MILLISECONDS)).toLocaleDateString();
        return [startDate, endDate];
    };
    DateInterval.prototype.getInterval = function (option) {
        var startOffset = this.choices[option].dayStartOffset;
        var endOffSet = this.choices[option].dayEndOffset;
        return this.getIntervalWithOffset(startOffset, endOffSet);
    };
    Object.defineProperty(DateInterval.prototype, "standAt", {
        get: function () {
            return this.today.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    return DateInterval;
}());
exports.DateInterval = DateInterval;
