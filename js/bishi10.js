(function () {
    var x=y=1;//其实相当于y=1;var x=y;x为局部变量，y为全局变量

})();
console.log(y);
console.log(global.y);
console.log(x);