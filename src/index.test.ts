import { e, pi } from '.';

describe('CONSTANTS', () => {
  test('e', () => {
    expect(e).toBe(Math.E);
  });
  test('pi', () => {
    expect(pi).toBe(Math.PI);
  });
});
