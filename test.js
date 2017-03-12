"use strict"
var tmp = new Date();

//函数作用域，会提升变量的申明而不会提升赋值
function f() {                                                                             
  console.log(tmp); //undefined 变量提升
  if (false) {
    var tmp = "hello world";
  }
}

f();


var s = 'hello';
function g() {   
	for(var i = 0; i < s.length; i++) {
		console.log(s[i]);
	}
	//用来计数的循环变量泄漏为全局变量
	console.log(i); //5
}
g();


var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
} 
a[6](); // 10


function f1(){
	let n = 5;
	if(true) {
		let n = 10;
	}
	console.log(n);
}

f1();

if(true) {
	function f() {}
}

(function f() {
	console.log('I am outside!');
	if(false) {
		let f = f();
	};
}());


let t = f1();
t = t * t + 1

console.log(t); 

let {foo, bar} = {foo: "aaa", bar: "bbb"};
console.log(foo);
console.log(bar);

let foo1;
({foo1} = {foo1:1});
console.log(foo1);

let arr = [1,2,3,4];
let{0: first, [arr.length-2] : last_two} = arr;
console.log(last_two);

// function example(){
// 	return [1,2,3];
// }
// let [a,b,c] = example();

function example(){
	return {
		foo2: 1,
		bar2: 2
	};
}

let x = example();
console.log(x);

let jsonData = {
	id: 42,
	status: "OK",
	data: [867,5309]
};

let {id, status, data: arrs} = jsonData;
console.log(arrs);

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for(let [key, value] of map){
	console.log(key + " is " + value);
}
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
let addrs = [{first:1, last:2}]   
console.log(tmpl(addrs));

var a = 5;
var b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;


console.log(Math.trunc('123.456'))


let arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3
};

var arr11 = [].slice.call(arrayLike);
console.log(arr11);
let arr12 = Array.from(arrayLike);
console.log(arr12);

console.log(Array.of(1,"q1",2,"3","4"));

let test = [1, 5, 10, 15];
let result = test.findIndex(function(value, index, test) {
  return value > 9;
}) 
console.log(result);

for(let index of ['a', 'b'].keys()){
	console.log(index);
}

console.log(Array(3));

function log(x, y = 'World'){
	console.log(x, y);
}

log('Hello');

function foox(x = 5) {
	x = 10;
	return x;
}

console.log(foox());


function* gen(x){
	try {
		var y = yield x + 2;
		return y;
	} catch (e){
		console.log(e);
	}
	return y;
}
var g = gen(1);
console.log(g.next());
g.throw('error!');


let obj = {
	['h' + 'ello']() {
		return 'hi';
	}
};

console.log(obj['h' + 'ello']());

let ax = g;
let bx = g;

console.log(ax === bx);

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log(log.levels.DEBUG, 'debug message'));
console.log(log(log.levels.INFO, 'info message'));

var objs = {};
var a = Symbol('ab');
var b = Symbol('b');

objs[a] = 'Hello';
objs[b] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(objs);
console.log(objectSymbols);

var objx = {foo: 'bar', baz: 42};
console.log(Object.keys(objx));


(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));



