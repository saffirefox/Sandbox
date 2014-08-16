/**
 * Created by Ann Marie on 7/14/2014.*/
no1 = document.getElementById('number1');           //retrieves info from input text "number1" and assigns value to no1
no2 = document.getElementById('number2');           //retrieves info from input text "number2" and assigns value to no2
mySum = document.getElementById('mySum');           //will assign the value to div "mySum"
button = document.getElementById('actionButton');   //event handler tied to "actionButton" submit button
console.log(document.getElementById('actionButton'));

button.onclick = addNumbers;                        //when submit button is clicked, event is fired and run function addNumbers

function addNumbers(){
    var a = getNumberA();                           //get value returned from getNumberA()
    var b = getNumberB();                           //get value returned from getNumberB()
    var c = a + b;                                  //sum the numbers and assign to variable c
    postSumToPage(c);                               //call function postSumToPage with c as argument
}

function getNumberA(){                              //function to manipulate input "number1"
    var a = parseInt(no1.value);                    //a is integer of value of no1 which is "number1"
    return a;                                       //return the value of a to addNumbers()
}

function getNumberB(){                              //function to manipulate input "number2"
    var b = parseInt(no2.value);                    //b is integer of value of no2 which is "number2"
    return b;                                       //return the value of b to addNumbers()
}

function postSumToPage(c){                          //will insert answer into "mySum" div
    var answer = c.toString();                      //var answer sets value of c to a string
    mySum.innerHTML = answer;                       //insert answer into "mySum"
}