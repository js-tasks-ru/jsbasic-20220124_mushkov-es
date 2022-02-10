function camelize(str) {
 str = str.split('-').
 map((value, index) => {
   if (index === 0) {
     return value;
   }
   return value[0].toUpperCase() + value.slice(1)
 }).join('')
  console.log(str)
}
camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');










