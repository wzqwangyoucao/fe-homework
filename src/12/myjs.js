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
    if(type == 'down'){
        myvalue=value-1;
    };
    if(myvalue>100){
        alert('你中奖啦');
    }
    else if(myvalue<0){
       myvalue=0;
    }
    btn.innerHTML=myvalue;
    progress.style.width=myvalue+'%';
}

var setTime = setInterval(countDown,1000);