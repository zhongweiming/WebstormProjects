//snake
(function () {
    //create an array to store snake
    var elements = [];

    //constructor for snake
    function Snake(width, height, direction) {
        //the width and height of every part of snake,all the same
        this.width = width || 20;
        this.height = height || 20;
        //the body of snake
        this.body = [
            {x: 3, y: 2, color: "red"},//head
            {x: 2, y: 2, color: "orange"},//body
            {x: 1, y: 2, color: "orange"}//body
        ];
        //direction
        this.direction = direction || "right";
    }

    //create init function
    Snake.prototype.init = function (map) {
        //delete the snake before
        remove();
        // traverse the array to create div
        for (let i = 0; i < this.body.length; i++) {
            let obj = this.body[i];
            //create div
            let div = document.createElement("div");
            //append div to map
            map.appendChild(div);
            //set style for div
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";
            div.style.backgroundColor = obj.color;

            //add div to array to delete more convenient later
            elements.push(div);
        }
    }
    //move the snake
    Snake.prototype.move = function (food, map) {
        //change the position of body
        var i = this.body.length - 1;
        for (; i > 0; i--) {//make sure the later followed the head!
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //change the position of head
        switch (this.direction) {
            case "right":
                this.body[0].x++;
                break;
            case "left":
                this.body[0].x--;
                break;
            case "top":
                this.body[0].y--;
                break;
            case "bottom":
                this.body[0].y++;
                break;
        }
        //judge if the food was ate
        //position of head of snake
        var headX = this.body[0].x*this.width;
        var headY = this.body[0].y*this.height;
        //position of food
        var foodX = food.x;
        var foodY = food.y;
        //judge
        // console.log(this.body);

        if (headX==foodX&&headY==foodY){
            //the length of snake +1
            var last = this.body[this.body.length-1];//刚开始加上的方块和原先的最后一块方块是重叠，但在下一次移动的时候加上的方块
            //位置不变，因为会移到前面一块方块地方，而原先的尾巴就移走了，此时就没有重叠了，soga
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            });
            //delete food and generate new food
            food.init(map);
        }
    }

    //delete snake function
    function remove() {
        //by array
        for (var i = elements.length - 1; i >= 0; i--) {
            // delete
            elements[i].parentNode.removeChild(elements[i]);
            //delete from array,too
            elements.splice(i, 1);
        }
    }

    window.Snake = Snake;
}());
