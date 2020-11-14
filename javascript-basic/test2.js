function shift(arr, side, amount) {
  if (amount < 0) {
    return null;
  }
  let length = arr.length;
  let arr_shift = [];
  let arr_org = [];
  if (side === "right") {
    let position =
      length > amount ? length - amount : length - (amount % length);
    arr_org = arr.slice(0, position);
    arr_shift = arr.slice(position, length);
    return arr_shift.concat(arr_org);
  }
  if (side === "left") {
    let position = length > amount ? amount : amount % length;
    arr_shift = arr.slice(0, position);
    arr_org = arr.slice(position, length);
    return arr_org.concat(arr_shift);
  }
}

const arr1 = ["john", "jane", "sarah", "alex"];
const arr2 = [1, 2, 3, 4, 5];

console.log(shift(arr1, "left", 18));
console.log(shift(arr1, "right", 7));
console.log(shift(arr2, "right", 1982));
console.log(shift(arr2, "left", 52));
