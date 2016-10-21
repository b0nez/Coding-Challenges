//const lodown = require('lodown-jmenkin');


//  Solve this using reduce() in 15 min
//  Then again using recursion in 15 min

//Challenge:  Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

// Advanced: solve using recursion

var words = ['car', 'poop', 'banana', 'apple', 'blue', 'balls'];


function capitalizeFirst(array) {
	return words.reduce(function(x, y) {
		return x + y.charAt(0).toUpperCase() + y.slice(1);
	});
}

console.log(capitalizeFirst(words));