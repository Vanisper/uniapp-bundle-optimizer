var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))n.call(t,a)&&s(e,a,t[a]);return e},i=(e,o)=>t(e,a(o)),u=(e,t,a)=>new Promise(((o,l)=>{var n=e=>{try{r(a.next(e))}catch(t){l(t)}},s=e=>{try{r(a.throw(e))}catch(t){l(t)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,s);r((a=a.apply(e,t)).next())}));import{d as c,o as d,c as v,s as p,i as f,w as m,a as g,b as h,e as b,f as y,g as w,h as _,n as $,j as k,r as x,k as C,l as S,m as T,p as j,q as I,t as M,u as z,v as A,x as P,F as O,y as V,I as B,z as N}from"./index-CPXMJqD1.js";import{_ as G}from"./_plugin-vue_export-helper.BCo6x5W8.js";void 0===globalThis._globalMethods&&(globalThis._globalMethods={});const H=c({__name:"AppFooter",setup(e){function t(){(null==window?void 0:window.open)?window.open("https://github.com/uni-helper/create-uni"):p({icon:"none",title:"请使用浏览器打开"})}return(e,a)=>{const o=f;return d(),v(o,{"i-carbon:logo-github":"",absolute:"","bottom-1rem":"",left:"50%","translate-x":"-50%",color:"#888",onClick:t})}}});void 0===globalThis._globalMethods&&(globalThis._globalMethods={});void 0===globalThis._globalMethods&&(globalThis._globalMethods={});const E=G({},[["render",function(e,t){const a=b,o=y,l=f;return d(),v(l,{"inline-flex":"","cursor-default":"","text-2xl":"","font-300":""},{default:m((()=>[g(l,{flex:"","flex-col":"","items-center":"","hover-class":"drop-shadow-md drop-shadow-color-green5"},{default:m((()=>[g(a,{"inline-block":"","h-18":"","w-18":"",src:"./static/logo.svg"}),g(o,{"mt--2":"","text-green5":""},{default:m((()=>[h(" uni-helper ")])),_:1})])),_:1}),g(l,{text:"3xl gray4",m:"x-4 y-auto","i-carbon-add":"",transform:"","transition-all-500":"","hover:rotate-135":""}),g(l,{flex:"","flex-col":"","hover-class":"drop-shadow-md drop-shadow-color-purple5"},{default:m((()=>[g(a,{"inline-block":"","h-18":"","w-18":"",src:"./static/vite.png"}),g(o,{"mt--2":"","text-purple5":""},{default:m((()=>[h(" Vite ")])),_:1})])),_:1})])),_:1})}]]);class F{constructor(e){this._reject=null,this.promise=new Promise(((t,a)=>{e(t,a),this._reject=a}))}abort(e){this._reject&&this._reject(e)}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}}function R(e){return"[object Object]"===Object.prototype.toString.call(e)||"object"==typeof e}function U(e){const t=Object.prototype.toString.call(e).match(/\[object (\w+)\]/);return t&&t.length?t[1].toLowerCase():""}const D=e=>null!=e;function L(e){return"function"===U(e)}function W(e){return!(!R(e)||!D(e))&&(L(e.then)&&L(e.catch))}function q(e){return t=e,("function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t))?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return q(e)})).join(";"):function(e){return"string"===U(e)}(e)?e:R(e)?Object.keys(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[(a=t,a.replace(/[A-Z]/g,(function(e){return"-"+e})).toLowerCase()),e[t]].join(":");var a})).join(";"):"";var t}const Z=(e=()=>{})=>new F((t=>{const a=setInterval((()=>{clearInterval(a),t(!0),e()}),1e3/30)}));const J=e=>({type:Boolean,default:e}),K=e=>({type:Number,default:e}),Q=e=>({type:String,default:e}),X={customStyle:Q(""),customClass:Q("")},Y=i(r({},X),{name:(ee=String,{type:ee,required:!0}),color:String,size:String,classPrefix:Q("wd-icon")});var ee;const te=G(c(i(r({},{name:"wd-icon",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),{props:Y,emits:["click","touch"],setup(e,{emit:t}){const a=e,o=t,l=w((()=>{return D(a.name)&&(e=a.name,/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|image)/i.test(e));var e})),n=w((()=>{const e=a.classPrefix;return`${e} ${a.customClass} ${l.value?"wd-icon--image":e+"-"+a.name}`})),s=w((()=>{const e={};var t;return a.color&&(e.color=a.color),a.size&&(e["font-size"]=(t=a.size,Number.isNaN(Number(t))?`${t}`:`${t}px`)),`${q(e)}; ${a.customStyle}`}));function r(e){o("click",e)}return(e,t)=>{const a=b,o=f;return d(),v(o,{onClick:r,class:$(n.value),style:k(s.value)},{default:m((()=>[l.value?(d(),v(a,{key:0,class:"wd-icon__image",src:e.name},null,8,["src"])):_("",!0)])),_:1},8,["class","style"])}}})),[["__scopeId","data-v-16dab615"]]),ae=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],oe=e=>e.replace(/[+/]/g,(e=>"+"===e?"-":"_")).replace(/=+\$/m,""),le="function"==typeof btoa?e=>btoa(e):e=>{if(e.charCodeAt(0)>255)throw new RangeError("The string contains invalid characters.");return((e,t=!1)=>{let a="";for(let o=0,l=e.length;o<l;o+=3){const[t,l,n]=[e[o],e[o+1],e[o+2]],s=t<<16|l<<8|n;a+=ae[s>>>18],a+=ae[s>>>12&63],a+=void 0!==l?ae[s>>>6&63]:"=",a+=void 0!==n?ae[63&s]:"="}return t?oe(a):a})(Uint8Array.from(e,(e=>e.charCodeAt(0))))};function ne(e,t=!1){const a=le((e=>unescape(encodeURIComponent(e)))(e));return t?oe(a):a}const se=i(r({},X),{plain:J(!1),round:J(!0),disabled:J(!1),hairline:J(!1),block:J(!1),type:Q("primary"),size:Q("medium"),icon:String,classPrefix:Q("wd-icon"),loading:J(!1),loadingColor:String,openType:String,hoverStopPropagation:Boolean,lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,appParameter:String,showMessageCard:Boolean,buttonId:String}),re=c(i(r({},{name:"wd-button",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:se,emits:["click","getuserinfo","contact","getphonenumber","error","launchapp","opensetting","chooseavatar","agreeprivacyauthorization"],setup(e,{emit:t}){const a=e,o=t,l=x(20),n=x(70),s=x(""),r=w((()=>`background-image: url(${s.value});`));function i(e){a.disabled||a.loading||o("click",e)}function u(e){o("getuserinfo",e.detail)}function c(e){o("contact",e.detail)}function p(e){o("getphonenumber",e.detail)}function h(e){o("error",e.detail)}function b(e){o("launchapp",e.detail)}function y(e){o("opensetting",e.detail)}function j(e){o("chooseavatar",e.detail)}function I(e){o("agreeprivacyauthorization",e.detail)}return C((()=>a.loading),(()=>{!function(){const{loadingColor:e,type:t,plain:o}=a;let l=e;if(!l)switch(t){case"primary":l="#4D80F0";break;case"success":l="#34d19d";break;case"info":case"default":l="#333";break;case"warning":l="#f0883a";break;case"error":l="#fa4350"}const n=((e="#4D80F0",t=!0)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="a"><stop stop-color="${t?e:"#fff"}" offset="0%" stop-opacity="0"/><stop stop-color="${t?e:"#fff"}" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${t?"#fff":e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#a)" stroke-width="3.5" stroke-linecap="round"/></g></svg>`)(l,!o);s.value=`"data:image/svg+xml;base64,${ne(n)}"`}()}),{deep:!0,immediate:!0}),(e,t)=>{const a=f,o=T;return d(),v(o,{id:e.buttonId,"hover-class":""+(e.disabled||e.loading?"":"wd-button--active"),style:k(e.customStyle),class:$(["wd-button","is-"+e.type,"is-"+e.size,e.round?"is-round":"",e.hairline?"is-hairline":"",e.plain?"is-plain":"",e.disabled?"is-disabled":"",e.block?"is-block":"",e.loading?"is-loading":"",e.customClass]),"hover-start-time":l.value,"hover-stay-time":n.value,"open-type":e.disabled||e.loading?void 0:e.openType,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"app-parameter":e.appParameter,"show-message-card":e.showMessageCard,"session-from":e.sessionFrom,lang:e.lang,"hover-stop-propagation":e.hoverStopPropagation,onClick:i,onGetuserinfo:u,onContact:c,onGetphonenumber:p,onError:h,onLaunchapp:b,onOpensetting:y,onChooseavatar:j,onAgreeprivacyauthorization:I},{default:m((()=>[e.loading?(d(),v(a,{key:0,class:"wd-button__loading"},{default:m((()=>[g(a,{class:"wd-button__loading-svg",style:k(r.value)},null,8,["style"])])),_:1})):e.icon?(d(),v(te,{key:1,"custom-class":"wd-button__icon",name:e.icon,classPrefix:e.classPrefix},null,8,["name","classPrefix"])):_("",!0),g(a,{class:"wd-button__text"},{default:m((()=>[S(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["id","hover-class","style","class","hover-start-time","hover-stay-time","open-type","send-message-title","send-message-path","send-message-img","app-parameter","show-message-card","session-from","lang","hover-stop-propagation"])}}})),ie=G(re,[["__scopeId","data-v-bbdf8803"]]),ue=i(r({},X),{show:J(!1),duration:{type:[Object,Number,Boolean],default:300},name:Q("fade"),lazyRender:J(!0),enterClass:Q(""),enterActiveClass:Q(""),enterToClass:Q(""),leaveClass:Q(""),leaveActiveClass:Q(""),leaveToClass:Q("")}),ce=G(c(i(r({},{name:"wd-transition",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:ue,emits:["click","before-enter","enter","before-leave","leave","after-leave","after-enter"],setup(e,{emit:t}){const a=e=>e?{enter:`wd-${e}-enter wd-${e}-enter-active`,"enter-to":`wd-${e}-enter-to wd-${e}-enter-active`,leave:`wd-${e}-leave wd-${e}-leave-active`,"leave-to":`wd-${e}-leave-to wd-${e}-leave-active`}:{enter:`${o.enterClass} ${o.enterActiveClass}`,"enter-to":`${o.enterToClass} ${o.enterActiveClass}`,leave:`${o.leaveClass} ${o.leaveActiveClass}`,"leave-to":`${o.leaveToClass} ${o.leaveActiveClass}`},o=e,l=t,n=x(!1),s=x(!1),r=x(""),i=x(!1),c=x(300),p=x(""),g=x(null),h=x(null),b=x(null),y=w((()=>`-webkit-transition-duration:${c.value}ms;transition-duration:${c.value}ms;${s.value?"":"display: none;"}${o.customStyle}`)),T=w((()=>`wd-transition ${o.customClass}  ${p.value}`));function I(){l("click")}function M(){g.value=new F((e=>u(this,null,(function*(){try{const t=a(o.name),u=R(o.duration)?o.duration.enter:o.duration;r.value="enter",l("before-enter"),h.value=Z(),yield h.value,l("enter"),p.value=t.enter,c.value=u,h.value=Z(),yield h.value,n.value=!0,s.value=!0,h.value=Z(),yield h.value,h.value=null,i.value=!1,p.value=t["enter-to"],e()}catch(t){}}))))}function z(){i.value||(i.value=!0,"leave"===r.value?l("after-leave"):"enter"===r.value&&l("after-enter"),!o.show&&s.value&&(s.value=!1))}return j((()=>{o.show&&M()})),C((()=>o.show),(e=>{e?(W(g.value)&&g.value.abort(),W(h.value)&&h.value.abort(),W(b.value)&&b.value.abort(),g.value=null,h.value=null,b.value=null,M()):function(){u(this,null,(function*(){if(!g.value)return i.value=!1,z();try{if(yield g.value,!s.value)return;const e=a(o.name),t=R(o.duration)?o.duration.leave:o.duration;r.value="leave",l("before-leave"),c.value=t,b.value=Z(),yield b.value,l("leave"),p.value=e.leave,b.value=Z(),yield b.value,i.value=!1,p.value=e["leave-to"],b.value=function(e){return new F((t=>{const a=setTimeout((()=>{clearTimeout(a),t()}),e)}))}(c.value),yield b.value,b.value=null,z(),g.value=null}catch(e){}}))}()}),{deep:!0}),(e,t)=>{const a=f;return n.value?(d(),v(a,{key:0,class:$(T.value),style:k(y.value),onTransitionend:z,onClick:I},{default:m((()=>[S(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])):_("",!0)}}})),[["__scopeId","data-v-41e83fd8"]]);const de=i(r({},X),{show:J(!1),duration:{type:[Object,Number,Boolean],default:300},lockScroll:J(!0),zIndex:K(10)}),ve=G(c(i(r({},{name:"wd-overlay",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),{props:de,emits:["click"],setup(e,{emit:t}){const a=e,o=t;function l(){o("click")}function n(){}return function(e){const t=x(0),a=()=>{0===t.value&&(document.getElementsByTagName("body")[0].style.overflow="hidden"),t.value++},o=()=>{t.value>0&&(t.value--,0===t.value&&(document.getElementsByTagName("body")[0].style.overflow=""))},l=()=>{e()&&o()};C(e,(e=>{e?a():o()})),I(l),M(l)}((()=>a.show&&a.lockScroll)),(e,t)=>(d(),v(ce,{show:e.show,name:"fade","custom-class":"wd-overlay",duration:e.duration,"custom-style":`z-index: ${e.zIndex}; ${e.customStyle}`,onClick:l,onTouchmove:t[0]||(t[0]=z((t=>e.lockScroll?n:""),["stop","prevent"]))},{default:m((()=>[S(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style"]))}})),[["__scopeId","data-v-501a9118"]]),pe=i(r({},X),{transition:String,closable:J(!1),position:Q("center"),closeOnClickModal:J(!0),duration:{type:[Number,Boolean],default:300},modal:J(!0),zIndex:K(10),hideWhenClose:J(!0),modalStyle:Q(""),safeAreaInsetBottom:J(!1),modelValue:J(!1),lazyRender:J(!0),lockScroll:J(!0)}),fe=G(c(i(r({},{name:"wd-popup",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),{props:pe,emits:["update:modelValue","before-enter","enter","before-leave","leave","after-leave","after-enter","click-modal","close"],setup(e,{emit:t}){const a=e,o=t,l=e=>e?{enter:`wd-${e}-enter wd-${e}-enter-active`,"enter-to":`wd-${e}-enter-to wd-${e}-enter-active`,leave:`wd-${e}-leave wd-${e}-leave-active`,"leave-to":`wd-${e}-leave-to wd-${e}-leave-active`}:{enter:"enter-class enter-active-class","enter-to":"enter-to-class enter-active-class",leave:"leave-class leave-active-class","leave-to":"leave-to-class leave-active-class"},n=x(!1),s=x(!1),r=x(""),i=x(!1),u=x(300),c=x(""),p=x(0),g=x(""),h=w((()=>`z-index: ${a.zIndex}; padding-bottom: ${p.value}px; -webkit-transition-duration: ${u.value}ms; transition-duration: ${u.value}ms; ${s.value||!a.hideWhenClose?"":"display: none;"} ${a.customStyle}`)),b=w((()=>`wd-popup wd-popup--${a.position} ${a.customClass||""} ${c.value||""}`));function y(){const e=l(a.transition||a.position),t="none"===a.transition?0:R(a.duration)?a.duration.enter:a.duration;r.value="enter",o("before-enter"),Z((()=>{o("enter"),c.value=e.enter,u.value=t,Z((()=>{n.value=!0,s.value=!0,Z((()=>{i.value=!1,c.value=e["enter-to"]}))}))}))}function T(){i.value||(i.value=!0,"leave"===r.value?o("after-leave"):"enter"===r.value&&o("after-enter"),!a.modelValue&&s.value&&(s.value=!1))}function I(){const{transition:e,position:t}=a;g.value=e||t}function M(){o("click-modal"),a.closeOnClickModal&&z()}function z(){o("close"),o("update:modelValue",!1)}function V(){}return j((()=>{if(I(),a.safeAreaInsetBottom){const{safeArea:e,screenHeight:t,safeAreaInsets:a}=A();p.value=e&&a?a.bottom:0}a.modelValue&&y()})),C((()=>a.modelValue),(e=>{e?y():function(){if(!s.value)return;const e=l(a.transition||a.position),t="none"===a.transition?0:R(a.duration)?a.duration.leave:a.duration;r.value="leave",o("before-leave"),Z((()=>{o("leave"),c.value=e.leave,u.value=t,Z((()=>{i.value=!1;const t=setTimeout((()=>{T(),clearTimeout(t)}),u.value);c.value=e["leave-to"]}))}))}()}),{deep:!0,immediate:!0}),C([()=>a.position,()=>a.transition],(()=>{I()}),{deep:!0,immediate:!0}),(e,t)=>{const a=f;return d(),P(O,null,[e.modal?(d(),v(ve,{key:0,show:e.modelValue,"z-index":e.zIndex,"lock-scroll":e.lockScroll,duration:e.duration,"custom-style":e.modalStyle,onClick:M,onTouchmove:V},null,8,["show","z-index","lock-scroll","duration","custom-style"])):_("",!0),!e.lazyRender||n.value?(d(),v(a,{key:1,class:$(b.value),style:k(h.value),onTransitionend:T},{default:m((()=>[S(e.$slots,"default",{},void 0,!0),e.closable?(d(),v(te,{key:0,"custom-class":"wd-popup__close",name:"add",onClick:z})):_("",!0)])),_:3},8,["class","style"])):_("",!0)],64)}}})),[["__scopeId","data-v-8b8df6ee"]]);void 0===globalThis._globalMethods&&(globalThis._globalMethods={});const me=c({__name:"InputEntry",setup(e){const t=x(""),a=x(!1);function o(){a.value=!0}return(e,l)=>{const n=B,s=f;return d(),P(O,null,[g(s,{class:"input-box"},{default:m((()=>[g(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),placeholder:"What's your name?"},null,8,["modelValue"])])),_:1}),g(s,null,{default:m((()=>[g(ie,{disabled:!t.value,onClick:o},{default:m((()=>[h(" Hello ")])),_:1},8,["disabled"])])),_:1}),g(fe,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),"custom-style":"padding: 30px 40px;"},{default:m((()=>[h(" Hello"+V(`  ${t.value}`)+" 👏 ",1)])),_:1},8,["modelValue"])],64)}}});void 0===globalThis._globalMethods&&(globalThis._globalMethods={}),void 0===globalThis._globalMethods&&(globalThis._globalMethods={});const ge=G(me,[["__scopeId","data-v-72833c1a"]]);void 0===globalThis._globalMethods&&(globalThis._globalMethods={});const he=c({__name:"index",setup(e){function t(){N({url:"/pages-sub-demo/index"})}return(e,a)=>{const o=T,l=f;return d(),v(l,{"px-10":"","py-20":"","text-center":""},{default:m((()=>[g(E),g(ge),g(H),g(o,{onClick:t},{default:m((()=>[h(" 前往子包 ")])),_:1})])),_:1})}}});void 0===globalThis._globalMethods&&(globalThis._globalMethods={});export{he as default};
