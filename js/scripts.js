
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
            jquery: 'jquery-3.1.1.min'
        }
});

requirejs(['jquery', 'notify.min'], function ($, notify) {
    console.log("Let's work with our dependecies");

    var x,
        wh = $(window).height(),
        ww = $(window).width(),
        header_h = $(".header").height(),
        fold_footer_h = $(".fold__footer").height();


    set_height($(".head-fold"), wh, 900);
    set_height($(".fold"), ($(".head-fold").height() - header_h - fold_footer_h), 10000);

    function set_height(element, height, max_height){
        h = ( height > max_height ) ? max_height : height;
        console.log(h);
        element.height(h);
    }

});
