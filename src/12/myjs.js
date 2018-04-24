// 字符串可以使用双引号也可使用单引号， 但是为了可读性，我们至少在一个文件中保持一致
// 所以你可以统统使用单引号的字符串
var progress=document.querySelector(".progress");

var btn=document.querySelector(".ui .btn");

function onButtonClick(){
    update();
    }


btn.addEventListener('click',onButtonClick)

function countDown(){
    update('down');
}

function update(type){
    var value=parseInt(btn.innerHTML,10);
    
    var myvalue=value+1;
    // 当我们学了两个==的相等后，现在你可以尝试学习一下三个等号的相等
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness
    // 两个等号的相等，会发生类型转换，所以有时候会让人迷糊，但是面试题喜欢出啊。。。
    // 三个等号的相等，它是严格相等，所以一般我们在现实场景中，都使用三个等号的相等，而不使用两个等号的相等。
    if(type == 'down'){
        myvalue=value-1;
    };
    if(myvalue>100){
        alert('你中奖啦');
        // 这里咱们是不是得把myvalue设置成0?
    }
    else if(myvalue<0){
       myvalue=0;
    }
    btn.innerHTML=myvalue;
    progress.style.width=myvalue+'%';
}

var setTime = setInterval(countDown,1000);