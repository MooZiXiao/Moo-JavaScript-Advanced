;(function(){

    class Tools{
        getRandom(n, m){
            return Math.floor(Math.random()* (m - n + 1) + n);
        }
    }
    

    //
    let position = 'absolute';
    let elements = [];

    class Food extends Tools{
        constructor(options){
            super();
            options = options || {};
            this.width = options.width || 20;
            this.height = options.height || 20;
            this.backgroundColor = options.backgroundColor || 'green';
            this.borderRadius = options.borderRadius || 50;
            this.x = options.x || 0;
            this.y = options.y || 0;
        }
        //食物显示
        render(map){
            remove();
            //创建div
            this.div = document.createElement('div');
            let f = this.div;
            //在map追加食物
            map.appendChild(f);
            //记录创建的div
            elements.push(f);

            //对应样式
            f.style.position = position;
            f.style.width = this.width + 'px';
            f.style.height = this.height + 'px';
            this.backgroundColor = 'rgb('+ this.getRandom(0,255) +','+ this.getRandom(0,255) +','+ this.getRandom(0,255) +')';
            f.style.backgroundColor = this.backgroundColor;
            f.style.borderRadius = this.borderRadius + '%';
            //随机位置
            this.x = this.getRandom(0, map.offsetWidth / this.width -1) * this.width;
            this.y = this.getRandom(0, map.offsetHeight / this.height -1) * this.height;
            f.style.left = this.x + 'px';
            f.style.top = this.y + 'px';
        }
    }
    //私有函数
    function remove(){
        //从后移除
        for(let i = elements.length -1; i>=0; i--){
            //移除页面元素
            elements[i].parentNode.removeChild(elements[i]);
            //移除数组数据
            elements.splice(i,1);
        }
    }

    window.Food = Food;

    // let map = document.querySelector('.map');
    // let food = new Food();
    // food.render(map);
})();