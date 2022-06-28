/*function x(){
    var a=8;
    function y(){
        console.log(a); //there is no doubt that it will print the value of a =8;
        //Firstly it will look out for the value of  a inside y scope its not found then it will go to the the its parent by lexical scope so these all are the process of the closures.
        //By putting debugger here you will observe the closure.
    }
     y();
}
x();
*/
//What is closure
//Closure is the function bunddled with its lexical environment

//We know that javascript is the lexical environment. If a function needs to access a variable, it first goes to itslocal memory. When it does not find it there it goes to its memory of its lexical parent.
//Observe the above code you will be able to see the function y with its lexical scope called it as closure

// IN the devleoper tools you are getting like closure(x) for y function it says that it forms a closure with the variable that is the part of the x lexical scope.


/*//Function are the heart of javascrip
1. we can assign the fuction to the variable 
2. we can even pass a fuction as parameter to the function 
3. literally we can return a function.
These all are the unscean behavior you are observing 
*/



//When we return the function then closure come into the picture.
/*function x(){
    var a=8;
    function y(){
        console.log(a);
    }
    return y; //It will return the whole the function code
}
var z=x(); // Here it iwll replace the x() with returned function and we are grabing into the z and after we are console it.
//Here at the line 38 there is catch as it is returning the function to z and after return call stack of x will be vanished means every thing goes out as there will no will be memory referance and other stuff.
console.log(z);
//SO let's assume after the 1000 lines of code we are invoking the function as
z();*/
//Rather than throwing any error it is  loging the value of a as 8, here closure comes into the picture.
//When any function return from the another function they still maintain there lexical scope even there is x no longer avialable. They rememeber where they are.

//In the above code when y is returned, not only is the function returned but the entire function (function y+ it's lexical scope) is returned and put insede z. So when z is used somewhere else in the program, it still remembers var inside x()

//Closures come along with lots of gotacha let discusess and finallise it
/*function x(){
    var a=8;
    function y(){
        console.log(a);
    }
    a=100;
    return y; //It will return the whole the function code
}
var z=x();
console.log(z);


z();
*/ //What will be output as we are modifying the a before returning.
//Here is a doesnt refers to the value it returned to the referance of a of those value, and referance to a persist it doesn't persist with value. when z will invoke it will try to find the referance of a and now by the time it is pointing to the last a with 100 value.


//2. gotcha
function z(){
    var b=600;
    function x(){
        var a=8;
        function y(){
            console.log(a,b); // here we are accessing the its parent scope also and parent parent scope also.
            //here by developer tool it will form a closure with it parent and closures with its parent parent. if it will return then it will returned with the lexical scope of both a and b variable.
        }
        y();
    }  
    x();
}
z();
