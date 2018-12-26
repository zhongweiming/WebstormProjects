//eg1
// console.log(1);
// setTimeout(function () {
//     console.log(2);
// },0);
// console.log(3);

//eg2
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// setTimeout(() => {
//     console.log("执行啦")
// },3000);
// sleep(10000);
// console.log("enen");

//eg3一个复杂的例子分析
//node下会先执行当下的全部宏任务再执行微任务
console.log(1);

setTimeout(() => {
    console.log(2);
    process.nextTick(function () {
        console.log(3);
    })
    new Promise(function (resolve) {
        console.log(4);
        resolve();
    }).then(function () {
        console.log(5);
    })
})

new Promise(function (resolve) {
    console.log(7);
    resolve();
}).then(function () {
    console.log(8);
})
process.nextTick(function () {
    console.log(6);
})//同等情况下优先执行nextTick后执行then
setTimeout(function () {
    console.log(9);
    process.nextTick(function () {
        console.log(10);
    })
    new Promise(function (resolve) {
        console.log(11);
        resolve();
    }).then(function () {
        console.log(12);
    })
})
