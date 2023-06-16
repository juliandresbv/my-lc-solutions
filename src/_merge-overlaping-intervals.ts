export class Interval {
  public start: number;
  public end: number;
  public closed: boolean;
  public setClosed: (closed: boolean) => void;
  public formatInterval: () => string;

  constructor(start, end) {
      this.start = start;
      this.end = end;
      this.closed = true; // the interval is closed by default

      this.setClosed = function (closed) {
          this.closed = closed;
      };

      this.formatInterval = function () {
          return this.closed
              ? "[" + this.start + ", " + this.end + "]"
              : "(" + this.start + ", " + this.end + ")";
      };
  }
}

export function mergeIntervals(intervals: Interval[]) {
    // Replace this placeholder return statement with your code
    let mergedIntervals: Interval[] = [];

    mergedIntervals[0] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const currInterval = intervals[i];
        const currIntervalStart = currInterval.start;

        const lastIntervalMerged = mergedIntervals[mergedIntervals.length - 1];
        const lastIntervalMergedEnd = lastIntervalMerged.end;

        if (currIntervalStart <= lastIntervalMergedEnd) {
          const currIntervalEnd = currInterval.end;

          const newMergedIntervalEnd = lastIntervalMergedEnd < currIntervalEnd 
            ? currIntervalEnd 
            : lastIntervalMergedEnd;

          const lastIntervalMergedStart = lastIntervalMerged.start;

          mergedIntervals[mergedIntervals.length - 1] = new Interval(lastIntervalMergedStart, newMergedIntervalEnd);
        } else {
          mergedIntervals.push(currInterval);
        }
    }

    return mergedIntervals;
}
