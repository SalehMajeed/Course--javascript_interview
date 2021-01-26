var property = 10;
console.log(property);
console.log('');

console.log(window.property);
console.log('');

console.log(this.property);
console.log('');

console.log(window == this);
console.log('');

console.log(window.property == this.property && this.property == property);

console.log(window);
