$(document).ready(function() {
    var x = window.matchMedia("(max-width:900px)");
    if (x.matches) {
        $('.dropdown_link li').show();
    } else {
        $('.dropdown_link li').hide();
        $('.dropdown_link').hover(function() {
            $(this).find('li').show(); }, 
            function() {
                $(this).find('li').hide();
        });
    }
});

$(document).ready(function() {
    var getUrl = $(location).attr('pathname');
    if (getUrl.includes('index')) {
        $('.navbar').css('background-image', 'none');
    } else {
        $('.navbar').css("background-image", "url('images/menu-bg.png')");
    };
});