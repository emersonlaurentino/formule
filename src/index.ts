import { DAY_NAME, MONTH_NAME } from './constants';

// CONSTANTS

/** The ratio of a circle's circumference to its diameter. */
export const pi: number = Math.PI;

/** The base of the natural logarithm. */
export const e: number = Math.E;

// FUNCTIONS

/** Concatenates its arguments and returns the result. */
export const concat: (...input: any) => string = (...input) => input.join('');

/** Format a date using format string. */
export const formatDate: (input: string, format: string) => string = (
  input,
  format
) => {
  const date = new Date(input);
  const pad = (val: string) => {
    if (val.length < 2) {
      return `0${val}`;
    }
    return val;
  };
  const d = date.getDate();
  const D = date.getDay();
  const H = date.getHours();
  const m = date.getMinutes();
  const M = date.getMonth();
  const Y = date.getFullYear();
  const flags: any = {
    D: d,
    DD: pad(String(d)),
    DDD: DAY_NAME[D],
    DDDD: DAY_NAME[D + 7],
    H,
    HH: pad(String(H)),
    M: M + 1,
    MM: pad(String(M + 1)),
    MMM: MONTH_NAME[M],
    MMMM: MONTH_NAME[M + 12],
    YY: String(Y).slice(2),
    YYYY: Y,
    m,
    mm: pad(String(m)),
  };

  return format.replace(/([YMDHm])\w*/g, match => {
    if (match in flags) {
      return flags[match];
    }

    return match;
  });
};

/** Inserts the first argument betweenthe rest and returns their concatenation. */
export const join: (...input: any) => string = (...input) => {
  const value = input[0];
  input.shift();
  return input.join(value);
};

/** Returns the current date and time. */
export const now: () => string = () => {
  const date = new Date();
  const day = date.getDate();
  const month = MONTH_NAME[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

/** Parses a number from string, boolean or date. */
export const toNumber: (input: string | boolean | number) => number = input =>
  Number(input);
