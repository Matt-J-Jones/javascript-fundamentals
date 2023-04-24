const fizzbuzz = require('./fizzbuzz');

function fizzbuzzUntil (x) {
  for (let i = 1; i <= x; i++) {
    console.log(fizzbuzz(i))
  }
}

module.exports = fizzbuzzUntil;




