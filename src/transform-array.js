const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let newArr = [];
  let state = false;
  arr.forEach((el, i)=> {
    if (state) {
      state = false;
      return;
    };
    if (el == '--discard-next') {
      state = true;
    } else if (arr[i + 1] == '--discard-prev' || arr[i] == '--discard-prev') {
      return;
    } else if (el == '--double-next') {
        if (arr[i + 1]) {
         newArr.push(arr[i + 1]);
        } else return;
    } else if (el == '--double-prev') {
      if (arr[i - 2] == '--discard-next') return;
      if (arr[i - 1]) {
        newArr.push(arr[i - 1]);
       } else return;
    } else newArr.push(el);
  } )

  return newArr;

}


module.exports = {
  transform
};
