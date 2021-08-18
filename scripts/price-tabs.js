/*----------------страница price табы----------------*/


    document.querySelector('.price-nav').addEventListener('click', priceTabs);

     function priceTabs(e) {
        if(e.target.className == 'price-item') {
            var dataTab = e.target.getAttribute('data-price');
            var text = document.getElementsByClassName('table-price');
            for(var i = 0; i < text.length; i++) {
                if(dataTab == i) {
                    text[i].style.display = 'block';
                } else {
                    text[i].style.display = 'none';
                }
            }
        }
    }


 /*-----------------эффект при наведении на TR-----------------*/
    $(function () {
        $("tr").mousedown(function () {
            const green = "rgba(255, 122, 0, 0.5)"
            const black = "#1C1D1E"
            if ($(this).css('background-color') == green )
                changecolor(this, black)
            else
                changecolor(this, green)
            return false
            console.log(this);
        });


        });

    function changecolor(el, color) {
        $(el).css("background-color", color);
    }
