(()=>{var t={591:(t,e,r)=>{var n=r(8).default;function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function d(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==r&&i.call(w,c)&&(g=w);var b=y.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=y,l(b,"constructor",y),l(y,"constructor",v),v.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,r)=>{t.exports=r(591)()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function c(e){t(a,o,i,c,s,"next",e)}function s(e){t(a,o,i,c,s,"throw",e)}c(void 0)}))}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=r(757),c=r.n(a);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=c().mark(p);function h(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}function p(t,e){var r,n,o,i,a;return c().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(t){c.next=2;break}return c.abrupt("return");case 2:if(r=Object.keys(t),n=l(r,1),void 0!==(o=n[0])){c.next=5;break}return c.abrupt("return");case 5:if(i=t[o],a=u(t,[o].map(h)),o!==e){c.next=9;break}return c.next=9,t;case 9:if("object"!==s(i)){c.next=11;break}return c.delegateYield(p(i,e),"t0",11);case 11:return c.delegateYield(p(a,e),"t1",12);case 12:case"end":return c.stop()}}),f)}function d(t,e){return v.apply(this,arguments)}function v(){return(v=e(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(e).then((function(t){return t.blob()})).then((function(t){var e=document.createElement("a");e.style.display="none",document.body.appendChild(e),e.href=window.URL.createObjectURL(t),e.setAttribute("target","_blank"),e.setAttribute("download","".concat(r,".mp4")),e.click(),window.URL.revokeObjectURL(e.href),document.body.removeChild(e)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var y=Object.prototype.toString,g=Array.isArray||function(t){return"[object Array]"===y.call(t)};function m(t){return"function"==typeof t}function w(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function b(t,e){return null!=t&&"object"==typeof t&&e in t}var x=RegExp.prototype.test;var E=/\S/;function L(t){return!function(t,e){return x.call(t,e)}(E,t)}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var k=/\s*/,_=/\s+/,O=/\s*=/,j=/\s*\}/,C=/#|\^|\/|>|\{|&|=|!/;function T(t){this.string=t,this.tail=t,this.pos=0}function A(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function P(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}T.prototype.eos=function(){return""===this.tail},T.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},T.prototype.scanUntil=function(t){var e,r=this.tail.search(t);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},A.prototype.push=function(t){return new A(t,this)},A.prototype.lookup=function(t){var e,r,n,o=this.cache;if(o.hasOwnProperty(t))e=o[t];else{for(var i,a,c,s=this,u=!1;s;){if(t.indexOf(".")>0)for(i=s.view,a=t.split("."),c=0;null!=i&&c<a.length;)c===a.length-1&&(u=b(i,a[c])||(r=i,n=a[c],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(n))),i=i[a[c++]];else i=s.view[t],u=b(s.view,t);if(u){e=i;break}s=s.parent}o[t]=e}return m(e)&&(e=e.call(this.view)),e},P.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},P.prototype.parse=function(t,e){var r=this.templateCache,n=t+":"+(e||M.tags).join(":"),o=void 0!==r,i=o?r.get(n):void 0;return null==i&&(i=function(t,e){if(!t)return[];var r,n,o,i=!1,a=[],c=[],s=[],u=!1,l=!1,f="",h=0;function p(){if(u&&!l)for(;s.length;)delete c[s.pop()];else s=[];u=!1,l=!1}function d(t){if("string"==typeof t&&(t=t.split(_,2)),!g(t)||2!==t.length)throw new Error("Invalid tags: "+t);r=new RegExp(w(t[0])+"\\s*"),n=new RegExp("\\s*"+w(t[1])),o=new RegExp("\\s*"+w("}"+t[1]))}d(e||M.tags);for(var v,y,m,b,x,E,S=new T(t);!S.eos();){if(v=S.pos,m=S.scanUntil(r))for(var A=0,P=m.length;A<P;++A)L(b=m.charAt(A))?(s.push(c.length),f+=b):(l=!0,i=!0,f+=" "),c.push(["text",b,v,v+1]),v+=1,"\n"===b&&(p(),f="",h=0,i=!1);if(!S.scan(r))break;if(u=!0,y=S.scan(C)||"name",S.scan(k),"="===y?(m=S.scanUntil(O),S.scan(O),S.scanUntil(n)):"{"===y?(m=S.scanUntil(o),S.scan(j),S.scanUntil(n),y="&"):m=S.scanUntil(n),!S.scan(n))throw new Error("Unclosed tag at "+S.pos);if(x=">"==y?[y,m,v,S.pos,f,h,i]:[y,m,v,S.pos],h++,c.push(x),"#"===y||"^"===y)a.push(x);else if("/"===y){if(!(E=a.pop()))throw new Error('Unopened section "'+m+'" at '+v);if(E[1]!==m)throw new Error('Unclosed section "'+E[1]+'" at '+v)}else"name"===y||"{"===y||"&"===y?l=!0:"="===y&&d(m)}if(p(),E=a.pop())throw new Error('Unclosed section "'+E[1]+'" at '+S.pos);return function(t){for(var e,r=[],n=r,o=[],i=0,a=t.length;i<a;++i)switch((e=t[i])[0]){case"#":case"^":n.push(e),o.push(e),n=e[4]=[];break;case"/":o.pop()[5]=e[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(e)}return r}(function(t){for(var e,r,n=[],o=0,i=t.length;o<i;++o)(e=t[o])&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(n.push(e),r=e));return n}(c))}(t,e),o&&r.set(n,i)),i},P.prototype.render=function(t,e,r,n){var o=this.getConfigTags(n),i=this.parse(t,o),a=e instanceof A?e:new A(e,void 0);return this.renderTokens(i,a,r,t,n)},P.prototype.renderTokens=function(t,e,r,n,o){for(var i,a,c,s="",u=0,l=t.length;u<l;++u)c=void 0,"#"===(a=(i=t[u])[0])?c=this.renderSection(i,e,r,n,o):"^"===a?c=this.renderInverted(i,e,r,n,o):">"===a?c=this.renderPartial(i,e,r,o):"&"===a?c=this.unescapedValue(i,e):"name"===a?c=this.escapedValue(i,e,o):"text"===a&&(c=this.rawValue(i)),void 0!==c&&(s+=c);return s},P.prototype.renderSection=function(t,e,r,n,o){var i=this,a="",c=e.lookup(t[1]);if(c){if(g(c))for(var s=0,u=c.length;s<u;++s)a+=this.renderTokens(t[4],e.push(c[s]),r,n,o);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)a+=this.renderTokens(t[4],e.push(c),r,n,o);else if(m(c)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(e.view,n.slice(t[3],t[5]),(function(t){return i.render(t,e,r,o)})))&&(a+=c)}else a+=this.renderTokens(t[4],e,r,n,o);return a}},P.prototype.renderInverted=function(t,e,r,n,o){var i=e.lookup(t[1]);if(!i||g(i)&&0===i.length)return this.renderTokens(t[4],e,r,n,o)},P.prototype.indentPartial=function(t,e,r){for(var n=e.replace(/[^ \t]/g,""),o=t.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=n+o[i]);return o.join("\n")},P.prototype.renderPartial=function(t,e,r,n){if(r){var o=this.getConfigTags(n),i=m(r)?r(t[1]):r[t[1]];if(null!=i){var a=t[6],c=t[5],s=t[4],u=i;0==c&&s&&(u=this.indentPartial(i,s,a));var l=this.parse(u,o);return this.renderTokens(l,e,r,u,n)}}},P.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);if(null!=r)return r},P.prototype.escapedValue=function(t,e,r){var n=this.getConfigEscape(r)||M.escape,o=e.lookup(t[1]);if(null!=o)return"number"==typeof o&&n===M.escape?String(o):n(o)},P.prototype.rawValue=function(t){return t[1]},P.prototype.getConfigTags=function(t){return g(t)?t:t&&"object"==typeof t?t.tags:void 0},P.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!g(t)?t.escape:void 0};var M={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){U.templateCache=t},get templateCache(){return U.templateCache}},U=new P;M.clearCache=function(){return U.clearCache()},M.parse=function(t,e){return U.parse(t,e)},M.render=function(t,e,r,n){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+((g(o=t)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)'));var o;return U.render(t,e,r,n)},M.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return S[t]}))},M.Scanner=T,M.Context=A,M.Writer=P;const I=M;var N,R,G=[];N=function(t){var e=function(t){return i(p(t,"extended_entities")).filter((function(t){return t.extended_entities.media.filter((function(t){return["video","animated_gif"].indexOf(t.type)>-1})).length})).map((function(t){return t.extended_entities.media.map((function(t){var e=t.video_info.variants.filter((function(t){return"video/mp4"===t.content_type})).sort((function(t,e){return e.bitrate-t.bitrate})).shift();return{id:t.id_str,photo:t.media_url_https.substr(0,t.media_url_https.lastIndexOf(".")),video:e.url}})).shift()})).filter((function(t,e,r){return r.indexOf(t)===e}))}(t);e.length&&G.push.apply(G,i(e))},R=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,e){if(/twitter\.com\/i\/api\/(2|graphql)\//i.test(e)){var r=this.send;this.send=function(){var t=this.onreadystatechange;return this.onreadystatechange=function(){var e=this.readyState,r=this.responseText;return e===XMLHttpRequest.DONE&&r&&N(JSON.parse(r)),t.apply(this,arguments)},r.apply(this,arguments)}}return R.apply(this,arguments)},function(t){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){if(e instanceof HTMLElement==!1)return!1;if("IMG"===e.nodeName){var r=e.closest("article[role='article']");r&&t({$image:e,$group:r.querySelector("[role='group']")})}}))}))})).observe(document,{childList:!0,subtree:!0})}((function(t){var r=t.$group,n=t.$image,o=G.find((function(t){return n.src.indexOf(t.photo)>-1})),i=r.getAttribute("data-twitter-video-downloader-extension");if(o&&!i){r.setAttribute("data-twitter-video-downloader-extension","true");var a=r.querySelector("svg").getBoundingClientRect(),s=a.width,u=a.height,l=document.createElement("button");l.classList.add("extension-button"),l.setAttribute("role","button"),l.insertAdjacentHTML("beforeend",I.render('<div class="extension-button-container"> <div class="extension-button-hover"></div> <svg class="download-icon" viewBox="0 0 24 24" aria-hidden="true" width="{{ width }}" height="{{ height }}"> <g> <path d="M11.47 14.53c.146.146.338.22.53.22s.384-.073.53-.22l5-5c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.72 3.72V2c0-.414-.337-.75-.75-.75s-.75.336-.75.75v10.19L7.53 8.47c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l5 5z"> </path> <path d="M21.25 13.25c-.414 0-.75.336-.75.75v5.652c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V14c0-.414-.336-.75-.75-.75S2 13.586 2 14v5.652c0 1.264 1.028 2.292 2.292 2.292h15.416c1.264 0 2.292-1.028 2.292-2.292V14c0-.414-.336-.75-.75-.75z"> </path> </g> </svg> <svg class="loading-icon" viewBox="0 0 32 32" aria-hidden="true" width="{{ width }}" height="{{ height }}"> <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle> <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle> </svg> <svg class="success-icon" viewBox="0 0 24 24" aria-hidden="true" width="{{ width }}" height="{{ height }}"> <g> <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"> </path> </g> </svg> </div>',{width:s,height:u})),r.appendChild(l),l.addEventListener("click",function(){var t=e(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.disabled=!0,this.classList.add("loading"),t.next=5,d(o.video,o.id);case 5:this.classList.remove("loading"),this.classList.add("success");case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}())}}))})()})();