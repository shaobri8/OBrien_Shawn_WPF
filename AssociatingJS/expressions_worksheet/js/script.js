//Dog's age.
var dogAge = 5; //The age of sparky is 5 so var dogAge will represent his age.
var given = 7; // This is the given number that stays constant.
var result = dogAge * given; // This line will multiply the two var.
console.log(result); // This line is going to show you in the web page inspector.

//Slice of Pie.
var students = 12; // the number of students that are at the party.
var slicePie = 8; // how many slices of pie are on a pizza.
var pizzaOrdered = 5; // how many pizzas were ordered.
var howMany = pizzaOrdered * slicePie / students; // the calculation to determine how many slices each person gets.
console.log(howMany);

//slice of pie part 2.
var studentS = 12; // the number of students that are at the party.
var slicePiE = 8; // how many slices of pie are on a pizza.
var pizzaOrdereD = 5; // how many pizzas were ordered.
var howManY = pizzaOrdered * slicePiE % studentS; // the calculation to determine how many slices each person gets.
console.log(howManY);

// groceries
// here is my last 5 weeks of grocery spending
var grocerySpending = [130, 160, 175, 153, 162];
// var a is adding each item up by their position in the array
var a = grocerySpending[0]+ grocerySpending[1]+ grocerySpending[2]+ grocerySpending[3]+ grocerySpending[4];
// to get the average the total must be devided by the amount of weeks.
var average = a/5 ;
console.log(average);