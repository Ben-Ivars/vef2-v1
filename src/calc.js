/**
 * Calculate the Variance of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function variance(data) {
  return;
}
/**
 * Find the max value of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function max(data) {
  return;
}
/**
 * Calculate the Mean of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function mean(data) {
  return;
}
/**
 * Find the Median of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function median(data) {
  return;
}
/**
 * Find the Min of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function min(data) {
  return;
}
/**
 * Calculate the Standard deviation of the input array of numbers
 * @param {Array<Number>} data input array of numbers from dataset
 * @returns {Number}
 */
export function stdDev(data) {
  return;
}
export function sum(data) {
  return;
}
/**
 * Calculate the range of a dataset
 * @param {Array<number>} data input array of numbers from dataset
 * @returns {Number} the range of the dataset
 */
export function range(data) {
  return max(data) - min(data);
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
    variance: variance(data),
    max: max(data),
    mean: mean(data),
    median: median(data),
    min: min(data),
    stddev: stdDev(data),
    sum: sum(data),
    range: range(data),
  };
}
