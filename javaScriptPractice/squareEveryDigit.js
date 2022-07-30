// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
	let splitnum = num.toString().split('').map(x => (Number(x))**2).join("");
  return Number(splitnum);
}

console.log(squareDigits(0));

//This one was perhaps too easy. Starting tomorrow I'll try to avoid math ones unless I'm just really exhausted. 