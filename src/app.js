var app = function() {
  this.roll = function() {
    return Math.floor(Math.random() * (10 - 1)) + 1
  };
  this.prizes = testValues;
}

var testValues = {
  1: '10%',
  2: '20%',
  3: '30%',
  4: '40%',
  5: '50%',
  6: '60%',
  7: '70%',
  8: '80%',
  9: '90%',
  10: '100%'
}

module.exports = app;
