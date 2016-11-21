
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
            jquery: 'jquery-3.1.1.min',
            tweenMax: ['https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min', 'TweenMax.min'],
            notify: 'notify.min'
        }
});

requirejs([ 'jquery', 'tweenMax', 'notify'], function ($, notify) {
    console.log("Let's work with our dependecies");

    var $window = $(window);
    
    var x,
        wh =  $(window).height(),
        ww =  $(window).width(),
        header_h = $(".header").height(),
        fold = $(".fold"),
        head_fold = $(".head-fold"),
        head_fold_h = head_fold.height(),
        fold_footer_h = $(".fold__footer").height();

    var animation_elements = '.animation-element',
        animation_details = {
                x: 0
        };


    set_height(head_fold, wh, 900);
    set_height(fold, (head_fold.height() - header_h - fold_footer_h), 10000);
    $window.on('scroll resize', check_if_in_view);
    document.ready(function() {
        // check_if_in_view
    })
        $(".loader").hide();




    // 
    // Functions
    // 

    function set_height(element, height, max_height){
        h = ( height > max_height ) ? max_height : height;
        element.height(h);
    }


    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each(animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                TweenMax.staggerTo(animation_elements, 1, animation_details , 0.15);
            } else {
            }
        });
    }

});
