
 /* Shawn O'Brien
WPF Section 101
Assignment: Functions Date 06/26/14
 */
//alert("Testing 1,2,3");

 //When running a rc helicopter it is useful to know know how many watts of power you are using. This code is gather
 //info from prompts and calculate what the wattage will be used.

 //The first thing I want to do is create a variable to use for the function to return.

 var amp = prompt("How many amps is there?");//prompt works, now we need to validate it.
 while(isNaN(amp) || amp ==="") {
     amp = prompt("How many amps is there?"); // validated and works properly.

 }

 var volt = prompt("How many volts is there?");// prompt works properly now we need to validate it.

while(isNaN(volt) || volt ===""){
    volt = prompt("How many volts is there?"); // validated and working properly

}


 var totalWatts = function(amps, volts) {
     watts = amp * volt;
     return (watts);
 };
var a = totalWatts(amp);

prompt ("You will have " + a + " watts of power");// I used the var a to prompt the user. I created it so I can have
 // An anonymous function.

//Instead of printing out on the console. I have prompted
 // the answer to the user.



