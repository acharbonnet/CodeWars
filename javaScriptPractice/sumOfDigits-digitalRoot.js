// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function addEm(number) {
    //turn it into a string, split into array, return to number, sum array
   let added = 0;
   let splut = number.toString().split("").map(Number);
 for (let item of splut) {
     added += item;
 }
 return added;
}

function digital_root(n) {
   // while the number has at least 2 digits keep on reducing
   let reduced = addEm(n);
   while (reduced >= 10) {
     reduced = addEm(reduced);
 }
 return reduced;
} 

console.log(digital_root(789789789789789));