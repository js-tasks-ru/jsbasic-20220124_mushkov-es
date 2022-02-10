const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  return {min:Math.min(...str.split(' ').filter(elem => !isNaN(elem))),
          max: Math.max(...str.split(' ').filter(elem => !isNaN(elem)))}
}
getMinMax(inputData);

