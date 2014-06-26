
 /* Shawn O'Brien
WPF Section 101
Assignment: Functions Date 06/26/14
 */
//alert("Testing 1,2,3");

 //When running a rc helicopter it is useful to know know how many watts of power you are using. This code is gather
 //info from prompts and calculate what the wattage will be.

 //The first thing I want to do is create a variable to use for the function to return.

 var totalWatts = watts(20, 12); // Here is the info that will be put in the "Container" that are in the function.

 function watts(amps, volts){
     watts = amps * volts;
     return (watts);


 }
console.log ("You will have " + totalWatts + " watts of power");



