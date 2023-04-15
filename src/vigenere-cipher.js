const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mod) {
    this.mod = mod == undefined ? true : mod;
  }
  encrypt(message, key) {
    if (key == undefined || message == undefined) throw new Error('Incorrect arguments!')
    let y = 0, arr = [];
    for (let i = 0; i < message.length; i++) {
      if (key[y] == undefined) y = 0;
      if (message[i].toUpperCase().charCodeAt() < 65 || message[i].toUpperCase().charCodeAt() > 90 ) {
        arr.push(message[i]);
        continue;
      }
      let m = message[i].toUpperCase().charCodeAt();
      let k = key[y].toUpperCase().charCodeAt();
      arr.push(65 + ((m + k) % 26));
      y++;
    }
    return this.mod ? arr.map((a)=> typeof a === 'number' ? String.fromCharCode(a) : a).join('')
                    : arr.map((a)=> typeof a === 'number' ? String.fromCharCode(a) : a).reverse().join('');
  
  }
  decrypt(eMessage, key) {
    if (key == undefined || eMessage == undefined) throw new Error('Incorrect arguments!')
    let y = 0, arr = [];
    for (let i = 0; i < eMessage.length; i++) {
      if (key[y] == undefined) y = 0;
      if (eMessage[i].toUpperCase().charCodeAt() < 65 || eMessage[i].toUpperCase().charCodeAt() > 90 ) {
        arr.push(eMessage[i]);
        continue;
      }
      let m = eMessage[i].toUpperCase().charCodeAt();
      let k = key[y].toUpperCase().charCodeAt();
  
      arr.push(65 + (m - k + 26) % 26);
      y++;
    }
    return this.mod ? arr.map((a)=> typeof a === 'number' ? String.fromCharCode(a) : a).join('')
                    : arr.map((a)=> typeof a === 'number' ? String.fromCharCode(a) : a).reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
