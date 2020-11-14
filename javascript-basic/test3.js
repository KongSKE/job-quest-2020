function secondMax(array) {
  if (array.length < 1) {
    console.log("Error!");
  } else if (array.length === 1) {
    console.log(array[0]);
  } else {
    let result = array.filter((element) => element != Math.max(...array));
    result = result.length === 0 ? array[0] : Math.max(...result);
    console.log(result);
  }
}

secondMax([2, 3, 4, 5]);
secondMax([9, 2, 21, 21]);
secondMax([4, 4, 4, 4]);
secondMax([4123]);
secondMax([]);
