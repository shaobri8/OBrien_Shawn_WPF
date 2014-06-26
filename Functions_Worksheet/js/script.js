
 /* Shawn O'Brien
WPF Section 101
Assignment: Expressions
 */
//alert("Testing 1,2,3");


//Circumference!

//Because we need find the circumference which is pie * the radius, I made a variable for each.

var complete = cir(5, 3.14); // Here I gave the parameters of the equation "pie and radius". I also made the variable
 // for the answer to be returned.

function cir(radius, pie){ // Here are the "Containers" that are used for the variables.
    var cir = radius * pie;
    return cir; // to make the function I needed to enter the calculation.


}

console.log ("The circumference of the circle is " + complete); // Here is the outcome of the equation. It will be
 //printed to the console as shown.

 // Stung!
 // We need to find out how many bee stings it takes to kill an animal.
 //I am going to start out by making my variable and setting my parameters.

 var total = beeSting(8.666666667, 180 ); //I entered the amount of bee stings required per pound and the weight of a
 //victim.

 function beeSting(sting, pounds ){// the function requires that I put in the containers.
     var beeSting = sting * pounds;// Here I am telling the factory what to do with what's in those containers.
     return beeSting;//Now I am returning the answer so that we can print it to the console.

 }

console.log ("It takes " + total + " bee stings to kill a 180 lbs human");

