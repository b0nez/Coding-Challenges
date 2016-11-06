

//  Solve this using reduce() in 15 min
//  Then again using recursion in 15 min

//Challenge:  Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

// Advanced: solve using recursion

var words = ['car', 'poop', 'banana', 'apple', 'blue', 'balls'];


function capitalizeFirst(array) {
	return array.reduce(function(accum, word) {
		accum.push(word.charAt(0).toUpperCase() + word.slice(1));
		return accum;
	}, []);
}

// console.log(capitalizeFirst(words));


function recurCapWords(array) {
	
	if(array.length <= 1) {
		return array;
	} else {
		return recurCapWords([ array[array.length - 1].charAt(0).toUpperCase() + array[array.length - 1].slice(1) ]);
	}
}
console.log(recurCapWords(words));

