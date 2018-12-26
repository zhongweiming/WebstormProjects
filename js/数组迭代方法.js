var arr = [1,2,3,4,5,6,7];

//every()方法,每个元素都满足条件返回true，否则返回false
var everyResult = arr.every(function (value,index,array) {
    return (value>2);
})
console.log(everyResult);

//some()方法,有1个元素满足条件返回true，全不满足返回false
var someResult = arr.some(function (value,index,array) {
    return (value>2);
})
console.log(someResult);

//filter()方法,返回满足条件的元素组成的数组
var filterResult = arr.filter(function (value,index,array) {
    return (value>2);
})
console.log(filterResult);

//map()方法,返回对每个元素操作后的数组
var mapResult = arr.map(function (value,index,array) {
    return (value*2);
})
console.log(mapResult);

//forEach()方法,不返还值，对数组的每一项运行传入的函数
arr.forEach(function (value, index, array) {
    array[index]+=10;
})
console.log(arr);