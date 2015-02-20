/* BETTER EASING OPTIONS */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/* SCROLL TO 
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
*/
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

/* <!-- History.js --> */
(function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&&n.originalEvent&&n.originalEvent[e]||r&&r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!="undefined"&&n.init()})(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window)

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* PLUGINS */
;(function($) {
    
    $.fn.GridderAjax = function(options) {
                
        /* SET VARS */
        var visible = false;
        var gridder = $('<li class="gridder-show"></li>');
        var mybloc;
        var $gridder_parent = this;
        
        /* GET DEFAULT OPTIONS OR USE THE ONE PASSED IN THE FUNCTION  */
        var opts = $.extend( {}, $.fn.GridderAjax.defaults, options );
        
        /* SET LOCAL VARS */
        var rootUrl = opts.rootUrl;
        var animationSpeed = opts.animationSpeed;
        var animationEasing = opts.animationEasing;
        var scrollOffset = opts.scrollOffset;
        
        /* INITIALIZE THE HISTORY PLUGIN */
        var History = window.History;
		if ( !History.enabled ) {
			return false;
		}
        
        var updateContent = function(State) {
            
            var thisUrl = getParameterByName('item');
			var parentproduct = $('.'+thisUrl);
            
            /* ACTIVE STATE */
            if (!parentproduct.hasClass('selectedItem')) {
                $('.selectedItem').removeClass('selectedItem');
                parentproduct.addClass("selectedItem");
            } 
            
            /* SCROLL TO CORRECT BLOC */
            $.scrollTo($('.selectedItem'), animationSpeed, {
                easing: animationEasing,
                offset: $('.selectedItem').height() - scrollOffset
            });
            
            /* REMOVE */
            $('.gridder-show').remove();
            
            /* ADD CLASS TO THE GRIDDER CONTAINER
             * So you can apply global style when item selected. 
             */
            if (!$gridder_parent.hasClass('hasSelectedItem')) {
                $gridder_parent.addClass("hasSelectedItem");
            }
            
            /* ADD LOADING BLOC */
            var $htmlcontent = $('<li class="gridder-show loading"></li>');
            mybloc = $htmlcontent.insertAfter(parentproduct);

            /* AJAX REQUEST */
            var thisTitle = $('.'+thisUrl+' a').attr('title');
            var request = $.ajax({
                url: "api/data.php",
                type: "POST",
                data: {id: thisUrl}
            });

            request.done(function(data) {
                mybloc.html(data);

                var mainimage = mybloc.find('.images img').attr('src');
                
                $("<img>", {src: mainimage}).imagesLoaded( function(){
                    mybloc.removeClass('loading');

                    if (!visible) {
                        mybloc.find('.padding').slideDown(animationSpeed, animationEasing, function() {
                            visible = true;
                        });
                    } else {
                        mybloc.find('.padding').fadeIn(animationSpeed, animationEasing, function() {
                            visible = true;
                        });
                    }
                });
            });
        };

        var State = History.getState();
		
		/* PUSH FIRST STATE */
		if (State.hash.indexOf('?item=') !== -1){
			var thisUrl = getParameterByName('item');
			var thisTitle = $('.'+thisUrl).find('.title').html();   
			updateContent(History.getState());
			History.pushState({state:1, rand: Math.random()}, thisTitle+'', "?item="+thisUrl);
		};
 
		/* PUSH STATE ON PRODUCT CLICK */
		$('.do-expand-item').click(function(e) {
            if (!$(this).next().hasClass('gridder-show')) {
                var thisUrl = $(this).find('.link').attr('href');
                var thisTitle = $(this).find('.link').attr('title');
                History.pushState({state:1, rand:Math.random()}, thisTitle+'', "?item="+thisUrl);
            }
			e.preventDefault();
		});	
        
        // IF STATE CHANGES
		History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
			var State = History.getState();
			updateContent(State);
		});

        return this.each(function() {

            /* Close */
            $(document).on('click', '.closeModal', function(e) {
                e.preventDefault();
                var $mybloc = $('.gridder-show');
                $('.selectedProduct').removeClass('selectedProduct');
                $mybloc.slideUp(200, animationEasing, function() {
                    $mybloc.remove();
                    $gridder_parent.removeClass("hasSelectedItem");
                    visible = false;
                    //History.back();
                });
            });

            /* Next */
            $(document).on('click', '.nextModal', function() {
                $(this).parents('.gridder-show').next().trigger('click');
            });

            /* Previous */
            $(document).on('click', '.prevModal', function() {
                $(this).parents('.gridder-show').prev().prev().trigger('click');
            });

        });
    };
    
    $.fn.GridderAjax.defaults = {
        scrollOffset: 0,
        rootUrl: "/",
        animationSpeed: 600,
        animationEasing: "easeInOutExpo"
    };
    
})(jQuery);