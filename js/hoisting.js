// <-----------function----------->
'use Strict';
call();
function call() {
	console.log('Call Me.');
}

call();

console.log(another_call); // undefined
// another_call(); // TypeError not a function

var another_call = function call_me() {
	console.log('Called using variable');
};

// <-----------variable----------->
console.log(a); // undefined

var a = 10;

console.log(a); // 10

b = 4;
console.log(b);
var b;

// <-----------combined----------->
var a = 4;

function greet() {
	b = 'hello';
	console.log(b); // hello
	var b;
}

greet(); // hello
// console.log(b); // Reference error

// <-----------Classes----------->
// var cl = new CL(); // Reference error
class CL {}
