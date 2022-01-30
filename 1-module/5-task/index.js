function truncate(str, maxlength) {
  let newStr = '';
  if (str.length > maxlength) {
    for (i = 0; i < maxlength; i++) {
      newStr += str[i];
    }
    newStr += '...';
  }
  else {
    for (j = 0; j < str.length; j++) {
      newStr += str[j];
    }
  }
  return newStr;
}
truncate('Всем привет!', 20);