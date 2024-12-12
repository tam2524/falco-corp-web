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
            } else {
                $(this).removeClass('in');
            }
        });
    });
   
$('.carousel-prev').on('click', function () {
    var currentSlide = $('.carousel-slide.active');
    var prevSlide = currentSlide.prev('.carousel-slide');
    if (prevSlide.length === 0) {
        
        prevSlide = $('.carousel-slide:last');
    }
    currentSlide.removeClass('active');
    prevSlide.addClass('active');
    
    updateCarouselNavigation();
});


function updateCarouselNavigation() {
    var currentSlide = $('.carousel-slide.active');
    var prevSlide = currentSlide.prev('.carousel-slide');
    var nextSlide = currentSlide.next('.carousel-slide');
    if (prevSlide.length === 0) {
        
        $('.carousel-prev').addClass('disabled');
    } else {
        
        $('.carousel-prev').removeClass('disabled');
    }
    if (nextSlide.length === 0) {
        
        $('.carousel-next').addClass('disabled');
    } else {
        
        $('.carousel-next').removeClass('disabled');
    }
}

document.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
        const innerCard = card.querySelector('.flip-card-inner');
        innerCard.style.transform = innerCard.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
    });
});


updateCarouselNavigation();
});

