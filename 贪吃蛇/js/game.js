;(function(){
    class Game{
        constructor(map){
            this.food = new Food();
            this.snake = new Snake();
            this.map = map;
        }
        start(){
            this.food.render(this.map);
            this.snake.render(this.map);
            // this.snake.move()
            // this.snake.render(this.map);
            // this.snake.move()
            // this.snake.render(this.map);
            runSnake(this);
            keyCon(this);
        }
    }
    //动起来
    function runSnake(current){
        timer = setInterval(function(){
            current.snake.move(current.food, current.map);
            current.snake.render(current.map);
            
            let maxX = current.map.offsetWidth / current.snake.width;
            let maxY = current.map.offsetHeight / current.snake.height;
            // console.log(maxX)
            let headX = current.snake.body[0].x;
            let headY = current.snake.body[0].y;
            //判断
            if(headX < 0 || headX >= maxX){
                alert('Game Over');
                //清除定时器
                clearInterval(timer);
            }
            if(headY < 0 || headY >= maxY){
                alert('Game Over');
                //清除定时器
                clearInterval(timer);
            }

        },100);
    }
    //键盘事件
    function keyCon(current){
        document.onkeydown = function(e){
            switch(e.keyCode){
                case 40:
                    current.snake.direction = 'bottom';
                break;
                case 38:
                    current.snake.direction = 'top';
                break;
                case 37:
                    current.snake.direction = 'left';
                break;
                case 39:
                    current.snake.direction = 'right';
                break;
            }
        };
    }

    window.Game = Game;

    let map = document.querySelector('.map');
    let game = new Game(map);
    game.start()

})();