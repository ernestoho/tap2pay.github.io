(function() {
  var ccnum  = document.getElementById('ccnum'),
      type   = document.getElementById('ccnum-type'),
      expiry = document.getElementById('expiry'),
      cvc    = document.getElementById('cvc'),
      submit = document.getElementById('submit'),
      result = document.getElementById('result');

	payform.cardNumberInput(ccnum);
	payform.expiryInput(expiry);
	payform.cvcInput(cvc);

	ccnum.addEventListener('input',   updateType);

	submit.addEventListener('click', function() {
    var valid     = [],
        expiryObj = payform.parseCardExpiry(expiry.value);

    valid.push(fieldStatus(ccnum,  payform.validateCardNumber(ccnum.value)));
    valid.push(fieldStatus(expiry, payform.validateCardExpiry(expiryObj)));
    valid.push(fieldStatus(cvc,    payform.validateCardCVC(cvc.value, type.innerHTML)));

//    result.className = 'emoji ' + (valid.every(Boolean) ? 'valid' : 'invalid');
  });

  function updateType(e) {
    var cardType = payform.parseCardType(e.target.value);
    type.innerHTML = cardType || 'invalid';
  }


  function fieldStatus(input, valid) {
    if (valid) {
      removeClass(input.parentNode, 'error');
    } else {
      addClass(input.parentNode, 'error');
    }
    return valid;
  }

  function addClass(ele, _class) {
    if (ele.className.indexOf(_class) === -1) {
      ele.className += ' ' + _class;
    }
  }

  function removeClass(ele, _class) {
    if (ele.className.indexOf(_class) !== -1) {
      ele.className = ele.className.replace(_class, '');
    }
  }
	
//$('#ccnum').focus(function(){
//  var that = this;
//  setTimeout(function(){ that.selectionStart = that.selectionEnd = 1000; }, 0);
//});
	
	
	
})();

//function moveCaretToEnd(el) {
//    if (typeof el.selectionStart == "number") {
//        el.selectionStart = el.selectionEnd = el.value.length;
//    } else if (typeof el.createTextRange != "undefined") {
//        el.focus();
//        var range = el.createTextRange();
//        range.collapse(false);
//        range.select();
//    }
//}
//
//var textarea = document.getElementById("ccnum");
//
//textarea.onfocus = function() {
//    moveCaretToEnd(textarea);
//
//    // Work around Chrome's little problem
//    window.setTimeout(function() {
//        moveCaretToEnd(textarea);
//    }, 1);
//};