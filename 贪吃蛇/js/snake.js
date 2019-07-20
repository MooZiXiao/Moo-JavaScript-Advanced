;(function(){
    //
    let position = 'absolute';
    let elements = [];
    //
    class Snake{
        constructor(options){
            options = options || {};
            this.width = options.width || 20;
            this.height = options.height || 20;
            this.borderRadius = options.borderRadius || 50;
            this.direction = options.direction || 'right';
            this.body = [
                {x:2, y:0, color:'red'},
                {x:1, y:0, color:'green'},
                {x:0, y:0, color:'blue'},
            ]
        }
        //显示
        render(map){
            remove();
            //遍历body
            for(let i = 0; i<this.body.length; i++){
                //创建div
                this.div = document.createElement('div');
                let s = this.div;
                //追加到map
                map.appendChild(s);
                //
                elements.push(s);
                //
                let obj = this.body[i];
                //样式
                s.style.position = position;
                s.style.width = this.width + 'px';
                s.style.height = this.height + 'px';
                s.style.backgroundColor = obj.color;
                s.style.borderRadius = this.borderRadius + '%';
                s.style.left = obj.x * this.width + 'px';
                s.style.top = obj.y * this.height + 'px';
            }
        }
        //移动
        move(food,map){
            //身体的处理
            for(let i = this.body.length-1; i>0; i--){
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;
            }
            //蛇头的处理
            switch(this.direction){
                case 'right':
                    this.body[0].x +=1;
                break;
                case 'left':
                    this.body[0].x -=1;
                break;
                case 'top':
                    this.body[0].y -=1;
                break;
                case 'bottom':
                    this.body[0].y +=1;
                break;
            }

            //判断蛇头与food是否重合
            let headX = this.body[0].x * this.width;
            let headY = this.body[0].y * this.height;
            if(headX === food.x && headY === food.y){
                //让蛇增加一节
                let last = this.body[this.body.length-1];
                this.body.push(
                    {x:last.x, y:last.y, color: food.backgroundColor}
                );
                //让食物随机显示
                food.render(map);
            }
            
        }
    }

    //移除body
    function remove(){
        for(let i = elements.length - 1; i>=0; i--){
            //移除页面元素
            elements[i].parentNode.removeChild(elements[i]);
            //移除数组数据
            elements.splice(i,1);
        }
    }

    window.Snake = Snake;
    
    // let map = document.querySelector('.map');
    // let snake = new Snake();
    // snake.render(map);
})();