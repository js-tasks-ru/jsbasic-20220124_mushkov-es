function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if(typeof salaries[key] === 'number'){
      if(Object.is(salaries[key], NaN) || salaries[key] === Infinity || salaries[key] === -Infinity) {
        return sum;
      }
      else {
         sum += salaries[key];
      }
    }
  }
  return sum;
  
}


let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

console.log (sumSalary(salaries))
