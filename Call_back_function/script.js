//What is the callback function in the javascript
//--> So as we already know that the functions are the first class citizen in the javascript  mean we can take a function and can pass in the another function the function pass we pass to the another function is know as call back function. It is very powerful in js it allows to do the async behaviour in the sync function.

/*function x(){
  console.log("x");
}
x(function y(){
 console.log("y");
});
*/
//--> Here the function y is callback function.

setTimeout(function () {
    console.log("Timer");
}, 5000); //Settimeout will do the job.

function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});