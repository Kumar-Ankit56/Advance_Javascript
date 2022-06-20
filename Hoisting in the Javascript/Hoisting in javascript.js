///1st one lets understand the code what will be the output of this program

var x=7;
function getname(){
    console.log('Namastey Javascript');
}

getname();
console.log(x);

/*/// 2.This the just reverse of the program mean we have just placed the function invokation and printing the console message before the defining and declaration.

getname();
console.log(x);

var x=7;
function getname(){
    console.log('Namastey Javascript');
}
*/

/*/// 3rd Case
getname();
console.log(x);

function getname(){
    console.log('Namastey Javascript');
}
*/

/*///Extension of 3rd part
//Here in this part we are using getname as arrow function in which the javascript termed it as the simple variable so it will assign the undefined special keyword to it.
getname();
console.log(x);

var x=7;
var getname=()=>{
    console.log('Namastey Javascript');
}

//even the this attach the code below will also behave like a varable to the javascript,
var getname2=function(){

}
*/

///Hoisting is the condition where you can access it function and variable even before intialise it

/*//4th Case
getname();
console.log(getname);

function getname(){
    console.log('Namastey Javascript');
}
*/