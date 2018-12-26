//eg1
// var a = [];
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); // var定义的变量在这里为全局，所以最终调用的输出都是i的最终值10
//只要let声明前的变量使用了就会报错
//只要块级作用域中存在let声明，则let声明的变量就会绑定在该作用域，不受外部影响。在let声明前使用该变量就会报错。暂时性死区

//eg2
// var tmp = 123;
// if (true) {
//     tmp = 'abc'; // ReferenceError
//     let tmp;
// }

//eg3
//var x=x;
// let x=x;
// console.log(x);//error

//eg4
var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';//变量提升，覆盖外层变量
    }
}

f(); // undefined

//eg5