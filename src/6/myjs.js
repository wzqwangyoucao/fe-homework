var lable=document.querySelector('.show');
//console.log(lable);
var red=0;
var green=0;
var blue=0;

// 功能实现得不错！
// 引外可以有以下改进：
// 这三个函数是一模一样的， 所以只可以保留一个。
// 这个函数名，因为涉及到更新，所以可以尝试取个更合理的名字。

// 请重构一下代码，要求
// 1. 不要在html中编写js代码
// 2. 可以使用 addEventListener 来绑定事件，（如果没有学过，可以等学完下一课再来补这个作业）
// 3. 注意一下格式化， 一般来说操作符左右，会加个空格，这样会更有利于阅读。比如
//   blue = slider;
//   var color = 'rgb' + '(' + red + ...
// 优秀的程序员，都是从一开始就养成好习惯的， 也就是优秀是从一开始就很优秀， 后面几年后就会习惯了，所以很难变好。

function getvalue(range,slider){
    //document.querySelector('.show').innerHTML=slider;
    blue=slider;
    console.log(blue);
    var color='rgb'+'('+red+','+green+','+blue+')';
    lable.style.backgroundColor=color;
    console.log(color);
}
function getvalue2(range,slider){
    //document.querySelector('.show').innerHTML=slider;
    green=slider;
    console.log(blue);
    var color='rgb'+'('+red+','+green+','+blue+')';
    lable.style.backgroundColor=color;
    console.log(color);
}
function getvalue3(range,slider){
    //document.querySelector('.show').innerHTML=slider;
    red=slider;
    console.log(blue);
    var color='rgb'+'('+red+','+green+','+blue+')';
    lable.style.backgroundColor=color;
    console.log(color);
}