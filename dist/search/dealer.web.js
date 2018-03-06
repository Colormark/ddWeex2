// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=89)}({0:function(e,t,n){"use strict";function r(e,t){var n=t.body,r=t.onSuccess,i=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){if(void 0!==e&&e.__status__){var t=e.__status__,n=e.__message__;A===t?r&&r.call(o,n):O===t&&i&&i.call(o,n)}else i&&i.call("-1","")}):i&&i.call("-1","")}function i(e,t){var n=t.body,r=t.onSuccess,i=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){void 0!==e?"0"===e.errorCode?r&&r.call(o,e.result):i&&i.call(o,e.result):i&&i.call("-1","")}):i&&i.call("-1","")}function o(e,t,n){var r=Object.create(null);if("string"!=typeof e||0===e.length)return r;t=t||"&",n=n||"=";for(var i=e.split(t),o=0,a=i.length;o<a;o++){var u=i[o].split(n),c=u[0].trim(),s="";u.length>=3?function(){u.splice(0,1);var e=u.length-1;u.forEach(function(t,r){t=t.trim(),s+=r===e?t:t+n})}():s=u[1].trim();var l=r[c];if(l)if(Array.isArray(l))l.push(decodeURIComponent(s));else{var f=l;r[c]=new Array,r[c].push(f),r[c].push(decodeURIComponent(s))}else r[c]=decodeURIComponent(s)}return r}function a(e,t,n){if(t=t||"&",n=n||"=",null!==e&&"object"===(void 0===e?"undefined":I(e))){for(var r=Object.keys(e),i=r.length,o=i-1,a="",u=0;u<i;u++){var c=r[u],s=e[c],l=c+n;if(Array.isArray(s)){for(var f=s.length,d=f-1,p=0;p<f;++p)a+=l+decodeURIComponent(s[p]),p<d&&(a+=t);f&&u<o&&(a+=t)}else a+=l+decodeURIComponent(s),u<o&&(a+=t)}return a}return""}function u(e,t){return e+"?"+L.stringify(t)}function c(e,t){var n={hash:null,search:null};if(!e)return{};var r=e.indexOf("?");if(-1===r)return{};var i=e.indexOf("#");i>-1?(n.hash=e.slice(i),n.search=e.slice(r,i)):n.search=e.slice(r);var o=n.search.slice(1),a=L.parse(o);return"string"==typeof t&&t.length>0?a[t]:a}function s(e){if(Z){if("Vue"===H)return weex.requireModule(e);var t="@weex-module/"+e;return __weex_require__(t)}if("Vue"===H)return weex.requireModule(e)}function l(e){var t="00"+e;return t.substring(t.length-2)}function f(e){var t=window._WebViewJavascriptBridge;if(!t)throw"runtime and bridge are not ready";var n=e.body,r=e.onSuccess,i=e.onFail,o=e.context;t.callHandler("exec",n,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof r&&r.call(o,e.result):"function"==typeof i&&i.call(o,e.result)),"function"==typeof i&&i.call("-1","")})}function d(e){var t=e.body,n=e.onSuccess,r=e.onFail,i=e.context,o=t.plugin,a=t.action,u=t.args;(0,window.WebViewJavascriptBridgeAndroid)(o,a,u,n,r,i)}function p(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function h(e){if(ae)window._WebViewJavascriptBridge?f(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){f(e)},!1);else if(oe){var t=window;t.nuva&&(void 0===t.nuva.isReady||t.nuva.isReady)?(ue||p(),d(e)):document.addEventListener("runtimeready",function(){ue||p(),d(e)},!1)}}function v(e){var t=se||function(){};le?i(t,e):fe?r(t,e):h(e)}function g(e,t){for(var n=t||0,r=e.length-n,i=new Array(r);r--;)i[r]=e[r+n];return i}function m(e,t){return function(n){n||(n={});var r=n.onSuccess,i=n.onFail;delete n.onSuccess,delete n.onFail,delete n.onCancel,v({body:{plugin:e,action:t,args:n},onSuccess:r,onFail:i})}}function y(e,t){var n=Object.create(null);return t.forEach(function(t){n[t]=m(e,t)}),n}function b(e){var t=Object.create(null);for(var n in e)for(var r=n.split("."),i=e[n],o=null,a=0,u=r.length;;)if(o){if(u-1===a){o[r[a]]=y(n,i);break}if(o[r[a]])a++;else if(o[r[a]]={},o=o[r[a]],++a>u)break}else{if(1===u){var c=!1,s=t[r[a]],l=y(n,i);for(var f in s)if(s.hasOwnProperty(f)){c=!0;break}if(c)for(var d in l)s[d]=l[d];else t[r[a]]=y(n,i);break}if(t[r[a]]){o=t[r[a]],a++;continue}t[r[a]]={},o=t[r[a]],a++}return t}function x(e){return function(t){v({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof t&&t(e)},onFail:function(){},context:null})}}function w(e){x("getModules")(e)}function _(e,t,n){if(!t)return void ve.ready(function(){e(null)});ve.ready(function(){var r=ve.apis.runtime.permission,i=t||{},o=n||null;i.onSuccess=function(t){e(null,t)},i.onFail=function(t){"function"==typeof o?o(t):e(t,null)},r.requestJsApis(i)})}function S(){me&&me.length>0&&(me.forEach(function(e){e()}),me.length=0)}function k(){var e={apis:{},config:function(e){if(!e)return void re(["config is undefined,you must configure Dingtalk parameters"],ie.WARNING);ge=e},init:function(){me=[],ve.init(),ve.ready(function(){be=ve.isReady,e.apis=ve.apis?ve.apis:{},S()})},ready:function(e){if(!e||"function"!=typeof e)return void re(["callback is undefined"],ie.WARNING);be?_(e,ge,ye):me&&me.push(function(e){return function(){_(e,ge,ye)}}(e))},error:function(e){"function"==typeof e&&(ye=e)},EventEmitter:ve.EventEmitter};return e}function T(e){e.on=function(e,t,n){document.addEventListener(e,t,n)},e.off=function(e,t,n){document.removeEventListener(e,t,n)}}function C(e){e.on=ve.on,e.off=ve.off}var A="1",O="2",I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},L={stringify:a,parse:o},E={format:u,parse:c},F=function(){var e={};if("undefined"!=typeof weex){var t=weex.config,n=t.env;if(e.platform=n.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:t.bundleUrl,originalUrl:t.originalUrl},e.appVersion=n.appVersion,e.appName=n.appName;else{var r=location.href,i=E.parse(r,"dd_wx_tpl"),o=E.parse(r,"_wx_tpl");e.dingtalk={bundleUrl:i||o||"",originalUrl:r}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName,e.appVersion=navigator.appVersion,e.dingtalk={bundleUrl:__weex_options__.bundleUrl,originalUrl:__weex_options__.originalUrl};else{e.platform="Web";var a=location.href,u=E.parse(a,"dd_wx_tpl"),c=E.parse(a,"_wx_tpl");e.dingtalk={bundleUrl:u||c||"",originalUrl:a}}e.bundleFrameworkType="Rax"}return e}(),R="Web"===F.platform,U="iOS"===F.platform,M="android"===F.platform,W=U||M,j=F.dingtalk,P=F.bundleFrameworkType,D=j.bundleUrl,V=j.originalUrl,B=void 0;R&&(B=window.navigator.userAgent.toLowerCase());var G=function(){return W?"DingTalk"===F.appName||"com.alibaba.android.rimet"===F.appName:B&&B.indexOf("dingtalk")>-1}(),J=function(){return R?B&&/iphone|ipad|ipod|ios/.test(B):null}(),z=function(){return R?B&&B.indexOf("android")>-1:null}(),q=function(){if(R){var e=B.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);return null===e&&(e=B.match(/dingtalk\/([a-zA-Z0-9.-]+)/)),e&&e[1]}return F.appVersion}(),$={isDingtalk:G,isWeb:R,isWebiOS:J,isWebAndroid:z,isWeex:W,isWeexiOS:U,isWeexAndroid:M,bundleFrameworkType:P,bundleUrl:D,originalUrl:V,version:q,platform:function(){var e=void 0;return G?z?e="web.android":J?e="web.ios":M?e="weex.android":U&&(e="weex.ios"):e="not.dingtalk",e}()},H=$.bundleFrameworkType,Z=$.isWeex,K=(s("timer"),{LOG:"LOG",INFO:"INFO",WARNING:"WARNING",ERROR:"ERROR"}),Q=function(e){var t,n,r,i,o=l(e.time.getHours())+":"+l(e.time.getMinutes())+":"+l(e.time.getSeconds());switch(e.type){case K.LOG:(t=console).log.apply(t,["time:"+o+" | log: "].concat(N(e.logArr)));break;case K.INFO:(n=console).info.apply(n,["time:"+o+" | info: "].concat(N(e.logArr)));break;case K.ERROR:(r=console).error.apply(r,["time:"+o+" | error: "].concat(N(e.logArr)));break;case K.WARNING:(i=console).warn.apply(i,["time:"+o+" | warning: "].concat(N(e.logArr)))}},X=function(e){Q=e},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.LOG;Q({type:t,logArr:e,time:new Date})},ee={log:Y,setLog:X,LogType:K},te=$,ne=s,re=ee.log,ie=ee.LogType,oe=null,ae=null,ue=!1;if(te.isWeb){var ce=window.navigator.userAgent.toLowerCase();oe=ce&&ce.indexOf("android")>-1,ae=ce&&/iphone|ipad|ipod|ios/.test(ce)}var se=null,le=te.isWeexiOS,fe=te.isWeexAndroid;te.isWeex&&(se=ne("nuvajs-exec").exec);var de={},pe={on:function(e,t){var n=de[e];n?n.push(t):de[e]=[],n||de[e].push(t)},off:function(e,t){var n=de[e];if(!n)return!1;if(!e&&!t)return de={},!0;if(e&&!t)return de[e]=null,!0;for(var r=void 0,i=n.length;i--;)if((r=n[i])===t||r.fun===t){n.splice(i,1);break}return!0},once:function(e,t){function n(){pe.off(e,n),t.apply(this,arguments)}n.fun=t,pe.on(e,n)},emit:function(e){if("string"==typeof e){var t=de[e],n=g(arguments,1);if(t)for(var r=0,i=t.length;r<i;r++){var o=t[r];o.apply(this,n)}}}},he={};te.isWeex&&(he=ne("globalEvent"));var ve={getModules:null,isReady:!1,runtime:{info:x("info"),_interceptBackButton:x("interceptBackButton"),_interceptNavTitle:x("interceptNavTitle"),_recoverNavTitle:x("recoverNavTitle"),_getModules:x("getModules")},init:function(){w(function(e){e&&(ve.isReady=!0,ve.apis=b(e),pe.emit("__ship_ready__"))})},ready:function(e){ve.isReady?"function"==typeof e&&e():"function"==typeof e&&pe.once("__ship_ready__",function(){e()})},on:function(e,t){he.addEventListener(e,function(e){var n={preventDefault:function(){re(["does not support preventDefault"],ie.WARNING)},detail:e};t.call(this,n)})},off:he.removeEventListener,EventEmitter:pe},ge=null,me=null,ye=null,be=!1,xe=!0,we={},_e=te.isDingtalk,Se=te.isWeex,ke=te.isWeb;re(["current environment: "+te.platform]),_e?xe&&(xe=!1,Se?we=function(){var e=k();return C(e),e}():ke&&(we=function(){var e=k();return T(e),e}()),we.init()):re(["can only open the page be Dingtalk Container"],ie.WARNING);var Te=we;e.exports=Te},1:function(e,t,n){"use strict";function r(){var e=Date.parse(new Date).toString();return e=e.substr(0,10)}function i(e){var t=e,n=r();return G+t+"?Action="+t+"&AppId="+J+"&SecretKey="+z+"&TimeStamp="+n}function o(e){return encodeURIComponent(C(z,encodeURIComponent(e).toLowerCase()))}function a(e,t){var n=i("dd/getpackage"),r=o(n);D.fetch({method:"POST",body:JSON.stringify({Body:{Url:e}}),url:n+"&Signature="+r},t)}function u(e,t){var n=i("dd/getuserinfo"),r=o(n);D.fetch({method:"POST",body:JSON.stringify({Body:{Code:e}}),url:n+"&Signature="+r},t)}function c(e,t){var n=i("checkin/list"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function s(e,t){var n=i("checkin/getlist"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function l(e,t){var n=i("visit/getlist"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function f(e,t){var n=i("dealer/getlist"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function d(e,t){var n=i("dealer/udlocation"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function p(e,t){var n=i("visit/getdetail"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function h(e,t){var n=i("checkin/cplocalrange"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function v(e,t){var n=i("visit/add"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function g(e,t){var n=i("visit/addother"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function m(e,t){var n=i("visit/getdetail"),r=o(n);D.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function y(e,t,n){j.default.ready(function(){j.default.apis.biz.util.openLink({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function b(e,t,n){j.default.ready(function(){j.default.apis.biz.navigation.replace({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function x(e,t){j.default.ready(function(){j.default.apis.biz.navigation.close({onSuccess:e,onFail:t})})}function w(e,t){j.default.ready(function(){j.default.apis.biz.navigation.goBack({onSuccess:e,onFail:t})})}function _(e,t,n){B.setItem(e,t,n)}function S(e,t){B.getItem(e,t)}function k(e,t){B.removeItem(e,t)}function T(e,t){(!t||t>5)&&(t=3),V.toast({message:e,duration:t})}function C(e,t){return O(A(I(e),I(t)))}function A(e,t){var n=N(e);n.length>16&&(n=E(n,8*e.length));for(var r=Array(16),i=Array(16),o=0;o<16;o++)r[o]=909522486^n[o],i[o]=1549556828^n[o];var a=E(r.concat(N(t)),512+8*t.length);return L(E(i.concat(a),672))}function O(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="",r=e.length,i=0;i<r;i+=3)for(var o=e.charCodeAt(i)<<16|(i+1<r?e.charCodeAt(i+1)<<8:0)|(i+2<r?e.charCodeAt(i+2):0),a=0;a<4;a++)8*i+6*a>8*e.length?n+=$:n+=t.charAt(o>>>6*(3-a)&63);return n}function I(e){for(var t,n,r="",i=-1;++i<e.length;)t=e.charCodeAt(i),n=i+1<e.length?e.charCodeAt(i+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),i++),t<=127?r+=String.fromCharCode(t):t<=2047?r+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?r+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(r+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return r}function N(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(var n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return t}function L(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function E(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n=Array(80),r=1732584193,i=-271733879,o=-1732584194,a=271733878,u=-1009589776,c=0;c<e.length;c+=16){for(var s=r,l=i,f=o,d=a,p=u,h=0;h<80;h++){n[h]=h<16?e[c+h]:M(n[h-3]^n[h-8]^n[h-14]^n[h-16],1);var v=U(U(M(r,5),F(h,i,o,a)),U(U(u,n[h]),R(h)));u=a,a=o,o=M(i,30),i=r,r=v}r=U(r,s),i=U(i,l),o=U(o,f),a=U(a,d),u=U(u,p)}return Array(r,i,o,a,u)}function F(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function R(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function U(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function M(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.jsapifun=a,t.getUserId=u,t.getCheckinList=c,t.getVisitList=s,t.dealerVisitList=l,t.getDealerList=f,t.setUdlocation=d,t.getVisitDealer=p,t.getCheckin=h,t.visibleAddFun=v,t.visibleAddotherFun=g,t.getVisibleDetail=m,t.openLink=y,t.replaceLink=b,t.closeLink=x,t.goBackLink=w,t.setItem=_,t.getItem=S,t.removeItem=k,t.toast=T;var W=n(0),j=function(e){return e&&e.__esModule?e:{default:e}}(W),P=(n(7),weex.requireModule("meta")),D=weex.requireModule("stream"),V=weex.requireModule("modal"),B=weex.requireModule("storage"),G="https://crm-api.360che.com/",J="bs_800f0pvf7wwnccft7jei",z="8821105875dd2199970820d87cf5ee0d",q="https://s.kcimg.cn/dingtalk/js/v.2.1/";P&&P.setViewport({width:400});var $="="},109:function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"\n.search[data-v-2a690399]{\n  background-color: #F3F4F5;\n}\n.header-box[data-v-2a690399]{\n  height: 64px;\n  background-color: #F3F4F5;\n}\n.soso[data-v-2a690399]{\n  height: 40px;\n  background-color: #fff;\n  width: 368px;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  border-bottom-left-radius : 4px;\n  border-bottom-right-radius : 4px;\n  border-top-left-radius : 4px;\n  border-top-right-radius : 4px;\n  flex-direction: row;\n  align-items: center;\n}\n.img[data-v-2a690399]{\n  margin-left: 11px;\n  margin-right: 11px;\n}\n.input[data-v-2a690399]{\n  height: 40px;\n  line-height: 40px;\n  width: 350px;\n  font-size: 16px;\n  placeholder-color: #A1A9B3;\n  color: #17181A;\n}\n.item[data-v-2a690399]{\n  background-color: #fff;\n  padding-left: 16px;\n  height: 48px;\n}\n.box[data-v-2a690399]{\n  width: 384px;\n  height: 48px;\n  line-height: 48px;\n  padding-right: 16px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(23,24,26,0.08);\n  justify-content: flex-start;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.box[data-v-2a690399]:last-child{\n  border-top-width: none;\n}\n.text[data-v-2a690399]{\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  color: #17181A;\n}\n.selected[data-v-2a690399]{\n  color: #1571E5;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n}\n",""])},127:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("list",{attrs:{loadmoreoffset:"10"},on:{loadmore:e.fetch}},[n("header",[n("div",{staticClass:"header-box"},[n("div",{staticClass:"soso"},[n("image",{staticClass:"img",staticStyle:{width:"18px",height:"18px"},attrs:{src:"https://s.kcimg.cn/dingtalk/image/soso.png"}}),e._v(" "),n("input",{staticClass:"input",attrs:{type:"text",placeholder:"搜索经销商",value:""},on:{input:e.search}})])])]),e._v(" "),e._l(e.lists,function(t,r){return n("cell",{key:r,staticClass:"item"},[n("div",{staticClass:"box"},[n("text",{class:[1==t.className?"selected":"text"],on:{click:function(t){e.changed(r)}}},[e._v(e._s(t.DealerName))])])])})],2),e._v(" "),e.shopShow?n("shopView"):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},145:function(e,t,n){var r=n(109);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(4)("dcb7bbcc",r,!1)},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var c=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:o,options:u}}},4:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(g){var o=p++;r=d||(d=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(8),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=s(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],u=l[a.id];u.refs--,n.push(u)}t?(i=s(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var u=n[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete l[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},49:function(e,t,n){n(145);var r=n(3)(n(67),n(127),"data-v-2a690399",null);r.options.__file="/Users/houyaohui/wwwroot/test/ddweex2/src/search/dealer.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] dealer.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},5:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?h=p.concat(h):g=-1,h.length&&u())}function u(){if(!v){var e=i(a);v=!0;for(var t=h.length;t;){for(p=h,h=[];++g<t;)p&&p[g].run();g=-1,t=h.length}p=null,v=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],v=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||v||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},6:function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[c]=r,u(c),c++}function i(e){delete s[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(l)setTimeout(a,0,e);else{var t=s[e];if(t){l=!0;try{o(t)}finally{i(e),l=!1}}}}if(!e.setImmediate){var u,c=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(a,0,e)}}(),d.setImmediate=r,d.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(9),n(5))},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(1);t.default={data:function(){return{dduserid:0,page:1,nextIndex:-1,lists:[],PageCount:0,searchValue:"",dealerSearch:!1}},mounted:function(){i.default.ready(function(){i.default.apis.biz.navigation.setTitle({title:"选择经销商"})})},created:function(){var e=this;(0,o.getItem)("DingTalkUserId",function(t){e.dduserid=t.data,e.search({value:""})}),(0,o.getItem)("DealerSearch",function(t){"ok"==t.data&&(e.dealerSearch=!0,(0,o.removeItem)("DealerSearch"))}),(0,o.removeItem)("StoreInfo")},methods:{search:function(e,t){var n=this;if(this.dduserid){this.searchValue=e.value;var r=t||1;(0,o.getDealerList)(JSON.stringify({Body:{DingTalkUserId:this.dduserid,DealerName:e.value},Paged:{PageIndex:r,PageSize:20}}),function(e){t||(n.lists=[]);var r=JSON.parse(e.data);r.Body.forEach(function(e){n.lists.push(e)}),n.PageCount=r.Paged.PageCount})}},changed:function(e){var t=this;this.SomeOpen||(this.SomeOpen=!0,-1!==this.nextIndex&&this.$set(this.lists[this.nextIndex],"className",!1),this.nextIndex=e,this.lists[e].className||this.$set(this.lists[e],"className",!0),(0,o.setItem)("DealerDetail",JSON.stringify(this.lists[e]),function(e){t.dealerSearch?(0,o.goBackLink)():("android"===weex.config.env.platform.toLowerCase()?setTimeout(o.closeLink,200):(0,o.closeLink)(),(0,o.openLink)("search/shop",function(e){t.SomeOpen=!1},function(e){(0,o.toast)(e)}))}))},fetch:function(){this.page+=1,this.PageCount>this.page&&this.search({value:this.searchValue},this.page)}}}},7:function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},8:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],u=o[1],c=o[2],s=o[3],l={id:e+":"+i,css:u,media:c,sourceMap:s};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},89:function(e,t,n){"use strict";var r=n(49);r.el="#root",new Vue(r)},9:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});