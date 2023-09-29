

$(document).ready(function () {
    $('#nykstysVirsun').click(function () {
        var currentSrc = $(this).attr('src');

        if (currentSrc.endsWith('middlefinger.png')) {
            $(this).attr('src', 'img/thumbsUp.png');
        } else {
            $(this).attr('src', 'img/middlefinger.png');
        }
    });
});