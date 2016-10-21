$( document ).ready(function() {

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
    
    /* перейти к оплате */
    $("#payment-continue").click(function(){
        $(".step-payment").removeClass("on");
        $(".step-shipment").addClass("on");
    });

     /*вернуться к выбору сохраненной карты*/
    $("#backToSelectCreditCard").click(function(){
        $(".creditly-card-form").removeClass("creditly-card-form_open");
        $(".creditly-card-form").addClass("creditly-card-form_closed");
        $(".choose-card").removeClass("choose-card_closed");
        $(".choose-card ").addClass("choose-card_open");
        /* спрятать стрелку */
        $("#backToSelectCreditCard").hide();
    });


    /* активация кнопок подсказки*/
    $(".modal-hint span").click(function () {
        $(".hint-container__text").removeClass("on");
            var block =$(this).closest('.hint-container').find('.hint-container__text');
            block.addClass("on");
          return false;
        $(function(){
            $(document).click(function(event) {
    //          $(".hint-container__text").hide("fast");
                $(".hint-container__text").removeClass("on");
              event.stopPropagation();
            });
          });
      });
//      $(function(){
//        $(document).click(function(event) {
////          $(".hint-container__text").hide("fast");
//            $(".hint-container__text").removeClass("on");
//          event.stopPropagation();
//        });
//      });
    
//    $("#button").click(function(){
//        $("#mydiv").show();
//        $(document.body).click(function() {
//            if ($(event.target).closest("#mydiv").length == 0)
//                $("#mydiv").hide();     
//        });
//        return false;   
//    });


    /* чиню поломанный дропдаун для выбора кода страны*/
    $("#btn-country").click(function(){
        $(".input-group-btn").addClass("open");
    });


    /* перейти на добавление новой карты по клике на  + Add new card */
    $("#addNewCard-button").click(function(){
        $(".choose-card ").removeClass("choose-card_open");
        $(".choose-card ").addClass("choose-card_closed");
        $(".creditly-card-form").removeClass("creditly-card-form_closed");
        $(".creditly-card-form").addClass("creditly-card-form_open");
        /* показать стрелку */
        $("#backToSelectCreditCard").show();
        /* показать кнопку "сохранить карту" */
        $("#button-save-card-InFooter").show();
    });
    
    
    /* на данном этапе по клику на неё перейти к послед шагу - костыль (пропущен шаг) */
    $("#button-save-card-InFooter").click(function(){
        $(".step-payment").removeClass("on");
        $(".step-finalCheck").addClass("on");
//        $(".step-payment").addClass("step-payment_closed");
    });
    
    /*назад в шаг оплаты(доставка пропущена)*/
    $("#backToPayment").click(function(){
        $(".step-finalCheck").removeClass("on");
        $(".step-payment").addClass("on");
    });
    $("#clickToPay_button").click(function(){
        $(".clickToPay_button").removeClass("on");
        $(".payment-success").addClass("on");
    });
    
    

    /* бутстрап табы */
    $('#my-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    $('#my-tabs a[href="#life"]').tab('show') // селектор по имени
    $('#my-tabs a:first').tab('show') // выбор первой вкладки
    $('#my-tabs a:last').tab('show') // последняя вкладка

    /*убрать всплывающую подскаку от валидации  при переходе на предыдущий шаг*/
    $(".step-back").click(function(){
        $(".popover").css("display","none");
    });
    $("#authorization-continue").click(function(){
        $(".popover").css("display","none");
    });


    /* связать клик по кнопке в футере с кликом по кнопке в форме, которая скрыта , сделано для того, что бы не переносить кнопку из формы в футер */
//    $("#button-save-card-InFooter").click(function(){
//        $("#button-save-card").click();
//    });

    
    
    

    /* показать или скрыть стрелочку вернуться к выбору карт */
//    $("#addNewCard-button").click(function(){
//        if( $("#choose-card").hasClass("choose-card_closed") )
//            { 
//                alert("Открыт");
//            } else {
//                alert("Закрыт");
//            }
//    });
    
/*close jQuery*/   
});



///* проверка валидности номера */
//function validateComments(input) {
//	   if (input.value.length < 7) {
////		  input.setCustomValidity("Your phone number is invalid");   
//		  input.setCustomValidity("Введите правильный номер!  Пример + 375 29 111 11 11");   
//	   }
//	   else {
//		  // Длина комментария отвечает требованию, 
//		  // поэтому очищаем сообщение об ошибке
//		  input.setCustomValidity("");
//	   }
//}



/* проверка валидности номера */
//function validateComments(input) {
//	   if (input.value.length < 7) {
////		  input.setCustomValidity("Your phone number is invalid");   
//		  input.setCustomValidity("Введите правильный номер!  Пример + 375 29 111 11 11");   
//	   }
//	   else {
//		  // Длина комментария отвечает требованию, 
//		  // поэтому очищаем сообщение об ошибке
//		  input.setCustomValidity("");
//	   }
//}

//$("#phone-validation-submit").click(function(){
//    var val = document.getElementById("#mobile-number").value;
//    var validChars = '0123456789.+';
//    
//    for(var i = 0; i < val.length; i++) {
//        if(validChars.indexOf(val.charAt(i)) == -1) {
//          alert('Please enter valid number');
//          return false;
//        }
//        else{
//            $("#phone-number-form").submit();
//            alert('Please enter valid number');
//        }
//        };
//    }
//);





//var jVForms = (function() {
//    
//    'use strict';
//    
//    var CLASS_SUBMIT = 'vf-submit',
//        CLASS_VALID = 'vf-valid',
//        CLASS_INVALID = 'vf-invalid',
//        
//        config = {
//            
//           pattern: {
//               
//               all: '[\\S]+',
//               numInt: '^\\d+$',
//               numFloat: '^\\d+(\\.|,)\\d+$',
//               notNum: '^\\D+$',
//               index: '^\\d{6}$',
//               wordUpper: '^[A-ZА-ЯЁ-]+$',
//               wordLower: '^[a-zа-яё-]+$',
//               wordRuUpper: '^[А-ЯЁ-]+$',
//               wordRuLower: '^[а-яё-]+$',
//               wordUSUpper: '^[A-Z-]+$',
//               wordUSLower: '^[a-z-]+$',        
//               
//               stringRu: '^[^a-zA-Z]+$',        
//               stringUS: '^[^а-яА-ЯёЁ]+$',      
//               
//               timeHM: '^[012][\\d]:[012345][\\d]$',        
//               dateDMY: '^[0123][\\d]/[01][\\d]/[\\d]{4}$', 
//               dataDMYus: '[01][\\d]/[0123][\\d]/[\\d]{4}', 
//               
//               cc: '^[\\d]{4}\\s[\\d]{4}\\s[\\d]{4}\\s[\\d]{4}$', 
//               
//               phone: '^[\\d]{3}(\\s|-)?[\\d]{2}(\\s|-)?[\\d]{2}$',     
//               phoneDash: '^\\([\\d]{3}\\)\\s[\\d]{3}(\\s|-)[\\d]{4}$', 
//               phoneAlong: '^\\([\\d]{3}\\)\\s[\\d]{7}$',               
//               
//               test: '^test$'
//           },
//           
//           
//           notice: 'All'
//           
//        }
//        
//        ;
//    
//    function initialize( options ) {
//        
//        extend( config, options );
//        
//        setup();
//        
//    }
//    
//    function setup() {
//        
//        if ( !config.notice && typeof config.notice !== 'String' ) {
//            return ;
//        }
//        
//        var val = config.notice.toLowerCase();
//        
//        val === 'error' && (config.mode = 2) ||
//        val === 'all'   && (config.mode = 1) ||
//        val === 'off'   && (config.mode = 0);
//    
//        if ( typeof config.mode === 'undefined' ) { return ; }
//        
//        searchForm();
//    }
//    
//    
//    function extend( a, b ) {
//        for( var x in b ) {
//            a[ x ] = b[ x ];
//        }
//    }
//    
//    
//    function searchForm() {
//        
//        
//        for( var i=0, lenF=document.forms.length; i<lenF; i++ ) {
//            
//            
//            var f = document.forms[ i ],
//                needsValid;
//            
//            
//            
//            var idForm = f.id || f.getAttribute( 'name' );
//            
//            
//            
//            for( var j=0, lenE=f.elements.length; j<lenE; j++ ) {
//                
//                
//                var e = f.elements[ j ];
//                
//                
//                
//                if ( !/^text(area)?$/.test(e.type) ) continue;
//                
//                
//                var pattern  = e.getAttribute( 'pattern' ),
//                    required = e.getAttribute( 'required' ) !== null;
//                   
//                
//                
//                
//                
//                if ( !pattern ) {
//                    var namePattern = jVForms.libClass.containsMatch(e, /^vf-([a-zA-Z]+)$/, true);
//                        
//                    pattern = ( /^(all|numInt|numFloat|notNum|index|wordUpper|wordLower|wordRuUpper|wordRuLower|wordUSUpper|wordUSLower|stringRu|stringUS|timeHM|dateDMY|dataDMYus|cc|phone|phoneDash|phoneAlong|test)$/.test(namePattern) ) ?
//                        config.pattern[namePattern] :
//                        config.pattern.all;
//                    
//                 }
//                
//                
//                if ( !required ) pattern = pattern.replace(/^(\^)?([^\$]+)(\$)?$/, "$1($2)?$3");
//                
//                
//                e.setAttribute( 'pattern', pattern );
//                
//                
//                jVForms.jevent.add( e, 'change', validateONchange );
//                
//                jVForms.jevent.add( e, 'keyup', validateONkey );
//                
//                needsValid = true;
//                
//            }
//            
//            
//            
//            if (needsValid) {
//                
//                
//                jVForms.jevent.add( f, 'submit', validateONsubmit );
//                
//                
//                var vfSubmit = jVForms.libClass.search( CLASS_SUBMIT, f );
//                
//                for( var a=0, len=vfSubmit.length; a<len; a++ ) {
//                    
//                    jVForms.jevent.add( vfSubmit[ a ], 'click', validateONsubmit );
//                }
//                
//                
//                
//                
//                
//                if ( idForm ) {
//                    
//                    
//                    vfSubmit = jVForms.libClass.search( CLASS_SUBMIT );
//                    
//                    for( var b=0, leng=vfSubmit.length; b<leng; b++ ) {
//                        
//                        if (  jVForms.libClass.contains( vfSubmit[ b ], idForm ) ) {
//                            
//                            jVForms.libClass.remove( vfSubmit[ b ], idForm );
//                            vfSubmit[ b ].setAttribute( 'form', idForm );
//                            
//                            jVForms.jevent.add( vfSubmit[ b ], 'click', validateONsubmit );
//                        }
//                        
//                    }
//                }
//                
//            }
//            
//        }
//        
//     }
//    
//    
//    
//    function validateONchange( event ) {
//        
//        var e = jVForms.jevent.fix(event);
//        var el = e.target;
//        var attr = el.getAttribute( "pattern" );
//        var value = el.value;
//        var pattern = new RegExp( attr );
//        
//        if ( pattern.test(value) ) {
//            
//            
//            if (config.mode !== 0) {
//                notification.notice.valid( el );
//            }
//            
//            jVForms.libClass.remove( el, CLASS_INVALID );
//            jVForms.libClass.add( el, CLASS_VALID );
//            
//        } else {
//            
//            
//            if (config.mode !== 0) {
//                notification.notice.invalid( el );
//            }
//            jVForms.libClass.remove( el, CLASS_VALID );
//            jVForms.libClass.add( el, CLASS_INVALID );
//            
//        }
//        
//    }
//    
//    
//    function validateONsubmit( event ) {
//        
//        var e = jVForms.jevent.fix(event);
//        var el = e.target,
//            type = e.type,
//            nodeForm = e.target,
//            stop = false;
//            
//        
//        
//        if (type === 'click') {
//            
//            var attrForm = el.getAttribute( 'form' );
//            
//            if ( attrForm ) {
//                nodeForm = document.getElementById( attrForm );
//                
//                nodeForm = nodeForm || document.getElementsByName( attrForm );
//            }
//            else {
//                nodeForm = (function find( n ) {
//                    
//                               if (n.nodeType == 1) {
//                                   if (/^form$/i.test(n.nodeName)) return n;
//                                   var foo = find( n.parentNode );
//                               }
//                
//                               return foo;
//                            }( el.parentNode ));
//            }
//            
//            
//            if ( !nodeForm ) { return false; }
//        
//        }
//        
//        
//        for( var i=0, len=nodeForm.elements.length; i<len; i++ ) {
//        
//            
//            var element = nodeForm.elements[ i ];
//            
//            if ( /^text(area)?$/.test(element.type) ) {
//                
//                jVForms.jevent.trigger( element, 'change' );
//                
//                if ( jVForms.libClass.contains(element, CLASS_INVALID) ) {
//                    stop = true;
//                }
//            
//            }
//            
//        }
//        
//        if ( stop ) {
//            e.preventDefault();
//            e.stopPropagation();
//            return false;
//        }
//        
//        return true;
//    }
//    
//    
//    function validateONkey( event ) {
//        
//        var e = jVForms.jevent.fix(event);
//        var el = e.target;
//        
//        jVForms.jevent.trigger( el, 'change' );
//        
//    }
//    
//    
//    
//    
//    var notification = {
//        
//        
//        
//        
//        notice: {
//            
//            bgColor: {
//                
//                hex: ['#ff4f4f','#83ff83'],
//                rgb: ['rgba(255,79,79,.7)','rgba(131,255,131,.7)']
//            },
//            
//            
//            valid: function( el ) {
//                
//                if (!notification.notice.bgColor.hex[2]) notification.notice.getStyle( el );
//                
//                
//                try {
//                    el.style.backgroundColor = (config.mode === 1) ? notification.notice.bgColor.rgb[1] : 
//                                                                     notification.notice.bgColor.hex[2];
//                } catch(exp) {
//                    el.style.backgroundColor = (config.mode === 1) ? notification.notice.bgColor.hex[1] : 
//                                                                     notification.notice.bgColor.hex[2];
//                }
//                
//            },
//            
//            
//            invalid: function( el ) {
//                
//                if (!notification.notice.bgColor.hex[2]) notification.notice.getStyle( el );
//                
//                
//                try {
//                    el.style.backgroundColor = notification.notice.bgColor.rgb[0];
//                } catch(exp) {
//                    el.style.backgroundColor = notification.notice.bgColor.hex[0];
//                }
//                
//            },
//            
//            
//            
//            getStyle: function( el ) {
//                var computedStyle = el.currentStyle || window.getComputedStyle(el, null);
//                
//                notification.notice.bgColor.hex.push(computedStyle.backgroundColor);
//            }
//            
//        }
//        
//    };    
//    
//    return {
//        initialize: initialize
//    };
//}());
//
//jVForms.jevent = {
//    
//    add: function(el, event, func) {
//        
//        if ( el.addEventListener ) {
//             el.addEventListener(event, func, false); 
//             return ;} 
//        
//        if ( el.attachEvent ) {
//             el.detachEvent('on'+ event, func);
//             el.attachEvent('on'+ event, func); 
//             return ;}
//         
//         el['on'+ event] = func;
//        
//    },
//    
//    remove: function(el, event, func) {
//        
//        if ( el.removeEventListener ) {
//             el.removeEventListener(event, func, false); 
//             return ;} 
//         
//        if ( el.detachEvent ) {
//             el.detachEvent('on'+ event, func); 
//             return ;}
//        
//        el['on'+ event] = null;
//        
//    },
//    
//    trigger: function(el, event) {
//        
//        var e,
//            ie = false;
//        
//        if ( document.createEvent ) {
//            e = document.createEvent( "HTMLEvents" );
//            e.initEvent(event, false, true);
//            
//        }
//        else
//        if ( document.createEventObject ) {
//            e = document.createEventObject( );
//            e.eventType = event;
//            ie = true;
//            
//        }
//        else {
//            return false;
//        }
//        
//        return (ie) ? el.fireEvent( "on"+e.eventType, e ) : el.dispatchEvent( e );
//        
//    },
//    
//    fix: function(event) {
//        
//        event = event || window.event;
//        
//        if ( event.isFixed ) { return event; }
//        
//        var body, doc,
//            button = event.button,
//            fromElement = event.fromElement;
//        
//        
//        event.preventDefault =  event.preventDefault || function(){ this.returnValue = false; };
//        event.stopPropagation = event.stopPropagaton || function(){ this.cancelBubble = true; };
//        
//        
//        if ( !event.target ) {
//            event.target = event.srcElement || document;
//        }
//        
//        
//        if ( event.target.nodeType === 3 ) {
//            event.target = event.target.parentNode;
//        }
//        
//        
//        event.metaKey = !!event.metaKey;
//            
//        
//        if ( !event.relatedTarget && fromElement ) {
//              event.relatedTarget = fromElement === event.target ? event.toElement : fromElement;
//        }
//        
//        
//        if ( event.pageX == null && event.clientX != null ) {
//                
//            doc = document.documentElement,
//            body = document.body;
//                    
//            event.pageX = event.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
//            event.pageY = event.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
//                
//        }
//            
//        
//        
//        if ( !event.which && button !== undefined ) {
//                event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
//        }
//        
//        
//        if ( !event.which ) {
//               event.which = event.charCode != null ? event.charCode : event.keyCode;
//        }
//        
//        event.time = (new Date).getTime();
//        
//        event.isFixed = true;
//        
//        return event;
//        
//    }
//    
//};
//
//    
//jVForms.libClass = {
//
//    /**
//     * Добавить класс.
//     *
//     * @param {HTMLElement} el требуемый элемент.
//     * @param {String} nameClass имя, которое требуется установить.
//     * 
//     * @return {String|Boolean} новое имя класса или ложь.
//     */
//     add: function( el, nameClass ) {
//     
//         
//         var classList = el.className,
//             space = /\s+/;
//     
//         
//         if (!classList) {
//              el.className = nameClass;
//              return nameClass;
//         }
//     
//         
//     
//         
//         if (classList === nameClass) {
//              return false;
//         }
//            
//         
//         
//         
//         if (!space.test(classList)) {
//              el.className = nameClass+' '+classList;
//              return nameClass;
//         }
//            
//         
//         
//         var classListArray = classList.split( space );
//                
//                
//         for ( var i=0, len=classListArray.length; i<len; i++ ) {
//                    
//              
//              if (classListArray[ i ] === nameClass) {
//                   return false;
//              }
//                   
//         }
//            
//         el.className = nameClass+' '+classList;
//                
//         return nameClass;
//                
//     },
//        
//     /**
//     * Удалить класс.
//     *
//     * @param {HTMLElement} el требуемый элемент.
//     * @param {String} nameClass имя, которое требуется удалить.
//     * 
//     * @return {String|Boolean} удаляемое имя класса или ложь.
//     */
//     remove: function( el, nameClass ) {
//            
//         
//         var classList = el.className,
//             space = /\s+/;
//                
//         
//         if (!classList) {
//              return false;
//         }
//                
//         
//                
//         
//         if (classList === nameClass) {
//              el.removeAttribute( "class" );
//              return nameClass;
//         }
//                
//         
//         
//         if (!space.test(classList)) {
//              return false;
//         }
//                
//         
//         var classListArray = classList.split( space ),
//             classListNew = [];
//                
//         for ( var i=0, len=classListArray.length; i<len; i++ ) {
//                    
//              
//              if (classListArray[ i ] !== nameClass) {
//                   classListNew.push( classListArray[ i ] );
//              }
//                   
//         }
//         el.className = classListNew.join( ' ' );
//                
//         return nameClass;
//                
//     },
//        
//     /**
//     * Переключить класс.
//     *
//     * @param {HTMLElement} el требуемый элемент.
//     * @param {String} nameClass имя, которое требуется переключить.
//     */
//     toggle: function( el, nameClass ) {
//            
//         this.contains(el, nameClass) ?
//         this.remove(el, nameClass) :
//         this.add(el, nameClass);
//     
//     },
//        
//     /**
//     * Проверить класс.
//     *
//     * @param {HTMLElement} el требуемый элемент.
//     * @param {String} nameClass имя, которое требуется проверить.
//     * 
//     * @return {Boolean} если имя класса найдено, возвращает истину,
//     * иначе ложь.
//     */
//     contains: function( el, nameClass ) {
//            
//         
//         var classList = el.className,
//             space = /\s+/;
//                
//         
//         if (!classList) {
//              return false;
//         }
//                
//         
//         if (classList === nameClass) {
//              return true;
//         }
//                
//         
//         if (!space.test(classList)) {
//              return false;
//         }
//                
//         var classListArray = classList.split( space );
//                
//         for ( var i=0, len=classListArray.length; i<len; i++ ) {
//                    
//              if (classListArray[ i ] === nameClass) {
//                   return true;
//              }
//                    
//         }
//            
//         return false;
//            
//     },
//     
//     /**
//      * Проверить класс на соответствие рег. выр.
//      *
//      * @param {HTMLElement} el требуемый элемент.
//      * @param {Object} expression объект RegExp.
//      * @param {Boolean} match флаг указывающий на значение, 
//      * которое должна вернуть функция.
//      * 
//      * @return {Boolean|String} возвращает булев тип true|false, если 
//      * match не установлен, либо установлен в false, либо установлен не 
//      * правильно. Возвращает строку, содержащую найденное соответствие, если
//      * match установлен в true. Возвращает пустую строку, если соответствий
//      * не обнаруженно.
//      */
//     containsMatch: function( el, expression, match ) {
//         
//         if (typeof expression === 'object' && expression instanceof RegExp) {
//             
//             
//             var classList = el.className,
//                 space = /\s+/;
//                 
//             match = (match && typeof match === 'boolean') || false;
//                 
//             
//             if (!classList) {
//                  return match ? '' : false;
//             }
//             
//             
//             if (expression.test(classList)) {
//                 
//                 return match ? classList.match(expression).pop() : true;
//                 
//             }
//             
//            
//            if (!space.test(classList)) {
//                return match ? '' : false;
//            }
//            
//            var classListArray = classList.split( space );
//            
//            for ( var i=0, len=classListArray.length; i<len; i++ ) {
//                
//                
//               if (expression.test(classListArray[ i ])) {
//                   
//                   return match ? classList.match(expression).pop() : true;
//                   
//               }
//                
//            }
//            
//            return match ? '' : false;
//            
//         }
//         
//     },
//        
//    /**
//     * Количество классов.
//     *
//     * @param {HTMLElement} el требуемый элемент.
//     * 
//     * @return {Number} количество классов у элемента.
//     */
//     length: function( el ) {
//            
//         
//         var classList = el.className,
//             space = /\s+/,
//             zero = 0;
//            
//         
//         if (!classList) {
//              return zero;
//         }
//            
//         
//         if (!space.test(classList)) {
//              return 1;
//         }
//            
//         var classListArray = classList.split( space ),
//             classListNew = [];
//            
//         for ( var i=0, len=classListArray.length; i<len; i++ ) {
//                    
//              if ( /\S/.test( classListArray[ i ] ) ) {
//                   classListNew.push( classListArray[ i ] );
//              }
//                
//         }
//            
//         return classListNew.length;
//            
//     },
//        
//     /**
//     * Поиск класса в документе или узле.
//     *
//     * @param {String} nameClass имя, которое требуется найти.
//     * @param {HTMLElement} node узел, в котором будет выполнен поиск.
//     * 
//     * @return {Array} массив, содержащий все найденные элементы в документе,
//     * для которых установлен искомый класс.
//     */
//     search: function( nameClass, node ) {
//            
//         var el = [],
//             space = /\s+/,
//             that = this;
//                
//         if ( !nameClass || space.test(nameClass) || (typeof nameClass !== 'string') ) {
//              return el;
//         }
//         node = node || document.body;
//                
//         (function find( n ) {
//                    
//              if (n.nodeType == 1) {
//                   if ( that.contains(n, nameClass) ) el.push(n);
//                   for( var child = n.childNodes, i=0, len=child.length; i<len; i++ ) find( child[ i ] );
//              }
//                    
//              return ;
//                    
//         }(node));
//                
//         return el;
//                
//     }
//        
//};
//
//jVForms.initialize({notice: 'All'});


           
           
//
//function ValidateNumeric() {
//  var val = document.getElementById("mobile-number").value;
//  var validChars = '0123456789.'; 
//
//  for(var i = 0; i < val.length; i++) { 
//    if(validChars.indexOf(val.charAt(i)) == -1) {
//      alert('Please enter valid number');
//      return false;
//    }
//  } 
//
//  return true; 
//}

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