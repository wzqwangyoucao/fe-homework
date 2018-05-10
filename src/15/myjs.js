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
            attachLiEvent(li);
            var shownowords = mydocument.querySelector('.nowords');
            var shownowordsli = shownowords.querySelector('ul');
            shownowordsli.appendChild(li);
            //console.log(shownowords);

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