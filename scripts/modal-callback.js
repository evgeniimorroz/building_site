//-----------Модальное окно по клику на "Заказать звонок"

$(function() {
    $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
        $('#modal-header').css('display', 'block');
		return false;
	});

	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.modal-consult').length == 0) {
			$(this).fadeOut();
		}
	});

});



/*----------------------валидация input на ввод только цифры*/

function checkFormTel(){
// 
//    var error = document.querySelector('.error');
//    var phoneCall = document.getElementById('tel-call').value;

//    var tempalateTelDig =  /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;        /*только цифры*/
//    if(!tempalateTelDig.test(phoneCall)) {
// 	   error.style.display = 'block';
// 	   return false;
//    }

//    if(phoneCall.length < 11) {
//        error.style.display = 'block';
//        return false;
//    }
   return true;
}

/*----------------*/
