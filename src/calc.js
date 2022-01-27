import { variance, max, mean, min, median, sum, std } from 'mathjs'

/**
 * Calculate the Variance of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function myVariance(data) {
  return variance(data);
}
/**
 * Find the max value of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function myMax(data) {
  return max(data);
}
/**
 * Calculate the Mean of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function myMean(data) {
  return mean(data);
}
/**
 * Find the Median of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function myMedian(data) {
  return median(data);
}
/**
 * Find the Min of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function myMin(data) {
  return min(data);
}
/**
 * Calculate the Standard deviation of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function myStdDev(data) {
  return std(data);
}
export function mySum(data) {
  return sum(data);
}
/**
 * Calculate the range of a dataset
 * @param {Array<number>} data input array of numbers from dataset
 * @returns {Number} the range of the dataset
 */
export function myRange(data) {
  return myMax(data) - myMin(data);
}
/**
 * Performs set of calculations on dataset
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {object} Numerical analysis of dataset with the following calculations
 * * variance
 * * max
 * * mean
 * * median
 * * min
 * * standard deviation
 * * sum
 * * range
 */
export function calculateAnalysis(data) {
  return {
    variance: myVariance(data),
    max: myMax(data),
    mean: myMean(data),
    median: myMedian(data),
    min: myMin(data),
    stddev: myStdDev(data),
    sum: mySum(data),
    range: myRange(data),
  };
}
