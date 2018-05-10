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
            //console.log(lis[i].innerHTML);
            //console.log(li);
            var shownowords = mydocument.querySelector('.nowords');
            var shownowordsli = shownowords.querySelector('ul');
            shownowordsli.appendChild(li);
            //console.log(shownowords);

        })
    }
});

var shownowords = mydocument.querySelector('.nowords');

var shownowordsli = shownowords.querySelector('ul');

var shownowordslis = shownowordsli.querySelectorAll('li');

console.log(shownowordslis);

for (var index = 0; index < shownowordslis.length; index++) {
    addEveclick(index);
    console.log(index);
};

function addEveclick(index) {
    shownowordslis[index].addEventListener('click', function () {
        for (var myindex = 0; i < shownowordslis.length; myindex++) {
            //console.log('第'+myindex+'循环');
            //console.log(shownowordslis[myindex]);
            //console.log(shownowordslis.length);
            //console.log(shownowordslis[myindex].classList.contains('active'));
            if (shownowordslis[myindex].classList.contains('active')) {
                shownowordslis[myindex].classList.remove('active');
            }
        }
        shownowordslis[index].classList.add('active');
    });
}