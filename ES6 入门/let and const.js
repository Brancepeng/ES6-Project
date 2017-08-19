/**
 * Created by pengzongcheng on 2017/6/3.
 */
'use strict';
/*{
 let a = 10;
 var b = 1;
 }

 a ;// ReferenceError: a is not defined.
 b ;// 1*/


/* for (let i = 0; i < 10; i++) {}

 console.log(i);
 //ReferenceError: i is not defined*/

/*var a = [];
 for (var i = 0; i < 10; i++) {
 a[i] = function () {
 console.log(i);
 };
 }
 a[6](); // 10*/

/*var a = [];
 for (let i = 0; i < 10; i++) {
 a[i] = function () {
 console.log(i);
 };
 }
 a[6](); // 6*/

//上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你
// 可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为
// JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

//综上所述,个人觉得let在大多数情况下会优于var.
// 参见:https://www.zhihu.com/question/47456978/answer/106069482

//ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前
// 就使用这些变量，就会报错。故而在使用let和const时不存在变量提升.

//es5及之前只存在全局变量和函数作用域,出现很多不合理的情况,例如:内层变量可能会覆盖外层变量,在循环体内的计数变量变为全局变量.
//es6引入let和const其实就是为JavaScript增加了块级作用域.
/*function f1() {
 let n = 5;
 if (true) {
 let n = 10;
 }
 console.log(n); // 5
 }*/
//上面的函数有两个代码块，都声明了变量n，运行后输出5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是10。

/*//ES6 允许块级作用域的任意嵌套:
 {{{{{let insane = 'Hello World'}}}}};
 //上面代码使用了一个五层的块级作用域。外层作用域无法读取内层作用域的变量。*/

/*
 //内层作用域可以定义外层作用域的同名变量;
 {{{{
 let insane = 'Hello World';
 {let insane = 'Hello World'}
 }}}};
 */

/*//块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了:
 // IIFE 写法
 (function () {
 var tmp = ...;
 ...
 }());

 // 块级作用域写法
 {
 let tmp = ...;
 ...
 }*/

/*var i, x, y;a = b = [];
 for (i = 0; i < a.length; i++) {
 x = a[i];

 }
 for (i = 0; i < b.length; i++) {
 y = b[i];

 }

 var callbacks = [];
 for (var i = 0; i <= 2; i++) {
 (function (i) {
 callbacks[i] = function() { return i * 2; };
 })(i);
 }
 //xiang qing can jian :https://www.zhihu.com/question/35832285
 callbacks[0]() === 0;
 callbacks[1]() === 2;
 callbacks[2]() === 4;*/


