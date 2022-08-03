const ftoc = function(fh) {
  const formula = (fh - 32) * (5/9);
  let result = Number((formula).toFixed(1));
  
  return result;
};

const ctof = function(ce) {
  const formula = (ce * 9/5) + (32);
  let result = Number((formula).toFixed(1));
  
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
