
requirejs.config({
    baseUrl: 'js/lib',
});

requirejs(['jquery-3.1.1.min', 'notify.min'], function ($, notify) {
    console.log("Let's work with our dependecies");
});
