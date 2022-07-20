$('#container').scroll(function(event) {
    var scrolledX = $(this).scrollLeft();
    var scrolledY = $(this).scrollTop();
    $(this).find('#c').css('left',scrolledX+'px');
    $(this).find('#b').css('top',scrolledY+'px');
    $(this).find('#d').css('left',scrolledX+'px');
    $(this).find('#d').css('top',scrolledY+'px');
});