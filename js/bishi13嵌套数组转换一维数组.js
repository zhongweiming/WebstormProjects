//方法1（递归）
// function parseArray(arr,res) {
//     var i=0;
//     for(;i<arr.length;i++){
//         if(arr[i] instanceof Array) {
//             parseArray(arr[i], res);
//         }else {
//             res.push(arr[i]);
//         }
//     }
// }
// var arr = [1,[2,[3,[4,5]]]];
// var res = [];
// parseArray(arr,res);
// console.log(res);

//方法2(先转换成字符串在转换成新字符串数组再转换成整型数组)
// var a=[1,[2,[3,[4,[5,6]]]]];
// console.log(a.toString());
// console.log(a.toString().split(","));
// //利用js弱类型轻松将字符串转换成数字呀！！！牛逼
// var arr=a.toString().split(',').map(function(ele){
//     return +ele;//转换成数字
// });
// // var arr=a.toString().split(',').map(function(ele){
// //     return ele-0;//和上面的效果一样
// // });
// // var arr=a.toString().split(',').map(function(ele){
// //     return ele-1;//转换成数字，且都减一
// // });
// // var arr=a.toString().split(',').map(function(ele){
// //     return -ele;//变成负数
// // });
// console.log(arr);

//方法3 join方法，和方法2类似

//方法4???
Array.prototype.flatten=function(){
    return this.reduce(function(prev, cur) {
        var moreArr = [].concat(cur).some(Array.isArray);  //判断cur是不是一个数组
        return prev.concat(moreArr ? cur.flatten() : cur);
    },[]);
};
var a = [1,[2,[3,4]]];
var arr=a.flatten();
console.log(arr);