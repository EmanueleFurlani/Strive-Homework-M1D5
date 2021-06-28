
console.log("---EXERCISE 1---")
/* Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function calculateRectangleArea(l1, l2){
    return l1 + l2
}
console.log(calculateRectangleArea(3, 4))

console.log("---EXERCISE 2---")
/* Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(a, b) {
    if (a === b) {
        return (a + b) * 3
    }
    else {
        return a + b
    }
}
console.log(crazySum(3, 3))
console.log(crazySum(3, 4))

console.log("---EXERCISE 3---")
/* Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function creazyDiff(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
}
console.log(creazyDiff(12));
console.log(creazyDiff(19));
console.log(creazyDiff(22));

console.log("---EXERCISE 4---")
/* Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
}
console.log(boundary(10));
console.log(boundary(90));

console.log("---EXERCISE 5---")

/* Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(str) {
if (str.startsWith("Strive")) {
    return str
}
else {
    return "Strive" + " " + str
}
}
console.log(strivify("Lele"))
console.log("")

console.log("---EXERCISE 6---")
/* Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(x) 
{
  if (x % 3 === 0 || x % 7 === 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}
console.log(check3and7(24));
console.log(check3and7(28));
console.log(check3and7(20));
console.log(check3and7(22));

console.log("---EXERCISE 7---")
/* Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString("Juventus"))

console.log("---EXERCISE 8---")
/* Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}
console.log(upperFirst("today is friday"));

console.log("---EXERCISE 9---")
/* Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(str) {
    return str.substring(1, str.length - 1);
  }
  console.log(cutString("hello"));

  console.log("---EXERCISE 10---")
/* Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) {
    let arrWithNums = [];
    for (i = 0; i < n; i++) {
     arrWithNums.push(Math.floor(Math.random() * 10));
    }
    return arrWithNums;
  }
  console.log(giveMeRandom(6));

console.log("------------------")

 let num = 400
 let perc = 20
 let percentage = num / 100 * perc

 console.log(percentage)