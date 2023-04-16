const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!(typeof str ==  'string')) str = String(str);
  let {repeatTimes: i = 1, separator: sep = '+', addition: add = '',
  additionRepeatTimes: addI = 1, additionSeparator: addSep = '|'} = options;
  if (!(typeof add ==  'string')) add = String(add);
  let string = '';
  let addc = '';
  for (; addI > 0; addI--) addc += add + (addI == 1 ? '' : addSep);
  for (; i > 0; i--) {
    string += str  + addc + (i == 1 ? '' : sep);
  }
  return string;
}

module.exports = {
  repeater
};
