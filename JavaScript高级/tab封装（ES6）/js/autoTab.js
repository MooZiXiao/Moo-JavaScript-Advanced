/**
 * 继承Tab并加上自动播放等方法
 */
class AutoTab extends Tab{
    constructor(options){
        super(options);

        options = options || {};
        //自动播放时间
        this.interval = options.interval || 1000;
        //
        this.contentWrap = options.contentWrap || '.content';
    }
    autoPlay(){
        let tabNav = this.$(this.navSelector);
        let content = this.$(this.contentSelector);
        //设置索引让nav及content切换
        // let index = 0;
        //设置定时器
        this.timer = setInterval(() => {
            //索引
            this.index = ++this.index % tabNav.length;
            //nav 切换
            this.navStyle(tabNav, tabNav[this.index]);
            //content 切换
            this.contentChange(content, content[this.index]);

        }, this.interval);
    }
    pausePlay(){
        let that = this;
        let contentWrap = this.$(this.contentWrap);
        //鼠标悬停
        contentWrap[0].onmouseover = function(){
            clearInterval(that.timer);
        }
        //鼠标移出
        contentWrap[0].onmouseout = function(){
            that.autoPlay();
        }

    }
}

let autoTab = new AutoTab();
autoTab.autoPlay();
autoTab.pausePlay();