var dispalyTime = document.querySelector('.all-time');
console.log(dispalyTime);



function getTime(){
    var time = new Date();

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    var changehour = (hour+'').padStart(2,'0')
    var changeminute=(minute+'').padStart(2,'0');
    var changesecond = (second+'').padStart(2,'0')

    dispalyTime.innerHTML = changehour+':'+changeminute+':'+changesecond;

    var turnhour = document.querySelector('.circle-display-time .hour');
    var hourcircle = hour*30-90;
    turnhour.style.transform = 'rotate('+hourcircle+'deg)';

    var turnmimute = document.querySelector('.circle-display-time .minute');
    var mimutecircle = minute*6-90;
    turnmimute.style.transform = 'rotate('+mimutecircle+'deg)';

    var turnsecond = document.querySelector('.circle-display-time .second');
    var secondcircle = second*6-90;
    turnsecond.style.transform = 'rotate('+secondcircle+'deg)';
}

setInterval(getTime,1000);

