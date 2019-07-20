/**
 * 用ES6封装一个tab的函数
 */
class Tab{
    //变化 选择器 类名 鼠标类型
    constructor(options){
        options = options || {};
        //tab nav选择器  tab content选择器
        this.navSelector = options.navSelector || '.tab-item';
        this.contentSelector = options.contentSelector || '.main';
        //nav显示类名 content显示类名
        this.navClass = options.navClass || 'active';
        this.contentClass = options.contentClass || 'selected';
        //鼠标类型
        this.type = options.type || 'mouseover';
        this.index = 0;
    }
    //获取元素方法
    $(Element){
        return document.querySelectorAll(Element);
    }
    addEvent(){
        //设置this
        let that = this;
        //获取元素
        let tabNav = this.$(this.navSelector);
        let content = this.$(this.contentSelector);
        //设置nav鼠标事件对应的效果
        tabNav.forEach((e, i) => {
            //对应鼠标事件
            e.addEventListener(that.type, function(){
                //tab nav 样式
                that.navStyle(tabNav, this);
                //content 显示
                that.contentChange(content, content[i]);

                that.index = i;
            })
        });
    }
    //设置nav鼠标事件样式
    //变化 遍历nav类名 当前nav
    navStyle(nav, currentNav){
        //排他
        nav.forEach(e => {
            e.classList.remove(this.navClass);
        })
        currentNav.classList.add(this.navClass);
    }
    //content显示
    //变化 遍历的content类名 当前content
    contentChange(content, currentContent){
        content.forEach(e => {
            e.classList.remove(this.contentClass);
        })
        currentContent.classList.add(this.contentClass);
    }
}
//
let tab = new Tab();
tab.addEvent();