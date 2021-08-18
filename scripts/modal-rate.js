//-----------Модальное окно по клику на "консультация"
$(function() {
$('.popup-open-rate').click(function() {
    $('.popup-fade-rate').fadeIn();
    $('#modal-rate').css('display', 'block');
    return false;
});

$('.popup-close-rate').click(function() {
    $(this).parents('.popup-fade-rate').fadeOut();
    return false;
});

$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade-rate').fadeOut();
    }
});

$('.popup-fade-rate').click(function(e) {
    if ($(e.target).closest('.modal-consult-rate').length == 0) {
        $(this).fadeOut();
    }
});

});


/*----------------------валидация input на ввод только цифры*/


//  function checkFormRate(){
//     var error = document.querySelector('.error-rate');
//     var error1 = document.querySelector('.error-rate1');

//     var tel1 = document.getElementById('tel1').value;
//     var tempalateTelDig1 = /d/;        /*только цифры*/
//     if(tempalateTelDig1.test(tel1)) {
//         error.style.display = 'block';
//         return false;
//     }
//     if(tel1.length < 11) {
//         error1.style.display = 'block';
//         return false;
//     }
    
// }

/*----------------*/
