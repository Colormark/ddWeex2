// { "framework": "Vue"} 

!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=83)}({0:function(e,t,n){"use strict";function i(e,t){var n=t.body,i=t.onSuccess,r=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){if(void 0!==e&&e.__status__){var t=e.__status__,n=e.__message__;I===t?i&&i.call(o,n):A===t&&r&&r.call(o,n)}else r&&r.call("-1","")}):r&&r.call("-1","")}function r(e,t){var n=t.body,i=t.onSuccess,r=t.onFail,o=t.context;e&&"function"==typeof e?e(n,function(e){void 0!==e?"0"===e.errorCode?i&&i.call(o,e.result):r&&r.call(o,e.result):r&&r.call("-1","")}):r&&r.call("-1","")}function o(e,t,n){var i=Object.create(null);if("string"!=typeof e||0===e.length)return i;t=t||"&",n=n||"=";for(var r=e.split(t),o=0,a=r.length;o<a;o++){var u=r[o].split(n),l=u[0].trim(),c="";u.length>=3?function(){u.splice(0,1);var e=u.length-1;u.forEach(function(t,i){t=t.trim(),c+=i===e?t:t+n})}():c=u[1].trim();var s=i[l];if(s)if(Array.isArray(s))s.push(decodeURIComponent(c));else{var f=s;i[l]=new Array,i[l].push(f),i[l].push(decodeURIComponent(c))}else i[l]=decodeURIComponent(c)}return i}function a(e,t,n){if(t=t||"&",n=n||"=",null!==e&&"object"===(void 0===e?"undefined":O(e))){for(var i=Object.keys(e),r=i.length,o=r-1,a="",u=0;u<r;u++){var l=i[u],c=e[l],s=l+n;if(Array.isArray(c)){for(var f=c.length,d=f-1,p=0;p<f;++p)a+=s+decodeURIComponent(c[p]),p<d&&(a+=t);f&&u<o&&(a+=t)}else a+=s+decodeURIComponent(c),u<o&&(a+=t)}return a}return""}function u(e,t){return e+"?"+L.stringify(t)}function l(e,t){var n={hash:null,search:null};if(!e)return{};var i=e.indexOf("?");if(-1===i)return{};var r=e.indexOf("#");r>-1?(n.hash=e.slice(r),n.search=e.slice(i,r)):n.search=e.slice(i);var o=n.search.slice(1),a=L.parse(o);return"string"==typeof t&&t.length>0?a[t]:a}function c(e){if($){if("Vue"===Z)return weex.requireModule(e);var t="@weex-module/"+e;return __weex_require__(t)}if("Vue"===Z)return weex.requireModule(e)}function s(e){var t="00"+e;return t.substring(t.length-2)}function f(e){var t=window._WebViewJavascriptBridge;if(!t)throw"runtime and bridge are not ready";var n=e.body,i=e.onSuccess,r=e.onFail,o=e.context;t.callHandler("exec",n,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof i&&i.call(o,e.result):"function"==typeof r&&r.call(o,e.result)),"function"==typeof r&&r.call("-1","")})}function d(e){var t=e.body,n=e.onSuccess,i=e.onFail,r=e.context,o=t.plugin,a=t.action,u=t.args;(0,window.WebViewJavascriptBridgeAndroid)(o,a,u,n,i,r)}function p(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function v(e){if(ae)window._WebViewJavascriptBridge?f(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){f(e)},!1);else if(oe){var t=window;t.nuva&&(void 0===t.nuva.isReady||t.nuva.isReady)?(ue||p(),d(e)):document.addEventListener("runtimeready",function(){ue||p(),d(e)},!1)}}function h(e){var t=ce||function(){};se?r(t,e):fe?i(t,e):v(e)}function y(e,t){for(var n=t||0,i=e.length-n,r=new Array(i);i--;)r[i]=e[i+n];return r}function m(e,t){return function(n){n||(n={});var i=n.onSuccess,r=n.onFail;delete n.onSuccess,delete n.onFail,delete n.onCancel,h({body:{plugin:e,action:t,args:n},onSuccess:i,onFail:r})}}function g(e,t){var n=Object.create(null);return t.forEach(function(t){n[t]=m(e,t)}),n}function b(e){var t=Object.create(null);for(var n in e)for(var i=n.split("."),r=e[n],o=null,a=0,u=i.length;;)if(o){if(u-1===a){o[i[a]]=g(n,r);break}if(o[i[a]])a++;else if(o[i[a]]={},o=o[i[a]],++a>u)break}else{if(1===u){var l=!1,c=t[i[a]],s=g(n,r);for(var f in c)if(c.hasOwnProperty(f)){l=!0;break}if(l)for(var d in s)c[d]=s[d];else t[i[a]]=g(n,r);break}if(t[i[a]]){o=t[i[a]],a++;continue}t[i[a]]={},o=t[i[a]],a++}return t}function _(e){return function(t){h({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof t&&t(e)},onFail:function(){},context:null})}}function w(e){_("getModules")(e)}function S(e,t,n){if(!t)return void he.ready(function(){e(null)});he.ready(function(){var i=he.apis.runtime.permission,r=t||{},o=n||null;r.onSuccess=function(t){e(null,t)},r.onFail=function(t){"function"==typeof o?o(t):e(t,null)},i.requestJsApis(r)})}function T(){me&&me.length>0&&(me.forEach(function(e){e()}),me.length=0)}function x(){var e={apis:{},config:function(e){if(!e)return void ie(["config is undefined,you must configure Dingtalk parameters"],re.WARNING);ye=e},init:function(){me=[],he.init(),he.ready(function(){be=he.isReady,e.apis=he.apis?he.apis:{},T()})},ready:function(e){if(!e||"function"!=typeof e)return void ie(["callback is undefined"],re.WARNING);be?S(e,ye,ge):me&&me.push(function(e){return function(){S(e,ye,ge)}}(e))},error:function(e){"function"==typeof e&&(ge=e)},EventEmitter:he.EventEmitter};return e}function k(e){e.on=function(e,t,n){document.addEventListener(e,t,n)},e.off=function(e,t,n){document.removeEventListener(e,t,n)}}function C(e){e.on=he.on,e.off=he.off}var I="1",A="2",O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},L={stringify:a,parse:o},N={format:u,parse:l},F=function(){var e={};if("undefined"!=typeof weex){var t=weex.config,n=t.env;if(e.platform=n.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:t.bundleUrl,originalUrl:t.originalUrl},e.appVersion=n.appVersion,e.appName=n.appName;else{var i=location.href,r=N.parse(i,"dd_wx_tpl"),o=N.parse(i,"_wx_tpl");e.dingtalk={bundleUrl:r||o||"",originalUrl:i}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName,e.appVersion=navigator.appVersion,e.dingtalk={bundleUrl:__weex_options__.bundleUrl,originalUrl:__weex_options__.originalUrl};else{e.platform="Web";var a=location.href,u=N.parse(a,"dd_wx_tpl"),l=N.parse(a,"_wx_tpl");e.dingtalk={bundleUrl:u||l||"",originalUrl:a}}e.bundleFrameworkType="Rax"}return e}(),E="Web"===F.platform,V="iOS"===F.platform,U="android"===F.platform,W=V||U,P=F.dingtalk,j=F.bundleFrameworkType,M=P.bundleUrl,D=P.originalUrl,B=void 0;E&&(B=window.navigator.userAgent.toLowerCase());var G=function(){return W?"DingTalk"===F.appName||"com.alibaba.android.rimet"===F.appName:B&&B.indexOf("dingtalk")>-1}(),J=function(){return E?B&&/iphone|ipad|ipod|ios/.test(B):null}(),z=function(){return E?B&&B.indexOf("android")>-1:null}(),q=function(){if(E){var e=B.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);return null===e&&(e=B.match(/dingtalk\/([a-zA-Z0-9.-]+)/)),e&&e[1]}return F.appVersion}(),H={isDingtalk:G,isWeb:E,isWebiOS:J,isWebAndroid:z,isWeex:W,isWeexiOS:V,isWeexAndroid:U,bundleFrameworkType:j,bundleUrl:M,originalUrl:D,version:q,platform:function(){var e=void 0;return G?z?e="web.android":J?e="web.ios":U?e="weex.android":V&&(e="weex.ios"):e="not.dingtalk",e}()},Z=H.bundleFrameworkType,$=H.isWeex,K=(c("timer"),{LOG:"LOG",INFO:"INFO",WARNING:"WARNING",ERROR:"ERROR"}),Q=function(e){var t,n,i,r,o=s(e.time.getHours())+":"+s(e.time.getMinutes())+":"+s(e.time.getSeconds());switch(e.type){case K.LOG:(t=console).log.apply(t,["time:"+o+" | log: "].concat(R(e.logArr)));break;case K.INFO:(n=console).info.apply(n,["time:"+o+" | info: "].concat(R(e.logArr)));break;case K.ERROR:(i=console).error.apply(i,["time:"+o+" | error: "].concat(R(e.logArr)));break;case K.WARNING:(r=console).warn.apply(r,["time:"+o+" | warning: "].concat(R(e.logArr)))}},X=function(e){Q=e},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.LOG;Q({type:t,logArr:e,time:new Date})},ee={log:Y,setLog:X,LogType:K},te=H,ne=c,ie=ee.log,re=ee.LogType,oe=null,ae=null,ue=!1;if(te.isWeb){var le=window.navigator.userAgent.toLowerCase();oe=le&&le.indexOf("android")>-1,ae=le&&/iphone|ipad|ipod|ios/.test(le)}var ce=null,se=te.isWeexiOS,fe=te.isWeexAndroid;te.isWeex&&(ce=ne("nuvajs-exec").exec);var de={},pe={on:function(e,t){var n=de[e];n?n.push(t):de[e]=[],n||de[e].push(t)},off:function(e,t){var n=de[e];if(!n)return!1;if(!e&&!t)return de={},!0;if(e&&!t)return de[e]=null,!0;for(var i=void 0,r=n.length;r--;)if((i=n[r])===t||i.fun===t){n.splice(r,1);break}return!0},once:function(e,t){function n(){pe.off(e,n),t.apply(this,arguments)}n.fun=t,pe.on(e,n)},emit:function(e){if("string"==typeof e){var t=de[e],n=y(arguments,1);if(t)for(var i=0,r=t.length;i<r;i++){var o=t[i];o.apply(this,n)}}}},ve={};te.isWeex&&(ve=ne("globalEvent"));var he={getModules:null,isReady:!1,runtime:{info:_("info"),_interceptBackButton:_("interceptBackButton"),_interceptNavTitle:_("interceptNavTitle"),_recoverNavTitle:_("recoverNavTitle"),_getModules:_("getModules")},init:function(){w(function(e){e&&(he.isReady=!0,he.apis=b(e),pe.emit("__ship_ready__"))})},ready:function(e){he.isReady?"function"==typeof e&&e():"function"==typeof e&&pe.once("__ship_ready__",function(){e()})},on:function(e,t){ve.addEventListener(e,function(e){var n={preventDefault:function(){ie(["does not support preventDefault"],re.WARNING)},detail:e};t.call(this,n)})},off:ve.removeEventListener,EventEmitter:pe},ye=null,me=null,ge=null,be=!1,_e=!0,we={},Se=te.isDingtalk,Te=te.isWeex,xe=te.isWeb;ie(["current environment: "+te.platform]),Se?_e&&(_e=!1,Te?we=function(){var e=x();return C(e),e}():xe&&(we=function(){var e=x();return k(e),e}()),we.init()):ie(["can only open the page be Dingtalk Container"],re.WARNING);var ke=we;e.exports=ke},1:function(e,t,n){"use strict";function i(){var e=Date.parse(new Date).toString();return e=e.substr(0,10)}function r(e){var t=e,n=i();return G+t+"?Action="+t+"&AppId="+J+"&SecretKey="+z+"&TimeStamp="+n}function o(e){return encodeURIComponent(C(z,encodeURIComponent(e).toLowerCase()))}function a(e,t){var n=r("dd/getpackage"),i=o(n);M.fetch({method:"POST",body:JSON.stringify({Body:{Url:e}}),url:n+"&Signature="+i},t)}function u(e,t){var n=r("dd/getuserinfo"),i=o(n);M.fetch({method:"POST",body:JSON.stringify({Body:{Code:e}}),url:n+"&Signature="+i},t)}function l(e,t){var n=r("checkin/list"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function c(e,t){var n=r("checkin/getlist"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function s(e,t){var n=r("visit/getlist"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function f(e,t){var n=r("dealer/getlist"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function d(e,t){var n=r("dealer/udlocation"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function p(e,t){var n=r("visit/getdetail"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function v(e,t){var n=r("checkin/cplocalrange"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function h(e,t){var n=r("visit/add"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function y(e,t){var n=r("visit/addother"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function m(e,t){var n=r("visit/getdetail"),i=o(n);M.fetch({method:"POST",body:e,url:n+"&Signature="+i},t)}function g(e,t,n){P.default.ready(function(){P.default.apis.biz.util.openLink({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function b(e,t,n){P.default.ready(function(){P.default.apis.biz.navigation.replace({url:q+e+".js?dd_wx_tpl="+q+e+".js",onSuccess:t,onFail:n})})}function _(e,t){P.default.ready(function(){P.default.apis.biz.navigation.close({onSuccess:e,onFail:t})})}function w(e,t){P.default.ready(function(){P.default.apis.biz.navigation.goBack({onSuccess:e,onFail:t})})}function S(e,t,n){B.setItem(e,t,n)}function T(e,t){B.getItem(e,t)}function x(e,t){B.removeItem(e,t)}function k(e,t){(!t||t>5)&&(t=3),D.toast({message:e,duration:t})}function C(e,t){return A(I(O(e),O(t)))}function I(e,t){var n=R(e);n.length>16&&(n=N(n,8*e.length));for(var i=Array(16),r=Array(16),o=0;o<16;o++)i[o]=909522486^n[o],r[o]=1549556828^n[o];var a=N(i.concat(R(t)),512+8*t.length);return L(N(r.concat(a),672))}function A(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="",i=e.length,r=0;r<i;r+=3)for(var o=e.charCodeAt(r)<<16|(r+1<i?e.charCodeAt(r+1)<<8:0)|(r+2<i?e.charCodeAt(r+2):0),a=0;a<4;a++)8*r+6*a>8*e.length?n+=H:n+=t.charAt(o>>>6*(3-a)&63);return n}function O(e){for(var t,n,i="",r=-1;++r<e.length;)t=e.charCodeAt(r),n=r+1<e.length?e.charCodeAt(r+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),r++),t<=127?i+=String.fromCharCode(t):t<=2047?i+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?i+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(i+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return i}function R(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(var n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return t}function L(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function N(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n=Array(80),i=1732584193,r=-271733879,o=-1732584194,a=271733878,u=-1009589776,l=0;l<e.length;l+=16){for(var c=i,s=r,f=o,d=a,p=u,v=0;v<80;v++){n[v]=v<16?e[l+v]:U(n[v-3]^n[v-8]^n[v-14]^n[v-16],1);var h=V(V(U(i,5),F(v,r,o,a)),V(V(u,n[v]),E(v)));u=a,a=o,o=U(r,30),r=i,i=h}i=V(i,c),r=V(r,s),o=V(o,f),a=V(a,d),u=V(u,p)}return Array(i,r,o,a,u)}function F(e,t,n,i){return e<20?t&n|~t&i:e<40?t^n^i:e<60?t&n|t&i|n&i:t^n^i}function E(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function V(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function U(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.jsapifun=a,t.getUserId=u,t.getCheckinList=l,t.getVisitList=c,t.dealerVisitList=s,t.getDealerList=f,t.setUdlocation=d,t.getVisitDealer=p,t.getCheckin=v,t.visibleAddFun=h,t.visibleAddotherFun=y,t.getVisibleDetail=m,t.openLink=g,t.replaceLink=b,t.closeLink=_,t.goBackLink=w,t.setItem=S,t.getItem=T,t.removeItem=x,t.toast=k;var W=n(0),P=function(e){return e&&e.__esModule?e:{default:e}}(W),j=(n(4),weex.requireModule("meta")),M=weex.requireModule("stream"),D=weex.requireModule("modal"),B=weex.requireModule("storage"),G="https://crm-api.360che.com/",J="bs_800f0pvf7wwnccft7jei",z="8821105875dd2199970820d87cf5ee0d",q="https://s.kcimg.cn/dingtalk/js/v.2.1/";j&&j.setViewport({width:400});var H="="},2:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?v=p.concat(v):y=-1,v.length&&u())}function u(){if(!h){var e=r(a);h=!0;for(var t=v.length;t;){for(p=v,v=[];++y<t;)p&&p[y].run();y=-1,t=v.length}p=null,h=!1,o(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(e){f=i}}();var p,v=[],h=!1,y=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new l(e,t)),1!==v.length||h||r(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{lists:[{otherSome:!0,title:"经销商",type:"DealerName",value:"",store:!1,activity:"err"},{otherSome:!1,title:"拜访店铺",type:"DealerSubJsonList",value:[],store:!0,name:"StoreName"},{otherSome:!1,title:"经销商级别",type:"DealerLevel",value:"",store:!1,activity:"err"},{otherSome:!0,title:"拜访时间",type:"CreateDate",value:"",store:!1,activity:"err"},{otherSome:!0,title:"定位地址",type:"DetailPlace",value:"",store:!1,activity:"err"},{otherSome:!0,title:"拜访类别",type:"VisitTypeText",value:"",store:!1,activity:"err"},{otherSome:!1,title:"被访人级别",type:"ContactInfoList",value:[],need:"1"},{otherSome:!1,title:"培训相关信息",type:"TrainingInfoModel",value:[],need:"2"},{otherSome:!1,title:"活动相关信息",type:"ActivityInfoList",value:"",store:!1,activity:"ok"},{otherSome:!1,title:"客户意向类型",type:"IntentionType",value:"",store:!1,activity:"err"},{otherSome:!1,title:"拒绝原因",type:"IntentionType",value:"",store:!1,activity:"err"},{otherSome:!1,title:"是否知道卡车之家",type:"CommentContent",value:"",store:!1,activity:"err",isok:!0},{otherSome:!1,title:"是否合作其他家",type:"OtherCooperation",value:"",store:!1,activity:"err",isok:!0},{otherSome:!1,title:"客户年销量",type:"SalesVolume",value:"",store:!1,activity:"err"},{otherSome:!1,title:"拜访结果",type:"VisitContent",value:"",store:!1,activity:"err",stage:"1",visibleType:"err"},{otherSome:!0,title:"拜访内容",type:"VisitContent",value:"",store:!1,activity:"err",stage:"2",visibleType:"err"},{otherSome:!1,title:"购买原因",type:"VisitContent",value:"",store:!1,activity:"err",stage:"3",visibleType:"err"},{otherSome:!1,title:"活动内容",type:"VisitContent",value:"",store:!1,activity:"err",stage:"4",visibleType:"err"},{otherSome:!1,title:"是否已付款",type:"IsAlreadyPay",value:"",store:!1,activity:"err"},{otherSome:!1,title:"是否团签",type:"IsGroup",value:"",store:!1,activity:"err"},{otherSome:!1,title:"客户年销售额(台)",type:"SalesVolume",value:"",store:!1,activity:"err"},{otherSome:!1,title:"客户线索销售量",type:"LeadsSales",value:"",store:!1,activity:"err"},{otherSome:!1,title:"成交量比例",type:"VolumeRatio",value:"",store:!1,activity:"err"},{otherSome:!1,title:"客户建议",type:"CustomerSuggestion",value:"",store:!1,activity:"err"},{otherSome:!1,title:"成功分享",type:"SuccessShare",value:"",store:!1,activity:"err"},{otherSome:!1,title:"谈判计划",type:"NegotiationPlan",value:"",store:!1,activity:"err"},{otherSome:!0,title:"发现问题",type:"QuestionContent",value:"",store:!1,activity:"err"}],visibleData:{},CheckInRecord:null,isGoTo:!1}},mounted:function(){o.default.ready(function(){var e=o.default.apis;e.biz.navigation.setTitle({title:"拜访记录"}),e.device.notification.showPreloader({text:"使劲加载中..",showIcon:!0,onSuccess:function(e){},onFail:function(e){}})})},created:function(){var e=this;(0,i.getItem)("CheckInRecord",function(t){e.CheckInRecord=JSON.parse(t.data),e.CheckInRecord.CheckUserName?e.listFun(e.CheckInRecord):e.visibleDetail()}),(0,i.getItem)("submitok",function(t){1==t.data?(e.isGoTo=!1,(0,i.removeItem)("submitok")):e.isGoTo=!0})},methods:{visibleDetail:function(){var e=this;(0,i.getVisibleDetail)(JSON.stringify({Body:{CheckInRecordId:this.CheckInRecord.Id,UserId:this.CheckInRecord.UserId}}),function(t){var n=JSON.parse(t.data),i=n.Body;"其他商业配合拜访"==i.VisitTypeText?e.otherListFun(i):e.listFun(i)})},otherListFun:function(e){this.lists.forEach(function(t,n){t.otherSome&&(t.value=e[t.type],"err"==t.visibleType&&(t.visibleType="ok"))}),o.default.ready(function(){o.default.apis.device.notification.hidePreloader()})},listFun:function(e){this.lists.forEach(function(t,n){if(t.need){if("1"===t.need)e[t.type].forEach(function(e,n){var i={title:e.Position,type:"RealName",value:e.RealName};if(t.value.push(i),e.Telephone){var r={title:e.Position+"联系方式",type:"Telephone",value:e.Telephone};t.value.push(r)}});else if("2"===t.need){var i=["培训内容","培训原因","被培训人姓名","被培训人职务"],r=e[t.type],o=0;for(var a in r){var u={title:i[o],type:a,value:r[a]};t.value.push(u),o++}}}else!0===t.store&&e[t.type].forEach(function(e,n){t.value.push(e.StoreName)});if("err"===t.activity){if("DealerLevel"===t.type?t.value=1==e[t.type]?"一级":"二级":t.value=e[t.type],"VisitContent"==t.type)switch(e.VisitType){case 1:case 2:case 3:"1"===t.stage&&(t.visibleType="ok");break;case 6:"4"===t.stage&&(t.visibleType="ok");break;case 8:"2"===t.stage&&(t.visibleType="ok");break;case 4:case 5:case 9:case 10:"2"===t.stage&&(t.visibleType="ok")}}else if("ok"===t.activity){var l=e[t.type];for(var c in l)t.value+=l[c].ActivityTypeText+" "}}),o.default.ready(function(){o.default.apis.device.notification.hidePreloader()})},submit:function(){var e=this;this.SomeOpen||(this.SomeOpen=!0,(0,i.openLink)("visible/index",function(t){e.SomeOpen=!1}))}}}},3:function(e,t,n){(function(e,t){!function(e,n){"use strict";function i(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[l]=i,u(l),l++}function r(e){delete c[e]}function o(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i)}}function a(e){if(s)setTimeout(a,0,e);else{var t=c[e];if(t){s=!0;try{o(t)}finally{r(e),s=!1}}}}if(!e.setImmediate){var u,l=1,c={},s=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(a,0,e)}}(),d.setImmediate=i,d.clearImmediate=r}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(5),n(2))},4:function(e,t,n){function i(e,t){this._id=e,this._clearFn=t}var r=Function.prototype.apply;t.setTimeout=function(){return new i(r.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(3),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},5:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},51:function(e,t){e.exports={view:{backgroundColor:"#ffffff"},detail:{paddingLeft:16},box:{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"rgba(23,24,26,0.08)",paddingTop:12,paddingBottom:12,lineHeight:24,flexDirection:"row",justifyContent:"flex-start"},"left-text":{fontSize:16,color:"#17181A",width:88,paddingRight:24,textAlign:"right",lineHeight:24},right:{paddingTop:1,paddingBottom:1},"right-text":{fontSize:14,color:"#5C6066",lineHeight:22,width:280},submit:{width:400,height:50,backgroundColor:"#1571E5",alignItems:"center",justifyContent:"center",lineHeight:50,textAlign:"center",position:"fixed",bottom:0,left:0},"submit-text":{color:"#ffffff",fontSize:18},"view-box":{paddingBottom:50}}},69:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["view"]},[n("scroller",{staticClass:["view-box"]},e._l(e.lists,function(t){return t.value.length&&(!t.visibleType||t.visibleType&&"ok"==t.visibleType)?n("div",{staticClass:["detail"]},[e._l(t.value,function(i){return t.need?n("div",{staticClass:["box"]},[n("text",{staticClass:["left-text"]},[e._v(e._s(i.title))]),n("div",{staticClass:["right"]},[n("text",{staticClass:["right-text"]},[e._v(e._s(i.value))])])]):e._e()}),t.need?e._e():n("div",{staticClass:["box"]},[n("text",{staticClass:["left-text"]},[e._v(e._s(t.title))]),n("div",{staticClass:["right"]},[e._l(t.value,function(i){return!0===t.store?n("text",{staticClass:["right-text"]},[e._v(e._s(i))]):e._e()}),!0===t.isok&&t.value.length>1?n("text",{staticClass:["right-text"]},[e._v("是")]):e._e(),!1===t.store?n("text",{staticClass:["right-text"]},[e._v(e._s(t.value))]):e._e()],2)])],2):e._e()})),e.isGoTo?n("div",{staticClass:["submit"],on:{click:e.submit}},[n("text",{staticClass:["submit-text"]},[e._v("修改")])]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},83:function(e,t,n){var i,r,o=[];o.push(n(51)),i=n(25);var a=n(69);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/houyaohui/wwwroot/test/ddweex2/src/detail/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-5b1a3ca0",r.style=r.style||{},o.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),e.exports=i,e.exports.el="true",new Vue(e.exports)}});