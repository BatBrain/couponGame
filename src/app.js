var coupon = function() {
  var winval = Math.floor(Math.random() * (10 - 1)) + 1
  return testValues[winval];
};


var testValues = {
  1: ['10%', 'SAVE10'],
  2: ['20%', 'SAVE20'],
  3: ['30%', 'SAVE30'],
  4: ['40%', 'SAVE40'],
  5: ['50%', 'SAVE50'],
  6: ['60%', 'SAVE60'],
  7: ['70%', 'SAVE70'],
  8: ['80%', 'SAVE80'],
  9: ['90%', 'SAVE90'],
  10: ['100%', 'SAVE100']
};

module.exports = coupon;
