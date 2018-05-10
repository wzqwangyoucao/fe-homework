var myteb = document.querySelectorAll('.myteb');

var options = {
    menuSelector: '.navs',
    showSelector: '.panel',
};

initialTab(myteb[0]);
initialTab(myteb[1], options);
initialTab(myteb[2]);

var tab = document.querySelectorAll('.tab');
initialTab(tab[0], {
    menuSelector: '.mymenu'
});
initialTab(tab[1], {
    menuSelector: '.mymenutwo'
});

function initialTab(index, options) {
    options = options || {};

    var menu = index.querySelector((options.menuSelector) || '.menu');
    //console.log((options.menuSelector) || '.menu');
    //console.log(menu);
    var lis = menu.querySelectorAll('li');
    //console.log(lis);
    // if (!menuSelector) {
    //     menu = index.querySelector('.menu');
    // } else {
    //     menu = index.querySelector(menuSelector);
    //     console.log(menu);
    // }

    var show = index.querySelector((options.showSelector) || '.show');
    if (show != null) {
        var showlis = show.querySelectorAll('li');
    };
    // if (!showSelector) {
    //     show = index.querySelector('.show');
    // } else {
    //     show = index.querySelector(showSelector);
    //     console.log(show);
    // }

    for (var i = 0; i < lis.length; i++) {
        addEvent(i);
    }

    function addEvent(index) {
        lis[index].addEventListener('click', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
                if (show != null) {
                    showlis[i].style.display = 'none';
                }
            }
            lis[index].classList.add('active');
            if (showlis != null) {
                showlis[index].style.display = 'block';
            };
        })
    }

    var event = new Event('click');
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains('actives')) {
            lis[i].dispatchEvent(event);
            break;
        }
    }
    //menu.querySelector('li.actives').dispatchEvent(event);为什么不直接这样写
}