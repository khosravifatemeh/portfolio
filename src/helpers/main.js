import $ from 'jquery'

export const scrollAnimate = (element) => {
    if ($(element).length == 0) return false;
    $('html,body').animate({
        scrollTop: $(element).position().top
    }, 1000);
    return;
}