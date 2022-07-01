///Interview question 

/*function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);//Here this callback function will form the clouser with var i and it will store somewhere and attach timer to it.
    }, 5000);
    //Here most of the developer think that js engin will wait for 5 sec just beacuse of the timeout.
    console.log("Code-Wave");

}
//But the attached function will not wait for anythings it will log code-wave and wait for thte call paap.
x();
*/
/*
//Why its behave like this way as printing 6 only after each iteration
1.this is so beacuse just beacuse of closure when timer will attach and store somewhere then function remember to i means it will remember to referance to i not its value,
Similarly all five copies of function will point to the same value of i and it will remember the referance to 'i' this is beacuse the envirnoment for all of these function are same(Global) it will refer to the same memory location.href

2. It doesn't wait for the timer and continouly move or iterate when timer gets expired till then loop value goes to 6 beacuse of iteration, so when function call back function runs it print the value of i as 6 and due to same environment all other five copies of function also print the value of i as 6.
*/

//when attached timer get expired then the engin put this fuction in the call stack then it execute.

/*//Problem is given as we need to print the number as one two three after each second.
function x() {
    for (let i = 0; i <= 5; i++) {
        //for fix this we have used the let as it has it's block level scope. means now each copies of function will hold the seperate value for i as here i not shared or common for all the copies of function it is unique of each function copy. so by this get we will get the expected result. We will have a new copy i within it.
        setTimeout(() => {
            console.log(i); //here function forms closure with new copies of i within it.
        }, i * 1000);
    }
}
x();
*/


//Extension of question as you can't use let you have to do the thing using var only.
//We have seen that the problem with var i is it get shared the copies of i to all the copy of function, apprach is avialble here how we can give the new copies of i to the settimeout over each iteration.
function x() {
    for (let i = 0; i <= 5; i++) {
        function close(x) {
            setTimeout(() => {
                console.log(x); // Here we are passing the new copies of i to the function with the help of closuer
            }, x * 1000);
        }
        close(i)
    }
}
x();