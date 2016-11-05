/**
 * Created by Administrator on 2016/11/5.
 */

$(function(){

    (function(){
        var num=0;
        setInterval(autoPlay,5000);
        function autoPlay(){
            $('#banner img').eq(num).fadeIn(1000).siblings().fadeOut(1000);
            num++;
            num=num>3?0:num;
        }
    })();

    (function(){
        var flag=true;
        $('#mask>span').on('click',function(){
            if(flag){
                $(this).html('+');
                $('#mask').animate({left:-640},500);
                flag=false;
            }else {
                $(this).html('+');
                $('#mask').animate({left:0},500);
                flag=true;
            }


        })
    })()

})