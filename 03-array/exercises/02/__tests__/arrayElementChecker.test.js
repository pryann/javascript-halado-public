import arrayElementChecker from '../solution/js/arrayElementChecker';

describe('arrayElementChecker() ', () => {
  test('should return an object with properties: exists, index, allElementIsANumber, someElementIsANumber', () => {
    const arr = [100, 200, 300];
    const serachValue = 100;

    const result = arrayElementChecker(arr, serachValue);
    const expected = {
      exists: true,
      index: 0,
      allElementIsANumber: true,
      someElementIsANumber: true,
    };

    expect(result).toEqual(expected);
  });

  test('should return an object with properties: exists, index, allElementIsANumber, someElementIsANumber', () => {
    const arr = ['10', '20', '30'];
    const serachValue = 10.1;

    const result = arrayElementChecker(arr, serachValue);
    const expected = {
      exists: false,
      index: -1,
      allElementIsANumber: false,
      someElementIsANumber: false,
    };

    expect(result).toEqual(expected);
  });
});
