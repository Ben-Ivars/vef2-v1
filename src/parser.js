/**
 * removes thousand separator and formats icelandic numbers
 * @param {string} content raw string from data
 * @returns {string} number w/o thousand sep. and english decimal
 */
export function rmThousDot(content) {
  //  see data 5.txt to test
  return content.replaceAll('.', '').replaceAll(',', '.').replaceAll(' ', '');
}

export function parse(content) {
  //  remove thousand sep. and change to eng. decimal
  const ice = rmThousDot(content)
  //  break up content by line
  const splitArr = ice.split('\n');
  // remove comments
  const cmtArr = splitArr.filter(item => !item.startsWith('#'))
  // remove empty values
  const strArr = cmtArr.filter(item => item)
  // if array is empty return null
  if (strArr.length === 0) {
    return [];
  }
  // parse to number
  const num = strArr.map(Number)
  // remove NaN numbers
  const arr = num.filter(item => !Number.isNaN(item))
  if (arr.length === 0) {
    return [];
  }
  return arr;
}

