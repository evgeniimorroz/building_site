/*наши услуги табы*/
window.onload = function () {
    document.querySelector('.l-block').addEventListener('click', fTabs);

     function fTabs(e) {
        if(e.target.className == 'l-tab') {
            var dataTab = e.target.getAttribute('data-tab');
            var text = document.getElementsByClassName('r-block-inner');
            for(var i = 0; i < text.length; i++) {
                if(dataTab == i) {
                    text[i].style.display = 'block';
                } else {
                    text[i].style.display = 'none';
                }

            }
        }
    }
}
