//自调用函数food
(function () {
    var elements = [];//用于保存食物元素
    //食物对象，包含宽，高，颜色，横纵坐标属性
    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.heigth = height || 20;
        this.color = color || "green";
    }

    //为食物对象添加初始化方法(作用，随机出现在地图上)
    Food.prototype.init = function (map) {
        //remove the food first
        remove();
        //create div
        var div = document.createElement("div");
        //add div to map
        map.appendChild(div);
        //assign value to div
        div.style.width = this.width + "px";//do not forget px!!!
        div.style.height = this.heigth + "px";
        div.style.backgroundColor = this.color;
        //position is random
        div.style.position = "absolute";
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.heigth)) * this.width;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        //add div to the elements
        elements.push(div);
    }

    //private function to delete food
    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }

    window.Food = Food;
}());