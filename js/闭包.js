function f1() {
    var a = 15;
    return (function () {
        return (function () {
            return a;
        })();
    })();
}
console.log(f1());


//
// for(var i = 1;i <= 5;i++){
//         setTimeout(() => {
//             console.log(i)
//         },i*1000);
// }//每隔一秒输出6
// for(var i = 1;i <= 5;i++){
//     (function f() {
//         setTimeout(() => {
//             console.log(i)
//         },i*1000);
//     })();
// }//每隔一秒输出6
for(var i = 1;i <= 5;i++){
    (function f(j) {//使用闭包使得每次setTimeout将相应j绑定在作用域中，j不会随着f运行结束被回收。用i也行都一样
        setTimeout(() => {
            console.log(j)
        },i*1000);
    })(i);

}