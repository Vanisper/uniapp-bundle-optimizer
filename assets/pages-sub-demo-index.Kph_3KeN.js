var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;import{o as i,c,w as l,b as s,i as f,d as p,r as h,A as v,_ as b,B as y,a as _,y as d,C as g,f as j}from"./index-DbgNtqiD.js";import{_ as m}from"./_plugin-vue_export-helper.BCo6x5W8.js";void 0===globalThis._globalMethods&&(globalThis._globalMethods={});const O=m({},[["render",function(t,e){const r=f;return i(),c(r,{class:"font-bold"},{default:l((()=>[s(" 异步加载组件 - demo ")])),_:1})}]]);var w="object"==typeof global&&global&&global.Object===Object&&global,A="object"==typeof self&&self&&self.Object===Object&&self,x=w||A||Function("return this")(),P=x.Symbol,z=Object.prototype,S=z.hasOwnProperty,T=z.toString,E=P?P.toStringTag:void 0;var M=Object.prototype.toString;var k=P?P.toStringTag:void 0;function $(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?function(t){var e=S.call(t,E),r=t[E];try{t[E]=void 0;var n=!0}catch(a){}var o=T.call(t);return n&&(e?t[E]=r:delete t[E]),o}(t):function(t){return M.call(t)}(t)}function C(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function D(t){if(!C(t))return!1;var e=$(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var I,B=x["__core-js_shared__"],F=(I=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var L=Function.prototype.toString;function U(t){if(null!=t){try{return L.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var R=/^\[object .+?Constructor\]$/,V=Function.prototype,N=Object.prototype,W=V.toString,q=N.hasOwnProperty,G=RegExp("^"+W.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function H(t){return!(!C(t)||(e=t,F&&F in e))&&(D(t)?G:R).test(U(t));var e}function J(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return H(r)?r:void 0}var K=function(){try{var t=J(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();function Q(t,e,r,n){for(var o=-1,a=null==t?0:t.length;++o<a;){var u=t[o];e(n,u,r(u),t)}return n}var X=function(t,e,r){for(var n=-1,o=Object(t),a=r(t),u=a.length;u--;){var i=a[++n];if(!1===e(o[i],i,o))break}return t};function Y(t){return null!=t&&"object"==typeof t}function Z(t){return Y(t)&&"[object Arguments]"==$(t)}var tt=Object.prototype,et=tt.hasOwnProperty,rt=tt.propertyIsEnumerable,nt=Z(function(){return arguments}())?Z:function(t){return Y(t)&&et.call(t,"callee")&&!rt.call(t,"callee")},ot=Array.isArray;var at="object"==typeof exports&&exports&&!exports.nodeType&&exports,ut=at&&"object"==typeof module&&module&&!module.nodeType&&module,it=ut&&ut.exports===at?x.Buffer:void 0,ct=(it?it.isBuffer:void 0)||function(){return!1},lt=/^(?:0|[1-9]\d*)$/;function st(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&lt.test(t))&&t>-1&&t%1==0&&t<e}function ft(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}var pt={};pt["[object Float32Array]"]=pt["[object Float64Array]"]=pt["[object Int8Array]"]=pt["[object Int16Array]"]=pt["[object Int32Array]"]=pt["[object Uint8Array]"]=pt["[object Uint8ClampedArray]"]=pt["[object Uint16Array]"]=pt["[object Uint32Array]"]=!0,pt["[object Arguments]"]=pt["[object Array]"]=pt["[object ArrayBuffer]"]=pt["[object Boolean]"]=pt["[object DataView]"]=pt["[object Date]"]=pt["[object Error]"]=pt["[object Function]"]=pt["[object Map]"]=pt["[object Number]"]=pt["[object Object]"]=pt["[object RegExp]"]=pt["[object Set]"]=pt["[object String]"]=pt["[object WeakMap]"]=!1;var ht,vt="object"==typeof exports&&exports&&!exports.nodeType&&exports,bt=vt&&"object"==typeof module&&module&&!module.nodeType&&module,yt=bt&&bt.exports===vt&&w.process,_t=function(){try{var t=bt&&bt.require&&bt.require("util").types;return t||yt&&yt.binding&&yt.binding("util")}catch(e){}}(),dt=_t&&_t.isTypedArray,gt=dt?(ht=dt,function(t){return ht(t)}):function(t){return Y(t)&&ft(t.length)&&!!pt[$(t)]},jt=Object.prototype.hasOwnProperty;function mt(t,e){var r=ot(t),n=!r&&nt(t),o=!r&&!n&&ct(t),a=!r&&!n&&!o&&gt(t),u=r||n||o||a,i=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=i.length;for(var l in t)!jt.call(t,l)||u&&("length"==l||o&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||st(l,c))||i.push(l);return i}var Ot=Object.prototype;var wt=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),At=Object.prototype.hasOwnProperty;function xt(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||Ot))return wt(t);var e,r,n=[];for(var o in Object(t))At.call(t,o)&&"constructor"!=o&&n.push(o);return n}function Pt(t){return null!=t&&ft(t.length)&&!D(t)}function zt(t){return Pt(t)?mt(t):xt(t)}var St,Tt=(St=function(t,e){return t&&X(t,e,zt)},function(t,e){if(null==t)return t;if(!Pt(t))return St(t,e);for(var r=t.length,n=-1,o=Object(t);++n<r&&!1!==e(o[n],n,o););return t});function Et(t,e,r,n){return Tt(t,(function(t,o,a){e(n,t,r(t),a)})),n}function Mt(t,e){return t===e||t!=t&&e!=e}function kt(t,e){for(var r=t.length;r--;)if(Mt(t[r][0],e))return r;return-1}var $t=Array.prototype.splice;function Ct(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ct.prototype.clear=function(){this.__data__=[],this.size=0},Ct.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0)&&(r==e.length-1?e.pop():$t.call(e,r,1),--this.size,!0)},Ct.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},Ct.prototype.has=function(t){return kt(this.__data__,t)>-1},Ct.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var Dt=J(x,"Map"),It=J(Object,"create");var Bt=Object.prototype.hasOwnProperty;var Ft=Object.prototype.hasOwnProperty;function Lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Rt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Lt.prototype.clear=function(){this.__data__=It?It(null):{},this.size=0},Lt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Lt.prototype.get=function(t){var e=this.__data__;if(It){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Bt.call(e,t)?e[t]:void 0},Lt.prototype.has=function(t){var e=this.__data__;return It?void 0!==e[t]:Ft.call(e,t)},Lt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=It&&void 0===e?"__lodash_hash_undefined__":e,this},Rt.prototype.clear=function(){this.size=0,this.__data__={hash:new Lt,map:new(Dt||Ct),string:new Lt}},Rt.prototype.delete=function(t){var e=Ut(this,t).delete(t);return this.size-=e?1:0,e},Rt.prototype.get=function(t){return Ut(this,t).get(t)},Rt.prototype.has=function(t){return Ut(this,t).has(t)},Rt.prototype.set=function(t,e){var r=Ut(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Vt(t){var e=this.__data__=new Ct(t);this.size=e.size}Vt.prototype.clear=function(){this.__data__=new Ct,this.size=0},Vt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},Vt.prototype.get=function(t){return this.__data__.get(t)},Vt.prototype.has=function(t){return this.__data__.has(t)},Vt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Ct){var n=r.__data__;if(!Dt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Rt(n)}return r.set(t,e),this.size=r.size,this};function Nt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Rt;++e<r;)this.add(t[e])}function Wt(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}Nt.prototype.add=Nt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Nt.prototype.has=function(t){return this.__data__.has(t)};function qt(t,e,r,n,o,a){var u=1&r,i=t.length,c=e.length;if(i!=c&&!(u&&c>i))return!1;var l=a.get(t),s=a.get(e);if(l&&s)return l==e&&s==t;var f=-1,p=!0,h=2&r?new Nt:void 0;for(a.set(t,e),a.set(e,t);++f<i;){var v=t[f],b=e[f];if(n)var y=u?n(b,v,f,e,t,a):n(v,b,f,t,e,a);if(void 0!==y){if(y)continue;p=!1;break}if(h){if(!Wt(e,(function(t,e){if(u=e,!h.has(u)&&(v===t||o(v,t,r,n,a)))return h.push(e);var u}))){p=!1;break}}else if(v!==b&&!o(v,b,r,n,a)){p=!1;break}}return a.delete(t),a.delete(e),p}var Gt=x.Uint8Array;function Ht(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function Jt(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var Kt=P?P.prototype:void 0,Qt=Kt?Kt.valueOf:void 0;var Xt=Object.prototype.propertyIsEnumerable,Yt=Object.getOwnPropertySymbols,Zt=Yt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var u=t[r];e(u,r,t)&&(a[o++]=u)}return a}(Yt(t),(function(e){return Xt.call(t,e)})))}:function(){return[]};function te(t){return function(t,e,r){var n=e(t);return ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Zt)}var ee=Object.prototype.hasOwnProperty;var re=J(x,"DataView"),ne=J(x,"Promise"),oe=J(x,"Set"),ae=J(x,"WeakMap"),ue="[object Map]",ie="[object Promise]",ce="[object Set]",le="[object WeakMap]",se="[object DataView]",fe=U(re),pe=U(Dt),he=U(ne),ve=U(oe),be=U(ae),ye=$;(re&&ye(new re(new ArrayBuffer(1)))!=se||Dt&&ye(new Dt)!=ue||ne&&ye(ne.resolve())!=ie||oe&&ye(new oe)!=ce||ae&&ye(new ae)!=le)&&(ye=function(t){var e=$(t),r="[object Object]"==e?t.constructor:void 0,n=r?U(r):"";if(n)switch(n){case fe:return se;case pe:return ue;case he:return ie;case ve:return ce;case be:return le}return e});var _e="[object Arguments]",de="[object Array]",ge="[object Object]",je=Object.prototype.hasOwnProperty;function me(t,e,r,n,o,a){var u=ot(t),i=ot(e),c=u?de:ye(t),l=i?de:ye(e),s=(c=c==_e?ge:c)==ge,f=(l=l==_e?ge:l)==ge,p=c==l;if(p&&ct(t)){if(!ct(e))return!1;u=!0,s=!1}if(p&&!s)return a||(a=new Vt),u||gt(t)?qt(t,e,r,n,o,a):function(t,e,r,n,o,a,u){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new Gt(t),new Gt(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Mt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var i=Ht;case"[object Set]":var c=1&n;if(i||(i=Jt),t.size!=e.size&&!c)return!1;var l=u.get(t);if(l)return l==e;n|=2,u.set(t,e);var s=qt(i(t),i(e),n,o,a,u);return u.delete(t),s;case"[object Symbol]":if(Qt)return Qt.call(t)==Qt.call(e)}return!1}(t,e,c,r,n,o,a);if(!(1&r)){var h=s&&je.call(t,"__wrapped__"),v=f&&je.call(e,"__wrapped__");if(h||v){var b=h?t.value():t,y=v?e.value():e;return a||(a=new Vt),o(b,y,r,n,a)}}return!!p&&(a||(a=new Vt),function(t,e,r,n,o,a){var u=1&r,i=te(t),c=i.length;if(c!=te(e).length&&!u)return!1;for(var l=c;l--;){var s=i[l];if(!(u?s in e:ee.call(e,s)))return!1}var f=a.get(t),p=a.get(e);if(f&&p)return f==e&&p==t;var h=!0;a.set(t,e),a.set(e,t);for(var v=u;++l<c;){var b=t[s=i[l]],y=e[s];if(n)var _=u?n(y,b,s,e,t,a):n(b,y,s,t,e,a);if(!(void 0===_?b===y||o(b,y,r,n,a):_)){h=!1;break}v||(v="constructor"==s)}if(h&&!v){var d=t.constructor,g=e.constructor;d==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof d&&d instanceof d&&"function"==typeof g&&g instanceof g||(h=!1)}return a.delete(t),a.delete(e),h}(t,e,r,n,o,a))}function Oe(t,e,r,n,o){return t===e||(null==t||null==e||!Y(t)&&!Y(e)?t!=t&&e!=e:me(t,e,r,n,Oe,o))}function we(t){return t==t&&!C(t)}function Ae(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}function xe(t){var e=function(t){for(var e=zt(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,we(o)]}return e}(t);return 1==e.length&&e[0][2]?Ae(e[0][0],e[0][1]):function(r){return r===t||function(t,e,r,n){var o=r.length,a=o;if(null==t)return!a;for(t=Object(t);o--;){var u=r[o];if(u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var i=(u=r[o])[0],c=t[i],l=u[1];if(u[2]){if(void 0===c&&!(i in t))return!1}else if(!Oe(l,c,3,n,new Vt))return!1}return!0}(r,0,e)}}function Pe(t){return"symbol"==typeof t||Y(t)&&"[object Symbol]"==$(t)}var ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Se=/^\w*$/;function Te(t,e){if(ot(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Pe(t))||(Se.test(t)||!ze.test(t)||null!=e&&t in Object(e))}function Ee(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var u=t.apply(this,n);return r.cache=a.set(o,u)||a,u};return r.cache=new(Ee.Cache||Rt),r}Ee.Cache=Rt;var Me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ke=/\\(\\)?/g,$e=function(t){var e=Ee(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Me,(function(t,r,n,o){e.push(n?o.replace(ke,"$1"):r||t)})),e}));var Ce=P?P.prototype:void 0,De=Ce?Ce.toString:void 0;function Ie(t){if("string"==typeof t)return t;if(ot(t))return function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,Ie)+"";if(Pe(t))return De?De.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Be(t,e){return ot(t)?t:Te(t,e)?[t]:$e(function(t){return null==t?"":Ie(t)}(t))}function Fe(t){if("string"==typeof t||Pe(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Le(t,e){for(var r=0,n=(e=Be(e,t)).length;null!=t&&r<n;)t=t[Fe(e[r++])];return r&&r==n?t:void 0}function Ue(t,e){return null!=t&&e in Object(t)}function Re(t,e){return null!=t&&function(t,e,r){for(var n=-1,o=(e=Be(e,t)).length,a=!1;++n<o;){var u=Fe(e[n]);if(!(a=null!=t&&r(t,u)))break;t=t[u]}return a||++n!=o?a:!!(o=null==t?0:t.length)&&ft(o)&&st(u,o)&&(ot(t)||nt(t))}(t,e,Ue)}function Ve(t,e){return Te(t)&&we(e)?Ae(Fe(t),e):function(r){var n=function(t,e,r){var n=null==t?void 0:Le(t,e);return void 0===n?r:n}(r,t);return void 0===n&&n===e?Re(r,t):Oe(e,n,3)}}function Ne(t){return t}function We(t){return Te(t)?(e=Fe(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return Le(e,t)}}(t);var e}var qe,Ge=Object.prototype.hasOwnProperty,He=(qe=function(t,e,r){Ge.call(t,r)?t[r].push(e):function(t,e,r){"__proto__"==e&&K?K(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}(t,r,[e])},function(t,e){var r;return(ot(t)?Q:Et)(t,qe,"function"==typeof(r=e)?r:null==r?Ne:"object"==typeof r?ot(r)?Ve(r[0],r[1]):xe(r):We(r),{})});void 0===globalThis._globalMethods&&(globalThis._globalMethods={});const Je=p({components:{AsyncComponentDemo:O},asyncCustomComponents:{AsyncComponentDemo:"../pages-sub-async/async-component/index"}}),Ke=p((Qe=((t,e)=>{for(var r in e||(e={}))o.call(e,r)&&u(t,r,e[r]);if(n)for(var r of n(e))a.call(e,r)&&u(t,r,e[r]);return t})({},Je),e(Qe,r({__name:"index",setup(t){const e=h(Array.from({length:10},((t,e)=>({id:e,name:`name-${e}`}))));return v((()=>{return t=this,e=null,r=function*(){try{yield b((()=>import("./pages-sub-async-async-plugin-index.DlbnbXlk.js")),[],import.meta.url).then((t=>{console.log("plugin",t)}))}catch(t){}yield import("./pages-sub-async-async-plugin-index.DlbnbXlk.js").then((t=>{console.log(null==t?void 0:t.AsyncPlugin())})),import("./pages-sub-async-index.BK3qaxfT.js").then((t=>{console.log(t.default||t)}))},new Promise(((n,o)=>{var a=t=>{try{i(r.next(t))}catch(e){o(e)}},u=t=>{try{i(r.throw(t))}catch(e){o(e)}},i=t=>t.done?n(t.value):Promise.resolve(t.value).then(a,u);i((r=r.apply(t,e)).next())}));var t,e,r})),(t,r)=>{const n=j,o=f;return i(),c(o,null,{default:l((()=>[y("h1",null,"子包"),_(n,null,{default:l((()=>[s("pages-sub-demo")])),_:1}),_(O),_(o,null,{default:l((()=>[s("---- 对象数组 ---")])),_:1}),_(o,null,{default:l((()=>[s(d(e.value),1)])),_:1}),_(o,null,{default:l((()=>[s("---- lodash groupBy ---")])),_:1}),_(o,null,{default:l((()=>[s(d(g(He)(e.value,"id")),1)])),_:1})])),_:1})}}}))));var Qe;void 0===globalThis._globalMethods&&(globalThis._globalMethods={});export{Ke as default};
