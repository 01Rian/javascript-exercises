const palindromes = function (str) {
  let regex = /[^A-Za-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(regex, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  if (reverseStr === lowRegStr) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
