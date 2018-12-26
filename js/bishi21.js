var foo={n:1};
var boo = foo;
// foo.x=foo={n:2};
// foo.x=foo;
foo.x=y=2;
console.log(foo);
console.log(foo.x)