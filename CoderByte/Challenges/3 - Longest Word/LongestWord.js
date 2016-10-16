/* Longest Word
> Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
> Input:"fun&!! time"
> Output:"time"
> Input:"I love dogs"
> Output:"love"
*/
var sentence = "This is a sentence with a bunch of words";

function LongestWord(sen) { 
	sen = sen.split(' ').reduce(function(longest, current) {
		return current.length > longest.length ? current : longest;
	}, "");
	return sen;
}

console.log(LongestWord(sentence) + ":" + LongestWord(sentence).length);

// Output: 'sentence'