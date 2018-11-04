import { MONTHS_NAMES } from './constants';

/** The ratio of a circle's circumference to its diameter. */
export const pi: number = Math.PI;

/** The base of the natural logarithm. */
export const e: number = Math.E;

/** Concatenates its arguments and returns the result. */
export const concat: (...input: any) => string = (...input) => input.join('');

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
  const month = MONTHS_NAMES[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

/** Parses a number from string, boolean or date. */
export const toNumber: (input: string | boolean | number) => number = input =>
  Number(input);
