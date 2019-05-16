import $ from 'jquery';

$('<h1/>')
    .text("Hello world from JQuery")
    .css({
        textAlign: "center"
    })
    .appendTo($('header'));

$('<h2/>')
    .text("Title 2")
    .appendTo('.h2');