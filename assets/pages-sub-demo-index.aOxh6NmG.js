import{d as t,o as r,c as e,w as n,b as o,y as a,i as u,A as i,B as c,r as s,C as f,_ as l,D as v,a as p,E as h,f as y}from"./index-Bbct6M40.js";import _ from"./pages-sub-async-index.D6kPU93h.js";import"./_plugin-vue_export-helper.BCo6x5W8.js";const b=t({__name:"index",props:{text:String},setup:t=>(i,c)=>{const s=u;return r(),e(s,{class:"font-bold"},{default:n((()=>[o(" 异步加载组件 - demo - "+a(t.text),1)])),_:1})}});var d="object"==typeof i&&i&&i.Object===Object&&i,g=d,j="object"==typeof self&&self&&self.Object===Object&&self,O=g||j||Function("return this")(),m=O.Symbol,w=m,A=Object.prototype,x=A.hasOwnProperty,z=A.toString,P=w?w.toStringTag:void 0;var S=function(t){var r=x.call(t,P),e=t[P];try{t[P]=void 0;var n=!0}catch(a){}var o=z.call(t);return n&&(r?t[P]=e:delete t[P]),o},E=Object.prototype.toString;var k=S,$=function(t){return E.call(t)},T=m?m.toStringTag:void 0;var B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?k(t):$(t)};var F=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},I=B,D=F;var M,C=function(t){if(!D(t))return!1;var r=I(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},L=O["__core-js_shared__"],U=(M=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var R=function(t){return!!U&&U in t},V=Function.prototype.toString;var N=function(t){if(null!=t){try{return V.call(t)}catch(r){}try{return t+""}catch(r){}}return""},W=C,q=R,G=F,H=N,J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,X=K.toString,Y=Q.hasOwnProperty,Z=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tt=function(t){return!(!G(t)||q(t))&&(W(t)?Z:J).test(H(t))},rt=function(t,r){return null==t?void 0:t[r]};var et=function(t,r){var e=rt(t,r);return tt(e)?e:void 0},nt=et,ot=function(){try{var t=nt(Object,"defineProperty");return t({},"",{}),t}catch(r){}}();var at=function(t,r,e){"__proto__"==r&&ot?ot(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e};var ut=function(t,r,e,n){for(var o=-1,a=null==t?0:t.length;++o<a;){var u=t[o];r(n,u,e(u),t)}return n};var it=function(t){return function(r,e,n){for(var o=-1,a=Object(r),u=n(r),i=u.length;i--;){var c=u[t?i:++o];if(!1===e(a[c],c,a))break}return r}}();var ct=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var st=function(t){return null!=t&&"object"==typeof t},ft=B,lt=st;var vt,pt,ht,yt,_t,bt,dt,gt,jt=function(t){return lt(t)&&"[object Arguments]"==ft(t)},Ot=st,mt=Object.prototype,wt=mt.hasOwnProperty,At=mt.propertyIsEnumerable,xt=jt(function(){return arguments}())?jt:function(t){return Ot(t)&&wt.call(t,"callee")&&!At.call(t,"callee")},zt=Array.isArray,Pt={exports:{}};vt=Pt,ht=O,yt=function(){return!1},_t=(pt=Pt.exports)&&!pt.nodeType&&pt,bt=_t&&vt&&!vt.nodeType&&vt,dt=bt&&bt.exports===_t?ht.Buffer:void 0,gt=(dt?dt.isBuffer:void 0)||yt,vt.exports=gt;var St=Pt.exports,Et=/^(?:0|[1-9]\d*)$/;var kt=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&Et.test(t))&&t>-1&&t%1==0&&t<r};var $t=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Tt=B,Bt=$t,Ft=st,It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var Dt=function(t){return Ft(t)&&Bt(t.length)&&!!It[Tt(t)]};var Mt=function(t){return function(r){return t(r)}},Ct={exports:{}};!function(t,r){var e=d,n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,a=o&&o.exports===n&&e.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(r){}}();t.exports=u}(Ct,Ct.exports);var Lt=Ct.exports,Ut=Dt,Rt=Mt,Vt=Lt&&Lt.isTypedArray,Nt=Vt?Rt(Vt):Ut,Wt=ct,qt=xt,Gt=zt,Ht=St,Jt=kt,Kt=Nt,Qt=Object.prototype.hasOwnProperty;var Xt=function(t,r){var e=Gt(t),n=!e&&qt(t),o=!e&&!n&&Ht(t),a=!e&&!n&&!o&&Kt(t),u=e||n||o||a,i=u?Wt(t.length,String):[],c=i.length;for(var s in t)!r&&!Qt.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Jt(s,c))||i.push(s);return i},Yt=Object.prototype;var Zt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Yt)};var tr=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),rr=Zt,er=tr,nr=Object.prototype.hasOwnProperty;var or=C,ar=$t;var ur=function(t){return null!=t&&ar(t.length)&&!or(t)},ir=Xt,cr=function(t){if(!rr(t))return er(t);var r=[];for(var e in Object(t))nr.call(t,e)&&"constructor"!=e&&r.push(e);return r},sr=ur;var fr=function(t){return sr(t)?ir(t):cr(t)},lr=it,vr=fr;var pr=ur;var hr=function(t,r){return function(e,n){if(null==e)return e;if(!pr(e))return t(e,n);for(var o=e.length,a=r?o:-1,u=Object(e);(r?a--:++a<o)&&!1!==n(u[a],a,u););return e}}((function(t,r){return t&&lr(t,r,vr)}));var yr=function(t,r,e,n){return hr(t,(function(t,o,a){r(n,t,e(t),a)})),n};var _r=function(){this.__data__=[],this.size=0};var br=function(t,r){return t===r||t!=t&&r!=r},dr=br;var gr=function(t,r){for(var e=t.length;e--;)if(dr(t[e][0],r))return e;return-1},jr=gr,Or=Array.prototype.splice;var mr=gr;var wr=gr;var Ar=gr;var xr=_r,zr=function(t){var r=this.__data__,e=jr(r,t);return!(e<0)&&(e==r.length-1?r.pop():Or.call(r,e,1),--this.size,!0)},Pr=function(t){var r=this.__data__,e=mr(r,t);return e<0?void 0:r[e][1]},Sr=function(t){return wr(this.__data__,t)>-1},Er=function(t,r){var e=this.__data__,n=Ar(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function kr(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}kr.prototype.clear=xr,kr.prototype.delete=zr,kr.prototype.get=Pr,kr.prototype.has=Sr,kr.prototype.set=Er;var $r=kr,Tr=$r;var Br=function(){this.__data__=new Tr,this.size=0};var Fr=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var Ir=function(t){return this.__data__.get(t)};var Dr=function(t){return this.__data__.has(t)},Mr=et(O,"Map"),Cr=et(Object,"create"),Lr=Cr;var Ur=function(){this.__data__=Lr?Lr(null):{},this.size=0};var Rr=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Vr=Cr,Nr=Object.prototype.hasOwnProperty;var Wr=function(t){var r=this.__data__;if(Vr){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return Nr.call(r,t)?r[t]:void 0},qr=Cr,Gr=Object.prototype.hasOwnProperty;var Hr=Cr;var Jr=Ur,Kr=Rr,Qr=Wr,Xr=function(t){var r=this.__data__;return qr?void 0!==r[t]:Gr.call(r,t)},Yr=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Hr&&void 0===r?"__lodash_hash_undefined__":r,this};function Zr(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Zr.prototype.clear=Jr,Zr.prototype.delete=Kr,Zr.prototype.get=Qr,Zr.prototype.has=Xr,Zr.prototype.set=Yr;var te=Zr,re=$r,ee=Mr;var ne=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var oe=function(t,r){var e=t.__data__;return ne(r)?e["string"==typeof r?"string":"hash"]:e.map},ae=oe;var ue=oe;var ie=oe;var ce=oe;var se=function(){this.size=0,this.__data__={hash:new te,map:new(ee||re),string:new te}},fe=function(t){var r=ae(this,t).delete(t);return this.size-=r?1:0,r},le=function(t){return ue(this,t).get(t)},ve=function(t){return ie(this,t).has(t)},pe=function(t,r){var e=ce(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function he(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}he.prototype.clear=se,he.prototype.delete=fe,he.prototype.get=le,he.prototype.has=ve,he.prototype.set=pe;var ye=he,_e=$r,be=Mr,de=ye;var ge=$r,je=Br,Oe=Fr,me=Ir,we=Dr,Ae=function(t,r){var e=this.__data__;if(e instanceof _e){var n=e.__data__;if(!be||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new de(n)}return e.set(t,r),this.size=e.size,this};function xe(t){var r=this.__data__=new ge(t);this.size=r.size}xe.prototype.clear=je,xe.prototype.delete=Oe,xe.prototype.get=me,xe.prototype.has=we,xe.prototype.set=Ae;var ze=xe;var Pe=ye,Se=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Ee=function(t){return this.__data__.has(t)};function ke(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new Pe;++r<e;)this.add(t[r])}ke.prototype.add=ke.prototype.push=Se,ke.prototype.has=Ee;var $e=ke,Te=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1},Be=function(t,r){return t.has(r)};var Fe=function(t,r,e,n,o,a){var u=1&e,i=t.length,c=r.length;if(i!=c&&!(u&&c>i))return!1;var s=a.get(t),f=a.get(r);if(s&&f)return s==r&&f==t;var l=-1,v=!0,p=2&e?new $e:void 0;for(a.set(t,r),a.set(r,t);++l<i;){var h=t[l],y=r[l];if(n)var _=u?n(y,h,l,r,t,a):n(h,y,l,t,r,a);if(void 0!==_){if(_)continue;v=!1;break}if(p){if(!Te(r,(function(t,r){if(!Be(p,r)&&(h===t||o(h,t,e,n,a)))return p.push(r)}))){v=!1;break}}else if(h!==y&&!o(h,y,e,n,a)){v=!1;break}}return a.delete(t),a.delete(r),v};var Ie=O.Uint8Array,De=br,Me=Fe,Ce=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e},Le=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e},Ue=m?m.prototype:void 0,Re=Ue?Ue.valueOf:void 0;var Ve=function(t,r,e,n,o,a,u){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!a(new Ie(t),new Ie(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return De(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var i=Ce;case"[object Set]":var c=1&n;if(i||(i=Le),t.size!=r.size&&!c)return!1;var s=u.get(t);if(s)return s==r;n|=2,u.set(t,r);var f=Me(i(t),i(r),n,o,a,u);return u.delete(t),f;case"[object Symbol]":if(Re)return Re.call(t)==Re.call(r)}return!1};var Ne=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t},We=zt;var qe=function(t,r,e){var n=r(t);return We(t)?n:Ne(n,e(t))};var Ge=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var u=t[e];r(u,e,t)&&(a[o++]=u)}return a},He=function(){return[]},Je=Object.prototype.propertyIsEnumerable,Ke=Object.getOwnPropertySymbols,Qe=qe,Xe=Ke?function(t){return null==t?[]:(t=Object(t),Ge(Ke(t),(function(r){return Je.call(t,r)})))}:He,Ye=fr;var Ze=function(t){return Qe(t,Ye,Xe)},tn=Object.prototype.hasOwnProperty;var rn=function(t,r,e,n,o,a){var u=1&e,i=Ze(t),c=i.length;if(c!=Ze(r).length&&!u)return!1;for(var s=c;s--;){var f=i[s];if(!(u?f in r:tn.call(r,f)))return!1}var l=a.get(t),v=a.get(r);if(l&&v)return l==r&&v==t;var p=!0;a.set(t,r),a.set(r,t);for(var h=u;++s<c;){var y=t[f=i[s]],_=r[f];if(n)var b=u?n(_,y,f,r,t,a):n(y,_,f,t,r,a);if(!(void 0===b?y===_||o(y,_,e,n,a):b)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var d=t.constructor,g=r.constructor;d==g||!("constructor"in t)||!("constructor"in r)||"function"==typeof d&&d instanceof d&&"function"==typeof g&&g instanceof g||(p=!1)}return a.delete(t),a.delete(r),p},en=et(O,"DataView"),nn=Mr,on=et(O,"Promise"),an=et(O,"Set"),un=et(O,"WeakMap"),cn=B,sn=N,fn="[object Map]",ln="[object Promise]",vn="[object Set]",pn="[object WeakMap]",hn="[object DataView]",yn=sn(en),_n=sn(nn),bn=sn(on),dn=sn(an),gn=sn(un),jn=cn;(en&&jn(new en(new ArrayBuffer(1)))!=hn||nn&&jn(new nn)!=fn||on&&jn(on.resolve())!=ln||an&&jn(new an)!=vn||un&&jn(new un)!=pn)&&(jn=function(t){var r=cn(t),e="[object Object]"==r?t.constructor:void 0,n=e?sn(e):"";if(n)switch(n){case yn:return hn;case _n:return fn;case bn:return ln;case dn:return vn;case gn:return pn}return r});var On=ze,mn=Fe,wn=Ve,An=rn,xn=jn,zn=zt,Pn=St,Sn=Nt,En="[object Arguments]",kn="[object Array]",$n="[object Object]",Tn=Object.prototype.hasOwnProperty;var Bn=function(t,r,e,n,o,a){var u=zn(t),i=zn(r),c=u?kn:xn(t),s=i?kn:xn(r),f=(c=c==En?$n:c)==$n,l=(s=s==En?$n:s)==$n,v=c==s;if(v&&Pn(t)){if(!Pn(r))return!1;u=!0,f=!1}if(v&&!f)return a||(a=new On),u||Sn(t)?mn(t,r,e,n,o,a):wn(t,r,c,e,n,o,a);if(!(1&e)){var p=f&&Tn.call(t,"__wrapped__"),h=l&&Tn.call(r,"__wrapped__");if(p||h){var y=p?t.value():t,_=h?r.value():r;return a||(a=new On),o(y,_,e,n,a)}}return!!v&&(a||(a=new On),An(t,r,e,n,o,a))},Fn=st;var In=function t(r,e,n,o,a){return r===e||(null==r||null==e||!Fn(r)&&!Fn(e)?r!=r&&e!=e:Bn(r,e,n,o,t,a))},Dn=ze,Mn=In;var Cn=F;var Ln=function(t){return t==t&&!Cn(t)},Un=Ln,Rn=fr;var Vn=function(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}},Nn=function(t,r,e,n){var o=e.length,a=o,u=!n;if(null==t)return!a;for(t=Object(t);o--;){var i=e[o];if(u&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++o<a;){var c=(i=e[o])[0],s=t[c],f=i[1];if(u&&i[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Dn;if(n)var v=n(s,f,c,t,r,l);if(!(void 0===v?Mn(f,s,3,n,l):v))return!1}}return!0},Wn=function(t){for(var r=Rn(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,Un(o)]}return r},qn=Vn;var Gn=function(t){var r=Wn(t);return 1==r.length&&r[0][2]?qn(r[0][0],r[0][1]):function(e){return e===t||Nn(e,t,r)}},Hn=B,Jn=st;var Kn=function(t){return"symbol"==typeof t||Jn(t)&&"[object Symbol]"==Hn(t)},Qn=zt,Xn=Kn,Yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/;var to=function(t,r){if(Qn(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!Xn(t))||(Zn.test(t)||!Yn.test(t)||null!=r&&t in Object(r))},ro=ye;function eo(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var u=t.apply(this,n);return e.cache=a.set(o,u)||a,u};return e.cache=new(eo.Cache||ro),e}eo.Cache=ro;var no=eo;var oo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ao=/\\(\\)?/g,uo=function(t){var r=no(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(oo,(function(t,e,n,o){r.push(n?o.replace(ao,"$1"):e||t)})),r}));var io=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},co=zt,so=Kn,fo=m?m.prototype:void 0,lo=fo?fo.toString:void 0;var vo=function t(r){if("string"==typeof r)return r;if(co(r))return io(r,t)+"";if(so(r))return lo?lo.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e},po=vo;var ho=zt,yo=to,_o=uo,bo=function(t){return null==t?"":po(t)};var go=function(t,r){return ho(t)?t:yo(t,r)?[t]:_o(bo(t))},jo=Kn;var Oo=function(t){if("string"==typeof t||jo(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},mo=go,wo=Oo;var Ao=function(t,r){for(var e=0,n=(r=mo(r,t)).length;null!=t&&e<n;)t=t[wo(r[e++])];return e&&e==n?t:void 0},xo=Ao;var zo=go,Po=xt,So=zt,Eo=kt,ko=$t,$o=Oo;var To=function(t,r){return null!=t&&r in Object(t)},Bo=function(t,r,e){for(var n=-1,o=(r=zo(r,t)).length,a=!1;++n<o;){var u=$o(r[n]);if(!(a=null!=t&&e(t,u)))break;t=t[u]}return a||++n!=o?a:!!(o=null==t?0:t.length)&&ko(o)&&Eo(u,o)&&(So(t)||Po(t))};var Fo=In,Io=function(t,r,e){var n=null==t?void 0:xo(t,r);return void 0===n?e:n},Do=function(t,r){return null!=t&&Bo(t,r,To)},Mo=to,Co=Ln,Lo=Vn,Uo=Oo;var Ro=Ao;var Vo=function(t){return function(r){return null==r?void 0:r[t]}},No=function(t){return function(r){return Ro(r,t)}},Wo=to,qo=Oo;var Go=Gn,Ho=function(t,r){return Mo(t)&&Co(r)?Lo(Uo(t),r):function(e){var n=Io(e,t);return void 0===n&&n===r?Do(e,t):Fo(r,n,3)}},Jo=function(t){return t},Ko=zt,Qo=function(t){return Wo(t)?Vo(qo(t)):No(t)};var Xo=ut,Yo=yr,Zo=function(t){return"function"==typeof t?t:null==t?Jo:"object"==typeof t?Ko(t)?Ho(t[0],t[1]):Go(t):Qo(t)},ta=zt;var ra=at,ea=function(t,r){return function(e,n){var o=ta(e)?Xo:Yo,a=r?r():{};return o(e,t,Zo(n),a)}},na=Object.prototype.hasOwnProperty;const oa=c(ea((function(t,r,e){na.call(t,e)?t[e].push(r):ra(t,e,[r])}))),aa=t({__name:"index",setup(t){const i=s(Array.from({length:10},((t,r)=>({id:r,name:`name-${r}`}))));return f((()=>{return t=this,r=null,e=function*(){try{yield l((()=>import("./pages-sub-async-async-plugin-index.kJqquqyn.js")),[],import.meta.url).then((t=>{console.log("plugin",t)}))}catch(t){}yield import("./pages-sub-async-async-plugin-index.kJqquqyn.js").then((t=>{console.log(null==t?void 0:t.AsyncPlugin())})),import("./pages-sub-async-index.D6kPU93h.js").then((t=>{console.log(t.default||t)}))},new Promise(((n,o)=>{var a=t=>{try{i(e.next(t))}catch(r){o(r)}},u=t=>{try{i(e.throw(t))}catch(r){o(r)}},i=t=>t.done?n(t.value):Promise.resolve(t.value).then(a,u);i((e=e.apply(t,r)).next())}));var t,r,e})),(t,c)=>{const s=y,f=u;return r(),e(f,null,{default:n((()=>[v("h1",null,"子包"),p(s,null,{default:n((()=>[o("pages-sub-demo")])),_:1}),p(h(b),{text:"传参测试"}),p(h(_)),p(f,null,{default:n((()=>[o("---- 对象数组 ---")])),_:1}),p(f,null,{default:n((()=>[o(a(i.value),1)])),_:1}),p(f,null,{default:n((()=>[o("---- lodash groupBy ---")])),_:1}),p(f,null,{default:n((()=>[o(a(h(oa)(i.value,"id")),1)])),_:1})])),_:1})}}});export{aa as default};
