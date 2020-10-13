$(function(){
    //topnav
    $('.top-menu-hide').css('top', '-100%');
    let prevScrollpos = window.pageYOffset;
    $(window).scroll(function(){
        let scrollPos = $(window).scrollTop();
        //let windowHeight = $(window).height();
        let targetPos = $('#situation').offset().top;
        let currentScrollPos = window.pageYOffset;
        // console.log(currentScrollPos);
        if(scrollPos + 100 >= targetPos){
            if (prevScrollpos > currentScrollPos) {
                $('.top-menu-hide').css('top', '-1px');
            }else{
                $('.top-menu-hide').css('top', '-100%');
            } 
            
        }else{
            $('.top-menu-hide').css('top', '-100%');
        }
        prevScrollpos = currentScrollPos;
    })
    $('.menu-open').on('click', function(e){
        e.preventDefault();
        $('.menu-overlay').css('height', '100%');
    })
    $('.menu-close').on('click', function(e){
        e.preventDefault();
        $('.menu-overlay').css('height', '0');
    })
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

    // keyNote
    let keyNoteBtn = $('.keyNote-thumbnail-btn');
    let keyNoteContent = $('.keyNote-content');
    keyNoteBtn.on('click', function(e){
        let target = $(this).attr("href");
        e.preventDefault();
        keyNoteBtn.removeClass('active');
        keyNoteBtn.removeClass('keyNote-thumbnail-animate');
        $(this).addClass('active');
        $(this).next().addClass('keyNote-thumbnail-animate');
        keyNoteContent.removeClass('active');
        $('#' + target).addClass('active');
    });
    //checkPoint
    let checkPointBtn = $('.keyNote-checkPoint li');
    let checkPointImg = $('.keyNote-checkPoint-img img');
    checkPointBtn.on('click', function(e){
        console.log($(this).text());
        checkPointBtn.removeClass('active');
        $(this).addClass('active');
        console.log($(this).data("checkpoint"));
        checkPointImg.attr("src", '../../img/check0' + $(this).data("checkpoint") + '.png');
    })

    let links = document.querySelectorAll(".ourGoal-menu-content a");
    for (let link of links) {
    link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
    e.preventDefault();
    $('.menu-overlay').css('height', '0');
    $('.top-menu-hide').css('top', '-100%');
    let href = this.getAttribute("href");
    let offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop - 80,
        behavior: "smooth"
    });
    }
});
