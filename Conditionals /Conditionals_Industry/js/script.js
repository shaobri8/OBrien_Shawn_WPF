
 /* Shawn O'Brien
WPF Section 101
Assignment: Conditionals_Industry
 */
//alert("Testing 1,2,3");

 //for the industry conditionals I am going to create a conditional for writing a watch bill.
 // there are a few variables that need to be defined first.

 var hours = prompt("How may hours have they worked this week?"); // here is the variable
 if(isNaN(hours)){prompt("Please enter a number value.")} //here the variable is validated
 var timeOff = prompt("It this their normal day off?"); // here is the variable
 if(timeOff===""){prompt("Please do not leave blank")} //here the variable is validated

 // I will write this statement in the required ternary style.
 hours = (hours<40 && timeOff === "yes") ?"They will be able to work" : "No, you have to find someone else.";
 console.log(hours);

 