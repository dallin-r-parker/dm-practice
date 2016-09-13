

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
