var str = "123";
//转换成数字的方法
// //1
// var num = parseInt(str);
//var num = parseInt(str,8);//按各种进制转换
// console.log(num);
// console.log(typeof num);

//2利用js弱类型
// var num = str-0;
 var num = +str;
console.log(num);
console.log(typeof num);