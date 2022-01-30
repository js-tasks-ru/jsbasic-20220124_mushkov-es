function checkSpam(str) {
  str = str.toLowerCase();
  if (str === 'xxx' || str === '1xbet' || str === 'ххх') {
    return true;
  }
  return false;
}
console.log(checkSpam('ХХХ'));
