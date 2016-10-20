

 //make a function that's parameter is a string, return the first non-repeated character in the string.
//Ex: if passed hh eloe it would return e because there is no e before or after it.

 function returnIt(str) {
     //note, there isn't a space between the quotes so that every letter in the word is put into an array, not counting spaces because those are false
     var strArr = str.split(''); //the array we make out of what's passed in  .split takes a string and turns it into an array of sub-strings (basically takes out the spaces in between words) and returns a new array
     var x = []; //this is the array that we'll be pushing the new string segments into

     for (var i = 0; i < str.length; i++) { //str is the length of the string passed in through the parameters
         //the reason we aren't using str is because it hasn't been parsed yet. so we use strArr. for loop will work with either str.length or strArr.length as they're the same length.
         if (strArr[i] !== strArr[i + 1] && strArr[i] !== strArr[i - 1] && strArr[i] !== " ") { //in english: if strArr at indici i is not equal to the next letter
             //over AND strArr isn't equal to the one before it AND it isn't equal to a space, THEN push to new ARR x
             x.push(strArr[i]);
         }

     }
     return x[0]; //return the letter in the first index because this is the first letter that doesn't repeat itself
 }

 var cat = returnIt('hh elo'); //here we created a variable to pass in the function as the parameter
 console.log(cat); //invoke the function (using console log because we want to see the answer) and put in the parameter we just made

________________________________________________________________________________________________________________________________________;
// given an array of numbers, remove the duplicate numbers
var nums = [1, 2, 3, 5, 3, 4, 2, 7, 6];
// nums = [1,2,3,5,4,7,6];

function removeDupes(arr) {
    var nums = [];
    for (var i = 0; i < arr.length; i++) {
        if (nums.indexOf(arr[i]) === -1) {
            nums.push(arr[i]);
        }
    }
    return nums;
}
console.log('1:', removeDupes(nums));

________________________________________________________________________________________________________________________________________;

// given a sentance "hello, my name is Dallin" === the first letter of every word
//whould be capitilized.


var sentence = "Hello, my name is Dallin";


function capString(input) {
var splitString = input.toLowerCase().split(' ');
for(var i = 0; i<splitString.length; i++){
   splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
}
return splitString.join(' ');
}

capString(sentence);

//Second solution to the same question above.

var myStr = "Hello, my name is Stephen";

function caps(str) {
	var strSplit = str.split(' ');

	for(var i = 0; i < strSplit.length; i++) {
		var tempSplit = strSplit[i].split('');

		tempSplit[0] = tempSplit[0].toUpperCase();

		strSplit[i] = tempSplit.join('');
	}

	str = strSplit.join(' ');

	return str;
}

caps(myStr);


 ________________________________________________________________________________________________________________________________________;

//find as many ways as you can to string

 // http://bit.ly/2cCoJaW



 function reverse(str) {
     for (var i = 0; i < str.length; i++) {

     }
 }

 ________________________________________________________________________________________________________________________________________;

 // function fibSequence() {
 //     var fib = [];
 //
 //     for(var i = 1; i <= 100; i++) {
 //         fib.push([i-1]+fib[i]);
 //     }
 //     return fibSequence;
 // }
 // console.log(fib);   <----
__________________________________________________________________________________________________________________________________________;


 function sayHi(clothing, adjective) {

     console.log("Hi " + this.name + ".  I like your " + clothing + ".  I think you're " + adjective + ".");
 }

 sayHi.call({name: "Dave"}, "hat", "barely tolerable");

 sayHi.apply({name: "Dave"}, ["hat", "barely tolerable"]);

 var sayHiFn = sayHi.bind({name: "Dave"});


 sayHiFn(" super suit", " sporty");

 ______________________________________________________________________________________________________________________;

 function fibonacci(num) {
     var fib = [];
     for(var i = 0; i < num; i++) {
         fib.push([i-1]+fib[i]);
     }
    console.log(return fibonacci);
 };










