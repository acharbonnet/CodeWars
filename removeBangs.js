/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */
//Turn it into a string, (take out all of these letters...) so it's already a string. So break it up into arrays 
//Already a string
//Break it up into arrays
//then say take out all of these characters, in this case every !

function RemoveExclamationMarks(str) {
    return str.split("").filter(x => x !== "!").join("");
  }