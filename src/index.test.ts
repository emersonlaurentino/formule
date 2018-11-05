import { concat, e, formatDate, join, now, pi, toNumber } from '.';
import { MONTH_NAME } from './constants';

describe('CONSTANTS', () => {
  test('e', () => {
    expect(e).toBe(Math.E);
  });
  test('pi', () => {
    expect(pi).toBe(Math.PI);
  });
});

describe('FUNCTIONS', () => {
  test('concat', () => {
    expect(concat('text', 1, 'example')).toBe('text1example');
  });
  test('formatDate', () => {
    expect(formatDate(now(), 'MMMM DDDYYYY, HH:mm')).toBe('text1example');
  });
  test('join', () => {
    expect(join('/', 'text', 1, 'example')).toBe('text/1/example');
  });
  test('now', () => {
    const date = new Date();
    const day = date.getDate();
    const month = MONTH_NAME[date.getMonth()];
    const year = date.getFullYear();

    expect(now()).toBe(`${month} ${day}, ${year}`);
  });
  test('toNumber', () => {
    expect(toNumber(false)).toBe(0);
  });
});
