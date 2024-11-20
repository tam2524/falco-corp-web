$(document).ready(function () {
    let lastScrollTop = 0;
    const navbar = $('#navbar');
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
            navbar.css('top', '-100px');
        } else {
            navbar.css('top', '0');
        }
        lastScrollTop = scrollTop;
    });
    $(document).on('mousemove', function (e) {
        if (e.clientY < 50) {
            navbar.css('top', '0');
        }
    });
    $('a.nav-link').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
    setTimeout(function () {
        $('.hero-title').addClass('visible');
        $('.hero-description').addClass('visible');
    }, 500);
    $(window).on('scroll', function () {
        $('.fade').each(function () {
            var elementOffset = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            if (scrollTop + windowHeight > elementOffset + 100) {
                $(this).addClass('in');
            }
        });
    });
});