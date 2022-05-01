import { firstName, lastName, job } from '../solution/js/app.js';

describe('get firstName, lastName, job variables', () => {
  test('firstName should be John', () => {
    expect(firstName).toBe('John');
  });

  test('lastName should be Doe', () => {
    expect(lastName).toBe('Doe');
  });

  test('job should be unknown', () => {
    expect(job).toBe('unknown');
  });
});
