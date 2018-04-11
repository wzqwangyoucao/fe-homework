var lable=document.querySelector('.show');
//console.log(lable);
var red=0;
var green=0;
var blue=0;
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