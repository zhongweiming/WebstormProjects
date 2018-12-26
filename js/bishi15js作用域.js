var x = 3;
var y = 4;
var obj = {
    x:1,
    y:6,
    getX:function(){
        var x = 5;
        return function(){
            return this.x;
        }();
    },
    getY:function(){
        var y = 7;
        return this.y;
    }
};
console.log(obj.getX());//node下为undefined(因为var x=3并不是全局变量)，浏览器下为3
console.log(obj.getY());