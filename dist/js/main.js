(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});

},{}],2:[function(require,module,exports){
/*!
	Autosize 4.0.0
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'module'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.autosize = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : (function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	})();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function (name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = (function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map['delete'](ta);
		}).bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function (el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function (el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
});
},{}],3:[function(require,module,exports){
(function (global){
var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
/**
 * lscache library
 * Copyright (c) 2011, Pamela Fox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint undef:true, browser:true, node:true */
/* global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module !== "undefined" && module.exports) {
        // CommonJS/Node module
        module.exports = factory();
    } else {
        // Browser globals
        root.lscache = factory();
    }
}(this, function () {

  // Prefix for all lscache keys
  var CACHE_PREFIX = 'lscache-';

  // Suffix for the key name on the expiration items in localStorage
  var CACHE_SUFFIX = '-cacheexpiration';

  // expiration date radix (set to Base-36 for most space savings)
  var EXPIRY_RADIX = 10;

  // time resolution in minutes
  var EXPIRY_UNITS = 60 * 1000;

  // ECMAScript max Date (epoch + 1e8 days)
  var MAX_DATE = Math.floor(8.64e15/EXPIRY_UNITS);

  var cachedStorage;
  var cachedJSON;
  var cacheBucket = '';
  var warnings = false;

  // Determines if localStorage is supported in the browser;
  // result is cached for better performance instead of being run each time.
  // Feature detection is based on how Modernizr does it;
  // it's not straightforward due to FF4 issues.
  // It's not run at parse-time as it takes 200ms in Android.
  function supportsStorage() {
    var key = '__lscachetest__';
    var value = key;

    if (cachedStorage !== undefined) {
      return cachedStorage;
    }

    // some browsers will throw an error if you try to access local storage (e.g. brave browser)
    // hence check is inside a try/catch
    try {
      if (!localStorage) {
        return false;
      }
    } catch (ex) {
      return false;
    }

    try {
      setItem(key, value);
      removeItem(key);
      cachedStorage = true;
    } catch (e) {
        // If we hit the limit, and we don't have an empty localStorage then it means we have support
        if (isOutOfSpace(e) && localStorage.length) {
            cachedStorage = true; // just maxed it out and even the set test failed.
        } else {
            cachedStorage = false;
        }
    }
    return cachedStorage;
  }

  // Check to set if the error is us dealing with being out of space
  function isOutOfSpace(e) {
    if (e && e.name === 'QUOTA_EXCEEDED_ERR' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
            e.name === 'QuotaExceededError') {
        return true;
    }
    return false;
  }

  // Determines if native JSON (de-)serialization is supported in the browser.
  function supportsJSON() {
    /*jshint eqnull:true */
    if (cachedJSON === undefined) {
      cachedJSON = (window.JSON != null);
    }
    return cachedJSON;
  }

  /**
   * Returns a string where all RegExp special characters are escaped with a \.
   * @param {String} text
   * @return {string}
   */
  function escapeRegExpSpecialCharacters(text) {
    return text.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
  }

  /**
   * Returns the full string for the localStorage expiration item.
   * @param {String} key
   * @return {string}
   */
  function expirationKey(key) {
    return key + CACHE_SUFFIX;
  }

  /**
   * Returns the number of minutes since the epoch.
   * @return {number}
   */
  function currentTime() {
    return Math.floor((new Date().getTime())/EXPIRY_UNITS);
  }

  /**
   * Wrapper functions for localStorage methods
   */

  function getItem(key) {
    return localStorage.getItem(CACHE_PREFIX + cacheBucket + key);
  }

  function setItem(key, value) {
    // Fix for iPad issue - sometimes throws QUOTA_EXCEEDED_ERR on setItem.
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
    localStorage.setItem(CACHE_PREFIX + cacheBucket + key, value);
  }

  function removeItem(key) {
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
  }

  function eachKey(fn) {
    var prefixRegExp = new RegExp('^' + CACHE_PREFIX + escapeRegExpSpecialCharacters(cacheBucket) + '(.*)');
    // Loop in reverse as removing items will change indices of tail
    for (var i = localStorage.length-1; i >= 0 ; --i) {
      var key = localStorage.key(i);
      key = key && key.match(prefixRegExp);
      key = key && key[1];
      if (key && key.indexOf(CACHE_SUFFIX) < 0) {
        fn(key, expirationKey(key));
      }
    }
  }

  function flushItem(key) {
    var exprKey = expirationKey(key);

    removeItem(key);
    removeItem(exprKey);
  }

  function flushExpiredItem(key) {
    var exprKey = expirationKey(key);
    var expr = getItem(exprKey);

    if (expr) {
      var expirationTime = parseInt(expr, EXPIRY_RADIX);

      // Check if we should actually kick item out of storage
      if (currentTime() >= expirationTime) {
        removeItem(key);
        removeItem(exprKey);
        return true;
      }
    }
  }

  function warn(message, err) {
    if (!warnings) return;
    if (!('console' in window) || typeof window.console.warn !== 'function') return;
    window.console.warn("lscache - " + message);
    if (err) window.console.warn("lscache - The error was: " + err.message);
  }

  var lscache = {
    /**
     * Stores the value in localStorage. Expires after specified number of minutes.
     * @param {string} key
     * @param {Object|string} value
     * @param {number} time
     */
    set: function(key, value, time) {
      if (!supportsStorage()) return;

      // If we don't get a string value, try to stringify
      // In future, localStorage may properly support storing non-strings
      // and this can be removed.

      if (!supportsJSON()) return;
      try {
        value = JSON.stringify(value);
      } catch (e) {
        // Sometimes we can't stringify due to circular refs
        // in complex objects, so we won't bother storing then.
        return;
      }

      try {
        setItem(key, value);
      } catch (e) {
        if (isOutOfSpace(e)) {
          // If we exceeded the quota, then we will sort
          // by the expire time, and then remove the N oldest
          var storedKeys = [];
          var storedKey;
          eachKey(function(key, exprKey) {
            var expiration = getItem(exprKey);
            if (expiration) {
              expiration = parseInt(expiration, EXPIRY_RADIX);
            } else {
              // TODO: Store date added for non-expiring items for smarter removal
              expiration = MAX_DATE;
            }
            storedKeys.push({
              key: key,
              size: (getItem(key) || '').length,
              expiration: expiration
            });
          });
          // Sorts the keys with oldest expiration time last
          storedKeys.sort(function(a, b) { return (b.expiration-a.expiration); });

          var targetSize = (value||'').length;
          while (storedKeys.length && targetSize > 0) {
            storedKey = storedKeys.pop();
            warn("Cache is full, removing item with key '" + key + "'");
            flushItem(storedKey.key);
            targetSize -= storedKey.size;
          }
          try {
            setItem(key, value);
          } catch (e) {
            // value may be larger than total quota
            warn("Could not add item with key '" + key + "', perhaps it's too big?", e);
            return;
          }
        } else {
          // If it was some other error, just give up.
          warn("Could not add item with key '" + key + "'", e);
          return;
        }
      }

      // If a time is specified, store expiration info in localStorage
      if (time) {
        setItem(expirationKey(key), (currentTime() + time).toString(EXPIRY_RADIX));
      } else {
        // In case they previously set a time, remove that info from localStorage.
        removeItem(expirationKey(key));
      }
    },

    /**
     * Retrieves specified value from localStorage, if not expired.
     * @param {string} key
     * @return {string|Object}
     */
    get: function(key) {
      if (!supportsStorage()) return null;

      // Return the de-serialized item if not expired
      if (flushExpiredItem(key)) { return null; }

      // Tries to de-serialize stored value if its an object, and returns the normal value otherwise.
      var value = getItem(key);
      if (!value || !supportsJSON()) {
        return value;
      }

      try {
        // We can't tell if its JSON or a string, so we try to parse
        return JSON.parse(value);
      } catch (e) {
        // If we can't parse, it's probably because it isn't an object
        return value;
      }
    },

    /**
     * Removes a value from localStorage.
     * Equivalent to 'delete' in memcache, but that's a keyword in JS.
     * @param {string} key
     */
    remove: function(key) {
      if (!supportsStorage()) return;

      flushItem(key);
    },

    /**
     * Returns whether local storage is supported.
     * Currently exposed for testing purposes.
     * @return {boolean}
     */
    supported: function() {
      return supportsStorage();
    },

    /**
     * Flushes all lscache items and expiry markers without affecting rest of localStorage
     */
    flush: function() {
      if (!supportsStorage()) return;

      eachKey(function(key) {
        flushItem(key);
      });
    },

    /**
     * Flushes expired lscache items and expiry markers without affecting rest of localStorage
     */
    flushExpired: function() {
      if (!supportsStorage()) return;

      eachKey(function(key) {
        flushExpiredItem(key);
      });
    },

    /**
     * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
     * @param {string} bucket
     */
    setBucket: function(bucket) {
      cacheBucket = bucket;
    },

    /**
     * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
     */
    resetBucket: function() {
      cacheBucket = '';
    },

    /**
     * Sets whether to display warnings when an item is removed from the cache or not.
     */
    enableWarnings: function(enabled) {
      warnings = enabled;
    }
  };

  // Return the module
  return lscache;
}));

},{}],5:[function(require,module,exports){
var global = require('global')

/**
 * `requestAnimationFrame()`
 */

var request = global.requestAnimationFrame
  || global.webkitRequestAnimationFrame
  || global.mozRequestAnimationFrame
  || fallback

var prev = +new Date
function fallback (fn) {
  var curr = +new Date
  var ms = Math.max(0, 16 - (curr - prev))
  var req = setTimeout(fn, ms)
  return prev = curr, req
}

/**
 * `cancelAnimationFrame()`
 */

var cancel = global.cancelAnimationFrame
  || global.webkitCancelAnimationFrame
  || global.mozCancelAnimationFrame
  || clearTimeout

if (Function.prototype.bind) {
  request = request.bind(global)
  cancel = cancel.bind(global)
}

exports = module.exports = request
exports.cancel = cancel

},{"global":3}],6:[function(require,module,exports){
var raf = require('rafl')

function scroll (prop, element, to, options, callback) {
  var start = +new Date
  var from = element[prop]
  var cancelled = false

  var ease = inOutSine
  var duration = 350

  if (typeof options === 'function') {
    callback = options
  }
  else {
    options = options || {}
    ease = options.ease || ease
    duration = options.duration || duration
    callback = callback || function () {}
  }

  if (from === to) {
    return callback(
      new Error('Element already at target scroll position'),
      element[prop]
    )
  }

  function cancel () {
    cancelled = true
  }

  function animate (timestamp) {
    if (cancelled) {
      return callback(
        new Error('Scroll cancelled'),
        element[prop]
      )
    }

    var now = +new Date
    var time = Math.min(1, ((now - start) / duration))
    var eased = ease(time)

    element[prop] = (eased * (to - from)) + from

    time < 1 ?
      raf(animate) :
      callback(null, element[prop])
  }

  raf(animate)

  return cancel
}

function inOutSine (n) {
  return .5 * (1 - Math.cos(Math.PI * n));
}

module.exports = {
  top: function (element, to, options, callback) {
    return scroll('scrollTop', element, to, options, callback)
  },
  left: function (element, to, options, callback) {
    return scroll('scrollLeft', element, to, options, callback)
  }
}

},{"rafl":5}],7:[function(require,module,exports){
var _extends=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a,b){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.LazyLoad=b()}(this,function(){"use strict";var a={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"original",data_srcset:"originalSet",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},b=!("onscroll"in window)||/glebot/.test(navigator.userAgent),c=function(a,b){a&&a(b)},d=function(a){return a.getBoundingClientRect().top+window.pageYOffset-a.ownerDocument.documentElement.clientTop},e=function(a,b,c){return(b===window?window.innerHeight+window.pageYOffset:d(b)+b.offsetHeight)<=d(a)-c},f=function(a){return a.getBoundingClientRect().left+window.pageXOffset-a.ownerDocument.documentElement.clientLeft},g=function(a,b,c){var d=window.innerWidth;return(b===window?d+window.pageXOffset:f(b)+d)<=f(a)-c},h=function(a,b,c){return(b===window?window.pageYOffset:d(b))>=d(a)+c+a.offsetHeight},i=function(a,b,c){return(b===window?window.pageXOffset:f(b))>=f(a)+c+a.offsetWidth},j=function(a,b,c){return!(e(a,b,c)||h(a,b,c)||g(a,b,c)||i(a,b,c))},k=function(a,b){var c=new a(b),d=new CustomEvent("LazyLoad::Initialized",{detail:{instance:c}});window.dispatchEvent(d)},l=function(a,b){var c=a.parentElement;if("PICTURE"===c.tagName)for(var d=0;d<c.children.length;d++){var e=c.children[d];if("SOURCE"===e.tagName){var f=e.dataset[b];f&&e.setAttribute("srcset",f)}}},m=function(a,b,c){var d=a.tagName,e=a.dataset[c];if("IMG"===d){l(a,b);var f=a.dataset[b];return f&&a.setAttribute("srcset",f),void(e&&a.setAttribute("src",e))}if("IFRAME"===d)return void(e&&a.setAttribute("src",e));e&&(a.style.backgroundImage='url("'+e+'")')},n=function(b){this._settings=_extends({},a,b),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};n.prototype={_reveal:function(a){var b=this._settings,d=function d(){b&&(a.removeEventListener("load",e),a.removeEventListener("error",d),a.classList.remove(b.class_loading),a.classList.add(b.class_error),c(b.callback_error,a))},e=function e(){b&&(a.classList.remove(b.class_loading),a.classList.add(b.class_loaded),a.removeEventListener("load",e),a.removeEventListener("error",d),c(b.callback_load,a))};"IMG"!==a.tagName&&"IFRAME"!==a.tagName||(a.addEventListener("load",e),a.addEventListener("error",d),a.classList.add(b.class_loading)),m(a,b.data_srcset,b.data_src),c(b.callback_set,a)},_loopThroughElements:function(){var a=this._settings,d=this._elements,e=d?d.length:0,f=void 0,g=[],h=this._isFirstLoop;for(f=0;f<e;f++){var i=d[f];a.skip_invisible&&null===i.offsetParent||(b||j(i,a.container,a.threshold))&&(h&&i.classList.add(a.class_initial),this._reveal(i),g.push(f),i.dataset.wasProcessed=!0)}for(;g.length;)d.splice(g.pop(),1),c(a.callback_processed,d.length);0===e&&this._stopScrollHandler(),h&&(this._isFirstLoop=!1)},_purgeElements:function(){var a=this._elements,b=a.length,c=void 0,d=[];for(c=0;c<b;c++){a[c].dataset.wasProcessed&&d.push(c)}for(;d.length>0;)a.splice(d.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var a=this._settings.throttle;if(0!==a){var b=Date.now(),c=a-(b-this._previousLoopTime);c<=0||c>a?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=b,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),c))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var o=window.lazyLoadOptions;return o&&function(a,b){var c=b.length;if(c)for(var d=0;d<c;d++)k(a,b[d]);else k(a,b)}(n,o),n});
},{}],8:[function(require,module,exports){
const Fetch = require('./Fetch.js');

class ContactForm {
  constructor() {
    this.elForm = document.querySelector('.contact-form');
    this.elSendBtn = this.elForm.querySelector('.js-btn-send');
    this.elFields = this.elForm.querySelectorAll('.input-field');
    this.elInputs = this.elForm.querySelectorAll('.input-field__text');
    this.elLabels = this.elForm.querySelectorAll('.input-field__label');
    this.elStatus = this.elForm.querySelector('.contact-form__status');
    this.elRecaptcha = this.elForm.querySelector('.g-recaptcha');
  }

  errorLabel(err) {
    return `<div class="contact-form__error">${err}</div>`;
  }

  init() {
    this.elSendBtn.addEventListener('click', async (e) => {
      // post request to submit form data to be emailed
      e.preventDefault();
      const res = await Fetch.post(this.elForm.getAttribute('action'), new FormData(this.elForm));
      const body = await res.json();

      // remove errors from all inputs
      if (document.querySelectorAll('.contact-form__error')) {
        document.querySelectorAll('.contact-form__error').forEach(err => err.remove());
      }

      this.elInputs.forEach(input => input.classList.remove('input-field__text--error'));
      this.elLabels.forEach(label => label.classList.remove('input-field__label--error'));
      this.elStatus.classList.remove('contact-form__status--error');
      grecaptcha.reset();

      if (body.errors) {
        // add errors to inputs that need it
        Object.keys(body.errors).forEach((key, index) => {
          const input = this.elForm.querySelector(`.input-field__text[name=${key}]`);
          const label = input.nextElementSibling;
          input.classList.add('input-field__text--error');
          label.classList.add('input-field__label--error');
          label.insertAdjacentHTML('afterend', this.errorLabel(body.errors[key]));
        });
      }

      if (body.recaptcha) {
        this.elRecaptcha.insertAdjacentHTML('afterend', this.errorLabel(body.recaptcha));
      }

      if (res.status === 400 || res.status === 500) {
        this.elStatus.classList.add('contact-form__status--error');
      }

      // display results of post request
      this.elStatus.textContent = body.status;

      // scroll to bottom of form
      this.elForm.scrollTop = this.elForm.offsetHeight;
    });
  }
}

module.exports = new ContactForm();

},{"./Fetch.js":13}],9:[function(require,module,exports){
class CopyLink {
  constructor() {
    this.elLinks = document.querySelectorAll('.copy-link');
  }

  init() {
    this.elLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // copy link content to clipboard
        let temp = document.createElement('input');
        document.body.appendChild(temp);
        temp.value = link.textContent;
        temp.select();
        document.execCommand('copy');
        temp.remove();

        // display copied message
        e.target.classList.add('copy-link--copied');
        setTimeout(() => {
          e.target.classList.remove('copy-link--copied');
        }, 750);
      });
    });
  }
}

module.exports = new CopyLink();

},{}],10:[function(require,module,exports){
class CrossFader {
  constructor() {
    this.elContainer = document.querySelector('.cross-fader');
    this.elImages = this.elContainer.querySelectorAll('.cross-fader__image');
  }

  init() {
    // load top two images
    this.loadImage(this.elImages[this.elImages.length - 1]);
    this.loadImage(this.elImages[this.elImages.length - 2]);

    // ensures that top two images will always be loaded at the top
    setInterval(() => {
      this.loadImage(this.elContainer.querySelector(':nth-last-child(3)'));
      this.elContainer.lastChild.style.opacity = 0;
    }, 4000);

    // event listener for when image fades out
    this.elImages.forEach(image => {
      image.addEventListener('transitionend', () => {
        // insert image that just faded out to the bottom
        this.elContainer.insertBefore(image, this.elContainer.firstChild);

        // make it visible for when it's at the front again
        image.style.opacity = 1;
      });
    });
  }

  loadImage(image) {
    if (image.getAttribute('data-src')) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.addEventListener('load', () => image.removeAttribute('data-src'));
    }
  }
}

module.exports = new CrossFader();

},{}],11:[function(require,module,exports){
const Fetch = require('./Fetch.js');
const { BASE_URL, PAGE_ID, ACCESS_TOKEN } = require('./facebookAPI.js');
const AOS = require('AOS');

class FacebookReviews {
  constructor(reviewCount) {
    this.elLoader = document.querySelector('.loader');
    this.elContainer = document.querySelector('.review-container');
    this.reviewCount = reviewCount;
  }

  async render(urls, cb) {
    const reviewCount = urls.length;
    const reviewCountHalf = Math.floor(reviewCount / 2);

    // append half of the reviews to the first column
    for (let i = 0; i < reviewCountHalf; i++) {
      this.elContainer.firstChild.insertAdjacentHTML('beforeEnd', this.reviewTemplate(urls[i]));
    }

    // append half of the reviews to the second column
    for (let i = reviewCountHalf; i < reviewCount; i++) {
      this.elContainer.lastChild.insertAdjacentHTML('beforeEnd', this.reviewTemplate(urls[i]));
    }

    // embed social plugins and run callback when done
    FB.XFBML.parse(this.elContainer, cb);
  }

  reviewTemplate(url) {
    return `
    <div class="review" data-aos="fade-down" data-aos-offset="200">
      <div class="fb-post" data-href=${url} data-width="auto"></div>
    </div>
    `;
  }

  showContainer() {
    this.elContainer.style.display = 'flex';
  }

  hideLoader() {
    this.elLoader.style.display = 'none';
  }

  buildUrls(ratings, ratingsOpenGraph) {
    let reviews = [];
    for (let i = 0; i < ratings.length; i++) {
      if (ratingsOpenGraph[i].open_graph_story.data.review_text) {
        const userId = ratings[i].reviewer.id;
        const postId = ratingsOpenGraph[i].open_graph_story.id;
        reviews.push(`https://www.facebook.com/${userId}/posts/${postId}`);
      }
    }

    return reviews.slice(0, this.reviewCount);
  }

  getRatings() {
    return Fetch.get(`${BASE_URL}/${PAGE_ID}/ratings?access_token=${ACCESS_TOKEN}`);
  }

  getRatingsOpenGraph() {
    return Fetch.get(`${BASE_URL}/${PAGE_ID}/ratings?access_token=${ACCESS_TOKEN}&fields=open_graph_story`);
  }
}

module.exports = new FacebookReviews(4);

},{"./Fetch.js":13,"./facebookAPI.js":18,"AOS":1}],12:[function(require,module,exports){
const Fetch = require('./Fetch.js');
const { BASE_URL, PAGE_ID, ACCESS_TOKEN } = require('./facebookAPI.js');

class FacebookStars {
  async render(rating) {
    const sheet = window.document.styleSheets[0];
    sheet.insertRule(`[data-aos="fill-stars"].aos-animate { width: ${rating}; }`, 1);
  }

  async getRating() {
    const rating = await Fetch.get(`${BASE_URL}/${PAGE_ID}?access_token=${ACCESS_TOKEN}&fields=overall_star_rating`);
    return `${(rating.overall_star_rating / 5) * 100}%`;
  }
}

module.exports = new FacebookStars();

},{"./Fetch.js":13,"./facebookAPI.js":18}],13:[function(require,module,exports){
class Fetch {
  async get(url) {
    return await(await fetch(url)).json();
  }

  async post(url, data) {
    return await fetch(url, {
      method: 'POST',
      body: data,
    });
  }
}

module.exports = new Fetch();

},{}],14:[function(require,module,exports){
const scroll = require('scroll');
const LazyLoad = require('vanilla-lazyload');

class ImageSlider {
  constructor(frames = 60, time = 1000) {
    this.elSlider = document.querySelector('.image-slider__scroll');
    this.elImage = document.querySelector('.image-slider__image');
    this.elLeftControl = document.querySelector('.image-slider__left-control');
    this.elRightControl = document.querySelector('.image-slider__right-control');
    this.frames = frames;
    this.time = time;
  }

  // value needed to adjust scrollLeft so image is horizontally centered
  get centerAdjust() {
    return (this.elSlider.offsetWidth - this.elImage.offsetWidth) / 2;
  }

  // returns image number being viewed as a float e.g. if 2nd image is centered it will return 2
  get imageNumber() {
    let imageNumber = (this.elSlider.scrollLeft + this.centerAdjust) / this.elImage.offsetWidth;

    // if image being viewed is nearly centered assume that the image number is centered
    return (Math.abs(imageNumber - Math.round(imageNumber)) < 0.05) ? Math.round(imageNumber) : imageNumber;
  }

  init() {
    const lazy = new LazyLoad({
      container: this.elSlider,
      threshold: this.elImage.offsetWidth,
    });

    this.elSlider.scrollLeft = this.calcScrollLeft(1);

    this.elLeftControl.addEventListener('click', () => {
      // if slider isn't at beginning
      if (this.elSlider.scrollLeft != 0) {
        // calculate image number of previous image
        const prevImage = this.prevImageNumber(this.imageNumber);

        // set scroll left of the slider to center new image
        scroll.left(this.elSlider, this.calcScrollLeft(prevImage));
      }
    });

    this.elRightControl.addEventListener('click', () => {
      // if slider hasn't reached end
      if (this.elSlider.scrollLeft != (this.elSlider.scrollWidth - this.elSlider.offsetWidth)) {
        // calculate image number of next image
        const nextImage = this.nextImageNumber(this.imageNumber);

        // set scroll left of the slider to center new image
        scroll.left(this.elSlider, this.calcScrollLeft(nextImage));
      }
    });
  }

  prevImageNumber(imageNumber) {
    return (imageNumber % 1 == 0) ? imageNumber - 1 : Math.floor(imageNumber);
  }

  nextImageNumber(imageNumber) {
    return (imageNumber % 1 == 0) ? imageNumber + 1 : Math.ceil(imageNumber);
  }

  calcScrollLeft(imageNumber) {
    return (imageNumber * this.elImage.offsetWidth) - this.centerAdjust;
  }

  async animate(start, end) {
    const distance = end - start;
    const delta = Math.floor(distance / this.frames);
    const ticker = Math.floor(this.time / this.frames);
    let currentFrame = 0;

    console.log(this.elSlider.scrollLeft + distance);

    let myTimer = setInterval(() => {
      //make sure the end of the animation has not been reached
      if (currentFrame < this.frames) {
        this.elSlider.scrollLeft += delta;
      } else {
        // the end of the animation has been reached so stop the interval
        console.log(this.elSlider.scrollLeft);
        clearInterval(myTimer);
      }

      currentFrame++;
    }, ticker);
  }
}

module.exports = new ImageSlider();

},{"scroll":6,"vanilla-lazyload":7}],15:[function(require,module,exports){
const autosize = require('autosize');

class InputField {
  constructor() {
    this.elInputs = document.querySelectorAll('.input-field__text');
    this.elTextAreas = document.querySelectorAll('.input-field__text--textarea');
  }

  init() {
    this.elInputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.nextElementSibling.classList.add('input-field__label--active');
      });
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.nextElementSibling.classList.remove('input-field__label--active');
        }
      });
    });

    autosize(this.elTextAreas);
  }
}

module.exports = new InputField();

},{"autosize":2}],16:[function(require,module,exports){
class Modal {
  constructor() {
    this.elModal = document.querySelector('.modal');
    this.elBtn = document.querySelector('.js-btn-contact');
    this.elClose = document.querySelector('.modal__close');
  }

  init() {
    this.elBtn.addEventListener('click', () => {
      this.elModal.style.display = 'block';
    });

    window.addEventListener('click', (e) => {
      if (e.target == this.elModal) {
        this.elModal.style.display = 'none';
      }
    });

    this.elClose.addEventListener('click', () => {
      this.elModal.style.display = 'none';
    });
  }
}

module.exports = new Modal();

},{}],17:[function(require,module,exports){
class Nav {
  constructor() {
    this.elHamburgerMenu = document.querySelector('.hamburger-menu');
    this.hasSubItem = document.querySelectorAll('.nav__item--has-sub');
  }

  toggleHamburgerMenu() {
    // click hamburger menu -> toggles primary-nav (small screens)
    this.elHamburgerMenu.addEventListener('click', () => {
      this.elHamburgerMenu.classList.toggle('hamburger-menu--is-active');
    });
  }

  toggleSubNav() {
    // click nav item with sub nav -> toggles sub-nav and underline (small screens)
    this.hasSubItem.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('nav__item--is-active');
        item.querySelector('.nav__link').classList.toggle('nav__link--underline');
      });
    });
  }

  init() {
    this.toggleHamburgerMenu();
    this.toggleSubNav();
  }
}

module.exports = new Nav();

},{}],18:[function(require,module,exports){
module.exports = {
  BASE_URL: 'https://graph.facebook.com',
  ACCESS_TOKEN: 'EAAYYSRcOKvcBAARSx9lIbGSE3Cj8X9BrvxAKeUDgxMN9cObKSinPraTDicZBT1vZAYsnIvsU5bDO5nX9g66B5xsFW5wRV7jxREtB52eumRG0swCZB3oe1vzjJhf4XpgtLUIhcIQRZCv9OHpidViI7q1XbjTQwDQgDZBtk1buRdgZDZD',
  PAGE_ID: '882543461878481',
};

},{}],19:[function(require,module,exports){
const Nav = require('./Nav.js');
const AOS = require('aos');
const lscache = require('lscache');

document.addEventListener('DOMContentLoaded', async () => {
  AOS.init();
  Nav.init();
  if (document.querySelector('.date')) {
    document.querySelector('.date').textContent = (new Date()).getFullYear();
  }

  if (document.querySelector('.input-field')) {
    const InputField = require('./InputField.js');
    InputField.init();
  }

  if (document.querySelector('.modal')) {
    const Modal = require('./Modal.js');
    Modal.init();
  }

  if (document.querySelector('.contact-form')) {
    const ContactForm = require('./ContactForm.js');
    ContactForm.init();
  }

  if (document.querySelector('.copy-link')) {
    const CopyLink = require('./CopyLink.js');
    CopyLink.init();
  }

  if (document.querySelector('.image-slider')) {
    const ImageSlider = require('./ImageSlider.js');
    ImageSlider.init();
  }

  if (document.querySelector('.cross-fader')) {
    const CrossFader = require('./CrossFader.js');
    CrossFader.init();
  }

  if (document.body.classList.contains('home')) {
    const FacebookAPI = require('./FacebookAPI.js');
    const FacebookStars = require('./FacebookStars.js');
    const FacebookReviews = require('./FacebookReviews.js');
    let cache = lscache.get('facebook');
    if (cache) {
      var { urls, rating } = cache;
      urls = JSON.parse(urls);
      console.log('in cache');
    } else {
      var [rating, ratings, ratingsOpenGraph] = await Promise.all([
        FacebookStars.getRating(),
        FacebookReviews.getRatings(),
        FacebookReviews.getRatingsOpenGraph(),
      ]);
      var urls = FacebookReviews.buildUrls(ratings.data, ratingsOpenGraph.data);
      lscache.set('facebook', { urls: JSON.stringify(urls), rating: rating }, 60);
      console.log('not in cache');
    }

    FacebookReviews.render(urls, () => {
      FacebookReviews.hideLoader();
      FacebookReviews.showContainer();
      FacebookStars.render(rating);
      setTimeout(() => AOS.refreshHard(), 1000);
    });
  }
});

},{"./ContactForm.js":8,"./CopyLink.js":9,"./CrossFader.js":10,"./FacebookAPI.js":18,"./FacebookReviews.js":11,"./FacebookStars.js":12,"./ImageSlider.js":14,"./InputField.js":15,"./Modal.js":16,"./Nav.js":17,"aos":1,"lscache":4}]},{},[19]);
