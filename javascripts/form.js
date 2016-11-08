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


function css_browser_selector(u) {
	var ua = u.toLowerCase(),
		is = function (t) {
			return ua.indexOf(t) > -1
		},
		g = 'gecko',
		w = 'webkit',
		s = 'safari',
		o = 'opera',
		m = 'mobile',
		h = document.documentElement,
		b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
	c = b.join(' ');
	h.className += ' ' + c;
	return c;
};
css_browser_selector(navigator.userAgent);

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