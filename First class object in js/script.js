/*//there is two way of function interaction
//function statement?

//This way of creating function is the function statement.
function a(){
    console.log("hello");
}
a();

//Assigning function to a variable is the uniquness of javascript and this is the function expression
var b=function(){
    console.log("b is called");
}

b();
*/



/*//difference between the function statement and function expression is hoisting
a();
b();

function a(){
    console.log("hello");
}

var b=function(){
    console.log("b is called");
}


//if we call the a() and b() before the defining the function then b() called will throw an error.
//as we have learnt the during memory creation phase the a will create and assign all function code but in the b will created like a variable (b:undefined) and untill code reaches the function it is still in the undefined. So, it cann't be called
*/


//Function declaration is the other name of function statement 

/*///What is anonymous function
//A function without name is know as anonymous function
 function(){
   //this will error but it accept the function as expression
}
//Facts 
//They don't have their own identity.So the anonymous function without code inside it result in an error
//Anonymous function are used when function are used as value EventTarget. the code sample for function expression above
*/


/*//What is named function expression
var b=function xyz(){
    console.log("b is called");
}
b();
xyz(); // this will throw an error of Referanceerror:XYZ is not defined 
//xyz function is not created in global scope. So it can't be called but it is created as local variable so we can access it function internally


var b=function(parm1, parm2){
    console.log("b is called");
}
b(argm, argm); //value passed inside the function call

*/


//First class function in the javascript
//we can pass function as parameter
var v = function(parm1){
    console.log(parm1);
}

function xyz(){

}

v(xyz);

//There is alternative way to do that same.
var d = function (parm1){
    console.log(parm1);
}
v(function (){

});

//we can also return the value form the function as well let see the behavior
var d = function (){
    return (function(){

    });
}
console.log(d());

//So all these properties of function we termed it as first class function.


//Arrow function
