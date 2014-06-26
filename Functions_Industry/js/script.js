
 /* Shawn O'Brien
WPF Section 101
Assignment: Expressions
 */
//alert("Testing 1,2,3");




function monthlyAvg(week, amount, month){
// Here is the named function followed by the variables.


    var week= prompt("What is your weekly income?");
    // Variable week is needed for the user to input info.


    while(isNaN(week) || week==="") {
    //Here I am validating the prompt with a while loop.
        week = prompt("What is your weekly income?");
    }


    var amount= 52;
    // Another variable that is required to find out the average.


    var month= 12;
    //The last variable that is needed to find out the average.


var monthlyAvg = (week * amount / month);
// This is the equation that adds it together.


console.log (monthlyAvg);


}
monthlyAvg();
// This is needed to complete the function. Known as the actuator.




