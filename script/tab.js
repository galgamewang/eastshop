! function() {
    //jquery里面虽然获取元素很简单，但是也要存储变量，性能问题
    //约定：定义jquery变量的时候，习惯变量前面加个$

    var $titles = $('.tab_title li'); //5个标题
    var $contents = $('.tab_content .item'); //5块内容

    $titles.on('click', function() {
        $(this)
            .addClass('active')
            .siblings('li')
            .removeClass('active'); //当前的li添加类,其他的li移除类
        //和当前匹配的内容块显示(添加类show)
        $contents
            .eq($(this).index()) //设置和当前li对应的内容的索引
            .addClass('show')
            .siblings('.item')
            .removeClass('show');
    });

}();