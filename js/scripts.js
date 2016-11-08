
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
            jquery: 'jquery-3.1.1.min'
        }
});

requirejs(['jquery', 'notify.min'], function ($, notify) {
    console.log("Let's work with our dependecies");

    var x,
        wh = window.height(),
        ww = window.width();

        console.log(wh)

    $(".head-fold").height(wh);
});
