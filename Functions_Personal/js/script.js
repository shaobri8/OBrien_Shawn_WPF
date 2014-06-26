
 /* Shawn O'Brien
WPF Section 101
Assignment: Functions Date 06/26/14
 */
//alert("Testing 1,2,3");

 //When running a rc helicopter it is useful to know know how many watts of power you are using. This code is gather
 //info from prompts and calculate what the wattage will be.

 //The first thing I want to do is create a variable to use for the function to return.

 var amp = prompt("How many amps is there?");//prompt works, now we need to validate it.
 while(isNaN(amp) || amp ==="") {
     amp = prompt("How many amps is there?"); // validated and works properly.

 }

 var volt = prompt("How many volts is there?");// prompt works properly now we need to validate it.

while(isNaN(volt) || volt ===""){
    volt = prompt("How many volts is there?"); // validated and working properly

}



 var totalWatts = watts(amp, volt); // Here is the info that will be put in the "Container" that are in the function.

 function watts(amps, volts){
     watts = amps * volts;
     return (watts);


 }
prompt ("You will have " + totalWatts + " watts of power");//Instead of printing out on the console. I have prompted
 // the answer to the user.



