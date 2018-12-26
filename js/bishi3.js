var x = 1;
var output = (function () {
    delete x;//x为局部变量，delete无效
    return x;
})();
console.log(x);
console.log(output);