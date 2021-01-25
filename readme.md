# javascript

## 1. Introduction

>

    simply javascript refers to client side language that has it's own style of define and declaring the instruction to run a code and it has it's own way of functioning. it is synchronous single parse 2 phase loosly type programming language. it's used to enhancing the interaction between client and the web page. JavaScript is a cross-platform so you don't need to worry to run js code on differ differ platform. javascript is flexible much that you can use it as a functional programming language or object oriented language.
    it was developed by Brendan Eich in 1995 and that time javascript was interpreter language but nowadays with the modern JS Engine it is both interpreter and compiler language depend on the browser JS Engine to enhance the speed.
    eg. -> v8 JS engine developed by google know as the fastest js engine. v8 use jit(Just in time) compiler to convert code into machine code for creating more optimized code that enhance the speed of execution.

>

## 2. Working

>

    javascript has an environment called execution context in that our js code evaluate and executed. it is two phases.
     1. Memory Creation Phase - in this phase memory allocation is done to each variables and function. labeling is done in this phase where undefined is assigned to all the variables and for the functions whole code is stored.
     2. Code Execution Phase - in the execution phase variables assigned there actual value by executing that line in the code section and for every function a new execution context is created. where again all the process of two phase is done for variable and function that belongs from newly executed function.
     eg.

>

```js
var num = 10;
function multiply(number) {
	return number * 2;
}
const multiplied_num = multiply(10);
```

![Execution Context Example](execution_context.png)

## 3. Hoisting

## 4. Functions

## 5. Undefined

## 6. Scope Chain

## 7. Let Const

## 8. Block Scope

## 9. Closures

## 10. setTimeOut

## 11. Asynchronous JS

## 12. JS Engine

```

```
