
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


 if(money >= 1500){prompt("Great! you have enough money")

 }else{
     prompt("I'm sorry, you need to save some more money before you can go. ")
 }// My if/else statement that is required, it will let the user know if he can go on.


 (money> 1500) ? prompt("Ok let continue on") : prompt("Let's at lest find out if you meet the other requirements. ");
 // Am I going to be able to take the time off of work?

var time = prompt("How many days of vacation do you have");

 (time >= 7 && money>= 1500)? prompt("You have enough money and time Pack your bags baby!!") : prompt("You don't have enough " +
     "money and / or time");

