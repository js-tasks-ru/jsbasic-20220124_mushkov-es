let arr = [5, 3, 8, 1];
let newArr = [];
function filterRange(arr, a, b) {
let newArr =  arr.filter((i) => {
    return i >= a && i <= b;
  })
  return newArr;

}

filterRange(arr, 1, 3);

