/**
 * Created by Administrator on 2016/11/5.
 */

$(function(){
    (function(){
        var num=0;
        var length=$('#banner ul').find('li').length;
        var timer=setInterval(autoPlay,2000);
        function autoPlay(){
            $('#banner ul li').eq(num).addClass('active').siblings().removeClass('active');
            $('#banner .message').eq(num).fadeIn(500).siblings().fadeOut(500);
            $('#slider img').eq(num).fadeIn(500).siblings().fadeOut(500);
            num++;
            num=num>length-1?0:num;
        }
        $('#banner ul li').on('mouseover',function(){
            clearInterval(timer);
            $('#banner ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
            $('#slider img').eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
            $('#banner .message').eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
        }).on('mouseout',function(){
            timer=setInterval(autoPlay,2000);
            num=$(this).index();
        })
    })()
})
