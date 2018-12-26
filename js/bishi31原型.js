function women(name) {
    this.name=name;
}
function men(name) {
    this.name="yy1";
}
Object.defineProperty(women,"name",{
    configurable:true,
    enumerable:false,
    set:function () {
        name="yy2";
    },
    get:function () {
        return "yy3";
    }
})
women.prototype= new men();
var a=new women();
var b=new men();
console.log(a.name);
console.log(b.name);
