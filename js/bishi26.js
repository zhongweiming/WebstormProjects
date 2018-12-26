var a=20;
var b=18;
function sum() {
    console.log(typeof b);
    var b='19';
    return 1+b-2;
}
console.log(a+sum());