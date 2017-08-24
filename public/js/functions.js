$(document).ready(function() {
    setTimeout(function() {
        $('.overlay').addClass('hide')
        $('.quote').css({
            'opacity': 1,
            'transform': 'translate(0, 0)'
        })
        $('.text').css({
            'opacity': 1,
            'transform': 'translate(0, 0)'
        })
        $('.img img').css({
            'opacity': 1,
            'transform': 'translate(0, 0)'
        })
    }, 1000);
})

// var pContainerHeight = $('.bird-box').height();

$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll > $('.1').offset().top - ($(window).height() / 1.2)) {
        $('.1').addClass('animate');
        setTimeout(function () {
            $('.1').addClass('remove');
        }, 800)
    }

    if (wScroll > $('.2').offset().top - ($(window).height() / 1.2)) {
        $('.2').addClass('animate');
        setTimeout(function () {
            $('.2').addClass('remove');
        }, 800)
    }

    if (wScroll > $('.3').offset().top - ($(window).height() / 1.2)) {
        $('.3').addClass('animate');
        setTimeout(function () {
            $('.3').addClass('remove');
        }, 800)
    }

    if (wScroll > $('.4').offset().top - ($(window).height() / 1.2)) {
        $('.4').addClass('animate');
        setTimeout(function () {
            $('.4').addClass('remove');
        }, 800)
    }

    // if (wScroll > $('.works').offset().top - ($(window).height() / 1.2)) {
    //     // console.log('hi')
    //     $('.works .work').each(function (i) {

    //         setTimeout(function () {
    //             $('.works .work').eq(i).addClass('animate');
    //         }, (700 * (Math.exp(i * 0.14))) - 700);
    //     });

    // }
})