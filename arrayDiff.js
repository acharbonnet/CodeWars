// let arr = [1,2,2,2,3, 5, 9, 8, 12, 123, 2];
// let otherArr = [2]

// function arrayDiff(a, b) {
//   //filter. Test if each element in arr is in otherarr. If not, keep
//   return a.filter(x => b.includes(x) === false);
// }

// console.log(arrayDiff(arr, otherArr));

let arr = [1,2,2,2,3, 5, 9, 8, 12, 123, 2];
let otherArr = [2]

function arrayDiff(a, b) {
  //filter. Test if each element in arr is in otherarr. If not, keep
  return a.filter(x => b.includes(x) === false);
}

console.log(arrayDiff(arr, otherArr));