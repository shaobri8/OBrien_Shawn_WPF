/* Shawn O'Brien
WPF Section 101
Assignment: Expressions
 */
//alert("Testing 1,2,3");

//Create a Js file that will determine what your average weight loss is.
// In order to find an average, first we must get the input from the prompts.
var week1 = prompt("How much did you loose in week 1");
var week2 = prompt("How much did you loose in week 2");
var week3 = prompt("How much did you loose in week 3");
var week4 = prompt("How much did you loose in week 4");

//Now we need to add all of the information that was given together to get a sum.
var a = [week1, week2, week3, week4];
// test to see if the answer is correct.
console.log(a);
//Now to get the total.
var total = (Number(a[0]) + (Number(a[1]) + (Number(a[2]) +  (Number(a[3])))));
//Test to see if this answer is right.
console.log(total);
// In order to find the average you will need to divide by the number of prompts that were given.
var average = total / 4;
// In order for the person to see what the average is there needs to be a prompt added with that answer.
alert(average);
// Ok I was able to complete it thanks to the help of the class!