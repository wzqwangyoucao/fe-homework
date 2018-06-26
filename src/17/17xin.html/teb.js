var myteb = document.querySelector('.myteb');
var hide = myteb.querySelector('.select');


mySwitch();
function mySwitch(){
    myteb.addEventListener('click',function(e){
        // 1. 将显示和隐藏的事件直接绑定在myteb上会有点问题，(话说myteb的英文拼应该是mytab)
        // 就是当显示时，再点菜单项的时候，菜单就会隐藏了，这会造成菜单项点不上。
        // 所以这里需要修改下。
        // 2. 将active这个状态放在 内容(.select) 节点上会有些不足
        // 比如我下拉上面的图标就不能依靠CSS切换了，所以比较好的办法是把active直接加在 mytab 这个外层节点上。
        // 这样利用CSS就能控制里面所有的样式， 这个内容在我们的有一节课： “利用状态控制行为” 有比较详细的说明。
        // 你可以做个带图标切换的菜单， 来细细体会下，这个对于后续实现较复杂的页面交互，比较重要。
        hide.classList.toggle('active');
        e.stopPropagation();
    });
    document.addEventListener('click',function(){
        if(hide.classList.contains('active')){
            hide.classList.remove('active');
        }
    });
}