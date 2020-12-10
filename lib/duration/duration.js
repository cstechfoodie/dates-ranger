"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
var constant = require("../commons/constant");
/**
 * Duration class
 */
var Duration = /** @class */ (function () {
    function Duration(standAt) {
        this.today = new Date();
        this.today = standAt
            ? new Date(standAt).toDateString() === 'Invalid Date'
                ? new Date()
                : new Date(standAt)
            : new Date();
    }
    Object.defineProperty(Duration.prototype, "standAt", {
        /**
         * @returns the date user set as standAt or today's date in mm/dd/yyyy
         */
        get: function () {
            return this.today.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calculate the displacement from the first date to the sencond date.
     * @param dates the two dates for calculating interval
     * @returns the number of days between two dates. Positive if the second date is greater; otherwise, negative
     */
    Duration.btwDates = function () {
        var dates = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dates[_i] = arguments[_i];
        }
        if (dates.length !== 2) {
            throw new Error('Arguments Error: Must pass in two parsable dates.');
        }
        var start = new Date(dates[0]);
        var end = new Date(dates[1]);
        if (start.toDateString() === 'Invalid Date') {
            throw new Error("Arguments Error: " + start + " is not a valid date string.");
        }
        if (end.toDateString() === 'Invalid Date') {
            throw new Error("Arguments Error: " + end + " is not a valid date string.");
        }
        var duration = (end.getTime() - start.getTime()) / constant.DAY_IN_MILLISECONDS;
        return Math.round(duration);
    };
    /**
     * Calculate the displacement from today or the date the user has set to the target date.
     * @param target the date needed to be reached
     * @returns the number of days between two dates. Positive if target is a future date; otherwise, negative
     */
    Duration.prototype.btwTodayAndDestination = function (target) {
        if (typeof target === 'string') {
            target = new Date(target);
            if (target.toDateString() === 'Invalid Date') {
                throw new Error("Arguments Error: Input is not a valid date string.");
            }
        }
        return Duration.btwDates(this.today.toLocaleDateString(), target.toLocaleDateString());
    };
    return Duration;
}());
exports.Duration = Duration;
