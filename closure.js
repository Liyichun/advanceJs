function A(){
    function B(){
       console.log("Hello Closure!");
    }
    return B;
}
var C = A();
C();


function foo(a) {
var b = a;
return a + b;
}
var c = foo( 2 );
console.log(c);


var i = 0;

for (var i=0; i<10; i++) {
//console.log( i );
}

console.log(i);



let x=0
for (let x=0; x<10; x++) {
	console.log( x );
}

console.log(x);


// for (var i=1; i<=5; i++) {
// (function() {
// setTimeout( function timer() {
// console.log( i );
// }, i*1000 );
// })();
// }

for (let i=1; i<=5; i++) {
setTimeout( function timer() {
console.log( i );
}, i*1000 );
}

var foo = (function CoolModule(id) {
function change() {
// 修改公共API
publicAPI.identify = identify2;
}
function identify1() {
console.log( id );
}
function identify2() {
console.log( id.toUpperCase() );
}
var publicAPI = {
change: change,
identify: identify1
};
return publicAPI;
})( "foo module" );
foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE