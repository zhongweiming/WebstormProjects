// //或1
// function foo(x) {
//     x=x||3;
//     console.log(x);
// }
// foo();
// foo(0);
// foo(-1);
// foo(1);

// //或2
// function foo(x) {
//     x=x||0;
//     console.log(x);
// }
// foo();
// foo(0);
// foo(-1);
// foo(1);

//与1
function foo(x) {
    x = x && 3;
    console.log(x);
}

foo();
foo(0);
foo(-1);
foo(1);

// //与2
// function foo(x) {
//     x=x&&0;
//     console.log(x);
// }
// foo();
// foo(0);
// foo(-1);
// foo(1);