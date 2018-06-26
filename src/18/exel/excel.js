$(function () {
    function setposition(now) {
        // 对于布局或样式，我们尽量不使用js来完成，因为不是很好维护
        // 对这几个按扭的布局，尝试使用CSS来完成？
        var range = $('tr:first>td').length * 50;
        $('.right').css({
            'marginLeft': range + 'px'
        });

        $('.rightbotton').css({
            'marginLeft': range - 20 + 'px',
        });
    }

    function addline() {
        // 这个jquery方法用得很巧妙，如果用原生则需要一个循环才能完成
        // 这个你是了解它是集合操作的哦？
        $('tr').append('<td></td>');
    }

    function addlist() {
        $('table').append('<tr></tr>');
        // 这里 i < ... 循环次数可以优化下，否则会执行多次节点的查找。
        // 可以先用一个变量把它给存起来
        for (var i = 0; i < $('tr:first>td').length; i++) {
            // 将上面创建的tr保存成一个引用？这样不用每次插入新td时都要查找。
            $('tr:last').append('<td></td>');
        }
    }

    
    setposition();

    $('.table').delegate('td', "click", function () {
        // 这里的focus应该是不生效的，应该调用的是方法focus(), 或者原生DOM的focus方法。
        // 使用children有个不好的地方，就是对层级关系要求比较严格，一定要直接子节点才行
        // 假如需要在input外面加额外的标签，这里就需要调整，所以我们一般是使用
        // $(this).find('input')来查询。
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

    // 还有在jquery中，挂接事件，你可以使用on， `click`等是以前历史遗留的方法，目前已用得较少。
    /*
    比如
    $('.btn').on('click', function() {

    });

    如果是事件代理的话，就是
    $('table').on('click', 'td', function() {

    });
    */
})