var tebw = document.querySelector('.tebw')
var account = tebw.querySelector('.account');
var show = tebw.querySelector('.show');

// 一般我们把IIFE是加在最外面的，避免这个文件产生全局变量，
// 比如你现在会产生 tebw account show等全局变量，（可在chrome中查看一下。）
// 这个点需要修改

(function addmouseover() {
    tebw.addEventListener('mouseover', function (e) {
        clearTimeout(timer);
        e.stopPropagation(); //阻止冒泡事件
        show.classList.add('act');
    })
})();

(function addmouseleave() {
    // 你能理解下面三行代码可以直接写成一行吗？:
    // tebw.addEventListener('mouseleave', outtime);
    tebw.addEventListener('mouseleave', function (e) {
        outtime();
    })
})();

var timer = null;
function outtime() {
    timer = setTimeout(function () {
        show.classList.remove('act');
    }, 500);
}

// 此外，这个hover菜单实现得挺简洁的，我觉得比我视频中的要好！！