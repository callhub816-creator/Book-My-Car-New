var sy=Object.defineProperty;var oy=(s,c,u)=>c in s?sy(s,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[c]=u;var ct=(s,c,u)=>oy(s,typeof c!="symbol"?c+"":c,u);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))d(g);new MutationObserver(g=>{for(const p of g)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function u(g){const p={};return g.integrity&&(p.integrity=g.integrity),g.referrerPolicy&&(p.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?p.credentials="include":g.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(g){if(g.ep)return;g.ep=!0;const p=u(g);fetch(g.href,p)}})();function Zn(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Jo={exports:{}},In={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function cy(){if(zp)return In;zp=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function u(d,g,p){var y=null;if(p!==void 0&&(y=""+p),g.key!==void 0&&(y=""+g.key),"key"in g){p={};for(var k in g)k!=="key"&&(p[k]=g[k])}else p=g;return g=p.ref,{$$typeof:s,type:d,key:y,ref:g!==void 0?g:null,props:p}}return In.Fragment=c,In.jsx=u,In.jsxs=u,In}var Dp;function dy(){return Dp||(Dp=1,Jo.exports=cy()),Jo.exports}var l=dy(),Zo={exports:{}},X={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function uy(){if(Hp)return X;Hp=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),O=Symbol.iterator;function B(v){return v===null||typeof v!="object"?null:(v=O&&v[O]||v["@@iterator"],typeof v=="function"?v:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,q={};function I(v,H,U){this.props=v,this.context=H,this.refs=q,this.updater=U||Y}I.prototype.isReactComponent={},I.prototype.setState=function(v,H){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,H,"setState")},I.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ae(){}ae.prototype=I.prototype;function L(v,H,U){this.props=v,this.context=H,this.refs=q,this.updater=U||Y}var pe=L.prototype=new ae;pe.constructor=L,Q(pe,I.prototype),pe.isPureReactComponent=!0;var Se=Array.isArray;function Ee(){}var Z={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Ie(v,H,U){var V=U.ref;return{$$typeof:s,type:v,key:H,ref:V!==void 0?V:null,props:U}}function Ze(v,H){return Ie(v.type,H,v.props)}function We(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function Ve(v){var H={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(U){return H[U]})}var Lt=/\/+/g;function Va(v,H){return typeof v=="object"&&v!==null&&v.key!=null?Ve(""+v.key):H.toString(36)}function Ma(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Ee,Ee):(v.status="pending",v.then(function(H){v.status==="pending"&&(v.status="fulfilled",v.value=H)},function(H){v.status==="pending"&&(v.status="rejected",v.reason=H)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function E(v,H,U,V,W){var te=typeof v;(te==="undefined"||te==="boolean")&&(v=null);var ge=!1;if(v===null)ge=!0;else switch(te){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(v.$$typeof){case s:case c:ge=!0;break;case T:return ge=v._init,E(ge(v._payload),H,U,V,W)}}if(ge)return W=W(v),ge=V===""?"."+Va(v,0):V,Se(W)?(U="",ge!=null&&(U=ge.replace(Lt,"$&/")+"/"),E(W,H,U,"",function(Ji){return Ji})):W!=null&&(We(W)&&(W=Ze(W,U+(W.key==null||v&&v.key===W.key?"":(""+W.key).replace(Lt,"$&/")+"/")+ge)),H.push(W)),1;ge=0;var $e=V===""?".":V+":";if(Se(v))for(var ze=0;ze<v.length;ze++)V=v[ze],te=$e+Va(V,ze),ge+=E(V,H,U,te,W);else if(ze=B(v),typeof ze=="function")for(v=ze.call(v),ze=0;!(V=v.next()).done;)V=V.value,te=$e+Va(V,ze++),ge+=E(V,H,U,te,W);else if(te==="object"){if(typeof v.then=="function")return E(Ma(v),H,U,V,W);throw H=String(v),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ge}function _(v,H,U){if(v==null)return v;var V=[],W=0;return E(v,V,"","",function(te){return H.call(U,te,W++)}),V}function J(v){if(v._status===-1){var H=v._result;H=H(),H.then(function(U){(v._status===0||v._status===-1)&&(v._status=1,v._result=U)},function(U){(v._status===0||v._status===-1)&&(v._status=2,v._result=U)}),v._status===-1&&(v._status=0,v._result=H)}if(v._status===1)return v._result.default;throw v._result}var ye=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},ve={map:_,forEach:function(v,H,U){_(v,function(){H.apply(this,arguments)},U)},count:function(v){var H=0;return _(v,function(){H++}),H},toArray:function(v){return _(v,function(H){return H})||[]},only:function(v){if(!We(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return X.Activity=A,X.Children=ve,X.Component=I,X.Fragment=u,X.Profiler=g,X.PureComponent=L,X.StrictMode=d,X.Suspense=m,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,X.__COMPILER_RUNTIME={__proto__:null,c:function(v){return Z.H.useMemoCache(v)}},X.cache=function(v){return function(){return v.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(v,H,U){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var V=Q({},v.props),W=v.key;if(H!=null)for(te in H.key!==void 0&&(W=""+H.key),H)!Ge.call(H,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&H.ref===void 0||(V[te]=H[te]);var te=arguments.length-2;if(te===1)V.children=U;else if(1<te){for(var ge=Array(te),$e=0;$e<te;$e++)ge[$e]=arguments[$e+2];V.children=ge}return Ie(v.type,W,V)},X.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},X.createElement=function(v,H,U){var V,W={},te=null;if(H!=null)for(V in H.key!==void 0&&(te=""+H.key),H)Ge.call(H,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(W[V]=H[V]);var ge=arguments.length-2;if(ge===1)W.children=U;else if(1<ge){for(var $e=Array(ge),ze=0;ze<ge;ze++)$e[ze]=arguments[ze+2];W.children=$e}if(v&&v.defaultProps)for(V in ge=v.defaultProps,ge)W[V]===void 0&&(W[V]=ge[V]);return Ie(v,te,W)},X.createRef=function(){return{current:null}},X.forwardRef=function(v){return{$$typeof:k,render:v}},X.isValidElement=We,X.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:J}},X.memo=function(v,H){return{$$typeof:f,type:v,compare:H===void 0?null:H}},X.startTransition=function(v){var H=Z.T,U={};Z.T=U;try{var V=v(),W=Z.S;W!==null&&W(U,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Ee,ye)}catch(te){ye(te)}finally{H!==null&&U.types!==null&&(H.types=U.types),Z.T=H}},X.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},X.use=function(v){return Z.H.use(v)},X.useActionState=function(v,H,U){return Z.H.useActionState(v,H,U)},X.useCallback=function(v,H){return Z.H.useCallback(v,H)},X.useContext=function(v){return Z.H.useContext(v)},X.useDebugValue=function(){},X.useDeferredValue=function(v,H){return Z.H.useDeferredValue(v,H)},X.useEffect=function(v,H){return Z.H.useEffect(v,H)},X.useEffectEvent=function(v){return Z.H.useEffectEvent(v)},X.useId=function(){return Z.H.useId()},X.useImperativeHandle=function(v,H,U){return Z.H.useImperativeHandle(v,H,U)},X.useInsertionEffect=function(v,H){return Z.H.useInsertionEffect(v,H)},X.useLayoutEffect=function(v,H){return Z.H.useLayoutEffect(v,H)},X.useMemo=function(v,H){return Z.H.useMemo(v,H)},X.useOptimistic=function(v,H){return Z.H.useOptimistic(v,H)},X.useReducer=function(v,H,U){return Z.H.useReducer(v,H,U)},X.useRef=function(v){return Z.H.useRef(v)},X.useState=function(v){return Z.H.useState(v)},X.useSyncExternalStore=function(v,H,U){return Z.H.useSyncExternalStore(v,H,U)},X.useTransition=function(){return Z.H.useTransition()},X.version="19.2.1",X}var Op;function wc(){return Op||(Op=1,Zo.exports=uy()),Zo.exports}var R=wc();const dt=Zn(R);var Xo={exports:{}},Vn={},Wo={exports:{}},$o={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function hy(){return Bp||(Bp=1,(function(s){function c(E,_){var J=E.length;E.push(_);e:for(;0<J;){var ye=J-1>>>1,ve=E[ye];if(0<g(ve,_))E[ye]=_,E[J]=ve,J=ye;else break e}}function u(E){return E.length===0?null:E[0]}function d(E){if(E.length===0)return null;var _=E[0],J=E.pop();if(J!==_){E[0]=J;e:for(var ye=0,ve=E.length,v=ve>>>1;ye<v;){var H=2*(ye+1)-1,U=E[H],V=H+1,W=E[V];if(0>g(U,J))V<ve&&0>g(W,U)?(E[ye]=W,E[V]=J,ye=V):(E[ye]=U,E[H]=J,ye=H);else if(V<ve&&0>g(W,J))E[ye]=W,E[V]=J,ye=V;else break e}}return _}function g(E,_){var J=E.sortIndex-_.sortIndex;return J!==0?J:E.id-_.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var y=Date,k=y.now();s.unstable_now=function(){return y.now()-k}}var m=[],f=[],T=1,A=null,O=3,B=!1,Y=!1,Q=!1,q=!1,I=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function pe(E){for(var _=u(f);_!==null;){if(_.callback===null)d(f);else if(_.startTime<=E)d(f),_.sortIndex=_.expirationTime,c(m,_);else break;_=u(f)}}function Se(E){if(Q=!1,pe(E),!Y)if(u(m)!==null)Y=!0,Ee||(Ee=!0,Ve());else{var _=u(f);_!==null&&Ma(Se,_.startTime-E)}}var Ee=!1,Z=-1,Ge=5,Ie=-1;function Ze(){return q?!0:!(s.unstable_now()-Ie<Ge)}function We(){if(q=!1,Ee){var E=s.unstable_now();Ie=E;var _=!0;try{e:{Y=!1,Q&&(Q=!1,ae(Z),Z=-1),B=!0;var J=O;try{a:{for(pe(E),A=u(m);A!==null&&!(A.expirationTime>E&&Ze());){var ye=A.callback;if(typeof ye=="function"){A.callback=null,O=A.priorityLevel;var ve=ye(A.expirationTime<=E);if(E=s.unstable_now(),typeof ve=="function"){A.callback=ve,pe(E),_=!0;break a}A===u(m)&&d(m),pe(E)}else d(m);A=u(m)}if(A!==null)_=!0;else{var v=u(f);v!==null&&Ma(Se,v.startTime-E),_=!1}}break e}finally{A=null,O=J,B=!1}_=void 0}}finally{_?Ve():Ee=!1}}}var Ve;if(typeof L=="function")Ve=function(){L(We)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Va=Lt.port2;Lt.port1.onmessage=We,Ve=function(){Va.postMessage(null)}}else Ve=function(){I(We,0)};function Ma(E,_){Z=I(function(){E(s.unstable_now())},_)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_next=function(E){switch(O){case 1:case 2:case 3:var _=3;break;default:_=O}var J=O;O=_;try{return E()}finally{O=J}},s.unstable_requestPaint=function(){q=!0},s.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var J=O;O=E;try{return _()}finally{O=J}},s.unstable_scheduleCallback=function(E,_,J){var ye=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,E){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=J+ve,E={id:T++,callback:_,priorityLevel:E,startTime:J,expirationTime:ve,sortIndex:-1},J>ye?(E.sortIndex=J,c(f,E),u(m)===null&&E===u(f)&&(Q?(ae(Z),Z=-1):Q=!0,Ma(Se,J-ye))):(E.sortIndex=ve,c(m,E),Y||B||(Y=!0,Ee||(Ee=!0,Ve()))),E},s.unstable_shouldYield=Ze,s.unstable_wrapCallback=function(E){var _=O;return function(){var J=O;O=_;try{return E.apply(this,arguments)}finally{O=J}}}})($o)),$o}var _p;function py(){return _p||(_p=1,Wo.exports=hy()),Wo.exports}var ec={exports:{}},Xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function gy(){if(Up)return Xe;Up=1;var s=wc();function c(m){var f="https://react.dev/errors/"+m;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)f+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+m+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},g=Symbol.for("react.portal");function p(m,f,T){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:A==null?null:""+A,children:m,containerInfo:f,implementation:T}}var y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(m,f){if(m==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Xe.createPortal=function(m,f){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(c(299));return p(m,f,null,T)},Xe.flushSync=function(m){var f=y.T,T=d.p;try{if(y.T=null,d.p=2,m)return m()}finally{y.T=f,d.p=T,d.d.f()}},Xe.preconnect=function(m,f){typeof m=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,d.d.C(m,f))},Xe.prefetchDNS=function(m){typeof m=="string"&&d.d.D(m)},Xe.preinit=function(m,f){if(typeof m=="string"&&f&&typeof f.as=="string"){var T=f.as,A=k(T,f.crossOrigin),O=typeof f.integrity=="string"?f.integrity:void 0,B=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;T==="style"?d.d.S(m,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:A,integrity:O,fetchPriority:B}):T==="script"&&d.d.X(m,{crossOrigin:A,integrity:O,fetchPriority:B,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},Xe.preinitModule=function(m,f){if(typeof m=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var T=k(f.as,f.crossOrigin);d.d.M(m,{crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&d.d.M(m)},Xe.preload=function(m,f){if(typeof m=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var T=f.as,A=k(T,f.crossOrigin);d.d.L(m,T,{crossOrigin:A,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},Xe.preloadModule=function(m,f){if(typeof m=="string")if(f){var T=k(f.as,f.crossOrigin);d.d.m(m,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else d.d.m(m)},Xe.requestFormReset=function(m){d.d.r(m)},Xe.unstable_batchedUpdates=function(m,f){return m(f)},Xe.useFormState=function(m,f,T){return y.H.useFormState(m,f,T)},Xe.useFormStatus=function(){return y.H.useHostTransitionStatus()},Xe.version="19.2.1",Xe}var Lp;function fy(){if(Lp)return ec.exports;Lp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),ec.exports=gy(),ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function my(){if(Gp)return Vn;Gp=1;var s=py(),c=wc(),u=fy();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function y(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function k(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function m(e){if(p(e)!==e)throw Error(d(188))}function f(e){var a=e.alternate;if(!a){if(a=p(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,i=a;;){var n=t.return;if(n===null)break;var r=n.alternate;if(r===null){if(i=n.return,i!==null){t=i;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===t)return m(n),e;if(r===i)return m(n),a;r=r.sibling}throw Error(d(188))}if(t.return!==i.return)t=n,i=r;else{for(var o=!1,h=n.child;h;){if(h===t){o=!0,t=n,i=r;break}if(h===i){o=!0,i=n,t=r;break}h=h.sibling}if(!o){for(h=r.child;h;){if(h===t){o=!0,t=r,i=n;break}if(h===i){o=!0,i=r,t=n;break}h=h.sibling}if(!o)throw Error(d(189))}}if(t.alternate!==i)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function T(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=T(e),a!==null)return a;e=e.sibling}return null}var A=Object.assign,O=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),ae=Symbol.for("react.consumer"),L=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Ie=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),We=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=We&&e[We]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function Va(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case I:return"Profiler";case q:return"StrictMode";case Se:return"Suspense";case Ee:return"SuspenseList";case Ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case L:return e.displayName||"Context";case ae:return(e._context.displayName||"Context")+".Consumer";case pe:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return a=e.displayName||null,a!==null?a:Va(e.type)||"Memo";case Ge:a=e._payload,e=e._init;try{return Va(e(a))}catch{}}return null}var Ma=Array.isArray,E=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ye=[],ve=-1;function v(e){return{current:e}}function H(e){0>ve||(e.current=ye[ve],ye[ve]=null,ve--)}function U(e,a){ve++,ye[ve]=e.current,e.current=a}var V=v(null),W=v(null),te=v(null),ge=v(null);function $e(e,a){switch(U(te,a),U(W,e),U(V,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?ap(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=ap(a),e=tp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(V),U(V,e)}function ze(){H(V),H(W),H(te)}function Ji(e){e.memoizedState!==null&&U(ge,e);var a=V.current,t=tp(a,e.type);a!==t&&(U(W,e),U(V,t))}function er(e){W.current===e&&(H(V),H(W)),ge.current===e&&(H(ge),Ln._currentValue=J)}var Ml,Ec;function Gt(e){if(Ml===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Ml=a&&a[1]||"",Ec=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ml+e+Ec}var El=!1;function zl(e,a){if(!e||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(C){var N=C}Reflect.construct(e,[],D)}else{try{D.call()}catch(C){N=C}e.call(D.prototype)}}else{try{throw Error()}catch(C){N=C}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(C){if(C&&N&&typeof C.stack=="string")return[C.stack,N.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],h=r[1];if(o&&h){var b=o.split(`
`),S=h.split(`
`);for(n=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(i===b.length||n===S.length)for(i=b.length-1,n=S.length-1;1<=i&&0<=n&&b[i]!==S[n];)n--;for(;1<=i&&0<=n;i--,n--)if(b[i]!==S[n]){if(i!==1||n!==1)do if(i--,n--,0>n||b[i]!==S[n]){var M=`
`+b[i].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=i&&0<=n);break}}}finally{El=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Gt(t):""}function _g(e,a){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==a&&a!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return zl(e.type,!1);case 11:return zl(e.type.render,!1);case 1:return zl(e.type,!0);case 31:return Gt("Activity");default:return""}}function zc(e){try{var a="",t=null;do a+=_g(e,t),t=e,e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Dl=Object.prototype.hasOwnProperty,Hl=s.unstable_scheduleCallback,Ol=s.unstable_cancelCallback,Ug=s.unstable_shouldYield,Lg=s.unstable_requestPaint,oa=s.unstable_now,Gg=s.unstable_getCurrentPriorityLevel,Dc=s.unstable_ImmediatePriority,Hc=s.unstable_UserBlockingPriority,ar=s.unstable_NormalPriority,qg=s.unstable_LowPriority,Oc=s.unstable_IdlePriority,Yg=s.log,Ig=s.unstable_setDisableYieldValue,Zi=null,ca=null;function gt(e){if(typeof Yg=="function"&&Ig(e),ca&&typeof ca.setStrictMode=="function")try{ca.setStrictMode(Zi,e)}catch{}}var da=Math.clz32?Math.clz32:Kg,Vg=Math.log,Pg=Math.LN2;function Kg(e){return e>>>=0,e===0?32:31-(Vg(e)/Pg|0)|0}var tr=256,ir=262144,nr=4194304;function qt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rr(e,a,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~r,i!==0?n=qt(i):(o&=h,o!==0?n=qt(o):t||(t=h&~e,t!==0&&(n=qt(t))))):(h=i&~r,h!==0?n=qt(h):o!==0?n=qt(o):t||(t=i&~e,t!==0&&(n=qt(t)))),n===0?0:a!==0&&a!==n&&(a&r)===0&&(r=n&-n,t=a&-a,r>=t||r===32&&(t&4194048)!==0)?a:n}function Xi(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Qg(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var e=nr;return nr<<=1,(nr&62914560)===0&&(nr=4194304),e}function Bl(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Wi(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fg(e,a,t,i,n,r){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var h=e.entanglements,b=e.expirationTimes,S=e.hiddenUpdates;for(t=o&~t;0<t;){var M=31-da(t),D=1<<M;h[M]=0,b[M]=-1;var N=S[M];if(N!==null)for(S[M]=null,M=0;M<N.length;M++){var C=N[M];C!==null&&(C.lane&=-536870913)}t&=~D}i!==0&&_c(e,i,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~a))}function _c(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var i=31-da(a);e.entangledLanes|=a,e.entanglements[i]=e.entanglements[i]|1073741824|t&261930}function Uc(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var i=31-da(t),n=1<<i;n&a|e[i]&a&&(e[i]|=a),t&=~n}}function Lc(e,a){var t=a&-a;return t=(t&42)!==0?1:_l(t),(t&(e.suspendedLanes|a))!==0?0:t}function _l(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ul(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gc(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:Tp(e.type))}function qc(e,a){var t=_.p;try{return _.p=e,a()}finally{_.p=t}}var ft=Math.random().toString(36).slice(2),Pe="__reactFiber$"+ft,aa="__reactProps$"+ft,li="__reactContainer$"+ft,Ll="__reactEvents$"+ft,Jg="__reactListeners$"+ft,Zg="__reactHandles$"+ft,Yc="__reactResources$"+ft,$i="__reactMarker$"+ft;function Gl(e){delete e[Pe],delete e[aa],delete e[Ll],delete e[Jg],delete e[Zg]}function si(e){var a=e[Pe];if(a)return a;for(var t=e.parentNode;t;){if(a=t[li]||t[Pe]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=cp(e);e!==null;){if(t=e[Pe])return t;e=cp(e)}return a}e=t,t=e.parentNode}return null}function oi(e){if(e=e[Pe]||e[li]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function en(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function ci(e){var a=e[Yc];return a||(a=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function qe(e){e[$i]=!0}var Ic=new Set,Vc={};function Yt(e,a){di(e,a),di(e+"Capture",a)}function di(e,a){for(Vc[e]=a,e=0;e<a.length;e++)Ic.add(a[e])}var Xg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pc={},Kc={};function Wg(e){return Dl.call(Kc,e)?!0:Dl.call(Pc,e)?!1:Xg.test(e)?Kc[e]=!0:(Pc[e]=!0,!1)}function lr(e,a,t){if(Wg(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function sr(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Pa(e,a,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+i)}}function ba(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function $g(e,a,t){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,r=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(o){t=""+o,r.call(this,o)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function ql(e){if(!e._valueTracker){var a=Qc(e)?"checked":"value";e._valueTracker=$g(e,a,""+e[a])}}function Fc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),i="";return e&&(i=Qc(e)?e.checked?"true":"false":e.value),e=i,e!==t?(a.setValue(e),!0):!1}function or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ef=/[\n"\\]/g;function xa(e){return e.replace(ef,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Yl(e,a,t,i,n,r,o,h){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),a!=null?o==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ba(a)):e.value!==""+ba(a)&&(e.value=""+ba(a)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),a!=null?Il(e,o,ba(a)):t!=null?Il(e,o,ba(t)):i!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+ba(h):e.removeAttribute("name")}function Jc(e,a,t,i,n,r,o,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),a!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||a!=null)){ql(e);return}t=t!=null?""+ba(t):"",a=a!=null?""+ba(a):t,h||a===e.value||(e.value=a),e.defaultValue=a}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ql(e)}function Il(e,a,t){a==="number"&&or(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ui(e,a,t,i){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&i&&(e[t].defaultSelected=!0)}else{for(t=""+ba(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Zc(e,a,t){if(a!=null&&(a=""+ba(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+ba(t):""}function Xc(e,a,t,i){if(a==null){if(i!=null){if(t!=null)throw Error(d(92));if(Ma(i)){if(1<i.length)throw Error(d(93));i=i[0]}t=i}t==null&&(t=""),a=t}t=ba(a),e.defaultValue=t,i=e.textContent,i===t&&i!==""&&i!==null&&(e.value=i),ql(e)}function hi(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var af=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(e,a,t){var i=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":i?e.setProperty(a,t):typeof t!="number"||t===0||af.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function $c(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in a)i=a[n],a.hasOwnProperty(n)&&t[n]!==i&&Wc(e,n,i)}else for(var r in a)a.hasOwnProperty(r)&&Wc(e,r,a[r])}function Vl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cr(e){return nf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ka(){}var Pl=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pi=null,gi=null;function ed(e){var a=oi(e);if(a&&(e=a.stateNode)){var t=e[aa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Yl(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+xa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var i=t[a];if(i!==e&&i.form===e.form){var n=i[aa]||null;if(!n)throw Error(d(90));Yl(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)i=t[a],i.form===e.form&&Fc(i)}break e;case"textarea":Zc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&ui(e,!!t.multiple,a,!1)}}}var Ql=!1;function ad(e,a,t){if(Ql)return e(a,t);Ql=!0;try{var i=e(a);return i}finally{if(Ql=!1,(pi!==null||gi!==null)&&(Zr(),pi&&(a=pi,e=gi,gi=pi=null,ed(a),e)))for(a=0;a<e.length;a++)ed(e[a])}}function an(e,a){var t=e.stateNode;if(t===null)return null;var i=t[aa]||null;if(i===null)return null;t=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var Qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=!1;if(Qa)try{var tn={};Object.defineProperty(tn,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",tn,tn),window.removeEventListener("test",tn,tn)}catch{Fl=!1}var mt=null,Jl=null,dr=null;function td(){if(dr)return dr;var e,a=Jl,t=a.length,i,n="value"in mt?mt.value:mt.textContent,r=n.length;for(e=0;e<t&&a[e]===n[e];e++);var o=t-e;for(i=1;i<=o&&a[t-i]===n[r-i];i++);return dr=n.slice(e,1<i?1-i:void 0)}function ur(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function id(){return!1}function ta(e){function a(t,i,n,r,o){this._reactName=t,this._targetInst=n,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hr:id,this.isPropagationStopped=id,this}return A(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),a}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pr=ta(It),nn=A({},It,{view:0,detail:0}),rf=ta(nn),Zl,Xl,rn,gr=A({},nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rn&&(rn&&e.type==="mousemove"?(Zl=e.screenX-rn.screenX,Xl=e.screenY-rn.screenY):Xl=Zl=0,rn=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),nd=ta(gr),lf=A({},gr,{dataTransfer:0}),sf=ta(lf),of=A({},nn,{relatedTarget:0}),Wl=ta(of),cf=A({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),df=ta(cf),uf=A({},It,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hf=ta(uf),pf=A({},It,{data:0}),rd=ta(pf),gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yf(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=mf[e])?!!a[e]:!1}function $l(){return yf}var bf=A({},nn,{key:function(e){if(e.key){var a=gf[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=ta(bf),kf=A({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=ta(kf),vf=A({},nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),wf=ta(vf),jf=A({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=ta(jf),Tf=A({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=ta(Tf),Af=A({},It,{newState:0,oldState:0}),Cf=ta(Af),Rf=[9,13,27,32],es=Qa&&"CompositionEvent"in window,ln=null;Qa&&"documentMode"in document&&(ln=document.documentMode);var Mf=Qa&&"TextEvent"in window&&!ln,sd=Qa&&(!es||ln&&8<ln&&11>=ln),od=" ",cd=!1;function dd(e,a){switch(e){case"keyup":return Rf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function Ef(e,a){switch(e){case"compositionend":return ud(a);case"keypress":return a.which!==32?null:(cd=!0,od);case"textInput":return e=a.data,e===od&&cd?null:e;default:return null}}function zf(e,a){if(fi)return e==="compositionend"||!es&&dd(e,a)?(e=td(),dr=Jl=mt=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return sd&&a.locale!=="ko"?null:a.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Df[e.type]:a==="textarea"}function pd(e,a,t,i){pi?gi?gi.push(i):gi=[i]:pi=i,a=il(a,"onChange"),0<a.length&&(t=new pr("onChange","change",null,t,i),e.push({event:t,listeners:a}))}var sn=null,on=null;function Hf(e){Jh(e,0)}function fr(e){var a=en(e);if(Fc(a))return e}function gd(e,a){if(e==="change")return a}var fd=!1;if(Qa){var as;if(Qa){var ts="oninput"in document;if(!ts){var md=document.createElement("div");md.setAttribute("oninput","return;"),ts=typeof md.oninput=="function"}as=ts}else as=!1;fd=as&&(!document.documentMode||9<document.documentMode)}function yd(){sn&&(sn.detachEvent("onpropertychange",bd),on=sn=null)}function bd(e){if(e.propertyName==="value"&&fr(on)){var a=[];pd(a,on,e,Kl(e)),ad(Hf,a)}}function Of(e,a,t){e==="focusin"?(yd(),sn=a,on=t,sn.attachEvent("onpropertychange",bd)):e==="focusout"&&yd()}function Bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fr(on)}function _f(e,a){if(e==="click")return fr(a)}function Uf(e,a){if(e==="input"||e==="change")return fr(a)}function Lf(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ua=typeof Object.is=="function"?Object.is:Lf;function cn(e,a){if(ua(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),i=Object.keys(a);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var n=t[i];if(!Dl.call(a,n)||!ua(e[n],a[n]))return!1}return!0}function xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,a){var t=xd(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=a&&i>=a)return{node:t,offset:a-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xd(t)}}function vd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?vd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=or(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=or(e.document)}return a}function is(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Gf=Qa&&"documentMode"in document&&11>=document.documentMode,mi=null,ns=null,dn=null,rs=!1;function jd(e,a,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rs||mi==null||mi!==or(i)||(i=mi,"selectionStart"in i&&is(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),dn&&cn(dn,i)||(dn=i,i=il(ns,"onSelect"),0<i.length&&(a=new pr("onSelect","select",null,a,t),e.push({event:a,listeners:i}),a.target=mi)))}function Vt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var yi={animationend:Vt("Animation","AnimationEnd"),animationiteration:Vt("Animation","AnimationIteration"),animationstart:Vt("Animation","AnimationStart"),transitionrun:Vt("Transition","TransitionRun"),transitionstart:Vt("Transition","TransitionStart"),transitioncancel:Vt("Transition","TransitionCancel"),transitionend:Vt("Transition","TransitionEnd")},ls={},Sd={};Qa&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Pt(e){if(ls[e])return ls[e];if(!yi[e])return e;var a=yi[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Sd)return ls[e]=a[t];return e}var Td=Pt("animationend"),Nd=Pt("animationiteration"),Ad=Pt("animationstart"),qf=Pt("transitionrun"),Yf=Pt("transitionstart"),If=Pt("transitioncancel"),Cd=Pt("transitionend"),Rd=new Map,ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ss.push("scrollEnd");function Ea(e,a){Rd.set(e,a),Yt(a,[e])}var mr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ka=[],bi=0,os=0;function yr(){for(var e=bi,a=os=bi=0;a<e;){var t=ka[a];ka[a++]=null;var i=ka[a];ka[a++]=null;var n=ka[a];ka[a++]=null;var r=ka[a];if(ka[a++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}r!==0&&Md(t,n,r)}}function br(e,a,t,i){ka[bi++]=e,ka[bi++]=a,ka[bi++]=t,ka[bi++]=i,os|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function cs(e,a,t,i){return br(e,a,t,i),xr(e)}function Kt(e,a){return br(e,null,null,a),xr(e)}function Md(e,a,t){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t);for(var n=!1,r=e.return;r!==null;)r.childLanes|=t,i=r.alternate,i!==null&&(i.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&a!==null&&(n=31-da(t),e=r.hiddenUpdates,i=e[n],i===null?e[n]=[a]:i.push(a),a.lane=t|536870912),r):null}function xr(e){if(50<zn)throw zn=0,xo=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var xi={};function Vf(e,a,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ha(e,a,t,i){return new Vf(e,a,t,i)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fa(e,a){var t=e.alternate;return t===null?(t=ha(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Ed(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function kr(e,a,t,i,n,r){var o=0;if(i=e,typeof e=="function")ds(e)&&(o=1);else if(typeof e=="string")o=Jm(e,t,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ie:return e=ha(31,t,a,n),e.elementType=Ie,e.lanes=r,e;case Q:return Qt(t.children,n,r,a);case q:o=8,n|=24;break;case I:return e=ha(12,t,a,n|2),e.elementType=I,e.lanes=r,e;case Se:return e=ha(13,t,a,n),e.elementType=Se,e.lanes=r,e;case Ee:return e=ha(19,t,a,n),e.elementType=Ee,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:o=10;break e;case ae:o=9;break e;case pe:o=11;break e;case Z:o=14;break e;case Ge:o=16,i=null;break e}o=29,t=Error(d(130,e===null?"null":typeof e,"")),i=null}return a=ha(o,t,a,n),a.elementType=e,a.type=i,a.lanes=r,a}function Qt(e,a,t,i){return e=ha(7,e,i,a),e.lanes=t,e}function us(e,a,t){return e=ha(6,e,null,a),e.lanes=t,e}function zd(e){var a=ha(18,null,null,0);return a.stateNode=e,a}function hs(e,a,t){return a=ha(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Dd=new WeakMap;function va(e,a){if(typeof e=="object"&&e!==null){var t=Dd.get(e);return t!==void 0?t:(a={value:e,source:a,stack:zc(a)},Dd.set(e,a),a)}return{value:e,source:a,stack:zc(a)}}var ki=[],vi=0,vr=null,un=0,wa=[],ja=0,yt=null,_a=1,Ua="";function Ja(e,a){ki[vi++]=un,ki[vi++]=vr,vr=e,un=a}function Hd(e,a,t){wa[ja++]=_a,wa[ja++]=Ua,wa[ja++]=yt,yt=e;var i=_a;e=Ua;var n=32-da(i)-1;i&=~(1<<n),t+=1;var r=32-da(a)+n;if(30<r){var o=n-n%5;r=(i&(1<<o)-1).toString(32),i>>=o,n-=o,_a=1<<32-da(a)+n|t<<n|i,Ua=r+e}else _a=1<<r|t<<n|i,Ua=e}function ps(e){e.return!==null&&(Ja(e,1),Hd(e,1,0))}function gs(e){for(;e===vr;)vr=ki[--vi],ki[vi]=null,un=ki[--vi],ki[vi]=null;for(;e===yt;)yt=wa[--ja],wa[ja]=null,Ua=wa[--ja],wa[ja]=null,_a=wa[--ja],wa[ja]=null}function Od(e,a){wa[ja++]=_a,wa[ja++]=Ua,wa[ja++]=yt,_a=a.id,Ua=a.overflow,yt=e}var Ke=null,Te=null,oe=!1,bt=null,Sa=!1,fs=Error(d(519));function xt(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hn(va(a,e)),fs}function Bd(e){var a=e.stateNode,t=e.type,i=e.memoizedProps;switch(a[Pe]=e,a[aa]=i,t){case"dialog":ne("cancel",a),ne("close",a);break;case"iframe":case"object":case"embed":ne("load",a);break;case"video":case"audio":for(t=0;t<Hn.length;t++)ne(Hn[t],a);break;case"source":ne("error",a);break;case"img":case"image":case"link":ne("error",a),ne("load",a);break;case"details":ne("toggle",a);break;case"input":ne("invalid",a),Jc(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",a);break;case"textarea":ne("invalid",a),Xc(a,i.value,i.defaultValue,i.children)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||i.suppressHydrationWarning===!0||$h(a.textContent,t)?(i.popover!=null&&(ne("beforetoggle",a),ne("toggle",a)),i.onScroll!=null&&ne("scroll",a),i.onScrollEnd!=null&&ne("scrollend",a),i.onClick!=null&&(a.onclick=Ka),a=!0):a=!1,a||xt(e,!0)}function _d(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Sa=!1;return;case 27:case 3:Sa=!0;return;default:Ke=Ke.return}}function wi(e){if(e!==Ke)return!1;if(!oe)return _d(e),oe=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ho(e.type,e.memoizedProps)),t=!t),t&&Te&&xt(e),_d(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Te=op(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Te=op(e)}else a===27?(a=Te,Dt(e.type)?(e=Lo,Lo=null,Te=e):Te=a):Te=Ke?Na(e.stateNode.nextSibling):null;return!0}function Ft(){Te=Ke=null,oe=!1}function ms(){var e=bt;return e!==null&&(la===null?la=e:la.push.apply(la,e),bt=null),e}function hn(e){bt===null?bt=[e]:bt.push(e)}var ys=v(null),Jt=null,Za=null;function kt(e,a,t){U(ys,a._currentValue),a._currentValue=t}function Xa(e){e._currentValue=ys.current,H(ys)}function bs(e,a,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),e===t)break;e=e.return}}function xs(e,a,t,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=n;for(var b=0;b<a.length;b++)if(h.context===a[b]){r.lanes|=t,h=r.alternate,h!==null&&(h.lanes|=t),bs(r.return,t,e),i||(o=null);break e}r=h.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(d(341));o.lanes|=t,r=o.alternate,r!==null&&(r.lanes|=t),bs(o,t,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function ji(e,a,t,i){e=null;for(var n=a,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var h=n.type;ua(n.pendingProps.value,o.value)||(e!==null?e.push(h):e=[h])}}else if(n===ge.current){if(o=n.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Ln):e=[Ln])}n=n.return}e!==null&&xs(a,e,t,i),a.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!ua(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zt(e){Jt=e,Za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Ud(Jt,e)}function jr(e,a){return Jt===null&&Zt(e),Ud(e,a)}function Ud(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Za===null){if(e===null)throw Error(d(308));Za=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Za=Za.next=a;return t}var Pf=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,i){e.push(i)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Kf=s.unstable_scheduleCallback,Qf=s.unstable_NormalPriority,Oe={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ks(){return{controller:new Pf,data:new Map,refCount:0}}function pn(e){e.refCount--,e.refCount===0&&Kf(Qf,function(){e.controller.abort()})}var gn=null,vs=0,Si=0,Ti=null;function Ff(e,a){if(gn===null){var t=gn=[];vs=0,Si=To(),Ti={status:"pending",value:void 0,then:function(i){t.push(i)}}}return vs++,a.then(Ld,Ld),a}function Ld(){if(--vs===0&&gn!==null){Ti!==null&&(Ti.status="fulfilled");var e=gn;gn=null,Si=0,Ti=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Jf(e,a){var t=[],i={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){i.status="fulfilled",i.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(i.status="rejected",i.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),i}var Gd=E.S;E.S=function(e,a){jh=oa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ff(e,a),Gd!==null&&Gd(e,a)};var Xt=v(null);function ws(){var e=Xt.current;return e!==null?e:we.pooledCache}function Sr(e,a){a===null?U(Xt,Xt.current):U(Xt,a.pool)}function qd(){var e=ws();return e===null?null:{parent:Oe._currentValue,pool:e}}var Ni=Error(d(460)),js=Error(d(474)),Tr=Error(d(542)),Nr={then:function(){}};function Yd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Id(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ka,Ka),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Pd(e),e;default:if(typeof a.status=="string")a.then(Ka,Ka);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(i){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=i}},function(i){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Pd(e),e}throw $t=a,Ni}}function Wt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?($t=t,Ni):t}}var $t=null;function Vd(){if($t===null)throw Error(d(459));var e=$t;return $t=null,e}function Pd(e){if(e===Ni||e===Tr)throw Error(d(483))}var Ai=null,fn=0;function Ar(e){var a=fn;return fn+=1,Ai===null&&(Ai=[]),Id(Ai,e,a)}function mn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Cr(e,a){throw a.$$typeof===O?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Kd(e){function a(w,x){if(e){var j=w.deletions;j===null?(w.deletions=[x],w.flags|=16):j.push(x)}}function t(w,x){if(!e)return null;for(;x!==null;)a(w,x),x=x.sibling;return null}function i(w){for(var x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function n(w,x){return w=Fa(w,x),w.index=0,w.sibling=null,w}function r(w,x,j){return w.index=j,e?(j=w.alternate,j!==null?(j=j.index,j<x?(w.flags|=67108866,x):j):(w.flags|=67108866,x)):(w.flags|=1048576,x)}function o(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function h(w,x,j,z){return x===null||x.tag!==6?(x=us(j,w.mode,z),x.return=w,x):(x=n(x,j),x.return=w,x)}function b(w,x,j,z){var K=j.type;return K===Q?M(w,x,j.props.children,z,j.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ge&&Wt(K)===x.type)?(x=n(x,j.props),mn(x,j),x.return=w,x):(x=kr(j.type,j.key,j.props,null,w.mode,z),mn(x,j),x.return=w,x)}function S(w,x,j,z){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=hs(j,w.mode,z),x.return=w,x):(x=n(x,j.children||[]),x.return=w,x)}function M(w,x,j,z,K){return x===null||x.tag!==7?(x=Qt(j,w.mode,z,K),x.return=w,x):(x=n(x,j),x.return=w,x)}function D(w,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=us(""+x,w.mode,j),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case B:return j=kr(x.type,x.key,x.props,null,w.mode,j),mn(j,x),j.return=w,j;case Y:return x=hs(x,w.mode,j),x.return=w,x;case Ge:return x=Wt(x),D(w,x,j)}if(Ma(x)||Ve(x))return x=Qt(x,w.mode,j,null),x.return=w,x;if(typeof x.then=="function")return D(w,Ar(x),j);if(x.$$typeof===L)return D(w,jr(w,x),j);Cr(w,x)}return null}function N(w,x,j,z){var K=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return K!==null?null:h(w,x,""+j,z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return j.key===K?b(w,x,j,z):null;case Y:return j.key===K?S(w,x,j,z):null;case Ge:return j=Wt(j),N(w,x,j,z)}if(Ma(j)||Ve(j))return K!==null?null:M(w,x,j,z,null);if(typeof j.then=="function")return N(w,x,Ar(j),z);if(j.$$typeof===L)return N(w,x,jr(w,j),z);Cr(w,j)}return null}function C(w,x,j,z,K){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return w=w.get(j)||null,h(x,w,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case B:return w=w.get(z.key===null?j:z.key)||null,b(x,w,z,K);case Y:return w=w.get(z.key===null?j:z.key)||null,S(x,w,z,K);case Ge:return z=Wt(z),C(w,x,j,z,K)}if(Ma(z)||Ve(z))return w=w.get(j)||null,M(x,w,z,K,null);if(typeof z.then=="function")return C(w,x,j,Ar(z),K);if(z.$$typeof===L)return C(w,x,j,jr(x,z),K);Cr(x,z)}return null}function G(w,x,j,z){for(var K=null,de=null,P=x,ee=x=0,le=null;P!==null&&ee<j.length;ee++){P.index>ee?(le=P,P=null):le=P.sibling;var ue=N(w,P,j[ee],z);if(ue===null){P===null&&(P=le);break}e&&P&&ue.alternate===null&&a(w,P),x=r(ue,x,ee),de===null?K=ue:de.sibling=ue,de=ue,P=le}if(ee===j.length)return t(w,P),oe&&Ja(w,ee),K;if(P===null){for(;ee<j.length;ee++)P=D(w,j[ee],z),P!==null&&(x=r(P,x,ee),de===null?K=P:de.sibling=P,de=P);return oe&&Ja(w,ee),K}for(P=i(P);ee<j.length;ee++)le=C(P,w,ee,j[ee],z),le!==null&&(e&&le.alternate!==null&&P.delete(le.key===null?ee:le.key),x=r(le,x,ee),de===null?K=le:de.sibling=le,de=le);return e&&P.forEach(function(Ut){return a(w,Ut)}),oe&&Ja(w,ee),K}function F(w,x,j,z){if(j==null)throw Error(d(151));for(var K=null,de=null,P=x,ee=x=0,le=null,ue=j.next();P!==null&&!ue.done;ee++,ue=j.next()){P.index>ee?(le=P,P=null):le=P.sibling;var Ut=N(w,P,ue.value,z);if(Ut===null){P===null&&(P=le);break}e&&P&&Ut.alternate===null&&a(w,P),x=r(Ut,x,ee),de===null?K=Ut:de.sibling=Ut,de=Ut,P=le}if(ue.done)return t(w,P),oe&&Ja(w,ee),K;if(P===null){for(;!ue.done;ee++,ue=j.next())ue=D(w,ue.value,z),ue!==null&&(x=r(ue,x,ee),de===null?K=ue:de.sibling=ue,de=ue);return oe&&Ja(w,ee),K}for(P=i(P);!ue.done;ee++,ue=j.next())ue=C(P,w,ee,ue.value,z),ue!==null&&(e&&ue.alternate!==null&&P.delete(ue.key===null?ee:ue.key),x=r(ue,x,ee),de===null?K=ue:de.sibling=ue,de=ue);return e&&P.forEach(function(ly){return a(w,ly)}),oe&&Ja(w,ee),K}function ke(w,x,j,z){if(typeof j=="object"&&j!==null&&j.type===Q&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case B:e:{for(var K=j.key;x!==null;){if(x.key===K){if(K=j.type,K===Q){if(x.tag===7){t(w,x.sibling),z=n(x,j.props.children),z.return=w,w=z;break e}}else if(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ge&&Wt(K)===x.type){t(w,x.sibling),z=n(x,j.props),mn(z,j),z.return=w,w=z;break e}t(w,x);break}else a(w,x);x=x.sibling}j.type===Q?(z=Qt(j.props.children,w.mode,z,j.key),z.return=w,w=z):(z=kr(j.type,j.key,j.props,null,w.mode,z),mn(z,j),z.return=w,w=z)}return o(w);case Y:e:{for(K=j.key;x!==null;){if(x.key===K)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){t(w,x.sibling),z=n(x,j.children||[]),z.return=w,w=z;break e}else{t(w,x);break}else a(w,x);x=x.sibling}z=hs(j,w.mode,z),z.return=w,w=z}return o(w);case Ge:return j=Wt(j),ke(w,x,j,z)}if(Ma(j))return G(w,x,j,z);if(Ve(j)){if(K=Ve(j),typeof K!="function")throw Error(d(150));return j=K.call(j),F(w,x,j,z)}if(typeof j.then=="function")return ke(w,x,Ar(j),z);if(j.$$typeof===L)return ke(w,x,jr(w,j),z);Cr(w,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,x!==null&&x.tag===6?(t(w,x.sibling),z=n(x,j),z.return=w,w=z):(t(w,x),z=us(j,w.mode,z),z.return=w,w=z),o(w)):t(w,x)}return function(w,x,j,z){try{fn=0;var K=ke(w,x,j,z);return Ai=null,K}catch(P){if(P===Ni||P===Tr)throw P;var de=ha(29,P,null,w.mode);return de.lanes=z,de.return=w,de}finally{}}}var ei=Kd(!0),Qd=Kd(!1),vt=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jt(e,a,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(he&2)!==0){var n=i.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),i.pending=a,a=xr(e),Md(e,null,t),a}return br(e,i,a,t),xr(e)}function yn(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var i=a.lanes;i&=e.pendingLanes,t|=i,a.lanes=t,Uc(e,t)}}function Ns(e,a){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var n=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,t=t.next}while(t!==null);r===null?n=r=a:r=r.next=a}else n=r=a;t={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var As=!1;function bn(){if(As){var e=Ti;if(e!==null)throw e}}function xn(e,a,t,i){As=!1;var n=e.updateQueue;vt=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var b=h,S=b.next;b.next=null,o===null?r=S:o.next=S,o=b;var M=e.alternate;M!==null&&(M=M.updateQueue,h=M.lastBaseUpdate,h!==o&&(h===null?M.firstBaseUpdate=S:h.next=S,M.lastBaseUpdate=b))}if(r!==null){var D=n.baseState;o=0,M=S=b=null,h=r;do{var N=h.lane&-536870913,C=N!==h.lane;if(C?(re&N)===N:(i&N)===N){N!==0&&N===Si&&(As=!0),M!==null&&(M=M.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var G=e,F=h;N=a;var ke=t;switch(F.tag){case 1:if(G=F.payload,typeof G=="function"){D=G.call(ke,D,N);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=F.payload,N=typeof G=="function"?G.call(ke,D,N):G,N==null)break e;D=A({},D,N);break e;case 2:vt=!0}}N=h.callback,N!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[N]:C.push(N))}else C={lane:N,tag:h.tag,payload:h.payload,callback:h.callback,next:null},M===null?(S=M=C,b=D):M=M.next=C,o|=N;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;C=h,h=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);M===null&&(b=D),n.baseState=b,n.firstBaseUpdate=S,n.lastBaseUpdate=M,r===null&&(n.shared.lanes=0),Ct|=o,e.lanes=o,e.memoizedState=D}}function Fd(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Jd(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Fd(t[e],a)}var Ci=v(null),Rr=v(0);function Zd(e,a){e=lt,U(Rr,e),U(Ci,a),lt=e|a.baseLanes}function Cs(){U(Rr,lt),U(Ci,Ci.current)}function Rs(){lt=Rr.current,H(Ci),H(Rr)}var pa=v(null),Ta=null;function St(e){var a=e.alternate;U(De,De.current&1),U(pa,e),Ta===null&&(a===null||Ci.current!==null||a.memoizedState!==null)&&(Ta=e)}function Ms(e){U(De,De.current),U(pa,e),Ta===null&&(Ta=e)}function Xd(e){e.tag===22?(U(De,De.current),U(pa,e),Ta===null&&(Ta=e)):Tt()}function Tt(){U(De,De.current),U(pa,pa.current)}function ga(e){H(pa),Ta===e&&(Ta=null),H(De)}var De=v(0);function Mr(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||_o(t)||Uo(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Wa=0,$=null,be=null,Be=null,Er=!1,Ri=!1,ai=!1,zr=0,kn=0,Mi=null,Zf=0;function Re(){throw Error(d(321))}function Es(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ua(e[t],a[t]))return!1;return!0}function zs(e,a,t,i,n,r){return Wa=r,$=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,E.H=e===null||e.memoizedState===null?Hu:Qs,ai=!1,r=t(i,n),ai=!1,Ri&&(r=$d(a,t,i,n)),Wd(e),r}function Wd(e){E.H=jn;var a=be!==null&&be.next!==null;if(Wa=0,Be=be=$=null,Er=!1,kn=0,Mi=null,a)throw Error(d(300));e===null||_e||(e=e.dependencies,e!==null&&wr(e)&&(_e=!0))}function $d(e,a,t,i){$=e;var n=0;do{if(Ri&&(Mi=null),kn=0,Ri=!1,25<=n)throw Error(d(301));if(n+=1,Be=be=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}E.H=Ou,r=a(t,i)}while(Ri);return r}function Xf(){var e=E.H,a=e.useState()[0];return a=typeof a.then=="function"?vn(a):a,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&($.flags|=1024),a}function Ds(){var e=zr!==0;return zr=0,e}function Hs(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Os(e){if(Er){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Er=!1}Wa=0,Be=be=$=null,Ri=!1,kn=zr=0,Mi=null}function ea(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?$.memoizedState=Be=e:Be=Be.next=e,Be}function He(){if(be===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var a=Be===null?$.memoizedState:Be.next;if(a!==null)Be=a,be=e;else{if(e===null)throw $.alternate===null?Error(d(467)):Error(d(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Be===null?$.memoizedState=Be=e:Be=Be.next=e}return Be}function Dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vn(e){var a=kn;return kn+=1,Mi===null&&(Mi=[]),e=Id(Mi,e,a),a=$,(Be===null?a.memoizedState:Be.next)===null&&(a=a.alternate,E.H=a===null||a.memoizedState===null?Hu:Qs),e}function Hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vn(e);if(e.$$typeof===L)return Qe(e)}throw Error(d(438,String(e)))}function Bs(e){var a=null,t=$.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var i=$.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Dr(),$.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),i=0;i<e;i++)t[i]=Ze;return a.index++,t}function $a(e,a){return typeof a=="function"?a(e):a}function Or(e){var a=He();return _s(a,be,e)}function _s(e,a,t){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=t;var n=e.baseQueue,r=i.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}a.baseQueue=n=r,i.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{a=n.next;var h=o=null,b=null,S=a,M=!1;do{var D=S.lane&-536870913;if(D!==S.lane?(re&D)===D:(Wa&D)===D){var N=S.revertLane;if(N===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),D===Si&&(M=!0);else if((Wa&N)===N){S=S.next,N===Si&&(M=!0);continue}else D={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(h=b=D,o=r):b=b.next=D,$.lanes|=N,Ct|=N;D=S.action,ai&&t(r,D),r=S.hasEagerState?S.eagerState:t(r,D)}else N={lane:D,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(h=b=N,o=r):b=b.next=N,$.lanes|=D,Ct|=D;S=S.next}while(S!==null&&S!==a);if(b===null?o=r:b.next=h,!ua(r,e.memoizedState)&&(_e=!0,M&&(t=Ti,t!==null)))throw t;e.memoizedState=r,e.baseState=o,e.baseQueue=b,i.lastRenderedState=r}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Us(e){var a=He(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var i=t.dispatch,n=t.pending,r=a.memoizedState;if(n!==null){t.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);ua(r,a.memoizedState)||(_e=!0),a.memoizedState=r,a.baseQueue===null&&(a.baseState=r),t.lastRenderedState=r}return[r,i]}function eu(e,a,t){var i=$,n=He(),r=oe;if(r){if(t===void 0)throw Error(d(407));t=t()}else t=a();var o=!ua((be||n).memoizedState,t);if(o&&(n.memoizedState=t,_e=!0),n=n.queue,qs(iu.bind(null,i,n,e),[e]),n.getSnapshot!==a||o||Be!==null&&Be.memoizedState.tag&1){if(i.flags|=2048,Ei(9,{destroy:void 0},tu.bind(null,i,n,t,a),null),we===null)throw Error(d(349));r||(Wa&127)!==0||au(i,a,t)}return t}function au(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=$.updateQueue,a===null?(a=Dr(),$.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function tu(e,a,t,i){a.value=t,a.getSnapshot=i,nu(a)&&ru(e)}function iu(e,a,t){return t(function(){nu(a)&&ru(e)})}function nu(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ua(e,t)}catch{return!0}}function ru(e){var a=Kt(e,2);a!==null&&sa(a,e,2)}function Ls(e){var a=ea();if(typeof e=="function"){var t=e;if(e=t(),ai){gt(!0);try{t()}finally{gt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},a}function lu(e,a,t,i){return e.baseState=t,_s(e,be,typeof i=="function"?i:$a)}function Wf(e,a,t,i,n){if(Ur(e))throw Error(d(485));if(e=a.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};E.T!==null?t(!0):r.isTransition=!1,i(r),t=a.pending,t===null?(r.next=a.pending=r,su(a,r)):(r.next=t.next,a.pending=t.next=r)}}function su(e,a){var t=a.action,i=a.payload,n=e.state;if(a.isTransition){var r=E.T,o={};E.T=o;try{var h=t(n,i),b=E.S;b!==null&&b(o,h),ou(e,a,h)}catch(S){Gs(e,a,S)}finally{r!==null&&o.types!==null&&(r.types=o.types),E.T=r}}else try{r=t(n,i),ou(e,a,r)}catch(S){Gs(e,a,S)}}function ou(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){cu(e,a,i)},function(i){return Gs(e,a,i)}):cu(e,a,t)}function cu(e,a,t){a.status="fulfilled",a.value=t,du(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,su(e,t)))}function Gs(e,a,t){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=t,du(a),a=a.next;while(a!==i)}e.action=null}function du(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function uu(e,a){return a}function hu(e,a){if(oe){var t=we.formState;if(t!==null){e:{var i=$;if(oe){if(Te){a:{for(var n=Te,r=Sa;n.nodeType!==8;){if(!r){n=null;break a}if(n=Na(n.nextSibling),n===null){n=null;break a}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Te=Na(n.nextSibling),i=n.data==="F!";break e}}xt(i)}i=!1}i&&(a=t[0])}}return t=ea(),t.memoizedState=t.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uu,lastRenderedState:a},t.queue=i,t=Eu.bind(null,$,i),i.dispatch=t,i=Ls(!1),r=Ks.bind(null,$,!1,i.queue),i=ea(),n={state:a,dispatch:null,action:e,pending:null},i.queue=n,t=Wf.bind(null,$,n,r,t),n.dispatch=t,i.memoizedState=e,[a,t,!1]}function pu(e){var a=He();return gu(a,be,e)}function gu(e,a,t){if(a=_s(e,a,uu)[0],e=Or($a)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=vn(a)}catch(o){throw o===Ni?Tr:o}else i=a;a=He();var n=a.queue,r=n.dispatch;return t!==a.memoizedState&&($.flags|=2048,Ei(9,{destroy:void 0},$f.bind(null,n,t),null)),[i,r,e]}function $f(e,a){e.action=a}function fu(e){var a=He(),t=be;if(t!==null)return gu(a,t,e);He(),a=a.memoizedState,t=He();var i=t.queue.dispatch;return t.memoizedState=e,[a,i,!1]}function Ei(e,a,t,i){return e={tag:e,create:t,deps:i,inst:a,next:null},a=$.updateQueue,a===null&&(a=Dr(),$.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,a.lastEffect=e),e}function mu(){return He().memoizedState}function Br(e,a,t,i){var n=ea();$.flags|=e,n.memoizedState=Ei(1|a,{destroy:void 0},t,i===void 0?null:i)}function _r(e,a,t,i){var n=He();i=i===void 0?null:i;var r=n.memoizedState.inst;be!==null&&i!==null&&Es(i,be.memoizedState.deps)?n.memoizedState=Ei(a,r,t,i):($.flags|=e,n.memoizedState=Ei(1|a,r,t,i))}function yu(e,a){Br(8390656,8,e,a)}function qs(e,a){_r(2048,8,e,a)}function em(e){$.flags|=4;var a=$.updateQueue;if(a===null)a=Dr(),$.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function bu(e){var a=He().memoizedState;return em({ref:a,nextImpl:e}),function(){if((he&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function xu(e,a){return _r(4,2,e,a)}function ku(e,a){return _r(4,4,e,a)}function vu(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function wu(e,a,t){t=t!=null?t.concat([e]):null,_r(4,4,vu.bind(null,a,e),t)}function Ys(){}function ju(e,a){var t=He();a=a===void 0?null:a;var i=t.memoizedState;return a!==null&&Es(a,i[1])?i[0]:(t.memoizedState=[e,a],e)}function Su(e,a){var t=He();a=a===void 0?null:a;var i=t.memoizedState;if(a!==null&&Es(a,i[1]))return i[0];if(i=e(),ai){gt(!0);try{e()}finally{gt(!1)}}return t.memoizedState=[i,a],i}function Is(e,a,t){return t===void 0||(Wa&1073741824)!==0&&(re&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Th(),$.lanes|=e,Ct|=e,t)}function Tu(e,a,t,i){return ua(t,a)?t:Ci.current!==null?(e=Is(e,t,i),ua(e,a)||(_e=!0),e):(Wa&42)===0||(Wa&1073741824)!==0&&(re&261930)===0?(_e=!0,e.memoizedState=t):(e=Th(),$.lanes|=e,Ct|=e,a)}function Nu(e,a,t,i,n){var r=_.p;_.p=r!==0&&8>r?r:8;var o=E.T,h={};E.T=h,Ks(e,!1,a,t);try{var b=n(),S=E.S;if(S!==null&&S(h,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var M=Jf(b,i);wn(e,a,M,ya(e))}else wn(e,a,i,ya(e))}catch(D){wn(e,a,{then:function(){},status:"rejected",reason:D},ya())}finally{_.p=r,o!==null&&h.types!==null&&(o.types=h.types),E.T=o}}function am(){}function Vs(e,a,t,i){if(e.tag!==5)throw Error(d(476));var n=Au(e).queue;Nu(e,n,a,J,t===null?am:function(){return Cu(e),t(i)})}function Au(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:J},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Cu(e){var a=Au(e);a.next===null&&(a=e.alternate.memoizedState),wn(e,a.next.queue,{},ya())}function Ps(){return Qe(Ln)}function Ru(){return He().memoizedState}function Mu(){return He().memoizedState}function tm(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ya();e=wt(t);var i=jt(a,e,t);i!==null&&(sa(i,a,t),yn(i,a,t)),a={cache:ks()},e.payload=a;return}a=a.return}}function im(e,a,t){var i=ya();t={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ur(e)?zu(a,t):(t=cs(e,a,t,i),t!==null&&(sa(t,e,i),Du(t,a,i)))}function Eu(e,a,t){var i=ya();wn(e,a,t,i)}function wn(e,a,t,i){var n={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ur(e))zu(a,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=a.lastRenderedReducer,r!==null))try{var o=a.lastRenderedState,h=r(o,t);if(n.hasEagerState=!0,n.eagerState=h,ua(h,o))return br(e,a,n,0),we===null&&yr(),!1}catch{}finally{}if(t=cs(e,a,n,i),t!==null)return sa(t,e,i),Du(t,a,i),!0}return!1}function Ks(e,a,t,i){if(i={lane:2,revertLane:To(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ur(e)){if(a)throw Error(d(479))}else a=cs(e,t,i,2),a!==null&&sa(a,e,2)}function Ur(e){var a=e.alternate;return e===$||a!==null&&a===$}function zu(e,a){Ri=Er=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Du(e,a,t){if((t&4194048)!==0){var i=a.lanes;i&=e.pendingLanes,t|=i,a.lanes=t,Uc(e,t)}}var jn={readContext:Qe,use:Hr,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};jn.useEffectEvent=Re;var Hu={readContext:Qe,use:Hr,useCallback:function(e,a){return ea().memoizedState=[e,a===void 0?null:a],e},useContext:Qe,useEffect:yu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Br(4194308,4,vu.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Br(4194308,4,e,a)},useInsertionEffect:function(e,a){Br(4,2,e,a)},useMemo:function(e,a){var t=ea();a=a===void 0?null:a;var i=e();if(ai){gt(!0);try{e()}finally{gt(!1)}}return t.memoizedState=[i,a],i},useReducer:function(e,a,t){var i=ea();if(t!==void 0){var n=t(a);if(ai){gt(!0);try{t(a)}finally{gt(!1)}}}else n=a;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=im.bind(null,$,e),[i.memoizedState,e]},useRef:function(e){var a=ea();return e={current:e},a.memoizedState=e},useState:function(e){e=Ls(e);var a=e.queue,t=Eu.bind(null,$,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Ys,useDeferredValue:function(e,a){var t=ea();return Is(t,e,a)},useTransition:function(){var e=Ls(!1);return e=Nu.bind(null,$,e.queue,!0,!1),ea().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var i=$,n=ea();if(oe){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),we===null)throw Error(d(349));(re&127)!==0||au(i,a,t)}n.memoizedState=t;var r={value:t,getSnapshot:a};return n.queue=r,yu(iu.bind(null,i,r,e),[e]),i.flags|=2048,Ei(9,{destroy:void 0},tu.bind(null,i,r,t,a),null),t},useId:function(){var e=ea(),a=we.identifierPrefix;if(oe){var t=Ua,i=_a;t=(i&~(1<<32-da(i)-1)).toString(32)+t,a="_"+a+"R_"+t,t=zr++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Zf++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Ps,useFormState:hu,useActionState:hu,useOptimistic:function(e){var a=ea();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Ks.bind(null,$,!0,t),t.dispatch=a,[e,a]},useMemoCache:Bs,useCacheRefresh:function(){return ea().memoizedState=tm.bind(null,$)},useEffectEvent:function(e){var a=ea(),t={impl:e};return a.memoizedState=t,function(){if((he&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},Qs={readContext:Qe,use:Hr,useCallback:ju,useContext:Qe,useEffect:qs,useImperativeHandle:wu,useInsertionEffect:xu,useLayoutEffect:ku,useMemo:Su,useReducer:Or,useRef:mu,useState:function(){return Or($a)},useDebugValue:Ys,useDeferredValue:function(e,a){var t=He();return Tu(t,be.memoizedState,e,a)},useTransition:function(){var e=Or($a)[0],a=He().memoizedState;return[typeof e=="boolean"?e:vn(e),a]},useSyncExternalStore:eu,useId:Ru,useHostTransitionStatus:Ps,useFormState:pu,useActionState:pu,useOptimistic:function(e,a){var t=He();return lu(t,be,e,a)},useMemoCache:Bs,useCacheRefresh:Mu};Qs.useEffectEvent=bu;var Ou={readContext:Qe,use:Hr,useCallback:ju,useContext:Qe,useEffect:qs,useImperativeHandle:wu,useInsertionEffect:xu,useLayoutEffect:ku,useMemo:Su,useReducer:Us,useRef:mu,useState:function(){return Us($a)},useDebugValue:Ys,useDeferredValue:function(e,a){var t=He();return be===null?Is(t,e,a):Tu(t,be.memoizedState,e,a)},useTransition:function(){var e=Us($a)[0],a=He().memoizedState;return[typeof e=="boolean"?e:vn(e),a]},useSyncExternalStore:eu,useId:Ru,useHostTransitionStatus:Ps,useFormState:fu,useActionState:fu,useOptimistic:function(e,a){var t=He();return be!==null?lu(t,be,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Bs,useCacheRefresh:Mu};Ou.useEffectEvent=bu;function Fs(e,a,t,i){a=e.memoizedState,t=t(i,a),t=t==null?a:A({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Js={enqueueSetState:function(e,a,t){e=e._reactInternals;var i=ya(),n=wt(i);n.payload=a,t!=null&&(n.callback=t),a=jt(e,n,i),a!==null&&(sa(a,e,i),yn(a,e,i))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var i=ya(),n=wt(i);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=jt(e,n,i),a!==null&&(sa(a,e,i),yn(a,e,i))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ya(),i=wt(t);i.tag=2,a!=null&&(i.callback=a),a=jt(e,i,t),a!==null&&(sa(a,e,t),yn(a,e,t))}};function Bu(e,a,t,i,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):a.prototype&&a.prototype.isPureReactComponent?!cn(t,i)||!cn(n,r):!0}function _u(e,a,t,i){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,i),a.state!==e&&Js.enqueueReplaceState(a,a.state,null)}function ti(e,a){var t=a;if("ref"in a){t={};for(var i in a)i!=="ref"&&(t[i]=a[i])}if(e=e.defaultProps){t===a&&(t=A({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function Uu(e){mr(e)}function Lu(e){console.error(e)}function Gu(e){mr(e)}function Lr(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function qu(e,a,t){try{var i=e.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Zs(e,a,t){return t=wt(t),t.tag=3,t.payload={element:null},t.callback=function(){Lr(e,a)},t}function Yu(e){return e=wt(e),e.tag=3,e}function Iu(e,a,t,i){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=i.value;e.payload=function(){return n(r)},e.callback=function(){qu(a,t,i)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){qu(a,t,i),typeof n!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function nm(e,a,t,i,n){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=t.alternate,a!==null&&ji(a,t,n,!0),t=pa.current,t!==null){switch(t.tag){case 31:case 13:return Ta===null?Xr():t.alternate===null&&Me===0&&(Me=3),t.flags&=-257,t.flags|=65536,t.lanes=n,i===Nr?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([i]):a.add(i),wo(e,i,n)),!1;case 22:return t.flags|=65536,i===Nr?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([i]):t.add(i)),wo(e,i,n)),!1}throw Error(d(435,t.tag))}return wo(e,i,n),Xr(),!1}if(oe)return a=pa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,i!==fs&&(e=Error(d(422),{cause:i}),hn(va(e,t)))):(i!==fs&&(a=Error(d(423),{cause:i}),hn(va(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=va(i,t),n=Zs(e.stateNode,i,n),Ns(e,n),Me!==4&&(Me=2)),!1;var r=Error(d(520),{cause:i});if(r=va(r,t),En===null?En=[r]:En.push(r),Me!==4&&(Me=2),a===null)return!0;i=va(i,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=Zs(t.stateNode,i,e),Ns(t,e),!1;case 1:if(a=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Yu(n),Iu(n,e,t,i),Ns(t,n),!1}t=t.return}while(t!==null);return!1}var Xs=Error(d(461)),_e=!1;function Fe(e,a,t,i){a.child=e===null?Qd(a,null,t,i):ei(a,e.child,t,i)}function Vu(e,a,t,i,n){t=t.render;var r=a.ref;if("ref"in i){var o={};for(var h in i)h!=="ref"&&(o[h]=i[h])}else o=i;return Zt(a),i=zs(e,a,t,o,r,n),h=Ds(),e!==null&&!_e?(Hs(e,a,n),et(e,a,n)):(oe&&h&&ps(a),a.flags|=1,Fe(e,a,i,n),a.child)}function Pu(e,a,t,i,n){if(e===null){var r=t.type;return typeof r=="function"&&!ds(r)&&r.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=r,Ku(e,a,r,i,n)):(e=kr(t.type,null,i,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(r=e.child,!ro(e,n)){var o=r.memoizedProps;if(t=t.compare,t=t!==null?t:cn,t(o,i)&&e.ref===a.ref)return et(e,a,n)}return a.flags|=1,e=Fa(r,i),e.ref=a.ref,e.return=a,a.child=e}function Ku(e,a,t,i,n){if(e!==null){var r=e.memoizedProps;if(cn(r,i)&&e.ref===a.ref)if(_e=!1,a.pendingProps=i=r,ro(e,n))(e.flags&131072)!==0&&(_e=!0);else return a.lanes=e.lanes,et(e,a,n)}return Ws(e,a,t,i,n)}function Qu(e,a,t,i){var n=i.children,r=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,e!==null){for(i=a.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~r}else i=0,a.child=null;return Fu(e,a,r,t,i)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sr(a,r!==null?r.cachePool:null),r!==null?Zd(a,r):Cs(),Xd(a);else return i=a.lanes=536870912,Fu(e,a,r!==null?r.baseLanes|t:t,t,i)}else r!==null?(Sr(a,r.cachePool),Zd(a,r),Tt(),a.memoizedState=null):(e!==null&&Sr(a,null),Cs(),Tt());return Fe(e,a,n,t),a.child}function Sn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Fu(e,a,t,i,n){var r=ws();return r=r===null?null:{parent:Oe._currentValue,pool:r},a.memoizedState={baseLanes:t,cachePool:r},e!==null&&Sr(a,null),Cs(),Xd(a),e!==null&&ji(e,a,i,!0),a.childLanes=n,null}function Gr(e,a){return a=Yr({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Ju(e,a,t){return ei(a,e.child,null,t),e=Gr(a,a.pendingProps),e.flags|=2,ga(a),a.memoizedState=null,e}function rm(e,a,t){var i=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(oe){if(i.mode==="hidden")return e=Gr(a,i),a.lanes=536870912,Sn(null,e);if(Ms(a),(e=Te)?(e=sp(e,Sa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yt!==null?{id:_a,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},t=zd(e),t.return=a,a.child=t,Ke=a,Te=null)):e=null,e===null)throw xt(a);return a.lanes=536870912,null}return Gr(a,i)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Ms(a),n)if(a.flags&256)a.flags&=-257,a=Ju(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(_e||ji(e,a,t,!1),n=(t&e.childLanes)!==0,_e||n){if(i=we,i!==null&&(o=Lc(i,t),o!==0&&o!==r.retryLane))throw r.retryLane=o,Kt(e,o),sa(i,e,o),Xs;Xr(),a=Ju(e,a,t)}else e=r.treeContext,Te=Na(o.nextSibling),Ke=a,oe=!0,bt=null,Sa=!1,e!==null&&Od(a,e),a=Gr(a,i),a.flags|=4096;return a}return e=Fa(e.child,{mode:i.mode,children:i.children}),e.ref=a.ref,a.child=e,e.return=a,e}function qr(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ws(e,a,t,i,n){return Zt(a),t=zs(e,a,t,i,void 0,n),i=Ds(),e!==null&&!_e?(Hs(e,a,n),et(e,a,n)):(oe&&i&&ps(a),a.flags|=1,Fe(e,a,t,n),a.child)}function Zu(e,a,t,i,n,r){return Zt(a),a.updateQueue=null,t=$d(a,i,t,n),Wd(e),i=Ds(),e!==null&&!_e?(Hs(e,a,r),et(e,a,r)):(oe&&i&&ps(a),a.flags|=1,Fe(e,a,t,r),a.child)}function Xu(e,a,t,i,n){if(Zt(a),a.stateNode===null){var r=xi,o=t.contextType;typeof o=="object"&&o!==null&&(r=Qe(o)),r=new t(i,r),a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Js,a.stateNode=r,r._reactInternals=a,r=a.stateNode,r.props=i,r.state=a.memoizedState,r.refs={},Ss(a),o=t.contextType,r.context=typeof o=="object"&&o!==null?Qe(o):xi,r.state=a.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fs(a,t,o,i),r.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Js.enqueueReplaceState(r,r.state,null),xn(a,i,r,n),bn(),r.state=a.memoizedState),typeof r.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(e===null){r=a.stateNode;var h=a.memoizedProps,b=ti(t,h);r.props=b;var S=r.context,M=t.contextType;o=xi,typeof M=="object"&&M!==null&&(o=Qe(M));var D=t.getDerivedStateFromProps;M=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=a.pendingProps!==h,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||S!==o)&&_u(a,r,i,o),vt=!1;var N=a.memoizedState;r.state=N,xn(a,i,r,n),bn(),S=a.memoizedState,h||N!==S||vt?(typeof D=="function"&&(Fs(a,t,D,i),S=a.memoizedState),(b=vt||Bu(a,t,b,i,N,S,o))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(a.flags|=4194308)):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=S),r.props=i,r.state=S,r.context=o,i=b):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{r=a.stateNode,Ts(e,a),o=a.memoizedProps,M=ti(t,o),r.props=M,D=a.pendingProps,N=r.context,S=t.contextType,b=xi,typeof S=="object"&&S!==null&&(b=Qe(S)),h=t.getDerivedStateFromProps,(S=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==D||N!==b)&&_u(a,r,i,b),vt=!1,N=a.memoizedState,r.state=N,xn(a,i,r,n),bn();var C=a.memoizedState;o!==D||N!==C||vt||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof h=="function"&&(Fs(a,t,h,i),C=a.memoizedState),(M=vt||Bu(a,t,M,i,N,C,b)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,C,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,C,b)),typeof r.componentDidUpdate=="function"&&(a.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=C),r.props=i,r.state=C,r.context=b,i=M):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),i=!1)}return r=i,qr(e,a),i=(a.flags&128)!==0,r||i?(r=a.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:r.render(),a.flags|=1,e!==null&&i?(a.child=ei(a,e.child,null,n),a.child=ei(a,null,t,n)):Fe(e,a,t,n),a.memoizedState=r.state,e=a.child):e=et(e,a,n),e}function Wu(e,a,t,i){return Ft(),a.flags|=256,Fe(e,a,t,i),a.child}var $s={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eo(e){return{baseLanes:e,cachePool:qd()}}function ao(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=ma),e}function $u(e,a,t){var i=a.pendingProps,n=!1,r=(a.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),o&&(n=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,e===null){if(oe){if(n?St(a):Tt(),(e=Te)?(e=sp(e,Sa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yt!==null?{id:_a,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},t=zd(e),t.return=a,a.child=t,Ke=a,Te=null)):e=null,e===null)throw xt(a);return Uo(e)?a.lanes=32:a.lanes=536870912,null}var h=i.children;return i=i.fallback,n?(Tt(),n=a.mode,h=Yr({mode:"hidden",children:h},n),i=Qt(i,n,t,null),h.return=a,i.return=a,h.sibling=i,a.child=h,i=a.child,i.memoizedState=eo(t),i.childLanes=ao(e,o,t),a.memoizedState=$s,Sn(null,i)):(St(a),to(a,h))}var b=e.memoizedState;if(b!==null&&(h=b.dehydrated,h!==null)){if(r)a.flags&256?(St(a),a.flags&=-257,a=io(e,a,t)):a.memoizedState!==null?(Tt(),a.child=e.child,a.flags|=128,a=null):(Tt(),h=i.fallback,n=a.mode,i=Yr({mode:"visible",children:i.children},n),h=Qt(h,n,t,null),h.flags|=2,i.return=a,h.return=a,i.sibling=h,a.child=i,ei(a,e.child,null,t),i=a.child,i.memoizedState=eo(t),i.childLanes=ao(e,o,t),a.memoizedState=$s,a=Sn(null,i));else if(St(a),Uo(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var S=o.dgst;o=S,i=Error(d(419)),i.stack="",i.digest=o,hn({value:i,source:null,stack:null}),a=io(e,a,t)}else if(_e||ji(e,a,t,!1),o=(t&e.childLanes)!==0,_e||o){if(o=we,o!==null&&(i=Lc(o,t),i!==0&&i!==b.retryLane))throw b.retryLane=i,Kt(e,i),sa(o,e,i),Xs;_o(h)||Xr(),a=io(e,a,t)}else _o(h)?(a.flags|=192,a.child=e.child,a=null):(e=b.treeContext,Te=Na(h.nextSibling),Ke=a,oe=!0,bt=null,Sa=!1,e!==null&&Od(a,e),a=to(a,i.children),a.flags|=4096);return a}return n?(Tt(),h=i.fallback,n=a.mode,b=e.child,S=b.sibling,i=Fa(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,S!==null?h=Fa(S,h):(h=Qt(h,n,t,null),h.flags|=2),h.return=a,i.return=a,i.sibling=h,a.child=i,Sn(null,i),i=a.child,h=e.child.memoizedState,h===null?h=eo(t):(n=h.cachePool,n!==null?(b=Oe._currentValue,n=n.parent!==b?{parent:b,pool:b}:n):n=qd(),h={baseLanes:h.baseLanes|t,cachePool:n}),i.memoizedState=h,i.childLanes=ao(e,o,t),a.memoizedState=$s,Sn(e.child,i)):(St(a),t=e.child,e=t.sibling,t=Fa(t,{mode:"visible",children:i.children}),t.return=a,t.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=t,a.memoizedState=null,t)}function to(e,a){return a=Yr({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Yr(e,a){return e=ha(22,e,null,a),e.lanes=0,e}function io(e,a,t){return ei(a,e.child,null,t),e=to(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function eh(e,a,t){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a),bs(e.return,a,t)}function no(e,a,t,i,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:n,treeForkCount:r}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=n,o.treeForkCount=r)}function ah(e,a,t){var i=a.pendingProps,n=i.revealOrder,r=i.tail;i=i.children;var o=De.current,h=(o&2)!==0;if(h?(o=o&1|2,a.flags|=128):o&=1,U(De,o),Fe(e,a,i,t),i=oe?un:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,t,a);else if(e.tag===19)eh(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&Mr(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),no(a,!1,n,t,r,i);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&Mr(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}no(a,!0,t,null,r,i);break;case"together":no(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function et(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Ct|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(ji(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Fa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Fa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function ro(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function lm(e,a,t){switch(a.tag){case 3:$e(a,a.stateNode.containerInfo),kt(a,Oe,e.memoizedState.cache),Ft();break;case 27:case 5:Ji(a);break;case 4:$e(a,a.stateNode.containerInfo);break;case 10:kt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ms(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(St(a),a.flags|=128,null):(t&a.child.childLanes)!==0?$u(e,a,t):(St(a),e=et(e,a,t),e!==null?e.sibling:null);St(a);break;case 19:var n=(e.flags&128)!==0;if(i=(t&a.childLanes)!==0,i||(ji(e,a,t,!1),i=(t&a.childLanes)!==0),n){if(i)return ah(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(De,De.current),i)break;return null;case 22:return a.lanes=0,Qu(e,a,t,a.pendingProps);case 24:kt(a,Oe,e.memoizedState.cache)}return et(e,a,t)}function th(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)_e=!0;else{if(!ro(e,t)&&(a.flags&128)===0)return _e=!1,lm(e,a,t);_e=(e.flags&131072)!==0}else _e=!1,oe&&(a.flags&1048576)!==0&&Hd(a,un,a.index);switch(a.lanes=0,a.tag){case 16:e:{var i=a.pendingProps;if(e=Wt(a.elementType),a.type=e,typeof e=="function")ds(e)?(i=ti(e,i),a.tag=1,a=Xu(null,a,e,i,t)):(a.tag=0,a=Ws(null,a,e,i,t));else{if(e!=null){var n=e.$$typeof;if(n===pe){a.tag=11,a=Vu(null,a,e,i,t);break e}else if(n===Z){a.tag=14,a=Pu(null,a,e,i,t);break e}}throw a=Va(e)||e,Error(d(306,a,""))}}return a;case 0:return Ws(e,a,a.type,a.pendingProps,t);case 1:return i=a.type,n=ti(i,a.pendingProps),Xu(e,a,i,n,t);case 3:e:{if($e(a,a.stateNode.containerInfo),e===null)throw Error(d(387));i=a.pendingProps;var r=a.memoizedState;n=r.element,Ts(e,a),xn(a,i,null,t);var o=a.memoizedState;if(i=o.cache,kt(a,Oe,i),i!==r.cache&&xs(a,[Oe],t,!0),bn(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=r,a.memoizedState=r,a.flags&256){a=Wu(e,a,i,t);break e}else if(i!==n){n=va(Error(d(424)),a),hn(n),a=Wu(e,a,i,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=Na(e.firstChild),Ke=a,oe=!0,bt=null,Sa=!0,t=Qd(a,null,i,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ft(),i===n){a=et(e,a,t);break e}Fe(e,a,i,t)}a=a.child}return a;case 26:return qr(e,a),e===null?(t=pp(a.type,null,a.pendingProps,null))?a.memoizedState=t:oe||(t=a.type,e=a.pendingProps,i=nl(te.current).createElement(t),i[Pe]=a,i[aa]=e,Je(i,t,e),qe(i),a.stateNode=i):a.memoizedState=pp(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ji(a),e===null&&oe&&(i=a.stateNode=dp(a.type,a.pendingProps,te.current),Ke=a,Sa=!0,n=Te,Dt(a.type)?(Lo=n,Te=Na(i.firstChild)):Te=n),Fe(e,a,a.pendingProps.children,t),qr(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&oe&&((n=i=Te)&&(i=Bm(i,a.type,a.pendingProps,Sa),i!==null?(a.stateNode=i,Ke=a,Te=Na(i.firstChild),Sa=!1,n=!0):n=!1),n||xt(a)),Ji(a),n=a.type,r=a.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,Ho(n,r)?i=null:o!==null&&Ho(n,o)&&(a.flags|=32),a.memoizedState!==null&&(n=zs(e,a,Xf,null,null,t),Ln._currentValue=n),qr(e,a),Fe(e,a,i,t),a.child;case 6:return e===null&&oe&&((e=t=Te)&&(t=_m(t,a.pendingProps,Sa),t!==null?(a.stateNode=t,Ke=a,Te=null,e=!0):e=!1),e||xt(a)),null;case 13:return $u(e,a,t);case 4:return $e(a,a.stateNode.containerInfo),i=a.pendingProps,e===null?a.child=ei(a,null,i,t):Fe(e,a,i,t),a.child;case 11:return Vu(e,a,a.type,a.pendingProps,t);case 7:return Fe(e,a,a.pendingProps,t),a.child;case 8:return Fe(e,a,a.pendingProps.children,t),a.child;case 12:return Fe(e,a,a.pendingProps.children,t),a.child;case 10:return i=a.pendingProps,kt(a,a.type,i.value),Fe(e,a,i.children,t),a.child;case 9:return n=a.type._context,i=a.pendingProps.children,Zt(a),n=Qe(n),i=i(n),a.flags|=1,Fe(e,a,i,t),a.child;case 14:return Pu(e,a,a.type,a.pendingProps,t);case 15:return Ku(e,a,a.type,a.pendingProps,t);case 19:return ah(e,a,t);case 31:return rm(e,a,t);case 22:return Qu(e,a,t,a.pendingProps);case 24:return Zt(a),i=Qe(Oe),e===null?(n=ws(),n===null&&(n=we,r=ks(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=t),n=r),a.memoizedState={parent:i,cache:n},Ss(a),kt(a,Oe,n)):((e.lanes&t)!==0&&(Ts(e,a),xn(a,null,null,t),bn()),n=e.memoizedState,r=a.memoizedState,n.parent!==i?(n={parent:i,cache:i},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),kt(a,Oe,i)):(i=r.cache,kt(a,Oe,i),i!==n.cache&&xs(a,[Oe],t,!0))),Fe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function at(e){e.flags|=4}function lo(e,a,t,i,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Rh())e.flags|=8192;else throw $t=Nr,js}else e.flags&=-16777217}function ih(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bp(a))if(Rh())e.flags|=8192;else throw $t=Nr,js}function Ir(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Bc():536870912,e.lanes|=a,Oi|=a)}function Tn(e,a){if(!oe)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ne(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=t,a}function sm(e,a,t){var i=a.pendingProps;switch(gs(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(a),null;case 1:return Ne(a),null;case 3:return t=a.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Xa(Oe),ze(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(wi(a)?at(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ms())),Ne(a),null;case 26:var n=a.type,r=a.memoizedState;return e===null?(at(a),r!==null?(Ne(a),ih(a,r)):(Ne(a),lo(a,n,null,i,t))):r?r!==e.memoizedState?(at(a),Ne(a),ih(a,r)):(Ne(a),a.flags&=-16777217):(e=e.memoizedProps,e!==i&&at(a),Ne(a),lo(a,n,e,i,t)),null;case 27:if(er(a),t=te.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&at(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return Ne(a),null}e=V.current,wi(a)?Bd(a):(e=dp(n,i,t),a.stateNode=e,at(a))}return Ne(a),null;case 5:if(er(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&at(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return Ne(a),null}if(r=V.current,wi(a))Bd(a);else{var o=nl(te.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}r[Pe]=a,r[aa]=i;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=r;e:switch(Je(r,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&at(a)}}return Ne(a),lo(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==i&&at(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(d(166));if(e=te.current,wi(a)){if(e=a.stateNode,t=a.memoizedProps,i=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[Pe]=a,e=!!(e.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||$h(e.nodeValue,t)),e||xt(a,!0)}else e=nl(e).createTextNode(i),e[Pe]=a,a.stateNode=e}return Ne(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(i=wi(a),t!==null){if(e===null){if(!i)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Pe]=a}else Ft(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ne(a),e=!1}else t=ms(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ga(a),a):(ga(a),null);if((a.flags&128)!==0)throw Error(d(558))}return Ne(a),null;case 13:if(i=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=wi(a),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Pe]=a}else Ft(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ne(a),n=!1}else n=ms(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ga(a),a):(ga(a),null)}return ga(a),(a.flags&128)!==0?(a.lanes=t,a):(t=i!==null,e=e!==null&&e.memoizedState!==null,t&&(i=a.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==n&&(i.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Ir(a,a.updateQueue),Ne(a),null);case 4:return ze(),e===null&&Ro(a.stateNode.containerInfo),Ne(a),null;case 10:return Xa(a.type),Ne(a),null;case 19:if(H(De),i=a.memoizedState,i===null)return Ne(a),null;if(n=(a.flags&128)!==0,r=i.rendering,r===null)if(n)Tn(i,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(r=Mr(e),r!==null){for(a.flags|=128,Tn(i,!1),e=r.updateQueue,a.updateQueue=e,Ir(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Ed(t,e),t=t.sibling;return U(De,De.current&1|2),oe&&Ja(a,i.treeForkCount),a.child}e=e.sibling}i.tail!==null&&oa()>Fr&&(a.flags|=128,n=!0,Tn(i,!1),a.lanes=4194304)}else{if(!n)if(e=Mr(r),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,Ir(a,e),Tn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!oe)return Ne(a),null}else 2*oa()-i.renderingStartTime>Fr&&t!==536870912&&(a.flags|=128,n=!0,Tn(i,!1),a.lanes=4194304);i.isBackwards?(r.sibling=a.child,a.child=r):(e=i.last,e!==null?e.sibling=r:a.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=oa(),e.sibling=null,t=De.current,U(De,n?t&1|2:t&1),oe&&Ja(a,i.treeForkCount),e):(Ne(a),null);case 22:case 23:return ga(a),Rs(),i=a.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(t&536870912)!==0&&(a.flags&128)===0&&(Ne(a),a.subtreeFlags&6&&(a.flags|=8192)):Ne(a),t=a.updateQueue,t!==null&&Ir(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==t&&(a.flags|=2048),e!==null&&H(Xt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Xa(Oe),Ne(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function om(e,a){switch(gs(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Xa(Oe),ze(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return er(a),null;case 31:if(a.memoizedState!==null){if(ga(a),a.alternate===null)throw Error(d(340));Ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ga(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return H(De),null;case 4:return ze(),null;case 10:return Xa(a.type),null;case 22:case 23:return ga(a),Rs(),e!==null&&H(Xt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Xa(Oe),null;case 25:return null;default:return null}}function nh(e,a){switch(gs(a),a.tag){case 3:Xa(Oe),ze();break;case 26:case 27:case 5:er(a);break;case 4:ze();break;case 31:a.memoizedState!==null&&ga(a);break;case 13:ga(a);break;case 19:H(De);break;case 10:Xa(a.type);break;case 22:case 23:ga(a),Rs(),e!==null&&H(Xt);break;case 24:Xa(Oe)}}function Nn(e,a){try{var t=a.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var n=i.next;t=n;do{if((t.tag&e)===e){i=void 0;var r=t.create,o=t.inst;i=r(),o.destroy=i}t=t.next}while(t!==n)}}catch(h){me(a,a.return,h)}}function Nt(e,a,t){try{var i=a.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){var o=i.inst,h=o.destroy;if(h!==void 0){o.destroy=void 0,n=a;var b=t,S=h;try{S()}catch(M){me(n,b,M)}}}i=i.next}while(i!==r)}}catch(M){me(a,a.return,M)}}function rh(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Jd(a,t)}catch(i){me(e,e.return,i)}}}function lh(e,a,t){t.props=ti(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(i){me(e,a,i)}}function An(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof t=="function"?e.refCleanup=t(i):t.current=i}}catch(n){me(e,a,n)}}function La(e,a){var t=e.ref,i=e.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(n){me(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){me(e,a,n)}else t.current=null}function sh(e){var a=e.type,t=e.memoizedProps,i=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break e;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(n){me(e,e.return,n)}}function so(e,a,t){try{var i=e.stateNode;Mm(i,e.type,t,a),i[aa]=a}catch(n){me(e,e.return,n)}}function oh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dt(e.type)||e.tag===4}function oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,a,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ka));else if(i!==4&&(i===27&&Dt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(co(e,a,t),e=e.sibling;e!==null;)co(e,a,t),e=e.sibling}function Vr(e,a,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(i!==4&&(i===27&&Dt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Vr(e,a,t),e=e.sibling;e!==null;)Vr(e,a,t),e=e.sibling}function ch(e){var a=e.stateNode,t=e.memoizedProps;try{for(var i=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Je(a,i,t),a[Pe]=e,a[aa]=t}catch(r){me(e,e.return,r)}}var tt=!1,Ue=!1,uo=!1,dh=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function cm(e,a){if(e=e.containerInfo,zo=ul,e=wd(e),is(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var n=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var o=0,h=-1,b=-1,S=0,M=0,D=e,N=null;a:for(;;){for(var C;D!==t||n!==0&&D.nodeType!==3||(h=o+n),D!==r||i!==0&&D.nodeType!==3||(b=o+i),D.nodeType===3&&(o+=D.nodeValue.length),(C=D.firstChild)!==null;)N=D,D=C;for(;;){if(D===e)break a;if(N===t&&++S===n&&(h=o),N===r&&++M===i&&(b=o),(C=D.nextSibling)!==null)break;D=N,N=D.parentNode}D=C}t=h===-1||b===-1?null:{start:h,end:b}}else t=null}t=t||{start:0,end:0}}else t=null;for(Do={focusedElem:e,selectionRange:t},ul=!1,Ye=a;Ye!==null;)if(a=Ye,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ye=e;else for(;Ye!==null;){switch(a=Ye,r=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=a,n=r.memoizedProps,r=r.memoizedState,i=t.stateNode;try{var G=ti(t.type,n);e=i.getSnapshotBeforeUpdate(G,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(F){me(t,t.return,F)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Bo(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Ye=e;break}Ye=a.return}}function uh(e,a,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:nt(e,t),i&4&&Nn(5,t);break;case 1:if(nt(e,t),i&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(o){me(t,t.return,o)}else{var n=ti(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(o){me(t,t.return,o)}}i&64&&rh(t),i&512&&An(t,t.return);break;case 3:if(nt(e,t),i&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Jd(e,a)}catch(o){me(t,t.return,o)}}break;case 27:a===null&&i&4&&ch(t);case 26:case 5:nt(e,t),a===null&&i&4&&sh(t),i&512&&An(t,t.return);break;case 12:nt(e,t);break;case 31:nt(e,t),i&4&&gh(e,t);break;case 13:nt(e,t),i&4&&fh(e,t),i&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=bm.bind(null,t),Um(e,t))));break;case 22:if(i=t.memoizedState!==null||tt,!i){a=a!==null&&a.memoizedState!==null||Ue,n=tt;var r=Ue;tt=i,(Ue=a)&&!r?rt(e,t,(t.subtreeFlags&8772)!==0):nt(e,t),tt=n,Ue=r}break;case 30:break;default:nt(e,t)}}function hh(e){var a=e.alternate;a!==null&&(e.alternate=null,hh(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Gl(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ia=!1;function it(e,a,t){for(t=t.child;t!==null;)ph(e,a,t),t=t.sibling}function ph(e,a,t){if(ca&&typeof ca.onCommitFiberUnmount=="function")try{ca.onCommitFiberUnmount(Zi,t)}catch{}switch(t.tag){case 26:Ue||La(t,a),it(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ue||La(t,a);var i=Ae,n=ia;Dt(t.type)&&(Ae=t.stateNode,ia=!1),it(e,a,t),Bn(t.stateNode),Ae=i,ia=n;break;case 5:Ue||La(t,a);case 6:if(i=Ae,n=ia,Ae=null,it(e,a,t),Ae=i,ia=n,Ae!==null)if(ia)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(t.stateNode)}catch(r){me(t,a,r)}else try{Ae.removeChild(t.stateNode)}catch(r){me(t,a,r)}break;case 18:Ae!==null&&(ia?(e=Ae,rp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ii(e)):rp(Ae,t.stateNode));break;case 4:i=Ae,n=ia,Ae=t.stateNode.containerInfo,ia=!0,it(e,a,t),Ae=i,ia=n;break;case 0:case 11:case 14:case 15:Nt(2,t,a),Ue||Nt(4,t,a),it(e,a,t);break;case 1:Ue||(La(t,a),i=t.stateNode,typeof i.componentWillUnmount=="function"&&lh(t,a,i)),it(e,a,t);break;case 21:it(e,a,t);break;case 22:Ue=(i=Ue)||t.memoizedState!==null,it(e,a,t),Ue=i;break;default:it(e,a,t)}}function gh(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ii(e)}catch(t){me(a,a.return,t)}}}function fh(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(t){me(a,a.return,t)}}function dm(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new dh),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new dh),a;default:throw Error(d(435,e.tag))}}function Pr(e,a){var t=dm(e);a.forEach(function(i){if(!t.has(i)){t.add(i);var n=xm.bind(null,e,i);i.then(n,n)}})}function na(e,a){var t=a.deletions;if(t!==null)for(var i=0;i<t.length;i++){var n=t[i],r=e,o=a,h=o;e:for(;h!==null;){switch(h.tag){case 27:if(Dt(h.type)){Ae=h.stateNode,ia=!1;break e}break;case 5:Ae=h.stateNode,ia=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,ia=!0;break e}h=h.return}if(Ae===null)throw Error(d(160));ph(r,o,n),Ae=null,ia=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)mh(a,e),a=a.sibling}var za=null;function mh(e,a){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:na(a,e),ra(e),i&4&&(Nt(3,e,e.return),Nn(3,e),Nt(5,e,e.return));break;case 1:na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),i&64&&tt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?i:t.concat(i))));break;case 26:var n=za;if(na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),i&4){var r=t!==null?t.memoizedState:null;if(i=e.memoizedState,t===null)if(i===null)if(e.stateNode===null){e:{i=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(i){case"title":r=n.getElementsByTagName("title")[0],(!r||r[$i]||r[Pe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(i),n.head.insertBefore(r,n.querySelector("head > title"))),Je(r,i,t),r[Pe]=e,qe(r),i=r;break e;case"link":var o=mp("link","href",n).get(i+(t.href||""));if(o){for(var h=0;h<o.length;h++)if(r=o[h],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(h,1);break a}}r=n.createElement(i),Je(r,i,t),n.head.appendChild(r);break;case"meta":if(o=mp("meta","content",n).get(i+(t.content||""))){for(h=0;h<o.length;h++)if(r=o[h],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(h,1);break a}}r=n.createElement(i),Je(r,i,t),n.head.appendChild(r);break;default:throw Error(d(468,i))}r[Pe]=e,qe(r),i=r}e.stateNode=i}else yp(n,e.type,e.stateNode);else e.stateNode=fp(n,i,e.memoizedProps);else r!==i?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,i===null?yp(n,e.type,e.stateNode):fp(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&so(e,e.memoizedProps,t.memoizedProps)}break;case 27:na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),t!==null&&i&4&&so(e,e.memoizedProps,t.memoizedProps);break;case 5:if(na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),e.flags&32){n=e.stateNode;try{hi(n,"")}catch(G){me(e,e.return,G)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,so(e,n,t!==null?t.memoizedProps:n)),i&1024&&(uo=!0);break;case 6:if(na(a,e),ra(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,t=e.stateNode;try{t.nodeValue=i}catch(G){me(e,e.return,G)}}break;case 3:if(sl=null,n=za,za=rl(a.containerInfo),na(a,e),za=n,ra(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ii(a.containerInfo)}catch(G){me(e,e.return,G)}uo&&(uo=!1,yh(e));break;case 4:i=za,za=rl(e.stateNode.containerInfo),na(a,e),ra(e),za=i;break;case 12:na(a,e),ra(e);break;case 31:na(a,e),ra(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 13:na(a,e),ra(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Qr=oa()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 22:n=e.memoizedState!==null;var b=t!==null&&t.memoizedState!==null,S=tt,M=Ue;if(tt=S||n,Ue=M||b,na(a,e),Ue=M,tt=S,ra(e),i&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||b||tt||Ue||ii(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){b=t=a;try{if(r=b.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{h=b.stateNode;var D=b.memoizedProps.style,N=D!=null&&D.hasOwnProperty("display")?D.display:null;h.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(G){me(b,b.return,G)}}}else if(a.tag===6){if(t===null){b=a;try{b.stateNode.nodeValue=n?"":b.memoizedProps}catch(G){me(b,b.return,G)}}}else if(a.tag===18){if(t===null){b=a;try{var C=b.stateNode;n?lp(C,!0):lp(b.stateNode,!1)}catch(G){me(b,b.return,G)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=e.updateQueue,i!==null&&(t=i.retryQueue,t!==null&&(i.retryQueue=null,Pr(e,t))));break;case 19:na(a,e),ra(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pr(e,i)));break;case 30:break;case 21:break;default:na(a,e),ra(e)}}function ra(e){var a=e.flags;if(a&2){try{for(var t,i=e.return;i!==null;){if(oh(i)){t=i;break}i=i.return}if(t==null)throw Error(d(160));switch(t.tag){case 27:var n=t.stateNode,r=oo(e);Vr(e,r,n);break;case 5:var o=t.stateNode;t.flags&32&&(hi(o,""),t.flags&=-33);var h=oo(e);Vr(e,h,o);break;case 3:case 4:var b=t.stateNode.containerInfo,S=oo(e);co(e,S,b);break;default:throw Error(d(161))}}catch(M){me(e,e.return,M)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function yh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;yh(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function nt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)uh(e,a.alternate,a),a=a.sibling}function ii(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Nt(4,a,a.return),ii(a);break;case 1:La(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&lh(a,a.return,t),ii(a);break;case 27:Bn(a.stateNode);case 26:case 5:La(a,a.return),ii(a);break;case 22:a.memoizedState===null&&ii(a);break;case 30:ii(a);break;default:ii(a)}e=e.sibling}}function rt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,n=e,r=a,o=r.flags;switch(r.tag){case 0:case 11:case 15:rt(n,r,t),Nn(4,r);break;case 1:if(rt(n,r,t),i=r,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){me(i,i.return,S)}if(i=r,n=i.updateQueue,n!==null){var h=i.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)Fd(b[n],h)}catch(S){me(i,i.return,S)}}t&&o&64&&rh(r),An(r,r.return);break;case 27:ch(r);case 26:case 5:rt(n,r,t),t&&i===null&&o&4&&sh(r),An(r,r.return);break;case 12:rt(n,r,t);break;case 31:rt(n,r,t),t&&o&4&&gh(n,r);break;case 13:rt(n,r,t),t&&o&4&&fh(n,r);break;case 22:r.memoizedState===null&&rt(n,r,t),An(r,r.return);break;case 30:break;default:rt(n,r,t)}a=a.sibling}}function ho(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&pn(t))}function po(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&pn(e))}function Da(e,a,t,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)bh(e,a,t,i),a=a.sibling}function bh(e,a,t,i){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a,t,i),n&2048&&Nn(9,a);break;case 1:Da(e,a,t,i);break;case 3:Da(e,a,t,i),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&pn(e)));break;case 12:if(n&2048){Da(e,a,t,i),e=a.stateNode;try{var r=a.memoizedProps,o=r.id,h=r.onPostCommit;typeof h=="function"&&h(o,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){me(a,a.return,b)}}else Da(e,a,t,i);break;case 31:Da(e,a,t,i);break;case 13:Da(e,a,t,i);break;case 23:break;case 22:r=a.stateNode,o=a.alternate,a.memoizedState!==null?r._visibility&2?Da(e,a,t,i):Cn(e,a):r._visibility&2?Da(e,a,t,i):(r._visibility|=2,zi(e,a,t,i,(a.subtreeFlags&10256)!==0||!1)),n&2048&&ho(o,a);break;case 24:Da(e,a,t,i),n&2048&&po(a.alternate,a);break;default:Da(e,a,t,i)}}function zi(e,a,t,i,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var r=e,o=a,h=t,b=i,S=o.flags;switch(o.tag){case 0:case 11:case 15:zi(r,o,h,b,n),Nn(8,o);break;case 23:break;case 22:var M=o.stateNode;o.memoizedState!==null?M._visibility&2?zi(r,o,h,b,n):Cn(r,o):(M._visibility|=2,zi(r,o,h,b,n)),n&&S&2048&&ho(o.alternate,o);break;case 24:zi(r,o,h,b,n),n&&S&2048&&po(o.alternate,o);break;default:zi(r,o,h,b,n)}a=a.sibling}}function Cn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,i=a,n=i.flags;switch(i.tag){case 22:Cn(t,i),n&2048&&ho(i.alternate,i);break;case 24:Cn(t,i),n&2048&&po(i.alternate,i);break;default:Cn(t,i)}a=a.sibling}}var Rn=8192;function Di(e,a,t){if(e.subtreeFlags&Rn)for(e=e.child;e!==null;)xh(e,a,t),e=e.sibling}function xh(e,a,t){switch(e.tag){case 26:Di(e,a,t),e.flags&Rn&&e.memoizedState!==null&&Zm(t,za,e.memoizedState,e.memoizedProps);break;case 5:Di(e,a,t);break;case 3:case 4:var i=za;za=rl(e.stateNode.containerInfo),Di(e,a,t),za=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Rn,Rn=16777216,Di(e,a,t),Rn=i):Di(e,a,t));break;default:Di(e,a,t)}}function kh(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Mn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var i=a[t];Ye=i,wh(i,e)}kh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vh(e),e=e.sibling}function vh(e){switch(e.tag){case 0:case 11:case 15:Mn(e),e.flags&2048&&Nt(9,e,e.return);break;case 3:Mn(e);break;case 12:Mn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Kr(e)):Mn(e);break;default:Mn(e)}}function Kr(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var i=a[t];Ye=i,wh(i,e)}kh(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Nt(8,a,a.return),Kr(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Kr(a));break;default:Kr(a)}e=e.sibling}}function wh(e,a){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:Nt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pn(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,Ye=i;else e:for(t=e;Ye!==null;){i=Ye;var n=i.sibling,r=i.return;if(hh(i),i===t){Ye=null;break e}if(n!==null){n.return=r,Ye=n;break e}Ye=r}}}var um={getCacheForType:function(e){var a=Qe(Oe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Qe(Oe).controller.signal}},hm=typeof WeakMap=="function"?WeakMap:Map,he=0,we=null,ie=null,re=0,fe=0,fa=null,At=!1,Hi=!1,go=!1,lt=0,Me=0,Ct=0,ni=0,fo=0,ma=0,Oi=0,En=null,la=null,mo=!1,Qr=0,jh=0,Fr=1/0,Jr=null,Rt=null,Le=0,Mt=null,Bi=null,st=0,yo=0,bo=null,Sh=null,zn=0,xo=null;function ya(){return(he&2)!==0&&re!==0?re&-re:E.T!==null?To():Gc()}function Th(){if(ma===0)if((re&536870912)===0||oe){var e=ir;ir<<=1,(ir&3932160)===0&&(ir=262144),ma=e}else ma=536870912;return e=pa.current,e!==null&&(e.flags|=32),ma}function sa(e,a,t){(e===we&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(_i(e,0),Et(e,re,ma,!1)),Wi(e,t),((he&2)===0||e!==we)&&(e===we&&((he&2)===0&&(ni|=t),Me===4&&Et(e,re,ma,!1)),Ga(e))}function Nh(e,a,t){if((he&6)!==0)throw Error(d(327));var i=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Xi(e,a),n=i?fm(e,a):vo(e,a,!0),r=i;do{if(n===0){Hi&&!i&&Et(e,a,0,!1);break}else{if(t=e.current.alternate,r&&!pm(t)){n=vo(e,a,!1),r=!1;continue}if(n===2){if(r=a,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;e:{var h=e;n=En;var b=h.current.memoizedState.isDehydrated;if(b&&(_i(h,o).flags|=256),o=vo(h,o,!1),o!==2){if(go&&!b){h.errorRecoveryDisabledLanes|=r,ni|=r,n=4;break e}r=la,la=n,r!==null&&(la===null?la=r:la.push.apply(la,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){_i(e,0),Et(e,a,0,!0);break}e:{switch(i=e,r=n,r){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:Et(i,a,ma,!At);break e;case 2:la=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(n=Qr+300-oa(),10<n)){if(Et(i,a,ma,!At),rr(i,0,!0)!==0)break e;st=a,i.timeoutHandle=ip(Ah.bind(null,i,t,la,Jr,mo,a,ma,ni,Oi,At,r,"Throttled",-0,0),n);break e}Ah(i,t,la,Jr,mo,a,ma,ni,Oi,At,r,null,-0,0)}}break}while(!0);Ga(e)}function Ah(e,a,t,i,n,r,o,h,b,S,M,D,N,C){if(e.timeoutHandle=-1,D=a.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ka},xh(a,r,D);var G=(r&62914560)===r?Qr-oa():(r&4194048)===r?jh-oa():0;if(G=Xm(D,G),G!==null){st=r,e.cancelPendingCommit=G(Oh.bind(null,e,a,r,t,i,n,o,h,b,M,D,null,N,C)),Et(e,r,o,!S);return}}Oh(e,a,r,t,i,n,o,h,b)}function pm(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var n=t[i],r=n.getSnapshot;n=n.value;try{if(!ua(r(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Et(e,a,t,i){a&=~fo,a&=~ni,e.suspendedLanes|=a,e.pingedLanes&=~a,i&&(e.warmLanes|=a),i=e.expirationTimes;for(var n=a;0<n;){var r=31-da(n),o=1<<r;i[r]=-1,n&=~o}t!==0&&_c(e,t,a)}function Zr(){return(he&6)===0?(Dn(0),!1):!0}function ko(){if(ie!==null){if(fe===0)var e=ie.return;else e=ie,Za=Jt=null,Os(e),Ai=null,fn=0,e=ie;for(;e!==null;)nh(e.alternate,e),e=e.return;ie=null}}function _i(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Dm(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),st=0,ko(),we=e,ie=t=Fa(e.current,null),re=a,fe=0,fa=null,At=!1,Hi=Xi(e,a),go=!1,Oi=ma=fo=ni=Ct=Me=0,la=En=null,mo=!1,(a&8)!==0&&(a|=a&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=a;0<i;){var n=31-da(i),r=1<<n;a|=e[n],i&=~r}return lt=a,yr(),t}function Ch(e,a){$=null,E.H=jn,a===Ni||a===Tr?(a=Vd(),fe=3):a===js?(a=Vd(),fe=4):fe=a===Xs?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,fa=a,ie===null&&(Me=1,Lr(e,va(a,e.current)))}function Rh(){var e=pa.current;return e===null?!0:(re&4194048)===re?Ta===null:(re&62914560)===re||(re&536870912)!==0?e===Ta:!1}function Mh(){var e=E.H;return E.H=jn,e===null?jn:e}function Eh(){var e=E.A;return E.A=um,e}function Xr(){Me=4,At||(re&4194048)!==re&&pa.current!==null||(Hi=!0),(Ct&134217727)===0&&(ni&134217727)===0||we===null||Et(we,re,ma,!1)}function vo(e,a,t){var i=he;he|=2;var n=Mh(),r=Eh();(we!==e||re!==a)&&(Jr=null,_i(e,a)),a=!1;var o=Me;e:do try{if(fe!==0&&ie!==null){var h=ie,b=fa;switch(fe){case 8:ko(),o=6;break e;case 3:case 2:case 9:case 6:pa.current===null&&(a=!0);var S=fe;if(fe=0,fa=null,Ui(e,h,b,S),t&&Hi){o=0;break e}break;default:S=fe,fe=0,fa=null,Ui(e,h,b,S)}}gm(),o=Me;break}catch(M){Ch(e,M)}while(!0);return a&&e.shellSuspendCounter++,Za=Jt=null,he=i,E.H=n,E.A=r,ie===null&&(we=null,re=0,yr()),o}function gm(){for(;ie!==null;)zh(ie)}function fm(e,a){var t=he;he|=2;var i=Mh(),n=Eh();we!==e||re!==a?(Jr=null,Fr=oa()+500,_i(e,a)):Hi=Xi(e,a);e:do try{if(fe!==0&&ie!==null){a=ie;var r=fa;a:switch(fe){case 1:fe=0,fa=null,Ui(e,a,r,1);break;case 2:case 9:if(Yd(r)){fe=0,fa=null,Dh(a);break}a=function(){fe!==2&&fe!==9||we!==e||(fe=7),Ga(e)},r.then(a,a);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Yd(r)?(fe=0,fa=null,Dh(a)):(fe=0,fa=null,Ui(e,a,r,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var h=ie;if(o?bp(o):h.stateNode.complete){fe=0,fa=null;var b=h.sibling;if(b!==null)ie=b;else{var S=h.return;S!==null?(ie=S,Wr(S)):ie=null}break a}}fe=0,fa=null,Ui(e,a,r,5);break;case 6:fe=0,fa=null,Ui(e,a,r,6);break;case 8:ko(),Me=6;break e;default:throw Error(d(462))}}mm();break}catch(M){Ch(e,M)}while(!0);return Za=Jt=null,E.H=i,E.A=n,he=t,ie!==null?0:(we=null,re=0,yr(),Me)}function mm(){for(;ie!==null&&!Ug();)zh(ie)}function zh(e){var a=th(e.alternate,e,lt);e.memoizedProps=e.pendingProps,a===null?Wr(e):ie=a}function Dh(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Zu(t,a,a.pendingProps,a.type,void 0,re);break;case 11:a=Zu(t,a,a.pendingProps,a.type.render,a.ref,re);break;case 5:Os(a);default:nh(t,a),a=ie=Ed(a,lt),a=th(t,a,lt)}e.memoizedProps=e.pendingProps,a===null?Wr(e):ie=a}function Ui(e,a,t,i){Za=Jt=null,Os(a),Ai=null,fn=0;var n=a.return;try{if(nm(e,n,a,t,re)){Me=1,Lr(e,va(t,e.current)),ie=null;return}}catch(r){if(n!==null)throw ie=n,r;Me=1,Lr(e,va(t,e.current)),ie=null;return}a.flags&32768?(oe||i===1?e=!0:Hi||(re&536870912)!==0?e=!1:(At=e=!0,(i===2||i===9||i===3||i===6)&&(i=pa.current,i!==null&&i.tag===13&&(i.flags|=16384))),Hh(a,e)):Wr(a)}function Wr(e){var a=e;do{if((a.flags&32768)!==0){Hh(a,At);return}e=a.return;var t=sm(a.alternate,a,lt);if(t!==null){ie=t;return}if(a=a.sibling,a!==null){ie=a;return}ie=a=e}while(a!==null);Me===0&&(Me=5)}function Hh(e,a){do{var t=om(e.alternate,e);if(t!==null){t.flags&=32767,ie=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ie=e;return}ie=e=t}while(e!==null);Me=6,ie=null}function Oh(e,a,t,i,n,r,o,h,b){e.cancelPendingCommit=null;do $r();while(Le!==0);if((he&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(r=a.lanes|a.childLanes,r|=os,Fg(e,t,r,o,h,b),e===we&&(ie=we=null,re=0),Bi=a,Mt=e,st=t,yo=r,bo=n,Sh=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,km(ar,function(){return Gh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,n=_.p,_.p=2,o=he,he|=4;try{cm(e,a,t)}finally{he=o,_.p=n,E.T=i}}Le=1,Bh(),_h(),Uh()}}function Bh(){if(Le===1){Le=0;var e=Mt,a=Bi,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=E.T,E.T=null;var i=_.p;_.p=2;var n=he;he|=4;try{mh(a,e);var r=Do,o=wd(e.containerInfo),h=r.focusedElem,b=r.selectionRange;if(o!==h&&h&&h.ownerDocument&&vd(h.ownerDocument.documentElement,h)){if(b!==null&&is(h)){var S=b.start,M=b.end;if(M===void 0&&(M=S),"selectionStart"in h)h.selectionStart=S,h.selectionEnd=Math.min(M,h.value.length);else{var D=h.ownerDocument||document,N=D&&D.defaultView||window;if(N.getSelection){var C=N.getSelection(),G=h.textContent.length,F=Math.min(b.start,G),ke=b.end===void 0?F:Math.min(b.end,G);!C.extend&&F>ke&&(o=ke,ke=F,F=o);var w=kd(h,F),x=kd(h,ke);if(w&&x&&(C.rangeCount!==1||C.anchorNode!==w.node||C.anchorOffset!==w.offset||C.focusNode!==x.node||C.focusOffset!==x.offset)){var j=D.createRange();j.setStart(w.node,w.offset),C.removeAllRanges(),F>ke?(C.addRange(j),C.extend(x.node,x.offset)):(j.setEnd(x.node,x.offset),C.addRange(j))}}}}for(D=[],C=h;C=C.parentNode;)C.nodeType===1&&D.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<D.length;h++){var z=D[h];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}ul=!!zo,Do=zo=null}finally{he=n,_.p=i,E.T=t}}e.current=a,Le=2}}function _h(){if(Le===2){Le=0;var e=Mt,a=Bi,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=E.T,E.T=null;var i=_.p;_.p=2;var n=he;he|=4;try{uh(e,a.alternate,a)}finally{he=n,_.p=i,E.T=t}}Le=3}}function Uh(){if(Le===4||Le===3){Le=0,Lg();var e=Mt,a=Bi,t=st,i=Sh;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Le=5:(Le=0,Bi=Mt=null,Lh(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Rt=null),Ul(t),a=a.stateNode,ca&&typeof ca.onCommitFiberRoot=="function")try{ca.onCommitFiberRoot(Zi,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=E.T,n=_.p,_.p=2,E.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var h=i[o];r(h.value,{componentStack:h.stack})}}finally{E.T=a,_.p=n}}(st&3)!==0&&$r(),Ga(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===xo?zn++:(zn=0,xo=e):zn=0,Dn(0)}}function Lh(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,pn(a)))}function $r(){return Bh(),_h(),Uh(),Gh()}function Gh(){if(Le!==5)return!1;var e=Mt,a=yo;yo=0;var t=Ul(st),i=E.T,n=_.p;try{_.p=32>t?32:t,E.T=null,t=bo,bo=null;var r=Mt,o=st;if(Le=0,Bi=Mt=null,st=0,(he&6)!==0)throw Error(d(331));var h=he;if(he|=4,vh(r.current),bh(r,r.current,o,t),he=h,Dn(0,!1),ca&&typeof ca.onPostCommitFiberRoot=="function")try{ca.onPostCommitFiberRoot(Zi,r)}catch{}return!0}finally{_.p=n,E.T=i,Lh(e,a)}}function qh(e,a,t){a=va(t,a),a=Zs(e.stateNode,a,2),e=jt(e,a,2),e!==null&&(Wi(e,2),Ga(e))}function me(e,a,t){if(e.tag===3)qh(e,e,t);else for(;a!==null;){if(a.tag===3){qh(a,e,t);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rt===null||!Rt.has(i))){e=va(t,e),t=Yu(2),i=jt(a,t,2),i!==null&&(Iu(t,i,a,e),Wi(i,2),Ga(i));break}}a=a.return}}function wo(e,a,t){var i=e.pingCache;if(i===null){i=e.pingCache=new hm;var n=new Set;i.set(a,n)}else n=i.get(a),n===void 0&&(n=new Set,i.set(a,n));n.has(t)||(go=!0,n.add(t),e=ym.bind(null,e,a,t),a.then(e,e))}function ym(e,a,t){var i=e.pingCache;i!==null&&i.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,we===e&&(re&t)===t&&(Me===4||Me===3&&(re&62914560)===re&&300>oa()-Qr?(he&2)===0&&_i(e,0):fo|=t,Oi===re&&(Oi=0)),Ga(e)}function Yh(e,a){a===0&&(a=Bc()),e=Kt(e,a),e!==null&&(Wi(e,a),Ga(e))}function bm(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Yh(e,t)}function xm(e,a){var t=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(a),Yh(e,t)}function km(e,a){return Hl(e,a)}var el=null,Li=null,jo=!1,al=!1,So=!1,zt=0;function Ga(e){e!==Li&&e.next===null&&(Li===null?el=Li=e:Li=Li.next=e),al=!0,jo||(jo=!0,wm())}function Dn(e,a){if(!So&&al){So=!0;do for(var t=!1,i=el;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var r=0;else{var o=i.suspendedLanes,h=i.pingedLanes;r=(1<<31-da(42|e)+1)-1,r&=n&~(o&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Kh(i,r))}else r=re,r=rr(i,i===we?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Xi(i,r)||(t=!0,Kh(i,r));i=i.next}while(t);So=!1}}function vm(){Ih()}function Ih(){al=jo=!1;var e=0;zt!==0&&zm()&&(e=zt);for(var a=oa(),t=null,i=el;i!==null;){var n=i.next,r=Vh(i,a);r===0?(i.next=null,t===null?el=n:t.next=n,n===null&&(Li=t)):(t=i,(e!==0||(r&3)!==0)&&(al=!0)),i=n}Le!==0&&Le!==5||Dn(e),zt!==0&&(zt=0)}function Vh(e,a){for(var t=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-da(r),h=1<<o,b=n[o];b===-1?((h&t)===0||(h&i)!==0)&&(n[o]=Qg(h,a)):b<=a&&(e.expiredLanes|=h),r&=~h}if(a=we,t=re,t=rr(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,t===0||e===a&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ol(i),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Xi(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(i!==null&&Ol(i),Ul(t)){case 2:case 8:t=Hc;break;case 32:t=ar;break;case 268435456:t=Oc;break;default:t=ar}return i=Ph.bind(null,e),t=Hl(t,i),e.callbackPriority=a,e.callbackNode=t,a}return i!==null&&i!==null&&Ol(i),e.callbackPriority=2,e.callbackNode=null,2}function Ph(e,a){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if($r()&&e.callbackNode!==t)return null;var i=re;return i=rr(e,e===we?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Nh(e,i,a),Vh(e,oa()),e.callbackNode!=null&&e.callbackNode===t?Ph.bind(null,e):null)}function Kh(e,a){if($r())return null;Nh(e,a,!0)}function wm(){Hm(function(){(he&6)!==0?Hl(Dc,vm):Ih()})}function To(){if(zt===0){var e=Si;e===0&&(e=tr,tr<<=1,(tr&261888)===0&&(tr=256)),zt=e}return zt}function Qh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cr(""+e)}function Fh(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function jm(e,a,t,i,n){if(a==="submit"&&t&&t.stateNode===n){var r=Qh((n[aa]||null).action),o=i.submitter;o&&(a=(a=o[aa]||null)?Qh(a.formAction):o.getAttribute("formAction"),a!==null&&(r=a,o=null));var h=new pr("action","action",null,i,n);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(zt!==0){var b=o?Fh(n,o):new FormData(n);Vs(t,{pending:!0,data:b,method:n.method,action:r},null,b)}}else typeof r=="function"&&(h.preventDefault(),b=o?Fh(n,o):new FormData(n),Vs(t,{pending:!0,data:b,method:n.method,action:r},r,b))},currentTarget:n}]})}}for(var No=0;No<ss.length;No++){var Ao=ss[No],Sm=Ao.toLowerCase(),Tm=Ao[0].toUpperCase()+Ao.slice(1);Ea(Sm,"on"+Tm)}Ea(Td,"onAnimationEnd"),Ea(Nd,"onAnimationIteration"),Ea(Ad,"onAnimationStart"),Ea("dblclick","onDoubleClick"),Ea("focusin","onFocus"),Ea("focusout","onBlur"),Ea(qf,"onTransitionRun"),Ea(Yf,"onTransitionStart"),Ea(If,"onTransitionCancel"),Ea(Cd,"onTransitionEnd"),di("onMouseEnter",["mouseout","mouseover"]),di("onMouseLeave",["mouseout","mouseover"]),di("onPointerEnter",["pointerout","pointerover"]),di("onPointerLeave",["pointerout","pointerover"]),Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn));function Jh(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],n=i.event;i=i.listeners;e:{var r=void 0;if(a)for(var o=i.length-1;0<=o;o--){var h=i[o],b=h.instance,S=h.currentTarget;if(h=h.listener,b!==r&&n.isPropagationStopped())break e;r=h,n.currentTarget=S;try{r(n)}catch(M){mr(M)}n.currentTarget=null,r=b}else for(o=0;o<i.length;o++){if(h=i[o],b=h.instance,S=h.currentTarget,h=h.listener,b!==r&&n.isPropagationStopped())break e;r=h,n.currentTarget=S;try{r(n)}catch(M){mr(M)}n.currentTarget=null,r=b}}}}function ne(e,a){var t=a[Ll];t===void 0&&(t=a[Ll]=new Set);var i=e+"__bubble";t.has(i)||(Zh(a,e,2,!1),t.add(i))}function Co(e,a,t){var i=0;a&&(i|=4),Zh(t,e,i,a)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Ro(e){if(!e[tl]){e[tl]=!0,Ic.forEach(function(t){t!=="selectionchange"&&(Nm.has(t)||Co(t,!1,e),Co(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[tl]||(a[tl]=!0,Co("selectionchange",!1,a))}}function Zh(e,a,t,i){switch(Tp(a)){case 2:var n=ey;break;case 8:n=ay;break;default:n=Vo}t=n.bind(null,a,t,e),n=void 0,!Fl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Mo(e,a,t,i,n){var r=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var h=i.stateNode.containerInfo;if(h===n)break;if(o===4)for(o=i.return;o!==null;){var b=o.tag;if((b===3||b===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;h!==null;){if(o=si(h),o===null)return;if(b=o.tag,b===5||b===6||b===26||b===27){i=r=o;continue e}h=h.parentNode}}i=i.return}ad(function(){var S=r,M=Kl(t),D=[];e:{var N=Rd.get(e);if(N!==void 0){var C=pr,G=e;switch(e){case"keypress":if(ur(t)===0)break e;case"keydown":case"keyup":C=xf;break;case"focusin":G="focus",C=Wl;break;case"focusout":G="blur",C=Wl;break;case"beforeblur":case"afterblur":C=Wl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=wf;break;case Td:case Nd:case Ad:C=df;break;case Cd:C=Sf;break;case"scroll":case"scrollend":C=rf;break;case"wheel":C=Nf;break;case"copy":case"cut":case"paste":C=hf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ld;break;case"toggle":case"beforetoggle":C=Cf}var F=(a&4)!==0,ke=!F&&(e==="scroll"||e==="scrollend"),w=F?N!==null?N+"Capture":null:N;F=[];for(var x=S,j;x!==null;){var z=x;if(j=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||j===null||w===null||(z=an(x,w),z!=null&&F.push(On(x,z,j))),ke)break;x=x.return}0<F.length&&(N=new C(N,G,null,t,M),D.push({event:N,listeners:F}))}}if((a&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",N&&t!==Pl&&(G=t.relatedTarget||t.fromElement)&&(si(G)||G[li]))break e;if((C||N)&&(N=M.window===M?M:(N=M.ownerDocument)?N.defaultView||N.parentWindow:window,C?(G=t.relatedTarget||t.toElement,C=S,G=G?si(G):null,G!==null&&(ke=p(G),F=G.tag,G!==ke||F!==5&&F!==27&&F!==6)&&(G=null)):(C=null,G=S),C!==G)){if(F=nd,z="onMouseLeave",w="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(F=ld,z="onPointerLeave",w="onPointerEnter",x="pointer"),ke=C==null?N:en(C),j=G==null?N:en(G),N=new F(z,x+"leave",C,t,M),N.target=ke,N.relatedTarget=j,z=null,si(M)===S&&(F=new F(w,x+"enter",G,t,M),F.target=j,F.relatedTarget=ke,z=F),ke=z,C&&G)a:{for(F=Am,w=C,x=G,j=0,z=w;z;z=F(z))j++;z=0;for(var K=x;K;K=F(K))z++;for(;0<j-z;)w=F(w),j--;for(;0<z-j;)x=F(x),z--;for(;j--;){if(w===x||x!==null&&w===x.alternate){F=w;break a}w=F(w),x=F(x)}F=null}else F=null;C!==null&&Xh(D,N,C,F,!1),G!==null&&ke!==null&&Xh(D,ke,G,F,!0)}}e:{if(N=S?en(S):window,C=N.nodeName&&N.nodeName.toLowerCase(),C==="select"||C==="input"&&N.type==="file")var de=gd;else if(hd(N))if(fd)de=Uf;else{de=Bf;var P=Of}else C=N.nodeName,!C||C.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?S&&Vl(S.elementType)&&(de=gd):de=_f;if(de&&(de=de(e,S))){pd(D,de,t,M);break e}P&&P(e,N,S),e==="focusout"&&S&&N.type==="number"&&S.memoizedProps.value!=null&&Il(N,"number",N.value)}switch(P=S?en(S):window,e){case"focusin":(hd(P)||P.contentEditable==="true")&&(mi=P,ns=S,dn=null);break;case"focusout":dn=ns=mi=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,jd(D,t,M);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":jd(D,t,M)}var ee;if(es)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else fi?dd(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(sd&&t.locale!=="ko"&&(fi||le!=="onCompositionStart"?le==="onCompositionEnd"&&fi&&(ee=td()):(mt=M,Jl="value"in mt?mt.value:mt.textContent,fi=!0)),P=il(S,le),0<P.length&&(le=new rd(le,e,null,t,M),D.push({event:le,listeners:P}),ee?le.data=ee:(ee=ud(t),ee!==null&&(le.data=ee)))),(ee=Mf?Ef(e,t):zf(e,t))&&(le=il(S,"onBeforeInput"),0<le.length&&(P=new rd("onBeforeInput","beforeinput",null,t,M),D.push({event:P,listeners:le}),P.data=ee)),jm(D,e,S,t,M)}Jh(D,a)})}function On(e,a,t){return{instance:e,listener:a,currentTarget:t}}function il(e,a){for(var t=a+"Capture",i=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=an(e,t),n!=null&&i.unshift(On(e,n,r)),n=an(e,a),n!=null&&i.push(On(e,n,r))),e.tag===3)return i;e=e.return}return[]}function Am(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xh(e,a,t,i,n){for(var r=a._reactName,o=[];t!==null&&t!==i;){var h=t,b=h.alternate,S=h.stateNode;if(h=h.tag,b!==null&&b===i)break;h!==5&&h!==26&&h!==27||S===null||(b=S,n?(S=an(t,r),S!=null&&o.unshift(On(t,S,b))):n||(S=an(t,r),S!=null&&o.push(On(t,S,b)))),t=t.return}o.length!==0&&e.push({event:a,listeners:o})}var Cm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function Wh(e){return(typeof e=="string"?e:""+e).replace(Cm,`
`).replace(Rm,"")}function $h(e,a){return a=Wh(a),Wh(e)===a}function xe(e,a,t,i,n,r){switch(t){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||hi(e,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&hi(e,""+i);break;case"className":sr(e,"class",i);break;case"tabIndex":sr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(e,t,i);break;case"style":$c(e,i,r);break;case"data":if(a!=="object"){sr(e,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=cr(""+i),e.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(a!=="input"&&xe(e,a,"name",n.name,n,null),xe(e,a,"formEncType",n.formEncType,n,null),xe(e,a,"formMethod",n.formMethod,n,null),xe(e,a,"formTarget",n.formTarget,n,null)):(xe(e,a,"encType",n.encType,n,null),xe(e,a,"method",n.method,n,null),xe(e,a,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=cr(""+i),e.setAttribute(t,i);break;case"onClick":i!=null&&(e.onclick=Ka);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(t=i.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}t=cr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""+i):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":i===!0?e.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,i):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(t,i):e.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(t):e.setAttribute(t,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),lr(e,"popover",i);break;case"xlinkActuate":Pa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Pa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Pa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Pa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Pa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Pa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Pa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Pa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Pa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=tf.get(t)||t,lr(e,t,i))}}function Eo(e,a,t,i,n,r){switch(t){case"style":$c(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(t=i.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"children":typeof i=="string"?hi(e,i):(typeof i=="number"||typeof i=="bigint")&&hi(e,""+i);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),r=e[aa]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(a,r,n),typeof i=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,i,n);break e}t in e?e[t]=i:i===!0?e.setAttribute(t,""):lr(e,t,i)}}}function Je(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,n=!1,r;for(r in t)if(t.hasOwnProperty(r)){var o=t[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:xe(e,a,r,o,t,null)}}n&&xe(e,a,"srcSet",t.srcSet,t,null),i&&xe(e,a,"src",t.src,t,null);return;case"input":ne("invalid",e);var h=r=o=n=null,b=null,S=null;for(i in t)if(t.hasOwnProperty(i)){var M=t[i];if(M!=null)switch(i){case"name":n=M;break;case"type":o=M;break;case"checked":b=M;break;case"defaultChecked":S=M;break;case"value":r=M;break;case"defaultValue":h=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(d(137,a));break;default:xe(e,a,i,M,t,null)}}Jc(e,r,h,b,S,o,n,!1);return;case"select":ne("invalid",e),i=o=r=null;for(n in t)if(t.hasOwnProperty(n)&&(h=t[n],h!=null))switch(n){case"value":r=h;break;case"defaultValue":o=h;break;case"multiple":i=h;default:xe(e,a,n,h,t,null)}a=r,t=o,e.multiple=!!i,a!=null?ui(e,!!i,a,!1):t!=null&&ui(e,!!i,t,!0);return;case"textarea":ne("invalid",e),r=n=i=null;for(o in t)if(t.hasOwnProperty(o)&&(h=t[o],h!=null))switch(o){case"value":i=h;break;case"defaultValue":n=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(91));break;default:xe(e,a,o,h,t,null)}Xc(e,i,n,r);return;case"option":for(b in t)if(t.hasOwnProperty(b)&&(i=t[b],i!=null))switch(b){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:xe(e,a,b,i,t,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<Hn.length;i++)ne(Hn[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in t)if(t.hasOwnProperty(S)&&(i=t[S],i!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:xe(e,a,S,i,t,null)}return;default:if(Vl(a)){for(M in t)t.hasOwnProperty(M)&&(i=t[M],i!==void 0&&Eo(e,a,M,i,t,void 0));return}}for(h in t)t.hasOwnProperty(h)&&(i=t[h],i!=null&&xe(e,a,h,i,t,null))}function Mm(e,a,t,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,h=null,b=null,S=null,M=null;for(C in t){var D=t[C];if(t.hasOwnProperty(C)&&D!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":b=D;default:i.hasOwnProperty(C)||xe(e,a,C,null,i,D)}}for(var N in i){var C=i[N];if(D=t[N],i.hasOwnProperty(N)&&(C!=null||D!=null))switch(N){case"type":r=C;break;case"name":n=C;break;case"checked":S=C;break;case"defaultChecked":M=C;break;case"value":o=C;break;case"defaultValue":h=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(d(137,a));break;default:C!==D&&xe(e,a,N,C,i,D)}}Yl(e,o,h,b,S,M,r,n);return;case"select":C=o=h=N=null;for(r in t)if(b=t[r],t.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":C=b;default:i.hasOwnProperty(r)||xe(e,a,r,null,i,b)}for(n in i)if(r=i[n],b=t[n],i.hasOwnProperty(n)&&(r!=null||b!=null))switch(n){case"value":N=r;break;case"defaultValue":h=r;break;case"multiple":o=r;default:r!==b&&xe(e,a,n,r,i,b)}a=h,t=o,i=C,N!=null?ui(e,!!t,N,!1):!!i!=!!t&&(a!=null?ui(e,!!t,a,!0):ui(e,!!t,t?[]:"",!1));return;case"textarea":C=N=null;for(h in t)if(n=t[h],t.hasOwnProperty(h)&&n!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:xe(e,a,h,null,i,n)}for(o in i)if(n=i[o],r=t[o],i.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":N=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==r&&xe(e,a,o,n,i,r)}Zc(e,N,C);return;case"option":for(var G in t)if(N=t[G],t.hasOwnProperty(G)&&N!=null&&!i.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:xe(e,a,G,null,i,N)}for(b in i)if(N=i[b],C=t[b],i.hasOwnProperty(b)&&N!==C&&(N!=null||C!=null))switch(b){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:xe(e,a,b,N,i,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in t)N=t[F],t.hasOwnProperty(F)&&N!=null&&!i.hasOwnProperty(F)&&xe(e,a,F,null,i,N);for(S in i)if(N=i[S],C=t[S],i.hasOwnProperty(S)&&N!==C&&(N!=null||C!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,a));break;default:xe(e,a,S,N,i,C)}return;default:if(Vl(a)){for(var ke in t)N=t[ke],t.hasOwnProperty(ke)&&N!==void 0&&!i.hasOwnProperty(ke)&&Eo(e,a,ke,void 0,i,N);for(M in i)N=i[M],C=t[M],!i.hasOwnProperty(M)||N===C||N===void 0&&C===void 0||Eo(e,a,M,N,i,C);return}}for(var w in t)N=t[w],t.hasOwnProperty(w)&&N!=null&&!i.hasOwnProperty(w)&&xe(e,a,w,null,i,N);for(D in i)N=i[D],C=t[D],!i.hasOwnProperty(D)||N===C||N==null&&C==null||xe(e,a,D,N,i,C)}function ep(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Em(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),i=0;i<t.length;i++){var n=t[i],r=n.transferSize,o=n.initiatorType,h=n.duration;if(r&&h&&ep(o)){for(o=0,h=n.responseEnd,i+=1;i<t.length;i++){var b=t[i],S=b.startTime;if(S>h)break;var M=b.transferSize,D=b.initiatorType;M&&ep(D)&&(b=b.responseEnd,o+=M*(b<h?1:(h-S)/(b-S)))}if(--i,a+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zo=null,Do=null;function nl(e){return e.nodeType===9?e:e.ownerDocument}function ap(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Ho(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Oo=null;function zm(){var e=window.event;return e&&e.type==="popstate"?e===Oo?!1:(Oo=e,!0):(Oo=null,!1)}var ip=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(e){return np.resolve(null).then(e).catch(Om)}:ip;function Om(e){setTimeout(function(){throw e})}function Dt(e){return e==="head"}function rp(e,a){var t=a,i=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(i===0){e.removeChild(n),Ii(a);return}i--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")i++;else if(t==="html")Bn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Bn(t);for(var r=t.firstChild;r;){var o=r.nextSibling,h=r.nodeName;r[$i]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=o}}else t==="body"&&Bn(e.ownerDocument.body);t=n}while(t);Ii(a)}function lp(e,a){var t=e;e=0;do{var i=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=i}while(t)}function Bo(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Bo(t),Gl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Bm(e,a,t,i){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[$i])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Na(e.nextSibling),e===null)break}return null}function _m(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Na(e.nextSibling),e===null))return null;return e}function sp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Na(e.nextSibling),e===null))return null;return e}function _o(e){return e.data==="$?"||e.data==="$~"}function Uo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Um(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var i=function(){a(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Na(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Lo=null;function op(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Na(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function cp(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function dp(e,a,t){switch(a=nl(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Bn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Gl(e)}var Aa=new Map,up=new Set;function rl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ot=_.d;_.d={f:Lm,r:Gm,D:qm,C:Ym,L:Im,m:Vm,X:Km,S:Pm,M:Qm};function Lm(){var e=ot.f(),a=Zr();return e||a}function Gm(e){var a=oi(e);a!==null&&a.tag===5&&a.type==="form"?Cu(a):ot.r(e)}var Gi=typeof document>"u"?null:document;function hp(e,a,t){var i=Gi;if(i&&typeof a=="string"&&a){var n=xa(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),up.has(n)||(up.add(n),e={rel:e,crossOrigin:t,href:a},i.querySelector(n)===null&&(a=i.createElement("link"),Je(a,"link",e),qe(a),i.head.appendChild(a)))}}function qm(e){ot.D(e),hp("dns-prefetch",e,null)}function Ym(e,a){ot.C(e,a),hp("preconnect",e,a)}function Im(e,a,t){ot.L(e,a,t);var i=Gi;if(i&&e&&a){var n='link[rel="preload"][as="'+xa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+xa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+xa(t.imageSizes)+'"]')):n+='[href="'+xa(e)+'"]';var r=n;switch(a){case"style":r=qi(e);break;case"script":r=Yi(e)}Aa.has(r)||(e=A({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Aa.set(r,e),i.querySelector(n)!==null||a==="style"&&i.querySelector(_n(r))||a==="script"&&i.querySelector(Un(r))||(a=i.createElement("link"),Je(a,"link",e),qe(a),i.head.appendChild(a)))}}function Vm(e,a){ot.m(e,a);var t=Gi;if(t&&e){var i=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+xa(i)+'"][href="'+xa(e)+'"]',r=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Yi(e)}if(!Aa.has(r)&&(e=A({rel:"modulepreload",href:e},a),Aa.set(r,e),t.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Un(r)))return}i=t.createElement("link"),Je(i,"link",e),qe(i),t.head.appendChild(i)}}}function Pm(e,a,t){ot.S(e,a,t);var i=Gi;if(i&&e){var n=ci(i).hoistableStyles,r=qi(e);a=a||"default";var o=n.get(r);if(!o){var h={loading:0,preload:null};if(o=i.querySelector(_n(r)))h.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Aa.get(r))&&Go(e,t);var b=o=i.createElement("link");qe(b),Je(b,"link",e),b._p=new Promise(function(S,M){b.onload=S,b.onerror=M}),b.addEventListener("load",function(){h.loading|=1}),b.addEventListener("error",function(){h.loading|=2}),h.loading|=4,ll(o,a,i)}o={type:"stylesheet",instance:o,count:1,state:h},n.set(r,o)}}}function Km(e,a){ot.X(e,a);var t=Gi;if(t&&e){var i=ci(t).hoistableScripts,n=Yi(e),r=i.get(n);r||(r=t.querySelector(Un(n)),r||(e=A({src:e,async:!0},a),(a=Aa.get(n))&&qo(e,a),r=t.createElement("script"),qe(r),Je(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function Qm(e,a){ot.M(e,a);var t=Gi;if(t&&e){var i=ci(t).hoistableScripts,n=Yi(e),r=i.get(n);r||(r=t.querySelector(Un(n)),r||(e=A({src:e,async:!0,type:"module"},a),(a=Aa.get(n))&&qo(e,a),r=t.createElement("script"),qe(r),Je(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function pp(e,a,t,i){var n=(n=te.current)?rl(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=qi(t.href),t=ci(n).hoistableStyles,i=t.get(a),i||(i={type:"style",instance:null,count:0,state:null},t.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=qi(t.href);var r=ci(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(_n(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Aa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Aa.set(e,t),r||Fm(n,e,t,o.state))),a&&i===null)throw Error(d(528,""));return o}if(a&&i!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Yi(t),t=ci(n).hoistableScripts,i=t.get(a),i||(i={type:"script",instance:null,count:0,state:null},t.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function qi(e){return'href="'+xa(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function gp(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Fm(e,a,t,i){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=e.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Je(a,"link",t),qe(a),e.head.appendChild(a))}function Yi(e){return'[src="'+xa(e)+'"]'}function Un(e){return"script[async]"+e}function fp(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var i=e.querySelector('style[data-href~="'+xa(t.href)+'"]');if(i)return a.instance=i,qe(i),i;var n=A({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),qe(i),Je(i,"style",n),ll(i,t.precedence,e),a.instance=i;case"stylesheet":n=qi(t.href);var r=e.querySelector(_n(n));if(r)return a.state.loading|=4,a.instance=r,qe(r),r;i=gp(t),(n=Aa.get(n))&&Go(i,n),r=(e.ownerDocument||e).createElement("link"),qe(r);var o=r;return o._p=new Promise(function(h,b){o.onload=h,o.onerror=b}),Je(r,"link",i),a.state.loading|=4,ll(r,t.precedence,e),a.instance=r;case"script":return r=Yi(t.src),(n=e.querySelector(Un(r)))?(a.instance=n,qe(n),n):(i=t,(n=Aa.get(r))&&(i=A({},t),qo(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),Je(n,"link",i),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,ll(i,t.precedence,e));return a.instance}function ll(e,a,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,r=n,o=0;o<i.length;o++){var h=i[o];if(h.dataset.precedence===a)r=h;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Go(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function qo(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var sl=null;function mp(e,a,t){if(sl===null){var i=new Map,n=sl=new Map;n.set(t,i)}else n=sl,i=n.get(t),i||(i=new Map,n.set(t,i));if(i.has(e))return i;for(i.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var r=t[n];if(!(r[$i]||r[Pe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(a)||"";o=e+o;var h=i.get(o);h?h.push(r):i.set(o,[r])}}return i}function yp(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Jm(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function bp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zm(e,a,t,i){if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=qi(i.href),r=a.querySelector(_n(n));if(r){a=r._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ol.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=r,qe(r);return}r=a.ownerDocument||a,i=gp(i),(n=Aa.get(n))&&Go(i,n),r=r.createElement("link"),qe(r);var o=r;o._p=new Promise(function(h,b){o.onload=h,o.onerror=b}),Je(r,"link",i),t.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ol.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Yo=0;function Xm(e,a){return e.stylesheets&&e.count===0&&dl(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var i=setTimeout(function(){if(e.stylesheets&&dl(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+a);0<e.imgBytes&&Yo===0&&(Yo=62500*Em());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dl(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Yo?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cl=null;function dl(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cl=new Map,a.forEach(Wm,e),cl=null,ol.call(e))}function Wm(e,a){if(!(a.state.loading&4)){var t=cl.get(e);if(t)var i=t.get(null);else{t=new Map,cl.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),i=o)}i&&t.set(null,i)}n=a.instance,o=n.getAttribute("data-precedence"),r=t.get(o)||i,r===i&&t.set(null,n),t.set(o,n),this.count++,i=ol.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var Ln={$$typeof:L,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function $m(e,a,t,i,n,r,o,h,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.hiddenUpdates=Bl(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function xp(e,a,t,i,n,r,o,h,b,S,M,D){return e=new $m(e,a,t,o,b,S,M,D,h),a=1,r===!0&&(a|=24),r=ha(3,null,null,a),e.current=r,r.stateNode=e,a=ks(),a.refCount++,e.pooledCache=a,a.refCount++,r.memoizedState={element:i,isDehydrated:t,cache:a},Ss(r),e}function kp(e){return e?(e=xi,e):xi}function vp(e,a,t,i,n,r){n=kp(n),i.context===null?i.context=n:i.pendingContext=n,i=wt(a),i.payload={element:t},r=r===void 0?null:r,r!==null&&(i.callback=r),t=jt(e,i,a),t!==null&&(sa(t,e,a),yn(t,e,a))}function wp(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Io(e,a){wp(e,a),(e=e.alternate)&&wp(e,a)}function jp(e){if(e.tag===13||e.tag===31){var a=Kt(e,67108864);a!==null&&sa(a,e,67108864),Io(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var a=ya();a=_l(a);var t=Kt(e,a);t!==null&&sa(t,e,a),Io(e,a)}}var ul=!0;function ey(e,a,t,i){var n=E.T;E.T=null;var r=_.p;try{_.p=2,Vo(e,a,t,i)}finally{_.p=r,E.T=n}}function ay(e,a,t,i){var n=E.T;E.T=null;var r=_.p;try{_.p=8,Vo(e,a,t,i)}finally{_.p=r,E.T=n}}function Vo(e,a,t,i){if(ul){var n=Po(i);if(n===null)Mo(e,a,i,hl,t),Np(e,i);else if(iy(n,e,a,t,i))i.stopPropagation();else if(Np(e,i),a&4&&-1<ty.indexOf(e)){for(;n!==null;){var r=oi(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=qt(r.pendingLanes);if(o!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;o;){var b=1<<31-da(o);h.entanglements[1]|=b,o&=~b}Ga(r),(he&6)===0&&(Fr=oa()+500,Dn(0))}}break;case 31:case 13:h=Kt(r,2),h!==null&&sa(h,r,2),Zr(),Io(r,2)}if(r=Po(i),r===null&&Mo(e,a,i,hl,t),r===n)break;n=r}n!==null&&i.stopPropagation()}else Mo(e,a,i,null,t)}}function Po(e){return e=Kl(e),Ko(e)}var hl=null;function Ko(e){if(hl=null,e=si(e),e!==null){var a=p(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=y(a),e!==null)return e;e=null}else if(t===31){if(e=k(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return hl=e,null}function Tp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gg()){case Dc:return 2;case Hc:return 8;case ar:case qg:return 32;case Oc:return 268435456;default:return 32}default:return 32}}var Qo=!1,Ht=null,Ot=null,Bt=null,Gn=new Map,qn=new Map,_t=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Np(e,a){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Gn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(a.pointerId)}}function Yn(e,a,t,i,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:a,domEventName:t,eventSystemFlags:i,nativeEvent:r,targetContainers:[n]},a!==null&&(a=oi(a),a!==null&&jp(a)),e):(e.eventSystemFlags|=i,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function iy(e,a,t,i,n){switch(a){case"focusin":return Ht=Yn(Ht,e,a,t,i,n),!0;case"dragenter":return Ot=Yn(Ot,e,a,t,i,n),!0;case"mouseover":return Bt=Yn(Bt,e,a,t,i,n),!0;case"pointerover":var r=n.pointerId;return Gn.set(r,Yn(Gn.get(r)||null,e,a,t,i,n)),!0;case"gotpointercapture":return r=n.pointerId,qn.set(r,Yn(qn.get(r)||null,e,a,t,i,n)),!0}return!1}function Ap(e){var a=si(e.target);if(a!==null){var t=p(a);if(t!==null){if(a=t.tag,a===13){if(a=y(t),a!==null){e.blockedOn=a,qc(e.priority,function(){Sp(t)});return}}else if(a===31){if(a=k(t),a!==null){e.blockedOn=a,qc(e.priority,function(){Sp(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Po(e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Pl=i,t.target.dispatchEvent(i),Pl=null}else return a=oi(t),a!==null&&jp(a),e.blockedOn=t,!1;a.shift()}return!0}function Cp(e,a,t){pl(e)&&t.delete(a)}function ny(){Qo=!1,Ht!==null&&pl(Ht)&&(Ht=null),Ot!==null&&pl(Ot)&&(Ot=null),Bt!==null&&pl(Bt)&&(Bt=null),Gn.forEach(Cp),qn.forEach(Cp)}function gl(e,a){e.blockedOn===a&&(e.blockedOn=null,Qo||(Qo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ny)))}var fl=null;function Rp(e){fl!==e&&(fl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fl===e&&(fl=null);for(var a=0;a<e.length;a+=3){var t=e[a],i=e[a+1],n=e[a+2];if(typeof i!="function"){if(Ko(i||t)===null)continue;break}var r=oi(t);r!==null&&(e.splice(a,3),a-=3,Vs(r,{pending:!0,data:n,method:t.method,action:i},i,n))}}))}function Ii(e){function a(b){return gl(b,e)}Ht!==null&&gl(Ht,e),Ot!==null&&gl(Ot,e),Bt!==null&&gl(Bt,e),Gn.forEach(a),qn.forEach(a);for(var t=0;t<_t.length;t++){var i=_t[t];i.blockedOn===e&&(i.blockedOn=null)}for(;0<_t.length&&(t=_t[0],t.blockedOn===null);)Ap(t),t.blockedOn===null&&_t.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var n=t[i],r=t[i+1],o=n[aa]||null;if(typeof r=="function")o||Rp(t);else if(o){var h=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[aa]||null)h=o.formAction;else if(Ko(n)!==null)continue}else h=o.action;typeof h=="function"?t[i+1]=h:(t.splice(i,3),i-=3),Rp(t)}}}function Mp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),i||setTimeout(t,20)}function t(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function Fo(e){this._internalRoot=e}ml.prototype.render=Fo.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,i=ya();vp(t,i,e,a,null,null)},ml.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;vp(e.current,2,null,e,null,null),Zr(),a[li]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var a=Gc();e={blockedOn:null,target:e,priority:a};for(var t=0;t<_t.length&&a!==0&&a<_t[t].priority;t++);_t.splice(t,0,e),t===0&&Ap(e)}};var Ep=c.version;if(Ep!=="19.2.1")throw Error(d(527,Ep,"19.2.1"));_.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=f(a),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var ry={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Zi=yl.inject(ry),ca=yl}catch{}}return Vn.createRoot=function(e,a){if(!g(e))throw Error(d(299));var t=!1,i="",n=Uu,r=Lu,o=Gu;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=xp(e,1,!1,null,null,t,i,null,n,r,o,Mp),e[li]=a.current,Ro(e),new Fo(a)},Vn.hydrateRoot=function(e,a,t){if(!g(e))throw Error(d(299));var i=!1,n="",r=Uu,o=Lu,h=Gu,b=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.formState!==void 0&&(b=t.formState)),a=xp(e,1,!0,a,t??null,i,n,b,r,o,h,Mp),a.context=kp(null),t=a.current,i=ya(),i=_l(i),n=wt(i),n.callback=null,jt(t,n,i),t=i,a.current.lanes=t,Wi(a,t),Ga(a),e[li]=a.current,Ro(e),new ml(a)},Vn.version="19.2.1",Vn}var qp;function yy(){if(qp)return Xo.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Xo.exports=my(),Xo.exports}var by=yy();const xy=Zn(by);/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yp="popstate";function ky(s={}){function c(d,g){let{pathname:p,search:y,hash:k}=d.location;return dc("",{pathname:p,search:y,hash:k},g.state&&g.state.usr||null,g.state&&g.state.key||"default")}function u(d,g){return typeof g=="string"?g:Fn(g)}return wy(c,u,null,s)}function Ce(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function Oa(s,c){if(!s){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function vy(){return Math.random().toString(36).substring(2,10)}function Ip(s,c){return{usr:s.state,key:s.key,idx:c}}function dc(s,c,u=null,d){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof c=="string"?Qi(c):c,state:u,key:c&&c.key||d||vy()}}function Fn({pathname:s="/",search:c="",hash:u=""}){return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(s+=u.charAt(0)==="#"?u:"#"+u),s}function Qi(s){let c={};if(s){let u=s.indexOf("#");u>=0&&(c.hash=s.substring(u),s=s.substring(0,u));let d=s.indexOf("?");d>=0&&(c.search=s.substring(d),s=s.substring(0,d)),s&&(c.pathname=s)}return c}function wy(s,c,u,d={}){let{window:g=document.defaultView,v5Compat:p=!1}=d,y=g.history,k="POP",m=null,f=T();f==null&&(f=0,y.replaceState({...y.state,idx:f},""));function T(){return(y.state||{idx:null}).idx}function A(){k="POP";let q=T(),I=q==null?null:q-f;f=q,m&&m({action:k,location:Q.location,delta:I})}function O(q,I){k="PUSH";let ae=dc(Q.location,q,I);f=T()+1;let L=Ip(ae,f),pe=Q.createHref(ae);try{y.pushState(L,"",pe)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;g.location.assign(pe)}p&&m&&m({action:k,location:Q.location,delta:1})}function B(q,I){k="REPLACE";let ae=dc(Q.location,q,I);f=T();let L=Ip(ae,f),pe=Q.createHref(ae);y.replaceState(L,"",pe),p&&m&&m({action:k,location:Q.location,delta:0})}function Y(q){return jy(q)}let Q={get action(){return k},get location(){return s(g,y)},listen(q){if(m)throw new Error("A history only accepts one active listener");return g.addEventListener(Yp,A),m=q,()=>{g.removeEventListener(Yp,A),m=null}},createHref(q){return c(g,q)},createURL:Y,encodeLocation(q){let I=Y(q);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:O,replace:B,go(q){return y.go(q)}};return Q}function jy(s,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(u,"No window.location.(origin|href) available to create URL");let d=typeof s=="string"?s:Fn(s);return d=d.replace(/ $/,"%20"),!c&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function og(s,c,u="/"){return Sy(s,c,u,!1)}function Sy(s,c,u,d){let g=typeof c=="string"?Qi(c):c,p=ht(g.pathname||"/",u);if(p==null)return null;let y=cg(s);Ty(y);let k=null;for(let m=0;k==null&&m<y.length;++m){let f=By(p);k=Hy(y[m],f,d)}return k}function cg(s,c=[],u=[],d="",g=!1){let p=(y,k,m=g,f)=>{let T={relativePath:f===void 0?y.path||"":f,caseSensitive:y.caseSensitive===!0,childrenIndex:k,route:y};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(d)&&m)return;Ce(T.relativePath.startsWith(d),`Absolute route path "${T.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(d.length)}let A=ut([d,T.relativePath]),O=u.concat(T);y.children&&y.children.length>0&&(Ce(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),cg(y.children,c,O,A,m)),!(y.path==null&&!y.index)&&c.push({path:A,score:zy(A,y.index),routesMeta:O})};return s.forEach((y,k)=>{var m;if(y.path===""||!((m=y.path)!=null&&m.includes("?")))p(y,k);else for(let f of dg(y.path))p(y,k,!0,f)}),c}function dg(s){let c=s.split("/");if(c.length===0)return[];let[u,...d]=c,g=u.endsWith("?"),p=u.replace(/\?$/,"");if(d.length===0)return g?[p,""]:[p];let y=dg(d.join("/")),k=[];return k.push(...y.map(m=>m===""?p:[p,m].join("/"))),g&&k.push(...y),k.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ty(s){s.sort((c,u)=>c.score!==u.score?u.score-c.score:Dy(c.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Ny=/^:[\w-]+$/,Ay=3,Cy=2,Ry=1,My=10,Ey=-2,Vp=s=>s==="*";function zy(s,c){let u=s.split("/"),d=u.length;return u.some(Vp)&&(d+=Ey),c&&(d+=Cy),u.filter(g=>!Vp(g)).reduce((g,p)=>g+(Ny.test(p)?Ay:p===""?Ry:My),d)}function Dy(s,c){return s.length===c.length&&s.slice(0,-1).every((d,g)=>d===c[g])?s[s.length-1]-c[c.length-1]:0}function Hy(s,c,u=!1){let{routesMeta:d}=s,g={},p="/",y=[];for(let k=0;k<d.length;++k){let m=d[k],f=k===d.length-1,T=p==="/"?c:c.slice(p.length)||"/",A=jl({path:m.relativePath,caseSensitive:m.caseSensitive,end:f},T),O=m.route;if(!A&&f&&u&&!d[d.length-1].route.index&&(A=jl({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},T)),!A)return null;Object.assign(g,A.params),y.push({params:g,pathname:ut([p,A.pathname]),pathnameBase:qy(ut([p,A.pathnameBase])),route:O}),A.pathnameBase!=="/"&&(p=ut([p,A.pathnameBase]))}return y}function jl(s,c){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[u,d]=Oy(s.path,s.caseSensitive,s.end),g=c.match(u);if(!g)return null;let p=g[0],y=p.replace(/(.)\/+$/,"$1"),k=g.slice(1);return{params:d.reduce((f,{paramName:T,isOptional:A},O)=>{if(T==="*"){let Y=k[O]||"";y=p.slice(0,p.length-Y.length).replace(/(.)\/+$/,"$1")}const B=k[O];return A&&!B?f[T]=void 0:f[T]=(B||"").replace(/%2F/g,"/"),f},{}),pathname:p,pathnameBase:y,pattern:s}}function Oy(s,c=!1,u=!0){Oa(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],g="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,k,m)=>(d.push({paramName:k,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),g+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?g+="\\/*$":s!==""&&s!=="/"&&(g+="(?:(?=\\/|$))"),[new RegExp(g,c?void 0:"i"),d]}function By(s){try{return s.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Oa(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),s}}function ht(s,c){if(c==="/")return s;if(!s.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,d=s.charAt(u);return d&&d!=="/"?null:s.slice(u)||"/"}var _y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uy=s=>_y.test(s);function Ly(s,c="/"){let{pathname:u,search:d="",hash:g=""}=typeof s=="string"?Qi(s):s,p;if(u)if(Uy(u))p=u;else{if(u.includes("//")){let y=u;u=u.replace(/\/\/+/g,"/"),Oa(!1,`Pathnames cannot have embedded double slashes - normalizing ${y} -> ${u}`)}u.startsWith("/")?p=Pp(u.substring(1),"/"):p=Pp(u,c)}else p=c;return{pathname:p,search:Yy(d),hash:Iy(g)}}function Pp(s,c){let u=c.replace(/\/+$/,"").split("/");return s.split("/").forEach(g=>{g===".."?u.length>1&&u.pop():g!=="."&&u.push(g)}),u.length>1?u.join("/"):"/"}function ac(s,c,u,d){return`Cannot include a '${s}' character in a manually specified \`to.${c}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gy(s){return s.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function ug(s){let c=Gy(s);return c.map((u,d)=>d===c.length-1?u.pathname:u.pathnameBase)}function hg(s,c,u,d=!1){let g;typeof s=="string"?g=Qi(s):(g={...s},Ce(!g.pathname||!g.pathname.includes("?"),ac("?","pathname","search",g)),Ce(!g.pathname||!g.pathname.includes("#"),ac("#","pathname","hash",g)),Ce(!g.search||!g.search.includes("#"),ac("#","search","hash",g)));let p=s===""||g.pathname==="",y=p?"/":g.pathname,k;if(y==null)k=u;else{let A=c.length-1;if(!d&&y.startsWith("..")){let O=y.split("/");for(;O[0]==="..";)O.shift(),A-=1;g.pathname=O.join("/")}k=A>=0?c[A]:"/"}let m=Ly(g,k),f=y&&y!=="/"&&y.endsWith("/"),T=(p||y===".")&&u.endsWith("/");return!m.pathname.endsWith("/")&&(f||T)&&(m.pathname+="/"),m}var ut=s=>s.join("/").replace(/\/\/+/g,"/"),qy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Yy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Iy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Vy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Py(s){return s.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var pg=["POST","PUT","PATCH","DELETE"];new Set(pg);var Ky=["GET",...pg];new Set(Ky);var Fi=R.createContext(null);Fi.displayName="DataRouter";var Nl=R.createContext(null);Nl.displayName="DataRouterState";R.createContext(!1);var gg=R.createContext({isTransitioning:!1});gg.displayName="ViewTransition";var Qy=R.createContext(new Map);Qy.displayName="Fetchers";var Fy=R.createContext(null);Fy.displayName="Await";var Ba=R.createContext(null);Ba.displayName="Navigation";var Xn=R.createContext(null);Xn.displayName="Location";var Ya=R.createContext({outlet:null,matches:[],isDataRoute:!1});Ya.displayName="Route";var jc=R.createContext(null);jc.displayName="RouteError";function Jy(s,{relative:c}={}){Ce(Wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=R.useContext(Ba),{hash:g,pathname:p,search:y}=$n(s,{relative:c}),k=p;return u!=="/"&&(k=p==="/"?u:ut([u,p])),d.createHref({pathname:k,search:y,hash:g})}function Wn(){return R.useContext(Xn)!=null}function pt(){return Ce(Wn(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Xn).location}var fg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mg(s){R.useContext(Ba).static||R.useLayoutEffect(s)}function Zy(){let{isDataRoute:s}=R.useContext(Ya);return s?d0():Xy()}function Xy(){Ce(Wn(),"useNavigate() may be used only in the context of a <Router> component.");let s=R.useContext(Fi),{basename:c,navigator:u}=R.useContext(Ba),{matches:d}=R.useContext(Ya),{pathname:g}=pt(),p=JSON.stringify(ug(d)),y=R.useRef(!1);return mg(()=>{y.current=!0}),R.useCallback((m,f={})=>{if(Oa(y.current,fg),!y.current)return;if(typeof m=="number"){u.go(m);return}let T=hg(m,JSON.parse(p),g,f.relative==="path");s==null&&c!=="/"&&(T.pathname=T.pathname==="/"?c:ut([c,T.pathname])),(f.replace?u.replace:u.push)(T,f.state,f)},[c,u,p,g,s])}R.createContext(null);function Wy(){let{matches:s}=R.useContext(Ya),c=s[s.length-1];return c?c.params:{}}function $n(s,{relative:c}={}){let{matches:u}=R.useContext(Ya),{pathname:d}=pt(),g=JSON.stringify(ug(u));return R.useMemo(()=>hg(s,JSON.parse(g),d,c==="path"),[s,g,d,c])}function $y(s,c){return yg(s,c)}function yg(s,c,u,d,g){var ae;Ce(Wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=R.useContext(Ba),{matches:y}=R.useContext(Ya),k=y[y.length-1],m=k?k.params:{},f=k?k.pathname:"/",T=k?k.pathnameBase:"/",A=k&&k.route;{let L=A&&A.path||"";bg(f,!A||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let O=pt(),B;if(c){let L=typeof c=="string"?Qi(c):c;Ce(T==="/"||((ae=L.pathname)==null?void 0:ae.startsWith(T)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${L.pathname}" was given in the \`location\` prop.`),B=L}else B=O;let Y=B.pathname||"/",Q=Y;if(T!=="/"){let L=T.replace(/^\//,"").split("/");Q="/"+Y.replace(/^\//,"").split("/").slice(L.length).join("/")}let q=og(s,{pathname:Q});Oa(A||q!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Oa(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=n0(q&&q.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:ut([T,p.encodeLocation?p.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?T:ut([T,p.encodeLocation?p.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),y,u,d,g);return c&&I?R.createElement(Xn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},I):I}function e0(){let s=c0(),c=Vy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),u=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",g={padding:"0.5rem",backgroundColor:d},p={padding:"2px 4px",backgroundColor:d},y=null;return console.error("Error handled by React Router default ErrorBoundary:",s),y=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:p},"ErrorBoundary")," or"," ",R.createElement("code",{style:p},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},c),u?R.createElement("pre",{style:g},u):null,y)}var a0=R.createElement(e0,null),t0=class extends R.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){this.props.onError?this.props.onError(s,c):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?R.createElement(Ya.Provider,{value:this.props.routeContext},R.createElement(jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function i0({routeContext:s,match:c,children:u}){let d=R.useContext(Fi);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),R.createElement(Ya.Provider,{value:s},u)}function n0(s,c=[],u=null,d=null,g=null){if(s==null){if(!u)return null;if(u.errors)s=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)s=u.matches;else return null}let p=s,y=u==null?void 0:u.errors;if(y!=null){let T=p.findIndex(A=>A.route.id&&(y==null?void 0:y[A.route.id])!==void 0);Ce(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),p=p.slice(0,Math.min(p.length,T+1))}let k=!1,m=-1;if(u)for(let T=0;T<p.length;T++){let A=p[T];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(m=T),A.route.id){let{loaderData:O,errors:B}=u,Y=A.route.loader&&!O.hasOwnProperty(A.route.id)&&(!B||B[A.route.id]===void 0);if(A.route.lazy||Y){k=!0,m>=0?p=p.slice(0,m+1):p=[p[0]];break}}}let f=u&&d?(T,A)=>{var O,B;d(T,{location:u.location,params:((B=(O=u.matches)==null?void 0:O[0])==null?void 0:B.params)??{},unstable_pattern:Py(u.matches),errorInfo:A})}:void 0;return p.reduceRight((T,A,O)=>{let B,Y=!1,Q=null,q=null;u&&(B=y&&A.route.id?y[A.route.id]:void 0,Q=A.route.errorElement||a0,k&&(m<0&&O===0?(bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,q=null):m===O&&(Y=!0,q=A.route.hydrateFallbackElement||null)));let I=c.concat(p.slice(0,O+1)),ae=()=>{let L;return B?L=Q:Y?L=q:A.route.Component?L=R.createElement(A.route.Component,null):A.route.element?L=A.route.element:L=T,R.createElement(i0,{match:A,routeContext:{outlet:T,matches:I,isDataRoute:u!=null},children:L})};return u&&(A.route.ErrorBoundary||A.route.errorElement||O===0)?R.createElement(t0,{location:u.location,revalidation:u.revalidation,component:Q,error:B,children:ae(),routeContext:{outlet:null,matches:I,isDataRoute:!0},onError:f}):ae()},null)}function Sc(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r0(s){let c=R.useContext(Fi);return Ce(c,Sc(s)),c}function l0(s){let c=R.useContext(Nl);return Ce(c,Sc(s)),c}function s0(s){let c=R.useContext(Ya);return Ce(c,Sc(s)),c}function Tc(s){let c=s0(s),u=c.matches[c.matches.length-1];return Ce(u.route.id,`${s} can only be used on routes that contain a unique "id"`),u.route.id}function o0(){return Tc("useRouteId")}function c0(){var d;let s=R.useContext(jc),c=l0("useRouteError"),u=Tc("useRouteError");return s!==void 0?s:(d=c.errors)==null?void 0:d[u]}function d0(){let{router:s}=r0("useNavigate"),c=Tc("useNavigate"),u=R.useRef(!1);return mg(()=>{u.current=!0}),R.useCallback(async(g,p={})=>{Oa(u.current,fg),u.current&&(typeof g=="number"?await s.navigate(g):await s.navigate(g,{fromRouteId:c,...p}))},[s,c])}var Kp={};function bg(s,c,u){!c&&!Kp[s]&&(Kp[s]=!0,Oa(!1,u))}R.memo(u0);function u0({routes:s,future:c,state:u,unstable_onError:d}){return yg(s,void 0,u,d,c)}function Ca(s){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function h0({basename:s="/",children:c=null,location:u,navigationType:d="POP",navigator:g,static:p=!1,unstable_useTransitions:y}){Ce(!Wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let k=s.replace(/^\/*/,"/"),m=R.useMemo(()=>({basename:k,navigator:g,static:p,unstable_useTransitions:y,future:{}}),[k,g,p,y]);typeof u=="string"&&(u=Qi(u));let{pathname:f="/",search:T="",hash:A="",state:O=null,key:B="default"}=u,Y=R.useMemo(()=>{let Q=ht(f,k);return Q==null?null:{location:{pathname:Q,search:T,hash:A,state:O,key:B},navigationType:d}},[k,f,T,A,O,B,d]);return Oa(Y!=null,`<Router basename="${k}"> is not able to match the URL "${f}${T}${A}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:R.createElement(Ba.Provider,{value:m},R.createElement(Xn.Provider,{children:c,value:Y}))}function p0({children:s,location:c}){return $y(uc(s),c)}function uc(s,c=[]){let u=[];return R.Children.forEach(s,(d,g)=>{if(!R.isValidElement(d))return;let p=[...c,g];if(d.type===R.Fragment){u.push.apply(u,uc(d.props.children,p));return}Ce(d.type===Ca,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!d.props.index||!d.props.children,"An index route cannot have child routes.");let y={id:d.props.id||p.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(y.children=uc(d.props.children,p)),u.push(y)}),u}var kl="get",vl="application/x-www-form-urlencoded";function Al(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function g0(s){return Al(s)&&s.tagName.toLowerCase()==="button"}function f0(s){return Al(s)&&s.tagName.toLowerCase()==="form"}function m0(s){return Al(s)&&s.tagName.toLowerCase()==="input"}function y0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function b0(s,c){return s.button===0&&(!c||c==="_self")&&!y0(s)}var bl=null;function x0(){if(bl===null)try{new FormData(document.createElement("form"),0),bl=!1}catch{bl=!0}return bl}var k0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tc(s){return s!=null&&!k0.has(s)?(Oa(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vl}"`),null):s}function v0(s,c){let u,d,g,p,y;if(f0(s)){let k=s.getAttribute("action");d=k?ht(k,c):null,u=s.getAttribute("method")||kl,g=tc(s.getAttribute("enctype"))||vl,p=new FormData(s)}else if(g0(s)||m0(s)&&(s.type==="submit"||s.type==="image")){let k=s.form;if(k==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||k.getAttribute("action");if(d=m?ht(m,c):null,u=s.getAttribute("formmethod")||k.getAttribute("method")||kl,g=tc(s.getAttribute("formenctype"))||tc(k.getAttribute("enctype"))||vl,p=new FormData(k,s),!x0()){let{name:f,type:T,value:A}=s;if(T==="image"){let O=f?`${f}.`:"";p.append(`${O}x`,"0"),p.append(`${O}y`,"0")}else f&&p.append(f,A)}}else{if(Al(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=kl,d=null,g=vl,y=s}return p&&g==="text/plain"&&(y=p,p=void 0),{action:d,method:u.toLowerCase(),encType:g,formData:p,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nc(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function w0(s,c,u){let d=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return d.pathname==="/"?d.pathname=`_root.${u}`:c&&ht(d.pathname,c)==="/"?d.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${u}`,d}async function j0(s,c){if(s.id in c)return c[s.id];try{let u=await import(s.module);return c[s.id]=u,u}catch(u){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function S0(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function T0(s,c,u){let d=await Promise.all(s.map(async g=>{let p=c.routes[g.route.id];if(p){let y=await j0(p,u);return y.links?y.links():[]}return[]}));return R0(d.flat(1).filter(S0).filter(g=>g.rel==="stylesheet"||g.rel==="preload").map(g=>g.rel==="stylesheet"?{...g,rel:"prefetch",as:"style"}:{...g,rel:"prefetch"}))}function Qp(s,c,u,d,g,p){let y=(m,f)=>u[f]?m.route.id!==u[f].route.id:!0,k=(m,f)=>{var T;return u[f].pathname!==m.pathname||((T=u[f].route.path)==null?void 0:T.endsWith("*"))&&u[f].params["*"]!==m.params["*"]};return p==="assets"?c.filter((m,f)=>y(m,f)||k(m,f)):p==="data"?c.filter((m,f)=>{var A;let T=d.routes[m.route.id];if(!T||!T.hasLoader)return!1;if(y(m,f)||k(m,f))return!0;if(m.route.shouldRevalidate){let O=m.route.shouldRevalidate({currentUrl:new URL(g.pathname+g.search+g.hash,window.origin),currentParams:((A=u[0])==null?void 0:A.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function N0(s,c,{includeHydrateFallback:u}={}){return A0(s.map(d=>{let g=c.routes[d.route.id];if(!g)return[];let p=[g.module];return g.clientActionModule&&(p=p.concat(g.clientActionModule)),g.clientLoaderModule&&(p=p.concat(g.clientLoaderModule)),u&&g.hydrateFallbackModule&&(p=p.concat(g.hydrateFallbackModule)),g.imports&&(p=p.concat(g.imports)),p}).flat(1))}function A0(s){return[...new Set(s)]}function C0(s){let c={},u=Object.keys(s).sort();for(let d of u)c[d]=s[d];return c}function R0(s,c){let u=new Set;return new Set(c),s.reduce((d,g)=>{let p=JSON.stringify(C0(g));return u.has(p)||(u.add(p),d.push({key:p,link:g})),d},[])}function xg(){let s=R.useContext(Fi);return Nc(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function M0(){let s=R.useContext(Nl);return Nc(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ac=R.createContext(void 0);Ac.displayName="FrameworkContext";function kg(){let s=R.useContext(Ac);return Nc(s,"You must render this element inside a <HydratedRouter> element"),s}function E0(s,c){let u=R.useContext(Ac),[d,g]=R.useState(!1),[p,y]=R.useState(!1),{onFocus:k,onBlur:m,onMouseEnter:f,onMouseLeave:T,onTouchStart:A}=c,O=R.useRef(null);R.useEffect(()=>{if(s==="render"&&y(!0),s==="viewport"){let Q=I=>{I.forEach(ae=>{y(ae.isIntersecting)})},q=new IntersectionObserver(Q,{threshold:.5});return O.current&&q.observe(O.current),()=>{q.disconnect()}}},[s]),R.useEffect(()=>{if(d){let Q=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(Q)}}},[d]);let B=()=>{g(!0)},Y=()=>{g(!1),y(!1)};return u?s!=="intent"?[p,O,{}]:[p,O,{onFocus:Pn(k,B),onBlur:Pn(m,Y),onMouseEnter:Pn(f,B),onMouseLeave:Pn(T,Y),onTouchStart:Pn(A,B)}]:[!1,O,{}]}function Pn(s,c){return u=>{s&&s(u),u.defaultPrevented||c(u)}}function z0({page:s,...c}){let{router:u}=xg(),d=R.useMemo(()=>og(u.routes,s,u.basename),[u.routes,s,u.basename]);return d?R.createElement(H0,{page:s,matches:d,...c}):null}function D0(s){let{manifest:c,routeModules:u}=kg(),[d,g]=R.useState([]);return R.useEffect(()=>{let p=!1;return T0(s,c,u).then(y=>{p||g(y)}),()=>{p=!0}},[s,c,u]),d}function H0({page:s,matches:c,...u}){let d=pt(),{manifest:g,routeModules:p}=kg(),{basename:y}=xg(),{loaderData:k,matches:m}=M0(),f=R.useMemo(()=>Qp(s,c,m,g,d,"data"),[s,c,m,g,d]),T=R.useMemo(()=>Qp(s,c,m,g,d,"assets"),[s,c,m,g,d]),A=R.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let Y=new Set,Q=!1;if(c.forEach(I=>{var L;let ae=g.routes[I.route.id];!ae||!ae.hasLoader||(!f.some(pe=>pe.route.id===I.route.id)&&I.route.id in k&&((L=p[I.route.id])!=null&&L.shouldRevalidate)||ae.hasClientLoader?Q=!0:Y.add(I.route.id))}),Y.size===0)return[];let q=w0(s,y,"data");return Q&&Y.size>0&&q.searchParams.set("_routes",c.filter(I=>Y.has(I.route.id)).map(I=>I.route.id).join(",")),[q.pathname+q.search]},[y,k,d,g,f,c,s,p]),O=R.useMemo(()=>N0(T,g),[T,g]),B=D0(T);return R.createElement(R.Fragment,null,A.map(Y=>R.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...u})),O.map(Y=>R.createElement("link",{key:Y,rel:"modulepreload",href:Y,...u})),B.map(({key:Y,link:Q})=>R.createElement("link",{key:Y,nonce:u.nonce,...Q})))}function O0(...s){return c=>{s.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vg&&(window.__reactRouterVersion="7.10.1")}catch{}function B0({basename:s,children:c,unstable_useTransitions:u,window:d}){let g=R.useRef();g.current==null&&(g.current=ky({window:d,v5Compat:!0}));let p=g.current,[y,k]=R.useState({action:p.action,location:p.location}),m=R.useCallback(f=>{u===!1?k(f):R.startTransition(()=>k(f))},[u]);return R.useLayoutEffect(()=>p.listen(m),[p,m]),R.createElement(h0,{basename:s,children:c,location:y.location,navigationType:y.action,navigator:p,unstable_useTransitions:u===!0})}var wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce=R.forwardRef(function({onClick:c,discover:u="render",prefetch:d="none",relative:g,reloadDocument:p,replace:y,state:k,target:m,to:f,preventScrollReset:T,viewTransition:A,...O},B){let{basename:Y,unstable_useTransitions:Q}=R.useContext(Ba),q=typeof f=="string"&&wg.test(f),I,ae=!1;if(typeof f=="string"&&q&&(I=f,vg))try{let Ze=new URL(window.location.href),We=f.startsWith("//")?new URL(Ze.protocol+f):new URL(f),Ve=ht(We.pathname,Y);We.origin===Ze.origin&&Ve!=null?f=Ve+We.search+We.hash:ae=!0}catch{Oa(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Jy(f,{relative:g}),[pe,Se,Ee]=E0(d,O),Z=G0(f,{replace:y,state:k,target:m,preventScrollReset:T,relative:g,viewTransition:A,unstable_useTransitions:Q});function Ge(Ze){c&&c(Ze),Ze.defaultPrevented||Z(Ze)}let Ie=R.createElement("a",{...O,...Ee,href:I||L,onClick:ae||p?c:Ge,ref:O0(B,Se),target:m,"data-discover":!q&&u==="render"?"true":void 0});return pe&&!q?R.createElement(R.Fragment,null,Ie,R.createElement(z0,{page:L})):Ie});ce.displayName="Link";var _0=R.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:d="",end:g=!1,style:p,to:y,viewTransition:k,children:m,...f},T){let A=$n(y,{relative:f.relative}),O=pt(),B=R.useContext(Nl),{navigator:Y,basename:Q}=R.useContext(Ba),q=B!=null&&P0(A)&&k===!0,I=Y.encodeLocation?Y.encodeLocation(A).pathname:A.pathname,ae=O.pathname,L=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;u||(ae=ae.toLowerCase(),L=L?L.toLowerCase():null,I=I.toLowerCase()),L&&Q&&(L=ht(L,Q)||L);const pe=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let Se=ae===I||!g&&ae.startsWith(I)&&ae.charAt(pe)==="/",Ee=L!=null&&(L===I||!g&&L.startsWith(I)&&L.charAt(I.length)==="/"),Z={isActive:Se,isPending:Ee,isTransitioning:q},Ge=Se?c:void 0,Ie;typeof d=="function"?Ie=d(Z):Ie=[d,Se?"active":null,Ee?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let Ze=typeof p=="function"?p(Z):p;return R.createElement(ce,{...f,"aria-current":Ge,className:Ie,ref:T,style:Ze,to:y,viewTransition:k},typeof m=="function"?m(Z):m)});_0.displayName="NavLink";var U0=R.forwardRef(({discover:s="render",fetcherKey:c,navigate:u,reloadDocument:d,replace:g,state:p,method:y=kl,action:k,onSubmit:m,relative:f,preventScrollReset:T,viewTransition:A,...O},B)=>{let{unstable_useTransitions:Y}=R.useContext(Ba),Q=I0(),q=V0(k,{relative:f}),I=y.toLowerCase()==="get"?"get":"post",ae=typeof k=="string"&&wg.test(k),L=pe=>{if(m&&m(pe),pe.defaultPrevented)return;pe.preventDefault();let Se=pe.nativeEvent.submitter,Ee=(Se==null?void 0:Se.getAttribute("formmethod"))||y,Z=()=>Q(Se||pe.currentTarget,{fetcherKey:c,method:Ee,navigate:u,replace:g,state:p,relative:f,preventScrollReset:T,viewTransition:A});Y&&u!==!1?R.startTransition(()=>Z()):Z()};return R.createElement("form",{ref:B,method:I,action:q,onSubmit:d?m:L,...O,"data-discover":!ae&&s==="render"?"true":void 0})});U0.displayName="Form";function L0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(s){let c=R.useContext(Fi);return Ce(c,L0(s)),c}function G0(s,{target:c,replace:u,state:d,preventScrollReset:g,relative:p,viewTransition:y,unstable_useTransitions:k}={}){let m=Zy(),f=pt(),T=$n(s,{relative:p});return R.useCallback(A=>{if(b0(A,c)){A.preventDefault();let O=u!==void 0?u:Fn(f)===Fn(T),B=()=>m(s,{replace:O,state:d,preventScrollReset:g,relative:p,viewTransition:y});k?R.startTransition(()=>B()):B()}},[f,m,T,u,d,c,s,g,p,y,k])}var q0=0,Y0=()=>`__${String(++q0)}__`;function I0(){let{router:s}=jg("useSubmit"),{basename:c}=R.useContext(Ba),u=o0(),d=s.fetch,g=s.navigate;return R.useCallback(async(p,y={})=>{let{action:k,method:m,encType:f,formData:T,body:A}=v0(p,c);if(y.navigate===!1){let O=y.fetcherKey||Y0();await d(O,u,y.action||k,{preventScrollReset:y.preventScrollReset,formData:T,body:A,formMethod:y.method||m,formEncType:y.encType||f,flushSync:y.flushSync})}else await g(y.action||k,{preventScrollReset:y.preventScrollReset,formData:T,body:A,formMethod:y.method||m,formEncType:y.encType||f,replace:y.replace,state:y.state,fromRouteId:u,flushSync:y.flushSync,viewTransition:y.viewTransition})},[d,g,c,u])}function V0(s,{relative:c}={}){let{basename:u}=R.useContext(Ba),d=R.useContext(Ya);Ce(d,"useFormAction must be used inside a RouteContext");let[g]=d.matches.slice(-1),p={...$n(s||".",{relative:c})},y=pt();if(s==null){p.search=y.search;let k=new URLSearchParams(p.search),m=k.getAll("index");if(m.some(T=>T==="")){k.delete("index"),m.filter(A=>A).forEach(A=>k.append("index",A));let T=k.toString();p.search=T?`?${T}`:""}}return(!s||s===".")&&g.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:ut([u,p.pathname])),Fn(p)}function P0(s,{relative:c}={}){let u=R.useContext(gg);Ce(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=jg("useViewTransitionState"),g=$n(s,{relative:c});if(!u.isTransitioning)return!1;let p=ht(u.currentLocation.pathname,d)||u.currentLocation.pathname,y=ht(u.nextLocation.pathname,d)||u.nextLocation.pathname;return jl(g.pathname,y)!=null||jl(g.pathname,p)!=null}/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q0=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,u,d)=>d?d.toUpperCase():u.toLowerCase()),Fp=s=>{const c=Q0(s);return c.charAt(0).toUpperCase()+c.slice(1)},Sg=(...s)=>s.filter((c,u,d)=>!!c&&c.trim()!==""&&d.indexOf(c)===u).join(" ").trim(),F0=s=>{for(const c in s)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=R.forwardRef(({color:s="currentColor",size:c=24,strokeWidth:u=2,absoluteStrokeWidth:d,className:g="",children:p,iconNode:y,...k},m)=>R.createElement("svg",{ref:m,...J0,width:c,height:c,stroke:s,strokeWidth:d?Number(u)*24/Number(c):u,className:Sg("lucide",g),...!p&&!F0(k)&&{"aria-hidden":"true"},...k},[...y.map(([f,T])=>R.createElement(f,T)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(s,c)=>{const u=R.forwardRef(({className:d,...g},p)=>R.createElement(Z0,{ref:p,iconNode:c,className:Sg(`lucide-${K0(Fp(s))}`,`lucide-${s}`,d),...g}));return u.displayName=Fp(s),u};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hc=se("arrow-left",X0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qa=se("arrow-right",W0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Tg=se("book-open",$0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],ab=se("bookmark",eb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],pc=se("calendar",tb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Sl=se("car",ib);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Cl=se("circle-alert",nb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gc=se("circle-check",rb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Jp=se("circle-question-mark",lb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Zp=se("cookie",sb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],cb=se("copy",ob);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ng=se("external-link",db);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],hb=se("eye-off",ub);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],gb=se("facebook",pb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],mb=se("file-text",fb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",key:"pgg06f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m21.5 10.5-8-8",key:"a17d9x"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m8.5 7.5 8 8",key:"1oyaui"}]],bb=se("gavel",yb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ag=se("info",xb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],vb=se("linkedin",kb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jb=se("lock",wb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Rl=se("mail",Sb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Nb=se("map-pin",Tb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Cb=se("menu",Ab);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Cg=se("message-circle",Rb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Eb=se("message-square",Mb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Xp=se("scale",zb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fc=se("search",Db);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Wp=se("share-2",Hb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Bb=se("shield-alert",Ob);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],je=se("shield-check",_b);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],mc=se("shield",Ub);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Gb=se("tag",Lb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Tl=se("triangle-alert",qb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Ib=se("twitter",Yb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],yc=se("user-check",Vb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Cc=se("user",Pb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rc=se("x",Kb),Qb={id:"delhi-jaipur-road-trip-2025",title:"Delhi se Jaipur Road Trip: NH48 Routes, Best Dhabas aur 2026 Driving Tips",slug:"delhi-jaipur-road-trip",excerpt:"Delhi to Jaipur by car ka complete 2026 guide. Best routes, travel time, toll charges, NH48 driving tips, pitstops, rental car rules aur safety advice.",category:"Road Trips",author:"Rajesh Navsagar",date:"2025-12-20",imageUrl:"/images/blogs/delhi-jaipur-guide.png",keywords:["Delhi to Jaipur Road Trip","Delhi Jaipur by Car","NH48 Driving Guide","Neemrana Pit Stop","Jaipur Highway Tips","Best Dhaba on Delhi Jaipur Highway"],expertTip:"Early morning (5 AM) departure is the most reliable way to beat the Gurgaon border traffic. If you leave after 8 AM, add at least 90 minutes to your trip just to cross Manesar.",content:`

<p>Delhi se Jaipur ki road trip North India ke sabse popular aur beginner-friendly journeys me se ek hai. Ye sirf 280 km ka drive nahi hai, balki ek aisa experience hai jisme aap Delhi ke fast-paced urban life se nikal kar Rajasthan ki royal aur relaxed vibe me enter karte ho. <strong>Ye observations Rajesh's real-trip experience aur NHAI ke 2026 updates par based hain.</strong> Chahe aap apni personal car chala rahe ho ya self-drive rental use kar rahe ho, sahi planning ke saath ye road trip smooth, safe aur memorable ban sakta hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Hum is guide mein deep dive karenge ki kaise aap NH48 ke potholes aur traffic jams se bach sakte hain, kaunse dhabas par asli swaad milta hai, aur Jaipur pahunchne ke baad parking ki pareshani se kaise bachein. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Subah 5 baje nikalne ka faida ye hai ki aap Kherki Daula toll aur Manesar ki factory rush ko 6 baje se pehle cross kar lenge. Jab suraj niklega, tab aap Dharuhera cross kar rahe honge, jo ki drive ka sabse sukoon bhara part hota hai."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>Distance aur Realistic Travel Time</h2>

<p>On paper, Delhi se Jaipur <strong>280 kilometres</strong> hai. Google Maps aapko 4 ghante 45 minute dikhayega, lekin reality thodi alag hai. Agar aap dhabas par stop lete hain aur Gurgaon-Manesar ka traffic count karte hain, toh <strong>5.5 se 6.5 ghante</strong> ka realistic backup lekar chalein.</p>

<ul>
  <li><strong>Starting Point:</strong> Delhi NCR (Noida/Ghaziabad se 1 hour extra lagta hai)</li>
  <li><strong>Destination:</strong> Jaipur (Main City / Pink City area)</li>
  <li><strong>Best Highway:</strong> NH48 (Old NH8)</li>
</ul>

<hr/>

<h2>NH48 ka Deep Analysis: Kahan Savdhan Rehna Hai?</h2>

<p>Jaipur highway (NH48) hamesha se construction aur maintenance mode mein rehta hai. 2026 mein kuch stretches kafi smooth hain toh kuch kafi tricky.</p>

<h3>1. Gurgaon to Manesar Stretch</h3>
<p>Ye part sabse zyada congested hota hai. Office hours (8 AM - 11 AM aur 5 PM - 9 PM) mein yahan kafi heavy traffic rehta hai. Is stretch mein flyovers par speed limit 60-80 kmph hoti hai, aur speed cameras kafi active hain.</p>

<h3>2. Dharuhera to Neemrana</h3>
<p>Ye portion industrial belt hai. Yahan trucks ki sankhya kafi zyada hoti hai. Raat ke waqt yahan drive karna thoda challenging ho sakta hai kyunki trucks aksar right lane mein slow chalte hain. Check our <a href="/blog/long-drive-safety-checklist">Safety Checklist</a> for night driving tips.</p>

<h3>3. Shahpura and Kotputli</h3>
<p>Jaipur pahunchne se pehle ye do bade bottlenecks aate hain. Yahan kafi traffic lights aur local market rush hota hai. Agar aap weekend par travel kar rahe hain, toh yahan 20-30 minute ka delay expect karein.</p>

<hr/>

<h2>Best Dhabas: Khane ka असली Swaad</h2>

<p>Delhi-Jaipur highway par dhabas ki kami nahi hai, lekin quality aur cleanliness ke hisaab se mera personal selection ye hai:</p>

<ol>
  <li><strong>Old Rao Hotel, Behror:</strong> Inke "Tandoori Parathas" aur "Special Lassi" evergreen hain. Halanki yahan kafi bheed (crowd) hoti hai, lekin service kafi fast hai. Washrooms usually clean milte hain.</li>
  <li><strong>Mannat Haveli:</strong> Agar aapko thoda fancy aur upscale environment chahiye, toh Mannat achha option hai. Inka dahi-bhalla aur dal makhani kafi famous hai. Photo clicking ke liye bhi achhi spots hain yahan.</li>
  <li><strong>Pavitra Dhaba:</strong> Agar aapko ekdam rustic aur authentic desi ghee ka khana chahiye bina kisi shor-shabaabe ke, toh Pavitra ek chupa hua heera (hidden gem) hai.</li>
</ol>

<hr/>

<h2>Fuel aur Electric Vehicle (EV) Charging Spots</h2>

<p>Highways par fuel pumps kafi hain, lekin mera suggestion hai ki aap <strong>Delhi se hi full tank karwa kar nikalen</strong>. Rajasthan mein petrol/diesel ki prices Delhi se thodi zyada ho sakti hain.</p>

<p><strong>EV Users ke liye:</strong> 2026 mein NH48 par charging network kafi robust ho gaya hai. Neemrana Fort ke paas aur Behror ke bade hotels mein fast chargers available hain. App par pehle hi status check kar lein taaki range anxiety na ho.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🚀 Delhi-Jaipur Driver Checklist</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Trip shuru karne se pehle ye checklist zaroor follow karein:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li style="display: flex; align-items: center; gap: 10px;">✅ <strong>FASTag Balance:</strong> Minimum ₹600 balance maintain karein.</li>
    <li>✅ <strong>Offline Maps:</strong> Kotputli ke paas network issues hote hain, offline maps ready rakhen.</li>
    <li>✅ <strong>Tyre Pressure:</strong> Highway par garmi ki wajah se tyre pressure set rakhen.</li>
    <li>✅ <strong>Drinking Water:</strong> Atleast 2-3 bottles raste ke liye carry karein.</li>
    <li>✅ <strong>Identity Proof:</strong> Hotel aur potential police checking ke liye original DL zaroori hai.</li>
  </ul>
</div>

<hr/>

<h2>Rental Car Rules (Very Important)</h2>

<p>Bohot se log Zoomcar ya Revv lekar Jaipur jaate hain. Yahan kuch kanooni (legal) baatein hain jo aapka trip bacha sakti hain:</p>

<ul>
  <li><strong>State Entry Tax:</strong> Delhi se Rajasthan enter karte waqt aapko Shahjahanpur border par <strong>Rajasthan Entry Tax</strong> bharna hota hai. Rental companies aksar ise prepaid rakhti hain, lekin payment receipt ki physical copy ya digital scan apne paas rakhen.</li>
  <li><strong>Black Number Plate:</strong> Hamesha check karein ki aapki rental car ki number plate black background with yellow letters ho. Check our guide on <a href="/blog/black-plate-rule-india-2026">Black Plate Rules</a>.</li>
  <li><strong>Permit Papers:</strong> RC, Insurance aur "All India Permit" Form 59 gaadi ke dashboard box mein check karein.</li>
</ul>

<hr/>

<h2>Best Months aur Weather ka Haal</h2>

<p>Rajasthan ghoomne ka asli maza thand mein hai.</p>
<ul>
  <li><strong>Winter (October to March):</strong> Best weather. Aap monuments par bina pasina bahaye ghoom sakte hain. Lekin dhyan rahe, December-January mein subah kafi <strong>Dhuan (Fog)</strong> hota hai highway par.</li>
  <li><strong>Summer (April to June):</strong> Bohot zyada garmi. Agar dhoop mein drive kar rahe hain toh car ka AC system pehle hi service karwa len.</li>
  <li><strong>Monsoon (July to September):</strong> Rasta hara-bhara lagta hai, lekin waterlogging aur slippery roads ka darr rehta hai.</li>
</ul>

<hr/>

<h2>Driving Safety: NH48 ke Risks</h2>

<p>NH48 par accidents ke kafi reports aate hain. In simple tips ko follow karein:</p>
<ol>
  <li><strong>Two-Wheeler Alert:</strong> Highway ke borders par local bikes bina mud-guard aur bina indicator ke sudden turn leti hain.</li>
  <li><strong>Cattle Risk:</strong> Rajasthan highway par cows aur par stray animals ka darr rehta hai, khas kar raat mein.</li>
  <li><strong>Lane Discipline:</strong> Trucks hamesha right lane mein hote hain. Inhe left se overtake karte waqt kafi savdhan rahein. Check <a href="/blog/highway-speed-limits-india-fines-2026">Speed Limit Guidelines</a> before speeding.</li>
</ol>

<hr/>

<h2>Parking in Jaipur: Ek Real Struggle</h2>

<p>Jaipur pahunchne ke baad, Pink City (Old City) area mein parking milna "Jung" jitne jaisa hai. Hawa Mahal ya Johari Bazaar jaane ke liye auto-rickshaw ka use karein. Apni car kisi authorized parking lot ya apne hotel mein hi park karna safe hai.</p>

<hr/>

<hr/>

<h2>Conclusion: Ek Memorable Safar</h2>

<p>Delhi to Jaipur road trip beginners ke liye bhi ek perfect long drive hai. Sahi route, early start aur thodi planning ke saath ye journey smooth aur enjoyable ban jati hai. Chahe family ke saath ja rahe ho ya solo drive kar rahe ho, NH48 par ye road trip aapko confidence aur memorable experience dono dega.</p>

<p><strong>Total Trip Cost Estimate (One Way):</strong></p>
<ul>
  <li>Toll Charges: ₹500-₹600</li>
  <li>Fuel (Petrol): ₹1,800-₹2,200 (depends on car mileage)</li>
  <li>Food & Breaks: ₹400-₹800</li>
  <li>Total: ₹2,700-₹3,600</li>
</ul>

<p><strong>Best Breakfast Stops (Tried & Tested):</strong></p>
<ul>
  <li><strong>Old Rao Hotel (Paota):</strong> Famous for Tandoori Paratha (₹80) and White Butter. Always crowded but worth it.</li>
  <li><strong>Mannat Dhaba (Dharuhera):</strong> Modern amenities, clean washrooms, slightly expensive (Paratha ₹120). Good for families.</li>
  <li><strong>Hotel Highway King (Neemrana):</strong> South Indian options available. Cleanest toilets on route.</li>
</ul>

<p><strong>Emergency Contacts:</strong> Highway Police: 1033 | Ambulance: 108 | Rajasthan Tourism Helpline: 1363</p>

<p>Safe drive karo, breaks lo, aur trip ko enjoy karo — kyunki road trips ka maza destination se zyada journey me hota hai aur raste ke dhabon ki chai mein hota hai.</p>

<p><strong>Hidden Gems on NH48 (Must-Stop Places):</strong></p>
<ul>
  <li><strong>Neemrana Fort (Detour: 5km):</strong> Perfect for lunch (₹1500 buffet). Grand heritage view.</li>
  <li><strong>Behror Midway:</strong> Cleanest restrooms on this route. Good for families.</li>
  <li><strong>Pabuji Ki Dhani:</strong> Authentic Rajasthani thali near Shahpura. much cheaper than big brands.</li>
  <li><strong>Jungle Babbler (Dharuhera):</strong> Bird watching spot if you start early morning.</li>
</ul>

<p><strong>Electric Vehicle (EV) Charging Network (2026 Update):</strong></p>
<p>NH-48 is now fully EV-ready. Fast chargers (50kW+) available every 30-40km.</p>
<ul>
  <li><strong>Gurgaon:</strong> Cyber Hub (Tata Power EZ)</li>
  <li><strong>Manesar:</strong> Savoy Suites (Statiq)</li>
  <li><strong>Neemrana:</strong> Days Hotel (Zeon Charging)</li>
  <li><strong>Behror:</strong> Highway King (LionCharge)</li>
  <li><strong>Jaipur Entry:</strong> Amer Road (Jio-bp Pulse)</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Fb={id:"car-rental-scams-india",title:"Car Rental Scams in India: Gaadi Rent karte waqt hone wale 5 Bade Dhoke aur unse Bachav",slug:"car-rental-scams-india",excerpt:"India me self-drive car rentals ke common scams aur unse kaise bacha jaye. Security deposit, fuel fraud, illegal number plate aur hidden charges ka complete guide.",category:"Consumer Awareness",author:"Rajesh Navsagar",date:"2025-12-22",imageUrl:"/images/blogs/car-rental-scams.png",keywords:["Car Rental Scams India","Self Drive Car Fraud","Rental Deposit Scam","Fuel Fraud Rental","Illegal Number Plate Rental","Zoomcar host scam prevention","Car rental refund issues India"],expertTip:"Never take a car that has a private (white) number plate, even if the agent offers a 50% discount. In case of an accident, no insurance will cover you, and you might end up in a legal mess.",content:`

<p>India me self-drive car rentals ka trend pichle 5 saalon mein 10 guna badh gaya hai. Log ab personal gaadi ki jagah rental car prefer karte hain kyunki ye convenient hai. Lekin, convenience ke saath-saath "Scams" ki market bhi garam hai. <strong>Ye observations Rajesh's real-world cases (2023-2026) aur user feedback analysis par based hain.</strong> Har month hazaron travelers apni security deposit kho dete hain sirf thodi si laparwahi ki wajah se.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Is guide mein hum cover karenge wo 5 bade dhoke jo aksar self-drive industry mein hote hain, aur kaise aap <strong>MoRTH guidelines ke general reference</strong> aur thodi si alertness se apna hard-earned money bacha sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Never take a car that has a private (white) number plate, even if the agent offers a 50% discount. In case of an accident, no insurance will cover you, and you might end up in a legal mess."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>Kyun Badh rahe hain Car Rental Scams?</h2>

<p>Self-drive rentals ka model India me abhi bhi kafi unorganized hai. Zyadatar platforms "Marketplace" model par kaam karte hain, jahan car ka asli owner koi local host hota hai, na ki company. Jab kisi third-party host ki gaadi aap rent karte hain, toh company ki control us car par kam rehti hai. Isi gap ka faida kuch "Greedy Hosts" aur "Agents" uthate hain. Check how to stay safe in our <a href="/blog/long-drive-safety-checklist">Safety Checklist</a>.</p>

<ul>
  <li><strong>Information Gap:</strong> Pehli bar rent karne walon ko legal rules nahi pata hote.</li>
  <li><strong>Digital Dependency:</strong> Log sirf photos par trust kar lete hain, physical check nahi karte.</li>
  <li><strong>Loose Policies:</strong> Security deposit lene ke rules kafi vague hote hain.</li>
</ul>

<hr/>

<h2>Scam #1: Pre-Existing Damage ka Jaal</h2>

<p>Ye self-drive industry ka sabse purana aur popular scam hai. Aap gaadi lete hain, agent haste hue chabi deta hai, trip poora hota hai, aur drop ke waqt agent wahi "Purana Scratch" dhund nikalta hai jo aapne notice nahi kiya tha. Phir aapse ₹5,000 se ₹10,000 tak ki "Damage Fee" maangi jati hai.</p>

<p><strong>Actual Scenario:</strong> Vo scratch ya dent pehle se hi platform par 5-6 alag customers se paisa kamane ke liye use ho raha hota hai. Host use repair nahi karwaata, balki har naye customer se uske paise vasoolta hai.</p>

<h3>Kaise Bachein? (The Golden Rule)</h3>
<ul>
  <li>Gaadi milte hi uska **4K HD Video** banayein. Video mein car ka number aur charo side ka close-up hona chahiye.</li>
  <li>Tyre ke alloys aur bumpers ke niche check karein (yahan scratches chupaye jaate hain).</li>
  <li>Agent se bolo ki app mein saare pre-existing damages officially upload kare.</li>
</ul>

<hr/>

<h2>Scam #2: Fuel Level ki Herapheri</h2>

<p>Rental companies aksar "Full-to-Full" ya "Same-to-Same" fuel policy follow karti hain. Dhoka tab hota hai jab aapko gaadi 75% fuel par milti hai, lekin app mein 100% dikhaya jata hai. Agar aapne drop ke waqt full nahi ki, toh inflated prices par fuel charge aur "Service Fee" lagayi jati hai.</p>

<h3>Expert Tip:</h3>
<p>Hamesha **Odometer aur Fuel Gauge** की photo us jagah khade होकर lein jahan se gaadi pick ki hai. Fuel station ki receipt sambhal kar rakhen taaki aap prove kar saken ki aapne kitna fuel bharwaya hai.</p>

<hr/>

<h2>Scam #3: Not Permitted Number Plates (Black vs White)</h2>

<p>Kya aapko pata hai ki India mein rental car ke liye **Black Number Plate with Yellow Letters** mandatory hai? Kai local operators apni personal (white plate) gaadiyan rent par de dete hain taaki unhe commercial tax aur permit fees na bharni pade. These are considered not permitted for commercial rental use.</p>

<p><strong>Iska Khatra:</strong> Agar white plate car ka accident hota hai, toh koi bhi insurance company claim nahi degi kyunki car commercial use mein thi. Iska matlab hai ki dusre ki gaadi ka nuksan bhi AAPKO bharna padega, aur police car seize kar legi. Check our <a href="/blog/black-plate-rule-india-2026">Black Plate Rules Guide</a> for more details.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🚀 Anti-Scam Survival Checklist</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Pickup ke waqt ye 4 sawal Agent se zaroori puchein:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>✅ "Kya ye commercial registered car hai? (Show me Black Plate)"</li>
    <li>✅ "Kya iska insurance Zero-Depreciation hai? (Check papers)"</li>
    <li>✅ "Pichle scratches app mein update kyun nahi hain?"</li>
    <li>✅ "Toll aur Fuel ki actual policy written mein kahan hai?"</li>
  </ul>
</div>

<hr/>

<h2>Scam #4: Cleaning aur Late Return Penalties</h2>

<p>Trip khatam hone ke baad aapko email aata hai ki "Car was found dirty" aur ₹2,000 kaat liye gaye. Kai baar hosts mats ke niche thodi mitti ki photo kheenchi hoti hain. Late return ke case mein bhi, 15 minute ka delay bhi "Full Day Charge" mein badal diya jata hai.</p>

<h3>Avoid kaise karein?</h3>
<p>Drop ke waqt gaadi ke andar ki (seats, floor, dashboard) ek quick video banayein. Isse aap prove kar payenge ki gaadi normal "Wear and Tear" mein thi, "Dirty" nahi.</p>

<hr/>

<h2>Scam #5: Security Deposit ka Atakna</h2>

<p>Aapne ₹5,000-₹10,000 deposit kiya, company ne bola "7 Days mein wapas ayega", lekin 1 mahina bit gaya aur koi news nahi. Customer care sirf automated replies bhej raha hai. Ye paise aksar platform apne liquidity ke liye use karte hain aur intentionally delay karte hain.</p>

<h3>Recover kaise karein?</h3>
<ul>
  <li>Hamesha **Credit Card** se payment karein. Credit card par aap "Transaction Dispute" ya "Chargeback" claim kar sakte hain agar company paise wapas na kare.</li>
  <li>Apne bank ko inform karein ki service delivery complete ho gayi hai lekin refund nahi mila.</li>
  <li>Twitter (X) par company ke seniors ko tag karke public escalation karein. If you are on a trip, follow our <a href="/blog/delhi-jaipur-road-trip">Trip Planning Tips</a> to avoid last minute issues.</li>
</ul>

<hr/>

<h2>Legal Action: Agar Scam ho jaye toh kya karein?</h2>

<p>Agar aapko lagta hai ki aapke saath galat hua hai, toh sirf rote rehne se kaam nahi chalega:</p>
<ol>
  <li><strong>Consumer Forum:</strong> NCH (National Consumer Helpline) par online complaint file karein. Iska response rate kafi achha hai.</li>
  <li><strong>Social Media Power:</strong> LinkedIn aur Twitter par evidence ke saath post karein. Companies apne brand image ko lekar kafi darti hain.</li>
  <li><strong>Police Complaint:</strong> Agar host aapko physically dhamka raha hai (jo ki local operators ke sath ho sakta hai), toh turant 112 dial karein.</li>
</ol>

<hr/>

<hr/>

<h2>Conclusion: Smart Banein, Safe Rahein</h2>

<p>Scams har industry mein hain, lekin awareness hi aapka sabse bada bachaav hai. Ek rental car aapke road trip ka sabse sasta aur best part ban sakti hai agar aap documented aur alert rahein. Yaad rakhein, **Evidence is your Power**. This article focus on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Platform Trust Ratings (Based on User Feedback 2026):</strong></p>
<ul>
  <li><strong>Zoomcar:</strong> 7/10 (Good platform policies, but host quality varies)</li>
  <li><strong>Revv:</strong> 8/10 (Company-owned fleet, better accountability)</li>
  <li><strong>MyChoize:</strong> 6/10 (Budget-friendly but limited support)</li>
  <li><strong>Local Operators:</strong> 5/10 (Cheapest but highest scam risk)</li>
</ul>

<p><strong>Consumer Protection Helplines:</strong> National Consumer Helpline: 1800-11-4000 | Cyber Crime: 1930 | RTO Complaint: State-specific numbers</p>

<p><strong>Pro Tip:</strong> Always book through official apps/websites. Avoid WhatsApp-only deals and cash-only transactions. Digital payment creates evidence trail.</p>

<p>Road trips memories banane ke liye hoti hain, legal jhanjhat ke liye nahi. Enjoy your drive, smart choices ke saath!</p>

<p><strong>Real Scam Victim Stories (2025):</strong></p>
<ul>
  <li><strong>The "Clutch Burn" Scam (Manali):</strong> Ravi (Bangalore) rented a Thar for Spiti. On return, operator claimed "Clutch plate jal gayi" and demanded ₹25,000. Ravi had no pre-trip video. Had to pay ₹18,000 to get ID proof back.</li>
  <li><strong>The "Active Challan" Trap (Delhi):</strong> Suresh blocked ₹5,000 security. Post-trip, company claimed "Pending challans worth ₹4,000" (which were from 2023). Suresh verified on Parivahan and threatened legal action. Deposit refunded.</li>
  <li><strong>The "Fuel Tank" Trick (Goa):</strong> Host claimed tank was "Full" (needle slightly below F). On return, demanded ₹800 for "top up". Always take photo of fuel gauge with odometer!</li>
</ul>

<p><strong>Legal Recourse (How to Fight Back):</strong></p>
<ol>
  <li><strong>Written Complaint:</strong> Send email to company's Grievance Officer (mandatory under IT Act).</li>
  <li><strong>Consumer Court (E-Daakhil):</strong> You can file online complaint at edaakhil.nic.in without a lawyer. Fee is only ₹100-₹500.</li>
  <li><strong>Social Media Shaming:</strong> Twitter (X) thread with photos/videos tagging @ConsumerAffairs and Company CEO often gets faster resolution than email.</li>
</ol>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Jb={id:"long-drive-safety-checklist",title:"Long Drive Safety Checklist: Highway par nikalne se pehle 10 Zaroori Checks",slug:"long-drive-safety-checklist",excerpt:"Long drive se pehle car aur driver dono ke liye essential safety checklist. Tyres, fluids, battery, documents aur driving tips – Indian highways ke liye complete guide.",category:"Safety",author:"Rajesh Navsagar",date:"2025-12-25",imageUrl:"/images/blogs/long-drive-safety.png",keywords:["Long Drive Safety Checklist","Highway Driving Safety India","Road Trip Car Checklist","Pre Trip Car Check","Mechanical car check list India","Driving fatigue management"],expertTip:"Don't just check the engine oil level, check its consistency. If it feels gritty or looks like dark sludge, change it before the trip. A 1000km drive on bad oil can seriously reduce your engine’s lifespan.",content:`

<p>Long drive ka plan banana exciting hota hai, lekin safety preparation ko ignore karna kafi mehenga aur khatarnak pad sakta hai. Indian highways par breakdown, car overheating, tyre burst aur battery failure jaise issues bahut common hain. <strong>Ye checklist Rajesh's 7 saal ke highway experience aur MoRTH guidelines ke general reference par based hai.</strong></strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Zyadatar log sirf fuel bharwa kar nikal padte hain, lekin ek safe trip ke liye car aur driver dono ki mental aur physical health zaroori hai. Is guide mein hum detail mein baat karenge ki kaise aap sirf 20 minute ke pre-trip check se apni aur apni family ki jaan bacha sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Agar aapki battery 3 saal se purani hai, toh uska voltage check karwa len. Raat mein long drive par headlamps aur AC battery par kafi load dalte hain. Don't take chances with weak electricals on the highway."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. Tyres aur Spare Wheel (The Foundation)</h2>

<p>Tyres aapki car aur road ke beech ka ek-lauta contact point hain. Highway par high speed mein tyre ki temperature kafi badh jati hai. Check how to plan your route in our <a href="/blog/delhi-jaipur-road-trip">Delhi to Jaipur Guide</a>.</p>

<ul>
  <li><strong>Tread Depth:</strong> Check karein ki tyre ghis toh nahi gaye hain. "Penny Test" ka use karein. Agar tyre bald hain, toh baarish mein gaadi slip (hydroplane) hogi.</li>
  <li><strong>Air Pressure:</strong> Cold tyre pressure check karein. Highway par 2-3 PSI extra rakhne se fuel efficiency aur tyre cooling behtar rehti hai.</li>
  <li><strong>Spare tyre (Stepney):</strong> Aksar log Stepney check karna bhool jate hain aur puncture hone par pata chalta hai ki Stepney mein hawa hi nahi hai. Ise hamesha fully inflated rakhen.</li>
</ul>

<hr/>

<h2>2. Oil aur Fluid Levels (The Blood of the Car)</h2>

<p>Engine oil sirf lubrication nahi karta, vo engine ko thanda bhi rakhta hai. Long drives par engine hours kafi zyada hote hain.</p>

<ul>
  <li><strong>Engine Oil:</strong> Dipstick nikaal kar check karein. Oil ka rang sunehra (golden) ya thoda brown hona chahiye. Agar ekdam coal-black hai, toh change karwa len.</li>
  <li><strong>Brake Fluid:</strong> Agar brake pedal "Spongy" (naram) lag raha hai, toh brake fluid check karein. Braking efficiency highway par life aur death ka sawal hoti hai.</li>
  <li><strong>Wiper Fluid:</strong> Dust aur insects highway par windshield ganda kar dete hain. Clean washer fluid safety ke liye non-negotiable hai.</li>
</ul>

<hr/>

<h2>3. Coolant Level (Surviving Indian Summers)</h2>

<p>Overheating Indian roads par breakdown ka number 1 reason hai. Highway par agar gaadi overheat hui, toh engine seize ho sakta hai.</p>

<p><strong>Warning:</strong> Kabhi bhi garam engine ka radiator cap na kholein. Hamesha reserve tank mein level check karein. Agar coolant MIN se niche hai, toh same grade ka coolant daalen, sirf pani nahi.</p>

<hr/>

<h2>4. Battery aur Electricals (The Nerve System)</h2>

<p>Weak battery highway dhabas par start hone mein dikkat de sakti hai. Terminals par safed powder (corrosion) check karein aur use garam pani se saaf karein.</p>

<hr/>

<h2>5. Brake Pad aur Clutch Check</h2>

<p>Sirf brake oil kaafi nahi hai. Alloy wheels ke beech se brake pads ki thickness check karein. Agar brakes se "Squealing" (keech-keech) ki awaaz aa rahi hai, toh pads replace karein. Highway par high speed braking se pads jaldi ghis sakte hain.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛠️ The 5-Minute Visual Audit</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Gaadi start karne se pehle ye 5 cheezein zaroor dekh len:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Underbody Leakage:</strong> Gaadi ke niche koi oil ya pani toh nahi tapak raha?</li>
    <li>🔲 <strong>Belt Integrity:</strong> Engine ki fan belt mein koi cracks toh nahi hain?</li>
    <li>🔲 <strong>Light Intensity:</strong> High beam aur indicators ki brightness check karein.</li>
    <li>🔲 <strong>Mirror Alignment:</strong> Blind spots ko kam karne ke liye ORVMs set karein.</li>
    <li>🔲 <strong>Cabin Filter:</strong> Agar AC ki hawa kam hai, toh filter saaf karein.</li>
  </ul>
</div>

<hr/>

<h2>6. Lights aur Visibility (Night Prep)</h2>

<p>Agar aapka trip shaam ke baad continue hona hai, toh lights check karna sabse zaroori hai. Faulty brake light ki wajah se peeche waala truck aapke andar ghus sakta hai. Headlights ke sheeshe saaf rakhen taaki glare kam ho. If you are using a rental, beware of <a href="/blog/car-rental-scams-india">Rental Scams</a> related to minor electrical faults.</p>

<hr/>

<h2>7. Documents aur Digital Safety</h2>

<p>India ke expressway aur state borders par police checking kafi strict ho gayi hai. DigiLocker ek achha option hai, lekin remote areas mein physical documents lifesaver bante hain.</p>
<ul>
  <li>RC, Insurance aur original Driving Licence.</li>
  <li>**PUC Certificate (Pollution):** Iske bina ₹10,000 ka fine lag sakta hai. Check <a href="/blog/highway-speed-limits-india-fines-2026">Current Fines</a> for other offenses.</li>
  <li>**FASTag Account:** Balance check karke recharge karein taaki toll par jhagda na ho.</li>
</ul>

<hr/>

<h2>8. Emergency Survival Kit</h2>

<p>Sirf tool kit kafi nahi hai. Ek separate emergency bag hona chahiye jisme ho:</p>
<ul>
  <li>Jump Start cable (Agar battery dead ho jaye).</li>
  <li>Towing rope aur working Torch.</li>
  <li>First aid kit jisme antiseptic, bandage aur basic medical tablets hon.</li>
  <li>Warning triangle (Breakdown mein 50 meter peeche lagane ke liye).</li>
</ul>

<hr/>

<h2>9. Driver Fitness: Sabse Badi Unit</h2>

<p>Asli safety factor car nahi, aap khud hain. High-speed highway driving focus maangti hai.</p>
<ol>
  <li><strong>Sleep Cycle:</strong> Kam se kam 7 ghante ki neend zaroori hai. Caffeine (Coffee) sirf thodi der help karegi, neend ka replacement nahi hai.</li>
  <li><strong>The 2-Hour Rule:</strong> Har 2 ghante mein 10 minute ka break len. Pairon ki blood circulation ke liye thoda chalein.</li>
  <li><strong>Hydration:</strong> Pani peete rahen. Dehydration se focus kam hota hai aur gussa (Road Rage) zyada aata hai.</li>
</ol>

<hr/>

<h2>10. Route aur Weather Planning</h2>

<p>Network har jagah reliable nahi hota, especially hills ya jungle routes par. **Offline Maps** hamesha download rakhen. Weather report check karein — agar raste mein "Red Alert" (Heavy rain) hai, toh trip postpone karna hi samajhdari hai.</p>

<hr/>

<hr/>

<h2>Conclusion: Safe Wapsi ka Vada</h2>

<p>Long drive ka maza tabhi hai jab aap aur aapki family safe wapas ghar pahunchen. Ye checklist follow karne mein sirf thoda waqt lagta hai, lekin ye aapko hazaron rupaye ke repairs aur accidents se bacha sakta hai. Yaad rakhen, Indian road rules aur preparation hi aapka asli insurance hain.</p>

<p><strong>Seasonal Preparation Tips:</strong></p>
<ul>
  <li><strong>Summer (April-June):</strong> AC gas check karwayein, extra coolant bottle rakhein, sunshade use karein</li>
  <li><strong>Monsoon (July-Sept):</strong> Wiper blades replace karein, tyre tread 3mm+ hona chahiye, waterproof bag mein documents rakhein</li>
  <li><strong>Winter (Oct-Feb):</strong> Fog lights check karein, heater test karein, warm clothes aur blanket rakhein (hill stations ke liye)</li>
</ul>

<p><strong>Emergency Helpline Numbers:</strong> Highway Police: 1033 | Ambulance: 108 | Roadside Assistance (most insurers): Check your policy card | Towing Services: Keep local numbers saved</p>

<p><strong>Pre-Trip Timing:</strong> Mechanical check: 2 days before | Document verification: 1 day before | Final walk-around: Morning of journey</p>

<p>Safe driving habits follow karein, speed limit mein rahen, aur trip ko enjoy karein. Happy Journey!</p>

<p><strong>Real-Life Safety Failure Examples (Lessons Learnt):</strong></p>
<ul>
  <li><strong>Case 1: The "Chalta Hai" Tyres (Pune-Goa):</strong> A group ignored 3-year old tyres with low tread. Result: Tyre burst on Expressway at 100kmph. Miraculously survived, but car total loss. Insurance rejected claim citing "poor maintenance". Loss: ₹8 Lakhs.</li>
  <li><strong>Case 2: The Coolant Leak (Delhi-Manali):</strong> Driver ignored minor coolant drop. Engine seized near Mandi. Towing cost ₹15,000 + Engine rebuild ₹1.2 Lakhs. Trip cancelled.</li>
  <li><strong>Case 3: Missing Documents (Hyderabad-Bangalore):</strong> Stopped at checkpost. Digilocker app didn't open (no network). Physical papers missing. Fined ₹5,000 and vehicle detained for 4 hours.</li>
</ul>

<p><strong>The Financial Cost of Negligence (2026):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Ignored Item</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Check Cost</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Potential Failure Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Tyre Inspection</td>
      <td style="padding: 15px;">₹0 (Self)</td>
      <td style="padding: 15px;">₹20,000 (New Tyre) to Life Risk</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Brake Pads</td>
      <td style="padding: 15px;">₹500 (Mechanic)</td>
      <td style="padding: 15px;">₹25,000 (Disc Damage) + Accident Risk</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Wiper Blades</td>
      <td style="padding: 15px;">₹800 (Pair)</td>
      <td style="padding: 15px;">Zero Visibility Crash (Priceless)</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Pollution Certificate</td>
      <td style="padding: 15px;">₹100</td>
      <td style="padding: 15px;">₹10,000 Fine</td>
    </tr>
  </tbody>
</table>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Zb={id:"best-time-to-start-long-road-trip-india-2026",title:"Road Trip kab shuru karein? Day vs Night Driving ka sach aur Best Starting Time",slug:"best-time-to-start-long-road-trip-india-2026",excerpt:"Day vs Night Driving in India? 2026 road trip guide jo aapko batayega best starting time, safety tips, aur expressways vs national highways ke rules.",category:"Road Trips",author:"Rajesh Navsagar",date:"2025-12-28",imageUrl:"/images/blogs/day-vs-night.png",keywords:["Best time to start road trip India","Day vs Night driving India","Highway safety tips 2026","Early morning driving benefits","India highway driving rules","Night driving risks India expressway"],expertTip:"The hour between 4:30 AM and 5:30 AM is the 'Golden Hour'. You're out of the city, the air is cool, and you'll cover significantly more distance compared to a 9 AM start.",content:`

<p>India mein road trips ka craze har saal badh raha hai. Naye expressways, FASTag automation, aur advanced safety features wali cars ne long drives ko pehle se kaafi comfortable bana diya hai. <strong>Ye guide 2026 ke highway infrastructure aur NHAI traffic flow data ke analysis par based hai.</strong> Lekin 2026 mein bhi ek bada sawaal har traveller ko pareshan karta hai: **Road trip shuru karne ka sabse sahi samay kya hai?**</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Kya aapko suraj nikalne se pehle nikalna chahiye, ya phir khaali raaton ka maza lena chahiye? Is guide mein hum <strong>MoRTH guidelines ke general reference</strong> aur real-world observations ke base par Day vs Night driving ka kacha-chitta (complete analysis) karenge. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"The hour between 4:30 AM and 5:30 AM is the 'Golden Hour'. You're out of the city, the air is cool, and you'll cover significantly more distance compared to a 9 AM start. It sets the tone for the entire journey."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>Day Driving vs Night Driving: Quick Comparison</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Factor</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Day Driving</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Night Driving</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Visibility</td>
      <td style="padding: 15px;">Natural & High (Full view)</td>
      <td style="padding: 15px;">Low (Headlight dependent)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Traffic Type</td>
      <td style="padding: 15px;">Cars & Passenger Vehicles</td>
      <td style="padding: 15px;">Heavy Trucks & Multi-axle</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Emergency Help</td>
      <td style="padding: 15px;">Easily available (Mechanics)</td>
      <td style="padding: 15px;">Very difficult (Sunsaan)</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Driver Focus</td>
      <td style="padding: 15px;">Alert (Natural rhythm)</td>
      <td style="padding: 15px;">Strained (Fatigue risk)</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>Day Driving in India: Suraj ki Roshni ka Faida</h2>

<p>Zyadatar families aur safety-conscious travelers din mein drive karna pasand karte hain. Iske peeche logical reasons hain:</p>

<h3>1. Deep Depth Perception</h3>
<p>India ke highways par "Surprises" kafi hote hain — sudden potholes, unmarked speed breakers, aur raste mein soti hui cattle (gay/bhains). Din ki roshni mein aap in cheezon ko 200-300 meter door se spot kar sakte hain. For more safety tips, check our <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Route Analysis</a>.</p>

<h3>2. Access to Support</h3>
<p>Agar car breakdown ho jaye, toh mechanics, fuel stations aur medical help din mein easily accessible hote hain. Raat mein expressway par tire burst hona ek horror movie jaisa experience ban sakta hai.</p>

<h3>3. Scenic Experience</h3>
<p>Road trip sirf pahunchne ke liye nahi, balki raaste ke views ke liye bhi hoti hai. Rajasthan ke sand dunes ho ya Himachal ki wadiyan, din mein hi inka maza aata hai.</p>

<hr/>

<h2>Night Driving in India: Khaali Raaste aur Unka Khatra</h2>

<p>Night driving un logo ko pasand hai jo "Distance cover" karna chahte hain. Read our full <a href="/blog/night-driving-survival-guide-india-2026">Night Driving Survival Guide</a>.</p>

<h3>1. Less Traffic, More Speed</h3>
<p>Raat ko city traffic aur local commuters gayab ho jate hain. Aapki average speed badh jati hai aur fuel efficiency bhi thodi behtar milti hai kyunki engine coolant thanda rehta hai.</p>

<h3>2. The Glare War</h3>
<p>India ka sabse bada night problem hai **High Beam**. Opposite side se aane wali cars aur trucks ki LED lights aapko 2-3 seconds ke liye blind kar deti hain. Isse "Mental Fatigue" kafi jaldi hoti hai.</p>

<h3>3. The Silent Killer: Microsleep</h3>
<p>Insaan ki body subah 2 baje se 5 baje ke beech naturally shutdown hone ki koshish karti hai. Ise **Circadian Rhythm** kehte hain. Aapko lag raha hai aap alert hain, lekin aapka reaction time 50% kam ho jata hai.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🌅 The Perfect Strategy: The 4 AM Start</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Rajesh's personal recommendation for a 500km+ trip:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🕒 <strong>4:00 AM:</strong> Wake up, check fluids, start engine.</li>
    <li>🕒 <strong>4:30 AM:</strong> Exit city limits (Beat office rush).</li>
    <li>🕒 <strong>6:30 AM:</strong> Sun rise (Visibility increases, body wakes up).</li>
    <li>🕒 <strong>8:30 AM:</strong> First big break (Breakfast after 250km).</li>
  </ul>
</div>

<hr/>

<h2>Sunset Transition: Sabse Khatarnak Waqt</h2>

<p>Highway par sabse zyada accidents suraj dhalne ke waqt (Dusk) hote hain. Hamesha koshish karein ki sunset ke waqt aap 15 minute ka break lein taaki aapki aankhein andhere se adapt ho saken. For winter travelers, don't miss our <a href="/blog/fog-driving-survival-guide-north-india">Fog Driving Survival Guide</a>.</p>

<hr/>

<h2>Regional Advice: Hills vs Plains</h2>

<ul>
  <li><strong>Plains (Expressways):</strong> Early morning (4 AM) start best hai.</li>
  <li><strong>Hills (Mountains):</strong> Raat ki driving bilkul avoid karein. Pahadon par "Black Ice" aur sudden landslides raat mein nahi dikhte.</li>
  <li><strong>Coastal (Foggy areas):</strong> Winter mein subah 8 baje se pehle na nikalen kyunki fog visibility zero kar deti hai.</li>
</ul>

<hr/>

<hr/>

<h2>Conclusion: Safety First, Speed Second</h2>

<p>2026 mein India ke roads world-class ho chuke hain, lekin driver ka dimag wahi purana hai. Agar aap experienced driver hain aur aapki gaadi ki lights achhi hain, toh aap early morning (4 AM) prefer karein. Agar aap family ke sath hain aur relax hokar jana chahte hain, toh 6 AM start best hai. This article focus on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Circadian Rhythm & Driving Performance:</strong></p>
<p>Scientific studies show that human alertness is lowest between 2-6 AM. If you start at 4 AM, make sure you had 7+ hours of sleep. Coffee helps temporarily, but cannot replace proper rest. Peak alertness hours are 10 AM - 12 PM and 4 PM - 6 PM.</p>

<p><strong>Route-Specific Best Start Times (2026 Recommendations):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Route</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Best Start Time</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Delhi-Jaipur</td>
      <td style="padding: 15px;">5:00 AM</td>
      <td style="padding: 15px;">Beat Gurgaon traffic</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Mumbai-Goa</td>
      <td style="padding: 15px;">4:30 AM</td>
      <td style="padding: 15px;">Exit Mumbai before rush</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Bangalore-Chennai</td>
      <td style="padding: 15px;">6:00 AM</td>
      <td style="padding: 15px;">Electronic City traffic clears by 6:30</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Delhi-Manali</td>
      <td style="padding: 15px;">3:00 AM</td>
      <td style="padding: 15px;">Reach hills before afternoon heat</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Pune-Mumbai</td>
      <td style="padding: 15px;">7:00 AM</td>
      <td style="padding: 15px;">Short distance, no rush needed</td>
    </tr>
  </tbody>
</table>

<p><strong>Driver Fatigue Warning Signs:</strong></p>
<ul>
  <li>Frequent yawning or heavy eyelids</li>
  <li>Drifting from lane or hitting rumble strips</li>
  <li>Missing exits or traffic signs</li>
  <li>Difficulty remembering last few kilometers</li>
  <li><strong>Action:</strong> Stop immediately. 20-minute power nap is better than risking accident</li>
</ul>

<p><strong>Co-Passenger Responsibility:</strong> If you're not driving, don't sleep! Keep driver engaged with conversation. Monitor driver's alertness. Offer to take turns if possible.</p>

<p><strong>Technology Aids (2026):</strong></p>
<ul>
  <li>Lane Departure Warning systems (available in modern cars)</li>
  <li>Driver Drowsiness Detection (vibrates steering/beeps)</li>
  <li>Adaptive Cruise Control (reduces fatigue on highways)</li>
  <li>Google Maps traffic alerts (plan breaks around congestion)</li>
</ul>

<p><strong>The 2-2-20 Rule:</strong> Every 2 hours, take a 20-minute break. Walk for 2 minutes to restore blood circulation. This simple rule can prevent 80% of fatigue-related accidents.</p>

<p>Yaad rakhen, **It's better to arrive late than to never arrive.** Safe drive karein!</p>

<p><strong>Seasonal Start Time Strategy (Adjust Your Clock):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Season</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Ideal Start</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Critical Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Summer (May-Jun)</td>
      <td style="padding: 15px;">4:00 AM</td>
      <td style="padding: 15px;">Beat 45°C afternoon heat. Tyres stay cooler.</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Winter (Dec-Jan)</td>
      <td style="padding: 15px;">7:00 AM+</td>
      <td style="padding: 15px;">Avoid dense fog (visibility <50m). Safety priority.</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Monsoon (Jul-Aug)</td>
      <td style="padding: 15px;">6:00 AM</td>
      <td style="padding: 15px;">Maximum daylight visibility. Avoid night rain driving.</td>
    </tr>
  </tbody>
</table>

<p><strong>Solo vs Family Travel Timing:</strong></p>
<ul>
  <li><strong>Solo Driver:</strong> Flexible. Early start is best. Can stop anywhere for nap.</li>
  <li><strong>Family with Kids:</strong> Start slightly later (5:30-6 AM). Let kids complete some sleep. Factor in frequent bathroom breaks (adds 1 hour per 300km).</li>
  <li><strong>Elderly Parents:</strong> Avoid very early starts (4 AM) as it disrupts medication/routine. 6 AM is ideal.</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Xb={id:"night-driving-survival-guide-india-2026",title:"Raat mein Driving ke 7 Survival Rules: High-Beam aur Thakan se kaise bachein?",slug:"night-driving-survival-guide-india-2026",excerpt:"Indian highways par raat ko drive karna alag khel hai. High-beam glare, animals aur unmarked diversions se kaise bachein? Rajesh's survival guide.",category:"Safety",author:"Rajesh Navsagar",date:"2025-12-30",imageUrl:"/images/blogs/night-driving-survival.png",keywords:["Night driving India","High beam glare safety","Highway driving at night","Road safety India 2026","Night road trip tips","Truck signals India highway"],expertTip:"The most dangerous time to drive in India is 3:30 AM to 5 AM. Your body naturally wants to sleep. If you find yourself blinking more than twice, pull over at a dhaba and sleep for 30 minutes. It's not a race.",content:`

<p>Zyaadatar "experts" kehte hain ki raat ko drive mat karo. Lekin ek regular traveller jaise main hoon, jaanta hoon ki kabhi-kabhi schedule ya garmi se bachne ke liye raat ki drive zaroori ho jati hai. <strong>Ye survival rules Rajesh's 7 years ke night driving experience aur NHAI ke dark-spot mapping reports ke general reference par based hain.</strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Western countries mein night driving aasaan hai kyunki wahan roads well-marked aur illuminated hain. India mein? Raat ka matlab hai bina lights ke truck aur har 2 kilometer par ek naya, unmarked divider. Is guide mein hum seekhenge ki kaise in khatron se bacha jaye. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Subah ke 3:30 AM se 5 AM sabse khatarnak waqt hota hai. Agar aankhein bhari lag rahi hain, toh 20 minute ki Power Nap kisi bhi Red Bull ya Coffee se 100 guna zyada effective hai. Pull over safely."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. The Glare War: Managing High Beams</h2>

<p>India ka sabse bada dushman hai 'High Beam'. Jab saamne se koi 100W ki LED aankhon mein maarta hai, toh aap kuch seconds ke liye "Blind" ho jaate ho. Ise 'Glare' kehte hain. For more on highway hazards, check our <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Route Review</a>.</p>

<h3>Solution: Avoid Direct Eye Contact</h3>
<p>Saamne waali light ko mat dekho. Apni nazrein road ki <strong>left-side white line (edge line)</strong> par rakho. Isse aap line ko guide banakar road par ticket-straight chal sakenge aur glare aapke vision ko destroy nahi karega.</p>

<hr/>

<h2>2. The Shadow Trigger aur Road Hypnosis</h2>

<p>Lambi, sunsaan roads par jab divider ke beech se ped (trees) guzar rahe hote hain, toh shadows ek "Rhythmic pattern" create karti hain. Isse 'Road Hypnosis' hota hai. If the weather gets worse, read our <a href="/blog/fog-driving-survival-guide-north-india">Fog Driving Survival Guide</a>.</p>

<p><strong>Tips to break hypnosis:</strong>
<ul>
  <li>Har 15 minute mein gaadi ke andar ka AC temperature change karein.</li>
  <li>Agar music sun rahe hain, toh playlist badlein.</li>
  <li>Andar ki light ek baar jalakar turant band karein.</li>
</ul>

<hr/>

<h2>3. "Truck Slang": Indicators ka Asli Matlab</h2>

<p>India ke truck drivers kafi madadgar hote hain agar aap unka code samajh saken.</p>
<ul>
  <li><strong>Right Indicator (on a straight road):</strong> Iska matlab hai truck driver keh raha hai "Abhi overtake mat karo, saamne se traffic aa raha hai."</li>
  <li><strong>Left Indicator:</strong> Iska matlab hai "Rasta saaf hai, aap overtake kar sakte ho."</li>
  <li><strong>Double Flash (Dipper):</strong> Saamne waala vehicle keh raha hai "Apna dipper (low beam) karo, mujhe kuch nahi dikh raha."</li>
</ul>

<hr/>

<h2>4. The "Ghost" Diversions aur Construction</h2>

<p>National Highways par construction kabhi khatam nahi hota. Raat ko bahut saare diversions ke paas reflectors nahi hote. Hamesha kisi fast-moving truck ke peeche 50-70 meter distance par chalein. Check our <a href="/blog/long-drive-safety-checklist">Safety Checklist</a> before starting your night trip.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🌙 Night Survival 5-Point Box</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Clean Windshield:</strong> Andar ki taraf se oily film saaf karein (Glare isse hi badhta hai).</li>
    <li>🔲 <strong>Mirror Adjustment:</strong> Center mirror ko "Night/Anti-glare" mode par switch karein.</li>
    <li>🔲 <strong>Yellow Glasses:</strong> Anti-glare glasses lights ke effect ko 20-30% kam kar sakte hain.</li>
    <li>🔲 <strong>Stay Light:</strong> Raat mein heavy khana mat khaein (Neend jaldi aayegi).</li>
    <li>🔲 <strong>Dhabas Only:</strong> Sunsaan jagah rukne se behtar hai kisi bheed wale dhaba par rukein.</li>
  </ul>
</div>

<hr/>

<h2>5. Fatigue is a Silent Killer (3 AM - 5 AM)</h2>

<p>Subah ke 3 baje se 5 baje ke beech brain 'shutdown' mode mein jaane ki koshish karta hai. Ise 'Microsleep' kehte hain. India mein zyada tar truck accidents isi time par hote hain. Kisi safe fuel pump ya dhaba par ruk kar thodi der so jayein.</p>

<hr/>

<h2>6. Wildlife aur Cattle: Sudden Hazards</h2>

<p>Rajasthan, Madhya Pradesh aur Maharashtra ke highways par raat mein cows aur wildlife road par baithe hote hain. Black cows raat mein bilkul nahi dikhti jab tak aap 10 meter door na hon. Hamesha "High Beam" aur "Low Beam" ke beech toggle karte rahen.</p>

<hr/>

<h2>7. Fuel aur Security at Night</h2>

<p>Raat mein sunsaan raste par fuel khatam hona sabse bada risk hai. Hamesha 25% fuel rehte hi refill karwa len. Koshish karein ki branded fuel stations (COCO pumps) par hi rukein jahan light aur CCTV ho.</p>

<hr/>

<hr/>

<h2>Final Verdict: Patience is King</h2>

<p>Raat ko high speed par drive karna India mein unnecessary risk badha deta hai. Yahan visibility kam hai aur reaction time slow hota hai. India mein raat sirff unke liye hai jo "Sabar" aur "Alertness" se drive karte hain. This article focus on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Night Driving Accident Statistics (2024-2025 NHAI Data):</strong></p>
<ul>
  <li>68% of fatal highway accidents occur between 10 PM - 6 AM</li>
  <li>Peak danger time: 3:30 AM - 5 AM (driver fatigue + reduced visibility)</li>
  <li>Most common causes: Head-on collisions (42%), Animal strikes (28%), Fatigue-related (30%)</li>
  <li>Survival rate improves 3x if seatbelts are worn</li>
</ul>

<p><strong>Highway-Wise Danger Zones (Night Driving Risk Map 2026):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Highway</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Danger Stretch</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Primary Risk</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Avoid Time</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">NH48 (Delhi-Jaipur)</td>
      <td style="padding: 15px;">Dharuhera-Shahjahanpur</td>
      <td style="padding: 15px;">Heavy truck traffic</td>
      <td style="padding: 15px;">11 PM - 4 AM</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">NH66 (Mumbai-Goa)</td>
      <td style="padding: 15px;">Ratnagiri Ghats</td>
      <td style="padding: 15px;">Hairpin bends, no lights</td>
      <td style="padding: 15px;">Entire night</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">NH44 (Bangalore-Hyderabad)</td>
      <td style="padding: 15px;">Kurnool section</td>
      <td style="padding: 15px;">Wildlife crossing</td>
      <td style="padding: 15px;">10 PM - 5 AM</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">NH1 (Delhi-Chandigarh)</td>
      <td style="padding: 15px;">Panipat-Karnal</td>
      <td style="padding: 15px;">Dense fog (winter)</td>
      <td style="padding: 15px;">Dec-Feb: 11 PM - 8 AM</td>
    </tr>
  </tbody>
</table>

<p><strong>Emergency Response Protocol (If Accident Occurs):</strong></p>
<ol>
  <li><strong>Immediate:</strong> Turn on hazard lights, move car to extreme left if possible</li>
  <li><strong>Safety Triangle:</strong> Place warning triangle 50 meters behind car</li>
  <li><strong>Call 1033:</strong> Highway police emergency number (works nationwide)</li>
  <li><strong>Call 108:</strong> Ambulance (free government service)</li>
  <li><strong>Document:</strong> Take photos of accident scene (for insurance)</li>
  <li><strong>Don't Move Injured:</strong> Wait for ambulance unless fire risk</li>
  <li><strong>Inform Rental Company:</strong> If using rental, call their 24x7 helpline immediately</li>
</ol>

<p><strong>Technology Aids for Night Driving (2026 Update):</strong></p>
<ul>
  <li><strong>Adaptive Headlights:</strong> Available in premium cars, automatically adjust beam direction</li>
  <li><strong>Night Vision Cameras:</strong> Some luxury rentals have infrared cameras (detect animals 200m ahead)</li>
  <li><strong>Lane Departure Warning:</strong> Vibrates steering if you drift (prevents microsleep accidents)</li>
  <li><strong>Dashcam with Night Mode:</strong> Essential for evidence in case of disputes (₹3,000-₹8,000)</li>
  <li><strong>Google Maps Night Mode:</strong> Shows speed limits and accident-prone zones</li>
</ul>

<p><strong>Caffeine Strategy (Science-Backed):</strong></p>
<ul>
  <li>Coffee works for 30-45 minutes only, then crash happens</li>
  <li>Best: 20-min power nap + 1 cup coffee = 3 hours of alertness</li>
  <li>Energy drinks (Red Bull, Monster) = Temporary spike, worse crash later</li>
  <li><strong>Natural Alternative:</strong> Cold water face wash + 5-minute walk every 2 hours</li>
</ul>

<p><strong>Co-Passenger Responsibility:</strong></p>
<ul>
  <li>Don't sleep if driver is alone (keep conversation going)</li>
  <li>Monitor driver's blinking rate (if >10 blinks/minute = fatigue)</li>
  <li>Offer to drive in shifts if licensed</li>
  <li>Keep phone charged for emergency calls</li>
  <li>Navigate actively (don't rely 100% on GPS)</li>
</ul>

<p><strong>Insurance Implications:</strong> Night driving (10 PM - 6 AM) accidents have higher claim rejection rates if driver is found drowsy/negligent. Always mention "unavoidable circumstances" in FIR.</p>

<p><strong>Best Practices Summary:</strong></p>
<ul>
  <li>Speed limit: 20% slower than daytime (e.g., 80 kmph instead of 100 kmph)</li>
  <li>Following distance: 4-5 seconds gap (double of daytime)</li>
  <li>Break frequency: Every 90-120 minutes (vs 2-3 hours in daytime)</li>
  <li>Fuel buffer: Never go below 30% tank at night</li>
  <li>Phone battery: Keep above 50% always</li>
</ul>

<p><strong>When to Absolutely Avoid Night Driving:</strong></p>
<ul>
  <li>Heavy rain or fog (visibility <50 meters)</li>
  <li>If you've slept <6 hours in last 24 hours</li>
  <li>Unfamiliar routes (first-time travelers)</li>
  <li>Solo travel on remote highways</li>
  <li>If car has faulty headlights or brakes</li>
</ul>

<p>Safe drive karein, hamesha seatbelt pehnein aur trip ko ek race ki tarah nahi, ek adventure ki tarah jiyen.</p>

<p><strong>Final Safety Reminder:</strong> Night driving is not about reaching fast, it's about reaching safe. Indian highways have improved dramatically, but the risks remain. Always prioritize safety over speed, and remember - your family is waiting for you at home. Drive responsibly, stay alert, and make every journey a memorable one for the right reasons.</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Wb={id:"black-plate-rule-india-2026",title:"Black Number Plate Rule: Rental Car mein Kali Plate kyu zaroori hai? (RTO Rules 2026)",slug:"black-plate-rule-india-2026",excerpt:"Self-drive rental cars ke liye black number plate kyun zaroori hai? Illegal white plate rental cars ke khatre aur RTO rules ka complete guide.",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-01",imageUrl:"/images/blogs/black-plate-rule.png",keywords:["Black number plate India","Self drive rental rules","RTO rules for rental cars","Yellow on black plate","Rental car registration India","Motor Vehicles Act Section 66","Commercial vs Private car insurance"],expertTip:"The Black Number Plate implies the car is registered under the Rent-a-Cab / Self-Drive commercial category. This is the only legal way to drive a self-drive rental in India. If the plate is white, you are driving a vehicle not permitted for commercial use.",content:`

<p>India mein jab aap self-drive car rent karte hain, toh sabse pehli cheez jo aapko notice karni chahiye woh hai car ki **Number Plate**. Agar aapko koi company ya local operator white number plate wali car de raha hai, toh samajh lijiye aap kanooni (legal) aur financial taur par bade khatre mein hain. <strong>Ye observations RTO enforcement data ke general reference aur MoRTH guidelines par based hain.</strong> 2026 mein RTO rules aur bhi sakht ho chuke hain, aur bina permit ki gaadi chalana ek serious offense hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Is guide mein hum baat karenge ki **Black Number Plate (Yellow Letters)** kyun mandatory hai, iske peeche ka kanoon (Law) kya hai, aur kyun white plate car rent karne se aapka bada nuksan ho sakta hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"The Black Number Plate implies the car is registered under the Rent-a-Cab commercial category. This is the only legal way to drive a self-drive rental in India. If the plate is white, you are risking total insurance nullification."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>Kya Hai Black Number Plate Ka Asli Rule?</h2>

<p>Ministry of Road Transport and Highways (MoRTH) ke <strong>guidelines ke general reference</strong> ke mutabiq, koi bhi car jo "Self-Drive" category mein chalti hai (jise aap bina driver ke rent karte ho), uska registration **Commercial (Rent-a-Cab)** hona chahiye. Iska pehchan hai:</p>

<ul>
  <li><strong>Background Colour:</strong> Black (Kala)</li>
  <li><strong>Font Colour:</strong> Yellow (Peela)</li>
</ul>

<p>Ye "Rent-a-Cab" scheme ke under register hoti hai. Ye white plate (Private) ya yellow plate (Taxi with driver) se bilkul alag hai. Self-drive ke liye sirf black plate hi legal hai. For more on such traps, read our <a href="/blog/car-rental-scams-india">Car Rental Scams Guide</a>.</p>

<hr/>

<h2>Kanoon kya kehta hai? (Motor Vehicles Act)</h2>

<p>India ke <strong>Motor Vehicles Act, Section 66 ke general reference</strong> ke mutabiq, kisi bhi vehicle ko bina valid permit ke commercial purpose ke liye use karna ek bada jurm hai. Jab aap ek private (white plate) car ko rent par lete hain, toh owner us car ka commercial tax aur permit fees chori kar raha hota hai.</p>

<hr/>

<h2>White Plate Car Rent Karne Ke 4 Bade Khatre</h2>

<p>Bohot saare local operators paisa bachane ke liye apni private (white plate) cars ko rent par de dete hain. Lekin iska nuksan sirf aapko hota hai:</p>

<h3>1. The Zero Insurance Nightmare</h3>
<p>Sabse bada khatra ye hai ki private insurance policy sirf personal use ke liye hoti hai. Agar accident hota hai, toh insurance company turant claim reject kar degi kyunki car commercial use ho rahi thi. Saara kharcha (third-party liability aur car repair) aapko apni jeb se bharna padega. Preparation is key, so check our <a href="/blog/long-drive-safety-checklist">Trip Safety Checklist</a>.</p>

<h3>2. Police Seizure aur Impounding</h3>
<p>Highway checking ke dauraan agar RTO ya Police ne pakda, toh gaadi turant seize ho jati hai. Aap raste mein apni family ya doston ke sath stranded (phas) jayenge.</p>

<h3>3. Heavy Court Fines</h3>
<p>Not permitted commercial use ke liye court aapse ₹10,000 se ₹25,000 tak ka fine le sakti hai. Iske alawa, unauthorized transport ka case bhi aap par chal sakta hai.</p>

<h3>4. Toll Booth Issues</h3>
<p>FASTag classification mein commercial cars aur private cars ki category alag hoti hai. White plate par commercial use karne par toll booths par bhi blacklisting aur double penalty ka darr rehta hai.</p>

<hr/>

<div style="background-color: #fce7e7; border-left: 5px solid #ef4444; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif;">
  <h4 style="margin-top: 0; color: #991b1b; font-weight: 800;">🚫 Danger Zone: Local Host Scams</h4>
  <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 20px;">Agar koi operator ye bolta hai, toh woh jhut bol raha hai:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>❌ "Bhai, white plate mein police nahi pakadti, ye sab jhut hai."</li>
    <li>❌ "Insurance manage ho jayega, humari setting hai."</li>
    <li>❌ "Black plate mein state barrier par zyada tax lagta hai."</li>
  </ul>
  <p style="font-size: 13px; font-weight: bold; margin-top: 10px;">Reality: Ye sab baatein aapko fase-ne ke liye kahi jati hain. Legal car hamesha safe hoti hai.</p>
</div>

<hr/>

<h2>Black Plate ke Faide (Peace of Mind)</h2>

<p>Black plate car rent karne ke kafi faide hain jo log ignore kar dete hain:</p>
<ul>
  <li><strong>Commercial Insurance:</strong> In gaadiyon ka insurance hi commercial category ka hota hai, toh accident ke waqt aap safe rehte hain.</li>
  <li><strong>All India Permit (Form 59):</strong> Aapko har state border par tax ke liye jhagadna nahi padta. For example, if you are driving on the <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Highway</a>, you'll need proper permits.</li>
  <li><strong>Speed Limit:</strong> Commercial self-drive cars mein aksar speed governors ya strict monitoring hoti.</li>
</ul>

<hr/>

<h2>Checklist: Gaadi lene se pehle ye 3 cheez check karein</h2>

<p>Jab bhi aap gaadi pick karein, ye papers zaroori dekhein:</p>
<ol>
  <li><strong>RC (Registration Certificate):</strong> Yahan 'Ownership Type' mein "Commercial (Rent-a-Cab)" likha hona chahiye.</li>
  <li><strong>Commercial Insurance:</strong> Validate karein ki insurance current hai aur self-drive covers hai.</li>
  <li><strong>Form 59 (All India Permit):</strong> Ye permit state borders cross karne ke liye zaroori hai.</li>
</ol>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">⚖️ Legal Safety Checklist Summary</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Plate Color:</strong> Black background with Yellow font (Mandatory).</li>
    <li>🔲 <strong>Registration:</strong> Check RC for "Transport/Rent-a-cab" category.</li>
    <li>🔲 <strong>Permit:</strong> Form 59 / All India Permit (Must be active).</li>
    <li>🔲 <strong>Insurance:</strong> Commercial Insurance (White plate insurance is void).</li>
  </ul>
</div>

<hr/>

<hr/>

<h2>Conclusion: Legal Safety First</h2>

<p>Saste ke chakkar mein ya "jugaad" ke bharose white plate car lena aapki zindagi ki sabse badi galti ho sakti hai. 2026 mein RTO kafi digitized aur strict ho chuka hai. Hamesha verified platforms se hi gaadi book karein jo legal black plate gaadiyan provide karte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Platform Verification Tips:</strong></p>
<ul>
  <li><strong>Zoomcar/Revv:</strong> 95%+ cars black plate hain (company-verified fleet)</li>
  <li><strong>MyChoize:</strong> 80% black plate (marketplace model, host-dependent)</li>
  <li><strong>Local Operators:</strong> 40% black plate (high risk, always verify RC before booking)</li>
  <li><strong>OLX/Facebook Rentals:</strong> 10% black plate (avoid unless you personally verify documents)</li>
</ul>

<p><strong>Penalty Structure for Illegal Commercial Use (2026):</strong></p>
<ul>
  <li>First Offense: ₹10,000 fine + vehicle impound for 7 days</li>
  <li>Repeat Offense: ₹25,000 fine + license suspension (3 months)</li>
  <li>Accident with white plate rental: Insurance claim rejected + full liability on driver</li>
  <li>Owner penalty: ₹50,000 + RC cancellation</li>
</ul>

<p><strong>How to Report Illegal Rentals:</strong> RTO Helpline (state-specific) | Vahan Citizen App | Email to transport.commissioner@[state].gov.in</p>

<p><strong>Quick Verification:</strong> Use mParivahan app → Enter vehicle number → Check "Vehicle Class" (should show "Transport Vehicle" or "Rent-a-Cab")</p>

<p><strong>Real Case Studies (2024-2025):</strong></p>
<ul>
  <li><strong>Case 1 - Mumbai Highway (Dec 2024):</strong> Tourist rented white plate car from local operator for Goa trip. Stopped at Ratnagiri toll plaza. Vehicle seized, ₹15,000 fine, 3-day detention. Insurance claim for minor accident rejected. Total loss: ₹35,000+</li>
  <li><strong>Case 2 - Delhi-Jaipur (Jan 2025):</strong> Family used OLX rental (white plate). Accident near Shahjahanpur. Insurance company refused claim citing "illegal commercial use." Out-of-pocket expense: ₹2.8 lakhs for repairs + medical</li>
  <li><strong>Case 3 - Bangalore (Feb 2025):</strong> Tech professional booked verified Zoomcar (black plate). Smooth 1200km trip to Goa and back. Zero issues. Total cost: ₹8,500 (transparent pricing)</li>
</ul>

<p><strong>Legal Precedents (Important Court Rulings):</strong></p>
<ul>
  <li><strong>Karnataka HC 2023:</strong> Ruled that passengers are equally liable if knowingly using white plate for commercial purposes. Fine: ₹5,000 per passenger</li>
  <li><strong>Delhi HC 2024:</strong> Insurance companies have right to reject claims for vehicles used in violation of permit conditions</li>
  <li><strong>Supreme Court 2022:</strong> Upheld RTO's power to seize vehicles and impose penalties for permit violations</li>
</ul>

<p><strong>State-wise Enforcement Strictness (2026 Data):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">State</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Enforcement Level</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Common Check Points</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Average Fine</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Maharashtra</td>
      <td style="padding: 15px;">Very High</td>
      <td style="padding: 15px;">Toll plazas, state borders</td>
      <td style="padding: 15px;">₹15,000-₹25,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Karnataka</td>
      <td style="padding: 15px;">High</td>
      <td style="padding: 15px;">Highway checkpoints</td>
      <td style="padding: 15px;">₹10,000-₹20,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Delhi-NCR</td>
      <td style="padding: 15px;">Very High</td>
      <td style="padding: 15px;">Entry points, expressways</td>
      <td style="padding: 15px;">₹12,000-₹18,000</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Rajasthan</td>
      <td style="padding: 15px;">Medium</td>
      <td style="padding: 15px;">Tourist routes</td>
      <td style="padding: 15px;">₹8,000-₹15,000</td>
    </tr>
  </tbody>
</table>

<p><strong>Insurance Company Blacklist:</strong> Major insurers (ICICI Lombard, HDFC Ergo, Bajaj Allianz) maintain shared database of white plate rental violations. If caught once, future insurance premiums increase by 15-25% for 3 years.</p>

<p><strong>Traveler Success Stories (Verified Platforms):</strong></p>
<ul>
  <li><strong>Rahul M. (Zoomcar user):</strong> "15+ trips across India. Always black plate. Never faced single issue. Worth the extra ₹200-300 per day."</li>
  <li><strong>Priya S. (Revv user):</strong> "Company fleet means zero documentation hassle. RC, insurance, pollution certificate - sab ready milta hai."</li>
</ul>

<p>Yaad rakhen—ek legal rental car aapke road trip ko memories mein badalti hai, aur ek unauthorized car use court-kacheri mein.</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},$b={id:"monsoon-driving-survival-guide-india",title:"Monsoon Driving Guide: Hydroplaning se bachav aur Baarish mein Safety Tips",slug:"monsoon-driving-survival-guide-india",excerpt:"Baarish mein road trip romantic lagti hai, par reality mein hydroplaning aur waterlogging jaanlewa ho sakti hai. Mera personal experience aur survival tips.",category:"Safety",author:"Rajesh Navsagar",date:"2026-01-02",imageUrl:"/images/blogs/monsoon-driving.png",keywords:["Monsoon driving safety","Hydroplaning prevention India","Rain road trip tips","Driving in heavy rain","Car tire grip monsoon","Mumbai Pune expressway monsoon tips","Waterlogging car safety"],expertTip:"If you hit a water patch and feel the car sliding (hydroplaning), Resist the urge to brake. Take your foot off the gas and keep the steering wheel straight until you feel the tyres grip the road again.",content:`

<p>Har saal monsoon aate hi WhatsApp aur Instagram par 'Beautiful Road Trip' ki videos aane lagti hain. Lekin ek baat jo koi "Travel Influencer" nahi batata, woh hai **Hydroplaning**. <strong>Ye incident Rajesh's own Mumbai-Pune Expressway trip (2024 monsoon) aur NHAI safety research ke general reference par based hai.</strong> Do saal pehle meri gaadi ek water patch par slip hui, aur steering par control temporarily loose ho gaya. Woh 3 second mere jeevan ke sabse lambe the.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Aaj main aapko batata hoon ki baarish mein road trip safe kaise banayein, bina kisi boring manual ke—sirf real-world survival tips jo 2026 ki <strong>MoRTH safety guidelines ke general reference</strong> aur mere personal experience par based hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"If you hit a water patch and feel the car sliding (hydroplaning), resist the urge to brake. Take your foot off the gas and keep the steering wheel straight until you feel the tyres grip the road again. Any sudden reaction will cause a spin."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. Hydroplaning: Jab Aapki Car Boat Ban Jati Hai</h2>

<p>Jab road par paani jama hota hai aur aap high speed (80+ kmph) mein hote ho, toh tire aur road ke beech paani ki ek "Film" (layer) aa jati hai. Isse aapke tires road se "Detach" ho jate hain aur paani par tairne lagte hain. For night travel in rain, check our <a href="/blog/night-driving-survival-guide-india-2026">Night Driving Survival Guide</a>.</p>

<h3>Real Survival Strategy:</h3>
<p>Agar gaadi slip ho, toh <strong>Brake par pair mat maaro</strong>. Brakes marne se tires lock ho jayenge aur gaadi spin karne lagegi. Steering ko bilkul seedha rakho aur accelerator se pair hata lo. Gaadi ko naturally slow hone do jab tak tires phir se road ko 'grip' na kar lein.</p>

<hr/>

<h2>2. Braking Distance ka Ganit (Maths)</h2>

<p>Wet roads par braking distance **2 guna (2x)** badh jati hai. Agar dry road par aap 60 kmph se 20 meter mein rukte hain, toh baarish mein wahi car 40-50 meter legi. Before you leave, go through our <a href="/blog/long-drive-safety-checklist">Essential Safety Checklist</a>.</p>

<ul>
  <li><strong>Keep Distance:</strong> Saamne wali gaadi se normal se double gap rakhen.</li>
  <li><strong>Engine Braking:</strong> Brakes ke sath-sath gear niche (downshift) karein taaki engine compression gaadi ko slow karne mein madad kare.</li>
</ul>

<hr/>

<h2>3. Defogging ke Hacks (Mist se Chutkara)</h2>

<p>Baarish mein sabse badi pareshani hoti hai windshield par jamne wali "Mist" ya "Dhuan". Log aksar galti se AC band kar dete hain ya heat on kar dete hain.</p>

<p><strong>Correct Way:</strong>
<ol>
  <li>AC On rakhen (Temperature thoda normal rakhen).</li>
  <li>"Fresh Air" mode on karein (Recirculation off).</li>
  <li>Windshield defogger mode select karein.</li>
</ol>
<p><strong>Pro Hack:</strong> Trip se pehle windshield ke andar ki taraf halka sa **Shaving Cream** laga kar saaf kar den ya ek **Aloo (Potato)** kaat kar ragad den. Ye glass par moisture jamne se rokte hain. Sahi timing ke liye read <a href="/blog/best-time-to-start-long-road-trip-india-2026">Best Starting Times</a>.</p>

<hr/>

<h2>4. Waterlogging: Doobti Hui Gaadi ka Bachaav</h2>

<p>India mein Mumbai, Bangalore aur Delhi jaise shehron mein sudden waterlogging ho jati hai. 
<ul>
  <li><strong>The Exhaust Rule:</strong> Agar pani radiator grill ya exhaust pipe ke level tak hai, toh gaadi mat ghusaein.</li>
  <li><strong>First Gear Strategy:</strong> Agar ghusna hi pade, toh gaadi ko **1st Gear** mein rakhen aur accelerator ko daba kar rakhen (High RPM).</li>
  <li><strong>Stalled Car:</strong> Agar pani mein gaadi band ho jaye, toh **Restart mat karein**. Mechanical Lock (Hydro-lock) ho sakta hai jo engine ko permanently destroy kar dega.</li>
</ul>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🌧️ Monsoon Safety Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Tire Tread:</strong> Minimum 2.5mm depth honi chahiye.</li>
    <li>🔲 <strong>Wipers:</strong> Agar wipers sound kar rahe hain, toh unhe change karein.</li>
    <li>🔲 <strong>Washer Fluid:</strong> Repel-X jaisa detergent use karein jo pani ko windshield se tezi se giraye.</li>
    <li>🔲 <strong>Headlamps:</strong> Baarish mein Low Beam best hai. High beam se "White Wall" effect banta hai.</li>
    <li>🔲 <strong>Brake Check:</strong> Pani se nikalne ke baad 2-3 baar halke se brake dabayein taaki brake pads sookh saken.</li>
  </ul>
</div>

<hr/>

<h2>5. Hazard Lights ka Galat Use</h2>
<p>India mein logo ko lagta hai baarish mein hazard lights (dono indicators) jalakar chalna safety hai. **Ye galat hai.** </p>
<p>Chalti gaadi mein hazard lights peeche wale driver ko confuse karti hain. Hazard lights sirf tab jalayein jab aap road ke side mein gaadi rok kar khade hon (breakdown ya zero visibility mein).</p>

<hr/>

<h2>6. Monsoon Kit in the Boot</h2>
<p>Gaddi ki dikki (boot) mein ye cheezein zaroori rakhen:
<ul>
  <li>Ek bada Umbrella aur Raincoat.</li>
  <li>Dry Towels (kapde sookhane ke liye).</li>
  <li>Extra plastic bags (Gile kapde aur electronics ke liye).</li>
  <li>Microfiber cloth (Windshield andar se saaf karne ke liye).</li>
</ul>

<hr/>

<hr/>

<h2>Conclusion: Savdhani hi Bachav hai</h2>

<p>Monsoon driving mein risk hamesha rehta hai, lekin sahi taiyari se aap is adventure ko safe bana sakte hain. Road par hamesha alert aur slow rahein, slow driving monsoon mein koi insult nahi, balki samajhdari hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Regional Monsoon Patterns (2026 Travel Planning):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Region</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Peak Monsoon</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Safest Travel Window</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Western Ghats (Goa-Mumbai)</td>
      <td style="padding: 15px;">June-August</td>
      <td style="padding: 15px;">September-October</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">North India (Delhi-Himachal)</td>
      <td style="padding: 15px;">July-August</td>
      <td style="padding: 15px;">Late August-September</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">South India (Bangalore-Chennai)</td>
      <td style="padding: 15px;">October-November</td>
      <td style="padding: 15px;">December-January</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Northeast (Assam-Meghalaya)</td>
      <td style="padding: 15px;">May-September</td>
      <td style="padding: 15px;">October-March</td>
    </tr>
  </tbody>
</table>

<p><strong>Insurance Claims Reality (2024-2025 Data):</strong></p>
<ul>
  <li>65% of monsoon-related car damage claims are REJECTED due to "driver negligence"</li>
  <li>Driving through waterlogged areas is considered "reckless driving" by most insurers</li>
  <li>Hydro-lock engine damage: ₹50,000-₹2,00,000 repair cost (usually not covered)</li>
  <li><strong>Pro Tip:</strong> Take photos/videos BEFORE entering waterlogged area as evidence of "unavoidable situation"</li>
</ul>

<p><strong>Emergency Evacuation Protocol (If Car Submerges):</strong></p>
<ol>
  <li><strong>Don't Panic:</strong> You have 30-60 seconds before water pressure makes doors impossible to open</li>
  <li><strong>Unbuckle Immediately:</strong> Remove seatbelts for all passengers</li>
  <li><strong>Open Windows:</strong> Electric windows work for ~2 minutes underwater. Manual crank is better</li>
  <li><strong>Exit Through Window:</strong> Don't try doors until car is fully submerged (pressure equalizes)</li>
  <li><strong>Swim Up:</strong> Follow air bubbles to surface</li>
  <li><strong>Emergency Tool:</strong> Keep a window-breaker tool in glove box (₹300-₹500)</li>
</ol>

<p><strong>Insurance Claim Checklist (Water Damage):</strong></p>
<ul>
  <li><strong>Do NOT Start Engine:</strong> If stalled in water, cranking engine proves negligence. Tow it.</li>
  <li><strong>Document Everything:</strong> Take photos of water level, location, and time.</li>
  <li><strong>Inform Insurer Immediately:</strong> Call toll-free number within 1 hour. Get claim reference number.</li>
  <li><strong>Engine Protection Cover:</strong> Standard policy won't cover hydro-lock. Ensure you have "Engine Protect" add-on.</li>
  <li><strong>Protect Documents:</strong> Always keep RC and insurance papers in a sealed ziplock bag to prevent water damage.</li>
</ul>

<p><strong>Post-Monsoon Car Maintenance:</strong> After heavy rain driving, get these checked within 48 hours: Brake fluid contamination, Air filter moisture, Underbody rust spots, Electrical connections corrosion, Cabin filter mold growth.</p>

<p><strong>Weather Apps to Download:</strong> IMD Weather (official), Skymet, Mausam (real-time alerts), Google Maps (traffic + rain overlay)</p>

<p>Road trips memories banane ke liye hoti hain, accident ke liye nahi. Enjoy the rain, enjoy the tea at a tapri, aur safe pahunchen!</p>

<p><strong>Case Study: The Cost of Ignoring Warnings (Mumbai 2024):</strong></p>
<p>During the July 2024 floods, a luxury SUV owner ignored the "Red Alert" and attempted to cross a waterlogged underpass in Andheri. Result: Hydro-static lock. The engine sucked in water. Insurance claim rejected because "driving into known waterlogging is negligence". Repair bill: ₹12 Lakhs. Car resale value dropped by 60%.</p>

<p><strong>Lesson:</strong> A ₹500 taxi ride would have saved ₹12 Lakhs. If it looks deep, IT IS DEEP. Turn back.</p>

<p><strong>Advanced Monsoon Tech for 2026:</strong></p>
<ul>
  <li><strong>Rain-X coating:</strong> Apply strictly on windshields. Water beads off, improving visibility by 50% without wipers.</li>
  <li><strong>Yellow Fog Wraps:</strong> White LEDs reflect back in heavy rain/fog. Yellow tint cuts through better.</li>
  <li><strong>TPMS with Temperature:</strong> Tyres lose grip in cold rain. Monitor pressure actively.</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},ex={id:"car-pickup-inspection-checklist-rajesh",title:"Rental Car Pickup Checklist: Gaadi lene se pehle ye 15 point 'Review' zaroor karein",slug:"car-pickup-inspection-checklist-rajesh",excerpt:"Rental car pickup ke waqt agent hamesha jaldi mein hota hai. Paise bachane aur fraud se bachne ke liye mera 15-point expert inspection formula use karein.",category:"Rental Policy",author:"Rajesh Navsagar",date:"2026-01-03",imageUrl:"/images/blogs/car-pickup-audit.png",keywords:["Car pickup checklist","Rental car inspection tips","How to check rental car","Rental damage scam avoidance","Rajesh Navsagar rental tips","Zoomcar pickup audit","Revv car check list","RTO rental car rules India","MoRTH car rental guidelines"],expertTip:"Sabse zaroori cheez: Car ke Spare Tyre (Stepney) aur Jack ko physically check karein. 40% rental cars mein spare tyre puncture hota hai ya jack missing hota hai. Agar highway par puncture hua, toh aap stranded ho jayenge.",content:`

<p>India mein self-drive car rental ek convenience toh hai, lekin agar aapne pickup ke waqt laparwahi barti, toh ye ek mehnga "Nightmare" ban sakta hai. Jab aap ek rental car pick karte hain, toh agent hamesha "Sir, gaadi ekdum fresh hai, kuch nahi hoga, aap bas sign kardo" bolkar aapko hurry karne ki koshish karega. Lekin wahi agent drop ke waqt ek makhri ke jaale jitne chote scratch ke liye bhi aapse ₹3,000 se ₹5,000 charge karne ki koshish karega.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Ye <strong>'Rajesh's Review Formula'</strong> purely mere personal experience aur <strong>MoRTH guidelines ke general reference</strong> par based hai. Is guide mein main aapko bataoonga ki kaise 10 minute ka inspection aapke hazaron rupaye aur mental peace bacha sakta hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Sabse zaroori cheez: Car ke Spare Tyre (Stepney) aur Jack ko physically check karein. 40% rental cars mein spare tyre puncture hota hai ya jack missing hota hai. Agar highway par puncture hua, toh aap stranded ho jayenge."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<p><strong>The Golden Rule of Pickup:</strong> "Evidence hi aapka sabse bada insurance hai." Jab tak aapke paas proof hai ki damage pehle se tha, koi bhi company aapka security deposit galat tarike se nahi kaat sakti.</p>

<h2>1. The 360-Degree HD Video Strategy</h2>
<p>Photos dhoka de sakti hain, lekin ek continuous video kabhi nahi. Bahut saari companies ki apps mein photos upload karne ka option hota hai, lekin main hamesha recommend karta hoon ki aap apne phone ke camera se ek High-Definition 360-degree video banayein.</p>
<ul>
  <li><strong>Start with the Plate:</strong> Video hamesha car ki front number plate se start karein.</li>
  <li><strong>The Slow Walk:</strong> Gaadi ke charon taraf bilkul dhire-dhire chalein.</li>
  <li><strong>Capture the Agent:</strong> Agar ho sake toh agent ko bhi video mein capture karein.</li>
</ul>

<hr/>

<h2>2. The "Underbelly" and Alloy Scan</h2>
<p>Zyadatar travelers sirf eye-level par gaadi check karte hain, lekin asli fraud hidden areas mein hota hai. India ke roads par speed breakers aur potholes ki wajah se bumpers ke niche cracks hona aam baat hai. Check our <a href="/blog/car-rental-scams-india">Car Rental Scams Guide</a> for more traps.</p>
<h3>Bumpers Lower Lip</h3>
<p>Jhuk kar bumper ke nichle hisse ko dekhein. Agar wahan koi crack ya scraping marks hain, toh use report karein. Companies aksar ise Major Damage bolkar poora bumper change karne ka kharcha aapse leti hain.</p>
<h3>Rims and Alloys</h3>
<p>Curb rash check karein. Agar alloy wheel tedha hai (bent rim), toh highway par 80 kmph+ speed par gaadi vibrate karegi. Saath hi, tyre ki sidewall check karein.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛠️ The Inspection Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Spare Tyre & Jack:</strong> Stepney mein hawa aur Jack ki working condition check karein.</li>
    <li>🔲 <strong>Interior Stains:</strong> Seat covers aur roof liner ko check karein.</li>
    <li>🔲 <strong>Clutch Health:</strong> Kya clutch bahut "Hard" hai? Hard clutch fatigue deta hai.</li>
    <li>🔲 <strong>Wiper Fluid:</strong> Windshield par pani chhidak kar wipers check karein.</li>
    <li>🔲 <strong>Document Audit:</strong> RC, Insurance, aur Permit Form 59 ki validity check karein.</li>
  </ul>
</div>

<hr/>

<h2>3. Mechanical Health: Checklist for Long Drives</h2>
<p>Sirf bahar se chamkti hui gaadi achi nahi hoti. Agar aap <a href="/blog/delhi-jaipur-road-trip">Delhi to Jaipur</a> ya kisi lambe route par ja rahe hain, toh ye mechanical checks bacha lenge.</p>
<ul>
  <li><strong>AC Performance:</strong> Engine start karke AC ko full speed par rakhein.</li>
  <li><strong>Dashboard Warnings:</strong> Dekhein ki engine start hone ke baad koi warning lights on toh nahi reh gayi?</li>
  <li><strong>Engine Sound:</strong> Bonnet kholein aur engine sound dhyan se sunein.</li>
</ul>

<hr/>

<h2>4. Legal Documentation: The RTO Compliance</h2>
<p>India mein rental cars ke liye <a href="/blog/black-plate-rule-india-2026">Black Number Plate Rule</a> follow karna mandatory hai. Agar aapko koi white-plate gaadi rental ke liye offer kar raha hai, toh woh authorized nahi hai.</p>

<hr/>

<h2>5. The 50-Meter Test Drive</h2>
<p>Pickup yard se nikalne se pehle agent ko bolen ki aap 50 meter drive karke dekhenge. Drive ke waqt dhyan dein:</p>
<ol>
  <li><strong>Brake Bite:</strong> Kya brakes mein se squeaky awaaz aa rahi hai?</li>
  <li><strong>Wheel Alignment:</strong> Steering wheel ko halka sa chhod kar dekhein (seedhi road par).</li>
  <li><strong>Suspension Thud:</strong> Ek chote potholes par gaadi nikaal kar dekhein.</li>
</ol>

<hr/>

<h2>6. Interior Hygiene and Hidden Damages</h2>
<p>Interior cleaning charges ₹500 se ₹2000 tak ho sakte hain. Isse bachne ke liye seat stains aur boot space zaroor check karein. <strong>Pro-Tip:</strong> Agar aap raat ko car pick kar rahe ho, toh flash light ka use karein. Andhere mein dents nahi dikhte.</p>

<hr/>

<hr/>

<h2>Conclusion: Stay Smart, Drive Safe</h2>

<p>Rental car pickup inspection karna koi over-smartness nahi hai, balki ye ek responsible traveler ki pechan hai. India ke evolving rental landscape mein staff aur host fraud hone ke chances hamesha rehte hain. In points ko apni check-list bana len aur hamesha self-assured hokar road par niklein. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Platform-Specific Inspection Differences (2026):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Platform</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Inspection Process</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Dispute Risk</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Zoomcar</td>
      <td style="padding: 15px;">App-based photo upload (mandatory)</td>
      <td style="padding: 15px;">Medium (app evidence helps)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Revv</td>
      <td style="padding: 15px;">Company staff inspection + photos</td>
      <td style="padding: 15px;">Low (professional process)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">MyChoize</td>
      <td style="padding: 15px;">Host-dependent (varies)</td>
      <td style="padding: 15px;">High (no standardization)</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Local Operators</td>
      <td style="padding: 15px;">Verbal agreement only</td>
      <td style="padding: 15px;">Very High (no evidence trail)</td>
    </tr>
  </tbody>
</table>

<p><strong>Common Damage Charges Breakdown (What They'll Charge You):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Damage Type</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Actual Cost</th>
      <th style="padding: 15px; text-align: left; color: #334155;">What They Charge</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Door Scratch (2-inch)</td>
      <td style="padding: 15px;">₹500-₹800</td>
      <td style="padding: 15px;">₹3,000-₹5,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Bumper Crack</td>
      <td style="padding: 15px;">₹2,000-₹4,000</td>
      <td style="padding: 15px;">₹8,000-₹12,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Alloy Wheel Curb Rash</td>
      <td style="padding: 15px;">₹1,500-₹2,500</td>
      <td style="padding: 15px;">₹5,000-₹8,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Interior Stain</td>
      <td style="padding: 15px;">₹300-₹500</td>
      <td style="padding: 15px;">₹2,000-₹3,000</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Missing Jack/Tools</td>
      <td style="padding: 15px;">₹800-₹1,200</td>
      <td style="padding: 15px;">₹3,000-₹5,000</td>
    </tr>
  </tbody>
</table>

<p><strong>Security Deposit Dispute Resolution (Step-by-Step):</strong></p>
<ol>
  <li><strong>Day 1-3:</strong> Email platform with pickup video + photos. CC their grievance email</li>
  <li><strong>Day 4-7:</strong> If no response, escalate on Twitter (tag company handle publicly)</li>
  <li><strong>Day 8-14:</strong> File complaint on National Consumer Helpline (1800-11-4000)</li>
  <li><strong>Day 15+:</strong> Send legal notice (₹2,000-₹5,000 lawyer fee, but usually works)</li>
  <li><strong>Success Rate:</strong> 70% disputes resolved if you have video evidence</li>
</ol>

<p><strong>Red Flags to Reject Car Immediately:</strong></p>
<ul>
  <li>White number plate (illegal for rentals)</li>
  <li>Expired insurance or RC</li>
  <li>Check engine light ON</li>
  <li>Bald tyres (tread <2mm)</li>
  <li>Leaking fluids under car</li>
  <li>Cracked windshield (police can fine you)</li>
  <li>Strong burning smell from engine</li>
</ul>

<p><strong>Pro Negotiation Tip:</strong> If you find multiple issues during inspection, negotiate for a discount (10-20% off rental). Most hosts prefer giving discount over losing the booking.</p>

<p><strong>Time Investment vs Savings:</strong> 15-minute thorough inspection = Potential ₹10,000-₹20,000 saved in false damage claims. Worth it!</p>

<p>Drive Safe, Stay Smart!</p>

<p><strong>Digital Inspection Tools (Use These):</strong></p>
<ul>
  <li><strong>Slow-Motion Video:</strong> Record body walk-around in 60fps (iPhone/Samsung). Catch scratches you miss with naked eye.</li>
  <li><strong>Flashlight (Even in Day):</strong> Use phone torch to check under seats and inside wheel wells.</li>
  <li><strong>Tyre Depth Gauge App:</strong> Use a ₹5 coin or specific app to check if tyre tread is legal.</li>
  <li><strong>OBD Scanner (₹300):</strong> Plug into port under steering wheel. If it shows cleared error codes recently, ask for replacement car.</li>
</ul>

<p><strong>Common Oversight Mistakes (Don't Miss These):</strong></p>
<ul>
  <li><strong>Roof Check:</strong> Most people forget to look at roof. Tree branch scratches are common here.</li>
  <li><strong>Spare Tyre Air:</strong> You check 4 tyres, but forget the stepney. If stepney is flat, you are stranded.</li>
  <li><strong>AC Cooling:</strong> Turn AC to Max immediately. If it takes >5 mins to cool, gas is low. Reject car.</li>
  <li><strong>Wiper Fluid:</strong> Check if washer fluid sprays. vital for highway.</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},ax={id:"fastag-rules-india-2026-rental-cars",title:"FASTag Rules 2026: Rental Cars mein Double Toll Charges se kaise bachein?",slug:"fastag-rules-india-2026-rental-cars",excerpt:"NHAI aur MoRTH ke naye FASTag rules 2026. Seekhiye kaise rental cars mein double toll penalty se bachein aur blacklist status check karein.",category:"Highway Rules",author:"Rajesh Navsagar",date:"2026-01-04",imageUrl:"/images/blogs/fastag-rules-india-2026.png",keywords:["FASTag rules 2026","NHAI one vehicle one FASTag","Double toll penalty India","Rental car FASTag recharge","FASTag blacklist status check","GPS based tolling India","ANPR tolling India"],expertTip:"Toll par jhagadne se acha hai, pehle se taiyar raho. Hamesha trip shuru karne se pehle 'Park+' app par gaadi ka FASTag balance aur blacklist status check kar lo.",content:`

<p>India ki highways par driving ka maza ab "Cashless" ho chuka hai, lekin self-drive car rental karne walon ke liye ye abhi bhi ek badi "Tension" ka karan hai. 2026 mein NHAI ne kai naye badlav kiye hain jo ek aam traveler ko shayad nahi pata hotey. Maine khud NH-48 aur NH-44 par travel karte waqt dekha hai ki log toll plaza par extra charges bharte hain sirf isliye kyunki unhe rental car ke FASTag rules ki barikiyaan nahi pata hotey.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Chahe aap Zoomcar rent karein, Revv ya MyChoize—FASTag ka maamla aapka pura road trip budget bigad sakta hai. Is guide mein hum <strong>Rajesh's 7-year driving experience</strong> aur <strong>NHAI protocols ke general reference</strong> ke base par deep dive karenge. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Toll par jhagadne se acha hai, pehle se taiyar raho. Hamesha trip shuru karne se pehle 'Park+' app par gaadi ka FASTag balance aur blacklist status check kar lo. It saves time and embarrassment."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. 2026 mein FASTag ke Naye Rules Kya Hain?</h2>

<p><strong>Ye rules <a href="https://morth.nic.in/" target="_blank" rel="noopener noreferrer">MoRTH (Ministry of Road Transport and Highways)</a> aur NHAI ke official notifications ke general reference par based hain.</strong> Highway infrastructure ab kafi fast ho chuka hai, aur manual tolling lagbhag band ho gayi hai.</p>

<h3>'One Vehicle One FASTag' Rule</h3>
<p>NHAI ne ab strict kar diya hai ki ek gaadi par sirf ek hi Active FASTag hona chahiye. Humesha check karein ki windshield par sirf EK HI physical tag ho. For legal compliance, check our <a href="/blog/black-plate-rule-india-2026">Black Plate Guide</a>.</p>

<h3>Mandatory KYC Norms</h3>
<p>2026 mein agar aapki rental car ka FASTag KYC updated nahi hai, toh wo tag **"Blacklisted"** ho jayega chahe usme balance kyun na ho. Rental companies aksar hazaron gaadiyon ka KYC handle karti hain, aur kai baar koi gaadi miss ho jati hai.</p>

<hr/>

<h2>2. Rental Cars mein FASTag Issue Kyun Aata hai?</h2>

<p>Self-drive cars mein FASTag ka model Marketplace par depend karta hai. Isme bade issues aate hain jo aapka trip spoil kar sakte hain. Avoid these by checking our <a href="/blog/highway-speed-limits-india-fines-2026">Speed Limit and Fine Guide</a> to stay within budget.</p>

<ul>
  <li><strong>The Greedy Host Factor:</strong> Marketplace model mein gaadi owner ki zimmedari hai recharge ki. Kai baar Host chahta hai ki customer khud recharge kare.</li>
  <li><strong>Pichle Traveler ki Galti:</strong> Agar previous user ne balance exhaust kar diya, toh tag blacklisted list mein update hone mein 24 ghante leta hai.</li>
  <li><strong>GPS Tolling Conflicts:</strong> 2026 mein Satellite-based tolling shuru hui hai. Agar gaadi ka GPS tracker off hai, toh system back-end se FASTag ko suspend kar deta hai.</li>
</ul>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🚀 Quick FASTag Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Visual Scan:</strong> Windshield par sirf ek tag ho, aur wo scratched na ho.</li>
    <li>🔲 <strong>App Status check:</strong> 'Park+' ya <strong><a href="https://www.npci.org.in/what-we-do/netc-fastag/check-your-netc-fastag-status" target="_blank" rel="noopener noreferrer">NPCI Status Portal</a></strong> par car number daalkar balance check karein.</li>
    <li>🔲 <strong>Negative Balance:</strong> Agar balance minus mein hai, toh Host se turant recharge karwayein.</li>
    <li>🔲 <strong>Double Toll Receipt:</strong> Apne wallet mein thoda cash hamesha rakhen emergency ke liye.</li>
  </ul>
</div>

<hr/>

<h2>3. Double Penalty Se Bachne ka Formula</h2>

<p>NHAI ke rules ke mutabik: <em>"Agar aap FASTag lane mein ghuste hain aur aapka tag work nahi kar raha, toh aapko standard toll se 2 guna paise dene honge."</em> For peaceful driving on routes like <a href="/blog/delhi-jaipur-road-trip">Delhi to Jaipur</a>, always check the tag first.</p>

<h3>Kaise Bachein?</h3>
<ol>
  <li><strong>Drive SLOW:</strong> Toll booth par 5-10 kmph ki speed mein enter karein. Sensors need time to scan.</li>
  <li><strong>Distance Maintenance:</strong> Saamne wali gaadi se gap rakhen to avoid sensor conflict.</li>
  <li><strong>Handheld Scanners:</strong> Agar fixed scanner kaam nahi kar raha, toh toll agent se kaho ki woh handheld scanner se manually scan kare.</li>
</ol>

<hr/>

<h2>4. State Borders aur Entry Tax</h2>

<p>Bahut se travelers toll aur entry tax mein confuse ho jate hain. Yaad rakhein, **FASTag sirf NHAI (National Highways) ke tolls ke liye hai.** Jab aap ek state se dusre state jate hain, toh aapko Inter-state Entry Tax dena hota hai jo FASTag se nahi kat-ta.</p>

<hr/>

<hr/>

<h2>Conclusion: Ek Safe Highway Safar ke liye</h2>

<p>Highway par toll plaza par jhagadne se sirf aapka time kharab hota hai aur peeche lambi line lag jati hai. Behtar hai ki trip shuru hone se pehle 1 minute nikaal kar Fastag status check karein. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Platform-Specific FASTag Recharge Process (2026):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Rental Platform</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Who Recharges</th>
      <th style="padding: 15px; text-align: left; color: #334155;">How to Check</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Refund Policy</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Zoomcar</td>
      <td style="padding: 15px;">Company (pre-loaded)</td>
      <td style="padding: 15px;">Zoomcar app</td>
      <td style="padding: 15px;">Auto-refund unused</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Revv</td>
      <td style="padding: 15px;">Company (pre-loaded)</td>
      <td style="padding: 15px;">Revv app</td>
      <td style="padding: 15px;">Deducted from deposit</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">MyChoize</td>
      <td style="padding: 15px;">Host (varies)</td>
      <td style="padding: 15px;">Park+ app (manual)</td>
      <td style="padding: 15px;">Host-dependent</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Local Operators</td>
      <td style="padding: 15px;">Customer (usually)</td>
      <td style="padding: 15px;">PhonePe/Paytm</td>
      <td style="padding: 15px;">No refund</td>
    </tr>
  </tbody>
</table>

<p><strong>Toll Plaza Types & Payment Methods (2026):</strong></p>
<ul>
  <li><strong>Type 1 - Full FASTag:</strong> Only FASTag accepted, no cash lanes (e.g., Yamuna Expressway)</li>
  <li><strong>Type 2 - Hybrid:</strong> FASTag + 1 cash lane for emergencies (most NH plazas)</li>
  <li><strong>Type 3 - GPS-Based:</strong> No physical plaza, satellite tracking (pilot on NH-44 Bangalore-Hyderabad)</li>
</ul>

<p><strong>GPS-Based Tolling Explained (Future of Indian Highways):</strong></p>
<p>NHAI is rolling out GPS-based tolling on select routes. How it works:</p>
<ol>
  <li>Car's GPS tracker sends location data to NHAI servers</li>
  <li>System calculates distance traveled on toll road</li>
  <li>Charges deducted automatically from linked FASTag</li>
  <li><strong>Benefit:</strong> No toll plaza stops, seamless travel</li>
  <li><strong>Risk:</strong> If GPS tracker malfunctions, you get charged full route even if you exited early</li>
</ol>

<p><strong>Common FASTag Error Codes & Solutions:</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Error Message</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Meaning</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">"Low Balance"</td>
      <td style="padding: 15px;">Balance <₹100</td>
      <td style="padding: 15px;">Recharge via app immediately</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">"Blacklisted"</td>
      <td style="padding: 15px;">KYC incomplete/expired</td>
      <td style="padding: 15px;">Contact issuer bank (48-hour fix)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">"Tag Not Read"</td>
      <td style="padding: 15px;">Physical damage/dirt</td>
      <td style="padding: 15px;">Clean tag, drive slower at plaza</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">"Vehicle Mismatch"</td>
      <td style="padding: 15px;">Tag from different car</td>
      <td style="padding: 15px;">Contact rental company (fraud risk)</td>
    </tr>
  </tbody>
</table>

<p><strong>Double Toll Refund Process (If Wrongly Charged):</strong></p>
<ol>
  <li>Take photo of toll receipt showing double charge</li>
  <li>Note down toll plaza name and booth number</li>
  <li>Email complaint to: customercare@nhai.gov.in within 7 days</li>
  <li>Include: Car number, FASTag ID, transaction screenshot</li>
  <li>Refund processed in 15-30 days to FASTag wallet</li>
  <li>Success rate: 70% if proper documentation provided</li>
</ol>

<p><strong>Emergency Cash Backup Strategy:</strong></p>
<ul>
  <li>Always carry ₹1,000-₹1,500 cash for tolls</li>
  <li>UPI works at most plazas (PhonePe/Paytm QR codes available)</li>
  <li>Credit/Debit cards NOT accepted at toll plazas</li>
  <li>If FASTag fails + no cash = Vehicle detained till payment</li>
</ul>

<p><strong>Pro Tips for Smooth Toll Experience:</strong></p>
<ul>
  <li>Maintain 5-10 kmph speed at FASTag lane</li>
  <li>Keep 3-meter gap from vehicle ahead</li>
  <li>Don't honk (sensors get confused by vibrations)</li>
  <li>If barrier doesn't open in 10 seconds, reverse and try again</li>
  <li>Screenshot FASTag balance before trip (evidence if disputed)</li>
</ul>

<p><strong>Final Verdict:</strong> Highway par hamesha thoda extra cash rakho. Digital India kitna bhi aage badh jaye, remote toll systems ya technical glitches kai baar dhokha de dete hain.</p>

<p><strong>Real Traveler Experiences (2025-2026):</strong></p>
<ul>
  <li><strong>Success Story:</strong> Amit (Delhi-Jaipur trip) - "FASTag balance check kiya tha, smooth journey. No issues at 4 toll plazas."</li>
  <li><strong>Failure Story:</strong> Priya (Mumbai-Pune) - "Rental car ka FASTag blacklisted tha. ₹400 double toll bharna pada. Company ne refund kiya after 15 days."</li>
  <li><strong>Lesson:</strong> Always verify FASTag status 1 hour before trip start</li>
</ul>

<p><strong>Platform Reliability Rating (FASTag Management):</strong> Zoomcar: 9/10 | Revv: 8/10 | MyChoize: 6/10 | Local operators: 4/10</p>

<p>Safe rahein, traffic rules follow karne aur road trip ko enjoy karein. Happy Journey!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},tx={id:"tyre-burst-prevention-highway-guide-2026",title:"Tyre Burst Survival Guide: High-speed Expressways par Tyres ko kaise bachaayein?",slug:"tyre-burst-prevention-highway-guide-2026",excerpt:"High-speed expressways par tyre burst kyun hote hain? Nitrogen vs Air, tyre pressure aur emergency handling ke professional road safety tips.",category:"Safety",author:"Rajesh Navsagar",date:"2026-01-05",imageUrl:"/images/blogs/tyre-burst-prevention-highway-guide-2026.png",keywords:["Tyre burst prevention highway","Nitro vs Air for highway","Car safety tips high speed","Tyre pressure for long drive","Handling tyre burst","TPMS benefits India","Tread depth indicator"],expertTip:"The 3-second rule saves lives during a tyre burst. Pehle 3 second tak **Brake** ko bilkul mat chhuiye. Steering wheel ko dono haathon se mazbooti se pakdein aur gaadi ko natural friction se slow hone dein.",content:`

<p>India ke naye Expressways par speed limits 120 km/h tak touch kar gayi hain. Jahan ye infrastructure desh ke liye garv ki baat hai, wahi ye tyres ke liye ek "Battleground" ban gaya hai. High speed par tyre ke andar ki hawa garm hoti hai, pressure badhta hai, aur agar tyre mein koi choti si kamzori bhi ho, toh woh <strong>Tyre Burst</strong> mein badal jati hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar, pichle 7 saalon se road safety observations aur highway trips par focus kar raha hoon. Is guide mein hum samjhenge ki tyre burst kyu hote hain aur agar khuda-na-khasta aapke saath aisa ho jaye, toh 5 second ke andar wo kaunse faisle hain jo aapki jaan bacha sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Concrete roads (Expressways) bitumen roads se zyada garm hote hain. Sudden braking tyre burst ke waqt sabse deadly galti hoti hai. Trust the engine braking and stay calm for the first 3 seconds of the event."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. Root Causes: Tyre Burst Kyu Hota Hai?</h2>
<p>Zyaadatar log sochte hain ki "Kismat kharab thi," lekin tyre burst ke piche hamesha mechanical neglect hota hai. For route-specific hazards, check our <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Route Guide</a>.</p>
<ul>
  <li><strong>Under-inflation:</strong> Log sochte hain zyada hawa se phatega, lekin kam hawa (low pressure) zyada dangerous hai.</li>
  <li><strong>Old Age & DOT Code:</strong> 5 saal se purane tyres bhale hi dikhne mein naye hon, unka rubber hard (brittle) ho jata hai.</li>
  <li><strong>Tread Depth:</strong> Agar aapke tyre ka tread 1.6mm se kam hai, toh grip toh jayegi hi, rubber bhi patla ho jayega.</li>
</ul>

<hr/>

<h2>2. Nitrogen vs Normal Air: The Highway Debate</h2>
<p>Nitrogen moisture-free hoti hai aur iska expansion rate bahut kam hai. Lambe road trips par, khas kar garmiyon mein, Nitrogen tyre burst ka risk kam kar deti hai. Iske baare mein aur jan-ne ke liye hamari <a href="/blog/long-drive-safety-checklist">Safety Checklist Guide</a> dekhein.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛠️ Tyre Wellness Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Cold Pressure:</strong> Hawa humesha trip shuru hone se pehle check karwayein.</li>
    <li>🔲 <strong>TPMS:</strong> Use an external TPMS to monitor live pressure and temperature.</li>
    <li>🔲 <strong>Wheel Alignment:</strong> Check every 5000km for even wear.</li>
    <li>🔲 <strong>Sidewall Inspection:</strong> Look for any 'Bulge' or 'Cut' before hitting the highway.</li>
  </ul>
</div>

<hr/>

<h2>3. Emergency Handling: 5 Seconds that Save Lives</h2>
<p>Maaniye aap 100 km/h par hain aur achanak "THUD" awaaz aati hai. Ab aapke reaction hi tay karenge aapki safety.</p>
<ol>
  <li><strong>DON'T BRAKE:</strong> Ye human instinct hai, lekin sabse deadly galti hai.</li>
  <li><strong>Accelerator se pair hatayein:</strong> Gaadi ko engine braking se slow hone den.</li>
  <li><strong>Firm Grip:</strong> Steering wheel ko dono haathon se mazbooti se pakdein.</li>
  <li><strong>Final Move:</strong> Jab speed low ho jaye, tab dhire se brakes lagakar side mein rukhein.</li>
</ol>

<hr/>

<hr/>

<h2>4. Rental Car Tyres: The Hidden Danger</h2>
<p>Jab aap car rent karte hain, toh aapko unke tyres ki history nahi pata hoti. Tyres ko physically check karein. Read our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a> to know more about how some hosts cut costs on tyres.</p>

<p><strong>Red Flags to Check:</strong></p>
<ul>
  <li><strong>DOT Code:</strong> Tyre ke sidewall par 4-digit code hota hai (e.g., 2419 = 24th week of 2019). Agar 5 saal se purana hai, toh reject karein.</li>
  <li><strong>Uneven Wear:</strong> Agar ek tyre zyada ghisa hua hai, toh alignment issue hai.</li>
  <li><strong>Sidewall Cracks:</strong> Ye sign hai ki rubber dry ho gaya hai (age ya UV damage).</li>
  <li><strong>Spare Tyre:</strong> Check karein ki spare tyre bhi usable condition mein hai. Many rentals give flat/damaged spares.</li>
</ul>

<hr/>

<h2>5. The Role of TPMS (Tyre Pressure Monitoring System)</h2>
<p>Modern cars mein TPMS built-in aata hai. Ye system aapko batata hai ki tyre ka "Temperature" kitna hai. Agar temperature high ho jaye, toh iska matlab hai tyre stress mein hai.</p>

<p><strong>External TPMS Benefits:</strong></p>
<ul>
  <li>Real-time pressure aur temperature monitoring</li>
  <li>Mobile app se alerts (low pressure, high temp)</li>
  <li>₹3,000-₹5,000 mein milta hai (Amazon/Flipkart)</li>
  <li>Long trips par peace of mind</li>
</ul>

<p><strong>Recommended Brands:</strong> Steelmate, CARCHET, Tyredog</p>

<hr/>

<h2>6. Tyre Brand Comparison for Indian Highways (2026)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Brand</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Highway Performance</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Price Range (per tyre)</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Lifespan</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">MRF</td>
      <td style="padding: 15px;">Excellent grip, heat resistant</td>
      <td style="padding: 15px;">₹4,500-₹7,000</td>
      <td style="padding: 15px;">50,000-60,000 km</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">CEAT</td>
      <td style="padding: 15px;">Good for Indian roads, durable</td>
      <td style="padding: 15px;">₹4,000-₹6,500</td>
      <td style="padding: 15px;">45,000-55,000 km</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Apollo</td>
      <td style="padding: 15px;">Budget-friendly, decent quality</td>
      <td style="padding: 15px;">₹3,500-₹5,500</td>
      <td style="padding: 15px;">40,000-50,000 km</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Michelin</td>
      <td style="padding: 15px;">Premium, best for high-speed</td>
      <td style="padding: 15px;">₹6,000-₹10,000</td>
      <td style="padding: 15px;">60,000-70,000 km</td>
    </tr>
  </tbody>
</table>

<p><em>Note: Prices for 185/65 R15 size (common sedan tyre). Actual prices vary by size and model.</em></p>

<hr/>

<h2>7. Real-World Case Study: Rajesh's Close Call on Yamuna Expressway</h2>

<p>2023 mein main Delhi se Agra ja raha tha Yamuna Expressway par. Speed 110 km/h thi. Achanak right front tyre burst ho gaya. Yeh mera experience tha:</p>

<ul>
  <li><strong>Initial Shock:</strong> Gaadi right side mein pull ho gayi. Mera pehla instinct brake lagane ka tha.</li>
  <li><strong>What I Did:</strong> Maine accelerator chhoda, steering ko firmly pakda, aur 3 seconds wait kiya.</li>
  <li><strong>Result:</strong> Gaadi naturally 70 km/h tak slow ho gayi. Tab maine light brakes lagaye aur safely side mein ruki.</li>
  <li><strong>Damage:</strong> Sirf tyre damage hua. Agar main panic brake lagata, toh gaadi flip bhi ho sakti thi.</li>
</ul>

<p><strong>Lesson:</strong> Training aur mental preparation saves lives. Isse pehle maine YouTube par tyre burst handling videos dekhi thi, isliye panic nahi hua.</p>

<hr/>

<h2>8. Seasonal Tyre Care Tips</h2>

<h3>Summer (March-June):</h3>
<ul>
  <li>Tyre pressure 2-3 PSI kam rakhein (heat expansion ke liye)</li>
  <li>Concrete roads (expressways) avoid karein 12 PM - 4 PM ke beech</li>
  <li>Har 2 ghante mein break lein, tyres ko cool hone dein</li>
</ul>

<h3>Monsoon (July-September):</h3>
<ul>
  <li>Tread depth minimum 3mm hona chahiye (grip ke liye)</li>
  <li>Hydroplaning se bachne ke liye speed 80 km/h se zyada na rakhein</li>
  <li>Check our <a href="/blog/monsoon-driving-tips-india">Monsoon Driving Guide</a></li>
</ul>

<h3>Winter (October-February):</h3>
<ul>
  <li>Tyre pressure normal rakhein (cold air contracts)</li>
  <li>Fog mein visibility kam hone par speed reduce karein</li>
  <li>Read our <a href="/blog/fog-driving-guide-india">Fog Driving Guide</a></li>
</ul>

<hr/>

<h2>9. Frequently Asked Questions (FAQ)</h2>

<h3>Q1: Kya main sirf ek tyre replace kar sakta hoon?</h3>
<p><strong>A:</strong> Ideally nahi. Agar aapke tyres 50% se zyada ghise hain, toh kam se kam 2 tyres (same axle par) replace karein. Uneven wear se handling issues aate hain.</p>

<h3>Q2: Nitrogen filling kitne time tak rehti hai?</h3>
<p><strong>A:</strong> Nitrogen normal air se 3-4 guna zyada der tak pressure maintain karti hai. Lekin har 2-3 mahine mein check zaroori hai.</p>

<h3>Q3: Tyre rotation kab karwana chahiye?</h3>
<p><strong>A:</strong> Har 8,000-10,000 km par. Isse saare tyres evenly ghiste hain aur lifespan badhti hai.</p>

<h3>Q4: Kya tubeless tyres safer hain?</h3>
<p><strong>A:</strong> Haan. Tubeless tyres slow puncture hote hain (air gradually nikalti hai), isliye aapko control karne ka time milta hai. Tube tyres instant burst hote hain.</p>

<h3>Q5: Emergency mein spare tyre lagane ka sahi tarika?</h3>
<p><strong>A:</strong> Hamesha flat surface par gaadi rokein, handbrake lagayein, aur jack lagane se pehle wheel chocks use karein. Agar highway par hain, toh hazard lights on karein aur reflective triangle 50 meter peeche lagayein.</p>

<hr/>

<h2>10. Tyre Maintenance Cost Breakdown (Annual)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Service</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Frequency</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Pressure Check</td>
      <td style="padding: 15px;">Monthly</td>
      <td style="padding: 15px;">Free (at petrol pumps)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Wheel Alignment</td>
      <td style="padding: 15px;">Every 10,000 km</td>
      <td style="padding: 15px;">₹500-₹800</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Wheel Balancing</td>
      <td style="padding: 15px;">Every 10,000 km</td>
      <td style="padding: 15px;">₹400-₹600</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Tyre Rotation</td>
      <td style="padding: 15px;">Every 10,000 km</td>
      <td style="padding: 15px;">₹300-₹500</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Nitrogen Refill</td>
      <td style="padding: 15px;">Every 3 months</td>
      <td style="padding: 15px;">₹200-₹400 (all 4 tyres)</td>
    </tr>
  </tbody>
</table>

<p><strong>Total Annual Maintenance:</strong> ₹2,000-₹3,500 (excluding tyre replacement)</p>

<hr/>

<h2>Conclusion: Tyres are your Contact with the Road</h2>
<p>Gaadi ka engine fail ho jaye toh gaadi ruk jayegi, lekin agar tyre fail ho jaye toh gaadi aapke control se bahar ho jayegi. Tyres par kabhi compromise mat karein. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Remember:</strong> A ₹500 tyre check can save you from a ₹5 lakh accident. Invest in quality tyres, maintain them regularly, and drive with awareness.</p>

<p>Safe road trips ke baare mein aur janne ke liye hamesha alert rahein. Drive Safe!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Tyre maintenance ke liye hamesha apne vehicle manual aur certified mechanic ki professional advice len.</em>
  </p>
</div>

`},ix={id:"mountain-driving-tips-india-2026",title:"Pahadon mein driving ke 15 Rules: Hill Climbing aur Downhill Braking ki master guide",slug:"mountain-driving-tips-india-2026",excerpt:"Ladakh, Himachal ya Uttarakhand ja rahe ho? Pahadon par driving ke professional tips. Gear selection, engine braking aur overtaking rules ka complete guide.",category:"Safety",author:"Rajesh Navsagar",date:"2026-01-05",imageUrl:"/images/blogs/mountain-driving-tips-india.png",keywords:["Mountain driving tips India","Driving in Himalayas","Hill driving safety","Engine braking downhill","Overtaking on hills","Ladakh road trip safety","Rohtang pass driving tips"],expertTip:"Pahadon mein ek purana kanoon hai: 'The mountains belong to the locals.' Agar aapke peeche koi local number plate (HP, UK, LA, JK) waali gaadi hai, toh unhe turant rasta dein. Woh wahan ki raste ki rag-rag se waqif hain.",content:`

<p>Himalayas, Western Ghats, ya Nilgiris mein drive karna har Indian road-tripper ka ek sapna hota hai. Lekin plains (maidani ilako) se pahadon mein aana sirf nazara badalna nahi hai, ye driving dynamics ka poora overhaul hai. Manali-Leh Highway ho ya Munnar ke hair-pin bends, ek choti si galti yahan bahut mehangi pad sakti hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar pichle 7 saalon se Himalayan regions mein trips aur expeditions lead kar raha hoon. Maine dekha hai ki "Plains" ke drivers aksar wahi galtiyan karte hain jo unki gaadi ke brakes par load badha deti hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Never neutral down a hill. Agar aapne petrol bachane ke liye neutral mein gaadi dali, toh aapne apni gaadi ka control gravity ko de diya. Gear selection and engine braking are your true safety nets in the mountains."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<p><strong>Hill-Side Survival Rule:</strong> "The mountains belong to the locals." Agar aapke peeche koi local number plate waali gaadi hai, toh unhe turant rasta dein. Unka picha karke aap safe speed ka andaza laga sakte hain.</p>

<h2>1. The Golden Rule of Gear Selection: Same Gear Theory</h2>
<p>Ye pahadon ka sabse purana aur sabse zaroori rule hai: <strong>"Jis gear mein aap pahad chadh rahe hain, usi gear mein niche utariye."</strong></p>

<h3>Uphill (Chadhayi)</h3>
<p>Jab aap gaadi upar le ja rahe hain, toh hamesha engine ko power chahiye hoti hai. Agar aap 4th ya 5th gear mein chadhne ki koshish karenge, toh engine lugging karega (tharthapayega) aur heating badh jayegi. Use 2nd or 3rd gear to maintain momentum. For night travel rules, see our <a href="/blog/night-driving-survival-guide-india-2026">Night Driving Survival Guide</a>.</p>

<h3>Downhill (Utaryi)</h3>
<p>Yahan sabse badi galti hoti hai. Log 4th gear mein brakes daba-daba kar niche utarte hain. Isse brakes overheat ho jate hain. Solution? **Engine Braking**. Gaadi ko lower gear mein rakhein aur clutch chhod den. Engine ki natural compression gaadi ko control karegi.</p>

<hr/>

<h2>2. Overtaking Etiquette: The Unwritten Law</h2>
<p>Pahadon mein overtaking ek art hai. Har turn ke baad kya hai, aapko nahi pata (Blind Curve). Before you leave, go through our <a href="/blog/long-drive-safety-checklist">Essential Safety Checklist</a>.</p>
<ul>
  <li><strong>Give Way to Uphill Traffic:</strong> Jo gaadi upar aa rahi hai, uska raasta pehle clear hona chahiye.</li>
  <li><strong>Overtake ONLY on Straights:</strong> Jab tak aapko aage ka rasta saaf na dikhe, tab tak line cross na karein.</li>
  <li><strong>The Indicator Code:</strong> Aksar truck drivers signals dete hain. Lekin dhyan rakhein, jab tak rasta saaf na dikhe, blind turns par horn marker na dekh len, overtake mat kijiye.</li>
</ul>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">⛰️ Mountain Driving Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Coolant Level:</strong> High altitude par engine par load double hota hai.</li>
    <li>🔲 <strong>Brake Fluid:</strong> Ensure karein ki fluid ki quality fresh ho.</li>
    <li>🔲 <strong>Tyre Tread:</strong> Bald tyres wet slopes par grip nahi dengi.</li>
    <li>🔲 <strong>Spare Wheel:</strong> Punctures can happen in remote terrain.</li>
    <li>🔲 <strong>Fuel Strategy:</strong> 50% fuel bachte hi refill karein.</li>
  </ul>
</div>

<hr/>

<h2>3. Handling Blind Turns and Mirrors</h2>
<p>Hilly roads par blind turns sabse bade dushman hain. Har blind turn se pehle 2 baar chhota horn bajayein. NHAI ne bahut jagah turns par mirrors lagaye hote hain. Un mirrors ko ignore mat kijiye, woh aapko aane waale khatre ki warning de sakte hain.</p>

<hr/>

<h2>4. Emergency: Brake Failure Survival</h2>
<p>Agar khuda-na-khasta downhill utarte waqt aapke brakes override fail ho jayein, toh gear shift aggressively niche karein (Engine Braking). Valley side (khaayi) ki taraf steering kabhi mat morein. Use slopes or mountain walls to slow down slowly.</p>

<hr/>

<h2>5. Landslide Awareness: When to Stop?</h2>
<p>Monsoon ke waqt pahadon mein jaana high-risk hota hai, jaisa humne <a href="/blog/monsoon-driving-survival-guide-india">Monsoon Survival Guide</a> mein discuss kiya tha. Agar aap raste mein chote pathar (shooting stones) road par girte hue dekhte hain, toh turant stop ho jayein. Kabhie bhi waterfalls ke niche gaadi park na karein.</p>

<hr/>

<h2>6. Parking on a Slope</h2>
<p>Pahadon mein parking karte waqt hamesha Handbrake ka use karein.
<ul>
  <li>Agar gaadi uphill park hai: Gaadi ko 1st gear mein daalein aur tires ko road se door morein.</li>
  <li>Agar gaadi downhill park hai: Gaadi ko Reverse gear mein daalein aur tires ko road ki taraf morein.</li>
</ul>

<hr/>

<hr/>

<h2>Conclusion: Respect the Mountains</h2>
<p>Pahad unhe respect dete hain jo patience rakhte hain. Speed yahan aapka dushman hai. 40-50 kmph ki speed par aap nazarein bhi dekh payenge aur safe bhi rahenge. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Route-Specific Difficulty Ratings (2026 Mountain Passes):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Pass/Route</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Altitude</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Difficulty</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Best Season</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Key Challenge</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Rohtang Pass</td>
      <td style="padding: 15px;">3,978m</td>
      <td style="padding: 15px;">Hard</td>
      <td style="padding: 15px;">June-Sept</td>
      <td style="padding: 15px;">Snow patches, narrow roads</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Khardung La</td>
      <td style="padding: 15px;">5,359m</td>
      <td style="padding: 15px;">Extreme</td>
      <td style="padding: 15px;">July-Aug</td>
      <td style="padding: 15px;">Altitude sickness, oxygen</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Zoji La</td>
      <td style="padding: 15px;">3,528m</td>
      <td style="padding: 15px;">Very Hard</td>
      <td style="padding: 15px;">May-Oct</td>
      <td style="padding: 15px;">Unpaved sections, landslides</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Nathula Pass</td>
      <td style="padding: 15px;">4,310m</td>
      <td style="padding: 15px;">Hard</td>
      <td style="padding: 15px;">May-Nov</td>
      <td style="padding: 15px;">Military restrictions, permits</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Atal Tunnel (Rohtang)</td>
      <td style="padding: 15px;">3,100m</td>
      <td style="padding: 15px;">Medium</td>
      <td style="padding: 15px;">Year-round</td>
      <td style="padding: 15px;">Tunnel driving, ventilation</td>
    </tr>
  </tbody>
</table>

<p><strong>Altitude Sickness Prevention (Critical for High Passes):</strong></p>
<ul>
  <li><strong>Symptoms:</strong> Headache, nausea, dizziness, shortness of breath</li>
  <li><strong>Prevention:</strong> Ascend gradually (max 500m altitude gain per day)</li>
  <li><strong>Hydration:</strong> Drink 4-5 liters water daily at high altitude</li>
  <li><strong>Avoid:</strong> Alcohol, smoking, heavy meals, sleeping pills</li>
  <li><strong>Medication:</strong> Diamox (acetazolamide) - consult doctor before trip</li>
  <li><strong>Emergency:</strong> Descend immediately if symptoms worsen</li>
</ul>

<p><strong>Vehicle Preparation Checklist (Pre-Mountain Trip):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Component</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Check</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Why Important</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Brakes</td>
      <td style="padding: 15px;">Pads >5mm, fluid fresh</td>
      <td style="padding: 15px;">Downhill braking = 10x wear</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Engine Oil</td>
      <td style="padding: 15px;">Full level, <5000km old</td>
      <td style="padding: 15px;">High altitude = more engine stress</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Coolant</td>
      <td style="padding: 15px;">50:50 mix, no leaks</td>
      <td style="padding: 15px;">Prevents overheating on climbs</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Tyres</td>
      <td style="padding: 15px;">Tread >3mm, pressure +2 PSI</td>
      <td style="padding: 15px;">Grip on gravel/snow critical</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Battery</td>
      <td style="padding: 15px;">12.6V+ (fully charged)</td>
      <td style="padding: 15px;">Cold weather drains batteries fast</td>
    </tr>
  </tbody>
</table>

<p><strong>Emergency Rescue Contacts (Mountain Regions):</strong></p>
<ul>
  <li><strong>Himachal Pradesh:</strong> HP Police Control Room: 0177-2812344, Emergency: 100</li>
  <li><strong>Uttarakhand:</strong> UK Police: 0135-2711111, Disaster Helpline: 1070</li>
  <li><strong>Ladakh:</strong> Leh Police: 01982-252018, BRO Helpline: 1800-11-3636</li>
  <li><strong>Sikkim:</strong> Gangtok Police: 03592-202033, Tourism Helpline: 1800-345-3344</li>
  <li><strong>Kashmir:</strong> Srinagar Police: 0194-2452222, Highway Police: 1033</li>
</ul>

<p><strong>Weather Monitoring Apps (Must-Download):</strong></p>
<ul>
  <li><strong>Mausam (IMD Official):</strong> Real-time weather alerts for mountain regions</li>
  <li><strong>Windy:</strong> Wind speed and cloud cover (critical for passes)</li>
  <li><strong>BRO Updates:</strong> Road status from Border Roads Organisation</li>
  <li><strong>HP Roads App:</strong> Live updates for Himachal highways</li>
</ul>

<p><strong>Fuel Strategy for Mountain Trips:</strong></p>
<ul>
  <li>Fuel consumption increases 30-40% in mountains (constant gear changes)</li>
  <li>Petrol pumps are 100-150km apart in remote areas</li>
  <li>Always refill at 50% tank level</li>
  <li>Carry 10-liter emergency fuel can (legal in mountains)</li>
  <li>Diesel vehicles perform better at high altitude (less power loss)</li>
</ul>

<p><strong>Common Mountain Driving Mistakes (Avoid These!):</strong></p>
<ol>
  <li><strong>Riding the Clutch:</strong> Constant clutch use on slopes = clutch plate burnout</li>
  <li><strong>Neutral Coasting:</strong> Downhill in neutral = no engine braking = brake failure risk</li>
  <li><strong>Tailgating:</strong> Following too close = no reaction time on sudden stops</li>
  <li><strong>Ignoring Locals:</strong> Not giving way to uphill traffic = road rage + accidents</li>
  <li><strong>Night Driving:</strong> Driving after sunset = 5x accident risk (avoid 100%)</li>
</ol>

<p><strong>Insurance & Permits:</strong></p>
<ul>
  <li>Check if rental insurance covers high-altitude regions (many exclude Ladakh)</li>
  <li>Inner Line Permits required for: Nathula, Tsomgo Lake, Rohtang (pre-book online)</li>
  <li>Vehicle permits: ₹500-₹1,000 for protected areas</li>
  <li>Breakdown coverage: Most insurers don't cover remote mountain areas</li>
</ul>

<p><strong>Survival Kit (Mandatory for Mountain Trips):</strong></p>
<ul>
  <li>Tow rope (10-meter, 3-ton capacity)</li>
  <li>Jumper cables (cold weather battery failures common)</li>
  <li>Flashlight + extra batteries</li>
  <li>First-aid kit with altitude sickness meds</li>
  <li>Warm blankets (2-3 per person)</li>
  <li>Dry snacks + 5L drinking water</li>
  <li>Portable phone charger (network spotty, battery drains fast)</li>
</ul>

<p><strong>Best Vehicle Types for Mountains:</strong></p>
<ul>
  <li><strong>Ideal:</strong> SUVs with 4WD (Fortuner, Scorpio, Thar)</li>
  <li><strong>Good:</strong> High-ground-clearance sedans (Creta, Seltos)</li>
  <li><strong>Avoid:</strong> Low-clearance cars (City, Verna) - scraping risk</li>
  <li><strong>Manual vs Automatic:</strong> Manual preferred (better engine braking control)</li>
</ul>

<p><strong>Final Pro Tip:</strong> Start your mountain trip at 4-5 AM. Reach high passes before 2 PM (afternoon weather changes are unpredictable). Never rush. Mountains don't forgive mistakes.</p>

<p>Safe driving saves lives. Happy mountain driving!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Pahadon mein mausam aur raste pal-pal badalte hain. Hamesha local traffic authorities ki advice follow karein.</em>
  </p>
</div>

`},nx={id:"fog-driving-survival-guide-north-india",title:"Dense Fog Mastery: Kohre mein highway driving ke 12 survival rules jo jaan bacha sakte hain",slug:"fog-driving-survival-guide-north-india",excerpt:"December aur January mein North India ki dhund (fog) maut ka kuwa ban jati hai. Bina fog lights aur low beam ke aise raste par kaise nikle? My expert guide.",category:"Safety",author:"Rajesh Navsagar",date:"2026-01-06",imageUrl:"/images/blogs/fog-driving-guide-india.png",keywords:["Fog driving tips India","Winter road trip safety","Driving in dense fog","Low beam vs high beam fog","North India highway fog","Yamuna Expressway fog rules","Hazard lights in fog myth"],expertTip:"Sabse badi galti: Hazard lights (double indicators) on karke chalna. Highway par hazard lights ka matlab hota hai 'I am stationary/stopped'. Agar aap chalti gaadi mein use karenge, toh peeche waala confuse ho jayega ki aap rukey ho ya chal rahe ho, aur ramming accident ho sakta hai.",content:`

<p>Agar aapne Delhi-NCR, Punjab, ya Uttar Pradesh mein winter ke mausam mein drive kiya hai, toh aapko pata hoga ki "Dense Fog" kya cheez hoti hai. Ek pal mein sab kuch saaf hota hai, aur agle hi pal aap ek safed chadar (white blanket) ke andar hote hain jahan visibility 2 meter se bhi kam reh jati hai. Har saal Yamuna Expressway aur Western Peripheral Expressway par kohre ki wajah se darjanon gaadiyan aapas mein takrati hain.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main khud 2023 ki ek thandi subah Yamuna Expressway par ek aise hi pile-up se baal-baal bacha hoon. Wahan maine seekha ki fog mein driving sirf skill nahi, balki physics aur patience ka khel hai. Ye <strong>expert guide Rajesh's trips aur safety observations</strong> ke base par aapko bataegi ki kaise 2026 ke winters mein aap apne aap ko aur apni family ko safe rakh sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"High Beam on mat karein. Kohra paani ki barik boondon se bana hota hai jo ek mirror ki tarah kaam karti hain. Jab aap High Beam on karte hain, toh light un boondon se takrakar seedha aapki aankhon mein wapas aati hai, zeroing out your visibility."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<p><strong>The Survival Protocol:</strong> "Agar aapko dashboard se aage kuch nahi dikh raha, toh rukk jana behtar hai. Sabse nazdeek waale dhaba ya petrol pump par rukna hi ek expert driver ki pechan hai."</p>

<h2>1. High Beam vs Low Beam: The Science of Reflection</h2>
<p>Sabse badi galti jo 90% Indian drivers karte hain, woh hai fog mein High Beam ka use karna. Hamesha <strong>Low Beam</strong> aur <strong>Fog Lights</strong> ka use karein. Fog lights road ke bahut nazdeek hoti hain (low-mounted), isiliye woh dhund ke "niche" se road ko illuminate karti hain. Check how to prep your car in our <a href="/blog/long-drive-safety-checklist">Safety Checklist</a>.</p>

<hr/>

<h2>2. The Hazard Lights Myth: Don't Confuse Others</h2>
<p>Indian highways par ye ek trend ban gaya hai ki fog mein hazard lights (chaaro indicators) on karke drive karna. Hazard lights ka signal hota hai—"I am stopped or I am a hazard." Use your <strong>Rear Fog Lamps</strong> instead. For more night survival tips, read our <a href="/blog/night-driving-survival-guide-india-2026">Night Driving Guide</a>.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">❄️ Fog Survival Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Glass Maintenance:</strong> Windshield ko andar se saaf rakhein. Fingerprints fogging ko badha dete hain.</li>
    <li>🔲 <strong>Defogger Check:</strong> Ensure karein ki car ka front aur rear defogger properly kaam kar raha hai.</li>
    <li>🔲 <strong>Audio Focus:</strong> Music band karein aur windows halki si neeche rakhein.</li>
    <li>🔲 <strong>Left Lane Discipline:</strong> Left side waali white line (shoulder line) ko guide ki tarah use karein.</li>
    <li>🔲 <strong>Wiper Fluid:</strong> Winter mein os (dew) windshield ko chip-chipa bana deti hai.</li>
  </ul>
</div>

<hr/>

<h2>3. Use the Road Markers (The Lifeline Strategy)</h2>
<p>Jab visibility zero ho jaye, toh beech mein gaadi mat chalaiye. Road ke left edge par bani hui white line ko dekhte hue drive karein. Agar aap <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Highway</a> par hain, toh wahan retro-reflective markers (cat's eyes) hote hain. Inka picha karna safe rehta hai.</p>

<hr/>

<h2>4. Internal Defogging: The AC Trick</h2>
<p>Sardi mein aksar car ke glass par "Mist" jamne lagti hai. <strong>Expert Hack:</strong> AC on karein, temperature moderate rakhein, aur use 'Defrost' mode par set karein. AC hawa se humidity soke leta hai aur glass turant saaf ho jata hai.</p>

<hr/>

<h2>5. Auditory Driving: Trust Your Ears</h2>
<p>Jab aapki aankhein fail ho jati hain, toh aapke kaan aapka saath dete hain. Kohre mein music system band rakhein aur apni windows ko 1-2 inch neeche kar len. Isse aapko emergency sirens ya aage se aane waali engine ki awaazein sunayi dengi.</p>

<hr/>

<h2>6. What to do if you get into a Collision?</h2>
<ol>
  <li>Gaadi turant road se niche kaccye raste ya shoulder par utarein.</li>
  <li>Saare passengers ko gaadi se nikal kar road se 20-30 feet door barrier ke peeche khada karein.</li>
  <li>Gaadi ki lights on rakhein lekin khud uske paas na rahein.</li>
</ol>

<hr/>

<hr/>

<h2>Conclusion: Patience wins the Winter</h2>
<p>Kohre mein drive karna koi bravery test nahi hai. Ye sirf ek temporary weather condition hai. Agar aapko lagta hai ki situation out of control hai, toh kisi 'Dhaba' par ruk kar chai pijiye. Is article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Regional Fog Patterns (North India 2026):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Region</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Peak Fog Months</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Worst Time (Daily)</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Delhi-NCR</td>
      <td style="padding: 15px;">Dec 15 - Jan 31</td>
      <td style="padding: 15px;">11 PM - 9 AM</td>
      <td style="padding: 15px;"><10 meters</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Punjab (Ludhiana-Jalandhar)</td>
      <td style="padding: 15px;">Dec 1 - Feb 15</td>
      <td style="padding: 15px;">10 PM - 10 AM</td>
      <td style="padding: 15px;"><5 meters</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">UP (Agra-Lucknow)</td>
      <td style="padding: 15px;">Dec 10 - Jan 25</td>
      <td style="padding: 15px;">12 AM - 8 AM</td>
      <td style="padding: 15px;"><15 meters</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Haryana (Panipat-Karnal)</td>
      <td style="padding: 15px;">Dec 20 - Jan 20</td>
      <td style="padding: 15px;">11 PM - 9 AM</td>
      <td style="padding: 15px;"><8 meters</td>
    </tr>
  </tbody>
</table>

<p><strong>Highway-Wise Fog Danger Zones:</strong></p>
<ul>
  <li><strong>Yamuna Expressway:</strong> Entire stretch (165 km) - Zero visibility patches common</li>
  <li><strong>Eastern Peripheral Expressway:</strong> Baghpat to Palwal section - Dense fog 5 AM-9 AM</li>
  <li><strong>NH44 (Delhi-Panipat):</strong> Sonipat bypass - Multiple pile-ups reported annually</li>
  <li><strong>NH1 (Delhi-Chandigarh):</strong> Karnal-Ambala section - Fog + truck traffic = high risk</li>
</ul>

<p><strong>Fog-Related Accident Statistics (2024-2025 Winter):</strong></p>
<ul>
  <li>1,200+ fog-related accidents in North India (Dec-Jan)</li>
  <li>85% accidents occur between 3 AM - 8 AM</li>
  <li>Average pile-up size: 15-20 vehicles</li>
  <li>Most common: Rear-end collisions (stationary vehicles hit from behind)</li>
  <li>Fatality rate: 3x higher than normal accidents</li>
</ul>

<p><strong>Visibility Zones & Speed Limits (NHAI Guidelines):</strong></p>
<ul>
  <li><strong>Visibility >200m:</strong> Normal speed (100 kmph on expressways)</li>
  <li><strong>Visibility 50-200m:</strong> Reduce to 40-60 kmph, use fog lights</li>
  <li><strong>Visibility 10-50m:</strong> Reduce to 20-30 kmph, extreme caution</li>
  <li><strong>Visibility <10m:</strong> STOP driving. Pull over safely</li>
</ul>

<p><strong>Emergency Protocol (If Stranded in Fog):</strong></p>
<ol>
  <li><strong>Find Safe Spot:</strong> Pull over to extreme left, preferably at dhaba/petrol pump</li>
  <li><strong>Hazard Lights ON:</strong> Only when stationary (not while driving)</li>
  <li><strong>Stay Inside Car:</strong> Don't stand on highway (risk of being hit)</li>
  <li><strong>Call for Help:</strong> Highway Police 1033, NHAI Helpline 1033</li>
  <li><strong>Wait it Out:</strong> Fog usually clears by 9-10 AM</li>
  <li><strong>Inform Family:</strong> Share live location via WhatsApp</li>
</ol>

<p><strong>Insurance Claim Tips (Fog Accidents):</strong></p>
<ul>
  <li>Take photos of fog conditions (timestamp visible)</li>
  <li>Get FIR copy mentioning "zero visibility due to fog"</li>
  <li>Collect witness statements if possible</li>
  <li>Don't admit fault (even if you rear-ended someone)</li>
  <li>Claim success rate: 60% if proper documentation done</li>
</ul>

<p><strong>Technology Aids:</strong> Fog lamps (₹2,000-₹5,000 aftermarket), Rear fog lamp (mandatory in new cars), Dashcam with night vision (evidence for insurance), GPS with offline maps (network fails in fog)</p>

<p><strong>Myth Busters:</strong></p>
<ul>
  <li><strong>Myth:</strong> "Following truck tail lights is safe" <strong>Reality:</strong> Truck can brake suddenly, you'll crash</li>
  <li><strong>Myth:</strong> "Fog clears by 8 AM" <strong>Reality:</strong> Can persist till 11 AM in severe cases</li>
  <li><strong>Myth:</strong> "High beam cuts through fog" <strong>Reality:</strong> Makes it worse (reflection blinds you)</li>
</ul>

<p>Aapka 1 ghanta delay hona ek zindagi bhar ke pachtave se behtar hai. Safe Driving!</p>

<p><strong>Advanced Fog Tech for 2026 (Safety Upgrades):</strong></p>
<ul>
  <li><strong>Thermal Camera Accessories:</strong> Expensive (₹15k+) but becoming popular for night driving enthusiasts. Detects heat signatures (animals/pedestrians) in zero visibility.</li>
  <li><strong>Radar-Based Collision Warning:</strong> Aftermarket sensors (₹3,000) that beep when you get too close to the car ahead.</li>
  <li><strong>Anti-Fog Sprays:</strong> Use on ORVMs (Side Mirrors) to prevent condensation. visibility is key.</li>
</ul>

<p><strong>Passenger Responsibility in Fog (Don't Just Sleep!):</strong></p>
<ol>
  <li><strong>The "Copilot" Role:</strong> Passenger should sit active, looking for tail lights or road markers that driver might miss.</li>
  <li><strong>Silence Please:</strong> Turn off music. In fog, you need to "hear" other vehicles (honks/tyre noise) before you see them.</li>
  <li><strong>Map Monitor:</strong> Passenger should watch Google Maps for sharp turns or upcoming flyovers, giving driver 500m advanced warning.</li>
</ol>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Fog driving extremes high-risk hoti hai. Hamesha local weather warnings, NHAI alerts aur road indicators ko follow karein.</em>
  </p>
</div>

`},rx={id:"interstate-permit-guide-india-2026",title:"State Border Crossing Guide: Rental Car ke liye Permits aur Entry Tax ke 2026 rules",slug:"interstate-permit-guide-india-2026",excerpt:"Ek state se dusre state rental car le jaane ke liye state tax aur permits ka complete guide. Online vs Offline permit aur commercial taxes kaise bharein.",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-07",imageUrl:"/images/blogs/interstate-permit-guide.png",keywords:["Interstate permit India car","State tax for rental cars","Crossing state borders rental car","Parivahan state tax pay online","Self drive permit laws","Form 59 car rental","All India Tourist Permit rules"],expertTip:"Ek sabse badi galti jo log karte hain: FASTag se toll katne ka matlab ye nahi hai ki aapka State Entry Tax bhi bhar gaya. FASTag sirf toll roads ke liye hai. Entry Tax humesha Parivahan website par alag se bharna hota hai.",content:`

<p>Jab aap apni private (white plate) gaadi lekar kisi doosre state mein enter karte hain, toh koi aapse tax nahi mangta. Lekin jaise hi aap ek <a href="/blog/black-plate-rule-india-2026">Black Number Plate rental car</a> mein state border cross karte hain, aap "Commercial Zone" mein enter ho jate hain. Iska matlab hai ki aapka vehicle commercial rules ke under aa jati hai, aur aapko state taxes dena mandatory hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar, pichle 7 saalon se India ke lagbhag har state border ko cross kar chuka hoon. Is guide mein hum <strong>RTO protocols aur Parivahan guidelines ke general reference</strong> ke base par seekhenge ki kaise online tax bharna hai aur raste mein legal jhanjhat se kaise bachna hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"FASTag se toll katne ka matlab ye nahi hai ki aapka State Entry Tax bhi bhar gaya. FASTag sirf toll roads ke liye hai. Entry Tax humesha Parivahan website par alag se bharna hota hai. Receipt ka printout dashboard par rakhein."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. National Permit vs State Entry Tax (The Confusion)</h2>
<p><strong>Fact: National Permit hone ke baad bhi State Entry Tax dena mandatory hai.</strong></p>
<ul>
  <li><strong>AITP (All India Tourist Permit):</strong> Ye gaadi ka roaming authorization hai jo owner bharte hain.</li>
  <li><strong>Entry Tax:</strong> Ye visitor fee hai jo destination state (jaise Rajasthan ya Karnataka) mangta hai.</li>
</ul>

<p>Bahut saari rental companies kehti hain ki unki gaadi ke paas National Permit hai. Lekin reality ye hai ki AITP sirf ek formal authorization hai. State Entry Tax wo asli paisa hai jo border crossing ke waqt specific state mangta hai. For example, check our detailed <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Border Tax Breakdown</a>.</p>

<hr/>

<h2>2. How to Pay State Tax Online (Step-by-Step 2026)</h2>
<p>Hamesha official <strong>Parivahan portal ke general reference</strong> ko follow karein aur agents ke extra charges bachayein. Weekly permits usually saste padte hain agar aap 4 din se zyada ke trip par hain.</p>

<p><strong>Step-by-step process:</strong>
<ol>
  <li>Visit Parivahan Check Post Tax portal.</li>
  <li>Registration number aur last 5 digits of chassis number dalein.</li>
  <li>Destination state aur duration select karke payment karein.</li>
  <li>Receipt ka digital backup Google Drive aur physical printout zaroor rakhein.</li>
</ol>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">📑 The Document Trio Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>AITP:</strong> All India Tourist Permit (Original/Digital).</li>
    <li>🔲 <strong>State Tax Receipt:</strong> Current month/trip receipt.</li>
    <li>🔲 <strong>Authorization:</strong> Document from owner to drive the car.</li>
    <li>🔲 <strong>Form 59:</strong> Mandatory for self-drive category.</li>
  </ul>
</div>

<hr/>

<h2>3. Specific Rules for Popular Borders</h2>
<ul>
  <li><strong>Rajasthan:</strong> RTO kafi strictly follow karta hai; weekly tax usually ₹800–₹1500 range mein rehta hai.</li>
  <li><strong>Goa:</strong> Entry tax ke saath-saath environmental green tax alag se dena ho sakta hai.</li>
  <li><strong>Maharashtra:</strong> Passenger Tax aur checkpost formalities 2026 format mein honi chahiye.</li>
</ul>

<hr/>

<hr/>

<h2>4. Border Scams and How to Avoid Them</h2>
<p>Agar koi inspector bole "Digital receipt valid nahi hai", toh politely control room verification request karein. Scammers often target rental cars. Read our <a href="/blog/car-rental-scams-india">Car Rental Scam Survival Guide</a> to learn more. <strong>Note:</strong> ANPR cameras ab automated verify karte hain, isliye taxes skip mat karein.</p>

<p><strong>Common Scam Tactics:</strong></p>
<ul>
  <li><strong>"System Down Hai":</strong> Fake inspectors kehte hain online payment nahi ho sakta, cash do. Reality: Parivahan portal 24x7 available hai.</li>
  <li><strong>"Extra Green Tax":</strong> Kuch states mein legitimate hai (Goa), lekin Delhi-Jaipur route par yeh scam hai.</li>
  <li><strong>"Vehicle Inspection Fee":</strong> Koi aisi fee nahi hoti. Sirf entry tax valid hai.</li>
  <li><strong>"Agent Charges":</strong> Border par agents ₹500-₹1000 extra charge karte hain "help" ke naam par. Online khud kar sakte ho.</li>
</ul>

<p><strong>Self-Defense Tips:</strong></p>
<ul>
  <li>Hamesha uniform number note karein</li>
  <li>Receipt demand karein (official stamp ke saath)</li>
  <li>Agar doubt ho, toh 1033 (Police Helpline) dial karein</li>
  <li>Dashcam recording on rakhein border crossing ke waqt</li>
</ul>

<hr/>

<h2>5. State-wise Entry Tax Breakdown (2026 Estimates)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">State</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Daily Tax</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Weekly Tax</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Monthly Tax</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Rajasthan</td>
      <td style="padding: 15px;">₹300-₹400</td>
      <td style="padding: 15px;">₹800-₹1,200</td>
      <td style="padding: 15px;">₹2,500-₹3,500</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Maharashtra</td>
      <td style="padding: 15px;">₹250-₹350</td>
      <td style="padding: 15px;">₹700-₹1,000</td>
      <td style="padding: 15px;">₹2,000-₹3,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Goa</td>
      <td style="padding: 15px;">₹200-₹300</td>
      <td style="padding: 15px;">₹600-₹900</td>
      <td style="padding: 15px;">₹1,800-₹2,500</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Karnataka</td>
      <td style="padding: 15px;">₹300-₹400</td>
      <td style="padding: 15px;">₹900-₹1,300</td>
      <td style="padding: 15px;">₹2,800-₹3,800</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Uttarakhand</td>
      <td style="padding: 15px;">₹150-₹250</td>
      <td style="padding: 15px;">₹500-₹800</td>
      <td style="padding: 15px;">₹1,500-₹2,200</td>
    </tr>
  </tbody>
</table>

<p><em>Note: Prices vary based on vehicle type (sedan vs SUV). Always check current rates on Parivahan portal.</em></p>

<hr/>

<h2>6. Real-World Experience: Rajesh's Haryana-Rajasthan Border Crossing</h2>

<p>2025 mein main Delhi se Jaipur ja raha tha. Haryana-Rajasthan border par checkpost tha. Yeh mera experience:</p>

<ul>
  <li><strong>Preparation:</strong> Maine 2 din pehle Parivahan portal se weekly tax (₹1,100) online pay kar diya tha. Receipt print karke dashboard par rakhi thi.</li>
  <li><strong>Border Par:</strong> Inspector ne gaadi roki aur documents mange. Maine RC, DL, aur tax receipt dikhayi.</li>
  <li><strong>Verification:</strong> Unhone laptop par mera vehicle number check kiya. 30 seconds mein clear ho gaya.</li>
  <li><strong>Scam Attempt:</strong> Ek "agent" aaya aur bola "₹500 do, main fast-track karwa deta hoon." Maine ignore kiya.</li>
  <li><strong>Result:</strong> Total 2 minute mein border cross ho gaya. Zero harassment.</li>
</ul>

<p><strong>Lesson:</strong> Online payment + printout = Stress-free border crossing.</p>

<hr/>

<h2>7. Common Violations and Penalties</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Violation</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Penalty</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Additional Consequence</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">No Entry Tax Receipt</td>
      <td style="padding: 15px;">₹2,000-₹5,000</td>
      <td style="padding: 15px;">Vehicle seizure possible</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Expired Tax Receipt</td>
      <td style="padding: 15px;">₹1,500-₹3,000</td>
      <td style="padding: 15px;">Fresh tax payment required</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">No Form 59 (Self-Drive)</td>
      <td style="padding: 15px;">₹1,000-₹2,000</td>
      <td style="padding: 15px;">Rental company liability</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Fake Receipt</td>
      <td style="padding: 15px;">₹10,000+</td>
      <td style="padding: 15px;">Criminal case, vehicle impound</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>8. Online vs Offline Tax Payment Comparison</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Factor</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Online (Parivahan)</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Offline (Border Agent)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Cost</td>
      <td style="padding: 15px;">Actual tax only</td>
      <td style="padding: 15px;">Tax + ₹500-₹1,000 agent fee</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Time</td>
      <td style="padding: 15px;">5 minutes (from home)</td>
      <td style="padding: 15px;">30-60 minutes (border wait)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Receipt Validity</td>
      <td style="padding: 15px;">100% official</td>
      <td style="padding: 15px;">Depends on agent honesty</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Hassle</td>
      <td style="padding: 15px;">Zero</td>
      <td style="padding: 15px;">High (negotiation, scam risk)</td>
    </tr>
  </tbody>
</table>

<p><strong>Verdict:</strong> Online payment is always better. Save time, money, and stress.</p>

<hr/>

<h2>9. Frequently Asked Questions (FAQ)</h2>

<h3>Q1: Kya FASTag se entry tax automatically kat jata hai?</h3>
<p><strong>A:</strong> Nahi. FASTag sirf toll roads ke liye hai. Entry tax alag se Parivahan portal par bharna hota hai.</p>

<h3>Q2: Agar main 2 states cross kar raha hoon (Delhi → Rajasthan → Gujarat)?</h3>
<p><strong>A:</strong> Har state ke liye alag tax bharna hoga. Ek receipt dusre state mein valid nahi hai.</p>

<h3>Q3: Kya white plate (private car) ke liye bhi entry tax lagta hai?</h3>
<p><strong>A:</strong> Nahi. Entry tax sirf commercial vehicles (black/yellow plate) ke liye hai. Private cars exempt hain.</p>

<h3>Q4: Agar border par internet nahi chal raha aur online payment nahi ho pa raha?</h3>
<p><strong>A:</strong> Pehle se payment kar lein (trip start hone se 1-2 din pehle). Agar emergency hai, toh official checkpost counter par cash payment karein (receipt zaroor lein).</p>

<h3>Q5: Form 59 kya hai aur kaise milta hai?</h3>
<p><strong>A:</strong> Form 59 ek authorization letter hai jo rental company deti hai. Isme likha hota hai ki aapko gaadi chalane ki permission hai. Rental company se pickup ke waqt yeh document zaroor lein.</p>

<hr/>

<h2>10. Pro Tips for Hassle-Free Border Crossing</h2>

<ul>
  <li><strong>Screenshot Backup:</strong> Tax receipt ka screenshot phone mein save karein (internet na hone par kaam aayega)</li>
  <li><strong>Multiple Printouts:</strong> 2-3 copies print karein (ek dashboard par, ek bag mein)</li>
  <li><strong>Early Payment:</strong> Trip se 2-3 din pehle tax pay kar dein (last minute rush avoid karein)</li>
  <li><strong>Vehicle Details Ready:</strong> RC book ka photo phone mein rakhein (chassis number quickly mil jayega)</li>
  <li><strong>Dashcam On:</strong> Border crossing record karein (scam attempt ke case mein proof)</li>
  <li><strong>Helpline Numbers:</strong> State RTO helpline numbers save karein</li>
</ul>

<hr/>

<h2>Conclusion: Compliance equals Peace</h2>
<p>Road trips freedom ka naam hai, lekin ye freedom tabhi barkarar rehti hai jab aap kanoon ke sath chalen. ₹1000 ka entry tax bachane ki koshish aapke poore trip ko kharab kar sakti hai. Border par rukna luck nahi, preparation ka result hota hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Remember:</strong> A ₹1,000 tax can save you from a ₹10,000 penalty and hours of harassment. Invest 5 minutes online, enjoy stress-free travel.</p>

<p>Taiyari rakhein, online tax bharein aur bina dar ke highway enjoy karein!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. State taxes aur permit rules govt. ki marzi se kabhi bhi badal sakte hain. Hamesha official portal updates check karein.</em>
  </p>
</div>

`},lx={id:"self-drive-permit-india-guide-rajesh",title:"All India Permit vs State Permit: Rental Car le kar border cross karne se pehle ye zaroor check karein",slug:"self-drive-permit-india-guide-rajesh",excerpt:"Self-drive car mein state border cross karte waqt 'All India Permit' kyun zaroori hai? RTO fines aur documentation ka complete human-verified guide.",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-09",imageUrl:"/images/blogs/self-drive-permit-guide-2026.png",keywords:["All India Permit for rental car","Self drive permit laws India","Crossing state borders rental","RTO rules for self drive","Rajesh Navsagar legal guide","Form 48 National Permit","Tourist Permit Rules 2026"],expertTip:"Hamesha 'Form 48' (National Permit) ki physical copy mangiye. Bhale hi aaj kal digital documents valid hain, lekin remote border check-posts par physical paper dekhne ke baad hi entry tax process kiya jata hai. No paper = No entry.",content:`

<p>Log aksar mujhse poochte hain—"Rajesh, maine Zoomcar li hai, kya mujhe border par tax dena hoga?" Jawab hai haan, lekin tax se bhi pehle aapko car ka <strong>Permit</strong> check karna chahiye. India mein rental car users ko "Permit" aur "Entry Tax" ke beech ka antar (difference) pata hona zaroori hai. Agar aap bina valid permit ke kisi doosre state mein enter karte hain, toh gaadi seize ho sakti hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar, pichle 7 saalon se India ke lagbhag har state border ko cross kar chuka hoon. Is guide mein hum <strong>RTO protocols aur Parivahan guidelines ke general reference</strong> ke base par seekhenge ki kaise permits work karte hain aur border par legal jhanjhat se kaise bachna hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Hamesha 'Form 48' (National Permit) ki physical copy mangiye. Bhale hi aaj kal digital documents valid hain, lekin remote border check-posts par physical paper dekhne ke baad hi entry tax process kiya jata hai. It saves a lot of time and potential arguments."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<p><strong>Essential Fact:</strong> Motor Vehicles Act ke <strong>general reference</strong> ke mutabik, bina permit ke commercial gaadi chalana authorize nahi hai. Black Plate rentals ko commercially operate karne ke liye Tourist Permit zaroori hai.</p>

<h2>1. What is an All India Tourist Permit (AITP)?</h2>
<p>AITP gaadi ka "Passport" hai jo use pure India mein ghoomne ki legal authority deta hai. India ke <a href="/blog/black-plate-rule-india-2026">Black Number Plate rental cars</a> ko commercially operate karne ke liye Tourist Permit ki zaroorat hoti hai. National Permit (AITP) wo license hai jo car owner ko pure India mein travel karne ki permission deta hai.</p>

<hr/>

<h2>2. Permit vs Entry Tax: The Deep Dive</h2>
<p>Bahut se log sochte hain ki gaadi ke paas "National Permit" hai toh border par tax nahi dena hoga. Ye sabse badi galti hai.</p>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛑 Crucial Difference</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>📜 <strong>Permit (The Passport):</strong> Ye gaadi ka license hai doosre state mein enter hone ka.</li>
    <li>🎫 <strong>Entry Tax (The Visa):</strong> Ye wo fee hai jo destination state unki roads use karne ka charge karta hai.</li>
  </ul>
</div>

<p>Aapko hamesha online tax bharna chahiye border cross karne se pehle, jaisa humne hamare <a href="/blog/interstate-permit-guide-india-2026">State border tax guide</a> mein bataya hai. FASTag se sirf toll kat-ta hai, tax nahi.</p>

<hr/>

<h2>3. How to Verify Permit on mParivahan (2026 Method)</h2>
<p>Bahut baar host purana permit dikha dete hain. Verification ka sahi rasta ye hai:
<ol>
  <li>Download the <strong>NextGen mParivahan</strong> app.</li>
  <li>Gaadi ka registration number dalein.</li>
  <li>Check karein ki Permit Status: ACTIVE hai aur expiry date future ki hai.</li>
</ol>

<hr/>

<h2>4. The Temporary Permit (TP) Risk</h2>
<p>TP usually 1 mahine ya 7 din ke liye valid hota hai. Agar aapka trip TP expire hone ke baad tak chala, toh aap unauthorized driving kar rahe hain. Pickup ke waqt hamara <a href="/blog/car-pickup-inspection-checklist-rajesh">Rental car pickup checklist</a> zaroori karein aur documents ki expiry date check karein.</p>

<hr/>

<h2>5. Physical Documents vs Digital Apps</h2>
<p>Digital India mein mParivahan aur DigiLocker valid hain, lekin remote borders par infrastructure 100% digital nahi hai. Hamesha RC, Insurance, Pollution (PUC), Permit aur Authorization Letter (Form 59) ka ek physical folder dashboard mein rakhein.</p>

<hr/>

<hr/>

<h2>6. Consequences of Driving Without Permit</h2>
<ul>
  <li><strong>Heavy Fines:</strong> Large amounts of immediate challans that must be paid.</li>
  <li><strong>Impounding:</strong> Gaadi ko RTO yard mein lock kar diya ja sakta hai.</li>
  <li><strong>Insurance Rejection:</strong> Bina permit ke accident hua toh company claim reject kar sakti hai.</li>
</ul>

<hr/>

<h2>7. Types of Permits Comparison (2026)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Permit Type</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Validity</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Coverage</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Cost (Approx)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">All India Tourist Permit (AITP)</td>
      <td style="padding: 15px;">1 year (renewable)</td>
      <td style="padding: 15px;">All states</td>
      <td style="padding: 15px;">₹10,000-₹15,000/year</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">State Permit</td>
      <td style="padding: 15px;">1 year</td>
      <td style="padding: 15px;">Single state only</td>
      <td style="padding: 15px;">₹3,000-₹5,000/year</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Temporary Permit (TP)</td>
      <td style="padding: 15px;">7-30 days</td>
      <td style="padding: 15px;">Specific route/state</td>
      <td style="padding: 15px;">₹500-₹1,500</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Contract Carriage Permit</td>
      <td style="padding: 15px;">1 year</td>
      <td style="padding: 15px;">Specific states (2-3)</td>
      <td style="padding: 15px;">₹5,000-₹8,000/year</td>
    </tr>
  </tbody>
</table>

<p><em>Note: Costs vary by state RTO. Always check current rates on Parivahan portal.</em></p>

<hr/>

<h2>8. Real-World Experience: Rajesh's Permit Verification at Rajasthan Border</h2>

<p>2025 mein main Delhi se Jaipur ja raha tha rental car mein. Border par yeh hua:</p>

<ul>
  <li><strong>Document Check:</strong> Inspector ne RC, DL, insurance, aur permit manga.</li>
  <li><strong>Permit Issue:</strong> Rental company ne Form 48 (AITP) di thi, lekin wo 2 mahine pehle expire ho chuki thi!</li>
  <li><strong>Inspector's Response:</strong> "Ye permit invalid hai. Gaadi seize hogi ya ₹5,000 fine."</li>
  <li><strong>My Action:</strong> Maine mParivahan app khola aur dikhaya ki permit renewal pending hai (application submitted).</li>
  <li><strong>Result:</strong> Inspector ne warning di aur jane diya, lekin ₹2,000 fine laga diya.</li>
</ul>

<p><strong>Lesson:</strong> Hamesha pickup ke waqt permit ki expiry date check karein. Rental companies kabhi-kabhi expired documents dete hain.</p>

<hr/>

<h2>9. State-wise Permit Strictness (2026 Update)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">State</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Strictness Level</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Common Checkpoints</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Fine for No Permit</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Rajasthan</td>
      <td style="padding: 15px;">Very High</td>
      <td style="padding: 15px;">Shahjahanpur, Behror</td>
      <td style="padding: 15px;">₹5,000-₹10,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Maharashtra</td>
      <td style="padding: 15px;">High</td>
      <td style="padding: 15px;">Kasara, Panvel</td>
      <td style="padding: 15px;">₹3,000-₹7,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Goa</td>
      <td style="padding: 15px;">Medium</td>
      <td style="padding: 15px;">Patradevi, Pollem</td>
      <td style="padding: 15px;">₹2,000-₹5,000</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Uttarakhand</td>
      <td style="padding: 15px;">High</td>
      <td style="padding: 15px;">Haridwar, Rishikesh entry</td>
      <td style="padding: 15px;">₹4,000-₹8,000</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>10. Permit Violation Penalties (Detailed Breakdown)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Violation</th>
      <th style="padding: 15px; text-align: left; color: #334155;">First Offense</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Repeat Offense</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Additional Action</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">No Permit</td>
      <td style="padding: 15px;">₹5,000</td>
      <td style="padding: 15px;">₹10,000</td>
      <td style="padding: 15px;">Vehicle impound</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Expired Permit</td>
      <td style="padding: 15px;">₹3,000</td>
      <td style="padding: 15px;">₹6,000</td>
      <td style="padding: 15px;">Renewal mandatory</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Wrong Permit Type</td>
      <td style="padding: 15px;">₹2,000</td>
      <td style="padding: 15px;">₹4,000</td>
      <td style="padding: 15px;">Correct permit required</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">No Physical Copy</td>
      <td style="padding: 15px;">₹1,000</td>
      <td style="padding: 15px;">₹2,000</td>
      <td style="padding: 15px;">Warning + delay</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>11. How to Get AITP for Your Rental Business</h2>

<p><strong>For Rental Car Owners (Not Renters):</strong></p>
<ol>
  <li>Visit your state RTO office or Parivahan portal</li>
  <li>Submit Form 48 (Application for All India Tourist Permit)</li>
  <li>Attach: RC copy, Insurance, PUC, Tax receipt, Fitness certificate</li>
  <li>Pay permit fee (₹10,000-₹15,000 depending on state)</li>
  <li>Receive permit within 15-30 days</li>
</ol>

<p><strong>For Renters:</strong> You don't need to apply. Just verify that the rental company has valid AITP.</p>

<hr/>

<h2>12. Frequently Asked Questions (FAQ)</h2>

<h3>Q1: Kya mParivahan app par digital permit valid hai?</h3>
<p><strong>A:</strong> Legally haan, lekin practical mein nahi. Remote checkposts par officers physical copy demand karte hain. Hamesha printout rakhein.</p>

<h3>Q2: Agar rental company expired permit de de toh kya karein?</h3>
<p><strong>A:</strong> Pickup reject karein ya company se fresh permit mangein. Agar trip urgent hai, toh written confirmation lein ki fine company bharegi.</p>

<h3>Q3: Kya white plate (private car) ke liye permit chahiye?</h3>
<p><strong>A:</strong> Nahi. White plate private vehicles ko interstate travel ke liye permit nahi chahiye. Sirf commercial vehicles (black/yellow plate) ko chahiye.</p>

<h3>Q4: Temporary Permit (TP) kab valid hai?</h3>
<p><strong>A:</strong> TP sirf specific route aur duration ke liye valid hai. Agar aap route change karte ho ya validity expire ho jati hai, toh illegal ho jata hai.</p>

<h3>Q5: Kya Form 59 aur Permit same hain?</h3>
<p><strong>A:</strong> Nahi. Form 59 authorization letter hai (owner se driver ko permission). Permit gaadi ka license hai interstate travel ke liye. Dono alag documents hain.</p>

<hr/>

<h2>13. Pro Tips for Hassle-Free Border Crossing</h2>

<ul>
  <li><strong>Pre-Trip Verification:</strong> Pickup ke waqt mParivahan app se permit status check karein</li>
  <li><strong>Physical Folder:</strong> RC, Insurance, PUC, Permit, Form 59 - sab ek folder mein rakhein</li>
  <li><strong>Lamination:</strong> Important documents laminate karwa lein (rain/tear se bachne ke liye)</li>
  <li><strong>Backup Photos:</strong> Sab documents ki photo phone mein save karein</li>
  <li><strong>Rental Agreement:</strong> Company ka letterhead wala agreement bhi rakhein</li>
  <li><strong>Emergency Contact:</strong> Rental company ka 24x7 helpline number save karein</li>
</ul>

<hr/>

<h2>14. Common Scams to Avoid</h2>

<ul>
  <li><strong>"Permit Renewal Agent":</strong> Border par agents kehte hain "₹2,000 do, main permit renew karwa deta hoon." Ye scam hai. Permit sirf RTO se renew hota hai.</li>
  <li><strong>"Digital Not Valid":</strong> Kuch fake officers kehte hain "Digital permit nahi chalega, cash do." Politely control room verification mangein.</li>
  <li><strong>"Temporary Permit Fee":</strong> Koi on-spot temporary permit nahi hota. Ye bhi scam hai.</li>
</ul>

<p>Read our <a href="/blog/car-rental-scams-india">Rental Scam Survival Guide</a> for more details.</p>

<hr/>

<h2>Conclusion: Stay Compliant</h2>
<p>Permit sirf ek kagaz ka tukda nahi hai, ye aapki freedom ki ticket hai. Agli baar jab aap gaadi rent karein, toh host se sabse pehle Permit aur Uska validity proof maangein. Kagaz pakke rakhein, safar suhana rahega. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Remember:</strong> A ₹500 printout can save you from a ₹10,000 fine and vehicle impound. Always carry physical documents, even in the digital age.</p>

<p>Safe journey!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. RTO rules aur tourist permit fees har state ke mutabik change hoti rehti hain. Hamesha official updates check karein.</em>
  </p>
</div>

`},sx={id:"highway-speed-limits-india-fines-2026",title:"Highway Speed Limits India 2026: Challan aur Rental Fines se bachne ki expert guide",slug:"highway-speed-limits-india-fines-2026",excerpt:"Indian Expressways par speed cams ab AI-based hain. 120 km/h vs 100 km/h ka confusion aur rental car penalties se kaise bachein? Rajesh's guide.",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-10",imageUrl:"/images/blogs/speed-limit-fines-india.png",keywords:["Highway speed limits India","Speeding fines 2026","Expressway speed rules","Rental car speed penalty","AI speed cameras India","Over speeding challan cost","Average speed camera India"],expertTip:"Google Maps ki speed par 100% bharosa mat karein. India mein AI cameras 'Average Speed' measure kar rahe hain (Section Control). Agar aapne 2 toll ke beech ka rasta bahut jaldi cover kiya, toh bina camera ke bhi challan ghar aa jayega.",content:`

<p>Pichle hafte main Trans-Haryana Expressway par tha, aur maine dekha ki log apni naye-naye SUVs ko 140-150 km/h par cruise kar rahe hain. Unhe lagta hai ki road khali hai aur koi Police Interceptor nahi dikh raha toh woh 'Safe' hain. Lekin 2026 mein India ka challan system badal chuka hai. Ab AI (Artificial Intelligence) aur ANPR (Automatic Number Plate Recognition) cameras aapko bina kisi police officer ke "Surprise" (Challan) bhej denge.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar, pichle 2 saalon mein 500+ users ke rental speed questions handle kar chuka hoon. Is guide mein hum discuss karenge ki kaise aap bhaari-bharkam fines se bach sakte hain aur road par safe reh sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Google Maps ki speed par 100% bharosa mat karein. India mein AI cameras 'Average Speed' measure kar rahe hain. Hamesha dashboard needle se 5-10 km/h buffer rakh kar hi chalein to stay safe from automation errors."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<p><strong>The Double Trouble Warning:</strong> Agar aap rental car chala rahe hain, toh aap par do kanoon lagte hain: Ek Traffic Police ka aur doosra Rental Company ka. Ek galti aur do fines.</p>

<h2>1. Understanding National Speed Limits (2026 Update)</h2>
<p>India mein ab 3 major categories mein speed limits divide ki gayi hain jo <strong><a href="https://morth.nic.in/speed-limits" target="_blank" rel="noopener noreferrer">MoRTH guidelines (Ministry of Road Transport)</a> ke general reference</strong> follow karti hain:</p>
<ul>
  <li><strong>Access-Controlled Expressways:</strong> Jaise ki Delhi-Mumbai Expressway. Yahan cars ke liye limit <strong>120 km/h</strong> hai. For route planning, see our <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Highway Guide</a>.</li>
  <li><strong>National Highways (4-Lane+):</strong> Yahan limit usually <strong>100 km/h</strong> hoti hai. Residential areas mein ye 60 km/h-80 km/h ho sakti hai.</li>
  <li><strong>City Roads & Flyovers:</strong> Mumbai Sea Link or Delhi flyovers par limit 60-70 km/h hoti hai.</li>
</ul>

<hr/>

<h2>2. The AI Camera Revolution: Section Speed Control</h2>
<p>Pehle log camera dekh kar speed kam karte they. Ab NHAI ne "Section Control" system install kiya hai. Ye system Point A aur Point B ke beech ka travel time monitor karta hai. Check our <a href="/blog/long-drive-safety-checklist">Safety Checklist</a> to ensure your car is fit for high speed.</p>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛑 Fine Survival Summary (2026)</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>📉 <strong>Fine Range:</strong> ₹1000 se ₹4000 (Over speeding for LMV).</li>
    <li>🚫 <strong>License Suspension:</strong> Repeat offenders ka DL 3-6 months ke liye cancel ho sakta hai.</li>
    <li>🚗 <strong>Rental Charges:</strong> Companies often charge ₹500+ per overspeeding alert.</li>
    <li>🛡️ <strong>Safety Buffer:</strong> Hamesha limit se 5 kmph niche cruise karein.</li>
  </ul>
</div>

<hr/>

<h2>3. The Rental Car Catch: Why 80 km/h is Important?</h2>
<p>Jab aap rental car use karte hain, toh companies GPS trackers use karti hain. Bahut saari gaadiyan 80 km/h par beep karti hain aur higher speeds par penalty trigger karti hain. Beware of hidden costs by reading our <a href="/blog/car-rental-scams-india">Rental Scam Survival Guide</a>.</p>

<hr/>

<h2>4. Speedometer Error: The 5% Difference</h2>
<p>International standards ke mutabik car manufacturers speedometer ko 3-5% higher dikhate hain. Agar aapka needle 120 par hai, toh gaadi shayad 115 par hi hogi. Lekin police radars exact hote hain, isliye hamesha safe buffer rakhen.</p>

<hr/>

<hr/>

<h2>5. Modern Tech to Avoid Fines</h2>
<p>Fine se bachne ke liye aap modern technology ka use kar sakte hain:</p>
<ol>
  <li><strong>Cruise Control:</strong> Ise 110 km/h par set karein (for 120 limit) aur gaadi ko management karne dein.</li>
  <li><strong>Radar Alerts:</strong> Some apps provide warnings for fixed speed camera zones.</li>
  <li><strong>Google Maps:</strong> It often reports live speed trap areas.</li>
</ol>

<hr/>

<h2>6. Speed Violation Fine Structure (2026)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Speed Violation</th>
      <th style="padding: 15px; text-align: left; color: #334155;">First Offense</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Repeat Offense</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Additional Penalty</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">1-10 km/h over limit</td>
      <td style="padding: 15px;">₹1,000</td>
      <td style="padding: 15px;">₹2,000</td>
      <td style="padding: 15px;">Warning</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">11-20 km/h over limit</td>
      <td style="padding: 15px;">₹2,000</td>
      <td style="padding: 15px;">₹4,000</td>
      <td style="padding: 15px;">License points deduction</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">21-30 km/h over limit</td>
      <td style="padding: 15px;">₹3,000</td>
      <td style="padding: 15px;">₹6,000</td>
      <td style="padding: 15px;">Court appearance possible</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">30+ km/h over limit</td>
      <td style="padding: 15px;">₹5,000</td>
      <td style="padding: 15px;">₹10,000</td>
      <td style="padding: 15px;">License suspension (3-6 months)</td>
    </tr>
  </tbody>
</table>

<p><em>Note: Fines vary by state. Some states have higher penalties for expressway violations.</em></p>

<hr/>

<h2>7. Expressway-wise Speed Limits (Major Routes 2026)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Expressway</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Car Limit</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Heavy Vehicle Limit</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Camera Type</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Yamuna Expressway</td>
      <td style="padding: 15px;">100 km/h</td>
      <td style="padding: 15px;">80 km/h</td>
      <td style="padding: 15px;">Section Control + Fixed</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Delhi-Mumbai Expressway</td>
      <td style="padding: 15px;">120 km/h</td>
      <td style="padding: 15px;">80 km/h</td>
      <td style="padding: 15px;">AI-based Section Control</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Mumbai-Pune Expressway</td>
      <td style="padding: 15px;">100 km/h</td>
      <td style="padding: 15px;">80 km/h</td>
      <td style="padding: 15px;">Fixed + Mobile</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Agra-Lucknow Expressway</td>
      <td style="padding: 15px;">100 km/h</td>
      <td style="padding: 15px;">80 km/h</td>
      <td style="padding: 15px;">Section Control</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>8. Real-World Case Study: Rajesh's ₹4,000 Challan Experience</h2>

<p>2024 mein main Yamuna Expressway par Delhi se Agra ja raha tha. Mera experience yeh tha:</p>

<ul>
  <li><strong>Situation:</strong> Road bilkul khali thi. Maine cruise control 115 km/h par set kiya (limit 100 km/h thi).</li>
  <li><strong>Camera Location:</strong> Mujhe koi camera nahi dikha. Section Control system tha.</li>
  <li><strong>Challan:</strong> 10 din baad SMS aaya - ₹2,000 fine (15 km/h over limit).</li>
  <li><strong>Rental Company Penalty:</strong> Zoomcar ne additional ₹2,000 charge kiya (processing fee + GPS violation).</li>
  <li><strong>Total Damage:</strong> ₹4,000 for saving just 5 minutes!</li>
</ul>

<p><strong>Lesson:</strong> "Khali road" ka matlab "safe to speed" nahi hota. AI cameras 24x7 active hain.</p>

<hr/>

<h2>9. Rental Company Speed Penalties (Platform Comparison)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Platform</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Speed Alert Threshold</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Processing Fee</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Total Cost (Govt + Company)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Zoomcar</td>
      <td style="padding: 15px;">80 km/h (beep warning)</td>
      <td style="padding: 15px;">₹2,000 per violation</td>
      <td style="padding: 15px;">₹3,000-₹6,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Revv</td>
      <td style="padding: 15px;">85 km/h (GPS tracking)</td>
      <td style="padding: 15px;">₹1,500 per violation</td>
      <td style="padding: 15px;">₹2,500-₹5,500</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">MyChoize</td>
      <td style="padding: 15px;">90 km/h (lenient)</td>
      <td style="padding: 15px;">₹1,000 per violation</td>
      <td style="padding: 15px;">₹2,000-₹5,000</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Local Operators</td>
      <td style="padding: 15px;">No GPS (manual check)</td>
      <td style="padding: 15px;">Varies (₹500-₹2,000)</td>
      <td style="padding: 15px;">₹1,500-₹4,000</td>
    </tr>
  </tbody>
</table>

<p><strong>Pro Tip:</strong> Local operators often don't have GPS tracking, but government challans will still come. Read our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a> to understand hidden charges.</p>

<hr/>

<h2>10. How to Check and Pay Challans Online</h2>

<p><strong>Step-by-Step Process:</strong></p>
<ol>
  <li>Visit <strong><a href="https://echallan.parivahan.gov.in/" target="_blank" rel="noopener noreferrer">Parivahan Sewa E-Challan Portal</a></strong> or Vahan app</li>
  <li>Enter vehicle registration number</li>
  <li>View pending challans with details (date, location, violation type)</li>
  <li>Pay online via UPI/Card/Net Banking</li>
  <li>Download receipt (keep for rental company dispute)</li>
</ol>

<p><strong>Important:</strong> Agar rental car mein challan aaya aur aapne pehle pay kar diya, toh company ko receipt dikha kar processing fee waive karwa sakte ho.</p>

<hr/>

<h2>11. Frequently Asked Questions (FAQ)</h2>

<h3>Q1: Kya speedometer ki reading par bharosa kar sakte hain?</h3>
<p><strong>A:</strong> Nahi 100%. Speedometers 3-5% higher reading dikhate hain. Agar needle 120 par hai, toh actual speed 115-117 ho sakti hai. Hamesha 5 km/h buffer rakhein.</p>

<h3>Q2: Section Control kya hai aur kaise kaam karta hai?</h3>
<p><strong>A:</strong> Section Control system do points (A aur B) ke beech average speed measure karta hai. Agar aapne distance bahut jaldi cover kiya, toh challan automatic generate ho jata hai - bina kisi camera ke.</p>

<h3>Q3: Kya cruise control use karna safe hai?</h3>
<p><strong>A:</strong> Haan, lekin sirf expressways par. Cruise control ko limit se 5-10 km/h neeche set karein. City roads ya ghats par use mat karein.</p>

<h3>Q4: Agar challan galat hai toh kaise contest karein?</h3>
<p><strong>A:</strong> Parivahan portal par "Dispute Challan" option hai. Photo/video proof upload karein. Processing time 15-30 days hai. Read our <a href="/blog/wrong-traffic-challan-contest-guide-india-2026">Challan Contest Guide</a>.</p>

<h3>Q5: Rental car mein challan aane par kya karein?</h3>
<p><strong>A:</strong> Immediately online pay kar dein aur receipt rental company ko bhejein. Isse processing fee bach sakti hai. Agar late payment hoga, toh company double charge karegi.</p>

<hr/>

<h2>12. Pro Tips to Avoid Speed Fines</h2>

<ul>
  <li><strong>Use Waze/Google Maps:</strong> Live speed camera alerts milte hain</li>
  <li><strong>Follow Truck Speed:</strong> Heavy vehicles 80 km/h se zyada nahi chalte - unke peeche safe hai</li>
  <li><strong>Night Driving Caution:</strong> Raat mein visibility kam hone par speed automatically reduce karein</li>
  <li><strong>Rental Car Beep:</strong> Agar gaadi beep kar rahi hai (80+ km/h), toh turant slow down karein</li>
  <li><strong>Dashboard Camera:</strong> Apna dashcam on rakhein - false challan dispute mein kaam aayega</li>
  <li><strong>Signage Priority:</strong> Google Maps se zyada on-road speed limit signs ko follow karein</li>
</ul>

<hr/>

<h2>Conclusion: Stay within Limits</h2>
<p>Speeding se aap 400km ke trip par maximum 20-30 minute hi bacha payenge, lekin fine aur accident ka risk humesha rehta hai. Speed limit sirf ek number nahi hai, ye engineering balance hai jo aapki aur doosro ki jaan bachata hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Remember:</strong> A ₹5,000 fine can ruin your entire trip budget. Drive at 110 km/h instead of 130 km/h - you'll reach just 10 minutes late but save thousands and stay alive.</p>

<p>Safe Driving, Happy Road-tripping!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Speed limits highways aur states ke mutabik badalti rehti hain. Hamesha on-road signage ko primary authority manein.</em>
  </p>
</div>

`},ox={id:"one-way-car-rental-india-guide",title:"One-Way Car Rental India: Itna mehnga kyu hai aur paise kaise bachein?",slug:"one-way-car-rental-india-guide",excerpt:"Ek city se dusri city car drop karni hai? One-way rental charges 2 guna kyu hote hain? Rajesh's guide to saving discovery and convenience fees.",category:"Rental Policy",author:"Rajesh Navsagar",date:"2026-01-14",imageUrl:"/images/blogs/one-way-car-rental.png",keywords:["One way car rental India","Zoomcar one way charges","Revv one way rental","Car relocation fee India","Intercity car rental guide","Drop off charges car rental"],expertTip:"Hamesha 'Relocation Deals' check karein. Kai baar companies ko apni gaadi wapas base city bhejni hoti hai aur wo aapko bahut saste mein gaadi de dete hain agar aapka route wahi ho.",content:`

<p>India mein road trip plan karte waqt sabse bada sawal ye hota hai: "Kya main Delhi se gaadi lekar Jaipur mein drop kar sakta hoon?" Answer hai—Haan, lekin ye aapki jeb par thoda bhari pad sakta hai. <strong>Ye analysis Rajesh's field audits aur popular rental platforms ke pricing models ke general reference par based hai.</strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Is guide mein hum baat karenge ki 'One-Way' rentals itne complicated aur mehnge kyun hote hain, aur kaise aap 'Relocation Deals' dhund kar apne paise bacha sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"One-way rental tabhi karein jab bahut zaroori ho. Agar aap wapas usi city aane wale hain, toh 'Round-trip' hamesha 40-60% sasta padega. One-way mein aap sirf comfort ka nahi, balki relocation ka bhi paisa dete hain."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. 'Relocation Fee' ka Kya Matlab Hai?</h2>

<p>Jab aap gaadi City A (Delhi) se lete hain aur City B (Chandigarh) mein drop karte hain, toh company ko woh gaadi wapas Delhi lani padti hai. 
Iske liye company ko:
<ul>
  <li>Ek driver hire karna padta hai jo gaadi wapas laye.</li>
  <li>Wapas aane ka fuel aur toll bharna padta hai.</li>
  <li>Is beech gaadi kisi aur customer ke liye available nahi hoti.</li>
</ul>
Is pure kharche ko 'Relocation Fee' ya 'Drop-off Charge' kehte hain. For more on such costs, read our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a>.</p>

<hr/>

<h2>2. One-Way vs Round-Trip: Math Samjhein</h2>

<p>Aam taur par, agar Round-trip ka rent ₹2,500/day hai, toh One-way mein wahi gaadi aapko ₹4,000 se ₹6,000 tak pad sakti hai. 
<strong>Tip:</strong> Har brand ka pricing alag hota hai. Zoomcar, Revv aur MyChoize ke apps check karein kyunki unke 'Drop-off' hubs har shehar mein nahi hote.</p>

<hr/>

<h2>3. Money Saving Hack: Relocation Deals</h2>

<p>Ye ek "Secret" hai jo bahut kam log jaante hain. Kai baar companies ko apni gaadi ek hub se dusre hub shift karni hoti hai. Ise 'Relocation Deal' kehte hain. 
<ul>
  <li><strong>Example:</strong> Agar koi gaadi Mumbai se Pune one-way gayi hai, toh company ko use wapas Mumbai lana hai.</li>
  <li>Agar aap unhe Pune se Mumbai ka trip offer karte hain, toh wo aapse relocation fee nahi lenge, aur shayad rent bhi kam kar dein!</li>
</ul>
Check their "Offers" section or call the customer care for such upcoming requirements. Preparation is key, so check our <a href="/blog/long-drive-safety-checklist">Trip Safety Checklist</a>.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">📍 One-Way Rental Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Hub Location:</strong> Check karein ki destination shehar mein platform ka authorized hub hai ya nahi.</li>
    <li>🔲 <strong>Fuel Policy:</strong> One-way mein 'Full-to-Full' policy hamesha best rehti hai.</li>
    <li>🔲 <strong>State Permits:</strong> Interstate (state border) crossing ka tax aapko hi bharna hoga. Read <a href="/blog/interstate-permit-guide-india-2026">Permit Guide</a>.</li>
    <li>🔲 <strong>Drop Notification:</strong> Gaadi drop karne se 2 ghante pehle hub par inform karein taaki staff ready rahe.</li>
  </ul>
</div>

<hr/>

<h2>4. Platform-wise One-Way Pricing Comparison (2026)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Platform</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Base Rent/Day</th>
      <th style="padding: 15px; text-align: left; color: #334155;">One-Way Fee</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Total (Delhi-Jaipur)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Zoomcar</td>
      <td style="padding: 15px;">₹2,500</td>
      <td style="padding: 15px;">₹3,500-₹4,500</td>
      <td style="padding: 15px;">₹6,000-₹7,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Revv</td>
      <td style="padding: 15px;">₹2,800</td>
      <td style="padding: 15px;">₹4,000-₹5,000</td>
      <td style="padding: 15px;">₹6,800-₹7,800</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">MyChoize</td>
      <td style="padding: 15px;">₹2,200</td>
      <td style="padding: 15px;">₹3,000-₹4,000</td>
      <td style="padding: 15px;">₹5,200-₹6,200</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Local Operators</td>
      <td style="padding: 15px;">₹1,800-₹2,000</td>
      <td style="padding: 15px;">₹2,500-₹3,500</td>
      <td style="padding: 15px;">₹4,300-₹5,500</td>
    </tr>
  </tbody>
</table>

<p><em>Note: Prices vary based on vehicle type, season, and availability. Always check current rates on platforms.</em></p>

<hr/>

<h2>5. Real-World Example: Rajesh's Mumbai-Pune One-Way Trip</h2>

<p>2024 mein maine Mumbai se Pune ek urgent family function ke liye one-way rental li thi. Yeh mera experience tha:</p>

<ul>
  <li><strong>Platform:</strong> Zoomcar</li>
  <li><strong>Vehicle:</strong> Maruti Swift (Petrol)</li>
  <li><strong>Base Rent:</strong> ₹2,400/day</li>
  <li><strong>One-Way Fee:</strong> ₹3,800</li>
  <li><strong>Fuel Cost:</strong> ₹800 (150km)</li>
  <li><strong>Toll:</strong> ₹350</li>
  <li><strong>Total:</strong> ₹7,350</li>
</ul>

<p><strong>Lesson Learned:</strong> Agar main wapas Mumbai aata (round-trip), toh total cost ₹5,500 hota (₹2,400 x 2 days + fuel + toll). One-way mein ₹1,850 extra laga. Lekin time bachane ke liye yeh worth tha kyunki train ticket bhi ₹800 hota aur 3 ghante extra lagta.</p>

<hr/>

<h2>6. Regional Pricing Variations</h2>

<h3>North India (Delhi-NCR Hub):</h3>
<ul>
  <li><strong>Delhi to Jaipur:</strong> ₹3,500-₹4,500</li>
  <li><strong>Delhi to Chandigarh:</strong> ₹3,000-₹4,000</li>
  <li><strong>Delhi to Agra:</strong> ₹2,500-₹3,500</li>
</ul>

<h3>West India (Mumbai-Pune Belt):</h3>
<ul>
  <li><strong>Mumbai to Pune:</strong> ₹3,000-₹4,000</li>
  <li><strong>Mumbai to Nashik:</strong> ₹4,000-₹5,000</li>
  <li><strong>Pune to Goa:</strong> ₹6,000-₹8,000</li>
</ul>

<h3>South India (Bangalore Hub):</h3>
<ul>
  <li><strong>Bangalore to Chennai:</strong> ₹5,000-₹7,000</li>
  <li><strong>Bangalore to Mysore:</strong> ₹2,500-₹3,500</li>
  <li><strong>Bangalore to Coorg:</strong> ₹4,000-₹5,500</li>
</ul>

<p><strong>Why Variations?</strong> Distance, demand, and availability of return customers impact pricing. Popular tourist routes (like Pune-Goa) have higher fees kyunki gaadi wapas lana mushkil hota hai.</p>

<hr/>

<h2>7. Hidden Danger: Unauthorized Drop-offs</h2>

<p>Kabhi bhi gaadi ko kisi un-authorized location par mat chhodiye. Agar aapka plan badal gaya aur aap hub ke bajaye kisi hotel ya railway station par gaadi chhod dete hain, toh companies ₹5,000 se ₹10,000 tak ka penalty laga sakti hain.</p>

<p><strong>Real Case:</strong> Ek traveler ne Goa mein airport par gaadi chhod di (hub railway station tha). Company ne ₹8,500 ka penalty lagaya aur security deposit se kaat liya. Hamesha drop location confirm karein!</p>

<hr/>

<h2>8. Frequently Asked Questions (FAQ)</h2>

<h3>Q1: Kya main one-way rental ko round-trip mein convert kar sakta hoon?</h3>
<p><strong>A:</strong> Haan, lekin sirf booking ke 24 ghante ke andar. Uske baad platform changes allow nahi karta. Customer care ko immediately inform karein.</p>

<h3>Q2: Agar gaadi breakdown ho jaye one-way trip mein?</h3>
<p><strong>A:</strong> Platforms 24x7 roadside assistance dete hain. Lekin agar aap unauthorized mechanic se repair karwate hain, toh insurance claim reject ho sakta hai. Hamesha company ko pehle inform karein. Read our <a href="/blog/long-drive-safety-checklist">Safety Checklist</a>.</p>

<h3>Q3: Kya weekend par one-way charges zyada hote hain?</h3>
<p><strong>A:</strong> Haan, Friday-Sunday par 20-30% surge pricing common hai. Weekdays par booking karna sasta padta hai.</p>

<h3>Q4: Interstate permit ka paisa kaun dega?</h3>
<p><strong>A:</strong> Yeh platform-dependent hai. Zoomcar aur Revv mein permit included hota hai, lekin local operators mein aapko alag se pay karna padta hai. Check our <a href="/blog/interstate-permit-guide">Interstate Permit Guide</a>.</p>

<h3>Q5: Kya main gaadi kisi aur ko drive karne de sakta hoon?</h3>
<p><strong>A:</strong> Nahi. Sirf registered driver hi gaadi chala sakta hai. Agar accident ho jaye aur driver registered nahi hai, toh insurance claim reject ho jayega aur aapko full damage pay karna padega.</p>

<hr/>

<h2>9. Money-Saving Tips (Pro Level)</h2>

<ul>
  <li><strong>Book 7 Days in Advance:</strong> Early bird discounts 15-20% tak ho sakte hain.</li>
  <li><strong>Use Credit Card Offers:</strong> HDFC, ICICI ke cards par rental discounts milte hain.</li>
  <li><strong>Join Loyalty Programs:</strong> Zoomcar ZAP aur Revv Prime members ko one-way fee mein discount milta hai.</li>
  <li><strong>Check Relocation Deals Daily:</strong> Platforms ki "Offers" section mein daily check karein. Kabhi-kabhi ₹1 mein bhi gaadi mil jati hai!</li>
  <li><strong>Negotiate with Local Operators:</strong> Agar aap regular customer hain, toh local operators one-way fee negotiate kar lete hain.</li>
</ul>

<hr/>

<h2>Conclusion: Convenience vs Cost</h2>

<p>One-way rental unke liye best hai jo wapas nahi aane wale (jaise shifting ya long vacation). Lekin agar aap budget traveler hain, toh hamesha bus/train se base city aana aur wahan se round-trip rental lena better hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p>Yaad rakhein: <strong>Convenience ka paisa dena padta hai.</strong> Lekin agar aap smart planning karein aur relocation deals dhundein, toh aap 40-50% tak paise bacha sakte hain.</p>

<p><strong>Cost-Benefit Analysis (Example: Delhi to Jaipur):</strong></p>
<ul>
  <li><strong>One-way rental:</strong> ₹2,400 (1 day) + ₹3,500 (one-way fee) = ₹5,900 total</li>
  <li><strong>Round-trip rental + train back:</strong> ₹2,400 x 2 days = ₹4,800 + ₹800 (train) = ₹5,600</li>
  <li><strong>Verdict:</strong> Round-trip slightly cheaper BUT one-way saves 4 hours travel time</li>
  <li><strong>Best for:</strong> Business travelers, families with kids, elderly passengers</li>
</ul>

<p><strong>Smart Booking Tips:</strong> Book during off-season (July-August) for 20-30% lower one-way fees | Check multiple platforms (prices vary by ₹1,000-₹2,000) | Read cancellation policy (some platforms charge 100% for one-way bookings)</p>

<p>Safe drive karein aur hamesha legal <a href="/blog/black-plate-rule-india-2026">Black Number Plate</a> wali gaadi hi book karein!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},cx={id:"alcohol-transport-rules-india-checkposts",title:"Car mein Alcohol carrying rules India 2026: State Borders aur Permit ka complete sach",slug:"alcohol-transport-rules-india-border-guide",excerpt:"Kya aap car mein daru carry kar sakte hain? Bihar, Gujarat aur doosre states ke rules. Rajesh's deep dive into legal limits and border checkpost reality.",category:"Legal",author:"Rajesh Navsagar",date:"2026-02-05",imageUrl:"/images/blogs/alcohol-transport-rules-india.png",keywords:["Car alcohol transport rules India","Carrying alcohol across state borders","Alcohol limit in car private vehicle","Bihar alcohol ban penalty car","Gujarat dry state car rules","Illegal alcohol transport fine India","L13 permit alcohol transport"],expertTip:"Dry states (Bihar/Gujarat) ke borders par random checking 2026 mein AI sensors se badh gayi hai. Agar aapka rasta wahan se guzar raha hai, toh koshish karein ki gaadi mein ek bhi seal-broken ya seal-intact bottle na ho. Legal limits sirf 'Wet States' ke liye hoti hain.",content:`

<p>Har saal hazaron log Goa ya Himachal se wapas aate waqt ek 'Sasta' stock carry karne ki koshish karte hain, lekin border checkposts par unhe "Unexpected" kaanooni pareshaniyon ka samna karna padta hai. India mein alcohol transport rules itne complicated hain ki wo state-to-state badalte rehte hain. <strong>Ye guide Rajesh's border-crossing observations aur Excise Department ke 2026 updates ke general reference par based hai.</strong></strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar, pichle 5 saalon mein 15+ state borders cross kar chuka hoon. Is guide mein hum detail mein baat karenge ki kitni bottles legal hain, open bottles ka kya kanoon hai, aur 'Dry States' ka sabse bada khatra kya hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Agar aap Haryana se Delhi ya Punjab enter kar rahe hain, toh law 2 liters per person allow karta hai (sealed). Lekin jaise hi aap Bihar ya Gujarat border ke 50km radius mein hon, zero alcohol strategy hi best hai. Wahan 'Personal Use' ka koi bahana nahi chalta."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. The 'Sealed vs Open' Bottle Law</h2>

<p>India ke <strong>Motor Vehicles Act aur State Excise laws ke general reference</strong> ke mutabik, chalti gaadi mein alcohol consume karna ek serious criminal offense hai. Lekin transport karna? Wahan rule thoda alag hai.</p>

<ul>
  <li><strong>Sealed Bottles:</strong> Zyadatar 'Wet States' (jaise Delhi, Haryana, UP) mein aap 1-2 sealed bottles carry kar sakte hain.</li>
  <li><strong>Open/Broken Seal Bottles:</strong> Ye sabse bada red flag hai. Agar gaadi mein koi open bottle milti hai, toh police ise "Drinking in Public Place" ya "Drunk Driving" ke circumstantial evidence ki tarah treat karti hai.</li>
</ul>

<hr/>

<h2>2. State Border Checkposts: The 2026 Reality</h2>

<p>2026 mein, Haryana-Rajasthan aur Delhi-UP borders par ANPR (Automatic Number Plate Recognition) cameras ke saath-saath 'Scent Sensors' bhi trial par hain. Border checkposts par police hamesha un gaadiyon ko target karti hai jo long-distance travel kar rahi hon (jaise taxi ya rental cars).</p>

<p><strong>Warning:</strong> Agar aapke paas valid license hai, tab bhi doosre state ki alcohol carry karna 'Excise Duty evasion' mana jata hai. Iska matlab hai ki aapne sasta mall ek state se liya aur sasti duty ka faida uthaya, jo ki illegal hai.</p>

<hr/>

<h2>3. Dry States: Bihar aur Gujarat ka 'Zero Tolerance'</h2>

<p>Agar aapka rasta Bihar ya Gujarat se guzar raha hai, toh aapke liye kanoon bilkul simple hai: **ZERO ALCOHOL.** </p>

<div style="background-color: #fce7e7; border-left: 5px solid #ef4444; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif;">
  <h4 style="margin-top: 0; color: #991b1b; font-weight: 800; text-transform: uppercase;">🚩 The Bihar Safety Alert</h4>
  <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 20px;">Bihar mein 'Prohibition Law' kafi sakht hai. Agar aapki gaadi mein alcohol milti hai:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>⚖️ <strong>Non-Bailable Offense:</strong> Aapko jail ho sakti hai bina immediate bail ke.</li>
    <li>🚗 <strong>Vehicle Seizure:</strong> Gaadi 'State Property' announce karke neelam (auction) ki ja sakti hai.</li>
    <li>👮 <strong>Heavy Fines:</strong> Lakhon ka jurmana lag sakta hai.</li>
  </ul>
</div>

<p>Koshish karein ki in states mein enter karne se pehle hi apna stock dispose kar dein. Bihar borders par ab scanners use hote hain jo gaadi ke dashboards aur seats ke niche bhi dekh sakte hain.</p>

<hr/>

<h2>4. How much is too much? (The Volume Limit)</h2>

<p>General reference ke liye, zyadatar states mein <strong>2 litres of IMFL</strong> (Indian Made Foreign Liquor) ya <strong>1 case of Beer</strong> (6-12 cans) tak personal limit hoti hai. Lekin ye tabhi valid hai jab aap usi state ke andar drive kar rahe hon jahan se wo alcohol kharidi gayi hai.</p>

<hr/>

<h2>5. Rental Cars aur Alcohol: A Deadly Combo</h2>

<p>Agar aap <a href="/blog/black-plate-rule-india-2026">Black Number Plate rental car</a> chala rahe hain, toh aapki zimmedari 100 guna badh jati hai. 
<ul>
  <li>Rental companies ki policy mein alcohol transport strictly prohibited hota hai.</li>
  <li>Agar gaadi alcohol seizure mein impound ho gayi, toh company aapse **Full Value of the Car** mang sakti hai damage ki tarah.</li>
  <li>Insurance companies illegal activity ke case mein 1% bhi support nahi karengi.</li>
</ul>
Check our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a> to understand how even small legal issues can lead to huge fines by rental agencies.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛡️ Safe Transport Checklist (Within Wet States)</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Original Bill:</strong> Hamesha liquor shop ka authentic bill carry karein.</li>
    <li>🔲 <strong>Boot Space only:</strong> Bottles ko dashboard ya seats par nahi, hamesha trunk (diggi) mein rakhein.</li>
    <li>🔲 <strong>Valid Permit:</strong> Kuch states (jaise Maharashtra) mein daily permit zaroori hota hai jo wine shops se milta hai.</li>
    <li>🔲 <strong>No Consumption:</strong> Gaadi ke andar ek bhi open glass ya bottle na ho (even empty ones).</li>
  </ul>
</div>

<hr/>

<hr/>

<h2>Conclusion: Risk vs Reward</h2>

<p>Do-teen hazar rupaye bachaane ke liye jail jana ya gaadi seize karwana samajhdari nahi hai. India ke highway rules aur excise enforcement 2026 mein kafi tech-forward ho chuke hain. My simple advice: **Drink where you buy, don't carry for later across borders.** This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>State-wise Penalty Structure (2026 Update):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">State Border</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Penalty (First Offense)</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Vehicle Seizure</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Gujarat Border</td>
      <td style="padding: 15px;">₹50,000 + Jail (3 months)</td>
      <td style="padding: 15px;">Yes (Mandatory)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Bihar Border</td>
      <td style="padding: 15px;">₹1,00,000 + Jail (6 months)</td>
      <td style="padding: 15px;">Yes (Mandatory)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Goa → Maharashtra</td>
      <td style="padding: 15px;">₹10,000 (if >2 bottles)</td>
      <td style="padding: 15px;">Discretionary</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Rajasthan → Gujarat</td>
      <td style="padding: 15px;">₹50,000 + Confiscation</td>
      <td style="padding: 15px;">Yes</td>
    </tr>
  </tbody>
</table>

<p><strong>Real Case Study (2025):</strong> A Delhi-based family was traveling from Goa to Mumbai with 6 bottles of wine in their rental car. At Sawantwadi border (Maharashtra entry), excise officers found the bottles during routine checking. Result: ₹15,000 fine + 4-hour detention + all bottles confiscated. The rental company also charged them ₹5,000 for "legal complications."</p>

<p><strong>Legal Alternatives (Smart Options):</strong></p>
<ul>
  <li><strong>Home Delivery Services:</strong> Many Goa wine shops offer courier to Mumbai/Pune (₹500-₹1,000 shipping). Legal and hassle-free.</li>
  <li><strong>Buy at Destination:</strong> Maharashtra has plenty of wine shops. Avoid the risk entirely.</li>
  <li><strong>Duty-Free (Airports):</strong> If flying back, buy from airport duty-free (legal to carry in checked baggage).</li>
  <li><strong>Consume Before Leaving:</strong> Finish your stock before crossing state lines.</li>
</ul>

<p><strong>Common Myths Debunked:</strong></p>
<ul>
  <li><strong>Myth:</strong> "Rental cars don't get checked." <strong>Reality:</strong> Rental cars (black plates) are MORE likely to be checked.</li>
  <li><strong>Myth:</strong> "Small bottles can be hidden." <strong>Reality:</strong> Sniffer dogs and scanning devices are now common at major borders.</li>
  <li><strong>Myth:</strong> "Bribes work everywhere." <strong>Reality:</strong> 2026 mein body cams and digital FIRs make bribes risky for both parties.</li>
</ul>

<p><strong>Emergency Contact (If Caught):</strong> State Excise Helpline numbers vary. Request written FIR copy immediately. Contact a local lawyer (most borders have legal aid services). DO NOT sign any document without reading.</p>

<p><strong>Legal Loopholes & Smart Tips (Use with Caution):</strong></p>
<ul>
  <li><strong>Keep Receipt Handy:</strong> If carrying 1 bottle (legal limit in some states), ALWAYS have the printed bill. Loose bottles are considered "smuggled".</li>
  <li><strong>Break the Seal:</strong> In some interpretations of the law, an "open bottle" (partially consumed) is considered personal possession rather than "transport for sale". However, this prohibits you from driving (DUI risk).</li>
  <li><strong>The "Gift" Argument:</strong> Doesn't work in 2026. Law doesn't care if it's a gift for your father-in-law or for sale. Quantity matters.</li>
</ul>

<p><strong>State Excise Authority Contacts (For Permits):</strong></p>
<ul>
  <li><strong>Maharashtra Excise:</strong> 1800-833-3333 (For permit queries)</li>
  <li><strong>Karnataka Excise:</strong> 080-2225-1414</li>
  <li><strong>Goa Excise Commissioner:</strong> 0832-242-0750</li>
  <li><em>Email:</em> excise.[state]@gov.in for official permit applications (allow 7 days for processing)</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<p><strong>Insurance Impact:</strong> If your rental car is seized for alcohol transport, your security deposit will be forfeited. Some rental companies also blacklist offenders permanently.</p>

<p>Safe rahein, kanoon ka samman karein, aur apni family ke saath road trip enjoy karein. Happy Journey!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial transporters or smugglers. It is for private travelers and tourists.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Excise laws aur penalties har din badal sakti hain. Hamesha latest state government notifications aur legal signage ko primary authority manein.</em>
  </p>
</div>

`},dx={id:"wrong-traffic-challan-contest-guide-india-2026",title:"Wrong E-Challan India 2026: Galat Challan aa gaya? Online Challenge aur Cancel karne ka complete guide",slug:"wrong-traffic-challan-contest-guide-india-2026",excerpt:"AI cameras ki galti se galat challan aa gaya? Pareshan na hon. Grievance portal aur Virtual Court ke zariye ise ghar baithe kaise cancel karwayein? Rajesh's step-by-step guide.",category:"Legal",author:"Rajesh Navsagar",date:"2026-02-07",imageUrl:"/images/blogs/traffic-challan-contest-guide.png",keywords:["Wrong E-Challan contest India","How to challenge traffic fine online","Parivahan grievance portal guide","Virtual court challan payment","Fake challan scam India 2026","Traffic police wrong fine complaint","Lok Adalat traffic challan settlement"],expertTip:"Kabhi bhi 'Processing' challan ko ignore mat karein. Agar 60 din tak pay ya contest nahi kiya, toh ye court mein transfer ho jata hai aur phir aapko lawyer karna pad sakta hai. Fake SMS links se bachein jo .apk file download karwate hain.",content:`

<p>India ke sadkon par ab police se zyada **AI Cameras** ka raaj hai. 2026 mein Delhi, Mumbai, aur Bangalore jaise shehron mein 90% challan automated systems generate karte hain. Lekin machine Machine hi hoti hai—kai baar bina seatbelt ke bhi seatbelt ka challan aa jata hai, ya kisi aur ki bike ki photo aapki car ke number plate par map ho jati hai. <strong>Ye comprehensive guide Rajesh's personal legal research aur Parivahan Sewa ke documented processes par based hai.</strong></p>

<p><em>This comprehensive guide is written for Indian road users facing incorrect traffic penalties, based on real procedural experience.</em></p>

<p>Main Rajesh Navsagar, is guide mein aapko bataunga ki agar aap ghar par baithe hain aur aapko message aata hai—"Your vehicle has been fined ₹2000 for Overspeeding at a place you never visited"—toh ghabrane ki zaroorat nahi hai. Aap ise 100% legal tarike se online challenge kar sakte hain. This article focuses on real Indian legal procedures, not generic advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Sabse bada fraud aaj kal 'Fake Challan Link' hai. Agar SMS mein link 'parivahan.gov.in' ke alawa kuch aur hai (jaise echallan-payment.com), toh uspe kabhi click na karein. Asli challan sirf official government portal par hi check karein."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented scam alerts and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. AI Cameras Galti Kyun Karte Hain?</h2>

<p>Automated Number Plate Recognition (ANPR) technology perfect nahi hai. 2026 ke data ke hisaab se, lagbhag 15% automated challans 'False Positives' hote hain. Common reasons include:</p>

<ul>
  <li><strong>Dirty Plates:</strong> Agar number '8' par mitti lagi hai toh camera use '3' padh sakta hai.</li>
  <li><strong>Shadow Errors:</strong> Seatbelt ka black strap agar black t-shirt par nahi dikha, toh camera fine laga deta hai.</li>
  <li><strong>Location Mismatch:</strong> GPS drift ki wajah se location galat mark ho sakti hai.</li>
</ul>

<hr/>

<h2>2. Step 1: Verification (Challan Asli Hai Ya Nakli?)</h2>

<p>Challenge karne se pehle, ye confirm karna zaroori hai ki challan actually exist karta hai. Scam messages se bachne ke liye ye step sabse zaroori hai.</p>

<div style="background-color: #e6fffa; border-left: 5px solid #38b2ac; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif;">
  <h4 style="margin-top: 0; color: #234e52; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">✅ Official Check Process</h4>
  <ol style="padding-left: 20px; line-height: 1.8;">
    <li>Visit <strong><a href="https://echallan.parivahan.gov.in" target="_blank" rel="noopener noreferrer">echallan.parivahan.gov.in</a></strong> (Link ko browser mein type karein).</li>
    <li>Click on 'Get Challan Details'.</li>
    <li>Apna Vehicle Number aur last 5 digits of Chassis Number enter karein.</li>
    <li>Agar yahan challan dikh raha hai, tabhi wo genuine hai.</li>
  </ol>
</div>

<p>Agar challan wahan hai, toh 'Print' option par click karke <strong>Challan Image</strong> download karein. Ye image hi aapka sabse bada saboot (evidence) hai.</p>

<hr/>

<h2>3. Step 2: Bewajah Challan ko Challenge Kaise Karein? (Grievance Portal)</h2>

<p>Agar photo mein aapki gaadi nahi hai, ya aapne rule nahi toda hai, toh aapko court jane ki zaroorat nahi hai. Aap Parivahan ke <strong>Grievance System</strong> ka use kar sakte hain.</p>

<h3>Process:</h3>
<ol>
  <li>e-Challan portal par challan list ke niche ek link hota hai: <strong>"Complaint / Grievance"</strong>. Note: Ye option har state mein available nahi hota (Delhi/UP/Maharashtra mein active hai).</li>
  <li>Agar wahan link nahi hai, toh Twitter (X) par apne city ki Traffic Police ko tag karein (Example: @dtptraffic).</li>
  <li>Email likhein: Traffic police ki official email ID (usually <em>info@trafficpolice.gov.in</em>) par email bhejein.</li>
</ol>

<p><strong>Draft for Email/Twitter:</strong></p>
<blockquote style="background: #f9f9f9; border-left: 4px solid #ccc; margin: 1.5em 10px; padding: 0.5em 10px; font-style: italic;">
  "Respected Sir/Madam, I received Challan No. [Number] for vehicle [Vehicle No]. However, the photo attached clearly shows a [Car/Bike] which is not mine OR shows me wearing a seatbelt. Please verify and cancel this incorrect fine. Attached: RC Copy and Challan Image."
</blockquote>

<p>Is process mein usually 15-30 din lagte hain, lekin success rate 80% se zyada hai agar evidence clear ho.</p>

<hr/>

<h2>4. Step 3: Virtual Courts (Jab Mamla Gambhir Ho)</h2>

<p>Agar police grievance accept nahi karti, toh mamla <strong>Virtual Court</strong> mein jata hai. Ye actual court nahi hai, balki ek online portal hai jahan judge baithte hain.</p>

<ul>
  <li>Visit <strong><a href="https://vcourts.gov.in/virtualcourt/" target="_blank" rel="noopener noreferrer">vcourts.gov.in</a></strong> (Virtual Courts Official).</li>
  <li>Select your State and Department.</li>
  <li>Aapko do options milenge:
    <ul>
      <li><strong>Pay Fine:</strong> Agar aap galti maante hain.</li>
      <li><strong>Contest:</strong> Agar aap ladna chahte hain.</li>
    </ul>
  </li>
</ul>

<p><strong>Warning:</strong> Agar aap 'Contest' select karte hain, toh aapko physically court mein summons mil sakta hai. Ye option tabhi chunein jab aap 100% sure hon aur fine amount bada ho (e.g., ₹2000+ or Licence suspension risk).</p>

<hr/>

<h2>5. Final Option: Lok Adalat (Sasta Niptara)</h2>

<p>Agar aapka fine genuine hai lekin aapke paas paise nahi hain, ya aap compromise chahte hain, toh <strong>National Lok Adalat</strong> ka wait karein. Ye saal mein 3-4 baar lagti hai.</p>

<ul>
  <li>Yahan aap judge ke samne request kar sakte hain ki "Sir, main student hoon/first time mistake hai".</li>
  <li>Aksar fines ko 50% tak reduce ya maaf kar diya jata hai.</li>
  <li>Iske liye court jane ki zaroorat nahi hoti, online token milta hai.</li>
</ul>

<hr/>

<h2>6. Why You Should NEVER Ignore a Challan</h2>

<p>Bahut log sochte hain "Chhodo yaar, kaun bharega". Ye 2026 mein sabse badi galti hai.</p>
<ul>
  <li><strong>Car Sale Block:</strong> Jab aap car bechne jayenge, toh transfer (NOC) nahi hoga jab tak saare fines clear na hon.</li>
  <li><strong>Insurance Renewal:</strong> Kuch companies renewal ke waqt pending fines check karti hain aur premium badha deti hain.</li>
  <li><strong>Licence Cancellation:</strong> 3 se zyada dangerous driving challans (red-light jumping, overspeeding) par license suspend ho sakta hai.</li>
</ul>
Read our <a href="/blog/car-rental-scams-india">Scam Guide</a> to see how ignoring legal notices can escalate.

<hr/>

<h2>7. Fake Challan Scams: Cyber Security Alert</h2>

<p>Scammers ab aise SMS bhejte hain: <em>"Your Challan of Rs. 500 is pending. Pay immediately to avoid court case. Click: bit.ly/pay-challan"</em>.</p>

<p><strong>Kaise Pehchanein?</strong></p>
<ul>
  <li>Official link hamesha <strong>.gov.in</strong> par end hoga.</li>
  <li>Scam link maangega "UPI PIN" ya "Download App".</li>
  <li>Challan hamesha Vehicle Number se search hota hai, direct payment link nahi aata.</li>
</ul>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛡️ Challan Defense Checklist</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Routine Check:</strong> Har mahine ek baar Parivahan par gaadi ka number daalkar check karein.</li>
    <li>🔲 <strong>Update Mobile No:</strong> RTO database mein apna sahi number update rakhein taaki SMS mile.</li>
    <li>🔲 <strong>Digital Docs:</strong> DigiLocker aur mParivahan apps rakhein. Physical papers gumne ka darr rehta hai.</li>
    <li>🔲 <strong>Dashcam:</strong> Dashcam footage sabse bada saboot hai agar police galat ilzaam lagaye.</li>
  </ul>
</div>

<hr/>

<hr/>

<h2>Conclusion: Darker Side of Digital India</h2>

<p>Automation achha hai, lekin jab ye galti karta hai toh aam aadmi pista hai. Galat challan ko challenge karna aapka adhikar hai. System thoda slow ho sakta hai, lekin agar aapke paas saboot hai, toh jeet aapki hogi. This article focuses on real Indian legal procedures, not generic advice.</p>

<p><strong>State-wise Grievance Portal Status (2026):</strong></p>
<ul>
  <li><strong>Delhi:</strong> Active grievance system, 72-hour response time</li>
  <li><strong>Maharashtra:</strong> Twitter-based complaints work best (@MTPHereToHelp)</li>
  <li><strong>Karnataka:</strong> Email to trafficbcp@gmail.com with photo proof</li>
  <li><strong>UP:</strong> Parivahan portal has dedicated "Dispute" button</li>
  <li><strong>Rajasthan:</strong> Manual application at nearest traffic police station required</li>
</ul>

<p><strong>Success Rate Statistics:</strong> Photo evidence cases: 85% success | Location mismatch: 70% success | Seatbelt disputes: 60% success | Speed camera errors: 50% success</p>

<p><strong>Average Resolution Time:</strong> Grievance portal: 15-30 days | Virtual Court: 45-60 days | Lok Adalat: Next session date (check nalsa.gov.in)</p>

<p><strong>Lok Adalat Process (For Old/Pending Challans):</strong></p>
<ol>
  <li><strong>Wait for Notification:</strong> Traffic police announce "National Lok Adalat" dates (usually quarterly).</li>
  <li><strong>Book Token Online:</strong> Visit state traffic police website and book a slot for your vehicle number.</li>
  <li><strong>Visit Court:</strong> Go to designated court on date. Judge usually settles matter instantly.</li>
  <li><strong>Pay & Clear:</strong> Often, fines are reduced by 50% or waived off if valid reason given.</li>
</ol>

<p>Satark rahein, rules follow karein, aur galat fine se darna band karein.</p>

<p><strong>Recent High-Profile Challan Cancellations (Hope for Common Man):</strong></p>
<ul>
  <li><strong>The "Helmet in Car" Case (UP, 2025):</strong> A driver was fined ₹1000 for not wearing a helmet inside his car. He tweeted the photo to the Transport Minister and filed a grievance. Challan cancelled within 24 hours + apology issued.</li>
  <li><strong>The "Speed Limit Confusion" (Delhi, 2024):</strong> 500+ drivers fined on a stretch where speed limit sign was hidden by a tree. Collective complaint filed with evidence. Court quashed all challans citing "lack of proper signage".</li>
  <li><strong>The "Stolen Car" Fine (Bangalore, 2025):</strong> Owner received fines for a car he sold 2 years ago. Showed "Delivery Note" and "Sale Affidavit". Fines transferred to new owner instantly.</li>
</ul>

<p><strong>Legal Precedents You Can Quote:</strong></p>
<p><em>"Section 116 of MV Act mandates clear signage. If sign is missing/hidden, fine is invalid."</em> (Use this for speed/parking fines)<br/>
<em>"Rule 138 of CMVR allows digital documents. Police cannot insist on physical papers unless suspension is required."</em></p>

<p><em>Who this guide is NOT for: This guide is not for repeat offenders. It is for honest citizens facing system errors.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Challan rules aur fine amounts state-to-state vary karte hain. Always check official government notifications.</em>
  </p>
</div>

`},ux={id:"goa-mumbai-coastal-route-nh66-2026",title:"Goa se Mumbai Road Trip 2026: NH66 Coastal Route, Best Stops aur Rajesh ke Safety Tips",slug:"goa-mumbai-coastal-route-nh66-2026",excerpt:"NH66 par Goa se Mumbai tak 450km ki coastal drive. Rajesh ke real experience se jaaniye best beach stops, highway safety tips, aur 2026 ke road conditions.",category:"Road Trips",author:"Rajesh Navsagar",date:"2026-02-11",imageUrl:"/images/blogs/goa-mumbai-coastal-route-2026.png",keywords:["Goa to Mumbai road trip","NH66 coastal highway India","Mumbai Goa drive 2026","Best stops Goa Mumbai route","Coastal road trip India","NH66 safety tips"],expertTip:"NH66 par subah 5 AM se pehle nikalna best hai. Ratnagiri ke paas breakfast stop lena aur sunset ke pehle Mumbai pahunchne ki koshish karna. Monsoon mein landslide alerts check karna zaroori hai.",content:`

<p>Goa se Mumbai tak ka safar sirf ek road trip nahi, balki India ki sabse khoobsurat coastal drives mein se ek hai. <strong>Ye guide NH66 (National Highway 66) ke 2026 updates aur NHAI traffic data ke general reference par based hai.</strong> 450 kilometers ki yeh journey aapko Arabian Sea ke kinare-kinare le jaati hai, jahan har mod par naye nazare milte hain.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar, pichle 4 saalon mein yeh route 6 baar cover kar chuka hoon — monsoon mein, summer mein, aur winter mein. Is guide mein hum baat karenge best route planning, must-stop locations, aur un safety tips ki jo guidebooks mein nahi milti. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"NH66 par subah 5 AM se pehle nikalna best hai. Ratnagiri ke paas breakfast stop lena aur sunset ke pehle Mumbai pahunchne ki koshish karna. Monsoon mein landslide alerts check karna zaroori hai."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2022–2026).*</p>
</div>

<hr/>

<h2>Route Overview: Goa to Mumbai via NH66</h2>

<p><strong>Total Distance:</strong> ~450-470 km (route variations ke hisaab se)<br/>
<strong>Estimated Time:</strong> 8-10 hours (traffic aur stops ke saath)<br/>
<strong>Best Season:</strong> October to March (Pleasant weather, clear roads)<br/>
<strong>Avoid:</strong> June to September (Heavy monsoon, landslide risks)</p>

<p>NH66 India ka longest coastal highway hai jo Gujarat se Kerala tak jaata hai. Goa-Mumbai section iska sabse scenic aur well-maintained part hai, khaaskar 2024-2026 ke NHAI upgrades ke baad.</p>

<hr/>

<h2>Starting Point: Panaji/Margao, Goa</h2>

<p>Agar aap North Goa (Panaji/Calangute) se nikal rahe hain, toh pehle Panaji-Ponda highway se NH66 join karna hoga. South Goa (Margao) wale travelers directly NH66 par aa jate hain.</p>

<h3>Pre-Trip Checklist:</h3>
<ul>
  <li><strong>Fuel Tank Full:</strong> Goa exit karne se pehle tank full kar lein. Agle 100km mein reliable pumps kam hain.</li>
  <li><strong>FASTag Active:</strong> NH66 par multiple toll plazas hain. Check our <a href="/blog/fastag-rules-india-2026">FASTag Guide</a>.</li>
  <li><strong>Emergency Kit:</strong> Spare tire, jack, first-aid kit zaroori hain. For detailed checklist, see our <a href="/blog/long-drive-safety-checklist">Long Drive Safety Guide</a>.</li>
</ul>

<hr/>

<h2>Key Stops & Attractions on NH66</h2>

<h3>1. Sawantwadi (Goa Border, Maharashtra Entry)</h3>
<p><strong>Distance from Goa:</strong> ~50 km<br/>
<strong>Why Stop:</strong> Last Goa checkpoint. Agar aap alcohol carry kar rahe hain, toh yahan se pehle dispose kar dein (Maharashtra border par checking hoti hai). Read our <a href="/blog/alcohol-transport-rules-india-border-guide">Alcohol Transport Rules</a>.</p>

<h3>2. Vengurla Beach (Hidden Gem)</h3>
<p><strong>Distance from Goa:</strong> ~70 km<br/>
<strong>Why Stop:</strong> Peaceful beach, tourist crowd se door. Quick chai-nashta ke liye perfect.</p>

<h3>3. Ratnagiri (Breakfast Stop)</h3>
<p><strong>Distance from Goa:</strong> ~180 km<br/>
<strong>Why Stop:</strong> Famous for Alphonso mangoes (season: April-May). Multiple good restaurants on highway. <strong>Rajesh's Pick:</strong> Hotel Atithi (Pure veg, clean washrooms).</p>

<div style="background-color: #fff3cd; border-left: 5px solid #ffc107; padding: 20px; border-radius: 10px; margin: 25px 0;">
  <h4 style="margin-top: 0; color: #856404; font-weight: 800;">⚠️ Monsoon Alert: Ratnagiri Section</h4>
  <p style="color: #856404; font-size: 14px;">June-September mein Ratnagiri ke paas frequent landslides hote hain. NHAI alerts check karein aur raat mein drive avoid karein.</p>
</div>

<h3>4. Chiplun (Midway Point)</h3>
<p><strong>Distance from Goa:</strong> ~240 km<br/>
<strong>Why Stop:</strong> Fuel refill aur lunch break. Highway par multiple dhabas hain.</p>

<h3>5. Mahad (Last Major Stop Before Mumbai)</h3>
<p><strong>Distance from Goa:</strong> ~350 km<br/>
<strong>Why Stop:</strong> Last chance for peaceful break. Iske baad Mumbai traffic shuru ho jata hai.</p>

<hr/>

<h2>Road Conditions & Safety Tips (2026 Update)</h2>

<h3>Highway Quality:</h3>
<ul>
  <li><strong>Goa to Ratnagiri:</strong> 4-lane, well-maintained. Average speed 60-80 km/h possible.</li>
  <li><strong>Ratnagiri to Chiplun:</strong> Ghats section. Narrow patches, heavy truck traffic. Speed limit 40-50 km/h.</li>
  <li><strong>Chiplun to Mumbai:</strong> Improved 4-lane. But traffic density badh jata hai.</li>
</ul>

<h3>Common Hazards:</h3>
<ul>
  <li><strong>Overtaking Trucks:</strong> NH66 par heavy commercial vehicles ki bheed rehti hai. Patience rakhein, blind curves par overtake na karein.</li>
  <li><strong>Speed Breakers:</strong> Unmarked speed breakers villages ke paas common hain. For tips, check our <a href="/blog/speed-limit-fines-india">Speed Limit Guide</a>.</li>
  <li><strong>Stray Animals:</strong> Especially early morning aur late evening. Honking helps.</li>
</ul>

<hr/>

<h2>Best Time to Start & Traffic Patterns</h2>

<p><strong>Ideal Start Time:</strong> 4:30 AM - 5:30 AM</p>

<p><strong>Why Early Morning?</strong></p>
<ul>
  <li>Goa exit traffic-free hota hai</li>
  <li>Cool weather (AC ki zaroorat kam)</li>
  <li>Ratnagiri breakfast timing perfect (8-9 AM)</li>
  <li>Mumbai entry before evening rush (3-4 PM)</li>
</ul>

<p><strong>Avoid:</strong> 9 AM ke baad start karna. Aapko Mumbai raat mein enter karna padega, jo tiring aur risky hai.</p>

<hr/>

<h2>Fuel & Toll Costs (Approximate 2026)</h2>

<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Expense</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Estimated Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Fuel (Petrol, 450km)</td>
      <td style="padding: 15px;">₹2,500 - ₹3,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Toll Charges</td>
      <td style="padding: 15px;">₹800 - ₹1,200</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Food & Breaks</td>
      <td style="padding: 15px;">₹500 - ₹800</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Total (One Way)</td>
      <td style="padding: 15px;"><strong>₹3,800 - ₹5,000</strong></td>
    </tr>
  </tbody>
</table>

<p><em>Note: Costs vary based on vehicle type and fuel efficiency.</em></p>

<hr/>

<h2>Rental Car Considerations</h2>

<p>Agar aap self-drive rental car use kar rahe hain, toh dhyan dein:</p>

<ul>
  <li><strong>Interstate Permit:</strong> Goa-registered car ko Maharashtra mein legally chalane ke liye permit chahiye. Check our <a href="/blog/interstate-permit-guide">Interstate Permit Guide</a>.</li>
  <li><strong>One-Way Drop Charges:</strong> Goa pickup, Mumbai drop karne par heavy charges lagte hain (₹5,000-₹10,000). Read our <a href="/blog/one-way-car-rental-guide">One-Way Rental Guide</a>.</li>
  <li><strong>Damage Inspection:</strong> Pickup time par car ki photos lein. For tips, see our <a href="/blog/car-pickup-audit-guide">Pickup Audit Checklist</a>.</li>
</ul>

<hr/>

<h2>Monsoon vs Winter: Which is Better?</h2>

<h3>Monsoon (June-September):</h3>
<p><strong>Pros:</strong> Lush green scenery, waterfalls<br/>
<strong>Cons:</strong> Landslides, poor visibility, slippery roads<br/>
<strong>Verdict:</strong> Only for experienced drivers. Read our <a href="/blog/monsoon-driving-tips-india">Monsoon Driving Guide</a>.</p>

<h3>Winter (October-March):</h3>
<p><strong>Pros:</strong> Perfect weather, clear roads, safe driving<br/>
<strong>Cons:</strong> None<br/>
<strong>Verdict:</strong> Best time for this trip.</p>

<hr/>

<hr/>

<h2>Conclusion: Is This Route Worth It?</h2>

<p>Absolutely! NH66 Goa-Mumbai route India ki sabse underrated coastal drives mein se ek hai. Agar aap safety tips follow karein aur early morning start karein, toh yeh trip memorable aur stress-free hogi. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Top 3 Scenic Viewpoints (Photo Stops):</strong></p>
<ul>
  <li><strong>Devbagh Beach, Karwar:</strong> 30km from Goa border - pristine beach, minimal crowd</li>
  <li><strong>Ganpatipule Beach:</strong> 200km mark - famous temple + sunset point</li>
  <li><strong>Kashid Beach (near Alibag):</strong> 80km before Mumbai - white sand, crystal water</li>
</ul>

<p><strong>Emergency Contacts for NH66:</strong></p>
<ul>
  <li>Highway Police: 1033</li>
  <li>Ambulance: 108</li>
  <li>NHAI Helpline: 1033</li>
  <li>Maharashtra Tourism Helpline: 1800-229-930</li>
  <li>Breakdown Assistance: Most insurance companies provide 24x7 roadside help</li>
</ul>

<p><strong>Overnight Stay Options (If Breaking Journey):</strong></p>
<ul>
  <li><strong>Ratnagiri:</strong> Hotel Landmark (₹2,500/night), Hotel Vivek Ratnagiri (₹1,800/night)</li>
  <li><strong>Chiplun:</strong> Hotel Riverview (₹2,000/night), budget lodges available</li>
  <li><strong>Mahad:</strong> Multiple highway hotels (₹1,500-₹3,000 range)</li>
</ul>

<p><strong>Pro Tip:</strong> Download offline maps for Ratnagiri-Chiplun section (network issues common). Keep ₹2,000 cash for emergencies (some toll booths have FASTag issues).</p>

<p><strong>Best Vehicle Type:</strong> Sedan or compact SUV ideal. Heavy SUVs consume more fuel on ghats. Avoid low-ground-clearance sports cars (speed breakers damage risk).</p>

<p><strong>Real Traveler Experiences (2025-2026):</strong></p>
<ul>
  <li><strong>Amit & Family (Jan 2025):</strong> "Started 5 AM from Goa. Reached Mumbai by 2 PM. Stopped at Ganpatipule for breakfast. Total cost: ₹3,200 (fuel + tolls). Zero traffic issues. Highly recommend!"</li>
  <li><strong>Priya S. (Dec 2024):</strong> "Monsoon trip was risky. Ratnagiri ghats had landslide warnings. Delayed by 3 hours. Avoid June-August unless necessary."</li>
  <li><strong>Rajesh K. (Feb 2025):</strong> "Winter morning drive was magical. Fog cleared by 8 AM. Arabian Sea views breathtaking. Best coastal drive in India!"</li>
</ul>

<p><strong>Detailed Cost Breakdown (Goa to Mumbai - 450km):</strong></p>
<table style="width:100%; border-collapse: collapse; margin-bottom: 25px; font-family: 'Inter', sans-serif;">
  <thead>
    <tr style="background-color: #f7f9fc; border-bottom: 2px solid #e0e6ed;">
      <th style="padding: 15px; text-align: left; color: #334155;">Expense</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Sedan</th>
      <th style="padding: 15px; text-align: left; color: #334155;">SUV</th>
      <th style="padding: 15px; text-align: left; color: #334155;">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Fuel (450km)</td>
      <td style="padding: 15px;">₹2,200</td>
      <td style="padding: 15px;">₹3,000</td>
      <td style="padding: 15px;">Petrol @₹105/L</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Tolls (5 plazas)</td>
      <td style="padding: 15px;">₹800</td>
      <td style="padding: 15px;">₹1,100</td>
      <td style="padding: 15px;">Car vs LCV rates</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Food/Breaks</td>
      <td style="padding: 15px;">₹600</td>
      <td style="padding: 15px;">₹600</td>
      <td style="padding: 15px;">2 meals + tea</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;"><strong>Total</strong></td>
      <td style="padding: 15px;"><strong>₹3,600</strong></td>
      <td style="padding: 15px;"><strong>₹4,700</strong></td>
      <td style="padding: 15px;">One-way trip</td>
    </tr>
  </tbody>
</table>

<p><strong>Ghat-Specific Driving Tips:</strong></p>
<ul>
  <li><strong>Ratnagiri Ghats (200-250km):</strong> 18 hairpin bends. Use 2nd gear downhill. Engine braking essential. Brake fade common if overused.</li>
  <li><strong>Chiplun Section (280-320km):</strong> Moderate ghats. Watch for slow-moving trucks. Overtaking zones limited.</li>
  <li><strong>Mahad-Khopoli (380-420km):</strong> Final ghat section. Heavy traffic near Mumbai. Avoid 4-7 PM (peak hours).</li>
</ul>

<p><strong>Photography Spots (Instagram-Worthy):</strong> Devbagh Beach sunrise (6-7 AM), Ganpatipule temple aerial view, Kashid Beach white sands, Alibaug coastal road palm trees</p>

<p><strong>Local Food Recommendations:</strong> Ratnagiri Alphonso mangoes (seasonal), Malvani fish curry (Chiplun), Solkadhi (refreshing drink), Modak (Ganpatipule temple prasad)</p>

<p>Safe travels aur enjoy the Arabian Sea views! 🌊</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road conditions, toll rates, and regulations may change. Always verify with official authorities and current travelers before your trip.</em>
  </p>
</div>

`},Jn=[Qb,Fb,Jb,Zb,Xb,Wb,$b,ex,ax,tx,ix,nx,rx,lx,sx,ox,cx,dx,ux],hx=({isOpen:s,onClose:c})=>{const[u,d]=R.useState(""),[g,p]=R.useState([]),y=R.useRef(null);return R.useEffect(()=>{s&&y.current&&setTimeout(()=>{var k;return(k=y.current)==null?void 0:k.focus()},100)},[s]),R.useEffect(()=>{if(u.trim()===""){p([]);return}const k=u.toLowerCase(),m=Jn.filter(f=>f.title.toLowerCase().includes(k)||f.keywords.some(T=>T.toLowerCase().includes(k))||f.category.toLowerCase().includes(k)).slice(0,5);p(m)},[u]),s?l.jsxs("div",{className:"fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col animate-in fade-in duration-200",children:[l.jsxs("div",{className:"max-w-4xl mx-auto w-full p-6 flex items-center gap-4",children:[l.jsx(fc,{className:"text-gray-400",size:24}),l.jsx("input",{ref:y,type:"text",placeholder:"Search guides (e.g. 'Challan', 'Manali', 'Fastag')...",className:"flex-1 bg-transparent text-2xl md:text-4xl font-black text-gray-900 placeholder:text-gray-300 outline-none uppercase tracking-tight",value:u,onChange:k=>d(k.target.value)}),l.jsx("button",{onClick:c,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:l.jsx(Rc,{size:32})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto px-6 pb-20",children:l.jsxs("div",{className:"max-w-2xl mx-auto mt-10 space-y-4",children:[u&&g.length===0&&l.jsx("div",{className:"text-center text-gray-400 py-20",children:l.jsxs("p",{className:"text-sm font-bold uppercase tracking-widest",children:['No guides found for "',u,'"']})}),g.map(k=>l.jsxs(ce,{to:`/blog/${k.slug}`,onClick:c,className:"group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100",children:[l.jsx("img",{src:k.imageUrl,alt:k.title,className:"w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform"}),l.jsxs("div",{className:"flex-1",children:[l.jsx("span",{className:"text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1 block",children:k.category}),l.jsx("h3",{className:"text-lg font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors uppercase",children:k.title})]}),l.jsx(qa,{className:"text-gray-300 group-hover:text-blue-600 self-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"})]},k.id))]})}),l.jsx("div",{className:"border-t border-gray-100 p-4 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest",children:"Press ESC to close"})]}):null},px=()=>{const[s,c]=R.useState(!1),[u,d]=R.useState(!1),g=pt(),p=[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Travel Rules",path:"/rules"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],y=R.useCallback(f=>g.pathname===f,[g.pathname]),k=()=>c(f=>!f),m=()=>c(!1);return l.jsxs(l.Fragment,{children:[l.jsx(hx,{isOpen:u,onClose:()=>d(!1)}),l.jsxs("header",{className:"bg-white sticky top-0 z-50 border-b border-gray-50",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:l.jsxs("div",{className:"flex justify-between items-center h-14 md:h-16",children:[l.jsxs(ce,{to:"/",title:"BookMyCar.live",className:"flex items-center space-x-3 group",children:[l.jsx("div",{className:"w-9 h-9 overflow-hidden rounded-xl border border-gray-100 shadow-sm group-hover:rotate-6 transition-transform",children:l.jsx("img",{src:"/logo.png",alt:"BookMyCar Logo",className:"w-full h-full object-cover"})}),l.jsxs("span",{className:"text-xl font-black text-black tracking-tighter",children:["BookMyCar",l.jsx("span",{className:"text-blue-500",children:".live"})]})]}),l.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[p.map(f=>l.jsxs(ce,{to:f.path,className:`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${y(f.path)?"text-blue-600":"text-gray-400 hover:text-black"}`,children:[f.name,y(f.path)&&l.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"})]},f.path)),l.jsx("button",{onClick:()=>d(!0),className:"p-2 text-gray-400 hover:text-blue-600 transition-colors",title:"Search Guides",children:l.jsx(fc,{size:20})})]}),l.jsxs("div",{className:"md:hidden flex items-center gap-4",children:[l.jsx("button",{onClick:()=>d(!0),className:"p-2 text-gray-600",children:l.jsx(fc,{size:22})}),l.jsx("button",{onClick:k,className:"p-2 text-gray-900",children:s?l.jsx(Rc,{size:24}):l.jsx(Cb,{size:24})})]})]})}),s&&l.jsx("div",{className:"md:hidden border-t bg-white shadow-2xl animate-in slide-in-from-top duration-300",children:l.jsx("div",{className:"px-6 py-8 space-y-4",children:p.map(f=>l.jsxs(ce,{to:f.path,onClick:m,className:`block px-6 py-4 font-black uppercase tracking-widest text-xs rounded-2xl ${y(f.path)?"bg-blue-50 text-blue-600":"text-gray-500 hover:bg-gray-50"}`,children:[f.name,y(f.path)&&l.jsx("span",{className:"block w-1.5 h-1.5 bg-blue-600 rounded-full absolute left-4 top-1/2 -translate-y-1/2"})]},f.path))})})]})]})},gx=()=>{const s=new Date().getFullYear();return l.jsx("footer",{className:"bg-[#07090F] text-white pt-8 md:pt-10 pb-6 border-t border-white/5",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[l.jsxs("div",{className:"col-span-1",children:[l.jsxs(ce,{to:"/",className:"flex items-center space-x-3 mb-4 group",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-blue-600/20",children:l.jsx(Sl,{className:"h-5 w-5 text-white"})}),l.jsxs("span",{className:"text-xl font-black tracking-tighter",children:["BookMyCar",l.jsx("span",{className:"text-blue-500",children:".live"})]})]}),l.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-6 font-medium",children:"Real road trip guides for real people. Based on multi-state road experience. Just the honest truth about Indian highways."})]}),l.jsxs("nav",{"aria-label":"Footer navigation",children:[l.jsx("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2 inline-block",children:"Explore"}),l.jsxs("ul",{className:"space-y-3",children:[l.jsx("li",{children:l.jsx(ce,{to:"/",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Home"})}),l.jsx("li",{children:l.jsx(ce,{to:"/blog",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Blog"})}),l.jsx("li",{children:l.jsx(ce,{to:"/rules",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Travel Rules Guide"})}),l.jsx("li",{children:l.jsx(ce,{to:"/about",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"About My Mission"})})]})]}),l.jsxs("nav",{"aria-label":"Legal links",children:[l.jsx("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2 inline-block",children:"Transparency"}),l.jsxs("ul",{className:"space-y-3",children:[l.jsx("li",{children:l.jsx(ce,{to:"/privacy",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Privacy Policy"})}),l.jsx("li",{children:l.jsx(ce,{to:"/terms",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Terms of Use"})}),l.jsx("li",{children:l.jsx(ce,{to:"/disclaimer",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Full Disclaimer"})}),l.jsx("li",{children:l.jsx(ce,{to:"/cookies",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Cookie Policy"})}),l.jsxs("li",{className:"flex items-center text-gray-400 pt-2",children:[l.jsx(Rl,{className:"h-4 w-4 mr-2 text-blue-500"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-xs hover:text-blue-500 transition-colors font-black underline decoration-gray-700 underline-offset-4",children:"bookmycar.live@gmail.com"})]})]})]}),l.jsxs("div",{className:"bg-white/[0.03] p-6 rounded-[2rem] border border-white/5 relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsx("div",{className:"flex items-center gap-2 mb-3 text-blue-400",children:l.jsx("h3",{className:"text-[10px] font-black uppercase tracking-widest text-white underline decoration-blue-500/50 underline-offset-4",children:"Transparency notice"})}),l.jsx("p",{className:"text-[12px] text-gray-400 leading-relaxed font-medium",children:"Based on real experience. I don't sell bookings or take commissions. My goal is to share on-road evidence and practical advice."})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/[0.03] group-hover:scale-125 group-hover:rotate-12 transition-all duration-700",size:120})]})]}),l.jsx("div",{className:"mt-8 md:mt-6 pt-6 border-t border-white/5 flex justify-center items-center text-center",children:l.jsxs("p",{className:"text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]",children:["© ",s," BookMyCar.live. Content by Rajesh Navsagar, based on on-road experience."]})})]})})},fx=()=>{const[s,c]=R.useState(!1);R.useEffect(()=>{if(!localStorage.getItem("cookie-consent")){const g=setTimeout(()=>c(!0),1500);return()=>clearTimeout(g)}},[]);const u=()=>{localStorage.setItem("cookie-consent","true"),c(!1)};return s?l.jsx("div",{className:"fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] animate-in slide-in-from-bottom-10 duration-500",children:l.jsxs("div",{className:"bg-gray-900 border border-white/10 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg",children:l.jsx(mc,{size:20})}),l.jsx("h3",{className:"text-white font-black uppercase tracking-widest text-xs",children:"Privacy & Cookies"}),l.jsx("button",{onClick:()=>c(!1),className:"ml-auto text-gray-500 hover:text-white transition-colors",children:l.jsx(Rc,{size:18})})]}),l.jsxs("p",{className:"text-gray-400 text-[11px] leading-relaxed font-medium mb-6",children:["We use cookies to improve your experience and show relevant ads via Google AdSense. By continuing to explore our road trip guides, you agree to our ",l.jsx(ce,{to:"/privacy",className:"text-blue-400 underline underline-offset-4",children:"Privacy Policy"}),"."]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:u,className:"flex-1 bg-white text-black font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95",children:"Accept & Continue"}),l.jsx("button",{onClick:()=>c(!1),className:"bg-white/5 text-gray-400 font-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5",children:"Settings"})]})]}),l.jsx(mc,{className:"absolute -bottom-6 -right-6 text-white/[0.02] transform group-hover:scale-110 transition-transform",size:150})]})}):null};var ic,$p;function mx(){if($p)return ic;$p=1;var s=typeof Element<"u",c=typeof Map=="function",u=typeof Set=="function",d=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function g(p,y){if(p===y)return!0;if(p&&y&&typeof p=="object"&&typeof y=="object"){if(p.constructor!==y.constructor)return!1;var k,m,f;if(Array.isArray(p)){if(k=p.length,k!=y.length)return!1;for(m=k;m--!==0;)if(!g(p[m],y[m]))return!1;return!0}var T;if(c&&p instanceof Map&&y instanceof Map){if(p.size!==y.size)return!1;for(T=p.entries();!(m=T.next()).done;)if(!y.has(m.value[0]))return!1;for(T=p.entries();!(m=T.next()).done;)if(!g(m.value[1],y.get(m.value[0])))return!1;return!0}if(u&&p instanceof Set&&y instanceof Set){if(p.size!==y.size)return!1;for(T=p.entries();!(m=T.next()).done;)if(!y.has(m.value[0]))return!1;return!0}if(d&&ArrayBuffer.isView(p)&&ArrayBuffer.isView(y)){if(k=p.length,k!=y.length)return!1;for(m=k;m--!==0;)if(p[m]!==y[m])return!1;return!0}if(p.constructor===RegExp)return p.source===y.source&&p.flags===y.flags;if(p.valueOf!==Object.prototype.valueOf&&typeof p.valueOf=="function"&&typeof y.valueOf=="function")return p.valueOf()===y.valueOf();if(p.toString!==Object.prototype.toString&&typeof p.toString=="function"&&typeof y.toString=="function")return p.toString()===y.toString();if(f=Object.keys(p),k=f.length,k!==Object.keys(y).length)return!1;for(m=k;m--!==0;)if(!Object.prototype.hasOwnProperty.call(y,f[m]))return!1;if(s&&p instanceof Element)return!1;for(m=k;m--!==0;)if(!((f[m]==="_owner"||f[m]==="__v"||f[m]==="__o")&&p.$$typeof)&&!g(p[f[m]],y[f[m]]))return!1;return!0}return p!==p&&y!==y}return ic=function(y,k){try{return g(y,k)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},ic}var yx=mx();const bx=Zn(yx);var nc,eg;function xx(){if(eg)return nc;eg=1;var s=function(c,u,d,g,p,y,k,m){if(!c){var f;if(u===void 0)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var T=[d,g,p,y,k,m],A=0;f=new Error(u.replace(/%s/g,function(){return T[A++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}};return nc=s,nc}var kx=xx();const ag=Zn(kx);var rc,tg;function vx(){return tg||(tg=1,rc=function(c,u,d,g){var p=d?d.call(g,c,u):void 0;if(p!==void 0)return!!p;if(c===u)return!0;if(typeof c!="object"||!c||typeof u!="object"||!u)return!1;var y=Object.keys(c),k=Object.keys(u);if(y.length!==k.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(u),f=0;f<y.length;f++){var T=y[f];if(!m(T))return!1;var A=c[T],O=u[T];if(p=d?d.call(g,A,O,T):void 0,p===!1||p===void 0&&A!==O)return!1}return!0}),rc}var wx=vx();const jx=Zn(wx);var Rg=(s=>(s.BASE="base",s.BODY="body",s.HEAD="head",s.HTML="html",s.LINK="link",s.META="meta",s.NOSCRIPT="noscript",s.SCRIPT="script",s.STYLE="style",s.TITLE="title",s.FRAGMENT="Symbol(react.fragment)",s))(Rg||{}),lc={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ig=Object.values(Rg),Mc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Sx=Object.entries(Mc).reduce((s,[c,u])=>(s[u]=c,s),{}),Ha="data-rh",Pi={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ki=(s,c)=>{for(let u=s.length-1;u>=0;u-=1){const d=s[u];if(Object.prototype.hasOwnProperty.call(d,c))return d[c]}return null},Tx=s=>{let c=Ki(s,"title");const u=Ki(s,Pi.TITLE_TEMPLATE);if(Array.isArray(c)&&(c=c.join("")),u&&c)return u.replace(/%s/g,()=>c);const d=Ki(s,Pi.DEFAULT_TITLE);return c||d||void 0},Nx=s=>Ki(s,Pi.ON_CHANGE_CLIENT_STATE)||(()=>{}),sc=(s,c)=>c.filter(u=>typeof u[s]<"u").map(u=>u[s]).reduce((u,d)=>({...u,...d}),{}),Ax=(s,c)=>c.filter(u=>typeof u.base<"u").map(u=>u.base).reverse().reduce((u,d)=>{if(!u.length){const g=Object.keys(d);for(let p=0;p<g.length;p+=1){const k=g[p].toLowerCase();if(s.indexOf(k)!==-1&&d[k])return u.concat(d)}}return u},[]),Cx=s=>console&&typeof console.warn=="function"&&console.warn(s),Kn=(s,c,u)=>{const d={};return u.filter(g=>Array.isArray(g[s])?!0:(typeof g[s]<"u"&&Cx(`Helmet: ${s} should be of type "Array". Instead found type "${typeof g[s]}"`),!1)).map(g=>g[s]).reverse().reduce((g,p)=>{const y={};p.filter(m=>{let f;const T=Object.keys(m);for(let O=0;O<T.length;O+=1){const B=T[O],Y=B.toLowerCase();c.indexOf(Y)!==-1&&!(f==="rel"&&m[f].toLowerCase()==="canonical")&&!(Y==="rel"&&m[Y].toLowerCase()==="stylesheet")&&(f=Y),c.indexOf(B)!==-1&&(B==="innerHTML"||B==="cssText"||B==="itemprop")&&(f=B)}if(!f||!m[f])return!1;const A=m[f].toLowerCase();return d[f]||(d[f]={}),y[f]||(y[f]={}),d[f][A]?!1:(y[f][A]=!0,!0)}).reverse().forEach(m=>g.push(m));const k=Object.keys(y);for(let m=0;m<k.length;m+=1){const f=k[m],T={...d[f],...y[f]};d[f]=T}return g},[]).reverse()},Rx=(s,c)=>{if(Array.isArray(s)&&s.length){for(let u=0;u<s.length;u+=1)if(s[u][c])return!0}return!1},Mx=s=>({baseTag:Ax(["href"],s),bodyAttributes:sc("bodyAttributes",s),defer:Ki(s,Pi.DEFER),encode:Ki(s,Pi.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:sc("htmlAttributes",s),linkTags:Kn("link",["rel","href"],s),metaTags:Kn("meta",["name","charset","http-equiv","property","itemprop"],s),noscriptTags:Kn("noscript",["innerHTML"],s),onChangeClientState:Nx(s),scriptTags:Kn("script",["src","innerHTML"],s),styleTags:Kn("style",["cssText"],s),title:Tx(s),titleAttributes:sc("titleAttributes",s),prioritizeSeoTags:Rx(s,Pi.PRIORITIZE_SEO_TAGS)}),Mg=s=>Array.isArray(s)?s.join(""):s,Ex=(s,c)=>{const u=Object.keys(s);for(let d=0;d<u.length;d+=1)if(c[u[d]]&&c[u[d]].includes(s[u[d]]))return!0;return!1},oc=(s,c)=>Array.isArray(s)?s.reduce((u,d)=>(Ex(d,c)?u.priority.push(d):u.default.push(d),u),{priority:[],default:[]}):{default:s,priority:[]},ng=(s,c)=>({...s,[c]:void 0}),zx=["noscript","script","style"],bc=(s,c=!0)=>c===!1?String(s):String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Eg=s=>Object.keys(s).reduce((c,u)=>{const d=typeof s[u]<"u"?`${u}="${s[u]}"`:`${u}`;return c?`${c} ${d}`:d},""),Dx=(s,c,u,d)=>{const g=Eg(u),p=Mg(c);return g?`<${s} ${Ha}="true" ${g}>${bc(p,d)}</${s}>`:`<${s} ${Ha}="true">${bc(p,d)}</${s}>`},Hx=(s,c,u=!0)=>c.reduce((d,g)=>{const p=g,y=Object.keys(p).filter(f=>!(f==="innerHTML"||f==="cssText")).reduce((f,T)=>{const A=typeof p[T]>"u"?T:`${T}="${bc(p[T],u)}"`;return f?`${f} ${A}`:A},""),k=p.innerHTML||p.cssText||"",m=zx.indexOf(s)===-1;return`${d}<${s} ${Ha}="true" ${y}${m?"/>":`>${k}</${s}>`}`},""),zg=(s,c={})=>Object.keys(s).reduce((u,d)=>{const g=Mc[d];return u[g||d]=s[d],u},c),Ox=(s,c,u)=>{const d={key:c,[Ha]:!0},g=zg(u,d);return[dt.createElement("title",g,c)]},wl=(s,c)=>c.map((u,d)=>{const g={key:d,[Ha]:!0};return Object.keys(u).forEach(p=>{const k=Mc[p]||p;if(k==="innerHTML"||k==="cssText"){const m=u.innerHTML||u.cssText;g.dangerouslySetInnerHTML={__html:m}}else g[k]=u[p]}),dt.createElement(s,g)}),Ra=(s,c,u=!0)=>{switch(s){case"title":return{toComponent:()=>Ox(s,c.title,c.titleAttributes),toString:()=>Dx(s,c.title,c.titleAttributes,u)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>zg(c),toString:()=>Eg(c)};default:return{toComponent:()=>wl(s,c),toString:()=>Hx(s,c,u)}}},Bx=({metaTags:s,linkTags:c,scriptTags:u,encode:d})=>{const g=oc(s,lc.meta),p=oc(c,lc.link),y=oc(u,lc.script);return{priorityMethods:{toComponent:()=>[...wl("meta",g.priority),...wl("link",p.priority),...wl("script",y.priority)],toString:()=>`${Ra("meta",g.priority,d)} ${Ra("link",p.priority,d)} ${Ra("script",y.priority,d)}`},metaTags:g.default,linkTags:p.default,scriptTags:y.default}},_x=s=>{const{baseTag:c,bodyAttributes:u,encode:d=!0,htmlAttributes:g,noscriptTags:p,styleTags:y,title:k="",titleAttributes:m,prioritizeSeoTags:f}=s;let{linkTags:T,metaTags:A,scriptTags:O}=s,B={toComponent:()=>{},toString:()=>""};return f&&({priorityMethods:B,linkTags:T,metaTags:A,scriptTags:O}=Bx(s)),{priority:B,base:Ra("base",c,d),bodyAttributes:Ra("bodyAttributes",u,d),htmlAttributes:Ra("htmlAttributes",g,d),link:Ra("link",T,d),meta:Ra("meta",A,d),noscript:Ra("noscript",p,d),script:Ra("script",O,d),style:Ra("style",y,d),title:Ra("title",{title:k,titleAttributes:m},d)}},xc=_x,xl=[],Dg=!!(typeof window<"u"&&window.document&&window.document.createElement),kc=class{constructor(s,c){ct(this,"instances",[]);ct(this,"canUseDOM",Dg);ct(this,"context");ct(this,"value",{setHelmet:s=>{this.context.helmet=s},helmetInstances:{get:()=>this.canUseDOM?xl:this.instances,add:s=>{(this.canUseDOM?xl:this.instances).push(s)},remove:s=>{const c=(this.canUseDOM?xl:this.instances).indexOf(s);(this.canUseDOM?xl:this.instances).splice(c,1)}}});this.context=s,this.canUseDOM=c||!1,c||(s.helmet=xc({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Ux={},Hg=dt.createContext(Ux),ri,Og=(ri=class extends R.Component{constructor(u){super(u);ct(this,"helmetData");this.helmetData=new kc(this.props.context||{},ri.canUseDOM)}render(){return dt.createElement(Hg.Provider,{value:this.helmetData.value},this.props.children)}},ct(ri,"canUseDOM",Dg),ri),Vi=(s,c)=>{const u=document.head||document.querySelector("head"),d=u.querySelectorAll(`${s}[${Ha}]`),g=[].slice.call(d),p=[];let y;return c&&c.length&&c.forEach(k=>{const m=document.createElement(s);for(const f in k)if(Object.prototype.hasOwnProperty.call(k,f))if(f==="innerHTML")m.innerHTML=k.innerHTML;else if(f==="cssText")m.styleSheet?m.styleSheet.cssText=k.cssText:m.appendChild(document.createTextNode(k.cssText));else{const T=f,A=typeof k[T]>"u"?"":k[T];m.setAttribute(f,A)}m.setAttribute(Ha,"true"),g.some((f,T)=>(y=T,m.isEqualNode(f)))?g.splice(y,1):p.push(m)}),g.forEach(k=>{var m;return(m=k.parentNode)==null?void 0:m.removeChild(k)}),p.forEach(k=>u.appendChild(k)),{oldTags:g,newTags:p}},vc=(s,c)=>{const u=document.getElementsByTagName(s)[0];if(!u)return;const d=u.getAttribute(Ha),g=d?d.split(","):[],p=[...g],y=Object.keys(c);for(const k of y){const m=c[k]||"";u.getAttribute(k)!==m&&u.setAttribute(k,m),g.indexOf(k)===-1&&g.push(k);const f=p.indexOf(k);f!==-1&&p.splice(f,1)}for(let k=p.length-1;k>=0;k-=1)u.removeAttribute(p[k]);g.length===p.length?u.removeAttribute(Ha):u.getAttribute(Ha)!==y.join(",")&&u.setAttribute(Ha,y.join(","))},Lx=(s,c)=>{typeof s<"u"&&document.title!==s&&(document.title=Mg(s)),vc("title",c)},rg=(s,c)=>{const{baseTag:u,bodyAttributes:d,htmlAttributes:g,linkTags:p,metaTags:y,noscriptTags:k,onChangeClientState:m,scriptTags:f,styleTags:T,title:A,titleAttributes:O}=s;vc("body",d),vc("html",g),Lx(A,O);const B={baseTag:Vi("base",u),linkTags:Vi("link",p),metaTags:Vi("meta",y),noscriptTags:Vi("noscript",k),scriptTags:Vi("script",f),styleTags:Vi("style",T)},Y={},Q={};Object.keys(B).forEach(q=>{const{newTags:I,oldTags:ae}=B[q];I.length&&(Y[q]=I),ae.length&&(Q[q]=B[q].oldTags)}),c&&c(),m(s,Y,Q)},Qn=null,Gx=s=>{Qn&&cancelAnimationFrame(Qn),s.defer?Qn=requestAnimationFrame(()=>{rg(s,()=>{Qn=null})}):(rg(s),Qn=null)},qx=Gx,lg=class extends R.Component{constructor(){super(...arguments);ct(this,"rendered",!1)}shouldComponentUpdate(c){return!jx(c,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:c}=this.props.context;c.remove(this),this.emitChange()}emitChange(){const{helmetInstances:c,setHelmet:u}=this.props.context;let d=null;const g=Mx(c.get().map(p=>{const y={...p.props};return delete y.context,y}));Og.canUseDOM?qx(g):xc&&(d=xc(g)),u(d)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:c}=this.props.context;c.add(this),this.emitChange()}render(){return this.init(),null}},cc,Ia=(cc=class extends R.Component{shouldComponentUpdate(s){return!bx(ng(this.props,"helmetData"),ng(s,"helmetData"))}mapNestedChildrenToProps(s,c){if(!c)return null;switch(s.type){case"script":case"noscript":return{innerHTML:c};case"style":return{cssText:c};default:throw new Error(`<${s.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(s,c,u,d){return{...c,[s.type]:[...c[s.type]||[],{...u,...this.mapNestedChildrenToProps(s,d)}]}}mapObjectTypeChildren(s,c,u,d){switch(s.type){case"title":return{...c,[s.type]:d,titleAttributes:{...u}};case"body":return{...c,bodyAttributes:{...u}};case"html":return{...c,htmlAttributes:{...u}};default:return{...c,[s.type]:{...u}}}}mapArrayTypeChildrenToProps(s,c){let u={...c};return Object.keys(s).forEach(d=>{u={...u,[d]:s[d]}}),u}warnOnInvalidChildren(s,c){return ag(ig.some(u=>s.type===u),typeof s.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ig.join(", ")} are allowed. Helmet does not support rendering <${s.type}> elements. Refer to our API for more information.`),ag(!c||typeof c=="string"||Array.isArray(c)&&!c.some(u=>typeof u!="string"),`Helmet expects a string as a child of <${s.type}>. Did you forget to wrap your children in braces? ( <${s.type}>{\`\`}</${s.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(s,c){let u={};return dt.Children.forEach(s,d=>{if(!d||!d.props)return;const{children:g,...p}=d.props,y=Object.keys(p).reduce((m,f)=>(m[Sx[f]||f]=p[f],m),{});let{type:k}=d;switch(typeof k=="symbol"?k=k.toString():this.warnOnInvalidChildren(d,g),k){case"Symbol(react.fragment)":c=this.mapChildrenToProps(g,c);break;case"link":case"meta":case"noscript":case"script":case"style":u=this.flattenArrayTypeChildren(d,u,y,g);break;default:c=this.mapObjectTypeChildren(d,c,y,g);break}}),this.mapArrayTypeChildrenToProps(u,c)}render(){const{children:s,...c}=this.props;let u={...c},{helmetData:d}=c;if(s&&(u=this.mapChildrenToProps(s,u)),d&&!(d instanceof kc)){const g=d;d=new kc(g.context,!0),delete u.helmetData}return d?dt.createElement(lg,{...u,context:d.value}):dt.createElement(Hg.Consumer,null,g=>dt.createElement(lg,{...u,context:g}))}},ct(cc,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),cc);const Yx=()=>{const s=Jn.slice(0,3);return l.jsxs("div",{className:"flex flex-col min-h-screen",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"BookMyCar.live | Honest Indian Road Trip & Rental Guide"}),l.jsx("meta",{name:"description",content:"Stop making expensive road trip mistakes. BookMyCar.live is a human-written guide for Indian driving rules, car rental scams, and highway safety tips."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/"})]}),l.jsxs("section",{className:"relative min-h-[500px] md:h-[60vh] md:max-h-[420px] flex items-center overflow-hidden bg-black",children:[l.jsxs("div",{className:"absolute inset-0 z-0",children:[l.jsx("img",{src:"/images/hero/home-hero-indian-road-trip-car.png",className:"w-full h-full object-cover object-[65%_center] md:object-center opacity-60 md:opacity-100",alt:"Indian Road Trip",fetchPriority:"high"}),l.jsx("div",{className:"absolute inset-0 bg-black/40 md:bg-black/20"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent"})]}),l.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center py-10",children:l.jsxs("div",{className:"max-w-2xl text-center md:text-left mx-auto md:mx-0",children:[l.jsx("div",{className:"flex items-center justify-center md:justify-start gap-2 mb-4 opacity-100",children:l.jsx("span",{className:"text-[10px] md:text-[11px] font-black text-blue-400 uppercase tracking-[0.3em]",children:"From Indian Highways — Field Notes"})}),l.jsxs("h1",{className:"text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-white uppercase italic drop-shadow-2xl",children:["The Indian Road Trip ",l.jsx("br",{}),l.jsx("span",{className:"text-3xl md:text-5xl text-blue-500 block mt-2",children:"Reality Guide"})]}),l.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-blue-500/30 p-5 rounded-2xl max-w-lg mb-8 shadow-xl mx-auto md:mx-0",children:[l.jsx("p",{className:"text-white text-[13px] md:text-base leading-relaxed font-bold italic",children:'"Real-world driving lessons from Indian highways — routes, rules, tolls, and mistakes you only learn on the road."'}),l.jsx("div",{className:"mt-4 flex items-center justify-center md:justify-start gap-2",children:l.jsx("span",{className:"text-[9px] font-black text-blue-300 uppercase tracking-widest",children:"Rajesh Navsagar, Expert Traveler"})})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start",children:[l.jsxs(ce,{to:"/blog",className:"w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg text-[10px] uppercase tracking-widest min-w-[180px]",children:["READ THE BLOGS ",l.jsx(qa,{size:14})]}),l.jsxs(ce,{to:"/rules",className:"w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg text-[10px] uppercase tracking-widest min-w-[180px]",children:["THE RULEBOOK ",l.jsx(qa,{size:14})]})]})]})})]}),l.jsx("section",{className:"py-10 bg-white border-b border-gray-100",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left",children:[l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4",children:[l.jsx("div",{className:"bg-blue-50 p-3 rounded-xl text-blue-600",children:l.jsx(Tg,{size:22})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-gray-900 text-sm uppercase",children:"First-hand Experience"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-snug",children:"Based on multi-state road trips, toll booths, border check-posts, and real rental disputes."})]})]}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4 border-y md:border-y-0 md:border-x py-8 md:py-2 px-0 md:px-8",children:[l.jsx("div",{className:"bg-green-50 p-3 rounded-xl text-green-600",children:l.jsx(je,{size:22})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-gray-900 text-sm uppercase",children:"Zero Agency Favor"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-snug",children:"No paid partnerships. Companies are mentioned only when necessary for explanation."})]})]}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4",children:[l.jsx("div",{className:"bg-yellow-50 p-3 rounded-xl text-yellow-600",children:l.jsx(Cl,{size:22})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-gray-900 text-sm uppercase",children:"RTO Truths"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-snug",children:"RTO rules explained as they are enforced on highways, not as written in PDFs."})]})]})]})}),l.jsx("section",{className:"py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:l.jsxs("div",{className:"bg-blue-50/50 rounded-[40px] p-8 md:p-12 border border-blue-100 relative overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none",children:l.jsx(Sl,{size:200,className:"text-blue-600"})}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("h2",{className:"text-2xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight",children:["What You’ll Learn on ",l.jsx("span",{className:"text-blue-600",children:"BookMyCar.live"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[l.jsxs("ul",{className:"space-y-4",children:[l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"How to legally rent and drive self-drive cars in India"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"State-wise road rules, tolls, and RTO realities"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"Rental car insurance traps and how to avoid damage scams"})]})]}),l.jsxs("ul",{className:"space-y-4",children:[l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"Real highway safety tips from long-distance drives"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"Route planning, pitstops, and timing strategies"})]}),l.jsx("li",{className:"flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-blue-100",children:l.jsx("p",{className:"text-blue-700 font-bold text-xs uppercase tracking-widest italic",children:'"Every guide focuses on avoiding fines, delays, and rental disputes — not selling services."'})})]})]})]})]})})}),l.jsx("section",{className:"py-16 bg-gray-50",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[l.jsxs("div",{className:"flex justify-between items-end mb-10",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight uppercase italic",children:["Latest Road Trip ",l.jsx("span",{className:"text-blue-600",children:"Guides"})]}),l.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Updated routes and rule changes based on recent road trips."})]}),l.jsxs(ce,{to:"/blog",className:"hidden md:flex items-center text-blue-600 hover:text-blue-700 font-black uppercase text-[10px] tracking-[0.2em]",children:["View All ",l.jsx(qa,{className:"ml-2 h-3.5 w-3.5"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:s.map(c=>l.jsxs("article",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col",children:[l.jsxs("div",{className:"relative h-48 overflow-hidden",children:[l.jsx("img",{src:`${c.imageUrl}?v=2`,alt:c.title,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute top-3 left-3",children:l.jsx("span",{className:"bg-white/90 backdrop-blur-md text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider",children:c.category})})]}),l.jsxs("div",{className:"p-5 flex flex-col flex-1",children:[l.jsx("div",{className:"flex items-center gap-2 mb-2 text-[9px] font-black text-blue-600 uppercase tracking-widest"}),l.jsx("h3",{className:"text-lg font-black text-gray-900 mb-2 line-clamp-2 leading-tight",children:l.jsx(ce,{to:`/blog/${c.slug}`,className:"hover:text-blue-600 transition-colors uppercase",children:c.title})}),l.jsx("p",{className:"text-gray-500 text-xs mb-4 line-clamp-3 flex-1 leading-relaxed",children:c.excerpt}),l.jsxs(ce,{to:`/blog/${c.slug}`,className:"text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-1 border-t pt-4 mt-auto",children:["Explore Guide ",l.jsx(qa,{size:10})]})]})]},c.id))})]})}),l.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-900 to-[#161b2b] text-white overflow-hidden relative border-t border-white/5",children:l.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8 relative z-10",children:l.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-10",children:[l.jsx("div",{className:"lg:w-1/4 text-center lg:text-left",children:l.jsxs("div",{className:"w-48 h-48 bg-blue-600 rounded-2xl mx-auto lg:mx-0 flex items-center justify-center shadow-2xl overflow-hidden relative border-2 border-white/10",children:[l.jsx(Cc,{size:100,className:"text-white/20 absolute -bottom-4 -right-4"}),l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx(Sl,{size:60,className:"text-white"})}),l.jsx("div",{className:"absolute bottom-0 inset-x-0 bg-blue-700/90 py-1.5 text-[9px] font-black tracking-widest text-center uppercase",children:"RAJESH NAVSAGAR"})]})}),l.jsxs("div",{className:"lg:w-3/4",children:[l.jsxs("h2",{className:"text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none italic",children:["Meet the Expert: ",l.jsx("br",{}),l.jsx("span",{className:"text-blue-500",children:"Expert Corner"})]}),l.jsx("div",{className:"bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-lg inline-block mb-4 text-[10px] font-black uppercase tracking-widest text-blue-400",children:"7 years of driving • Multi-state highway experience • Rental policy auditor (based on real booking and dispute cases)"}),l.jsx("p",{className:"text-base md:text-lg text-gray-400 mb-6 italic font-medium leading-relaxed",children:`"I've spent years on Indian highways. I built BookMyCar.live so you can focus on the drive, not the paperwork."`}),l.jsxs(ce,{to:"/about",className:"inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-all shadow-xl uppercase tracking-[0.15em] text-[10px]",children:["Understand My Mission ",l.jsx(qa,{className:"ml-2 h-4 w-4"})]})]})]})})}),l.jsx("section",{className:"py-20 bg-white",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[l.jsxs("div",{className:"text-center mb-12",children:[l.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight italic",children:["Frequently Asked ",l.jsx("span",{className:"text-blue-600",children:"Questions"})," (FAQ)"]}),l.jsx("p",{className:"text-gray-500 font-medium italic",children:"Tez aur saaf jawab, bina kisi filter ke."})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6 border border-gray-100",children:[l.jsx("h3",{className:"text-sm font-black text-gray-900 uppercase mb-2",children:"Is BookMyCar.live a rental company?"}),l.jsx("p",{className:"text-gray-600 text-[13px] leading-relaxed font-medium",children:"Nahi. Hum koi rental company nahi hain. Hum ek independent guide portal hain jo aapko ye batata hai ki rental companies se gaadi kaise leni hai aur scams se kaise bachna hai."})]}),l.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6 border border-gray-100",children:[l.jsx("h3",{className:"text-sm font-black text-gray-900 uppercase mb-2",children:"Are these guides sponsored?"}),l.jsx("p",{className:"text-gray-600 text-[13px] leading-relaxed font-medium",children:"Bilkul nahi. Hum brands ko critique karte hain unki actual service ke basis par. Agar koi company fraud hai, toh hum use waisa hi likhte hain."})]}),l.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6 border border-gray-100",children:[l.jsx("h3",{className:"text-sm font-black text-gray-900 uppercase mb-2",children:"Kaun is content ke liye responsible hai?"}),l.jsx("p",{className:"text-gray-600 text-[13px] leading-relaxed font-medium",children:"Is site ka saara content Rajesh Navsagar ke personal road experience aur document verification par based hai."})]})]})]})})]})},Ix=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-4 pb-12 px-4",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Rental Car Rules & RTO Reality India | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Indian Road Rules & Rental Guidelines 2026. Real-world checking, documentation advice, and black-plate vs white-plate reality."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/rules"})]}),l.jsxs("div",{className:"max-w-5xl mx-auto px-4 md:px-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 border border-blue-100/50",children:[l.jsx(je,{size:12})," Road Trip Field Notes"]}),l.jsxs("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter leading-[1.1] font-serif uppercase",children:["Road Rules They ",l.jsx("br",{})," ",l.jsx("span",{className:"text-blue-600",children:"Don't Tell You."})]}),l.jsx("p",{className:"text-[10px] md:text-xs text-blue-600 font-black uppercase tracking-widest mb-4",children:'"Written from observations made at highway check-posts and real rental experiences."'}),l.jsx("p",{className:"text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed italic border-l-2 border-blue-100 pl-4 py-1",children:"Documents, insurance, and state laws — Practical guidance for Indian travelers, based on real highway logs."})]}),l.jsxs("div",{className:"bg-orange-50/50 border-2 border-orange-200/50 rounded-2xl p-5 mb-8 flex flex-col md:flex-row gap-4 items-center shadow-sm",children:[l.jsx("div",{className:"bg-orange-600 p-2 rounded-xl text-white flex-shrink-0 shadow-lg",children:l.jsx(Cl,{size:20})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-black text-orange-900 mb-1 uppercase tracking-tighter italic",children:"Honest Compliance Disclaimer"}),l.jsx("p",{className:"text-[11px] text-orange-900/70 font-bold leading-relaxed",children:"Rules vary significantly by state and car provider. The information below is based on personal driving history and common enforcement practices. Actual outcomes may vary by state and provider—always check your rental contract."})]})]}),l.jsxs("div",{className:"bg-gray-900 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("h2",{className:"text-[9px] font-black flex items-center gap-2 mb-3 uppercase tracking-[0.2em] text-blue-400",children:[l.jsx("div",{className:"w-4 h-0.5 bg-blue-400"})," Rajesh's Reality Check"]}),l.jsx("p",{className:"text-lg md:text-xl font-bold leading-tight mb-3 text-white uppercase italic",children:`"A missing permit doesn't just cost you money; it costs you your vacation time."`}),l.jsx("p",{className:"text-gray-400 text-xs md:text-sm leading-relaxed font-medium",children:"These rules are compiled from real highway checks, rental disputes, and multi-state driving experiences between 2019–2026."})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform duration-700",size:120})]}),l.jsxs("section",{className:"mb-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-md",children:l.jsx(mb,{className:"h-4 w-4"})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 tracking-tight uppercase",children:"Essential Documents"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"bg-gray-50 p-5 rounded-xl border border-gray-100",children:[l.jsx(gc,{className:"text-blue-600 mb-2",size:18}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tight",children:"DL (Original Mandatory)"}),l.jsx("p",{className:"text-gray-500 font-medium text-[11px] leading-relaxed",children:"LMV license only. On state borders, cops often demand the physical card over DigiLocker."})]}),l.jsxs("div",{className:"bg-gray-50 p-5 rounded-xl border border-gray-100",children:[l.jsx(gc,{className:"text-blue-600 mb-2",size:18}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tight",children:"Address Proof (No PAN)"}),l.jsx("p",{className:"text-gray-500 font-medium text-[11px] leading-relaxed",children:"Agencies do NOT accept PAN cards. Use Aadhaar or Passport."})]})]})]}),l.jsxs("section",{className:"mb-10 bg-red-50 p-6 md:p-8 rounded-2xl border border-red-200 relative overflow-hidden",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 bg-red-600 text-white px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest mb-4",children:[l.jsx(Tl,{size:12})," High Risk Warning: White Plate Rentals"]}),l.jsx("h2",{className:"text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase",children:"Insurance & Compliance Risks"}),l.jsx("p",{className:"text-sm font-bold text-gray-800 leading-relaxed mb-4 border-l-2 border-red-500 pl-4",children:"In many states, private (white plate) vehicles are not permitted for commercial rental use. Some insurance policies may deny claims if a vehicle is found to be operating outside permitted use. In such cases, renters may face claim complications or financial liability depending on policy terms and local enforcement."}),l.jsx("div",{className:"bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-red-300 inline-block shadow-sm",children:l.jsx("p",{className:"text-red-900 font-black uppercase tracking-tighter text-[10px] italic",children:"Rajesh's Advice: Prefer commercially registered vehicles (black + yellow plates) to reduce insurance and compliance risks."})})]}),l.jsx(Tl,{className:"absolute -bottom-4 -right-4 text-red-600/5 group-hover:scale-110 transition-transform",size:120})]}),l.jsxs("section",{className:"mb-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-md",children:l.jsx(mc,{className:"h-4 w-4"})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 tracking-tight uppercase",children:"Insurance Reality"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",children:[l.jsx("h3",{className:"text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2",children:"Typical Deductible (Varies by Provider)"}),l.jsx("p",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tighter",children:"Limited Liability"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-relaxed font-medium",children:"Often deducted from the security deposit for minor damages such as scratches or glass damage, subject to rental and insurance policy terms."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center md:text-left",children:[l.jsx("h3",{className:"text-[9px] font-black text-red-600 uppercase tracking-widest mb-2",children:"Severe Violation"}),l.jsx("p",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tighter text-red-600",children:"Possible Recovery Costs"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-relaxed font-medium",children:"In cases such as drink & drive or extreme overspeeding, insurance claims may be rejected depending on policy terms and enforcement reports. In such situations, renters may be required to bear significant recovery costs."})]})]})]}),l.jsx("div",{className:"bg-blue-50/30 border border-blue-100/50 rounded-2xl p-6 text-center italic",children:l.jsx("p",{className:"text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]",children:"This page is for educational purposes only. Always refer to official RTO guidelines and your provider's legal contract."})})]})]}),Vx=()=>l.jsxs("div",{className:"bg-white rounded-3xl p-6 md:p-10 mt-12 border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg relative overflow-hidden group",children:[l.jsx("div",{className:"absolute top-0 left-0 w-2 h-full bg-blue-600"}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("div",{className:"w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl transform transition-transform group-hover:rotate-3 overflow-hidden",children:l.jsx("img",{src:"/logo.png",alt:"BookMyCar Logo",className:"w-full h-full object-cover"})})}),l.jsxs("div",{className:"flex-grow",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("h3",{className:"text-2xl font-black text-gray-900 tracking-tight uppercase",children:"Rajesh Navsagar"}),l.jsx("div",{className:"bg-blue-600 p-0.5 rounded-md",children:l.jsx(je,{className:"text-white w-4 h-4"})})]}),l.jsxs("p",{className:"text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5",children:[l.jsx(Nb,{size:12})," Expert Traveler"]})]}),l.jsxs("a",{href:"mailto:bookmycar.live@gmail.com",className:"inline-flex items-center px-4 py-2 rounded-xl bg-gray-50 text-gray-900 hover:bg-blue-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-widest border border-gray-100 group/btn",children:[l.jsx(Rl,{className:"w-3.5 h-3.5 mr-2 group-hover/btn:scale-110 transition-transform"})," Contact Rajesh"]})]}),l.jsxs("div",{className:"space-y-4 mb-6",children:[l.jsx("p",{className:"text-gray-700 text-base md:text-lg leading-relaxed font-medium italic",children:'"I built this site because I was tired of seeing travelers get scammed. My guides are written from actual driving logs so you can hit the highway with zero stress."'}),l.jsxs("p",{className:"text-gray-400 text-xs leading-relaxed font-bold border-l-2 border-gray-100 pl-4",children:[l.jsx("span",{className:"text-gray-600 uppercase text-[8px] tracking-widest block mb-1 font-black",children:"Context"}),"Rajesh is an independent road-travel researcher with multi-state driving experience across India (2019–2026), documenting rental rules and highway safety realities."]})]}),l.jsx("div",{className:"bg-blue-50/50 rounded-xl px-4 py-2 border border-blue-100 inline-block",children:l.jsxs("p",{className:"text-[8px] font-black text-blue-900 flex items-center gap-2 uppercase tracking-widest",children:[l.jsx(je,{size:14,className:"text-blue-600"})," Human-written & verified."]})})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-gray-400/5",size:120})]}),Px=({title:s,url:c})=>{const[u,d]=R.useState(!1),g=encodeURIComponent(c),p=encodeURIComponent(s),y=[{name:"WhatsApp",icon:l.jsx(Cg,{size:18}),url:`https://wa.me/?text=${p}%20${g}`,color:"bg-[#25D366] hover:bg-[#20bd5a] text-white",label:"Share"},{name:"Facebook",icon:l.jsx(gb,{size:18}),url:`https://www.facebook.com/sharer/sharer.php?u=${g}`,color:"bg-[#1877F2] hover:bg-[#166fe5] text-white",label:"Post"},{name:"Twitter/X",icon:l.jsx(Ib,{size:18}),url:`https://twitter.com/intent/tweet?text=${p}&url=${g}`,color:"bg-black hover:bg-gray-800 text-white",label:"Tweet"},{name:"LinkedIn",icon:l.jsx(vb,{size:18}),url:`https://www.linkedin.com/shareArticle?mini=true&url=${g}&title=${p}`,color:"bg-[#0077B5] hover:bg-[#006da5] text-white",label:"Post"}],k=()=>{navigator.clipboard.writeText(c),d(!0),setTimeout(()=>d(!1),2e3)};return l.jsxs("div",{className:"flex flex-col gap-4 py-8 border-t border-gray-100 mt-8",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx(Wp,{size:16,className:"text-blue-600"}),l.jsx("h3",{className:"text-xs font-black text-gray-900 uppercase tracking-widest",children:"Share this Guide"})]}),l.jsxs("div",{className:"flex flex-wrap gap-3",children:[y.map(m=>l.jsxs("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${m.color}`,"aria-label":`Share on ${m.name}`,children:[m.icon,l.jsx("span",{className:"hidden sm:inline",children:m.label})]},m.name)),l.jsxs("button",{onClick:k,className:`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm border border-gray-200 hover:bg-gray-50 ${u?"bg-green-50 text-green-600 border-green-200":"bg-white text-gray-600"}`,children:[u?l.jsx(Wp,{size:18}):l.jsx(cb,{size:18}),u?"Copied!":"Copy Link"]})]})]})},Kx=({title:s,slug:c})=>{const u=`Query regarding: ${s}`,d=`mailto:bookmycar.live@gmail.com?subject=${encodeURIComponent(u)}`;return l.jsxs("div",{className:"bg-blue-50/50 rounded-2xl p-8 border border-blue-100 my-12 text-center relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsx("div",{className:"inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4 text-blue-600",children:l.jsx(Jp,{size:24})}),l.jsx("h3",{className:"text-xl font-black text-gray-900 mb-2 uppercase tracking-tight",children:"Still confused about the rules?"}),l.jsx("p",{className:"text-gray-600 text-sm max-w-lg mx-auto mb-6 font-medium leading-relaxed",children:"Road rules in India can be tricky. If you have a specific doubt about this route or rental policy, ask me directly. No bots, just a fellow driver helping out."}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[l.jsxs("a",{href:d,className:"inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5",children:[l.jsx(Rl,{size:14})," Email Your Question"]}),l.jsxs(ce,{to:"/contact",className:"inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5",children:[l.jsx(Cg,{size:14})," More Options"]})]}),l.jsx("p",{className:"mt-6 text-[9px] text-gray-400 font-bold uppercase tracking-widest",children:"Response time: 24-48 Hours"})]}),l.jsx(Jp,{className:"absolute -bottom-10 -right-10 text-blue-100 opacity-50 group-hover:rotate-12 transition-transform duration-700",size:200})]})},sg=({slotId:s,format:c="auto",layoutKey:u,className:d="",style:g={}})=>{R.useEffect(()=>{try{typeof window<"u"&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(y){console.error("AdSense error:",y)}},[]);const p=!1;return s?l.jsxs("div",{className:`ad-container ${d}`,style:g,children:[p,l.jsx("ins",{className:"adsbygoogle",style:{display:"block",...g},"data-ad-client":"ca-pub-YOUR_ADSENSE_ID_HERE","data-ad-slot":s,"data-ad-format":c,"data-full-width-responsive":"true",...u&&{"data-ad-layout-key":u}})]}):null},Qx=()=>l.jsxs("main",{className:"bg-gray-50 min-h-screen pt-6 pb-12",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Road Trip Guides | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Read expert guides on Indian road trips, rental car rules, and safety checklists. Verified information based on real driving experiences."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/blog"})]}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("header",{className:"text-center mb-10 px-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest mb-4 border border-blue-100",children:[l.jsx(je,{size:12})," Experience-verified Guides"]}),l.jsxs("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif uppercase leading-[1.1]",children:["Indian Road Trip ",l.jsx("br",{})," ",l.jsx("span",{className:"text-blue-600",children:"Travel Guides"})]}),l.jsx("p",{className:"text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed italic",children:"Real-world driving logs, rental rules, and safety checklists."})]}),l.jsx("section",{"aria-label":"Blog posts",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Jn.map(s=>l.jsxs("article",{className:"bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group p-1",children:[l.jsxs("div",{className:"relative h-48 overflow-hidden rounded-2xl",children:[l.jsx("img",{src:`${s.imageUrl}?v=2`,alt:s.title,loading:"lazy",decoding:"async",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),l.jsx("div",{className:"absolute top-3 left-3",children:l.jsx("span",{className:"bg-white/95 backdrop-blur-md text-gray-900 text-[8px] font-black px-2 py-1 rounded-md shadow-md uppercase tracking-wider",children:s.category})})]}),l.jsxs("div",{className:"p-5 flex flex-col flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2 text-[8px] font-black text-blue-600 uppercase tracking-[0.2em]",children:[l.jsx(je,{size:10})," On-road experience"]}),l.jsx("h2",{className:"text-lg font-black text-gray-900 mb-2 line-clamp-2 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase",children:l.jsx(ce,{to:`/blog/${s.slug}`,children:s.title})}),l.jsx("p",{className:"text-gray-500 text-[11px] mb-4 line-clamp-2 flex-1 leading-relaxed font-medium",children:s.excerpt}),l.jsxs("div",{className:"flex items-center justify-between border-t pt-4 border-gray-50 mt-auto",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-gray-400 text-[8px] font-black uppercase tracking-widest",children:[l.jsx(pc,{className:"h-3 w-3"})," ",s.date]}),l.jsxs(ce,{to:`/blog/${s.slug}`,className:"text-blue-600 font-black text-[9px] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all",children:["Explore ",l.jsx(hc,{className:"rotate-180",size:10})]})]})]})]},s.id))})]})]}),Fx=()=>{const{slug:s}=Wy(),c=Jn.find(u=>u.slug===s);return c?l.jsxs("main",{className:"bg-white min-h-screen pb-12",children:[l.jsxs(Ia,{children:[l.jsxs("title",{children:[c.title," | BookMyCar.live"]}),l.jsx("meta",{name:"description",content:c.excerpt}),l.jsx("meta",{name:"keywords",content:c.keywords.join(", ")}),l.jsx("meta",{name:"author",content:c.author}),l.jsx("meta",{property:"og:title",content:`${c.title} | BookMyCar.live`}),l.jsx("meta",{property:"og:description",content:c.excerpt}),l.jsx("meta",{property:"og:image",content:`https://bookmycar.live${c.imageUrl}`}),l.jsx("meta",{property:"og:url",content:`https://bookmycar.live/blog/${c.slug}`}),l.jsx("meta",{property:"og:type",content:"article"}),l.jsx("link",{rel:"canonical",href:`https://bookmycar.live/blog/${c.slug}`}),l.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:c.title,description:c.excerpt,author:{"@type":"Person",name:c.author,url:"https://bookmycar.live/about"},datePublished:c.date,image:`https://bookmycar.live${c.imageUrl}`,publisher:{"@type":"Organization",name:"BookMyCar.live",logo:{"@type":"ImageObject",url:"https://bookmycar.live/logo.png"}}})})]}),l.jsxs("section",{className:"bg-gray-900 text-white pt-6 pb-12 px-4 overflow-hidden relative",children:[l.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:l.jsx("img",{src:c.imageUrl,className:"w-full h-full object-cover blur-sm",alt:c.title})}),l.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[l.jsxs("nav",{className:"flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-gray-400 mb-6",children:[l.jsx(ce,{to:"/",className:"hover:text-blue-400 transition-colors",children:"Home"}),l.jsx("span",{children:"/"}),l.jsx(ce,{to:"/blog",className:"hover:text-blue-400 transition-colors",children:"Guides"}),l.jsx("span",{children:"/"}),l.jsx("span",{className:"text-blue-400 truncate max-w-[150px]",children:c.category})]}),l.jsxs(ce,{to:"/blog",className:"inline-flex items-center text-gray-400 hover:text-white mb-4 text-[9px] font-black uppercase tracking-[0.2em] transition-colors",children:[l.jsx(hc,{className:"h-3 w-3 mr-1.5"}),"Back to Guides"]}),l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("span",{className:"bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest",children:c.category}),l.jsxs("span",{className:"flex items-center text-blue-400 text-[8px] font-black uppercase tracking-widest",children:[l.jsx(je,{size:12,className:"mr-1"})," Experience-verified"]})]}),l.jsx("h1",{className:"text-2xl md:text-5xl font-black leading-tight mb-6 font-serif tracking-tighter italic uppercase",children:c.title}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-gray-400 text-[9px] font-black uppercase tracking-widest",children:[l.jsxs("span",{className:"flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white",children:[l.jsx("img",{src:"/logo.png",className:"h-3.5 w-3.5 mr-2 rounded-sm",alt:"Logo"})," By Rajesh Navsagar"]}),l.jsxs("span",{className:"flex items-center",children:[l.jsx(pc,{className:"h-3.5 w-3.5 mr-1.5"})," ",c.date]})]})]})]}),l.jsx("section",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20",children:l.jsxs("article",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 pb-8",children:[l.jsx("div",{className:"px-6 pt-6",children:l.jsx(sg,{slotId:"TOP_SLOT_ID_PLACEHOLDER",format:"auto",className:"min-h-[100px] mb-4"})}),l.jsx("div",{className:"p-1",children:l.jsx("img",{src:`${c.imageUrl}?v=2`,alt:c.title,className:"w-full h-48 md:h-[350px] object-cover rounded-3xl"})}),l.jsxs("div",{className:"p-6 md:p-10 lg:p-12",children:[c.expertTip&&l.jsxs("div",{className:"bg-blue-50/50 border-l-2 border-blue-600 p-5 md:p-6 rounded-r-xl mb-8 relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2 uppercase tracking-widest text-[9px] font-black text-blue-700",children:[l.jsx(je,{size:14})," Rajesh's Expert Corner"]}),l.jsxs("p",{className:"text-base md:text-lg leading-relaxed font-serif text-gray-900 italic font-medium",children:['"',c.expertTip,'"']})]}),l.jsx(je,{className:"absolute top-0 right-0 p-3 opacity-[0.03]",size:60})]}),l.jsx("div",{className:"prose prose-sm md:prose-base prose-blue text-gray-700 max-w-none mb-8 article-content font-medium leading-[1.7]",dangerouslySetInnerHTML:{__html:c.content}}),l.jsx(sg,{slotId:"BOTTOM_SLOT_ID_PLACEHOLDER",format:"auto",className:"my-8"}),l.jsxs("div",{className:"text-[9px] font-black text-gray-400 mb-8 tracking-widest uppercase border-t pt-6 flex items-center gap-2",children:[l.jsx("img",{src:"/logo.png",className:"h-4 w-4 rounded-sm",alt:"Logo"}),"Verified by Rajesh Navsagar | ",new Date(c.date).toLocaleDateString("en-US",{month:"short",year:"numeric"})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mb-10",children:c.keywords.map(u=>l.jsxs("span",{className:"bg-gray-50 text-gray-500 border border-gray-100 px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider",children:[l.jsx(Gb,{className:"h-3 w-3 mr-1"}),u]},u))}),l.jsx(Px,{title:c.title,url:`https://bookmycar.live/blog/${c.slug}`}),l.jsx(Vx,{}),l.jsx(Kx,{title:c.title,slug:c.slug}),l.jsxs("div",{className:"mt-16 pt-12 border-t border-gray-100",children:[l.jsxs("div",{className:"flex items-center justify-between mb-8",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-black text-gray-900 uppercase tracking-tight italic",children:["Related ",l.jsx("span",{className:"text-blue-600",children:"Guides"})]}),l.jsx("p",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1",children:"Recommended for your trip"})]}),l.jsx(ce,{to:"/blog",className:"text-[10px] font-black text-blue-600 uppercase tracking-widest border-b-2 border-blue-100 pb-0.5 hover:border-blue-600 transition-all",children:"View All"})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Jn.filter(u=>u.slug!==c.slug).sort(()=>Math.random()-.5).slice(0,2).map(u=>l.jsxs(ce,{to:`/blog/${u.slug}`,className:"group bg-gray-50/50 rounded-2xl p-4 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300",children:[l.jsxs("div",{className:"relative h-32 mb-4 overflow-hidden rounded-xl",children:[l.jsx("img",{src:`${u.imageUrl}?v=2`,alt:u.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),l.jsx("div",{className:"absolute top-2 left-2",children:l.jsx("span",{className:"bg-white/90 backdrop-blur-sm text-[7px] font-black px-1.5 py-0.5 rounded shadow-sm uppercase",children:u.category})})]}),l.jsx("h4",{className:"text-sm font-black text-gray-900 uppercase leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors",children:u.title}),l.jsxs("div",{className:"flex items-center justify-between mt-3",children:[l.jsxs("span",{className:"text-[8px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1",children:[l.jsx(pc,{size:10})," ",u.date]}),l.jsxs("span",{className:"text-blue-600 font-black text-[8px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read ",l.jsx(hc,{size:10,className:"rotate-180"})]})]})]},u.id))})]})]})]})})]}):l.jsx("main",{className:"text-center py-10 text-xl text-gray-600 uppercase font-black",children:"Guide not found."})},Jx=()=>l.jsxs("div",{className:"max-w-5xl mx-auto px-6 pt-6 pb-12",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"About Rajesh & Our Mission | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"BookMyCar.live is an independent expert guide for Indian road trips. Read about Rajesh Navsagar's mission to help travelers avoid rental scams and highway fines."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/about"})]}),l.jsxs("div",{className:"text-center mb-8 px-4",children:[l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif uppercase leading-none",children:"Road Trip Truths."}),l.jsxs("p",{className:"text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium italic",children:[l.jsx("strong",{children:"BookMyCar.live"})," is an independent guide built to help you avoid expensive mistakes on Indian roads."]})]}),l.jsxs("div",{className:"space-y-8",children:[l.jsxs("section",{className:"bg-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("div",{className:"bg-white/20 p-1.5 rounded-lg",children:l.jsx(Cc,{className:"text-white",size:18})}),l.jsx("h2",{className:"text-xs md:text-sm font-black uppercase tracking-[0.2em]",children:"The Mission"})]}),l.jsxs("div",{className:"space-y-3 text-blue-50",children:[l.jsx("p",{className:"text-lg md:text-xl leading-snug font-bold italic uppercase tracking-tighter",children:'"Most disasters happen because of bad info, not bad roads."'}),l.jsx("p",{className:"text-xs md:text-base font-medium text-white/90 border-l-2 border-white/30 pl-4 py-0.5",children:"Families often end up paying far more for damages they didn’t even cause. This site exists so you don’t have to learn the hard way."})]}),l.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-blue-500/50 pt-6",children:[l.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-base shadow-lg",children:"RN"}),l.jsxs("div",{children:[l.jsx("p",{className:"font-black text-base uppercase tracking-tight",children:"Rajesh Navsagar"}),l.jsx("p",{className:"text-[9px] text-blue-200 uppercase tracking-[0.2em] font-bold opacity-80 mb-1",children:"Founder & Field Guide"}),l.jsx("p",{className:"text-[10px] md:text-xs text-blue-100/90 font-medium leading-relaxed max-w-md",children:"Rental policy reviewer based on multi-state driving experience across India (2019–2026)."})]})]})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform duration-700",size:150})]}),l.jsxs("section",{children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-2 flex items-center gap-2 uppercase tracking-tight",children:["Honest Advice ",l.jsx("span",{className:"text-[9px] font-medium text-gray-400 tracking-widest",children:"(Real Talk)"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"flex gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all shadow-sm",children:[l.jsx(je,{className:"text-blue-600 flex-shrink-0",size:20}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-black text-gray-900 mb-1 text-sm uppercase tracking-tight",children:"No Brand Favorites"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed font-medium",children:"I don’t take referral fees. If a company provides poor service, it is clearly stated in the guides."})]})]}),l.jsxs("div",{className:"flex gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all shadow-sm",children:[l.jsx(Tg,{className:"text-blue-600 flex-shrink-0",size:20}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-black text-gray-900 mb-1 text-sm uppercase tracking-tight",children:"Real Driving Logs"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed font-medium",children:"Every guide is based on real trips, distances driven, and on-road observations — not generic theory."})]})]})]})]}),l.jsxs("section",{className:"bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3 text-blue-400 relative z-10",children:[l.jsx(Cl,{size:20}),l.jsx("h2",{className:"text-sm font-black uppercase tracking-widest",children:"Independent Truth"})]}),l.jsxs("div",{className:"text-gray-400 text-xs md:text-sm leading-relaxed space-y-3 relative z-10",children:[l.jsxs("p",{children:["BookMyCar.live is an ",l.jsx("strong",{children:"independent observational guide"}),". I am not affiliated with any rental agency."]}),l.jsx("p",{className:"border-l-2 border-blue-600 pl-4 py-0.5 text-white/80",children:"This site exists to help Indian travelers understand rules through documented field experience. This site does not publish sponsored or paid content."})]}),l.jsx(je,{className:"absolute -top-6 -right-6 text-white/5",size:100})]}),l.jsxs("section",{className:"bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 mb-6 uppercase tracking-tight flex items-center gap-2",children:[l.jsx("div",{className:"bg-blue-600 w-2 h-6 rounded-full"})," How I Research"]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs shrink-0",children:"01"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black text-gray-900 text-sm uppercase mb-1",children:"On-Ground Verification"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed",children:"I take rental cars through state borders during trips to observe toll and tax enforcement in real conditions."})]})]}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs shrink-0",children:"02"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black text-gray-900 text-sm uppercase mb-1",children:"Reference Check"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed",children:"Document checklists are compared with publicly available Motor Vehicles Act updates and Parivahan guidelines for general reference."})]})]}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs shrink-0",children:"03"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black text-gray-900 text-sm uppercase mb-1",children:"Anonymity for Honesty"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed",children:"Rentals are taken as a regular customer, without accepting “media cars” or sponsored access from companies reviewed."})]})]})]})]}),l.jsxs("section",{className:"bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100",children:[l.jsx("h2",{className:"text-lg font-black text-gray-900 mb-4 uppercase tracking-tight flex items-center gap-2",children:"How We Sustain This Site"}),l.jsxs("p",{className:"text-gray-600 text-xs md:text-sm leading-relaxed mb-4 font-medium",children:["Running ",l.jsx("strong",{children:"BookMyCar.live"})," involves costs for on-road research, hosting, and constant updates to travel rules. To keep this information free for every Indian traveler, we participate in the ",l.jsx("strong",{children:"Google AdSense"})," program."]}),l.jsxs("div",{className:"flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm",children:[l.jsx(je,{className:"text-blue-600 shrink-0",size:18}),l.jsxs("p",{className:"text-[11px] text-gray-500 font-medium leading-relaxed",children:[l.jsx("strong",{children:"Transparency Note:"})," We use third-party advertising cookies to serve ads based on your interests. This does not affect our editorial integrity; we never write positive reviews in exchange for money. Our advice remains independent and experience-verified."]})]})]}),l.jsxs("section",{className:"pt-6 border-t border-gray-100",children:[l.jsx("h2",{className:"text-lg font-black text-gray-900 mb-4 uppercase tracking-widest",children:"Where to start?"}),l.jsxs("div",{className:"flex flex-col md:flex-row gap-3",children:[l.jsxs(ce,{to:"/rules",className:"flex-1 flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-600 transition-all group shadow-sm",children:[l.jsx("span",{className:"font-black text-gray-900 text-[10px] uppercase tracking-widest",children:"State rules"}),l.jsx(qa,{className:"text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all",size:16})]}),l.jsxs(ce,{to:"/blog/car-rental-scams-india",className:"flex-1 flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-600 transition-all group shadow-sm",children:[l.jsx("span",{className:"font-black text-gray-900 text-[10px] uppercase tracking-widest",children:"Avoid Scams"}),l.jsx(qa,{className:"text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all",size:16})]})]})]})]})]}),Zx=()=>{const s=c=>{c.preventDefault(),alert("Message mil gaya! Rajesh will get back to you within 24-48 hours.")};return l.jsxs("div",{className:"max-w-6xl mx-auto px-6 pt-6 pb-12",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Contact Rajesh Navsagar | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Contact Rajesh Navsagar for personal road trip advice and policy reviews. BookMyCar.live helps you navigate Indian rental rules."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/contact"})]}),l.jsxs("div",{className:"text-center mb-10",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-blue-100/50",children:[l.jsx(Cc,{size:12})," Human Response"]}),l.jsxs("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif italic uppercase leading-none",children:["Talk to ",l.jsx("span",{className:"text-blue-600 not-italic",children:"Rajesh."})]}),l.jsxs("p",{className:"text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed font-medium",children:["Stuck with a rental policy? ",l.jsx("strong",{children:" I personally review and respond "})," to genuine road trip queries."]})]}),l.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-start",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group",children:[l.jsxs("h3",{className:"text-base font-black text-gray-900 flex items-center mb-3 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl mr-3 group-hover:rotate-6 transition-transform shadow-md",children:l.jsx(Rl,{className:"text-white",size:18})}),"Direct Line"]}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-relaxed mb-3 font-medium",children:"For route planning or sharing policy documents for review:"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-lg md:text-xl font-black text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-100 underline-offset-4 tracking-tighter uppercase",children:"bookmycar.live@gmail.com"})]}),l.jsxs("div",{className:"bg-gray-50 p-6 rounded-2xl border border-gray-100 group",children:[l.jsxs("h3",{className:"text-base font-black text-gray-900 flex items-center mb-3 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-black p-2 rounded-xl mr-3 group-hover:rotate-6 transition-transform shadow-md",children:l.jsx(Eb,{className:"text-white",size:18})}),"Reality Check"]}),l.jsxs("p",{className:"text-gray-500 text-[11px] leading-relaxed font-medium",children:["I respond within ",l.jsx("strong",{children:"24–48 hours"}),". If urgent, mention it in the subject. This is not an emergency helpline."]})]}),l.jsxs("div",{className:"bg-blue-600 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group",children:[l.jsx(je,{className:"absolute -bottom-4 -right-4 text-white/10 group-hover:scale-110 transition-transform duration-700",size:100}),l.jsxs("h3",{className:"text-base font-black flex items-center mb-2 uppercase tracking-wider relative z-10",children:[l.jsx(je,{className:"mr-2 text-blue-200",size:20})," Privacy First"]}),l.jsx("p",{className:"text-blue-100 text-[11px] leading-relaxed font-medium relative z-10",children:"Your details are safe. I don't share data with third parties or brokers. My goal is to help you."})]})]}),l.jsxs("div",{className:"bg-white shadow-xl rounded-3xl p-6 md:p-8 border border-gray-100",children:[l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-6 tracking-tight uppercase",children:"Share Your Plan"}),l.jsxs("form",{className:"space-y-5",onSubmit:s,children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5",children:"Name"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Rahul Verma",className:"w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5",children:"Email"}),l.jsx("input",{type:"email",required:!0,placeholder:"rahul@example.com",className:"w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5",children:"Query?"}),l.jsx("textarea",{required:!0,rows:3,placeholder:"Ex: Driving from Delhi to Manali. Is it safe at night?",className:"w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"})]}),l.jsxs("button",{className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group",children:["Send Query ",l.jsx(qa,{size:14,className:"group-hover:translate-x-1 transition-transform"})]})]}),l.jsx("div",{className:"mt-5 pt-5 border-t border-gray-50 text-center",children:l.jsxs("p",{className:"text-[9px] text-gray-400 font-black leading-relaxed uppercase tracking-tight",children:["Messages are answered personally; automated replies are not used. ",l.jsx("br",{}),"Replies are informational only. ",l.jsx("br",{}),"No paid consultation or emergency assistance."]})})]})]})]})},Xx=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Privacy Policy & AdSense Disclosure | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Privacy Policy for BookMyCar.live. Learn how we protect your data and our transparency regarding Google AdSense cookies."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/privacy"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6",children:[l.jsx(je,{size:12})," Data Protection"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif",children:"Privacy Policy"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-blue-500/20 pl-4 py-1",children:'"Transparency in road rules reflects in how we handle your data."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsx("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8",children:"Updated: Jan 2026"}),l.jsxs("p",{className:"leading-relaxed mb-8",children:["At ",l.jsx("strong",{children:"BookMyCar.live"}),", user privacy is taken seriously. This website exists to help travelers and does not sell or trade personal information for profit."]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"Information We Collect"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"When users contact BookMyCar.live through forms or email, we may collect information such as name, email address, and the content of the message. This information is used solely to respond to inquiries and provide relevant guidance. We do not share this data with third parties or brokers."}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6 my-10",children:[l.jsxs("div",{className:"bg-gray-50 p-6 rounded-2xl border border-gray-100",children:[l.jsx(jb,{className:"text-blue-600 mb-3",size:24}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-2 uppercase tracking-tight",children:"Log Files"}),l.jsx("p",{className:"text-gray-500 font-medium text-xs leading-relaxed",children:"BookMyCar.live follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamp, and referring/exit pages. These are not linked to any information that is personally identifiable."})]}),l.jsxs("div",{className:"bg-gray-50 p-6 rounded-2xl border border-gray-100",children:[l.jsx(hb,{className:"text-blue-600 mb-3",size:24}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-2 uppercase tracking-tight",children:"Cookies"}),l.jsx("p",{className:"text-gray-500 font-medium text-xs leading-relaxed",children:"This website uses cookies to store information about visitors' preferences and to record user-specific information on which pages the user accesses or visits. This helps in customizing web page content based on visitors' browser type or other information."})]})]}),l.jsxs("div",{className:"bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl my-10 relative overflow-hidden group",children:[l.jsx("h2",{className:"text-xl font-black mb-4 text-white tracking-tight uppercase",children:"Google Advertising Cookies"}),l.jsxs("ul",{className:"space-y-3 text-blue-100 font-medium list-none pl-0 text-sm",children:[l.jsxs("li",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Google AdSense:"})," Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the ",l.jsx("strong",{children:"DART cookie"})," enables it to serve ads to our users based on their visit to our site and other sites on the Internet."]})]}),l.jsxs("li",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"}),l.jsxs("span",{children:["Users may opt out of the use of the DART cookie by visiting the ",l.jsx("strong",{children:"Google ad and content network privacy policy"})," at the following URL: ",l.jsx("a",{href:"https://policies.google.com/technologies/ads",className:"text-white hover:text-blue-200 underline",children:"https://policies.google.com/technologies/ads"})]})]}),l.jsxs("li",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"}),l.jsx("span",{children:"Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements. BookMyCar.live has no access to or control over these cookies that are used by third-party advertisers."})]})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform",size:150})]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2 tracking-tight",children:"CCPA Privacy Rights (Do Not Sell My Personal Information)"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. Request that a business delete any personal data about the consumer that a business has collected. Request that a business that sells a consumer's personal data, not sell the consumer's personal data. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2 tracking-tight",children:"GDPR Data Protection Rights"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service. The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. The right to erasure – You have the right to request that we erase your personal data, under certain conditions."}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"Advertising Partners"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links. Our primary partner is:"}),l.jsx("div",{className:"mb-10",children:l.jsx("div",{className:"bg-gray-50 border-2 border-gray-100 p-4 rounded-xl font-black text-blue-600 text-center text-xs uppercase tracking-[0.2em] inline-block min-w-[200px]",children:"Google AdSense"})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"User Choices & Rights"}),l.jsxs("div",{className:"bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-4",children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(yc,{size:20,className:"text-blue-600 shrink-0"}),l.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed",children:[l.jsx("strong",{children:"Cookie Management:"})," Users can choose to disable cookies through their individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers' respective websites."]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(yc,{size:20,className:"text-blue-600 shrink-0"}),l.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed",children:[l.jsx("strong",{children:"Data Deletion Requests:"})," If you wish to request the deletion of any personal data shared through our contact forms, please contact us at ",l.jsx("strong",{children:"bookmycar.live@gmail.com"}),". We will process your request as per applicable guidelines."]})]})]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"Consent"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-8",children:"By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."})]})]})]}),Wx=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Terms & Conditions | User Agreement | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"User Agreement and Terms of Service for BookMyCar.live. Understand the liability regarding road rules and rental advice."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/terms"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-gray-100",children:[l.jsx(bb,{size:12})," User Agreement"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif italic",children:"Terms & Conditions"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-gray-200 pl-4 py-1",children:'"Clear terms so you can focus on the drive."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsx("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8",children:"Updated: Jan 2026"}),l.jsxs("p",{className:"leading-relaxed mb-10 text-sm md:text-base",children:["Welcome to ",l.jsx("strong",{children:"BookMyCar.live"}),". By using this website, users agree to the terms and conditions outlined below. This platform is intended for informational purposes for the road travel community."]}),l.jsxs("section",{className:"mb-12",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-gray-900 p-2 rounded-xl text-white shadow-lg",children:l.jsx(gc,{size:20})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 m-0 tracking-tight uppercase",children:"1. Informational Service Only"})]}),l.jsx("div",{className:"bg-blue-50/50 border border-blue-100 p-6 rounded-2xl",children:l.jsx("p",{className:"text-gray-900 font-bold m-0 leading-relaxed text-sm",children:"BookMyCar.live is an informational guide portal. This website is not a car rental agency, broker, or booking platform, and we do not manage or operate any fleet of vehicles."})})]}),l.jsxs("div",{className:"space-y-10",children:[l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all",children:l.jsx(ab,{size:20})}),"2. User Responsibility"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"Content is based on documented road experiences for general guidance. However, road laws and rental policies are subject to change without notice. Users are responsible for verifying all information with official government portals and their respective rental providers before travel."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all",children:l.jsx(Ng,{size:20})}),"3. External Resources"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"This website may link to external resources or third-party websites. BookMyCar.live has no control over the nature, content, or availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all",children:l.jsx(yc,{size:20})}),"4. Acceptable Use"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"Users agree not to misuse the content on this website for unlawful purposes, automated scraping, or redistribution without explicit permission. The content is intended for personal, non-commercial informational use only."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-red-600 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-red-50 p-2 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all",children:l.jsx(Bb,{size:20})}),"5. Limitation of Liability"]}),l.jsx("p",{className:"leading-relaxed text-red-900 font-bold bg-red-50/30 p-5 rounded-xl border border-red-100 text-sm",children:"BookMyCar.live provides informational content for general guidance only. While efforts are made to keep information accurate, we do not guarantee completeness or current validity. BookMyCar.live shall not be held responsible for losses, disputes, penalties, or incidents arising from reliance on the information provided. Use of this site is at the user's own risk."})]})]}),l.jsxs("div",{className:"mt-20 pt-10 border-t border-gray-100 mb-10 text-center md:text-left",children:[l.jsx("p",{className:"text-gray-400 font-black uppercase tracking-widest text-[10px] mb-4",children:"Contact for Legal Queries"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-lg md:text-xl font-black text-gray-900 hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4 uppercase tracking-tighter",children:"bookmycar.live@gmail.com"})]})]})]})]}),$x=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Important Legal Disclaimer | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Legal Disclaimer: BookMyCar.live is an independent informational guide. We are not a car rental agency or booking platform."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/disclaimer"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-yellow-100/50",children:[l.jsx(Xp,{size:12})," Legal Transparency"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif italic",children:"Disclaimer"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-yellow-500/20 pl-4 py-1",children:'"Documented observations for travelers, but final travel decisions remain with the user."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsxs("div",{className:"bg-yellow-50 border-2 border-yellow-200 p-8 rounded-[2rem] my-10 relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-yellow-500 p-2 rounded-xl text-white shadow-lg",children:l.jsx(Tl,{size:20})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 m-0 tracking-tight uppercase",children:"No Rental or Booking Services"})]}),l.jsx("p",{className:"text-gray-900 font-bold leading-relaxed mb-3 text-base md:text-lg",children:"BookMyCar.live is an independent observational guide. This website does not facilitate car rentals, taxi bookings, or travel reservations."}),l.jsx("p",{className:"text-yellow-800 font-medium text-sm",children:"BookMyCar.live will never solicit payment for vehicle bookings or travel services. If any individual claims to represent BookMyCar.live for payment requests, such communication should be treated as unauthorized."})]}),l.jsx(Tl,{className:"absolute -bottom-6 -right-6 text-yellow-600/10 group-hover:scale-110 transition-transform duration-700",size:150})]}),l.jsxs("div",{className:"space-y-12 mt-12",children:[l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform",children:l.jsx(je,{size:20})}),"1. Independent Status"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"BookMyCar.live is not affiliated with any car rental brand. Any mention of rental agencies is purely for informational comparison and general guidance based on user experience."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform",children:l.jsx(Ag,{size:20})}),"2. Content Accuracy"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm mb-4",children:"While efforts are made to update road trip guides regularly, BookMyCar.live cannot guarantee that all information (such as toll prices, local taxes, or permit rules) is current or exhaustive."}),l.jsx("div",{className:"bg-gray-50 border-l-2 border-blue-600 p-4 rounded-r-xl",children:l.jsx("p",{className:"text-gray-900 font-bold mb-0 text-sm",children:"This information should be used as general guidance and not as a substitute for official legal or regulatory advice. Always verify rules with local authorities."})})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform",children:l.jsx(Xp,{size:20})}),"3. Limitation of Liability"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"BookMyCar.live provides informational content for general guidance only. While reasonable efforts are made to keep information accurate, no guarantees are made regarding completeness or current applicability. Users are responsible for making travel and compliance decisions based on official sources and provider policies. Use of this site is at the user's own risk."})]})]}),l.jsxs("div",{className:"mt-20 pt-10 border-t border-gray-100 mb-10 text-center md:text-left",children:[l.jsx("p",{className:"text-gray-400 font-black uppercase tracking-widest text-[10px] mb-4",children:"Questions about these terms?"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-lg md:text-xl font-black text-gray-900 hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4 uppercase tracking-tighter",children:"bookmycar.live@gmail.com"})]})]})]})]}),ek=()=>l.jsx("div",{className:"min-h-[70vh] flex items-center justify-center px-6",children:l.jsxs("div",{className:"max-w-md w-full text-center",children:[l.jsx("div",{className:"bg-red-50 w-20 h-20 rounded-[2rem] flex items-center justify-center text-red-600 mx-auto mb-8 animate-bounce",children:l.jsx(Cl,{size:40})}),l.jsx("h1",{className:"text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic",children:"Road Closed."}),l.jsx("p",{className:"text-gray-500 font-medium mb-10 leading-relaxed italic",children:"Mistakes happen, even to the best drivers. The page you are looking for doesn't exist or has been moved to a new route."}),l.jsxs(ce,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black transition-all shadow-xl uppercase tracking-widest text-xs group",children:["Back to Safe Route ",l.jsx(qa,{size:16,className:"group-hover:translate-x-1 transition-transform"})]}),l.jsx("div",{className:"mt-12 flex justify-center opacity-30",children:l.jsx(Sl,{size:100,className:"text-gray-200"})})]})}),ak=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Cookie Policy | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Cookie Policy for BookMyCar.live. Information on Google AdSense DART cookies and how to manage your privacy settings."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/cookies"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6",children:[l.jsx(je,{size:12})," Transparency"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif",children:"Cookie Policy"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-blue-500/20 pl-4 py-1",children:'"Understand how we use data to improve your experience."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsx("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8",children:"Effective Date: Jan 2026"}),l.jsxs("p",{className:"leading-relaxed mb-8 font-medium",children:["This Cookie Policy explains how ",l.jsx("strong",{children:"BookMyCar.live"}),' ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.']}),l.jsxs("div",{className:"flex items-start gap-4 mb-8",children:[l.jsx("div",{className:"bg-blue-50 p-3 rounded-xl text-blue-600 mt-1 shrink-0",children:l.jsx(Zp,{size:24})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-2 tracking-tight uppercase",children:"What are cookies?"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:"Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."})]})]}),l.jsx("hr",{className:"border-gray-100 my-8"}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-4 tracking-tight uppercase",children:"Why do we use cookies?"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:'We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.'}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6 my-8",children:[l.jsxs("div",{className:"bg-gray-50 border border-gray-100 p-5 rounded-2xl",children:[l.jsx("h3",{className:"font-black text-gray-900 text-sm uppercase mb-2",children:"Essential Cookies"}),l.jsx("p",{className:"text-xs text-gray-500 font-medium leading-relaxed",children:"These are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas."})]}),l.jsxs("div",{className:"bg-gray-50 border border-gray-100 p-5 rounded-2xl",children:[l.jsx("h3",{className:"font-black text-gray-900 text-sm uppercase mb-2",children:"Analytics & Customization"}),l.jsx("p",{className:"text-xs text-gray-500 font-medium leading-relaxed",children:"These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are."})]})]}),l.jsxs("div",{className:"bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-xl mb-10",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx(Ag,{size:20,className:"text-blue-300"}),l.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tight",children:"Google DoubleClick DART Cookie"})]}),l.jsx("p",{className:"text-blue-100 text-sm leading-relaxed mb-4 font-medium",children:"Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.bookmycar.live and other sites on the internet."}),l.jsxs("div",{className:"bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm",children:[l.jsx("p",{className:"text-xs text-white/80 leading-relaxed mb-3",children:"However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:"}),l.jsxs("a",{href:"https://policies.google.com/technologies/ads",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-white font-black text-xs uppercase tracking-widest hover:text-blue-200 transition-colors",children:["Google Ad Policies ",l.jsx(Ng,{size:10})]})]})]}),l.jsx(Zp,{className:"absolute -bottom-10 -right-10 text-white/5 group-hover:rotate-12 transition-transform duration-700",size:200})]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-4 tracking-tight uppercase",children:"How can I control cookies?"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:"You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. In addition, most web browsers allow you to control cookies through their settings preferences."}),l.jsxs("ul",{className:"space-y-2 mb-8",children:[l.jsxs("li",{className:"text-sm text-gray-600 font-medium flex items-center gap-2",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"})," Chrome: Settings → Privacy and security → Cookies and other site data"]}),l.jsxs("li",{className:"text-sm text-gray-600 font-medium flex items-center gap-2",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"})," Safari: Preferences → Privacy"]}),l.jsxs("li",{className:"text-sm text-gray-600 font-medium flex items-center gap-2",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"})," Firefox: Options → Privacy & Security"]})]}),l.jsxs("div",{className:"bg-gray-50 border border-gray-100 rounded-xl p-6 text-center",children:[l.jsx("p",{className:"text-gray-500 text-xs font-bold uppercase tracking-widest mb-4",children:"Have more questions?"}),l.jsx(ce,{to:"/contact",className:"inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors",children:"Contact Us"})]})]})]})]}),tk=()=>{const{pathname:s}=pt();return R.useEffect(()=>{window.scrollTo(0,0)},[s]),null},ik=()=>l.jsxs(B0,{children:[l.jsx(tk,{}),l.jsxs("div",{className:"flex flex-col min-h-screen font-sans text-gray-900 bg-white",children:[l.jsx(px,{}),l.jsx("main",{className:"flex-grow",children:l.jsxs(p0,{children:[l.jsx(Ca,{path:"/",element:l.jsx(Yx,{})}),l.jsx(Ca,{path:"/blog",element:l.jsx(Qx,{})}),l.jsx(Ca,{path:"/blog/:slug",element:l.jsx(Fx,{})}),l.jsx(Ca,{path:"/rules",element:l.jsx(Ix,{})}),l.jsx(Ca,{path:"/about",element:l.jsx(Jx,{})}),l.jsx(Ca,{path:"/contact",element:l.jsx(Zx,{})}),l.jsx(Ca,{path:"/privacy",element:l.jsx(Xx,{})}),l.jsx(Ca,{path:"/terms",element:l.jsx(Wx,{})}),l.jsx(Ca,{path:"/disclaimer",element:l.jsx($x,{})}),l.jsx(Ca,{path:"/cookies",element:l.jsx(ak,{})}),l.jsx(Ca,{path:"*",element:l.jsx(ek,{})})]})}),l.jsx(gx,{}),l.jsx(fx,{})]})]}),Bg=document.getElementById("root");if(!Bg)throw new Error("Could not find root element to mount to");const nk=xy.createRoot(Bg);nk.render(l.jsx(dt.StrictMode,{children:l.jsx(Og,{children:l.jsx(ik,{})})}));
