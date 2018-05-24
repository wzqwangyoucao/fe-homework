var myteb = document.querySelector('.myteb');
var hide = myteb.querySelector('.select');

mySwitch();
function mySwitch(){
    myteb.addEventListener('click',function(e){
        hide.classList.toggle('active');
        e.stopPropagation();
    });
    document.addEventListener('click',function(){
        if(hide.classList.contains('active')){
            hide.classList.remove('active');
        }
    });
}