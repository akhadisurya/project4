$(document).ready(function(){

    var header = $('header');
    var button = $('button.toggle-nav');

    button.on('click', function(){
        header.toggleClass('active');
    });

});
