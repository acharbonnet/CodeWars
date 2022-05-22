// function capitalizeIt(word) {
// 	let letterArr = word.split("");
//  	let captWord = letterArr.fill(letterArr[0].toUpperCase(), 0, 1).join("");
//   return captWord;
// }

// function titleCase(title, minorWords = 0) {
	
//   	let exceptionArr = minorWords.toLowerCase().split(" ");
//   	console.log(exceptionArr);
// 	let captTitle = title.toLowerCase().split(" ");
//   console.log(captTitle);
// /* 	captTitle = captTitle.map(word => {
// 	    if (exceptionArr.includes())
// 	  }) */
	
// }

// let tempTitle = "a BIG book of TRICKS is there to STAY a while"
// let leaveOut = "a OF IS to"

// titleCase(tempTitle);
// //array of exceptions, to lower, split
//  //all caps and split, to lower

// I spent an hour on this and it sucked butt. I got the solution and here's what works. 

function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    // I couldn't figure out how to do this part, the whole, if it's undefind thing
    return title.toLowerCase().split(' ').map(function(v, i) {
        //I was even trying to use .map! I just ran out of time. 
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }