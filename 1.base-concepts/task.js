"use strict"
function solveEquation(a, b, c) {
  let d = b**2 - 4*a*c;
  let arr = [];
  if (d < 0) {
    arr = [];
  }
  else if (d === 0) {
    arr = [-b/(2*a)];
  }
  else {
    arr = [(-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d))/(2*a)];
  }
  return arr;
}
//console.log (solveEquation(1, 0, 0));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/(12*100);
  amount = amount - contribution;
  let payment = amount * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let payment_sum = (parseFloat((payment * countMonths).toFixed(2)));
  return payment_sum;
}
//console.log(calculateTotalMortgage(15, 0, 10000, 36))