
// CSS Browser Hack
var css_browser_selector = function() {
  var
    ua=navigator.userAgent.toLowerCase(),
    is=function(t){ return ua.indexOf(t) != -1; },
    h=document.getElementsByTagName('html')[0],
    b=(!(/opera|webtv/i.test(ua))&&/msie (\d)/.test(ua))?('ie ie'+RegExp.$1):is('gecko/')? 'gecko':is('opera/9')?'opera opera9':/opera (\d)/.test(ua)?'opera opera'+RegExp.$1:is('konqueror')?'konqueror':is('applewebkit/')?'webkit safari':is('mozilla/')?'gecko':'',
    os=(is('x11')||is('linux'))?' linux':is('mac')?' mac':is('win')?' win':'';
  var c=b+os+' js';
  h.className += h.className?' '+c:c;
}();

function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'imgover') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_ov'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	
			
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_ov'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

function SC() {
	if (!document.getElementById) return
	var aAll = document.getElementsByTagName('a');
	if(aAll){
		for (var i = 0; i < aAll.length; i++) {
			aAll[i].onfocus = function() {
				this.blur();	
			}
		}
	}
}

window.onload = function() {
	initRollovers();
	SC();
}