import { a, b, c } from '../solution/js/app.js';

describe('get a, b and c variables', () => {
  test('variable a should be Jane', () => {
    expect(a).toBe('Jane');
  });

  test('variable b should be Jennefer', () => {
    expect(b).toBe('Jennefer');
  });

  test('variable c should be Johnny', () => {
    expect(c).toBe('Johnny');
  });
});
