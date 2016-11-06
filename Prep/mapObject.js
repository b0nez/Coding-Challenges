//Your job, whether you choose to accept it or not, is to define a function mapObject that accepts the same arguments as map except it works for objects. Then you must use the mapObject function you just defined and use it on the input given below. Then define a callback function sanitize to be passed into mapObject so that we get the output below. sanitize should receive two arguments, the key and value. Your code should look something like:

var mapObject = function(object, callback) {
  // code goes here
}

var sanitize = function(key, value) {
  // code goes here
}

console.log(mapObject(input, sanitize));  // output

/*
Input:
{
  first_name: "James",
  last_name: "Hu",
  gender: "Male",
  biography: "Oh hey, I'm just a guy"
}

Output:
{
  first_name: "JAMES",
  last_name: "HU",
  gender: "MALE",
  biography: "oh hey, i'm just a guy"
}
*/
