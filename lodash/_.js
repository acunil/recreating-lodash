const _ = {
  clamp(num, lower, upper) {
    num = Math.max(num, lower);
    return Math.min(num, upper);
  },

  inRange(num, start, end = 0) {
    if (start > end) [start, end] = [end, start];
    return num >= start && num < end;
  },
};

console.log(_.inRange(4, 7));

// Do not write or modify code below this line.
module.exports = _;
