var mydocument = document.querySelector('.ui.form');
var bigtext = mydocument.querySelector('.big-artical textarea');
var smalltext = mydocument.querySelector('.short-artical .words');

/*监听失去焦点事件*/
bigtext.addEventListener('blur', function () {
    var paragraph = bigtext.value;
    var words = paragraph.split(' ');

    /*循环判断是否为单词*/
    for (var i = 0; i < words.length; i++) {
        if (isWord(words[i])) {
            smalltext.innerHTML = smalltext.innerHTML + '<span>' + words[i] + ' ' + '</span>';
        } else {
            smalltext.innerHTML = smalltext.innerHTML + words[i];
        }
    }

    /*判断是否为单词函数*/
    function isWord(word) {
        return /^[-a-zA-z]+$/.test(word);
    }

    /*循环为span添加双击事件监听*/
    var lis = smalltext.querySelectorAll('span');
    for (var i = 0; i < lis.length; i++) {
        addEve(i);
    }

    function addEve(i) {
        lis[i].addEventListener('dblclick', function () {
            var li = document.createElement('li');
            li.className = 'dontkown';
            li.innerHTML = lis[i].innerHTML;
            attachLiEvent(li); //添加双击事件
            var shownowords = mydocument.querySelector('.nowords');
            var shownowordsli = shownowords.querySelector('ul');
            var shownowordslis = shownowordsli.querySelectorAll('li');
            /**判断是否单词重复，重复则不添加 */
            if (isRepeat(i)) {
                console.log(isRepeat(i));
                console.log(li);
                shownowordsli.appendChild(li);
                //console.log(shownowords);
            }
            /**单词重复判断的函数 */
            function isRepeat(i) {
                console.log(i);
                console.log(lis[i].innerHTML);
                for (var index = 0; index < shownowordslis.length; index++) {
                    console.log(shownowordslis[index]);
                    if (shownowordslis[index].innerHTML == lis[i].innerHTML) {
                        console.log('相等');
                        return false; //相等
                    } else {
                        console.log('不想等');
                    }
                }
                return true;
            }
        })
    }
});

var shownowords = mydocument.querySelector('.nowords');
var shownowordsli = shownowords.querySelector('ul');
// var shownowordslis = shownowordsli.querySelectorAll('li');

// for (var index = 0; index < shownowordslis.length; index++) {
//     addEveclick(index);
//     console.log(index);
// };

// function addEveclick(index) {
//   attachLiEvent(shownowordslis[index]);
// }

/* 添加事件函数，点击进行*/
function attachLiEvent(li) {
    li.addEventListener('click', function () {
        var shownowordslis = shownowordsli.querySelectorAll('li');
        for (var i = 0; i < shownowordslis.length; i++) {
            //console.log('第'+myindex+'循环');
            //console.log(shownowordslis[myindex]);
            //console.log(shownowordslis.length);
            //console.log(shownowordslis[myindex].classList.contains('active'));
            if (shownowordslis[i].classList.contains('active')) {
                shownowordslis[i].classList.remove('active');
            }
        }
        li.classList.add('active');
    });
}


var showword = document.querySelector('.field .show-word');
var button = showword.querySelector('.btn-crl');
var up = button.querySelector('.up');
var down = button.querySelector('.down');
var mydelete = button.querySelector('.delete');
var mysave = button.querySelector('.save');

mydelete.addEventListener('click', function () {
    var shownowords = mydocument.querySelector('.nowords');
    var shownowordsli = shownowords.querySelector('ul');
    var shownowordslis = shownowordsli.querySelectorAll('li');
    if (containActive()) {
        var a = containActive();
        //console.log(a);
        shownowordsli.removeChild(shownowordslis[a - 1]);
    }
});

up.addEventListener('click', function () {
    var shownowords = mydocument.querySelector('.nowords');
    var shownowordsli = shownowords.querySelector('ul');
    var shownowordslis = shownowordsli.querySelectorAll('li');
    if (containActive()) {
        var a = containActive();
        console.log(a);
        if (shownowordslis[a - 1] && shownowordslis[a - 2]) {
            shownowordsli.insertBefore(shownowordslis[a - 1], shownowordslis[a - 2]);
        }
    } else {
        alert('错误');
    }
});

down.addEventListener('click', function () {
    var shownowords = mydocument.querySelector('.nowords');
    var shownowordsli = shownowords.querySelector('ul');
    var shownowordslis = shownowordsli.querySelectorAll('li');
    if (containActive()) {
        var a = containActive();
        if (shownowordslis[a - 1] && shownowordslis[a]) {
            shownowordsli.insertBefore(shownowordslis[a], shownowordslis[a - 1]);
        } else {
            alert('错误');
        }
    }
});

window.addEventListener('beforeunload', function () {
    var shownowords = mydocument.querySelector('.nowords');
    var shownowordsli = shownowords.querySelector('ul');
    var shownowordslis = shownowordsli.querySelectorAll('li');
    var mystr = [],str;
    for (var index = 0; index < shownowordslis.length; index++) {
        mystr[index] = shownowordslis[index].innerHTML;
    }
    str_pretty1 = JSON.stringify(mystr); //转为json字符串
    localStorage.setItem('myobject', str_pretty1);
});

window.addEventListener('load', function () {
    var locolwords = localStorage.getItem('myobject');
    var numlocolwords = JSON.parse(locolwords);
    for (var index = 0; index < numlocolwords.length; index++) {
        var shownowords = mydocument.querySelector('.nowords');
        var shownowordsli = shownowords.querySelector('ul');
        var shownowordslis = shownowordsli.querySelectorAll('li');
        var li = document.createElement('li');
        li.className = 'dontkown';
        li.innerHTML = numlocolwords[index];
        shownowordsli.appendChild(li);
    }
})
// mysave.addEventListener('click',function(){
//     var shownowords = mydocument.querySelector('.nowords');
//     var shownowordsli = shownowords.querySelector('ul');
//     var shownowordslis = shownowordsli.querySelectorAll('li');
//     var mystr=[],str;
//     for(var index=0;index<shownowordslis.length;index++){
//         mystr[index]=shownowordslis[index].innerHTML;
//     }
//     str_pretty1 = JSON.stringify(mystr);//转为json字符串
//     localStorage.setItem('myobject',str_pretty1);
//     var locolwords =localStorage.getItem('myobject');
//     var numlocolwords=JSON.parse(locolwords);
//     for(var index=0;index<numlocolwords.length;index++){
//         var shownowords = mydocument.querySelector('.nowords');
//         var shownowordsli = shownowords.querySelector('ul');
//         var shownowordslis = shownowordsli.querySelectorAll('li');
//         var li = document.createElement('li');
//             li.className = 'dontkown';
//             li.innerHTML = numlocolwords[index];
//             shownowordsli.appendChild(li);
//     }
// });

function containActive() {
    var shownowords = mydocument.querySelector('.nowords');
    var shownowordsli = shownowords.querySelector('ul');
    var shownowordslis = shownowordsli.querySelectorAll('li');
    //console.log('1');
    //console.log(shownowordslis);
    for (var index = 0; index < shownowordslis.length; index++) {
        if (shownowordslis[index].classList.contains('active')) {
            //console.log(index);
            return index + 1;
        }
    }
}