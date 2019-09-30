document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

$('.contact-link').click(function (e) {
    $('html,body').animate({
        scrollTop: ($('#contact').offset().top - navHeight)
    }, 300);
});

function onSubmit(e) {
    e.preventDefault();
    M.toast({html: 'Form Submitted!'})
}