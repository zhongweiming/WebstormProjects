//十进制转其他
var a=100;
console.log(a.toString(2));
console.log(a.toString(8));
console.log(a.toString(16));

//其它进制转十进制
console.log(parseInt("101010",2));
console.log(parseInt("101010",8));
console.log(parseInt("101010",16));
console.log(parseInt("101010",10));
console.log(parseInt("101010"));//默认十进制

//某进制转某进制
//先转换为十进制，再通过十进制转换成其他进制
//如八进制转换成二进制
var b = "54321";
var shi = parseInt(b,8);
console.log(shi.toString(2));