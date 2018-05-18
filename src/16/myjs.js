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
    for (var index = 0; index < words.length; index++) {
        if (isWord(words[index])) {
            shortarea.innerHTML += '<span>' + words[index] + ' ' + '</span>';
        } else {
            shortarea.innerHTML += words[index];
        }
    }
    dblclick();
}

function isWord(word) {
    return /^[-a-zA-z]+$/.test(word);
}

function dblclick() {
    var wordspan = shortarea.querySelectorAll('span');
    for (var index = 0; index < wordspan.length; index++) {
        addDBlcick(index);
    }
}

function addDBlcick(i) {
    var wordspan = shortarea.querySelectorAll('span');
    wordspan[i].addEventListener('dblclick', function () {
        addli(wordspan[i].innerHTML);
    });
}

function addli(i) {
    var myli = document.createElement('li');
    myli.className = 'dontknow';
    myli.innerHTML = i;
    addclick(myli);
    if (isRepeat(i)) {
        console.log(isRepeat(i));
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

function isRepeat(i) {
    var nowordsli = nowordsul.querySelectorAll('li');
    for (var index = 0; index < nowordsli.length; index++) {
        if (nowordsli[index].innerHTML == i) {
            return false;
        };
    }
    return true;
}

function containActive() {
    var nowordsli = nowordsul.querySelectorAll('li');
    for (var index = 0; index < nowordsli.length; index++) {
        if (nowordsli[index].classList.contains('active')) {
            return index + 1;
        }
    }
}

deleteword();
function deleteword() {
    mydelete.addEventListener('click', function () {
        if (containActive()) {
            var realindex = containActive() - 1;
            var nowordsli = nowordsul.querySelectorAll('li');
            nowordsul.removeChild(nowordsli[realindex]);
        }
    })
}
wordUp();
function wordUp(){
    up.addEventListener('click',function(){
        if(containActive()){
            var a = containActive();
            var nowordsli = nowordsul.querySelectorAll('li');
            nowordsul.insertBefore(nowordsli[a - 1], nowordsli[a - 2]);
        }
    })
}

wordDown();
function wordDown(){
    down.addEventListener('click',function(){
        if(containActive()){
            var a = containActive();
            var nowordsli = nowordsul.querySelectorAll('li');
            nowordsul.insertBefore(nowordsli[a], nowordsli[a - 1]);
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