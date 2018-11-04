import { concat, e, pi } from '.';

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
});
