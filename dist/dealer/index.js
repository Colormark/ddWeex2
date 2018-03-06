// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=80)}({0:function(e,t,n){"use strict";function r(e,t){var n=t.body,r=t.onSuccess,i=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){if(void 0!==e&&e.__status__){var t=e.__status__,n=e.__message__;C===t?r&&r.call(o,n):A===t&&i&&i.call(o,n)}else i&&i.call("-1","")}):i&&i.call("-1","")}function i(e,t){var n=t.body,r=t.onSuccess,i=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){void 0!==e?"0"===e.errorCode?r&&r.call(o,e.result):i&&i.call(o,e.result):i&&i.call("-1","")}):i&&i.call("-1","")}function o(e,t,n){var r=Object.create(null);if("string"!=typeof e||0===e.length)return r;t=t||"&",n=n||"=";for(var i=e.split(t),o=0,a=i.length;o<a;o++){var u=i[o].split(n),c=u[0].trim(),s="";u.length>=3?function(){u.splice(0,1);var e=u.length-1;u.forEach(function(t,r){t=t.trim(),s+=r===e?t:t+n})}():s=u[1].trim();var l=r[c];if(l)if(Array.isArray(l))l.push(decodeURIComponent(s));else{var f=l;r[c]=new Array,r[c].push(f),r[c].push(decodeURIComponent(s))}else r[c]=decodeURIComponent(s)}return r}function a(e,t,n){if(t=t||"&",n=n||"=",null!==e&&"object"===(void 0===e?"undefined":O(e))){for(var r=Object.keys(e),i=r.length,o=i-1,a="",u=0;u<i;u++){var c=r[u],s=e[c],l=c+n;if(Array.isArray(s)){for(var f=s.length,d=f-1,p=0;p<f;++p)a+=l+decodeURIComponent(s[p]),p<d&&(a+=t);f&&u<o&&(a+=t)}else a+=l+decodeURIComponent(s),u<o&&(a+=t)}return a}return""}function u(e,t){return e+"?"+D.stringify(t)}function c(e,t){var n={hash:null,search:null};if(!e)return{};var r=e.indexOf("?");if(-1===r)return{};var i=e.indexOf("#");i>-1?(n.hash=e.slice(i),n.search=e.slice(r,i)):n.search=e.slice(r);var o=n.search.slice(1),a=D.parse(o);return"string"==typeof t&&t.length>0?a[t]:a}function s(e){if(Z){if("Vue"===$)return weex.requireModule(e);var t="@weex-module/"+e;return __weex_require__(t)}if("Vue"===$)return weex.requireModule(e)}function l(e){var t="00"+e;return t.substring(t.length-2)}function f(e){var t=window._WebViewJavascriptBridge;if(!t)throw"runtime and bridge are not ready";var n=e.body,r=e.onSuccess,i=e.onFail,o=e.context;t.callHandler("exec",n,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof r&&r.call(o,e.result):"function"==typeof i&&i.call(o,e.result)),"function"==typeof i&&i.call("-1","")})}function d(e){var t=e.body,n=e.onSuccess,r=e.onFail,i=e.context,o=t.plugin,a=t.action,u=t.args;(0,window.WebViewJavascriptBridgeAndroid)(o,a,u,n,r,i)}function p(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function g(e){if(ae)window._WebViewJavascriptBridge?f(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){f(e)},!1);else if(oe){var t=window;t.nuva&&(void 0===t.nuva.isReady||t.nuva.isReady)?(ue||p(),d(e)):document.addEventListener("runtimeready",function(){ue||p(),d(e)},!1)}}function h(e){var t=se||function(){};le?i(t,e):fe?r(t,e):g(e)}function m(e,t){for(var n=t||0,r=e.length-n,i=new Array(r);r--;)i[r]=e[r+n];return i}function v(e,t){return function(n){n||(n={});var r=n.onSuccess,i=n.onFail;delete n.onSuccess,delete n.onFail,delete n.onCancel,h({body:{plugin:e,action:t,args:n},onSuccess:r,onFail:i})}}function y(e,t){var n=Object.create(null);return t.forEach(function(t){n[t]=v(e,t)}),n}function _(e){var t=Object.create(null);for(var n in e)for(var r=n.split("."),i=e[n],o=null,a=0,u=r.length;;)if(o){if(u-1===a){o[r[a]]=y(n,i);break}if(o[r[a]])a++;else if(o[r[a]]={},o=o[r[a]],++a>u)break}else{if(1===u){var c=!1,s=t[r[a]],l=y(n,i);for(var f in s)if(s.hasOwnProperty(f)){c=!0;break}if(c)for(var d in l)s[d]=l[d];else t[r[a]]=y(n,i);break}if(t[r[a]]){o=t[r[a]],a++;continue}t[r[a]]={},o=t[r[a]],a++}return t}function b(e){return function(t){h({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof t&&t(e)},onFail:function(){},context:null})}}function w(e){b("getModules")(e)}function S(e,t,n){if(!t)return void he.ready(function(){e(null)});he.ready(function(){var r=he.apis.runtime.permission,i=t||{},o=n||null;i.onSuccess=function(t){e(null,t)},i.onFail=function(t){"function"==typeof o?o(t):e(t,null)},r.requestJsApis(i)})}function x(){ve&&ve.length>0&&(ve.forEach(function(e){e()}),ve.length=0)}function k(){var e={apis:{},config:function(e){if(!e)return void re(["config is undefined,you must configure Dingtalk parameters"],ie.WARNING);me=e},init:function(){ve=[],he.init(),he.ready(function(){_e=he.isReady,e.apis=he.apis?he.apis:{},x()})},ready:function(e){if(!e||"function"!=typeof e)return void re(["callback is undefined"],ie.WARNING);_e?S(e,me,ye):ve&&ve.push(function(e){return function(){S(e,me,ye)}}(e))},error:function(e){"function"==typeof e&&(ye=e)},EventEmitter:he.EventEmitter};return e}function T(e){e.on=function(e,t,n){document.addEventListener(e,t,n)},e.off=function(e,t,n){document.removeEventListener(e,t,n)}}function I(e){e.on=he.on,e.off=he.off}var C="1",A="2",O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},D={stringify:a,parse:o},R={format:u,parse:c},F=function(){var e={};if("undefined"!=typeof weex){var t=weex.config,n=t.env;if(e.platform=n.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:t.bundleUrl,originalUrl:t.originalUrl},e.appVersion=n.appVersion,e.appName=n.appName;else{var r=location.href,i=R.parse(r,"dd_wx_tpl"),o=R.parse(r,"_wx_tpl");e.dingtalk={bundleUrl:i||o||"",originalUrl:r}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName,e.appVersion=navigator.appVersion,e.dingtalk={bundleUrl:__weex_options__.bundleUrl,originalUrl:__weex_options__.originalUrl};else{e.platform="Web";var a=location.href,u=R.parse(a,"dd_wx_tpl"),c=R.parse(a,"_wx_tpl");e.dingtalk={bundleUrl:u||c||"",originalUrl:a}}e.bundleFrameworkType="Rax"}return e}(),N="Web"===F.platform,W="iOS"===F.platform,E="android"===F.platform,j=W||E,B=F.dingtalk,P=F.bundleFrameworkType,M=B.bundleUrl,U=B.originalUrl,V=void 0;N&&(V=window.navigator.userAgent.toLowerCase());var J=function(){return j?"DingTalk"===F.appName||"com.alibaba.android.rimet"===F.appName:V&&V.indexOf("dingtalk")>-1}(),z=function(){return N?V&&/iphone|ipad|ipod|ios/.test(V):null}(),G=function(){return N?V&&V.indexOf("android")>-1:null}(),q=function(){if(N){var e=V.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);return null===e&&(e=V.match(/dingtalk\/([a-zA-Z0-9.-]+)/)),e&&e[1]}return F.appVersion}(),H={isDingtalk:J,isWeb:N,isWebiOS:z,isWebAndroid:G,isWeex:j,isWeexiOS:W,isWeexAndroid:E,bundleFrameworkType:P,bundleUrl:M,originalUrl:U,version:q,platform:function(){var e=void 0;return J?G?e="web.android":z?e="web.ios":E?e="weex.android":W&&(e="weex.ios"):e="not.dingtalk",e}()},$=H.bundleFrameworkType,Z=H.isWeex,K=(s("timer"),{LOG:"LOG",INFO:"INFO",WARNING:"WARNING",ERROR:"ERROR"}),Q=function(e){var t,n,r,i,o=l(e.time.getHours())+":"+l(e.time.getMinutes())+":"+l(e.time.getSeconds());switch(e.type){case K.LOG:(t=console).log.apply(t,["time:"+o+" | log: "].concat(L(e.logArr)));break;case K.INFO:(n=console).info.apply(n,["time:"+o+" | info: "].concat(L(e.logArr)));break;case K.ERROR:(r=console).error.apply(r,["time:"+o+" | error: "].concat(L(e.logArr)));break;case K.WARNING:(i=console).warn.apply(i,["time:"+o+" | warning: "].concat(L(e.logArr)))}},X=function(e){Q=e},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.LOG;Q({type:t,logArr:e,time:new Date})},ee={log:Y,setLog:X,LogType:K},te=H,ne=s,re=ee.log,ie=ee.LogType,oe=null,ae=null,ue=!1;if(te.isWeb){var ce=window.navigator.userAgent.toLowerCase();oe=ce&&ce.indexOf("android")>-1,ae=ce&&/iphone|ipad|ipod|ios/.test(ce)}var se=null,le=te.isWeexiOS,fe=te.isWeexAndroid;te.isWeex&&(se=ne("nuvajs-exec").exec);var de={},pe={on:function(e,t){var n=de[e];n?n.push(t):de[e]=[],n||de[e].push(t)},off:function(e,t){var n=de[e];if(!n)return!1;if(!e&&!t)return de={},!0;if(e&&!t)return de[e]=null,!0;for(var r=void 0,i=n.length;i--;)if((r=n[i])===t||r.fun===t){n.splice(i,1);break}return!0},once:function(e,t){function n(){pe.off(e,n),t.apply(this,arguments)}n.fun=t,pe.on(e,n)},emit:function(e){if("string"==typeof e){var t=de[e],n=m(arguments,1);if(t)for(var r=0,i=t.length;r<i;r++){var o=t[r];o.apply(this,n)}}}},ge={};te.isWeex&&(ge=ne("globalEvent"));var he={getModules:null,isReady:!1,runtime:{info:b("info"),_interceptBackButton:b("interceptBackButton"),_interceptNavTitle:b("interceptNavTitle"),_recoverNavTitle:b("recoverNavTitle"),_getModules:b("getModules")},init:function(){w(function(e){e&&(he.isReady=!0,he.apis=_(e),pe.emit("__ship_ready__"))})},ready:function(e){he.isReady?"function"==typeof e&&e():"function"==typeof e&&pe.once("__ship_ready__",function(){e()})},on:function(e,t){ge.addEventListener(e,function(e){var n={preventDefault:function(){re(["does not support preventDefault"],ie.WARNING)},detail:e};t.call(this,n)})},off:ge.removeEventListener,EventEmitter:pe},me=null,ve=null,ye=null,_e=!1,be=!0,we={},Se=te.isDingtalk,xe=te.isWeex,ke=te.isWeb;re(["current environment: "+te.platform]),Se?be&&(be=!1,xe?we=function(){var e=k();return I(e),e}():ke&&(we=function(){var e=k();return T(e),e}()),we.init()):re(["can only open the page be Dingtalk Container"],ie.WARNING);var Te=we;e.exports=Te},1:function(e,t,n){"use strict";function r(){var e=Date.parse(new Date).toString();return e=e.substr(0,10)}function i(e){var t=e,n=r();return J+t+"?Action="+t+"&AppId="+z+"&SecretKey="+G+"&TimeStamp="+n}function o(e){return encodeURIComponent(I(G,encodeURIComponent(e).toLowerCase()))}function a(e,t){var n=i("dd/getpackage"),r=o(n);M.fetch({method:"POST",body:JSON.stringify({Body:{Url:e}}),url:n+"&Signature="+r},t)}function u(e,t){var n=i("dd/getuserinfo"),r=o(n);M.fetch({method:"POST",body:JSON.stringify({Body:{Code:e}}),url:n+"&Signature="+r},t)}function c(e,t){var n=i("checkin/list"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function s(e,t){var n=i("checkin/getlist"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function l(e,t){var n=i("visit/getlist"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function f(e,t){var n=i("dealer/getlist"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function d(e,t){var n=i("dealer/udlocation"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function p(e,t){var n=i("visit/getdetail"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function g(e,t){var n=i("checkin/cplocalrange"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function h(e,t){var n=i("visit/add"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function m(e,t){var n=i("visit/addother"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function v(e,t){var n=i("visit/getdetail"),r=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+r},t)}function y(e,t,n){B.default.ready(function(){B.default.apis.biz.util.openLink({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function _(e,t,n){B.default.ready(function(){B.default.apis.biz.navigation.replace({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function b(e,t){B.default.ready(function(){B.default.apis.biz.navigation.close({onSuccess:e,onFail:t})})}function w(e,t){B.default.ready(function(){B.default.apis.biz.navigation.goBack({onSuccess:e,onFail:t})})}function S(e,t,n){V.setItem(e,t,n)}function x(e,t){V.getItem(e,t)}function k(e,t){V.removeItem(e,t)}function T(e,t){(!t||t>5)&&(t=3),U.toast({message:e,duration:t})}function I(e,t){return A(C(O(e),O(t)))}function C(e,t){var n=L(e);n.length>16&&(n=R(n,8*e.length));for(var r=Array(16),i=Array(16),o=0;o<16;o++)r[o]=909522486^n[o],i[o]=1549556828^n[o];var a=R(r.concat(L(t)),512+8*t.length);return D(R(i.concat(a),672))}function A(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="",r=e.length,i=0;i<r;i+=3)for(var o=e.charCodeAt(i)<<16|(i+1<r?e.charCodeAt(i+1)<<8:0)|(i+2<r?e.charCodeAt(i+2):0),a=0;a<4;a++)8*i+6*a>8*e.length?n+=H:n+=t.charAt(o>>>6*(3-a)&63);return n}function O(e){for(var t,n,r="",i=-1;++i<e.length;)t=e.charCodeAt(i),n=i+1<e.length?e.charCodeAt(i+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),i++),t<=127?r+=String.fromCharCode(t):t<=2047?r+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?r+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(r+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return r}function L(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(var n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return t}function D(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function R(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n=Array(80),r=1732584193,i=-271733879,o=-1732584194,a=271733878,u=-1009589776,c=0;c<e.length;c+=16){for(var s=r,l=i,f=o,d=a,p=u,g=0;g<80;g++){n[g]=g<16?e[c+g]:E(n[g-3]^n[g-8]^n[g-14]^n[g-16],1);var h=W(W(E(r,5),F(g,i,o,a)),W(W(u,n[g]),N(g)));u=a,a=o,o=E(i,30),i=r,r=h}r=W(r,s),i=W(i,l),o=W(o,f),a=W(a,d),u=W(u,p)}return Array(r,i,o,a,u)}function F(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function N(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function W(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function E(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.jsapifun=a,t.getUserId=u,t.getCheckinList=c,t.getVisitList=s,t.dealerVisitList=l,t.getDealerList=f,t.setUdlocation=d,t.getVisitDealer=p,t.getCheckin=g,t.visibleAddFun=h,t.visibleAddotherFun=m,t.getVisibleDetail=v,t.openLink=y,t.replaceLink=_,t.closeLink=b,t.goBackLink=w,t.setItem=S,t.getItem=x,t.removeItem=k,t.toast=T;var j=n(0),B=function(e){return e&&e.__esModule?e:{default:e}}(j),P=(n(4),weex.requireModule("meta")),M=weex.requireModule("stream"),U=weex.requireModule("modal"),V=weex.requireModule("storage"),J="https://crm-api.360che.com/",z="bs_800f0pvf7wwnccft7jei",G="8821105875dd2199970820d87cf5ee0d",q="https://s.kcimg.cn/dingtalk/js/v.2.1/";P&&P.setViewport({width:400});var H="="},12:function(e,t){e.exports={list:{backgroundColor:"#ffffff",paddingLeft:16,borderTopWidth:1,borderTopStyle:"solid",borderTopColor:"#D8D8D8"},item:{paddingTop:12,paddingBottom:12,height:48,flexDirection:"row",justifyContent:"space-between"},dealer:{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"rgba(23,24,26,0.08)"},right:{flexDirection:"row",alignItems:"center",width:310},"text-left":{fontSize:16,lineHeight:24,color:"#17181A",width:80},"text-right":{fontSize:16,lineHeight:24,color:"#A1A9B3",width:278,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},selected:{color:"#17181A",width:278,overflow:"hidden",height:24,fontSize:16,lineHeight:24,textAlign:"right"},icon:{marginRight:16,marginLeft:8,width:8,height:8,borderTopWidth:1,borderRightWidth:1,borderStyle:"solid",borderColor:"#A1A9B3",transform:"rotate(45deg)"}}},16:function(e,t){e.exports={"man-list":{paddingTop:8},item:{height:78,paddingTop:10,paddingBottom:10,paddingLeft:16,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"rgba(23,24,26,0.12)",backgroundColor:"#ffffff"},vicible:{height:58},name:{color:"#17181A",fontSize:18,lineHeight:30,fontWeight:"bold"},type:{fontSize:16,color:"#17181A",lineHeight:28},right:{alignItems:"center",flexDirection:"row"},time:{color:"#17181A",fontSize:12},icon:{marginRight:16,marginLeft:8,width:8,height:8,borderTopWidth:1,borderRightWidth:1,borderStyle:"solid",borderColor:"#A1A9B3",transform:"rotate(45deg)"}}},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["list"]},[n("div",{staticClass:["dealer","item"],on:{click:function(t){e.gotoLink("search/dealer")}}},[n("text",{staticClass:["text-left"]},[e._v("经销商")]),n("div",{staticClass:["right"]},[n("text",{class:["请选择经销商"===e.DealerId?"text-right":"selected"]},[e._v(e._s(e.DealerId))]),n("div",{staticClass:["icon"]})])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?g=p.concat(g):m=-1,g.length&&u())}function u(){if(!h){var e=i(a);h=!0;for(var t=g.length;t;){for(p=g,g=[];++m<t;)p&&p[m].run();m=-1,t=g.length}p=null,h=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,g=[],h=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new c(e,t)),1!==g.length||h||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},22:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["man-list"]},e._l(e.DealerSubJsonList,function(t,r){return n("div",{staticClass:["item"]},[n("div",{staticClass:["vicible"]},[n("text",{staticClass:["name"]},[e._v(e._s(t.CheckUserName))]),n("text",{staticClass:["type"]},[e._v(e._s(t.VisitTypeText))])]),n("div",{staticClass:["right"],on:{click:function(t){e.gotoLink("detail/index",r)}}},[n("text",{staticClass:["time"]},[e._v(e._s(t.CreateDate))]),n("div",{staticClass:["icon"]})])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},24:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(78),o=r(i),a=n(81),u=r(a),c=n(0),s=r(c),l=n(1);weex.requireModule("globalEvent");t.default={name:"dealer",components:{headerView:o.default,listView:u.default},data:function(){return{nothing:!1,CheckInRecord:{},DealerId:"请选择经销商",StoreName:"请选择店铺",timer:null,page:1,PageCount:0,dealerids:0,DealerSubJsonList:[]}},created:function(){(0,l.removeItem)("DealerDetail"),(0,l.removeItem)("submitok"),(0,l.removeItem)("DealerSearch")},mounted:function(){s.default.ready(function(){s.default.apis.biz.navigation.setTitle({title:"经销商拜访记录"})})},methods:{dealerFun:function(){var e=this;this.timer=setInterval(function(){(0,l.getItem)("DealerDetail",function(t){var n=JSON.parse(t.data);void 0===n&&""===n||(e.DealerId=n.DealerName,e.dealerids=n.DealerId,e.page=1,e.dealerVisitFun(),clearInterval(e.timer))})},200)},dealerVisitFun:function(){var e=this;(0,l.dealerVisitList)(JSON.stringify({Body:{DealerId:this.dealerids},Paged:{PageIndex:this.page,PageSize:20}}),function(t){var n=JSON.parse(t.data);if(null==n.Body||n.Body.length<=0)return void(e.nothing=!0);if(e.nothing=!1,e.PageCount=n.Paged.PageCount,1==e.page)e.DealerSubJsonList=n.Body;else{for(var r=n.Body,i=0;i<r.length;i++){var o=r[i];e.DealerSubJsonList.push(o)}e.DealerSubJsonList.concat(n.Body)}e.page+=1})},fetch:function(){this.PageCount>=this.page&&this.dealerVisitFun()}}}},3:function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[c]=r,u(c),c++}function i(e){delete s[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(l)setTimeout(a,0,e);else{var t=s[e];if(t){l=!0;try{o(t)}finally{i(e),l=!1}}}}if(!e.setImmediate){var u,c=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(a,0,e)}}(),d.setImmediate=r,d.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(5),n(2))},4:function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(3),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},5:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},56:function(e,t){e.exports={dealer:{backgroundColor:"#f3f4f5"},nothing:{paddingTop:48,justifyContent:"center",alignItems:"center"},"no-text":{color:"#A1A9B3",fontSize:12,marginTop:16}}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default={props:["DealerId","StoreName"],data:function(){return{}},created:function(){},methods:{gotoLink:function(e){var t=this;this.SomeOpen||(this.SomeOpen=!0,(0,r.removeItem)("submitok"),(0,r.removeItem)("DealerDetail",function(n){(0,r.setItem)("DealerSearch","ok",function(n){t.$emit("dealerFun","ok"),(0,r.openLink)(e,function(e){t.SomeOpen=!1})})}))}}}},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(1);t.default={props:["DealerSubJsonList"],data:function(){return{}},created:function(){},methods:{gotoLink:function(e,t){var n=this;this.SomeOpen||(this.SomeOpen=!0,i.default.ready(function(){i.default.apis.device.notification.showPreloader({text:"使劲加载中..",showIcon:!0,onSuccess:function(e){},onFail:function(e){}})}),(0,o.setItem)("submitok","1",function(r){(0,o.setItem)("CheckInRecord",JSON.stringify(n.DealerSubJsonList[t]),function(t){i.default.ready(function(){i.default.apis.device.notification.hidePreloader()}),(0,o.openLink)(e,function(e){n.SomeOpen=!1})})}))}}}},74:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["dealer"]},[n("scroller",{attrs:{loadmoreoffset:"10"},on:{loadmore:e.fetch}},[n("headerView",{attrs:{DealerId:e.DealerId,StoreName:e.StoreName},on:{dealerFun:e.dealerFun}}),e.nothing?e._e():n("listView",{attrs:{DealerSubJsonList:e.DealerSubJsonList}}),e.nothing?n("div",{staticClass:["nothing"]},[n("image",{staticStyle:{width:"200px",height:"150px"},attrs:{src:"https://s.kcimg.cn/dingtalk/image/nothing.png"}}),n("text",{staticClass:["no-text"]},[e._v("还没有人拜访~")])]):e._e()],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},78:function(e,t,n){var r,i,o=[];o.push(n(12)),r=n(6);var a=n(18);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/houyaohui/wwwroot/test/ddweex2/src/dealer/head.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-13c368ac",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r},80:function(e,t,n){var r,i,o=[];o.push(n(56)),r=n(24);var a=n(74);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/houyaohui/wwwroot/test/ddweex2/src/dealer/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-a5986510",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},81:function(e,t,n){var r,i,o=[];o.push(n(16)),r=n(7);var a=n(22);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/houyaohui/wwwroot/test/ddweex2/src/dealer/list.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-ee56c130",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r}});