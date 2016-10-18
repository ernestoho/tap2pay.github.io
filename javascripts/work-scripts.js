$( document ).ready(function() {


/* проверка валидности номера */
function validateComments(input) {
	   if (input.value.length < 7) {
		  input.setCustomValidity("Your phone number is invalid");   
	   }
	   else {
		  // Длина комментария отвечает требованию, 
		  // поэтому очищаем сообщение об ошибке
		  input.setCustomValidity("");
	   }
}

/*перейти к авторизации через смс */
$("#signup-button").click(function(){
    $(".step-authorization").addClass("on");
    $(".step-choose-method").removeClass("on");
});

/*вернуться к выбору метода*/
$("#backToChooseMetod").click(function(){
    $(".step-authorization").removeClass("on");
    $(".step-choose-method").addClass("on");
});

/* перейти к оплате */
$("#authorization-continue").click(function(){
    $(".step-authorization").removeClass("on");
    $(".step-payment").addClass("on");
});
    
 /*вернуться к шагу авторизации*/
$("#backToStepAuthorization").click(function(){
    $(".step-payment").removeClass("on");
    $(".step-authorization").addClass("on");
});

/* активация кнопок подсказки*/
$(".modal-hint span").click(function () {
    $(".hint-container__text").removeClass("on");
        var block =$(this).closest('.hint-container').find('.hint-container__text');
        block.addClass("on");
      return false;
  });
  $(function(){
    $(document).click(function(event) {
//      $(".hint-container__text").hide("fast");
        $(".hint-container__text").removeClass("on");
      event.stopPropagation();
    });
  });
    
    
    
});

//function phone(name) {
//        "use strict";
//        var r = /([0-9])+/g, arr = name.match(r), res, str = arr.join('');
//        if (name.substr(0, 1) === '+') {
//                res = "+" + str;
//        } else if (str.substr(0, 1) === '8') {
//                res = "+7" + str.substr(1);
//        } else {
//                res = str;
//        }
//        return res;
//};