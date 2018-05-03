var user = document.querySelector('.user');
var panel = user.querySelector('.user .panel');
var identity = user.querySelector('.user .identity')

// 这个用户菜单实现得很不错
user.addEventListener('click', function () {
    if (user.classList.contains('active')) {
        user.classList.remove('active');
    } else {
        user.classList.add('active');
    }
    // 上述语句也可以简化为, 可以去学习下toggle的用法
    // user.classList.toggle('active');

    // 上述也可以优化为:
    // var has = user.classList.contains('active');
    // user.classList[has ? 'remove' : 'add']('active');
});




readyAddEvn();

function readyAddEvn() {
    // 这个菜单呢，它只是给每个项点击时添加上active
    // 没有移掉非当前项的active状态
    // 需要重构下，否则现在击时行为会和预期不一样
    for (var i = 0; i < lis.length; i++) {
        addEventListen(lis[i]);
        lis[i].innerHTML = lis[i].innerHTML + ' ' + i;
    }
}

// 这个i的命名最好改得更有意义些
// 一些i这个变量只留给循环变量
function addEventListen(i) {
    i.addEventListener('click', function () {
        if (i.classList.contains('active')) {
            i.classList.remove('active');
        } else {
            i.classList.add('active');
        };  // 这里不应该加分号
    })
};


var myteb = document.querySelector('.myteb');
var mymenu = myteb.querySelector('.menu');

var mylis = mymenu.querySelectorAll('li');

var show = document.querySelector('.show');
var myshowlis = show.querySelectorAll('li');

readyAddMyEvn();

function readyAddMyEvn() {
    // 循环变量尽量用常用的变量名，比如 i 或 index都是不错的
    // 这样阅读时会非常方便
    for (var a = 0; a < mylis.length; a++) {
        console.log(mylis[a]);
        myAddEventListen(a);
    }
}

function myAddEventListen(i) {
    mylis[i].addEventListener('click', function () {
        for (var a = 0; a < mylis.length; a++) {
            if (mylis[a].classList.contains('active')) {
                mylis[a].classList.remove('active');
            }
            if (myshowlis[a].style.display = 'block') {
                myshowlis[a].style.display = 'none';
            }
        }
        mylis[i].classList.add('active');
        myshowlis[i].style.display = 'block';
    })
};


defautStyle();

// 函数名可以最好使用动词，或动宾短语，比如 setDefaultStyle，或者initDefaultStyle 都可以。
// defaultStyle这个是名词，一般可用于实现一个组件，或者高阶组件等。
function defautStyle() {
    mylis[0].classList.add('active');
    myshowlis[0].style.display = 'block';
}