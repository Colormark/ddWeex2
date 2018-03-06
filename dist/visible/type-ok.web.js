// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=98)}({0:function(e,t,n){"use strict";function r(e,t){var n=t.body,r=t.onSuccess,o=t.onFail,i=t.context;e&&"function"==typeof e?e(n,function(e){if(void 0!==e&&e.__status__){var t=e.__status__,n=e.__message__;O===t?r&&r.call(i,n):A===t&&o&&o.call(i,n)}else o&&o.call("-1","")}):o&&o.call("-1","")}function o(e,t){var n=t.body,r=t.onSuccess,o=t.onFail,i=t.context;e&&"function"==typeof e?e(n,function(e){void 0!==e?"0"===e.errorCode?r&&r.call(i,e.result):o&&o.call(i,e.result):o&&o.call("-1","")}):o&&o.call("-1","")}function i(e,t,n){var r=Object.create(null);if("string"!=typeof e||0===e.length)return r;t=t||"&",n=n||"=";for(var o=e.split(t),i=0,a=o.length;i<a;i++){var u=o[i].split(n),s=u[0].trim(),c="";u.length>=3?function(){u.splice(0,1);var e=u.length-1;u.forEach(function(t,r){t=t.trim(),c+=r===e?t:t+n})}():c=u[1].trim();var l=r[s];if(l)if(Array.isArray(l))l.push(decodeURIComponent(c));else{var f=l;r[s]=new Array,r[s].push(f),r[s].push(decodeURIComponent(c))}else r[s]=decodeURIComponent(c)}return r}function a(e,t,n){if(t=t||"&",n=n||"=",null!==e&&"object"===(void 0===e?"undefined":I(e))){for(var r=Object.keys(e),o=r.length,i=o-1,a="",u=0;u<o;u++){var s=r[u],c=e[s],l=s+n;if(Array.isArray(c)){for(var f=c.length,d=f-1,p=0;p<f;++p)a+=l+decodeURIComponent(c[p]),p<d&&(a+=t);f&&u<i&&(a+=t)}else a+=l+decodeURIComponent(c),u<i&&(a+=t)}return a}return""}function u(e,t){return e+"?"+E.stringify(t)}function s(e,t){var n={hash:null,search:null};if(!e)return{};var r=e.indexOf("?");if(-1===r)return{};var o=e.indexOf("#");o>-1?(n.hash=e.slice(o),n.search=e.slice(r,o)):n.search=e.slice(r);var i=n.search.slice(1),a=E.parse(i);return"string"==typeof t&&t.length>0?a[t]:a}function c(e){if(Z){if("Vue"===H)return weex.requireModule(e);var t="@weex-module/"+e;return __weex_require__(t)}if("Vue"===H)return weex.requireModule(e)}function l(e){var t="00"+e;return t.substring(t.length-2)}function f(e){var t=window._WebViewJavascriptBridge;if(!t)throw"runtime and bridge are not ready";var n=e.body,r=e.onSuccess,o=e.onFail,i=e.context;t.callHandler("exec",n,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof r&&r.call(i,e.result):"function"==typeof o&&o.call(i,e.result)),"function"==typeof o&&o.call("-1","")})}function d(e){var t=e.body,n=e.onSuccess,r=e.onFail,o=e.context,i=t.plugin,a=t.action,u=t.args;(0,window.WebViewJavascriptBridgeAndroid)(i,a,u,n,r,o)}function p(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function v(e){if(ae)window._WebViewJavascriptBridge?f(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){f(e)},!1);else if(ie){var t=window;t.nuva&&(void 0===t.nuva.isReady||t.nuva.isReady)?(ue||p(),d(e)):document.addEventListener("runtimeready",function(){ue||p(),d(e)},!1)}}function h(e){var t=ce||function(){};le?o(t,e):fe?r(t,e):v(e)}function g(e,t){for(var n=t||0,r=e.length-n,o=new Array(r);r--;)o[r]=e[r+n];return o}function m(e,t){return function(n){n||(n={});var r=n.onSuccess,o=n.onFail;delete n.onSuccess,delete n.onFail,delete n.onCancel,h({body:{plugin:e,action:t,args:n},onSuccess:r,onFail:o})}}function y(e,t){var n=Object.create(null);return t.forEach(function(t){n[t]=m(e,t)}),n}function b(e){var t=Object.create(null);for(var n in e)for(var r=n.split("."),o=e[n],i=null,a=0,u=r.length;;)if(i){if(u-1===a){i[r[a]]=y(n,o);break}if(i[r[a]])a++;else if(i[r[a]]={},i=i[r[a]],++a>u)break}else{if(1===u){var s=!1,c=t[r[a]],l=y(n,o);for(var f in c)if(c.hasOwnProperty(f)){s=!0;break}if(s)for(var d in l)c[d]=l[d];else t[r[a]]=y(n,o);break}if(t[r[a]]){i=t[r[a]],a++;continue}t[r[a]]={},i=t[r[a]],a++}return t}function w(e){return function(t){h({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof t&&t(e)},onFail:function(){},context:null})}}function x(e){w("getModules")(e)}function _(e,t,n){if(!t)return void he.ready(function(){e(null)});he.ready(function(){var r=he.apis.runtime.permission,o=t||{},i=n||null;o.onSuccess=function(t){e(null,t)},o.onFail=function(t){"function"==typeof i?i(t):e(t,null)},r.requestJsApis(o)})}function T(){me&&me.length>0&&(me.forEach(function(e){e()}),me.length=0)}function S(){var e={apis:{},config:function(e){if(!e)return void re(["config is undefined,you must configure Dingtalk parameters"],oe.WARNING);ge=e},init:function(){me=[],he.init(),he.ready(function(){be=he.isReady,e.apis=he.apis?he.apis:{},T()})},ready:function(e){if(!e||"function"!=typeof e)return void re(["callback is undefined"],oe.WARNING);be?_(e,ge,ye):me&&me.push(function(e){return function(){_(e,ge,ye)}}(e))},error:function(e){"function"==typeof e&&(ye=e)},EventEmitter:he.EventEmitter};return e}function C(e){e.on=function(e,t,n){document.addEventListener(e,t,n)},e.off=function(e,t,n){document.removeEventListener(e,t,n)}}function k(e){e.on=he.on,e.off=he.off}var O="1",A="2",I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},E={stringify:a,parse:i},L={format:u,parse:s},R=function(){var e={};if("undefined"!=typeof weex){var t=weex.config,n=t.env;if(e.platform=n.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:t.bundleUrl,originalUrl:t.originalUrl},e.appVersion=n.appVersion,e.appName=n.appName;else{var r=location.href,o=L.parse(r,"dd_wx_tpl"),i=L.parse(r,"_wx_tpl");e.dingtalk={bundleUrl:o||i||"",originalUrl:r}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName,e.appVersion=navigator.appVersion,e.dingtalk={bundleUrl:__weex_options__.bundleUrl,originalUrl:__weex_options__.originalUrl};else{e.platform="Web";var a=location.href,u=L.parse(a,"dd_wx_tpl"),s=L.parse(a,"_wx_tpl");e.dingtalk={bundleUrl:u||s||"",originalUrl:a}}e.bundleFrameworkType="Rax"}return e}(),F="Web"===R.platform,U="iOS"===R.platform,M="android"===R.platform,W=U||M,j=R.dingtalk,B=R.bundleFrameworkType,P=j.bundleUrl,V=j.originalUrl,D=void 0;F&&(D=window.navigator.userAgent.toLowerCase());var G=function(){return W?"DingTalk"===R.appName||"com.alibaba.android.rimet"===R.appName:D&&D.indexOf("dingtalk")>-1}(),z=function(){return F?D&&/iphone|ipad|ipod|ios/.test(D):null}(),J=function(){return F?D&&D.indexOf("android")>-1:null}(),q=function(){if(F){var e=D.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);return null===e&&(e=D.match(/dingtalk\/([a-zA-Z0-9.-]+)/)),e&&e[1]}return R.appVersion}(),$={isDingtalk:G,isWeb:F,isWebiOS:z,isWebAndroid:J,isWeex:W,isWeexiOS:U,isWeexAndroid:M,bundleFrameworkType:B,bundleUrl:P,originalUrl:V,version:q,platform:function(){var e=void 0;return G?J?e="web.android":z?e="web.ios":M?e="weex.android":U&&(e="weex.ios"):e="not.dingtalk",e}()},H=$.bundleFrameworkType,Z=$.isWeex,K=(c("timer"),{LOG:"LOG",INFO:"INFO",WARNING:"WARNING",ERROR:"ERROR"}),Q=function(e){var t,n,r,o,i=l(e.time.getHours())+":"+l(e.time.getMinutes())+":"+l(e.time.getSeconds());switch(e.type){case K.LOG:(t=console).log.apply(t,["time:"+i+" | log: "].concat(N(e.logArr)));break;case K.INFO:(n=console).info.apply(n,["time:"+i+" | info: "].concat(N(e.logArr)));break;case K.ERROR:(r=console).error.apply(r,["time:"+i+" | error: "].concat(N(e.logArr)));break;case K.WARNING:(o=console).warn.apply(o,["time:"+i+" | warning: "].concat(N(e.logArr)))}},X=function(e){Q=e},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.LOG;Q({type:t,logArr:e,time:new Date})},ee={log:Y,setLog:X,LogType:K},te=$,ne=c,re=ee.log,oe=ee.LogType,ie=null,ae=null,ue=!1;if(te.isWeb){var se=window.navigator.userAgent.toLowerCase();ie=se&&se.indexOf("android")>-1,ae=se&&/iphone|ipad|ipod|ios/.test(se)}var ce=null,le=te.isWeexiOS,fe=te.isWeexAndroid;te.isWeex&&(ce=ne("nuvajs-exec").exec);var de={},pe={on:function(e,t){var n=de[e];n?n.push(t):de[e]=[],n||de[e].push(t)},off:function(e,t){var n=de[e];if(!n)return!1;if(!e&&!t)return de={},!0;if(e&&!t)return de[e]=null,!0;for(var r=void 0,o=n.length;o--;)if((r=n[o])===t||r.fun===t){n.splice(o,1);break}return!0},once:function(e,t){function n(){pe.off(e,n),t.apply(this,arguments)}n.fun=t,pe.on(e,n)},emit:function(e){if("string"==typeof e){var t=de[e],n=g(arguments,1);if(t)for(var r=0,o=t.length;r<o;r++){var i=t[r];i.apply(this,n)}}}},ve={};te.isWeex&&(ve=ne("globalEvent"));var he={getModules:null,isReady:!1,runtime:{info:w("info"),_interceptBackButton:w("interceptBackButton"),_interceptNavTitle:w("interceptNavTitle"),_recoverNavTitle:w("recoverNavTitle"),_getModules:w("getModules")},init:function(){x(function(e){e&&(he.isReady=!0,he.apis=b(e),pe.emit("__ship_ready__"))})},ready:function(e){he.isReady?"function"==typeof e&&e():"function"==typeof e&&pe.once("__ship_ready__",function(){e()})},on:function(e,t){ve.addEventListener(e,function(e){var n={preventDefault:function(){re(["does not support preventDefault"],oe.WARNING)},detail:e};t.call(this,n)})},off:ve.removeEventListener,EventEmitter:pe},ge=null,me=null,ye=null,be=!1,we=!0,xe={},_e=te.isDingtalk,Te=te.isWeex,Se=te.isWeb;re(["current environment: "+te.platform]),_e?we&&(we=!1,Te?xe=function(){var e=S();return k(e),e}():Se&&(xe=function(){var e=S();return C(e),e}()),xe.init()):re(["can only open the page be Dingtalk Container"],oe.WARNING);var Ce=xe;e.exports=Ce},1:function(e,t,n){"use strict";function r(){var e=Date.parse(new Date).toString();return e=e.substr(0,10)}function o(e){var t=e,n=r();return G+t+"?Action="+t+"&AppId="+z+"&SecretKey="+J+"&TimeStamp="+n}function i(e){return encodeURIComponent(k(J,encodeURIComponent(e).toLowerCase()))}function a(e,t){var n=o("dd/getpackage"),r=i(n);P.fetch({method:"POST",body:JSON.stringify({Body:{Url:e}}),url:n+"&Signature="+r},t)}function u(e,t){var n=o("dd/getuserinfo"),r=i(n);P.fetch({method:"POST",body:JSON.stringify({Body:{Code:e}}),url:n+"&Signature="+r},t)}function s(e,t){var n=o("checkin/list"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function c(e,t){var n=o("checkin/getlist"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function l(e,t){var n=o("visit/getlist"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function f(e,t){var n=o("dealer/getlist"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function d(e,t){var n=o("dealer/udlocation"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function p(e,t){var n=o("visit/getdetail"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function v(e,t){var n=o("checkin/cplocalrange"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function h(e,t){var n=o("visit/add"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function g(e,t){var n=o("visit/addother"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function m(e,t){var n=o("visit/getdetail"),r=i(n);P.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function y(e,t,n){j.default.ready(function(){j.default.apis.biz.util.openLink({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function b(e,t,n){j.default.ready(function(){j.default.apis.biz.navigation.replace({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function w(e,t){j.default.ready(function(){j.default.apis.biz.navigation.close({onSuccess:e,onFail:t})})}function x(e,t){j.default.ready(function(){j.default.apis.biz.navigation.goBack({onSuccess:e,onFail:t})})}function _(e,t,n){D.setItem(e,t,n)}function T(e,t){D.getItem(e,t)}function S(e,t){D.removeItem(e,t)}function C(e,t){(!t||t>5)&&(t=3),V.toast({message:e,duration:t})}function k(e,t){return A(O(I(e),I(t)))}function O(e,t){var n=N(e);n.length>16&&(n=L(n,8*e.length));for(var r=Array(16),o=Array(16),i=0;i<16;i++)r[i]=909522486^n[i],o[i]=1549556828^n[i];var a=L(r.concat(N(t)),512+8*t.length);return E(L(o.concat(a),672))}function A(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="",r=e.length,o=0;o<r;o+=3)for(var i=e.charCodeAt(o)<<16|(o+1<r?e.charCodeAt(o+1)<<8:0)|(o+2<r?e.charCodeAt(o+2):0),a=0;a<4;a++)8*o+6*a>8*e.length?n+=$:n+=t.charAt(i>>>6*(3-a)&63);return n}function I(e){for(var t,n,r="",o=-1;++o<e.length;)t=e.charCodeAt(o),n=o+1<e.length?e.charCodeAt(o+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),o++),t<=127?r+=String.fromCharCode(t):t<=2047?r+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?r+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(r+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return r}function N(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(var n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return t}function E(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function L(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n=Array(80),r=1732584193,o=-271733879,i=-1732584194,a=271733878,u=-1009589776,s=0;s<e.length;s+=16){for(var c=r,l=o,f=i,d=a,p=u,v=0;v<80;v++){n[v]=v<16?e[s+v]:M(n[v-3]^n[v-8]^n[v-14]^n[v-16],1);var h=U(U(M(r,5),R(v,o,i,a)),U(U(u,n[v]),F(v)));u=a,a=i,i=M(o,30),o=r,r=h}r=U(r,c),o=U(o,l),i=U(i,f),a=U(a,d),u=U(u,p)}return Array(r,o,i,a,u)}function R(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function F(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function U(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function M(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.jsapifun=a,t.getUserId=u,t.getCheckinList=s,t.getVisitList=c,t.dealerVisitList=l,t.getDealerList=f,t.setUdlocation=d,t.getVisitDealer=p,t.getCheckin=v,t.visibleAddFun=h,t.visibleAddotherFun=g,t.getVisibleDetail=m,t.openLink=y,t.replaceLink=b,t.closeLink=w,t.goBackLink=x,t.setItem=_,t.getItem=T,t.removeItem=S,t.toast=C;var W=n(0),j=function(e){return e&&e.__esModule?e:{default:e}}(W),B=(n(7),weex.requireModule("meta")),P=weex.requireModule("stream"),V=weex.requireModule("modal"),D=weex.requireModule("storage"),G="https://crm-api.360che.com/",z="bs_800f0pvf7wwnccft7jei",J="8821105875dd2199970820d87cf5ee0d",q="https://s.kcimg.cn/dingtalk/js/v.2.1/";B&&B.setViewport({width:400});var $="="},115:function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"\n.type-view[data-v-7042baab]{\n  background-color: #fff;\n  padding-left: 16px;\n}\n.box[data-v-7042baab]{\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(23,24,26,0.08);\n  align-items: center;\n  height: 48px;\n  line-height: 48px;\n  flex-direction: row;\n}\n.text[data-v-7042baab]{\n  font-size: 16px;\n  color: #17181A;\n}\n.other[data-v-7042baab]{\n  justify-content: space-between;\n}\n.right[data-v-7042baab]{\n  flex-direction: row;\n  width: 302px;\n}\n.input[data-v-7042baab]{\n  width: 237px;\n  height: 48px;\n  color: #17181A;\n  font-size: 16px;\n}\n.ok[data-v-7042baab]{\n  width: 65px;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  color: #A1A9B3;\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-left-color: rgba(23,24,26,0.08);\n  text-align: center;\n}\n.selected[data-v-7042baab]{\n  font-size: 16px;\n  color: #1571E5;\n}\n.selectedok[data-v-7042baab]{\n  width: 65px;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-left-color: rgba(23,24,26,0.08);\n  text-align: center;\n  color: #1571E5;\n}\n",""])},133:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"type-view"},[n("scroller",{staticClass:"view"},[e._l(e.lists,function(t,r){return n("div",{staticClass:"box",on:{click:function(t){e.changeFun(r)}}},[n("text",{class:[t.selectedClass?"selected":"text"]},[e._v(e._s(t.name))])])}),e._v(" "),n("div",{staticClass:"box other"},[n("text",{class:[e.otherClass?"selected":"text"]},[e._v("其他")]),e._v(" "),n("div",{staticClass:"right"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入拜访类别"},domProps:{value:e.otherType},on:{input:e.inputFun}}),e._v(" "),n("text",{class:[e.otherClass?"selectedok":"ok"],on:{click:e.letGo}},[e._v("确认")])])])],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},151:function(e,t,n){var r=n(115);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(4)("02d8c190",r,!1)},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:o,exports:i,options:u}}},4:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var i=p++;r=d||(d=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(8),l={},f=s&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],u=l[a.id];u.refs--,n.push(u)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var u=n[i];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete l[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?v=p.concat(v):g=-1,v.length&&u())}function u(){if(!h){var e=o(a);h=!0;for(var t=v.length;t;){for(p=v,v=[];++g<t;)p&&p[g].run();g=-1,t=v.length}p=null,h=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,v=[],h=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new s(e,t)),1!==v.length||h||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},56:function(e,t,n){n(151);var r=n(3)(n(74),n(133),"data-v-7042baab",null);r.options.__file="/Users/houyaohui/wwwroot/test/ddweex2/src/visible/type-ok.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] type-ok.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},6:function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[s]=r,u(s),s++}function o(e){delete c[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(l)setTimeout(a,0,e);else{var t=c[e];if(t){l=!0;try{i(t)}finally{o(e),l=!1}}}}if(!e.setImmediate){var u,s=1,c={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(a,0,e)}}(),d.setImmediate=r,d.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(9),n(5))},7:function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var o=Function.prototype.apply;t.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={data:function(){return{lists:[{name:"新人初次拜访",value:2,selectedClass:!1,type:0},{name:"参加活动",value:6,selectedClass:!1,type:0},{name:"培训",value:7,selectedClass:!1,type:0},{name:"签单回访",value:8,selectedClass:!1,type:2},{name:"团单续签",value:9,selectedClass:!1,type:2},{name:"个人续签",value:10,selectedClass:!1,type:2}],nextIndex:-1,otherType:"",otherClass:!1}},mounted:function(){i.default.ready(function(){i.default.apis.biz.navigation.setTitle({title:"拜访类型"})})},created:function(){var e=this;(0,r.getItem)("visibleType",function(t){var n=JSON.parse(t.data);100===n.value?(e.otherType=n.name,e.otherClass=!0):e.lists[n.value-1].selectedClass=!0})},methods:{changeFun:function(e){var t=this;this.SomeOpen||(this.SomeOpen=!0,-1!==this.nextIndex&&this.$set(this.lists[this.nextIndex],"selectedClass",!1),this.nextIndex=e,this.$set(this.lists[e],"selectedClass",!0),(0,r.setItem)("visibleType",JSON.stringify(this.lists[e]),function(e){(0,r.goBackLink)(),t.SomeOpen=!1}))},inputFun:function(e){this.otherType=e.value,e.value.length>0?(this.otherClass=!0,this.$set(this.lists[this.nextIndex],"selectedClass",!1),this.nextIndex=-1):this.otherClass=!1},letGo:function(){var e=this;if(!this.SomeOpen){this.SomeOpen=!0;var t={name:this.otherType,value:100,selectedClass:!0};(0,r.setItem)("visibleType",JSON.stringify(t),function(t){(0,r.goBackLink)(),e.SomeOpen=!1})}}}}},8:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],u=i[1],s=i[2],c=i[3],l={id:e+":"+o,css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},9:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},98:function(e,t,n){"use strict";var r=n(56);r.el="#root",new Vue(r)}});