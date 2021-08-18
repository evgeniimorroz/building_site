

/*-------------------main-form----------------*/


    let btnForm = document.getElementById('btn-form').value;
    let nam = document.getElementById('name');
    let tel2 = document.getElementById('tel2').value;
    let mail = document.getElementById('mail').value;

    let errorName = document.querySelector('.error-1form');     /*имя - только буквы*/
    let errorTel = document.querySelector('.error-2form');      /*телефон - только цифры*/
//    let errorMail = document.querySelector('.error-3form');     /*телефон - неверный ввод*/


function checkFormMain() {
    //имя пользователя
    if(nam.value == '') {
        errorName.style.display = 'block';
        return false;
    }
    var nameLetters = /[А-Яа-я]/;
    if(!nameLetters.test(nam.value)) {
        errorName.style.display = 'block';
        return false;
    }
    if(nam.value.length < 3) {
        errorName.style.display = 'block';
        return false;
    }

    //телефон пользователя
    //var checkPhone = /d/;
    // if(!checkPhone.test(tel2)) {
    //     errorTel.style.display = 'block';
    //     return false;
    // }
    // if(tel2.length < 10) {
    //     errorTel.style.display = 'block';
    //     return false;
    // }


    return true;
}















/*---------------------------------------------------------*/
























/*---------------------------------------------------------*/
