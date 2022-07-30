/* 
COUNT THE SMILEY FACES
========================================================================
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same. */

function validStart(char) {
    return (char === ';') || (char === ':');
  }
  
  function validMiddle(char) {
    return (char === '-') || (char === '~');
  }
  
  function validLast(char) {
    return (char === ')') || (char === 'D');
  }
  
  function validateSmiley(word) {
    let testTruth = false;
    if (word.length == 2) {
      let testTruth1 = validStart(word[0]) ? true : false;
      let testTruth2 = validLast(word[1]) ? true : false;
      testTruth = testTruth1 && testTruth2;
    } else if (word.length == 3) {
      let testTruth1 = validStart(word[0]) ? true : false;
      let testTruth2 = validMiddle(word[1]) ? true : false;
      let testTruth3 = validLast(word[2]) ? true : false;
      testTruth = testTruth1 && testTruth2 && testTruth3;
    }
    return testTruth;
  }
  
  function countSmileys(arr) {
    let smileNumber = 0;
    for (let word of arr) {
      if (validateSmiley(word)) {
        smileNumber += 1;
      }
    }
    return smileNumber;
  }
  
  console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
  