var mydiv = document.querySelector('.mydiv');
var elm = jQuery(mydiv);//包装成JQ节点，可以使用jq方法
elm.on('click',"div",function(){
    var thingli = $('div');
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

