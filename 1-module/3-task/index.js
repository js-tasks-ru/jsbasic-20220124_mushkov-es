function ucFirst(str) {
  let newStr = '';
  if (str !== '') {
    newStr = str[0].toUpperCase();
    for (i = 1; i < str.length; i++) {
      newStr += str[i];
      
    }
    
  }
  else {
    newStr = '';
    
  }
  return newStr;
  
}
ucFirst('ж');





