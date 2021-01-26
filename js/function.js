function f1(parameter) {
	console.log(parameter);
}

f1('f1 called');
console.log('');

const f2 = function new_f(parameter) {
	console.log(parameter);
};

f2('f2 called that is function expression');
console.log('');

const f3 = function (parameter) {
	console.log(parameter);
};

f3('f3 called and it is the anonymouse function');
console.log('');

const f4 = parameter => {
	console.log(parameter);
};

f4('f4 is called and it is arrow function');
console.log('');

const f5 = (function new_f(parameter) {
	console.log(parameter);
	return 'bonus';
})('f5 called that is IIFE function');

console.log(f5); // bonus
