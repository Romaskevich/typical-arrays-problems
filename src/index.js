
exports.min = function min (array) {
if (Array.isArray(array) && array.length!==0) {
  let minValue = array[0];
  for (let i=1;i<array.length;i++) {
    if (minValue>array[i]) {
      minValue = array[i];
    }
  }
  return minValue;
}
return 0;
}


exports.max = function max (array) {
if (Array.isArray(array) && array.length!==0) {
  let maxValue = array[0];
  for (let i=1;i<array.length;i++) {
    if (maxValue<array[i]) {
      maxValue = array[i];
    }
  }
  return maxValue;
}
return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length!==0) {
    let sum = 0;
    for (let i=0;i<array.length;i++) {
      sum += array[i];
    }
    return sum/array.length;
  }
  return 0;
  }
