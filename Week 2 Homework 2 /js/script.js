/* Shawn O'Brien
 WPF Section 101
 Assignment: Expressions 12 June 2014
 */
//alert("Testing 1,2,3");

// my current job is with physical security so. I will Create a js file that is going determine the perimeter
// of a fence and how many lights will be needed.

// The first thing that needs to be done is finding out what the parameters are.
var side1 = prompt("What is the length of the north side of the property?");
var side2 = prompt("What is the length of the south side of the property?");
var side3 = prompt("What is the length of the east side of the property?");
var side4 = prompt("What is the length of the west side of the property?");
// a light every 20 feet is a constant.
constant = 20;
//now that we have the prompt inputs, we need to add them together to find the perimeter.
var per = Number(side1) + Number(side2) + Number(side3) +Number(side4);
// check the math.
console.log(per);
// So we now know the perimeter, we need to find how many lights we need. There is a given of 1 lamp post every 20 feet.
var light = per/constant;

// The only thing we have left to do is add in an alert to let us know the answer.

alert("The number of lights you need is "  +  light);

