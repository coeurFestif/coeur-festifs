/*! For license information please see main.8d179e77.js.LICENSE.txt */
(()=>{var e={730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function g(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=m.hasOwnProperty(t)?m[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function D(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var I,F=Object.assign;function M(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var U=!1;function B(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function V(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case A:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case j:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function K(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function _(e){e._valueTracker||(e._valueTracker=function(e){var t=K(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function J(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=Q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,Q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Q(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Q(n)}}function ie(e,t){var n=Q(t.value),r=Q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function Ae(e){if(e=ya(e)){if("function"!==typeof Se)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function Ne(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Ae(e),t)for(e=0;e<t.length;e++)Ae(t[e])}}function Oe(e,t){return e(t)}function Pe(){}var Re=!1;function je(e,t,n){if(Re)return e(t,n);Re=!0;try{return Oe(e,t,n)}finally{Re=!1,(null!==ke||null!==Ee)&&(Pe(),Ne())}}function Te(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Le=!1;if(c)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Le=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ce){Le=!1}function De(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ie=!1,Fe=null,Me=!1,Ue=null,Be={onError:function(e){Ie=!0,Fe=e}};function Ve(e,t,n,r,a,i,o,l,s){Ie=!1,Fe=null,De.apply(Be,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Qe(e){if(He(e)!==e)throw Error(i(188))}function Ke(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Qe(a),e;if(o===r)return Qe(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?_e(e):null}function _e(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=_e(e);if(null!==t)return t;e=e.sibling}return null}var qe=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,Ge=a.unstable_shouldYield,Je=a.unstable_requestPaint,Xe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,$e=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,At,Ct=!1,Nt=[],Ot=null,Pt=null,Rt=null,jt=new Map,Tt=new Map,Lt=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":jt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(t.pointerId)}}function It(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ft(e){var t=ba(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void At(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ut(e,t,n){Mt(e)&&n.delete(t)}function Bt(){Ct=!1,null!==Ot&&Mt(Ot)&&(Ot=null),null!==Pt&&Mt(Pt)&&(Pt=null),null!==Rt&&Mt(Rt)&&(Rt=null),jt.forEach(Ut),Tt.forEach(Ut)}function Vt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bt)))}function Ht(e){function t(t){return Vt(t,e)}if(0<Nt.length){Vt(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&Vt(Ot,e),null!==Pt&&Vt(Pt,e),null!==Rt&&Vt(Rt,e),jt.forEach(t),Tt.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Lt.shift()}var Wt=x.ReactCurrentBatchConfig,Qt=!0;function Kt(e,t,n,r){var a=yt,i=Wt.transition;Wt.transition=null;try{yt=1,qt(e,t,n,r)}finally{yt=a,Wt.transition=i}}function _t(e,t,n,r){var a=yt,i=Wt.transition;Wt.transition=null;try{yt=4,qt(e,t,n,r)}finally{yt=a,Wt.transition=i}}function qt(e,t,n,r){if(Qt){var a=Gt(e,t,n,r);if(null===a)Qr(e,t,r,Yt,n),Dt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Ot=It(Ot,e,t,n,r,a),!0;case"dragenter":return Pt=It(Pt,e,t,n,r,a),!0;case"mouseover":return Rt=It(Rt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return jt.set(i,It(jt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Tt.set(i,It(Tt.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Dt(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==a;){var i=ya(a);if(null!==i&&wt(i),null===(i=Gt(e,t,n,r))&&Qr(e,t,r,Yt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Qr(e,t,r,null,n)}}var Yt=null;function Gt(e,t,n,r){if(Yt=null,null!==(e=ba(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Jt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case $e:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,$t=null;function en(){if($t)return $t;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return $t=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=F({},un,{view:0,detail:0}),fn=an(dn),pn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:An,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),gn=an(F({},pn,{dataTransfer:0})),mn=an(F({},dn,{relatedTarget:0})),vn=an(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(bn),xn=an(F({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function An(){return En}var Cn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:An,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nn=an(Cn),On=an(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:An})),Rn=an(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),jn=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tn=an(jn),Ln=[9,13,27,32],zn=c&&"CompositionEvent"in window,Dn=null;c&&"documentMode"in document&&(Dn=document.documentMode);var In=c&&"TextEvent"in window&&!Dn,Fn=c&&(!zn||Dn&&8<Dn&&11>=Dn),Mn=String.fromCharCode(32),Un=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Kn(e,t,n,r){Ce(r),0<(t=_r(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,qn=null;function Yn(e){Mr(e,0)}function Gn(e){if(q(xa(e)))return e}function Jn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var $n="oninput"in document;if(!$n){var er=document.createElement("div");er.setAttribute("oninput","return;"),$n="function"===typeof er.oninput}Zn=$n}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){_n&&(_n.detachEvent("onpropertychange",nr),qn=_n=null)}function nr(e){if("value"===e.propertyName&&Gn(qn)){var t=[];Kn(t,qn,e,we(e)),je(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(_n=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(qn)}function ir(e,t){if("click"===e)return Gn(t)}function or(e,t){if("input"===e||"change"===e)return Gn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=cr(n,i);var o=cr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=c&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,br=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==Y(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=_r(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function Ar(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=Ar("animationend"),Nr=Ar("animationiteration"),Or=Ar("animationstart"),Pr=Ar("transitionend"),Rr=new Map,jr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Rr.set(e,t),s(t,[e])}for(var Lr=0;Lr<jr.length;Lr++){var zr=jr[Lr];Tr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Tr(Cr,"onAnimationEnd"),Tr(Nr,"onAnimationIteration"),Tr(Or,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,u){if(Ve.apply(this,arguments),Ie){if(!Ie)throw Error(i(198));var c=Fe;Ie=!1,Fe=null,Me||(Me=!0,Ue=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Fr(a,l,u),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Fr(a,l,u),i=s}}}if(Me)throw e=Ue,Me=!1,Ue=null,e}function Ur(e,t){var n=t[ga];void 0===n&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Vr]){e[Vr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vr]||(t[Vr]=!0,Br("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Jt(t)){case 1:var a=Kt;break;case 4:a=_t;break;default:a=qt}n=a.bind(null,t,n,e),a=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Qr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=ba(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}je((function(){var r=i,a=we(n),o=[];e:{var l=Rr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Nn;break;case"focusin":u="focus",s=mn;break;case"focusout":u="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Cr:case Nr:case Or:s=vn;break;case Pr:s=Rn;break;case"scroll":s=fn;break;case"wheel":s=Tn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=On}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==f&&(null!=(g=Te(h,f))&&c.push(Kr(h,g,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!ba(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ba(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=On,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(g,h+"leave",s,n,a)).target=d,l.relatedTarget=p,g=null,ba(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,g=c),d=g,s&&u)e:{for(f=u,h=0,p=c=s;p;p=qr(p))h++;for(p=0,g=f;g;g=qr(g))p++;for(;0<h-p;)c=qr(c),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=qr(c),f=qr(f)}c=null}else c=null;null!==s&&Yr(o,l,s,c,!1),null!==u&&null!==d&&Yr(o,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Jn;else if(Qn(l))if(Xn)m=or;else{m=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=ir);switch(m&&(m=m(e,r))?Kn(o,m,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?xa(r):window,e){case"focusin":(Qn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,br=null);break;case"focusout":br=vr=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(o,n,a);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":xr(o,n,a)}var b;if(zn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hn?Bn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Fn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Hn&&(b=en()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,Hn=!0)),0<(v=_r(r,y)).length&&(y=new xn(y,e,null,n,a),o.push({event:y,listeners:v}),b?y.data=b:null!==(b=Vn(n))&&(y.data=b))),(b=In?function(e,t){switch(e){case"compositionend":return Vn(t);case"keypress":return 32!==t.which?null:(Un=!0,Mn);case"textInput":return(e=t.data)===Mn&&Un?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!zn&&Bn(e,t)?(e=en(),$t=Zt=Xt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=_r(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=b))}Mr(o,t)}))}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _r(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Te(e,n))&&r.unshift(Kr(e,i,a)),null!=(i=Te(e,t))&&r.push(Kr(e,i,a))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Te(n,i))&&o.unshift(Kr(n,s,l)):a||null!=(s=Te(n,i))&&o.push(Kr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,Jr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Jr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function $r(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ht(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ga="__reactEvents$"+da,ma="__reactListeners$"+da,va="__reactHandles$"+da;function ba(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[pa]||null}var Sa=[],ka=-1;function Ea(e){return{current:e}}function Aa(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function Ca(e,t){ka++,Sa[ka]=e.current,e.current=t}var Na={},Oa=Ea(Na),Pa=Ea(!1),Ra=Na;function ja(e,t){var n=e.type.contextTypes;if(!n)return Na;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ta(e){return null!==(e=e.childContextTypes)&&void 0!==e}function La(){Aa(Pa),Aa(Oa)}function za(e,t,n){if(Oa.current!==Na)throw Error(i(168));Ca(Oa,t),Ca(Pa,n)}function Da(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,W(e)||"Unknown",a));return F({},n,r)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Na,Ra=Oa.current,Ca(Oa,e),Ca(Pa,Pa.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Da(e,t,Ra),r.__reactInternalMemoizedMergedChildContext=e,Aa(Pa),Aa(Oa),Ca(Oa,e)):Aa(Pa),Ca(Pa,n)}var Ma=null,Ua=!1,Ba=!1;function Va(e){null===Ma?Ma=[e]:Ma.push(e)}function Ha(){if(!Ba&&null!==Ma){Ba=!0;var e=0,t=yt;try{var n=Ma;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ma=null,Ua=!1}catch(a){throw null!==Ma&&(Ma=Ma.slice(e+1)),qe($e,Ha),a}finally{yt=t,Ba=!1}}return null}var Wa=[],Qa=0,Ka=null,_a=0,qa=[],Ya=0,Ga=null,Ja=1,Xa="";function Za(e,t){Wa[Qa++]=_a,Wa[Qa++]=Ka,Ka=e,_a=t}function $a(e,t,n){qa[Ya++]=Ja,qa[Ya++]=Xa,qa[Ya++]=Ga,Ga=e;var r=Ja;e=Xa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ja=1<<32-ot(t)+a|n<<a|r,Xa=i+e}else Ja=1<<i|n<<a|r,Xa=e}function ei(e){null!==e.return&&(Za(e,1),$a(e,1,0))}function ti(e){for(;e===Ka;)Ka=Wa[--Qa],Wa[Qa]=null,_a=Wa[--Qa],Wa[Qa]=null;for(;e===Ga;)Ga=qa[--Ya],qa[Ya]=null,Xa=qa[--Ya],qa[Ya]=null,Ja=qa[--Ya],qa[Ya]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=ju(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:Ja,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=ju(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ua(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ci(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ci(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw fi(),Error(i(418));for(;t;)oi(e,t),t=ua(t.nextSibling)}if(ci(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ua(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=ri;e;)e=ua(e.nextSibling)}function pi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var gi=x.ReactCurrentBatchConfig;function mi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){return(0,e._init)(e._payload)}function yi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Lu(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===T&&bi(i)===t.type)?((r=a(t,n.props)).ref=mi(e,t,n),r.return=e,r):((r=zu(n.type,n.key,n.props,null,e.mode,r)).ref=mi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Du(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=zu(t.type,t.key,t.props,null,e.mode,n)).ref=mi(e,null,t),n.return=e,n;case S:return(t=Mu(t,e.mode,n)).return=e,t;case T:return f(e,(0,t._init)(t._payload),n)}if(te(t)||D(t))return(t=Du(t,e.mode,n,null)).return=e,t;vi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case T:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||D(n))return null!==a?null:d(e,t,n,r,null);vi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case T:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||D(r))return d(t,e=e.get(n)||null,r,a,null);vi(t,r)}return null}function g(a,i,l,s){for(var u=null,c=null,d=i,g=i=0,m=null;null!==d&&g<l.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(a,d,l[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(a,d),i=o(v,i,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===l.length)return n(a,d),ai&&Za(a,g),u;if(null===d){for(;g<l.length;g++)null!==(d=f(a,l[g],s))&&(i=o(d,i,g),null===c?u=d:c.sibling=d,c=d);return ai&&Za(a,g),u}for(d=r(a,d);g<l.length;g++)null!==(m=h(d,a,g,l[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),i=o(m,i,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach((function(e){return t(a,e)})),ai&&Za(a,g),u}function m(a,l,s,u){var c=D(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,g=l,m=l=0,v=null,b=s.next();null!==g&&!b.done;m++,b=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var y=p(a,g,b.value,u);if(null===y){null===g&&(g=v);break}e&&g&&null===y.alternate&&t(a,g),l=o(y,l,m),null===d?c=y:d.sibling=y,d=y,g=v}if(b.done)return n(a,g),ai&&Za(a,m),c;if(null===g){for(;!b.done;m++,b=s.next())null!==(b=f(a,b.value,u))&&(l=o(b,l,m),null===d?c=b:d.sibling=b,d=b);return ai&&Za(a,m),c}for(g=r(a,g);!b.done;m++,b=s.next())null!==(b=h(g,a,m,b.value,u))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),l=o(b,l,m),null===d?c=b:d.sibling=b,d=b);return e&&g.forEach((function(e){return t(a,e)})),ai&&Za(a,m),c}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===k&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var u=o.key,c=i;null!==c;){if(c.key===u){if((u=o.type)===k){if(7===c.tag){n(r,c.sibling),(i=a(c,o.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===T&&bi(u)===c.type){n(r,c.sibling),(i=a(c,o.props)).ref=mi(r,c,o),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===k?((i=Du(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=zu(o.type,o.key,o.props,null,r.mode,s)).ref=mi(r,i,o),s.return=r,r=s)}return l(r);case S:e:{for(c=o.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Mu(o,r.mode,s)).return=r,r=i}return l(r);case T:return e(r,i,(c=o._init)(o._payload),s)}if(te(o))return g(r,i,o,s);if(D(o))return m(r,i,o,s);vi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Fu(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var xi=yi(!0),wi=yi(!1),Si=Ea(null),ki=null,Ei=null,Ai=null;function Ci(){Ai=Ei=ki=null}function Ni(e){var t=Si.current;Aa(Si),e._currentValue=t}function Oi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){ki=e,Ai=Ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Ri(e){var t=e._currentValue;if(Ai!==e)if(e={context:e,memoizedValue:t,next:null},null===Ei){if(null===ki)throw Error(i(308));Ei=e,ki.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var ji=null;function Ti(e){null===ji?ji=[e]:ji.push(e)}function Li(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ti(t)):(n.next=a.next,a.next=n),t.interleaved=n,zi(e,r)}function zi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Di=!1;function Ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ui(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Os)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,zi(e,n)}return null===(a=r.interleaved)?(t.next=t,Ti(r)):(t.next=a.next,a.next=t),r.interleaved=t,zi(e,n)}function Bi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Vi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var a=e.updateQueue;Di=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,g=l;switch(f=t,p=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(p,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:Di=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Is|=o,e.lanes=o,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Qi={},Ki=Ea(Qi),_i=Ea(Qi),qi=Ea(Qi);function Yi(e){if(e===Qi)throw Error(i(174));return e}function Gi(e,t){switch(Ca(qi,t),Ca(_i,e),Ca(Ki,Qi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Aa(Ki),Ca(Ki,t)}function Ji(){Aa(Ki),Aa(_i),Aa(qi)}function Xi(e){Yi(qi.current);var t=Yi(Ki.current),n=se(t,e.type);t!==n&&(Ca(_i,e),Ca(Ki,n))}function Zi(e){_i.current===e&&(Aa(Ki),Aa(_i))}var $i=Ea(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=x.ReactCurrentDispatcher,ao=x.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,uo=!1,co=!1,fo=0,po=0;function ho(){throw Error(i(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?$o:el,e=n(r,a),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(co)}if(ro.current=Zo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,uo=!1,t)throw Error(i(300));return e}function vo(){var e=0!==fo;return fo=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function yo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function xo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,u=null,c=o;do{var d=c.lane;if((io&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,oo.lanes|=d,Is|=d}c=c.next}while(null!==c&&c!==o);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Is|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(yl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(){}function Eo(e,t){var n=oo,r=yo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,yl=!0),r=r.queue,Io(No.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,jo(9,Co.bind(null,n,r,a,t),void 0,null),null===Ps)throw Error(i(349));0!==(30&io)||Ao(n,t,a)}return a}function Ao(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,Oo(t)&&Po(e)}function No(e,t,n){return n((function(){Oo(t)&&Po(e)}))}function Oo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Po(e){var t=zi(e,1);null!==t&&nu(t,e,1,-1)}function Ro(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function To(){return yo().memoizedState}function Lo(e,t,n,r){var a=bo();oo.flags|=e,a.memoizedState=jo(1|t,n,void 0,void 0===r?null:r)}function zo(e,t,n,r){var a=yo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&go(r,o.deps))return void(a.memoizedState=jo(t,n,i,r))}oo.flags|=e,a.memoizedState=jo(1|t,n,i,r)}function Do(e,t){return Lo(8390656,8,e,t)}function Io(e,t){return zo(2048,8,e,t)}function Fo(e,t){return zo(4,2,e,t)}function Mo(e,t){return zo(4,4,e,t)}function Uo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zo(4,4,Uo.bind(null,t,e),n)}function Vo(){}function Ho(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=gt(),oo.lanes|=n,Is|=n,e.baseState=!0),t)}function Ko(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{yt=n,ao.transition=r}}function _o(){return yo().memoizedState}function qo(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))Jo(t,n);else if(null!==(n=Li(e,t,n,r))){nu(n,e,r,eu()),Xo(n,t,r)}}function Yo(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Jo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Ti(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Li(e,t,a,r))&&(nu(n,e,r,a=eu()),Xo(n,t,r))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Jo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Zo={readContext:Ri,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},$o={readContext:Ri,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Ri,useEffect:Do,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Lo(4194308,4,Uo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:Ro,useDebugValue:Vo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=Ro(!1),t=e[0];return e=Ko.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=bo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ps)throw Error(i(349));0!==(30&io)||Ao(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Do(No.bind(null,r,o,e),[e]),r.flags|=2048,jo(9,Co.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=Ps.identifierPrefix;if(ai){var n=Xa;t=":"+t+"R"+(n=(Ja&~(1<<32-ot(Ja)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ri,useCallback:Ho,useContext:Ri,useEffect:Io,useImperativeHandle:Bo,useInsertionEffect:Fo,useLayoutEffect:Mo,useMemo:Wo,useReducer:wo,useRef:To,useState:function(){return wo(xo)},useDebugValue:Vo,useDeferredValue:function(e){return Qo(yo(),lo.memoizedState,e)},useTransition:function(){return[wo(xo)[0],yo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Eo,useId:_o,unstable_isNewReconciler:!1},tl={readContext:Ri,useCallback:Ho,useContext:Ri,useEffect:Io,useImperativeHandle:Bo,useInsertionEffect:Fo,useLayoutEffect:Mo,useMemo:Wo,useReducer:So,useRef:To,useState:function(){return So(xo)},useDebugValue:Vo,useDeferredValue:function(e){var t=yo();return null===lo?t.memoizedState=e:Qo(t,lo.memoizedState,e)},useTransition:function(){return[So(xo)[0],yo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Eo,useId:_o,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Mi(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ui(e,i,a))&&(nu(t,e,a,r),Bi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Mi(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ui(e,i,a))&&(nu(t,e,a,r),Bi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Mi(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Ui(e,a,r))&&(nu(t,e,r,n),Bi(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=Na,i=t.contextType;return"object"===typeof i&&null!==i?i=Ri(i):(a=Ta(t)?Ra:Oa.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?ja(e,a):Na),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ii(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ri(i):(i=Ta(t)?Ra:Oa.current,a.context=ja(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Hi(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=V(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Mi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qs||(Qs=!0,Ks=r),dl(0,t)},n}function hl(e,t,n){(n=Mi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===_s?_s=new Set([this]):_s.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Au.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Mi(-1,1)).tag=2,Ui(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var bl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?wi(t,null,n,r):xi(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var i=t.ref;return Pi(t,a),r=mo(e,t,n,r,i,a),n=vo(),null===e||yl?(ai&&n&&ei(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ql(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Tu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,kl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Ql(e,t,a)}return t.flags|=1,(e=Lu(i,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Ql(e,t,a);0!==(131072&e.flags)&&(yl=!0)}}return Cl(e,t,n,r,a)}function El(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Ls,Ts),Ts|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Ls,Ts),Ts|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ca(Ls,Ts),Ts|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ca(Ls,Ts),Ts|=r;return xl(e,t,a,n),t.child}function Al(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,a){var i=Ta(n)?Ra:Oa.current;return i=ja(t,i),Pi(t,a),n=mo(e,t,n,r,i,a),r=vo(),null===e||yl?(ai&&r&&ei(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ql(e,t,a))}function Nl(e,t,n,r,a){if(Ta(n)){var i=!0;Ia(t)}else i=!1;if(Pi(t,a),null===t.stateNode)Wl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ri(u):u=ja(t,u=Ta(n)?Ra:Oa.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,o,r,u),Di=!1;var f=t.memoizedState;o.state=f,Hi(t,r,o,a),s=t.memoizedState,l!==r||f!==s||Pa.current||Di?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Di||il(t,n,l,r,f,s,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fi(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ri(s):s=ja(t,s=Ta(n)?Ra:Oa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Di=!1,f=t.memoizedState,o.state=f,Hi(t,r,o,a);var h=t.memoizedState;l!==d||f!==h||Pa.current||Di?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Di||il(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,i,a)}function Ol(e,t,n,r,a,i){Al(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Fa(t,n,!1),Ql(e,t,i);r=t.stateNode,bl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=xi(t,e.child,null,i),t.child=xi(t,null,l,i)):xl(e,t,l,i),t.memoizedState=r.state,a&&Fa(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?za(0,t.pendingContext,t.pendingContext!==t.context):t.context&&za(0,t.context,!1),Gi(e,t.containerInfo)}function Rl(e,t,n,r,a){return pi(),hi(a),t.flags|=256,xl(e,t,n,r),t.child}var jl,Tl,Ll,zl,Dl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,a=t.pendingProps,o=$i.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ca($i,1&o),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Iu(s,a,0,null),e=Du(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Dl,e):Ml(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Ul(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Iu({mode:"visible",children:r.children},a,0,null),(o=Du(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&xi(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Dl,o);if(0===(1&t.mode))return Ul(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ul(e,t,l,r=cl(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ps)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,zi(e,a),nu(r,e,a,-1))}return gu(),Ul(e,t,l,r=cl(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Nu.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ua(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(qa[Ya++]=Ja,qa[Ya++]=Xa,qa[Ya++]=Ga,Ja=e.id,Xa=e.overflow,Ga=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Lu(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Lu(r,l):(l=Du(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Dl,a}return e=(l=e.child).sibling,a=Lu(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ml(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ul(e,t,n,r){return null!==r&&hi(r),xi(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oi(e.return,t,n)}function Vl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Hl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=$i.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca($i,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Vl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ql(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Lu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Kl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _l(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _l(t),null;case 1:case 17:return Ta(t.type)&&La(),_l(t),null;case 3:return r=t.stateNode,Ji(),Aa(Pa),Aa(Oa),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(ou(ii),ii=null))),Tl(e,t),_l(t),null;case 5:Zi(t);var a=Yi(qi.current);if(n=t.type,null!==e&&null!=t.stateNode)Ll(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return _l(t),null}if(e=Yi(Ki.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fa]=t,r[pa]=o,e=0!==(1&t.mode),n){case"dialog":Ur("cancel",r),Ur("close",r);break;case"iframe":case"object":case"embed":Ur("load",r);break;case"video":case"audio":for(a=0;a<Dr.length;a++)Ur(Dr[a],r);break;case"source":Ur("error",r);break;case"img":case"image":case"link":Ur("error",r),Ur("load",r);break;case"details":Ur("toggle",r);break;case"input":J(r,o),Ur("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ur("invalid",r);break;case"textarea":ae(r,o),Ur("invalid",r)}for(var s in be(n,o),a=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ur("scroll",r)}switch(n){case"input":_(r),$(r,o,!0);break;case"textarea":_(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=$r)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,jl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Ur("cancel",e),Ur("close",e),a=r;break;case"iframe":case"object":case"embed":Ur("load",e),a=r;break;case"video":case"audio":for(a=0;a<Dr.length;a++)Ur(Dr[a],e);a=r;break;case"source":Ur("error",e),a=r;break;case"img":case"image":case"link":Ur("error",e),Ur("load",e),a=r;break;case"details":Ur("toggle",e),a=r;break;case"input":J(e,r),a=G(e,r),Ur("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=F({},r,{value:void 0}),Ur("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Ur("invalid",e)}for(o in be(n,a),u=a)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?me(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Ur("scroll",e):null!=c&&y(e,o,c,s))}switch(n){case"input":_(e),$(e,r,!1);break;case"textarea":_(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+Q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return _l(t),null;case 6:if(e&&null!=t.stateNode)zl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Yi(qi.current),Yi(Ki.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return _l(t),null;case 13:if(Aa($i),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))fi(),pi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[fa]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;_l(t),o=!1}else null!==ii&&(ou(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&$i.current)?0===zs&&(zs=3):gu())),null!==t.updateQueue&&(t.flags|=4),_l(t),null);case 4:return Ji(),Tl(e,t),null===e&&Hr(t.stateNode.containerInfo),_l(t),null;case 10:return Ni(t.type._context),_l(t),null;case 19:if(Aa($i),null===(o=t.memoizedState))return _l(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Kl(o,!1);else{if(0!==zs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Kl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca($i,1&$i.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Hs&&(t.flags|=128,r=!0,Kl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Kl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return _l(t),null}else 2*Xe()-o.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Kl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=$i.current,Ca($i,r?1&n|2:1&n),t):(_l(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ts)&&(_l(t),6&t.subtreeFlags&&(t.flags|=8192)):_l(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Yl(e,t){switch(ti(t),t.tag){case 1:return Ta(t.type)&&La(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ji(),Aa(Pa),Aa(Oa),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Aa($i),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Aa($i),null;case 4:return Ji(),null;case 10:return Ni(t.type._context),null;case 22:case 23:return du(),null;default:return null}}jl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Tl=function(){},Ll=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yi(Ki.current);var i,o=null;switch(n){case"input":a=G(e,a),r=G(e,r),o=[];break;case"select":a=F({},a,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=$r)}for(c in be(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ur("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},zl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,Jl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function $l(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ga],delete t[ma],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=$r));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Jl||$l(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ht(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Jl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Jl&&($l(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Eu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Jl=(r=Jl)||null!==n.memoizedState,fs(e,t,n),Jl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=Ou.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));ps(o,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Eu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(m){Eu(e,e.return,m)}try{ns(5,e,e.return)}catch(m){Eu(e,e.return,m)}}break;case 1:gs(t,e),vs(e),512&r&&null!==n&&$l(n,n.return);break;case 5:if(gs(t,e),vs(e),512&r&&null!==n&&$l(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(m){Eu(e,e.return,m)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&X(a,o),ye(s,l);var c=ye(s,o);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?me(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):y(a,d,f,c)}switch(s){case"input":Z(a,o);break;case"textarea":ie(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[pa]=o}catch(m){Eu(e,e.return,m)}}break;case 6:if(gs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(m){Eu(e,e.return,m)}}break;case 3:if(gs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(m){Eu(e,e.return,m)}break;case 4:default:gs(t,e),vs(e);break;case 13:gs(t,e),vs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Vs=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Jl=(c=Jl)||d,gs(t,e),Jl=c):gs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:$l(p,p.return);var g=p.stateNode;if("function"===typeof g.componentWillUnmount){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Eu(r,n,m)}}break;case 5:$l(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Zl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ge("display",l))}catch(m){Eu(e,e.return,m)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){Eu(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gs(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){Eu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Zl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Gl;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Jl;l=Gl;var u=Jl;if(Gl=o,(Jl=s)&&!u)for(Zl=a;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?Ss(a):null!==s?(s.return=o,Zl=s):Ss(a);for(;null!==i;)Zl=i,ys(i,t,n),i=i.sibling;Zl=a,Gl=l,Jl=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Zl=i):xs(e)}}function xs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Jl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Jl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(i(163))}Jl||512&t.flags&&as(t)}catch(p){Eu(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ss(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Eu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Eu(t,a,s)}}var i=t.return;try{as(t)}catch(s){Eu(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){Eu(t,o,s)}}}catch(s){Eu(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var ks,Es=Math.ceil,As=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,Ns=x.ReactCurrentBatchConfig,Os=0,Ps=null,Rs=null,js=0,Ts=0,Ls=Ea(0),zs=0,Ds=null,Is=0,Fs=0,Ms=0,Us=null,Bs=null,Vs=0,Hs=1/0,Ws=null,Qs=!1,Ks=null,_s=null,qs=!1,Ys=null,Gs=0,Js=0,Xs=null,Zs=-1,$s=0;function eu(){return 0!==(6&Os)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Os)&&0!==js?js&-js:null!==gi.transition?(0===$s&&($s=gt()),$s):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Jt(e.type)}function nu(e,t,n,r){if(50<Js)throw Js=0,Xs=null,Error(i(185));vt(e,n,r),0!==(2&Os)&&e===Ps||(e===Ps&&(0===(2&Os)&&(Fs|=n),4===zs&&lu(e,js)),ru(e,r),1===n&&0===Os&&0===(1&t.mode)&&(Hs=Xe()+500,Ua&&Ha()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===Ps?js:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Ua=!0,Va(e)}(su.bind(null,e)):Va(su.bind(null,e)),oa((function(){0===(6&Os)&&Ha()})),n=null;else{switch(xt(r)){case 1:n=$e;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,$s=0,0!==(6&Os))throw Error(i(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?js:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mu(e,r);else{t=r;var a=Os;Os|=2;var o=hu();for(Ps===e&&js===t||(Ws=null,Hs=Xe()+500,fu(e,t));;)try{bu();break}catch(s){pu(e,s)}Ci(),As.current=o,Os=a,null!==Rs?t=0:(Ps=null,js=0,t=zs)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=iu(e,a))),1===t)throw n=Ds,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=mu(e,r))&&(0!==(o=ht(e))&&(r=o,t=iu(e,o))),1===t))throw n=Ds,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,Bs,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Vs+500-Xe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Bs,Ws),t);break}wu(e,Bs,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Bs,Ws),r);break}wu(e,Bs,Ws);break;default:throw Error(i(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function iu(e,t){var n=Us;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=mu(e,t))&&(t=Bs,Bs=n,null!==t&&ou(t)),e}function ou(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lu(e,t){for(t&=~Ms,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Os))throw Error(i(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=mu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Ds,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Bs,Ws),ru(e,Xe()),null}function uu(e,t){var n=Os;Os|=1;try{return e(t)}finally{0===(Os=n)&&(Hs=Xe()+500,Ua&&Ha())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&Os)&&Su();var t=Os;Os|=1;var n=Ns.transition,r=yt;try{if(Ns.transition=null,yt=1,e)return e()}finally{yt=r,Ns.transition=n,0===(6&(Os=t))&&Ha()}}function du(){Ts=Ls.current,Aa(Ls)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Rs)for(n=Rs.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&La();break;case 3:Ji(),Aa(Pa),Aa(Oa),no();break;case 5:Zi(r);break;case 4:Ji();break;case 13:case 19:Aa($i);break;case 10:Ni(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Rs=e=Lu(e.current,null),js=Ts=t,zs=0,Ds=null,Ms=Fs=Is=0,Bs=Us=null,null!==ji){for(t=0;t<ji.length;t++)if(null!==(r=(n=ji[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}ji=null}return e}function pu(e,t){for(;;){var n=Rs;try{if(Ci(),ro.current=Zo,uo){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}uo=!1}if(io=0,so=lo=oo=null,co=!1,fo=0,Cs.current=null,null===n||null===n.return){zs=1,Ds=t,Rs=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=js,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ml(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&gl(o,c,t),u=c;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(u),t.updateQueue=m}else g.add(u);break e}if(0===(1&t)){gl(o,c,t),gu();break e}u=Error(i(426))}else if(ai&&1&s.mode){var v=ml(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),hi(ul(u,s));break e}}o=u=ul(u,s),4!==zs&&(zs=2),null===Us?Us=[o]:Us.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Vi(o,pl(0,u,t));break e;case 1:s=u;var b=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===_s||!_s.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Vi(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}xu(n)}catch(x){t=x,Rs===n&&null!==n&&(Rs=n=n.return);continue}break}}function hu(){var e=As.current;return As.current=Zo,null===e?Zo:e}function gu(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===Ps||0===(268435455&Is)&&0===(268435455&Fs)||lu(Ps,js)}function mu(e,t){var n=Os;Os|=2;var r=hu();for(Ps===e&&js===t||(Ws=null,fu(e,t));;)try{vu();break}catch(a){pu(e,a)}if(Ci(),Os=n,As.current=r,null!==Rs)throw Error(i(261));return Ps=null,js=0,zs}function vu(){for(;null!==Rs;)yu(Rs)}function bu(){for(;null!==Rs&&!Ge();)yu(Rs)}function yu(e){var t=ks(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,null===t?xu(e):Rs=t,Cs.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=ql(n,t,Ts)))return void(Rs=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(Rs=n);if(null===e)return zs=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Rs=t);Rs=t=e}while(null!==t);0===zs&&(zs=5)}function wu(e,t,n){var r=yt,a=Ns.transition;try{Ns.transition=null,yt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!==(6&Os))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===Ps&&(Rs=Ps=null,js=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||qs||(qs=!0,Pu(tt,(function(){return Su(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Ns.transition,Ns.transition=null;var l=yt;yt=1;var s=Os;Os|=4,Cs.current=null,function(e,t){if(ea=Qt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===o&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Qt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}g=ts,ts=!1}(e,n),ms(n,e),hr(ta),Qt=!!ea,ta=ea=null,e.current=n,bs(n,e,a),Je(),Os=s,yt=l,Ns.transition=o}else e.current=n;if(qs&&(qs=!1,Ys=e,Gs=a),o=e.pendingLanes,0===o&&(_s=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Qs)throw Qs=!1,e=Ks,Ks=null,e;0!==(1&Gs)&&0!==e.tag&&Su(),o=e.pendingLanes,0!==(1&o)?e===Xs?Js++:(Js=0,Xs=e):Js=0,Ha()}(e,t,n,r)}finally{Ns.transition=a,yt=r}return null}function Su(){if(null!==Ys){var e=xt(Gs),t=Ns.transition,n=yt;try{if(Ns.transition=null,yt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Gs=0,0!==(6&Os))throw Error(i(331));var a=Os;for(Os|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(is(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var g=o.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Zl=b;break e}Zl=o.return}}var y=e.current;for(Zl=y;null!==Zl;){var x=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Zl=x;else e:for(l=y;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Eu(s,s.return,S)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Os=a,Ha(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{yt=n,Ns.transition=t}}return!1}function ku(e,t,n){e=Ui(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===_s||!_s.has(r))){t=Ui(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Au(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(js&n)===n&&(4===zs||3===zs&&(130023424&js)===js&&500>Xe()-Vs?fu(e,0):Ms|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=zi(e,t))&&(vt(e,t,n),ru(e,n))}function Nu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Ou(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Cu(e,n)}function Pu(e,t){return qe(e,t)}function Ru(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ju(e,t,n,r){return new Ru(e,t,n,r)}function Tu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,t){var n=e.alternate;return null===n?((n=ju(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zu(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Tu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Du(n.children,a,o,t);case E:l=8,a|=8;break;case A:return(e=ju(12,n,t,2|a)).elementType=A,e.lanes=o,e;case P:return(e=ju(13,n,t,a)).elementType=P,e.lanes=o,e;case R:return(e=ju(19,n,t,a)).elementType=R,e.lanes=o,e;case L:return Iu(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case N:l=9;break e;case O:l=11;break e;case j:l=14;break e;case T:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=ju(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Du(e,t,n,r){return(e=ju(7,e,r,t)).lanes=n,e}function Iu(e,t,n,r){return(e=ju(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=ju(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=ju(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,a,i,o,l,s){return e=new Uu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=ju(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ii(i),e}function Vu(e){if(!e)return Na;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Ta(n))return Da(e,n,t)}return t}function Hu(e,t,n,r,a,i,o,l,s){return(e=Bu(n,r,!0,e,0,i,0,l,s)).context=Vu(null),n=e.current,(i=Mi(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Ui(n,i,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Wu(e,t,n,r){var a=t.current,i=eu(),o=tu(a);return n=Vu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Mi(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ui(a,t,o))&&(nu(e,a,o,i),Bi(e,a,o)),o}function Qu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Ku(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function _u(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pa.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),pi();break;case 5:Xi(t);break;case 1:Ta(t.type)&&Ia(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(Si,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca($i,1&$i.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(Ca($i,1&$i.current),null!==(e=Ql(e,t,n))?e.sibling:null);Ca($i,1&$i.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca($i,$i.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Ql(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ai&&0!==(1048576&t.flags)&&$a(t,_a,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=ja(t,Oa.current);Pi(t,n),a=mo(null,t,r,e,a,n);var o=vo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ta(r)?(o=!0,Ia(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ii(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Ol(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Tu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===j)return 14}return 2}(r),e=nl(r,e),a){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=Nl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Cl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Nl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Pl(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Fi(e,t),Hi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Rl(e,t,r,n,a=ul(Error(i(423)),t));break e}if(r!==a){t=Rl(e,t,r,n,a=ul(Error(i(424)),t));break e}for(ri=ua(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===a){t=Ql(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ui(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),Al(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Fl(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xi(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,Ca(Si,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!Pa.current){t=Ql(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Mi(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Oi(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Oi(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Pi(t,n),r=r(a=Ri(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Ta(r)?(e=!0,Ia(t)):e=!1,Pi(t,n),ol(t,r,a),sl(t,r,a,n),Ol(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return El(e,t,n)}throw Error(i(156,t.tag))};var qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function $u(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Qu(o);l.call(e)}}Wu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Qu(o);i.call(e)}}var o=Hu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[ha]=o.current,Hr(8===e.nodeType?e.parentNode:e),cu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Qu(s);l.call(e)}}var s=Bu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,Hr(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,a,r);return Qu(o)}Gu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wu(e,t,null,null)},Gu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[ha]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),ru(t,Xe()),0===(6&Os)&&(Hs=Xe()+500,Ha()))}break;case 13:cu((function(){var t=zi(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),_u(e,1)}},St=function(e){if(13===e.tag){var t=zi(e,134217728);if(null!==t)nu(t,e,134217728,eu());_u(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=zi(e,t);if(null!==n)nu(n,e,t,eu());_u(e,t)}},Et=function(){return yt},At=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));q(r),Z(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Oe=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[ya,xa,wa,Ce,Ne,uu]},tc={findFiberByHostInstance:ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ke(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ju(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Ju(e))throw Error(i(299));var n=!1,r="",a=qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bu(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ke(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(i(200));return $u(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Ju(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,a,0,o,l),e[ha]=t.current,Hr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(i(200));return $u(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu((function(){$u(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return $u(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},534:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,g(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&!E.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+O(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),P(o,t,a,"",(function(e){return e}))):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+O(l=e[u],u);s+=P(l,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=P(l=l.value,t,a,c=i+O(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function R(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},L={transition:null},z={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=o,t.PureComponent=y,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=D,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(534)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,x(e),!g)if(null!==r(u))g=!0,L(S);else{var t=r(c);null!==t&&z(w,t.startTime-e)}}function S(e,n){g=!1,m&&(m=!1,b(C),C=-1),h=!0;var i=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!P());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&z(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,A=null,C=-1,N=5,O=-1;function P(){return!(t.unstable_now()-O<N)}function R(){if(null!==A){var e=t.unstable_now();O=e;var n=!0;try{n=A(!0,e)}finally{n?k():(E=!1,A=null)}}else E=!1}if("function"===typeof y)k=function(){y(R)};else if("undefined"!==typeof MessageChannel){var j=new MessageChannel,T=j.port2;j.port1.onmessage=R,k=function(){T.postMessage(null)}}else k=function(){v(R,0)};function L(e){A=e,E||(E=!0,k())}function z(e,n){C=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,L(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(m?(b(C),C=-1):m=!0,z(w,i-o))):(e.sortIndex=l,n(u,e),g||h||(g=!0,L(S))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},844:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".2565e158.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="coeur-festifs:";n.l=(r,a,i,o)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/coeur-festifs/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=i);var o=n.p+n.u(t),l=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkcoeur_festifs=self.webpackChunkcoeur_festifs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),a=n(391),i=n(950),o=n.t(i,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(t,n,r,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,c=i.history,h=e.Pop,g=null,m=v();function v(){return(c.state||{idx:null}).idx}function b(){h=e.Pop;let t=v(),n=null==t?null:t-m;m=t,g&&g({action:h,location:x.location,delta:n})}function y(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,c.replaceState(l({},c.state,{idx:m}),""));let x={get action(){return h},get location(){return t(i,c)},listen(e){if(g)throw new Error("A history only accepts one active listener");return i.addEventListener(s,b),g=e,()=>{i.removeEventListener(s,b),g=null}},createHref:e=>n(i,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=f(x.location,t,n);r&&r(a,t),m=v()+1;let l=d(a,m),s=x.createHref(a);try{c.pushState(l,"",s)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;i.location.assign(s)}o&&g&&g({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let a=f(x.location,t,n);r&&r(a,t),m=v();let i=d(a,m),l=x.createHref(a);c.replaceState(i,"",l),o&&g&&g({action:h,location:x.location,delta:0})},go:e=>c.go(e)};return x}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let a=T(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let i=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=j(a);o=P(i[l],e,r)}return o}function y(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(u(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let l=F([r,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),y(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:O(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))a(e,t,r);else a(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=x(r.join("/")),l=[];return l.push(...o.map((e=>""===e?i:[i,e].join("/")))),a&&l.push(...o),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,S=3,k=2,E=1,A=10,C=-2,N=e=>"*"===e;function O(e,t){let n=e.split("/"),r=n.length;return n.some(N)&&(r+=C),t&&(r+=k),n.filter((e=>!N(e))).reduce(((e,t)=>e+(w.test(t)?S:""===t?E:A)),r)}function P(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),o.push({params:a,pathname:F([i,c.pathname]),pathnameBase:M(F([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=F([i,c.pathnameBase]))}return o}function R(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:o,pattern:e}}function j(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function D(e,t){let n=z(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function I(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=h(e):(a=l({},e),u(!a.pathname||!a.pathname.includes("?"),L("?","pathname","search",a)),u(!a.pathname||!a.pathname.includes("#"),L("#","pathname","hash",a)),u(!a.search||!a.search.includes("#"),L("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?h(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:U(r),hash:B(a)}}(a,i),d=s&&"/"!==s&&s.endsWith("/"),f=(o||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const F=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function V(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],W=(new Set(H),["get",...H]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}const K=t.createContext(null);const _=t.createContext(null);const q=t.createContext(null);const Y=t.createContext(null);const G=t.createContext({outlet:null,matches:[],isDataRoute:!1});const J=t.createContext(null);function X(){return null!=t.useContext(Y)}function Z(){return X()||u(!1),t.useContext(Y).location}function $(e){t.useContext(q).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(G);return e?function(){let{router:e}=ue(le.UseNavigateStable),n=de(se.UseNavigateStable),r=t.useRef(!1);return $((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,Q({fromRouteId:n},a)))}),[e,n])}():function(){X()||u(!1);let e=t.useContext(K),{basename:n,future:r,navigator:a}=t.useContext(q),{matches:i}=t.useContext(G),{pathname:o}=Z(),l=JSON.stringify(D(i,r.v7_relativeSplatPath)),s=t.useRef(!1);return $((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void a.go(t);let i=I(t,JSON.parse(l),o,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:F([n,i.pathname])),(r.replace?a.replace:a.push)(i,r.state,r)}),[n,a,l,o,e])}()}function te(n,r,a,i){X()||u(!1);let{navigator:o}=t.useContext(q),{matches:l}=t.useContext(G),s=l[l.length-1],c=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=Z();if(r){var g;let e="string"===typeof r?h(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||u(!1),f=e}else f=p;let m=f.pathname||"/",b=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=v(n,{pathname:b});let x=oe(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:F([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,a,i);return r&&x?t.createElement(Y.Provider,{value:{location:Q({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},x):x}function ne(){let e=function(){var e;let n=t.useContext(J),r=ce(se.UseRouteError),a=de(se.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const re=t.createElement(ne,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(G.Provider,{value:this.props.routeContext},t.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:a}=e,i=t.useContext(K);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(G.Provider,{value:n},a)}function oe(e,n,r,a){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=a)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,i)=>{let o,u=!1,f=null,p=null;var h;r&&(o=s&&a.route.id?s[a.route.id]:void 0,f=a.route.errorElement||re,c&&(d<0&&0===i?(h="route-fallback",!1||fe[h]||(fe[h]=!0),u=!0,p=null):d===i&&(u=!0,p=a.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,i+1)),m=()=>{let n;return n=o?f:u?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(ie,{match:a,routeContext:{outlet:e,matches:g,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===i)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:f,error:o,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function ue(e){let n=t.useContext(K);return n||u(!1),n}function ce(e){let n=t.useContext(_);return n||u(!1),n}function de(e){let n=function(){let e=t.useContext(G);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}const fe={};r.startTransition;function pe(e){let{to:n,replace:r,state:a,relative:i}=e;X()||u(!1);let{future:o,static:l}=t.useContext(q),{matches:s}=t.useContext(G),{pathname:c}=Z(),d=ee(),f=I(n,D(s,o.v7_relativeSplatPath),c,"path"===i),p=JSON.stringify(f);return t.useEffect((()=>d(JSON.parse(p),{replace:r,state:a,relative:i})),[d,p,i,r,a]),null}function he(e){u(!1)}function ge(n){let{basename:r="/",children:a=null,location:i,navigationType:o=e.Pop,navigator:l,static:s=!1,future:c}=n;X()&&u(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:l,static:s,future:Q({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof i&&(i=h(i));let{pathname:p="/",search:g="",hash:m="",state:v=null,key:b="default"}=i,y=t.useMemo((()=>{let e=T(p,d);return null==e?null:{location:{pathname:e,search:g,hash:m,state:v,key:b},navigationType:o}}),[d,p,g,m,v,b,o]);return null==y?null:t.createElement(q.Provider,{value:f},t.createElement(Y.Provider,{children:a,value:y}))}function me(e){let{children:t,location:n}=e;return te(ve(t),n)}new Promise((()=>{}));t.Component;function ve(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let i=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,ve(e.props.children,i));e.type!==he&&u(!1),e.props.index&&e.props.children&&u(!1);let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ve(e.props.children,i)),r.push(o)})),r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(Io){}new Map;const be=r.startTransition;o.flushSync,r.useId;function ye(e){let{basename:n,children:r,future:a,window:i}=e,o=t.useRef();var l;null==o.current&&(o.current=(void 0===(l={window:i,v5Compat:!0})&&(l={}),g((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:p(t))}),(function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let s=o.current,[u,d]=t.useState({action:s.action,location:s.location}),{v7_startTransition:m}=a||{},v=t.useCallback((e=>{m&&be?be((()=>d(e))):d(e)}),[d,m]);return t.useLayoutEffect((()=>s.listen(v)),[s,v]),t.createElement(ge,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var xe,we;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xe||(xe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(we||(we={}));var Se=function(){return Se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Se.apply(this,arguments)};Object.create;function ke(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ee=n(324),Ae=n.n(Ee),Ce="-ms-",Ne="-moz-",Oe="-webkit-",Pe="comm",Re="rule",je="decl",Te="@keyframes",Le=Math.abs,ze=String.fromCharCode,De=Object.assign;function Ie(e){return e.trim()}function Fe(e,t){return(e=t.exec(e))?e[0]:e}function Me(e,t,n){return e.replace(t,n)}function Ue(e,t,n){return e.indexOf(t,n)}function Be(e,t){return 0|e.charCodeAt(t)}function Ve(e,t,n){return e.slice(t,n)}function He(e){return e.length}function We(e){return e.length}function Qe(e,t){return t.push(e),e}function Ke(e,t){return e.filter((function(e){return!Fe(e,t)}))}var _e=1,qe=1,Ye=0,Ge=0,Je=0,Xe="";function Ze(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:_e,column:qe,length:o,return:"",siblings:l}}function $e(e,t){return De(Ze("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function et(e){for(;e.root;)e=$e(e.root,{children:[e]});Qe(e,e.siblings)}function tt(){return Je=Ge>0?Be(Xe,--Ge):0,qe--,10===Je&&(qe=1,_e--),Je}function nt(){return Je=Ge<Ye?Be(Xe,Ge++):0,qe++,10===Je&&(qe=1,_e++),Je}function rt(){return Be(Xe,Ge)}function at(){return Ge}function it(e,t){return Ve(Xe,e,t)}function ot(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lt(e){return _e=qe=1,Ye=He(Xe=e),Ge=0,[]}function st(e){return Xe="",e}function ut(e){return Ie(it(Ge-1,ft(91===e?e+2:40===e?e+1:e)))}function ct(e){for(;(Je=rt())&&Je<33;)nt();return ot(e)>2||ot(Je)>3?"":" "}function dt(e,t){for(;--t&&nt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return it(e,at()+(t<6&&32==rt()&&32==nt()))}function ft(e){for(;nt();)switch(Je){case e:return Ge;case 34:case 39:34!==e&&39!==e&&ft(Je);break;case 40:41===e&&ft(e);break;case 92:nt()}return Ge}function pt(e,t){for(;nt()&&e+Je!==57&&(e+Je!==84||47!==rt()););return"/*"+it(t,Ge-1)+"*"+ze(47===e?e:nt())}function ht(e){for(;!ot(rt());)nt();return it(e,Ge)}function gt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function mt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case je:return e.return=e.return||e.value;case Pe:return"";case Te:return e.return=e.value+"{"+gt(e.children,r)+"}";case Re:if(!He(e.value=e.props.join(",")))return""}return He(n=gt(e.children,r))?e.return=e.value+"{"+n+"}":""}function vt(e,t,n){switch(function(e,t){return 45^Be(e,0)?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}(e,t)){case 5103:return Oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+e+e;case 4789:return Ne+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+e+Ne+e+Ce+e+e;case 5936:switch(Be(e,t+11)){case 114:return Oe+e+Ce+Me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Oe+e+Ce+Me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Oe+e+Ce+Me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Oe+e+Ce+e+e;case 6165:return Oe+e+Ce+"flex-"+e+e;case 5187:return Oe+e+Me(e,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return Oe+e+Ce+"flex-item-"+Me(e,/flex-|-self/g,"")+(Fe(e,/flex-|baseline/)?"":Ce+"grid-row-"+Me(e,/flex-|-self/g,""))+e;case 4675:return Oe+e+Ce+"flex-line-pack"+Me(e,/align-content|flex-|-self/g,"")+e;case 5548:return Oe+e+Ce+Me(e,"shrink","negative")+e;case 5292:return Oe+e+Ce+Me(e,"basis","preferred-size")+e;case 6060:return Oe+"box-"+Me(e,"-grow","")+Oe+e+Ce+Me(e,"grow","positive")+e;case 4554:return Oe+Me(e,/([^-])(transform)/g,"$1"+Oe+"$2")+e;case 6187:return Me(Me(Me(e,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),e,"")+e;case 5495:case 3959:return Me(e,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Me(Me(e,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+e+e;case 4200:if(!Fe(e,/flex-|baseline/))return Ce+"grid-column-align"+Ve(e,t)+e;break;case 2592:case 3360:return Ce+Me(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Fe(e.props,/grid-\w+-end/)}))?~Ue(e+(n=n[t].value),"span",0)?e:Ce+Me(e,"-start","")+e+Ce+"grid-row-span:"+(~Ue(n,"span",0)?Fe(n,/\d+/):+Fe(n,/\d+/)-+Fe(e,/\d+/))+";":Ce+Me(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Fe(e.props,/grid-\w+-start/)}))?e:Ce+Me(Me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Me(e,/(.+)-inline(.+)/,Oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(He(e)-1-t>6)switch(Be(e,t+1)){case 109:if(45!==Be(e,t+4))break;case 102:return Me(e,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Ne+(108==Be(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ue(e,"stretch",0)?vt(Me(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return Ce+n+":"+r+l+(a?Ce+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===Be(e,t+6))return Me(e,":",":"+Oe)+e;break;case 6444:switch(Be(e,45===Be(e,14)?18:11)){case 120:return Me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(45===Be(e,14)?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+Ce+"$2box$3")+e;case 100:return Me(e,":",":"+Ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Me(e,"scroll-","scroll-snap-")+e}return e}function bt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case je:return void(e.return=vt(e.value,e.length,n));case Te:return gt([$e(e,{value:Me(e.value,"@","@"+Oe)})],r);case Re:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Fe(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":et($e(e,{props:[Me(t,/:(read-\w+)/,":-moz-$1")]})),et($e(e,{props:[t]})),De(e,{props:Ke(n,r)});break;case"::placeholder":et($e(e,{props:[Me(t,/:(plac\w+)/,":"+Oe+"input-$1")]})),et($e(e,{props:[Me(t,/:(plac\w+)/,":-moz-$1")]})),et($e(e,{props:[Me(t,/:(plac\w+)/,Ce+"input-$1")]})),et($e(e,{props:[t]})),De(e,{props:Ke(n,r)})}return""}))}}function yt(e){return st(xt("",null,null,null,[""],e=lt(e),0,[0],e))}function xt(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,p=0,h=0,g=1,m=1,v=1,b=0,y="",x=a,w=i,S=r,k=y;m;)switch(h=b,b=nt()){case 40:if(108!=h&&58==Be(k,d-1)){-1!=Ue(k+=Me(ut(b),"&","&\f"),"&\f",Le(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=ut(b);break;case 9:case 10:case 13:case 32:k+=ct(h);break;case 92:k+=dt(at()-1,7);continue;case 47:switch(rt()){case 42:case 47:Qe(St(pt(nt(),at()),t,n,s),s);break;default:k+="/"}break;case 123*g:l[u++]=He(k)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+c:-1==v&&(k=Me(k,/\f/g,"")),p>0&&He(k)-d&&Qe(p>32?kt(k+";",r,n,d-1,s):kt(Me(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Qe(S=wt(k,t,n,u,c,a,l,y,x=[],w=[],d,i),i),123===b)if(0===c)xt(k,t,S,S,x,i,d,l,w);else switch(99===f&&110===Be(k,3)?100:f){case 100:case 108:case 109:case 115:xt(e,S,S,r&&Qe(wt(e,S,S,0,0,a,l,y,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:xt(k,S,S,S,[""],w,0,l,w)}}u=c=p=0,g=v=1,y=k="",d=o;break;case 58:d=1+He(k),p=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==tt())continue;switch(k+=ze(b),b*g){case 38:v=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(He(k)-1)*v,v=1;break;case 64:45===rt()&&(k+=ut(nt())),f=rt(),c=d=He(y=k+=ht(at())),b++;break;case 45:45===h&&2==He(k)&&(g=0)}}return i}function wt(e,t,n,r,a,i,o,l,s,u,c,d){for(var f=a-1,p=0===a?i:[""],h=We(p),g=0,m=0,v=0;g<r;++g)for(var b=0,y=Ve(e,f+1,f=Le(m=o[g])),x=e;b<h;++b)(x=Ie(m>0?p[b]+" "+y:Me(y,/&\f/g,p[b])))&&(s[v++]=x);return Ze(e,t,n,0===a?Re:l,s,u,c,d)}function St(e,t,n,r){return Ze(e,t,n,Pe,ze(Je),Ve(e,2,-2),0,r)}function kt(e,t,n,r,a){return Ze(e,t,n,je,Ve(e,0,r),Ve(e,r+1,-1),r,a)}var Et={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Ct="active",Nt="data-styled-version",Ot="6.1.13",Pt="/*!sc*/\n",Rt="undefined"!=typeof window&&"HTMLElement"in window,jt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/coeur-festifs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Tt=(new Set,Object.freeze([])),Lt=Object.freeze({});function zt(e,t,n){return void 0===n&&(n=Lt),e.theme!==n.theme&&e.theme||t||n.theme}var Dt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),It=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ft=/(^-|-$)/g;function Mt(e){return e.replace(It,"-").replace(Ft,"")}var Ut=/(a)(d)/gi,Bt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Bt(t%52)+n;return(Bt(t%52)+n).replace(Ut,"$1-$2")}var Ht,Wt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Qt=function(e){return Wt(5381,e)};function Kt(e){return Vt(Qt(e)>>>0)}function _t(e){return e.displayName||e.name||"Component"}function qt(e){return"string"==typeof e&&!0}var Yt="function"==typeof Symbol&&Symbol.for,Gt=Yt?Symbol.for("react.memo"):60115,Jt=Yt?Symbol.for("react.forward_ref"):60112,Xt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$t={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},en=((Ht={})[Jt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ht[Gt]=$t,Ht);function tn(e){return("type"in(t=e)&&t.type.$$typeof)===Gt?$t:"$$typeof"in e?en[e.$$typeof]:Xt;var t}var nn=Object.defineProperty,rn=Object.getOwnPropertyNames,an=Object.getOwnPropertySymbols,on=Object.getOwnPropertyDescriptor,ln=Object.getPrototypeOf,sn=Object.prototype;function un(e,t,n){if("string"!=typeof t){if(sn){var r=ln(t);r&&r!==sn&&un(e,r,n)}var a=rn(t);an&&(a=a.concat(an(t)));for(var i=tn(e),o=tn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Zt||n&&n[s]||o&&s in o||i&&s in i)){var u=on(t,s);try{nn(e,s,u)}catch(e){}}}}return e}function cn(e){return"function"==typeof e}function dn(e){return"object"==typeof e&&"styledComponentId"in e}function fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function pn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function hn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gn(e,t,n){if(void 0===n&&(n=!1),!n&&!hn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gn(e[r],t[r]);else if(hn(t))for(var r in t)e[r]=gn(e[r],t[r]);return e}function mn(e,t){Object.defineProperty(e,"toString",{value:t})}function vn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw vn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(Pt);return t},e}(),yn=new Map,xn=new Map,wn=1,Sn=function(e){if(yn.has(e))return yn.get(e);for(;xn.has(wn);)wn++;var t=wn++;return yn.set(e,t),xn.set(t,e),t},kn=function(e,t){wn=t+1,yn.set(e,t),xn.set(t,e)},En="style[".concat(At,"][").concat(Nt,'="').concat(Ot,'"]'),An=new RegExp("^".concat(At,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Cn=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Nn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Pt),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(An);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(kn(c,u),Cn(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},On=function(e){for(var t=document.querySelectorAll(En),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(At)!==Ct&&(Nn(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Pn(){return n.nc}var Rn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(At,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(At,Ct),r.setAttribute(Nt,Ot);var o=Pn();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},jn=function(){function e(e){this.element=Rn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw vn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Tn=function(){function e(e){this.element=Rn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ln=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),zn=Rt,Dn={isServer:!Rt,useCSSOMInjection:!jt},In=function(){function e(e,t,n){void 0===e&&(e=Lt),void 0===t&&(t={});var r=this;this.options=Se(Se({},Dn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Rt&&zn&&(zn=!1,On(this)),mn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return xn.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(At,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(Pt)},i=0;i<n;i++)a(i);return r}(r)}))}return e.registerId=function(e){return Sn(e)},e.prototype.rehydrate=function(){!this.server&&Rt&&On(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Se(Se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ln(n):t?new jn(n):new Tn(n)}(this.options),new bn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Sn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Sn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Sn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Fn=/&/g,Mn=/^\s*\/\/.*$/gm;function Un(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Un(e.children,t)),e}))}function Bn(e){var t,n,r,a=void 0===e?Lt:e,i=a.options,o=void 0===i?Lt:i,l=a.plugins,s=void 0===l?Tt:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Re&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Fn,n).replace(r,u))})),o.prefix&&c.push(bt),c.push(mt);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Mn,""),u=yt(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(u=Un(u,o.namespace));var d,f=[];return gt(u,function(e){var t=We(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||vn(15),Wt(e,t.name)}),5381).toString():"",d}var Vn=new In,Hn=Bn(),Wn=t.createContext({shouldForwardProp:void 0,styleSheet:Vn,stylis:Hn}),Qn=(Wn.Consumer,t.createContext(void 0));function Kn(){return(0,t.useContext)(Wn)}function _n(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],i=Kn().styleSheet,o=(0,t.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,t.useMemo)((function(){return Bn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Ae()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}}),[e.shouldForwardProp,o,l]);return t.createElement(Wn.Provider,{value:s},t.createElement(Qn.Provider,{value:l},e.children))}var qn=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Hn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,mn(this,(function(){throw vn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Hn),this.name+e.hash},e}(),Yn=function(e){return e>="A"&&e<="Z"};function Gn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Yn(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Jn=function(e){return null==e||!1===e||""===e},Xn=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Jn(i)&&(Array.isArray(i)&&i.isCss||cn(i)?r.push("".concat(Gn(a),":"),i,";"):hn(i)?r.push.apply(r,ke(ke(["".concat(a," {")],Xn(i),!1),["}"],!1)):r.push("".concat(Gn(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Et||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Zn(e,t,n,r){return Jn(e)?[]:dn(e)?[".".concat(e.styledComponentId)]:cn(e)?!cn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Zn(e(t),t,n,r):e instanceof qn?n?(e.inject(n,r),[e.getName(r)]):[e]:hn(e)?Xn(e):Array.isArray(e)?Array.prototype.concat.apply(Tt,e.map((function(e){return Zn(e,t,n,r)}))):[e.toString()];var a}function $n(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(cn(n)&&!dn(n))return!1}return!0}var er=Qt(Ot),tr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&$n(e),this.componentId=t,this.baseHash=Wt(er,t),this.baseStyle=n,In.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=fn(r,this.staticRulesId);else{var a=pn(Zn(this.rules,e,t,n)),i=Vt(Wt(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=fn(r,i),this.staticRulesId=i}else{for(var l=Wt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=pn(Zn(c,e,t,n));l=Wt(l,d+u),s+=d}}if(s){var f=Vt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=fn(r,f)}}return r},e}(),nr=t.createContext(void 0);nr.Consumer;var rr={};new Set;function ar(e,n,r){var a=dn(e),i=e,o=!qt(e),l=n.attrs,s=void 0===l?Tt:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Mt(e);rr[n]=(rr[n]||0)+1;var r="".concat(n,"-").concat(Kt(Ot+n+rr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return qt(e)?"styled.".concat(e):"Styled(".concat(_t(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Mt(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=n.shouldForwardProp;if(a&&i.shouldForwardProp){var m=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var b=new tr(r,p,a?i.componentStyle:void 0);function y(e,n){return function(e,n,r){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(nr),d=Kn(),f=e.shouldForwardProp||d.shouldForwardProp,p=zt(n,c,o)||Lt,h=function(e,t,n){for(var r,a=Se(Se({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=cn(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?fn(a[l],o[l]):"style"===l?Se(Se({},a[l]),o[l]):o[l]}return t.className&&(a.className=fn(a.className,t.className)),a}(a,n,p),g=h.as||u,m={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?m.as=h.forwardedAs:f&&!f(v,g)||(m[v]=h[v]));var b=function(e,t){var n=Kn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),y=fn(l,s);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),m[qt(g)&&!Dt.has(g)?"class":"className"]=y,m.ref=r,(0,t.createElement)(g,m)}(x,e,n)}y.displayName=f;var x=t.forwardRef(y);return x.attrs=h,x.componentStyle=b,x.displayName=f,x.shouldForwardProp=g,x.foldedComponentIds=a?fn(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=a?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)gn(e,a[r],!0);return e}({},i.defaultProps,e):e}}),mn(x,(function(){return".".concat(x.styledComponentId)})),o&&un(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function ir(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var or=function(e){return Object.assign(e,{isCss:!0})};function lr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(cn(e)||hn(e))return or(Zn(ir(Tt,ke([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Zn(r):or(Zn(ir(r,t)))}function sr(e,t,n){if(void 0===n&&(n=Lt),!t)throw vn(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,lr.apply(void 0,ke([r],a,!1)))};return r.attrs=function(r){return sr(e,t,Se(Se({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return sr(e,t,Se(Se({},n),r))},r}var ur=function(e){return sr(ar,e)},cr=ur;Dt.forEach((function(e){cr[e]=ur(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$n(e),In.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(pn(Zn(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&In.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pn(lr.apply(void 0,ke([e],t,!1))),a=Kt(r);return new qn(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Pn(),r=pn([n&&'nonce="'.concat(n,'"'),"".concat(At,'="true"'),"".concat(Nt,'="').concat(Ot,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw vn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw vn(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[At]="",n[Nt]=Ot,n.dangerouslySetInnerHTML={__html:r},n),i=Pn();return i&&(a.nonce=i),[t.createElement("style",Se({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new In({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw vn(2);return t.createElement(_n,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw vn(3)}})(),"__sc-".concat(At,"__");const fr=n.p+"static/media/logo.5f67cad964a523d4532a.png",pr=n.p+"static/media/backgroundVideo.117b95d5f5f9bead3f59.mp4";n(844);Object.create(null);const hr={},gr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];yr(t[0])&&hr[t[0]]||(yr(t[0])&&(hr[t[0]]=new Date),function(){if(console?.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];yr(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}(...t))},mr=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout((()=>{e.off("initialized",n)}),0),t()};e.on("initialized",n)}},vr=(e,t,n)=>{e.loadNamespaces(t,mr(e,n))},br=(e,t,n,r)=>{if(yr(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return vr(e,n,r);n.forEach((t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,mr(e,r))},yr=e=>"string"===typeof e,xr=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,wr={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},Sr=e=>wr[e];let kr={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(xr,Sr)};let Er;const Ar={type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};kr={...kr,...e}}(e.options.react),(e=>{Er=e})(e)}},Cr=(0,t.createContext)();class Nr{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Or=(e,t,n,r)=>e.getFixedT(t,n,r),Pr=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:r}=n,{i18n:a,defaultNS:i}=(0,t.useContext)(Cr)||{},o=r||a||Er;if(o&&!o.reportNamespaces&&(o.reportNamespaces=new Nr),!o){gr("You will need to pass in an i18next instance by using initReactI18next");const e=(e,t)=>{return yr(t)?t:"object"===typeof(n=t)&&null!==n&&yr(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e;var n},t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}o.options.react?.wait&&gr("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const l={...kr,...o.options.react,...n},{useSuspense:s,keyPrefix:u}=l;let c=e||i||o.options?.defaultNS;c=yr(c)?[c]:c||["translation"],o.reportNamespaces.addUsedNamespaces?.(c);const d=(o.isInitialized||o.initializedStoreOnce)&&c.every((e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(gr("i18n.languages were undefined or empty",t.languages),!0)}(e,o,l))),f=((e,n,r,a)=>(0,t.useCallback)(Or(e,n,r,a),[e,n,r,a]))(o,n.lng||null,"fallback"===l.nsMode?c:c[0],u),p=()=>f,h=()=>Or(o,n.lng||null,"fallback"===l.nsMode?c:c[0],u),[g,m]=(0,t.useState)(p);let v=c.join();n.lng&&(v=`${n.lng}${v}`);const b=((e,n)=>{const r=(0,t.useRef)();return(0,t.useEffect)((()=>{r.current=n?r.current:e}),[e,n]),r.current})(v),y=(0,t.useRef)(!0);(0,t.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=l;y.current=!0,d||s||(n.lng?br(o,n.lng,c,(()=>{y.current&&m(h)})):vr(o,c,(()=>{y.current&&m(h)}))),d&&b&&b!==v&&y.current&&m(h);const r=()=>{y.current&&m(h)};return e&&o?.on(e,r),t&&o?.store.on(t,r),()=>{y.current=!1,o&&e?.split(" ").forEach((e=>o.off(e,r))),t&&o&&t.split(" ").forEach((e=>o.store.off(e,r)))}}),[o,v]),(0,t.useEffect)((()=>{y.current&&d&&m(p)}),[o,u,d]);const x=[g,o,d];if(x.t=g,x.i18n=o,x.ready=d,d)return x;if(!d&&!s)return x;throw new Promise((e=>{n.lng?br(o,n.lng,c,(()=>e())):vr(o,c,(()=>e()))}))};const Rr="data:image/png;base64,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";var jr=n(579);const Tr=dr`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,Lr=dr`
  from { 
    opacity: 0; 
    transform: translateY(40px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,zr=dr`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Dr=(dr`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`,cr.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  opacity: 0.85;
  pointer-events: none;
`),Ir=cr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  backdrop-filter: blur(5px);
  z-index: -1;
`,Fr=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Mr=cr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  height: 800px;
  width: 100%;
`,Ur=cr.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,Br=cr.img`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`,Vr=cr.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin: 15px 0;
  color: #ff6347;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  padding-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.6rem;
  }
`,Hr=cr.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #ff9a9e, #fad4c4);
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 15px rgba(255, 145, 145, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(255, 145, 145, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 165, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Wr=cr.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 40px;
  background: white;
  color: white;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(59, 130, 246, 0.08) 0%,
        transparent 60%
      );
    animation: rotate 30s linear infinite;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`,Qr=cr.h2`
  font-size: 3.5rem;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.95);
  margin-bottom: 50px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  position: relative;
  animation: ${Tr} 1.2s ease-out 0.2s both;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 50%,
      transparent 100%
    );
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.8rem;
  }
`,Kr=cr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 300px;
  }
`,_r=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(247, 126, 126, 0.64);
  padding: 50px 30px;
  border: 1px solid rgba(218, 149, 149, 0);
  backdrop-filter: blur(20px);
  height: 220px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  animation: ${Lr} 1s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgb(255, 255, 255) 50%,
      transparent 100%
    );
    transition: left 0.8s ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(139, 92, 246, 0.6) 0%,
      rgba(59, 130, 246, 0.6) 50%,
      rgba(236, 72, 153, 0.6) 100%
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-12px);
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);

    &::before {
      left: 100%;
    }

    &::after {
      transform: scaleX(1);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }
`,qr=cr.div`
  width: 90px;
  height: 90px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: all 0.4s ease;
  font-size: 3rem;
  animation: ${zr} 4s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(139, 92, 246, 0.1) 90deg,
      transparent 180deg
    );
    animation: rotate 6s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${_r}:hover & {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.1);

    &::before {
      opacity: 1;
    }
  }
`,Yr=cr.h4`
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0;
  transition: color 0.3s ease;

  ${_r}:hover & {
    color: rgb(0, 0, 0);
  }
`,Gr=()=>{const e=ee(),{t:t}=Pr();return(0,jr.jsxs)(Fr,{children:[(0,jr.jsxs)(Mr,{children:[(0,jr.jsx)(Dr,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:(0,jr.jsx)("source",{src:pr,type:"video/mp4"})}),(0,jr.jsx)(Ir,{}),(0,jr.jsxs)(Ur,{children:[(0,jr.jsx)(Br,{src:fr,alt:"Event Logo"}),(0,jr.jsx)(Vr,{children:t("homepage.title")}),(0,jr.jsx)(Hr,{onClick:()=>e("/coeur-festifs/events"),children:t("homepage.explore")})]})]}),(0,jr.jsxs)(Wr,{children:[(0,jr.jsx)(Qr,{children:t("homepage.partnershipTitle")||"Our Partners"}),(0,jr.jsxs)(Kr,{children:[(0,jr.jsxs)(_r,{children:[(0,jr.jsx)(qr,{children:(0,jr.jsx)("img",{src:"data:image/jpeg;base64,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",style:{width:"100%",height:"100%"},alt:"Carrefour Jeunesse Emploi C\xf4te-des-Neiges"})}),(0,jr.jsx)(Yr,{children:"Carrefour Jeunesse Emploi C\xf4te-des-Neiges, Outremont et Ville Mont-Royal"})]}),(0,jr.jsxs)(_r,{children:[(0,jr.jsx)(qr,{children:(0,jr.jsx)("img",{src:Rr,style:{width:"100%",height:"70%"},alt:"R\xe9pit Providence"})}),(0,jr.jsx)(Yr,{children:"R\xe9pit Providence"})]})]})]})]})},Jr=n.p+"static/media/choco.7d31a285365e863c002e.jpg",Xr=n.p+"static/media/prismart.a8e62a2ce4171c62e7d1.png",Zr=n.p+"static/media/30yB.f9efbec8a975f064282c.png",$r=n.p+"static/media/Gcpp.2ef782ba687fd9e1ed54.png",ea=n.p+"static/media/debrouillard.255d1147bada80808437.png",ta=n.p+"static/media/drJulien.ae68e312ae5024a2a584.png",na=n.p+"static/media/Gallimard.12570ccd6d6b006dcee6.jpg",ra=n.p+"static/media/Scholastic.fb7c5e552e6f72dc5ab1.png",aa=()=>{const{t:e}=Pr();return[{id:"1",title:e("events.events.0.title"),date:e("events.events.0.date"),location:e("events.events.0.location"),capacity:100,description:e("events.events.0.description"),partner:["R\xe9pit providence"],Sponsor:["Fondation R\xe9no-Jouets"],SponsorImg:["data:image/jpeg;base64,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"],partnerImg:[Rr],image:Jr,isAvailable:!0},{id:"2",title:e("events.events.1.title"),date:e("events.events.1.date"),location:e("events.events.1.location"),description:e("events.events.1.description"),image:$r,partner:["Fondation du Dr Julien"],partnerImg:[ta],Sponsor:["Scholastic","Librairie Gallimard","Les D\xe9brouillards"],SponsorImg:[ra,na,ea],isAvailable:!0},{id:"3",title:e("events.events.2.title"),date:e("events.events.2.date"),location:e("events.events.2.location"),description:e("events.events.2.description"),image:Zr,isAvailable:!0},{id:"4",title:e("events.events.3.title"),date:e("events.events.3.date"),location:e("events.events.3.location"),description:e("events.events.3.description"),partner:["La Maison de la culture de C\xf4te-des-Neiges"],image:Xr,isAvailable:!0}]};var ia={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oa=t.createContext&&t.createContext(ia),la=["attr","size","title"];function sa(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}function ca(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function da(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ca(Object(n),!0).forEach((function(t){fa(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ca(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fa(e,t,n){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e){return e&&e.map(((e,n)=>t.createElement(e.tag,da({key:n},e.attr),pa(e.child))))}function ha(e){return n=>t.createElement(ga,ua({attr:da({},e.attr)},n),pa(e.child))}function ga(e){var n=n=>{var r,{attr:a,size:i,title:o}=e,l=sa(e,la),s=i||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",ua({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:r,style:da(da({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==oa?t.createElement(oa.Consumer,null,(e=>n(e))):n(ia)}function ma(e){return ha({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function va(e){return ha({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function ba(e){return ha({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function ya(e){return ha({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function xa(e){return ha({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function wa(e){return ha({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Sa(e){return ha({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}function ka(e){return ha({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function Ea(e){return ha({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const Aa=n.p+"static/media/events.e0f88b127fb5f53e7e5b.jpg",Ca=dr`
  from { 
    opacity: 0; 
    transform: translateY(-20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,Na=dr`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Oa=dr`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`,Pa=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  margin-top: 30px;
  color: #4a4a4a;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  background-image: url(${Aa});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: ${Ca} 1.2s ease-out both;

  /* Improved overlay for better text readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(2px);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    background-attachment: scroll;
  }
`,Ra=cr.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  color: #000;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${Ca} 1.2s ease-out both;
  font-weight: 700;
  letter-spacing: -0.02em;
`,ja=cr.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  gap: 30px;
  scroll-snap-type: x mandatory;
  max-width: 100%;
  width: 100%;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #db2f2f;
    border-radius: 4px;

    &:hover {
      background: #c62828;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    overflow-x: visible;
    padding: 20px 10px;
  }
`,Ta=cr.div`
  min-width: 320px;
  max-width: 360px;
  min-height: 520px;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  color: #2d3a4b;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${Na} ${e=>.6+.2*e.index}s ease-out
    both;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: ${Oa} 2s ease-in-out infinite;
  }

  .image-container {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .info {
    padding: 25px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #1a1a1a;
    font-weight: 600;
    line-height: 1.3;
  }

  .date,
  .location {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #636e72;
    margin-bottom: 12px;
    font-weight: 500;

    svg {
      margin-right: 10px;
      color: #db2f2f;
      font-size: 1.1rem;
    }
  }

  .description {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin: 20px 0;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    min-width: 85%;
    max-width: 85%;
    margin-bottom: 25px;

    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    min-width: 90%;
    max-width: 90%;

    .info {
      padding: 20px;
    }
  }
`,La=cr.div`
  margin: 15px 0 10px 0;

  .section-title {
    font-size: 1rem;
    font-weight: 600;
    color: #2d3a4b;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .items-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      background: rgba(219, 47, 47, 0.1);
      color: #db2f2f;
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(219, 47, 47, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(219, 47, 47, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`,za=cr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #db2f2f, #e63946);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(219, 47, 47, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #c62828, #d32f2f);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(219, 47, 47, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    margin-left: 8px;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`,Da=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .emoji {
    font-size: 3rem;
    margin-bottom: 15px;
  }
`,Ia=cr.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  text-align: center;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
  }
`,Fa=cr.p`
  color: #1a1a1a;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 700px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,Ma=cr.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  a {
    color: #db2f2f;
    font-size: 2.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      background: #db2f2f;
      transition: width 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px) scale(1.15);
      color: #c62828;

      &::after {
        width: 100%;
      }
    }

    &:focus {
      outline: 2px solid #db2f2f;
      outline-offset: 4px;
      border-radius: 4px;
    }
  }
`,Ua=cr.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #db2f2f, #e63946);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(219, 47, 47, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #c62828, #d32f2f);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(219, 47, 47, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }

  svg {
    margin-left: 10px;
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`,Ba=(cr.div`
  min-width: 320px;
  max-width: 360px;
  min-height: 520px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 20px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`,()=>{const e=ee(),{t:t}=Pr(),n=aa().filter((e=>e.isAvailable)),r=t=>{e(`/coeur-festifs/event/${t}`)},a=(e,n)=>e&&0!==e.length?(0,jr.jsxs)(La,{children:[(0,jr.jsx)("div",{className:"section-title",children:t(n)}),(0,jr.jsx)("ul",{className:"items-list",role:"list",children:e.map(((e,t)=>(0,jr.jsx)("li",{role:"listitem",children:e},`${n}-${t}`)))})]}):null;return(0,jr.jsxs)(jr.Fragment,{children:[(0,jr.jsxs)(Pa,{role:"main",children:[(0,jr.jsx)(Ra,{children:t("events.title")}),n.length>0?(0,jr.jsx)(ja,{role:"region","aria-label":t("events.title"),children:n.map(((e,n)=>(0,jr.jsxs)(Ta,{index:n,onClick:()=>r(e.id),onKeyDown:t=>((e,t)=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),r(t))})(t,e.id),tabIndex:0,role:"button","aria-label":`${t("events.viewDetails")} ${e.title}`,children:[(0,jr.jsx)("div",{className:"image-container",children:(0,jr.jsx)("img",{src:e.image,alt:`${e.title} - ${e.location}`,loading:"lazy"})}),(0,jr.jsxs)("div",{className:"info",children:[(0,jr.jsxs)("div",{children:[(0,jr.jsx)("h2",{children:e.title}),(0,jr.jsxs)("div",{className:"date",role:"text","aria-label":`Date: ${e.date}`,children:[(0,jr.jsx)(xa,{"aria-hidden":"true"}),(0,jr.jsx)("span",{children:e.date})]}),(0,jr.jsxs)("div",{className:"location",role:"text","aria-label":`Location: ${e.location}`,children:[(0,jr.jsx)(ka,{"aria-hidden":"true"}),(0,jr.jsx)("span",{children:e.location})]}),(0,jr.jsx)("p",{className:"description",children:e.description}),a(e.partner,"events.partner"),a(e.Sponsor,"events.sponsor")]}),(0,jr.jsxs)(za,{onClick:t=>{t.stopPropagation(),r(e.id)},"aria-label":`${t("events.viewDetails")} ${e.title}`,children:[(0,jr.jsx)("span",{children:t("events.viewDetails")}),(0,jr.jsx)(Sa,{"aria-hidden":"true"})]})]})]},e.id)))}):(0,jr.jsxs)(Da,{role:"status","aria-live":"polite",children:[(0,jr.jsx)("div",{className:"emoji",role:"img","aria-label":"Calendar",children:"\ud83d\udcc5"}),(0,jr.jsx)("p",{children:t("events.noEventsMessage")})]})]}),(0,jr.jsxs)(Ia,{role:"contentinfo",children:[(0,jr.jsx)(Fa,{children:t("events.Footer.desc")}),(0,jr.jsxs)(Ma,{role:"navigation","aria-label":"Social media links",children:[(0,jr.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Instagram",children:(0,jr.jsx)(va,{"aria-hidden":"true"})}),(0,jr.jsx)("a",{href:"mailto:coeurs.festifs@gmail.com","aria-label":"Send us an email",children:(0,jr.jsx)(wa,{"aria-hidden":"true"})})]}),(0,jr.jsxs)(Ua,{href:"mailto:coeurs.festifs@gmail.com","aria-label":"Contact us via email",children:[(0,jr.jsx)("span",{children:t("events.Footer.contact")}),(0,jr.jsx)(wa,{"aria-hidden":"true"})]})]})]})}),Va=n.p+"static/media/Clara.be4a552a5181040a1a53.jpg",Ha=n.p+"static/media/Ariane.f00fec795617c8912262.jpeg",Wa=n.p+"static/media/commonPic.72fb5eafbda5524cee27.jpg",Qa=n.p+"static/media/purple.05673d67d32fb96d09b0.png",Ka=dr`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,_a=dr`
  from { 
    opacity: 0; 
    transform: scale(0.9) rotateX(10deg); 
    filter: blur(4px);
  }
  to { 
    opacity: 1; 
    transform: scale(1) rotateX(0deg); 
    filter: blur(0px);
  }
`,qa=dr`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(139, 92, 246, 0.1); }
`,Ya=dr`
  from { 
    background-size: 0% 100%;
  }
  to { 
    background-size: 100% 100%;
  }
`,Ga=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #0a0a0a;
  position: relative;
`,Ja=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 40px;
  margin-top: 0;
  color: white;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-image: url(${Qa});
  background-size: cover;
  // background: linear-gradient(
  //   135deg,
  //   rgba(252, 185, 243, 0.84) 0%,
  //   rgba(206, 153, 199, 0.84) 50%,
  //   rgba(252, 185, 243, 0.84) 100%
  // );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(139, 92, 246, 0.15) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 60%
      );
    pointer-events: none;
  }

  animation: ${Ka} 1.5s ease-out both;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`,Xa=cr.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.bgColor};
  color: #1a1a1a;
  width: 100%;
  min-height: 100vh;
  padding: 120px 40px;
  text-align: center;
  animation: ${Ka} 1.2s ease-out both;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`,Za=cr.h1`
  font-size: 5rem;
  font-weight: 100;
  color: #0a0a0a;
  margin-bottom: 40px;
  letter-spacing: -0.05em;
  line-height: 0.9;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #8b5cf6 50%,
      transparent 100%
    );
    animation: ${Ya} 1.5s ease-out 0.5s both;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 3.5rem;
  }
`,$a=cr.div`
  max-width: 900px;
  animation: ${_a} 1s ease-out 0.3s both;

  @media (max-width: 480px) {
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
  }
`,ei=cr.h2`
  font-size: 3.5rem;
  font-weight: 100;
  color: white;
  margin-bottom: 80px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  position: relative;
  animation: ${_a} 1s ease-out 0.2s both;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      white 90%,
      transparent 100%
    );
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.8rem;
  }
`,ti=cr.h2`
  font-size: 2.8rem;
  font-weight: 200;
  color: #0a0a0a;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.3rem;
  }
`,ni=cr.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  max-width: 700px;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 0.01em;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.05rem;
  }
`,ri=cr.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  margin-top: 40px;
  align-items: stretch;

  @media (max-width: 768px) {
    gap: 40px;
    flex-direction: column;
    align-items: center;
  }
`,ai=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(70, 63, 63, 0.3);
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  width: 300px;
  height: 500px;
  backdrop-filter: blur(10px);
  position: relative;
  animation: ${_a} 1s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.1) 0%,
      rgba(59, 130, 246, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.2);
    animation: ${qa} 2s ease-in-out infinite;

    &::before {
      opacity: 1;
    }
  }

  &:nth-child(1) {
    animation-delay: 0.3s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 350px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 320px;
    height: 380px;
  }
`,ii=cr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s ease;
  width: 100%;
  max-width: 700px;
  height: 350px;
  backdrop-filter: blur(15px);
  margin-bottom: 80px;
  position: relative;
  animation: ${_a} 1s ease-out 0.1s both;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);

    &::after {
      left: 100%;
    }
  }

  @media (max-width: 480px) {
    height: 250px;
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 300px;
    width: 85%;
  }
`,oi=cr.h3`
  font-size: 1.2rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin-top: auto;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
  }
`,li=cr.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: grayscale(30%) brightness(0.8);
  position: relative;

  &:hover {
    filter: grayscale(0%) brightness(1);
  }
`,si=cr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.7) contrast(1.1);

  &:hover {
    filter: brightness(0.9) contrast(1.2);
    transform: scale(1.02);
  }
`,ui=cr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 80px 60px;
  border: none;
  text-align: left;
  margin-bottom: 0;
  width: 100%;
  max-width: 900px;
  position: relative;
  animation: ${Ka} 1s ease-out both;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #8b5cf6 0%, #3b82f6 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:nth-child(1) {
    animation-delay: 0.2s;
    margin-bottom: 60px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 80px;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 50px 30px;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    padding: 60px 40px;
    text-align: center;
  }
`,ci=()=>{const{t:e}=Pr();return(0,jr.jsx)(jr.Fragment,{children:(0,jr.jsxs)(Ga,{children:[(0,jr.jsx)(Xa,{id:"about",bgColor:"white",children:(0,jr.jsxs)($a,{children:[(0,jr.jsx)(Za,{children:e("aboutUs.title")}),(0,jr.jsx)(ni,{children:e("aboutUs.desc")})]})}),(0,jr.jsx)(Ja,{children:(0,jr.jsxs)(Xa,{id:"presidents",bgColor:"none",children:[(0,jr.jsx)(ei,{children:e("aboutUs.presidentsTitle")}),(0,jr.jsx)(ii,{children:(0,jr.jsx)(si,{src:Wa})}),(0,jr.jsxs)(ri,{children:[(0,jr.jsxs)(ai,{children:[(0,jr.jsx)(li,{src:Ha}),(0,jr.jsxs)(oi,{children:["Ariane Manekeng Guimfack",(0,jr.jsx)(ni,{style:{fontSize:"1rem",color:"white"},children:e("aboutUs.presidentsText")})]})]}),(0,jr.jsxs)(ai,{children:[(0,jr.jsx)(li,{src:Va}),(0,jr.jsxs)(oi,{children:["Clara Maria Bridi",(0,jr.jsx)(ni,{style:{fontSize:"1rem",color:"white"},children:e("aboutUs.presidentsText")})]})]})]})]})}),(0,jr.jsxs)(Xa,{id:"mission",bgColor:"linear-gradient(165deg, #fff, #fff)",children:[(0,jr.jsxs)(ui,{children:[(0,jr.jsx)(ti,{children:e("aboutUs.missionTitle")}),(0,jr.jsx)(ni,{children:e("aboutUs.missionText")})]}),(0,jr.jsxs)(ui,{children:[(0,jr.jsx)(ti,{children:e("aboutUs.valuesTitle")}),(0,jr.jsx)(ni,{children:e("aboutUs.valuesText")})]})]})]})})},di=e=>"string"===typeof e,fi=()=>{let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n},pi=e=>null==e?"":""+e,hi=/###/g,gi=e=>e&&e.indexOf("###")>-1?e.replace(hi,"."):e,mi=e=>!e||di(e),vi=(e,t,n)=>{const r=di(t)?t.split("."):t;let a=0;for(;a<r.length-1;){if(mi(e))return{};const t=gi(r[a]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++a}return mi(e)?{}:{obj:e,k:gi(r[a])}},bi=(e,t,n)=>{const{obj:r,k:a}=vi(e,t,Object);if(void 0!==r||1===t.length)return void(r[a]=n);let i=t[t.length-1],o=t.slice(0,t.length-1),l=vi(e,o,Object);for(;void 0===l.obj&&o.length;)i=`${o[o.length-1]}.${i}`,o=o.slice(0,o.length-1),l=vi(e,o,Object),l&&l.obj&&"undefined"!==typeof l.obj[`${l.k}.${i}`]&&(l.obj=void 0);l.obj[`${l.k}.${i}`]=n},yi=(e,t)=>{const{obj:n,k:r}=vi(e,t);if(n)return n[r]},xi=(e,t,n)=>{for(const r in t)"__proto__"!==r&&"constructor"!==r&&(r in e?di(e[r])||e[r]instanceof String||di(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):xi(e[r],t[r],n):e[r]=t[r]);return e},wi=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Si={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ki=e=>di(e)?e.replace(/[&<>"'\/]/g,(e=>Si[e])):e;const Ei=[" ",",","?","!",";"],Ai=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}(20),Ci=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let a=e;for(let i=0;i<r.length;){if(!a||"object"!==typeof a)return;let e,t="";for(let o=i;o<r.length;++o)if(o!==i&&(t+=n),t+=r[o],e=a[t],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&o<r.length-1)continue;i+=o-i+1;break}a=e}return a},Ni=e=>e&&e.replace("_","-"),Oi={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Pi{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Oi,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:(di(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Pi(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new Pi(this.logger,e)}}var Ri=new Pi;class ji{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)})),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.observers[e]){Array.from(this.observers[e].entries()).forEach((e=>{let[t,r]=e;for(let a=0;a<r;a++)t(...n)}))}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach((t=>{let[r,a]=t;for(let i=0;i<a;i++)r.apply(r,[e,...n])}))}}}class Ti extends ji{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,i=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):di(n)&&a?o.push(...n.split(a)):o.push(n)));const l=yi(this.data,o);return!l&&!t&&!n&&e.indexOf(".")>-1&&(e=o[0],t=o[1],n=o.slice(2).join(".")),!l&&i&&di(n)?Ci(this.data&&this.data[e]&&this.data[e][t],n,a):l}addResource(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const i=void 0!==a.keySeparator?a.keySeparator:this.options.keySeparator;let o=[e,t];n&&(o=o.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(o=e.split("."),r=t,t=o[1]),this.addNamespaces(t),bi(this.data,o,r),a.silent||this.emit("added",e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const a in n)(di(n[a])||Array.isArray(n[a]))&&this.addResource(e,t,a,n[a],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,a){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),r=n,n=t,t=o[1]),this.addNamespaces(t);let l=yi(this.data,o)||{};i.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?xi(l,n,a):l={...l,...n},bi(this.data,o,l),i.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var Li={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,a){return e.forEach((e=>{this.processors[e]&&(t=this.processors[e].process(t,n,r,a))})),t}};const zi={};class Di extends ji{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((e,t,n)=>{e.forEach((e=>{t[e]&&(n[e]=t[e])}))})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Ri.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(void 0===e||null===e)return!1;const n=this.resolve(e,t);return n&&void 0!==n.res}extractFromKey(e,t){let n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let a=t.ns||this.options.defaultNS||[];const i=n&&e.indexOf(n)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!((e,t,n)=>{t=t||"",n=n||"";const r=Ei.filter((e=>t.indexOf(e)<0&&n.indexOf(e)<0));if(0===r.length)return!0;const a=Ai.getRegExp(`(${r.map((e=>"?"===e?"\\?":e)).join("|")})`);let i=!a.test(e);if(!i){const t=e.indexOf(n);t>0&&!a.test(e.substring(0,t))&&(i=!0)}return i})(e,n,r);if(i&&!o){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:di(a)?[a]:a};const i=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(i[0])>-1)&&(a=i.shift()),e=i.join(r)}return{key:e,namespaces:di(a)?[a]:a}}translate(e,t,n){if("object"!==typeof t&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"===typeof t&&(t={...t}),t||(t={}),void 0===e||null===e)return"";Array.isArray(e)||(e=[String(e)]);const r=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,a=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,{key:i,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],s=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(s&&"cimode"===s.toLowerCase()){if(u){const e=t.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${e}${i}`,usedKey:i,exactUsedKey:i,usedLng:s,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${e}${i}`}return r?{res:i,usedKey:i,exactUsedKey:i,usedLng:s,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:i}const c=this.resolve(e,t);let d=c&&c.res;const f=c&&c.usedKey||i,p=c&&c.exactUsedKey||i,h=Object.prototype.toString.apply(d),g=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,m=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!di(d)&&"boolean"!==typeof d&&"number"!==typeof d;if(!(m&&d&&v&&["[object Number]","[object Function]","[object RegExp]"].indexOf(h)<0)||di(g)&&Array.isArray(d))if(m&&di(g)&&Array.isArray(d))d=d.join(g),d&&(d=this.extendTranslation(d,e,t,n));else{let r=!1,o=!1;const u=void 0!==t.count&&!di(t.count),f=Di.hasDefaultValue(t),p=u?this.pluralResolver.getSuffix(s,t.count,t):"",h=t.ordinal&&u?this.pluralResolver.getSuffix(s,t.count,{ordinal:!1}):"",g=u&&!t.ordinal&&0===t.count&&this.pluralResolver.shouldUseIntlApi(),m=g&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${p}`]||t[`defaultValue${h}`]||t.defaultValue;!this.isValidLookup(d)&&f&&(r=!0,d=m),this.isValidLookup(d)||(o=!0,d=i);const v=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:d,b=f&&m!==d&&this.options.updateMissing;if(o||r||b){if(this.logger.log(b?"updateKey":"missingKey",s,l,i,b?m:d),a){const e=this.resolve(i,{...t,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const n=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&n&&n[0])for(let t=0;t<n.length;t++)e.push(n[t]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(t.lng||this.language):e.push(t.lng||this.language);const r=(e,n,r)=>{const a=f&&r!==d?r:v;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,n,a,b,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,l,n,a,b,t),this.emit("missingKey",e,l,n,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&u?e.forEach((e=>{const n=this.pluralResolver.getSuffixes(e,t);g&&t[`defaultValue${this.options.pluralSeparator}zero`]&&n.indexOf(`${this.options.pluralSeparator}zero`)<0&&n.push(`${this.options.pluralSeparator}zero`),n.forEach((n=>{r([e],i+n,t[`defaultValue${n}`]||m)}))})):r(e,i,m))}d=this.extendTranslation(d,e,t,c,n),o&&d===i&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${i}`),(o||r)&&this.options.parseMissingKeyHandler&&(d="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${i}`:i,r?d:void 0):this.options.parseMissingKeyHandler(d))}else{if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,d,{...t,ns:o}):`key '${i} (${this.language})' returned an object instead of string.`;return r?(c.res=e,c.usedParams=this.getUsedParamsDetails(t),c):e}if(a){const e=Array.isArray(d),n=e?[]:{},r=e?p:f;for(const i in d)if(Object.prototype.hasOwnProperty.call(d,i)){const e=`${r}${a}${i}`;n[i]=this.translate(e,{...t,joinArrays:!1,ns:o}),n[i]===e&&(n[i]=d[i])}d=n}}return r?(c.res=d,c.usedParams=this.getUsedParamsDetails(t),c):d}extendTranslation(e,t,n,r,a){var i=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const o=di(e)&&(n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let l;if(o){const t=e.match(this.interpolator.nestingRegexp);l=t&&t.length}let s=n.replace&&!di(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),o){const t=e.match(this.interpolator.nestingRegexp);l<(t&&t.length)&&(n.nest=!1)}!n.lng&&"v1"!==this.options.compatibilityAPI&&r&&r.res&&(n.lng=this.language||r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return a&&a[0]===r[0]&&!n.context?(i.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),null):i.translate(...r,t)}),n)),n.interpolation&&this.interpolator.reset()}const o=n.postProcess||this.options.postProcess,l=di(o)?[o]:o;return void 0!==e&&null!==e&&l&&l.length&&!1!==n.applyPostProcessor&&(e=Li.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t,n,r,a,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return di(e)&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(t))return;const l=this.extractFromKey(e,o),s=l.key;n=s;let u=l.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const c=void 0!==o.count&&!di(o.count),d=c&&!o.ordinal&&0===o.count&&this.pluralResolver.shouldUseIntlApi(),f=void 0!==o.context&&(di(o.context)||"number"===typeof o.context)&&""!==o.context,p=o.lngs?o.lngs:this.languageUtils.toResolveHierarchy(o.lng||this.language,o.fallbackLng);u.forEach((e=>{this.isValidLookup(t)||(i=e,!zi[`${p[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(i)&&(zi[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((n=>{if(this.isValidLookup(t))return;a=n;const i=[s];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(i,s,n,e,o);else{let e;c&&(e=this.pluralResolver.getSuffix(n,o.count,o));const t=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(i.push(s+e),o.ordinal&&0===e.indexOf(r)&&i.push(s+e.replace(r,this.options.pluralSeparator)),d&&i.push(s+t)),f){const n=`${s}${this.options.contextSeparator}${o.context}`;i.push(n),c&&(i.push(n+e),o.ordinal&&0===e.indexOf(r)&&i.push(n+e.replace(r,this.options.pluralSeparator)),d&&i.push(n+t))}}let l;for(;l=i.pop();)this.isValidLookup(t)||(r=l,t=this.getResource(n,e,l,o))})))}))})),{res:t,usedKey:n,exactUsedKey:r,usedLng:a,usedNS:i}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!di(e.replace);let r=n?e.replace:e;if(n&&"undefined"!==typeof e.count&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const e of t)delete r[e]}return r}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,12)&&void 0!==e[n])return!0;return!1}}const Ii=e=>e.charAt(0).toUpperCase()+e.slice(1);class Fi{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ri.create("languageUtils")}getScriptPartFromCode(e){if(!(e=Ni(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=Ni(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(di(e)&&e.indexOf("-")>-1){if("undefined"!==typeof Intl&&"undefined"!==typeof Intl.getCanonicalLocales)try{let t=Intl.getCanonicalLocales(e)[0];if(t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t)return t}catch(Io){}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map((e=>e.toLowerCase())):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Ii(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Ii(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=Ii(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const n=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(n)||(t=n)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find((e=>e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:e.indexOf("-")>0&&n.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===n||0===e.indexOf(n)&&n.length>1?e:void 0))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),di(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],a=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return di(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&a(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&a(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&a(this.getLanguagePartFromCode(e))):di(e)&&a(this.formatLanguageCode(e)),n.forEach((e=>{r.indexOf(e)<0&&a(this.formatLanguageCode(e))})),r}}let Mi=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Ui={1:e=>Number(e>1),2:e=>Number(1!=e),3:e=>0,4:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),5:e=>Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5),6:e=>Number(1==e?0:e>=2&&e<=4?1:2),7:e=>Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),8:e=>Number(1==e?0:2==e?1:8!=e&&11!=e?2:3),9:e=>Number(e>=2),10:e=>Number(1==e?0:2==e?1:e<7?2:e<11?3:4),11:e=>Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3),12:e=>Number(e%10!=1||e%100==11),13:e=>Number(0!==e),14:e=>Number(1==e?0:2==e?1:3==e?2:3),15:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2),16:e=>Number(e%10==1&&e%100!=11?0:0!==e?1:2),17:e=>Number(1==e||e%10==1&&e%100!=11?0:1),18:e=>Number(0==e?0:1==e?1:2),19:e=>Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3),20:e=>Number(1==e?0:0==e||e%100>0&&e%100<20?1:2),21:e=>Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0),22:e=>Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)};const Bi=["v1","v2","v3"],Vi=["v4"],Hi={zero:0,one:1,two:2,few:3,many:4,other:5};class Wi{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Ri.create("pluralResolver"),this.options.compatibilityJSON&&!Vi.includes(this.options.compatibilityJSON)||"undefined"!==typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(()=>{const e={};return Mi.forEach((t=>{t.lngs.forEach((n=>{e[n]={numbers:t.nr,plurals:Ui[t.fc]}}))})),e})(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{const n=Ni("dev"===e?"en":e),r=t.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:n,type:r});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];const i=new Intl.PluralRules(n,{type:r});return this.pluralRulesCache[a]=i,i}catch(n){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(((e,t)=>Hi[e]-Hi[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):n.numbers.map((n=>this.getSuffix(e,n,t))):[]}getSuffix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:this.getSuffixRetroCompatible(r,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let r=e.numbers[n];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===r?r="plural":1===r&&(r=""));const a=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return"v1"===this.options.compatibilityJSON?1===r?"":"number"===typeof r?`_plural_${r.toString()}`:a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?a():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Bi.includes(this.options.compatibilityJSON)}}const Qi=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=((e,t,n)=>{const r=yi(e,n);return void 0!==r?r:yi(t,n)})(e,t,n);return!i&&a&&di(n)&&(i=Ci(e,n,r),void 0===i&&(i=Ci(t,n,r))),i},Ki=e=>e.replace(/\$/g,"$$$$");class _i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Ri.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:a,prefixEscaped:i,suffix:o,suffixEscaped:l,formatSeparator:s,unescapeSuffix:u,unescapePrefix:c,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:h,nestingOptionsSeparator:g,maxReplaces:m,alwaysFormat:v}=e.interpolation;this.escape=void 0!==t?t:ki,this.escapeValue=void 0===n||n,this.useRawValueToEscape=void 0!==r&&r,this.prefix=a?wi(a):i||"{{",this.suffix=o?wi(o):l||"}}",this.formatSeparator=s||",",this.unescapePrefix=u?"":c||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?wi(d):f||wi("$t("),this.nestingSuffix=p?wi(p):h||wi(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==v&&v,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let a,i,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},s=e=>{if(e.indexOf(this.formatSeparator)<0){const a=Qi(t,l,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(a,void 0,n,{...r,...t,interpolationkey:e}):a}const a=e.split(this.formatSeparator),i=a.shift().trim(),o=a.join(this.formatSeparator).trim();return this.format(Qi(t,l,i,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:i})};this.resetRegExp();const u=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,c=r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>Ki(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?Ki(this.escape(e)):Ki(e)}].forEach((t=>{for(o=0;a=t.regex.exec(e);){const n=a[1].trim();if(i=s(n),void 0===i)if("function"===typeof u){const t=u(e,a,r);i=di(t)?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))i="";else{if(c){i=a[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),i=""}else di(i)||this.useRawValueToEscape||(i=pi(i));const l=t.safeValue(i);if(e=e.replace(a[0],l),c?(t.regex.lastIndex+=i.length,t.regex.lastIndex-=a[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}})),e}nest(e,t){let n,r,a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=(e,t)=>{const n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;const r=e.split(new RegExp(`${n}[ ]*{`));let i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);const o=i.match(/'/g),l=i.match(/"/g);(o&&o.length%2===0&&!l||l.length%2!==0)&&(i=i.replace(/'/g,'"'));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(Io){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,Io),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!di(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let s=!1;if(-1!==n[0].indexOf(this.formatSeparator)&&!/{.*}/.test(n[1])){const e=n[1].split(this.formatSeparator).map((e=>e.trim()));n[1]=e.shift(),l=e,s=!0}if(r=t(o.call(this,n[1].trim(),a),a),r&&n[0]===e&&!di(r))return r;di(r)||(r=pi(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),s&&(r=l.reduce(((e,t)=>this.format(e,t,i.lng,{...i,interpolationkey:n[1].trim()})),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const qi=e=>{const t={};return(n,r,a)=>{let i=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(i={...i,[a.interpolationkey]:void 0});const o=r+JSON.stringify(i);let l=t[o];return l||(l=e(Ni(r),a),t[o]=l),l(n)}};class Yi{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Ri.create("formatter"),this.options=e,this.formats={number:qi(((e,t)=>{const n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)})),currency:qi(((e,t)=>{const n=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>n.format(e)})),datetime:qi(((e,t)=>{const n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)})),relativetime:qi(((e,t)=>{const n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||"day")})),list:qi(((e,t)=>{const n=new Intl.ListFormat(e,{...t});return e=>n.format(e)}))},this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=qi(t)}format(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=t.split(this.formatSeparator);if(a.length>1&&a[0].indexOf("(")>1&&a[0].indexOf(")")<0&&a.find((e=>e.indexOf(")")>-1))){const e=a.findIndex((e=>e.indexOf(")")>-1));a[0]=[a[0],...a.splice(1,e)].join(this.formatSeparator)}const i=a.reduce(((e,t)=>{const{formatName:a,formatOptions:i}=(e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const a=r[1].substring(0,r[1].length-1);"currency"===t&&a.indexOf(":")<0?n.currency||(n.currency=a.trim()):"relativetime"===t&&a.indexOf(":")<0?n.range||(n.range=a.trim()):a.split(";").forEach((e=>{if(e){const[t,...r]=e.split(":"),a=r.join(":").trim().replace(/^'+|'+$/g,""),i=t.trim();n[i]||(n[i]=a),"false"===a&&(n[i]=!1),"true"===a&&(n[i]=!0),isNaN(a)||(n[i]=parseInt(a,10))}}))}return{formatName:t,formatOptions:n}})(t);if(this.formats[a]){let t=e;try{const o=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},l=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[a](e,l,{...i,...r,...o})}catch(o){this.logger.warn(o)}return t}return this.logger.warn(`there was no format function for ${a}`),e}),e);return i}}class Gi extends ji{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Ri.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,r.backend,r)}queueLoad(e,t,n,r){const a={},i={},o={},l={};return e.forEach((e=>{let r=!0;t.forEach((t=>{const o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===i[o]&&(i[o]=!0):(this.state[o]=1,r=!1,void 0===i[o]&&(i[o]=!0),void 0===a[o]&&(a[o]=!0),void 0===l[t]&&(l[t]=!0)))})),r||(o[e]=!0)})),(Object.keys(a).length||Object.keys(i).length)&&this.queue.push({pending:i,pendingCount:Object.keys(i).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(a),pending:Object.keys(i),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const r=e.split("|"),a=r[0],i=r[1];t&&this.emit("failedLoading",a,i,t),!t&&n&&this.store.addResourceBundle(a,i,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const o={};this.queue.forEach((n=>{((e,t,n)=>{const{obj:r,k:a}=vi(e,t,Object);r[a]=r[a]||[],r[a].push(n)})(n.loaded,[a],i),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach((e=>{o[e]||(o[e]={});const t=n.loaded[e];t.length&&t.forEach((t=>{void 0===o[e][t]&&(o[e][t]=!0)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((e=>!e.done))}read(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,i=arguments.length>5?arguments[5]:void 0;if(!e.length)return i(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:a,callback:i});this.readingCalls++;const o=(o,l)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}o&&l&&r<this.maxRetries?setTimeout((()=>{this.read.call(this,e,t,n,r+1,2*a,i)}),a):i(o,l)},l=this.backend[n].bind(this.backend);if(2!==l.length)return l(e,t,o);try{const n=l(e,t);n&&"function"===typeof n.then?n.then((e=>o(null,e))).catch(o):o(null,n)}catch(s){o(s)}}prepareLoading(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();di(e)&&(e=this.languageUtils.toResolveHierarchy(e)),di(t)&&(t=[t]);const a=this.queueLoad(e,t,n,r);if(!a.toLoad.length)return a.pending.length||r(),null;a.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.split("|"),r=n[0],a=n[1];this.read(r,a,"read",void 0,void 0,((n,i)=>{n&&this.logger.warn(`${t}loading namespace ${a} for language ${r} failed`,n),!n&&i&&this.logger.log(`${t}loaded namespace ${a} for language ${r}`,i),this.loaded(e,n,i)}))}saveMissing(e,t,n,r,a){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(void 0!==n&&null!==n&&""!==n){if(this.backend&&this.backend.create){const s={...i,isUpdate:a},u=this.backend.create.bind(this.backend);if(u.length<6)try{let a;a=5===u.length?u(e,t,n,r,s):u(e,t,n,r),a&&"function"===typeof a.then?a.then((e=>o(null,e))).catch(o):o(null,a)}catch(l){o(l)}else u(e,t,n,r,o,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}}const Ji=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"===typeof e[1]&&(t=e[1]),di(e[1])&&(t.defaultValue=e[1]),di(e[2])&&(t.tDescription=e[2]),"object"===typeof e[2]||"object"===typeof e[3]){const n=e[3]||e[2];Object.keys(n).forEach((e=>{t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Xi=e=>(di(e.ns)&&(e.ns=[e.ns]),di(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),di(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),Zi=()=>{};class $i extends ji{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var n;if(super(),this.options=Xi(e),this.services={},this.logger=Ri,this.modules={external:[]},n=this,Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((e=>{"function"===typeof n[e]&&(n[e]=n[e].bind(n))})),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"===typeof t&&(n=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&(di(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=Ji();this.options={...r,...this.options,...Xi(t)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator);const a=e=>e?"function"===typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?Ri.init(a(this.modules.logger),this.options):Ri.init(null,this.options),this.modules.formatter?t=this.modules.formatter:"undefined"!==typeof Intl&&(t=Yi);const n=new Fi(this.options);this.store=new Ti(this.options.resources,this.options);const i=this.services;i.logger=Ri,i.resourceStore=this.store,i.languageUtils=n,i.pluralResolver=new Wi(n,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!t||this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format||(i.formatter=a(t),i.formatter.init(i,this.options),this.options.interpolation.format=i.formatter.format.bind(i.formatter)),i.interpolator=new _i(this.options),i.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},i.backendConnector=new Gi(a(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.emit(t,...r)})),this.modules.languageDetector&&(i.languageDetector=a(this.modules.languageDetector),i.languageDetector.init&&i.languageDetector.init(i,this.options.detection,this.options)),this.modules.i18nFormat&&(i.i18nFormat=a(this.modules.i18nFormat),i.i18nFormat.init&&i.i18nFormat.init(this)),this.translator=new Di(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.emit(t,...r)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,n||(n=Zi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const i=fi(),o=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),i.resolve(t),n(e,t)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?o():setTimeout(o,0),i}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Zi;const n=di(e)?e:this.language;if("function"===typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],r=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)}))};if(n)r(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>r(e)))}this.options.preload&&this.options.preload.forEach((e=>r(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)}))}else t(null)}reloadResources(e,t,n){const r=fi();return"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=Zi),this.services.backendConnector.reload(e,t,(e=>{r.resolve(),n(e)})),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Li.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const r=fi();this.emit("languageChanging",e);const a=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(e,i)=>{i?(a(i),this.translator.changeLanguage(i),this.isLanguageChangingTo=void 0,this.emit("languageChanged",i),this.logger.log("languageChanged",i)):this.isLanguageChangingTo=void 0,r.resolve((function(){return n.t(...arguments)})),t&&t(e,(function(){return n.t(...arguments)}))},o=t=>{e||t||!this.services.languageDetector||(t=[]);const n=di(t)?t:this.services.languageUtils.getBestMatchFromCodes(t);n&&(this.language||a(n),this.translator.language||this.translator.changeLanguage(n),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(n)),this.loadResources(n,(e=>{i(e,n)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),r}getFixedT(e,t,n){var r=this;const a=function(e,t){let i;if("object"!==typeof t){for(var o=arguments.length,l=new Array(o>2?o-2:0),s=2;s<o;s++)l[s-2]=arguments[s];i=r.options.overloadTranslationOptionHandler([e,t].concat(l))}else i={...t};i.lng=i.lng||a.lng,i.lngs=i.lngs||a.lngs,i.ns=i.ns||a.ns,""!==i.keyPrefix&&(i.keyPrefix=i.keyPrefix||n||a.keyPrefix);const u=r.options.keySeparator||".";let c;return c=i.keyPrefix&&Array.isArray(e)?e.map((e=>`${i.keyPrefix}${u}${e}`)):i.keyPrefix?`${i.keyPrefix}${u}${e}`:e,r.t(c,i)};return di(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const i=(e,t)=>{const n=this.services.backendConnector.state[`${e}|${t}`];return-1===n||0===n||2===n};if(t.precheck){const e=t.precheck(this,i);if(void 0!==e)return e}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!i(n,e)||r&&!i(a,e)))}loadNamespaces(e,t){const n=fi();return this.options.ns?(di(e)&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=fi();di(e)&&(e=[e]);const r=this.options.preload||[],a=e.filter((e=>r.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e)));return a.length?(this.options.preload=r.concat(a),this.loadResources((e=>{n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=this.services&&this.services.languageUtils||new Fi(Ji());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new $i(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Zi;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},a=new $i(r);void 0===e.debug&&void 0===e.prefix||(a.logger=a.logger.clone(e));return["store","services","language"].forEach((e=>{a[e]=this[e]})),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},n&&(a.store=new Ti(this.store.data,r),a.services.resourceStore=a.store),a.translator=new Di(a.services,r),a.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a.emit(e,...n)})),a.init(r,t),a.translator.options=r,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const eo=$i.createInstance();eo.createInstance=$i.createInstance;eo.createInstance,eo.dir,eo.init,eo.loadResources,eo.reloadResources,eo.use,eo.changeLanguage,eo.getFixedT,eo.t,eo.exists,eo.setDefaultNamespace,eo.hasLoadedNamespace,eo.loadNamespaces,eo.loadLanguages;eo.use(Ar).init({resources:{en:{translation:{events_title:"Upcoming Events",events_subtitle:"Discover exciting upcoming events on our site",date:"Date",location:"Location",not_found:"Event not found",homepage:{title:"Discover upcoming events",subtitle:"Discover the latest news and events on our site",explore:"Explore",partnershipTitle:"Our Partners"},footer:{title:"Events",desc:"Discover upcoming events near you.",contact:"Contact us"},aboutUs:{title:"About us",presidentsTitle:"Meet our team",presidentsText:"Co-president",missionTitle:"Our Mission",missionText:"Our mission is simple yet profound: to offer moments of happiness to children living in vulnerable situations by organizing festive, fun, and accessible events. We firmly believe that every child deserves to smile and experience joy, at least for one day.",valuesTitle:"Our Values",valuesText:"We believe in compassion, community, and making the world a better place through charitable actions.",desc:"We are Coeurs Festifs, a community project founded by two medical students. Our mission is simple: to bring joy, laughter, and unforgettable memories to children in vulnerable situations, for one festive, fun-filled, magical day. We believe that every child deserves to smile and be fully included. That\u2019s why we organize accessible and engaging activities, guided by values that are deeply important to us: compassion, community, and inclusion. By creating these moments of happiness, we hope to make a small positive difference in their lives\u2026 one smile at a time \ud83c\udf1f!"},contactUs:{title:"Contact us",subtitle:"For any questions, feel free to contact us here.",invalidEmail:"Invalid email address",successMessage:"Your message has been sent successfully!",errorMessage:"An error occurred. Please try again.",form:{name:"Name",email:"Email",message:"Message",submit:"Submit",sending:"Sending..."}},notFound:{title:"404",subtitle:"Page not found"},events:{title:"Events",subtitle:"Discover exciting upcoming events on our site",noEventsMessage:"No events scheduled at the moment.",viewDetails:"View details",partner:"Partners",sponsor:"Sponsors",collaboration:" In collaboration with ",Footer:{title:"Stay connected !",desc:"Many exciting events are in the works! Stay connected and follow us on our social media to not miss anything. We are also open to your ideas and project proposals for future partnerships. Feel free to contact us \u2014 we would be delighted to collaborate with you! \ud83d\ude0a",contact:"Contact us"},events:[{id:1,title:"ChocoChaud and Snowball Fight",date:"Saturday, January 11, 2025",location:"1855, rue D\xe9z\xe9ry at R\xe9pit Providence",description:"Parents, children and people from the neighborhood, come play games and drink delicious hot chocolate."},{id:2,title:"Big Hearts, Little Teachers",date:"Thursday, April 10, 2025",location:"Jean-Brillant Pavilion & Humanities and Social Sciences Library, Universit\xe9 de Montr\xe9al",description:"A special event, in collaboration with the Fondation du Dr Julien, will highlight young people who presented a law course at the Universit\xe9 de Montr\xe9al. The day will include an exclusive visit to the Humanities and Social Sciences Library, fun activities, and surprises to celebrate their commitment."},{id:3,title:"Annual Picnic of R\xe9pit Providence (30th Anniversary of the Organization)",date:"Saturday, August 23, 2025",location:"Sarah-Maxwell Park",description:"Coeurs Festifs participated as a volunteer"},{id:4,title:"PRISMART",date:"Saturday, September 6 from 2:00 PM to 7:00 PM",location:"Martin Luther King Park",description:"Coeurs Festifs will have a booth. Come visit us in large numbers!"}]},navBar:{home:"Home",about:"About",contact:"Contact",events:"Events"}}},fr:{translation:{events_title:"\xc9v\xe9nements",events_subtitle:"D\xe9couvrez les \xe9v\xe9nements passionnants \xe0 venir sur notre site",date:"Date",location:"Lieu",not_found:"\xc9v\xe9nement non trouv\xe9",homepage:{title:"D\xe9couvrez les \xe9v\xe9nements \xe0 venir",subtitle:"D\xe9couvrez les derni\xe8res actualit\xe9s et \xe9v\xe9nements sur notre site",explore:"Explorer",partnershipTitle:"Nos Partenaires"},aboutUs:{title:"\xc0 propos de nous",presidentsTitle:"D\xe9couvrez notre \xe9quipe",presidentsText:"Co-pr\xe9sidente",missionTitle:"Notre Mission",missionText:"Notre mission est simple et profonde : offrir des moments de bonheur aux enfants vivant en situation de vuln\xe9rabilit\xe9, en organisant des \xe9v\xe9nements festifs, amusants et accessibles. Nous croyons fermement que chaque enfant m\xe9rite de sourire et de vivre des moments de bonheur, au moins l\u2019espace d\u2019une journ\xe9e.",valuesTitle:"Nos Valeurs",valuesText:"Nous croyons en la compassion, la communaut\xe9 et \xe0 rendre le monde meilleur \xe0 travers des actions caritatives.",desc:" Nous sommes C\u0153urs Festifs, un projet communautaire fond\xe9 par deux \xe9tudiantes en m\xe9decine. Notre mission est simple : apporter de la joie, des rires et des souvenirs inoubliables aux enfants en situation de vuln\xe9rabilit\xe9, le temps d\u2019une journ\xe9e festive, amusante et remplie de magie. Nous croyons que chaque enfant m\xe9rite de sourire et d\u2019\xeatre pleinement inclus. C\u2019est pourquoi nous organisons des activit\xe9s accessibles et engageantes, en mettant au c\u0153ur de nos actions des valeurs qui nous tiennent profond\xe9ment \xe0 c\u0153ur : la compassion, la communaut\xe9 et l\u2019inclusion. En cr\xe9ant ces moments de bonheur, nous esp\xe9rons avoir un petit impact positif dans leur vie...un sourire \xe0 la fois\ud83c\udf1f!"},footer:{title:"\xc9v\xe9nements",desc:"D\xe9couvrez les \xe9v\xe9nements \xe0 venir pr\xe8s de chez vous.",contact:"Contactez-nous"},contactUs:{title:"Contactez-nous",subtitle:"Pour toute question, n'h\xe9sitez pas \xe0 nous contacter ici.",invalidEmail:"Adresse courriel invalide",successMessage:"Votre message a \xe9t\xe9 envoy\xe9 avec succ\xe8s !",errorMessage:"Une erreur s'est produite. Veuillez r\xe9essayer.",form:{name:"Nom",email:"Courriel",message:"Message",submit:"Soumettre",sending:"Envoi en cours..."}},notFound:{title:"404",subtitle:"Page non trouv\xe9e"},events:{title:"\xc9v\xe9nements",subtitle:"D\xe9couvrez les \xe9v\xe9nements passionnants \xe0 venir sur notre site",noEventsMessage:"Aucun \xe9v\xe9nement pr\xe9vu pour le moment.",collaboration:" En collaboration avec ",partner:"Partenaires",sponsor:"Commanditaires",viewDetails:"Voir les d\xe9tails",Footer:{title:"Restez connect\xe9s !",desc:"De nombreux \xe9v\xe9nements excitants sont en pr\xe9paration ! Restez connect\xe9s et suivez-nous sur nos r\xe9seaux sociaux pour ne rien manquer. Nous sommes \xe9galement ouverts \xe0 vos id\xe9es et propositions de projets pour de futurs partenariats. N'h\xe9sitez pas \xe0 nous contacter \u2014 nous serions ravis de collaborer avec vous ! \ud83d\ude0a",contact:"Contactez-nous"},events:[{id:1,title:"ChocoChaud et boules de neige ",date:"Samedi 11 janvier 2025",location:"1855, rue D\xe9z\xe9ry chez R\xe9pit Providence",description:"Parents, enfants et gens du quartier, venez jouer \xe0 des jeux et boire un d\xe9licieux chocolat chaud. "},{id:2,title:"Grands c\u0153urs, petits professeurs",date:"Jeudi 10 avril 2025",location:"Pavillon Jean-Brillant & Biblioth\xe8que des lettres et sciences humaines, Universit\xe9 de Montr\xe9al",description:"Un \xe9v\xe9nement sp\xe9cial, en collaboration avec la Fondation du Dr. Julien, mettra \xe0 l\u2019honneur des jeunes ayant pr\xe9sent\xe9 un cours en droit \xe0 l\u2019Universit\xe9 de Montr\xe9al. Au programme : visite exclusive de la Biblioth\xe8que des Sciences et Lettres Humaines, activit\xe9s ludiques et surprises pour c\xe9l\xe9brer leur engagement."},{id:3,title:"Pique-nique annuel de R\xe9pit Providence (30 ans de l\u2019organisme)",date:"Samedi 23 ao\xfbt 2025",location:"Sarah-Maxwell Park",description:"Coeurs Festifs a particip\xe9 comme b\xe9n\xe9vole"},{id:4,title:"PRISMART",date:"Samedi 6 septembre de 14h00 \xe0 19h00",location:"Parc Martin Luther King",description:"Coeurs Festifs aura un kiosque. Venez nous voir en grand nombre!"}]},navBar:{home:"Accueil",about:"\xc0 propos",contact:"Contact",events:"\xc9v\xe9nements"}}}},lng:"fr",fallbackLng:"fr",interpolation:{escapeValue:!1}});const to=eo,no=()=>{const[e,n]=(0,t.useState)(to.language);return(0,t.useEffect)((()=>{const e=()=>{n(to.language)};return console.log("useForceUpdateOnLanguageChange",to.language),to.on("languageChanged",e),()=>{to.off("languageChanged",e)}}),[]),e},ro=cr.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: white;
  color: #333;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 20px;
  }
`,ao=cr.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  margin: 0;

  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 1.2rem; /* Smaller font size for phones */
  }
`,io=cr.div`
  display: flex;
  width: 600px;
  gap: 30px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100% - 70px);
    background-color: white;
    transform: ${e=>{let{isOpen:t}=e;return t?"translateX(0)":"translateX(-100%)"}};
    transition: transform 0.3s ease-in-out;
    padding-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,oo=cr.button`
  background: none;
  border: none;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding: 5px 0;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #e63946;
  }

  &.active {
    color: #e63946;
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: #e63946;
  }
`,lo=cr.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  width: 20%;
  padding-right: 50px;
  @media (max-width: 768px) {
    display: block;
  }
`,so=cr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100px;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
`,uo=cr.button`
  background: ${e=>{let{isActive:t}=e;return t?"#e63946":"transparent"}};
  border: none;
  color: ${e=>{let{isActive:t}=e;return t?"#fff":"#333"}};
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63946;
    color: #fff;
  }
`,co=()=>{const e=ee(),n=Z(),{t:r,i18n:a}=Pr(),[i,o]=(0,t.useState)(!1),l=no(),s=t=>{e(t),o(!1)},u=e=>n.pathname===e,c=e=>{a.changeLanguage(e)};return(0,jr.jsxs)(ro,{children:[(0,jr.jsx)(ao,{onClick:()=>s("/coeur-festifs"),children:"Coeurs Festifs"}),(0,jr.jsx)(lo,{onClick:()=>o(!i),children:i?(0,jr.jsx)(Ea,{}):(0,jr.jsx)(ya,{})}),(0,jr.jsxs)(io,{isOpen:i,children:[(0,jr.jsx)(oo,{className:u("/coeur-festifs")?"active":"",onClick:()=>s("/coeur-festifs"),children:r("navBar.home")}),(0,jr.jsx)(oo,{className:u("/coeur-festifs/about")?"active":"",onClick:()=>s("/coeur-festifs/about"),children:r("navBar.about")}),(0,jr.jsx)(oo,{className:u("/coeur-festifs/events")?"active":"",onClick:()=>s("/coeur-festifs/events"),children:r("navBar.events")}),(0,jr.jsxs)(so,{children:[(0,jr.jsx)(uo,{isActive:"en"===l,onClick:()=>c("en"),children:"EN"}),(0,jr.jsx)(uo,{isActive:"fr"===l,onClick:()=>c("fr"),children:"FR"})]})]})]})},fo=cr.footer`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: white;
  color: black;
  font-size: 1rem;
  border-top: 1px solid #e0e0e0;
  height: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,po=cr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`,ho=cr.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`,go=cr.p`
  margin: 5px 0;
  font-size: 0.875rem;
  text-align: left;
`,mo=cr.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`,vo=cr.a`
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;
  color: #db2f2f;

  &:hover {
    transform: scale(1.1);
  }
`,bo=cr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,yo=()=>{const{t:e}=Pr();return(0,jr.jsxs)(fo,{children:[(0,jr.jsxs)(po,{children:[(0,jr.jsx)(ho,{children:e("footer.title")}),(0,jr.jsx)(go,{children:e("footer.desc")}),(0,jr.jsxs)(mo,{children:[(0,jr.jsx)(vo,{href:"https://www.linkedin.com/in/c%C5%93urs-festifs-39b901360/",target:"_blank","aria-label":"Linkedin",children:(0,jr.jsx)(ba,{})}),(0,jr.jsx)(vo,{href:"https://www.facebook.com/profile.php?id=61571443886637",target:"_blank","aria-label":"Facebook",children:(0,jr.jsx)(ma,{})}),(0,jr.jsx)(vo,{href:"https://www.instagram.com/coeurs.festifs?igsh=aTc3eDN5a2Q2dXYw",target:"_blank","aria-label":"Instagram",children:(0,jr.jsx)(va,{})})]})]}),(0,jr.jsxs)(po,{children:[(0,jr.jsx)(ho,{children:e("footer.contact")}),(0,jr.jsxs)(bo,{children:[(0,jr.jsx)(vo,{href:"mailto:coeurs.festifs@gmail.com",target:"_blank","aria-label":"Email",children:(0,jr.jsx)(wa,{})}),(0,jr.jsx)(go,{children:"coeurs.festifs@gmail.com"})]})]})]})},xo=dr`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,wo=dr`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,So=dr`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,ko=cr.div`
  padding: 40px 20px;
  background: linear-gradient(135deg, rgb(255, 224, 250), rgb(159, 181, 242));
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,Eo=cr.div`
  max-width: 1000px;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    gap: 30px;
  }
`,Ao=cr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${xo} 0.8s ease-out;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`,Co=cr.h1`
  font-size: 2.8rem;
  background: linear-gradient(135deg, rgb(225, 123, 132), rgb(159, 181, 242));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
  margin: 0 0 15px 0;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`,No=cr.p`
  font-size: 1.1rem;
  color: #555;
  margin: 0 0 30px 0;
  line-height: 1.7;
  max-width: 450px;
  text-align: left;
  animation: ${xo} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`,Oo=cr.div`
  font-size: 1rem;
  color: #444;
  margin-top: 30px;
  text-align: left;
  width: 100%;
  // background: rgba(255, 255, 255, 0.6);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid rgb(225, 123, 132);
  animation: ${So} 0.8s ease-out 0.6s both;

  p {
    margin: 12px 0;
    font-weight: 600;
    display: flex;
    align-items: center;

    strong {
      color: rgb(225, 123, 132);
      min-width: 90px;
      margin-right: 10px;
    }

    span {
      font-weight: normal;
      color: #666;
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    p {
      flex-direction: column;
      gap: 5px;

      strong {
        min-width: auto;
        margin-right: 0;
      }
    }
  }
`,Po=cr.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${wo} 0.8s ease-out;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease-in-out;
    border: 3px solid rgba(255, 255, 255, 0.8);

    &:hover {
      transform: scale(1.03) rotate(1deg);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;

    img {
      max-width: 400px;
    }
  }
`,Ro=cr.div`
  margin: 20px 0;
  width: 100%;

  .section-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: rgb(225, 123, 132);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    text-align: start;
    padding-bottom: 8px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      border-radius: 1px;
    }

    @media (max-width: 768px) {
      text-align: center;

      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .items-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      justify-content: center;
    }

    li {
      background: linear-gradient(
        135deg,
        rgba(225, 123, 132, 0.1),
        rgba(159, 181, 242, 0.1)
      );
      color: rgb(225, 123, 132);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      border: 2px solid rgba(225, 123, 132, 0.3);
      transition: all 0.3s ease;
      cursor: default;

      &:hover {
        background: linear-gradient(
          135deg,
          rgba(225, 123, 132, 0.2),
          rgba(159, 181, 242, 0.2)
        );
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(225, 123, 132, 0.3);
        border-color: rgb(225, 123, 132);
      }
    }
  }
`,jo=cr.div`
  margin: 5px 0;
  width: 100%;
  .images-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    flex-wrap: wrap;
    gap: 25px;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 20px;
    }
  }

  .partner-image {
    width: 100px;
    height: 80px;
    object-fit: contain;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    margin-right:10px;
    padding: 10px;
    border: 2px solid rgba(159, 181, 242, 0.2);
    transition: all 0.3s ease;
    animation: ${So} 0.6s ease-out;

    &:hover {
      transform: scale(1.05);
      border-color: rgb(159, 181, 242);
      box-shadow: 0 8px 20px rgba(159, 181, 242, 0.3);
      background: rgba(255, 255, 255, 1);
    }
  }
`,To=cr.div`
  text-align: center;
  padding: 60px 20px;

  h1 {
    font-size: 2rem;
    color: rgb(225, 123, 132);
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
  }
`,Lo=()=>{const{id:e}=function(){let{matches:e}=t.useContext(G),n=e[e.length-1];return n?n.params:{}}(),n=aa().find((t=>t.id===e)),{t:r}=Pr();if(!n)return(0,jr.jsx)(ko,{children:(0,jr.jsxs)(To,{children:[(0,jr.jsx)("h1",{children:r("events.notFound")||"Event not found"}),(0,jr.jsx)("p",{children:r("events.notFoundDescription")||"The event you're looking for doesn't exist or has been removed."})]})});const a=(e,t)=>e&&0!==e.length?(0,jr.jsxs)(Ro,{children:[(0,jr.jsx)("div",{className:"section-title",children:r(t)}),(0,jr.jsx)("ul",{className:"items-list",role:"list",children:e.map(((e,n)=>(0,jr.jsx)("li",{role:"listitem",children:e},`${t}-${n}`)))})]}):null,i=(e,t)=>e&&0!==e.length?(0,jr.jsx)(jo,{children:(0,jr.jsx)("div",{children:e.map(((e,n)=>(0,jr.jsx)("img",{src:e,alt:`${t} ${n+1}`,className:"partner-image",onError:e=>{e.target.style.display="none"}},`${t}-img-${n}`)))})}):null;return(0,jr.jsx)(ko,{children:(0,jr.jsxs)(Eo,{children:[(0,jr.jsxs)(Ao,{children:[(0,jr.jsx)(Co,{children:n.title}),(0,jr.jsx)(No,{children:n.description}),a(n.partner,"events.partner"),a(n.Sponsor,"events.sponsor"),(0,jr.jsxs)("div",{children:[i(n.partnerImg,"events.partnerImages"),i(n.SponsorImg,"events.sponsorImages")]}),(0,jr.jsxs)(Oo,{children:[(0,jr.jsxs)("p",{children:[(0,jr.jsxs)("strong",{children:[r("date")||"Date",":"]}),(0,jr.jsx)("span",{children:n.date})]}),(0,jr.jsxs)("p",{children:[(0,jr.jsxs)("strong",{children:[r("location")||"Location",":"]}),(0,jr.jsx)("span",{children:n.location})]})]})]}),(0,jr.jsx)(Po,{children:(0,jr.jsx)("img",{style:{width:"100%",height:"100%"},src:n.image,alt:n.title})})]})})};const zo=function(){return(0,jr.jsx)(ye,{children:(0,jr.jsxs)("div",{className:"App",children:[(0,jr.jsx)(co,{}),(0,jr.jsxs)(me,{children:[(0,jr.jsx)(he,{path:"/coeur-festifs",element:(0,jr.jsx)(Gr,{})}),(0,jr.jsx)(he,{path:"/coeur-festifs/about",element:(0,jr.jsx)(ci,{})}),(0,jr.jsx)(he,{path:"/coeur-festifs/events",element:(0,jr.jsx)(Ba,{})}),(0,jr.jsx)(he,{path:"/coeur-festifs/event/:id",element:(0,jr.jsx)(Lo,{})}),(0,jr.jsx)(he,{path:"*",element:(0,jr.jsx)(pe,{to:"/coeur-festifs",replace:!0})})]}),(0,jr.jsx)(yo,{})]})})},Do=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)}))};a.createRoot(document.getElementById("root")).render((0,jr.jsx)(t.StrictMode,{children:(0,jr.jsx)(zo,{})})),Do()})()})();
//# sourceMappingURL=main.8d179e77.js.map