
 /* Shawn O'Brien
WPF Section 101
Assignment: Functions
 */
//alert("Testing 1,2,3");

 // Am I going to be able to go on a cruse?

 var money = prompt("How much money did you save for this trip?");
 //This is a variable that will be required to know if I can afford to go on a cruse.
 while(isNaN(money) ||  money ===""){money = prompt("How much money did you save for this trip?")

 }// Here the prompt is validated.


 if(money >= 1500){prompt("Great! you have enough money, Let's keep going!")

 }else{
     prompt("I'm sorry, we cant go any further. Please try again after you have saved some more money. ")
 }// My if/else statement that is required, it will let the user know if he can go on.

 var time = prompt("Do you have vacation days available?");
 // Am I going to be able to take the time off of work?