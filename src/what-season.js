const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date == 'undefined') return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('toString') || !(date instanceof Date)) throw new Error('Invalid date!');
  let mon = date.getMonth();
  return mon == 11 || mon == 0 || mon == 1 ? 'winter' : 
         mon == 2 || mon == 3 || mon == 4 ? 'spring' :
         mon == 5 || mon == 6 || mon == 7 ? 'summer' : 'autumn';
}



module.exports = {
  getSeason
};
