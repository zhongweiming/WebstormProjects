// var current_time = new Date().getTime();
// console.log(current_time);
// while (1){
//     var now = new Date().getTime()
//     if (now-current_time>=5000){
//         break;
//     }
// }
// console.log(now);
// function sleep(seconds) {
//     var current_time = new Date().getTime();
//     while (1){
//         var future_time = new Date().getTime();
//         if (future_time-current_time>=seconds*1000){
//             break;
//         }
//     }
// }
// console.log(new Date());
// sleep(5);
// console.log(new Date());
// function returnArray(){
//     var i = 1,j=2;
//     return [i,j];
// }
// console.log(returnArray())
var isPalindrome = function(x) {
    var str = x+"";
    var arr = str.split("");
    console.log(arr);
    var arr2 = [];
    for(var i = arr.length-1;i>=0;i--){
        arr2.push(arr[i]);
    }
    console.log(arr2);
    var str2 = arr2.join("");
    if(str==str2){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome(1960330691312312));