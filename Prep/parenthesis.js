/*
Given a string of parenthesis, create a function called countParen that will tell you what stair number you are on.

An open parenthises means up one set of stairs.
A closed parentheses means down one set of stairs.
You cannot be a negative stair number

countParen('((') --> 2
countParen('()') --> 0
countParen('())') --> 0
countParen('())(') --> 0
countParen(')(') --> 1
countParen(')((((') --> 4

You must use reduce
*/


function countParen(parenths){	
  return parenths.split('').reduce(function(accumulator, curr){

		if(curr === "(") {
			accumulator++;
		} else if(curr === ")" && accumulator != 0) {
			accumulator--;
		}
		return accumulator
	}, 0);
}


// function countParen(parenths){
//   return parenths.split('').reduce(function(acc, curr){
// 		acc = (curr === "(") ? acc + 1 : (curr === ")") && acc != 0 ? acc - 1: acc;
// 		return acc;
		
//   }, 0);
// }


console.log(countParen('(('));
console.log(countParen('()'));
console.log(countParen('())'));
console.log(countParen('())('));
console.log(countParen(')('));
console.log(countParen(')(((('));













