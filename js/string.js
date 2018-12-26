//It indicates that the value of string cannot change
// var str = "hello";
// str[0] = "e";
// console.log(str);//hello
//
// //output the value of ascll
// console.log(String.fromCharCode(48,65,97));

// output the count of every chararacter in a string
var str = "what Are a ou reaiweuroin RJWJF jfiow fjalxvm jfal";
var obj = new Object();
for(let i = 0;i < str.length;i++){
    if(obj[str[i]]){//see if the char has existed
        obj[str[i]]++;
    }else {
        obj[str[i]]=1;
    }
}
for(item in obj){
    console.log(item+" "+obj[item]);
    console.log("\n");
}