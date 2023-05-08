$(function () {
    $('body').append('<div id="curtain">');
    $('#curtain').css({
        position: 'absolute',
        left: 0, top: 0,
        width: '100%', height: '100%',
        backgroundColor: '#000000',
        opacity: 100
    }).animate({
        opacity: 0
    }, 2000, function () {
        $(this).remove();
    });

});
