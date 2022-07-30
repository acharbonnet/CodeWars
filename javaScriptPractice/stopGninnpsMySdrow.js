/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" 
*/

//split the sentence by " "
//put all words through an if function that filters for 5 or longer
//callback to a reverse function
// put the reversed words back together

function spinWords(string){
    return string.split(" ").map(x => {
        if (x.length >= 5) {
          return x.split("").reverse().join("");
      } else {
          return x;
      }
    }).join(" ");
  }