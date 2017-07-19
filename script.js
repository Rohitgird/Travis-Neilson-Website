$(document).ready(function() {
    $('.menu-parent').on('click', function(){
        $(this).toggleClass('active');
        $('.pane').toggleClass('pane-display');
        $('.sidebar').toggleClass('sidebar-toggle');
        $('.section-wrapper').toggleClass('section-position')
    });

        $('#dr-1').on('mouseenter', function(){
            $('.col-7').css('background-color', 'orange');
    });
        $('#dr-2').on('mouseenter', function(){
            $('.col-7').css('background-color', 'rgb(174,179,176)');
    });
        $('#dr-3').on('mouseenter', function(){
            $('.col-7').css('background-color', 'rgb(56,222,204)');
    });
        $('#dr-4').on('mouseenter', function(){
            $('.col-7').css('background-color', 'rgb(210,29,22)');
    });
        $('#dr-5').on('mouseenter', function(){
            $('.col-7').css('background-color', 'rgb(137,12,238)');
    });
        $('#dr-6').on('mouseenter', function(){
            $('.col-7').css('background-color', 'rgb(214,213,153)');
    });
        $('#be-1').on('mouseenter', function(){
            $('.col-8').css('background-color', 'rgb(90,171,213)');
    });
        $('#be-2').on('mouseenter', function(){
            $('.col-8').css('background-color', 'rgb(211,32,34)');
    });
        $('#be-3').on('mouseenter', function(){
            $('.col-8').css('background-color', 'rgb(76,76,76)');
    });
        $('#be-4').on('mouseenter', function(){
            $('.col-8').css('background-color', 'rgb(245,158,130)');
    });
        $('#be-5').on('mouseenter', function(){
            $('.col-8').css('background-color', 'rgb(213,118,40)');
    });
        $('#be-6').on('mouseenter', function(){
            $('.col-8').css('background-color', 'rgb(246,197,153)');
    });

    $(window).scroll(function(){
        var wScroll = $(window).scrollTop();

        $('.col-2').css('background-position', 'center -' + wScroll + 'px');

        if(wScroll > $('.section-article').offset().top - $(window).height()/1.5){
            $('.section-article .col-3 .articles-wall').each(function(i){

            setTimeout(function(){
                $('.section-article .col-3 .articles-wall').eq(i).addClass('is-showing');
            }, 150 * (i+1));

        });
        }
    });

    setInterval(function(){randNum()}, 4000);

});

function randNum(){
    var randNum = Math.floor(Math.random() * 13)
    $('.articles-wall').eq(randNum).addClass('animation')
    .siblings().removeClass('animation')
}
