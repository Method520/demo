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
    $('.goBack').click(function(){
        window.location.href='./home.html';
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
    $('.layer .yi').click(function(){
        window.location.href='./goodDetail1.html';
    })
    $('.layer .shui').click(function(){
        window.location.href='./goodDetail2.html';
    })
    $('.layer .jia').click(function(){
        window.location.href='./goodDetail5.html';
    })
    $(' .layer .jiu').click(function(){
        window.location.href='./goodDetail4.html';
    })
    $('.layerclose').click(function(){
        $('.layer').css('display','none');
    })
})