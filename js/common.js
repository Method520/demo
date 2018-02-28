$(function(){
    if(screen.width === 375 && screen.height===812) {
        $('.moreDetail').addClass('moreStyle3');
    } else if(screen.width === 375 && screen.height === 667){
        $('.moreDetail').addClass('moreStyle');
    }else if(screen.width === 414 && screen.height === 736){
        $('.moreDetail').addClass('moreStyle2');
    } else if(screen.width < 414) {
        $('.moreDetail').addClass('moreStyle')
    }
    $('.menu .shop1').click(function(){
        window.location.href='./pay.html';
        // $(this).addClass('shop2');

    })
    $('.menu .leveyu1').click(function(){
        // $(this).toggleClass('leveyu2');
        window.location.href='./chat.html';
    })
    $('.menu .shou1').click(function(){
        $(this).toggleClass('shou2');
        if($(this).hasClass('shou2')) {
            $('.layer2').css('display','block');
        }
    })
    $('.back').click(function(){
        window.history.go(-1);
    })
    $('.layer2').click(function(){
        $(this).css('display','none');
    })
    $('.scanner').click(function(){
        window.location.href='./scanner.html';
    })
    $('.classical').click(function(){
        $('.layer').css('display','block');
    })
    $('.personCenter').click(function(){
        window.location.href='./home.html';
    })
    $('.layer ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        window.location.href='./detail.html';
    })
})