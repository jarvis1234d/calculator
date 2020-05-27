$(document).ready(function () {
    $('.btn').on("mouseenter", function (e) {
        $(e.currentTarget).removeClass('shadow');
        // $('div').removeClass('shadow');
    });
    $('.btn').on("mouseleave", function (e) {

        $(e.currentTarget).addClass('shadow');
        // $('div').addClass('shadow');
    });
    $('button').on("click", function (e) {
        var pre = $('.output').text()
        var value = $(e.currentTarget).text()

        if (value == "AC") {
            $('.output').text(0);
        } else {
            if (pre == 0) {
                $('.output').text(value);
            } else {
                $('.output').text(pre + value);
            };

        };



    });
});