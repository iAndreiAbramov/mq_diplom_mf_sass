  (function () {

    const popup = document.querySelector('.popup');
    const popupClose = document.querySelector('.popup__wraper-close');
  
    setTimeout(function () {
      popup.classList.remove('popup--hidden');
    }, 3000);
  
    popupClose.onclick = function () {
      popup.classList.add('popup--hidden');
    };
  } () );


