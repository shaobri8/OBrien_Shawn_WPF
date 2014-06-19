
 /* Shawn O'Brien
WPF Section 101
Assignment: Conditionals_Wacky
 */
//alert("Testing 1,2,3");

 //Here is the last conditional. I want to have a little fun with this one so I am going to make it into a game
 //called, guess what number I'm thinking of.

 var number = prompt("Guess what number I am thinking of between 1-10?"); // the variable is created
 if(number === ""){prompt("Seriously pick a number. You might do better than you think! ")} // the variable is verified.


// Here is the code. I don't want people to keep guessing so I will give them a couple shots.
 if(number<=5){prompt("No but your close guess again!")}

 //I made another variable for a second input so the user can guess again.

var guess = prompt(" Not quite, this time pick between 5 and 10");

 // The conditional statement shows that you don't have to pick an exact number, but they will think they did.
 if(guess= 7 - 10){prompt("That's right!!!!! ")}
