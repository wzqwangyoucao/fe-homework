function addText(){
    //console.log('hello');

    var preview=document.querySelector('.displaytext');

    //console.log(preview);

    // var color='#ff0000';
    // var bgColor='#00ff00';
    // var fontSize='20px';
    // var text='这是一段富文本内容';

    var colorInput=document.querySelector('.fields .color-Input');
    var color=colorInput.value;
    //console.log(color);

    var bgcolorInput=document.querySelector('.fields .bgcolor-Input');
    var bgColor=bgcolorInput.value;
    //console.log(bgColor);

    var fontSizeInput=document.querySelector('.fields .font-Size');
    var fontSize=fontSizeInput.value;
    //console.log(fontSize);

    var textInput=document.querySelector('.form-group .field .text-Input');
    var text=textInput.value;
    //console.log(text);

    var fontWeight;
    var fontWeightSelect=document.querySelector('.form-group .choseform .checkbox-bold');
    if(fontWeightSelect.checked){
        fontWeight="bold";
    }
    else{
        fontWeight="normal";
    }ss

    var underLine="none";
    var underLineSelect=document.querySelector('.form-group .choseform .checkbox-underline');
    if(underLineSelect.checked){
        underLine="underline";
    }


    var lastHTML=preview.innerHTML;
    preview.innerHTML=lastHTML+'<span style="color:'+color+';backGround:'+bgColor+';text-decoration:'+underLine+';font-weight:'+fontWeight+';font-size:'+fontSize+'px">'+text+'</span>';

    textInput.value='';
}


function log(){        //函数
    console.log('1');
}
//log();

var addbtn=document.querySelector('.form-group .add-btn');//事件监听
//console.log(addbtn);
addbtn.addEventListener('click',addText);
