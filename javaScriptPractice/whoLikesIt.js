// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//test length of array
//depending on result, some case statements to return specific strings.

var none = []                               // -->  "no one likes this"
var one = ["Peter"]                        // -->  "Peter likes this"
var two = ["Jacob", "Alex"]                // -->  "Jacob and Alex like this"
var three = ["Max", "John", "Mark"]          // -->  "Max, John and Mark like this"
var four = ["Alex", "Jacob", "Mark", "Max", "Patricia", "Michael", "Bolton"] // -->  "Alex, Jacob and 2 others like this"

function likes(names) {
	if (names.length === 0) {
  	return "no one likes this";
  } if (names.length === 1) {
  	return `${names[0]} likes this`;
  } if (names.length === 2) {
  	return `${names[0]} and ${names[1]} like this`
  } if (names.length === 3) {
  	return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
  	return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
  }
}

//This works, but how I have it written could also have been a case statement. 