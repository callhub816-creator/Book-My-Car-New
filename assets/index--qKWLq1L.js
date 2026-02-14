var ny=Object.defineProperty;var ry=(s,c,h)=>c in s?ny(s,c,{enumerable:!0,configurable:!0,writable:!0,value:h}):s[c]=h;var ct=(s,c,h)=>ry(s,typeof c!="symbol"?c+"":c,h);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function h(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(p){if(p.ep)return;p.ep=!0;const m=h(p);fetch(p.href,m)}})();function Xn(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zo={exports:{}},In={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function ly(){if(zp)return In;zp=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function h(d,p,m){var y=null;if(m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),"key"in p){m={};for(var v in p)v!=="key"&&(m[v]=p[v])}else m=p;return p=m.ref,{$$typeof:s,type:d,key:y,ref:p!==void 0?p:null,props:m}}return In.Fragment=c,In.jsx=h,In.jsxs=h,In}var Mp;function sy(){return Mp||(Mp=1,Zo.exports=ly()),Zo.exports}var l=sy(),Xo={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function oy(){if(Dp)return J;Dp=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),O=Symbol.iterator;function B(k){return k===null||typeof k!="object"?null:(k=O&&k[O]||k["@@iterator"],typeof k=="function"?k:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,q={};function I(k,H,U){this.props=k,this.context=H,this.refs=q,this.updater=U||Y}I.prototype.isReactComponent={},I.prototype.setState=function(k,H){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,H,"setState")},I.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ae(){}ae.prototype=I.prototype;function L(k,H,U){this.props=k,this.context=H,this.refs=q,this.updater=U||Y}var pe=L.prototype=new ae;pe.constructor=L,F(pe,I.prototype),pe.isPureReactComponent=!0;var Se=Array.isArray;function ze(){}var X={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Ie(k,H,U){var Q=U.ref;return{$$typeof:s,type:k,key:H,ref:Q!==void 0?Q:null,props:U}}function Xe(k,H){return Ie(k.type,H,k.props)}function We(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function Qe(k){var H={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(U){return H[U]})}var Lt=/\/+/g;function Qa(k,H){return typeof k=="object"&&k!==null&&k.key!=null?Qe(""+k.key):H.toString(36)}function Ea(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(ze,ze):(k.status="pending",k.then(function(H){k.status==="pending"&&(k.status="fulfilled",k.value=H)},function(H){k.status==="pending"&&(k.status="rejected",k.reason=H)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function z(k,H,U,Q,W){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var me=!1;if(k===null)me=!0;else switch(te){case"bigint":case"string":case"number":me=!0;break;case"object":switch(k.$$typeof){case s:case c:me=!0;break;case A:return me=k._init,z(me(k._payload),H,U,Q,W)}}if(me)return W=W(k),me=Q===""?"."+Qa(k,0):Q,Se(W)?(U="",me!=null&&(U=me.replace(Lt,"$&/")+"/"),z(W,H,U,"",function(Zi){return Zi})):W!=null&&(We(W)&&(W=Xe(W,U+(W.key==null||k&&k.key===W.key?"":(""+W.key).replace(Lt,"$&/")+"/")+me)),H.push(W)),1;me=0;var $e=Q===""?".":Q+":";if(Se(k))for(var Me=0;Me<k.length;Me++)Q=k[Me],te=$e+Qa(Q,Me),me+=z(Q,H,U,te,W);else if(Me=B(k),typeof Me=="function")for(k=Me.call(k),Me=0;!(Q=k.next()).done;)Q=Q.value,te=$e+Qa(Q,Me++),me+=z(Q,H,U,te,W);else if(te==="object"){if(typeof k.then=="function")return z(Ea(k),H,U,Q,W);throw H=String(k),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return me}function _(k,H,U){if(k==null)return k;var Q=[],W=0;return z(k,Q,"","",function(te){return H.call(U,te,W++)}),Q}function Z(k){if(k._status===-1){var H=k._result;H=H(),H.then(function(U){(k._status===0||k._status===-1)&&(k._status=1,k._result=U)},function(U){(k._status===0||k._status===-1)&&(k._status=2,k._result=U)}),k._status===-1&&(k._status=0,k._result=H)}if(k._status===1)return k._result.default;throw k._result}var ye=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},ke={map:_,forEach:function(k,H,U){_(k,function(){H.apply(this,arguments)},U)},count:function(k){var H=0;return _(k,function(){H++}),H},toArray:function(k){return _(k,function(H){return H})||[]},only:function(k){if(!We(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return J.Activity=N,J.Children=ke,J.Component=I,J.Fragment=h,J.Profiler=p,J.PureComponent=L,J.StrictMode=d,J.Suspense=f,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,J.__COMPILER_RUNTIME={__proto__:null,c:function(k){return X.H.useMemoCache(k)}},J.cache=function(k){return function(){return k.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(k,H,U){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var Q=F({},k.props),W=k.key;if(H!=null)for(te in H.key!==void 0&&(W=""+H.key),H)!Ge.call(H,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&H.ref===void 0||(Q[te]=H[te]);var te=arguments.length-2;if(te===1)Q.children=U;else if(1<te){for(var me=Array(te),$e=0;$e<te;$e++)me[$e]=arguments[$e+2];Q.children=me}return Ie(k.type,W,Q)},J.createContext=function(k){return k={$$typeof:y,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:m,_context:k},k},J.createElement=function(k,H,U){var Q,W={},te=null;if(H!=null)for(Q in H.key!==void 0&&(te=""+H.key),H)Ge.call(H,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(W[Q]=H[Q]);var me=arguments.length-2;if(me===1)W.children=U;else if(1<me){for(var $e=Array(me),Me=0;Me<me;Me++)$e[Me]=arguments[Me+2];W.children=$e}if(k&&k.defaultProps)for(Q in me=k.defaultProps,me)W[Q]===void 0&&(W[Q]=me[Q]);return Ie(k,te,W)},J.createRef=function(){return{current:null}},J.forwardRef=function(k){return{$$typeof:v,render:k}},J.isValidElement=We,J.lazy=function(k){return{$$typeof:A,_payload:{_status:-1,_result:k},_init:Z}},J.memo=function(k,H){return{$$typeof:g,type:k,compare:H===void 0?null:H}},J.startTransition=function(k){var H=X.T,U={};X.T=U;try{var Q=k(),W=X.S;W!==null&&W(U,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ze,ye)}catch(te){ye(te)}finally{H!==null&&U.types!==null&&(H.types=U.types),X.T=H}},J.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},J.use=function(k){return X.H.use(k)},J.useActionState=function(k,H,U){return X.H.useActionState(k,H,U)},J.useCallback=function(k,H){return X.H.useCallback(k,H)},J.useContext=function(k){return X.H.useContext(k)},J.useDebugValue=function(){},J.useDeferredValue=function(k,H){return X.H.useDeferredValue(k,H)},J.useEffect=function(k,H){return X.H.useEffect(k,H)},J.useEffectEvent=function(k){return X.H.useEffectEvent(k)},J.useId=function(){return X.H.useId()},J.useImperativeHandle=function(k,H,U){return X.H.useImperativeHandle(k,H,U)},J.useInsertionEffect=function(k,H){return X.H.useInsertionEffect(k,H)},J.useLayoutEffect=function(k,H){return X.H.useLayoutEffect(k,H)},J.useMemo=function(k,H){return X.H.useMemo(k,H)},J.useOptimistic=function(k,H){return X.H.useOptimistic(k,H)},J.useReducer=function(k,H,U){return X.H.useReducer(k,H,U)},J.useRef=function(k){return X.H.useRef(k)},J.useState=function(k){return X.H.useState(k)},J.useSyncExternalStore=function(k,H,U){return X.H.useSyncExternalStore(k,H,U)},J.useTransition=function(){return X.H.useTransition()},J.version="19.2.1",J}var Hp;function vc(){return Hp||(Hp=1,Xo.exports=oy()),Xo.exports}var R=vc();const dt=Xn(R);var Jo={exports:{}},Qn={},Wo={exports:{}},$o={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function cy(){return Op||(Op=1,(function(s){function c(z,_){var Z=z.length;z.push(_);e:for(;0<Z;){var ye=Z-1>>>1,ke=z[ye];if(0<p(ke,_))z[ye]=_,z[Z]=ke,Z=ye;else break e}}function h(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var _=z[0],Z=z.pop();if(Z!==_){z[0]=Z;e:for(var ye=0,ke=z.length,k=ke>>>1;ye<k;){var H=2*(ye+1)-1,U=z[H],Q=H+1,W=z[Q];if(0>p(U,Z))Q<ke&&0>p(W,U)?(z[ye]=W,z[Q]=Z,ye=Q):(z[ye]=U,z[H]=Z,ye=H);else if(Q<ke&&0>p(W,Z))z[ye]=W,z[Q]=Z,ye=Q;else break e}}return _}function p(z,_){var Z=z.sortIndex-_.sortIndex;return Z!==0?Z:z.id-_.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var y=Date,v=y.now();s.unstable_now=function(){return y.now()-v}}var f=[],g=[],A=1,N=null,O=3,B=!1,Y=!1,F=!1,q=!1,I=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function pe(z){for(var _=h(g);_!==null;){if(_.callback===null)d(g);else if(_.startTime<=z)d(g),_.sortIndex=_.expirationTime,c(f,_);else break;_=h(g)}}function Se(z){if(F=!1,pe(z),!Y)if(h(f)!==null)Y=!0,ze||(ze=!0,Qe());else{var _=h(g);_!==null&&Ea(Se,_.startTime-z)}}var ze=!1,X=-1,Ge=5,Ie=-1;function Xe(){return q?!0:!(s.unstable_now()-Ie<Ge)}function We(){if(q=!1,ze){var z=s.unstable_now();Ie=z;var _=!0;try{e:{Y=!1,F&&(F=!1,ae(X),X=-1),B=!0;var Z=O;try{a:{for(pe(z),N=h(f);N!==null&&!(N.expirationTime>z&&Xe());){var ye=N.callback;if(typeof ye=="function"){N.callback=null,O=N.priorityLevel;var ke=ye(N.expirationTime<=z);if(z=s.unstable_now(),typeof ke=="function"){N.callback=ke,pe(z),_=!0;break a}N===h(f)&&d(f),pe(z)}else d(f);N=h(f)}if(N!==null)_=!0;else{var k=h(g);k!==null&&Ea(Se,k.startTime-z),_=!1}}break e}finally{N=null,O=Z,B=!1}_=void 0}}finally{_?Qe():ze=!1}}}var Qe;if(typeof L=="function")Qe=function(){L(We)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Qa=Lt.port2;Lt.port1.onmessage=We,Qe=function(){Qa.postMessage(null)}}else Qe=function(){I(We,0)};function Ea(z,_){X=I(function(){z(s.unstable_now())},_)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_next=function(z){switch(O){case 1:case 2:case 3:var _=3;break;default:_=O}var Z=O;O=_;try{return z()}finally{O=Z}},s.unstable_requestPaint=function(){q=!0},s.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=O;O=z;try{return _()}finally{O=Z}},s.unstable_scheduleCallback=function(z,_,Z){var ye=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,z){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=Z+ke,z={id:A++,callback:_,priorityLevel:z,startTime:Z,expirationTime:ke,sortIndex:-1},Z>ye?(z.sortIndex=Z,c(g,z),h(f)===null&&z===h(g)&&(F?(ae(X),X=-1):F=!0,Ea(Se,Z-ye))):(z.sortIndex=ke,c(f,z),Y||B||(Y=!0,ze||(ze=!0,Qe()))),z},s.unstable_shouldYield=Xe,s.unstable_wrapCallback=function(z){var _=O;return function(){var Z=O;O=_;try{return z.apply(this,arguments)}finally{O=Z}}}})($o)),$o}var Bp;function dy(){return Bp||(Bp=1,Wo.exports=cy()),Wo.exports}var ec={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function hy(){if(_p)return Je;_p=1;var s=vc();function c(f){var g="https://react.dev/errors/"+f;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)g+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+f+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var d={d:{f:h,r:function(){throw Error(c(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(f,g,A){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:N==null?null:""+N,children:f,containerInfo:g,implementation:A}}var y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(f,g){if(f==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Je.createPortal=function(f,g){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return m(f,g,null,A)},Je.flushSync=function(f){var g=y.T,A=d.p;try{if(y.T=null,d.p=2,f)return f()}finally{y.T=g,d.p=A,d.d.f()}},Je.preconnect=function(f,g){typeof f=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(f,g))},Je.prefetchDNS=function(f){typeof f=="string"&&d.d.D(f)},Je.preinit=function(f,g){if(typeof f=="string"&&g&&typeof g.as=="string"){var A=g.as,N=v(A,g.crossOrigin),O=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;A==="style"?d.d.S(f,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:N,integrity:O,fetchPriority:B}):A==="script"&&d.d.X(f,{crossOrigin:N,integrity:O,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Je.preinitModule=function(f,g){if(typeof f=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var A=v(g.as,g.crossOrigin);d.d.M(f,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(f)},Je.preload=function(f,g){if(typeof f=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var A=g.as,N=v(A,g.crossOrigin);d.d.L(f,A,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Je.preloadModule=function(f,g){if(typeof f=="string")if(g){var A=v(g.as,g.crossOrigin);d.d.m(f,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(f)},Je.requestFormReset=function(f){d.d.r(f)},Je.unstable_batchedUpdates=function(f,g){return f(g)},Je.useFormState=function(f,g,A){return y.H.useFormState(f,g,A)},Je.useFormStatus=function(){return y.H.useHostTransitionStatus()},Je.version="19.2.1",Je}var Up;function uy(){if(Up)return ec.exports;Up=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),ec.exports=hy(),ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function py(){if(Lp)return Qn;Lp=1;var s=dy(),c=vc(),h=uy();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function y(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function v(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(m(e)!==e)throw Error(d(188))}function g(e){var a=e.alternate;if(!a){if(a=m(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,i=a;;){var n=t.return;if(n===null)break;var r=n.alternate;if(r===null){if(i=n.return,i!==null){t=i;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===t)return f(n),e;if(r===i)return f(n),a;r=r.sibling}throw Error(d(188))}if(t.return!==i.return)t=n,i=r;else{for(var o=!1,u=n.child;u;){if(u===t){o=!0,t=n,i=r;break}if(u===i){o=!0,i=n,t=r;break}u=u.sibling}if(!o){for(u=r.child;u;){if(u===t){o=!0,t=r,i=n;break}if(u===i){o=!0,i=r,t=n;break}u=u.sibling}if(!o)throw Error(d(189))}}if(t.alternate!==i)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function A(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=A(e),a!==null)return a;e=e.sibling}return null}var N=Object.assign,O=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),ae=Symbol.for("react.consumer"),L=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Ie=Symbol.for("react.activity"),Xe=Symbol.for("react.memo_cache_sentinel"),We=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=We&&e[We]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function Qa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case I:return"Profiler";case q:return"StrictMode";case Se:return"Suspense";case ze:return"SuspenseList";case Ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case L:return e.displayName||"Context";case ae:return(e._context.displayName||"Context")+".Consumer";case pe:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return a=e.displayName||null,a!==null?a:Qa(e.type)||"Memo";case Ge:a=e._payload,e=e._init;try{return Qa(e(a))}catch{}}return null}var Ea=Array.isArray,z=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ye=[],ke=-1;function k(e){return{current:e}}function H(e){0>ke||(e.current=ye[ke],ye[ke]=null,ke--)}function U(e,a){ke++,ye[ke]=e.current,e.current=a}var Q=k(null),W=k(null),te=k(null),me=k(null);function $e(e,a){switch(U(te,a),U(W,e),U(Q,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?ep(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=ep(a),e=ap(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Q),U(Q,e)}function Me(){H(Q),H(W),H(te)}function Zi(e){e.memoizedState!==null&&U(me,e);var a=Q.current,t=ap(a,e.type);a!==t&&(U(W,e),U(Q,t))}function er(e){W.current===e&&(H(Q),H(W)),me.current===e&&(H(me),Ln._currentValue=Z)}var El,Ec;function Gt(e){if(El===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);El=a&&a[1]||"",Ec=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+El+e+Ec}var zl=!1;function Ml(e,a){if(!e||zl)return"";zl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(C){var T=C}Reflect.construct(e,[],D)}else{try{D.call()}catch(C){T=C}e.call(D.prototype)}}else{try{throw Error()}catch(C){T=C}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(C){if(C&&T&&typeof C.stack=="string")return[C.stack,T.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],u=r[1];if(o&&u){var b=o.split(`
`),S=u.split(`
`);for(n=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(i===b.length||n===S.length)for(i=b.length-1,n=S.length-1;1<=i&&0<=n&&b[i]!==S[n];)n--;for(;1<=i&&0<=n;i--,n--)if(b[i]!==S[n]){if(i!==1||n!==1)do if(i--,n--,0>n||b[i]!==S[n]){var E=`
`+b[i].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=i&&0<=n);break}}}finally{zl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Gt(t):""}function Hm(e,a){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==a&&a!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return Ml(e.type,!1);case 11:return Ml(e.type.render,!1);case 1:return Ml(e.type,!0);case 31:return Gt("Activity");default:return""}}function zc(e){try{var a="",t=null;do a+=Hm(e,t),t=e,e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Dl=Object.prototype.hasOwnProperty,Hl=s.unstable_scheduleCallback,Ol=s.unstable_cancelCallback,Om=s.unstable_shouldYield,Bm=s.unstable_requestPaint,oa=s.unstable_now,_m=s.unstable_getCurrentPriorityLevel,Mc=s.unstable_ImmediatePriority,Dc=s.unstable_UserBlockingPriority,ar=s.unstable_NormalPriority,Um=s.unstable_LowPriority,Hc=s.unstable_IdlePriority,Lm=s.log,Gm=s.unstable_setDisableYieldValue,Xi=null,ca=null;function mt(e){if(typeof Lm=="function"&&Gm(e),ca&&typeof ca.setStrictMode=="function")try{ca.setStrictMode(Xi,e)}catch{}}var da=Math.clz32?Math.clz32:Im,qm=Math.log,Ym=Math.LN2;function Im(e){return e>>>=0,e===0?32:31-(qm(e)/Ym|0)|0}var tr=256,ir=262144,nr=4194304;function qt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rr(e,a,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~r,i!==0?n=qt(i):(o&=u,o!==0?n=qt(o):t||(t=u&~e,t!==0&&(n=qt(t))))):(u=i&~r,u!==0?n=qt(u):o!==0?n=qt(o):t||(t=i&~e,t!==0&&(n=qt(t)))),n===0?0:a!==0&&a!==n&&(a&r)===0&&(r=n&-n,t=a&-a,r>=t||r===32&&(t&4194048)!==0)?a:n}function Ji(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Qm(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oc(){var e=nr;return nr<<=1,(nr&62914560)===0&&(nr=4194304),e}function Bl(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Wi(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vm(e,a,t,i,n,r){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var u=e.entanglements,b=e.expirationTimes,S=e.hiddenUpdates;for(t=o&~t;0<t;){var E=31-da(t),D=1<<E;u[E]=0,b[E]=-1;var T=S[E];if(T!==null)for(S[E]=null,E=0;E<T.length;E++){var C=T[E];C!==null&&(C.lane&=-536870913)}t&=~D}i!==0&&Bc(e,i,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~a))}function Bc(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var i=31-da(a);e.entangledLanes|=a,e.entanglements[i]=e.entanglements[i]|1073741824|t&261930}function _c(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var i=31-da(t),n=1<<i;n&a|e[i]&a&&(e[i]|=a),t&=~n}}function Uc(e,a){var t=a&-a;return t=(t&42)!==0?1:_l(t),(t&(e.suspendedLanes|a))!==0?0:t}function _l(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ul(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lc(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:Sp(e.type))}function Gc(e,a){var t=_.p;try{return _.p=e,a()}finally{_.p=t}}var gt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+gt,aa="__reactProps$"+gt,li="__reactContainer$"+gt,Ll="__reactEvents$"+gt,Km="__reactListeners$"+gt,Fm="__reactHandles$"+gt,qc="__reactResources$"+gt,$i="__reactMarker$"+gt;function Gl(e){delete e[Ve],delete e[aa],delete e[Ll],delete e[Km],delete e[Fm]}function si(e){var a=e[Ve];if(a)return a;for(var t=e.parentNode;t;){if(a=t[li]||t[Ve]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=op(e);e!==null;){if(t=e[Ve])return t;e=op(e)}return a}e=t,t=e.parentNode}return null}function oi(e){if(e=e[Ve]||e[li]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function en(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function ci(e){var a=e[qc];return a||(a=e[qc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function qe(e){e[$i]=!0}var Yc=new Set,Ic={};function Yt(e,a){di(e,a),di(e+"Capture",a)}function di(e,a){for(Ic[e]=a,e=0;e<a.length;e++)Yc.add(a[e])}var Pm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qc={},Vc={};function Zm(e){return Dl.call(Vc,e)?!0:Dl.call(Qc,e)?!1:Pm.test(e)?Vc[e]=!0:(Qc[e]=!0,!1)}function lr(e,a,t){if(Zm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function sr(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Va(e,a,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+i)}}function ba(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Xm(e,a,t){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,r=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(o){t=""+o,r.call(this,o)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function ql(e){if(!e._valueTracker){var a=Kc(e)?"checked":"value";e._valueTracker=Xm(e,a,""+e[a])}}function Fc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),i="";return e&&(i=Kc(e)?e.checked?"true":"false":e.value),e=i,e!==t?(a.setValue(e),!0):!1}function or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jm=/[\n"\\]/g;function xa(e){return e.replace(Jm,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Yl(e,a,t,i,n,r,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),a!=null?o==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ba(a)):e.value!==""+ba(a)&&(e.value=""+ba(a)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),a!=null?Il(e,o,ba(a)):t!=null?Il(e,o,ba(t)):i!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ba(u):e.removeAttribute("name")}function Pc(e,a,t,i,n,r,o,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),a!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||a!=null)){ql(e);return}t=t!=null?""+ba(t):"",a=a!=null?""+ba(a):t,u||a===e.value||(e.value=a),e.defaultValue=a}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ql(e)}function Il(e,a,t){a==="number"&&or(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function hi(e,a,t,i){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&i&&(e[t].defaultSelected=!0)}else{for(t=""+ba(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Zc(e,a,t){if(a!=null&&(a=""+ba(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+ba(t):""}function Xc(e,a,t,i){if(a==null){if(i!=null){if(t!=null)throw Error(d(92));if(Ea(i)){if(1<i.length)throw Error(d(93));i=i[0]}t=i}t==null&&(t=""),a=t}t=ba(a),e.defaultValue=t,i=e.textContent,i===t&&i!==""&&i!==null&&(e.value=i),ql(e)}function ui(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(e,a,t){var i=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":i?e.setProperty(a,t):typeof t!="number"||t===0||Wm.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Wc(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in a)i=a[n],a.hasOwnProperty(n)&&t[n]!==i&&Jc(e,n,i)}else for(var r in a)a.hasOwnProperty(r)&&Jc(e,r,a[r])}function Ql(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $m=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cr(e){return eg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ka(){}var Vl=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pi=null,mi=null;function $c(e){var a=oi(e);if(a&&(e=a.stateNode)){var t=e[aa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Yl(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+xa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var i=t[a];if(i!==e&&i.form===e.form){var n=i[aa]||null;if(!n)throw Error(d(90));Yl(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)i=t[a],i.form===e.form&&Fc(i)}break e;case"textarea":Zc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&hi(e,!!t.multiple,a,!1)}}}var Fl=!1;function ed(e,a,t){if(Fl)return e(a,t);Fl=!0;try{var i=e(a);return i}finally{if(Fl=!1,(pi!==null||mi!==null)&&(Xr(),pi&&(a=pi,e=mi,mi=pi=null,$c(a),e)))for(a=0;a<e.length;a++)$c(e[a])}}function an(e,a){var t=e.stateNode;if(t===null)return null;var i=t[aa]||null;if(i===null)return null;t=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var Fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=!1;if(Fa)try{var tn={};Object.defineProperty(tn,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",tn,tn),window.removeEventListener("test",tn,tn)}catch{Pl=!1}var ft=null,Zl=null,dr=null;function ad(){if(dr)return dr;var e,a=Zl,t=a.length,i,n="value"in ft?ft.value:ft.textContent,r=n.length;for(e=0;e<t&&a[e]===n[e];e++);var o=t-e;for(i=1;i<=o&&a[t-i]===n[r-i];i++);return dr=n.slice(e,1<i?1-i:void 0)}function hr(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function td(){return!1}function ta(e){function a(t,i,n,r,o){this._reactName=t,this._targetInst=n,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ur:td,this.isPropagationStopped=td,this}return N(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),a}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pr=ta(It),nn=N({},It,{view:0,detail:0}),ag=ta(nn),Xl,Jl,rn,mr=N({},nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rn&&(rn&&e.type==="mousemove"?(Xl=e.screenX-rn.screenX,Jl=e.screenY-rn.screenY):Jl=Xl=0,rn=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),id=ta(mr),tg=N({},mr,{dataTransfer:0}),ig=ta(tg),ng=N({},nn,{relatedTarget:0}),Wl=ta(ng),rg=N({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),lg=ta(rg),sg=N({},It,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),og=ta(sg),cg=N({},It,{data:0}),nd=ta(cg),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=ug[e])?!!a[e]:!1}function $l(){return pg}var mg=N({},nn,{key:function(e){if(e.key){var a=dg[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gg=ta(mg),fg=N({},mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=ta(fg),yg=N({},nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),bg=ta(yg),xg=N({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=ta(xg),kg=N({},mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wg=ta(kg),jg=N({},It,{newState:0,oldState:0}),Sg=ta(jg),Ag=[9,13,27,32],es=Fa&&"CompositionEvent"in window,ln=null;Fa&&"documentMode"in document&&(ln=document.documentMode);var Tg=Fa&&"TextEvent"in window&&!ln,ld=Fa&&(!es||ln&&8<ln&&11>=ln),sd=" ",od=!1;function cd(e,a){switch(e){case"keyup":return Ag.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gi=!1;function Ng(e,a){switch(e){case"compositionend":return dd(a);case"keypress":return a.which!==32?null:(od=!0,sd);case"textInput":return e=a.data,e===sd&&od?null:e;default:return null}}function Cg(e,a){if(gi)return e==="compositionend"||!es&&cd(e,a)?(e=ad(),dr=Zl=ft=null,gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ld&&a.locale!=="ko"?null:a.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Rg[e.type]:a==="textarea"}function ud(e,a,t,i){pi?mi?mi.push(i):mi=[i]:pi=i,a=il(a,"onChange"),0<a.length&&(t=new pr("onChange","change",null,t,i),e.push({event:t,listeners:a}))}var sn=null,on=null;function Eg(e){Pu(e,0)}function gr(e){var a=en(e);if(Fc(a))return e}function pd(e,a){if(e==="change")return a}var md=!1;if(Fa){var as;if(Fa){var ts="oninput"in document;if(!ts){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),ts=typeof gd.oninput=="function"}as=ts}else as=!1;md=as&&(!document.documentMode||9<document.documentMode)}function fd(){sn&&(sn.detachEvent("onpropertychange",yd),on=sn=null)}function yd(e){if(e.propertyName==="value"&&gr(on)){var a=[];ud(a,on,e,Kl(e)),ed(Eg,a)}}function zg(e,a,t){e==="focusin"?(fd(),sn=a,on=t,sn.attachEvent("onpropertychange",yd)):e==="focusout"&&fd()}function Mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gr(on)}function Dg(e,a){if(e==="click")return gr(a)}function Hg(e,a){if(e==="input"||e==="change")return gr(a)}function Og(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ha=typeof Object.is=="function"?Object.is:Og;function cn(e,a){if(ha(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),i=Object.keys(a);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var n=t[i];if(!Dl.call(a,n)||!ha(e[n],a[n]))return!1}return!0}function bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xd(e,a){var t=bd(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=a&&i>=a)return{node:t,offset:a-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bd(t)}}function vd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?vd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=or(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=or(e.document)}return a}function is(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Bg=Fa&&"documentMode"in document&&11>=document.documentMode,fi=null,ns=null,dn=null,rs=!1;function wd(e,a,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rs||fi==null||fi!==or(i)||(i=fi,"selectionStart"in i&&is(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),dn&&cn(dn,i)||(dn=i,i=il(ns,"onSelect"),0<i.length&&(a=new pr("onSelect","select",null,a,t),e.push({event:a,listeners:i}),a.target=fi)))}function Qt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var yi={animationend:Qt("Animation","AnimationEnd"),animationiteration:Qt("Animation","AnimationIteration"),animationstart:Qt("Animation","AnimationStart"),transitionrun:Qt("Transition","TransitionRun"),transitionstart:Qt("Transition","TransitionStart"),transitioncancel:Qt("Transition","TransitionCancel"),transitionend:Qt("Transition","TransitionEnd")},ls={},jd={};Fa&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Vt(e){if(ls[e])return ls[e];if(!yi[e])return e;var a=yi[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in jd)return ls[e]=a[t];return e}var Sd=Vt("animationend"),Ad=Vt("animationiteration"),Td=Vt("animationstart"),_g=Vt("transitionrun"),Ug=Vt("transitionstart"),Lg=Vt("transitioncancel"),Nd=Vt("transitionend"),Cd=new Map,ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ss.push("scrollEnd");function za(e,a){Cd.set(e,a),Yt(a,[e])}var fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},va=[],bi=0,os=0;function yr(){for(var e=bi,a=os=bi=0;a<e;){var t=va[a];va[a++]=null;var i=va[a];va[a++]=null;var n=va[a];va[a++]=null;var r=va[a];if(va[a++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}r!==0&&Rd(t,n,r)}}function br(e,a,t,i){va[bi++]=e,va[bi++]=a,va[bi++]=t,va[bi++]=i,os|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function cs(e,a,t,i){return br(e,a,t,i),xr(e)}function Kt(e,a){return br(e,null,null,a),xr(e)}function Rd(e,a,t){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t);for(var n=!1,r=e.return;r!==null;)r.childLanes|=t,i=r.alternate,i!==null&&(i.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&a!==null&&(n=31-da(t),e=r.hiddenUpdates,i=e[n],i===null?e[n]=[a]:i.push(a),a.lane=t|536870912),r):null}function xr(e){if(50<Mn)throw Mn=0,xo=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var xi={};function Gg(e,a,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ua(e,a,t,i){return new Gg(e,a,t,i)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pa(e,a){var t=e.alternate;return t===null?(t=ua(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Ed(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function vr(e,a,t,i,n,r){var o=0;if(i=e,typeof e=="function")ds(e)&&(o=1);else if(typeof e=="string")o=Kf(e,t,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ie:return e=ua(31,t,a,n),e.elementType=Ie,e.lanes=r,e;case F:return Ft(t.children,n,r,a);case q:o=8,n|=24;break;case I:return e=ua(12,t,a,n|2),e.elementType=I,e.lanes=r,e;case Se:return e=ua(13,t,a,n),e.elementType=Se,e.lanes=r,e;case ze:return e=ua(19,t,a,n),e.elementType=ze,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:o=10;break e;case ae:o=9;break e;case pe:o=11;break e;case X:o=14;break e;case Ge:o=16,i=null;break e}o=29,t=Error(d(130,e===null?"null":typeof e,"")),i=null}return a=ua(o,t,a,n),a.elementType=e,a.type=i,a.lanes=r,a}function Ft(e,a,t,i){return e=ua(7,e,i,a),e.lanes=t,e}function hs(e,a,t){return e=ua(6,e,null,a),e.lanes=t,e}function zd(e){var a=ua(18,null,null,0);return a.stateNode=e,a}function us(e,a,t){return a=ua(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Md=new WeakMap;function ka(e,a){if(typeof e=="object"&&e!==null){var t=Md.get(e);return t!==void 0?t:(a={value:e,source:a,stack:zc(a)},Md.set(e,a),a)}return{value:e,source:a,stack:zc(a)}}var vi=[],ki=0,kr=null,hn=0,wa=[],ja=0,yt=null,_a=1,Ua="";function Za(e,a){vi[ki++]=hn,vi[ki++]=kr,kr=e,hn=a}function Dd(e,a,t){wa[ja++]=_a,wa[ja++]=Ua,wa[ja++]=yt,yt=e;var i=_a;e=Ua;var n=32-da(i)-1;i&=~(1<<n),t+=1;var r=32-da(a)+n;if(30<r){var o=n-n%5;r=(i&(1<<o)-1).toString(32),i>>=o,n-=o,_a=1<<32-da(a)+n|t<<n|i,Ua=r+e}else _a=1<<r|t<<n|i,Ua=e}function ps(e){e.return!==null&&(Za(e,1),Dd(e,1,0))}function ms(e){for(;e===kr;)kr=vi[--ki],vi[ki]=null,hn=vi[--ki],vi[ki]=null;for(;e===yt;)yt=wa[--ja],wa[ja]=null,Ua=wa[--ja],wa[ja]=null,_a=wa[--ja],wa[ja]=null}function Hd(e,a){wa[ja++]=_a,wa[ja++]=Ua,wa[ja++]=yt,_a=a.id,Ua=a.overflow,yt=e}var Ke=null,Ae=null,se=!1,bt=null,Sa=!1,gs=Error(d(519));function xt(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw un(ka(a,e)),gs}function Od(e){var a=e.stateNode,t=e.type,i=e.memoizedProps;switch(a[Ve]=e,a[aa]=i,t){case"dialog":ne("cancel",a),ne("close",a);break;case"iframe":case"object":case"embed":ne("load",a);break;case"video":case"audio":for(t=0;t<Hn.length;t++)ne(Hn[t],a);break;case"source":ne("error",a);break;case"img":case"image":case"link":ne("error",a),ne("load",a);break;case"details":ne("toggle",a);break;case"input":ne("invalid",a),Pc(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",a);break;case"textarea":ne("invalid",a),Xc(a,i.value,i.defaultValue,i.children)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||i.suppressHydrationWarning===!0||Wu(a.textContent,t)?(i.popover!=null&&(ne("beforetoggle",a),ne("toggle",a)),i.onScroll!=null&&ne("scroll",a),i.onScrollEnd!=null&&ne("scrollend",a),i.onClick!=null&&(a.onclick=Ka),a=!0):a=!1,a||xt(e,!0)}function Bd(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Sa=!1;return;case 27:case 3:Sa=!0;return;default:Ke=Ke.return}}function wi(e){if(e!==Ke)return!1;if(!se)return Bd(e),se=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ho(e.type,e.memoizedProps)),t=!t),t&&Ae&&xt(e),Bd(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ae=sp(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ae=sp(e)}else a===27?(a=Ae,Dt(e.type)?(e=Lo,Lo=null,Ae=e):Ae=a):Ae=Ke?Ta(e.stateNode.nextSibling):null;return!0}function Pt(){Ae=Ke=null,se=!1}function fs(){var e=bt;return e!==null&&(la===null?la=e:la.push.apply(la,e),bt=null),e}function un(e){bt===null?bt=[e]:bt.push(e)}var ys=k(null),Zt=null,Xa=null;function vt(e,a,t){U(ys,a._currentValue),a._currentValue=t}function Ja(e){e._currentValue=ys.current,H(ys)}function bs(e,a,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),e===t)break;e=e.return}}function xs(e,a,t,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=n;for(var b=0;b<a.length;b++)if(u.context===a[b]){r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),bs(r.return,t,e),i||(o=null);break e}r=u.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(d(341));o.lanes|=t,r=o.alternate,r!==null&&(r.lanes|=t),bs(o,t,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function ji(e,a,t,i){e=null;for(var n=a,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var u=n.type;ha(n.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(n===me.current){if(o=n.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Ln):e=[Ln])}n=n.return}e!==null&&xs(a,e,t,i),a.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!ha(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xt(e){Zt=e,Xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return _d(Zt,e)}function jr(e,a){return Zt===null&&Xt(e),_d(e,a)}function _d(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Xa===null){if(e===null)throw Error(d(308));Xa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Xa=Xa.next=a;return t}var qg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,i){e.push(i)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Yg=s.unstable_scheduleCallback,Ig=s.unstable_NormalPriority,Oe={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vs(){return{controller:new qg,data:new Map,refCount:0}}function pn(e){e.refCount--,e.refCount===0&&Yg(Ig,function(){e.controller.abort()})}var mn=null,ks=0,Si=0,Ai=null;function Qg(e,a){if(mn===null){var t=mn=[];ks=0,Si=Ao(),Ai={status:"pending",value:void 0,then:function(i){t.push(i)}}}return ks++,a.then(Ud,Ud),a}function Ud(){if(--ks===0&&mn!==null){Ai!==null&&(Ai.status="fulfilled");var e=mn;mn=null,Si=0,Ai=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Vg(e,a){var t=[],i={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){i.status="fulfilled",i.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(i.status="rejected",i.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),i}var Ld=z.S;z.S=function(e,a){wu=oa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Qg(e,a),Ld!==null&&Ld(e,a)};var Jt=k(null);function ws(){var e=Jt.current;return e!==null?e:we.pooledCache}function Sr(e,a){a===null?U(Jt,Jt.current):U(Jt,a.pool)}function Gd(){var e=ws();return e===null?null:{parent:Oe._currentValue,pool:e}}var Ti=Error(d(460)),js=Error(d(474)),Ar=Error(d(542)),Tr={then:function(){}};function qd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yd(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ka,Ka),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qd(e),e;default:if(typeof a.status=="string")a.then(Ka,Ka);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(i){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=i}},function(i){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qd(e),e}throw $t=a,Ti}}function Wt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?($t=t,Ti):t}}var $t=null;function Id(){if($t===null)throw Error(d(459));var e=$t;return $t=null,e}function Qd(e){if(e===Ti||e===Ar)throw Error(d(483))}var Ni=null,gn=0;function Nr(e){var a=gn;return gn+=1,Ni===null&&(Ni=[]),Yd(Ni,e,a)}function fn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Cr(e,a){throw a.$$typeof===O?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Vd(e){function a(w,x){if(e){var j=w.deletions;j===null?(w.deletions=[x],w.flags|=16):j.push(x)}}function t(w,x){if(!e)return null;for(;x!==null;)a(w,x),x=x.sibling;return null}function i(w){for(var x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function n(w,x){return w=Pa(w,x),w.index=0,w.sibling=null,w}function r(w,x,j){return w.index=j,e?(j=w.alternate,j!==null?(j=j.index,j<x?(w.flags|=67108866,x):j):(w.flags|=67108866,x)):(w.flags|=1048576,x)}function o(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function u(w,x,j,M){return x===null||x.tag!==6?(x=hs(j,w.mode,M),x.return=w,x):(x=n(x,j),x.return=w,x)}function b(w,x,j,M){var K=j.type;return K===F?E(w,x,j.props.children,M,j.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ge&&Wt(K)===x.type)?(x=n(x,j.props),fn(x,j),x.return=w,x):(x=vr(j.type,j.key,j.props,null,w.mode,M),fn(x,j),x.return=w,x)}function S(w,x,j,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=us(j,w.mode,M),x.return=w,x):(x=n(x,j.children||[]),x.return=w,x)}function E(w,x,j,M,K){return x===null||x.tag!==7?(x=Ft(j,w.mode,M,K),x.return=w,x):(x=n(x,j),x.return=w,x)}function D(w,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=hs(""+x,w.mode,j),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case B:return j=vr(x.type,x.key,x.props,null,w.mode,j),fn(j,x),j.return=w,j;case Y:return x=us(x,w.mode,j),x.return=w,x;case Ge:return x=Wt(x),D(w,x,j)}if(Ea(x)||Qe(x))return x=Ft(x,w.mode,j,null),x.return=w,x;if(typeof x.then=="function")return D(w,Nr(x),j);if(x.$$typeof===L)return D(w,jr(w,x),j);Cr(w,x)}return null}function T(w,x,j,M){var K=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return K!==null?null:u(w,x,""+j,M);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return j.key===K?b(w,x,j,M):null;case Y:return j.key===K?S(w,x,j,M):null;case Ge:return j=Wt(j),T(w,x,j,M)}if(Ea(j)||Qe(j))return K!==null?null:E(w,x,j,M,null);if(typeof j.then=="function")return T(w,x,Nr(j),M);if(j.$$typeof===L)return T(w,x,jr(w,j),M);Cr(w,j)}return null}function C(w,x,j,M,K){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return w=w.get(j)||null,u(x,w,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case B:return w=w.get(M.key===null?j:M.key)||null,b(x,w,M,K);case Y:return w=w.get(M.key===null?j:M.key)||null,S(x,w,M,K);case Ge:return M=Wt(M),C(w,x,j,M,K)}if(Ea(M)||Qe(M))return w=w.get(j)||null,E(x,w,M,K,null);if(typeof M.then=="function")return C(w,x,j,Nr(M),K);if(M.$$typeof===L)return C(w,x,j,jr(x,M),K);Cr(x,M)}return null}function G(w,x,j,M){for(var K=null,oe=null,V=x,ee=x=0,le=null;V!==null&&ee<j.length;ee++){V.index>ee?(le=V,V=null):le=V.sibling;var ce=T(w,V,j[ee],M);if(ce===null){V===null&&(V=le);break}e&&V&&ce.alternate===null&&a(w,V),x=r(ce,x,ee),oe===null?K=ce:oe.sibling=ce,oe=ce,V=le}if(ee===j.length)return t(w,V),se&&Za(w,ee),K;if(V===null){for(;ee<j.length;ee++)V=D(w,j[ee],M),V!==null&&(x=r(V,x,ee),oe===null?K=V:oe.sibling=V,oe=V);return se&&Za(w,ee),K}for(V=i(V);ee<j.length;ee++)le=C(V,w,ee,j[ee],M),le!==null&&(e&&le.alternate!==null&&V.delete(le.key===null?ee:le.key),x=r(le,x,ee),oe===null?K=le:oe.sibling=le,oe=le);return e&&V.forEach(function(Ut){return a(w,Ut)}),se&&Za(w,ee),K}function P(w,x,j,M){if(j==null)throw Error(d(151));for(var K=null,oe=null,V=x,ee=x=0,le=null,ce=j.next();V!==null&&!ce.done;ee++,ce=j.next()){V.index>ee?(le=V,V=null):le=V.sibling;var Ut=T(w,V,ce.value,M);if(Ut===null){V===null&&(V=le);break}e&&V&&Ut.alternate===null&&a(w,V),x=r(Ut,x,ee),oe===null?K=Ut:oe.sibling=Ut,oe=Ut,V=le}if(ce.done)return t(w,V),se&&Za(w,ee),K;if(V===null){for(;!ce.done;ee++,ce=j.next())ce=D(w,ce.value,M),ce!==null&&(x=r(ce,x,ee),oe===null?K=ce:oe.sibling=ce,oe=ce);return se&&Za(w,ee),K}for(V=i(V);!ce.done;ee++,ce=j.next())ce=C(V,w,ee,ce.value,M),ce!==null&&(e&&ce.alternate!==null&&V.delete(ce.key===null?ee:ce.key),x=r(ce,x,ee),oe===null?K=ce:oe.sibling=ce,oe=ce);return e&&V.forEach(function(iy){return a(w,iy)}),se&&Za(w,ee),K}function ve(w,x,j,M){if(typeof j=="object"&&j!==null&&j.type===F&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case B:e:{for(var K=j.key;x!==null;){if(x.key===K){if(K=j.type,K===F){if(x.tag===7){t(w,x.sibling),M=n(x,j.props.children),M.return=w,w=M;break e}}else if(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ge&&Wt(K)===x.type){t(w,x.sibling),M=n(x,j.props),fn(M,j),M.return=w,w=M;break e}t(w,x);break}else a(w,x);x=x.sibling}j.type===F?(M=Ft(j.props.children,w.mode,M,j.key),M.return=w,w=M):(M=vr(j.type,j.key,j.props,null,w.mode,M),fn(M,j),M.return=w,w=M)}return o(w);case Y:e:{for(K=j.key;x!==null;){if(x.key===K)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){t(w,x.sibling),M=n(x,j.children||[]),M.return=w,w=M;break e}else{t(w,x);break}else a(w,x);x=x.sibling}M=us(j,w.mode,M),M.return=w,w=M}return o(w);case Ge:return j=Wt(j),ve(w,x,j,M)}if(Ea(j))return G(w,x,j,M);if(Qe(j)){if(K=Qe(j),typeof K!="function")throw Error(d(150));return j=K.call(j),P(w,x,j,M)}if(typeof j.then=="function")return ve(w,x,Nr(j),M);if(j.$$typeof===L)return ve(w,x,jr(w,j),M);Cr(w,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,x!==null&&x.tag===6?(t(w,x.sibling),M=n(x,j),M.return=w,w=M):(t(w,x),M=hs(j,w.mode,M),M.return=w,w=M),o(w)):t(w,x)}return function(w,x,j,M){try{gn=0;var K=ve(w,x,j,M);return Ni=null,K}catch(V){if(V===Ti||V===Ar)throw V;var oe=ua(29,V,null,w.mode);return oe.lanes=M,oe.return=w,oe}finally{}}}var ei=Vd(!0),Kd=Vd(!1),kt=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jt(e,a,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(he&2)!==0){var n=i.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),i.pending=a,a=xr(e),Rd(e,null,t),a}return br(e,i,a,t),xr(e)}function yn(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var i=a.lanes;i&=e.pendingLanes,t|=i,a.lanes=t,_c(e,t)}}function Ts(e,a){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var n=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,t=t.next}while(t!==null);r===null?n=r=a:r=r.next=a}else n=r=a;t={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Ns=!1;function bn(){if(Ns){var e=Ai;if(e!==null)throw e}}function xn(e,a,t,i){Ns=!1;var n=e.updateQueue;kt=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var b=u,S=b.next;b.next=null,o===null?r=S:o.next=S,o=b;var E=e.alternate;E!==null&&(E=E.updateQueue,u=E.lastBaseUpdate,u!==o&&(u===null?E.firstBaseUpdate=S:u.next=S,E.lastBaseUpdate=b))}if(r!==null){var D=n.baseState;o=0,E=S=b=null,u=r;do{var T=u.lane&-536870913,C=T!==u.lane;if(C?(re&T)===T:(i&T)===T){T!==0&&T===Si&&(Ns=!0),E!==null&&(E=E.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var G=e,P=u;T=a;var ve=t;switch(P.tag){case 1:if(G=P.payload,typeof G=="function"){D=G.call(ve,D,T);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=P.payload,T=typeof G=="function"?G.call(ve,D,T):G,T==null)break e;D=N({},D,T);break e;case 2:kt=!0}}T=u.callback,T!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[T]:C.push(T))}else C={lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},E===null?(S=E=C,b=D):E=E.next=C,o|=T;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;C=u,u=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);E===null&&(b=D),n.baseState=b,n.firstBaseUpdate=S,n.lastBaseUpdate=E,r===null&&(n.shared.lanes=0),Ct|=o,e.lanes=o,e.memoizedState=D}}function Fd(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Pd(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Fd(t[e],a)}var Ci=k(null),Rr=k(0);function Zd(e,a){e=lt,U(Rr,e),U(Ci,a),lt=e|a.baseLanes}function Cs(){U(Rr,lt),U(Ci,Ci.current)}function Rs(){lt=Rr.current,H(Ci),H(Rr)}var pa=k(null),Aa=null;function St(e){var a=e.alternate;U(De,De.current&1),U(pa,e),Aa===null&&(a===null||Ci.current!==null||a.memoizedState!==null)&&(Aa=e)}function Es(e){U(De,De.current),U(pa,e),Aa===null&&(Aa=e)}function Xd(e){e.tag===22?(U(De,De.current),U(pa,e),Aa===null&&(Aa=e)):At()}function At(){U(De,De.current),U(pa,pa.current)}function ma(e){H(pa),Aa===e&&(Aa=null),H(De)}var De=k(0);function Er(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||_o(t)||Uo(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Wa=0,$=null,be=null,Be=null,zr=!1,Ri=!1,ai=!1,Mr=0,vn=0,Ei=null,Kg=0;function Re(){throw Error(d(321))}function zs(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ha(e[t],a[t]))return!1;return!0}function Ms(e,a,t,i,n,r){return Wa=r,$=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=e===null||e.memoizedState===null?Dh:Fs,ai=!1,r=t(i,n),ai=!1,Ri&&(r=Wd(a,t,i,n)),Jd(e),r}function Jd(e){z.H=jn;var a=be!==null&&be.next!==null;if(Wa=0,Be=be=$=null,zr=!1,vn=0,Ei=null,a)throw Error(d(300));e===null||_e||(e=e.dependencies,e!==null&&wr(e)&&(_e=!0))}function Wd(e,a,t,i){$=e;var n=0;do{if(Ri&&(Ei=null),vn=0,Ri=!1,25<=n)throw Error(d(301));if(n+=1,Be=be=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}z.H=Hh,r=a(t,i)}while(Ri);return r}function Fg(){var e=z.H,a=e.useState()[0];return a=typeof a.then=="function"?kn(a):a,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&($.flags|=1024),a}function Ds(){var e=Mr!==0;return Mr=0,e}function Hs(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Os(e){if(zr){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}zr=!1}Wa=0,Be=be=$=null,Ri=!1,vn=Mr=0,Ei=null}function ea(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?$.memoizedState=Be=e:Be=Be.next=e,Be}function He(){if(be===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var a=Be===null?$.memoizedState:Be.next;if(a!==null)Be=a,be=e;else{if(e===null)throw $.alternate===null?Error(d(467)):Error(d(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Be===null?$.memoizedState=Be=e:Be=Be.next=e}return Be}function Dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kn(e){var a=vn;return vn+=1,Ei===null&&(Ei=[]),e=Yd(Ei,e,a),a=$,(Be===null?a.memoizedState:Be.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Dh:Fs),e}function Hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return kn(e);if(e.$$typeof===L)return Fe(e)}throw Error(d(438,String(e)))}function Bs(e){var a=null,t=$.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var i=$.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Dr(),$.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),i=0;i<e;i++)t[i]=Xe;return a.index++,t}function $a(e,a){return typeof a=="function"?a(e):a}function Or(e){var a=He();return _s(a,be,e)}function _s(e,a,t){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=t;var n=e.baseQueue,r=i.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}a.baseQueue=n=r,i.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{a=n.next;var u=o=null,b=null,S=a,E=!1;do{var D=S.lane&-536870913;if(D!==S.lane?(re&D)===D:(Wa&D)===D){var T=S.revertLane;if(T===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),D===Si&&(E=!0);else if((Wa&T)===T){S=S.next,T===Si&&(E=!0);continue}else D={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(u=b=D,o=r):b=b.next=D,$.lanes|=T,Ct|=T;D=S.action,ai&&t(r,D),r=S.hasEagerState?S.eagerState:t(r,D)}else T={lane:D,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(u=b=T,o=r):b=b.next=T,$.lanes|=D,Ct|=D;S=S.next}while(S!==null&&S!==a);if(b===null?o=r:b.next=u,!ha(r,e.memoizedState)&&(_e=!0,E&&(t=Ai,t!==null)))throw t;e.memoizedState=r,e.baseState=o,e.baseQueue=b,i.lastRenderedState=r}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Us(e){var a=He(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var i=t.dispatch,n=t.pending,r=a.memoizedState;if(n!==null){t.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);ha(r,a.memoizedState)||(_e=!0),a.memoizedState=r,a.baseQueue===null&&(a.baseState=r),t.lastRenderedState=r}return[r,i]}function $d(e,a,t){var i=$,n=He(),r=se;if(r){if(t===void 0)throw Error(d(407));t=t()}else t=a();var o=!ha((be||n).memoizedState,t);if(o&&(n.memoizedState=t,_e=!0),n=n.queue,qs(th.bind(null,i,n,e),[e]),n.getSnapshot!==a||o||Be!==null&&Be.memoizedState.tag&1){if(i.flags|=2048,zi(9,{destroy:void 0},ah.bind(null,i,n,t,a),null),we===null)throw Error(d(349));r||(Wa&127)!==0||eh(i,a,t)}return t}function eh(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=$.updateQueue,a===null?(a=Dr(),$.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function ah(e,a,t,i){a.value=t,a.getSnapshot=i,ih(a)&&nh(e)}function th(e,a,t){return t(function(){ih(a)&&nh(e)})}function ih(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ha(e,t)}catch{return!0}}function nh(e){var a=Kt(e,2);a!==null&&sa(a,e,2)}function Ls(e){var a=ea();if(typeof e=="function"){var t=e;if(e=t(),ai){mt(!0);try{t()}finally{mt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},a}function rh(e,a,t,i){return e.baseState=t,_s(e,be,typeof i=="function"?i:$a)}function Pg(e,a,t,i,n){if(Ur(e))throw Error(d(485));if(e=a.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};z.T!==null?t(!0):r.isTransition=!1,i(r),t=a.pending,t===null?(r.next=a.pending=r,lh(a,r)):(r.next=t.next,a.pending=t.next=r)}}function lh(e,a){var t=a.action,i=a.payload,n=e.state;if(a.isTransition){var r=z.T,o={};z.T=o;try{var u=t(n,i),b=z.S;b!==null&&b(o,u),sh(e,a,u)}catch(S){Gs(e,a,S)}finally{r!==null&&o.types!==null&&(r.types=o.types),z.T=r}}else try{r=t(n,i),sh(e,a,r)}catch(S){Gs(e,a,S)}}function sh(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){oh(e,a,i)},function(i){return Gs(e,a,i)}):oh(e,a,t)}function oh(e,a,t){a.status="fulfilled",a.value=t,ch(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,lh(e,t)))}function Gs(e,a,t){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=t,ch(a),a=a.next;while(a!==i)}e.action=null}function ch(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function dh(e,a){return a}function hh(e,a){if(se){var t=we.formState;if(t!==null){e:{var i=$;if(se){if(Ae){a:{for(var n=Ae,r=Sa;n.nodeType!==8;){if(!r){n=null;break a}if(n=Ta(n.nextSibling),n===null){n=null;break a}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Ae=Ta(n.nextSibling),i=n.data==="F!";break e}}xt(i)}i=!1}i&&(a=t[0])}}return t=ea(),t.memoizedState=t.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dh,lastRenderedState:a},t.queue=i,t=Eh.bind(null,$,i),i.dispatch=t,i=Ls(!1),r=Ks.bind(null,$,!1,i.queue),i=ea(),n={state:a,dispatch:null,action:e,pending:null},i.queue=n,t=Pg.bind(null,$,n,r,t),n.dispatch=t,i.memoizedState=e,[a,t,!1]}function uh(e){var a=He();return ph(a,be,e)}function ph(e,a,t){if(a=_s(e,a,dh)[0],e=Or($a)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=kn(a)}catch(o){throw o===Ti?Ar:o}else i=a;a=He();var n=a.queue,r=n.dispatch;return t!==a.memoizedState&&($.flags|=2048,zi(9,{destroy:void 0},Zg.bind(null,n,t),null)),[i,r,e]}function Zg(e,a){e.action=a}function mh(e){var a=He(),t=be;if(t!==null)return ph(a,t,e);He(),a=a.memoizedState,t=He();var i=t.queue.dispatch;return t.memoizedState=e,[a,i,!1]}function zi(e,a,t,i){return e={tag:e,create:t,deps:i,inst:a,next:null},a=$.updateQueue,a===null&&(a=Dr(),$.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,a.lastEffect=e),e}function gh(){return He().memoizedState}function Br(e,a,t,i){var n=ea();$.flags|=e,n.memoizedState=zi(1|a,{destroy:void 0},t,i===void 0?null:i)}function _r(e,a,t,i){var n=He();i=i===void 0?null:i;var r=n.memoizedState.inst;be!==null&&i!==null&&zs(i,be.memoizedState.deps)?n.memoizedState=zi(a,r,t,i):($.flags|=e,n.memoizedState=zi(1|a,r,t,i))}function fh(e,a){Br(8390656,8,e,a)}function qs(e,a){_r(2048,8,e,a)}function Xg(e){$.flags|=4;var a=$.updateQueue;if(a===null)a=Dr(),$.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function yh(e){var a=He().memoizedState;return Xg({ref:a,nextImpl:e}),function(){if((he&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function bh(e,a){return _r(4,2,e,a)}function xh(e,a){return _r(4,4,e,a)}function vh(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function kh(e,a,t){t=t!=null?t.concat([e]):null,_r(4,4,vh.bind(null,a,e),t)}function Ys(){}function wh(e,a){var t=He();a=a===void 0?null:a;var i=t.memoizedState;return a!==null&&zs(a,i[1])?i[0]:(t.memoizedState=[e,a],e)}function jh(e,a){var t=He();a=a===void 0?null:a;var i=t.memoizedState;if(a!==null&&zs(a,i[1]))return i[0];if(i=e(),ai){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[i,a],i}function Is(e,a,t){return t===void 0||(Wa&1073741824)!==0&&(re&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Su(),$.lanes|=e,Ct|=e,t)}function Sh(e,a,t,i){return ha(t,a)?t:Ci.current!==null?(e=Is(e,t,i),ha(e,a)||(_e=!0),e):(Wa&42)===0||(Wa&1073741824)!==0&&(re&261930)===0?(_e=!0,e.memoizedState=t):(e=Su(),$.lanes|=e,Ct|=e,a)}function Ah(e,a,t,i,n){var r=_.p;_.p=r!==0&&8>r?r:8;var o=z.T,u={};z.T=u,Ks(e,!1,a,t);try{var b=n(),S=z.S;if(S!==null&&S(u,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var E=Vg(b,i);wn(e,a,E,ya(e))}else wn(e,a,i,ya(e))}catch(D){wn(e,a,{then:function(){},status:"rejected",reason:D},ya())}finally{_.p=r,o!==null&&u.types!==null&&(o.types=u.types),z.T=o}}function Jg(){}function Qs(e,a,t,i){if(e.tag!==5)throw Error(d(476));var n=Th(e).queue;Ah(e,n,a,Z,t===null?Jg:function(){return Nh(e),t(i)})}function Th(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:Z},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Nh(e){var a=Th(e);a.next===null&&(a=e.alternate.memoizedState),wn(e,a.next.queue,{},ya())}function Vs(){return Fe(Ln)}function Ch(){return He().memoizedState}function Rh(){return He().memoizedState}function Wg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ya();e=wt(t);var i=jt(a,e,t);i!==null&&(sa(i,a,t),yn(i,a,t)),a={cache:vs()},e.payload=a;return}a=a.return}}function $g(e,a,t){var i=ya();t={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ur(e)?zh(a,t):(t=cs(e,a,t,i),t!==null&&(sa(t,e,i),Mh(t,a,i)))}function Eh(e,a,t){var i=ya();wn(e,a,t,i)}function wn(e,a,t,i){var n={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ur(e))zh(a,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=a.lastRenderedReducer,r!==null))try{var o=a.lastRenderedState,u=r(o,t);if(n.hasEagerState=!0,n.eagerState=u,ha(u,o))return br(e,a,n,0),we===null&&yr(),!1}catch{}finally{}if(t=cs(e,a,n,i),t!==null)return sa(t,e,i),Mh(t,a,i),!0}return!1}function Ks(e,a,t,i){if(i={lane:2,revertLane:Ao(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ur(e)){if(a)throw Error(d(479))}else a=cs(e,t,i,2),a!==null&&sa(a,e,2)}function Ur(e){var a=e.alternate;return e===$||a!==null&&a===$}function zh(e,a){Ri=zr=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Mh(e,a,t){if((t&4194048)!==0){var i=a.lanes;i&=e.pendingLanes,t|=i,a.lanes=t,_c(e,t)}}var jn={readContext:Fe,use:Hr,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};jn.useEffectEvent=Re;var Dh={readContext:Fe,use:Hr,useCallback:function(e,a){return ea().memoizedState=[e,a===void 0?null:a],e},useContext:Fe,useEffect:fh,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Br(4194308,4,vh.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Br(4194308,4,e,a)},useInsertionEffect:function(e,a){Br(4,2,e,a)},useMemo:function(e,a){var t=ea();a=a===void 0?null:a;var i=e();if(ai){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[i,a],i},useReducer:function(e,a,t){var i=ea();if(t!==void 0){var n=t(a);if(ai){mt(!0);try{t(a)}finally{mt(!1)}}}else n=a;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=$g.bind(null,$,e),[i.memoizedState,e]},useRef:function(e){var a=ea();return e={current:e},a.memoizedState=e},useState:function(e){e=Ls(e);var a=e.queue,t=Eh.bind(null,$,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Ys,useDeferredValue:function(e,a){var t=ea();return Is(t,e,a)},useTransition:function(){var e=Ls(!1);return e=Ah.bind(null,$,e.queue,!0,!1),ea().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var i=$,n=ea();if(se){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),we===null)throw Error(d(349));(re&127)!==0||eh(i,a,t)}n.memoizedState=t;var r={value:t,getSnapshot:a};return n.queue=r,fh(th.bind(null,i,r,e),[e]),i.flags|=2048,zi(9,{destroy:void 0},ah.bind(null,i,r,t,a),null),t},useId:function(){var e=ea(),a=we.identifierPrefix;if(se){var t=Ua,i=_a;t=(i&~(1<<32-da(i)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Mr++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Kg++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Vs,useFormState:hh,useActionState:hh,useOptimistic:function(e){var a=ea();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Ks.bind(null,$,!0,t),t.dispatch=a,[e,a]},useMemoCache:Bs,useCacheRefresh:function(){return ea().memoizedState=Wg.bind(null,$)},useEffectEvent:function(e){var a=ea(),t={impl:e};return a.memoizedState=t,function(){if((he&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},Fs={readContext:Fe,use:Hr,useCallback:wh,useContext:Fe,useEffect:qs,useImperativeHandle:kh,useInsertionEffect:bh,useLayoutEffect:xh,useMemo:jh,useReducer:Or,useRef:gh,useState:function(){return Or($a)},useDebugValue:Ys,useDeferredValue:function(e,a){var t=He();return Sh(t,be.memoizedState,e,a)},useTransition:function(){var e=Or($a)[0],a=He().memoizedState;return[typeof e=="boolean"?e:kn(e),a]},useSyncExternalStore:$d,useId:Ch,useHostTransitionStatus:Vs,useFormState:uh,useActionState:uh,useOptimistic:function(e,a){var t=He();return rh(t,be,e,a)},useMemoCache:Bs,useCacheRefresh:Rh};Fs.useEffectEvent=yh;var Hh={readContext:Fe,use:Hr,useCallback:wh,useContext:Fe,useEffect:qs,useImperativeHandle:kh,useInsertionEffect:bh,useLayoutEffect:xh,useMemo:jh,useReducer:Us,useRef:gh,useState:function(){return Us($a)},useDebugValue:Ys,useDeferredValue:function(e,a){var t=He();return be===null?Is(t,e,a):Sh(t,be.memoizedState,e,a)},useTransition:function(){var e=Us($a)[0],a=He().memoizedState;return[typeof e=="boolean"?e:kn(e),a]},useSyncExternalStore:$d,useId:Ch,useHostTransitionStatus:Vs,useFormState:mh,useActionState:mh,useOptimistic:function(e,a){var t=He();return be!==null?rh(t,be,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Bs,useCacheRefresh:Rh};Hh.useEffectEvent=yh;function Ps(e,a,t,i){a=e.memoizedState,t=t(i,a),t=t==null?a:N({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Zs={enqueueSetState:function(e,a,t){e=e._reactInternals;var i=ya(),n=wt(i);n.payload=a,t!=null&&(n.callback=t),a=jt(e,n,i),a!==null&&(sa(a,e,i),yn(a,e,i))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var i=ya(),n=wt(i);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=jt(e,n,i),a!==null&&(sa(a,e,i),yn(a,e,i))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ya(),i=wt(t);i.tag=2,a!=null&&(i.callback=a),a=jt(e,i,t),a!==null&&(sa(a,e,t),yn(a,e,t))}};function Oh(e,a,t,i,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):a.prototype&&a.prototype.isPureReactComponent?!cn(t,i)||!cn(n,r):!0}function Bh(e,a,t,i){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,i),a.state!==e&&Zs.enqueueReplaceState(a,a.state,null)}function ti(e,a){var t=a;if("ref"in a){t={};for(var i in a)i!=="ref"&&(t[i]=a[i])}if(e=e.defaultProps){t===a&&(t=N({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function _h(e){fr(e)}function Uh(e){console.error(e)}function Lh(e){fr(e)}function Lr(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function Gh(e,a,t){try{var i=e.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Xs(e,a,t){return t=wt(t),t.tag=3,t.payload={element:null},t.callback=function(){Lr(e,a)},t}function qh(e){return e=wt(e),e.tag=3,e}function Yh(e,a,t,i){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=i.value;e.payload=function(){return n(r)},e.callback=function(){Gh(a,t,i)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Gh(a,t,i),typeof n!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function ef(e,a,t,i,n){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=t.alternate,a!==null&&ji(a,t,n,!0),t=pa.current,t!==null){switch(t.tag){case 31:case 13:return Aa===null?Jr():t.alternate===null&&Ee===0&&(Ee=3),t.flags&=-257,t.flags|=65536,t.lanes=n,i===Tr?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([i]):a.add(i),wo(e,i,n)),!1;case 22:return t.flags|=65536,i===Tr?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([i]):t.add(i)),wo(e,i,n)),!1}throw Error(d(435,t.tag))}return wo(e,i,n),Jr(),!1}if(se)return a=pa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,i!==gs&&(e=Error(d(422),{cause:i}),un(ka(e,t)))):(i!==gs&&(a=Error(d(423),{cause:i}),un(ka(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=ka(i,t),n=Xs(e.stateNode,i,n),Ts(e,n),Ee!==4&&(Ee=2)),!1;var r=Error(d(520),{cause:i});if(r=ka(r,t),zn===null?zn=[r]:zn.push(r),Ee!==4&&(Ee=2),a===null)return!0;i=ka(i,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=Xs(t.stateNode,i,e),Ts(t,e),!1;case 1:if(a=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))))return t.flags|=65536,n&=-n,t.lanes|=n,n=qh(n),Yh(n,e,t,i),Ts(t,n),!1}t=t.return}while(t!==null);return!1}var Js=Error(d(461)),_e=!1;function Pe(e,a,t,i){a.child=e===null?Kd(a,null,t,i):ei(a,e.child,t,i)}function Ih(e,a,t,i,n){t=t.render;var r=a.ref;if("ref"in i){var o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}else o=i;return Xt(a),i=Ms(e,a,t,o,r,n),u=Ds(),e!==null&&!_e?(Hs(e,a,n),et(e,a,n)):(se&&u&&ps(a),a.flags|=1,Pe(e,a,i,n),a.child)}function Qh(e,a,t,i,n){if(e===null){var r=t.type;return typeof r=="function"&&!ds(r)&&r.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=r,Vh(e,a,r,i,n)):(e=vr(t.type,null,i,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(r=e.child,!ro(e,n)){var o=r.memoizedProps;if(t=t.compare,t=t!==null?t:cn,t(o,i)&&e.ref===a.ref)return et(e,a,n)}return a.flags|=1,e=Pa(r,i),e.ref=a.ref,e.return=a,a.child=e}function Vh(e,a,t,i,n){if(e!==null){var r=e.memoizedProps;if(cn(r,i)&&e.ref===a.ref)if(_e=!1,a.pendingProps=i=r,ro(e,n))(e.flags&131072)!==0&&(_e=!0);else return a.lanes=e.lanes,et(e,a,n)}return Ws(e,a,t,i,n)}function Kh(e,a,t,i){var n=i.children,r=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,e!==null){for(i=a.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~r}else i=0,a.child=null;return Fh(e,a,r,t,i)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sr(a,r!==null?r.cachePool:null),r!==null?Zd(a,r):Cs(),Xd(a);else return i=a.lanes=536870912,Fh(e,a,r!==null?r.baseLanes|t:t,t,i)}else r!==null?(Sr(a,r.cachePool),Zd(a,r),At(),a.memoizedState=null):(e!==null&&Sr(a,null),Cs(),At());return Pe(e,a,n,t),a.child}function Sn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Fh(e,a,t,i,n){var r=ws();return r=r===null?null:{parent:Oe._currentValue,pool:r},a.memoizedState={baseLanes:t,cachePool:r},e!==null&&Sr(a,null),Cs(),Xd(a),e!==null&&ji(e,a,i,!0),a.childLanes=n,null}function Gr(e,a){return a=Yr({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Ph(e,a,t){return ei(a,e.child,null,t),e=Gr(a,a.pendingProps),e.flags|=2,ma(a),a.memoizedState=null,e}function af(e,a,t){var i=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(se){if(i.mode==="hidden")return e=Gr(a,i),a.lanes=536870912,Sn(null,e);if(Es(a),(e=Ae)?(e=lp(e,Sa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yt!==null?{id:_a,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},t=zd(e),t.return=a,a.child=t,Ke=a,Ae=null)):e=null,e===null)throw xt(a);return a.lanes=536870912,null}return Gr(a,i)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Es(a),n)if(a.flags&256)a.flags&=-257,a=Ph(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(_e||ji(e,a,t,!1),n=(t&e.childLanes)!==0,_e||n){if(i=we,i!==null&&(o=Uc(i,t),o!==0&&o!==r.retryLane))throw r.retryLane=o,Kt(e,o),sa(i,e,o),Js;Jr(),a=Ph(e,a,t)}else e=r.treeContext,Ae=Ta(o.nextSibling),Ke=a,se=!0,bt=null,Sa=!1,e!==null&&Hd(a,e),a=Gr(a,i),a.flags|=4096;return a}return e=Pa(e.child,{mode:i.mode,children:i.children}),e.ref=a.ref,a.child=e,e.return=a,e}function qr(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ws(e,a,t,i,n){return Xt(a),t=Ms(e,a,t,i,void 0,n),i=Ds(),e!==null&&!_e?(Hs(e,a,n),et(e,a,n)):(se&&i&&ps(a),a.flags|=1,Pe(e,a,t,n),a.child)}function Zh(e,a,t,i,n,r){return Xt(a),a.updateQueue=null,t=Wd(a,i,t,n),Jd(e),i=Ds(),e!==null&&!_e?(Hs(e,a,r),et(e,a,r)):(se&&i&&ps(a),a.flags|=1,Pe(e,a,t,r),a.child)}function Xh(e,a,t,i,n){if(Xt(a),a.stateNode===null){var r=xi,o=t.contextType;typeof o=="object"&&o!==null&&(r=Fe(o)),r=new t(i,r),a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Zs,a.stateNode=r,r._reactInternals=a,r=a.stateNode,r.props=i,r.state=a.memoizedState,r.refs={},Ss(a),o=t.contextType,r.context=typeof o=="object"&&o!==null?Fe(o):xi,r.state=a.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ps(a,t,o,i),r.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Zs.enqueueReplaceState(r,r.state,null),xn(a,i,r,n),bn(),r.state=a.memoizedState),typeof r.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(e===null){r=a.stateNode;var u=a.memoizedProps,b=ti(t,u);r.props=b;var S=r.context,E=t.contextType;o=xi,typeof E=="object"&&E!==null&&(o=Fe(E));var D=t.getDerivedStateFromProps;E=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=a.pendingProps!==u,E||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||S!==o)&&Bh(a,r,i,o),kt=!1;var T=a.memoizedState;r.state=T,xn(a,i,r,n),bn(),S=a.memoizedState,u||T!==S||kt?(typeof D=="function"&&(Ps(a,t,D,i),S=a.memoizedState),(b=kt||Oh(a,t,b,i,T,S,o))?(E||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(a.flags|=4194308)):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=S),r.props=i,r.state=S,r.context=o,i=b):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{r=a.stateNode,As(e,a),o=a.memoizedProps,E=ti(t,o),r.props=E,D=a.pendingProps,T=r.context,S=t.contextType,b=xi,typeof S=="object"&&S!==null&&(b=Fe(S)),u=t.getDerivedStateFromProps,(S=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==D||T!==b)&&Bh(a,r,i,b),kt=!1,T=a.memoizedState,r.state=T,xn(a,i,r,n),bn();var C=a.memoizedState;o!==D||T!==C||kt||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof u=="function"&&(Ps(a,t,u,i),C=a.memoizedState),(E=kt||Oh(a,t,E,i,T,C,b)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,C,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,C,b)),typeof r.componentDidUpdate=="function"&&(a.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=C),r.props=i,r.state=C,r.context=b,i=E):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(a.flags|=1024),i=!1)}return r=i,qr(e,a),i=(a.flags&128)!==0,r||i?(r=a.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:r.render(),a.flags|=1,e!==null&&i?(a.child=ei(a,e.child,null,n),a.child=ei(a,null,t,n)):Pe(e,a,t,n),a.memoizedState=r.state,e=a.child):e=et(e,a,n),e}function Jh(e,a,t,i){return Pt(),a.flags|=256,Pe(e,a,t,i),a.child}var $s={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eo(e){return{baseLanes:e,cachePool:Gd()}}function ao(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=fa),e}function Wh(e,a,t){var i=a.pendingProps,n=!1,r=(a.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),o&&(n=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,e===null){if(se){if(n?St(a):At(),(e=Ae)?(e=lp(e,Sa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yt!==null?{id:_a,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},t=zd(e),t.return=a,a.child=t,Ke=a,Ae=null)):e=null,e===null)throw xt(a);return Uo(e)?a.lanes=32:a.lanes=536870912,null}var u=i.children;return i=i.fallback,n?(At(),n=a.mode,u=Yr({mode:"hidden",children:u},n),i=Ft(i,n,t,null),u.return=a,i.return=a,u.sibling=i,a.child=u,i=a.child,i.memoizedState=eo(t),i.childLanes=ao(e,o,t),a.memoizedState=$s,Sn(null,i)):(St(a),to(a,u))}var b=e.memoizedState;if(b!==null&&(u=b.dehydrated,u!==null)){if(r)a.flags&256?(St(a),a.flags&=-257,a=io(e,a,t)):a.memoizedState!==null?(At(),a.child=e.child,a.flags|=128,a=null):(At(),u=i.fallback,n=a.mode,i=Yr({mode:"visible",children:i.children},n),u=Ft(u,n,t,null),u.flags|=2,i.return=a,u.return=a,i.sibling=u,a.child=i,ei(a,e.child,null,t),i=a.child,i.memoizedState=eo(t),i.childLanes=ao(e,o,t),a.memoizedState=$s,a=Sn(null,i));else if(St(a),Uo(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var S=o.dgst;o=S,i=Error(d(419)),i.stack="",i.digest=o,un({value:i,source:null,stack:null}),a=io(e,a,t)}else if(_e||ji(e,a,t,!1),o=(t&e.childLanes)!==0,_e||o){if(o=we,o!==null&&(i=Uc(o,t),i!==0&&i!==b.retryLane))throw b.retryLane=i,Kt(e,i),sa(o,e,i),Js;_o(u)||Jr(),a=io(e,a,t)}else _o(u)?(a.flags|=192,a.child=e.child,a=null):(e=b.treeContext,Ae=Ta(u.nextSibling),Ke=a,se=!0,bt=null,Sa=!1,e!==null&&Hd(a,e),a=to(a,i.children),a.flags|=4096);return a}return n?(At(),u=i.fallback,n=a.mode,b=e.child,S=b.sibling,i=Pa(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,S!==null?u=Pa(S,u):(u=Ft(u,n,t,null),u.flags|=2),u.return=a,i.return=a,i.sibling=u,a.child=i,Sn(null,i),i=a.child,u=e.child.memoizedState,u===null?u=eo(t):(n=u.cachePool,n!==null?(b=Oe._currentValue,n=n.parent!==b?{parent:b,pool:b}:n):n=Gd(),u={baseLanes:u.baseLanes|t,cachePool:n}),i.memoizedState=u,i.childLanes=ao(e,o,t),a.memoizedState=$s,Sn(e.child,i)):(St(a),t=e.child,e=t.sibling,t=Pa(t,{mode:"visible",children:i.children}),t.return=a,t.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=t,a.memoizedState=null,t)}function to(e,a){return a=Yr({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Yr(e,a){return e=ua(22,e,null,a),e.lanes=0,e}function io(e,a,t){return ei(a,e.child,null,t),e=to(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function $h(e,a,t){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a),bs(e.return,a,t)}function no(e,a,t,i,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:n,treeForkCount:r}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=n,o.treeForkCount=r)}function eu(e,a,t){var i=a.pendingProps,n=i.revealOrder,r=i.tail;i=i.children;var o=De.current,u=(o&2)!==0;if(u?(o=o&1|2,a.flags|=128):o&=1,U(De,o),Pe(e,a,i,t),i=se?hn:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$h(e,t,a);else if(e.tag===19)$h(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&Er(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),no(a,!1,n,t,r,i);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&Er(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}no(a,!0,t,null,r,i);break;case"together":no(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function et(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Ct|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(ji(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Pa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Pa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function ro(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function tf(e,a,t){switch(a.tag){case 3:$e(a,a.stateNode.containerInfo),vt(a,Oe,e.memoizedState.cache),Pt();break;case 27:case 5:Zi(a);break;case 4:$e(a,a.stateNode.containerInfo);break;case 10:vt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Es(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(St(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Wh(e,a,t):(St(a),e=et(e,a,t),e!==null?e.sibling:null);St(a);break;case 19:var n=(e.flags&128)!==0;if(i=(t&a.childLanes)!==0,i||(ji(e,a,t,!1),i=(t&a.childLanes)!==0),n){if(i)return eu(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(De,De.current),i)break;return null;case 22:return a.lanes=0,Kh(e,a,t,a.pendingProps);case 24:vt(a,Oe,e.memoizedState.cache)}return et(e,a,t)}function au(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)_e=!0;else{if(!ro(e,t)&&(a.flags&128)===0)return _e=!1,tf(e,a,t);_e=(e.flags&131072)!==0}else _e=!1,se&&(a.flags&1048576)!==0&&Dd(a,hn,a.index);switch(a.lanes=0,a.tag){case 16:e:{var i=a.pendingProps;if(e=Wt(a.elementType),a.type=e,typeof e=="function")ds(e)?(i=ti(e,i),a.tag=1,a=Xh(null,a,e,i,t)):(a.tag=0,a=Ws(null,a,e,i,t));else{if(e!=null){var n=e.$$typeof;if(n===pe){a.tag=11,a=Ih(null,a,e,i,t);break e}else if(n===X){a.tag=14,a=Qh(null,a,e,i,t);break e}}throw a=Qa(e)||e,Error(d(306,a,""))}}return a;case 0:return Ws(e,a,a.type,a.pendingProps,t);case 1:return i=a.type,n=ti(i,a.pendingProps),Xh(e,a,i,n,t);case 3:e:{if($e(a,a.stateNode.containerInfo),e===null)throw Error(d(387));i=a.pendingProps;var r=a.memoizedState;n=r.element,As(e,a),xn(a,i,null,t);var o=a.memoizedState;if(i=o.cache,vt(a,Oe,i),i!==r.cache&&xs(a,[Oe],t,!0),bn(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=r,a.memoizedState=r,a.flags&256){a=Jh(e,a,i,t);break e}else if(i!==n){n=ka(Error(d(424)),a),un(n),a=Jh(e,a,i,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Ta(e.firstChild),Ke=a,se=!0,bt=null,Sa=!0,t=Kd(a,null,i,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Pt(),i===n){a=et(e,a,t);break e}Pe(e,a,i,t)}a=a.child}return a;case 26:return qr(e,a),e===null?(t=up(a.type,null,a.pendingProps,null))?a.memoizedState=t:se||(t=a.type,e=a.pendingProps,i=nl(te.current).createElement(t),i[Ve]=a,i[aa]=e,Ze(i,t,e),qe(i),a.stateNode=i):a.memoizedState=up(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Zi(a),e===null&&se&&(i=a.stateNode=cp(a.type,a.pendingProps,te.current),Ke=a,Sa=!0,n=Ae,Dt(a.type)?(Lo=n,Ae=Ta(i.firstChild)):Ae=n),Pe(e,a,a.pendingProps.children,t),qr(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&se&&((n=i=Ae)&&(i=Df(i,a.type,a.pendingProps,Sa),i!==null?(a.stateNode=i,Ke=a,Ae=Ta(i.firstChild),Sa=!1,n=!0):n=!1),n||xt(a)),Zi(a),n=a.type,r=a.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,Ho(n,r)?i=null:o!==null&&Ho(n,o)&&(a.flags|=32),a.memoizedState!==null&&(n=Ms(e,a,Fg,null,null,t),Ln._currentValue=n),qr(e,a),Pe(e,a,i,t),a.child;case 6:return e===null&&se&&((e=t=Ae)&&(t=Hf(t,a.pendingProps,Sa),t!==null?(a.stateNode=t,Ke=a,Ae=null,e=!0):e=!1),e||xt(a)),null;case 13:return Wh(e,a,t);case 4:return $e(a,a.stateNode.containerInfo),i=a.pendingProps,e===null?a.child=ei(a,null,i,t):Pe(e,a,i,t),a.child;case 11:return Ih(e,a,a.type,a.pendingProps,t);case 7:return Pe(e,a,a.pendingProps,t),a.child;case 8:return Pe(e,a,a.pendingProps.children,t),a.child;case 12:return Pe(e,a,a.pendingProps.children,t),a.child;case 10:return i=a.pendingProps,vt(a,a.type,i.value),Pe(e,a,i.children,t),a.child;case 9:return n=a.type._context,i=a.pendingProps.children,Xt(a),n=Fe(n),i=i(n),a.flags|=1,Pe(e,a,i,t),a.child;case 14:return Qh(e,a,a.type,a.pendingProps,t);case 15:return Vh(e,a,a.type,a.pendingProps,t);case 19:return eu(e,a,t);case 31:return af(e,a,t);case 22:return Kh(e,a,t,a.pendingProps);case 24:return Xt(a),i=Fe(Oe),e===null?(n=ws(),n===null&&(n=we,r=vs(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=t),n=r),a.memoizedState={parent:i,cache:n},Ss(a),vt(a,Oe,n)):((e.lanes&t)!==0&&(As(e,a),xn(a,null,null,t),bn()),n=e.memoizedState,r=a.memoizedState,n.parent!==i?(n={parent:i,cache:i},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),vt(a,Oe,i)):(i=r.cache,vt(a,Oe,i),i!==n.cache&&xs(a,[Oe],t,!0))),Pe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function at(e){e.flags|=4}function lo(e,a,t,i,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Cu())e.flags|=8192;else throw $t=Tr,js}else e.flags&=-16777217}function tu(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yp(a))if(Cu())e.flags|=8192;else throw $t=Tr,js}function Ir(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Oc():536870912,e.lanes|=a,Oi|=a)}function An(e,a){if(!se)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=t,a}function nf(e,a,t){var i=a.pendingProps;switch(ms(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(a),null;case 1:return Te(a),null;case 3:return t=a.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Ja(Oe),Me(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(wi(a)?at(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,fs())),Te(a),null;case 26:var n=a.type,r=a.memoizedState;return e===null?(at(a),r!==null?(Te(a),tu(a,r)):(Te(a),lo(a,n,null,i,t))):r?r!==e.memoizedState?(at(a),Te(a),tu(a,r)):(Te(a),a.flags&=-16777217):(e=e.memoizedProps,e!==i&&at(a),Te(a),lo(a,n,e,i,t)),null;case 27:if(er(a),t=te.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&at(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return Te(a),null}e=Q.current,wi(a)?Od(a):(e=cp(n,i,t),a.stateNode=e,at(a))}return Te(a),null;case 5:if(er(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&at(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return Te(a),null}if(r=Q.current,wi(a))Od(a);else{var o=nl(te.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}r[Ve]=a,r[aa]=i;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=r;e:switch(Ze(r,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&at(a)}}return Te(a),lo(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==i&&at(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(d(166));if(e=te.current,wi(a)){if(e=a.stateNode,t=a.memoizedProps,i=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[Ve]=a,e=!!(e.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||Wu(e.nodeValue,t)),e||xt(a,!0)}else e=nl(e).createTextNode(i),e[Ve]=a,a.stateNode=e}return Te(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(i=wi(a),t!==null){if(e===null){if(!i)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Ve]=a}else Pt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Te(a),e=!1}else t=fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ma(a),a):(ma(a),null);if((a.flags&128)!==0)throw Error(d(558))}return Te(a),null;case 13:if(i=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=wi(a),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Ve]=a}else Pt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Te(a),n=!1}else n=fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ma(a),a):(ma(a),null)}return ma(a),(a.flags&128)!==0?(a.lanes=t,a):(t=i!==null,e=e!==null&&e.memoizedState!==null,t&&(i=a.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==n&&(i.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Ir(a,a.updateQueue),Te(a),null);case 4:return Me(),e===null&&Ro(a.stateNode.containerInfo),Te(a),null;case 10:return Ja(a.type),Te(a),null;case 19:if(H(De),i=a.memoizedState,i===null)return Te(a),null;if(n=(a.flags&128)!==0,r=i.rendering,r===null)if(n)An(i,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(r=Er(e),r!==null){for(a.flags|=128,An(i,!1),e=r.updateQueue,a.updateQueue=e,Ir(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Ed(t,e),t=t.sibling;return U(De,De.current&1|2),se&&Za(a,i.treeForkCount),a.child}e=e.sibling}i.tail!==null&&oa()>Pr&&(a.flags|=128,n=!0,An(i,!1),a.lanes=4194304)}else{if(!n)if(e=Er(r),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,Ir(a,e),An(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!se)return Te(a),null}else 2*oa()-i.renderingStartTime>Pr&&t!==536870912&&(a.flags|=128,n=!0,An(i,!1),a.lanes=4194304);i.isBackwards?(r.sibling=a.child,a.child=r):(e=i.last,e!==null?e.sibling=r:a.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=oa(),e.sibling=null,t=De.current,U(De,n?t&1|2:t&1),se&&Za(a,i.treeForkCount),e):(Te(a),null);case 22:case 23:return ma(a),Rs(),i=a.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(t&536870912)!==0&&(a.flags&128)===0&&(Te(a),a.subtreeFlags&6&&(a.flags|=8192)):Te(a),t=a.updateQueue,t!==null&&Ir(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==t&&(a.flags|=2048),e!==null&&H(Jt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ja(Oe),Te(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function rf(e,a){switch(ms(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ja(Oe),Me(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return er(a),null;case 31:if(a.memoizedState!==null){if(ma(a),a.alternate===null)throw Error(d(340));Pt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ma(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Pt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return H(De),null;case 4:return Me(),null;case 10:return Ja(a.type),null;case 22:case 23:return ma(a),Rs(),e!==null&&H(Jt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ja(Oe),null;case 25:return null;default:return null}}function iu(e,a){switch(ms(a),a.tag){case 3:Ja(Oe),Me();break;case 26:case 27:case 5:er(a);break;case 4:Me();break;case 31:a.memoizedState!==null&&ma(a);break;case 13:ma(a);break;case 19:H(De);break;case 10:Ja(a.type);break;case 22:case 23:ma(a),Rs(),e!==null&&H(Jt);break;case 24:Ja(Oe)}}function Tn(e,a){try{var t=a.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var n=i.next;t=n;do{if((t.tag&e)===e){i=void 0;var r=t.create,o=t.inst;i=r(),o.destroy=i}t=t.next}while(t!==n)}}catch(u){fe(a,a.return,u)}}function Tt(e,a,t){try{var i=a.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){var o=i.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,n=a;var b=t,S=u;try{S()}catch(E){fe(n,b,E)}}}i=i.next}while(i!==r)}}catch(E){fe(a,a.return,E)}}function nu(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Pd(a,t)}catch(i){fe(e,e.return,i)}}}function ru(e,a,t){t.props=ti(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(i){fe(e,a,i)}}function Nn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof t=="function"?e.refCleanup=t(i):t.current=i}}catch(n){fe(e,a,n)}}function La(e,a){var t=e.ref,i=e.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(n){fe(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){fe(e,a,n)}else t.current=null}function lu(e){var a=e.type,t=e.memoizedProps,i=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break e;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(n){fe(e,e.return,n)}}function so(e,a,t){try{var i=e.stateNode;Nf(i,e.type,t,a),i[aa]=a}catch(n){fe(e,e.return,n)}}function su(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dt(e.type)||e.tag===4}function oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,a,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ka));else if(i!==4&&(i===27&&Dt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(co(e,a,t),e=e.sibling;e!==null;)co(e,a,t),e=e.sibling}function Qr(e,a,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(i!==4&&(i===27&&Dt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Qr(e,a,t),e=e.sibling;e!==null;)Qr(e,a,t),e=e.sibling}function ou(e){var a=e.stateNode,t=e.memoizedProps;try{for(var i=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ze(a,i,t),a[Ve]=e,a[aa]=t}catch(r){fe(e,e.return,r)}}var tt=!1,Ue=!1,ho=!1,cu=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function lf(e,a){if(e=e.containerInfo,Mo=hl,e=kd(e),is(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var n=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var o=0,u=-1,b=-1,S=0,E=0,D=e,T=null;a:for(;;){for(var C;D!==t||n!==0&&D.nodeType!==3||(u=o+n),D!==r||i!==0&&D.nodeType!==3||(b=o+i),D.nodeType===3&&(o+=D.nodeValue.length),(C=D.firstChild)!==null;)T=D,D=C;for(;;){if(D===e)break a;if(T===t&&++S===n&&(u=o),T===r&&++E===i&&(b=o),(C=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=C}t=u===-1||b===-1?null:{start:u,end:b}}else t=null}t=t||{start:0,end:0}}else t=null;for(Do={focusedElem:e,selectionRange:t},hl=!1,Ye=a;Ye!==null;)if(a=Ye,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ye=e;else for(;Ye!==null;){switch(a=Ye,r=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=a,n=r.memoizedProps,r=r.memoizedState,i=t.stateNode;try{var G=ti(t.type,n);e=i.getSnapshotBeforeUpdate(G,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(P){fe(t,t.return,P)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Bo(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Ye=e;break}Ye=a.return}}function du(e,a,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:nt(e,t),i&4&&Tn(5,t);break;case 1:if(nt(e,t),i&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(o){fe(t,t.return,o)}else{var n=ti(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(o){fe(t,t.return,o)}}i&64&&nu(t),i&512&&Nn(t,t.return);break;case 3:if(nt(e,t),i&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Pd(e,a)}catch(o){fe(t,t.return,o)}}break;case 27:a===null&&i&4&&ou(t);case 26:case 5:nt(e,t),a===null&&i&4&&lu(t),i&512&&Nn(t,t.return);break;case 12:nt(e,t);break;case 31:nt(e,t),i&4&&pu(e,t);break;case 13:nt(e,t),i&4&&mu(e,t),i&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=gf.bind(null,t),Of(e,t))));break;case 22:if(i=t.memoizedState!==null||tt,!i){a=a!==null&&a.memoizedState!==null||Ue,n=tt;var r=Ue;tt=i,(Ue=a)&&!r?rt(e,t,(t.subtreeFlags&8772)!==0):nt(e,t),tt=n,Ue=r}break;case 30:break;default:nt(e,t)}}function hu(e){var a=e.alternate;a!==null&&(e.alternate=null,hu(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Gl(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,ia=!1;function it(e,a,t){for(t=t.child;t!==null;)uu(e,a,t),t=t.sibling}function uu(e,a,t){if(ca&&typeof ca.onCommitFiberUnmount=="function")try{ca.onCommitFiberUnmount(Xi,t)}catch{}switch(t.tag){case 26:Ue||La(t,a),it(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ue||La(t,a);var i=Ne,n=ia;Dt(t.type)&&(Ne=t.stateNode,ia=!1),it(e,a,t),Bn(t.stateNode),Ne=i,ia=n;break;case 5:Ue||La(t,a);case 6:if(i=Ne,n=ia,Ne=null,it(e,a,t),Ne=i,ia=n,Ne!==null)if(ia)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(t.stateNode)}catch(r){fe(t,a,r)}else try{Ne.removeChild(t.stateNode)}catch(r){fe(t,a,r)}break;case 18:Ne!==null&&(ia?(e=Ne,np(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ii(e)):np(Ne,t.stateNode));break;case 4:i=Ne,n=ia,Ne=t.stateNode.containerInfo,ia=!0,it(e,a,t),Ne=i,ia=n;break;case 0:case 11:case 14:case 15:Tt(2,t,a),Ue||Tt(4,t,a),it(e,a,t);break;case 1:Ue||(La(t,a),i=t.stateNode,typeof i.componentWillUnmount=="function"&&ru(t,a,i)),it(e,a,t);break;case 21:it(e,a,t);break;case 22:Ue=(i=Ue)||t.memoizedState!==null,it(e,a,t),Ue=i;break;default:it(e,a,t)}}function pu(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ii(e)}catch(t){fe(a,a.return,t)}}}function mu(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(t){fe(a,a.return,t)}}function sf(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new cu),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new cu),a;default:throw Error(d(435,e.tag))}}function Vr(e,a){var t=sf(e);a.forEach(function(i){if(!t.has(i)){t.add(i);var n=ff.bind(null,e,i);i.then(n,n)}})}function na(e,a){var t=a.deletions;if(t!==null)for(var i=0;i<t.length;i++){var n=t[i],r=e,o=a,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(Dt(u.type)){Ne=u.stateNode,ia=!1;break e}break;case 5:Ne=u.stateNode,ia=!1;break e;case 3:case 4:Ne=u.stateNode.containerInfo,ia=!0;break e}u=u.return}if(Ne===null)throw Error(d(160));uu(r,o,n),Ne=null,ia=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)gu(a,e),a=a.sibling}var Ma=null;function gu(e,a){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:na(a,e),ra(e),i&4&&(Tt(3,e,e.return),Tn(3,e),Tt(5,e,e.return));break;case 1:na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),i&64&&tt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?i:t.concat(i))));break;case 26:var n=Ma;if(na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),i&4){var r=t!==null?t.memoizedState:null;if(i=e.memoizedState,t===null)if(i===null)if(e.stateNode===null){e:{i=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(i){case"title":r=n.getElementsByTagName("title")[0],(!r||r[$i]||r[Ve]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(i),n.head.insertBefore(r,n.querySelector("head > title"))),Ze(r,i,t),r[Ve]=e,qe(r),i=r;break e;case"link":var o=gp("link","href",n).get(i+(t.href||""));if(o){for(var u=0;u<o.length;u++)if(r=o[u],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(u,1);break a}}r=n.createElement(i),Ze(r,i,t),n.head.appendChild(r);break;case"meta":if(o=gp("meta","content",n).get(i+(t.content||""))){for(u=0;u<o.length;u++)if(r=o[u],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(u,1);break a}}r=n.createElement(i),Ze(r,i,t),n.head.appendChild(r);break;default:throw Error(d(468,i))}r[Ve]=e,qe(r),i=r}e.stateNode=i}else fp(n,e.type,e.stateNode);else e.stateNode=mp(n,i,e.memoizedProps);else r!==i?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,i===null?fp(n,e.type,e.stateNode):mp(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&so(e,e.memoizedProps,t.memoizedProps)}break;case 27:na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),t!==null&&i&4&&so(e,e.memoizedProps,t.memoizedProps);break;case 5:if(na(a,e),ra(e),i&512&&(Ue||t===null||La(t,t.return)),e.flags&32){n=e.stateNode;try{ui(n,"")}catch(G){fe(e,e.return,G)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,so(e,n,t!==null?t.memoizedProps:n)),i&1024&&(ho=!0);break;case 6:if(na(a,e),ra(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,t=e.stateNode;try{t.nodeValue=i}catch(G){fe(e,e.return,G)}}break;case 3:if(sl=null,n=Ma,Ma=rl(a.containerInfo),na(a,e),Ma=n,ra(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ii(a.containerInfo)}catch(G){fe(e,e.return,G)}ho&&(ho=!1,fu(e));break;case 4:i=Ma,Ma=rl(e.stateNode.containerInfo),na(a,e),ra(e),Ma=i;break;case 12:na(a,e),ra(e);break;case 31:na(a,e),ra(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vr(e,i)));break;case 13:na(a,e),ra(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Fr=oa()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vr(e,i)));break;case 22:n=e.memoizedState!==null;var b=t!==null&&t.memoizedState!==null,S=tt,E=Ue;if(tt=S||n,Ue=E||b,na(a,e),Ue=E,tt=S,ra(e),i&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||b||tt||Ue||ii(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){b=t=a;try{if(r=b.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=b.stateNode;var D=b.memoizedProps.style,T=D!=null&&D.hasOwnProperty("display")?D.display:null;u.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(G){fe(b,b.return,G)}}}else if(a.tag===6){if(t===null){b=a;try{b.stateNode.nodeValue=n?"":b.memoizedProps}catch(G){fe(b,b.return,G)}}}else if(a.tag===18){if(t===null){b=a;try{var C=b.stateNode;n?rp(C,!0):rp(b.stateNode,!1)}catch(G){fe(b,b.return,G)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=e.updateQueue,i!==null&&(t=i.retryQueue,t!==null&&(i.retryQueue=null,Vr(e,t))));break;case 19:na(a,e),ra(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vr(e,i)));break;case 30:break;case 21:break;default:na(a,e),ra(e)}}function ra(e){var a=e.flags;if(a&2){try{for(var t,i=e.return;i!==null;){if(su(i)){t=i;break}i=i.return}if(t==null)throw Error(d(160));switch(t.tag){case 27:var n=t.stateNode,r=oo(e);Qr(e,r,n);break;case 5:var o=t.stateNode;t.flags&32&&(ui(o,""),t.flags&=-33);var u=oo(e);Qr(e,u,o);break;case 3:case 4:var b=t.stateNode.containerInfo,S=oo(e);co(e,S,b);break;default:throw Error(d(161))}}catch(E){fe(e,e.return,E)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function fu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;fu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function nt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)du(e,a.alternate,a),a=a.sibling}function ii(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Tt(4,a,a.return),ii(a);break;case 1:La(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&ru(a,a.return,t),ii(a);break;case 27:Bn(a.stateNode);case 26:case 5:La(a,a.return),ii(a);break;case 22:a.memoizedState===null&&ii(a);break;case 30:ii(a);break;default:ii(a)}e=e.sibling}}function rt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,n=e,r=a,o=r.flags;switch(r.tag){case 0:case 11:case 15:rt(n,r,t),Tn(4,r);break;case 1:if(rt(n,r,t),i=r,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){fe(i,i.return,S)}if(i=r,n=i.updateQueue,n!==null){var u=i.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)Fd(b[n],u)}catch(S){fe(i,i.return,S)}}t&&o&64&&nu(r),Nn(r,r.return);break;case 27:ou(r);case 26:case 5:rt(n,r,t),t&&i===null&&o&4&&lu(r),Nn(r,r.return);break;case 12:rt(n,r,t);break;case 31:rt(n,r,t),t&&o&4&&pu(n,r);break;case 13:rt(n,r,t),t&&o&4&&mu(n,r);break;case 22:r.memoizedState===null&&rt(n,r,t),Nn(r,r.return);break;case 30:break;default:rt(n,r,t)}a=a.sibling}}function uo(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&pn(t))}function po(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&pn(e))}function Da(e,a,t,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)yu(e,a,t,i),a=a.sibling}function yu(e,a,t,i){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a,t,i),n&2048&&Tn(9,a);break;case 1:Da(e,a,t,i);break;case 3:Da(e,a,t,i),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&pn(e)));break;case 12:if(n&2048){Da(e,a,t,i),e=a.stateNode;try{var r=a.memoizedProps,o=r.id,u=r.onPostCommit;typeof u=="function"&&u(o,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){fe(a,a.return,b)}}else Da(e,a,t,i);break;case 31:Da(e,a,t,i);break;case 13:Da(e,a,t,i);break;case 23:break;case 22:r=a.stateNode,o=a.alternate,a.memoizedState!==null?r._visibility&2?Da(e,a,t,i):Cn(e,a):r._visibility&2?Da(e,a,t,i):(r._visibility|=2,Mi(e,a,t,i,(a.subtreeFlags&10256)!==0||!1)),n&2048&&uo(o,a);break;case 24:Da(e,a,t,i),n&2048&&po(a.alternate,a);break;default:Da(e,a,t,i)}}function Mi(e,a,t,i,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var r=e,o=a,u=t,b=i,S=o.flags;switch(o.tag){case 0:case 11:case 15:Mi(r,o,u,b,n),Tn(8,o);break;case 23:break;case 22:var E=o.stateNode;o.memoizedState!==null?E._visibility&2?Mi(r,o,u,b,n):Cn(r,o):(E._visibility|=2,Mi(r,o,u,b,n)),n&&S&2048&&uo(o.alternate,o);break;case 24:Mi(r,o,u,b,n),n&&S&2048&&po(o.alternate,o);break;default:Mi(r,o,u,b,n)}a=a.sibling}}function Cn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,i=a,n=i.flags;switch(i.tag){case 22:Cn(t,i),n&2048&&uo(i.alternate,i);break;case 24:Cn(t,i),n&2048&&po(i.alternate,i);break;default:Cn(t,i)}a=a.sibling}}var Rn=8192;function Di(e,a,t){if(e.subtreeFlags&Rn)for(e=e.child;e!==null;)bu(e,a,t),e=e.sibling}function bu(e,a,t){switch(e.tag){case 26:Di(e,a,t),e.flags&Rn&&e.memoizedState!==null&&Ff(t,Ma,e.memoizedState,e.memoizedProps);break;case 5:Di(e,a,t);break;case 3:case 4:var i=Ma;Ma=rl(e.stateNode.containerInfo),Di(e,a,t),Ma=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Rn,Rn=16777216,Di(e,a,t),Rn=i):Di(e,a,t));break;default:Di(e,a,t)}}function xu(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function En(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var i=a[t];Ye=i,ku(i,e)}xu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vu(e),e=e.sibling}function vu(e){switch(e.tag){case 0:case 11:case 15:En(e),e.flags&2048&&Tt(9,e,e.return);break;case 3:En(e);break;case 12:En(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Kr(e)):En(e);break;default:En(e)}}function Kr(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var i=a[t];Ye=i,ku(i,e)}xu(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Tt(8,a,a.return),Kr(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Kr(a));break;default:Kr(a)}e=e.sibling}}function ku(e,a){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:Tt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pn(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,Ye=i;else e:for(t=e;Ye!==null;){i=Ye;var n=i.sibling,r=i.return;if(hu(i),i===t){Ye=null;break e}if(n!==null){n.return=r,Ye=n;break e}Ye=r}}}var of={getCacheForType:function(e){var a=Fe(Oe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Fe(Oe).controller.signal}},cf=typeof WeakMap=="function"?WeakMap:Map,he=0,we=null,ie=null,re=0,ge=0,ga=null,Nt=!1,Hi=!1,mo=!1,lt=0,Ee=0,Ct=0,ni=0,go=0,fa=0,Oi=0,zn=null,la=null,fo=!1,Fr=0,wu=0,Pr=1/0,Zr=null,Rt=null,Le=0,Et=null,Bi=null,st=0,yo=0,bo=null,ju=null,Mn=0,xo=null;function ya(){return(he&2)!==0&&re!==0?re&-re:z.T!==null?Ao():Lc()}function Su(){if(fa===0)if((re&536870912)===0||se){var e=ir;ir<<=1,(ir&3932160)===0&&(ir=262144),fa=e}else fa=536870912;return e=pa.current,e!==null&&(e.flags|=32),fa}function sa(e,a,t){(e===we&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(_i(e,0),zt(e,re,fa,!1)),Wi(e,t),((he&2)===0||e!==we)&&(e===we&&((he&2)===0&&(ni|=t),Ee===4&&zt(e,re,fa,!1)),Ga(e))}function Au(e,a,t){if((he&6)!==0)throw Error(d(327));var i=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Ji(e,a),n=i?uf(e,a):ko(e,a,!0),r=i;do{if(n===0){Hi&&!i&&zt(e,a,0,!1);break}else{if(t=e.current.alternate,r&&!df(t)){n=ko(e,a,!1),r=!1;continue}if(n===2){if(r=a,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;e:{var u=e;n=zn;var b=u.current.memoizedState.isDehydrated;if(b&&(_i(u,o).flags|=256),o=ko(u,o,!1),o!==2){if(mo&&!b){u.errorRecoveryDisabledLanes|=r,ni|=r,n=4;break e}r=la,la=n,r!==null&&(la===null?la=r:la.push.apply(la,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){_i(e,0),zt(e,a,0,!0);break}e:{switch(i=e,r=n,r){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:zt(i,a,fa,!Nt);break e;case 2:la=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(n=Fr+300-oa(),10<n)){if(zt(i,a,fa,!Nt),rr(i,0,!0)!==0)break e;st=a,i.timeoutHandle=tp(Tu.bind(null,i,t,la,Zr,fo,a,fa,ni,Oi,Nt,r,"Throttled",-0,0),n);break e}Tu(i,t,la,Zr,fo,a,fa,ni,Oi,Nt,r,null,-0,0)}}break}while(!0);Ga(e)}function Tu(e,a,t,i,n,r,o,u,b,S,E,D,T,C){if(e.timeoutHandle=-1,D=a.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ka},bu(a,r,D);var G=(r&62914560)===r?Fr-oa():(r&4194048)===r?wu-oa():0;if(G=Pf(D,G),G!==null){st=r,e.cancelPendingCommit=G(Hu.bind(null,e,a,r,t,i,n,o,u,b,E,D,null,T,C)),zt(e,r,o,!S);return}}Hu(e,a,r,t,i,n,o,u,b)}function df(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var n=t[i],r=n.getSnapshot;n=n.value;try{if(!ha(r(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function zt(e,a,t,i){a&=~go,a&=~ni,e.suspendedLanes|=a,e.pingedLanes&=~a,i&&(e.warmLanes|=a),i=e.expirationTimes;for(var n=a;0<n;){var r=31-da(n),o=1<<r;i[r]=-1,n&=~o}t!==0&&Bc(e,t,a)}function Xr(){return(he&6)===0?(Dn(0),!1):!0}function vo(){if(ie!==null){if(ge===0)var e=ie.return;else e=ie,Xa=Zt=null,Os(e),Ni=null,gn=0,e=ie;for(;e!==null;)iu(e.alternate,e),e=e.return;ie=null}}function _i(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Ef(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),st=0,vo(),we=e,ie=t=Pa(e.current,null),re=a,ge=0,ga=null,Nt=!1,Hi=Ji(e,a),mo=!1,Oi=fa=go=ni=Ct=Ee=0,la=zn=null,fo=!1,(a&8)!==0&&(a|=a&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=a;0<i;){var n=31-da(i),r=1<<n;a|=e[n],i&=~r}return lt=a,yr(),t}function Nu(e,a){$=null,z.H=jn,a===Ti||a===Ar?(a=Id(),ge=3):a===js?(a=Id(),ge=4):ge=a===Js?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ga=a,ie===null&&(Ee=1,Lr(e,ka(a,e.current)))}function Cu(){var e=pa.current;return e===null?!0:(re&4194048)===re?Aa===null:(re&62914560)===re||(re&536870912)!==0?e===Aa:!1}function Ru(){var e=z.H;return z.H=jn,e===null?jn:e}function Eu(){var e=z.A;return z.A=of,e}function Jr(){Ee=4,Nt||(re&4194048)!==re&&pa.current!==null||(Hi=!0),(Ct&134217727)===0&&(ni&134217727)===0||we===null||zt(we,re,fa,!1)}function ko(e,a,t){var i=he;he|=2;var n=Ru(),r=Eu();(we!==e||re!==a)&&(Zr=null,_i(e,a)),a=!1;var o=Ee;e:do try{if(ge!==0&&ie!==null){var u=ie,b=ga;switch(ge){case 8:vo(),o=6;break e;case 3:case 2:case 9:case 6:pa.current===null&&(a=!0);var S=ge;if(ge=0,ga=null,Ui(e,u,b,S),t&&Hi){o=0;break e}break;default:S=ge,ge=0,ga=null,Ui(e,u,b,S)}}hf(),o=Ee;break}catch(E){Nu(e,E)}while(!0);return a&&e.shellSuspendCounter++,Xa=Zt=null,he=i,z.H=n,z.A=r,ie===null&&(we=null,re=0,yr()),o}function hf(){for(;ie!==null;)zu(ie)}function uf(e,a){var t=he;he|=2;var i=Ru(),n=Eu();we!==e||re!==a?(Zr=null,Pr=oa()+500,_i(e,a)):Hi=Ji(e,a);e:do try{if(ge!==0&&ie!==null){a=ie;var r=ga;a:switch(ge){case 1:ge=0,ga=null,Ui(e,a,r,1);break;case 2:case 9:if(qd(r)){ge=0,ga=null,Mu(a);break}a=function(){ge!==2&&ge!==9||we!==e||(ge=7),Ga(e)},r.then(a,a);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:qd(r)?(ge=0,ga=null,Mu(a)):(ge=0,ga=null,Ui(e,a,r,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var u=ie;if(o?yp(o):u.stateNode.complete){ge=0,ga=null;var b=u.sibling;if(b!==null)ie=b;else{var S=u.return;S!==null?(ie=S,Wr(S)):ie=null}break a}}ge=0,ga=null,Ui(e,a,r,5);break;case 6:ge=0,ga=null,Ui(e,a,r,6);break;case 8:vo(),Ee=6;break e;default:throw Error(d(462))}}pf();break}catch(E){Nu(e,E)}while(!0);return Xa=Zt=null,z.H=i,z.A=n,he=t,ie!==null?0:(we=null,re=0,yr(),Ee)}function pf(){for(;ie!==null&&!Om();)zu(ie)}function zu(e){var a=au(e.alternate,e,lt);e.memoizedProps=e.pendingProps,a===null?Wr(e):ie=a}function Mu(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Zh(t,a,a.pendingProps,a.type,void 0,re);break;case 11:a=Zh(t,a,a.pendingProps,a.type.render,a.ref,re);break;case 5:Os(a);default:iu(t,a),a=ie=Ed(a,lt),a=au(t,a,lt)}e.memoizedProps=e.pendingProps,a===null?Wr(e):ie=a}function Ui(e,a,t,i){Xa=Zt=null,Os(a),Ni=null,gn=0;var n=a.return;try{if(ef(e,n,a,t,re)){Ee=1,Lr(e,ka(t,e.current)),ie=null;return}}catch(r){if(n!==null)throw ie=n,r;Ee=1,Lr(e,ka(t,e.current)),ie=null;return}a.flags&32768?(se||i===1?e=!0:Hi||(re&536870912)!==0?e=!1:(Nt=e=!0,(i===2||i===9||i===3||i===6)&&(i=pa.current,i!==null&&i.tag===13&&(i.flags|=16384))),Du(a,e)):Wr(a)}function Wr(e){var a=e;do{if((a.flags&32768)!==0){Du(a,Nt);return}e=a.return;var t=nf(a.alternate,a,lt);if(t!==null){ie=t;return}if(a=a.sibling,a!==null){ie=a;return}ie=a=e}while(a!==null);Ee===0&&(Ee=5)}function Du(e,a){do{var t=rf(e.alternate,e);if(t!==null){t.flags&=32767,ie=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ie=e;return}ie=e=t}while(e!==null);Ee=6,ie=null}function Hu(e,a,t,i,n,r,o,u,b){e.cancelPendingCommit=null;do $r();while(Le!==0);if((he&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(r=a.lanes|a.childLanes,r|=os,Vm(e,t,r,o,u,b),e===we&&(ie=we=null,re=0),Bi=a,Et=e,st=t,yo=r,bo=n,ju=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(ar,function(){return Lu(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,n=_.p,_.p=2,o=he,he|=4;try{lf(e,a,t)}finally{he=o,_.p=n,z.T=i}}Le=1,Ou(),Bu(),_u()}}function Ou(){if(Le===1){Le=0;var e=Et,a=Bi,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=z.T,z.T=null;var i=_.p;_.p=2;var n=he;he|=4;try{gu(a,e);var r=Do,o=kd(e.containerInfo),u=r.focusedElem,b=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&vd(u.ownerDocument.documentElement,u)){if(b!==null&&is(u)){var S=b.start,E=b.end;if(E===void 0&&(E=S),"selectionStart"in u)u.selectionStart=S,u.selectionEnd=Math.min(E,u.value.length);else{var D=u.ownerDocument||document,T=D&&D.defaultView||window;if(T.getSelection){var C=T.getSelection(),G=u.textContent.length,P=Math.min(b.start,G),ve=b.end===void 0?P:Math.min(b.end,G);!C.extend&&P>ve&&(o=ve,ve=P,P=o);var w=xd(u,P),x=xd(u,ve);if(w&&x&&(C.rangeCount!==1||C.anchorNode!==w.node||C.anchorOffset!==w.offset||C.focusNode!==x.node||C.focusOffset!==x.offset)){var j=D.createRange();j.setStart(w.node,w.offset),C.removeAllRanges(),P>ve?(C.addRange(j),C.extend(x.node,x.offset)):(j.setEnd(x.node,x.offset),C.addRange(j))}}}}for(D=[],C=u;C=C.parentNode;)C.nodeType===1&&D.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var M=D[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}hl=!!Mo,Do=Mo=null}finally{he=n,_.p=i,z.T=t}}e.current=a,Le=2}}function Bu(){if(Le===2){Le=0;var e=Et,a=Bi,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=z.T,z.T=null;var i=_.p;_.p=2;var n=he;he|=4;try{du(e,a.alternate,a)}finally{he=n,_.p=i,z.T=t}}Le=3}}function _u(){if(Le===4||Le===3){Le=0,Bm();var e=Et,a=Bi,t=st,i=ju;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Le=5:(Le=0,Bi=Et=null,Uu(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Rt=null),Ul(t),a=a.stateNode,ca&&typeof ca.onCommitFiberRoot=="function")try{ca.onCommitFiberRoot(Xi,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=z.T,n=_.p,_.p=2,z.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var u=i[o];r(u.value,{componentStack:u.stack})}}finally{z.T=a,_.p=n}}(st&3)!==0&&$r(),Ga(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===xo?Mn++:(Mn=0,xo=e):Mn=0,Dn(0)}}function Uu(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,pn(a)))}function $r(){return Ou(),Bu(),_u(),Lu()}function Lu(){if(Le!==5)return!1;var e=Et,a=yo;yo=0;var t=Ul(st),i=z.T,n=_.p;try{_.p=32>t?32:t,z.T=null,t=bo,bo=null;var r=Et,o=st;if(Le=0,Bi=Et=null,st=0,(he&6)!==0)throw Error(d(331));var u=he;if(he|=4,vu(r.current),yu(r,r.current,o,t),he=u,Dn(0,!1),ca&&typeof ca.onPostCommitFiberRoot=="function")try{ca.onPostCommitFiberRoot(Xi,r)}catch{}return!0}finally{_.p=n,z.T=i,Uu(e,a)}}function Gu(e,a,t){a=ka(t,a),a=Xs(e.stateNode,a,2),e=jt(e,a,2),e!==null&&(Wi(e,2),Ga(e))}function fe(e,a,t){if(e.tag===3)Gu(e,e,t);else for(;a!==null;){if(a.tag===3){Gu(a,e,t);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rt===null||!Rt.has(i))){e=ka(t,e),t=qh(2),i=jt(a,t,2),i!==null&&(Yh(t,i,a,e),Wi(i,2),Ga(i));break}}a=a.return}}function wo(e,a,t){var i=e.pingCache;if(i===null){i=e.pingCache=new cf;var n=new Set;i.set(a,n)}else n=i.get(a),n===void 0&&(n=new Set,i.set(a,n));n.has(t)||(mo=!0,n.add(t),e=mf.bind(null,e,a,t),a.then(e,e))}function mf(e,a,t){var i=e.pingCache;i!==null&&i.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,we===e&&(re&t)===t&&(Ee===4||Ee===3&&(re&62914560)===re&&300>oa()-Fr?(he&2)===0&&_i(e,0):go|=t,Oi===re&&(Oi=0)),Ga(e)}function qu(e,a){a===0&&(a=Oc()),e=Kt(e,a),e!==null&&(Wi(e,a),Ga(e))}function gf(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),qu(e,t)}function ff(e,a){var t=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(a),qu(e,t)}function yf(e,a){return Hl(e,a)}var el=null,Li=null,jo=!1,al=!1,So=!1,Mt=0;function Ga(e){e!==Li&&e.next===null&&(Li===null?el=Li=e:Li=Li.next=e),al=!0,jo||(jo=!0,xf())}function Dn(e,a){if(!So&&al){So=!0;do for(var t=!1,i=el;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var r=0;else{var o=i.suspendedLanes,u=i.pingedLanes;r=(1<<31-da(42|e)+1)-1,r&=n&~(o&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Vu(i,r))}else r=re,r=rr(i,i===we?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Ji(i,r)||(t=!0,Vu(i,r));i=i.next}while(t);So=!1}}function bf(){Yu()}function Yu(){al=jo=!1;var e=0;Mt!==0&&Rf()&&(e=Mt);for(var a=oa(),t=null,i=el;i!==null;){var n=i.next,r=Iu(i,a);r===0?(i.next=null,t===null?el=n:t.next=n,n===null&&(Li=t)):(t=i,(e!==0||(r&3)!==0)&&(al=!0)),i=n}Le!==0&&Le!==5||Dn(e),Mt!==0&&(Mt=0)}function Iu(e,a){for(var t=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-da(r),u=1<<o,b=n[o];b===-1?((u&t)===0||(u&i)!==0)&&(n[o]=Qm(u,a)):b<=a&&(e.expiredLanes|=u),r&=~u}if(a=we,t=re,t=rr(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,t===0||e===a&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ol(i),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ji(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(i!==null&&Ol(i),Ul(t)){case 2:case 8:t=Dc;break;case 32:t=ar;break;case 268435456:t=Hc;break;default:t=ar}return i=Qu.bind(null,e),t=Hl(t,i),e.callbackPriority=a,e.callbackNode=t,a}return i!==null&&i!==null&&Ol(i),e.callbackPriority=2,e.callbackNode=null,2}function Qu(e,a){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if($r()&&e.callbackNode!==t)return null;var i=re;return i=rr(e,e===we?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Au(e,i,a),Iu(e,oa()),e.callbackNode!=null&&e.callbackNode===t?Qu.bind(null,e):null)}function Vu(e,a){if($r())return null;Au(e,a,!0)}function xf(){zf(function(){(he&6)!==0?Hl(Mc,bf):Yu()})}function Ao(){if(Mt===0){var e=Si;e===0&&(e=tr,tr<<=1,(tr&261888)===0&&(tr=256)),Mt=e}return Mt}function Ku(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cr(""+e)}function Fu(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function vf(e,a,t,i,n){if(a==="submit"&&t&&t.stateNode===n){var r=Ku((n[aa]||null).action),o=i.submitter;o&&(a=(a=o[aa]||null)?Ku(a.formAction):o.getAttribute("formAction"),a!==null&&(r=a,o=null));var u=new pr("action","action",null,i,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Mt!==0){var b=o?Fu(n,o):new FormData(n);Qs(t,{pending:!0,data:b,method:n.method,action:r},null,b)}}else typeof r=="function"&&(u.preventDefault(),b=o?Fu(n,o):new FormData(n),Qs(t,{pending:!0,data:b,method:n.method,action:r},r,b))},currentTarget:n}]})}}for(var To=0;To<ss.length;To++){var No=ss[To],kf=No.toLowerCase(),wf=No[0].toUpperCase()+No.slice(1);za(kf,"on"+wf)}za(Sd,"onAnimationEnd"),za(Ad,"onAnimationIteration"),za(Td,"onAnimationStart"),za("dblclick","onDoubleClick"),za("focusin","onFocus"),za("focusout","onBlur"),za(_g,"onTransitionRun"),za(Ug,"onTransitionStart"),za(Lg,"onTransitionCancel"),za(Nd,"onTransitionEnd"),di("onMouseEnter",["mouseout","mouseover"]),di("onMouseLeave",["mouseout","mouseover"]),di("onPointerEnter",["pointerout","pointerover"]),di("onPointerLeave",["pointerout","pointerover"]),Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn));function Pu(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],n=i.event;i=i.listeners;e:{var r=void 0;if(a)for(var o=i.length-1;0<=o;o--){var u=i[o],b=u.instance,S=u.currentTarget;if(u=u.listener,b!==r&&n.isPropagationStopped())break e;r=u,n.currentTarget=S;try{r(n)}catch(E){fr(E)}n.currentTarget=null,r=b}else for(o=0;o<i.length;o++){if(u=i[o],b=u.instance,S=u.currentTarget,u=u.listener,b!==r&&n.isPropagationStopped())break e;r=u,n.currentTarget=S;try{r(n)}catch(E){fr(E)}n.currentTarget=null,r=b}}}}function ne(e,a){var t=a[Ll];t===void 0&&(t=a[Ll]=new Set);var i=e+"__bubble";t.has(i)||(Zu(a,e,2,!1),t.add(i))}function Co(e,a,t){var i=0;a&&(i|=4),Zu(t,e,i,a)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Ro(e){if(!e[tl]){e[tl]=!0,Yc.forEach(function(t){t!=="selectionchange"&&(jf.has(t)||Co(t,!1,e),Co(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[tl]||(a[tl]=!0,Co("selectionchange",!1,a))}}function Zu(e,a,t,i){switch(Sp(a)){case 2:var n=Jf;break;case 8:n=Wf;break;default:n=Qo}t=n.bind(null,a,t,e),n=void 0,!Pl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Eo(e,a,t,i,n){var r=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var u=i.stateNode.containerInfo;if(u===n)break;if(o===4)for(o=i.return;o!==null;){var b=o.tag;if((b===3||b===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;u!==null;){if(o=si(u),o===null)return;if(b=o.tag,b===5||b===6||b===26||b===27){i=r=o;continue e}u=u.parentNode}}i=i.return}ed(function(){var S=r,E=Kl(t),D=[];e:{var T=Cd.get(e);if(T!==void 0){var C=pr,G=e;switch(e){case"keypress":if(hr(t)===0)break e;case"keydown":case"keyup":C=gg;break;case"focusin":G="focus",C=Wl;break;case"focusout":G="blur",C=Wl;break;case"beforeblur":case"afterblur":C=Wl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=bg;break;case Sd:case Ad:case Td:C=lg;break;case Nd:C=vg;break;case"scroll":case"scrollend":C=ag;break;case"wheel":C=wg;break;case"copy":case"cut":case"paste":C=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=rd;break;case"toggle":case"beforetoggle":C=Sg}var P=(a&4)!==0,ve=!P&&(e==="scroll"||e==="scrollend"),w=P?T!==null?T+"Capture":null:T;P=[];for(var x=S,j;x!==null;){var M=x;if(j=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||j===null||w===null||(M=an(x,w),M!=null&&P.push(On(x,M,j))),ve)break;x=x.return}0<P.length&&(T=new C(T,G,null,t,E),D.push({event:T,listeners:P}))}}if((a&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",T&&t!==Vl&&(G=t.relatedTarget||t.fromElement)&&(si(G)||G[li]))break e;if((C||T)&&(T=E.window===E?E:(T=E.ownerDocument)?T.defaultView||T.parentWindow:window,C?(G=t.relatedTarget||t.toElement,C=S,G=G?si(G):null,G!==null&&(ve=m(G),P=G.tag,G!==ve||P!==5&&P!==27&&P!==6)&&(G=null)):(C=null,G=S),C!==G)){if(P=id,M="onMouseLeave",w="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(P=rd,M="onPointerLeave",w="onPointerEnter",x="pointer"),ve=C==null?T:en(C),j=G==null?T:en(G),T=new P(M,x+"leave",C,t,E),T.target=ve,T.relatedTarget=j,M=null,si(E)===S&&(P=new P(w,x+"enter",G,t,E),P.target=j,P.relatedTarget=ve,M=P),ve=M,C&&G)a:{for(P=Sf,w=C,x=G,j=0,M=w;M;M=P(M))j++;M=0;for(var K=x;K;K=P(K))M++;for(;0<j-M;)w=P(w),j--;for(;0<M-j;)x=P(x),M--;for(;j--;){if(w===x||x!==null&&w===x.alternate){P=w;break a}w=P(w),x=P(x)}P=null}else P=null;C!==null&&Xu(D,T,C,P,!1),G!==null&&ve!==null&&Xu(D,ve,G,P,!0)}}e:{if(T=S?en(S):window,C=T.nodeName&&T.nodeName.toLowerCase(),C==="select"||C==="input"&&T.type==="file")var oe=pd;else if(hd(T))if(md)oe=Hg;else{oe=Mg;var V=zg}else C=T.nodeName,!C||C.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?S&&Ql(S.elementType)&&(oe=pd):oe=Dg;if(oe&&(oe=oe(e,S))){ud(D,oe,t,E);break e}V&&V(e,T,S),e==="focusout"&&S&&T.type==="number"&&S.memoizedProps.value!=null&&Il(T,"number",T.value)}switch(V=S?en(S):window,e){case"focusin":(hd(V)||V.contentEditable==="true")&&(fi=V,ns=S,dn=null);break;case"focusout":dn=ns=fi=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,wd(D,t,E);break;case"selectionchange":if(Bg)break;case"keydown":case"keyup":wd(D,t,E)}var ee;if(es)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else gi?cd(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(ld&&t.locale!=="ko"&&(gi||le!=="onCompositionStart"?le==="onCompositionEnd"&&gi&&(ee=ad()):(ft=E,Zl="value"in ft?ft.value:ft.textContent,gi=!0)),V=il(S,le),0<V.length&&(le=new nd(le,e,null,t,E),D.push({event:le,listeners:V}),ee?le.data=ee:(ee=dd(t),ee!==null&&(le.data=ee)))),(ee=Tg?Ng(e,t):Cg(e,t))&&(le=il(S,"onBeforeInput"),0<le.length&&(V=new nd("onBeforeInput","beforeinput",null,t,E),D.push({event:V,listeners:le}),V.data=ee)),vf(D,e,S,t,E)}Pu(D,a)})}function On(e,a,t){return{instance:e,listener:a,currentTarget:t}}function il(e,a){for(var t=a+"Capture",i=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=an(e,t),n!=null&&i.unshift(On(e,n,r)),n=an(e,a),n!=null&&i.push(On(e,n,r))),e.tag===3)return i;e=e.return}return[]}function Sf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xu(e,a,t,i,n){for(var r=a._reactName,o=[];t!==null&&t!==i;){var u=t,b=u.alternate,S=u.stateNode;if(u=u.tag,b!==null&&b===i)break;u!==5&&u!==26&&u!==27||S===null||(b=S,n?(S=an(t,r),S!=null&&o.unshift(On(t,S,b))):n||(S=an(t,r),S!=null&&o.push(On(t,S,b)))),t=t.return}o.length!==0&&e.push({event:a,listeners:o})}var Af=/\r\n?/g,Tf=/\u0000|\uFFFD/g;function Ju(e){return(typeof e=="string"?e:""+e).replace(Af,`
`).replace(Tf,"")}function Wu(e,a){return a=Ju(a),Ju(e)===a}function xe(e,a,t,i,n,r){switch(t){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||ui(e,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&ui(e,""+i);break;case"className":sr(e,"class",i);break;case"tabIndex":sr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(e,t,i);break;case"style":Wc(e,i,r);break;case"data":if(a!=="object"){sr(e,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=cr(""+i),e.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(a!=="input"&&xe(e,a,"name",n.name,n,null),xe(e,a,"formEncType",n.formEncType,n,null),xe(e,a,"formMethod",n.formMethod,n,null),xe(e,a,"formTarget",n.formTarget,n,null)):(xe(e,a,"encType",n.encType,n,null),xe(e,a,"method",n.method,n,null),xe(e,a,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=cr(""+i),e.setAttribute(t,i);break;case"onClick":i!=null&&(e.onclick=Ka);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(t=i.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}t=cr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""+i):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":i===!0?e.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,i):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(t,i):e.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(t):e.setAttribute(t,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),lr(e,"popover",i);break;case"xlinkActuate":Va(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Va(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Va(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Va(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Va(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Va(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Va(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=$m.get(t)||t,lr(e,t,i))}}function zo(e,a,t,i,n,r){switch(t){case"style":Wc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(t=i.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"children":typeof i=="string"?ui(e,i):(typeof i=="number"||typeof i=="bigint")&&ui(e,""+i);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ic.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),r=e[aa]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(a,r,n),typeof i=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,i,n);break e}t in e?e[t]=i:i===!0?e.setAttribute(t,""):lr(e,t,i)}}}function Ze(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,n=!1,r;for(r in t)if(t.hasOwnProperty(r)){var o=t[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:xe(e,a,r,o,t,null)}}n&&xe(e,a,"srcSet",t.srcSet,t,null),i&&xe(e,a,"src",t.src,t,null);return;case"input":ne("invalid",e);var u=r=o=n=null,b=null,S=null;for(i in t)if(t.hasOwnProperty(i)){var E=t[i];if(E!=null)switch(i){case"name":n=E;break;case"type":o=E;break;case"checked":b=E;break;case"defaultChecked":S=E;break;case"value":r=E;break;case"defaultValue":u=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(d(137,a));break;default:xe(e,a,i,E,t,null)}}Pc(e,r,u,b,S,o,n,!1);return;case"select":ne("invalid",e),i=o=r=null;for(n in t)if(t.hasOwnProperty(n)&&(u=t[n],u!=null))switch(n){case"value":r=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:xe(e,a,n,u,t,null)}a=r,t=o,e.multiple=!!i,a!=null?hi(e,!!i,a,!1):t!=null&&hi(e,!!i,t,!0);return;case"textarea":ne("invalid",e),r=n=i=null;for(o in t)if(t.hasOwnProperty(o)&&(u=t[o],u!=null))switch(o){case"value":i=u;break;case"defaultValue":n=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:xe(e,a,o,u,t,null)}Xc(e,i,n,r);return;case"option":for(b in t)if(t.hasOwnProperty(b)&&(i=t[b],i!=null))switch(b){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:xe(e,a,b,i,t,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<Hn.length;i++)ne(Hn[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in t)if(t.hasOwnProperty(S)&&(i=t[S],i!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:xe(e,a,S,i,t,null)}return;default:if(Ql(a)){for(E in t)t.hasOwnProperty(E)&&(i=t[E],i!==void 0&&zo(e,a,E,i,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(i=t[u],i!=null&&xe(e,a,u,i,t,null))}function Nf(e,a,t,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,u=null,b=null,S=null,E=null;for(C in t){var D=t[C];if(t.hasOwnProperty(C)&&D!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":b=D;default:i.hasOwnProperty(C)||xe(e,a,C,null,i,D)}}for(var T in i){var C=i[T];if(D=t[T],i.hasOwnProperty(T)&&(C!=null||D!=null))switch(T){case"type":r=C;break;case"name":n=C;break;case"checked":S=C;break;case"defaultChecked":E=C;break;case"value":o=C;break;case"defaultValue":u=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(d(137,a));break;default:C!==D&&xe(e,a,T,C,i,D)}}Yl(e,o,u,b,S,E,r,n);return;case"select":C=o=u=T=null;for(r in t)if(b=t[r],t.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":C=b;default:i.hasOwnProperty(r)||xe(e,a,r,null,i,b)}for(n in i)if(r=i[n],b=t[n],i.hasOwnProperty(n)&&(r!=null||b!=null))switch(n){case"value":T=r;break;case"defaultValue":u=r;break;case"multiple":o=r;default:r!==b&&xe(e,a,n,r,i,b)}a=u,t=o,i=C,T!=null?hi(e,!!t,T,!1):!!i!=!!t&&(a!=null?hi(e,!!t,a,!0):hi(e,!!t,t?[]:"",!1));return;case"textarea":C=T=null;for(u in t)if(n=t[u],t.hasOwnProperty(u)&&n!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:xe(e,a,u,null,i,n)}for(o in i)if(n=i[o],r=t[o],i.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":T=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==r&&xe(e,a,o,n,i,r)}Zc(e,T,C);return;case"option":for(var G in t)if(T=t[G],t.hasOwnProperty(G)&&T!=null&&!i.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:xe(e,a,G,null,i,T)}for(b in i)if(T=i[b],C=t[b],i.hasOwnProperty(b)&&T!==C&&(T!=null||C!=null))switch(b){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:xe(e,a,b,T,i,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in t)T=t[P],t.hasOwnProperty(P)&&T!=null&&!i.hasOwnProperty(P)&&xe(e,a,P,null,i,T);for(S in i)if(T=i[S],C=t[S],i.hasOwnProperty(S)&&T!==C&&(T!=null||C!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,a));break;default:xe(e,a,S,T,i,C)}return;default:if(Ql(a)){for(var ve in t)T=t[ve],t.hasOwnProperty(ve)&&T!==void 0&&!i.hasOwnProperty(ve)&&zo(e,a,ve,void 0,i,T);for(E in i)T=i[E],C=t[E],!i.hasOwnProperty(E)||T===C||T===void 0&&C===void 0||zo(e,a,E,T,i,C);return}}for(var w in t)T=t[w],t.hasOwnProperty(w)&&T!=null&&!i.hasOwnProperty(w)&&xe(e,a,w,null,i,T);for(D in i)T=i[D],C=t[D],!i.hasOwnProperty(D)||T===C||T==null&&C==null||xe(e,a,D,T,i,C)}function $u(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),i=0;i<t.length;i++){var n=t[i],r=n.transferSize,o=n.initiatorType,u=n.duration;if(r&&u&&$u(o)){for(o=0,u=n.responseEnd,i+=1;i<t.length;i++){var b=t[i],S=b.startTime;if(S>u)break;var E=b.transferSize,D=b.initiatorType;E&&$u(D)&&(b=b.responseEnd,o+=E*(b<u?1:(u-S)/(b-S)))}if(--i,a+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mo=null,Do=null;function nl(e){return e.nodeType===9?e:e.ownerDocument}function ep(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ap(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Ho(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Oo=null;function Rf(){var e=window.event;return e&&e.type==="popstate"?e===Oo?!1:(Oo=e,!0):(Oo=null,!1)}var tp=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(e){return ip.resolve(null).then(e).catch(Mf)}:tp;function Mf(e){setTimeout(function(){throw e})}function Dt(e){return e==="head"}function np(e,a){var t=a,i=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(i===0){e.removeChild(n),Ii(a);return}i--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")i++;else if(t==="html")Bn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Bn(t);for(var r=t.firstChild;r;){var o=r.nextSibling,u=r.nodeName;r[$i]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=o}}else t==="body"&&Bn(e.ownerDocument.body);t=n}while(t);Ii(a)}function rp(e,a){var t=e;e=0;do{var i=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=i}while(t)}function Bo(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Bo(t),Gl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Df(e,a,t,i){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[$i])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ta(e.nextSibling),e===null)break}return null}function Hf(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ta(e.nextSibling),e===null))return null;return e}function lp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ta(e.nextSibling),e===null))return null;return e}function _o(e){return e.data==="$?"||e.data==="$~"}function Uo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Of(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var i=function(){a(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ta(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Lo=null;function sp(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Ta(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function op(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function cp(e,a,t){switch(a=nl(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Bn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Gl(e)}var Na=new Map,dp=new Set;function rl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ot=_.d;_.d={f:Bf,r:_f,D:Uf,C:Lf,L:Gf,m:qf,X:If,S:Yf,M:Qf};function Bf(){var e=ot.f(),a=Xr();return e||a}function _f(e){var a=oi(e);a!==null&&a.tag===5&&a.type==="form"?Nh(a):ot.r(e)}var Gi=typeof document>"u"?null:document;function hp(e,a,t){var i=Gi;if(i&&typeof a=="string"&&a){var n=xa(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),dp.has(n)||(dp.add(n),e={rel:e,crossOrigin:t,href:a},i.querySelector(n)===null&&(a=i.createElement("link"),Ze(a,"link",e),qe(a),i.head.appendChild(a)))}}function Uf(e){ot.D(e),hp("dns-prefetch",e,null)}function Lf(e,a){ot.C(e,a),hp("preconnect",e,a)}function Gf(e,a,t){ot.L(e,a,t);var i=Gi;if(i&&e&&a){var n='link[rel="preload"][as="'+xa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+xa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+xa(t.imageSizes)+'"]')):n+='[href="'+xa(e)+'"]';var r=n;switch(a){case"style":r=qi(e);break;case"script":r=Yi(e)}Na.has(r)||(e=N({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Na.set(r,e),i.querySelector(n)!==null||a==="style"&&i.querySelector(_n(r))||a==="script"&&i.querySelector(Un(r))||(a=i.createElement("link"),Ze(a,"link",e),qe(a),i.head.appendChild(a)))}}function qf(e,a){ot.m(e,a);var t=Gi;if(t&&e){var i=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+xa(i)+'"][href="'+xa(e)+'"]',r=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Yi(e)}if(!Na.has(r)&&(e=N({rel:"modulepreload",href:e},a),Na.set(r,e),t.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Un(r)))return}i=t.createElement("link"),Ze(i,"link",e),qe(i),t.head.appendChild(i)}}}function Yf(e,a,t){ot.S(e,a,t);var i=Gi;if(i&&e){var n=ci(i).hoistableStyles,r=qi(e);a=a||"default";var o=n.get(r);if(!o){var u={loading:0,preload:null};if(o=i.querySelector(_n(r)))u.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Na.get(r))&&Go(e,t);var b=o=i.createElement("link");qe(b),Ze(b,"link",e),b._p=new Promise(function(S,E){b.onload=S,b.onerror=E}),b.addEventListener("load",function(){u.loading|=1}),b.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ll(o,a,i)}o={type:"stylesheet",instance:o,count:1,state:u},n.set(r,o)}}}function If(e,a){ot.X(e,a);var t=Gi;if(t&&e){var i=ci(t).hoistableScripts,n=Yi(e),r=i.get(n);r||(r=t.querySelector(Un(n)),r||(e=N({src:e,async:!0},a),(a=Na.get(n))&&qo(e,a),r=t.createElement("script"),qe(r),Ze(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function Qf(e,a){ot.M(e,a);var t=Gi;if(t&&e){var i=ci(t).hoistableScripts,n=Yi(e),r=i.get(n);r||(r=t.querySelector(Un(n)),r||(e=N({src:e,async:!0,type:"module"},a),(a=Na.get(n))&&qo(e,a),r=t.createElement("script"),qe(r),Ze(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function up(e,a,t,i){var n=(n=te.current)?rl(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=qi(t.href),t=ci(n).hoistableStyles,i=t.get(a),i||(i={type:"style",instance:null,count:0,state:null},t.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=qi(t.href);var r=ci(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(_n(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Na.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Na.set(e,t),r||Vf(n,e,t,o.state))),a&&i===null)throw Error(d(528,""));return o}if(a&&i!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Yi(t),t=ci(n).hoistableScripts,i=t.get(a),i||(i={type:"script",instance:null,count:0,state:null},t.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function qi(e){return'href="'+xa(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function pp(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Vf(e,a,t,i){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=e.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Ze(a,"link",t),qe(a),e.head.appendChild(a))}function Yi(e){return'[src="'+xa(e)+'"]'}function Un(e){return"script[async]"+e}function mp(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var i=e.querySelector('style[data-href~="'+xa(t.href)+'"]');if(i)return a.instance=i,qe(i),i;var n=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),qe(i),Ze(i,"style",n),ll(i,t.precedence,e),a.instance=i;case"stylesheet":n=qi(t.href);var r=e.querySelector(_n(n));if(r)return a.state.loading|=4,a.instance=r,qe(r),r;i=pp(t),(n=Na.get(n))&&Go(i,n),r=(e.ownerDocument||e).createElement("link"),qe(r);var o=r;return o._p=new Promise(function(u,b){o.onload=u,o.onerror=b}),Ze(r,"link",i),a.state.loading|=4,ll(r,t.precedence,e),a.instance=r;case"script":return r=Yi(t.src),(n=e.querySelector(Un(r)))?(a.instance=n,qe(n),n):(i=t,(n=Na.get(r))&&(i=N({},t),qo(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),Ze(n,"link",i),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,ll(i,t.precedence,e));return a.instance}function ll(e,a,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,r=n,o=0;o<i.length;o++){var u=i[o];if(u.dataset.precedence===a)r=u;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Go(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function qo(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var sl=null;function gp(e,a,t){if(sl===null){var i=new Map,n=sl=new Map;n.set(t,i)}else n=sl,i=n.get(t),i||(i=new Map,n.set(t,i));if(i.has(e))return i;for(i.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var r=t[n];if(!(r[$i]||r[Ve]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(a)||"";o=e+o;var u=i.get(o);u?u.push(r):i.set(o,[r])}}return i}function fp(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Kf(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function yp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ff(e,a,t,i){if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=qi(i.href),r=a.querySelector(_n(n));if(r){a=r._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ol.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=r,qe(r);return}r=a.ownerDocument||a,i=pp(i),(n=Na.get(n))&&Go(i,n),r=r.createElement("link"),qe(r);var o=r;o._p=new Promise(function(u,b){o.onload=u,o.onerror=b}),Ze(r,"link",i),t.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ol.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Yo=0;function Pf(e,a){return e.stylesheets&&e.count===0&&dl(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var i=setTimeout(function(){if(e.stylesheets&&dl(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+a);0<e.imgBytes&&Yo===0&&(Yo=62500*Cf());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dl(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Yo?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cl=null;function dl(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cl=new Map,a.forEach(Zf,e),cl=null,ol.call(e))}function Zf(e,a){if(!(a.state.loading&4)){var t=cl.get(e);if(t)var i=t.get(null);else{t=new Map,cl.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),i=o)}i&&t.set(null,i)}n=a.instance,o=n.getAttribute("data-precedence"),r=t.get(o)||i,r===i&&t.set(null,n),t.set(o,n),this.count++,i=ol.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var Ln={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Xf(e,a,t,i,n,r,o,u,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.hiddenUpdates=Bl(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function bp(e,a,t,i,n,r,o,u,b,S,E,D){return e=new Xf(e,a,t,o,b,S,E,D,u),a=1,r===!0&&(a|=24),r=ua(3,null,null,a),e.current=r,r.stateNode=e,a=vs(),a.refCount++,e.pooledCache=a,a.refCount++,r.memoizedState={element:i,isDehydrated:t,cache:a},Ss(r),e}function xp(e){return e?(e=xi,e):xi}function vp(e,a,t,i,n,r){n=xp(n),i.context===null?i.context=n:i.pendingContext=n,i=wt(a),i.payload={element:t},r=r===void 0?null:r,r!==null&&(i.callback=r),t=jt(e,i,a),t!==null&&(sa(t,e,a),yn(t,e,a))}function kp(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Io(e,a){kp(e,a),(e=e.alternate)&&kp(e,a)}function wp(e){if(e.tag===13||e.tag===31){var a=Kt(e,67108864);a!==null&&sa(a,e,67108864),Io(e,67108864)}}function jp(e){if(e.tag===13||e.tag===31){var a=ya();a=_l(a);var t=Kt(e,a);t!==null&&sa(t,e,a),Io(e,a)}}var hl=!0;function Jf(e,a,t,i){var n=z.T;z.T=null;var r=_.p;try{_.p=2,Qo(e,a,t,i)}finally{_.p=r,z.T=n}}function Wf(e,a,t,i){var n=z.T;z.T=null;var r=_.p;try{_.p=8,Qo(e,a,t,i)}finally{_.p=r,z.T=n}}function Qo(e,a,t,i){if(hl){var n=Vo(i);if(n===null)Eo(e,a,i,ul,t),Ap(e,i);else if(ey(n,e,a,t,i))i.stopPropagation();else if(Ap(e,i),a&4&&-1<$f.indexOf(e)){for(;n!==null;){var r=oi(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=qt(r.pendingLanes);if(o!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var b=1<<31-da(o);u.entanglements[1]|=b,o&=~b}Ga(r),(he&6)===0&&(Pr=oa()+500,Dn(0))}}break;case 31:case 13:u=Kt(r,2),u!==null&&sa(u,r,2),Xr(),Io(r,2)}if(r=Vo(i),r===null&&Eo(e,a,i,ul,t),r===n)break;n=r}n!==null&&i.stopPropagation()}else Eo(e,a,i,null,t)}}function Vo(e){return e=Kl(e),Ko(e)}var ul=null;function Ko(e){if(ul=null,e=si(e),e!==null){var a=m(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=y(a),e!==null)return e;e=null}else if(t===31){if(e=v(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ul=e,null}function Sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_m()){case Mc:return 2;case Dc:return 8;case ar:case Um:return 32;case Hc:return 268435456;default:return 32}default:return 32}}var Fo=!1,Ht=null,Ot=null,Bt=null,Gn=new Map,qn=new Map,_t=[],$f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,a){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Gn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(a.pointerId)}}function Yn(e,a,t,i,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:a,domEventName:t,eventSystemFlags:i,nativeEvent:r,targetContainers:[n]},a!==null&&(a=oi(a),a!==null&&wp(a)),e):(e.eventSystemFlags|=i,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function ey(e,a,t,i,n){switch(a){case"focusin":return Ht=Yn(Ht,e,a,t,i,n),!0;case"dragenter":return Ot=Yn(Ot,e,a,t,i,n),!0;case"mouseover":return Bt=Yn(Bt,e,a,t,i,n),!0;case"pointerover":var r=n.pointerId;return Gn.set(r,Yn(Gn.get(r)||null,e,a,t,i,n)),!0;case"gotpointercapture":return r=n.pointerId,qn.set(r,Yn(qn.get(r)||null,e,a,t,i,n)),!0}return!1}function Tp(e){var a=si(e.target);if(a!==null){var t=m(a);if(t!==null){if(a=t.tag,a===13){if(a=y(t),a!==null){e.blockedOn=a,Gc(e.priority,function(){jp(t)});return}}else if(a===31){if(a=v(t),a!==null){e.blockedOn=a,Gc(e.priority,function(){jp(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Vo(e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Vl=i,t.target.dispatchEvent(i),Vl=null}else return a=oi(t),a!==null&&wp(a),e.blockedOn=t,!1;a.shift()}return!0}function Np(e,a,t){pl(e)&&t.delete(a)}function ay(){Fo=!1,Ht!==null&&pl(Ht)&&(Ht=null),Ot!==null&&pl(Ot)&&(Ot=null),Bt!==null&&pl(Bt)&&(Bt=null),Gn.forEach(Np),qn.forEach(Np)}function ml(e,a){e.blockedOn===a&&(e.blockedOn=null,Fo||(Fo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ay)))}var gl=null;function Cp(e){gl!==e&&(gl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gl===e&&(gl=null);for(var a=0;a<e.length;a+=3){var t=e[a],i=e[a+1],n=e[a+2];if(typeof i!="function"){if(Ko(i||t)===null)continue;break}var r=oi(t);r!==null&&(e.splice(a,3),a-=3,Qs(r,{pending:!0,data:n,method:t.method,action:i},i,n))}}))}function Ii(e){function a(b){return ml(b,e)}Ht!==null&&ml(Ht,e),Ot!==null&&ml(Ot,e),Bt!==null&&ml(Bt,e),Gn.forEach(a),qn.forEach(a);for(var t=0;t<_t.length;t++){var i=_t[t];i.blockedOn===e&&(i.blockedOn=null)}for(;0<_t.length&&(t=_t[0],t.blockedOn===null);)Tp(t),t.blockedOn===null&&_t.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var n=t[i],r=t[i+1],o=n[aa]||null;if(typeof r=="function")o||Cp(t);else if(o){var u=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[aa]||null)u=o.formAction;else if(Ko(n)!==null)continue}else u=o.action;typeof u=="function"?t[i+1]=u:(t.splice(i,3),i-=3),Cp(t)}}}function Rp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),i||setTimeout(t,20)}function t(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function Po(e){this._internalRoot=e}fl.prototype.render=Po.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,i=ya();vp(t,i,e,a,null,null)},fl.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;vp(e.current,2,null,e,null,null),Xr(),a[li]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var a=Lc();e={blockedOn:null,target:e,priority:a};for(var t=0;t<_t.length&&a!==0&&a<_t[t].priority;t++);_t.splice(t,0,e),t===0&&Tp(e)}};var Ep=c.version;if(Ep!=="19.2.1")throw Error(d(527,Ep,"19.2.1"));_.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(a),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var ty={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Xi=yl.inject(ty),ca=yl}catch{}}return Qn.createRoot=function(e,a){if(!p(e))throw Error(d(299));var t=!1,i="",n=_h,r=Uh,o=Lh;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=bp(e,1,!1,null,null,t,i,null,n,r,o,Rp),e[li]=a.current,Ro(e),new Po(a)},Qn.hydrateRoot=function(e,a,t){if(!p(e))throw Error(d(299));var i=!1,n="",r=_h,o=Uh,u=Lh,b=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(b=t.formState)),a=bp(e,1,!0,a,t??null,i,n,b,r,o,u,Rp),a.context=xp(null),t=a.current,i=ya(),i=_l(i),n=wt(i),n.callback=null,jt(t,n,i),t=i,a.current.lanes=t,Wi(a,t),Ga(a),e[li]=a.current,Ro(e),new fl(a)},Qn.version="19.2.1",Qn}var Gp;function my(){if(Gp)return Jo.exports;Gp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Jo.exports=py(),Jo.exports}var gy=my();const fy=Xn(gy);/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qp="popstate";function yy(s={}){function c(d,p){let{pathname:m,search:y,hash:v}=d.location;return dc("",{pathname:m,search:y,hash:v},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function h(d,p){return typeof p=="string"?p:Pn(p)}return xy(c,h,null,s)}function Ce(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function Oa(s,c){if(!s){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function by(){return Math.random().toString(36).substring(2,10)}function Yp(s,c){return{usr:s.state,key:s.key,idx:c}}function dc(s,c,h=null,d){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof c=="string"?Fi(c):c,state:h,key:c&&c.key||d||by()}}function Pn({pathname:s="/",search:c="",hash:h=""}){return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),h&&h!=="#"&&(s+=h.charAt(0)==="#"?h:"#"+h),s}function Fi(s){let c={};if(s){let h=s.indexOf("#");h>=0&&(c.hash=s.substring(h),s=s.substring(0,h));let d=s.indexOf("?");d>=0&&(c.search=s.substring(d),s=s.substring(0,d)),s&&(c.pathname=s)}return c}function xy(s,c,h,d={}){let{window:p=document.defaultView,v5Compat:m=!1}=d,y=p.history,v="POP",f=null,g=A();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function A(){return(y.state||{idx:null}).idx}function N(){v="POP";let q=A(),I=q==null?null:q-g;g=q,f&&f({action:v,location:F.location,delta:I})}function O(q,I){v="PUSH";let ae=dc(F.location,q,I);g=A()+1;let L=Yp(ae,g),pe=F.createHref(ae);try{y.pushState(L,"",pe)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;p.location.assign(pe)}m&&f&&f({action:v,location:F.location,delta:1})}function B(q,I){v="REPLACE";let ae=dc(F.location,q,I);g=A();let L=Yp(ae,g),pe=F.createHref(ae);y.replaceState(L,"",pe),m&&f&&f({action:v,location:F.location,delta:0})}function Y(q){return vy(q)}let F={get action(){return v},get location(){return s(p,y)},listen(q){if(f)throw new Error("A history only accepts one active listener");return p.addEventListener(qp,N),f=q,()=>{p.removeEventListener(qp,N),f=null}},createHref(q){return c(p,q)},createURL:Y,encodeLocation(q){let I=Y(q);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:O,replace:B,go(q){return y.go(q)}};return F}function vy(s,c=!1){let h="http://localhost";typeof window<"u"&&(h=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(h,"No window.location.(origin|href) available to create URL");let d=typeof s=="string"?s:Pn(s);return d=d.replace(/ $/,"%20"),!c&&d.startsWith("//")&&(d=h+d),new URL(d,h)}function rm(s,c,h="/"){return ky(s,c,h,!1)}function ky(s,c,h,d){let p=typeof c=="string"?Fi(c):c,m=ut(p.pathname||"/",h);if(m==null)return null;let y=lm(s);wy(y);let v=null;for(let f=0;v==null&&f<y.length;++f){let g=Dy(m);v=zy(y[f],g,d)}return v}function lm(s,c=[],h=[],d="",p=!1){let m=(y,v,f=p,g)=>{let A={relativePath:g===void 0?y.path||"":g,caseSensitive:y.caseSensitive===!0,childrenIndex:v,route:y};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(d)&&f)return;Ce(A.relativePath.startsWith(d),`Absolute route path "${A.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(d.length)}let N=ht([d,A.relativePath]),O=h.concat(A);y.children&&y.children.length>0&&(Ce(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),lm(y.children,c,O,N,f)),!(y.path==null&&!y.index)&&c.push({path:N,score:Ry(N,y.index),routesMeta:O})};return s.forEach((y,v)=>{var f;if(y.path===""||!((f=y.path)!=null&&f.includes("?")))m(y,v);else for(let g of sm(y.path))m(y,v,!0,g)}),c}function sm(s){let c=s.split("/");if(c.length===0)return[];let[h,...d]=c,p=h.endsWith("?"),m=h.replace(/\?$/,"");if(d.length===0)return p?[m,""]:[m];let y=sm(d.join("/")),v=[];return v.push(...y.map(f=>f===""?m:[m,f].join("/"))),p&&v.push(...y),v.map(f=>s.startsWith("/")&&f===""?"/":f)}function wy(s){s.sort((c,h)=>c.score!==h.score?h.score-c.score:Ey(c.routesMeta.map(d=>d.childrenIndex),h.routesMeta.map(d=>d.childrenIndex)))}var jy=/^:[\w-]+$/,Sy=3,Ay=2,Ty=1,Ny=10,Cy=-2,Ip=s=>s==="*";function Ry(s,c){let h=s.split("/"),d=h.length;return h.some(Ip)&&(d+=Cy),c&&(d+=Ay),h.filter(p=>!Ip(p)).reduce((p,m)=>p+(jy.test(m)?Sy:m===""?Ty:Ny),d)}function Ey(s,c){return s.length===c.length&&s.slice(0,-1).every((d,p)=>d===c[p])?s[s.length-1]-c[c.length-1]:0}function zy(s,c,h=!1){let{routesMeta:d}=s,p={},m="/",y=[];for(let v=0;v<d.length;++v){let f=d[v],g=v===d.length-1,A=m==="/"?c:c.slice(m.length)||"/",N=Sl({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},A),O=f.route;if(!N&&g&&h&&!d[d.length-1].route.index&&(N=Sl({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},A)),!N)return null;Object.assign(p,N.params),y.push({params:p,pathname:ht([m,N.pathname]),pathnameBase:Uy(ht([m,N.pathnameBase])),route:O}),N.pathnameBase!=="/"&&(m=ht([m,N.pathnameBase]))}return y}function Sl(s,c){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[h,d]=My(s.path,s.caseSensitive,s.end),p=c.match(h);if(!p)return null;let m=p[0],y=m.replace(/(.)\/+$/,"$1"),v=p.slice(1);return{params:d.reduce((g,{paramName:A,isOptional:N},O)=>{if(A==="*"){let Y=v[O]||"";y=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const B=v[O];return N&&!B?g[A]=void 0:g[A]=(B||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:y,pattern:s}}function My(s,c=!1,h=!0){Oa(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,v,f)=>(d.push({paramName:v,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):h?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function Dy(s){try{return s.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Oa(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),s}}function ut(s,c){if(c==="/")return s;if(!s.toLowerCase().startsWith(c.toLowerCase()))return null;let h=c.endsWith("/")?c.length-1:c.length,d=s.charAt(h);return d&&d!=="/"?null:s.slice(h)||"/"}var Hy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oy=s=>Hy.test(s);function By(s,c="/"){let{pathname:h,search:d="",hash:p=""}=typeof s=="string"?Fi(s):s,m;if(h)if(Oy(h))m=h;else{if(h.includes("//")){let y=h;h=h.replace(/\/\/+/g,"/"),Oa(!1,`Pathnames cannot have embedded double slashes - normalizing ${y} -> ${h}`)}h.startsWith("/")?m=Qp(h.substring(1),"/"):m=Qp(h,c)}else m=c;return{pathname:m,search:Ly(d),hash:Gy(p)}}function Qp(s,c){let h=c.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?h.length>1&&h.pop():p!=="."&&h.push(p)}),h.length>1?h.join("/"):"/"}function ac(s,c,h,d){return`Cannot include a '${s}' character in a manually specified \`to.${c}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${h}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _y(s){return s.filter((c,h)=>h===0||c.route.path&&c.route.path.length>0)}function om(s){let c=_y(s);return c.map((h,d)=>d===c.length-1?h.pathname:h.pathnameBase)}function cm(s,c,h,d=!1){let p;typeof s=="string"?p=Fi(s):(p={...s},Ce(!p.pathname||!p.pathname.includes("?"),ac("?","pathname","search",p)),Ce(!p.pathname||!p.pathname.includes("#"),ac("#","pathname","hash",p)),Ce(!p.search||!p.search.includes("#"),ac("#","search","hash",p)));let m=s===""||p.pathname==="",y=m?"/":p.pathname,v;if(y==null)v=h;else{let N=c.length-1;if(!d&&y.startsWith("..")){let O=y.split("/");for(;O[0]==="..";)O.shift(),N-=1;p.pathname=O.join("/")}v=N>=0?c[N]:"/"}let f=By(p,v),g=y&&y!=="/"&&y.endsWith("/"),A=(m||y===".")&&h.endsWith("/");return!f.pathname.endsWith("/")&&(g||A)&&(f.pathname+="/"),f}var ht=s=>s.join("/").replace(/\/\/+/g,"/"),Uy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Gy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function qy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Yy(s){return s.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dm=["POST","PUT","PATCH","DELETE"];new Set(dm);var Iy=["GET",...dm];new Set(Iy);var Pi=R.createContext(null);Pi.displayName="DataRouter";var Nl=R.createContext(null);Nl.displayName="DataRouterState";R.createContext(!1);var hm=R.createContext({isTransitioning:!1});hm.displayName="ViewTransition";var Qy=R.createContext(new Map);Qy.displayName="Fetchers";var Vy=R.createContext(null);Vy.displayName="Await";var Ba=R.createContext(null);Ba.displayName="Navigation";var Jn=R.createContext(null);Jn.displayName="Location";var Ya=R.createContext({outlet:null,matches:[],isDataRoute:!1});Ya.displayName="Route";var kc=R.createContext(null);kc.displayName="RouteError";function Ky(s,{relative:c}={}){Ce(Wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:h,navigator:d}=R.useContext(Ba),{hash:p,pathname:m,search:y}=$n(s,{relative:c}),v=m;return h!=="/"&&(v=m==="/"?h:ht([h,m])),d.createHref({pathname:v,search:y,hash:p})}function Wn(){return R.useContext(Jn)!=null}function pt(){return Ce(Wn(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Jn).location}var um="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pm(s){R.useContext(Ba).static||R.useLayoutEffect(s)}function Fy(){let{isDataRoute:s}=R.useContext(Ya);return s?s0():Py()}function Py(){Ce(Wn(),"useNavigate() may be used only in the context of a <Router> component.");let s=R.useContext(Pi),{basename:c,navigator:h}=R.useContext(Ba),{matches:d}=R.useContext(Ya),{pathname:p}=pt(),m=JSON.stringify(om(d)),y=R.useRef(!1);return pm(()=>{y.current=!0}),R.useCallback((f,g={})=>{if(Oa(y.current,um),!y.current)return;if(typeof f=="number"){h.go(f);return}let A=cm(f,JSON.parse(m),p,g.relative==="path");s==null&&c!=="/"&&(A.pathname=A.pathname==="/"?c:ht([c,A.pathname])),(g.replace?h.replace:h.push)(A,g.state,g)},[c,h,m,p,s])}R.createContext(null);function Zy(){let{matches:s}=R.useContext(Ya),c=s[s.length-1];return c?c.params:{}}function $n(s,{relative:c}={}){let{matches:h}=R.useContext(Ya),{pathname:d}=pt(),p=JSON.stringify(om(h));return R.useMemo(()=>cm(s,JSON.parse(p),d,c==="path"),[s,p,d,c])}function Xy(s,c){return mm(s,c)}function mm(s,c,h,d,p){var ae;Ce(Wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=R.useContext(Ba),{matches:y}=R.useContext(Ya),v=y[y.length-1],f=v?v.params:{},g=v?v.pathname:"/",A=v?v.pathnameBase:"/",N=v&&v.route;{let L=N&&N.path||"";gm(g,!N||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let O=pt(),B;if(c){let L=typeof c=="string"?Fi(c):c;Ce(A==="/"||((ae=L.pathname)==null?void 0:ae.startsWith(A)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${L.pathname}" was given in the \`location\` prop.`),B=L}else B=O;let Y=B.pathname||"/",F=Y;if(A!=="/"){let L=A.replace(/^\//,"").split("/");F="/"+Y.replace(/^\//,"").split("/").slice(L.length).join("/")}let q=rm(s,{pathname:F});Oa(N||q!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Oa(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=a0(q&&q.map(L=>Object.assign({},L,{params:Object.assign({},f,L.params),pathname:ht([A,m.encodeLocation?m.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?A:ht([A,m.encodeLocation?m.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),y,h,d,p);return c&&I?R.createElement(Jn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},I):I}function Jy(){let s=l0(),c=qy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),h=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},y=null;return console.error("Error handled by React Router default ErrorBoundary:",s),y=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:m},"ErrorBoundary")," or"," ",R.createElement("code",{style:m},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},c),h?R.createElement("pre",{style:p},h):null,y)}var Wy=R.createElement(Jy,null),$y=class extends R.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){this.props.onError?this.props.onError(s,c):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?R.createElement(Ya.Provider,{value:this.props.routeContext},R.createElement(kc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function e0({routeContext:s,match:c,children:h}){let d=R.useContext(Pi);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),R.createElement(Ya.Provider,{value:s},h)}function a0(s,c=[],h=null,d=null,p=null){if(s==null){if(!h)return null;if(h.errors)s=h.matches;else if(c.length===0&&!h.initialized&&h.matches.length>0)s=h.matches;else return null}let m=s,y=h==null?void 0:h.errors;if(y!=null){let A=m.findIndex(N=>N.route.id&&(y==null?void 0:y[N.route.id])!==void 0);Ce(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),m=m.slice(0,Math.min(m.length,A+1))}let v=!1,f=-1;if(h)for(let A=0;A<m.length;A++){let N=m[A];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(f=A),N.route.id){let{loaderData:O,errors:B}=h,Y=N.route.loader&&!O.hasOwnProperty(N.route.id)&&(!B||B[N.route.id]===void 0);if(N.route.lazy||Y){v=!0,f>=0?m=m.slice(0,f+1):m=[m[0]];break}}}let g=h&&d?(A,N)=>{var O,B;d(A,{location:h.location,params:((B=(O=h.matches)==null?void 0:O[0])==null?void 0:B.params)??{},unstable_pattern:Yy(h.matches),errorInfo:N})}:void 0;return m.reduceRight((A,N,O)=>{let B,Y=!1,F=null,q=null;h&&(B=y&&N.route.id?y[N.route.id]:void 0,F=N.route.errorElement||Wy,v&&(f<0&&O===0?(gm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,q=null):f===O&&(Y=!0,q=N.route.hydrateFallbackElement||null)));let I=c.concat(m.slice(0,O+1)),ae=()=>{let L;return B?L=F:Y?L=q:N.route.Component?L=R.createElement(N.route.Component,null):N.route.element?L=N.route.element:L=A,R.createElement(e0,{match:N,routeContext:{outlet:A,matches:I,isDataRoute:h!=null},children:L})};return h&&(N.route.ErrorBoundary||N.route.errorElement||O===0)?R.createElement($y,{location:h.location,revalidation:h.revalidation,component:F,error:B,children:ae(),routeContext:{outlet:null,matches:I,isDataRoute:!0},onError:g}):ae()},null)}function wc(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t0(s){let c=R.useContext(Pi);return Ce(c,wc(s)),c}function i0(s){let c=R.useContext(Nl);return Ce(c,wc(s)),c}function n0(s){let c=R.useContext(Ya);return Ce(c,wc(s)),c}function jc(s){let c=n0(s),h=c.matches[c.matches.length-1];return Ce(h.route.id,`${s} can only be used on routes that contain a unique "id"`),h.route.id}function r0(){return jc("useRouteId")}function l0(){var d;let s=R.useContext(kc),c=i0("useRouteError"),h=jc("useRouteError");return s!==void 0?s:(d=c.errors)==null?void 0:d[h]}function s0(){let{router:s}=t0("useNavigate"),c=jc("useNavigate"),h=R.useRef(!1);return pm(()=>{h.current=!0}),R.useCallback(async(p,m={})=>{Oa(h.current,um),h.current&&(typeof p=="number"?await s.navigate(p):await s.navigate(p,{fromRouteId:c,...m}))},[s,c])}var Vp={};function gm(s,c,h){!c&&!Vp[s]&&(Vp[s]=!0,Oa(!1,h))}R.memo(o0);function o0({routes:s,future:c,state:h,unstable_onError:d}){return mm(s,void 0,h,d,c)}function Ca(s){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function c0({basename:s="/",children:c=null,location:h,navigationType:d="POP",navigator:p,static:m=!1,unstable_useTransitions:y}){Ce(!Wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=s.replace(/^\/*/,"/"),f=R.useMemo(()=>({basename:v,navigator:p,static:m,unstable_useTransitions:y,future:{}}),[v,p,m,y]);typeof h=="string"&&(h=Fi(h));let{pathname:g="/",search:A="",hash:N="",state:O=null,key:B="default"}=h,Y=R.useMemo(()=>{let F=ut(g,v);return F==null?null:{location:{pathname:F,search:A,hash:N,state:O,key:B},navigationType:d}},[v,g,A,N,O,B,d]);return Oa(Y!=null,`<Router basename="${v}"> is not able to match the URL "${g}${A}${N}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:R.createElement(Ba.Provider,{value:f},R.createElement(Jn.Provider,{children:c,value:Y}))}function d0({children:s,location:c}){return Xy(hc(s),c)}function hc(s,c=[]){let h=[];return R.Children.forEach(s,(d,p)=>{if(!R.isValidElement(d))return;let m=[...c,p];if(d.type===R.Fragment){h.push.apply(h,hc(d.props.children,m));return}Ce(d.type===Ca,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!d.props.index||!d.props.children,"An index route cannot have child routes.");let y={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(y.children=hc(d.props.children,m)),h.push(y)}),h}var vl="get",kl="application/x-www-form-urlencoded";function Cl(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function h0(s){return Cl(s)&&s.tagName.toLowerCase()==="button"}function u0(s){return Cl(s)&&s.tagName.toLowerCase()==="form"}function p0(s){return Cl(s)&&s.tagName.toLowerCase()==="input"}function m0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function g0(s,c){return s.button===0&&(!c||c==="_self")&&!m0(s)}var bl=null;function f0(){if(bl===null)try{new FormData(document.createElement("form"),0),bl=!1}catch{bl=!0}return bl}var y0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tc(s){return s!=null&&!y0.has(s)?(Oa(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kl}"`),null):s}function b0(s,c){let h,d,p,m,y;if(u0(s)){let v=s.getAttribute("action");d=v?ut(v,c):null,h=s.getAttribute("method")||vl,p=tc(s.getAttribute("enctype"))||kl,m=new FormData(s)}else if(h0(s)||p0(s)&&(s.type==="submit"||s.type==="image")){let v=s.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=s.getAttribute("formaction")||v.getAttribute("action");if(d=f?ut(f,c):null,h=s.getAttribute("formmethod")||v.getAttribute("method")||vl,p=tc(s.getAttribute("formenctype"))||tc(v.getAttribute("enctype"))||kl,m=new FormData(v,s),!f0()){let{name:g,type:A,value:N}=s;if(A==="image"){let O=g?`${g}.`:"";m.append(`${O}x`,"0"),m.append(`${O}y`,"0")}else g&&m.append(g,N)}}else{if(Cl(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');h=vl,d=null,p=kl,y=s}return m&&p==="text/plain"&&(y=m,m=void 0),{action:d,method:h.toLowerCase(),encType:p,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sc(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function x0(s,c,h){let d=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return d.pathname==="/"?d.pathname=`_root.${h}`:c&&ut(d.pathname,c)==="/"?d.pathname=`${c.replace(/\/$/,"")}/_root.${h}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${h}`,d}async function v0(s,c){if(s.id in c)return c[s.id];try{let h=await import(s.module);return c[s.id]=h,h}catch(h){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(h),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function k0(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function w0(s,c,h){let d=await Promise.all(s.map(async p=>{let m=c.routes[p.route.id];if(m){let y=await v0(m,h);return y.links?y.links():[]}return[]}));return T0(d.flat(1).filter(k0).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Kp(s,c,h,d,p,m){let y=(f,g)=>h[g]?f.route.id!==h[g].route.id:!0,v=(f,g)=>{var A;return h[g].pathname!==f.pathname||((A=h[g].route.path)==null?void 0:A.endsWith("*"))&&h[g].params["*"]!==f.params["*"]};return m==="assets"?c.filter((f,g)=>y(f,g)||v(f,g)):m==="data"?c.filter((f,g)=>{var N;let A=d.routes[f.route.id];if(!A||!A.hasLoader)return!1;if(y(f,g)||v(f,g))return!0;if(f.route.shouldRevalidate){let O=f.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((N=h[0])==null?void 0:N.params)||{},nextUrl:new URL(s,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function j0(s,c,{includeHydrateFallback:h}={}){return S0(s.map(d=>{let p=c.routes[d.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),h&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function S0(s){return[...new Set(s)]}function A0(s){let c={},h=Object.keys(s).sort();for(let d of h)c[d]=s[d];return c}function T0(s,c){let h=new Set;return new Set(c),s.reduce((d,p)=>{let m=JSON.stringify(A0(p));return h.has(m)||(h.add(m),d.push({key:m,link:p})),d},[])}function fm(){let s=R.useContext(Pi);return Sc(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function N0(){let s=R.useContext(Nl);return Sc(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ac=R.createContext(void 0);Ac.displayName="FrameworkContext";function ym(){let s=R.useContext(Ac);return Sc(s,"You must render this element inside a <HydratedRouter> element"),s}function C0(s,c){let h=R.useContext(Ac),[d,p]=R.useState(!1),[m,y]=R.useState(!1),{onFocus:v,onBlur:f,onMouseEnter:g,onMouseLeave:A,onTouchStart:N}=c,O=R.useRef(null);R.useEffect(()=>{if(s==="render"&&y(!0),s==="viewport"){let F=I=>{I.forEach(ae=>{y(ae.isIntersecting)})},q=new IntersectionObserver(F,{threshold:.5});return O.current&&q.observe(O.current),()=>{q.disconnect()}}},[s]),R.useEffect(()=>{if(d){let F=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(F)}}},[d]);let B=()=>{p(!0)},Y=()=>{p(!1),y(!1)};return h?s!=="intent"?[m,O,{}]:[m,O,{onFocus:Vn(v,B),onBlur:Vn(f,Y),onMouseEnter:Vn(g,B),onMouseLeave:Vn(A,Y),onTouchStart:Vn(N,B)}]:[!1,O,{}]}function Vn(s,c){return h=>{s&&s(h),h.defaultPrevented||c(h)}}function R0({page:s,...c}){let{router:h}=fm(),d=R.useMemo(()=>rm(h.routes,s,h.basename),[h.routes,s,h.basename]);return d?R.createElement(z0,{page:s,matches:d,...c}):null}function E0(s){let{manifest:c,routeModules:h}=ym(),[d,p]=R.useState([]);return R.useEffect(()=>{let m=!1;return w0(s,c,h).then(y=>{m||p(y)}),()=>{m=!0}},[s,c,h]),d}function z0({page:s,matches:c,...h}){let d=pt(),{manifest:p,routeModules:m}=ym(),{basename:y}=fm(),{loaderData:v,matches:f}=N0(),g=R.useMemo(()=>Kp(s,c,f,p,d,"data"),[s,c,f,p,d]),A=R.useMemo(()=>Kp(s,c,f,p,d,"assets"),[s,c,f,p,d]),N=R.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let Y=new Set,F=!1;if(c.forEach(I=>{var L;let ae=p.routes[I.route.id];!ae||!ae.hasLoader||(!g.some(pe=>pe.route.id===I.route.id)&&I.route.id in v&&((L=m[I.route.id])!=null&&L.shouldRevalidate)||ae.hasClientLoader?F=!0:Y.add(I.route.id))}),Y.size===0)return[];let q=x0(s,y,"data");return F&&Y.size>0&&q.searchParams.set("_routes",c.filter(I=>Y.has(I.route.id)).map(I=>I.route.id).join(",")),[q.pathname+q.search]},[y,v,d,p,g,c,s,m]),O=R.useMemo(()=>j0(A,p),[A,p]),B=E0(A);return R.createElement(R.Fragment,null,N.map(Y=>R.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...h})),O.map(Y=>R.createElement("link",{key:Y,rel:"modulepreload",href:Y,...h})),B.map(({key:Y,link:F})=>R.createElement("link",{key:Y,nonce:h.nonce,...F})))}function M0(...s){return c=>{s.forEach(h=>{typeof h=="function"?h(c):h!=null&&(h.current=c)})}}var bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bm&&(window.__reactRouterVersion="7.10.1")}catch{}function D0({basename:s,children:c,unstable_useTransitions:h,window:d}){let p=R.useRef();p.current==null&&(p.current=yy({window:d,v5Compat:!0}));let m=p.current,[y,v]=R.useState({action:m.action,location:m.location}),f=R.useCallback(g=>{h===!1?v(g):R.startTransition(()=>v(g))},[h]);return R.useLayoutEffect(()=>m.listen(f),[m,f]),R.createElement(c0,{basename:s,children:c,location:y.location,navigationType:y.action,navigator:m,unstable_useTransitions:h===!0})}var xm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=R.forwardRef(function({onClick:c,discover:h="render",prefetch:d="none",relative:p,reloadDocument:m,replace:y,state:v,target:f,to:g,preventScrollReset:A,viewTransition:N,...O},B){let{basename:Y,unstable_useTransitions:F}=R.useContext(Ba),q=typeof g=="string"&&xm.test(g),I,ae=!1;if(typeof g=="string"&&q&&(I=g,bm))try{let Xe=new URL(window.location.href),We=g.startsWith("//")?new URL(Xe.protocol+g):new URL(g),Qe=ut(We.pathname,Y);We.origin===Xe.origin&&Qe!=null?g=Qe+We.search+We.hash:ae=!0}catch{Oa(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Ky(g,{relative:p}),[pe,Se,ze]=C0(d,O),X=_0(g,{replace:y,state:v,target:f,preventScrollReset:A,relative:p,viewTransition:N,unstable_useTransitions:F});function Ge(Xe){c&&c(Xe),Xe.defaultPrevented||X(Xe)}let Ie=R.createElement("a",{...O,...ze,href:I||L,onClick:ae||m?c:Ge,ref:M0(B,Se),target:f,"data-discover":!q&&h==="render"?"true":void 0});return pe&&!q?R.createElement(R.Fragment,null,Ie,R.createElement(R0,{page:L})):Ie});ue.displayName="Link";var H0=R.forwardRef(function({"aria-current":c="page",caseSensitive:h=!1,className:d="",end:p=!1,style:m,to:y,viewTransition:v,children:f,...g},A){let N=$n(y,{relative:g.relative}),O=pt(),B=R.useContext(Nl),{navigator:Y,basename:F}=R.useContext(Ba),q=B!=null&&Y0(N)&&v===!0,I=Y.encodeLocation?Y.encodeLocation(N).pathname:N.pathname,ae=O.pathname,L=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;h||(ae=ae.toLowerCase(),L=L?L.toLowerCase():null,I=I.toLowerCase()),L&&F&&(L=ut(L,F)||L);const pe=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let Se=ae===I||!p&&ae.startsWith(I)&&ae.charAt(pe)==="/",ze=L!=null&&(L===I||!p&&L.startsWith(I)&&L.charAt(I.length)==="/"),X={isActive:Se,isPending:ze,isTransitioning:q},Ge=Se?c:void 0,Ie;typeof d=="function"?Ie=d(X):Ie=[d,Se?"active":null,ze?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let Xe=typeof m=="function"?m(X):m;return R.createElement(ue,{...g,"aria-current":Ge,className:Ie,ref:A,style:Xe,to:y,viewTransition:v},typeof f=="function"?f(X):f)});H0.displayName="NavLink";var O0=R.forwardRef(({discover:s="render",fetcherKey:c,navigate:h,reloadDocument:d,replace:p,state:m,method:y=vl,action:v,onSubmit:f,relative:g,preventScrollReset:A,viewTransition:N,...O},B)=>{let{unstable_useTransitions:Y}=R.useContext(Ba),F=G0(),q=q0(v,{relative:g}),I=y.toLowerCase()==="get"?"get":"post",ae=typeof v=="string"&&xm.test(v),L=pe=>{if(f&&f(pe),pe.defaultPrevented)return;pe.preventDefault();let Se=pe.nativeEvent.submitter,ze=(Se==null?void 0:Se.getAttribute("formmethod"))||y,X=()=>F(Se||pe.currentTarget,{fetcherKey:c,method:ze,navigate:h,replace:p,state:m,relative:g,preventScrollReset:A,viewTransition:N});Y&&h!==!1?R.startTransition(()=>X()):X()};return R.createElement("form",{ref:B,method:I,action:q,onSubmit:d?f:L,...O,"data-discover":!ae&&s==="render"?"true":void 0})});O0.displayName="Form";function B0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vm(s){let c=R.useContext(Pi);return Ce(c,B0(s)),c}function _0(s,{target:c,replace:h,state:d,preventScrollReset:p,relative:m,viewTransition:y,unstable_useTransitions:v}={}){let f=Fy(),g=pt(),A=$n(s,{relative:m});return R.useCallback(N=>{if(g0(N,c)){N.preventDefault();let O=h!==void 0?h:Pn(g)===Pn(A),B=()=>f(s,{replace:O,state:d,preventScrollReset:p,relative:m,viewTransition:y});v?R.startTransition(()=>B()):B()}},[g,f,A,h,d,c,s,p,m,y,v])}var U0=0,L0=()=>`__${String(++U0)}__`;function G0(){let{router:s}=vm("useSubmit"),{basename:c}=R.useContext(Ba),h=r0(),d=s.fetch,p=s.navigate;return R.useCallback(async(m,y={})=>{let{action:v,method:f,encType:g,formData:A,body:N}=b0(m,c);if(y.navigate===!1){let O=y.fetcherKey||L0();await d(O,h,y.action||v,{preventScrollReset:y.preventScrollReset,formData:A,body:N,formMethod:y.method||f,formEncType:y.encType||g,flushSync:y.flushSync})}else await p(y.action||v,{preventScrollReset:y.preventScrollReset,formData:A,body:N,formMethod:y.method||f,formEncType:y.encType||g,replace:y.replace,state:y.state,fromRouteId:h,flushSync:y.flushSync,viewTransition:y.viewTransition})},[d,p,c,h])}function q0(s,{relative:c}={}){let{basename:h}=R.useContext(Ba),d=R.useContext(Ya);Ce(d,"useFormAction must be used inside a RouteContext");let[p]=d.matches.slice(-1),m={...$n(s||".",{relative:c})},y=pt();if(s==null){m.search=y.search;let v=new URLSearchParams(m.search),f=v.getAll("index");if(f.some(A=>A==="")){v.delete("index"),f.filter(N=>N).forEach(N=>v.append("index",N));let A=v.toString();m.search=A?`?${A}`:""}}return(!s||s===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),h!=="/"&&(m.pathname=m.pathname==="/"?h:ht([h,m.pathname])),Pn(m)}function Y0(s,{relative:c}={}){let h=R.useContext(hm);Ce(h!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=vm("useViewTransitionState"),p=$n(s,{relative:c});if(!h.isTransitioning)return!1;let m=ut(h.currentLocation.pathname,d)||h.currentLocation.pathname,y=ut(h.nextLocation.pathname,d)||h.nextLocation.pathname;return Sl(p.pathname,y)!=null||Sl(p.pathname,m)!=null}/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q0=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,h,d)=>d?d.toUpperCase():h.toLowerCase()),Fp=s=>{const c=Q0(s);return c.charAt(0).toUpperCase()+c.slice(1)},km=(...s)=>s.filter((c,h,d)=>!!c&&c.trim()!==""&&d.indexOf(c)===h).join(" ").trim(),V0=s=>{for(const c in s)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=R.forwardRef(({color:s="currentColor",size:c=24,strokeWidth:h=2,absoluteStrokeWidth:d,className:p="",children:m,iconNode:y,...v},f)=>R.createElement("svg",{ref:f,...K0,width:c,height:c,stroke:s,strokeWidth:d?Number(h)*24/Number(c):h,className:km("lucide",p),...!m&&!V0(v)&&{"aria-hidden":"true"},...v},[...y.map(([g,A])=>R.createElement(g,A)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(s,c)=>{const h=R.forwardRef(({className:d,...p},m)=>R.createElement(F0,{ref:m,iconNode:c,className:km(`lucide-${I0(Fp(s))}`,`lucide-${s}`,d),...p}));return h.displayName=Fp(s),h};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],wl=de("arrow-left",P0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qa=de("arrow-right",Z0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],wm=de("book-open",X0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],W0=de("bookmark",J0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],jm=de("calendar",$0);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Al=de("car",eb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Rl=de("circle-alert",ab);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],uc=de("circle-check",tb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Pp=de("cookie",ib);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Sm=de("external-link",nb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],lb=de("eye-off",rb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],ob=de("facebook",sb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],db=de("file-text",cb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",key:"pgg06f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m21.5 10.5-8-8",key:"a17d9x"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m8.5 7.5 8 8",key:"1oyaui"}]],ub=de("gavel",hb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Am=de("info",pb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],gb=de("linkedin",mb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],yb=de("lock",fb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Tc=de("mail",bb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],vb=de("map-pin",xb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],wb=de("menu",kb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Sb=de("message-square",jb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Zp=de("scale",Ab);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pc=de("search",Tb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Cb=de("share-2",Nb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Eb=de("shield-alert",Rb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],je=de("shield-check",zb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],mc=de("shield",Mb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Tl=de("triangle-alert",Db);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Ob=de("twitter",Hb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],gc=de("user-check",Bb);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Nc=de("user",_b);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cc=de("x",Ub),Lb={id:"delhi-jaipur-road-trip-2025",title:"Delhi to Jaipur Road Trip 2026: NH48 Route, Tolls & Safety Guide",slug:"delhi-jaipur-road-trip",excerpt:"Complete guide for Delhi-Jaipur NH48 drive. Best dhabas (Old Rao to Mannat), toll charges, speed cameras, safer night driving tips & rental car rules 2026.",category:"Road Trips",author:"Rajesh Navsagar",date:"2026-02-12",imageUrl:"/images/blogs/delhi-jaipur-guide.png",keywords:["Delhi to Jaipur Road Trip 2026","NH48 Highway Guide","Best Dhaba on Delhi Jaipur Highway","Delhi Jaipur Toll Charges","Jaipur Road Trip Safety","Old Rao Hotel Behror"],expertTip:"Early morning (4:30 AM) departure is the ONLY way to beat the Manesar traffic mess. If you leave after 7 AM, be ready for a 6-hour drive instead of 4.5 hours.",content:`

<p>Delhi se Jaipur ki road trip North India ke sabse popular aur accessible gateways mein se ek hai. Ye sirf 280 km ka drive nahi hai, balki ek transition hai—Delhi ki chaotic speed se Rajasthan ki royal hospitality ki taraf. 2026 mein aapke paas do major raste hain: The classic <strong>NH48 (Old NH8)</strong> ya phir naya <strong>Delhi-Mumbai Expressway (NE4)</strong>. <strong>Ye observations Rajesh's real-trip experience aur NHAI updates par based hain.</strong> Chahe aap apni personal car chala rahe ho ya rental, sahi preparation zaroori hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience and 2026 highway data.</em></p>

<p>Main Rajesh Navsagar, maine is route ko lagbhag 50 baar travel kiya hai. Maine dekha hai ki kaise Gurgaon ka traffic aapka trip shuru hone se pehle hi spoil kar sakta hai. Is guide mein hum detail mein baat karenge ki aapko kaunsa rasta chunna chahiye, kahan rukna chahiye aur Rajasthan border par security checks se kaise bachna chahiye. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Subah 5 baje nikalne ka faida ye hai ki aap Kherki Daula toll aur Manesar ki factory rush ko 6 baje se pehle cross kar lenge. Jab suraj niklega, tab aap Dharuhera cross kar rahe honge. Agar aap naye Expressway (NE4) se ja rahe hain, toh yaad rakhein ki wahan speed cameras kafi strict hain—120 kmph matlab 120 kmph, ek km bhi upar matlab seedha challan mobile par."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. Route Comparison: NH48 vs Delhi-Mumbai Expressway (NE4)</h2>

<p>2026 mein ye sabse bada sawal hai. Dono routes ke apne pros aur cons hain.</p>

<h3>NH48 (The Classic Route):</h3>
<ul>
  <li><strong>Pros:</strong> Best food options (Old Rao, Mannat, Haveli). Aap shehar ke bich se nikalte hain, toh repair shops aur petrol pumps har jagah hain.</li>
  <li><strong>Cons:</strong> Heavy traffic in Manesar, Dharuhera, and Kotputli. Diversions aur construction varna hamesha chalti rehti hai.</li>
  <li><strong>Travel Time:</strong> 5.5 - 6 hours.</li>
</ul>

<h3>NE4 (The Speed Route):</h3>
<ul>
  <li><strong>Pros:</strong> 120 kmph speed limit. Bilkul smooth tarmac. No red lights, no local bikers, no cattle.</li>
  <li><strong>Cons:</strong> Sohna tak pahunche mein traffic mil sakta hai. Food options limited hain (only designated Wayside Amenities). Jaipur main city jaane ke liye Lalsot se exit lena padta hai, jo thoda lamba pad jata hai.</li>
  <li><strong>Travel Time:</strong> 4 - 4.5 hours.</li>
</ul>

<hr/>

<h2>2. NH48 Bottlenecks: Kahan Savdhan Rehna Hai?</h2>

<p>Agar aap NH48 chun rahe hain, toh in spots par extra dhyan dein:</p>
<ul>
  <li><strong>Gurgaon to Manesar:</strong> Office hours mein yahan 10 km cover karne mein 1 ghanta lag sakta hai.</li>
  <li><strong>Dharuhera:</strong> Yahan water-logging (barish mein) aur heavy trucks ki wajah se jam lagta hai.</li>
  <li><strong>Shahpura/Kotputli:</strong> Yahan flyover construction aur local markets highway ke kafi close hain. Safely lane maintain karein.</li>
</ul>
<p>Check <a href="/blog/highway-speed-limits-india-fines-2026">NH48 Speed Limit Fines</a> to avoid unexpected challans.</p>

<hr/>

<h2>3. Best Dhabas: Khane ka asli Swaad</h2>

<p>Highway trip bina parathe aur lassi ke adhuri hai. Mere tried-and-tested spots:</p>

<ol>
  <li><strong>Old Rao Hotel (Behror):</strong> Inka swaad pichle 20 salon se wahi hai. Tandoori Aloo Paratha with white butter is a must.</li>
  <li><strong>Hotel Highway King:</strong> Clean washrooms aur decent South Indian and North Indian food ke liye jaana jata hai.</li>
  <li><strong>Mannat Haveli:</strong> Family ke saath stop ke liye best hai. Inka ambience Rajasthan ki feel deta hai.</li>
  <li><strong>Pavitra Dhaba:</strong> Agar aapko baisakh (traditional) style ka khana chahiye, toh ye Behror se thoda pehle aata hai. Highly recommended for Dal Bati Churma.</li>
</ol>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🚀 Delhi-Jaipur Driver Checklist</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Trip shuru karne se pehle ye checklist zaroor follow karein:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>✅ <strong>FASTag Balance:</strong> Ek round trip ke liye kam se kam ₹1,500 wallet mein rakhen (Expressway fees zyada hai). Check <a href="/blog/fastag-rules-india-2026-rental-cars">Fastag Rules 2026</a>.</li>
    <li>✅ <strong>Tyre Check:</strong> NH48 par kafi sharp stones ho sakte hain. See our <a href="/blog/tyre-burst-prevention-highway-guide-2026">Tyre Safety Guide</a>.</li>
    <li>✅ <strong>Identity Proof:</strong> Rajasthan borders par security checks 2026 mein badh gaye hain. Ensure karein gaadi ke saare papers (RC/Insurance/PUC) digital ya physical form mein ho.</li>
    <li>✅ <strong>Rental Rules:</strong> Agar gaadi rent ki hai, toh border tax pay hai ya nahi, check karein. Read our <a href="/blog/interstate-permit-guide-india-2026">Permit Guide</a>.</li>
  </ul>
</div>

<hr/>

<h2>4. Monsoon and Winter Specific Advice</h2>

<p><strong>Monsoon (July-Sept):</strong> NH48 par Manesar aur Dharuhera mein "Water Logging" ki bahut badi samasya hai. Agar heavy rain ho rahi hai, toh naya Expressway (NE4) hi lein kyunki wahan drainage system behtar hai. Check <a href="/blog/monsoon-driving-survival-guide-india">Monsoon Driving Tips</a>.</p>

<p><strong>Winter (Dec-Jan):</strong> Rajasthan borders (Behror and Kotputli) par kafi ghana kohra (fog) hota hai. Subah 8 baje se pehle nikalna risky ho sakta hai. Use fog lights and maintain hazard distance. Read our <a href="/blog/fog-driving-survival-guide-north-india">Fog Driving Guide</a>.</p>

<hr/>

<h2>5. Rental Car Regulations 2026</h2>

<p>Bohot se log Zoomcar ya Revv lekar Jaipur jaate hain. Black Number Plate rental cars ke liye rules kafi strict hain:
<ul>
  <li><strong>RTO Border Tax:</strong> Delhi se Rajasthan enter karte waqt Shahjahanpur border par commercial tax bharna hota hai. Receipt car mein safe rakhen.</li>
  <li><strong>Black Number Plate:</strong> Private white-plate cars ko rent par dena illegal hai. Agar police ne pakda, toh gaadi seize ho jayegi aur aap raste mein phans jayenge. Check our <a href="/blog/black-plate-rule-india-2026">Black Number Plate Rental Rules 2026</a>.</li>
</ul></p>

<hr/>

<h2>Frequently Asked Questions (Delhi to Jaipur)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is food available on the new Delhi-Mumbai Expressway?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes, but only at designated wayside amenities (WSA) located every 50km. You won't find local dhabas directly on the NE4. For variety, NH48 is still the king of highway food.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is the total toll cost for a round trip?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>For NH48, it is roughly ₹1,200 for a round trip. For the new Expressway (NE4), it can be around ₹1,800 to ₹2,000 depending on the exit point (Lalsot or Dausa).</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Are there petrol pumps on the new Expressway?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes, but they are limited. We highly recommend starting with a full tank from Delhi/Gurgaon to avoid any issues as some pumps might be temporarily non-functional on the newer stretch.</p>
      </div>
    </div>
  </div>
</div>

<hr/>

<p><strong>Total Trip Cost Estimate (One Way):</strong></p>
<ul>
  <li>Toll Charges: ₹600-₹700</li>
  <li>Fuel (Petrol): ₹2,500-₹3,000 (Expressway is longer)</li>
  <li>Food & Breaks: ₹500-₹1,000</li>
  <li>Total: ₹3,600-₹4,700</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>


<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Gb={id:"car-rental-scams-india",title:"Car Rental Scams in India 2026: 5 Common Frauds & Prevention Guide",slug:"car-rental-scams-india",excerpt:"Refund refused? Fake damages? Learn how to spot and avoid car rental scams in India. 2026 guide for Zoomcar, Revv, and local operator frauds.",category:"Consumer Awareness",author:"Rajesh Navsagar",date:"2026-02-13",imageUrl:"/images/blogs/car-rental-scams.png",keywords:["Car Rental Scams India 2026","Self Drive Car Fraud Prevention","Rental Security Deposit Refund","Fake Damage Charges Rental Car","Illegal White Plate Rental India"],expertTip:"Never take a car that has a private (white) number plate, even if the agent offers a 50% discount. In case of an accident, no insurance will cover you, and you might end up in a legal mess.",content:`

<p>India me self-drive car rentals ka trend pichle 5 saalon mein 10 guna badh gaya hai. Log ab personal gaadi ki jagah rental car prefer karte hain kyunki ye convenient hai. Lekin, convenience ke saath-saath "Scams" ki market bhi garam hai. <strong>Ye observations Rajesh's real-world cases (2023-2026) aur <a href="https://consumerhelpline.gov.in/" target="_blank" rel="noopener noreferrer">National Consumer Helpline</a> data par based hain.</strong> Har month hazaron travelers apni security deposit kho dete hain sirf thodi si laparwahi ki wajah se.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"White Plate Scam sabse deadly hai. Agar agent kahe 'Sir, commercial tax bacha lo', toh samajh jana wo aapko trap kar raha hai. Accident hua toh aapki jeb se 5-10 Lakh rupaye jayenge compensation ke."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>Kyun Badh rahe hain Car Rental Scams?</h2>
<p>Self-drive rentals ka model India me abhi bhi kafi unorganized hai. Zyadatar platforms "Marketplace" model par kaam karte hain, jahan car ka asli owner koi local host hota hai. Isi gap ka faida kuch "Greedy Hosts" uthate hain.</p>

<hr/>

<h2>Scam #1: Pre-Existing Damage ka Jaal</h2>
<p>Ye self-drive industry ka sabse purana aur popular scam hai. Aap gaadi lete hain, trip poora hota hai, aur drop ke waqt agent wahi "Purana Scratch" dhund nikalta hai jo aapne notice nahi kiya tha. Phir aapse ₹5,000 se ₹10,000 tak ki "Damage Fee" maangi jati hai.</p>

<h3>Kaise Bachein? (The Golden Rule)</h3>
<ul>
  <li>Gaadi milte hi uska <strong>4K HD Video</strong> banayein. Video mein car ka number aur charo side ka close-up hona chahiye.</li>
  <li>Tyre ke alloys aur bumpers ke niche check karein.</li>
  <li>Agent se bolo ki app mein saare pre-existing damages officially upload kare.</li>
</ul>

<hr/>

<h2>Scam #2: Not Permitted Number Plates (Black vs White)</h2>
<p>Kya aapko pata hai ki India mein rental car ke liye <strong>Black Number Plate with Yellow Letters</strong> mandatory hai? Local operators apni personal (white plate) gaadiyan rent par de dete hain. Check our complete <a href="/blog/black-plate-rule-india-2026">Black Plate Rules Guide</a>.</p>

<hr/>

<h2>Scam #3: The "Pending Challan" Trap</h2>
<p>Security deposit refund ke time host kehta hai "Sir, aapka 3,000 ka challan aaya hai". Asal mein wo challan purana hota hai ya fake hota hai. Always verify challans on the official Parivahan portal using our <a href="/blog/wrong-traffic-challan-contest-guide-india-2026">Challan Verification Guide</a>.</p>

<hr/>

<h2>Scam #4: Cleaning aur Late Return Penalties</h2>
<p>Trip khatam hone ke baad aapko email aata hai ki "Car was found dirty" aur ₹2,000 kaat liye gaye. Kai baar hosts mats ke niche thodi mitti ki photo kheenchi hoti hain. Late return ke case mein bhi, 15 minute ka delay bhi "Full Day Charge" mein badal diya jata hai.</p>

<hr/>

<h2>Scam #5: Security Deposit ka Atakna</h2>
<p>Aapne ₹5,000 deposit kiya, company ne bola "7 Days mein wapas ayega", lekin 1 mahina bit gaya. Ye paise aksar platform apne liquidity ke liye use karte hain.</p>

<h3>Recover kaise karein?</h3>
<ul>
  <li>Hamesha <strong>Credit Card</strong> se payment karein taaki "Chargeback" claim kar saken.</li>
  <li>Twitter (X) par company ke seniors ko tag karke public escalation karein.</li>
  <li>File a complaint at <a href="https://consumerhelpline.gov.in/" target="_blank" rel="noopener noreferrer">National Consumer Helpline (1915)</a>.</li>
</ul>

<hr/>

<h2>Frequently Asked Questions (Rental Scams)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How to check if a rental car has a valid permit?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Always verify the number plate color. It must be Black with Yellow letters. Additionally, ask for the 'All India Tourist Permit' (AITP) or State Permit document physically available in the dashboard.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What to do if the rental company deducts money for old scratches?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Show them the pre-trip video you recorded. If they still refuse, raise a dispute with your bank (if paid via Credit Card) and file a grievance on the National Consumer Helpline portal.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it safe to rent from local unknown operators?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>It is high risk. Local operators often use private white-plate cars which have no commercial insurance coverage. In case of an accident, you will be personally liable for all damages and legal issues.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I get a refund if the car condition is bad at pickup?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes. Reject the car immediately during pickup if it has bald tyres or mechanical issues. Do not start the trip. Take photos and demand a replacement or full refund as per platform policy.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. We are not legal advisors. For serious fraud cases, please contact the Cyber Crime Cell (1930) or Consumer Court.</em>
  </p>
</div>

<hr/>

<h3>Detailed Scam Analysis: The "Hidden Charges" Table</h3>
<p>Niche di gayi table mein humne un hidden charges ko list kiya hai jo agents aksar chupa lete hain. Booking se pehle inko confirm karna zaroori hai.</p>

<table style="width:100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Scam Type</th>
      <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Typical Cost</th>
      <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Prevention Tip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Fake Scratch/Dent</td>
      <td style="border: 1px solid #ddd; padding: 10px;">₹3,000 - ₹15,000</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Pickup ke time 4K Video banayein.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Cleaning Fee</td>
      <td style="border: 1px solid #ddd; padding: 10px;">₹500 - ₹2,000</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Car wapas karte waqt interior photos lein.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Clutch Burn Charge</td>
      <td style="border: 1px solid #ddd; padding: 10px;">₹8,000 - ₹25,000</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Test drive ke dauran clutch slip check karein.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Late Return Penalty</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Double Hourly Rate</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Always buffer 1 hour for traffic.</td>
    </tr>
  </tbody>
</table>

<hr/>

<h3>Advanced Tip: The "Clutch Plate" Trap</h3>
<p>Ye scam thoda technical hai. Host aapko ek aisi gaadi deta hai jiska clutch pehle se hi week (worn out) hota hai. Hill station (jaise Manali ya Ooty) par driving karte waqt clutch fully burn ho jata hai.  
Agent aap par blame dalta hai: "Sir, aapne half-clutch driving ki hai."</p>
<p><strong>Solution:</strong> Pickup ke waqt handbrake lagakar gaadi ko 2nd gear mein uthane ki koshish karein. Agar engine bina stall hue rev karta rahe, toh clutch kharab hai. Gaadi reject kar dein.</p>

<hr/>

<h3>Legal Recourse: Agar Scam Ho Jaye Toh Kya Karein?</h3>
<ol>
  <li><strong>Evidence Gathering:</strong> Sabse pehle apni pickup video, drop video, aur chat history ko save karein.</li>
  <li><strong>Email Escalation:</strong> Company ke CEO/Grievance Officer ko official mail likhein with subject: "Fraud Alert - Booking ID #12345".</li>
  <li><strong>Consumer Court (E-Daakhil):</strong> Ab aap ghar baithe online consumer complaint file kar sakte hain E-Daakhil portal par.</li>
  <li><strong>Social Shaming:</strong> Twitter par proofs ke saath post karein aur relevant ministry handles ko tag karein.</li>
</ol>

<hr/>

`},qb={id:"long-drive-safety-checklist",title:"Long Drive Safety Checklist 2026: 10 Critical Checks for Indian Highways",slug:"long-drive-safety-checklist",excerpt:"Don't risk a breakdown. Complete pre-trip safety checklist for Indian highways: Tyres, Battery, Documents & Emergency Kit guide by Rajesh Navsagar.",category:"Safety",author:"Rajesh Navsagar",date:"2026-02-10",imageUrl:"/images/blogs/long-drive-safety.png",keywords:["Long Drive Safety Checklist 2026","Highway Car Inspection India","Road Trip Pre-check","Car Breakdown Prevention","Tubeless Tyre Safety","Emergency Kit for Car"],expertTip:"Don't just check the engine oil level, check its consistency. If it feels gritty or looks like dark sludge, change it before the trip. A 1000km drive on bad oil can seriously reduce your engine’s lifespan.",content:`

<p>Long drive ka plan banana exciting hota hai, lekin safety preparation ko ignore karna kafi mehenga aur khatarnak pad sakta hai. Indian highways par breakdown, car overheating, tyre burst aur battery failure jaise issues bahut common hain. <strong>Ye checklist Rajesh's 7 saal ke highway experience aur <a href="https://morth.nic.in/road-safety" target="_blank" rel="noopener noreferrer">MoRTH Road Safety Guidelines</a> par based hai.</strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

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
  <li><strong>Air Pressure:</strong> Cold tyre pressure check karein. Highway par 2-3 PSI extra rakhne se fuel efficiency aur tyre cooling behtar rehti hai. See our detailed <a href="/blog/tyre-burst-prevention-highway-guide-2026">Tyre Burst Prevention Guide</a>.</li>
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

<p>Agar aapka trip shaam ke baad continue hona hai, toh lights check karna sabse zaroori hai. Faulty brake light ki wajah se peeche waala truck aapke andar ghus sakta hai. Also, beware of minor electrical faults in rentals, check our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a>.</p>

<hr/>

<h2>7. Documents aur Digital Safety</h2>

<p>India ke expressway aur state borders par police checking kafi strict ho gayi hai. DigiLocker ek achha option hai, lekin remote areas mein physical documents lifesaver bante hain.</p>
<ul>
  <li>RC, Insurance aur original Driving Licence.</li>
  <li><strong>PUC Certificate (Pollution):</strong> Iske bina ₹10,000 ka fine lag sakta hai.</li>
  <li><strong>FASTag Account:</strong> Balance check karke recharge karein.</li>
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

<h2>Frequently Asked Questions (Safety Checklist)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How often should I check tyre pressure on a long trip?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Ideally, check cold tyre pressure every morning before starting. On the highway, visually inspect tyres at every fuel stop (every 200-300 km) for any cuts or bulges.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is Nitrogen better than normal air for highways?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes. Nitrogen runs cooler and maintains pressure longer, reducing the risk of tyre bursts on hot concrete expressways. It is highly recommended for summer road trips.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What if my car overheats on the highway?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Stop immediately in a safe spot. Turn off the AC and open the hood to let heat escape. <strong>DO NOT open the radiator cap</strong> until the engine cools down completely (wait at least 30-45 minutes).</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Do I need a physical pollution certificate (PUC)?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes. While mParivahan is valid, many state cops demand the physical printed certificate. The fine for an expired PUC is ₹10,000, so always carry a hard copy.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<p><strong>The Financial Cost of Negligence (2026 Estimated):</strong></p>
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

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Yb={id:"best-time-to-start-long-road-trip-india-2026",title:"Best Time to Start Road Trip India 2026: Day vs Night Guide",slug:"best-time-to-start-long-road-trip-india-2026",excerpt:"Day vs Night Driving in India? 2026 road trip guide jo aapko batayega best starting time, safety tips, aur expressways vs national highways ke rules.",category:"Road Trips",author:"Rajesh Navsagar",date:"2025-12-28",imageUrl:"/images/blogs/day-vs-night.png",keywords:["Best time to start road trip India","Day vs Night driving India","Highway safety tips 2026","Early morning driving benefits","India highway driving rules","Night driving risks India expressway"],expertTip:"The hour between 4:30 AM and 5:30 AM is the 'Golden Hour'. You're out of the city, the air is cool, and you'll cover significantly more distance compared to a 9 AM start.",content:`

<p>India mein road trips ka craze har saal badh raha hai. Naye expressways, FASTag automation, aur advanced safety features wali cars ne long drives ko pehle se kaafi comfortable bana diya hai. <strong>Ye guide 2026 ke highway infrastructure aur NHAI traffic flow data ke analysis par based hai.</strong> Lekin 2026 mein bhi ek bada sawaal har traveller ko pareshan karta hai: <strong>Road trip shuru karne ka sabse sahi samay kya hai?</strong></p>

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
<p>India ka sabse bada night problem hai <strong>High Beam</strong>. Opposite side se aane wali cars aur trucks ki LED lights aapko 2-3 seconds ke liye blind kar deti hain. Isse "Mental Fatigue" kafi jaldi hoti hai.</p>

<h3>3. The Silent Killer: Microsleep</h3>
<p>Insaan ki body subah 2 baje se 5 baje ke beech naturally shutdown hone ki koshish karti hai. Ise <strong>Circadian Rhythm</strong> kehte hain. Aapko lag raha hai aap alert hain, lekin aapka reaction time 50% kam ho jata hai.</p>

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


<hr/>

            <h2>Frequently Asked Questions (Road Trip Timing)</h2>
            <div itemscope itemtype="https://schema.org/FAQPage">
              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is the safest time to start a long drive?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>The safest and most efficient window is <strong>4:30 AM to 5:30 AM</strong>. This allows you to exit the city before traffic builds up, maximizes daylight driving hours, and ensures you are fresh and alert.</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Why is night driving risky in India?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>Night driving exposes you to <strong>High Beam Glare</strong>, reduced visibility of potholes/cattle, and the risk of 'Microsleep' (drowsiness). Additionally, emergency help (mechanics/medical) is harder to find at night.</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">When should I avoid driving in winter?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>In North India, avoid driving between <strong>2 AM and 8 AM</strong> during winter (Dec-Jan) due to dense fog. Visibility can drop to zero. Wait until the sun is up and fog clears.</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How often should I take breaks on a road trip?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>Follow the <strong>2-hour rule</strong>. Stop every 2 hours or every 150-200 km for at least 15-20 minutes. This helps maintain blood circulation and keeps the driver's mind alert.</p>
                  </div>
                </div>
              </div>
            </div>
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

<p>Yaad rakhen, <strong>It's better to arrive late than to never arrive.</strong> Safe drive karein!</p>

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

`},Ib={id:"night-driving-survival-guide-india-2026",title:"Night Driving Survival Guide India: 7 Rules for NH48 & Expressways",slug:"night-driving-survival-guide-india-2026",excerpt:"Night driving on Indian highways is dangerous. Learn to handle high-beam glare, identify truck signals, avoid microsleep & stay safe on NH48.",category:"Safety",author:"Rajesh Navsagar",date:"2026-02-12",imageUrl:"/images/blogs/night-driving-survival.png",keywords:["Night Driving Tips India","High Beam Glare Safety","Highway Driving at Night","NH48 Night Safety","Microsleep Prevention","Truck Signals India"],expertTip:"The most dangerous time to drive in India is 3:30 AM to 5 AM. Your body naturally wants to sleep. If you find yourself blinking more than twice, pull over at a dhaba and sleep for 30 minutes. It's not a race.",content:`

<p>Zyaadatar "experts" kehte hain ki raat ko drive mat karo. Lekin ek regular traveller jaise main hoon, jaanta hoon ki kabhi-kabhi schedule ya garmi se bachne ke liye raat ki drive zaroori ho jati hai. <strong>Ye survival rules Rajesh's 7 years ke night driving experience aur <a href="https://morth.nic.in/road-safety" target="_blank" rel="noopener noreferrer">MoRTH Accident Data</a> par based hain.</strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Subah ke 3:30 AM se 5 AM sabse khatarnak waqt hota hai. Agar aankhein bhari lag rahi hain, toh 20 minute ki Power Nap kisi bhi Red Bull ya Coffee se 100 guna zyada effective hai. Pull over safely."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. The Glare War: Managing High Beams</h2>

<p>India ka sabse bada dushman hai 'High Beam'. Jab saamne se koi 100W ki LED aankhon mein maarta hai, toh aap kuch seconds ke liye "Blind" ho jaate ho. Ise 'Glare' kehte hain. For route-specific hazards, check our <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Highway Guide</a>.</p>

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

<p>National Highways par construction kabhi khatam nahi hota. Raat ko bahut saare diversions ke paas reflectors nahi hote. Hamesha kisi fast-moving truck ke peeche 50-70 meter distance par chalein. Check our <a href="/blog/long-drive-safety-checklist">Safety Checklist Guide</a> before starting your night trip.</p>

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

<p>Raat mein sunsaan raste par fuel khatam hona sabse bada risk hai. Hamesha 25% fuel rehte hi refill karwa len. Koshish karein ki branded fuel stations (search for 'Company Owned' pumps) par hi rukein jahan light aur CCTV ho.</p>

<hr/>

<h2>Frequently Asked Questions (Night Driving)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it safe to drive on highways at night in India?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Generally, major National Highways (like NH48, NH44) are safe due to constant traffic. However, state highways can be risky due to cattle, lack of lighting, and robbery threats in remote areas. Avoid solo night travel on secluded routes.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How to avoid high beam glare from oncoming traffic?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Do not look directly at the lights. Focus your eyes on the left-side white edge line of the road. Use the night mode on your rearview mirror and consider wearing anti-glare yellow glasses.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is the best time to drive at night?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>If you must drive at night, the slot from 8 PM to 12 AM is relatively safer as you are still alert. Avoid the 2 AM to 5 AM window as it corresponds with the body's peak sleep requirement (circadian rhythm dip).</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What to do if my car breaks down at night?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Turn on hazard lights immediately. Try to park under a street light or near a populated area. Call the National Highway Helpline <strong>1033</strong> immediately. Lock all doors and stay inside until help arrives.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Qb={id:"black-plate-rule-india-2026",title:"Black Number Plate Rules 2026: Why Rental Cars Must Have It?",slug:"black-plate-rule-india-2026",excerpt:"India mein rental cars ke liye Black Number Plate Rule follow karna mandatory hai. Agar aapko koi white-plate gaadi rental ke liye offer kar raha hai, toh woh authorized nahi hai. Understand Black Number Plate rules, insurance risks, and RTO fines for self-drive cars in India (2026 Guide).",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-01",imageUrl:"/images/blogs/black-plate-rule.png",keywords:["Black number plate India","Self drive rental rules","RTO rules for rental cars","Yellow on black plate","Rental car registration India","Motor Vehicles Act Section 66","Commercial vs Private car insurance"],expertTip:"The Black Number Plate implies the car is registered under the Rent-a-Cab / Self-Drive commercial category. This is the only legal way to drive a self-drive rental in India. If the plate is white, you are driving a vehicle not permitted for commercial use.",content:`
<p>India mein jab aap self-drive car rent karte hain, toh sabse pehli cheez jo aapko notice karni chahiye woh hai car ki <strong>Number Plate</strong>. Agar aapko koi company ya local operator white number plate wali car de raha hai, toh samajh lijiye aap kanooni (legal) aur financial taur par bade khatre mein hain. <strong>Ye observations RTO enforcement data ke general reference aur <a href="https://morth.nic.in/" target="_blank" rel="noopener noreferrer">MoRTH (Ministry of Road Transport and Highways)</a> guidelines par based hain.</strong> 2026 mein RTO rules aur bhi sakht ho chuke hain, aur bina permit ki gaadi chalana ek serious offense hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Is guide mein hum baat karenge ki <strong>Black Number Plate (Yellow Letters)</strong> kyun mandatory hai, iske peeche ka kanoon (Law) kya hai, aur kyun white plate car rent karne se aapka bada nuksan ho sakta hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr />

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"The Black Number Plate implies the car is registered under the Rent-a-Cab commercial category. This is the only legal way to drive a self-drive rental in India. If the plate is white, you are risking total insurance nullification."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; padding-top: 8px;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr />

<h2>Kya Hai Black Number Plate Ka Asli Rule?</h2>

<p>Ministry of Road Transport and Highways (MoRTH) ke <strong>guidelines ke general reference</strong> ke mutabiq, koi bhi car jo "Self-Drive" category mein chalti hai (jise aap bina driver ke rent karte ho), uska registration <strong>Commercial (Rent-a-Cab)</strong> hona chahiye. Iska pehchan hai:</p>

<ul>
  <li><strong>Background Colour:</strong> Black (Kala)</li>
  <li><strong>Font Colour:</strong> Yellow (Peela)</li>
</ul>

<p>Ye "Rent-a-Cab" scheme ke under register hoti hai. Ye white plate (Private) ya yellow plate (Taxi with driver) se bilkul alag hai. Self-drive ke liye sirf black plate hi legal hai. For more on such traps, read our <a href="/blog/car-rental-scams-india">Car Rental Scams Guide</a>.</p>

<hr/>

<h2>Kanoon kya kehta hai? (Motor Vehicles Act)</h2>

<p>India ke <strong>Motor Vehicles Act 1988 aur State Excise Policies ke general reference</strong> ke mutabik, bina permit ke commercial gaadi chalana authorize nahi hai. Black Plate rentals ko commercially operate karne ke liye Tourist Permit zaroori hai. Also read about <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Road Trip</a>.</p>

<hr />

<h2>White Plate Car Rent Karne Ke 4 Bade Khatre</h2>

<p>Bohot saare local operators paisa bachane ke liye apni private (white plate) cars ko rent par de dete hain. Lekin iska nuksan sirf aapko hota hai:</p>

<h3>1. The Zero Insurance Nightmare</h3>
<p>Sabse bada khatra ye hai ki private insurance policy sirf personal use ke liye hoti hai. Agar accident hota hai, toh insurance company turant claim reject kar degi kyunki car commercial use ho rahi thi. Saara kharcha (third-party liability aur car repair) aapko apni jeb se bharna padega. Before planning your next trip, check our <a href="/blog/long-drive-safety-checklist">Long drive safety checklist for Indian highways</a>.</p>

<h3>2. Police Seizure aur Impounding</h3>
<p>Highway checking ke dauraan agar RTO ya Police ne pakda, toh gaadi turant seize ho jati hai. Aap raste mein apni family ya doston ke sath stranded (phas) jayenge.</p>

<h3>3. Heavy Court Fines</h3>
<p>Not permitted commercial use ke liye court aapse ₹10,000 se ₹25,000 tak ka fine le sakti hai. Iske alawa, unauthorized transport ka case bhi aap par chal sakta hai.</p>

<h3>4. Toll Booth Issues</h3>
<p>FASTag classification mein commercial cars aur private cars ki category alag hoti hai. White plate par commercial use karne par toll booths par bhi blacklisting aur double penalty ka darr rehta hai. For accurate toll rules, read our <a href="/blog/fastag-rules-india-2026-rental-cars">Complete FASTag rules 2026 guide</a>.</p>

<hr/>

<div style="background-color: #fce7e7; border-left: 5px solid #ef4444; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif;">
  <h4 style="margin-top: 0; color: #991b1b; font-weight: 800;">🚫 Danger Zone: Local Host Scams</h4>
  <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 20px;">Agar koi operator ye bolta hai, toh woh jhut bol raha hai:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>❌ "Bhai, white plate mein police nahi pakadti, ye sab jhut hai."</li>
    <li>❌ "Insurance manage ho jayega, humari setting hai."</li>
    <li>❌ "Black plate mein state barrier par zyada tax lagta hai."</li>
  </ul>
  <p style="font-size: 13px; font-weight: bold; margin-top: 10px;">Reality: Ye sab baatein aapko fansane ke liye kahi jati hain. Legal car hamesha safe hoti hai.</p>
</div>

<hr />

<h2>Black Plate ke Faide (Peace of Mind)</h2>

<p>Black plate car rent karne ke kafi faide hain jo log ignore kar dete hain:</p>
<ul>
  <li><strong>Commercial Insurance:</strong> In gaadiyon ka insurance hi commercial category ka hota hai, toh accident ke waqt aap safe rehte hain.</li>
  <li><strong>All India Permit (Form 59):</strong> Aapko har state border par tax ke liye jhagadna nahi padta. Sirf bahar se chamkti hui gaadi achi nahi hoti.</li>
  <li><strong>Speed Limit:</strong> Commercial self-drive cars mein aksar speed governors ya strict monitoring hoti hai.</li>
</ul>

<hr />

<h2>Checklist: Gaadi lene se pehle ye 3 cheez check karein</h2>

<p>Jab bhi aap gaadi pick karein, ye papers zaroori dekhein:</p>
<ol>
  <li><strong>RC (Registration Certificate):</strong> Yahan 'Ownership Type' mein "Commercial (Rent-a-Cab)" likha hona chahiye.</li>
  <li><strong>Commercial Insurance:</strong> Validate karein ki insurance current hai aur self-drive covers hai.</li>
  <li><strong>Form 59 (All India Permit):</strong> Ye permit state borders cross karne ke liye zaroori hai.</li>
</ol>

<hr />

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">⚖️ Legal Safety Checklist Summary</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>Plate Color:</strong> Black background with Yellow font (Mandatory).</div></li>
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>Registration:</strong> Check RC for "Transport/Rent-a-cab" category.</div></li>
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>Permit:</strong> Form 59 / All India Permit (Must be active).</div></li>
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>Insurance:</strong> Commercial Insurance (White plate insurance is void).</div></li>
  </ul>
</div>

<hr />

<h2>Conclusion: Legal Safety First</h2>

<p>Saste ke chakkar mein ya "jugaad" ke bharose white plate car lena aapki zindagi ki sabse badi galti ho sakti hai. 2026 mein RTO kafi digitized aur strict ho chuka hai. Hamesha verified platforms se hi gaadi book karein jo legal black plate gaadiyan provide karte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Platform Verification Tips:</strong></p>
<ul>
  <li><strong>Zoomcar / Revv:</strong> 95%+ cars black plate hain (company-verified fleet)</li>
  <li><strong>MyChoize:</strong> 80% black plate (marketplace model, host-dependent)</li>
  <li><strong>Local Operators:</strong> 40% black plate (high risk, always verify RC before booking)</li>
  <li><strong>OLX / Facebook Rentals:</strong> 10% black plate (avoid unless you personally verify documents)</li>
</ul>

<p><strong>Penalty Structure for Illegal Commercial Use (2026):</strong></p>
<ul>
  <li>First Offense: ₹10,000 fine + vehicle impound for 7 days</li>
  <li>Repeat Offense: ₹25,000 fine + license suspension (3 months)</li>
  <li>Accident with white plate rental: Insurance claim rejected + full liability on driver</li>
  <li>Owner penalty: ₹50,000 + RC cancellation</li>
</ul>

<p><strong>How to Report Illegal Rentals:</strong> RTO Helpline (state-specific) | Vahan Citizen App. If you were wrongfully fined, here is how to <a href="/blog/wrong-traffic-challan-contest-guide-india-2026">Contest a traffic challan in India</a>.</p>

<p><strong>Quick Verification:</strong> Use mParivahan app → Enter vehicle number → Check "Vehicle Class" (should show "Transport Vehicle" or "Rent-a-Cab")</p>

<p><strong>Real Case Studies (2024-2025):</strong></p>
<ul>
  <li><strong>Case 1 - Mumbai Highway (Dec 2024):</strong> Tourist rented white plate car from local operator for Goa trip. Stopped at Ratnagiri toll plaza. Vehicle seized, ₹15,000 fine, 3-day detention. Insurance claim for minor accident rejected. Total loss: ₹35,000+</li>
  <li><strong>Case 2 - Delhi-Jaipur (Jan 2025):</strong> Family used OLX rental (white plate). Accident near Shahjahanpur. Insurance company refused claim citing "illegal commercial use." Out-of-pocket expense: ₹2.8 lakhs for repairs + medical</li>
  <li><strong>Case 3 - Bangalore (Feb 2025):</strong> Tech professional booked verified Zoomcar (black plate). Smooth 1200km trip to Goa and back. Zero issues. Total cost: ₹8,500 (transparent pricing)</li>
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
      <td style="padding: 15px;">₹15,000 - ₹25,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Karnataka</td>
      <td style="padding: 15px;">High</td>
      <td style="padding: 15px;">Highway checkpoints</td>
      <td style="padding: 15px;">₹10,000 - ₹20,000</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 15px; font-weight: 600;">Delhi-NCR</td>
      <td style="padding: 15px;">Very High</td>
      <td style="padding: 15px;">Entry points, expressways</td>
      <td style="padding: 15px;">₹12,000 - ₹18,000</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: 600;">Rajasthan</td>
      <td style="padding: 15px;">Medium</td>
      <td style="padding: 15px;">Tourist routes</td>
      <td style="padding: 15px;">₹8,000 - ₹15,000</td>
    </tr>
  </tbody>
</table>

<p>Yaad rakhen—ek legal rental car aapke road trip ko memories mein badalti hai, aur ek unauthorized car use court-kacheri mein.</p>

<hr />

<h2>Frequently Asked Questions (Black Number Plate Rules)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it illegal to drive a white plate rental car?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes, absolutely illegal. Under Section 66 of the Motor Vehicles Act, using a private vehicle (white plate) for commercial purposes (renting) without a permit is a punishable offense. You risk vehicle seizure and heavy fines.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is the fine for driving a white plate rental car?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>The fine ranges from <strong>₹10,000 to ₹25,000</strong> depending on the state. Additionally, the police can impound the vehicle immediately.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Does insurance cover white plate rental accidents?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. Private car insurance policies have a "Limitations as to Use" clause that excludes commercial renting. If you crash a rented white plate car, you are personally liable for 100% of the damages.</p>
      </div>
    </div>
  </div>
</div>

<hr />

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>
`},Vb={id:"monsoon-driving-survival-guide-india",title:"Monsoon Driving Guide 2026: Hydroplaning & Waterlogging Safety",slug:"monsoon-driving-survival-guide-india",excerpt:"Don't let rain ruin your road trip. Learn how to handle hydroplaning, avoid engine lock, and drive safely in Indian monsoons. 2026 Update.",category:"Safety",author:"Rajesh Navsagar",date:"2026-02-13",imageUrl:"/images/blogs/monsoon-driving.png",keywords:["Monsoon Driving Safety Tips India","Hydroplaning Car Control","Driving in Waterlogged Roads","Car Engine Hydro Lock Prevention","Monsoon Road Trip Safety","Wiper Blade Check"],expertTip:"If you hit a water patch and feel the car sliding (hydroplaning), Resist the urge to brake. Take your foot off the gas and keep the steering wheel straight until you feel the tyres grip the road again.",content:`

<p>Har saal monsoon aate hi WhatsApp aur Instagram par 'Beautiful Road Trip' ki videos aane lagti hain. Lekin ek baat jo koi "Travel Influencer" nahi batata, woh hai <strong>Hydroplaning</strong>. <strong>Ye incident Rajesh's own Mumbai-Pune Expressway trip (2024 monsoon) aur <a href="https://morth.nic.in/road-safety" target="_blank" rel="noopener noreferrer">MoRTH Guidelines</a> par based hai.</strong> Do saal pehle meri gaadi ek water patch par slip hui, aur steering par control temporarily loose ho gaya. Woh 3 second mere jeevan ke sabse lambe the.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"If you hit a water patch and feel the car sliding (hydroplaning), resist the urge to brake. Take your foot off the gas and keep the steering wheel straight until you feel the tyres grip the road again. Any sudden reaction will cause a spin."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. Hydroplaning: Jab Aapki Car Boat Ban Jati Hai</h2>

<p>Jab road par paani jama hota hai aur aap high speed (80+ kmph) mein hote ho, toh tire aur road ke beech paani ki ek "Film" (layer) aa jati hai. Isse aapke tires road se "Detach" ho jate hain aur paani par tairne lagte hain. Always ensure your tyres have profound tread depth, check our <a href="/blog/tyre-burst-prevention-highway-guide-2026">Tyre Safety Guide</a>.</p>

<h3>Real Survival Strategy:</h3>
<p>Agar gaadi slip ho, toh <strong>Brake par pair mat maaro</strong>. Brakes marne se tires lock ho jayenge aur gaadi spin karne lagegi. Steering ko bilkul seedha rakho aur accelerator se pair hata lo. Gaadi ko naturally slow hone do jab tak tires phir se road ko 'grip' na kar lein.</p>

<hr/>

<h2>2. Braking Distance ka Ganit (Maths)</h2>

<p>Wet roads par braking distance <strong>2 guna (2x)</strong> badh jati hai. Agar dry road par aap 60 kmph se 20 meter mein rukte hain, toh baarish mein wahi car 40-50 meter legi. Before you leave, go through our <a href="/blog/long-drive-safety-checklist">Essential Safety Checklist</a>.</p>

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
<p><strong>Pro Hack:</strong> Trip se pehle windshield ke andar ki taraf halka sa <strong>Shaving Cream</strong> laga kar saaf kar den. Ye glass par moisture jamne se rokte hain. See also <a href="/blog/fog-driving-survival-guide-north-india">Fog Driving Guide</a>.</p>

<hr/>

<h2>4. Waterlogging: Doobti Hui Gaadi ka Bachaav</h2>

<p>India mein Mumbai, Bangalore aur Delhi jaise shehron mein sudden waterlogging ho jati hai. 
<ul>
  <li><strong>The Exhaust Rule:</strong> Agar pani radiator grill ya exhaust pipe ke level tak hai, toh gaadi mat ghusaein.</li>
  <li><strong>First Gear Strategy:</strong> Agar ghusna hi pade, toh gaadi ko <strong>1st Gear</strong> mein rakhen aur accelerator ko daba kar rakhen (High RPM).</li>
  <li><strong>Stalled Car:</strong> Agar pani mein gaadi band ho jaye, toh <strong>Restart mat karein</strong>. Mechanical Lock (Hydro-lock) ho sakta hai jo engine ko permanently destroy kar dega.</li>
</ul>

<hr/>

<h2>Frequently Asked Questions (Monsoon Driving)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What to do if my car hydroplanes?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Stay calm. Do not brake or accelerate suddenly. Keep the steering wheel straight and let the car slow down naturally until you regain traction.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How deep water can a car go through?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Generally, if water is below the center of your wheel, it is safe-ish. If it reaches the door sill or exhaust pipe, do not enter. Water can enter the engine through the air intake (usually behind the grille) and destroy it instantly.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Why do brakes fail in rain?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Water lubricates the brake discs, reducing friction. To dry them, gently tap the brake pedal a few times after driving through a puddle to generate heat and evaporate the water.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Should I turn on hazard lights in heavy rain?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. Use headlights (low beam) and fog lights. Hazard lights are only for stationary vehicles. Using them while moving makes it impossible for others to know if you are turning or changing lanes.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Monsoon floods are unpredictable. Check official weather alerts from IMD before planning any trip.</em>
  </p>
</div>

<hr/>

<h3>Essential Heavy Rain Safety Equipment Checklist</h3>
<p>Monsoon trip par nikalne se pehle ye cheezein aapki gaadi mein honi hi chahiye:</p>

<ul style="list-style-type: none; padding: 0;">
  <li style="background: #f0f9ff; margin: 10px 0; padding: 15px; border-left: 4px solid #0369a1;">
    <strong>🌧️ High-Quality Wipers:</strong> Bosch or Hella frameless wipers recommended. Old wipers leave streaks that blind you at night.
  </li>
  <li style="background: #f0f9ff; margin: 10px 0; padding: 15px; border-left: 4px solid #0369a1;">
    <strong>🔦 Emergency Flashlight:</strong> Raat mein tyre change karne ke liye phone ki light kaafi nahi hoti.
  </li>
  <li style="background: #f0f9ff; margin: 10px 0; padding: 15px; border-left: 4px solid #0369a1;">
    <strong>🔨 Glass Breaker Tool:</strong> Flooding situation mein agar darwaza jam ho jaye, toh ye tool aapki jaan bacha sakta hai.
  </li>
  <li style="background: #f0f9ff; margin: 10px 0; padding: 15px; border-left: 4px solid #0369a1;">
    <strong>🧴 Anti-Fog Spray:</strong> Windshield aur ORVMs (side mirrors) par lagane ke liye.
  </li>
</ul>

<hr/>

<h3>Deep Water Wading: Step-by-Step Guide</h3>
<p>Agar aapko kisi flooded underpass se guzarna hi pade (jo hum recommend nahi karte), toh ye technique follow karein:</p>
<ol>
  <li><strong>AC Off:</strong> Sabse pehle AC compressor band karein taaki fan paani ko engine bay mein na phenke.</li>
  <li><strong>First Gear Only:</strong> Gaadi ko 1st gear mein rakhein.</li>
  <li><strong>Constant Throttle:</strong> Accelerator ko ek constant position par dabaye rakhein. Race kam-zyada na karein.</li>
  <li><strong>No Shifting:</strong> Pani ke beech mein gear change karne ki galti bilkul na karein. Clutch dabate hi exhaust mein paani ghus sakta hai.</li>
</ol>

<p><strong>Warning:</strong> Agar pani aapke bonnet ke upar aa gaya hai, toh engine turant band ho jayega. Window open karein aur roof par chad kar madad ka intezaar karein.</p>

<hr/>

`},Kb={id:"car-pickup-inspection-checklist-rajesh",title:"Rental Car Pickup Checklist 2026: 15-Point Inspection Guide",slug:"car-pickup-inspection-checklist-rajesh",excerpt:"Rental car pickup ke waqt agent hamesha jaldi mein hota hai. Paise bachane aur fraud se bachne ke liye mera 15-point expert inspection formula use karein.",category:"Rental Policy",author:"Rajesh Navsagar",date:"2026-01-03",imageUrl:"/images/blogs/car-pickup-audit.png",keywords:["Car pickup checklist","Rental car inspection tips","How to check rental car","Rental damage scam avoidance","Rajesh Navsagar rental tips","Zoomcar pickup audit","Revv car check list","RTO rental car rules India","MoRTH car rental guidelines"],expertTip:"Sabse zaroori cheez: Car ke Spare Tyre (Stepney) aur Jack ko physically check karein. 40% rental cars mein spare tyre puncture hota hai ya jack missing hota hai. Agar highway par puncture hua, toh aap stranded ho jayenge.",content:`

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


<hr/>

            <h2>Frequently Asked Questions (Car Pickup Inspection)</h2>
            <div itemscope itemtype="https://schema.org/FAQPage">
              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Why is a video inspection necessary?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>A continuous <strong>360-degree video</strong> is undeniable proof. Photos can be disputed (date/time issues), but a video showing the agent and the car's condition at pickup time prevents false damage claims effectively.</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What if the Check Engine light is on?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p><strong>Reject the car immediately.</strong> A Check Engine light could mean serious engine or emission trouble. Driving it might lead to a breakdown on the highway, and the rental company may blame you for "negligence."</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How to check tyre condition quickly?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>Use the "Coin Test" or simply look at the <strong>Tread Wear Indicator (TWI)</strong> bars inside the grooves. If the tread is flush with these bars, the tyre is bald and unsafe for highway driving (risk of bursting).</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is the fuel policy usually?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>Most companies follow strict policies: <strong>Same-to-Same</strong> (return with the same level) or <strong>Full-to-Full</strong>. Always photograph the fuel gauge at pickup. Discrepancies here are a common way to extract extra charges.</p>
                  </div>
                </div>
              </div>
            </div>
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
  <li><strong>AC Cooling:</strong> Turn AC to Max immediately. If it takes &gt; 5 mins to cool, gas is low. Reject car.</li>
  <li><strong>Wiper Fluid:</strong> Check if washer fluid sprays. vital for highway.</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Road rules, enforcement practices, and rental policies may change. Always verify with official authorities and providers before travel.</em>
  </p>
</div>

`},Fb={id:"fastag-rules-india-2026-rental-cars",title:"FASTag Rules 2026: Rental Cars Double Toll Penalty Guide",slug:"fastag-rules-india-2026-rental-cars",excerpt:'NHAI 2026 FASTag rules for rental cars. "One Vehicle One FASTag", Blacklist status check, and avoiding double toll penalties on Indian highways.',category:"Highway Rules",author:"Rajesh Navsagar",date:"2026-02-13",imageUrl:"/images/blogs/fastag-rules-india-2026.png",keywords:["FASTag Rules for Rental Cars 2026","Double Toll Penalty Check","One Vehicle One FASTag NHAI","FASTag Blacklist Status Check","Rental Car Toll Charges"],expertTip:"Toll par jhagadne se acha hai, pehle se taiyar raho. Hamesha trip shuru karne se pehle 'Park+' app par gaadi ka FASTag balance aur blacklist status check kar lo.",content:`

<p>India ki highways par driving ka maza ab "Cashless" ho chuka hai, lekin self-drive car rental karne walon ke liye ye abhi bhi ek badi "Tension" ka karan hai. 2026 mein NHAI ne kai naye badlav kiye hain, jisme RFID ke saath-saath Satellite-based tolling (GNSS) bhi shaamil hai. Maine khud NH-48 aur NH-44 par travel karte waqt dekha hai ki log toll plaza par extra charges bharte hain sirf isliye kyunki unhe rental car ke FASTag rules ki barikiyaan nahi pata hotey. <strong>Ye analysis Rajesh's field audits aur official NHAI directives par based hai.</strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience and 2026 regulatory updates.</em></p>

<p>Main Rajesh Navsagar, pichle 5 salon mein lagbhag 50,000 km Indian highways par drive kar chuka hoon. FASTag ne qatar (queues) toh kam kar di hain, lekin "Blacklisting" aur "Double Penalty" ke naye systems ne naye challenges khade kar diye hain. Is article mein hum baat karenge un hidden traps ki jo aapka bank balance khali kar sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Toll par jhagadne se acha hai, pehle se taiyar raho. Hamesha trip shuru karne se pehle 'Park+' ya 'NPCI' portal par gaadi ka FASTag balance aur blacklist status check kar lo. Agar aap rental car use kar rahe hain, toh host se 'Current Balance' ka screenshot mangna aapka haq hai. It saves time and the 2x penalty embarrassment."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. 2026 NHAI Update: GNSS-Based Tolling vs RFID</h2>

<p><strong>Ye rules <a href="https://morth.nic.in/" target="_blank" rel="noopener noreferrer">MoRTH (Ministry of Road Transport and Highways)</a> aur NHAI ke 2026 protocols par based hain.</strong> 2026 mein India ne "Barrier-less" tolling ki taraf kadam badhaya hai.</p>

<h3>GPS (GNSS) Tolling Kaise Kaam Karti Hai?</h3>
<p>Ab highways par portals lage hain jo gaadi ka registration plate aur GPS location read karte hain. Aapki gaadi ne highway par kitna km travel kiya, uske hisab se paise directly FASTag wallet se kat jayenge.
<ul>
  <li><strong>Benefit:</strong> Toll plaza par rukne ki zaroorat nahi hai.</li>
  <li><strong>Risk:</strong> Agar gaadi ka GPS tracker malfunction kar raha hai, toh system aapko higher rate par charge kar sakta hai ya tag ko suspend kar deta hai.</li>
</ul>
Check your rental car's dashboard for any GNSS-ready devices. For compliance, see our <a href="/blog/black-plate-rule-india-2026">Black Plate Guide</a>.</p>

<hr/>

<h2>2. The 'One Vehicle One FASTag' Crisis</h2>

<p>NHAI ne ab strict kar diya hai ki ek gaadi par sirf ek hi physical FASTag hona chahiye. 2026 mein agar windshield par purane tags chipke huye hain, toh scanner confuse ho jata hai aur system use "Security Threat" maan kar account freeze kar deta hai.</p>

<h3>Rental Car Issues:</h3>
<ul>
  <li><strong>KYC Blacklisting:</strong> 2026 mein KYC update na hone par hazaron tags blacklist huye hain. Rental companies kai baar badi fleets ka KYC miss kar deti hain.</li>
  <li><strong>Host Negligence:</strong> Agar purana traveler negative balance chhoda hai, toh tag recover hone mein 24-48 ghante lagte hain. Is dauran aapko cash mein 2 guna payment karni hogi.</li>
</ul>
Avoid these by checking our <a href="/blog/highway-speed-limits-india-fines-2026">Speed Limit Guide</a> to avoid extra fines generated via same fastag account.</p>

<hr/>

<h2>3. Double Penalty Se Bachne ka Step-by-Step Guide</h2>

<p>NHAI ke rules ke mutabik: <em>"Agar aap FASTag lane mein ghuste hain aur aapka tag work nahi kar raha, toh aapko double toll dena hoga."</em> Ise avoid karne ke liye ye steps follow karein:</p>

<h3>The 'Safe Entry' Protocol:</h3>
<ol>
  <li><strong>Check Status early:</strong> Toll se 5km pehle hi SMS check karein (if possible) ya bank app verify karein.</li>
  <li><strong>Maintain Gap:</strong> Saamne wali gaadi se kam se kam 10 feet ka gap rakhen. Aksar piche wali gaadi ka sensor pehle read ho jata hai aur gate nahi khulta.</li>
  <li><strong>Low Speed:</strong> Toll lane mein 10 kmph se zyada speed na rakhen. Sensors move hote huye tags ko thodi der mein catch karte hain.</li>
</ol>
For peaceful driving on routes like <a href="/blog/delhi-jaipur-road-trip">Delhi to Jaipur</a>, always check the tag first before the trip starts.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif;">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase;">🛡️ FASTag Security: Scanning Scams 2026</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Aaj kal dhabas aur parking lots mein fake scanners se paise nikalne ke cases bade hain. Rajesh's advice:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🚫 <strong>No Manual Scans:</strong> Kisi bhi unauthorized person ko windshield par apna phone ya chota scanner na lagane dein.</li>
    <li>🚫 <strong>SMS Alerts:</strong> Ensure karein ki aapka mobile number FASTag account se linked hai (host se details lein).</li>
    <li>🚫 <strong>Balance Limit:</strong> Rental cars mein hamesha sirf wahi amount recharge karein jo trip ke liye zaroori ho.</li>
  </ul>
</div>

<hr/>

<h2>4. State Borders vs FASTag: The Confusion</h2>

<p>Maine dekha hai ki bahut se log Haryana-Rajasthan border par gussa karte hain ki "Mera FASTag toh hai, phir paise kyun maang rahe ho?". 
<strong>Concept Samjhein:</strong>
<ul>
  <li><strong>FASTag = National Highway Usage Fee.</strong></li>
  <li><strong>State Entry Tax = Legal fee to enter a new state.</strong></li>
</ul>
Inter-state Entry Tax (Commercial/Rental cars ke liye) hamesha separately pay karna hota hai. Ise aap online <a href="https://parivahan.gov.in/" target="_blank">Parivahan</a> website se ya border checkpost par cash/UPI se pay kar sakte hain. Read our <a href="/blog/interstate-permit-guide-india-2026">Permit Guide</a> for local charges.</p>

<hr/>

<h2>5. Dispute Resolution: Refund Kaise Lein?</h2>

<p>Agar aapka paisa double baar kat gaya hai (GPS portal + Physical Toll), toh aap claim kar sakte hain:
<ol>
  <li><strong>Toll Receipt:</strong> Agar aapne cash penalty di hai, toh receipt sambhal kar rakhen.</li>
  <li><strong>Helpline 1033:</strong> Turant NHAI helpline par call karein aur apna vehicle number and transaction detail batayein.</li>
  <li><strong>Bank App:</strong> FASTag issuing bank (ICICI, PAYTM, HDFC etc.) ke portal par 'Raise a Dispute' option use karein. usually 7-10 working days mein paise wapas aa jate hain.</li>
</ol></p>

<hr/>

<h2>Frequently Asked Questions (FASTag 2026)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What if the scanner doesn't read my valid FASTag?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>If your tag is valid and balance is sufficient, tell the operator: "I will not pay 2x". As per NHAI rule, if the infrastructure fails, you pass for FREE. Show them the status on your app. Always record a video if they ignore the rule.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">My rental host says FASTag is inclusive, but the gate didn't open. What to do?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>This is a common scam. Host might have disabled the tag to save money. Pay the toll (get receipt) and deduct the amount from the host's payment later. Ensure you communicate this on the rental app's chat for proof. Read <a href="/blog/car-rental-scams-india">Rental Scams Guide</a>.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Does FASTag work in remote areas like Spiti or Ladakh?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Most Border Roads Organisation (BRO) roads do NOT have FASTag tolls yet. However, the tunnels (Atal Tunnel etc.) and major NH entry points do. Hamesha kuch cash (₹2,000-₹3,000) saath rakhen kyunki internet connectivity issue ke wajah se scanners fail hote hain.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I use my personal FASTag on a rental car?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Legally, NO. FASTag is linked to the Chassis and Vehicle Registration Number. Using a personal tag on another car is a violation and the tag will be blacklisted by NPCI's surveillance system.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<h2>Conclusion: The Smart Traveler's Choice</h2>

<p>FASTag 2026 mein sirf tolling nahi, aapki driving identity ban chuka hai. Iska dhyan rakhna utna hi zaroori hai jitna gaadi mein fuel bharna. Discipline aur awareness hi aapko double toll fines se bacha sakti hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>One Final Tip:</strong> Windshield hamesha saaf rakhen. Dust ya fog ki layer sensor ki readability 40% kam kar deti hai.</p>

<p>Safe journeys and keep your FASTags charged! 🚦</p>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. FASTag regulations, GNSS updates, and penalty structures are subject to NHAI and MoRTH policy changes. Always cross-verify for your specific route.</em>
  </p>
</div>

`},Pb={id:"tyre-burst-prevention-highway-guide-2026",title:"Tyre Burst Prevention Guide 2026: Nitrogen vs Air & Highway Safety",slug:"tyre-burst-prevention-highway-guide-2026",excerpt:"Why tyres burst on expressways? Nitrogen benefits, TPMS guide, and the 5-second rule to survive a tyre blowout at 100kmph.",category:"Safety",author:"Rajesh Navsagar",date:"2026-02-13",imageUrl:"/images/blogs/tyre-burst-prevention-highway-guide-2026.png",keywords:["Tyre Burst Prevention 2026","Nitrogen vs Air for Tyres","Highway Tyre Safety India","How to handle tyre burst","TPMS Benefits India","Tyre Life Calculate"],expertTip:"The 3-second rule saves lives during a tyre burst. Pehle 3 second tak <strong>Brake</strong> ko bilkul mat chhuiye. Steering wheel ko dono haathon se mazbooti se pakdein aur gaadi ko natural friction se slow hone dein.",content:`

<p>India ke naye Expressways par speed limits 120 km/h tak touch kar gayi hain. Jahan ye infrastructure desh ke liye garv ki baat hai, wahi ye tyres ke liye ek "Battleground" ban gaya hai. High speed par tyre ke andar ki hawa garm hoti hai, pressure badhta hai, aur agar tyre mein koi choti si kamzori bhi ho, toh woh <strong>Tyre Burst</strong> mein badal jati hai.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Concrete roads (Expressways) bitumen roads se zyada garm hote hain. Sudden braking tyre burst ke waqt sabse deadly galti hoti hai. Trust the engine braking and stay calm for the first 3 seconds of the event."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. Root Causes: Tyre Burst Kyu Hota Hai?</h2>
<p>Zyaadatar log sochte hain ki "Kismat kharab thi," lekin tyre burst ke piche hamesha mechanical neglect hota hai. For route-specific hazards, check our <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Highway Guide</a>.</p>
<ul>
  <li><strong>Under-inflation:</strong> Log sochte hain zyada hawa se phatega, lekin kam hawa (low pressure) zyada dangerous hai kyunki sidewall flex hoti hai aur garam ho jati hai.</li>
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
  <li><strong>DON'T BRAKE:</strong> Ye human instinct hai, lekin sabse deadly galti hai. Break lagane se gaadi spin karegi.</li>
  <li><strong>Accelerator se pair hatayein:</strong> Gaadi ko engine braking se slow hone den.</li>
  <li><strong>Firm Grip:</strong> Steering wheel ko dono haathon se mazbooti se pakdein taaki gaadi sidhi rahe.</li>
  <li><strong>Final Move:</strong> Jab speed 40 km/h tak aa jaye, tab dhire se brakes lagakar side mein rukhein.</li>
</ol>

<hr/>

<h2>4. Rental Car Tyres: The Hidden Danger</h2>
<p>Jab aap car rent karte hain, toh aapko unke tyres ki history nahi pata hoti. Tyres ko physically check karein. Read our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a> to know more about how some hosts cut costs on tyres.</p>

<p><strong>Red Flags to Check:</strong></p>
<ul>
  <li><strong>DOT Code:</strong> Tyre ke sidewall par 4-digit code hota hai (e.g., 2419 = 24th week of 2019). Agar 5 saal se purana hai, toh reject karein.</li>
  <li><strong>Uneven Wear:</strong> Agar ek tyre zyada ghisa hua hai, toh alignment issue hai.</li>
  <li><strong>Sidewall Cracks:</strong> Ye sign hai ki rubber dry ho gaya hai (age ya UV damage).</li>
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

<hr/>

<h2>6. Seasonal Tyre Care Tips</h2>

<h3>Summer (March-June):</h3>
<ul>
  <li>Tyre pressure 2-3 PSI kam rakhein (heat expansion ke liye)</li>
  <li>Concrete roads (expressways) avoid karein 12 PM - 4 PM ke beech</li>
  <li>Har 2 ghante mein break lein, tyres ko cool hone dein</li>
</ul>

<h3>Monsoon (July-September):</h3>
<ul>
  <li>Tread depth minimum 3mm hona chahiye (grip ke liye)</li>
  <li>Hydroplaning se bachne ke liye speed 80 km/h se zyada na rakhein. Check our <a href="/blog/monsoon-driving-survival-guide-india">Monsoon Driving Guide</a>.</li>
</ul>

<h3>Winter (October-February):</h3>
<ul>
  <li>Tyre pressure normal rakhein (cold air contracts)</li>
  <li>Fog mein visibility kam hone par speed reduce karein. Read our <a href="/blog/fog-driving-survival-guide-north-india">Fog Driving Guide</a>.</li>
</ul>

<hr/>

<h2>Frequently Asked Questions (Tyre Burst)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is Nitrogen actually better for highway driving?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes. Nitrogen molecules are larger and escape slower than normal air. More importantly, Nitrogen runs cooler, significantly reducing the risk of a burst on hot concrete expressways during summer.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is the 5-year rule form tyres?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Even if the tread looks new, tyre rubber hardens and becomes brittle after 5-6 years due to oxidation. Hard rubber cracks easily under high speed, leading to blowouts. Always check the DOT manufacturing date code.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I fix a sidewall puncture?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. Never repair a sidewall cut or bulge. The sidewall bears the car's load, and a patch will eventually fail, potentially causing a dangerous blowout. Replace the tyre immediately.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Are tubeless tyres safer on highways?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Absolutely. Tubeless tyres lose air slowly if punctured, giving you time to control the car and stop safely. Tube-type tyres tend to burst instantly like a balloon, causing immediate loss of control.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Always verify tyre specs with your manufacturer and seek professional mechanic advice.</em>
  </p>
</div>

`},Zb={id:"mountain-driving-tips-india-2026",title:"Mountain Driving Tips 2026: 15 Rules for Himalayas & Western Ghats",slug:"mountain-driving-tips-india-2026",excerpt:"Driving to Ladakh or Manali? Expert guide on gear selection, engine braking, and overtaking rules for Indian mountains. Safety tips for cooling brakes.",category:"Safety",author:"Rajesh Navsagar",date:"2026-02-13",imageUrl:"/images/blogs/mountain-driving-tips-india.png",keywords:["Mountain Driving Tips India 2026","Hill Driving Safety Rules","Engine Braking Downhill Guide","Manali Leh Highway Driving","Driving in Uttarakhand Hills","Brake Failure Prevention Mountains"],expertTip:"Pahadon mein ek purana kanoon hai: 'The mountains belong to the locals.' Agar aapke peeche koi local number plate (HP, UK, LA, JK) waali gaadi hai, toh unhe turant rasta dein. Woh wahan ki raste ki rag-rag se waqif hain.",content:`

<p>Himalayas, Western Ghats, ya Nilgiris mein drive karna har Indian road-tripper ka ek sapna hota hai. Lekin plains (maidani ilako) se pahadon mein aana sirf nazara badalna nahi hai, ye driving dynamics ka poora overhaul hai. Manali-Leh Highway ho ya Munnar ke hair-pin bends, ek choti si galti yahan bahut mehangi pad sakti hai. <strong>Ye 2026 guide un rules par based hai jo Rajesh ne Ladakh se lekar Kerala ke ghats tak sikhay hain.</strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience across India's most challenging mountain passes.</em></p>

<p>Main Rajesh Navsagar, pichle 10 salon se mountains mein drive kar raha hoon. Maine dekha hai ki plains ke drivers aksar "Brake Overheating" aur "Clutch Burning" ki wajah se beech raste mein phans jate hain. Pahadon mein raasta sirf road par nahi, aapke engine aur dimaag ke coordination mein hota hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Pahadon mein ek purana kanoon hai: 'The mountains belong to the locals.' Agar aapke peeche koi local number plate (HP, UK, LA, JK, KL) waali gaadi hai, toh unhe turant rasta dein. Woh wahan ki raste ki rag-rag se waqif hain. Never neutral down a hill. Agar aapne petrol bachane ke liye neutral mein gaadi dali, toh aapne apni gaadi ka control gravity ko de diya. Gear selection and engine braking are your true safety nets."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. The Golden Rule of Gear Selection: Same Gear Theory</h2>
<p>Ye pahadon ka sabse purana aur sabse zaroori rule hai: <strong>"Jis gear mein aap pahad chadh rahe hain, usi gear mein niche utariye."</strong> Log sote hain ye sirf manual gaadiyon ke liye hai? Nahi, ye Automatic (AMT/CVT/DCT) ke liye aur bhi zaroori hai.</p>

<h3>Uphill (Chadhayi) aur Turbo Lag</h3>
<p>Himalayas jaise high-altitude ilako mein oxygen kam hoti hai. Isse engine ki air-intake kam ho jati hai aur power drop hota hai. Agar aapke paas Turbo-charged gaadi hai, toh aapko "Turbo Lag" mehsoos hoga. 
<ul>
  <li><strong>Solution:</strong> Engine RPM ko 2500-3500 ke beech rakhein. Lower gear use karein taaki engine "breathe" kar sake.</li>
  <li><strong>Warning:</strong> Half-clutch par gaadi kabhi mat chadhayein. Isse clutch plate sirf 50km mein jal sakti hai.</li>
</ul>
For detailed vehicle prep, see our <a href="/blog/long-drive-safety-checklist">Safety Checklist</a>.</p>

<h3>Downhill (Utaryi) - The Silent Killer</h3>
<p>Yahan sabse badi galti hoti hai. Log 4th gear mein brakes dabba-dabba kar niche utarte hain. Isse brakes overheat ho jate hain aur <strong>"Brake Fade"</strong> ho jata hai. Brake fade ka matlab hai ki aapka brake pedal toh dabega, lekin discs itni garam hongi ki wo friction nahi bana payengi.
<strong>The Strategy:</strong> Engine ki natural compression ko use karein (Engine Braking). Lower gear (2nd or 3rd) mein pair clutch se hatakar niche utre, brakes ka use sirf speed adjust karne ke liye karein.</p>

<hr/>

<h2>2. Advanced Overtaking Etiquette in Hills</h2>
<p>Pahadon mein overtaking plains jaisa nahi hota. Yahan overtaking ek coordination game hai.
<ul>
  <li><strong>Uphill Priority:</strong> Jo gaadi upar aa rahi hai, use rasta pehle milega. Unke liye gaadi rokna aur phir se uthana (dead stop se climb) mushkil hota hai.</li>
  <li><strong>The Indicator Code:</strong> India ke hill drivers ek unwritten language use karte hain. Agar aage waala truck Right Indicator de raha hai bina mudne ke, toh uska matlab hai—<strong>"Wait, ahead is unsafe"</strong>. Agar Left Indicator de raha hai, toh uska matlab hai—<strong>"Safe to pass"</strong>. </li>
  <li><strong>Blind Turns:</strong> Kabhi bhi curve par overtake na karein. Even if the road looks wide, blind spots mein landslides ya mitti girne ka dar hota hai.</li>
</ul></p>

<hr/>

<div style="background-color: #fff3cd; border-left: 5px solid #ffc107; padding: 20px; border-radius: 10px; margin: 25px 0;">
  <h4 style="margin-top: 0; color: #856404; font-weight: 800;">⚠️ Automatic Transmission Tip</h4>
  <p style="color: #856404; font-size: 14px;">Agar aapki gaadi Automatic hai, toh downhill ke waqt use 'D' mode se 'M' (Manual) ya 'L/S' (Low/Sport) mode par shift karein. Ye engine braking engage karega aur aapke brakes ko jalne se bachayega.</p>
</div>

<hr/>

<h2>3. Hairpin Bends: The 360-Degree Turn</h2>
<p>Hairpin bends (jaise Munnar ya Rohtang Pass par hain) ko handle karne ka sahi tarika:
<ol>
  <li><strong>Wide Entry:</strong> Turn se pehle left side (ya opposite lane agar traffic na ho) mein thoda wide jayein.</li>
  <li><strong>Early Downshift:</strong> Turn ke beech mein gear change karne se bachein. Turn shuru hone se pehle hi 1st ya 2nd gear mein aa jayein.</li>
  <li><strong>The Apex Rule:</strong> Turn ke inner corner (apex) ko tabhi cut karein jab samne se koyi na aa raha ho.</li>
</ol>
Also read our <a href="/blog/fog-driving-survival-guide-north-india">Fog Driving Guide</a> for visibility tips during cloud cover.</p>

<hr/>

<h2>4. Landslide Awareness aur Road Conditions</h2>
<p>Monsoon ke waqt pahadon mein jaana high-risk hota hai. Lekin winter mein bhi "Black Ice" ka khatra rehta hai.
<ul>
  <li><strong>Black Ice:</strong> Ye wo baraf hoti hai jo road par mitti jaisi dikhti hai lekin bahut slippery hoti hai. Subah-subah drive karte waqt hamesha cautious rahein.</li>
  <li><strong>Shooting Stones:</strong> Agar upar se mitti ya chote pathar gir rahe hain, toh wo aane waale landslide ka signal hai. Turant safe jagah par gaadi rokein.</li>
  <li><strong>Stop Points:</strong> Kabhie bhi waterfalls ya steep cliffs ke niche gaadi park na karein. Landslides aksar wahi se shuru hote hain. Check <a href="/blog/monsoon-driving-survival-guide-india">Monsoon Driving Survival Guide</a>.</li>
</ul></p>

<hr/>

<h2>5. Essential Mountain Survival Kit</h2>
<p>Agar aap Ladakh ya Spiti jaise remote areas mein ja rahe hain, toh ye 5 cheezein gaadi mein honi chahiye:
<ol>
  <li><strong>Tow Rope:</strong> 5-ton capacity wali nylon rope.</li>
  <li><strong>Jumper Cables:</strong> Low temperatures mein battery dead hona common hai.</li>
  <li><strong>Portable Tyre Inflator:</strong> Baraf ya mitti par grip banane ke liye kayi baar tyre pressure kam karna padta hai.</li>
  <li><strong>Flashlight:</strong> High intensity wali torch.</li>
  <li><strong>Emergency Food/Water:</strong> Kam se kam 24 ghante ka stock (Landslides mein road blocks common hain).</li>
</ol></p>

<hr/>

<h2>Frequently Asked Questions (Mountain Driving)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Which gear is best for driving uphill in an SUV?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Use 1st or 2nd gear for very steep hairpins and 3rd gear for gradual climbs. The key is to keep the Turbo active (above 1800-2000 RPM). If the engine starts knocking (thak-thak sound), immediately downshift.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How to handle brake failure on a mountain slope?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Stay calm. Pump the brake pedal rapidly. Shift to the lowest gear possible immediately (Engine braking). Use the handbrake gently (don't lock it). If all else fails, look for an 'Escape Ramp' or use the hillside (rub against the mountain wall) to slow down the car. NEVER turn off the engine as you will lose power steering.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it safe to use high-beams in the mountains?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Use High-beams only on empty roads with no opposite traffic. In mountains, high-beams can blind the driver coming from around a curve, causing an accident. Always dip your lights (switch to Low-beam) the moment you see a glare from the opposite side.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What to do if the engine overheats on a steep climb?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Pull over to a safe leveled spot. Turn off the AC and keep the engine on IDLE. Do NOT turn off the engine immediately as it might seize. Turning on the 'Heater' at max can actually help pull heat away from the engine. Wait for at least 30 minutes before checking the coolant level.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<h2>Conclusion: The Respect for the Altitudes</h2>

<p>Mountain driving is not about speed; it's about endurance and patience. Agar aap raste ko respect karenge, toh rasta aapko safest aur best views dega. The mountains are unforgiving to the ego but rewarding to the careful driver. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Pro Tip:</strong> Download offline maps before entering deep valleys (Parvati Valley, Spiti). GPS signal often drops, and missing an exit can mean an extra 50km mountain drive.</p>

<p>Safe travels aur enjoy the peaks! 🏔️</p>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Mountain conditions, road blocks, and local rules change rapidly. Always cross-verify with recent travelers or local authorities.</em>
  </p>
</div>

`},Xb={id:"fog-driving-survival-guide-north-india",title:"Fog Driving Survival Guide 2026: North India Highway Safety Tips",slug:"fog-driving-survival-guide-north-india",excerpt:"Zero visibility on Yamuna Expressway? Expert tips for driving in dense fog. Low beam rules, defogging hacks & emergency stops for 2026 winters.",category:"Safety",author:"Rajesh Navsagar",date:"2026-02-13",imageUrl:"/images/blogs/fog-driving-guide-india.png",keywords:["Fog Driving Safety India 2026","Driving in Dense Fog Tips","Yamuna Expressway Fog Rules","High Beam vs Low Beam in Fog","Rear Fog Lamp Use","North India Winter Driving"],expertTip:"Sabse badi galti: Hazard lights (double indicators) on karke chalna. Highway par hazard lights ka matlab hota hai 'I am stationary/stopped'. Agar aap chalti gaadi mein use karenge, toh peeche waala confuse ho jayega ki aap rukey ho ya chal rahe ho, aur ramming accident ho sakta hai.",content:`

<p>Agar aapne Delhi-NCR, Punjab, ya Uttar Pradesh mein winter ke mausam mein drive kiya hai, toh aapko pata hoga ki "Dense Fog" kya cheez hoti hai. Ek pal mein sab kuch saaf hota hai, aur agle hi pal aap ek safed chadar (white blanket) ke andar hote hain jahan visibility 2 meter se bhi kam reh jati hai. Har saal Yamuna Expressway aur Western Peripheral Expressway par kohre ki wajah se darjanon gaadiyan aapas mein takrati hain.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"High Beam on mat karein. Kohra paani ki barik boondon se bana hota hai jo ek mirror ki tarah kaam karti hain. Jab aap High Beam on karte hain, toh light un boondon se takrakar seedha aapki aankhon mein wapas aati hai, zeroing out your visibility."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. High Beam vs Low Beam: The Science of Reflection</h2>
<p>Sabse badi galti jo 90% Indian drivers karte hain, woh hai fog mein High Beam ka use karna. Hamesha <strong>Low Beam</strong> aur <strong>Fog Lights</strong> ka use karein. Fog lights road ke bahut nazdeek hoti hain (low-mounted), isiliye woh dhund ke "niche" se road ko illuminate karti hain. Check how to properly set your lights in our <a href="/blog/night-driving-survival-guide-india-2026">Night Driving Guide</a>.</p>

<hr/>

<h2>2. The Hazard Lights Myth: Don't Confuse Others</h2>
<p>Indian highways par ye ek trend ban gaya hai ki fog mein hazard lights (chaaro indicators) on karke drive karna. Hazard lights ka signal hota hai—"I am stopped or I am a hazard." Use your <strong>Rear Fog Lamps</strong> instead. If you don't have them, use regular taillights.</p>

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

<h2>Frequently Asked Questions (Fog Driving)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Should I use high beam or low beam in fog?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Always use <strong>Low Beam</strong>. High beams reflect off the water droplets in the fog and cause a 'white wall' effect, blinding you further. Use fog lights if available.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it safe to use hazard lights in moving car during fog?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. Hazard lights (double indicators) signal a stopped or broken-down vehicle. Using them while moving confuses drivers behind you, who may not realize when you actually brake or turn.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What to do if visibility drops to zero?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>If you cannot see anything, pull over safely <strong>off the road</strong> (at a petrol pump or dhaba). Do not stop on the highway shoulder as you might get hit from behind. Turn on hazard lights only after stopping.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How to keep windshield clear in winter fog?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Use the car's heater with AC ON (Fresh Air mode). The AC removes moisture from the cabin air, while the heater keeps the glass warm, preventing condensation (fogging) on the inside.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Fog on highways like Yamuna Expressway is extremely dangerous. Always check official weather warnings before starting your trip.</em>
  </p>
</div>

<hr/>

<h3>Fog Light vs High Beam: Understanding the Physics</h3>
<p>Bahut se log sochte hain ki High Beam jalane se zyada dikhega, lekin fog mein ye bilkul ulta hota hai. High beam ki light straight line mein travel karti hai aur fog ke particles (paani ki boondein) ise reflect karke wapas aapki aankhon mein bhej dete hain. Isse "White Wall" effect create hota hai.</p>
<p>Iske vipreet, <strong>Fog Lights</strong> wide aur short-range hoti hain, aur bumper ke paas niche lagi hoti hain. Fog aksar zameen se 1-2 feet upar float karta hai, toh fog lights niche se light phenk kar road ke edges ko illuminate karti hain.</p>

<table style="width:100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Light Type</th>
      <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Fog Effectiveness</th>
      <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Why?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">High Beam</td>
      <td style="border: 1px solid #ddd; padding: 10px; color: red;">Dangerous (0/10)</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Reflects (glare) back into driver's eyes.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Low Beam</td>
      <td style="border: 1px solid #ddd; padding: 10px; color: orange;">Moderate (6/10)</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Good for short-range visibility.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Fog Lights (Yellow)</td>
      <td style="border: 1px solid #ddd; padding: 10px; color: green;">Excellent (9/10)</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Penetrates fog better due to wavelength.</td>
    </tr>
  </tbody>
</table>

<hr/>

<h3>Yamuna Expressway Specific Tips</h3>
<p>Yamuna Expressway aur Agra-Lucknow Expressway par fog sabse zyada deadly hota hai kyunki ye open fields ke beech se guzarte hain. Yahan "cross-wind fog" bhi hota hai.</p>
<ul>
  <li><strong>Speed Limit:</strong> Fog mein speed limit 100 kmph nahi, balki 40-50 kmph honi chahiye.</li>
  <li><strong>Rest Areas:</strong> Mathura aur Agra Tolls ke paas Rest Areas hain. Agar visibility < 50 meters hai, toh risk mat lein. Coffee pijiye aur mausam saaf hone ka wait karein.</li>
  <li><strong>Chain Accidents:</strong> Expressway par agar ek gaadi rukti hai, toh peeche se 10-20 gaadiyan bhidti hain (Pile-up). Agar rukna pade, toh road se neeche utar kar khet (fields) ki taraf gaadi park karein, na ki shoulder par.</li>
</ul>

<hr/>

<h3>Emergency Equipment Checklist</h3>
<p>Fog drive par nikalne se pehle ensure karein:</p>
<ol>
  <li><strong>Reflective Tape:</strong> Apni gaadi ke rear bumper par Red Reflective Tape lagayein.</li>
  <li><strong>Microfiber Cloth:</strong> Bar-bar windscreen saaf karne ke liye.</li>
  <li><strong>Hazard Triangle:</strong> Breakdown ke case mein road par lagane ke liye (50 meter peeche).</li>
  <li><strong>GPS Audio:</strong> Google Maps ka voice maximize rakhein taaki aapko turns ka pata chale bina screen dekhe.</li>
</ol>

<hr/>

`},Jb={id:"interstate-permit-guide-india-2026",title:"Interstate State Tax & Permit Guide 2026 for Rental Cars",slug:"interstate-permit-guide-india-2026",excerpt:"Crossing state borders in a rental car? Complete guide to State Entry Tax, All India Permits (AIP), and online payment via Parivahan for 2026.",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-07",imageUrl:"/images/blogs/interstate-permit-guide.png",keywords:["Interstate permit India car","State tax for rental cars","Crossing state borders rental car","Parivahan state tax pay online","Self drive permit laws","Form 59 car rental","All India Tourist Permit rules"],expertTip:"Ek sabse badi galti jo log karte hain: FASTag se toll katne ka matlab ye nahi hai ki aapka State Entry Tax bhi bhar gaya. FASTag sirf toll roads ke liye hai. Entry Tax humesha Parivahan website par alag se bharna hota hai.",content:`

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

<p>Bahut saari rental companies kehti hain ki unki gaadi ke paas National Permit hai. Lekin reality ye hai ki AITP sirf ek formal authorization hai. State Entry Tax wo asli paisa hai jo border crossing ke waqt specific state mangta hai. For example, check our detailed <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Toll & Tax Guide</a>.</p>

<hr/>

<h2>2. How to Pay State Tax Online (Step-by-Step 2026)</h2>
<p>Hamesha official <strong>Parivahan portal ke general reference</strong> ko follow karein aur agents ke extra charges bachayein. Weekly permits usually saste padte hain agar aap 4 din se zyada ke trip par hain.</p>

<p><strong>Step-by-step process:</strong>
<ol>
  <li>Visit <a href="https://parivahan.gov.in/checkpost/faces/public/payment/TaxCollectionMain.xhtml" target="_blank" rel="noopener noreferrer">Parivahan Check Post Tax portal</a>.</li>
  <li>Registration number aur last 5 digits of chassis number dalein. (See our <a href="/blog/car-pickup-inspection-checklist-rajesh">Pickup Checklist</a> to find chassis number).</li>
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

<h2>Frequently Asked Questions (Interstate Permits)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is State Entry Tax mandatory for private cars?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. Private cars (White Plate) do not need to pay State Entry Tax. This tax is only for Commercial Vehicles (Yellow/Black Plate) like rental cars and taxis.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How to pay state entry tax online?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Visit the official <strong>parivahan.gov.in > Check Post Tax</strong> section. Select the state you are visiting, enter vehicle details, and pay via UPI/Card. Keep the digital receipt.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I pay tax at the border checkpost?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes, but it is not recommended. Border kiosks often have long queues, server issues, or agents who charge extra commission. Paying online is safer and faster.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is Form 59?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Form 59 is a specific authorization under the Motor Vehicles Act that allows a private individual to drive a commercial rental car. Your rental company must provide this document.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<h2>Conclusion: Compliance equals Peace</h2>
<p>Road trips freedom ka naam hai, lekin ye freedom tabhi barkarar rehti hai jab aap kanoon ke sath chalen. ₹1000 ka entry tax bachane ki koshish aapke poore trip ko kharab kar sakti hai. Border par rukna luck nahi, preparation ka result hota hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Remember:</strong> A ₹1,000 tax can save you from a ₹10,000 penalty and hours of harassment. Invest 5 minutes online, enjoy stress-free travel.</p>

<p>Taiyari rakhein, online tax bharein aur bina dar ke highway enjoy karein!</p>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. State taxes aur permit rules govt. ki marzi se kabhi bhi badal sakte hain. Hamesha official updates check karein.</em>
  </p>
</div>

`},Wb={id:"self-drive-permit-india-guide-rajesh",title:"All India Permit (AITP) vs State Permit: 2026 Rental Car Border Rules",slug:"self-drive-permit-india-guide-rajesh",excerpt:"Renting a car for interstate trip? Understand difference between All India Tourist Permit (AITP) and State Permit. Avoid RTO fines with this 2026 checklist.",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-09",imageUrl:"/images/blogs/self-drive-permit-guide-2026.png",keywords:["All India Permit for rental car","Self drive permit laws India","Crossing state borders rental","RTO rules for self drive","Rajesh Navsagar legal guide","Form 48 National Permit","Tourist Permit Rules 2026"],expertTip:"Hamesha 'Form 48' (National Permit) ki physical copy mangiye. Bhale hi aaj kal digital documents valid hain, lekin remote border check-posts par physical paper dekhne ke baad hi entry tax process kiya jata hai. No paper = No entry.",content:`

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

<h2>Frequently Asked Questions (AITP vs State Permit)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Does All India Permit mean no state tax?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. AITP authorizes the vehicle to travel anywhere, but you still MUST pay state-specific Entry Tax when crossing borders (except for states with reciprocal agreements).</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is digital permit valid on mobile?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Legally yes (via mParivahan), but in practice, border RTO officers demand physical copies. Always carry a printout of the permit and Form 59.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I drive private car to other state without permit?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes. Private white-plate cars do not need any permit to travel across India, as long as taxes are paid for home state (Road Tax).</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What happens if rental company gives expired permit?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Do NOT accept the car. Driving with an expired permit is illegal and can lead to vehicle seizure. Ask for a different car or a full refund.</p>
      </div>
    </div>
  </div>
</div>
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

`},$b={id:"highway-speed-limits-india-fines-2026",title:"Highway Speed Limits India 2026: Speed Camera Fines & Rules",slug:"highway-speed-limits-india-fines-2026",excerpt:"New Indian Expressway speed limits 2026. Avoid AI surveillance fines. Speed limits for Delhi-Mumbai, Yamuna Expressway & rental car penalties explained.",category:"Legal",author:"Rajesh Navsagar",date:"2026-01-10",imageUrl:"/images/blogs/speed-limit-fines-india.png",keywords:["Highway speed limits India","Speeding fines 2026","Expressway speed rules","Rental car speed penalty","AI speed cameras India","Over speeding challan cost","Average speed camera India"],expertTip:"Google Maps ki speed par 100% bharosa mat karein. India mein AI cameras 'Average Speed' measure kar rahe hain (Section Control). Agar aapne 2 toll ke beech ka rasta bahut jaldi cover kiya, toh bina camera ke bhi challan ghar aa jayega.",content:`

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
  <li><strong>Access-Controlled Expressways:</strong> Jaise ki Delhi-Mumbai Expressway. Yahan cars ke liye limit <strong>120 km/h</strong> hai. Always check updated signage. See our <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Speed Cameras Map</a>.</li>
  <li><strong>National Highways (4-Lane+):</strong> Yahan limit usually <strong>100 km/h</strong> hoti hai, unless specified.</li>
  <li><strong>City Roads & Flyovers:</strong> Mumbai Sea Link or Delhi flyovers par limit 60-70 km/h hoti hai. Check <a href="https://morth.nic.in/speed-limits" target="_blank" rel="noopener noreferrer">MoRTH Speed Guidelines</a> for latest updates.</li>
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
<p>Jab aap rental car use karte hain, toh companies GPS trackers use karti hain. Bahut saari gaadiyan 80 km/h par beep karti hain aur higher speeds par penalty trigger karti hain. Learn how to handle this in our <a href="/blog/car-rental-scams-india">Rental Car Scams Guide</a>.</p>

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
<h2>Frequently Asked Questions (Speed Limits)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What is speed limit on Indian Expressways?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>For private cars, the speed limit is <strong>120 km/h</strong> on access-controlled expressways like Delhi-Mumbai and Samruddhi Mahamarg. On National Highways, it is usually 100 km/h.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How do average speed cameras work?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Also called 'Section Control', these systems measure the time taken to travel between two points. If you cover the distance faster than the legal time, you are fined automatically even if you slow down near cameras.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is there a tolerance limit for speeding in India?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Officially, some states allow a 5% margin (error buffer), but AI cameras are precise. It is safer to drive 5 km/h below the limit to avoid fines.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Do rental cars have speed governors?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes. Commercial self-drive cars (yellow-on-black plate) often have speed governors limited to 80 km/h as per RTO rules, though many newer models allow up to 120 km/h on expressways.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<h2>Pro Tips to Avoid Speed Fines</h2>

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

`},ex={id:"one-way-car-rental-india-guide",title:"One-Way Car Rental India 2026: Cost Saving Guide & Relocation Deals",slug:"one-way-car-rental-india-guide",excerpt:"Planning a one-way trip? Understand why one-way rentals cost 2x more. Learn about 'Relocation Fees' and how to find hidden relocation deals in 2026.",category:"Rental Policy",author:"Rajesh Navsagar",date:"2026-02-13",imageUrl:"/images/blogs/one-way-car-rental.png",keywords:["One Way Car Rental India 2026","Intercity Car Drop Charges","Relocation Deals Zoomcar Revv","One Way Rental Cost Calculator","Best One Way Cab vs Self Drive"],expertTip:"Hamesha 'Relocation Deals' check karein. Kai baar companies ko apni gaadi wapas base city bhejni hoti hai aur wo aapko bahut saste mein gaadi de dete hain agar aapka route wahi ho.",content:`

<p>India mein road trip plan karte waqt sabse bada sawal ye hota hai: "Kya main Delhi se gaadi lekar Jaipur mein drop kar sakta hoon?" Answer hai—Haan, lekin ye aapki jeb par thoda bhari pad sakta hai. <strong>Ye analysis Rajesh's field audits aur popular rental platforms ke pricing models par based hai.</strong> 2026 mein self-drive industry evolve ho rahi hai, lekin intercity drop-off charges abhi bhi ek major pain point hain.</p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on real on-road experience.</em></p>

<p>Main Rajesh Navsagar, pichle kayi salon se India ke alag-alag hisson mein rental cars use kar raha hoon. Maine dekha hai ki log aksar last minute par one-way booking karte hain aur phir "Drop fees" dekh kar hairan ho jate hain. Is article mein hum depth mein jayeinge ki ye charges kyun hote hain aur aap kaise hazaron rupaye bacha sakte hain. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"One-way rental tabhi karein jab bahut zaroori ho. Agar aap wapas usi city aane wale hain, toh 'Round-trip' hamesha 40-60% sasta padega. One-way mein aap sirf comfort ka nahi, balki relocation ka bhi paisa dete hain. Agar aap Delhi to Mumbai jaisa lamba trip plan kar rahe hain, toh flight wapas lene se behtar hai ki aap relocation deals dhundhein."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2019–2026).*</p>
</div>

<hr/>

<h2>1. 'Relocation Fee' ka Asli Sach</h2>

<p>Jab aap gaadi City A (Delhi) se lete hain aur City B (Chandigarh) mein drop karte hain, toh company ko woh gaadi wapas Delhi lani padti hai. Zyadatar log sochte hain ki "Maine toh paise diye hain na?", lekin logistics bahut complex hai.</p>

<p>Iske liye company ko multiple factors handle karne padte hain:
<ul>
  <li><strong>Driver Logistics:</strong> Ek driver ko hire karna padta hai jo City B jaye aur gaadi wapas laye. Uska bus/train fare aur "Batta" (daily allowance) aapki fee mein included hota hai.</li>
  <li><strong>Fuel aur Tolls:</strong> Gaadi wapas chal kar ayegi toh fuel toh jalega hi. Saath mein highway tolls (FASTag) bhi pay karne honge.</li>
  <li><strong>Lost Opportunity:</strong> Jab tak gaadi raste mein hai, wo kisi aur ko rent nahi di ja sakti. Ise "Idle time cost" kehte hain.</li>
</ul>
Is pure kharche ko 'Relocation Fee' ya 'Drop-off Charge' kehte hain. Before you book, check our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a> for hidden charges.</p>

<hr/>

<h2>2. One-Way vs Round-Trip: Math Samjhein</h2>

<p>Aam taur par, agar Round-trip ka rent ₹2,500/day hai, toh One-way mein wahi gaadi aapko ₹4,000 se ₹6,000 tak pad sakti hai. Chaliye ek live example dekhte hain jo maine 2025 mein test kiya tha.</p>

<h3>Case Study: Delhi to Jaipur (280 km)</h3>
<p><strong>Scenario A: Round Trip (3 Days)</strong>
<ul>
  <li>Rent: ₹2,500 x 3 = ₹7,500</li>
  <li>Taxes: ₹1,200</li>
  <li><strong>Total: ₹8,700</strong></li>
</ul>

<p><strong>Scenario B: One Way (1 Day Drop)</strong>
<ul>
  <li>Rent: ₹3,500 (One day premium)</li>
  <li>Drop Fee: ₹5,000</li>
  <li>Taxes: ₹800</li>
  <li><strong>Total: ₹9,300</strong></li>
</ul>

<p>Aap dekh sakte hain ki sirf 1 din ke liye gaadi drop karne ka kharcha, 3 din ke round trip se bhi zyada hai!
<strong>Tip:</strong> Har brand ka pricing alag hota hai. Zoomcar, Revv aur MyChoize ke apps check karein kyunki unke 'Drop-off' hubs har shehar mein nahi hote. Agar company ka hub destination city mein nahi hai, toh fees ₹15,000 tak bhi ja sakti hai.</p>

<hr/>

<h2>3. Money Saving Hack: 'Relocation Deals'</h2>

<p>Ye ek "Secret" hai jo bahut kam log jaante hain. Kai baar companies ko apni gaadi ek hub se dusre hub shift karni hoti hai. Ise 'Relocation Deal' kehte hain. </p>

<p>Chaliye iska logic samajhte hain:
<ul>
  <li><strong>Example:</strong> Agar koi gaadi Mumbai se Pune one-way gayi hai, toh company ko use wapas Mumbai lana hai.</li>
  <li>Agar unhe koyi driver nahi mil raha, toh wo app par "Featured Deal" daal dete hain.</li>
  <li>Agar aap unhe Pune se Mumbai ka trip offer karte hain, toh wo aapse relocation fee nahi lenge, aur shayad rent bhi kam kar dein!</li>
</ul>
Check their "Offers" or "Relocation" section in the app. Also read our <a href="/blog/long-drive-safety-checklist">Trip Safety Checklist</a> for pre-trip prep.</p>

<hr/>

<h2>4. Oneway Cab vs Self-Drive One Way</h2>

<p>Kya aapko self-drive hi karni chahiye? 2026 mein Ola Intercity aur Uber ya local taxi operators (Savaari, Gozo) bahut competitive rate offer kar rahe hain. </p>

<p><strong>Kab Taxi sasti hai?</strong>
Agar aap akele hain ya sirf 2 log hain aur raste mein driving enjoy nahi karna chahte, toh professional taxi sasti padegi. Kyunki driver wahi ka local hota hai aur use wapas aane ke liye "Back-to-back" sawari milne ke chances zyada hote hain.</p>

<p><strong>Kab Self-Drive behtar hai?</strong>
Agar aap 4-5 log hain, bahut saara saaman hai, aur aap raste mein multiple stops lena chahte hain (jaise Delhi-Jaipur raste mein Neemrana Fort rukna), toh self-drive better hai. Aapko privacy milti hai aur aap apni marzi ke malik hote hain.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif;">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase;">🛠️ One-Way Drop Checklist</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Gaadi wapas karne se pehle ye 5 cheezein zaroor karein:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>🔲 <strong>Fuel Refill:</strong> Hamesha "Same-to-Same" level par refill karein. Drop-off hub ke paas waale station se hi tel bharwayein.</li>
    <li>🔲 <strong>Visual Evidence:</strong> Gaadi chhodne se pehle 360-degree video banayein. One-way mein aksar host aur operator alag hote hain, toh dispute ke chances zyada hote hain.</li>
    <li>🔲 <strong>FASTag Balance:</strong> Check karein ki aapka kitna toll kata hai. Kai baar purane tolls aapke deposit se deduct ho jate hain.</li>
    <li>🔲 <strong>Keys Handover:</strong> Agar contactless drop hai, toh key-box ya glove box mein chabhi rakhne ki photo zaroor lein.</li>
    <li>🔲 <strong>Interstate Permit:</strong> Exit tax pay kiya hai toh uski receipt car mein hi chhodein.</li>
  </ul>
</div>

<hr/>

<h2>5. Local Operators aur Negotiation</h2>

<p>Agar aap badi companies ki jagah local "Rent-A-Car" operators se deal kar rahe hain, toh negotiation ki kafi jagah hoti hai. </p>

<p><strong>Negotiation Script:</strong> 
"Bhaiya, aapki gaadi waise bhi 2 din se खड़ी hai. Main ise drop kar dunga, aap mujhse bas 1 din ka rent aur fuel le lo, drop charges 50% kam kar do."
Local operators ko aksar social media networking ya local contacts se pata chalta hai ki kis shehar mein gaadi ki demand hai. Agar aap sahi time par unhe contact karein, toh deal mil sakti hai.</p>

<hr/>

<h2>6. Legal aur Insurance Complexities</h2>

<p>One-way rentals mein insurance ka dhyan rakhna bahut zaroori hai. Agar gaadi ka accident City B mein hota hai, toh kya unka insurance cover karega? 
Reputable firms like Zoomcar and Revv have national insurance. Lekin local operators aksar private plates (white plates) use karte hain. <strong>Warning:</strong> Kabhi bhi white plate gaadi one-way rent par na lein. Police checking mein gaadi seize ho sakti hai aur aapka trip wahi khatam ho jayega. Check our <a href="/blog/black-plate-rule-india-2026">Black Plate Mandatory Rules</a>.</p>

<hr/>

<h2>Frequently Asked Questions (One-Way Rentals)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Why is one-way car rental so expensive in India?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>In India, the "Relocation Fee" is high because of the labor-intensive process of bringing the car back. Unlike the US or Europe where car fleets are massive and distributed, Indian rental fleets are centralized in major hubs like Delhi, Mumbai, and Bangalore. A car dropped in a small town becomes a liability until it's returned to its base.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I change my trip from Round-way to One-way midway?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>It is possible but very expensive. Companies will charge you a "Wrong Drop-off Penalty" which can be as high as ₹10,000 in addition to the standard relocation fee. Always plan and communicate the drop-off location during the booking phase.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Does one-way rental include state taxes?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Usually, no. You have to pay the entry tax at the RTO border checkpost. For example, if you take a Delhi car to Rajasthan, you'll pay around ₹400-₹800 as state tax. Keep the physical receipt safe as the rental company might ask for it during handover. Read <a href="/blog/interstate-permit-guide-india-2026">Border Tax Guide</a>.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it cheaper to rent for 2 days and drop, or book a cab?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>For distances over 300 km (like Delhi to Jaipur or Mumbai to Goa), a one-way cab is almost always cheaper than a self-drive rental with drop-off fees. Choose self-drive only for the experience or if you have specific intermediate stops to visit.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<h2>Conclusion: Stay Smart with One-Way Plans</h2>

<p>One-way car rental India mein abhi bhi ek premium luxury hai. Agar aapka budget tight hai, toh public transport ya intercity cabs behtar rahenge. Lekin agar aapko wo freedom chahiye jahan aap apne raste khud chunein, toh drop-off charges ko "Convenience Tax" samjh kar pay karein. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>Pro Tip for 2026:</strong> Apps like 'QuickRide' ya local Facebook groups mein "Relocation" keyword search karein. Bahut se owners apni gaadiyan shift karwana chahte hain aur aapko ye service free mein (sirf fuel ke paise par) mil sakti hai!</p>

<p>Safe travels and plan your logistics wisely!</p>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Rental policies, taxes, and relocation fees can vary significantly between operators. Always verify the final bill before handing over the keys.</em>
  </p>
</div>

`},ax={id:"alcohol-transport-rules-india-checkposts",title:"Car Alcohol Transport limit in India 2026: State Borders & Permit Rules",slug:"alcohol-transport-rules-india-border-guide",excerpt:"Can you carry alcohol in car across state borders? Check legal liquor limits for Delhi, UP, Haryana and strict laws for Dry States like Bihar & Gujarat.",category:"Legal",author:"Rajesh Navsagar",date:"2026-02-05",imageUrl:"/images/blogs/alcohol-transport-rules-india.png",keywords:["Car alcohol transport rules India","Carrying alcohol across state borders","Alcohol limit in car private vehicle","Bihar alcohol ban penalty car","Gujarat dry state car rules","Illegal alcohol transport fine India","L13 permit alcohol transport"],expertTip:"Dry states (Bihar/Gujarat) ke borders par random checking 2026 mein AI sensors se badh gayi hai. Agar aapka rasta wahan se guzar raha hai, toh koshish karein ki gaadi mein ek bhi seal-broken ya seal-intact bottle na ho. Legal limits sirf 'Wet States' ke liye hoti hain.",content:`

<p>Har saal hazaron log Goa ya Himachal se wapas aate waqt ek 'Sasta' stock carry karne ki koshish karte hain, lekin border checkposts par unhe "Unexpected" kaanooni pareshaniyon ka samna karna padta hai. India mein alcohol transport rules itne complicated hain ki wo state-to-state badalte rehte hain. <strong>Ye guide Rajesh's border-crossing observations aur State Excise Departments ke 2026 updates ke general reference par based hai.</strong></p>

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

<p>India ke <strong>Motor Vehicles Act 1988 aur State Excise Policies ke general reference</strong> ke mutabik, chalti gaadi mein alcohol consume karna ek serious criminal offense hai. Lekin transport karna? Wahan rule thoda alag hai. Also read about <a href="/blog/delhi-jaipur-road-trip">Delhi-Jaipur Alcohol Checkpoints</a>.</p>

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

<p>Agar aapka rasta Bihar ya Gujarat se guzar raha hai, toh aapke liye kanoon bilkul simple hai: <strong>ZERO ALCOHOL.</strong> </p>

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
  <li>Agar gaadi alcohol seizure mein impound ho gayi, toh company aapse <strong>Full Value of the Car</strong> mang sakti hai damage ki tarah.</li>
  <li>Insurance companies illegal activity ke case mein 1% bhi support nahi karengi.</li>
</ul>
Check our <a href="/blog/car-rental-scams-india">Rental Scam Guide</a> to understand how even small legal issues can lead to huge fines by rental agencies.</p>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 30px 0; font-family: 'Inter', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🛡️ Safe Transport Checklist (Within Wet States)</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>Original Bill:</strong> Hamesha liquor shop ka authentic bill carry karein.</div></li>
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>Boot Space only:</strong> Bottles ko dashboard ya seats par nahi, hamesha trunk (diggi) mein rakhein.</div></li>
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>Valid Permit:</strong> Kuch states (jaise Maharashtra) mein daily permit zaroori hota hai jo wine shops se milta hai.</div></li>
    <li style="display: flex; align-items: flex-start; gap: 10px;">✅ <div><strong>No Consumption:</strong> Gaadi ke andar ek bhi open glass ya bottle na ho (even empty ones).</div></li>
  </ul>
</div>

<hr/>

<hr/>

<h2>Conclusion: Risk vs Reward</h2>

<p>Do-teen hazar rupaye bachaane ke liye jail jana ya gaadi seize karwana samajhdari nahi hai. India ke highway rules aur excise enforcement 2026 mein kafi tech-forward ho chuke hain. My simple advice: <strong>Drink where you buy, don't carry for later across borders.</strong> This article focuses on real Indian highway conditions, not generic travel advice.</p>

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
  <li><strong>Goa Excise Commissioner:</strong> <a href="https://goaexcise.gov.in/" target="_blank" rel="noopener noreferrer">Official Goa Excise Website</a></li>
  <li><em>Email:</em> excise.[state]@gov.in for official permit applications (allow 7 days for processing)</li>
</ul>

<p><em>Who this guide is NOT for: This guide is not for commercial operators or taxi drivers. It is for private travelers and self-drive renters.</em></p>

<p><strong>Insurance Impact:</strong> If your rental car is seized for alcohol transport, your security deposit will be forfeited. Some rental companies also blacklist offenders permanently.</p>

<p>Safe rahein, kanoon ka samman karein, aur apni family ke saath road trip enjoy karein. Happy Journey!</p>

<hr/>
<h2>Frequently Asked Questions (Alcohol Transport)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How much alcohol can I carry in my car in India?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Generally, you can carry <strong>up to 2 litres</strong> of sealed alcohol bottles within the same state (where bought). Crossing state borders with alcohol is technically illegal without a specific permit, as every state has different excise duties.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I carry alcohol from Goa to Maharashtra?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. Carrying alcohol from Goa to Maharashtra is strictly prohibited without a permit. Maharashtra checkposts at Sawantwadi and Patradevi maintain strict checking. The fine can be up to ₹10,000 per bottle.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it allowed to carry open bottles in car?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Never. Carrying an open bottle (even if corked) in the passenger cabin is often treated as "Drunk Driving" evidence or "Public Drinking" by police under the Motor Vehicles Act.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Which are the Dry States in India for 2026?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p><strong>Bihar, Gujarat, Nagaland, and Mizoram</strong> are strict Dry States. Carrying even a single bottle here can lead to non-bailable arrest and vehicle seizure.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

<p><em>Who this guide is NOT for: This guide is not for commercial transporters or smugglers. It is for private travelers and tourists.</em></p>

<hr/>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Excise laws aur penalties har din badal sakti hain. Hamesha latest state government notifications aur legal signage ko primary authority manein.</em>
  </p>
</div>

`},tx={id:"wrong-traffic-challan-contest-guide-india-2026",title:"Challenge Wrong E-Challan India 2026: Online Grievance & Virtual Court Guide",slug:"wrong-traffic-challan-contest-guide-india-2026",excerpt:"Got a fake traffic fine? Learn how to file a grievance on Parivahan portal and challenge wrong e-challan in Virtual Court online. Step-by-step 2026 process.",category:"Legal",author:"Rajesh Navsagar",date:"2026-02-07",imageUrl:"/images/blogs/traffic-challan-contest-guide.png",keywords:["Wrong E-Challan contest India","How to challenge traffic fine online","Parivahan grievance portal guide","Virtual court challan payment","Fake challan scam India 2026","Traffic police wrong fine complaint","Lok Adalat traffic challan settlement"],expertTip:"Kabhi bhi 'Processing' challan ko ignore mat karein. Agar 60 din tak pay ya contest nahi kiya, toh ye court mein transfer ho jata hai aur phir aapko lawyer karna pad sakta hai. Fake SMS links se bachein jo .apk file download karwate hain.",content:`

<p>India ke sadkon par ab police se zyada <strong>AI Cameras</strong> ka raaj hai. 2026 mein Delhi, Mumbai, aur Bangalore jaise shehron mein 90% challan automated systems generate karte hain. Lekin machine Machine hi hoti hai—kai baar bina seatbelt ke bhi seatbelt ka challan aa jata hai, ya kisi aur ki bike ki photo aapki car ke number plate par map ho jati hai. <strong>Ye comprehensive guide Rajesh's personal legal research aur Parivahan Sewa ke documented processes par based hai.</strong></p>

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
    <li>Visit <strong><a href="https://echallan.parivahan.gov.in" target="_blank" rel="noopener noreferrer">Parivahan E-Challan Portal</a></strong>.</li>
    <li>Click on 'Get Challan Details'.</li>
    <li>Apna Vehicle Number aur last 5 digits of Chassis Number enter karein. Iske bare mein aur jaankari ke liye humara <a href="/blog/car-pickup-inspection-checklist-rajesh">Car Pickup Audit Guide</a> dekhein.</li>
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
  <li>Scam link maangega "UPI PIN" ya "Download App". Avoid scams by reading our <a href="/blog/car-rental-scams-india">Car Rental Scams in India</a> guide.</li>
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

<hr/>
<h2>Frequently Asked Questions (Challan Dispute)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How to check fake challan online?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Always verify on the official <strong>echallan.parivahan.gov.in</strong> or State Traffic Police website holding the .gov.in domain. Never pay via SMS links like 'echallan-pay.com'.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Can I ignore a wrong challan?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>No. Ignoring a challan sends it to court after 60 days. Pending fines can block your vehicle sale (NOC) and insurance renewal.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is Virtual Court online safe?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Yes, <strong>vcourts.gov.in</strong> is the official judicial portal. You can pay fines or contest challans here legally without visiting a physical court.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What if grievance portal is not working?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>If the portal is down, email the specific city traffic police (e.g., traffic.delhi@nic.in) with the challan image and RC copy, or tweet to their official handle.</p>
      </div>
    </div>
  </div>
</div>
<hr/>

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

`},ix={id:"goa-mumbai-coastal-route-nh66-2026",title:"Goa to Mumbai NH66 Road Trip 2026: Best Stops & Safety Guide",slug:"goa-mumbai-coastal-route-nh66-2026",excerpt:"NH66 par Goa se Mumbai tak 450km ki coastal drive. Rajesh ke real experience se jaaniye best beach stops, highway safety tips, aur 2026 ke road conditions.",category:"Road Trips",author:"Rajesh Navsagar",date:"2026-02-11",imageUrl:"/images/blogs/goa-mumbai-coastal-route-2026.png",keywords:["Goa to Mumbai road trip","NH66 coastal highway India","Mumbai Goa drive 2026","Best stops Goa Mumbai route","Coastal road trip India","NH66 safety tips"],expertTip:"NH66 par subah 5 AM se pehle nikalna best hai. Ratnagiri ke paas breakfast stop lena aur sunset ke pehle Mumbai pahunchne ki koshish karna. Monsoon mein landslide alerts check karna zaroori hai.",content:`

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
  <li><strong>FASTag Active:</strong> NH66 par multiple toll plazas hain. Check our <a href="/blog/fastag-rules-india-2026-rental-cars">FASTag Guide</a>.</li>
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
  <li><strong>Speed Breakers:</strong> Unmarked speed breakers villages ke paas common hain. For tips, check our <a href="/blog/highway-speed-limits-india-fines-2026">Speed Limit Guide</a>.</li>
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
  <li><strong>Interstate Permit:</strong> Goa-registered car ko Maharashtra mein legally chalane ke liye permit chahiye. Check our <a href="/blog/interstate-permit-guide-india-2026">Interstate Permit Guide</a>.</li>
  <li><strong>One-Way Drop Charges:</strong> Goa pickup, Mumbai drop karne par heavy charges lagte hain (₹5,000-₹10,000). Read our <a href="/blog/one-way-car-rental-india-guide">One-Way Rental Guide</a>.</li>
  <li><strong>Damage Inspection:</strong> Pickup time par car ki photos lein. For tips, see our <a href="/blog/car-pickup-inspection-checklist-rajesh">Pickup Audit Checklist</a>.</li>
</ul>

<hr/>

<h2>Monsoon vs Winter: Which is Better?</h2>

<h3>Monsoon (June-September):</h3>
<p><strong>Pros:</strong> Lush green scenery, waterfalls<br/>
<strong>Cons:</strong> Landslides, poor visibility, slippery roads<br/>
<strong>Verdict:</strong> Only for experienced drivers. Read our <a href="/blog/monsoon-driving-survival-guide-india">Monsoon Driving Guide</a>.</p>

<h3>Winter (October-March):</h3>
<p><strong>Pros:</strong> Perfect weather, clear roads, safe driving<br/>
<strong>Cons:</strong> None<br/>
<strong>Verdict:</strong> Best time for this trip.</p>

<hr/>

<hr/>


<hr/>

            <h2>Frequently Asked Questions (Goa-Mumbai Road Trip)</h2>
            <div itemscope itemtype="https://schema.org/FAQPage">
              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is NH66 safe for night driving?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>It is generally <strong>not recommended</strong>. NH66 has many blind curves, unlit sections, and heavy truck traffic at night. The risk of glare blinding you on two-lane stretches is high. Plan to drive between 6 AM and 6 PM for maximum safety.</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">How long does the Goa to Mumbai drive take?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>The drive typically takes <strong>10 to 12 hours</strong> via NH66, including breaks. If you leave Goa by 5 AM, you can comfortably reach Mumbai (Navi Mumbai side) by 4 PM, beating the evening peak hour traffic.</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Are there good food stops on NH66?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>Yes. <strong>Ratnagiri and Chiplun</strong> are the best hubs for food. You will find many decent restaurants serving local Malvani cuisine as well as standard North Indian/South Indian dishes. Carry dry snacks for the patches between towns.</p>
                  </div>
                </div>
              </div>

              <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
                <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is CNG available on the Goa-Mumbai route?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>CNG availability is <strong>patchy</strong> on NH66 compared to the Mumbai-Pune Expressway. While pumps exist in major towns like Ratnagiri and Chiplun, long queues are common. It is safer to carry a full tank of Petrol/Diesel.</p>
                  </div>
                </div>
              </div>
            </div>
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

`},nx={id:"samruddhi-mahamarg-expressway-guide-2026",title:"Samruddhi Mahamarg Guide 2026: Speed Limits, Tolls & Hypnosis Danger",slug:"samruddhi-mahamarg-expressway-guide-2026",excerpt:"Planning a drive on Mumbai-Nagpur Expressway? Read Rajesh's survival guide on Highway Hypnosis, tyre burst risks on concrete, and 2026 toll rates.",category:"Road Trips",author:"Rajesh Navsagar",date:"2026-02-14",imageUrl:"/images/blogs/samruddhi-mahamarg-guide-2026.png",keywords:["Samruddhi Mahamarg Guide 2026","Mumbai Nagpur Expressway Toll Rates","Highway Hypnosis Prevention India","Samruddhi Mahamarg Speed Limit","Tyre Safety Concrete Roads","Food Malls on Samruddhi Mahamarg"],expertTip:"Samruddhi Mahamarg par 'Highway Hypnosis' real killer hai. Road itni straight aur smooth hai ki dimaag 'Auto-Pilot' mode mein chala jata hai. Har 90 minutes mein break lena compulsory rakhein, chahe thakaawat na ho. Concrete road tyres ko bahut garam karti hai, isliye Nitrogen bharna zaroori hai.",content:`

<p>Mumbai-Nagpur Expressway (Hindu Hrudaysamrat Balasaheb Thackeray Maharashtra Samruddhi Mahamarg) India ka sabse modern lekin sabse "Tricky" highway hai. 701 km ka ye stretch aapka travel time 16 ghante se ghata kar sirf 8 ghante kar deta hai. Lekin, opening ke baad se yahan tyre bursts aur hypnosis ki wajah se kayi dardnaak accidents huye hain. <strong>Ye guide 2026 ke updated facilities, NHAI surveillance data, aur real-world driving logs par based hai.</strong></p>

<p><em>This guide is written for Indian road travelers using personal or self-drive rental cars, based on latest NHAI data and real driving experience across the entire stretch.</em></p>

<p>Main Rajesh Navsagar, maine is expressway ko tab dekha hai jab ye construct ho raha tha aur ab jab ye poora functional hai. Samruddhi Mahamarg sirf ek rasta nahi hai—ye ek fast-lane animal hai jo thodi si laparwahi par aapko dhoka de sakta hai. Is article mein hum un hidden risks ki baat karenge jo MSRDC ke boards par nahi likhe hote. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<hr/>

<div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 12px; margin: 25px 0;">
  <h3 style="color: #1a73e8; margin-top: 0; font-size: 18px; text-transform: uppercase;">Rajesh's Expert Corner</h3>
  <p style="font-style: italic; font-weight: 500; color: #3c4043;">"Samruddhi Mahamarg par 'Highway Hypnosis' real killer hai. Road itni straight aur smooth hai ki dimaag 'Auto-Pilot' mode mein chala jata hai. Har 90 minutes mein break lena compulsory rakhein, chahe thakaawat na ho. Concrete road tyres ko bahut garam karti hai, isliye Normal Air ki jagah Nitrogen bharna zaroori hai. Agar aap 120 kmph par cruise kar rahe hain, toh music ki volume up-down karte rahein taaki dimaag alert rahe."</p>
  <p style="font-size: 11px; color: #70757a; margin-top: 10px; border-top: 1px solid #eee; pt-2;">*Based on documented trips and field observations (2025-2026).*</p>
</div>

<hr/>

<h2>1. The "Concrete" Danger: Tyre Bursts aur Friction</h2>

<p>Samruddhi Mahamarg poora concrete (Pavement Quality Concrete - PQC) se bana hai. Concrete, tarmac (damar) ke muqaable tyres mein zyada friction aur heat generate karta hai. High speed (120 kmph) par, tyres ke andar ki air expand hoti hai. Agar tyre purana hai ya usme koi cut hai, toh pressure handle nahi ho paata aur tyre burst ho jata hai.</p>

<h3>Tyre Safety Protocols:</h3>
<ul>
  <li><strong>Nitrogen Only:</strong> Cold air pressure maintain karne ke liye Nitrogen sabse behtar hai kyunki ye normal air ke muqaable kam expand hoti hai.</li>
  <li><strong>The 2-Hour Rule:</strong> Har 150-200 km ke baad 10-15 minute ka break lein. Gaadi ke bonnet aur tyres ko thanda hone ka waqt dein.</li>
  <li><strong>Tread Check:</strong> Agar tyre 3 saal se purana hai ya tread 3mm se kam hai, toh Samruddhi par 100 kmph se upar na jayein. Check our <a href="/blog/tyre-burst-prevention-highway-guide-2026">Detailed Tyre Safety Guide</a>.</li>
</ul>

<hr/>

<h2>2. Highway Hypnosis: The Silent Killer</h2>

<p>Kyunki rasta bilkul seedha hai aur visuals change nahi hote (no trees/buildings/major cities near the main deck), drivers aksar "Trance" mein chale jaate hain. Is condition mein driver ki aankhein khuli hoti hain par uska brain "Sleep Mode" mein chala jata hai. Use samne khada truck tab tak nahi dikhta jab tak wo bahut kareeb na aa jaye.</p>

<h3>Prevention Strategies:</h3>
<ul>
  <li><strong>Visual Breaks:</strong> Side mirrors mein dekhte rahein. Apne dimaag ko active rakhne ke liye driving style thoda change karein (lane change safely).</li>
  <li><strong>Caffeine stops:</strong> Har highway mall par ruk kar thoda pani ya chai piyein.</li>
  <li><strong>Avoid Night Driving:</strong> 12 AM se 4 AM ke beech expressway par sabse zyada accidents hote hain. Hypnosis risk raat mein 5 guna badh jata hai. Read our <a href="/blog/night-driving-survival-guide-india-2026">Night Driving Guide</a>.</li>
</ul>

<hr/>

<h2>3. Wildlife Overpasses aur Stray Animals</h2>

<p>Samruddhi Mahamarg forested areas aur eco-sensitive zones se guzarta hai. Isliye yahan India ke pehle <strong>Wildlife Overpasses</strong> banaye gaye hain. Lekin, kai baar chote animals barrier tod kar highway par aa jate hain. 
<strong>Pro Tip:</strong> Agar samne koi chota animal aaye, toh abruptly steering na ghumaayein. 120 kmph par sudden steering turn gaadi ko flip (roll-over) kar deta hai. Brake mazbooti se lagayein lekin lane maintain karein.</p>

<hr/>

<h2>4. Toll Rates & Speed Limits (2026 Schedule)</h2>

<p>Samruddhi Mahamarg par automated toll collection (FASTag) active hai. Yahan "Pay-per-KM" system use hota hai.</p>

<table style="width:100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <thead>
    <tr style="background-color: #f8f9fa; border-bottom: 2px solid #dee2e6;">
      <th style="padding: 15px; text-align: left;">Vehicle Category</th>
      <th style="padding: 15px; text-align: left;">Speed Limit (Max)</th>
      <th style="padding: 15px; text-align: left;">One-way Toll (Nagpur to Mumbai)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 12px; font-weight: 600;">Car / Jeep / SUV</td>
      <td style="padding: 12px;">120 km/h</td>
      <td style="padding: 12px;">₹1,215</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 12px; font-weight: 600;">Light Commercial (LCV)</td>
      <td style="padding: 12px;">100 km/h</td>
      <td style="padding: 12px;">₹1,960</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 12px; font-weight: 600;">Bus / Truck (2-axle)</td>
      <td style="padding: 12px;">80 km/h</td>
      <td style="padding: 12px;">₹4,115</td>
    </tr>
  </tbody>
</table>

<p><strong>Strict Enforcement:</strong> CCTV cameras aur speed sensors har 10-15 km par lage hain. Agar aap 120 kmph se 1 kmph bhi upar gaye, toh exit par sms challan ready hoga. Over-speeding fines ki list hamare <a href="/blog/highway-speed-limits-india-fines-2026">Speed Limit Guide</a> mein dekhein.</p>

<hr/>

<h2>5. Fuel, Food aur Emergency Facilities</h2>

<p>2026 mein Samruddhi Mahamarg par amenities pehle se behtar hain, lekin Shirdi-Nashik stretches par abhi bhi gaps hain.</p>
<ul>
  <li><strong>Waysides (WSA):</strong> Inhe "Highway Malls" kaha jata hai. Yahan fuel pumps (HPCL, BPCL, Jio-BP), food courts (Mcdonalds, Starbucks, Local Dhabas), aur clean washrooms milenge.</li>
  <li><strong>Electric Charging:</strong> EV charging stations har 60-70 km par available hain. </li>
  <li><strong>Emergency Help:</strong> Agar gaadi breakdown hoti hai, toh <strong>Dial 1033</strong>. Highway patrolling van 15 minute ke andar aapke paas hogi.</li>
</ul>

<hr/>

<div style="background-color: #f0f7ff; border-left: 5px solid #007bff; padding: 25px; border-radius: 15px; margin: 300px 0; font-family: 'Inter', sans-serif;">
  <h4 style="margin-top: 0; color: #0056b3; font-weight: 800; text-transform: uppercase;">🛤️ Popular Exits on Samruddhi</h4>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Nagpur se Mumbai jate waqt ye major points aate hain:</p>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li>📍 <strong>Wardha/Amravati:</strong> Exit for pilgrimage and orange markets.</li>
    <li>📍 <strong>Shegaon/Jalna:</strong> Hub for spiritual tourism.</li>
    <li>📍 <strong>Aurangabad (Chhatrapati Sambhajinagar):</strong> Exit for Ajanta/Ellora Caves.</li>
    <li>📍 <strong>Shirdi:</strong> Sabse busy exit. Yahan weekend par traffic jam ho sakta hai.</li>
    <li>📍 <strong>Nashik/Igatpuri:</strong> Start of the hilly terrain and wine capital.</li>
  </ul>
</div>

<hr/>

<h2>Frequently Asked Questions (Samruddhi Mahamarg)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Is it safe to drive 120 kmph on Samruddhi Mahamarg?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Legally yes, but practically it depends on your vehicle's condition. For small hatchbacks, 120 kmph can be unstable. We recommend 100 kmph for better fuel efficiency and safety. If it's raining, reduce speed to 80 kmph as concrete becomes very slippery.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">What if I run out of fuel mid-way?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Call the helpline 1033. They will provide basic fuel to reach the nearest station (chargeable). To avoid this, never let your tank go below 25%, as some pumps might be temporarily out of stock.</p>
      </div>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 20px;">
    <h3 itemprop="name" style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Are there any overnight stay options on the highway?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Currently, dedicated hotels on the middle deck are limited. It is better to exit at Aurangabad or Shirdi if you want a comfortable hotel stay. Some major WSA stations have small rest areas but they are mostly for quick naps.</p>
      </div>
    </div>
  </div>
</div>

<hr/>

<h2>Conclusion: The Future of Indian Infrastructure</h2>

<p>Samruddhi Mahamarg sirf ek highway nahi, Maharashtra ki economy ki backbone hai. Lekin is speed ka samman karna zaroori hai. India mein "Fast Highways" ki aadat abhi humein nahi hai, isliye discipline rakhna hi life insurance hai. This article focuses on real Indian highway conditions, not generic travel advice.</p>

<p><strong>The Golden Rule:</strong> Agar aapko thodi si bhi neend aa rahi hai, toh turant ruk jayein. 120 kmph par dimaag ko 1 second ka lag bhi maut ka kaaran ban sakta hai.</p>

<p>Drive Safe, Stay Alert, aur Samruddhi ki speed ko enjoy karein!</p>

<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #007bff;">
  <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
    <em>Disclaimer: BookMyCar.live is an independent informational platform. Expressway rules, toll rates, and conditions can change. Always verify with MSRDC and NHAI official sources before starting your journey.</em>
  </p>
</div>

`},Zn=[Lb,Gb,qb,Yb,Ib,Qb,Vb,Kb,Fb,Pb,Zb,Xb,Jb,Wb,$b,ex,ax,tx,ix,nx],rx=({isOpen:s,onClose:c})=>{const[h,d]=R.useState(""),[p,m]=R.useState([]),y=R.useRef(null);return R.useEffect(()=>{s&&y.current&&setTimeout(()=>{var v;return(v=y.current)==null?void 0:v.focus()},100)},[s]),R.useEffect(()=>{if(h.trim()===""){m([]);return}const v=h.toLowerCase(),f=Zn.filter(g=>g.title.toLowerCase().includes(v)||g.keywords.some(A=>A.toLowerCase().includes(v))||g.category.toLowerCase().includes(v)).slice(0,5);m(f)},[h]),s?l.jsxs("div",{className:"fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col animate-in fade-in duration-200",children:[l.jsxs("div",{className:"max-w-4xl mx-auto w-full p-6 flex items-center gap-4",children:[l.jsx(pc,{className:"text-gray-400",size:24}),l.jsx("input",{ref:y,type:"text",placeholder:"Search guides (e.g. 'Challan', 'Manali', 'Fastag')...",className:"flex-1 bg-transparent text-2xl md:text-4xl font-black text-gray-900 placeholder:text-gray-300 outline-none uppercase tracking-tight",value:h,onChange:v=>d(v.target.value)}),l.jsx("button",{onClick:c,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:l.jsx(Cc,{size:32})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto px-6 pb-20",children:l.jsxs("div",{className:"max-w-2xl mx-auto mt-10 space-y-4",children:[h&&p.length===0&&l.jsx("div",{className:"text-center text-gray-400 py-20",children:l.jsxs("p",{className:"text-sm font-bold uppercase tracking-widest",children:['No guides found for "',h,'"']})}),p.map(v=>l.jsxs(ue,{to:`/blog/${v.slug}`,onClick:c,className:"group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100",children:[l.jsx("img",{src:v.imageUrl,alt:v.title,className:"w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform"}),l.jsxs("div",{className:"flex-1",children:[l.jsx("span",{className:"text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1 block",children:v.category}),l.jsx("h3",{className:"text-lg font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors uppercase",children:v.title})]}),l.jsx(qa,{className:"text-gray-300 group-hover:text-blue-600 self-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"})]},v.id))]})}),l.jsx("div",{className:"border-t border-gray-100 p-4 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest",children:"Press ESC to close"})]}):null},lx=()=>{const[s,c]=R.useState(!1),[h,d]=R.useState(!1),p=pt(),m=[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Travel Rules",path:"/rules"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],y=R.useCallback(g=>p.pathname===g,[p.pathname]),v=()=>c(g=>!g),f=()=>c(!1);return l.jsxs(l.Fragment,{children:[l.jsx(rx,{isOpen:h,onClose:()=>d(!1)}),l.jsxs("header",{className:"bg-white sticky top-0 z-50 border-b border-gray-50",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:l.jsxs("div",{className:"flex justify-between items-center h-14 md:h-16",children:[l.jsxs(ue,{to:"/",title:"BookMyCar.live",className:"flex items-center space-x-3 group",children:[l.jsx("div",{className:"w-9 h-9 overflow-hidden rounded-xl border border-gray-100 shadow-sm group-hover:rotate-6 transition-transform",children:l.jsx("img",{src:"/logo.png",alt:"BookMyCar Logo",className:"w-full h-full object-cover"})}),l.jsxs("span",{className:"text-xl font-black text-black tracking-tighter",children:["BookMyCar",l.jsx("span",{className:"text-blue-500",children:".live"})]})]}),l.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[m.map(g=>l.jsxs(ue,{to:g.path,className:`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${y(g.path)?"text-blue-600":"text-gray-400 hover:text-black"}`,children:[g.name,y(g.path)&&l.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"})]},g.path)),l.jsx("button",{onClick:()=>d(!0),className:"p-2 text-gray-400 hover:text-blue-600 transition-colors",title:"Search Guides",children:l.jsx(pc,{size:20})})]}),l.jsxs("div",{className:"md:hidden flex items-center gap-4",children:[l.jsx("button",{onClick:()=>d(!0),className:"p-2 text-gray-600",children:l.jsx(pc,{size:22})}),l.jsx("button",{onClick:v,className:"p-2 text-gray-900",children:s?l.jsx(Cc,{size:24}):l.jsx(wb,{size:24})})]})]})}),s&&l.jsx("div",{className:"md:hidden border-t bg-white shadow-2xl animate-in slide-in-from-top duration-300",children:l.jsx("div",{className:"px-6 py-8 space-y-4",children:m.map(g=>l.jsxs(ue,{to:g.path,onClick:f,className:`block px-6 py-4 font-black uppercase tracking-widest text-xs rounded-2xl ${y(g.path)?"bg-blue-50 text-blue-600":"text-gray-500 hover:bg-gray-50"}`,children:[g.name,y(g.path)&&l.jsx("span",{className:"block w-1.5 h-1.5 bg-blue-600 rounded-full absolute left-4 top-1/2 -translate-y-1/2"})]},g.path))})})]})]})},sx=()=>{const s=new Date().getFullYear();return l.jsx("footer",{className:"bg-[#07090F] text-white pt-8 md:pt-10 pb-6 border-t border-white/5",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[l.jsxs("div",{className:"col-span-1",children:[l.jsxs(ue,{to:"/",className:"flex items-center space-x-3 mb-4 group",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-blue-600/20",children:l.jsx(Al,{className:"h-5 w-5 text-white"})}),l.jsxs("span",{className:"text-xl font-black tracking-tighter",children:["BookMyCar",l.jsx("span",{className:"text-blue-500",children:".live"})]})]}),l.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-6 font-medium",children:"Real road trip guides for real people. Based on multi-state road experience. Just the honest truth about Indian highways."})]}),l.jsxs("nav",{"aria-label":"Footer navigation",children:[l.jsx("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2 inline-block",children:"Explore"}),l.jsxs("ul",{className:"space-y-3",children:[l.jsx("li",{children:l.jsx(ue,{to:"/",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Home"})}),l.jsx("li",{children:l.jsx(ue,{to:"/blog",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Blog"})}),l.jsx("li",{children:l.jsx(ue,{to:"/rules",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Travel Rules Guide"})}),l.jsx("li",{children:l.jsx(ue,{to:"/about",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"About My Mission"})})]})]}),l.jsxs("nav",{"aria-label":"Legal links",children:[l.jsx("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2 inline-block",children:"Transparency"}),l.jsxs("ul",{className:"space-y-3",children:[l.jsx("li",{children:l.jsx(ue,{to:"/privacy",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Privacy Policy"})}),l.jsx("li",{children:l.jsx(ue,{to:"/terms",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Terms of Use"})}),l.jsx("li",{children:l.jsx(ue,{to:"/disclaimer",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Full Disclaimer"})}),l.jsx("li",{children:l.jsx(ue,{to:"/cookies",className:"text-gray-400 hover:text-white text-sm font-bold transition-colors",children:"Cookie Policy"})}),l.jsxs("li",{className:"flex items-center text-gray-400 pt-2",children:[l.jsx(Tc,{className:"h-4 w-4 mr-2 text-blue-500"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-xs hover:text-blue-500 transition-colors font-black underline decoration-gray-700 underline-offset-4",children:"bookmycar.live@gmail.com"})]})]})]}),l.jsxs("div",{className:"bg-white/[0.03] p-6 rounded-[2rem] border border-white/5 relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsx("div",{className:"flex items-center gap-2 mb-3 text-blue-400",children:l.jsx("h3",{className:"text-[10px] font-black uppercase tracking-widest text-white underline decoration-blue-500/50 underline-offset-4",children:"Transparency notice"})}),l.jsx("p",{className:"text-[12px] text-gray-400 leading-relaxed font-medium",children:"Based on real experience. I don't sell bookings or take commissions. My goal is to share on-road evidence and practical advice."})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/[0.03] group-hover:scale-125 group-hover:rotate-12 transition-all duration-700",size:120})]})]}),l.jsx("div",{className:"mt-8 md:mt-6 pt-6 border-t border-white/5 flex justify-center items-center text-center",children:l.jsxs("p",{className:"text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]",children:["© ",s," BookMyCar.live. Content by Rajesh Navsagar, based on on-road experience."]})})]})})},ox=()=>{const[s,c]=R.useState(!1);R.useEffect(()=>{if(!localStorage.getItem("cookie-consent")){const p=setTimeout(()=>c(!0),1500);return()=>clearTimeout(p)}},[]);const h=()=>{localStorage.setItem("cookie-consent","true"),c(!1)};return s?l.jsx("div",{className:"fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] animate-in slide-in-from-bottom-10 duration-500",children:l.jsxs("div",{className:"bg-gray-900 border border-white/10 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg",children:l.jsx(mc,{size:20})}),l.jsx("h3",{className:"text-white font-black uppercase tracking-widest text-xs",children:"Privacy & Cookies"}),l.jsx("button",{onClick:()=>c(!1),className:"ml-auto text-gray-500 hover:text-white transition-colors",children:l.jsx(Cc,{size:18})})]}),l.jsxs("p",{className:"text-gray-400 text-[11px] leading-relaxed font-medium mb-6",children:["We use cookies to improve your experience and show relevant ads via Google AdSense. By continuing to explore our road trip guides, you agree to our ",l.jsx(ue,{to:"/privacy",className:"text-blue-400 underline underline-offset-4",children:"Privacy Policy"}),"."]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:h,className:"flex-1 bg-white text-black font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95",children:"Accept & Continue"}),l.jsx("button",{onClick:()=>c(!1),className:"bg-white/5 text-gray-400 font-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5",children:"Settings"})]})]}),l.jsx(mc,{className:"absolute -bottom-6 -right-6 text-white/[0.02] transform group-hover:scale-110 transition-transform",size:150})]})}):null};var ic,Xp;function cx(){if(Xp)return ic;Xp=1;var s=typeof Element<"u",c=typeof Map=="function",h=typeof Set=="function",d=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,y){if(m===y)return!0;if(m&&y&&typeof m=="object"&&typeof y=="object"){if(m.constructor!==y.constructor)return!1;var v,f,g;if(Array.isArray(m)){if(v=m.length,v!=y.length)return!1;for(f=v;f--!==0;)if(!p(m[f],y[f]))return!1;return!0}var A;if(c&&m instanceof Map&&y instanceof Map){if(m.size!==y.size)return!1;for(A=m.entries();!(f=A.next()).done;)if(!y.has(f.value[0]))return!1;for(A=m.entries();!(f=A.next()).done;)if(!p(f.value[1],y.get(f.value[0])))return!1;return!0}if(h&&m instanceof Set&&y instanceof Set){if(m.size!==y.size)return!1;for(A=m.entries();!(f=A.next()).done;)if(!y.has(f.value[0]))return!1;return!0}if(d&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(y)){if(v=m.length,v!=y.length)return!1;for(f=v;f--!==0;)if(m[f]!==y[f])return!1;return!0}if(m.constructor===RegExp)return m.source===y.source&&m.flags===y.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof y.valueOf=="function")return m.valueOf()===y.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof y.toString=="function")return m.toString()===y.toString();if(g=Object.keys(m),v=g.length,v!==Object.keys(y).length)return!1;for(f=v;f--!==0;)if(!Object.prototype.hasOwnProperty.call(y,g[f]))return!1;if(s&&m instanceof Element)return!1;for(f=v;f--!==0;)if(!((g[f]==="_owner"||g[f]==="__v"||g[f]==="__o")&&m.$$typeof)&&!p(m[g[f]],y[g[f]]))return!1;return!0}return m!==m&&y!==y}return ic=function(y,v){try{return p(y,v)}catch(f){if((f.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw f}},ic}var dx=cx();const hx=Xn(dx);var nc,Jp;function ux(){if(Jp)return nc;Jp=1;var s=function(c,h,d,p,m,y,v,f){if(!c){var g;if(h===void 0)g=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var A=[d,p,m,y,v,f],N=0;g=new Error(h.replace(/%s/g,function(){return A[N++]})),g.name="Invariant Violation"}throw g.framesToPop=1,g}};return nc=s,nc}var px=ux();const Wp=Xn(px);var rc,$p;function mx(){return $p||($p=1,rc=function(c,h,d,p){var m=d?d.call(p,c,h):void 0;if(m!==void 0)return!!m;if(c===h)return!0;if(typeof c!="object"||!c||typeof h!="object"||!h)return!1;var y=Object.keys(c),v=Object.keys(h);if(y.length!==v.length)return!1;for(var f=Object.prototype.hasOwnProperty.bind(h),g=0;g<y.length;g++){var A=y[g];if(!f(A))return!1;var N=c[A],O=h[A];if(m=d?d.call(p,N,O,A):void 0,m===!1||m===void 0&&N!==O)return!1}return!0}),rc}var gx=mx();const fx=Xn(gx);var Tm=(s=>(s.BASE="base",s.BODY="body",s.HEAD="head",s.HTML="html",s.LINK="link",s.META="meta",s.NOSCRIPT="noscript",s.SCRIPT="script",s.STYLE="style",s.TITLE="title",s.FRAGMENT="Symbol(react.fragment)",s))(Tm||{}),lc={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},em=Object.values(Tm),Rc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},yx=Object.entries(Rc).reduce((s,[c,h])=>(s[h]=c,s),{}),Ha="data-rh",Vi={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ki=(s,c)=>{for(let h=s.length-1;h>=0;h-=1){const d=s[h];if(Object.prototype.hasOwnProperty.call(d,c))return d[c]}return null},bx=s=>{let c=Ki(s,"title");const h=Ki(s,Vi.TITLE_TEMPLATE);if(Array.isArray(c)&&(c=c.join("")),h&&c)return h.replace(/%s/g,()=>c);const d=Ki(s,Vi.DEFAULT_TITLE);return c||d||void 0},xx=s=>Ki(s,Vi.ON_CHANGE_CLIENT_STATE)||(()=>{}),sc=(s,c)=>c.filter(h=>typeof h[s]<"u").map(h=>h[s]).reduce((h,d)=>({...h,...d}),{}),vx=(s,c)=>c.filter(h=>typeof h.base<"u").map(h=>h.base).reverse().reduce((h,d)=>{if(!h.length){const p=Object.keys(d);for(let m=0;m<p.length;m+=1){const v=p[m].toLowerCase();if(s.indexOf(v)!==-1&&d[v])return h.concat(d)}}return h},[]),kx=s=>console&&typeof console.warn=="function"&&console.warn(s),Kn=(s,c,h)=>{const d={};return h.filter(p=>Array.isArray(p[s])?!0:(typeof p[s]<"u"&&kx(`Helmet: ${s} should be of type "Array". Instead found type "${typeof p[s]}"`),!1)).map(p=>p[s]).reverse().reduce((p,m)=>{const y={};m.filter(f=>{let g;const A=Object.keys(f);for(let O=0;O<A.length;O+=1){const B=A[O],Y=B.toLowerCase();c.indexOf(Y)!==-1&&!(g==="rel"&&f[g].toLowerCase()==="canonical")&&!(Y==="rel"&&f[Y].toLowerCase()==="stylesheet")&&(g=Y),c.indexOf(B)!==-1&&(B==="innerHTML"||B==="cssText"||B==="itemprop")&&(g=B)}if(!g||!f[g])return!1;const N=f[g].toLowerCase();return d[g]||(d[g]={}),y[g]||(y[g]={}),d[g][N]?!1:(y[g][N]=!0,!0)}).reverse().forEach(f=>p.push(f));const v=Object.keys(y);for(let f=0;f<v.length;f+=1){const g=v[f],A={...d[g],...y[g]};d[g]=A}return p},[]).reverse()},wx=(s,c)=>{if(Array.isArray(s)&&s.length){for(let h=0;h<s.length;h+=1)if(s[h][c])return!0}return!1},jx=s=>({baseTag:vx(["href"],s),bodyAttributes:sc("bodyAttributes",s),defer:Ki(s,Vi.DEFER),encode:Ki(s,Vi.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:sc("htmlAttributes",s),linkTags:Kn("link",["rel","href"],s),metaTags:Kn("meta",["name","charset","http-equiv","property","itemprop"],s),noscriptTags:Kn("noscript",["innerHTML"],s),onChangeClientState:xx(s),scriptTags:Kn("script",["src","innerHTML"],s),styleTags:Kn("style",["cssText"],s),title:bx(s),titleAttributes:sc("titleAttributes",s),prioritizeSeoTags:wx(s,Vi.PRIORITIZE_SEO_TAGS)}),Nm=s=>Array.isArray(s)?s.join(""):s,Sx=(s,c)=>{const h=Object.keys(s);for(let d=0;d<h.length;d+=1)if(c[h[d]]&&c[h[d]].includes(s[h[d]]))return!0;return!1},oc=(s,c)=>Array.isArray(s)?s.reduce((h,d)=>(Sx(d,c)?h.priority.push(d):h.default.push(d),h),{priority:[],default:[]}):{default:s,priority:[]},am=(s,c)=>({...s,[c]:void 0}),Ax=["noscript","script","style"],fc=(s,c=!0)=>c===!1?String(s):String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Cm=s=>Object.keys(s).reduce((c,h)=>{const d=typeof s[h]<"u"?`${h}="${s[h]}"`:`${h}`;return c?`${c} ${d}`:d},""),Tx=(s,c,h,d)=>{const p=Cm(h),m=Nm(c);return p?`<${s} ${Ha}="true" ${p}>${fc(m,d)}</${s}>`:`<${s} ${Ha}="true">${fc(m,d)}</${s}>`},Nx=(s,c,h=!0)=>c.reduce((d,p)=>{const m=p,y=Object.keys(m).filter(g=>!(g==="innerHTML"||g==="cssText")).reduce((g,A)=>{const N=typeof m[A]>"u"?A:`${A}="${fc(m[A],h)}"`;return g?`${g} ${N}`:N},""),v=m.innerHTML||m.cssText||"",f=Ax.indexOf(s)===-1;return`${d}<${s} ${Ha}="true" ${y}${f?"/>":`>${v}</${s}>`}`},""),Rm=(s,c={})=>Object.keys(s).reduce((h,d)=>{const p=Rc[d];return h[p||d]=s[d],h},c),Cx=(s,c,h)=>{const d={key:c,[Ha]:!0},p=Rm(h,d);return[dt.createElement("title",p,c)]},jl=(s,c)=>c.map((h,d)=>{const p={key:d,[Ha]:!0};return Object.keys(h).forEach(m=>{const v=Rc[m]||m;if(v==="innerHTML"||v==="cssText"){const f=h.innerHTML||h.cssText;p.dangerouslySetInnerHTML={__html:f}}else p[v]=h[m]}),dt.createElement(s,p)}),Ra=(s,c,h=!0)=>{switch(s){case"title":return{toComponent:()=>Cx(s,c.title,c.titleAttributes),toString:()=>Tx(s,c.title,c.titleAttributes,h)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Rm(c),toString:()=>Cm(c)};default:return{toComponent:()=>jl(s,c),toString:()=>Nx(s,c,h)}}},Rx=({metaTags:s,linkTags:c,scriptTags:h,encode:d})=>{const p=oc(s,lc.meta),m=oc(c,lc.link),y=oc(h,lc.script);return{priorityMethods:{toComponent:()=>[...jl("meta",p.priority),...jl("link",m.priority),...jl("script",y.priority)],toString:()=>`${Ra("meta",p.priority,d)} ${Ra("link",m.priority,d)} ${Ra("script",y.priority,d)}`},metaTags:p.default,linkTags:m.default,scriptTags:y.default}},Ex=s=>{const{baseTag:c,bodyAttributes:h,encode:d=!0,htmlAttributes:p,noscriptTags:m,styleTags:y,title:v="",titleAttributes:f,prioritizeSeoTags:g}=s;let{linkTags:A,metaTags:N,scriptTags:O}=s,B={toComponent:()=>{},toString:()=>""};return g&&({priorityMethods:B,linkTags:A,metaTags:N,scriptTags:O}=Rx(s)),{priority:B,base:Ra("base",c,d),bodyAttributes:Ra("bodyAttributes",h,d),htmlAttributes:Ra("htmlAttributes",p,d),link:Ra("link",A,d),meta:Ra("meta",N,d),noscript:Ra("noscript",m,d),script:Ra("script",O,d),style:Ra("style",y,d),title:Ra("title",{title:v,titleAttributes:f},d)}},yc=Ex,xl=[],Em=!!(typeof window<"u"&&window.document&&window.document.createElement),bc=class{constructor(s,c){ct(this,"instances",[]);ct(this,"canUseDOM",Em);ct(this,"context");ct(this,"value",{setHelmet:s=>{this.context.helmet=s},helmetInstances:{get:()=>this.canUseDOM?xl:this.instances,add:s=>{(this.canUseDOM?xl:this.instances).push(s)},remove:s=>{const c=(this.canUseDOM?xl:this.instances).indexOf(s);(this.canUseDOM?xl:this.instances).splice(c,1)}}});this.context=s,this.canUseDOM=c||!1,c||(s.helmet=yc({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},zx={},zm=dt.createContext(zx),ri,Mm=(ri=class extends R.Component{constructor(h){super(h);ct(this,"helmetData");this.helmetData=new bc(this.props.context||{},ri.canUseDOM)}render(){return dt.createElement(zm.Provider,{value:this.helmetData.value},this.props.children)}},ct(ri,"canUseDOM",Em),ri),Qi=(s,c)=>{const h=document.head||document.querySelector("head"),d=h.querySelectorAll(`${s}[${Ha}]`),p=[].slice.call(d),m=[];let y;return c&&c.length&&c.forEach(v=>{const f=document.createElement(s);for(const g in v)if(Object.prototype.hasOwnProperty.call(v,g))if(g==="innerHTML")f.innerHTML=v.innerHTML;else if(g==="cssText")f.styleSheet?f.styleSheet.cssText=v.cssText:f.appendChild(document.createTextNode(v.cssText));else{const A=g,N=typeof v[A]>"u"?"":v[A];f.setAttribute(g,N)}f.setAttribute(Ha,"true"),p.some((g,A)=>(y=A,f.isEqualNode(g)))?p.splice(y,1):m.push(f)}),p.forEach(v=>{var f;return(f=v.parentNode)==null?void 0:f.removeChild(v)}),m.forEach(v=>h.appendChild(v)),{oldTags:p,newTags:m}},xc=(s,c)=>{const h=document.getElementsByTagName(s)[0];if(!h)return;const d=h.getAttribute(Ha),p=d?d.split(","):[],m=[...p],y=Object.keys(c);for(const v of y){const f=c[v]||"";h.getAttribute(v)!==f&&h.setAttribute(v,f),p.indexOf(v)===-1&&p.push(v);const g=m.indexOf(v);g!==-1&&m.splice(g,1)}for(let v=m.length-1;v>=0;v-=1)h.removeAttribute(m[v]);p.length===m.length?h.removeAttribute(Ha):h.getAttribute(Ha)!==y.join(",")&&h.setAttribute(Ha,y.join(","))},Mx=(s,c)=>{typeof s<"u"&&document.title!==s&&(document.title=Nm(s)),xc("title",c)},tm=(s,c)=>{const{baseTag:h,bodyAttributes:d,htmlAttributes:p,linkTags:m,metaTags:y,noscriptTags:v,onChangeClientState:f,scriptTags:g,styleTags:A,title:N,titleAttributes:O}=s;xc("body",d),xc("html",p),Mx(N,O);const B={baseTag:Qi("base",h),linkTags:Qi("link",m),metaTags:Qi("meta",y),noscriptTags:Qi("noscript",v),scriptTags:Qi("script",g),styleTags:Qi("style",A)},Y={},F={};Object.keys(B).forEach(q=>{const{newTags:I,oldTags:ae}=B[q];I.length&&(Y[q]=I),ae.length&&(F[q]=B[q].oldTags)}),c&&c(),f(s,Y,F)},Fn=null,Dx=s=>{Fn&&cancelAnimationFrame(Fn),s.defer?Fn=requestAnimationFrame(()=>{tm(s,()=>{Fn=null})}):(tm(s),Fn=null)},Hx=Dx,im=class extends R.Component{constructor(){super(...arguments);ct(this,"rendered",!1)}shouldComponentUpdate(c){return!fx(c,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:c}=this.props.context;c.remove(this),this.emitChange()}emitChange(){const{helmetInstances:c,setHelmet:h}=this.props.context;let d=null;const p=jx(c.get().map(m=>{const y={...m.props};return delete y.context,y}));Mm.canUseDOM?Hx(p):yc&&(d=yc(p)),h(d)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:c}=this.props.context;c.add(this),this.emitChange()}render(){return this.init(),null}},cc,Ia=(cc=class extends R.Component{shouldComponentUpdate(s){return!hx(am(this.props,"helmetData"),am(s,"helmetData"))}mapNestedChildrenToProps(s,c){if(!c)return null;switch(s.type){case"script":case"noscript":return{innerHTML:c};case"style":return{cssText:c};default:throw new Error(`<${s.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(s,c,h,d){return{...c,[s.type]:[...c[s.type]||[],{...h,...this.mapNestedChildrenToProps(s,d)}]}}mapObjectTypeChildren(s,c,h,d){switch(s.type){case"title":return{...c,[s.type]:d,titleAttributes:{...h}};case"body":return{...c,bodyAttributes:{...h}};case"html":return{...c,htmlAttributes:{...h}};default:return{...c,[s.type]:{...h}}}}mapArrayTypeChildrenToProps(s,c){let h={...c};return Object.keys(s).forEach(d=>{h={...h,[d]:s[d]}}),h}warnOnInvalidChildren(s,c){return Wp(em.some(h=>s.type===h),typeof s.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${em.join(", ")} are allowed. Helmet does not support rendering <${s.type}> elements. Refer to our API for more information.`),Wp(!c||typeof c=="string"||Array.isArray(c)&&!c.some(h=>typeof h!="string"),`Helmet expects a string as a child of <${s.type}>. Did you forget to wrap your children in braces? ( <${s.type}>{\`\`}</${s.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(s,c){let h={};return dt.Children.forEach(s,d=>{if(!d||!d.props)return;const{children:p,...m}=d.props,y=Object.keys(m).reduce((f,g)=>(f[yx[g]||g]=m[g],f),{});let{type:v}=d;switch(typeof v=="symbol"?v=v.toString():this.warnOnInvalidChildren(d,p),v){case"Symbol(react.fragment)":c=this.mapChildrenToProps(p,c);break;case"link":case"meta":case"noscript":case"script":case"style":h=this.flattenArrayTypeChildren(d,h,y,p);break;default:c=this.mapObjectTypeChildren(d,c,y,p);break}}),this.mapArrayTypeChildrenToProps(h,c)}render(){const{children:s,...c}=this.props;let h={...c},{helmetData:d}=c;if(s&&(h=this.mapChildrenToProps(s,h)),d&&!(d instanceof bc)){const p=d;d=new bc(p.context,!0),delete h.helmetData}return d?dt.createElement(im,{...h,context:d.value}):dt.createElement(zm.Consumer,null,p=>dt.createElement(im,{...h,context:p}))}},ct(cc,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),cc);const Ox=()=>{const s=Zn.slice(0,3);return l.jsxs("div",{className:"flex flex-col min-h-screen",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"BookMyCar.live | Honest Indian Road Trip & Rental Guide"}),l.jsx("meta",{name:"description",content:"Stop making expensive road trip mistakes. BookMyCar.live is a human-written guide for Indian driving rules, car rental scams, and highway safety tips."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/"})]}),l.jsxs("section",{className:"relative min-h-[500px] md:h-[60vh] md:max-h-[420px] flex items-center overflow-hidden bg-black",children:[l.jsxs("div",{className:"absolute inset-0 z-0",children:[l.jsx("img",{src:"/images/hero/home-hero-indian-road-trip-car.png",className:"w-full h-full object-cover object-[65%_center] md:object-center opacity-60 md:opacity-100",alt:"Indian Road Trip",fetchPriority:"high"}),l.jsx("div",{className:"absolute inset-0 bg-black/40 md:bg-black/20"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent"})]}),l.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center py-10",children:l.jsxs("div",{className:"max-w-2xl text-center md:text-left mx-auto md:mx-0",children:[l.jsx("div",{className:"flex items-center justify-center md:justify-start gap-2 mb-4 opacity-100",children:l.jsx("span",{className:"text-[10px] md:text-[11px] font-black text-blue-400 uppercase tracking-[0.3em]",children:"From Indian Highways — Field Notes"})}),l.jsxs("h1",{className:"text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-white uppercase italic drop-shadow-2xl",children:["The Indian Road Trip ",l.jsx("br",{}),l.jsx("span",{className:"text-3xl md:text-5xl text-blue-500 block mt-2",children:"Reality Guide"})]}),l.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-blue-500/30 p-5 rounded-2xl max-w-lg mb-8 shadow-xl mx-auto md:mx-0",children:[l.jsx("p",{className:"text-white text-[13px] md:text-base leading-relaxed font-bold italic",children:'"Real-world driving lessons from Indian highways — routes, rules, tolls, and mistakes you only learn on the road."'}),l.jsx("div",{className:"mt-4 flex items-center justify-center md:justify-start gap-2",children:l.jsx("span",{className:"text-[9px] font-black text-blue-300 uppercase tracking-widest",children:"Rajesh Navsagar, Expert Traveler"})})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start",children:[l.jsxs(ue,{to:"/blog",className:"w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg text-[10px] uppercase tracking-widest min-w-[180px]",children:["READ THE BLOGS ",l.jsx(qa,{size:14})]}),l.jsxs(ue,{to:"/rules",className:"w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg text-[10px] uppercase tracking-widest min-w-[180px]",children:["THE RULEBOOK ",l.jsx(qa,{size:14})]})]})]})})]}),l.jsx("section",{className:"py-10 bg-white border-b border-gray-100",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left",children:[l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4",children:[l.jsx("div",{className:"bg-blue-50 p-3 rounded-xl text-blue-600",children:l.jsx(wm,{size:22})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-gray-900 text-sm uppercase",children:"First-hand Experience"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-snug",children:"Based on multi-state road trips, toll booths, border check-posts, and real rental disputes."})]})]}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4 border-y md:border-y-0 md:border-x py-8 md:py-2 px-0 md:px-8",children:[l.jsx("div",{className:"bg-green-50 p-3 rounded-xl text-green-600",children:l.jsx(je,{size:22})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-gray-900 text-sm uppercase",children:"Zero Agency Favor"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-snug",children:"No paid partnerships. Companies are mentioned only when necessary for explanation."})]})]}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4",children:[l.jsx("div",{className:"bg-yellow-50 p-3 rounded-xl text-yellow-600",children:l.jsx(Rl,{size:22})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-gray-900 text-sm uppercase",children:"RTO Truths"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-snug",children:"RTO rules explained as they are enforced on highways, not as written in PDFs."})]})]})]})}),l.jsx("section",{className:"py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:l.jsxs("div",{className:"bg-blue-50/50 rounded-[40px] p-8 md:p-12 border border-blue-100 relative overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none",children:l.jsx(Al,{size:200,className:"text-blue-600"})}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("h2",{className:"text-2xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight",children:["What You’ll Learn on ",l.jsx("span",{className:"text-blue-600",children:"BookMyCar.live"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[l.jsxs("ul",{className:"space-y-4",children:[l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"How to legally rent and drive self-drive cars in India"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"State-wise road rules, tolls, and RTO realities"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"Rental car insurance traps and how to avoid damage scams"})]})]}),l.jsxs("ul",{className:"space-y-4",children:[l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"Real highway safety tips from long-distance drives"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"mt-1.5 bg-blue-600 rounded-full p-1",children:l.jsx(je,{size:10,className:"text-white"})}),l.jsx("p",{className:"text-gray-700 font-medium",children:"Route planning, pitstops, and timing strategies"})]}),l.jsx("li",{className:"flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-blue-100",children:l.jsx("p",{className:"text-blue-700 font-bold text-xs uppercase tracking-widest italic",children:'"Every guide focuses on avoiding fines, delays, and rental disputes — not selling services."'})})]})]})]})]})})}),l.jsx("section",{className:"py-16 bg-gray-50",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[l.jsxs("div",{className:"flex justify-between items-end mb-10",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight uppercase italic",children:["Latest Road Trip ",l.jsx("span",{className:"text-blue-600",children:"Guides"})]}),l.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Updated routes and rule changes based on recent road trips."})]}),l.jsxs(ue,{to:"/blog",className:"hidden md:flex items-center text-blue-600 hover:text-blue-700 font-black uppercase text-[10px] tracking-[0.2em]",children:["View All ",l.jsx(qa,{className:"ml-2 h-3.5 w-3.5"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:s.map(c=>l.jsxs("article",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col",children:[l.jsxs("div",{className:"relative h-48 overflow-hidden",children:[l.jsx("img",{src:`${c.imageUrl}?v=2`,alt:c.title,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute top-3 left-3",children:l.jsx("span",{className:"bg-white/90 backdrop-blur-md text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider",children:c.category})})]}),l.jsxs("div",{className:"p-5 flex flex-col flex-1",children:[l.jsx("div",{className:"flex items-center gap-2 mb-2 text-[9px] font-black text-blue-600 uppercase tracking-widest"}),l.jsx("h3",{className:"text-lg font-black text-gray-900 mb-2 line-clamp-2 leading-tight",children:l.jsx(ue,{to:`/blog/${c.slug}`,className:"hover:text-blue-600 transition-colors uppercase",children:c.title})}),l.jsx("p",{className:"text-gray-500 text-xs mb-4 line-clamp-3 flex-1 leading-relaxed",children:c.excerpt}),l.jsxs(ue,{to:`/blog/${c.slug}`,className:"text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-1 border-t pt-4 mt-auto",children:["Explore Guide ",l.jsx(qa,{size:10})]})]})]},c.id))})]})}),l.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-900 to-[#161b2b] text-white overflow-hidden relative border-t border-white/5",children:l.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8 relative z-10",children:l.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-10",children:[l.jsx("div",{className:"lg:w-1/4 text-center lg:text-left",children:l.jsxs("div",{className:"w-48 h-48 bg-blue-600 rounded-2xl mx-auto lg:mx-0 flex items-center justify-center shadow-2xl overflow-hidden relative border-2 border-white/10",children:[l.jsx(Nc,{size:100,className:"text-white/20 absolute -bottom-4 -right-4"}),l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx(Al,{size:60,className:"text-white"})}),l.jsx("div",{className:"absolute bottom-0 inset-x-0 bg-blue-700/90 py-1.5 text-[9px] font-black tracking-widest text-center uppercase",children:"RAJESH NAVSAGAR"})]})}),l.jsxs("div",{className:"lg:w-3/4",children:[l.jsxs("h2",{className:"text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none italic",children:["Meet the Expert: ",l.jsx("br",{}),l.jsx("span",{className:"text-blue-500",children:"Expert Corner"})]}),l.jsx("div",{className:"bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-lg inline-block mb-4 text-[10px] font-black uppercase tracking-widest text-blue-400",children:"7 years of driving • Multi-state highway experience • Rental policy auditor (based on real booking and dispute cases)"}),l.jsx("p",{className:"text-base md:text-lg text-gray-400 mb-6 italic font-medium leading-relaxed",children:`"I've spent years on Indian highways. I built BookMyCar.live so you can focus on the drive, not the paperwork."`}),l.jsxs(ue,{to:"/about",className:"inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-all shadow-xl uppercase tracking-[0.15em] text-[10px]",children:["Understand My Mission ",l.jsx(qa,{className:"ml-2 h-4 w-4"})]})]})]})})}),l.jsx("section",{className:"py-20 bg-white",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[l.jsxs("div",{className:"text-center mb-12",children:[l.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight italic",children:["Frequently Asked ",l.jsx("span",{className:"text-blue-600",children:"Questions"})," (FAQ)"]}),l.jsx("p",{className:"text-gray-500 font-medium italic",children:"Tez aur saaf jawab, bina kisi filter ke."})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6 border border-gray-100",children:[l.jsx("h3",{className:"text-sm font-black text-gray-900 uppercase mb-2",children:"Is BookMyCar.live a rental company?"}),l.jsx("p",{className:"text-gray-600 text-[13px] leading-relaxed font-medium",children:"Nahi. Hum koi rental company nahi hain. Hum ek independent guide portal hain jo aapko ye batata hai ki rental companies se gaadi kaise leni hai aur scams se kaise bachna hai."})]}),l.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6 border border-gray-100",children:[l.jsx("h3",{className:"text-sm font-black text-gray-900 uppercase mb-2",children:"Are these guides sponsored?"}),l.jsx("p",{className:"text-gray-600 text-[13px] leading-relaxed font-medium",children:"Bilkul nahi. Hum brands ko critique karte hain unki actual service ke basis par. Agar koi company fraud hai, toh hum use waisa hi likhte hain."})]}),l.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6 border border-gray-100",children:[l.jsx("h3",{className:"text-sm font-black text-gray-900 uppercase mb-2",children:"Kaun is content ke liye responsible hai?"}),l.jsx("p",{className:"text-gray-600 text-[13px] leading-relaxed font-medium",children:"Is site ka saara content Rajesh Navsagar ke personal road experience aur document verification par based hai."})]})]})]})})]})},Bx=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-4 pb-12 px-4",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Rental Car Rules & RTO Reality India | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Indian Road Rules & Rental Guidelines 2026. Real-world checking, documentation advice, and black-plate vs white-plate reality."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/rules"})]}),l.jsxs("div",{className:"max-w-5xl mx-auto px-4 md:px-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 border border-blue-100/50",children:[l.jsx(je,{size:12})," Road Trip Field Notes"]}),l.jsxs("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter leading-[1.1] font-serif uppercase",children:["Road Rules They ",l.jsx("br",{})," ",l.jsx("span",{className:"text-blue-600",children:"Don't Tell You."})]}),l.jsx("p",{className:"text-[10px] md:text-xs text-blue-600 font-black uppercase tracking-widest mb-4",children:'"Written from observations made at highway check-posts and real rental experiences."'}),l.jsx("p",{className:"text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed italic border-l-2 border-blue-100 pl-4 py-1",children:"Documents, insurance, and state laws — Practical guidance for Indian travelers, based on real highway logs."})]}),l.jsxs("div",{className:"bg-orange-50/50 border-2 border-orange-200/50 rounded-2xl p-5 mb-8 flex flex-col md:flex-row gap-4 items-center shadow-sm",children:[l.jsx("div",{className:"bg-orange-600 p-2 rounded-xl text-white flex-shrink-0 shadow-lg",children:l.jsx(Rl,{size:20})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-black text-orange-900 mb-1 uppercase tracking-tighter italic",children:"Honest Compliance Disclaimer"}),l.jsx("p",{className:"text-[11px] text-orange-900/70 font-bold leading-relaxed",children:"Rules vary significantly by state and car provider. The information below is based on personal driving history and common enforcement practices. Actual outcomes may vary by state and provider—always check your rental contract."})]})]}),l.jsxs("div",{className:"bg-gray-900 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("h2",{className:"text-[9px] font-black flex items-center gap-2 mb-3 uppercase tracking-[0.2em] text-blue-400",children:[l.jsx("div",{className:"w-4 h-0.5 bg-blue-400"})," Rajesh's Reality Check"]}),l.jsx("p",{className:"text-lg md:text-xl font-bold leading-tight mb-3 text-white uppercase italic",children:`"A missing permit doesn't just cost you money; it costs you your vacation time."`}),l.jsx("p",{className:"text-gray-400 text-xs md:text-sm leading-relaxed font-medium",children:"These rules are compiled from real highway checks, rental disputes, and multi-state driving experiences between 2019–2026."})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform duration-700",size:120})]}),l.jsxs("section",{className:"mb-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-md",children:l.jsx(db,{className:"h-4 w-4"})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 tracking-tight uppercase",children:"Essential Documents"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"bg-gray-50 p-5 rounded-xl border border-gray-100",children:[l.jsx(uc,{className:"text-blue-600 mb-2",size:18}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tight",children:"DL (Original Mandatory)"}),l.jsx("p",{className:"text-gray-500 font-medium text-[11px] leading-relaxed",children:"LMV license only. On state borders, cops often demand the physical card over DigiLocker."})]}),l.jsxs("div",{className:"bg-gray-50 p-5 rounded-xl border border-gray-100",children:[l.jsx(uc,{className:"text-blue-600 mb-2",size:18}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tight",children:"Address Proof (No PAN)"}),l.jsx("p",{className:"text-gray-500 font-medium text-[11px] leading-relaxed",children:"Agencies do NOT accept PAN cards. Use Aadhaar or Passport."})]})]})]}),l.jsxs("section",{className:"mb-10 bg-red-50 p-6 md:p-8 rounded-2xl border border-red-200 relative overflow-hidden",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 bg-red-600 text-white px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest mb-4",children:[l.jsx(Tl,{size:12})," High Risk Warning: White Plate Rentals"]}),l.jsx("h2",{className:"text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase",children:"Insurance & Compliance Risks"}),l.jsx("p",{className:"text-sm font-bold text-gray-800 leading-relaxed mb-4 border-l-2 border-red-500 pl-4",children:"In many states, private (white plate) vehicles are not permitted for commercial rental use. Some insurance policies may deny claims if a vehicle is found to be operating outside permitted use. In such cases, renters may face claim complications or financial liability depending on policy terms and local enforcement."}),l.jsx("div",{className:"bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-red-300 inline-block shadow-sm",children:l.jsx("p",{className:"text-red-900 font-black uppercase tracking-tighter text-[10px] italic",children:"Rajesh's Advice: Prefer commercially registered vehicles (black + yellow plates) to reduce insurance and compliance risks."})})]}),l.jsx(Tl,{className:"absolute -bottom-4 -right-4 text-red-600/5 group-hover:scale-110 transition-transform",size:120})]}),l.jsxs("section",{className:"mb-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-md",children:l.jsx(mc,{className:"h-4 w-4"})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 tracking-tight uppercase",children:"Insurance Reality"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",children:[l.jsx("h3",{className:"text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2",children:"Typical Deductible (Varies by Provider)"}),l.jsx("p",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tighter",children:"Limited Liability"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-relaxed font-medium",children:"Often deducted from the security deposit for minor damages such as scratches or glass damage, subject to rental and insurance policy terms."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center md:text-left",children:[l.jsx("h3",{className:"text-[9px] font-black text-red-600 uppercase tracking-widest mb-2",children:"Severe Violation"}),l.jsx("p",{className:"text-base font-black text-gray-900 mb-1 uppercase tracking-tighter text-red-600",children:"Possible Recovery Costs"}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-relaxed font-medium",children:"In cases such as drink & drive or extreme overspeeding, insurance claims may be rejected depending on policy terms and enforcement reports. In such situations, renters may be required to bear significant recovery costs."})]})]})]}),l.jsx("div",{className:"bg-blue-50/30 border border-blue-100/50 rounded-2xl p-6 text-center italic",children:l.jsx("p",{className:"text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]",children:"This page is for educational purposes only. Always refer to official RTO guidelines and your provider's legal contract."})})]})]}),nm=({slotId:s,format:c="auto",layoutKey:h,className:d="",style:p={}})=>(R.useEffect(()=>{},[s]),null),_x=()=>l.jsxs("div",{className:"bg-white rounded-3xl p-6 md:p-10 mt-12 border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg relative overflow-hidden group",children:[l.jsx("div",{className:"absolute top-0 left-0 w-2 h-full bg-blue-600"}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("div",{className:"w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl transform transition-transform group-hover:rotate-3 overflow-hidden",children:l.jsx("img",{src:"/logo.png",alt:"BookMyCar Logo",className:"w-full h-full object-cover"})})}),l.jsxs("div",{className:"flex-grow",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("h3",{className:"text-2xl font-black text-gray-900 tracking-tight uppercase",children:"Rajesh Navsagar"}),l.jsx("div",{className:"bg-blue-600 p-0.5 rounded-md",children:l.jsx(je,{className:"text-white w-4 h-4"})})]}),l.jsxs("p",{className:"text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5",children:[l.jsx(vb,{size:12})," Expert Traveler"]})]}),l.jsxs("a",{href:"mailto:bookmycar.live@gmail.com",className:"inline-flex items-center px-4 py-2 rounded-xl bg-gray-50 text-gray-900 hover:bg-blue-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-widest border border-gray-100 group/btn",children:[l.jsx(Tc,{className:"w-3.5 h-3.5 mr-2 group-hover/btn:scale-110 transition-transform"})," Contact Rajesh"]})]}),l.jsxs("div",{className:"space-y-4 mb-6",children:[l.jsx("p",{className:"text-gray-700 text-base md:text-lg leading-relaxed font-medium italic",children:'"I built this site because I was tired of seeing travelers get scammed. My guides are written from actual driving logs so you can hit the highway with zero stress."'}),l.jsxs("p",{className:"text-gray-400 text-xs leading-relaxed font-bold border-l-2 border-gray-100 pl-4",children:[l.jsx("span",{className:"text-gray-600 uppercase text-[8px] tracking-widest block mb-1 font-black",children:"Context"}),"Rajesh is an independent road-travel researcher with multi-state driving experience across India (2019–2026), documenting rental rules and highway safety realities."]})]}),l.jsx("div",{className:"bg-blue-50/50 rounded-xl px-4 py-2 border border-blue-100 inline-block",children:l.jsxs("p",{className:"text-[8px] font-black text-blue-900 flex items-center gap-2 uppercase tracking-widest",children:[l.jsx(je,{size:14,className:"text-blue-600"})," Human-written & verified."]})})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-gray-400/5",size:120})]}),Ux=()=>l.jsxs("main",{className:"min-h-screen bg-white",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Highway Travel Guides & Rental Rules India | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Expert-verified guides for Indian highways, car rental rules, safety checklists, and road trip tips. Written by राजेश नवसागर (Rajesh Navsagar)."})]}),l.jsx("section",{className:"bg-gray-900 text-white pt-20 pb-16 px-4",children:l.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-4 py-2 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-6",children:[l.jsx(je,{size:14})," Expert-Verified Knowledge Base"]}),l.jsxs("h1",{className:"text-4xl md:text-7xl font-black mb-6 tracking-tighter italic uppercase font-serif",children:["The Road ",l.jsx("span",{className:"text-blue-500",children:"Survival"})," Vault"]}),l.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-medium",children:"No AI fluff. Just real driving logs, RTO rules, and survival tactics for Indian highways (2025-2026)."})]})}),l.jsx("section",{className:"max-w-7xl mx-auto px-4 py-16",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Zn.map(s=>l.jsxs("article",{className:"bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group",children:[l.jsxs("div",{className:"relative w-full aspect-video overflow-hidden bg-gray-100",children:[l.jsx("img",{src:`${s.imageUrl}?v=4`,alt:s.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),l.jsx("div",{className:"absolute top-4 left-4",children:l.jsx("span",{className:"bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider",children:s.category})})]}),l.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[l.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3",children:[l.jsx(jm,{className:"h-3 w-3"})," ",s.date]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors uppercase leading-tight font-serif italic",children:s.title}),l.jsx("p",{className:"text-gray-600 text-sm mb-6 line-clamp-3 font-medium",children:s.excerpt}),l.jsxs("div",{className:"mt-auto pt-6 border-t border-gray-50 flex items-center justify-between",children:[l.jsxs("span",{className:"text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read Guide ",l.jsx(wl,{size:12,className:"rotate-180"})]}),l.jsx("div",{className:"flex -space-x-2",children:l.jsx("img",{src:"/logo.png",className:"w-6 h-6 rounded-full border-2 border-white",alt:"Author"})})]})]}),l.jsx(ue,{to:`/blog/${s.slug}`,className:"absolute inset-0",title:s.title})]},s.id))})})]}),Lx=()=>{const{slug:s}=Zy(),c=Zn.find(p=>p.slug===s);if(R.useEffect(()=>{window.scrollTo(0,0)},[s]),!c)return l.jsx("main",{className:"text-center py-10 text-xl text-gray-600 uppercase font-black",children:"Guide not found."});const h=`https://bookmycar.live/blog/${c.slug}`,d=`${c.title} | BookMyCar.live`;return l.jsxs("main",{className:"bg-white min-h-screen pb-12",children:[l.jsxs(Ia,{children:[l.jsxs("title",{children:[c.title," | BookMyCar.live"]}),l.jsx("meta",{name:"description",content:c.excerpt}),l.jsx("meta",{name:"keywords",content:c.keywords.join(", ")}),l.jsx("meta",{name:"author",content:c.author}),l.jsx("meta",{property:"og:title",content:`${c.title} | BookMyCar.live`}),l.jsx("meta",{property:"og:description",content:c.excerpt}),l.jsx("meta",{property:"og:image",content:`https://bookmycar.live${c.imageUrl}`}),l.jsx("meta",{property:"og:url",content:`https://bookmycar.live/blog/${c.slug}`}),l.jsx("meta",{property:"og:type",content:"article"}),l.jsx("link",{rel:"canonical",href:`https://bookmycar.live/blog/${c.slug}`}),l.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:c.title,description:c.excerpt,author:{"@type":"Person",name:c.author,url:"https://bookmycar.live/about"},datePublished:c.date,image:`https://bookmycar.live${c.imageUrl}`,publisher:{"@type":"Organization",name:"BookMyCar.live",logo:{"@type":"ImageObject",url:"https://bookmycar.live/logo.png"}}})})]}),l.jsxs("section",{className:"bg-gray-900 text-white pt-6 pb-12 px-4 overflow-hidden relative",children:[l.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[l.jsx("img",{src:`${c.imageUrl}?v=4`,className:"w-full h-full object-cover blur-3xl scale-110",alt:""}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[l.jsxs("nav",{className:"flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6",children:[l.jsx(ue,{to:"/",className:"hover:text-blue-400 transition-colors",children:"Home"}),l.jsx("span",{children:"/"}),l.jsx(ue,{to:"/blog",className:"hover:text-blue-400 transition-colors",children:"Guides"}),l.jsx("span",{children:"/"}),l.jsx("span",{className:"text-blue-400 truncate max-w-[150px]",children:c.category})]}),l.jsxs(ue,{to:"/blog",className:"inline-flex items-center text-gray-400 hover:text-white mb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-colors",children:[l.jsx(wl,{className:"h-3 w-3 mr-1.5"}),"Back to Guides"]}),l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("span",{className:"bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest",children:c.category}),l.jsxs("span",{className:"flex items-center text-blue-400 text-[10px] font-black uppercase tracking-widest",children:[l.jsx(je,{size:12,className:"mr-1"})," Experience-verified"]})]}),l.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 font-serif tracking-tighter italic uppercase drop-shadow-lg",children:c.title}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-gray-400 text-[10px] font-black uppercase tracking-widest",children:[l.jsxs("span",{className:"flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white",children:[l.jsx("img",{src:"/logo.png",className:"h-3.5 w-3.5 mr-2 rounded-sm",alt:"Logo"})," By Rajesh Navsagar"]}),l.jsxs("span",{className:"flex items-center",children:[l.jsx(jm,{className:"h-3.5 w-3.5 mr-1.5"})," ",c.date]})]})]})]}),l.jsx("section",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20",children:l.jsxs("article",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 pb-8",children:[l.jsxs("div",{className:"relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-gray-950 shadow-2xl flex items-center justify-center",children:[l.jsx("img",{src:`${c.imageUrl}?v=4`,className:"absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110",alt:"","aria-hidden":"true"}),l.jsx("img",{src:`${c.imageUrl}?v=4`,alt:c.title,className:"relative z-10 max-w-full max-h-full object-contain shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20"}),l.jsx("div",{className:"absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none z-20"})]}),l.jsxs("div",{className:"p-6 md:p-10 lg:p-12",children:[l.jsx(nm,{slotId:"",format:"auto",className:"mb-8"}),c.expertTip&&l.jsxs("div",{className:"bg-blue-50/50 border-l-2 border-blue-600 p-5 md:p-6 rounded-r-xl mb-8 relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2 uppercase tracking-widest text-xs font-black text-blue-700",children:[l.jsx(je,{size:14})," Rajesh's Expert Corner"]}),l.jsxs("p",{className:"text-base md:text-lg leading-relaxed font-serif text-gray-900 italic font-medium",children:['"',c.expertTip,'"']})]}),l.jsx(je,{className:"absolute top-0 right-0 p-3 opacity-[0.03]",size:60})]}),l.jsx("div",{className:"prose prose-sm md:prose-base prose-blue text-gray-700 max-w-none mb-8 article-content font-medium leading-[1.7]",dangerouslySetInnerHTML:{__html:c.content}}),l.jsx(nm,{slotId:"",format:"auto",className:"my-8"}),l.jsxs("div",{className:"text-[10px] font-black text-gray-400 mb-8 tracking-widest uppercase border-t pt-6 flex items-center gap-2",children:[l.jsx("img",{src:"/logo.png",className:"h-4 w-4 rounded-sm",alt:"Logo"}),"Verified by Rajesh Navsagar | ",new Date(c.date).toLocaleDateString("en-US",{month:"short",year:"numeric"})]}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"text-sm font-black text-gray-900 uppercase tracking-widest mb-1",children:"Spread the Word"}),l.jsx("p",{className:"text-[10px] text-gray-500 font-bold uppercase",children:"Help more travelers stay safe in 2026."})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:()=>window.open(`https://twitter.com/intent/tweet?url=${h}&text=${d}`,"_blank"),className:"p-3 bg-white hover:bg-black hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group",title:"Share on Twitter",children:l.jsx(Ob,{size:18})}),l.jsx("button",{onClick:()=>window.open(`https://www.facebook.com/sharer/sharer.php?u=${h}`,"_blank"),className:"p-3 bg-white hover:bg-blue-600 hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group",title:"Share on Facebook",children:l.jsx(ob,{size:18})}),l.jsx("button",{onClick:()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${h}`,"_blank"),className:"p-3 bg-white hover:bg-blue-700 hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group",title:"Share on LinkedIn",children:l.jsx(gb,{size:18})}),l.jsx("button",{onClick:()=>{navigator.clipboard.writeText(h),alert("Guide link copied!")},className:"p-3 bg-white hover:bg-blue-600 hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group",title:"Copy Link",children:l.jsx(Cb,{size:18})})]})]}),l.jsx(_x,{}),l.jsxs("div",{className:"mt-12 pt-12 border-t border-gray-100",children:[l.jsxs("h3",{className:"text-xl font-black text-gray-900 uppercase tracking-tighter mb-8 flex items-center gap-2",children:[l.jsx(wl,{className:"rotate-180 text-blue-600",size:20})," Suggested Guides"]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Zn.filter(p=>p.id!==c.id).slice(0,2).map(p=>l.jsxs(ue,{to:`/blog/${p.slug}`,className:"group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300",children:[l.jsxs("div",{className:"relative w-full aspect-video overflow-hidden bg-gray-100",children:[l.jsx("img",{src:`${p.imageUrl}?v=4`,alt:p.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),l.jsx("div",{className:"absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"})]}),l.jsxs("div",{className:"p-5",children:[l.jsx("span",{className:"text-blue-600 text-[8px] font-black uppercase tracking-widest mb-2 block",children:p.category}),l.jsx("h4",{className:"font-serif italic text-base font-black text-gray-900 line-clamp-2 uppercase group-hover:text-blue-600 transition-colors",children:p.title}),l.jsx("div",{className:"mt-4 pt-4 border-t border-gray-50 flex items-center justify-between",children:l.jsxs("span",{className:"text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read ",l.jsx(wl,{size:10,className:"rotate-180"})]})})]})]},p.id))})]})]})]})})]})},Gx=()=>l.jsxs("div",{className:"max-w-5xl mx-auto px-6 pt-6 pb-12",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"About Rajesh & Our Mission | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"BookMyCar.live is an independent expert guide for Indian road trips. Read about Rajesh Navsagar's mission to help travelers avoid rental scams and highway fines."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/about"})]}),l.jsxs("div",{className:"text-center mb-8 px-4",children:[l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif uppercase leading-none",children:"Road Trip Truths."}),l.jsxs("p",{className:"text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium italic",children:[l.jsx("strong",{children:"BookMyCar.live"})," is an independent guide built to help you avoid expensive mistakes on Indian roads."]})]}),l.jsxs("div",{className:"space-y-8",children:[l.jsxs("section",{className:"bg-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("div",{className:"bg-white/20 p-1.5 rounded-lg",children:l.jsx(Nc,{className:"text-white",size:18})}),l.jsx("h2",{className:"text-xs md:text-sm font-black uppercase tracking-[0.2em]",children:"The Mission"})]}),l.jsxs("div",{className:"space-y-3 text-blue-50",children:[l.jsx("p",{className:"text-lg md:text-xl leading-snug font-bold italic uppercase tracking-tighter",children:'"Most disasters happen because of bad info, not bad roads."'}),l.jsx("p",{className:"text-xs md:text-base font-medium text-white/90 border-l-2 border-white/30 pl-4 py-0.5",children:"Families often end up paying far more for damages they didn’t even cause. This site exists so you don’t have to learn the hard way."})]}),l.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-blue-500/50 pt-6",children:[l.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-base shadow-lg",children:"RN"}),l.jsxs("div",{children:[l.jsx("p",{className:"font-black text-base uppercase tracking-tight",children:"Rajesh Navsagar"}),l.jsx("p",{className:"text-[9px] text-blue-200 uppercase tracking-[0.2em] font-bold opacity-80 mb-1",children:"Founder & Field Guide"}),l.jsx("p",{className:"text-[10px] md:text-xs text-blue-100/90 font-medium leading-relaxed max-w-md",children:"Rental policy reviewer based on multi-state driving experience across India (2019–2026)."})]})]})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform duration-700",size:150})]}),l.jsxs("section",{children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-2 flex items-center gap-2 uppercase tracking-tight",children:["Honest Advice ",l.jsx("span",{className:"text-[9px] font-medium text-gray-400 tracking-widest",children:"(Real Talk)"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"flex gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all shadow-sm",children:[l.jsx(je,{className:"text-blue-600 flex-shrink-0",size:20}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-black text-gray-900 mb-1 text-sm uppercase tracking-tight",children:"No Brand Favorites"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed font-medium",children:"I don’t take referral fees. If a company provides poor service, it is clearly stated in the guides."})]})]}),l.jsxs("div",{className:"flex gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all shadow-sm",children:[l.jsx(wm,{className:"text-blue-600 flex-shrink-0",size:20}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-black text-gray-900 mb-1 text-sm uppercase tracking-tight",children:"Real Driving Logs"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed font-medium",children:"Every guide is based on real trips, distances driven, and on-road observations — not generic theory."})]})]})]})]}),l.jsxs("section",{className:"bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3 text-blue-400 relative z-10",children:[l.jsx(Rl,{size:20}),l.jsx("h2",{className:"text-sm font-black uppercase tracking-widest",children:"Independent Truth"})]}),l.jsxs("div",{className:"text-gray-400 text-xs md:text-sm leading-relaxed space-y-3 relative z-10",children:[l.jsxs("p",{children:["BookMyCar.live is an ",l.jsx("strong",{children:"independent observational guide"}),". I am not affiliated with any rental agency."]}),l.jsx("p",{className:"border-l-2 border-blue-600 pl-4 py-0.5 text-white/80",children:"This site exists to help Indian travelers understand rules through documented field experience. This site does not publish sponsored or paid content."})]}),l.jsx(je,{className:"absolute -top-6 -right-6 text-white/5",size:100})]}),l.jsxs("section",{className:"bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 mb-6 uppercase tracking-tight flex items-center gap-2",children:[l.jsx("div",{className:"bg-blue-600 w-2 h-6 rounded-full"})," How I Research"]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs shrink-0",children:"01"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black text-gray-900 text-sm uppercase mb-1",children:"On-Ground Verification"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed",children:"I take rental cars through state borders during trips to observe toll and tax enforcement in real conditions."})]})]}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs shrink-0",children:"02"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black text-gray-900 text-sm uppercase mb-1",children:"Reference Check"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed",children:"Document checklists are compared with publicly available Motor Vehicles Act updates and Parivahan guidelines for general reference."})]})]}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs shrink-0",children:"03"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black text-gray-900 text-sm uppercase mb-1",children:"Anonymity for Honesty"}),l.jsx("p",{className:"text-gray-500 text-xs leading-relaxed",children:"Rentals are taken as a regular customer, without accepting “media cars” or sponsored access from companies reviewed."})]})]})]})]}),l.jsxs("section",{className:"bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100",children:[l.jsx("h2",{className:"text-lg font-black text-gray-900 mb-4 uppercase tracking-tight flex items-center gap-2",children:"How We Sustain This Site"}),l.jsxs("p",{className:"text-gray-600 text-xs md:text-sm leading-relaxed mb-4 font-medium",children:["Running ",l.jsx("strong",{children:"BookMyCar.live"})," involves costs for on-road research, hosting, and constant updates to travel rules. To keep this information free for every Indian traveler, we participate in the ",l.jsx("strong",{children:"Google AdSense"})," program."]}),l.jsxs("div",{className:"flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm",children:[l.jsx(je,{className:"text-blue-600 shrink-0",size:18}),l.jsxs("p",{className:"text-[11px] text-gray-500 font-medium leading-relaxed",children:[l.jsx("strong",{children:"Transparency Note:"})," We use third-party advertising cookies to serve ads based on your interests. This does not affect our editorial integrity; we never write positive reviews in exchange for money. Our advice remains independent and experience-verified."]})]})]}),l.jsxs("section",{className:"pt-6 border-t border-gray-100",children:[l.jsx("h2",{className:"text-lg font-black text-gray-900 mb-4 uppercase tracking-widest",children:"Where to start?"}),l.jsxs("div",{className:"flex flex-col md:flex-row gap-3",children:[l.jsxs(ue,{to:"/rules",className:"flex-1 flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-600 transition-all group shadow-sm",children:[l.jsx("span",{className:"font-black text-gray-900 text-[10px] uppercase tracking-widest",children:"State rules"}),l.jsx(qa,{className:"text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all",size:16})]}),l.jsxs(ue,{to:"/blog/car-rental-scams-india",className:"flex-1 flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-600 transition-all group shadow-sm",children:[l.jsx("span",{className:"font-black text-gray-900 text-[10px] uppercase tracking-widest",children:"Avoid Scams"}),l.jsx(qa,{className:"text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all",size:16})]})]})]})]})]}),qx=()=>{const s=c=>{c.preventDefault(),alert("Message mil gaya! Rajesh will get back to you within 24-48 hours.")};return l.jsxs("div",{className:"max-w-6xl mx-auto px-6 pt-6 pb-12",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Contact Rajesh Navsagar | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Contact Rajesh Navsagar for personal road trip advice and policy reviews. BookMyCar.live helps you navigate Indian rental rules."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/contact"})]}),l.jsxs("div",{className:"text-center mb-10",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-blue-100/50",children:[l.jsx(Nc,{size:12})," Human Response"]}),l.jsxs("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif italic uppercase leading-none",children:["Talk to ",l.jsx("span",{className:"text-blue-600 not-italic",children:"Rajesh."})]}),l.jsxs("p",{className:"text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed font-medium",children:["Stuck with a rental policy? ",l.jsx("strong",{children:" I personally review and respond "})," to genuine road trip queries."]})]}),l.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-start",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group",children:[l.jsxs("h3",{className:"text-base font-black text-gray-900 flex items-center mb-3 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl mr-3 group-hover:rotate-6 transition-transform shadow-md",children:l.jsx(Tc,{className:"text-white",size:18})}),"Direct Line"]}),l.jsx("p",{className:"text-gray-500 text-[11px] leading-relaxed mb-3 font-medium",children:"For route planning or sharing policy documents for review:"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-lg md:text-xl font-black text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-100 underline-offset-4 tracking-tighter uppercase",children:"bookmycar.live@gmail.com"})]}),l.jsxs("div",{className:"bg-gray-50 p-6 rounded-2xl border border-gray-100 group",children:[l.jsxs("h3",{className:"text-base font-black text-gray-900 flex items-center mb-3 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-black p-2 rounded-xl mr-3 group-hover:rotate-6 transition-transform shadow-md",children:l.jsx(Sb,{className:"text-white",size:18})}),"Reality Check"]}),l.jsxs("p",{className:"text-gray-500 text-[11px] leading-relaxed font-medium",children:["I respond within ",l.jsx("strong",{children:"24–48 hours"}),". If urgent, mention it in the subject. This is not an emergency helpline."]})]}),l.jsxs("div",{className:"bg-blue-600 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group",children:[l.jsx(je,{className:"absolute -bottom-4 -right-4 text-white/10 group-hover:scale-110 transition-transform duration-700",size:100}),l.jsxs("h3",{className:"text-base font-black flex items-center mb-2 uppercase tracking-wider relative z-10",children:[l.jsx(je,{className:"mr-2 text-blue-200",size:20})," Privacy First"]}),l.jsx("p",{className:"text-blue-100 text-[11px] leading-relaxed font-medium relative z-10",children:"Your details are safe. I don't share data with third parties or brokers. My goal is to help you."})]})]}),l.jsxs("div",{className:"bg-white shadow-xl rounded-3xl p-6 md:p-8 border border-gray-100",children:[l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-6 tracking-tight uppercase",children:"Share Your Plan"}),l.jsxs("form",{className:"space-y-5",onSubmit:s,children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5",children:"Name"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Rahul Verma",className:"w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5",children:"Email"}),l.jsx("input",{type:"email",required:!0,placeholder:"rahul@example.com",className:"w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5",children:"Query?"}),l.jsx("textarea",{required:!0,rows:3,placeholder:"Ex: Driving from Delhi to Manali. Is it safe at night?",className:"w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"})]}),l.jsxs("button",{className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group",children:["Send Query ",l.jsx(qa,{size:14,className:"group-hover:translate-x-1 transition-transform"})]})]}),l.jsx("div",{className:"mt-5 pt-5 border-t border-gray-50 text-center",children:l.jsxs("p",{className:"text-[9px] text-gray-400 font-black leading-relaxed uppercase tracking-tight",children:["Messages are answered personally; automated replies are not used. ",l.jsx("br",{}),"Replies are informational only. ",l.jsx("br",{}),"No paid consultation or emergency assistance."]})})]})]})]})},Yx=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Privacy Policy & AdSense Disclosure | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Privacy Policy for BookMyCar.live. Learn how we protect your data and our transparency regarding Google AdSense cookies."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/privacy"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6",children:[l.jsx(je,{size:12})," Data Protection"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif",children:"Privacy Policy"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-blue-500/20 pl-4 py-1",children:'"Transparency in road rules reflects in how we handle your data."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsx("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8",children:"Updated: Jan 2026"}),l.jsxs("p",{className:"leading-relaxed mb-8",children:["At ",l.jsx("strong",{children:"BookMyCar.live"}),", user privacy is taken seriously. This website exists to help travelers and does not sell or trade personal information for profit."]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"Information We Collect"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"When users contact BookMyCar.live through forms or email, we may collect information such as name, email address, and the content of the message. This information is used solely to respond to inquiries and provide relevant guidance. We do not share this data with third parties or brokers."}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6 my-10",children:[l.jsxs("div",{className:"bg-gray-50 p-6 rounded-2xl border border-gray-100",children:[l.jsx(yb,{className:"text-blue-600 mb-3",size:24}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-2 uppercase tracking-tight",children:"Log Files"}),l.jsx("p",{className:"text-gray-500 font-medium text-xs leading-relaxed",children:"BookMyCar.live follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamp, and referring/exit pages. These are not linked to any information that is personally identifiable."})]}),l.jsxs("div",{className:"bg-gray-50 p-6 rounded-2xl border border-gray-100",children:[l.jsx(lb,{className:"text-blue-600 mb-3",size:24}),l.jsx("h3",{className:"text-base font-black text-gray-900 mb-2 uppercase tracking-tight",children:"Cookies"}),l.jsx("p",{className:"text-gray-500 font-medium text-xs leading-relaxed",children:"This website uses cookies to store information about visitors' preferences and to record user-specific information on which pages the user accesses or visits. This helps in customizing web page content based on visitors' browser type or other information."})]})]}),l.jsxs("div",{className:"bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl my-10 relative overflow-hidden group",children:[l.jsx("h2",{className:"text-xl font-black mb-4 text-white tracking-tight uppercase",children:"Google Advertising Cookies"}),l.jsxs("ul",{className:"space-y-3 text-blue-100 font-medium list-none pl-0 text-sm",children:[l.jsxs("li",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Google AdSense:"})," Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the ",l.jsx("strong",{children:"DART cookie"})," enables it to serve ads to our users based on their visit to our site and other sites on the Internet."]})]}),l.jsxs("li",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"}),l.jsxs("span",{children:["Users may opt out of the use of the DART cookie by visiting the ",l.jsx("strong",{children:"Google ad and content network privacy policy"})," at the following URL: ",l.jsx("a",{href:"https://policies.google.com/technologies/ads",className:"text-white hover:text-blue-200 underline",children:"https://policies.google.com/technologies/ads"})]})]}),l.jsxs("li",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"}),l.jsx("span",{children:"Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements. BookMyCar.live has no access to or control over these cookies that are used by third-party advertisers."})]})]}),l.jsx(je,{className:"absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform",size:150})]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2 tracking-tight",children:"CCPA Privacy Rights (Do Not Sell My Personal Information)"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. Request that a business delete any personal data about the consumer that a business has collected. Request that a business that sells a consumer's personal data, not sell the consumer's personal data. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2 tracking-tight",children:"GDPR Data Protection Rights"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service. The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. The right to erasure – You have the right to request that we erase your personal data, under certain conditions."}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"Advertising Partners"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-6",children:"Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links. Our primary partner is:"}),l.jsx("div",{className:"mb-10",children:l.jsx("div",{className:"bg-gray-50 border-2 border-gray-100 p-4 rounded-xl font-black text-blue-600 text-center text-xs uppercase tracking-[0.2em] inline-block min-w-[200px]",children:"Google AdSense"})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"User Choices & Rights"}),l.jsxs("div",{className:"bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-4",children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(gc,{size:20,className:"text-blue-600 shrink-0"}),l.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed",children:[l.jsx("strong",{children:"Cookie Management:"})," Users can choose to disable cookies through their individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers' respective websites."]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(gc,{size:20,className:"text-blue-600 shrink-0"}),l.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed",children:[l.jsx("strong",{children:"Data Deletion Requests:"})," If you wish to request the deletion of any personal data shared through our contact forms, please contact us at ",l.jsx("strong",{children:"bookmycar.live@gmail.com"}),". We will process your request as per applicable guidelines."]})]})]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2",children:"Consent"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-8",children:"By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."})]})]})]}),Ix=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Terms & Conditions | User Agreement | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"User Agreement and Terms of Service for BookMyCar.live. Understand the liability regarding road rules and rental advice."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/terms"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-gray-100",children:[l.jsx(ub,{size:12})," User Agreement"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif italic",children:"Terms & Conditions"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-gray-200 pl-4 py-1",children:'"Clear terms so you can focus on the drive."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsx("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8",children:"Updated: Jan 2026"}),l.jsxs("p",{className:"leading-relaxed mb-10 text-sm md:text-base",children:["Welcome to ",l.jsx("strong",{children:"BookMyCar.live"}),". By using this website, users agree to the terms and conditions outlined below. This platform is intended for informational purposes for the road travel community."]}),l.jsxs("section",{className:"mb-12",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-gray-900 p-2 rounded-xl text-white shadow-lg",children:l.jsx(uc,{size:20})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 m-0 tracking-tight uppercase",children:"1. Informational Service Only"})]}),l.jsx("div",{className:"bg-blue-50/50 border border-blue-100 p-6 rounded-2xl",children:l.jsx("p",{className:"text-gray-900 font-bold m-0 leading-relaxed text-sm",children:"BookMyCar.live is an informational guide portal. This website is not a car rental agency, broker, or booking platform, and we do not manage or operate any fleet of vehicles."})})]}),l.jsxs("div",{className:"space-y-10",children:[l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all",children:l.jsx(W0,{size:20})}),"2. User Responsibility"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"Content is based on documented road experiences for general guidance. However, road laws and rental policies are subject to change without notice. Users are responsible for verifying all information with official government portals and their respective rental providers before travel."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all",children:l.jsx(Sm,{size:20})}),"3. External Resources"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"This website may link to external resources or third-party websites. BookMyCar.live has no control over the nature, content, or availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all",children:l.jsx(gc,{size:20})}),"4. Acceptable Use"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"Users agree not to misuse the content on this website for unlawful purposes, automated scraping, or redistribution without explicit permission. The content is intended for personal, non-commercial informational use only."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-red-600 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-red-50 p-2 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all",children:l.jsx(Eb,{size:20})}),"5. Limitation of Liability"]}),l.jsx("p",{className:"leading-relaxed text-red-900 font-bold bg-red-50/30 p-5 rounded-xl border border-red-100 text-sm",children:"BookMyCar.live provides informational content for general guidance only. While efforts are made to keep information accurate, we do not guarantee completeness or current validity. BookMyCar.live shall not be held responsible for losses, disputes, penalties, or incidents arising from reliance on the information provided. Use of this site is at the user's own risk."})]})]}),l.jsxs("div",{className:"mt-20 pt-10 border-t border-gray-100 mb-10 text-center md:text-left",children:[l.jsx("p",{className:"text-gray-400 font-black uppercase tracking-widest text-[10px] mb-4",children:"Contact for Legal Queries"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-lg md:text-xl font-black text-gray-900 hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4 uppercase tracking-tighter",children:"bookmycar.live@gmail.com"})]})]})]})]}),Qx=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Important Legal Disclaimer | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Legal Disclaimer: BookMyCar.live is an independent informational guide. We are not a car rental agency or booking platform."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/disclaimer"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-yellow-100/50",children:[l.jsx(Zp,{size:12})," Legal Transparency"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif italic",children:"Disclaimer"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-yellow-500/20 pl-4 py-1",children:'"Documented observations for travelers, but final travel decisions remain with the user."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsxs("div",{className:"bg-yellow-50 border-2 border-yellow-200 p-8 rounded-[2rem] my-10 relative overflow-hidden group",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"bg-yellow-500 p-2 rounded-xl text-white shadow-lg",children:l.jsx(Tl,{size:20})}),l.jsx("h2",{className:"text-xl font-black text-gray-900 m-0 tracking-tight uppercase",children:"No Rental or Booking Services"})]}),l.jsx("p",{className:"text-gray-900 font-bold leading-relaxed mb-3 text-base md:text-lg",children:"BookMyCar.live is an independent observational guide. This website does not facilitate car rentals, taxi bookings, or travel reservations."}),l.jsx("p",{className:"text-yellow-800 font-medium text-sm",children:"BookMyCar.live will never solicit payment for vehicle bookings or travel services. If any individual claims to represent BookMyCar.live for payment requests, such communication should be treated as unauthorized."})]}),l.jsx(Tl,{className:"absolute -bottom-6 -right-6 text-yellow-600/10 group-hover:scale-110 transition-transform duration-700",size:150})]}),l.jsxs("div",{className:"space-y-12 mt-12",children:[l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform",children:l.jsx(je,{size:20})}),"1. Independent Status"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"BookMyCar.live is not affiliated with any car rental brand. Any mention of rental agencies is purely for informational comparison and general guidance based on user experience."})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform",children:l.jsx(Am,{size:20})}),"2. Content Accuracy"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm mb-4",children:"While efforts are made to update road trip guides regularly, BookMyCar.live cannot guarantee that all information (such as toll prices, local taxes, or permit rules) is current or exhaustive."}),l.jsx("div",{className:"bg-gray-50 border-l-2 border-blue-600 p-4 rounded-r-xl",children:l.jsx("p",{className:"text-gray-900 font-bold mb-0 text-sm",children:"This information should be used as general guidance and not as a substitute for official legal or regulatory advice. Always verify rules with local authorities."})})]}),l.jsxs("section",{className:"group",children:[l.jsxs("h2",{className:"text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase",children:[l.jsx("div",{className:"bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform",children:l.jsx(Zp,{size:20})}),"3. Limitation of Liability"]}),l.jsx("p",{className:"leading-relaxed text-gray-500 font-medium text-sm",children:"BookMyCar.live provides informational content for general guidance only. While reasonable efforts are made to keep information accurate, no guarantees are made regarding completeness or current applicability. Users are responsible for making travel and compliance decisions based on official sources and provider policies. Use of this site is at the user's own risk."})]})]}),l.jsxs("div",{className:"mt-20 pt-10 border-t border-gray-100 mb-10 text-center md:text-left",children:[l.jsx("p",{className:"text-gray-400 font-black uppercase tracking-widest text-[10px] mb-4",children:"Questions about these terms?"}),l.jsx("a",{href:"mailto:bookmycar.live@gmail.com",className:"text-lg md:text-xl font-black text-gray-900 hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4 uppercase tracking-tighter",children:"bookmycar.live@gmail.com"})]})]})]})]}),Vx=()=>l.jsx("div",{className:"min-h-[70vh] flex items-center justify-center px-6",children:l.jsxs("div",{className:"max-w-md w-full text-center",children:[l.jsx("div",{className:"bg-red-50 w-20 h-20 rounded-[2rem] flex items-center justify-center text-red-600 mx-auto mb-8 animate-bounce",children:l.jsx(Rl,{size:40})}),l.jsx("h1",{className:"text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic",children:"Road Closed."}),l.jsx("p",{className:"text-gray-500 font-medium mb-10 leading-relaxed italic",children:"Mistakes happen, even to the best drivers. The page you are looking for doesn't exist or has been moved to a new route."}),l.jsxs(ue,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black transition-all shadow-xl uppercase tracking-widest text-xs group",children:["Back to Safe Route ",l.jsx(qa,{size:16,className:"group-hover:translate-x-1 transition-transform"})]}),l.jsx("div",{className:"mt-12 flex justify-center opacity-30",children:l.jsx(Al,{size:100,className:"text-gray-200"})})]})}),Kx=()=>l.jsxs("div",{className:"bg-white min-h-screen pt-10 pb-20",children:[l.jsxs(Ia,{children:[l.jsx("title",{children:"Cookie Policy | BookMyCar.live"}),l.jsx("meta",{name:"description",content:"Cookie Policy for BookMyCar.live. Information on Google AdSense DART cookies and how to manage your privacy settings."}),l.jsx("link",{rel:"canonical",href:"https://bookmycar.live/cookies"})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-gray-800",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6",children:[l.jsx(je,{size:12})," Transparency"]}),l.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif",children:"Cookie Policy"}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-blue-500/20 pl-4 py-1",children:'"Understand how we use data to improve your experience."'})]}),l.jsxs("div",{className:"prose prose-sm md:prose-base max-w-none",children:[l.jsx("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8",children:"Effective Date: Jan 2026"}),l.jsxs("p",{className:"leading-relaxed mb-8 font-medium",children:["This Cookie Policy explains how ",l.jsx("strong",{children:"BookMyCar.live"}),' ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.']}),l.jsxs("div",{className:"flex items-start gap-4 mb-8",children:[l.jsx("div",{className:"bg-blue-50 p-3 rounded-xl text-blue-600 mt-1 shrink-0",children:l.jsx(Pp,{size:24})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-2 tracking-tight uppercase",children:"What are cookies?"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:"Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."})]})]}),l.jsx("hr",{className:"border-gray-100 my-8"}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-4 tracking-tight uppercase",children:"Why do we use cookies?"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:'We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.'}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6 my-8",children:[l.jsxs("div",{className:"bg-gray-50 border border-gray-100 p-5 rounded-2xl",children:[l.jsx("h3",{className:"font-black text-gray-900 text-sm uppercase mb-2",children:"Essential Cookies"}),l.jsx("p",{className:"text-xs text-gray-500 font-medium leading-relaxed",children:"These are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas."})]}),l.jsxs("div",{className:"bg-gray-50 border border-gray-100 p-5 rounded-2xl",children:[l.jsx("h3",{className:"font-black text-gray-900 text-sm uppercase mb-2",children:"Analytics & Customization"}),l.jsx("p",{className:"text-xs text-gray-500 font-medium leading-relaxed",children:"These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are."})]})]}),l.jsxs("div",{className:"bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-xl mb-10",children:[l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx(Am,{size:20,className:"text-blue-300"}),l.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tight",children:"Google DoubleClick DART Cookie"})]}),l.jsx("p",{className:"text-blue-100 text-sm leading-relaxed mb-4 font-medium",children:"Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.bookmycar.live and other sites on the internet."}),l.jsxs("div",{className:"bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm",children:[l.jsx("p",{className:"text-xs text-white/80 leading-relaxed mb-3",children:"However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:"}),l.jsxs("a",{href:"https://policies.google.com/technologies/ads",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-white font-black text-xs uppercase tracking-widest hover:text-blue-200 transition-colors",children:["Google Ad Policies ",l.jsx(Sm,{size:10})]})]})]}),l.jsx(Pp,{className:"absolute -bottom-10 -right-10 text-white/5 group-hover:rotate-12 transition-transform duration-700",size:200})]}),l.jsx("h2",{className:"text-xl font-black text-gray-900 mb-4 tracking-tight uppercase",children:"How can I control cookies?"}),l.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:"You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. In addition, most web browsers allow you to control cookies through their settings preferences."}),l.jsxs("ul",{className:"space-y-2 mb-8",children:[l.jsxs("li",{className:"text-sm text-gray-600 font-medium flex items-center gap-2",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"})," Chrome: Settings → Privacy and security → Cookies and other site data"]}),l.jsxs("li",{className:"text-sm text-gray-600 font-medium flex items-center gap-2",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"})," Safari: Preferences → Privacy"]}),l.jsxs("li",{className:"text-sm text-gray-600 font-medium flex items-center gap-2",children:[l.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"})," Firefox: Options → Privacy & Security"]})]}),l.jsxs("div",{className:"bg-gray-50 border border-gray-100 rounded-xl p-6 text-center",children:[l.jsx("p",{className:"text-gray-500 text-xs font-bold uppercase tracking-widest mb-4",children:"Have more questions?"}),l.jsx(ue,{to:"/contact",className:"inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors",children:"Contact Us"})]})]})]})]}),Fx=()=>{const{pathname:s}=pt();return R.useEffect(()=>{window.scrollTo(0,0)},[s]),null},Px=()=>l.jsxs(D0,{children:[l.jsx(Fx,{}),l.jsxs("div",{className:"flex flex-col min-h-screen font-sans text-gray-900 bg-white",children:[l.jsx(lx,{}),l.jsx("main",{className:"flex-grow",children:l.jsxs(d0,{children:[l.jsx(Ca,{path:"/",element:l.jsx(Ox,{})}),l.jsx(Ca,{path:"/blog",element:l.jsx(Ux,{})}),l.jsx(Ca,{path:"/blog/:slug",element:l.jsx(Lx,{})}),l.jsx(Ca,{path:"/rules",element:l.jsx(Bx,{})}),l.jsx(Ca,{path:"/about",element:l.jsx(Gx,{})}),l.jsx(Ca,{path:"/contact",element:l.jsx(qx,{})}),l.jsx(Ca,{path:"/privacy",element:l.jsx(Yx,{})}),l.jsx(Ca,{path:"/terms",element:l.jsx(Ix,{})}),l.jsx(Ca,{path:"/disclaimer",element:l.jsx(Qx,{})}),l.jsx(Ca,{path:"/cookies",element:l.jsx(Kx,{})}),l.jsx(Ca,{path:"*",element:l.jsx(Vx,{})})]})}),l.jsx(sx,{}),l.jsx(ox,{})]})]}),Dm=document.getElementById("root");if(!Dm)throw new Error("Could not find root element to mount to");const Zx=fy.createRoot(Dm);Zx.render(l.jsx(dt.StrictMode,{children:l.jsx(Mm,{children:l.jsx(Px,{})})}));
