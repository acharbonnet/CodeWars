// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


var str = "4of Fo1r pe6ople g3ood th5e the2";
var word = "pe6ople";

function returnNumber(word) {
  let numbers = "1234567890".split("");
  let wordArr = word.split("");
  let numby = "";
   for (let x of wordArr) {
    if (numbers.includes(x)) {
      numby = numby+x;
    }
  }
  return numby;
}

function order(words){
  // split up the string
  let wordsArr = words.split(" ");
  // make empty array as long as the number of words in the string
  let newWords = Array(wordsArr.length);
  //callback function for returning the number out of it
  for (let word of wordsArr) {
  	//let position= 
  	newWords.fill(word, returnNumber(word)-1, returnNumber(word));
  }
  return newWords.join(" ");


}

console.log(order(str)); 