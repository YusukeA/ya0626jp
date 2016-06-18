(function($) {
    $(function() {
        var $header = $('#top-head');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
    });
})(jQuery);