var book = {
    _year:10,
    edition:1
}
Object.defineProperty(book,"year",{
    get:function () {
        //return this._year;
        return this.edition;
    },
    set:function (newValue) {
        if(newValue>2005){
            this._year = newValue;
            this.edition+=newValue-2005;
        }
    }
})
book.year = 2018;//修改这个属性影响另一个属性，调用set方法
book.author = "peter";
console.log(book);
console.log(book.year);//这个属性不显示！！？//要返回其值会调用get方法没错
console.log(book._year);

//定义多个属性
var book2 = {};
Object.defineProperties(book2,{
    _year:{
        writable:true,
        value:2014,
        configurable:true,
        enumerable:true
    },
    edition:{
        writable:true,
        value:1
    },
    year:{
        set:function (newValue) {
            if(newValue>2014){
                this._year = newValue;
                this.edition+=newValue-2014;
            }
        },
        get:function () {
            return this._year;
        }
    }
});
console.log("\n");
book2.year = 2018;//修改这个属性影响另一个属性，调用set方法
book2.author = "peter";
console.log(book2);//为什么上面定义的属性不显示，奇怪？？因为枚举属性默认false，设置为ture就可以显示该属性啦，soga
console.log(book2.year);//这个属性不显示！！？//要返回其值会调用get方法没错
console.log(book2._year);
console.log(book2.edition);