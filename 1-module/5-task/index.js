function truncate(str, maxlength) {
  let newStr = '';
  if (str.length > maxlength) {
    for (i = 0; i < maxlength - 1; i++) {
      newStr += str[i];
    }
    newStr += '...';
  }
  else {
    newStr = str;
  }
  return newStr;
}
console.log(truncate ('Вот, что мне хотелось бы сказать на эту тему', 20));
