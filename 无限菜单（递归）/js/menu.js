
// 数据结构
// id : 唯一标识，text ：菜单的文字 ,parentId : 父级菜单的id

window.onload = function () {
    ///递归
    //变化 数据 parentId
    function fn(arr, id) {
        let temp = [];
        //遍历数组数据  
        arr.forEach(e => {
            //判断parentId是否一致
            if (e.parentId === id) {
                // 为temp添加父项菜单
                temp.push(e);
                //子项菜单
                e.child = fn(arr, e.id);
            }
        });
        //
        return temp;
    }

    let menu = fn(navData, null);

    //显示结构
    //变化 父菜单数组  nav追加的元素
    function fn2(arr, parentElement) {
        //创建ul
        let ul = document.createElement('ul');
        //追加到对应的页面元素里
        parentElement.appendChild(ul);
        //隐藏ul
        ul.classList.add('hide');
        //遍历父菜单数组
        arr.forEach(e => {
            //li
            let li = document.createElement('li');
            //在li加入结构
            li.innerHTML = `<a>${e.text}</a>`;
            //li追加到ul
            ul.appendChild(li);

            //判断子项是否有数据
            if (e.child.length !== 0) {
                fn2(e.child, li);
            }
        });

    }
    let nav = document.querySelector('.nav');
    fn2(menu, nav);

    //设置菜单显示效果
    //首先需要在创建ul那设置ul隐藏
    //显示父项菜单
    nav.children[0].classList.remove('hide');
    
    //获取li
    let lis = document.querySelectorAll('.nav ul li');
    //设置事件点击
    nav.onclick = function (e) {
        //事件委托
        if (e.target.nodeName === 'LI' || e.target.nodeName === 'A') {
            //遍历li
            lis.forEach(e => {
                e.onclick = function (v) {
                    //防止冒泡
                    v.stopPropagation();
                    //判断是否有子项
                    if (this.children.length > 1) {
                        this.children[1].classList.toggle('hide');
                    }
                }
            })
        }
    }
}