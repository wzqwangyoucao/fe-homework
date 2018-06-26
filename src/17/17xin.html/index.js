var mydiv = document.querySelector('.mydiv');
var elm = jQuery(mydiv);//包装成JQ节点，可以使用jq方法
// 比较好的做好是，给elm里面的菜单项加个明确的class，比如.item， 然后使用class做事件代理。
// 这样HTML语义化会更强， 交互代码的健仕性也更好。
elm.on('click',"div",function(){
    // 这里的查换，应该是从elm里面找，否则会把整个页面的div都找出来的。
    // 虽然目前的场景不会出现问题，但是做练习时咱们还是严格要求。
    var thingli = $('div');
    // 使用了jquery后，可以尝试使用jquery的each来完成循环操作
    for (var i = 0; i < thingli.length; i++) {
        if (thingli[i].classList.contains('active')) {
            thingli[i].classList.remove('active');
        }
    }
    this.classList.add('active');//点击事件的元素
})
// addclick();

// function addclick(thing) {
//     thing = thing || mydiv;
//     thing.addEventListener('click', function (event) {
//         var thingli = thing.querySelectorAll('div'); 
//         if (event.target.tagName == 'DIV') {
//             for (var i = 0; i < thingli.length; i++) {
//                 if (thingli[i].classList.contains('active')) {
//                     thingli[i].classList.remove('active');
//                 }
//             }
//             event.target.classList.add('active');
//         }
//     })
// }

