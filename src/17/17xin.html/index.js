var mydiv = document.querySelector('.mydiv');
addclick();

function addclick(thing) {
    thing = thing || mydiv;
    thing.addEventListener('click', function (event) {
        var thingli = thing.querySelectorAll('div'); 
        if (event.target.tagName == 'DIV') {
            for (var i = 0; i < thingli.length; i++) {
                if (thingli[i].classList.contains('active')) {
                    thingli[i].classList.remove('active');
                }
            }
            event.target.classList.add('active');
        }
    })
}