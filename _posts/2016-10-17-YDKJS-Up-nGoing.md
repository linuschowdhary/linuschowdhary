Learnings from You don't know JS by Kyle Simpson

Reading Order
1) Up & Going
2) Scope & closures
3) this & Object prototypes
4) Types & grammer
5) Async & performance
6) ES6 & Beyond

UP & GOING:-
Though asserted that JS is interpreted language as JS code is processed each time it's run, it's not entirely true.
The JS engine actually compiles the program on the fly and then immediately runs the compiled code.
[More on this in Sope & Closures]
Refer. : https://www.quora.com/How-does-a-JavaScript-engine-work

To type multiple lines into console at once : <shift>+<enter>
Once hit <enter>, code executes.

Accessing an object property
obj.a is same as obj["a"]

var b=Number("5");
console.log(b);
-->5 //instead of "5"

==  loose equals

"99.99"==99.99 //js will convert LHS "99.99" to its number equivalent 99.99 and thus becomes true.

Comments should explain why not what but can explain how if code is confusing

Javascript uses dynamic typing approach meaning variables can hold values of any type without any type enforcement.
Declare constants at top of program so as easier to go at one place to alter a value.Convention is to use Caps with underscore b/w words.
var TAX_RATE=0.08; //8% sales tax

ES5 added "strict mode" which applies restriction to certain behaviours to keep code safer.
We can opt for strict mode for an individual function or an entire file depending on where we put the strict mode

"use strict";
one of many advantages,Strict mode disallows implicit auto global variable declaration from omitting the var.
function foo(){
"use strict"; // turn on strict mode
 a=1; //'var' missing , ReferenceError
}

Functions as values:
function foo(){
}
here foo is just a variable in the outer enclosing scope that's given a reference to the function being declared ie.e. function itelsef is a value.

Immediately Invoked Function Expressions (IIFEs)
(function IIFE(){console.log("IIFE");})();
The outer (fun... ) is a just a nuance of JS grammer to prevent it from being treated
as a normal function declaration.
IEFE can have return values :-
var x=(function(){return 42;})();

Closure:
A way to remember and continue to access a function's scope(it's variables) even once the function has finished running.

eg. 

function makeAdder(x){

function add(y){
   return y+x;
   };
   
   return add;
}

var plusOne=add(1); // plusOne gets a reference to the inner 'add(..)' function 
                    // with closure over the 'x' parameter of the outer
                    // 'makeAdder(1)'
plusOne(2) // returns 3

var plusTen=add(10);
plusTen(12); // returns 22
/* 
How above code works : 
when we call makeAdder(1), we get back a reference to its inner add(..) that remembers x as 1. We
call this function reference plusOne(..).
When we call plusOne(2), it adds 2 (it's inner y) to the 1 (remembered by x) and we get 3 as a result.
*/

Module: 
Most common usage of closure in JS is the module pattern.
Module lets us define private implementation details(variables,functions)
that are hidden from outside world, as well as a public API that is accessible from the outside.

function User(){
    var username,password;
 
    function doLogin(user,pw){
    username=user;
    password=pw;;
    //do the rest of the login work
    }
    
    var publicAPI={
    login:doLogin
    };
    return publicAPI;
}

//create a 'User' module instance
var fred=User();
fred.login("fred","password@1234");

The User() function serves as an outer scope that holds the variables username and password,
as well as the inner doLogin() function; these are all private inner details of this User module
that cannot be accessed from the outside world.















































