// $('.header-menu2').css('top', '-100%');
// $(window).scroll(function(){
//     let scrollPos = $(window).scrollTop();
//     let windowHeight = $(window).height();
//     let targetPos = $('#part1').offset().top;
//     if(scrollPos + 100 >= targetPos){
//         $('.header-menu2').css('top', '0');
//     }else{
//         $('.header-menu2').css('top', '-100%');
//     }
// })
$('.menu-open').on('click', function(e){
    e.preventDefault();
    $('.menu-overlay').css('height', '100%');
})
$('.menu-close').on('click', function(e){
    e.preventDefault();
    $('.menu-overlay').css('height', '0');
})
// $('.fb-share-cus').on('click', function(e){
//     e.preventDefault();
//     $('.fb-xfbml-parse-ignore').click();
// })

// 點擊圓圈回應 overlay 
$('.reason-circleBtn').on('click', function(e){
    e.preventDefault();
    let target = $(this).data('reactmodel');
    $('.reactModel-overlay').each(function(e){
        if($(this).data('reactmodel') == target){
            $('.reactModel-overlay').css('height', '0');
            $(this).css('height', '100%');
        }
    });
})
$('.reactModel-close').on('click', function(e){
    e.preventDefault();
    $('.reactModel-overlay').css('height', '0');
})