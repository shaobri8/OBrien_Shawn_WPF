/* Shawn O'Brien
 WPF Section 101
 Assignment: Expressions
 */
//alert("Testing 1,2,3");

//This is going to be kind of fun. Lets start with getting some information.

alert("I AM GOING TO PREDICT YOUR FUTURE!!!");

//Now I will find out some information from the user.

var dog = prompt("What is your dog\'s name?");
var fb = prompt("How many FaceBook friends do you have?");
var wh = prompt("What is your favorite color?");
var car = prompt("How many cars do you own?");

// Now I need to make some changes to the numbers that will be input. So they will not stay the same.
fb -= 10;
car += 1;
//Here is the formula I came up with to predict the users future.
alert("You will buy a cat and name it " + dog);
alert("You will find $" + fb + " on the ground");
alert("You will buy a " + wh  + " house");
alert("You will own " + car + " cars");
// It has been checked and it works!