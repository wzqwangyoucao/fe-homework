var tab = document.querySelectorAll('.tab');
var myteb = document.querySelector('.myteb');
AddReady();

function AddReady() {
    for (var i = 0; i < tab.length; i++) {
        readyAddEvn(tab[i]);
    };
    readyAddEvn(myteb);

    function readyAddEvn(selectTab) {

        var lis = selectTab.querySelectorAll('li');

        for (var i = 0; i < lis.length; i++) {
            addEventListen(lis[i]);
            lis[i].innerHTML = lis[i].innerHTML + ' ' + i;
        }

        function addEventListen(index) {
            index.addEventListener('click', function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].classList.remove('active')
                }
                index.classList.add('active');
            })
        };

        var event = new Event('click');
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains('actives')) {
                lis[i].dispatchEvent(event);
                break;
            }
        }
    }
}