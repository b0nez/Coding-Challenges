
var array = ["Hello", "Goodbye", "Toy", "Car", "Toy", "Not", "Car"];

var uniqueProducts = array.filter(function(elem, i, array) {
    console.log("elem: " + elem);
    console.log("i: " + i);
    console.log("array: " + array);
    console.log("arr.indexOf: " + (array.indexOf(elem) === i));
    return array.indexOf(elem) === i;
});

console.log(uniqueProducts);
