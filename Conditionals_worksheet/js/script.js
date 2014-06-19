
 /* Shawn O'Brien
WPF Section 101
Assignment: Conditional_worksheet
 */
//alert("Testing 1,2,3");

 // The first thing that we need to do is figure out the variables.

 var eff = prompt(" What is your cars mpg rating? ");
 var gauge = prompt(" At what percent is your tank gauge reading? ");
 var cap = prompt(" What is the capacity of the gas tank? ");

 // Now that we have the var figured out, we need to input a solution to figure out if we can make it.

 if(eff>20 && gauge >= 75 && cap >= 20){prompt("Yes, you can make it without stopping for gas!")


 }else {prompt ("You don't have enough gas in your tank, better get gas now while you can!");

 }
 // I have made a formula to figure out if we can make it or not, however this formula does not include math. 