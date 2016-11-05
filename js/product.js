/**
 * Created by Administrator on 2016/11/5.
 */
$(function(){
    (function(){
        var num=0;
        $('#banner img').eq(num).css('left',0);
        var timer=setInterval(autoPlay,3000);
        function autoPlay(){
            $('#banner img').eq(num).animate({'left':-1349+'px'},500);
             ++num>2?num=0:num;
            $('#banner img').eq(num).css('left',1349);
            $('#banner img').eq(num).animate({'left':0},500);
        }
        $('#banner span').on('mouseover',function(){
            clearInterval(timer);
        }).on('mouseout',function(){
            timer=setInterval(autoPlay,3000);
        });
        $('#banner .left').on('click',function(){
            $('#banner img').eq(num).animate({'left':1349+'px'},500);
            --num<0?num=2:num;
            $('#banner img').eq(num).css('left',-1349);
            $('#banner img').eq(num).animate({'left':0},500);
        })
        $('#banner .right').on('click',function(){
            autoPlay();
        })
    })()
})