
 /* Shawn O'Brien
WPF Section 101
Assignment: Conditional_Personal
 */
//alert("Testing 1,2,3");

 //I am going to create a condition that will let me know if I can go flying my rc plane today.

var temp = prompt("What is the temperature?");

if(temp===""){prompt("Please don't leave blank")}


var wind = prompt("How windy is it today?");
var weather = prompt("Will it most likely rain today?");

 //Now we have the conditions that need to be met in order to fly, we need to code it.

if(temp <=80 && temp >=40 && wind <= 10 && weather === "No"){console.log ("Yes you can fly today!")

}else{console.log("No I wouldn't chance it.")}

//Tested the code and it works. Great. Now on to the validation.
 // We are going to need to validate to make sure numbers are put in to the interface and make sure people don't leave it
 //blank.
