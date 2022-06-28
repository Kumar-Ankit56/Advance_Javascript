/*//Here we can access the b even before declareation and we won't be able to do in other languages.
console.log(b);
let a=10;
var b=100;
*/


/*let a=100;
console.log(a);
var b=10;
*/

//Here one point is that you need to undersatand as both let and var are hoisting but as one side of var it get memory space in the global object but in case of let it get memory space allocation in the script something that is different from the Global object. Here you can't accesss the memory space before putting any value in it.

//They have something a seperate memory space know as script object.

//Let's explore what is temporal dead zone
//Time since when the let variable was hoisted until it is intialized some value, Simply form hoisting to get initialise some value in it is know as temporal dead zone.


/*//Whenever we tries to access any varible in the temporal dead zone it gives a refereance error like attach example
console.log(a)
let a=100;
var b=10;
*/


/*console.log(a) //Referance error
console.log(x); //not defined
console.log(b); //undefined
let a=100;
var b=10;
*/


let a=100;
console.log(a);
var b=100;


/*we have learnt as variable with declaration with var keyword they get attach with global object and if we tries to access it will print the value of var variable.
window.a //permisiable
But it is not in the case with let as we know let is not attached with global it won't be able to return the value of variable declare with let or const.
window.b //it will treat it is normal variable that is not present in the scope and place with specail value undefinined.
*/

//This or window they are same So whether you access with window.---- or this.----- they are same.

//strictness to the let is more than var
//like you can't redeclare the let if its found it will through and error and won't be execute single line of code in the console.

/*console.log("Ankit");
let a=10;
let a=12;
console.log(a); 
*/

/*//Same with the case of the var as we can't intialise the same of variable in the same scope it doesn't matter whether it is var or let observe the attached code.
let mylet=100;
var mylet=1000; //Can't redeclare block level scope variable.
console.log(mylet);
*/

//But it is possible in var that redeclare the variable with the same name in the same scope but things to be noted is that it will print only the last variable.

var to=17;
var to=19;
console.log(to);


//by above attached code it will throw the syntax error to the console. And avoid the print the single line of code on the console.


//let's look to the more strictness of Let
let d;
d=12;
console.log(d);

/*//Here we can declare and assign a varable at different position but it is not in the case of const.
const f; // Missing intialiser we need to intialize the variable at the time of declaration.
f=100;
console.log(f);
*/

/*const e=100;
e=1000; //This is not acceptable as we are intialising to the const variable
console.log(e);
*/

//type error means variable is of const type.
//declaring and not intialise gives the syntax error.
// try to access the let variable even before intialisation it gives the referance error 


//Tries to save from unexpected error then use let and const.

//Best way to avoid the temproal dead as keep the all declartion and intialisation at the top and lead to shring the temprol dead shrink to window to zero.
