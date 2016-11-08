requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-3.1.1.min'
    }
});

requirejs(['jquery', 'notify.min'], function ($, notify) {
    console.log("Let's work with our dependecies");
    console.log($("body"));
    $.notify("Hello World");
});
