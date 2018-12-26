var today = new Date();
console.log(today);
console.log("toString():  "+today.toString());
console.log("toDateString():  "+today.toDateString());
console.log("toTimeString():  "+today.toTimeString());
console.log("toUTCString():  "+today.toUTCString());
console.log("toLocalString():  "+today.toLocaleString());
console.log("toLocalDateString():  "+today.toLocaleDateString());
console.log("toLocalTimeString():  "+today.toLocaleTimeString());
console.log("\n");

//传入日期字符串方式创建日期，实际调用了Date.parse()方法
var someDay = new Date("3/5/2018 18:45:10");

console.log(someDay.toString());
console.log("\n");

//直接传入日期大小方式创建日期，实际调用了Date.UTC()方法
var anotherDay = new Date(2018,9,3,11,1,55);//第二个参数月份从0开始算,使用这种方式必须传入两个参数
console.log(anotherDay.toString());
console.log("\n");


//获取时间毫秒数
var start = Date.now();

for(var i = 0;i < 1000000000;i++){
    i++;
}

var stop = Date.now();
console.log(start);
console.log(stop);
console.log(stop-start);
console.log(typeof start);
var date = new Date(start);//传入一个数字参数，表示当前距离UTC（国际协调时间）的ms数，通过此来计算日期
console.log(date.toString());
console.log("\n");

//Date的valueOf方法可以用于比较日期,其返回毫秒数；
var date1 = new Date(1999,1,1);
var date2 = new Date(1999,2,1);
console.log(date1.valueOf());
console.log(date1 < date2);

console.log("\n");
var a = +new Date();//adapt to browser which do not support html5 . it will call the method valueOf() of Date
console.log(a);