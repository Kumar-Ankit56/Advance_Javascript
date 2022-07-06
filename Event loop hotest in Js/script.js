//Role of the Javascript callstack
/*function a(){
    console.log("a");
}
a();
console.log("End");
*/
//what if we need to execute a function definition after 5sec then will it be possible for the javascript call stack not at all beacuse call stack has special functionalties as whatever it will reteain it will excute it as soon as it get. Also it doesn't have any timer attached to it. 
//So if we want to execute the any code after 4 sec then we need the timer or as like a superpower (of timer).

//For all these kind of issue our browser has super power that communicate with external world.

//To access all these superpower we need to have a connection that help to set a communication with the all superpower. We need the webAPI.

/*//Some of the webAPI
setTimeout
DomAPI
fetch  // connection with the external server that is present in the outside world.
localStorage
console
location
*/


//You often observe that in our code editor we just write setTimeout still our code is in the running mode It is because settime is avialable inthe global environment that's why.


/*console.log("start"); //here we are using the console api that will give the feature of access to the superpower of console where we log something and console is flugged into the GEC with the help of window object.


setTimeout(function cb() { //by this line we are accessign the timer feature of browser with the help of this specific APIs.
    console.log("Callback"); //By passing through this line it will register the callback as cb and also set the time of 5000 milisecond to the timer.
}, 5000);

console.log("End"); //it will log the end on the console.
*/

//Let's strength our base with the help of new example.
/*console.log("start");
document.getElementById("btn").addEventListener("click",function cb(){
    console.log("Callback");
});

console.log("end");
*/

//what is the addevent is the another superpower of browser through window object in the form of webAPI which is DomApi.                                                                                                                                                                                                                                                                           

//How the fetch will work
//It is totally different from setTimeout and EventListener.
console.log("start");
setTimeout( function cbt() {
    console.log("Cb setTimeout");
}, 5000);

fetch("http://api.netflix.com").then(function cbf(){
    console.log("CB Netflix");
});

console.log("end");

//Fetch is used for the network call.  