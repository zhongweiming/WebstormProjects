// var current_time = new Date().getTime();
// console.log(current_time);
// while (1){
//     var now = new Date().getTime()
//     if (now-current_time>=5000){
//         break;
//     }
// }
// console.log(now);
function sleep(seconds) {
    var current_time = new Date().getTime();
    while (1){
        var future_time = new Date().getTime();
        if (future_time-current_time>=seconds*1000){
            break;
        }
    }
}
console.log(new Date());
sleep(5);
console.log(new Date());