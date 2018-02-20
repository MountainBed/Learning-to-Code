// Question 01: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
// Answer 01: 233168

let sigDigits = [];

function createMult () {
  const n = 1000;
  for ( let i = 0; i < n; i++) {
    if ((i % 3) * (i % 5) === 0) {
      sigDigits.push(i);
    }
  }
};

function sumArrayElements () {
  let sum = 0;
  for ( let i = 0; i < sigDigits.length; i++) {
    sum += sigDigits[i];
  }
  console.log(sum);
}

createMult();
sumArrayElements();