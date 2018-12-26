function generateColor() {
    let str = "#";
    let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    for(let i = 0;i < 6;i++){
        str+=arr[Math.floor(Math.random()*16)];
    }
    return str;
}
console.log(generateColor());