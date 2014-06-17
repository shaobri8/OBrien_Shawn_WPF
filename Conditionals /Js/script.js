/* Shawn O'Brien
 WPF Section 101
 Assignment: Conditionals 17 June 2014
 */
//alert("Testing 1,2,3");

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than the budget AND if our paycheck is over 300
if(iPhonePrice < 300 || wonLottery === true){
   console.log ("You get a new phone!")
}else{
    console.log("No phone for you!");
}