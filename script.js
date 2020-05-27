$(document).ready(function () {
    $('.btn').on("mouseenter", function (e) {
        $(e.currentTarget).removeClass('shadow');
        // $('div').removeClass('shadow');
    });
    $('.btn').on("mouseleave", function (e) {

        $(e.currentTarget).addClass('shadow');
        // $('div').addClass('shadow');
    })
    $('button').on("click", function (e) {
        var value = $(e.currentTarget).text()
        console.log(value);
    })
});