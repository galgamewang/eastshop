define([], function() {
    return {
        init: function() {
            const $username = $('#username');
            const $password = $('#password');
            const $login = $('#login'); //登录按钮

            $login.on('click', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.161.117/dashboard/eastshop/php/login.php',
                    data: {
                        user: $username.val(),
                        pass: $password.val()
                    }
                }).done(function(data) {
                    if (!data) { //登录失败
                        alert('用户名或者密码有误!');
                        $password.val(''); //密码清空
                    } else { //登录成功
                        location.href = 'http://10.31.161.117/dashboard/eastshop/'; //前端和前端进行页面的通信，相对路径即可，如果是前后端的通信一定是觉对路径。
                        //存储用户名，方便首页获取。
                        localStorage.setItem('loginname', $username.val());
                    }
                })
            });




            const $lunbo = $('.lunbo');
        const $piclist = $('.lunbo ul li');
        const $btnlist = $('.lunbo ol li');
        const $left = $('#left');
        const $right = $('#right');
        let $num = 0;
        let $timer1 = null;
        let $timer2 = null;
        //1.小圆圈切换
        $btnlist.on('mouseover', function() {
            $num = $(this).index();
            $timer1 = setTimeout(function() {
                tabswitch()
            }, 300);


        });

        $btnlist.on('mouseout', function() {
            clearTimeout($timer1);
        });

        //2.左右箭头切换
        $right.on('click', function() {
            $num++;
            if ($num > $btnlist.length - 1) {
                $num = 0;
            }

            tabswitch()
        });

        $left.on('click', function() {
            $num--;
            if ($num < 0) {
                $num = $btnlist.length - 1;
            }

            tabswitch()
        });

        function tabswitch() {
            $btnlist.eq($num).addClass('active').siblings().removeClass('active');
            $piclist.eq($num).stop(true).animate({
                opacity: 1
            }).siblings().stop(true).animate({
                opacity: 0
            });
        }

        //3.自动轮播
        $timer2 = setInterval(function() {
            $right.click();
        }, 3000);

        //4.鼠标控制定时器停止和开启。
        $lunbo.hover(function() {
            clearInterval($timer2);
        }, function() {
            $timer2 = setInterval(function() {
                $right.click();
            }, 3000);
        });



        }


    }
})