// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=95)}({0:function(e,t,n){"use strict";function r(e,t){var n=t.body,r=t.onSuccess,i=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){if(void 0!==e&&e.__status__){var t=e.__status__,n=e.__message__;T===t?r&&r.call(o,n):A===t&&i&&i.call(o,n)}else i&&i.call("-1","")}):i&&i.call("-1","")}function i(e,t){var n=t.body,r=t.onSuccess,i=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){void 0!==e?"0"===e.errorCode?r&&r.call(o,e.result):i&&i.call(o,e.result):i&&i.call("-1","")}):i&&i.call("-1","")}function o(e,t,n){var r=Object.create(null);if("string"!=typeof e||0===e.length)return r;t=t||"&",n=n||"=";for(var i=e.split(t),o=0,a=i.length;o<a;o++){var u=i[o].split(n),s=u[0].trim(),c="";u.length>=3?function(){u.splice(0,1);var e=u.length-1;u.forEach(function(t,r){t=t.trim(),c+=r===e?t:t+n})}():c=u[1].trim();var l=r[s];if(l)if(Array.isArray(l))l.push(decodeURIComponent(c));else{var d=l;r[s]=new Array,r[s].push(d),r[s].push(decodeURIComponent(c))}else r[s]=decodeURIComponent(c)}return r}function a(e,t,n){if(t=t||"&",n=n||"=",null!==e&&"object"===(void 0===e?"undefined":O(e))){for(var r=Object.keys(e),i=r.length,o=i-1,a="",u=0;u<i;u++){var s=r[u],c=e[s],l=s+n;if(Array.isArray(c)){for(var d=c.length,f=d-1,p=0;p<d;++p)a+=l+decodeURIComponent(c[p]),p<f&&(a+=t);d&&u<o&&(a+=t)}else a+=l+decodeURIComponent(c),u<o&&(a+=t)}return a}return""}function u(e,t){return e+"?"+N.stringify(t)}function s(e,t){var n={hash:null,search:null};if(!e)return{};var r=e.indexOf("?");if(-1===r)return{};var i=e.indexOf("#");i>-1?(n.hash=e.slice(i),n.search=e.slice(r,i)):n.search=e.slice(r);var o=n.search.slice(1),a=N.parse(o);return"string"==typeof t&&t.length>0?a[t]:a}function c(e){if(Z){if("Vue"===H)return weex.requireModule(e);var t="@weex-module/"+e;return __weex_require__(t)}if("Vue"===H)return weex.requireModule(e)}function l(e){var t="00"+e;return t.substring(t.length-2)}function d(e){var t=window._WebViewJavascriptBridge;if(!t)throw"runtime and bridge are not ready";var n=e.body,r=e.onSuccess,i=e.onFail,o=e.context;t.callHandler("exec",n,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof r&&r.call(o,e.result):"function"==typeof i&&i.call(o,e.result)),"function"==typeof i&&i.call("-1","")})}function f(e){var t=e.body,n=e.onSuccess,r=e.onFail,i=e.context,o=t.plugin,a=t.action,u=t.args;(0,window.WebViewJavascriptBridgeAndroid)(o,a,u,n,r,i)}function p(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function v(e){if(ae)window._WebViewJavascriptBridge?d(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){d(e)},!1);else if(oe){var t=window;t.nuva&&(void 0===t.nuva.isReady||t.nuva.isReady)?(ue||p(),f(e)):document.addEventListener("runtimeready",function(){ue||p(),f(e)},!1)}}function h(e){var t=ce||function(){};le?i(t,e):de?r(t,e):v(e)}function g(e,t){for(var n=t||0,r=e.length-n,i=new Array(r);r--;)i[r]=e[r+n];return i}function m(e,t){return function(n){n||(n={});var r=n.onSuccess,i=n.onFail;delete n.onSuccess,delete n.onFail,delete n.onCancel,h({body:{plugin:e,action:t,args:n},onSuccess:r,onFail:i})}}function y(e,t){var n=Object.create(null);return t.forEach(function(t){n[t]=m(e,t)}),n}function b(e){var t=Object.create(null);for(var n in e)for(var r=n.split("."),i=e[n],o=null,a=0,u=r.length;;)if(o){if(u-1===a){o[r[a]]=y(n,i);break}if(o[r[a]])a++;else if(o[r[a]]={},o=o[r[a]],++a>u)break}else{if(1===u){var s=!1,c=t[r[a]],l=y(n,i);for(var d in c)if(c.hasOwnProperty(d)){s=!0;break}if(s)for(var f in l)c[f]=l[f];else t[r[a]]=y(n,i);break}if(t[r[a]]){o=t[r[a]],a++;continue}t[r[a]]={},o=t[r[a]],a++}return t}function w(e){return function(t){h({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof t&&t(e)},onFail:function(){},context:null})}}function x(e){w("getModules")(e)}function _(e,t,n){if(!t)return void he.ready(function(){e(null)});he.ready(function(){var r=he.apis.runtime.permission,i=t||{},o=n||null;i.onSuccess=function(t){e(null,t)},i.onFail=function(t){"function"==typeof o?o(t):e(t,null)},r.requestJsApis(i)})}function k(){me&&me.length>0&&(me.forEach(function(e){e()}),me.length=0)}function C(){var e={apis:{},config:function(e){if(!e)return void re(["config is undefined,you must configure Dingtalk parameters"],ie.WARNING);ge=e},init:function(){me=[],he.init(),he.ready(function(){be=he.isReady,e.apis=he.apis?he.apis:{},k()})},ready:function(e){if(!e||"function"!=typeof e)return void re(["callback is undefined"],ie.WARNING);be?_(e,ge,ye):me&&me.push(function(e){return function(){_(e,ge,ye)}}(e))},error:function(e){"function"==typeof e&&(ye=e)},EventEmitter:he.EventEmitter};return e}function S(e){e.on=function(e,t,n){document.addEventListener(e,t,n)},e.off=function(e,t,n){document.removeEventListener(e,t,n)}}function I(e){e.on=he.on,e.off=he.off}var T="1",A="2",O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},N={stringify:a,parse:o},R={format:u,parse:s},F=function(){var e={};if("undefined"!=typeof weex){var t=weex.config,n=t.env;if(e.platform=n.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:t.bundleUrl,originalUrl:t.originalUrl},e.appVersion=n.appVersion,e.appName=n.appName;else{var r=location.href,i=R.parse(r,"dd_wx_tpl"),o=R.parse(r,"_wx_tpl");e.dingtalk={bundleUrl:i||o||"",originalUrl:r}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName,e.appVersion=navigator.appVersion,e.dingtalk={bundleUrl:__weex_options__.bundleUrl,originalUrl:__weex_options__.originalUrl};else{e.platform="Web";var a=location.href,u=R.parse(a,"dd_wx_tpl"),s=R.parse(a,"_wx_tpl");e.dingtalk={bundleUrl:u||s||"",originalUrl:a}}e.bundleFrameworkType="Rax"}return e}(),U="Web"===F.platform,E="iOS"===F.platform,D="android"===F.platform,M=E||D,j=F.dingtalk,W=F.bundleFrameworkType,B=j.bundleUrl,V=j.originalUrl,P=void 0;U&&(P=window.navigator.userAgent.toLowerCase());var J=function(){return M?"DingTalk"===F.appName||"com.alibaba.android.rimet"===F.appName:P&&P.indexOf("dingtalk")>-1}(),G=function(){return U?P&&/iphone|ipad|ipod|ios/.test(P):null}(),z=function(){return U?P&&P.indexOf("android")>-1:null}(),q=function(){if(U){var e=P.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);return null===e&&(e=P.match(/dingtalk\/([a-zA-Z0-9.-]+)/)),e&&e[1]}return F.appVersion}(),$={isDingtalk:J,isWeb:U,isWebiOS:G,isWebAndroid:z,isWeex:M,isWeexiOS:E,isWeexAndroid:D,bundleFrameworkType:W,bundleUrl:B,originalUrl:V,version:q,platform:function(){var e=void 0;return J?z?e="web.android":G?e="web.ios":D?e="weex.android":E&&(e="weex.ios"):e="not.dingtalk",e}()},H=$.bundleFrameworkType,Z=$.isWeex,K=(c("timer"),{LOG:"LOG",INFO:"INFO",WARNING:"WARNING",ERROR:"ERROR"}),Q=function(e){var t,n,r,i,o=l(e.time.getHours())+":"+l(e.time.getMinutes())+":"+l(e.time.getSeconds());switch(e.type){case K.LOG:(t=console).log.apply(t,["time:"+o+" | log: "].concat(L(e.logArr)));break;case K.INFO:(n=console).info.apply(n,["time:"+o+" | info: "].concat(L(e.logArr)));break;case K.ERROR:(r=console).error.apply(r,["time:"+o+" | error: "].concat(L(e.logArr)));break;case K.WARNING:(i=console).warn.apply(i,["time:"+o+" | warning: "].concat(L(e.logArr)))}},X=function(e){Q=e},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.LOG;Q({type:t,logArr:e,time:new Date})},ee={log:Y,setLog:X,LogType:K},te=$,ne=c,re=ee.log,ie=ee.LogType,oe=null,ae=null,ue=!1;if(te.isWeb){var se=window.navigator.userAgent.toLowerCase();oe=se&&se.indexOf("android")>-1,ae=se&&/iphone|ipad|ipod|ios/.test(se)}var ce=null,le=te.isWeexiOS,de=te.isWeexAndroid;te.isWeex&&(ce=ne("nuvajs-exec").exec);var fe={},pe={on:function(e,t){var n=fe[e];n?n.push(t):fe[e]=[],n||fe[e].push(t)},off:function(e,t){var n=fe[e];if(!n)return!1;if(!e&&!t)return fe={},!0;if(e&&!t)return fe[e]=null,!0;for(var r=void 0,i=n.length;i--;)if((r=n[i])===t||r.fun===t){n.splice(i,1);break}return!0},once:function(e,t){function n(){pe.off(e,n),t.apply(this,arguments)}n.fun=t,pe.on(e,n)},emit:function(e){if("string"==typeof e){var t=fe[e],n=g(arguments,1);if(t)for(var r=0,i=t.length;r<i;r++){var o=t[r];o.apply(this,n)}}}},ve={};te.isWeex&&(ve=ne("globalEvent"));var he={getModules:null,isReady:!1,runtime:{info:w("info"),_interceptBackButton:w("interceptBackButton"),_interceptNavTitle:w("interceptNavTitle"),_recoverNavTitle:w("recoverNavTitle"),_getModules:w("getModules")},init:function(){x(function(e){e&&(he.isReady=!0,he.apis=b(e),pe.emit("__ship_ready__"))})},ready:function(e){he.isReady?"function"==typeof e&&e():"function"==typeof e&&pe.once("__ship_ready__",function(){e()})},on:function(e,t){ve.addEventListener(e,function(e){var n={preventDefault:function(){re(["does not support preventDefault"],ie.WARNING)},detail:e};t.call(this,n)})},off:ve.removeEventListener,EventEmitter:pe},ge=null,me=null,ye=null,be=!1,we=!0,xe={},_e=te.isDingtalk,ke=te.isWeex,Ce=te.isWeb;re(["current environment: "+te.platform]),_e?we&&(we=!1,ke?xe=function(){var e=C();return I(e),e}():Ce&&(xe=function(){var e=C();return S(e),e}()),xe.init()):re(["can only open the page be Dingtalk Container"],ie.WARNING);var Se=xe;e.exports=Se},1:function(e,t,n){"use strict";function r(){var e=Date.parse(new Date).toString();return e=e.substr(0,10)}function i(e){var t=e,n=r();return J+t+"?Action="+t+"&AppId="+G+"&SecretKey="+z+"&TimeStamp="+n}function o(e){return encodeURIComponent(I(z,encodeURIComponent(e).toLowerCase()))}function a(e,t){var n=i("dd/getpackage"),r=o(n);B.fetch({method:"POST",body:JSON.stringify({Body:{Url:e}}),url:n+"&Signature="+r},t)}function u(e,t){var n=i("dd/getuserinfo"),r=o(n);B.fetch({method:"POST",body:JSON.stringify({Body:{Code:e}}),url:n+"&Signature="+r},t)}function s(e,t){var n=i("checkin/list"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function c(e,t){var n=i("checkin/getlist"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function l(e,t){var n=i("visit/getlist"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function d(e,t){var n=i("dealer/getlist"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function f(e,t){var n=i("dealer/udlocation"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function p(e,t){var n=i("visit/getdetail"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function v(e,t){var n=i("checkin/cplocalrange"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function h(e,t){var n=i("visit/add"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function g(e,t){var n=i("visit/addother"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function m(e,t){var n=i("visit/getdetail"),r=o(n);B.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function y(e,t,n){j.default.ready(function(){j.default.apis.biz.util.openLink({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function b(e,t,n){j.default.ready(function(){j.default.apis.biz.navigation.replace({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function w(e,t){j.default.ready(function(){j.default.apis.biz.navigation.close({onSuccess:e,onFail:t})})}function x(e,t){j.default.ready(function(){j.default.apis.biz.navigation.goBack({onSuccess:e,onFail:t})})}function _(e,t,n){P.setItem(e,t,n)}function k(e,t){P.getItem(e,t)}function C(e,t){P.removeItem(e,t)}function S(e,t){(!t||t>5)&&(t=3),V.toast({message:e,duration:t})}function I(e,t){return A(T(O(e),O(t)))}function T(e,t){var n=L(e);n.length>16&&(n=R(n,8*e.length));for(var r=Array(16),i=Array(16),o=0;o<16;o++)r[o]=909522486^n[o],i[o]=1549556828^n[o];var a=R(r.concat(L(t)),512+8*t.length);return N(R(i.concat(a),672))}function A(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="",r=e.length,i=0;i<r;i+=3)for(var o=e.charCodeAt(i)<<16|(i+1<r?e.charCodeAt(i+1)<<8:0)|(i+2<r?e.charCodeAt(i+2):0),a=0;a<4;a++)8*i+6*a>8*e.length?n+=$:n+=t.charAt(o>>>6*(3-a)&63);return n}function O(e){for(var t,n,r="",i=-1;++i<e.length;)t=e.charCodeAt(i),n=i+1<e.length?e.charCodeAt(i+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),i++),t<=127?r+=String.fromCharCode(t):t<=2047?r+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?r+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(r+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return r}function L(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(var n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return t}function N(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function R(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n=Array(80),r=1732584193,i=-271733879,o=-1732584194,a=271733878,u=-1009589776,s=0;s<e.length;s+=16){for(var c=r,l=i,d=o,f=a,p=u,v=0;v<80;v++){n[v]=v<16?e[s+v]:D(n[v-3]^n[v-8]^n[v-14]^n[v-16],1);var h=E(E(D(r,5),F(v,i,o,a)),E(E(u,n[v]),U(v)));u=a,a=o,o=D(i,30),i=r,r=h}r=E(r,c),i=E(i,l),o=E(o,d),a=E(a,f),u=E(u,p)}return Array(r,i,o,a,u)}function F(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function U(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function E(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function D(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.jsapifun=a,t.getUserId=u,t.getCheckinList=s,t.getVisitList=c,t.dealerVisitList=l,t.getDealerList=d,t.setUdlocation=f,t.getVisitDealer=p,t.getCheckin=v,t.visibleAddFun=h,t.visibleAddotherFun=g,t.getVisibleDetail=m,t.openLink=y,t.replaceLink=b,t.closeLink=w,t.goBackLink=x,t.setItem=_,t.getItem=k,t.removeItem=C,t.toast=S;var M=n(0),j=function(e){return e&&e.__esModule?e:{default:e}}(M),W=(n(7),weex.requireModule("meta")),B=weex.requireModule("stream"),V=weex.requireModule("modal"),P=weex.requireModule("storage"),J="https://crm-api.360che.com/",G="bs_800f0pvf7wwnccft7jei",z="8821105875dd2199970820d87cf5ee0d",q="https://s.kcimg.cn/dingtalk/js/v.2.1/";W&&W.setViewport({width:400});var $="="},104:function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"\n.map[data-v-16692e38]{\n  background-color: #FAFBFC;\n  width: 400px;\n}\n.shop[data-v-16692e38]{\n   background-color: #fff; \n   padding-left: 16px;\n   width: 400px;\n   margin-bottom: 8px;\n}\n.item[data-v-16692e38]{\n  height: 48px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(23,24,26,0.08);\n}\n.no-border[data-v-16692e38]{\n   border-bottom-width: 0;\n  border-bottom-style: none;\n}\n.left[data-v-16692e38],.right[data-v-16692e38]{\n  flex-direction: row;\n}\n.left[data-v-16692e38]{\n  width: 80px;\n}\n.right[data-v-16692e38]{\n  width: 320px;\n  align-items: center;\n}\n.left-text[data-v-16692e38]{\n  color: #17181A;\n  font-size: 16px;\n  height: 48px;\n  line-height: 48px;\n}\n.must[data-v-16692e38]{\n  color: #F7411C;\n  font-size: 16px;\n}\n.icon[data-v-16692e38]{\n  margin-right: 16px;\n  width: 70px;\n  height: 48px;\n  line-height: 48px;\n  color: #1571E5;\n  font-size: 14px;\n  text-align: right;\n}\n.right-text[data-v-16692e38]{\n  font-size: 16px;\n  color: #17181A;\n  width: 220px;\n  height: 48px;\n  line-height: 48px;\n  overflow: hidden;\n  text-align: left;\n}\n",""])},122:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"},e._l(e.shop,function(t,r){return n("div",{staticClass:"shop"},[n("div",{staticClass:"item",on:{click:function(t){e.gotoLink("search/dealer")}}},[n("div",{staticClass:"left"},[n("text",{staticClass:"left-text"},[e._v("品牌")])]),e._v(" "),n("div",{staticClass:"right"},[n("text",{staticClass:"right-text"},[e._v(e._s(t.BrandName))])])]),e._v(" "),n("div",{staticClass:"item",on:{click:function(t){e.gotoLink("search/dealer")}}},[n("div",{staticClass:"left"},[n("text",{staticClass:"left-text"},[e._v("店铺")])]),e._v(" "),n("div",{staticClass:"right"},[n("text",{staticClass:"right-text"},[e._v(e._s(t.StoreName))]),e._v(" "),n("text",{staticClass:"icon",on:{click:function(t){e.alertToast(r,0)}}},[e._v("设置地址")])])]),e._v(" "),n("div",{staticClass:"item no-border",on:{click:function(t){e.gotoLink("search/dealer")}}},[n("div",{staticClass:"left"},[n("text",{staticClass:"left-text"},[e._v("详细地址")])]),e._v(" "),"ok"!==t.disabled?n("div",{staticClass:"right"},[n("text",{staticClass:"right-text"},[e._v(e._s(t.Address))]),e._v(" "),n("text",{staticClass:"icon",on:{click:function(t){e.disableFun(r)}}},[e._v("编辑")])]):n("div",{staticClass:"right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.addresVal,expression:"addresVal"}],staticClass:"right-text",attrs:{type:"text",placeholder:"请输入详细地址"},domProps:{value:e.addresVal},on:{input:function(t){t.target.composing||(e.addresVal=t.target.value)}}}),e._v(" "),n("text",{staticClass:"icon",on:{click:function(t){e.alertToast(r,1)}}},[e._v("保存")])])])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},140:function(e,t,n){var r=n(104);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(4)("cf2e768c",r,!1)},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:i,exports:o,options:u}}},4:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var o=p++;r=f||(f=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(8),l={},d=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],u=l[a.id];u.refs--,n.push(u)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var u=n[o];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete l[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?v=p.concat(v):g=-1,v.length&&u())}function u(){if(!h){var e=i(a);h=!0;for(var t=v.length;t;){for(p=v,v=[];++g<t;)p&&p[g].run();g=-1,t=v.length}p=null,h=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,v=[],h=!1,g=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new s(e,t)),1!==v.length||h||i(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},54:function(e,t,n){n(140);var r=n(3)(n(72),n(122),"data-v-16692e38",null);r.options.__file="/Users/houyaohui/wwwroot/test/ddweex2/src/visible/map.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] map.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},6:function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[s]=r,u(s),s++}function i(e){delete c[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(l)setTimeout(a,0,e);else{var t=c[e];if(t){l=!0;try{o(t)}finally{i(e),l=!1}}}}if(!e.setImmediate){var u,s=1,c={},l=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},u=function(t){e.port2.postMessage(t)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var e=d.documentElement;u=function(t){var n=d.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(a,0,e)}}(),f.setImmediate=r,f.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(9),n(5))},7:function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},72:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(1);t.default={data:function(){return{listsDetail:{},list:{},shop:[],disable:!1,visibleData:{},DingTalkUserId:"",CheckLatitude:"",CheckLongitude:"",CheckInRecord:{},addresVal:"",someResult:null}},created:function(){var e=this,t=this;(0,a.getItem)("StoreInfo",function(t){e.shop=JSON.parse(t.data)}),(0,a.getItem)("CheckInRecord",function(t){e.$set(e,"CheckInRecord",JSON.parse(t.data)),e.CheckLatitude=e.CheckInRecord.Latitude,e.CheckLongitude=e.CheckInRecord.Longitude,e.DingTalkUserId=e.CheckInRecord.DingTalkUserId,e.visibleData={CheckinRecordId:e.CheckInRecord.Id,UserId:e.CheckInRecord.UserId,UserName:e.CheckInRecord.UserName}}),(0,a.getItem)("DealerDetail",function(t){e.listsDetail=JSON.parse(t.data),e.visibleData.DealerId=e.listsDetail.DealerId});o.default.apis;(0,a.jsapifun)(weex.config.bundleUrl,function(e){t.list=JSON.parse(e.data),o.default.config({agentId:t.list.Body.AgentId,corpId:t.list.Body.CorpId,timeStamp:t.list.Body.TimeStamp,nonceStr:t.list.Body.NonceStr,signature:t.list.Body.Signature,type:0,jsApiList:["biz.map.locate","device.geolocation.get"]})})},methods:{disableFun:function(e){var t=[].concat(r(this.shop));t[e].disabled="ok",this.shop=t},alertToast:function(e,t){if(t)return void this.submitFun(e);var n=this;o.default.ready(function(){o.default.apis.device.notification.confirm({message:"确认修改地址会将该地址同步到经销商前台",title:"是否确认修改",buttonLabels:["确定","取消"],onSuccess:function(r){0==r.buttonIndex&&(t?n.submitFun(e):n.tomap(e))},onFail:function(e){}})})},tomap:function(e){var t=this;o.default.ready(function(){o.default.apis.biz.map.locate({latitude:t.CheckLatitude,longitude:t.CheckLongitude,onSuccess:function(n){t.someResult=n,t.uplocationFun(e,n)},onFail:function(e){}})})},uplocationFun:function(e,t,n){var i=this,o=this;(0,a.setUdlocation)(JSON.stringify({Body:{DingTalkUserId:o.DingTalkUserId,DealerId:o.visibleData.DealerId,StoreId:o.shop[e].StoreId,Longitude:t?t.longitude:o.CheckLongitude,Latitude:t?t.latitude:o.CheckLatitude,Address:n||t.snippet}}),function(u){if(JSON.parse(u.data).Body){o.shop[e].Address=n||t.snippet;var s=[].concat(r(i.shop));s[e].disabled=null,(0,a.setItem)("StoreInfo",JSON.stringify(s)),(0,a.setItem)("setOkStore",1),(0,a.toast)("地址已经修改成功！")}else(0,a.toast)("定位失败，重新定位")})},submitFun:function(e){this.addresVal.length>0?this.uplocationFun(e,this.someResult,this.addresVal):(0,a.toast)("请输入您想要修改的地址")}}}},8:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],u=o[1],s=o[2],c=o[3],l={id:e+":"+i,css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},9:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},95:function(e,t,n){"use strict";var r=n(54);r.el="#root",new Vue(r)}});