var ui = document.querySelector('.ui.form');
var bigartical = ui.querySelector('.big-artical');
var bigarea = bigartical.querySelector('textarea');

var shortartical = ui.querySelector('.short-artical');
var shortarea = shortartical.querySelector('.words');

var showword = ui.querySelector('.show-word');
var nowords = showword.querySelector('.nowords');
var nowordsul = nowords.querySelector('ul');

var button = showword.querySelector('.btn-crl');
var up = button.querySelector('.up');
var down = button.querySelector('.down');
var mydelete = button.querySelector('.delete');

blur();

function blur() {
    bigarea.addEventListener('blur', function () {
        getWords();
    });
}

function getWords() {
    var artical = bigarea.value;
    var words = artical.split(' ');
    // 这里直接使用innerHTML拼接，会有两个问题
    // 1. 当多次失去焦点时，短文本里面的内容会重复，这应该算一个bug
    // 2. 多次设置innerHTML，有可能会引发效率问题，相当于每拼接一下就要渲染一下页面
    //   （这个问题有可能不存在，因为浏览器会做优化）
    //   比较好的做法，是使用一个变量来保存html字符串，最后只设置一次innerHTML
    var myhtml = shortarea.innerHTML;
    for (var index = 0; index < words.length; index++) {
        if (isWord(words[index])) {
            myhtml += '<span>' + words[index] + ' ' + '</span>';
        } else {
            myhtml += words[index];
        }
    }
    shortarea.innerHTML = myhtml;
    dblclick();
}

function isWord(word) {
    return /^[-a-zA-z]+$/.test(word);
}

function dblclick() {
    var wordspan = shortarea.querySelectorAll('span');
    for (var index = 0; index < wordspan.length; index++) {
        // 1. 也可以直接将wordspan传给下面这个函数，比如
        //    addDBlcick(wordspan[index]);
        // 2. 或者将下面的函数写在for语句旁边，和我课上讲的一样
        //  这样就可以直接使用wordspan了，不需要重新取。
        // 3. 尝试在for语句内使用一个iife，这样就不需要单独写在for语句旁边了:
        // 你可以使用所学的变量是函数作用域的来分析和理解下面代码片段
        /*
          (function() {
            var span = wordspan[index];
            span.addEventListener('dblclick', function() {
              addli(span.innerHTML);
            });
          })();
        */
        addDBlcick(wordspan[index]);
    }
}

function addDBlcick(i) {
    //var wordspan = shortarea.querySelectorAll('span');
    i.addEventListener('dblclick', function () {
        addli(i.innerHTML);
    });
}

function addli(i) {
    var myli = document.createElement('li');
    myli.className = 'dontknow';
    myli.innerHTML = i;
    addclick(myli);
    if (isNotRepeat(i)) {
        console.log(isNotRepeat(i));
        nowordsul.appendChild(myli);
    }
}

function addclick(myli) {
    myli.addEventListener('click', function () {
        var nowordsli = nowordsul.querySelectorAll('li');
        for (var index = 0; index < nowordsli.length; index++) {
            if (nowordsli[index].classList.contains('active')) {
                nowordsli[index].classList.remove('active');
            }
        }
        myli.classList.add('active');
    });
}

// 这个函数实现逻辑没问题
// 不过函数名含义和返回值之间刚好弄反了
function isNotRepeat(i) {
    var nowordsli = nowordsul.querySelectorAll('li');
    for (var index = 0; index < nowordsli.length; index++) {
        if (nowordsli[index].innerHTML == i) {
            return false;
        };
    }
    return true;
}


// 功能没有问题，不过实现上把位置先+1， 然后使用时再-1，其实比较容易弄错
// 我觉得反而不如返回真实位置，如果找不到，就返回-1。
// 数组里面有个方法，叫 indexOf， 用来查找指定元素在数组中的位置的，找不到就是返回-1。
// 很多模式可以通用，保持一致，会更有助于理解。
function containActive() {
    var nowordsli = nowordsul.querySelectorAll('li');
    for (var index = 0; index < nowordsli.length; index++) {
        if (nowordsli[index].classList.contains('active')) {
            return index;
        }
    }
    return -1;
}

deleteword();
function deleteword() {
    mydelete.addEventListener('click', function () {
        if (containActive()!=-1) {
            var realindex = containActive();
            var nowordsli = nowordsul.querySelectorAll('li');
            nowordsul.removeChild(nowordsli[realindex]);
        }
    })
}
wordUp();
function wordUp(){
    up.addEventListener('click',function(){
        if(containActive()!=-1){
            var a = containActive();
            var nowordsli = nowordsul.querySelectorAll('li');
            nowordsul.insertBefore(nowordsli[a], nowordsli[a - 1]);
        }
    })
}

wordDown();
function wordDown(){
    down.addEventListener('click',function(){
        if(containActive()!=-1){
            var a = containActive();
            var nowordsli = nowordsul.querySelectorAll('li');
            nowordsul.insertBefore(nowordsli[a], nowordsli[a - 2]);
        }
    })
};

save();
function save(){
    window.addEventListener('beforeunload',function(){
        var nowordsli = nowordsul.querySelectorAll('li');
        var mysavewords = [];
        for(index=0;index<nowordsli.length;index++){
            mysavewords[index] = nowordsli[index].innerHTML;
        }
        var str = JSON.stringify(mysavewords); //转为json字符串
        localStorage.setItem('myownobject', str);//存储为myobject对象。
    })
}

gain();
function gain(){
    window.addEventListener('load',function(){
        var localwords = localStorage.getItem('myownobject');
        var localwordsli = JSON.parse(localwords);
        for(var index=0;index<localwordsli.length;index++){
            addli(localwordsli[index]);
        }
    })
}