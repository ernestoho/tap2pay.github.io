$( document ).ready(function() {
    /* активация кнопок подсказки*/
    $(".modal-hint span").click(function () {
        $(".hint-container__text").removeClass("on");
            var block =$(this).closest('.hint-container').find('.hint-container__text');
            block.addClass("on");
          return false;
      });
    $(document).click(function(event) {
        $(".hint-container__text").removeClass("on");
      event.stopPropagation();
    });/* спрятать кнопку подсказки */
	
    /* чиню поломанный дропдаун для выбора кода страны*/
    $("#btn-country").click(function(){
        $(".input-group-btn").addClass("open");
    });

    /*перейти к авторизации через смс */
    $("#signup-button").click(function(){
        $(".step-authorization").show();
        $(".step-choose-method").hide();
    });

    /*вернуться к выбору метода*/
    $("#backToChooseMetod").click(function(){
        $(".step-authorization").hide();
        $(".step-choose-method").show();
    }); 

    /* перейти к оплате payment */
    $("#authorization-continue").click(function(){
        $(".step-authorization").hide();
        $(".step-payment").show();
        $(".backToAuthorization").show();
    });

    /* вернуться к авторизации */
    $("#backToAuthorization").click(function(){
        $(".step-payment").hide();
        $(".step-authorization").show();
        $(".backToAuthorization").hide();
    }); 

    /* скрыта */
    /* перейти к shipment из erip (скрыта)  */
    $("#payment-continue").click(function(){
        $(".step-payment").removeClass("on");
        $(".step-shipment").addClass("on");
    });

    /* перейти на сохраненную карту */
    $(".choose-card__button .arrow-edit").click(function(){
        $(".choose-card h3").hide();
        $(".addNewCard-button").hide();
        $(".choose-card .choose-card__button").hide();
        $(".backToAuthorization").hide();        
        $("#backToSelectCreditCard").show();
        $(this).parent().next(".edit-saved-card").show();
    });

     /*вернуться к выбору сохраненной карты*/
    $("#backToSelectCreditCard").click(function(){
        $(".credit-card-section").hide();
        $(".choose-card").show();
        /* показать карты */
        $(".choose-card h3").show();
        $(".addNewCard-button").show();
        $(".choose-card .choose-card__button").show();
        $(".edit-saved-card").hide();
        $(".backToAuthorization").show();
        /* спрятать стрелку */
        $("#backToSelectCreditCard").hide();
        $("#button-save-card-InFooter").hide();
    });

    /* перейти на добавление новой карты по клике на  + Add new card */
    $("#addNewCard-button").click(function(){
        $(".choose-card ").hide();
        $(".backToAuthorization").hide();
        $(".credit-card-section").show();
        /* показать стрелку */
        $("#backToSelectCreditCard").show();
        $(".choose-card ").hide();
        $("#button-save-card-InFooter").show();
    });

        /* на вкладках paypal и erip убрать кнопку*/
        $(".payment-tabs li:first-child").click(function(){
            $(".credit-card-section").hide();
            $(".choose-card").show();
        });

    //    /* на вкладках paypal и erip убрать кнопку*/
    //    $(".without-saving-button").click(function(){
    //        $(".button-save-card-InFooter").hide();
    //    });

		/*переход на шаг shipment*/
	    $("#button-save-card-InFooter").click(function(){
	        $(".step-payment").hide();
	        $(".step-shipment").show();
	    });
    
    /* переход внутри step-shipment = добавить новый адрес и скрыть сохраненные */
    $("#addNewAddress-button").click(function(){
        $(".saved-locations").hide();
        $(".new-address").show();
        $("#backToPayment").hide();
        $("#backToSavedLocations").show();
    });

    /* перейти на сохраненный адрес доставки */
    $(".shipment-address_button .arrow-edit").click(function(){
        $(".saved-locations h3").hide();
        $(".saved-locations a").hide();
        $(this).parent().next(".edit-shipment-address").show();
        $("#backToPayment").hide();
        $("#backToSavedLocations").show();
    });

    /* переход внутри step-shipment = вернуться к сохраненным адресам*/
    $("#backToSavedLocations").click(function(){
        $(".saved-locations h3").show();
        $(".saved-locations a").show();
        $(".saved-locations a").show();
        $(".edit-shipment-address").hide();
        $(".backToPayment").show();
        $(".backToSavedLocations").hide();
        $(".saved-locations").show();
        $(".new-address").hide();
    });

    /* переход на шаг final-check */
    $("#button-shipment-continue").click(function(){
        $(".step-shipment").hide();
        $(".step-finalCheck").show();
    });

    /* назад в шаг оплаты */
    $("#backToPayment").click(function(){
        $(".step-shipment").hide();
        $(".step-payment").show();
    });

     /*назад в шаг доставки */
    $("#backToShipment").click(function(){
        $(".step-finalCheck").hide();
        $(".step-shipment").show();
        $(".new-address").hide();
        $(".saved-locations").show();
    });

    /* меняю кнопку на оплата успешно прошла */
    $("#clickToPay_button").click(function(){
        $(".clickToPay_button").hide();
        $(".payment-success").css('display', 'block');
    });

    /*убрать всплывающую подскаку от валидации  при переходе на предыдущий шаг*/
    $(".step-back").click(function(){
        $(".popover").css("display","none");
    });
    $("#authorization-continue").click(function(){
        $(".popover").css("display","none");
    });

	/* валидация полей email и имени держателя карты */
	$('#card-email-input').blur(function() {
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		if (testEmail.test(this.value)) {
			$('.email-input').removeClass("Valid-class error");
			$('.email-input').addClass("Valid-class");
		} else {
			$('.email-input').removeClass("Valid-class error");
			$('.email-input').addClass("error");
		};
	});
	
	$('#cardholder-name-input').blur(function() {
		var testCardHolderName = /^[a-zA-Z]{3,15}\s[a-zA-Z]{3,15}/i;
		if (testCardHolderName.test(this.value)) {
			$('.cardholder-name-input').removeClass("Valid-class error");
			$('.cardholder-name-input').addClass("Valid-class");
		} else {
			$('.cardholder-name-input').removeClass("Valid-class error");
			$('.cardholder-name-input').addClass("error");
		};
	});
	
	$('.card-container').find('.close').click(function(){
		$('.popover').hide();
	});

	/* переход на шаг shipment */
//    $("#button-save-card-InFooter").click(function(){
//        $(".step-payment").hide();
//        $(".step-shipment").show();
//    });
	
//	/* проверка валидации карты и емэйла и имени , раскомментировав его - удалить другое событие на эту кнопку , которое описано выше  */
//	$('.button-save-card-InFooter').click(function(){
//		
//		if (( $("#cardholder-name-input").val().length === 0 ) && ( $("#card-email-input").val().length === 0 )) {
//			$(".email-input").removeClass('Valid-class error');
//			$(".cardholder-name-input").removeClass('Valid-class error');
//			$(".cardholder-name-input").addClass('error');
//			$(".email-input").addClass('error');
//		} else if (( $("#cardholder-name-input").val().length === 0 ) && !( $("#card-email-input").val().length === 0 )){
//			$(".cardholder-name-input").removeClass('Valid-class error');
//			$(".cardholder-name-input").addClass('error');
//		} else if ( !( $("#cardholder-name-input").val().length === 0 ) && ( $("#card-email-input").val().length === 0 )){
//			$(".email-input").removeClass('Valid-class error');
//			$(".email-input").addClass('error');
//		} else {
//			
//		}
//		$('#submit').click();
//		
//		if ( $(".card-input-container").hasClass("error") ){
//			} else {
//				$(".step-payment").hide();
//				$(".step-shipment").show();
//			}
//	});
	
	/* анимация ошибок */
	$('.button-save-card-InFooter').click(function(){
		if ( $(".card-input-container" ).hasClass("error") ){
			$(".card-container" ).addClass("animated shake");
		}
	});
	$('.button-save-card-InFooter').mouseup(function(){
		$(".card-container" ).removeClass("animated shake");
	});

/*close jQuery*/   
});

	/* не нужен */
//	$('#phoneNumber').blur(function() {
//		var phoneNumberInput = /^[0123456789+]{9,}/i;
//		if (phoneNumberInput.test(this.value)) {
//			$('.phoneNumber').removeClass("Valid-class error");
//			$('.phoneNumber').addClass("Valid-class");
//		} else {
//			$('.phoneNumber').removeClass("Valid-class error");
//			$('.phoneNumber').addClass("error");
//		};
//	});
