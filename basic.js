var objtest = {}; // 1 
console.log((objtest !== null) && (typeof objtest === "object") && (toString.call(objtest) !== "[object Array]")); // 2 
console.log(Object.prototype.toString.call(null) === "[object Object]");

console.log(typeof '');
console.log(typeof 1);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof new Function);
console.log(typeof new Date());
console.log(typeof new RegExp);

console.log([] instanceof Array);
console.log({} instanceof Object);
console.log(new Date() instanceof Object);

function Person(){};
console.log(new Person() instanceof Person);

console.log([] instanceof Object);

console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call([]));

var ary = [1,23,4];
console.log(ary.__proto__.constructor==Array);//true
console.log(ary.constructor==Array)

console.log(isNaN('ab'));