//game
(function () {
    var that = null;
    var speed = 200;
    //create constructor of game
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        this.timeId = null;
        that = this;//use for setInterval
    }

    Game.prototype.init = function () {
        //init food
        this.food.init(this.map);
        //init snake
        this.snake.init(this.map);
        //play the game
        this.run(this.food, this.map);
        //change direction
        this.bindKey();
        this.bindMouse();
        // setInterval(function () {
        //     this.snake.move()
        // })this is window ,so cannot use it
        // setInterval(function () {
        //     that.snake.move(that.food,that.map);
        //     that.snake.init(that.map);
        // },150);//do not use setInterval here
    }
    //snake running
    Game.prototype.run = function (food, map) {
        if (this.timeId){
            clearInterval(this.timeId);
        }
        this.timeId = setInterval(function () {
            var snake = this.snake;
            //move the snake
            snake.move(food, map);
            //init snake
            snake.init(map);
            //the max x and y
            var maxX = map.offsetWidth / snake.width;
            var maxY = map.offsetHeight / snake.height;
            //the position of snake
            var headX = snake.body[0].x;
            var headY = snake.body[0].y;
            //judge
            if (headX < 0 || headX >= maxX) {
                clearInterval(this.timeId);
                alert("game over");
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(this.timeId);
                alert("game over");
            }
            for (let i = 1;i <snake.body.length;i++){
                if (headX==snake.body[i].x&&headY==snake.body[i].y){
                    clearInterval(this.timeId);
                    alert("game over");
                }
            }
        }.bind(that), speed)//use bind to bind Game object
    }
    //get the key to change the direction
    Game.prototype.bindKey = function(){
        //get the key user press and change the direction
        document.addEventListener("keydown",function (e) {
            //this is document ,so use bind function
            // switch (e.keyCode) {
            //     case 37:this.snake.direction = "left";break;
            //     case 38:this.snake.direction = "top";break;
            //     case 39:this.snake.direction = "right";break;
            //     case 40:this.snake.direction = "bottom";break;
            // }
            //when left or right,cannot press left or right,only top or bottom,yeah
            if (this.snake.direction=="left"||this.snake.direction=="right") {
                switch (e.keyCode) {
                    case 38:this.snake.direction = "top";break;
                    case 40:this.snake.direction = "bottom";break;
                }
            }else{
                switch (e.keyCode) {
                    case 37:this.snake.direction = "left";break;
                    case 39:this.snake.direction = "right";break;
                }
            }
        }.bind(that),false)

    }
    //bind mouse click event
    Game.prototype.bindMouse = function(){
        var btn = document.getElementById("btn").getElementsByTagName("button");
        for (let i = 0;i < btn.length-2;i++){
            btn[i].onclick = function () {
                speed=250-50*i;
                if (i==4){
                    speed = 20;
                }
                this.run(this.food, this.map);
            }.bind(that);
        }
        //pause
        btn[5].onclick = function () {
            clearInterval(this.timeId);
        }.bind(that);
        //continue
        btn[6].onclick = function () {
            this.run(this.food, this.map);
        }.bind(that);

    }
    window.Game = Game;
}());