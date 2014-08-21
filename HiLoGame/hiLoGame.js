/**
 * Created by Ann Marie on 7/6/2014.
 */
/* Hi Lo Game.  Guess a number between 1 -100. Random number generated by computer. Computer play against self with max 15 guesses */

//computer to come up with random number between 1 - 100
function mysteryNum() {
    var mysteryNumber = Math.random() * 100 + 1;    //Math.random() returns a random floating decimal between 0 and 1. Mult by 100 to get number greater than or equal to 1. Add 1 to avoid zeros
    mysteryNumber  = Math.round(mysteryNumber);          //Rounds up or down the floating point number to nearest integer.

    if(mysteryNumber === 101)   //from Line 8, if number is 100 and 1 is added, 101 results and the range is 1-100
    {
        mysteryNumber = 100;    //correct 101 to 100
    }
    return mysteryNumber;
}//end mysteryNum function

//need computer to make an initial guess using a random number function
function guessNum(){
    var guessNumber = Math.random() * 100 + 1;
    guessNumber = Math.round(guessNumber);
    return guessNumber;
}//end guessNum function


//call function mysteryNum and guessNum to come up with two numbers to begin function hiLo
var MN = mysteryNum();
var GN = guessNum();

   console.log("The mystery number is:" + MN);
   console.log("the guess number is: " + GN);

var low = 1;                                                //Set bounds. Low is 1 and high is 100 since range 1 - 100
var high = 100;
var guesses = [];                                           //Empty array to store guess values in
guesses.push(GN);                                           //push every guess into this array

//hiLo function to have computer make guesses until the Mystery number is found. Initial guess is number generated from guessNum()
//Mystery Number and Guess Numbers are parameters for hiLo()
function hiLo(MN, GN)
{
    for(var i=0; i < 15; i++) {                         //Set maximum number of guesses to be 15. This is higher than needed since the average
        if (GN === MN) {                                //number of guesses is usually between 3 to 7.
            console.log("Yay, the guess is correct!");  //if Guess Number equal to Mystery Number, then program ends by setting i=15
            i = 15;
        }
        else if (GN < MN) {                             //if Guess Number is less than Mystery Number then...
            console.log("Guess is too low!");
            low = GN;                                   //set low value to Guess Number to narrow gap between Guess Number and Mystery Number
            GN = Math.round((low + high)/2);            //take average of low and high values
            guesses.push(GN);                           //push Guess Number into guesses[]
            console.log("The new guess number is: " + GN);
            }
        else
            {
                console.log("Guess is too high");        //if guess is too high then...
                high = GN;                               //set high value to Guess Number to narrow gap between Guess Number and Mystery Number
                GN = Math.round((low+high)/2);          //take average of low and high values
                guesses.push(GN);                       //push Guess Number into guesses[]
                console.log("The new guess number is: " + GN);
            }
        }
}//end hiLo


//indicate how many guesses were made and what the guesses were.
var highLow = hiLo(MN, GN);
console.log("The following " + guesses.length + " guesses were made: " + guesses);












