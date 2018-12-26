function f(obj) {
    with (obj){
       a=2;
       var c = 1;//with里面声明的局部变量可在with块所在的函数中使用
    } ;
    return c;
}
var obj1 = {
    a:1
}
var obj2 = {
    b:2
}
console.log(f(obj1));
f(obj2);//未找到obj2中的a属性，导致创建了一个全局变量
console.log(obj1.a);
console.log(obj2.a);
console.log(a);