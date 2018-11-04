import { concat, e, join, pi } from '.';

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
  test('join', () => {
    expect(join('/', 'text', 1, 'example')).toBe('text/1/example');
  });
});
