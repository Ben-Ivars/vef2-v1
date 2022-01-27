import { describe, expect, it } from '@jest/globals';
import {
  myStdDev,
  myVariance,
  myMean,
  myMax,
  myMin,
  mySum,
  myRange,
  myMedian,
  calculateAnalysis
} from '../src/calc.js';

describe('Variance', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = myVariance(input);
    expect(parsed).toEqual(10);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = myVariance(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = myVariance(input);
    expect(parsed).toEqual(0);
  });
  it('works with zero variance', () => {
    const input = [1, 1, 1, 1, 1, 1, 1];

    const parsed = myVariance(input);
    expect(parsed).toEqual(0);
  });
});

describe('Max', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = myMax(input);
    expect(parsed).toEqual(9);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = myMax(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = myMax(input);
    expect(parsed).toEqual(1);
  });
  it('works with negative values', () => {
    const input = [-3, -1, 0, 1, 3];

    const parsed = myMax(input);
    expect(parsed).toEqual(3);
  });
});

describe('Mean', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = myMean(input);
    expect(parsed).toEqual(5);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = myMean(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = myMean(input);
    expect(parsed).toEqual(1);
  });
  it('works with negative values', () => {
    const input = [-3, -1, 0, 1, 3];

    const parsed = myMean(input);
    expect(parsed).toEqual(0);
  });
  it('works with same value repeated', () => {
    const input = [1, 1, 1, 1, 1, 1, 1];

    const parsed = myMean(input);
    expect(parsed).toEqual(1);
  });
});

describe('Median', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = myMedian(input);
    expect(parsed).toEqual(5);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = myMedian(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = myMedian(input);
    expect(parsed).toEqual(1);
  });
  it('works with negative values', () => {
    const input = [0, -3, 1, -1, 3];

    const parsed = myMedian(input);
    expect(parsed).toEqual(0);
  });
  it('works with same value repeated', () => {
    const input = [1, 1, 1, 1, 1, 1, 1];

    const parsed = myMedian(input);
    expect(parsed).toEqual(1);
  });
});

describe('Min', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = myMin(input);
    expect(parsed).toEqual(1);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = myMin(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = myMin(input);
    expect(parsed).toEqual(1);
  });
  it('works with negative values', () => {
    const input = [-3, -1, 0, 1, 3];

    const parsed = myMin(input);
    expect(parsed).toEqual(-3);
  });
});

describe('Standard deviation', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = myStdDev(input);
    expect(parsed).toEqual(3.1622776601683795);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = myStdDev(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = myStdDev(input);
    expect(parsed).toBeNaN();
  });
  it('works with negative values', () => {
    const input = [-3, -1, 0, 1, 3];

    const parsed = myStdDev(input);
    expect(parsed).toEqual(2.23606797749979);
  });
});

describe('Sum', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = mySum(input);
    expect(parsed).toEqual(25);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = mySum(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = mySum(input);
    expect(parsed).toEqual(1);
  });
  it('works with negative values', () => {
    const input = [-3, -1, 0, 1, 7];

    const parsed = mySum(input);
    expect(parsed).toEqual(4);
  });
});

describe('Range', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = myRange(input);
    expect(parsed).toEqual(8);
  });
  it('works for empty array', () => {
    const input = [];

    const parsed = myRange(input);
    expect(parsed).toBeNaN();
  });
  it('works with one value', () => {
    const input = [1];

    const parsed = myRange(input);
    expect(parsed).toEqual(0);
  });
  it('works with negative values', () => {
    const input = [-3, -1, 0, 1, 3];

    const parsed = myRange(input);
    expect(parsed).toEqual(6);
  });
});

describe('Numerical Analysis object', () => {
  it('works for normal array', () => {
    const input = [1, 3, 5, 7, 9];

    const parsed = calculateAnalysis(input);
    expect(parsed).toEqual({
      variance: 10,
      max: 9,
      mean: 5,
      median: 5,
      min: 1,
      stddev: 3.1622776601683795,
      sum: 25,
      range: 8,
    });
  });
  // it('works for empty array', () => {
  //   const input = [];

  //   const parsed = myRange(input);
  //   expect(parsed).toBeNaN();
  // });
  // it('works with one value', () => {
  //   const input = [1];

  //   const parsed = myRange(input);
  //   expect(parsed).toEqual(0);
  // });
  // it('works with negative values', () => {
  //   const input = [-3, -1, 0, 1, 3];

  //   const parsed = myRange(input);
  //   expect(parsed).toEqual(6);
  // });
});
