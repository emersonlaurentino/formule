// The ratio of a circle's circumference to its diameter.
export const pi: number = Math.PI;

// The base of the natural logarithm.
export const e: number = Math.E;

// Concatenates its arguments and returns the result.
export const concat: (...args: any) => string = (...args) => args.join('');

// Inserts the first argument between the rest and returns their concatenation.
export const join: (...args: any) => string = (...args) => {
  const value = args[0];
  args.shift();
  return args.join(value);
};

// Parses a number from string, boolean or date.
export const toNumber: (
  input: string | boolean | number | Date
) => number = input => Number(input);
