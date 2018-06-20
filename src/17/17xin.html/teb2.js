var tebw = document.querySelector('.tebw')
var account = tebw.querySelector('.account');
var show = tebw.querySelector('.show');

(function addmouseover() {
    tebw.addEventListener('mouseover', function (e) {
        clearTimeout(timer);
        e.stopPropagation(); //阻止冒泡事件
        show.classList.add('act');
    })
})();

(function addmouseleave() {
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