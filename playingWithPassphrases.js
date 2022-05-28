//Playing with Passphrases
// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:
// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

// https://en.wikipedia.org/wiki/Passphrase

function playPass(s, n) {
    let alphArr = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".toUpperCase().split(""); //I know this was hacky but I was kind of done doing it after like an hour.
    let numArr = "0123456789".split("");
    let newPhraseArr = s.split("").map(x => { // turn the phrase into an array
        if (alphArr.includes(x)) {              // check to see if char is a letter
          return alphArr[alphArr.indexOf(x)+n]; // if it is, return new letter
      } else if (x === " ") {
          return " ";                           // if it's a space return a space
      } else if (numArr.includes(x)) {
          return String(9 - Number(x));         // return the compliment to 9 of the number
      } else {
          return x;                             // if it's not a number or a letter leave that bitch alone
      }
    });
    let newPhrase = [];
    for (let i = 0; i <= newPhraseArr.length; i++) {
       if (alphArr.includes(newPhraseArr[i])) {         // check if it's a character AGAIN
        if (i % 2 !== 0) {                                  // make every other one lowercase
          newPhrase.push(newPhraseArr[i].toLowerCase());
        } else {
          newPhrase.push(newPhraseArr[i]);
        }
      } else {
          newPhrase.push(newPhraseArr[i]);
      }}
    return newPhrase.reverse().join(""); // reverse it and put it together
  }

  // I hate this code and I hope I never see it again. 