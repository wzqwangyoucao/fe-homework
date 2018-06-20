$(function () {

    function setposition(now) {
        var range = $('tr:first>td').length * 50;
        $('.right').css({
            'marginLeft': range + 'px'
        });

        $('.rightbotton').css({
            'marginLeft': range - 20 + 'px',
        });
    }

    function addline() {
        $('tr').append('<td></td>');
    }

    function addlist() {
        $('table').append('<tr></tr>');
        for (var i = 0; i < $('tr:first>td').length; i++) {
            $('tr:last').append('<td></td>');
        }
    }

    
    setposition();

    $('.table').delegate('td', "click", function () {
        $(this).children("input").length == 0 ? a(this) : $(this).children('input').focus;

        function a(i) {
            $(i).append('<input type="text" />')
                .children('input').focus;
        }
    })

    $('.right').click(function () {
        addline();
        setposition();
    })

    $('.botton').click(function () {
        addlist();
    })

    $('.rightbotton').click(function () {
        addline();
        setposition();
        addlist();
    })
})