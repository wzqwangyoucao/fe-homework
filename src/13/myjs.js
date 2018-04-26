var user = document.querySelector('.user');
var panel = user.querySelector('.user .panel');
var identity = user.querySelector('.user .identity')

user.addEventListener('click', function () {
    if (user.classList.contains('active')) {
        user.classList.remove('active');
    } else {
        user.classList.add('active');
    }
});




readyAddEvn();

function readyAddEvn() {
    var tab = document.querySelector('.tab');
    var lis = tab.querySelectorAll('li');
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

function defautStyle() {
    mylis[0].classList.add('active');
    myshowlis[0].style.display = 'block';
}