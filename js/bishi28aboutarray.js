console.log(['a',,'b',,1].length);//js中没有值得元素也算长度
console.log(['a',,'b',,1][1]);//undefined
var arr = [1,2,'3'];//js中数组元素类型可以不同
console.log(typeof arr[0]);
console.log(typeof arr[2]);
console.log(arr);