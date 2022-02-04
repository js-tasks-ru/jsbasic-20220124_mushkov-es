
function factorial(n) {
  let mod = 1;
  if (n !== 0) {
    for (i = 1; i <= n; i++) {
      mod *= i;
    }
  }
  else {
    mod = 1;
  }
  return mod;
}
factorial(5);


