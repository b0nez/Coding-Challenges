// Gender Summary

function reduce(arr, accum, seed) {
	var reduced = seed;
	var i = 0;
	if(seed === undefined) {
		seed = arr[0];
		i = 1;
	}
	for(; i < arr.length; i++) {
		reduced = accum(reduced, arr[i], i, arr);
	}
	return reduced
}

var people = [
	{ name: "Jesse", age: 32, gender: "male" },
	{	name: "Tommi", age: 40,	gender: "female" },
	{	name: "John",	age: 19, gender: "male"	},
	{	name: "Toni",	age: 50, gender: "trans" },
	{	name: "Gene",	age: 45, gender: "trans" },
	{	name: "Freddy", age: 80, gender: "male" }
];


var genderSummary = reduce(people, function(genderSum, person) {

	if(genderSum[person.gender] === undefined) {
		genderSum[person.gender] = 1;
	} else {
		genderSum[person.gender] += 1;
	}
	return genderSum;
}, {});

console.log("genderSummary: " + genderSummary);

// console.log(people[0])

/* Output:
{
	male: 4,
	female: 1,
	trans: 2
}
*/
