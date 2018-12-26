var ary = Array(3);
console.log(ary.length);
ary[0]=2;
var newary=ary.map(function (elem) {//map方法返回对数组中每个非空元素操作后的一个等长数组
    return '1';
});
console.log(ary);
console.log(newary);