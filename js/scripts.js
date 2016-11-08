
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
        ww = $(window).width();


    set_height($(".head-fold"), wh, 800);

    function set_height(element, height, max_height){
        h = ( height > max_height ) ? max_height : height;
        element.height(h);
    }

});
