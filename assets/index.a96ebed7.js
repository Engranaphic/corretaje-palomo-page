(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Tp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Re={},Vs=[],_n=()=>{},$S=()=>!1,Bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sp=t=>t.startsWith("onUpdate:"),it=Object.assign,kp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qS=Object.prototype.hasOwnProperty,me=(t,e)=>qS.call(t,e),ne=Array.isArray,Bs=t=>bc(t)==="[object Map]",$l=t=>bc(t)==="[object Set]",hy=t=>bc(t)==="[object Date]",ce=t=>typeof t=="function",tt=t=>typeof t=="string",Gr=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Q_=t=>(Ae(t)||ce(t))&&ce(t.then)&&ce(t.catch),X_=Object.prototype.toString,bc=t=>X_.call(t),jS=t=>bc(t).slice(8,-1),J_=t=>bc(t)==="[object Object]",Ap=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ou=Tp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ql=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zS=/-(\w)/g,Wn=ql(t=>t.replace(zS,(e,n)=>n?n.toUpperCase():"")),HS=/\B([A-Z])/g,Io=ql(t=>t.replace(HS,"-$1").toLowerCase()),jl=ql(t=>t.charAt(0).toUpperCase()+t.slice(1)),sd=ql(t=>t?`on${jl(t)}`:""),Xi=(t,e)=>!Object.is(t,e),Du=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ju=t=>{const e=parseFloat(t);return isNaN(e)?t:e},KS=t=>{const e=tt(t)?Number(t):NaN;return isNaN(e)?t:e};let dy;const Yd=()=>dy||(dy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cp(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=tt(r)?QS(r):Cp(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(tt(t)||Ae(t))return t}const GS=/;(?![^(]*\))/g,WS=/:([^]+)/,YS=/\/\*[^]*?\*\//g;function QS(t){const e={};return t.replace(YS,"").split(GS).forEach(n=>{if(n){const r=n.split(WS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xp(t){let e="";if(tt(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=xp(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const XS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",JS=Tp(XS);function Z_(t){return!!t||t===""}function ZS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=zl(t[r],e[r]);return n}function zl(t,e){if(t===e)return!0;let n=hy(t),r=hy(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gr(t),r=Gr(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?ZS(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!zl(t[o],e[o]))return!1}}return String(t)===String(e)}function ek(t,e){return t.findIndex(n=>zl(n,e))}const l9=t=>tt(t)?t:t==null?"":ne(t)||Ae(t)&&(t.toString===X_||!ce(t.toString))?JSON.stringify(t,eb,2):String(t),eb=(t,e)=>e&&e.__v_isRef?eb(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[od(r,s)+" =>"]=i,n),{})}:$l(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>od(n))}:Gr(e)?od(e):Ae(e)&&!ne(e)&&!J_(e)?String(e):e,od=(t,e="")=>{var n;return Gr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let fn;class tk{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=fn;try{return fn=this,e()}finally{fn=n}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nk(t,e=fn){e&&e.active&&e.effects.push(t)}function rk(){return fn}const Rp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},tb=t=>(t.w&Wr)>0,nb=t=>(t.n&Wr)>0,ik=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wr},sk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];tb(i)&&!nb(i)?i.delete(t):e[n++]=i,i.w&=~Wr,i.n&=~Wr}e.length=n}},Qd=new WeakMap;let ia=0,Wr=1;const Xd=30;let mn;const ji=Symbol(""),Jd=Symbol("");class Np{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nk(this,r)}run(){if(!this.active)return this.fn();let e=mn,n=zr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mn,mn=this,zr=!0,Wr=1<<++ia,ia<=Xd?ik(this):fy(this),this.fn()}finally{ia<=Xd&&sk(this),Wr=1<<--ia,mn=this.parent,zr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mn===this?this.deferStop=!0:this.active&&(fy(this),this.onStop&&this.onStop(),this.active=!1)}}function fy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zr=!0;const rb=[];function Eo(){rb.push(zr),zr=!1}function To(){const t=rb.pop();zr=t===void 0?!0:t}function Wt(t,e,n){if(zr&&mn){let r=Qd.get(t);r||Qd.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Rp()),ib(i)}}function ib(t,e){let n=!1;ia<=Xd?nb(t)||(t.n|=Wr,n=!tb(t)):n=!t.has(mn),n&&(t.add(mn),mn.deps.push(t))}function ar(t,e,n,r,i,s){const o=Qd.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!Gr(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Ap(n)&&a.push(o.get("length")):(a.push(o.get(ji)),Bs(t)&&a.push(o.get(Jd)));break;case"delete":ne(t)||(a.push(o.get(ji)),Bs(t)&&a.push(o.get(Jd)));break;case"set":Bs(t)&&a.push(o.get(ji));break}if(a.length===1)a[0]&&Zd(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Zd(Rp(c))}}function Zd(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&py(r);for(const r of n)r.computed||py(r)}function py(t,e){(t!==mn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ok=Tp("__proto__,__v_isRef,__isVue"),sb=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gr)),my=ak();function ak(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ve(this);for(let s=0,o=this.length;s<o;s++)Wt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ve)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Eo();const r=ve(this)[e].apply(this,n);return To(),r}}),t}function ck(t){const e=ve(this);return Wt(e,"has",t),e.hasOwnProperty(t)}class ob{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?bk:lb:s?ub:cb).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ne(e);if(!i){if(o&&me(my,n))return Reflect.get(my,n,r);if(n==="hasOwnProperty")return ck}const a=Reflect.get(e,n,r);return(Gr(n)?sb.has(n):ok(n))||(i||Wt(e,"get",n),s)?a:kt(a)?o&&Ap(n)?a:a.value:Ae(a)?i?db(a):Kl(a):a}}class ab extends ob{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(to(s)&&kt(s)&&!kt(r))return!1;if(!this._shallow&&(!Zu(r)&&!to(r)&&(s=ve(s),r=ve(r)),!ne(e)&&kt(s)&&!kt(r)))return s.value=r,!0;const o=ne(e)&&Ap(n)?Number(n)<e.length:me(e,n),a=Reflect.set(e,n,r,i);return e===ve(i)&&(o?Xi(r,s)&&ar(e,"set",n,r):ar(e,"add",n,r)),a}deleteProperty(e,n){const r=me(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&ar(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Gr(n)||!sb.has(n))&&Wt(e,"has",n),r}ownKeys(e){return Wt(e,"iterate",ne(e)?"length":ji),Reflect.ownKeys(e)}}class uk extends ob{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const lk=new ab,hk=new uk,dk=new ab(!0),Pp=t=>t,Hl=t=>Reflect.getPrototypeOf(t);function tu(t,e,n=!1,r=!1){t=t.__v_raw;const i=ve(t),s=ve(e);n||(Xi(e,s)&&Wt(i,"get",e),Wt(i,"get",s));const{has:o}=Hl(i),a=r?Pp:n?Lp:Da;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function nu(t,e=!1){const n=this.__v_raw,r=ve(n),i=ve(t);return e||(Xi(t,i)&&Wt(r,"has",t),Wt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ru(t,e=!1){return t=t.__v_raw,!e&&Wt(ve(t),"iterate",ji),Reflect.get(t,"size",t)}function gy(t){t=ve(t);const e=ve(this);return Hl(e).has.call(e,t)||(e.add(t),ar(e,"add",t,t)),this}function yy(t,e){e=ve(e);const n=ve(this),{has:r,get:i}=Hl(n);let s=r.call(n,t);s||(t=ve(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Xi(e,o)&&ar(n,"set",t,e):ar(n,"add",t,e),this}function vy(t){const e=ve(this),{has:n,get:r}=Hl(e);let i=n.call(e,t);i||(t=ve(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&ar(e,"delete",t,void 0),s}function wy(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&ar(t,"clear",void 0,void 0),n}function iu(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ve(o),c=e?Pp:t?Lp:Da;return!t&&Wt(a,"iterate",ji),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function su(t,e,n){return function(...r){const i=this.__v_raw,s=ve(i),o=Bs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?Pp:e?Lp:Da;return!e&&Wt(s,"iterate",c?Jd:ji),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Cr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fk(){const t={get(s){return tu(this,s)},get size(){return ru(this)},has:nu,add:gy,set:yy,delete:vy,clear:wy,forEach:iu(!1,!1)},e={get(s){return tu(this,s,!1,!0)},get size(){return ru(this)},has:nu,add:gy,set:yy,delete:vy,clear:wy,forEach:iu(!1,!0)},n={get(s){return tu(this,s,!0)},get size(){return ru(this,!0)},has(s){return nu.call(this,s,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:iu(!0,!1)},r={get(s){return tu(this,s,!0,!0)},get size(){return ru(this,!0)},has(s){return nu.call(this,s,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:iu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=su(s,!1,!1),n[s]=su(s,!0,!1),e[s]=su(s,!1,!0),r[s]=su(s,!0,!0)}),[t,n,e,r]}const[pk,mk,gk,yk]=fk();function Op(t,e){const n=e?t?yk:gk:t?mk:pk;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(me(n,i)&&i in r?n:r,i,s)}const vk={get:Op(!1,!1)},wk={get:Op(!1,!0)},_k={get:Op(!0,!1)},cb=new WeakMap,ub=new WeakMap,lb=new WeakMap,bk=new WeakMap;function Ik(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ek(t){return t.__v_skip||!Object.isExtensible(t)?0:Ik(jS(t))}function Kl(t){return to(t)?t:Dp(t,!1,lk,vk,cb)}function hb(t){return Dp(t,!1,dk,wk,ub)}function db(t){return Dp(t,!0,hk,_k,lb)}function Dp(t,e,n,r,i){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Ek(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function $s(t){return to(t)?$s(t.__v_raw):!!(t&&t.__v_isReactive)}function to(t){return!!(t&&t.__v_isReadonly)}function Zu(t){return!!(t&&t.__v_isShallow)}function fb(t){return $s(t)||to(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function pb(t){return Xu(t,"__v_skip",!0),t}const Da=t=>Ae(t)?Kl(t):t,Lp=t=>Ae(t)?db(t):t;function mb(t){zr&&mn&&(t=ve(t),ib(t.dep||(t.dep=Rp())))}function gb(t,e){t=ve(t);const n=t.dep;n&&Zd(n)}function kt(t){return!!(t&&t.__v_isRef===!0)}function Tk(t){return yb(t,!1)}function Sk(t){return yb(t,!0)}function yb(t,e){return kt(t)?t:new kk(t,e)}class kk{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:Da(e)}get value(){return mb(this),this._value}set value(e){const n=this.__v_isShallow||Zu(e)||to(e);e=n?e:ve(e),Xi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Da(e),gb(this))}}function qs(t){return kt(t)?t.value:t}const Ak={get:(t,e,n)=>qs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return kt(i)&&!kt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function vb(t){return $s(t)?t:new Proxy(t,Ak)}class Ck{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Np(e,()=>{this._dirty||(this._dirty=!0,gb(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ve(this);return mb(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xk(t,e,n=!1){let r,i;const s=ce(t);return s?(r=t,i=_n):(r=t.get,i=t.set),new Ck(r,i,s||!i,n)}function Hr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Gl(s,e,n)}return i}function cn(t,e,n,r){if(ce(t)){const s=Hr(t,e,n,r);return s&&Q_(s)&&s.catch(o=>{Gl(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(cn(t[s],e,n,r));return i}function Gl(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Hr(c,null,10,[t,o,a]);return}}Rk(t,n,i,r)}function Rk(t,e,n,r=!0){console.error(t)}let La=!1,ef=!1;const St=[];let Nn=0;const js=[];let tr=null,ki=0;const wb=Promise.resolve();let Mp=null;function _b(t){const e=Mp||wb;return t?e.then(this?t.bind(this):t):e}function Nk(t){let e=Nn+1,n=St.length;for(;e<n;){const r=e+n>>>1,i=St[r],s=Ma(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function Fp(t){(!St.length||!St.includes(t,La&&t.allowRecurse?Nn+1:Nn))&&(t.id==null?St.push(t):St.splice(Nk(t.id),0,t),bb())}function bb(){!La&&!ef&&(ef=!0,Mp=wb.then(Eb))}function Pk(t){const e=St.indexOf(t);e>Nn&&St.splice(e,1)}function Ok(t){ne(t)?js.push(...t):(!tr||!tr.includes(t,t.allowRecurse?ki+1:ki))&&js.push(t),bb()}function _y(t,e,n=La?Nn+1:0){for(;n<St.length;n++){const r=St[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r()}}}function Ib(t){if(js.length){const e=[...new Set(js)];if(js.length=0,tr){tr.push(...e);return}for(tr=e,tr.sort((n,r)=>Ma(n)-Ma(r)),ki=0;ki<tr.length;ki++)tr[ki]();tr=null,ki=0}}const Ma=t=>t.id==null?1/0:t.id,Dk=(t,e)=>{const n=Ma(t)-Ma(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Eb(t){ef=!1,La=!0,St.sort(Dk);const e=_n;try{for(Nn=0;Nn<St.length;Nn++){const n=St[Nn];n&&n.active!==!1&&Hr(n,null,14)}}finally{Nn=0,St.length=0,Ib(),La=!1,Mp=null,(St.length||js.length)&&Eb()}}function Lk(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Re;d&&(i=n.map(f=>tt(f)?f.trim():f)),h&&(i=n.map(Ju))}let a,c=r[a=sd(e)]||r[a=sd(Wn(e))];!c&&s&&(c=r[a=sd(Io(e))]),c&&cn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,cn(u,t,6,i)}}function Tb(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ce(t)){const c=u=>{const l=Tb(u,e,!0);l&&(a=!0,it(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ae(t)&&r.set(t,null),null):(ne(s)?s.forEach(c=>o[c]=null):it(o,s),Ae(t)&&r.set(t,o),o)}function Wl(t,e){return!t||!Bl(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Io(e))||me(t,e))}let Jt=null,Yl=null;function el(t){const e=Jt;return Jt=t,Yl=t&&t.type.__scopeId||null,e}function h9(t){Yl=t}function d9(){Yl=null}function Mk(t,e=Jt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Py(-1);const s=el(e);let o;try{o=t(...i)}finally{el(s),r._d&&Py(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ad(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let I,w;const b=el(t);try{if(n.shapeFlag&4){const S=i||r,M=S;I=Rn(l.call(M,S,h,s,f,d,g)),w=c}else{const S=e;I=Rn(S.length>1?S(s,{attrs:c,slots:a,emit:u}):S(s,null)),w=e.props?c:Fk(c)}}catch(S){ya.length=0,Gl(S,t,1),I=zt(bn)}let T=I;if(w&&y!==!1){const S=Object.keys(w),{shapeFlag:M}=T;S.length&&M&7&&(o&&S.some(Sp)&&(w=Uk(w,o)),T=Yr(T,w))}return n.dirs&&(T=Yr(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),I=T,el(b),I}const Fk=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bl(n))&&((e||(e={}))[n]=t[n]);return e},Uk=(t,e)=>{const n={};for(const r in t)(!Sp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Vk(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?by(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Wl(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?by(r,o,u):!0:!!o;return!1}function by(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Wl(n,s))return!0}return!1}function Bk({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sb="components";function $k(t,e){return jk(Sb,t,!0,e)||t}const qk=Symbol.for("v-ndc");function jk(t,e,n=!0,r=!1){const i=Jt||lt;if(i){const s=i.type;if(t===Sb){const a=FA(s,!1);if(a&&(a===e||a===Wn(e)||a===jl(Wn(e))))return s}const o=Iy(i[t]||s[t],e)||Iy(i.appContext[t],e);return!o&&r?s:o}}function Iy(t,e){return t&&(t[e]||t[Wn(e)]||t[jl(Wn(e))])}const zk=t=>t.__isSuspense;function Hk(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Ok(t)}function Kk(t,e){return Up(t,null,{flush:"post"})}const ou={};function pa(t,e,n){return Up(t,e,n)}function Up(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Re){var a;const c=rk()===((a=lt)==null?void 0:a.scope)?lt:null;let u,l=!1,h=!1;if(kt(t)?(u=()=>t.value,l=Zu(t)):$s(t)?(u=()=>t,r=!0):ne(t)?(h=!0,l=t.some(S=>$s(S)||Zu(S)),u=()=>t.map(S=>{if(kt(S))return S.value;if($s(S))return Li(S);if(ce(S))return Hr(S,c,2)})):ce(t)?e?u=()=>Hr(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),cn(t,c,3,[f])}:u=_n,e&&r){const S=u;u=()=>Li(S())}let d,f=S=>{d=b.onStop=()=>{Hr(S,c,4),d=b.onStop=void 0}},g;if(Ua)if(f=_n,e?n&&cn(e,c,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const S=BA();g=S.__watcherHandles||(S.__watcherHandles=[])}else return _n;let y=h?new Array(t.length).fill(ou):ou;const I=()=>{if(!!b.active)if(e){const S=b.run();(r||l||(h?S.some((M,j)=>Xi(M,y[j])):Xi(S,y)))&&(d&&d(),cn(e,c,3,[S,y===ou?void 0:h&&y[0]===ou?[]:y,f]),y=S)}else b.run()};I.allowRecurse=!!e;let w;i==="sync"?w=I:i==="post"?w=()=>$t(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),w=()=>Fp(I));const b=new Np(u,w);e?n?I():y=b.run():i==="post"?$t(b.run.bind(b),c&&c.suspense):b.run();const T=()=>{b.stop(),c&&c.scope&&kp(c.scope.effects,b)};return g&&g.push(T),T}function Gk(t,e,n){const r=this.proxy,i=tt(t)?t.includes(".")?kb(r,t):()=>r[t]:t.bind(r,r);let s;ce(e)?s=e:(s=e.handler,n=e);const o=lt;no(this);const a=Up(i,s.bind(r),n);return o?no(o):zi(),a}function kb(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Li(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),kt(t))Li(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)Li(t[n],e);else if($l(t)||Bs(t))t.forEach(n=>{Li(n,e)});else if(J_(t))for(const n in t)Li(t[n],e);return t}function f9(t,e){const n=Jt;if(n===null)return t;const r=eh(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Re]=e[s];o&&(ce(o)&&(o={mounted:o,updated:o}),o.deep&&Li(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function wi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Eo(),cn(c,n,8,[t.el,a,t,e]),To())}}const Fr=Symbol("_leaveCb"),au=Symbol("_enterCb");function Wk(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vp(()=>{t.isMounted=!0}),Nb(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],Ab={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},Yk={name:"BaseTransition",props:Ab,setup(t,{slots:e}){const n=Hb(),r=Wk();let i;return()=>{const s=e.default&&xb(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==bn){o=y;break}}const a=ve(t),{mode:c}=a;if(r.isLeaving)return cd(o);const u=Ey(o);if(!u)return cd(o);const l=tf(u,a,r,n);nf(u,l);const h=n.subTree,d=h&&Ey(h);let f=!1;const{getTransitionKey:g}=u.type;if(g){const y=g();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==bn&&(!Ai(u,d)||f)){const y=tf(d,a,r,n);if(nf(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},cd(o);c==="in-out"&&u.type!==bn&&(y.delayLeave=(I,w,b)=>{const T=Cb(r,d);T[String(d.key)]=d,I[Fr]=()=>{w(),I[Fr]=void 0,delete l.delayedLeave},l.delayedLeave=b})}return o}}},Qk=Yk;function Cb(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tf(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:I,onAfterAppear:w,onAppearCancelled:b}=e,T=String(t.key),S=Cb(n,t),M=(K,ie)=>{K&&cn(K,r,9,ie)},j=(K,ie)=>{const ye=ie[1];M(K,ie),ne(K)?K.every(rt=>rt.length<=1)&&ye():K.length<=1&&ye()},re={mode:s,persisted:o,beforeEnter(K){let ie=a;if(!n.isMounted)if(i)ie=y||a;else return;K[Fr]&&K[Fr](!0);const ye=S[T];ye&&Ai(t,ye)&&ye.el[Fr]&&ye.el[Fr](),M(ie,[K])},enter(K){let ie=c,ye=u,rt=l;if(!n.isMounted)if(i)ie=I||c,ye=w||u,rt=b||l;else return;let J=!1;const be=K[au]=Nt=>{J||(J=!0,Nt?M(rt,[K]):M(ye,[K]),re.delayedLeave&&re.delayedLeave(),K[au]=void 0)};ie?j(ie,[K,be]):be()},leave(K,ie){const ye=String(t.key);if(K[au]&&K[au](!0),n.isUnmounting)return ie();M(h,[K]);let rt=!1;const J=K[Fr]=be=>{rt||(rt=!0,ie(),be?M(g,[K]):M(f,[K]),K[Fr]=void 0,S[ye]===t&&delete S[ye])};S[ye]=t,d?j(d,[K,J]):J()},clone(K){return tf(K,e,n,r)}};return re}function cd(t){if(Ql(t))return t=Yr(t),t.children=null,t}function Ey(t){return Ql(t)?t.children?t.children[0]:void 0:t}function nf(t,e){t.shapeFlag&6&&t.component?nf(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xb(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===pn?(o.patchFlag&128&&i++,r=r.concat(xb(o.children,e,a))):(e||o.type!==bn)&&r.push(a!=null?Yr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ic(t,e){return ce(t)?(()=>it({name:t.name},e,{setup:t}))():t}const Lu=t=>!!t.type.__asyncLoader,Ql=t=>t.type.__isKeepAlive;function Xk(t,e){Rb(t,"a",e)}function Jk(t,e){Rb(t,"da",e)}function Rb(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Xl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ql(i.parent.vnode)&&Zk(r,e,n,i),i=i.parent}}function Zk(t,e,n,r){const i=Xl(e,t,r,!0);Bp(()=>{kp(r[e],i)},n)}function Xl(t,e,n=lt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Eo(),no(n);const a=cn(e,n,t,o);return zi(),To(),a});return r?i.unshift(s):i.push(s),s}}const vr=t=>(e,n=lt)=>(!Ua||t==="sp")&&Xl(t,(...r)=>e(...r),n),eA=vr("bm"),Vp=vr("m"),tA=vr("bu"),nA=vr("u"),Nb=vr("bum"),Bp=vr("um"),rA=vr("sp"),iA=vr("rtg"),sA=vr("rtc");function oA(t,e=lt){Xl("ec",t,e)}function p9(t,e,n,r){let i;const s=n&&n[r];if(ne(t)||tt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const rf=t=>t?Kb(t)?eh(t)||t.proxy:rf(t.parent):null,ma=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rf(t.parent),$root:t=>rf(t.root),$emit:t=>t.emit,$options:t=>$p(t),$forceUpdate:t=>t.f||(t.f=()=>Fp(t.update)),$nextTick:t=>t.n||(t.n=_b.bind(t.proxy)),$watch:t=>Gk.bind(t)}),ud=(t,e)=>t!==Re&&!t.__isScriptSetup&&me(t,e),aA={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(ud(r,e))return o[e]=1,r[e];if(i!==Re&&me(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&me(u,e))return o[e]=3,s[e];if(n!==Re&&me(n,e))return o[e]=4,n[e];sf&&(o[e]=0)}}const l=ma[e];let h,d;if(l)return e==="$attrs"&&Wt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&me(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,me(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return ud(i,e)?(i[e]=n,!0):r!==Re&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&me(t,o)||ud(e,o)||(a=s[0])&&me(a,o)||me(r,o)||me(ma,o)||me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ty(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sf=!0;function cA(t){const e=$p(t),n=t.proxy,r=t.ctx;sf=!1,e.beforeCreate&&Sy(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:I,beforeDestroy:w,beforeUnmount:b,destroyed:T,unmounted:S,render:M,renderTracked:j,renderTriggered:re,errorCaptured:K,serverPrefetch:ie,expose:ye,inheritAttrs:rt,components:J,directives:be,filters:Nt}=e;if(u&&uA(u,r,null),o)for(const ke in o){const we=o[ke];ce(we)&&(r[ke]=we.bind(n))}if(i){const ke=i.call(n,n);Ae(ke)&&(t.data=Kl(ke))}if(sf=!0,s)for(const ke in s){const we=s[ke],Zn=ce(we)?we.bind(n,n):ce(we.get)?we.get.bind(n,n):_n,Ar=!ce(we)&&ce(we.set)?we.set.bind(n):_n,An=ze({get:Zn,set:Ar});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>An.value,set:Vt=>An.value=Vt})}if(a)for(const ke in a)Pb(a[ke],r,n,ke);if(c){const ke=ce(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(we=>{Mu(we,ke[we])})}l&&Sy(l,t,"c");function Ge(ke,we){ne(we)?we.forEach(Zn=>ke(Zn.bind(n))):we&&ke(we.bind(n))}if(Ge(eA,h),Ge(Vp,d),Ge(tA,f),Ge(nA,g),Ge(Xk,y),Ge(Jk,I),Ge(oA,K),Ge(sA,j),Ge(iA,re),Ge(Nb,b),Ge(Bp,S),Ge(rA,ie),ne(ye))if(ye.length){const ke=t.exposed||(t.exposed={});ye.forEach(we=>{Object.defineProperty(ke,we,{get:()=>n[we],set:Zn=>n[we]=Zn})})}else t.exposed||(t.exposed={});M&&t.render===_n&&(t.render=M),rt!=null&&(t.inheritAttrs=rt),J&&(t.components=J),be&&(t.directives=be)}function uA(t,e,n=_n){ne(t)&&(t=of(t));for(const r in t){const i=t[r];let s;Ae(i)?"default"in i?s=zn(i.from||r,i.default,!0):s=zn(i.from||r):s=zn(i),kt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Sy(t,e,n){cn(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pb(t,e,n,r){const i=r.includes(".")?kb(n,r):()=>n[r];if(tt(t)){const s=e[t];ce(s)&&pa(i,s)}else if(ce(t))pa(i,t.bind(n));else if(Ae(t))if(ne(t))t.forEach(s=>Pb(s,e,n,r));else{const s=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(s)&&pa(i,s,t)}}function $p(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>tl(c,u,o,!0)),tl(c,e,o)),Ae(e)&&s.set(e,c),c}function tl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&tl(t,s,n,!0),i&&i.forEach(o=>tl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=lA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lA={data:ky,props:Ay,emits:Ay,methods:sa,computed:sa,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:sa,directives:sa,watch:dA,provide:ky,inject:hA};function ky(t,e){return e?t?function(){return it(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function hA(t,e){return sa(of(t),of(e))}function of(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function sa(t,e){return t?it(Object.create(null),t,e):e}function Ay(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:it(Object.create(null),Ty(t),Ty(e!=null?e:{})):e}function dA(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function Ob(){return{app:null,config:{isNativeTag:$S,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fA=0;function pA(t,e){return function(r,i=null){ce(r)||(r=it({},r)),i!=null&&!Ae(i)&&(i=null);const s=Ob(),o=new WeakSet;let a=!1;const c=s.app={_uid:fA++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:$A,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(c,...l)):ce(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=zt(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,eh(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){nl=c;try{return u()}finally{nl=null}}};return c}}let nl=null;function Mu(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function zn(t,e,n=!1){const r=lt||Jt;if(r||nl){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}function mA(t,e,n,r=!1){const i={},s={};Xu(s,Zl,1),t.propsDefaults=Object.create(null),Db(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:hb(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function gA(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ve(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Wl(t.emitsOptions,d))continue;const f=e[d];if(c)if(me(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const g=Wn(d);i[g]=af(c,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{Db(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!me(e,h)&&((l=Io(h))===h||!me(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=af(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!me(e,h)&&!0)&&(delete s[h],u=!0)}u&&ar(t,"set","$attrs")}function Db(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ou(c))continue;const u=e[c];let l;i&&me(i,l=Wn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:Wl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=ve(n),u=a||Re;for(let l=0;l<s.length;l++){const h=s[l];n[h]=af(i,c,h,u[h],t,!me(u,h))}}return o}function af(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ce(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(no(i),r=u[n]=c.call(null,e),zi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Io(n))&&(r=!0))}return r}function Lb(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ce(t)){const l=h=>{c=!0;const[d,f]=Lb(h,e,!0);it(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Ae(t)&&r.set(t,Vs),Vs;if(ne(s))for(let l=0;l<s.length;l++){const h=Wn(s[l]);Cy(h)&&(o[h]=Re)}else if(s)for(const l in s){const h=Wn(l);if(Cy(h)){const d=s[l],f=o[h]=ne(d)||ce(d)?{type:d}:it({},d);if(f){const g=Ny(Boolean,f.type),y=Ny(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||me(f,"default"))&&a.push(h)}}}const u=[o,a];return Ae(t)&&r.set(t,u),u}function Cy(t){return t[0]!=="$"}function xy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ry(t,e){return xy(t)===xy(e)}function Ny(t,e){return ne(e)?e.findIndex(n=>Ry(n,t)):ce(e)&&Ry(e,t)?0:-1}const Mb=t=>t[0]==="_"||t==="$stable",qp=t=>ne(t)?t.map(Rn):[Rn(t)],yA=(t,e,n)=>{if(e._n)return e;const r=Mk((...i)=>qp(e(...i)),n);return r._c=!1,r},Fb=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Mb(i))continue;const s=t[i];if(ce(s))e[i]=yA(i,s,r);else if(s!=null){const o=qp(s);e[i]=()=>o}}},Ub=(t,e)=>{const n=qp(e);t.slots.default=()=>n},vA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),Xu(e,"_",n)):Fb(e,t.slots={})}else t.slots={},e&&Ub(t,e);Xu(t.slots,Zl,1)},wA=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(it(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Fb(e,i)),o=e}else e&&(Ub(t,e),o={default:1});if(s)for(const a in i)!Mb(a)&&o[a]==null&&delete i[a]};function cf(t,e,n,r,i=!1){if(ne(t)){t.forEach((d,f)=>cf(d,e&&(ne(e)?e[f]:e),n,r,i));return}if(Lu(r)&&!i)return;const s=r.shapeFlag&4?eh(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(tt(u)?(l[u]=null,me(h,u)&&(h[u]=null)):kt(u)&&(u.value=null)),ce(c))Hr(c,a,12,[o,l]);else{const d=tt(c),f=kt(c);if(d||f){const g=()=>{if(t.f){const y=d?me(h,c)?h[c]:l[c]:c.value;i?ne(y)&&kp(y,s):ne(y)?y.includes(s)||y.push(s):d?(l[c]=[s],me(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,me(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,$t(g,n)):g()}}}const $t=Hk;function _A(t){return bA(t)}function bA(t,e){const n=Yd();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=_n,insertStaticContent:g}=t,y=(p,m,v,k=null,x=null,N=null,$=!1,D=null,F=!!m.dynamicChildren)=>{if(p===m)return;p&&!Ai(p,m)&&(k=A(p),Vt(p,x,N,!0),p=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:P,ref:ee,shapeFlag:G}=m;switch(P){case Jl:I(p,m,v,k);break;case bn:w(p,m,v,k);break;case ga:p==null&&b(m,v,k,$);break;case pn:J(p,m,v,k,x,N,$,D,F);break;default:G&1?M(p,m,v,k,x,N,$,D,F):G&6?be(p,m,v,k,x,N,$,D,F):(G&64||G&128)&&P.process(p,m,v,k,x,N,$,D,F,U)}ee!=null&&x&&cf(ee,p&&p.ref,N,m||p,!m)},I=(p,m,v,k)=>{if(p==null)r(m.el=a(m.children),v,k);else{const x=m.el=p.el;m.children!==p.children&&u(x,m.children)}},w=(p,m,v,k)=>{p==null?r(m.el=c(m.children||""),v,k):m.el=p.el},b=(p,m,v,k)=>{[p.el,p.anchor]=g(p.children,m,v,k,p.el,p.anchor)},T=({el:p,anchor:m},v,k)=>{let x;for(;p&&p!==m;)x=d(p),r(p,v,k),p=x;r(m,v,k)},S=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),i(p),p=v;i(m)},M=(p,m,v,k,x,N,$,D,F)=>{$=$||m.type==="svg",p==null?j(m,v,k,x,N,$,D,F):ie(p,m,x,N,$,D,F)},j=(p,m,v,k,x,N,$,D)=>{let F,P;const{type:ee,props:G,shapeFlag:te,transition:oe,dirs:le}=p;if(F=p.el=o(p.type,N,G&&G.is,G),te&8?l(F,p.children):te&16&&K(p.children,F,null,k,x,N&&ee!=="foreignObject",$,D),le&&wi(p,null,k,"created"),re(F,p,p.scopeId,$,k),G){for(const Se in G)Se!=="value"&&!Ou(Se)&&s(F,Se,null,G[Se],N,p.children,k,x,Et);"value"in G&&s(F,"value",null,G.value),(P=G.onVnodeBeforeMount)&&xn(P,k,p)}le&&wi(p,null,k,"beforeMount");const Ce=IA(x,oe);Ce&&oe.beforeEnter(F),r(F,m,v),((P=G&&G.onVnodeMounted)||Ce||le)&&$t(()=>{P&&xn(P,k,p),Ce&&oe.enter(F),le&&wi(p,null,k,"mounted")},x)},re=(p,m,v,k,x)=>{if(v&&f(p,v),k)for(let N=0;N<k.length;N++)f(p,k[N]);if(x){let N=x.subTree;if(m===N){const $=x.vnode;re(p,$,$.scopeId,$.slotScopeIds,x.parent)}}},K=(p,m,v,k,x,N,$,D,F=0)=>{for(let P=F;P<p.length;P++){const ee=p[P]=D?Ur(p[P]):Rn(p[P]);y(null,ee,m,v,k,x,N,$,D)}},ie=(p,m,v,k,x,N,$)=>{const D=m.el=p.el;let{patchFlag:F,dynamicChildren:P,dirs:ee}=m;F|=p.patchFlag&16;const G=p.props||Re,te=m.props||Re;let oe;v&&_i(v,!1),(oe=te.onVnodeBeforeUpdate)&&xn(oe,v,m,p),ee&&wi(m,p,v,"beforeUpdate"),v&&_i(v,!0);const le=x&&m.type!=="foreignObject";if(P?ye(p.dynamicChildren,P,D,v,k,le,N):$||we(p,m,D,null,v,k,le,N,!1),F>0){if(F&16)rt(D,m,G,te,v,k,x);else if(F&2&&G.class!==te.class&&s(D,"class",null,te.class,x),F&4&&s(D,"style",G.style,te.style,x),F&8){const Ce=m.dynamicProps;for(let Se=0;Se<Ce.length;Se++){const Je=Ce[Se],dn=G[Je],Ts=te[Je];(Ts!==dn||Je==="value")&&s(D,Je,dn,Ts,x,p.children,v,k,Et)}}F&1&&p.children!==m.children&&l(D,m.children)}else!$&&P==null&&rt(D,m,G,te,v,k,x);((oe=te.onVnodeUpdated)||ee)&&$t(()=>{oe&&xn(oe,v,m,p),ee&&wi(m,p,v,"updated")},k)},ye=(p,m,v,k,x,N,$)=>{for(let D=0;D<m.length;D++){const F=p[D],P=m[D],ee=F.el&&(F.type===pn||!Ai(F,P)||F.shapeFlag&70)?h(F.el):v;y(F,P,ee,null,k,x,N,$,!0)}},rt=(p,m,v,k,x,N,$)=>{if(v!==k){if(v!==Re)for(const D in v)!Ou(D)&&!(D in k)&&s(p,D,v[D],null,$,m.children,x,N,Et);for(const D in k){if(Ou(D))continue;const F=k[D],P=v[D];F!==P&&D!=="value"&&s(p,D,P,F,$,m.children,x,N,Et)}"value"in k&&s(p,"value",v.value,k.value)}},J=(p,m,v,k,x,N,$,D,F)=>{const P=m.el=p?p.el:a(""),ee=m.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:te,slotScopeIds:oe}=m;oe&&(D=D?D.concat(oe):oe),p==null?(r(P,v,k),r(ee,v,k),K(m.children,v,ee,x,N,$,D,F)):G>0&&G&64&&te&&p.dynamicChildren?(ye(p.dynamicChildren,te,v,x,N,$,D),(m.key!=null||x&&m===x.subTree)&&Vb(p,m,!0)):we(p,m,v,ee,x,N,$,D,F)},be=(p,m,v,k,x,N,$,D,F)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?x.ctx.activate(m,v,k,$,F):Nt(m,v,k,x,N,$,F):Jn(p,m,F)},Nt=(p,m,v,k,x,N,$)=>{const D=p.component=PA(p,k,x);if(Ql(p)&&(D.ctx.renderer=U),OA(D),D.asyncDep){if(x&&x.registerDep(D,Ge),!p.el){const F=D.subTree=zt(bn);w(null,F,m,v)}return}Ge(D,p,m,v,x,N,$)},Jn=(p,m,v)=>{const k=m.component=p.component;if(Vk(p,m,v))if(k.asyncDep&&!k.asyncResolved){ke(k,m,v);return}else k.next=m,Pk(k.update),k.update();else m.el=p.el,k.vnode=m},Ge=(p,m,v,k,x,N,$)=>{const D=()=>{if(p.isMounted){let{next:ee,bu:G,u:te,parent:oe,vnode:le}=p,Ce=ee,Se;_i(p,!1),ee?(ee.el=le.el,ke(p,ee,$)):ee=le,G&&Du(G),(Se=ee.props&&ee.props.onVnodeBeforeUpdate)&&xn(Se,oe,ee,le),_i(p,!0);const Je=ad(p),dn=p.subTree;p.subTree=Je,y(dn,Je,h(dn.el),A(dn),p,x,N),ee.el=Je.el,Ce===null&&Bk(p,Je.el),te&&$t(te,x),(Se=ee.props&&ee.props.onVnodeUpdated)&&$t(()=>xn(Se,oe,ee,le),x)}else{let ee;const{el:G,props:te}=m,{bm:oe,m:le,parent:Ce}=p,Se=Lu(m);if(_i(p,!1),oe&&Du(oe),!Se&&(ee=te&&te.onVnodeBeforeMount)&&xn(ee,Ce,m),_i(p,!0),G&&_e){const Je=()=>{p.subTree=ad(p),_e(G,p.subTree,p,x,null)};Se?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Je()):Je()}else{const Je=p.subTree=ad(p);y(null,Je,v,k,p,x,N),m.el=Je.el}if(le&&$t(le,x),!Se&&(ee=te&&te.onVnodeMounted)){const Je=m;$t(()=>xn(ee,Ce,Je),x)}(m.shapeFlag&256||Ce&&Lu(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&$t(p.a,x),p.isMounted=!0,m=v=k=null}},F=p.effect=new Np(D,()=>Fp(P),p.scope),P=p.update=()=>F.run();P.id=p.uid,_i(p,!0),P()},ke=(p,m,v)=>{m.component=p;const k=p.vnode.props;p.vnode=m,p.next=null,gA(p,m.props,k,v),wA(p,m.children,v),Eo(),_y(p),To()},we=(p,m,v,k,x,N,$,D,F=!1)=>{const P=p&&p.children,ee=p?p.shapeFlag:0,G=m.children,{patchFlag:te,shapeFlag:oe}=m;if(te>0){if(te&128){Ar(P,G,v,k,x,N,$,D,F);return}else if(te&256){Zn(P,G,v,k,x,N,$,D,F);return}}oe&8?(ee&16&&Et(P,x,N),G!==P&&l(v,G)):ee&16?oe&16?Ar(P,G,v,k,x,N,$,D,F):Et(P,x,N,!0):(ee&8&&l(v,""),oe&16&&K(G,v,k,x,N,$,D,F))},Zn=(p,m,v,k,x,N,$,D,F)=>{p=p||Vs,m=m||Vs;const P=p.length,ee=m.length,G=Math.min(P,ee);let te;for(te=0;te<G;te++){const oe=m[te]=F?Ur(m[te]):Rn(m[te]);y(p[te],oe,v,null,x,N,$,D,F)}P>ee?Et(p,x,N,!0,!1,G):K(m,v,k,x,N,$,D,F,G)},Ar=(p,m,v,k,x,N,$,D,F)=>{let P=0;const ee=m.length;let G=p.length-1,te=ee-1;for(;P<=G&&P<=te;){const oe=p[P],le=m[P]=F?Ur(m[P]):Rn(m[P]);if(Ai(oe,le))y(oe,le,v,null,x,N,$,D,F);else break;P++}for(;P<=G&&P<=te;){const oe=p[G],le=m[te]=F?Ur(m[te]):Rn(m[te]);if(Ai(oe,le))y(oe,le,v,null,x,N,$,D,F);else break;G--,te--}if(P>G){if(P<=te){const oe=te+1,le=oe<ee?m[oe].el:k;for(;P<=te;)y(null,m[P]=F?Ur(m[P]):Rn(m[P]),v,le,x,N,$,D,F),P++}}else if(P>te)for(;P<=G;)Vt(p[P],x,N,!0),P++;else{const oe=P,le=P,Ce=new Map;for(P=le;P<=te;P++){const Qt=m[P]=F?Ur(m[P]):Rn(m[P]);Qt.key!=null&&Ce.set(Qt.key,P)}let Se,Je=0;const dn=te-le+1;let Ts=!1,cy=0;const qo=new Array(dn);for(P=0;P<dn;P++)qo[P]=0;for(P=oe;P<=G;P++){const Qt=p[P];if(Je>=dn){Vt(Qt,x,N,!0);continue}let Cn;if(Qt.key!=null)Cn=Ce.get(Qt.key);else for(Se=le;Se<=te;Se++)if(qo[Se-le]===0&&Ai(Qt,m[Se])){Cn=Se;break}Cn===void 0?Vt(Qt,x,N,!0):(qo[Cn-le]=P+1,Cn>=cy?cy=Cn:Ts=!0,y(Qt,m[Cn],v,null,x,N,$,D,F),Je++)}const uy=Ts?EA(qo):Vs;for(Se=uy.length-1,P=dn-1;P>=0;P--){const Qt=le+P,Cn=m[Qt],ly=Qt+1<ee?m[Qt+1].el:k;qo[P]===0?y(null,Cn,v,ly,x,N,$,D,F):Ts&&(Se<0||P!==uy[Se]?An(Cn,v,ly,2):Se--)}}},An=(p,m,v,k,x=null)=>{const{el:N,type:$,transition:D,children:F,shapeFlag:P}=p;if(P&6){An(p.component.subTree,m,v,k);return}if(P&128){p.suspense.move(m,v,k);return}if(P&64){$.move(p,m,v,U);return}if($===pn){r(N,m,v);for(let G=0;G<F.length;G++)An(F[G],m,v,k);r(p.anchor,m,v);return}if($===ga){T(p,m,v);return}if(k!==2&&P&1&&D)if(k===0)D.beforeEnter(N),r(N,m,v),$t(()=>D.enter(N),x);else{const{leave:G,delayLeave:te,afterLeave:oe}=D,le=()=>r(N,m,v),Ce=()=>{G(N,()=>{le(),oe&&oe()})};te?te(N,le,Ce):Ce()}else r(N,m,v)},Vt=(p,m,v,k=!1,x=!1)=>{const{type:N,props:$,ref:D,children:F,dynamicChildren:P,shapeFlag:ee,patchFlag:G,dirs:te}=p;if(D!=null&&cf(D,null,v,p,!0),ee&256){m.ctx.deactivate(p);return}const oe=ee&1&&te,le=!Lu(p);let Ce;if(le&&(Ce=$&&$.onVnodeBeforeUnmount)&&xn(Ce,m,p),ee&6)eu(p.component,v,k);else{if(ee&128){p.suspense.unmount(v,k);return}oe&&wi(p,null,m,"beforeUnmount"),ee&64?p.type.remove(p,m,v,x,U,k):P&&(N!==pn||G>0&&G&64)?Et(P,m,v,!1,!0):(N===pn&&G&384||!x&&ee&16)&&Et(F,m,v),k&&Is(p)}(le&&(Ce=$&&$.onVnodeUnmounted)||oe)&&$t(()=>{Ce&&xn(Ce,m,p),oe&&wi(p,null,m,"unmounted")},v)},Is=p=>{const{type:m,el:v,anchor:k,transition:x}=p;if(m===pn){Es(v,k);return}if(m===ga){S(p);return}const N=()=>{i(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(p.shapeFlag&1&&x&&!x.persisted){const{leave:$,delayLeave:D}=x,F=()=>$(v,N);D?D(p.el,N,F):F()}else N()},Es=(p,m)=>{let v;for(;p!==m;)v=d(p),i(p),p=v;i(m)},eu=(p,m,v)=>{const{bum:k,scope:x,update:N,subTree:$,um:D}=p;k&&Du(k),x.stop(),N&&(N.active=!1,Vt($,p,m,v)),D&&$t(D,m),$t(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Et=(p,m,v,k=!1,x=!1,N=0)=>{for(let $=N;$<p.length;$++)Vt(p[$],m,v,k,x)},A=p=>p.shapeFlag&6?A(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),H=(p,m,v)=>{p==null?m._vnode&&Vt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,v),_y(),Ib(),m._vnode=p},U={p:y,um:Vt,m:An,r:Is,mt:Nt,mc:K,pc:we,pbc:ye,n:A,o:t};let Z,_e;return e&&([Z,_e]=e(U)),{render:H,hydrate:Z,createApp:pA(H,Z)}}function _i({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function IA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vb(t,e,n=!1){const r=t.children,i=e.children;if(ne(r)&&ne(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Ur(i[s]),a.el=o.el),n||Vb(o,a)),a.type===Jl&&(a.el=o.el)}}function EA(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const TA=t=>t.__isTeleport,pn=Symbol.for("v-fgt"),Jl=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),ya=[];let yn=null;function Bb(t=!1){ya.push(yn=t?null:[])}function SA(){ya.pop(),yn=ya[ya.length-1]||null}let Fa=1;function Py(t){Fa+=t}function $b(t){return t.dynamicChildren=Fa>0?yn||Vs:null,SA(),Fa>0&&yn&&yn.push(t),t}function m9(t,e,n,r,i,s){return $b(zb(t,e,n,r,i,s,!0))}function qb(t,e,n,r,i){return $b(zt(t,e,n,r,i,!0))}function uf(t){return t?t.__v_isVNode===!0:!1}function Ai(t,e){return t.type===e.type&&t.key===e.key}const Zl="__vInternal",jb=({key:t})=>t!=null?t:null,Fu=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||kt(t)||ce(t)?{i:Jt,r:t,k:e,f:!!n}:t:null);function zb(t,e=null,n=null,r=0,i=null,s=t===pn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jb(e),ref:e&&Fu(e),scopeId:Yl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Jt};return a?(jp(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),Fa>0&&!o&&yn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&yn.push(c),c}const zt=kA;function kA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===qk)&&(t=bn),uf(t)){const a=Yr(t,e,!0);return n&&jp(a,n),Fa>0&&!s&&yn&&(a.shapeFlag&6?yn[yn.indexOf(t)]=a:yn.push(a)),a.patchFlag|=-2,a}if(UA(t)&&(t=t.__vccOpts),e){e=AA(e);let{class:a,style:c}=e;a&&!tt(a)&&(e.class=xp(a)),Ae(c)&&(fb(c)&&!ne(c)&&(c=it({},c)),e.style=Cp(c))}const o=tt(t)?1:zk(t)?128:TA(t)?64:Ae(t)?4:ce(t)?2:0;return zb(t,e,n,r,i,o,s,!0)}function AA(t){return t?fb(t)||Zl in t?it({},t):t:null}function Yr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?xA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jb(a),ref:e&&e.ref?n&&i?ne(i)?i.concat(Fu(e)):[i,Fu(e)]:Fu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yr(t.ssContent),ssFallback:t.ssFallback&&Yr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function CA(t=" ",e=0){return zt(Jl,null,t,e)}function g9(t,e){const n=zt(ga,null,t);return n.staticCount=e,n}function y9(t="",e=!1){return e?(Bb(),qb(bn,null,t)):zt(bn,null,t)}function Rn(t){return t==null||typeof t=="boolean"?zt(bn):ne(t)?zt(pn,null,t.slice()):typeof t=="object"?Ur(t):zt(Jl,null,String(t))}function Ur(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yr(t)}function jp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),jp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zl in e)?e._ctx=Jt:i===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Jt},n=32):(e=String(e),r&64?(n=16,e=[CA(e)]):n=8);t.children=e,t.shapeFlag|=n}function xA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=xp([e.class,r.class]));else if(i==="style")e.style=Cp([e.style,r.style]);else if(Bl(i)){const s=e[i],o=r[i];o&&s!==o&&!(ne(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function xn(t,e,n,r=null){cn(t,e,7,[n,r])}const RA=Ob();let NA=0;function PA(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||RA,s={uid:NA++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new tk(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lb(r,i),emitsOptions:Tb(r,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Lk.bind(null,s),t.ce&&t.ce(s),s}let lt=null;const Hb=()=>lt||Jt;let zp,Ss,Oy="__VUE_INSTANCE_SETTERS__";(Ss=Yd()[Oy])||(Ss=Yd()[Oy]=[]),Ss.push(t=>lt=t),zp=t=>{Ss.length>1?Ss.forEach(e=>e(t)):Ss[0](t)};const no=t=>{zp(t),t.scope.on()},zi=()=>{lt&&lt.scope.off(),zp(null)};function Kb(t){return t.vnode.shapeFlag&4}let Ua=!1;function OA(t,e=!1){Ua=e;const{props:n,children:r}=t.vnode,i=Kb(t);mA(t,n,i,e),vA(t,r);const s=i?DA(t,e):void 0;return Ua=!1,s}function DA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pb(new Proxy(t.ctx,aA));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?MA(t):null;no(t),Eo();const s=Hr(r,t,0,[t.props,i]);if(To(),zi(),Q_(s)){if(s.then(zi,zi),e)return s.then(o=>{Dy(t,o,e)}).catch(o=>{Gl(o,t,0)});t.asyncDep=s}else Dy(t,s,e)}else Gb(t,e)}function Dy(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=vb(e)),Gb(t,n)}let Ly;function Gb(t,e,n){const r=t.type;if(!t.render){if(!e&&Ly&&!r.render){const i=r.template||$p(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=it(it({isCustomElement:s,delimiters:a},o),c);r.render=Ly(i,u)}}t.render=r.render||_n}{no(t),Eo();try{cA(t)}finally{To(),zi()}}}function LA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Wt(t,"get","$attrs"),e[n]}}))}function MA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return LA(t)},slots:t.slots,emit:t.emit,expose:e}}function eh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vb(pb(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ma)return ma[n](t)},has(e,n){return n in e||n in ma}}))}function FA(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function UA(t){return ce(t)&&"__vccOpts"in t}const ze=(t,e)=>xk(t,e,Ua);function Ec(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!ne(e)?uf(e)?zt(t,null,[e]):zt(t,e):zt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&uf(n)&&(n=[n]),zt(t,e,n))}const VA=Symbol.for("v-scx"),BA=()=>zn(VA),$A="3.3.11",qA="http://www.w3.org/2000/svg",Ci=typeof document<"u"?document:null,My=Ci&&Ci.createElement("template"),jA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ci.createElementNS(qA,t):Ci.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ci.createTextNode(t),createComment:t=>Ci.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ci.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{My.innerHTML=r?`<svg>${t}</svg>`:t;const a=My.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xr="transition",jo="animation",Va=Symbol("_vtc"),Wb=(t,{slots:e})=>Ec(Qk,zA(t),e);Wb.displayName="Transition";const Yb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wb.props=it({},Ab,Yb);const bi=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fy=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function zA(t){const e={};for(const J in t)J in Yb||(e[J]=t[J]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=HA(i),y=g&&g[0],I=g&&g[1],{onBeforeEnter:w,onEnter:b,onEnterCancelled:T,onLeave:S,onLeaveCancelled:M,onBeforeAppear:j=w,onAppear:re=b,onAppearCancelled:K=T}=e,ie=(J,be,Nt)=>{Ii(J,be?l:a),Ii(J,be?u:o),Nt&&Nt()},ye=(J,be)=>{J._isLeaving=!1,Ii(J,h),Ii(J,f),Ii(J,d),be&&be()},rt=J=>(be,Nt)=>{const Jn=J?re:b,Ge=()=>ie(be,J,Nt);bi(Jn,[be,Ge]),Uy(()=>{Ii(be,J?c:s),Rr(be,J?l:a),Fy(Jn)||Vy(be,r,y,Ge)})};return it(e,{onBeforeEnter(J){bi(w,[J]),Rr(J,s),Rr(J,o)},onBeforeAppear(J){bi(j,[J]),Rr(J,c),Rr(J,u)},onEnter:rt(!1),onAppear:rt(!0),onLeave(J,be){J._isLeaving=!0;const Nt=()=>ye(J,be);Rr(J,h),WA(),Rr(J,d),Uy(()=>{!J._isLeaving||(Ii(J,h),Rr(J,f),Fy(S)||Vy(J,r,I,Nt))}),bi(S,[J,Nt])},onEnterCancelled(J){ie(J,!1),bi(T,[J])},onAppearCancelled(J){ie(J,!0),bi(K,[J])},onLeaveCancelled(J){ye(J),bi(M,[J])}})}function HA(t){if(t==null)return null;if(Ae(t))return[ld(t.enter),ld(t.leave)];{const e=ld(t);return[e,e]}}function ld(t){return KS(t)}function Rr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Va]||(t[Va]=new Set)).add(e)}function Ii(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Va];n&&(n.delete(e),n.size||(t[Va]=void 0))}function Uy(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let KA=0;function Vy(t,e,n,r){const i=t._endId=++KA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=GA(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function GA(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(`${xr}Delay`),s=r(`${xr}Duration`),o=By(i,s),a=r(`${jo}Delay`),c=r(`${jo}Duration`),u=By(a,c);let l=null,h=0,d=0;e===xr?o>0&&(l=xr,h=o,d=s.length):e===jo?u>0&&(l=jo,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?xr:jo:null,d=l?l===xr?s.length:c.length:0);const f=l===xr&&/\b(transform|all)(,|$)/.test(r(`${xr}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function By(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>$y(n)+$y(t[r])))}function $y(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function WA(){return document.body.offsetHeight}function YA(t,e,n){const r=t[Va];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const QA=Symbol("_vod");function XA(t,e,n){const r=t.style,i=tt(n);if(n&&!i){if(e&&!tt(e))for(const s in e)n[s]==null&&lf(r,s,"");for(const s in n)lf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),QA in t&&(r.display=s)}}const qy=/\s*!important$/;function lf(t,e,n){if(ne(n))n.forEach(r=>lf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=JA(t,e);qy.test(n)?t.setProperty(Io(r),n.replace(qy,""),"important"):t[r]=n}}const jy=["Webkit","Moz","ms"],hd={};function JA(t,e){const n=hd[e];if(n)return n;let r=Wn(e);if(r!=="filter"&&r in t)return hd[e]=r;r=jl(r);for(let i=0;i<jy.length;i++){const s=jy[i]+r;if(s in t)return hd[e]=s}return e}const zy="http://www.w3.org/1999/xlink";function ZA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zy,e.slice(6,e.length)):t.setAttributeNS(zy,e,n);else{const s=JS(e);n==null||s&&!Z_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function eC(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n==null?"":n;u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Z_(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xi(t,e,n,r){t.addEventListener(e,n,r)}function tC(t,e,n,r){t.removeEventListener(e,n,r)}const Hy=Symbol("_vei");function nC(t,e,n,r,i=null){const s=t[Hy]||(t[Hy]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=rC(e);if(r){const u=s[e]=oC(r,i);xi(t,a,u,c)}else o&&(tC(t,a,o,c),s[e]=void 0)}}const Ky=/(?:Once|Passive|Capture)$/;function rC(t){let e;if(Ky.test(t)){e={};let r;for(;r=t.match(Ky);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Io(t.slice(2)),e]}let dd=0;const iC=Promise.resolve(),sC=()=>dd||(iC.then(()=>dd=0),dd=Date.now());function oC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(aC(r,n.value),e,5,[r])};return n.value=t,n.attached=sC(),n}function aC(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Gy=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cC=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?YA(t,r,i):e==="style"?XA(t,n,r):Bl(e)?Sp(e)||nC(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uC(t,e,r,i))?eC(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ZA(t,e,r,i))};function uC(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gy(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gy(e)&&tt(n)?!1:e in t}function v9(t){const e=Hb();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>df(s,i))},r=()=>{const i=t(e.proxy);hf(e.subTree,i),n(i)};Kk(r),Vp(()=>{const i=new MutationObserver(r);i.observe(e.subTree.el.parentNode,{childList:!0}),Bp(()=>i.disconnect())})}function hf(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{hf(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)df(t.el,e);else if(t.type===pn)t.children.forEach(n=>hf(n,e));else if(t.type===ga){let{el:n,anchor:r}=t;for(;n&&(df(n,e),n!==r);)n=n.nextSibling}}function df(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const rl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Du(e,n):e};function lC(t){t.target.composing=!0}function Wy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zs=Symbol("_assign"),w9={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[zs]=rl(i);const s=r||i.props&&i.props.type==="number";xi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Ju(a)),t[zs](a)}),n&&xi(t,"change",()=>{t.value=t.value.trim()}),e||(xi(t,"compositionstart",lC),xi(t,"compositionend",Wy),xi(t,"change",Wy))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t[zs]=rl(s),t.composing)return;const o=i||t.type==="number"?Ju(t.value):t.value,a=e==null?"":e;o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},_9={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=$l(e);xi(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ju(il(o)):il(o));t[zs](t.multiple?i?new Set(s):s:s[0])}),t[zs]=rl(r)},mounted(t,{value:e}){Yy(t,e)},beforeUpdate(t,e,n){t[zs]=rl(n)},updated(t,{value:e}){Yy(t,e)}};function Yy(t,e){const n=t.multiple;if(!(n&&!ne(e)&&!$l(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=il(s);if(n)ne(e)?s.selected=ek(e,o)>-1:s.selected=e.has(o);else if(zl(il(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function il(t){return"_value"in t?t._value:t.value}const hC=["ctrl","shift","alt","meta"],dC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hC.some(n=>t[`${n}Key`]&&!e.includes(n))},b9=(t,e)=>t._withMods||(t._withMods=(n,...r)=>{for(let i=0;i<e.length;i++){const s=dC[e[i]];if(s&&s(n,e))return}return t(n,...r)}),fC=it({patchProp:cC},jA);let Qy;function pC(){return Qy||(Qy=_A(fC))}const mC=(...t)=>{const e=pC().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=gC(r);if(!i)return;const s=e._component;!ce(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function gC(t){return tt(t)?document.querySelector(t):t}const yC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},vC={};function wC(t,e){const n=$k("router-view");return Bb(),qb(n)}const _C=yC(vC,[["render",wC]]),bC="modulepreload",IC=function(t){return"/"+t},Xy={},zo=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=IC(s),s in Xy)return;Xy[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":bC,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ns=typeof window<"u";function EC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function fd(t,e){const n={};for(const r in e){const i=e[r];n[r]=En(i)?i.map(t):t(i)}return n}const va=()=>{},En=Array.isArray,TC=/\/$/,SC=t=>t.replace(TC,"");function pd(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=xC(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function kC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AC(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ro(e.matched[r],n.matched[i])&&Qb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ro(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CC(t[n],e[n]))return!1;return!0}function CC(t,e){return En(t)?Zy(t,e):En(e)?Zy(e,t):t===e}function Zy(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function xC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ba;(function(t){t.pop="pop",t.push="push"})(Ba||(Ba={}));var wa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wa||(wa={}));function RC(t){if(!t)if(Ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SC(t)}const NC=/^[^#]+#/;function PC(t,e){return t.replace(NC,"#")+e}function OC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const th=()=>({left:window.pageXOffset,top:window.pageYOffset});function DC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=OC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ev(t,e){return(history.state?history.state.position-e:-1)+t}const ff=new Map;function LC(t,e){ff.set(t,e)}function MC(t){const e=ff.get(t);return ff.delete(t),e}let FC=()=>location.protocol+"//"+location.host;function Xb(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Jy(c,"")}return Jy(n,t)+r+i}function UC(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=Xb(t,location),g=n.value,y=e.value;let I=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}I=y?d.position-y.position:0}else r(f);i.forEach(w=>{w(n.value,g,{delta:I,type:Ba.pop,direction:I?I>0?wa.forward:wa.back:wa.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(Ie({},d.state,{scroll:th()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function tv(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?th():null}}function VC(t){const{history:e,location:n}=window,r={value:Xb(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:FC()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=Ie({},e.state,tv(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=Ie({},i.value,e.state,{forward:c,scroll:th()});s(l.current,l,!0);const h=Ie({},tv(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function BC(t){t=RC(t);const e=VC(t),n=UC(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Ie({location:"",base:t,go:r,createHref:PC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function $C(t){return typeof t=="string"||t&&typeof t=="object"}function Jb(t){return typeof t=="string"||typeof t=="symbol"}const Nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zb=Symbol("");var nv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nv||(nv={}));function io(t,e){return Ie(new Error,{type:t,[Zb]:!0},e)}function er(t,e){return t instanceof Error&&Zb in t&&(e==null||!!(t.type&e))}const rv="[^/]+?",qC={sensitive:!1,strict:!1,start:!0,end:!0},jC=/[.+*?^${}()[\]/\\]/g;function zC(t,e){const n=Ie({},qC,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(jC,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:I,regexp:w}=d;s.push({name:g,repeatable:y,optional:I});const b=w||rv;if(b!==rv){f+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+S.message)}}let T=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(T=I&&u.length<2?`(?:/${T})`:"/"+T),I&&(T+="?"),i+=T,f+=20,I&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:I}=f,w=g in u?u[g]:"";if(En(w)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=En(w)?w.join("/"):w;if(!b)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=b}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function HC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function KC(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=HC(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(iv(r))return 1;if(iv(i))return-1}return i.length-r.length}function iv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const GC={type:0,value:""},WC=/[a-zA-Z0-9_]/;function YC(t){if(!t)return[[]];if(t==="/")return[[GC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:WC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function QC(t,e,n){const r=zC(YC(t.path),n),i=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function XC(t,e){const n=[],r=new Map;e=av({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,g=JC(l);g.aliasOf=d&&d.record;const y=av(e,l),I=[g];if("alias"in l){const T=typeof l.alias=="string"?[l.alias]:l.alias;for(const S of T)I.push(Ie({},g,{components:d?d.record.components:g.components,path:S,aliasOf:d?d.record:g}))}let w,b;for(const T of I){const{path:S}=T;if(h&&S[0]!=="/"){const M=h.record.path,j=M[M.length-1]==="/"?"":"/";T.path=h.record.path+(S&&j+S)}if(w=QC(T,h,y),d?d.alias.push(w):(b=b||w,b!==w&&b.alias.push(w),f&&l.name&&!ov(w)&&o(l.name)),g.children){const M=g.children;for(let j=0;j<M.length;j++)s(M[j],w,d&&d.children[j])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return b?()=>{o(b)}:va}function o(l){if(Jb(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&KC(l,n[h])>=0&&(l.record.path!==n[h].record.path||!e0(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!ov(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},g,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw io(1,{location:l});y=d.record.name,f=Ie(sv(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),l.params&&sv(l.params,d.keys.map(b=>b.name))),g=d.stringify(f)}else if("path"in l)g=l.path,d=n.find(b=>b.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw io(1,{location:l,currentLocation:h});y=d.record.name,f=Ie({},h.params,l.params),g=d.stringify(f)}const I=[];let w=d;for(;w;)I.unshift(w.record),w=w.parent;return{name:y,path:g,params:f,matched:I,meta:ex(I)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function sv(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function JC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ZC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ZC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ov(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ex(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function av(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function e0(t,e){return e.children.some(n=>n===t||e0(t,n))}const t0=/#/g,tx=/&/g,nx=/\//g,rx=/=/g,ix=/\?/g,n0=/\+/g,sx=/%5B/g,ox=/%5D/g,r0=/%5E/g,ax=/%60/g,i0=/%7B/g,cx=/%7C/g,s0=/%7D/g,ux=/%20/g;function Hp(t){return encodeURI(""+t).replace(cx,"|").replace(sx,"[").replace(ox,"]")}function lx(t){return Hp(t).replace(i0,"{").replace(s0,"}").replace(r0,"^")}function pf(t){return Hp(t).replace(n0,"%2B").replace(ux,"+").replace(t0,"%23").replace(tx,"%26").replace(ax,"`").replace(i0,"{").replace(s0,"}").replace(r0,"^")}function hx(t){return pf(t).replace(rx,"%3D")}function dx(t){return Hp(t).replace(t0,"%23").replace(ix,"%3F")}function fx(t){return t==null?"":dx(t).replace(nx,"%2F")}function sl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function px(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(n0," "),o=s.indexOf("="),a=sl(o<0?s:s.slice(0,o)),c=o<0?null:sl(s.slice(o+1));if(a in e){let u=e[a];En(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function cv(t){let e="";for(let n in t){const r=t[n];if(n=hx(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(s=>s&&pf(s)):[r&&pf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function mx(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const gx=Symbol(""),uv=Symbol(""),nh=Symbol(""),o0=Symbol(""),mf=Symbol("");function Ho(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(io(4,{from:n,to:e})):h instanceof Error?a(h):$C(h)?a(io(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function md(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(yx(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Vr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=EC(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Vr(d,n,r,s,o)()}))}}return i}function yx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lv(t){const e=zn(nh),n=zn(o0),r=ze(()=>e.resolve(qs(t.to))),i=ze(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(ro.bind(null,l));if(d>-1)return d;const f=hv(c[u-2]);return u>1&&hv(l)===f&&h[h.length-1].path!==f?h.findIndex(ro.bind(null,c[u-2])):d}),s=ze(()=>i.value>-1&&bx(n.params,r.value.params)),o=ze(()=>i.value>-1&&i.value===n.matched.length-1&&Qb(n.params,r.value.params));function a(c={}){return _x(c)?e[qs(t.replace)?"replace":"push"](qs(t.to)).catch(va):Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const vx=Ic({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lv,setup(t,{slots:e}){const n=Kl(lv(t)),{options:r}=zn(nh),i=ze(()=>({[dv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ec("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),wx=vx;function _x(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bx(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!En(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function hv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dv=(t,e,n)=>t!=null?t:e!=null?e:n,Ix=Ic({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zn(mf),i=ze(()=>t.route||r.value),s=zn(uv,0),o=ze(()=>{let u=qs(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=ze(()=>i.value.matched[o.value]);Mu(uv,ze(()=>o.value+1)),Mu(gx,a),Mu(mf,i);const c=Tk();return pa(()=>[c.value,a.value,t.name],([u,l,h],[d,f,g])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!ro(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return fv(n.default,{Component:d,route:u});const f=h.props[l],g=f?f===!0?u.params:typeof f=="function"?f(u):f:null,I=Ec(d,Ie({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return fv(n.default,{Component:I,route:u})||I}}});function fv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ex=Ix;function Tx(t){const e=XC(t.routes,t),n=t.parseQuery||px,r=t.stringifyQuery||cv,i=t.history,s=Ho(),o=Ho(),a=Ho(),c=Sk(Nr);let u=Nr;Ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=fd.bind(null,A=>""+A),h=fd.bind(null,fx),d=fd.bind(null,sl);function f(A,H){let U,Z;return Jb(A)?(U=e.getRecordMatcher(A),Z=H):Z=A,e.addRoute(Z,U)}function g(A){const H=e.getRecordMatcher(A);H&&e.removeRoute(H)}function y(){return e.getRoutes().map(A=>A.record)}function I(A){return!!e.getRecordMatcher(A)}function w(A,H){if(H=Ie({},H||c.value),typeof A=="string"){const v=pd(n,A,H.path),k=e.resolve({path:v.path},H),x=i.createHref(v.fullPath);return Ie(v,k,{params:d(k.params),hash:sl(v.hash),redirectedFrom:void 0,href:x})}let U;if("path"in A)U=Ie({},A,{path:pd(n,A.path,H.path).path});else{const v=Ie({},A.params);for(const k in v)v[k]==null&&delete v[k];U=Ie({},A,{params:h(v)}),H.params=h(H.params)}const Z=e.resolve(U,H),_e=A.hash||"";Z.params=l(d(Z.params));const p=kC(r,Ie({},A,{hash:lx(_e),path:Z.path})),m=i.createHref(p);return Ie({fullPath:p,hash:_e,query:r===cv?mx(A.query):A.query||{}},Z,{redirectedFrom:void 0,href:m})}function b(A){return typeof A=="string"?pd(n,A,c.value.path):Ie({},A)}function T(A,H){if(u!==A)return io(8,{from:H,to:A})}function S(A){return re(A)}function M(A){return S(Ie(b(A),{replace:!0}))}function j(A){const H=A.matched[A.matched.length-1];if(H&&H.redirect){const{redirect:U}=H;let Z=typeof U=="function"?U(A):U;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=b(Z):{path:Z},Z.params={}),Ie({query:A.query,hash:A.hash,params:"path"in Z?{}:A.params},Z)}}function re(A,H){const U=u=w(A),Z=c.value,_e=A.state,p=A.force,m=A.replace===!0,v=j(U);if(v)return re(Ie(b(v),{state:typeof v=="object"?Ie({},_e,v.state):_e,force:p,replace:m}),H||U);const k=U;k.redirectedFrom=H;let x;return!p&&AC(r,Z,U)&&(x=io(16,{to:k,from:Z}),An(Z,Z,!0,!1)),(x?Promise.resolve(x):ye(k,Z)).catch(N=>er(N)?er(N,2)?N:Ar(N):we(N,k,Z)).then(N=>{if(N){if(er(N,2))return re(Ie({replace:m},b(N.to),{state:typeof N.to=="object"?Ie({},_e,N.to.state):_e,force:p}),H||k)}else N=J(k,Z,!0,m,_e);return rt(k,Z,N),N})}function K(A,H){const U=T(A,H);return U?Promise.reject(U):Promise.resolve()}function ie(A){const H=Es.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(A):A()}function ye(A,H){let U;const[Z,_e,p]=Sx(A,H);U=md(Z.reverse(),"beforeRouteLeave",A,H);for(const v of Z)v.leaveGuards.forEach(k=>{U.push(Vr(k,A,H))});const m=K.bind(null,A,H);return U.push(m),Et(U).then(()=>{U=[];for(const v of s.list())U.push(Vr(v,A,H));return U.push(m),Et(U)}).then(()=>{U=md(_e,"beforeRouteUpdate",A,H);for(const v of _e)v.updateGuards.forEach(k=>{U.push(Vr(k,A,H))});return U.push(m),Et(U)}).then(()=>{U=[];for(const v of p)if(v.beforeEnter)if(En(v.beforeEnter))for(const k of v.beforeEnter)U.push(Vr(k,A,H));else U.push(Vr(v.beforeEnter,A,H));return U.push(m),Et(U)}).then(()=>(A.matched.forEach(v=>v.enterCallbacks={}),U=md(p,"beforeRouteEnter",A,H),U.push(m),Et(U))).then(()=>{U=[];for(const v of o.list())U.push(Vr(v,A,H));return U.push(m),Et(U)}).catch(v=>er(v,8)?v:Promise.reject(v))}function rt(A,H,U){a.list().forEach(Z=>ie(()=>Z(A,H,U)))}function J(A,H,U,Z,_e){const p=T(A,H);if(p)return p;const m=H===Nr,v=Ns?history.state:{};U&&(Z||m?i.replace(A.fullPath,Ie({scroll:m&&v&&v.scroll},_e)):i.push(A.fullPath,_e)),c.value=A,An(A,H,U,m),Ar()}let be;function Nt(){be||(be=i.listen((A,H,U)=>{if(!eu.listening)return;const Z=w(A),_e=j(Z);if(_e){re(Ie(_e,{replace:!0}),Z).catch(va);return}u=Z;const p=c.value;Ns&&LC(ev(p.fullPath,U.delta),th()),ye(Z,p).catch(m=>er(m,12)?m:er(m,2)?(re(m.to,Z).then(v=>{er(v,20)&&!U.delta&&U.type===Ba.pop&&i.go(-1,!1)}).catch(va),Promise.reject()):(U.delta&&i.go(-U.delta,!1),we(m,Z,p))).then(m=>{m=m||J(Z,p,!1),m&&(U.delta&&!er(m,8)?i.go(-U.delta,!1):U.type===Ba.pop&&er(m,20)&&i.go(-1,!1)),rt(Z,p,m)}).catch(va)}))}let Jn=Ho(),Ge=Ho(),ke;function we(A,H,U){Ar(A);const Z=Ge.list();return Z.length?Z.forEach(_e=>_e(A,H,U)):console.error(A),Promise.reject(A)}function Zn(){return ke&&c.value!==Nr?Promise.resolve():new Promise((A,H)=>{Jn.add([A,H])})}function Ar(A){return ke||(ke=!A,Nt(),Jn.list().forEach(([H,U])=>A?U(A):H()),Jn.reset()),A}function An(A,H,U,Z){const{scrollBehavior:_e}=t;if(!Ns||!_e)return Promise.resolve();const p=!U&&MC(ev(A.fullPath,0))||(Z||!U)&&history.state&&history.state.scroll||null;return _b().then(()=>_e(A,H,p)).then(m=>m&&DC(m)).catch(m=>we(m,A,H))}const Vt=A=>i.go(A);let Is;const Es=new Set,eu={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:I,getRoutes:y,resolve:w,options:t,push:S,replace:M,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ge.add,isReady:Zn,install(A){const H=this;A.component("RouterLink",wx),A.component("RouterView",Ex),A.config.globalProperties.$router=H,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>qs(c)}),Ns&&!Is&&c.value===Nr&&(Is=!0,S(i.location).catch(_e=>{}));const U={};for(const _e in Nr)Object.defineProperty(U,_e,{get:()=>c.value[_e],enumerable:!0});A.provide(nh,H),A.provide(o0,hb(U)),A.provide(mf,c);const Z=A.unmount;Es.add(A),A.unmount=function(){Es.delete(A),Es.size<1&&(u=Nr,be&&be(),be=null,c.value=Nr,Is=!1,ke=!1),Z()}}};function Et(A){return A.reduce((H,U)=>H.then(()=>ie(U)),Promise.resolve())}return eu}function Sx(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>ro(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ro(u,c))||i.push(c))}return[n,r,i]}function I9(){return zn(nh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},c0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Ax;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ax extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cx=function(t){const e=a0(t);return c0.encodeByteArray(e,!0)},ol=function(t){return Cx(t).replace(/\./g,"")},u0=function(t){try{return c0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function al(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xx(n)||(t[n]=al(t[n],e[n]));return t}function xx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=()=>Rx().__FIREBASE_DEFAULTS__,Px=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ox=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&u0(t[1]);return e&&JSON.parse(e)},Kp=()=>{try{return Nx()||Px()||Ox()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l0=()=>{var t;return(t=Kp())===null||t===void 0?void 0:t.config},Dx=t=>{var e;return(e=Kp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function rh(){var t;const e=(t=Kp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fx(){return typeof self=="object"&&self.self===self}function d0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f0(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ux(){return!rh()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $a(){try{return typeof indexedDB=="object"}catch{return!1}}function Vx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bx,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$x(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function $x(t,e){return t.replace(qx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mv(s)&&mv(o)){if(!gf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function p0(t,e){const n=new zx(t,e);return n.subscribe.bind(n)}class zx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gd),i.error===void 0&&(i.error=gd),i.complete===void 0&&(i.complete=gd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wx(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gx(t){return t===Ti?void 0:t}function Wx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=[];var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const m0={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Qx=fe.INFO,Xx={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Jx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Xx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ih{constructor(e){this.name=e,this._logLevel=Qx,this._logHandler=Jx,this._userLogHandler=null,Wp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}function Zx(t){Wp.forEach(e=>{e.setLogLevel(t)})}function eR(t,e){for(const n of Wp){let r=null;e&&e.level&&(r=m0[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:fe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const tR=(t,e)=>e.some(n=>t instanceof n);let gv,yv;function nR(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rR(){return yv||(yv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g0=new WeakMap,yf=new WeakMap,y0=new WeakMap,yd=new WeakMap,Yp=new WeakMap;function iR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&g0.set(n,t)}).catch(()=>{}),Yp.set(e,t),e}function sR(t){if(yf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yf.set(t,e)}let vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oR(t){vf=t(vf)}function aR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vd(this),e,...n);return y0.set(r,e.sort?e.sort():[e]),Kr(r)}:rR().includes(t)?function(...e){return t.apply(vd(this),e),Kr(g0.get(this))}:function(...e){return Kr(t.apply(vd(this),e))}}function cR(t){return typeof t=="function"?aR(t):(t instanceof IDBTransaction&&sR(t),tR(t,nR())?new Proxy(t,vf):t)}function Kr(t){if(t instanceof IDBRequest)return iR(t);if(yd.has(t))return yd.get(t);const e=cR(t);return e!==t&&(yd.set(t,e),Yp.set(e,t)),e}const vd=t=>Yp.get(t);function uR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kr(o.result),c.oldVersion,c.newVersion,Kr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const lR=["get","getKey","getAll","getAllKeys","count"],hR=["put","add","delete","clear"],wd=new Map;function vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lR.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return wd.set(e,s),s}oR(t=>({...t,get:(e,n,r)=>vv(e,n)||t.get(e,n,r),has:(e,n)=>!!vv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wf="@firebase/app",wv="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new ih("@firebase/app"),pR="@firebase/app-compat",mR="@firebase/analytics-compat",gR="@firebase/analytics",yR="@firebase/app-check-compat",vR="@firebase/app-check",wR="@firebase/auth",_R="@firebase/auth-compat",bR="@firebase/database",IR="@firebase/database-compat",ER="@firebase/functions",TR="@firebase/functions-compat",SR="@firebase/installations",kR="@firebase/installations-compat",AR="@firebase/messaging",CR="@firebase/messaging-compat",xR="@firebase/performance",RR="@firebase/performance-compat",NR="@firebase/remote-config",PR="@firebase/remote-config-compat",OR="@firebase/storage",DR="@firebase/storage-compat",LR="@firebase/firestore",MR="@firebase/firestore-compat",FR="firebase",UR="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]",VR={[wf]:"fire-core",[pR]:"fire-core-compat",[gR]:"fire-analytics",[mR]:"fire-analytics-compat",[vR]:"fire-app-check",[yR]:"fire-app-check-compat",[wR]:"fire-auth",[_R]:"fire-auth-compat",[bR]:"fire-rtdb",[IR]:"fire-rtdb-compat",[ER]:"fire-fn",[TR]:"fire-fn-compat",[SR]:"fire-iid",[kR]:"fire-iid-compat",[AR]:"fire-fcm",[CR]:"fire-fcm-compat",[xR]:"fire-perf",[RR]:"fire-perf-compat",[NR]:"fire-rc",[PR]:"fire-rc-compat",[OR]:"fire-gcs",[DR]:"fire-gcs-compat",[LR]:"fire-fst",[MR]:"fire-fst-compat","fire-js":"fire-js",[FR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map,qa=new Map;function cl(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function v0(t,e){t.container.addOrOverwriteComponent(e)}function hr(t){const e=t.name;if(qa.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of Xr.values())cl(n,t);return!0}function w0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function BR(t,e,n=Qr){w0(t,e).clearInstance(n)}function $R(){qa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cr=new fs("app","Firebase",qR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=UR;function Qp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=l0()),!n)throw cr.create("no-options");const s=Xr.get(i);if(s){if(gf(n,s.options)&&gf(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new Yx(i);for(const c of qa.values())o.addComponent(c);const a=new jR(n,r,o);return Xr.set(i,a),a}function zR(t=Qr){const e=Xr.get(t);if(!e&&t===Qr&&l0())return Qp();if(!e)throw cr.create("no-app",{appName:t});return e}function HR(){return Array.from(Xr.values())}async function _0(t){const e=t.name;Xr.has(e)&&(Xr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function un(t,e,n){var r;let i=(r=VR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(a.join(" "));return}hr(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function b0(t,e){if(t!==null&&typeof t!="function")throw cr.create("invalid-log-argument");eR(t,e)}function I0(t){Zx(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="firebase-heartbeat-database",GR=1,ja="firebase-heartbeat-store";let _d=null;function E0(){return _d||(_d=uR(KR,GR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ja)}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),_d}async function WR(t){try{return await(await E0()).transaction(ja).objectStore(ja).get(T0(t))}catch(e){if(e instanceof Ct)Ji.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(n.message)}}}async function _v(t,e){try{const r=(await E0()).transaction(ja,"readwrite");await r.objectStore(ja).put(e,T0(t)),await r.done}catch(n){if(n instanceof Ct)Ji.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(r.message)}}}function T0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=1024,QR=30*24*60*60*1e3;class XR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bv(),{heartbeatsToSend:n,unsentEntries:r}=JR(this._heartbeatsCache.heartbeats),i=ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bv(){return new Date().toISOString().substring(0,10)}function JR(t,e=YR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Iv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Iv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $a()?Vx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Iv(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){hr(new ln("platform-logger",e=>new dR(e),"PRIVATE")),hr(new ln("heartbeat",e=>new XR(e),"PRIVATE")),un(wf,wv,t),un(wf,wv,"esm2017"),un("fire-js","")}e2("");const t2=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:wr,_DEFAULT_ENTRY_NAME:Qr,_addComponent:cl,_addOrOverwriteComponent:v0,_apps:Xr,_clearComponents:$R,_components:qa,_getProvider:w0,_registerComponent:hr,_removeServiceInstance:BR,deleteApp:_0,getApp:zR,getApps:HR,initializeApp:Qp,onLog:b0,registerVersion:un,setLogLevel:I0,FirebaseError:Ct},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n){this._delegate=e,this.firebase=n,cl(e,new ln("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),_0(this._delegate)))}_getService(e,n=Qr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){cl(this._delegate,e)}_addOrOverwriteComponent(e){v0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ev=new fs("app-compat","Firebase",r2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:un,setLogLevel:I0,onLog:b0,apps:null,SDK_VERSION:wr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:t2}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Qr,!pv(e,u))throw Ev.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=Qp(u,l);if(pv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(hr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Ev.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&al(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){const t=i2(n2);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:S0,extendNamespace:e,createSubscribe:p0,ErrorFactory:fs,deepExtend:al});function e(n){al(t,n)}return t}const s2=S0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new ih("@firebase/app-compat"),o2="@firebase/app-compat",a2="0.2.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){un(o2,a2,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Fx()&&self.firebase!==void 0){Tv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Tv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ps=s2;c2();var u2="firebase",l2="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ps.registerVersion(u2,l2,"app-compat");function Xp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ko={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ks={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function k0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d2=h2,f2=k0,A0=new fs("auth","Firebase",k0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new ih("@firebase/auth");function p2(t,...e){ul.logLevel<=fe.WARN&&ul.warn(`Auth (${wr}): ${t}`,...e)}function Uu(t,...e){ul.logLevel<=fe.ERROR&&ul.error(`Auth (${wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Jp(t,...e)}function wt(t,...e){return Jp(t,...e)}function C0(t,e,n){const r=Object.assign(Object.assign({},f2()),{[e]:n});return new fs("auth","Firebase",r).create(e,{appName:t.name})}function ko(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),C0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return A0.create(t,...e)}function O(t,e,...n){if(!t)throw Jp(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uu(e),new Error(e)}function Tn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zp(){return Sv()==="http:"||Sv()==="https:"}function Sv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zp()||d0()||"connection"in navigator)?navigator.onLine:!0}function g2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Mx()||Gp()}get(){return m2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=new Tc(3e4,6e4);function nt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function at(t,e,n,r,i={}){return R0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=So(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),x0.fetch()(N0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function R0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},y2),e);try{const i=new w2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw aa(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw C0(t,l,u);bt(t,l)}}catch(i){if(i instanceof Ct)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function _r(t,e,n,r,i={}){const s=await at(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function N0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?em(t.config,i):`${t.config.apiScheme}://${i}`}class w2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),v2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t,e){return at(t,"POST","/v1/accounts:delete",e)}async function b2(t,e){return at(t,"POST","/v1/accounts:update",e)}async function I2(t,e){return at(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function E2(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=sh(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_a(bd(i.auth_time)),issuedAtTime:_a(bd(i.iat)),expirationTime:_a(bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function sh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uu("JWT malformed, contained fewer than 3 sections"),null;try{const i=u0(n);return i?JSON.parse(i):(Uu("Failed to decode base64 JWT payload"),null)}catch(i){return Uu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function T2(t){const e=sh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&S2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function S2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){var e;const n=t.auth,r=await t.getIdToken(),i=await dr(t,I2(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?x2(s.providerUserInfo):[],a=C2(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new P0(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function A2(t){const e=Y(t);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function x2(t){return t.map(e=>{var{providerId:n}=e,r=Xp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(t,e){const n=await R0(t,{},async()=>{const r=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=N0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):T2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await R2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ka;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ka,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new P0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return E2(this,e)}reload(){return A2(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dr(this,_2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=n.createdAt)!==null&&u!==void 0?u:void 0,b=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:T,emailVerified:S,isAnonymous:M,providerData:j,stsTokenManager:re}=n;O(T&&re,e,"internal-error");const K=Ka.fromJSON(this.name,re);O(typeof T=="string",e,"internal-error"),Pr(h,e.name),Pr(d,e.name),O(typeof S=="boolean",e,"internal-error"),O(typeof M=="boolean",e,"internal-error"),Pr(f,e.name),Pr(g,e.name),Pr(y,e.name),Pr(I,e.name),Pr(w,e.name),Pr(b,e.name);const ie=new Hi({uid:T,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:M,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:K,createdAt:w,lastLoginAt:b});return j&&Array.isArray(j)&&(ie.providerData=j.map(ye=>Object.assign({},ye))),I&&(ie._redirectEventId=I),ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ka;i.updateFromServerResponse(n);const s=new Hi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ha(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new Map;function Zt(t){Tn(t instanceof Function,"Expected a class definition");let e=kv.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O0.type="NONE";const so=O0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ki(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ki("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(Zt(so),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Zt(so);const o=Ki(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Hi._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Hs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Hs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F0(e))return"Blackberry";if(U0(e))return"Webos";if(tm(e))return"Safari";if((e.includes("chrome/")||L0(e))&&!e.includes("edge/"))return"Chrome";if(Sc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function D0(t=Be()){return/firefox\//i.test(t)}function tm(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L0(t=Be()){return/crios\//i.test(t)}function M0(t=Be()){return/iemobile/i.test(t)}function Sc(t=Be()){return/android/i.test(t)}function F0(t=Be()){return/blackberry/i.test(t)}function U0(t=Be()){return/webos/i.test(t)}function Ao(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N2(t=Be()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function P2(t=Be()){var e;return Ao(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function O2(){return f0()&&document.documentMode===10}function V0(t=Be()){return Ao(t)||Sc(t)||U0(t)||F0(t)||/windows phone/i.test(t)||M0(t)}function D2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t,e=[]){let n;switch(t){case"Browser":n=Av(Be());break;case"Worker":n=`${Av(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t){return(await at(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function $0(t,e){return at(t,"GET","/v2/recaptchaConfig",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){return t!==void 0&&t.getResponse!==void 0}function xv(t){return t!==void 0&&t.enterprise!==void 0}class q0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",M2().appendChild(r)})}function j0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const F2="https://www.google.com/recaptcha/enterprise.js?render=",U2="recaptcha-enterprise",V2="NO_RECAPTCHA";class z0{constructor(e){this.type=U2,this.auth=Xe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{$0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new q0(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;xv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(V2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&xv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nm(F2+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Jr(t,e,n,r=!1){const i=new z0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rv(this),this.idTokenSubscription=new Rv(this),this.beforeStateQueue=new B2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Y(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}async initializeRecaptchaConfig(){const e=await $0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new q0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new z0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=B0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&p2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xe(t){return Y(t)}class Rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=p0(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function q2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function j2(t,e,n){const r=Xe(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=H0(e),{host:o,port:a}=z2(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||H2()}function H0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function z2(t){const e=H0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nv(o)}}}function Nv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function H2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e){return at(t,"POST","/v1/accounts:resetPassword",nt(t,e))}async function G0(t,e){return at(t,"POST","/v1/accounts:update",e)}async function K2(t,e){return at(t,"POST","/v1/accounts:update",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(t,e){return _r(t,"POST","/v1/accounts:signInWithPassword",nt(t,e))}async function oh(t,e){return at(t,"POST","/v1/accounts:sendOobCode",nt(t,e))}async function G2(t,e){return oh(t,e)}async function Ed(t,e){return oh(t,e)}async function Td(t,e){return oh(t,e)}async function W2(t,e){return oh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}async function Q2(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Co{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Jr(e,r,"signInWithPassword");return Id(e,i)}else return Id(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Jr(e,r,"signInWithPassword");return Id(e,s)}else return Promise.reject(i)});case"emailLink":return Y2(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return G0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Q2(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e){return _r(t,"POST","/v1/accounts:signInWithIdp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="http://localhost";class Yn extends Co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}buildRequest(){const e={requestUri:X2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=So(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(t,e){return at(t,"POST","/v1/accounts:sendVerificationCode",nt(t,e))}async function Z2(t,e){return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e))}async function eN(t,e){const n=await _r(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e));if(n.temporaryProof)throw aa(t,"account-exists-with-different-credential",n);return n}const tN={USER_NOT_FOUND:"user-not-found"};async function nN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,n),tN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Co{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Gi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Gi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Z2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return eN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return nN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Gi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iN(t){const e=Ls(oa(t)).link,n=e?Ls(oa(e)).deep_link_id:null,r=Ls(oa(t)).deep_link_id;return(r?Ls(oa(r)).link:null)||r||n||e||t}class ah{constructor(e){var n,r,i,s,o,a;const c=Ls(oa(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=rN((i=c.mode)!==null&&i!==void 0?i:null);O(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iN(e);try{return new ah(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.providerId=hi.PROVIDER_ID}static credential(e,n){return Ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ah.parseLink(n);return O(r,"argument-error"),Ga._fromEmailAndCode(e,r.code,r.tenantId)}}hi.PROVIDER_ID="password";hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ks extends xo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),Yn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),Yn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ks.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ks.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ks(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends xo{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends xo{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN="http://localhost";class oo extends Co{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new oo(r,s)}static _create(e,n){return new oo(e,n)}buildRequest(){return{requestUri:sN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN="saml.";class ll extends br{constructor(e){O(e.startsWith(oN),"argument-error"),super(e)}static credentialFromResult(e){return ll.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ll.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=oo.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return oo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends xo{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(t,e){return _r(t,"POST","/v1/accounts:signUp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hi._fromIdTokenResponse(e,r,i),o=Pv(r);return new hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pv(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t){var e;const n=Xe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new hn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Vu(n,{returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hl(e,n,r,i)}}function W0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e){const n=Y(t);await ch(!0,n,e);const{providerUserInfo:r}=await b2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Y0(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function rm(t,e,n=!1){const r=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}async function ch(t,e,n){await Ha(e);const r=Y0(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await dr(t,W0(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=sh(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),hn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e,n=!1){const r="signIn",i=await W0(t,r,e),s=await hn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uh(t,e){return X0(Xe(t),e)}async function J0(t,e){const n=Y(t);return await ch(!1,n,e.providerId),rm(n,e)}async function Z0(t,e){return Q0(Y(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e){return _r(t,"POST","/v1/accounts:signInWithCustomToken",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){const n=Xe(t),r=await uN(n,{token:e,returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?im._fromServerResponse(e,n):"totpInfo"in n?sm._fromServerResponse(e,n):bt(e,"internal-error")}}class im extends kc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new im(n)}}class sm extends kc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new sm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e,n){var r;const i=Xe(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Jr(i,s,"getOobCode",!0);n&&Gs(i,o,n),await Ed(i,o)}else n&&Gs(i,s,n),await Ed(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Jr(i,s,"getOobCode",!0);n&&Gs(i,a,n),await Ed(i,a)}else return Promise.reject(o)})}async function dN(t,e,n){await K0(Y(t),{oobCode:e,newPassword:n})}async function fN(t,e){await K2(Y(t),{oobCode:e})}async function eI(t,e){const n=Y(t),r=await K0(n,{oobCode:e}),i=r.requestType;switch(O(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=kc._fromServerResponse(Xe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function pN(t,e){const{data:n}=await eI(Y(t),e);return n.email}async function mN(t,e,n){var r;const i=Xe(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Jr(i,s,"signUpPassword");o=Vu(i,u)}else o=Vu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Jr(i,s,"signUpPassword");return Vu(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await hn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function gN(t,e,n){return uh(Y(t),hi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e,n){var r;const i=Xe(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){O(c.handleCodeInApp,i,"argument-error"),c&&Gs(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Jr(i,s,"getOobCode",!0);o(a,n),await Td(i,a)}else o(s,n),await Td(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Jr(i,s,"getOobCode",!0);o(c,n),await Td(i,c)}else return Promise.reject(a)})}function vN(t,e){const n=ah.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function wN(t,e,n){const r=Y(t),i=hi.credentialWithLink(e,n||za());return O(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),uh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t,e){return at(t,"POST","/v1/accounts:createAuthUri",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){const n=Zp()?za():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await _N(Y(t),r);return i||[]}async function IN(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Gs(n.auth,i,e);const{email:s}=await G2(n.auth,i);s!==t.email&&await t.reload()}async function EN(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Gs(r.auth,s,n);const{email:o}=await W2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t,e){return at(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await dr(r,TN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kN(t,e){return tI(Y(t),e,null)}function AN(t,e){return tI(Y(t),null,e)}async function tI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await dr(t,G0(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=sh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ws(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new xN(s,i);case"github.com":return new RN(s,i);case"google.com":return new NN(s,i);case"twitter.com":return new PN(s,i,t.screenName||null);case"custom":case"anonymous":return new Ws(s,null);default:return new Ws(s,r,i)}}class Ws{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class nI extends Ws{constructor(e,n,r,i){super(e,n,r),this.username=i}}class xN extends Ws{constructor(e,n){super(e,"facebook.com",n)}}class RN extends nI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class NN extends Ws{constructor(e,n){super(e,"google.com",n)}}class PN extends nI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function ON(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:CN(n)}class Mi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Mi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Mi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Mi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Mi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Xe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>kc._fromServerResponse(r,a));O(i.mfaPendingCredential,r,"internal-error");const o=Mi._fromMfaPendingCredential(i.mfaPendingCredential);return new om(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await hn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return O(n.user,r,"internal-error"),hn._forOperation(n.user,n.operationType,u);default:bt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function DN(t,e){var n;const r=Y(t),i=e;return O(e.customData.operationType,r,"argument-error"),O((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),om._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:start",nt(t,e))}function MN(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:finalize",nt(t,e))}function FN(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:withdraw",nt(t,e))}class am{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>kc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new am(e)}async getSession(){return Mi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await dr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await dr(this.user,FN(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Sd=new WeakMap;function UN(t){const e=Y(t);return Sd.has(e)||Sd.set(e,am._fromUser(e)),Sd.get(e)}const dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dl,"1"),this.storage.removeItem(dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){const t=Be();return tm(t)||Ao(t)}const BN=1e3,$N=10;class iI extends rI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VN()&&D2(),this.fallbackToPolling=V0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);O2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$N):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iI.type="LOCAL";const cm=iI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI extends rI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sI.type="SESSION";const Zi=sI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await qN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ac("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function zN(t){et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function HN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GN(){return um()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebaseLocalStorageDb",WN=1,fl="firebaseLocalStorage",aI="fbase_key";class Cc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hh(t,e){return t.transaction([fl],e?"readwrite":"readonly").objectStore(fl)}function YN(){const t=indexedDB.deleteDatabase(oI);return new Cc(t).toPromise()}function _f(){const t=indexedDB.open(oI,WN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fl,{keyPath:aI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fl)?e(r):(r.close(),await YN(),e(await _f()))})})}async function Ov(t,e,n){const r=hh(t,!0).put({[aI]:e,value:n});return new Cc(r).toPromise()}async function QN(t,e){const n=hh(t,!1).get(e),r=await new Cc(n).toPromise();return r===void 0?null:r.value}function Dv(t,e){const n=hh(t,!0).delete(e);return new Cc(n).toPromise()}const XN=800,JN=3;class cI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(GN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HN(),!this.activeServiceWorker)return;this.sender=new jN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _f();return await Ov(e,dl,"1"),await Dv(e,dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ov(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hh(i,!1).getAll();return new Cc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cI.type="LOCAL";const Wa=cI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:start",nt(t,e))}function eP(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:finalize",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=500,nP=6e4,cu=1e12;class rP{constructor(e){this.auth=e,this.counter=cu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new iP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||cu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||cu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||cu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class iP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},nP)},tP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=j0("rcb"),oP=new Tc(3e4,6e4),aP="https://www.google.com/recaptcha/api.js?";class cP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=et().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(uP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Cv(et().grecaptcha)?Promise.resolve(et().grecaptcha):new Promise((r,i)=>{const s=et().setTimeout(()=>{i(wt(e,"network-request-failed"))},oP.get());et()[kd]=()=>{et().clearTimeout(s),delete et()[kd];const a=et().grecaptcha;if(!a||!Cv(a)){i(wt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${aP}?${So({onload:kd,render:"explicit",hl:n})}`;nm(o).catch(()=>{clearTimeout(s),i(wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=et().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function uP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class lP{async load(e){return new rP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="recaptcha",hP={theme:"light",type:"image"};class dP{constructor(e,n=Object.assign({},hP),r){this.parameters=n,this.type=uI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xe(r),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new lP:new cP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=et()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(Zp()&&!um(),this.auth,"internal-error"),await fP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await L2(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function fP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Gi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function pP(t,e,n){const r=Xe(t),i=await dh(r,e,Y(n));return new lm(i,s=>uh(r,s))}async function mP(t,e,n){const r=Y(t);await ch(!1,r,"phone");const i=await dh(r.auth,e,Y(n));return new lm(i,s=>J0(r,s))}async function gP(t,e,n){const r=Y(t),i=await dh(r.auth,e,Y(n));return new lm(i,s=>Z0(r,s))}async function dh(t,e,n){var r;const i=await n.verify();try{O(typeof i=="string",t,"argument-error"),O(n.type===uI,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return O(o.type==="enroll",t,"internal-error"),(await LN(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await ZN(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await J2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function yP(t,e){await rm(Y(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.providerId=In.PROVIDER_ID,this.auth=Xe(e)}verifyPhoneNumber(e,n){return dh(this.auth,e,Y(n))}static credential(e,n){return Gi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return In.credentialFromTaggedObject(n)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Gi._fromTokenResponse(n,r):null}}In.PROVIDER_ID="phone";In.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){return e?Zt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm extends Co{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vP(t){return X0(t.auth,new hm(t),t.bypassAuthState)}function wP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Q0(n,new hm(t),t.bypassAuthState)}async function _P(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),rm(n,new hm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vP;case"linkViaPopup":case"linkViaRedirect":return _P;case"reauthViaPopup":case"reauthViaRedirect":return wP;default:bt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=new Tc(2e3,1e4);async function IP(t,e,n){const r=Xe(t);ko(t,e,br);const i=ms(r,n);return new rr(r,"signInViaPopup",e,i).executeNotNull()}async function EP(t,e,n){const r=Y(t);ko(r.auth,e,br);const i=ms(r.auth,n);return new rr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function TP(t,e,n){const r=Y(t);ko(r.auth,e,br);const i=ms(r.auth,n);return new rr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class rr extends lI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bP.get())};e()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="pendingRedirect",ba=new Map;class kP extends lI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ba.get(this.auth._key());if(!e){try{const r=await AP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ba.set(this.auth._key(),e)}return this.bypassAuthState||ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AP(t,e){const n=dI(e),r=hI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function dm(t,e){return hI(t)._set(dI(e),"true")}function CP(){ba.clear()}function fm(t,e){ba.set(t._key(),e)}function hI(t){return Zt(t._redirectPersistence)}function dI(t){return Ki(SP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t,e,n){return RP(t,e,n)}async function RP(t,e,n){const r=Xe(t);ko(t,e,br),await r._initializationPromise;const i=ms(r,n);return await dm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function NP(t,e,n){return PP(t,e,n)}async function PP(t,e,n){const r=Y(t);ko(r.auth,e,br),await r.auth._initializationPromise;const i=ms(r.auth,n);await dm(i,r.auth);const s=await fI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function OP(t,e,n){return DP(t,e,n)}async function DP(t,e,n){const r=Y(t);ko(r.auth,e,br),await r.auth._initializationPromise;const i=ms(r.auth,n);await ch(!1,r,e.providerId),await dm(i,r.auth);const s=await fI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function LP(t,e){return await Xe(t)._initializationPromise,fh(t,e,!1)}async function fh(t,e,n=!1){const r=Xe(t),i=ms(r,e),o=await new kP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function fI(t){const e=Ac(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=10*60*1e3;class pI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lv(e))}saveEventToCache(e){this.cachedEventUids.add(Lv(e)),this.lastProcessedEventTime=Date.now()}}function Lv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e={}){return at(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VP=/^https?/;async function BP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gI(t);for(const n of e)try{if($P(n))return}catch{}bt(t,"unauthorized-domain")}function $P(t){const e=za(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VP.test(n))return!1;if(UP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=new Tc(3e4,6e4);function Mv(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jP(t){return new Promise((e,n)=>{var r,i,s;function o(){Mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mv(),n(wt(t,"network-request-failed"))},timeout:qP.get()})}if(!((i=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=et().gapi)===null||s===void 0)&&s.load)o();else{const a=j0("iframefcb");return et()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},nm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function zP(t){return Bu=Bu||jP(t),Bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new Tc(5e3,15e3),KP="__/auth/iframe",GP="emulator/auth/iframe",WP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QP(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?em(e,GP):`https://${t.config.authDomain}/${KP}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=YP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${So(r).slice(1)}`}async function XP(t){const e=await zP(t),n=et().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:QP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=et().setTimeout(()=>{s(o)},HP.get());function c(){et().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZP=500,eO=600,tO="_blank",nO="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rO(t,e,n,r=ZP,i=eO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=L0(u)?tO:n),D0(u)&&(e=e||nO,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(P2(u)&&a!=="_self")return iO(e||"",a),new Fv(null);const h=window.open(e||"",a,l);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Fv(h)}function iO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO="__/auth/handler",oO="emulator/auth/handler",aO=encodeURIComponent("fac");async function bf(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof br){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof xo){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${aO}=${encodeURIComponent(c)}`:"";return`${cO(t)}?${So(a).slice(1)}${u}`}function cO({config:t}){return t.emulator?em(t,oO):`https://${t.authDomain}/${sO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="webStorageSupport";class uO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zi,this._completeRedirectFn=fh,this._overrideRedirectResult=fm}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bf(e,n,r,za(),i);return rO(e,o,Ac())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bf(e,n,r,za(),i);return zN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XP(e),r=new pI(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ad,{type:Ad},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ad];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return V0()||tm()||Ao()}}const lO=uO;class hO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Un("unexpected MultiFactorSessionType")}}}class pm extends hO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new pm(e)}_finalizeEnroll(e,n,r){return MN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return eP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class yI{constructor(){}static assertion(e){return pm._fromCredential(e)}}yI.FACTOR_ID="phone";var Uv="@firebase/auth",Vv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pO(t){hr(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:B0(t)},u=new $2(r,i,s,c);return q2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new ln("auth-internal",e=>{const n=Xe(e.getProvider("auth").getImmediate());return(r=>new dO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Uv,Vv,fO(t)),un(Uv,Vv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=5*60;Dx("authIdTokenMaxAge");pO("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=2e3;async function yO(t,e,n){var r;const{BuildInfo:i}=es();Tn(e.sessionId,"AuthEvent did not contain a session ID");const s=await IO(e.sessionId),o={};return Ao()?o.ibi=i.packageName:Sc()?o.apn=i.packageName:bt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,bf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function vO(t){const{BuildInfo:e}=es(),n={};Ao()?n.iosBundleId=e.packageName:Sc()?n.androidPackageName=e.packageName:bt(t,"operation-not-supported-in-this-environment"),await gI(t,n)}function wO(t){const{cordova:e}=es();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,N2()?"_blank":"_system","location=yes"),n(i)})})}async function _O(t,e,n){const{cordova:r}=es();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(wt(t,"redirect-cancelled-by-user"))},gO))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Sc()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function bO(t){var e,n,r,i,s,o,a,c,u,l;const h=es();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function IO(t){const e=EO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function EO(t){if(Tn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=20;class SO extends pI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function kO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:xO(),postBody:null,tenantId:t.tenantId,error:wt(t,"no-auth-event")}}function AO(t,e){return If()._set(Ef(t),e)}async function Bv(t){const e=await If()._get(Ef(t));return e&&await If()._remove(Ef(t)),e}function CO(t,e){var n,r;const i=NO(e);if(i.includes("/__/auth/callback")){const s=$u(i),o=s.firebaseError?RO(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?wt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function xO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<TO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function If(){return Zt(cm)}function Ef(t){return Ki("authEvent",t.config.apiKey,t.name)}function RO(t){try{return JSON.parse(t)}catch{return null}}function NO(t){const e=$u(t),n=e.link?decodeURIComponent(e.link):void 0,r=$u(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $u(i).link||i||r||n||t}function $u(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ls(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=500;class OO{constructor(){this._redirectPersistence=Zi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=fh,this._overrideRedirectResult=fm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new SO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){bO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),CP(),await this._originValidation(e);const o=kO(e,r,i);await AO(e,o);const a=await yO(e,o,n),c=await wO(a);return _O(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=es(),o=setTimeout(async()=>{await Bv(e),n.onEvent($v())},PO),a=async l=>{clearTimeout(o);const h=await Bv(e);let d=null;h&&(l==null?void 0:l.url)&&(d=CO(h,l.url)),n.onEvent(d||$v())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;es().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const DO=OO;function $v(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:wt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t,e){Xe(t)._logFramework(e)}var MO="@firebase/auth-compat",FO="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=1e3;function Ia(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function VO(){return Ia()==="http:"||Ia()==="https:"}function vI(t=Be()){return!!((Ia()==="file:"||Ia()==="ionic:"||Ia()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function BO(){return Gp()||rh()}function $O(){return f0()&&(document==null?void 0:document.documentMode)===11}function qO(t=Be()){return/Edge\/\d+/.test(t)}function jO(t=Be()){return $O()||qO(t)}function wI(){try{const t=self.localStorage,e=Ac();if(t)return t.setItem(e,"1"),t.removeItem(e),jO()?$a():!0}catch{return mm()&&$a()}return!1}function mm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Cd(){return(VO()||d0()||vI())&&!BO()&&wI()&&!mm()}function _I(){return vI()&&typeof document<"u"}async function zO(){return _I()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},UO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function HO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={LOCAL:"local",NONE:"none",SESSION:"session"},Go=O,bI="persistence";function KO(t,e){if(Go(Object.values(Xt).includes(e),t,"invalid-persistence-type"),Gp()){Go(e!==Xt.SESSION,t,"unsupported-persistence-type");return}if(rh()){Go(e===Xt.NONE,t,"unsupported-persistence-type");return}if(mm()){Go(e===Xt.NONE||e===Xt.LOCAL&&$a(),t,"unsupported-persistence-type");return}Go(e===Xt.NONE||wI(),t,"unsupported-persistence-type")}async function Tf(t){await t._initializationPromise;const e=II(),n=Ki(bI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function GO(t,e){const n=II();if(!n)return[];const r=Ki(bI,t,e);switch(n.getItem(r)){case Xt.NONE:return[so];case Xt.LOCAL:return[Wa,Zi];case Xt.SESSION:return[Zi];default:return[]}}function II(){var t;try{return((t=HO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=O;class qr{constructor(){this.browserResolver=Zt(lO),this.cordovaResolver=Zt(DO),this.underlyingResolver=null,this._redirectPersistence=Zi,this._completeRedirectFn=fh,this._overrideRedirectResult=fm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _I()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return WO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await zO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){return t.unwrap()}function YO(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){return TI(t)}function XO(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new JO(t,DN(t,e))}else if(r){const i=TI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function TI(t){const{_tokenResponse:e}=t instanceof Ct?t.customData:t;if(!e)return null;if(!(t instanceof Ct)&&"temporaryProof"in e&&"phoneNumber"in e)return In.credentialFromResult(t);const n=e.providerId;if(!n||n===Ko.PASSWORD)return null;let r;switch(n){case Ko.GOOGLE:r=On;break;case Ko.FACEBOOK:r=Pn;break;case Ko.GITHUB:r=Dn;break;case Ko.TWITTER:r=Ln;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?oo._create(n,a):Yn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ks(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Ct?r.credentialFromError(t):r.credentialFromResult(t)}function qt(t,e){return e.catch(n=>{throw n instanceof Ct&&XO(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:QO(n),additionalUserInfo:ON(n),user:ir.getOrCreate(i)}})}async function Sf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>qt(t,n.confirm(r))}}class JO{constructor(e,n){this.resolver=n,this.auth=YO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return qt(EI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._delegate=e,this.multiFactor=UN(e)}static getOrCreate(e){return ir.USER_MAP.has(e)||ir.USER_MAP.set(e,new ir(e)),ir.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return qt(this.auth,J0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Sf(this.auth,mP(this._delegate,e,n))}async linkWithPopup(e){return qt(this.auth,TP(this._delegate,e,qr))}async linkWithRedirect(e){return await Tf(Xe(this.auth)),OP(this._delegate,e,qr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return qt(this.auth,Z0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Sf(this.auth,gP(this._delegate,e,n))}reauthenticateWithPopup(e){return qt(this.auth,EP(this._delegate,e,qr))}async reauthenticateWithRedirect(e){return await Tf(Xe(this.auth)),NP(this._delegate,e,qr)}sendEmailVerification(e){return IN(this._delegate,e)}async unlink(e){return await cN(this._delegate,e),this}updateEmail(e){return kN(this._delegate,e)}updatePassword(e){return AN(this._delegate,e)}updatePhoneNumber(e){return yP(this._delegate,e)}updateProfile(e){return SN(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return EN(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ir.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=O;class kf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Wo(r,"invalid-api-key",{appName:e.name}),Wo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?qr:void 0;this._delegate=n.initialize({options:{persistence:ZO(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(d2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ir.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){j2(this._delegate,e,n)}applyActionCode(e){return fN(this._delegate,e)}checkActionCode(e){return eI(this._delegate,e)}confirmPasswordReset(e,n){return dN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return qt(this._delegate,mN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return bN(this._delegate,e)}isSignInWithEmailLink(e){return vN(this._delegate,e)}async getRedirectResult(){Wo(Cd(),this._delegate,"operation-not-supported-in-this-environment");const e=await LP(this._delegate,qr);return e?qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){LO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=qv(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=qv(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return yN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return hN(this._delegate,e,n||void 0)}async setPersistence(e){KO(this._delegate,e);let n;switch(e){case Xt.SESSION:n=Zi;break;case Xt.LOCAL:n=await Zt(Wa)._isAvailable()?Wa:cm;break;case Xt.NONE:n=so;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return qt(this._delegate,aN(this._delegate))}signInWithCredential(e){return qt(this._delegate,uh(this._delegate,e))}signInWithCustomToken(e){return qt(this._delegate,lN(this._delegate,e))}signInWithEmailAndPassword(e,n){return qt(this._delegate,gN(this._delegate,e,n))}signInWithEmailLink(e,n){return qt(this._delegate,wN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Sf(this._delegate,pP(this._delegate,e,n))}async signInWithPopup(e){return Wo(Cd(),this._delegate,"operation-not-supported-in-this-environment"),qt(this._delegate,IP(this._delegate,e,qr))}async signInWithRedirect(e){return Wo(Cd(),this._delegate,"operation-not-supported-in-this-environment"),await Tf(this._delegate),xP(this._delegate,e,qr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return pN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}kf.Persistence=Xt;function qv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ir.getOrCreate(o)),error:e,complete:n}}function ZO(t,e){const n=GO(t,e);if(typeof self<"u"&&!n.includes(Wa)&&n.push(Wa),typeof window<"u")for(const r of[cm,Zi])n.includes(r)||n.push(r);return n.includes(so)||n.push(so),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.providerId="phone",this._delegate=new In(EI(ps.auth()))}static credential(e,n){return In.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}gm.PHONE_SIGN_IN_METHOD=In.PHONE_SIGN_IN_METHOD;gm.PROVIDER_ID=In.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=O;class tD{constructor(e,n,r=ps.app()){var i;eD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new dP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="auth-compat";function rD(t){t.INTERNAL.registerComponent(new ln(nD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new kf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ks.EMAIL_SIGNIN,PASSWORD_RESET:ks.PASSWORD_RESET,RECOVER_EMAIL:ks.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ks.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ks.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ks.VERIFY_EMAIL}},EmailAuthProvider:hi,FacebookAuthProvider:Pn,GithubAuthProvider:Dn,GoogleAuthProvider:On,OAuthProvider:Ks,SAMLAuthProvider:ll,PhoneAuthProvider:gm,PhoneMultiFactorGenerator:yI,RecaptchaVerifier:tD,TwitterAuthProvider:Ln,Auth:kf,AuthCredential:Co,Error:Ct}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(MO,FO)}rD(ps);var iD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,ym=ym||{},se=iD||self;function ph(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sD(t){return Object.prototype.hasOwnProperty.call(t,xd)&&t[xd]||(t[xd]=++oD)}var xd="closure_uid_"+(1e9*Math.random()>>>0),oD=0;function aD(t,e,n){return t.call.apply(t.bind,arguments)}function cD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=aD:xt=cD,xt.apply(null,arguments)}function uu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ft(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function di(){this.s=this.s,this.o=this.o}var uD=0;di.prototype.s=!1;di.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uD!=0)&&sD(this)};di.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const SI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ph(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Rt.prototype.h=function(){this.defaultPrevented=!0};var lD=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",()=>{},e),se.removeEventListener("test",()=>{},e)}catch{}return t}();function Ya(t){return/^[\s\xa0]*$/.test(t)}function mh(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Mn(t){return mh().indexOf(t)!=-1}function wm(t){return wm[" "](t),t}wm[" "]=function(){};function hD(t,e){var n=rL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var dD=Mn("Opera"),ao=Mn("Trident")||Mn("MSIE"),kI=Mn("Edge"),Af=kI||ao,AI=Mn("Gecko")&&!(mh().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),fD=mh().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge");function CI(){var t=se.document;return t?t.documentMode:void 0}var Cf;e:{var Rd="",Nd=function(){var t=mh();if(AI)return/rv:([^\);]+)(\)|;)/.exec(t);if(kI)return/Edge\/([\d\.]+)/.exec(t);if(ao)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fD)return/WebKit\/(\S+)/.exec(t);if(dD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nd&&(Rd=Nd?Nd[1]:""),ao){var Pd=CI();if(Pd!=null&&Pd>parseFloat(Rd)){Cf=String(Pd);break e}}Cf=Rd}var xf;if(se.document&&ao){var zv=CI();xf=zv||parseInt(Cf,10)||void 0}else xf=void 0;var pD=xf;function Qa(t,e){if(Rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(AI){e:{try{wm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Qa.$.h.call(this)}}ft(Qa,Rt);var mD={2:"touch",3:"pen",4:"mouse"};Qa.prototype.h=function(){Qa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Rc="closure_listenable_"+(1e6*Math.random()|0),gD=0;function yD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++gD,this.fa=this.ia=!1}function gh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _m(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xI(t){const e={};for(const n in t)e[n]=t[n];return e}const Hv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function RI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Hv.length;s++)n=Hv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function yh(t){this.src=t,this.g={},this.h=0}yh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Nf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Rf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=SI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(gh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var bm="closure_lm_"+(1e6*Math.random()|0),Od={};function NI(t,e,n,r,i){if(r&&r.once)return OI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)NI(t,e[s],n,r,i);return null}return n=Tm(n),t&&t[Rc]?t.O(e,n,xc(r)?!!r.capture:!!r,i):PI(t,e,n,!1,r,i)}function PI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=xc(i)?!!i.capture:!!i,a=Em(t);if(a||(t[bm]=a=new yh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(LI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wD(){function t(n){return e.call(t.src,t.listener,n)}const e=_D;return t}function OI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)OI(t,e[s],n,r,i);return null}return n=Tm(n),t&&t[Rc]?t.P(e,n,xc(r)?!!r.capture:!!r,i):PI(t,e,n,!0,r,i)}function DI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)DI(t,e[s],n,r,i);else r=xc(r)?!!r.capture:!!r,n=Tm(n),t&&t[Rc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Nf(s,n,r,i),-1<n&&(gh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Em(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nf(e,n,r,i)),(n=-1<t?e[t]:null)&&Im(n))}function Im(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Rc])Rf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(LI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Em(e))?(Rf(n,t),n.h==0&&(n.src=null,e[bm]=null)):gh(t)}}}function LI(t){return t in Od?Od[t]:Od[t]="on"+t}function _D(t,e){if(t.fa)t=!0;else{e=new Qa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Im(t),t=n.call(r,e)}return t}function Em(t){return t=t[bm],t instanceof yh?t:null}var Dd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tm(t){return typeof t=="function"?t:(t[Dd]||(t[Dd]=function(e){return t.handleEvent(e)}),t[Dd])}function dt(){di.call(this),this.i=new yh(this),this.S=this,this.J=null}ft(dt,di);dt.prototype[Rc]=!0;dt.prototype.removeEventListener=function(t,e,n,r){DI(this,t,e,n,r)};function _t(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Rt(e,t);else if(e instanceof Rt)e.target=e.target||t;else{var i=e;e=new Rt(r,t),RI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=lu(o,r,!0,e)&&i}if(o=e.g=t,i=lu(o,r,!0,e)&&i,i=lu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=lu(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gh(n[r]);delete t.g[e],t.h--}}this.J=null};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function lu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Rf(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Sm=se.JSON.stringify;class bD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ID(){var t=km;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ED{constructor(){this.h=this.g=null}add(e,n){const r=MI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var MI=new bD(()=>new TD,t=>t.reset());class TD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function kD(t){se.setTimeout(()=>{throw t},0)}let Xa,Ja=!1,km=new ED,FI=()=>{const t=se.Promise.resolve(void 0);Xa=()=>{t.then(AD)}};var AD=()=>{for(var t;t=ID();){try{t.h.call(t.g)}catch(n){kD(n)}var e=MI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ja=!1};function vh(t,e){dt.call(this),this.h=t||1,this.g=e||se,this.j=xt(this.qb,this),this.l=Date.now()}ft(vh,dt);B=vh.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_t(this,"tick"),this.ga&&(Am(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Am(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}B.N=function(){vh.$.N.call(this),Am(this),delete this.g};function Cm(t,e,n){if(typeof t=="function")n&&(t=xt(t,n));else if(t&&typeof t.handleEvent=="function")t=xt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function UI(t){t.g=Cm(()=>{t.g=null,t.i&&(t.i=!1,UI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CD extends di{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:UI(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Za(t){di.call(this),this.h=t,this.g={}}ft(Za,di);var Kv=[];function VI(t,e,n,r){Array.isArray(n)||(n&&(Kv[0]=n.toString()),n=Kv);for(var i=0;i<n.length;i++){var s=NI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function BI(t){_m(t.g,function(e,n){this.g.hasOwnProperty(n)&&Im(e)},t),t.g={}}Za.prototype.N=function(){Za.$.N.call(this),BI(this)};Za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wh(){this.g=!0}wh.prototype.Ea=function(){this.g=!1};function xD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ms(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+PD(t,n)+(r?" "+r:"")})}function ND(t,e){t.info(function(){return"TIMEOUT: "+e})}wh.prototype.info=function(){};function PD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Sm(n)}catch{return e}}var gs={},Gv=null;function _h(){return Gv=Gv||new dt}gs.Ta="serverreachability";function $I(t){Rt.call(this,gs.Ta,t)}ft($I,Rt);function ec(t){const e=_h();_t(e,new $I(e))}gs.STAT_EVENT="statevent";function qI(t,e){Rt.call(this,gs.STAT_EVENT,t),this.stat=e}ft(qI,Rt);function Ft(t){const e=_h();_t(e,new qI(e,t))}gs.Ua="timingevent";function jI(t,e){Rt.call(this,gs.Ua,t),this.size=e}ft(jI,Rt);function Nc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var bh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xm(){}xm.prototype.h=null;function Wv(t){return t.h||(t.h=t.i())}function HI(){}var Pc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rm(){Rt.call(this,"d")}ft(Rm,Rt);function Nm(){Rt.call(this,"c")}ft(Nm,Rt);var Pf;function Ih(){}ft(Ih,xm);Ih.prototype.g=function(){return new XMLHttpRequest};Ih.prototype.i=function(){return{}};Pf=new Ih;function Oc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Za(this),this.P=OD,t=Af?125:void 0,this.V=new vh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new KI}function KI(){this.i=null,this.g="",this.h=!1}var OD=45e3,Of={},pl={};B=Oc.prototype;B.setTimeout=function(t){this.P=t};function Df(t,e,n){t.L=1,t.v=Th(fr(e)),t.s=n,t.S=!0,GI(t,null)}function GI(t,e){t.G=Date.now(),Dc(t),t.A=fr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),t1(n.i,"t",r),t.C=0,n=t.l.J,t.h=new KI,t.g=I1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new CD(xt(t.Pa,t,t.g),t.O)),VI(t.U,t.g,"readystatechange",t.nb),e=t.I?xI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ec(),xD(t.j,t.u,t.A,t.m,t.W,t.s)}B.nb=function(t){t=t.target;const e=this.M;e&&Vn(t)==3?e.l():this.Pa(t)};B.Pa=function(t){try{if(t==this.g)e:{const l=Vn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Af||this.g&&(this.h.h||this.g.ja()||Jv(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?ec(3):ec(2)),Eh(this);var n=this.g.da();this.ca=n;t:if(WI(this)){var r=Jv(this.g);t="";var i=r.length,s=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),Ea(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,RD(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ya(a)){var u=a;break t}}u=null}if(n=u)Ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lf(this,n);else{this.i=!1,this.o=3,Ft(12),Fi(this),Ea(this);break e}}this.S?(YI(this,l,o),Af&&this.i&&l==3&&(VI(this.U,this.V,"tick",this.mb),this.V.start())):(Ms(this.j,this.m,o,null),Lf(this,o)),l==4&&Fi(this),this.i&&!this.J&&(l==4?v1(this.l,this):(this.i=!1,Dc(this)))}else eL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ft(12)):(this.o=0,Ft(13)),Fi(this),Ea(this)}}}catch{}finally{}};function WI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function YI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=DD(t,n),i==pl){e==4&&(t.o=4,Ft(14),r=!1),Ms(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Of){t.o=4,Ft(15),Ms(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ms(t.j,t.m,i,null),Lf(t,i);WI(t)&&i!=pl&&i!=Of&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fm(e),e.M=!0,Ft(11))):(Ms(t.j,t.m,n,"[Invalid Chunked Response]"),Fi(t),Ea(t))}B.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(Eh(this),YI(this,t,e),this.i&&t!=4&&Dc(this))}};function DD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pl:(n=Number(e.substring(n,r)),isNaN(n)?Of:(r+=1,r+n>e.length?pl:(e=e.slice(r,r+n),t.C=r+n,e)))}B.cancel=function(){this.J=!0,Fi(this)};function Dc(t){t.Y=Date.now()+t.P,QI(t,t.P)}function QI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nc(xt(t.lb,t),e)}function Eh(t){t.B&&(se.clearTimeout(t.B),t.B=null)}B.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ND(this.j,this.A),this.L!=2&&(ec(),Ft(17)),Fi(this),this.o=2,Ea(this)):QI(this,this.Y-t)};function Ea(t){t.l.H==0||t.J||v1(t.l,t)}function Fi(t){Eh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Am(t.V),BI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Lf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Mf(n.i,t))){if(!t.K&&Mf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yl(n),Ah(n);else break e;Mm(n),Ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Nc(xt(n.ib,n),6e3));if(1>=i1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ui(n,11)}else if((t.K||n.g==t)&&yl(n),!Ya(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Pm(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Pe(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=b1(r,r.J?r.pa:null,r.Y),o.K){s1(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Eh(a),Dc(a)),r.g=o}else g1(r);0<n.j.length&&Ch(n)}else u[0]!="stop"&&u[0]!="close"||Ui(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ui(n,7):Lm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ec(4)}catch{}}function LD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ph(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function MD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ph(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function XI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ph(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MD(t),r=LD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var JI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wi){this.h=t.h,ml(this,t.j),this.s=t.s,this.g=t.g,gl(this,t.m),this.l=t.l;var e=t.i,n=new tc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yv(this,n),this.o=t.o}else t&&(e=String(t).match(JI))?(this.h=!1,ml(this,e[1]||"",!0),this.s=ca(e[2]||""),this.g=ca(e[3]||"",!0),gl(this,e[4]),this.l=ca(e[5]||"",!0),Yv(this,e[6]||"",!0),this.o=ca(e[7]||"")):(this.h=!1,this.i=new tc(null,this.h))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ua(e,Qv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ua(e,Qv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ua(n,n.charAt(0)=="/"?BD:VD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ua(n,qD)),t.join("")};function fr(t){return new Wi(t)}function ml(t,e,n){t.j=n?ca(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yv(t,e,n){e instanceof tc?(t.i=e,jD(t.i,t.h)):(n||(e=ua(e,$D)),t.i=new tc(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Th(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ca(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ua(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,UD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function UD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qv=/[#\/\?@]/g,VD=/[#\?:]/g,BD=/[#\?]/g,$D=/[#\?@]/g,qD=/#/g;function tc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fi(t){t.g||(t.g=new Map,t.h=0,t.i&&FD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=tc.prototype;B.add=function(t,e){fi(this),this.i=null,t=Ro(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ZI(t,e){fi(t),e=Ro(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function e1(t,e){return fi(t),e=Ro(t,e),t.g.has(e)}B.forEach=function(t,e){fi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};B.ta=function(){fi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};B.Z=function(t){fi(this);let e=[];if(typeof t=="string")e1(this,t)&&(e=e.concat(this.g.get(Ro(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return fi(this),this.i=null,t=Ro(this,t),e1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function t1(t,e,n){ZI(t,e),0<n.length&&(t.i=null,t.g.set(Ro(t,e),vm(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ro(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jD(t,e){e&&!t.j&&(fi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ZI(this,r),t1(this,i,n))},t)),t.j=e}var zD=class{constructor(t,e){this.g=t,this.map=e}};function n1(t){this.l=t||HD,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HD=10;function r1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function i1(t){return t.h?1:t.g?t.g.size:0}function Mf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pm(t,e){t.g?t.g.add(e):t.h=e}function s1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}n1.prototype.cancel=function(){if(this.i=o1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function o1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return vm(t.i)}var KD=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function GD(){this.g=new KD}function WD(t,e,n){const r=n||"";try{XI(t,function(i,s){let o=i;xc(i)&&(o=Sm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function YD(t,e){const n=new wh;if(se.Image){const r=new Image;r.onload=uu(hu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=uu(hu,n,r,"TestLoadImage: error",!1,e),r.onabort=uu(hu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=uu(hu,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lc(t){this.l=t.fc||null,this.j=t.ob||!1}ft(Lc,xm);Lc.prototype.g=function(){return new Sh(this.l,this.j)};Lc.prototype.i=function(t){return function(){return t}}({});function Sh(t,e){dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Om,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(Sh,dt);var Om=0;B=Sh.prototype;B.open=function(t,e){if(this.readyState!=Om)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nc(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mc(this)),this.readyState=Om};B.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nc(this)),this.g&&(this.readyState=3,nc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;a1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function a1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}B.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mc(this):nc(this),this.readyState==3&&a1(this)}};B.Za=function(t){this.g&&(this.response=this.responseText=t,Mc(this))};B.Ya=function(t){this.g&&(this.response=t,Mc(this))};B.ka=function(){this.g&&Mc(this)};function Mc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nc(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function nc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QD=se.JSON.parse;function He(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=c1,this.L=this.M=!1}ft(He,dt);var c1="",XD=/^https?$/i,JD=["POST","PUT"];B=He.prototype;B.Oa=function(t){this.M=t};B.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pf.g(),this.C=this.u?Wv(this.u):Wv(Pf),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Xv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=se.FormData&&t instanceof se.FormData,!(0<=SI(JD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{h1(this),0<this.B&&((this.L=ZD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=Cm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xv(this,s)}};function ZD(t){return ao&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.ua=function(){typeof ym<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function Xv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,u1(t),kh(t)}function u1(t){t.F||(t.F=!0,_t(t,"complete"),_t(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),kh(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kh(this,!0)),He.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?l1(this):this.kb())};B.kb=function(){l1(this)};function l1(t){if(t.h&&typeof ym<"u"&&(!t.C[1]||Vn(t)!=4||t.da()!=2)){if(t.v&&Vn(t)==4)Cm(t.La,0,t);else if(_t(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(JI)[1]||null;!i&&se.self&&se.self.location&&(i=se.self.location.protocol.slice(0,-1)),r=!XD.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",u1(t)}}finally{kh(t)}}}}function kh(t,e){if(t.g){h1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function h1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}B.isActive=function(){return!!this.g};function Vn(t){return t.g?t.g.readyState:0}B.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QD(e)}};function Jv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case c1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function eL(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ya(t[r]))continue;var n=SD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}vD(e,function(r){return r.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function d1(t){let e="";return _m(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Dm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=d1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Yo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function f1(t){this.Ga=0,this.j=[],this.l=new wh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yo("baseRetryDelayMs",5e3,t),this.hb=Yo("retryDelaySeedMs",1e4,t),this.eb=Yo("forwardChannelMaxRetries",2,t),this.xa=Yo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new n1(t&&t.concurrentRequestLimit),this.Ja=new GD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=f1.prototype;B.ra=8;B.H=1;function Lm(t){if(p1(t),t.H==3){var e=t.W++,n=fr(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Fc(t,n),e=new Oc(t,t.l,e),e.L=2,e.v=Th(fr(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=I1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Dc(e)}_1(t)}function Ah(t){t.g&&(Fm(t),t.g.cancel(),t.g=null)}function p1(t){Ah(t),t.u&&(se.clearTimeout(t.u),t.u=null),yl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Ch(t){if(!r1(t.i)&&!t.m){t.m=!0;var e=t.Na;Xa||FI(),Ja||(Xa(),Ja=!0),km.add(e,t),t.C=0}}function tL(t,e){return i1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Nc(xt(t.Na,t,e),w1(t,t.C)),t.C++,!0)}B.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Oc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xI(s),RI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=m1(this,i,e),n=fr(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),Fc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(d1(s)))+"&"+e:this.o&&Dm(n,this.o,s)),Pm(this.i,i),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),i.aa=!0,Df(i,n,null)):Df(i,n,e),this.H=2}}else this.H==3&&(t?Zv(this,t):this.j.length==0||r1(this.i)||Zv(this))};function Zv(t,e){var n;e?n=e.m:n=t.W++;const r=fr(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),Fc(t,r),t.o&&t.s&&Dm(r,t.o,t.s),n=new Oc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=m1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Pm(t.i,n),Df(n,r,e)}function Fc(t,e){t.na&&_m(t.na,function(n,r){Pe(e,r,n)}),t.h&&XI({},function(n,r){Pe(e,r,n)})}function m1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?xt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{WD(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function g1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Xa||FI(),Ja||(Xa(),Ja=!0),km.add(e,t),t.A=0}}function Mm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Nc(xt(t.Ma,t),w1(t,t.A)),t.A++,!0)}B.Ma=function(){if(this.u=null,y1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Nc(xt(this.jb,this),t)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ft(10),Ah(this),y1(this))};function Fm(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function y1(t){t.g=new Oc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=fr(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),Fc(t,e),t.o&&t.s&&Dm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Th(fr(e)),n.s=null,n.S=!0,GI(n,t)}B.ib=function(){this.v!=null&&(this.v=null,Ah(this),Mm(this),Ft(19))};function yl(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function v1(t,e){var n=null;if(t.g==e){yl(t),Fm(t),t.g=null;var r=2}else if(Mf(t.i,e))n=e.F,s1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=_h(),_t(r,new jI(r,n)),Ch(t)}else g1(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&tL(t,e)||r==2&&Mm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ui(t,5);break;case 4:Ui(t,10);break;case 3:Ui(t,6);break;default:Ui(t,2)}}}function w1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ui(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=xt(t.pb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||ml(n,"https"),Th(n)),YD(n.toString(),r)}else Ft(2);t.H=0,t.h&&t.h.za(e),_1(t),p1(t)}B.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ft(2)):(this.l.info("Failed to ping google.com"),Ft(1))};function _1(t){if(t.H=0,t.ma=[],t.h){const e=o1(t.i);(e.length!=0||t.j.length!=0)&&(jv(t.ma,e),jv(t.ma,t.j),t.i.i.length=0,vm(t.j),t.j.length=0),t.h.ya()}}function b1(t,e,n){var r=n instanceof Wi?fr(n):new Wi(n);if(r.g!="")e&&(r.g=e+"."+r.g),gl(r,r.m);else{var i=se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Wi(null);r&&ml(s,r),e&&(s.g=e),i&&gl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),Fc(t,r),r}function I1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new He(new Lc({ob:!0})):new He(t.va),e.Oa(t.J),e}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function E1(){}B=E1.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function vl(){if(ao&&!(10<=Number(pD)))throw Error("Environmental error: no available transport.")}vl.prototype.g=function(t,e){return new en(t,e)};function en(t,e){dt.call(this),this.g=new f1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ya(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new No(this)}ft(en,dt);en.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=b1(t,null,t.Y),Ch(t)};en.prototype.close=function(){Lm(this.g)};en.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Sm(t),t=n);e.j.push(new zD(e.fb++,t)),e.H==3&&Ch(e)};en.prototype.N=function(){this.g.h=null,delete this.j,Lm(this.g),delete this.g,en.$.N.call(this)};function T1(t){Rm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ft(T1,Rm);function S1(){Nm.call(this),this.status=1}ft(S1,Nm);function No(t){this.g=t}ft(No,E1);No.prototype.Ba=function(){_t(this.g,"a")};No.prototype.Aa=function(t){_t(this.g,new T1(t))};No.prototype.za=function(t){_t(this.g,new S1)};No.prototype.ya=function(){_t(this.g,"b")};function nL(){this.blockSize=-1}function Sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(Sn,nL);Sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ld(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ld(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ld(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ld(this,r),i=0;break}}this.h=i,this.i+=e};Sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var rL={};function Um(t){return-128<=t&&128>t?hD(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Bn(t){if(isNaN(t)||!isFinite(t))return Ys;if(0>t)return yt(Bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ff;return new Te(e,0)}function k1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return yt(k1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bn(Math.pow(e,8)),r=Ys,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Bn(Math.pow(e,s)),r=r.R(s).add(Bn(o))):(r=r.R(n),r=r.add(Bn(o)))}return r}var Ff=4294967296,Ys=Um(0),Uf=Um(1),ew=Um(16777216);B=Te.prototype;B.ea=function(){if(sn(this))return-yt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ff+r)*e,e*=Ff}return t};B.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sr(this))return"0";if(sn(this))return"-"+yt(this).toString(t);for(var e=Bn(Math.pow(t,6)),n=this,r="";;){var i=_l(n,e).g;n=wl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,sr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};B.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}B.X=function(t){return t=wl(this,t),sn(t)?-1:sr(t)?0:1};function yt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(Uf)}B.abs=function(){return sn(this)?yt(this):this};B.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function wl(t,e){return t.add(yt(e))}B.R=function(t){if(sr(this)||sr(t))return Ys;if(sn(this))return sn(t)?yt(this).R(yt(t)):yt(yt(this).R(t));if(sn(t))return yt(this.R(yt(t)));if(0>this.X(ew)&&0>t.X(ew))return Bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,du(n,2*r+2*i),n[2*r+2*i+1]+=s*c,du(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,du(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,du(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function du(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Qo(t,e){this.g=t,this.h=e}function _l(t,e){if(sr(e))throw Error("division by zero");if(sr(t))return new Qo(Ys,Ys);if(sn(t))return e=_l(yt(t),e),new Qo(yt(e.g),yt(e.h));if(sn(e))return e=_l(t,yt(e)),new Qo(yt(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Uf,r=e;0>=r.X(t);)n=tw(n),r=tw(r);var i=As(n,1),s=As(r,1);for(r=As(r,2),n=As(n,2);!sr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=As(r,1),n=As(n,1)}return e=wl(t,i.R(e)),new Qo(i,e)}for(i=Ys;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bn(n),o=s.R(e);sn(o)||0<o.X(t);)n-=r,s=Bn(n),o=s.R(e);sr(s)&&(s=Uf),i=i.add(s),t=wl(t,o)}return new Qo(i,t)}B.gb=function(t){return _l(this,t).h};B.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};B.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};B.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function tw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function As(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Te(i,t.h)}vl.prototype.createWebChannel=vl.prototype.g;en.prototype.send=en.prototype.u;en.prototype.open=en.prototype.m;en.prototype.close=en.prototype.close;bh.NO_ERROR=0;bh.TIMEOUT=8;bh.HTTP_ERROR=6;zI.COMPLETE="complete";HI.EventType=Pc;Pc.OPEN="a";Pc.CLOSE="b";Pc.ERROR="c";Pc.MESSAGE="d";dt.prototype.listen=dt.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;Sn.prototype.digest=Sn.prototype.l;Sn.prototype.reset=Sn.prototype.reset;Sn.prototype.update=Sn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Bn;Te.fromString=k1;var iL=function(){return new vl},sL=function(){return _h()},Md=bh,oL=zI,aL=gs,nw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cL=Lc,fu=HI,uL=He,lL=Sn,Qs=Te;const rw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new ih("@firebase/firestore");function Vf(){return Zr.logLevel}function hL(t){Zr.setLogLevel(t)}function R(t,...e){if(Zr.logLevel<=fe.DEBUG){const n=e.map(Vm);Zr.debug(`Firestore (${Po}): ${t}`,...n)}}function We(t,...e){if(Zr.logLevel<=fe.ERROR){const n=e.map(Vm);Zr.error(`Firestore (${Po}): ${t}`,...n)}}function kn(t,...e){if(Zr.logLevel<=fe.WARN){const n=e.map(Vm);Zr.warn(`Firestore (${Po}): ${t}`,...n)}}function Vm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function X(t,e){t||q()}function dL(t,e){t||q()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class pL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mL{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ht,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ht)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new A1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new ut(e)}}class gL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new gL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.T=n.token,new vL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_L(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function x1(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ve(0,0))}static max(){return new Q(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends rc{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const bL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends rc{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return bL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(pe.fromString(e))}static fromName(e){return new L(pe.fromString(e).popFirst(5))}static empty(){return new L(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new pe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Bf(t){return t.fields.find(e=>e.kind===2)}function Si(t){return t.fields.filter(e=>e.kind!==2)}R1.UNKNOWN_ID=-1;class IL{constructor(e,n){this.fieldPath=e,this.kind=n}}class bl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new bl(0,tn.min())}}function N1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new tn(i,L.empty(),e)}function P1(t){return new tn(t.readTime,t.key,-1)}class tn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tn(Q.min(),L.empty(),-1)}static max(){return new tn(Q.max(),L.empty(),-1)}}function Bm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class D1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==O1)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new ht,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Ta(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=$m(r.target.error);this.v.reject(new Ta(e,i))}}static open(e,n,r,i){try{return new xh(n,e.transaction(i,r))}catch(s){throw new Ta(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new TL(n)}}class vn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,vn.S(Be())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),Ri(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!$a())return!1;if(vn.C())return!0;const e=Be(),n=vn.S(e),r=0<n&&n<10,i=vn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ta(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ta(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=xh.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),_.reject(u))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class EL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ri(this.L.delete())}}class Ta extends C{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function mi(t){return t.name==="IndexedDbTransactionError"}class TL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ri(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),Ri(this.store.add(e))}get(e){return Ri(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),Ri(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),Ri(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=$m(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new EL(a),u=n(a.primaryKey,a.value,c);if(u instanceof _){const l=u.catch(h=>(c.done(),_.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ri(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=$m(r.target.error);n(i)}})}let iw=!1;function $m(t){const e=vn.S(Be());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return iw||(iw=!0,setTimeout(()=>{throw r},0)),r}}return t}class SL{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){mi(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await pi(n)}await this.et(6e4)})}}class kL{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return _.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=P1(s);Bm(o,r)>0&&(r=o)}),new tn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ht.ct=-1;function Uc(t){return t==null}function ic(t){return t===0&&1/t==-1/0}function L1(t){return typeof t=="number"&&Number.isInteger(t)&&!ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sw(e)),e=AL(t.get(n),e);return sw(e)}function AL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function sw(t){return t+""}function $n(t){const e=t.length;if(X(e>=2),e===2)return X(t.charAt(0)===""&&t.charAt(1)===""),pe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:q()}s=o+2}return new pe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t,e){return[t,Ut(e)]}function M1(t,e,n){return[t,Ut(e),n]}const CL={},xL=["prefixPath","collectionGroup","readTime","documentId"],RL=["prefixPath","collectionGroup","documentId"],NL=["collectionGroup","readTime","prefixPath","documentId"],PL=["canonicalId","targetId"],OL=["targetId","path"],DL=["path","targetId"],LL=["collectionId","parent"],ML=["indexId","uid"],FL=["uid","sequenceNumber"],UL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],VL=["indexId","uid","orderedDocumentKey"],BL=["userId","collectionPath","documentId"],$L=["userId","collectionPath","largestBatchId"],qL=["userId","collectionGroup","largestBatchId"],F1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],jL=[...F1,"documentOverlays"],U1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],V1=U1,zL=[...V1,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends D1{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function pt(t,e){const n=V(t);return vn.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function B1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pu(this.root,e,this.comparator,!0)}}class pu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=s!=null?s:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cw(this.data.getIterator())}getIteratorFrom(e){return new cw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class cw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Cs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new Le(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $1("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const KL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(X(!!t),typeof t=="string"){let e=0;const n=KL.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qm(t){const e=t.mapValue.fields.__previous_value__;return Rh(e)?qm(e):e}function sc(t){const e=ei(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ju={nullValue:"NULL_VALUE"};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rh(t)?4:q1(t)?9007199254740991:10:q()}function Qn(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sc(t).isEqual(sc(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ei(r.timestampValue),o=ei(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ti(r.bytesValue).isEqual(ti(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return qe(r.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(r.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return qe(r.integerValue)===qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=qe(r.doubleValue),o=qe(i.doubleValue);return s===o?ic(s)===ic(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return co(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(aw(s)!==aw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Qn(s[a],o[a])))return!1;return!0}(t,e);default:return q()}}function oc(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function ri(t,e){if(t===e)return 0;const n=ts(t),r=ts(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=qe(i.integerValue||i.doubleValue),a=qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return uw(t.timestampValue,e.timestampValue);case 4:return uw(sc(t),sc(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ti(i),a=ti(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ae(o[c],a[c]);if(u!==0)return u}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ae(qe(i.latitude),qe(s.latitude));return o!==0?o:ae(qe(i.longitude),qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ri(o[c],a[c]);if(u)return u}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===jr.mapValue&&s===jr.mapValue)return 0;if(i===jr.mapValue)return 1;if(s===jr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ae(a[l],u[l]);if(h!==0)return h;const d=ri(o[a[l]],c[u[l]]);if(d!==0)return d}return ae(a.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function uw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ei(t),r=ei(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function uo(t){return qf(t)}function qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ei(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ti(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=qf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${qf(r.fields[a])}`;return s+"}"}(t.mapValue):q();var e,n}function ns(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jf(t){return!!t&&"integerValue"in t}function ac(t){return!!t&&"arrayValue"in t}function lw(t){return!!t&&"nullValue"in t}function hw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zu(t){return!!t&&"mapValue"in t}function Sa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function q1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function WL(t){return"nullValue"in t?ju:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ns(ni.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:q()}function YL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ns(ni.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?jr:q()}function dw(t,e){const n=ri(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function fw(t,e){const n=ri(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sa(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Sa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(Sa(this.value))}}function j1(t){const e=[];return ys(t.fields,(n,r)=>{const i=new Ye([n]);if(zu(r)){const s=j1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,Q.min(),Q.min(),Q.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Oe(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Oe(e,2,n,Q.min(),Q.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,Q.min(),Q.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.position=e,this.inclusive=n}}function pw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=ri(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function QL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{}class he extends z1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XL(e,n,r):n==="array-contains"?new eM(e,r):n==="in"?new Q1(e,r):n==="not-in"?new tM(e,r):n==="array-contains-any"?new nM(e,r):new he(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JL(e,r):new ZL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ri(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ee extends z1{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Ee(e,n)}matches(e){return lo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lo(t){return t.op==="and"}function zf(t){return t.op==="or"}function jm(t){return H1(t)&&lo(t)}function H1(t){for(const e of t.filters)if(e instanceof Ee)return!1;return!0}function Hf(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(jm(t))return t.filters.map(e=>Hf(e)).join(",");{const e=t.filters.map(n=>Hf(n)).join(",");return`${t.op}(${e})`}}function K1(t,e){return t instanceof he?function(n,r){return r instanceof he&&n.op===r.op&&n.field.isEqual(r.field)&&Qn(n.value,r.value)}(t,e):t instanceof Ee?function(n,r){return r instanceof Ee&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&K1(s,r.filters[o]),!0):!1}(t,e):void q()}function G1(t,e){const n=t.filters.concat(e);return Ee.create(n,t.op)}function W1(t){return t instanceof he?function(e){return`${e.field.canonicalString()} ${e.op} ${uo(e.value)}`}(t):t instanceof Ee?function(e){return e.op.toString()+" {"+e.getFilters().map(W1).join(" ,")+"}"}(t):"Filter"}class XL extends he{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class JL extends he{constructor(e,n){super(e,"in",n),this.keys=Y1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZL extends he{constructor(e,n){super(e,"not-in",n),this.keys=Y1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Y1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class eM extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ac(n)&&oc(n.arrayValue,this.value)}}class Q1 extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oc(this.value.arrayValue,n)}}class tM extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oc(this.value.arrayValue,n)}}class nM extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Kf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rM(t,e,n,r,i,s,o)}function rs(t){const e=V(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),e.dt=n}return e.dt}function Vc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mw(t.startAt,e.startAt)&&mw(t.endAt,e.endAt)}function Il(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function El(t,e){return t.filters.filter(n=>n instanceof he&&n.field.isEqual(e))}function gw(t,e,n){let r=ju,i=!0;for(const s of El(t,e)){let o=ju,a=!0;switch(s.op){case"<":case"<=":o=WL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ju}dw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];dw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function yw(t,e,n){let r=jr,i=!0;for(const s of El(t,e)){let o=jr,a=!0;switch(s.op){case">=":case">":o=YL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=jr}fw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];fw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function X1(t,e,n,r,i,s,o,a){return new Ir(t,e,n,r,i,s,o,a)}function Oo(t){return new Ir(t)}function vw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Hm(t){return t.collectionGroup!==null}function Yi(t){const e=V(t);if(e.wt===null){e.wt=[];const n=Nh(e),r=zm(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Xs(n)),e.wt.push(new Xs(Ye.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xs(Ye.keyField(),s))}}}return e.wt}function Yt(t){const e=V(t);if(!e._t)if(e.limitType==="F")e._t=Kf(e.path,e.collectionGroup,Yi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Yi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xs(s.field,o))}const r=e.endAt?new ii(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ii(e.startAt.position,e.startAt.inclusive):null;e._t=Kf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Gf(t,e){e.getFirstInequalityField(),Nh(t);const n=t.filters.concat([e]);return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tl(t,e,n){return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return Vc(Yt(t),Yt(e))&&t.limitType===e.limitType}function J1(t){return`${rs(Yt(t))}|lt:${t.limitType}`}function Wf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>W1(r)).join(", ")}]`),Uc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),`Target(${n})`}(Yt(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Yi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=pw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Yi(n),r)||n.endAt&&!function(i,s,o){const a=pw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Yi(n),r))}(t,e)}function Z1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eE(t){return(e,n)=>{let r=!1;for(const i of Yi(t)){const s=iM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iM(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ri(a,c):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return B1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=new xe(L.comparator);function Gt(){return sM}const tE=new xe(L.comparator);function la(...t){let e=tE;for(const n of t)e=e.insert(n.key,n);return e}function nE(t){let e=tE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qn(){return ka()}function rE(){return ka()}function ka(){return new gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const oM=new xe(L.comparator),aM=new Le(L.comparator);function ue(...t){let e=aM;for(const n of t)e=e.add(n);return e}const cM=new Le(ae);function Km(){return cM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function sE(t){return{integerValue:""+t}}function oE(t,e){return L1(e)?sE(e):iE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function uM(t,e,n){return t instanceof ho?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Rh(i)&&(i=qm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof is?cE(t,e):t instanceof ss?uE(t,e):function(r,i){const s=aE(r,i),o=ww(s)+ww(r.gt);return jf(s)&&jf(r.gt)?sE(o):iE(r.serializer,o)}(t,e)}function lM(t,e,n){return t instanceof is?cE(t,e):t instanceof ss?uE(t,e):n}function aE(t,e){return t instanceof fo?jf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ho extends Ph{}class is extends Ph{constructor(e){super(),this.elements=e}}function cE(t,e){const n=lE(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ss extends Ph{constructor(e){super(),this.elements=e}}function uE(t,e){let n=lE(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class fo extends Ph{constructor(e,n){super(),this.serializer=e,this.gt=n}}function ww(t){return qe(t.integerValue||t.doubleValue)}function lE(t){return ac(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.field=e,this.transform=n}}function hM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof is&&r instanceof is||n instanceof ss&&r instanceof ss?co(n.elements,r.elements,Qn):n instanceof fo&&r instanceof fo?Qn(n.gt,r.gt):n instanceof ho&&r instanceof ho}(t.transform,e.transform)}class dM{constructor(e,n){this.version=e,this.transformResults=n}}class Ue{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oh{}function hE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lo(t.key,Ue.none()):new Do(t.key,t.data,Ue.none());{const n=t.data,r=vt.empty();let i=new Le(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Er(t.key,r,new Kt(i.toArray()),Ue.none())}}function fM(t,e,n){t instanceof Do?function(r,i,s){const o=r.value.clone(),a=bw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(r,i,s){if(!Hu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=bw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(dE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Aa(t,e,n,r){return t instanceof Do?function(i,s,o,a){if(!Hu(i.precondition,s))return o;const c=i.value.clone(),u=Iw(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(i,s,o,a){if(!Hu(i.precondition,s))return o;const c=Iw(i.fieldTransforms,a,s),u=s.data;return u.setAll(dE(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return Hu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function pM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=aE(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function _w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&co(n,r,(i,s)=>hM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Do extends Oh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Er extends Oh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bw(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,lM(o,a,n[i]))}return r}function Iw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uM(s,o,e))}return r}class Lo extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gm extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=hE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,r)=>_w(n,r))&&co(this.baseMutations,e.baseMutations,(n,r)=>_w(n,r))}}class Ym{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=oM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ym(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,de;function fE(t){switch(t){default:return q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function pE(t){if(t===void 0)return We("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ze.OK:return E.OK;case Ze.CANCELLED:return E.CANCELLED;case Ze.UNKNOWN:return E.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return E.INTERNAL;case Ze.UNAVAILABLE:return E.UNAVAILABLE;case Ze.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ze.NOT_FOUND:return E.NOT_FOUND;case Ze.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ze.ABORTED:return E.ABORTED;case Ze.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ze.DATA_LOSS:return E.DATA_LOSS;default:return q()}}(de=Ze||(Ze={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return mu}static getOrCreateInstance(){return mu===null&&(mu=new Xm),mu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let mu=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM=new Qs([4294967295,4294967295],0);function Ew(t){const e=mE().encode(t),n=new lL;return n.update(e),new Uint8Array(n.digest())}function Tw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qs([n,r],0),new Qs([i,s],0)]}class Jm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ha(`Invalid padding: ${n}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ha(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Qs.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Qs.fromNumber(r)));return i.compare(gM)===1&&(i=new Qs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Ew(e),[r,i]=Tw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Ew(e),[r,i]=Tw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,zc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jc(Q.min(),i,new xe(ae),Gt(),ue())}}class zc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new zc(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class gE{constructor(e,n){this.targetId=e,this.Vt=n}}class yE{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sw{constructor(){this.St=0,this.Dt=Aw(),this.Ct=st.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ue(),n=ue(),r=ue();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new zc(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Aw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class yM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Gt(),this.zt=kw(),this.Wt=new xe(ae)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Il(o))if(i===0){const a=new L(o.path);this.Yt(r,a,Oe.newNoDocument(a,Q.min()))}else X(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Xm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,g,y,I,w;const b={localCacheCount:l,existenceFilterCount:h.count},T=h.unchangedNames;return T&&(b.bloomFilter={applied:u===0,hashCount:(d=T==null?void 0:T.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(g=(f=T==null?void 0:T.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&y!==void 0?y:0,padding:(w=(I=T==null?void 0:T.bits)===null||I===void 0?void 0:I.padding)!==null&&w!==void 0?w:0}),b}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=ti(s).toUint8Array()}catch(l){if(l instanceof $1)return kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Jm(c,o,a)}catch(l){return kn(l instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Il(a.target)){const c=new L(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Oe.newNoDocument(c,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=ue();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new jc(e,n,this.Wt,this.jt,r);return this.jt=Gt(),this.zt=kw(),this.Wt=new xe(ae),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Sw,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Le(ae),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Sw),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function kw(){return new xe(L.comparator)}function Aw(){return new xe(L.comparator)}const vM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_M=(()=>({and:"AND",or:"OR"}))();class bM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yf(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function po(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IM(t,e){return po(t,e.toTimestamp())}function Qe(t){return X(!!t),Q.fromTimestamp(function(e){const n=ei(e);return new Ve(n.seconds,n.nanos)}(t))}function Zm(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function wE(t){const e=pe.fromString(t);return X(CE(e)),e}function cc(t,e){return Zm(t.databaseId,e.path)}function Hn(t,e){const n=wE(e);if(n.get(1)!==t.databaseId.projectId)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(bE(n))}function Qf(t,e){return Zm(t.databaseId,e)}function _E(t){const e=wE(t);return e.length===4?pe.emptyPath():bE(e)}function uc(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bE(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cw(t,e,n){return{name:cc(t,e),fields:n.value.mapValue.fields}}function IE(t,e,n){const r=Hn(t,e.name),i=Qe(e.updateTime),s=e.createTime?Qe(e.createTime):Q.min(),o=new vt({mapValue:{fields:e.fields}}),a=Oe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function EM(t,e){return"found"in e?function(n,r){X(!!r.found),r.found.name,r.found.updateTime;const i=Hn(n,r.found.name),s=Qe(r.found.updateTime),o=r.found.createTime?Qe(r.found.createTime):Q.min(),a=new vt({mapValue:{fields:r.found.fields}});return Oe.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){X(!!r.missing),X(!!r.readTime);const i=Hn(n,r.missing),s=Qe(r.readTime);return Oe.newNoDocument(i,s)}(t,e):q()}function TM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(X(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(X(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:pE(c.code);return new C(u,c.message||"")}(o);n=new yE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hn(t,r.document.name),s=Qe(r.document.updateTime),o=r.document.createTime?Qe(r.document.createTime):Q.min(),a=new vt({mapValue:{fields:r.document.fields}}),c=Oe.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ku(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hn(t,r.document),s=r.readTime?Qe(r.readTime):Q.min(),o=Oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ku([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hn(t,r.document),s=r.removedTargetIds||[];n=new Ku([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mM(i,s),a=r.targetId;n=new gE(a,o)}}return n}function lc(t,e){let n;if(e instanceof Do)n={update:Cw(t,e.key,e.value)};else if(e instanceof Lo)n={delete:cc(t,e.key)};else if(e instanceof Er)n={update:Cw(t,e.key,e.data),updateMask:RM(e.fieldMask)};else{if(!(e instanceof Gm))return q();n={verify:cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ho)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof is)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ss)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fo)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:IM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function Xf(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ue.updateTime(Qe(i.updateTime)):i.exists!==void 0?Ue.exists(i.exists):Ue.none()}(e.currentDocument):Ue.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)X(o.setToServerValue==="REQUEST_TIME"),a=new ho;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new is(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new ss(u)}else"increment"in o?a=new fo(s,o.increment):q();const c=Ye.fromServerFormat(o.fieldPath);return new qc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Hn(t,e.update.name),s=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Kt(c.map(u=>Ye.fromServerFormat(u)))}(e.updateMask);return new Er(i,s,o,n,r)}return new Do(i,s,n,r)}if(e.delete){const i=Hn(t,e.delete);return new Lo(i,n)}if(e.verify){const i=Hn(t,e.verify);return new Gm(i,n)}return q()}function SM(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Qe(r.updateTime):Qe(i);return s.isEqual(Q.min())&&(s=Qe(i)),new dM(s,r.transformResults||[])}(n,e))):[]}function EE(t,e){return{documents:[Qf(t,e.path)]}}function TE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return AE(Ee.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ps(l.field),direction:AM(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Yf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function SE(t){let e=_E(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const h=kE(l);return h instanceof Ee&&jm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Xs(Os(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Uc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ii(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ii(d,h)}(n.endAt)),X1(e,i,o,s,a,"F",c,u)}function kM(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Os(e.unaryFilter.field);return he.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Os(e.unaryFilter.field);return he.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Os(e.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Os(e.unaryFilter.field);return he.create(s,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(e){return he.create(Os(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ee.create(e.compositeFilter.filters.map(n=>kE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(t):q()}function AM(t){return vM[t]}function CM(t){return wM[t]}function xM(t){return _M[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Os(t){return Ye.fromServerFormat(t.fieldPath)}function AE(t){return t instanceof he?function(e){if(e.op==="=="){if(hw(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NAN"}};if(lw(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(hw(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NAN"}};if(lw(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(e.field),op:CM(e.op),value:e.value}}}(t):t instanceof Ee?function(e){const n=e.getFilters().map(r=>AE(r));return n.length===1?n[0]:{compositeFilter:{op:xM(e.op),filters:n}}}(t):q()}function RM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.fe=e}}function NM(t,e){let n;if(e.document)n=IE(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=as(e.noDocument.readTime);n=Oe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const r=L.fromSegments(e.unknownDocument.path),i=as(e.unknownDocument.version);n=Oe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ve(r[0],r[1]);return Q.fromTimestamp(i)}(e.readTime)),n}function xw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Sl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:cc(i,s.key),fields:s.data.value.mapValue.fields,updateTime:po(i,s.version.toTimestamp()),createTime:po(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:os(e.version)};else{if(!e.isUnknownDocument())return q();r.unknownDocument={path:n.path.toArray(),version:os(e.version)}}return r}function Sl(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function os(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function as(t){const e=new Ve(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function Ni(t,e){const n=(e.baseMutations||[]).map(s=>Xf(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Xf(t.fe,s)),i=Ve.fromMillis(e.localWriteTimeMs);return new Wm(e.batchId,i,n,r)}function da(t){const e=as(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?as(t.lastLimboFreeSnapshotVersion):Q.min();let r;var i;return t.query.documents!==void 0?(X((i=t.query).documents.length===1),r=Yt(Oo(_E(i.documents[0])))):r=function(s){return Yt(SE(s))}(t.query),new or(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,st.fromBase64String(t.resumeToken))}function RE(t,e){const n=os(e.snapshotVersion),r=os(e.lastLimboFreeSnapshotVersion);let i;i=Il(e.target)?EE(t.fe,e.target):TE(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:rs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function eg(t){const e=SE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tl(e,e.limit,"L"):e}function Fd(t,e){return new Qm(e.largestBatchId,Xf(t.fe,e.overlayMutation))}function Rw(t,e){const n=e.path.lastSegment();return[t,Ut(e.path.popLast()),n]}function Nw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:os(r.readTime),documentKey:Ut(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{getBundleMetadata(e,n){return Pw(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:as(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return Pw(e).put({bundleId:(r=n).id,createTime:os(Qe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Ow(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:eg(i.bundledQuery),readTime:as(i.readTime)};var i})}saveNamedQuery(e,n){return Ow(e).put(function(r){return{name:r.name,readTime:os(Qe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Pw(t){return pt(t,"bundles")}function Ow(t){return pt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new Dh(e,r)}getOverlay(e,n){return Xo(e).get(Rw(this.userId,n)).next(r=>r?Fd(this.serializer,r):null)}getOverlays(e,n){const r=qn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Qm(n,o);i.push(this.we(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ut(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Xo(e).J("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,n,r){const i=qn(),s=Ut(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Fd(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=qn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Xo(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Fd(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}we(e,n){return Xo(e).put(function(r,i,s){const[o,a,c]=Rw(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:lc(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function Xo(t){return pt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(qe(e.integerValue));else if("doubleValue"in e){const r=qe(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),ic(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(ti(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?q1(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):q()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),L.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Pi.Ve=new Pi;function OM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Dw(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=OM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class DM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=Dw(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=Dw(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class LM{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class MM{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Jo{constructor(){this.je=new DM,this.ze=new LM(this.je),this.We=new MM(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Oi(this.indexId,this.documentKey,this.arrayValue,r)}}function Or(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Lw(t.arrayValue,e.arrayValue),n!==0?n:(n=Lw(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function Lw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){X(e.collectionGroup===this.collectionId);const n=Bf(e);if(n!==void 0&&!this.en(n))return!1;const r=Si(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t){var e,n;if(X(t instanceof he||t instanceof Ee),t instanceof he){if(t instanceof Q1){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>he.create(t.field,"==",s)))||[];return Ee.create(i,"or")}return t}const r=t.filters.map(i=>NE(i));return Ee.create(r,t.op)}function UM(t){if(t.getFilters().length===0)return[];const e=ep(NE(t));return X(PE(e)),Jf(e)||Zf(e)?[e]:e.getFilters()}function Jf(t){return t instanceof he}function Zf(t){return t instanceof Ee&&jm(t)}function PE(t){return Jf(t)||Zf(t)||function(e){if(e instanceof Ee&&zf(e)){for(const n of e.getFilters())if(!Jf(n)&&!Zf(n))return!1;return!0}return!1}(t)}function ep(t){if(X(t instanceof he||t instanceof Ee),t instanceof he)return t;if(t.filters.length===1)return ep(t.filters[0]);const e=t.filters.map(r=>ep(r));let n=Ee.create(e,t.op);return n=kl(n),PE(n)?n:(X(n instanceof Ee),X(lo(n)),X(n.filters.length>1),n.filters.reduce((r,i)=>tg(r,i)))}function tg(t,e){let n;return X(t instanceof he||t instanceof Ee),X(e instanceof he||e instanceof Ee),n=t instanceof he?e instanceof he?function(r,i){return Ee.create([r,i],"and")}(t,e):Mw(t,e):e instanceof he?Mw(e,t):function(r,i){if(X(r.filters.length>0&&i.filters.length>0),lo(r)&&lo(i))return G1(r,i.getFilters());const s=zf(r)?r:i,o=zf(r)?i:r,a=s.filters.map(c=>tg(c,o));return Ee.create(a,"or")}(t,e),kl(n)}function Mw(t,e){if(lo(e))return G1(e,t.getFilters());{const n=e.filters.map(r=>tg(t,r));return Ee.create(n,"or")}}function kl(t){if(X(t instanceof he||t instanceof Ee),t instanceof he)return t;const e=t.getFilters();if(e.length===1)return kl(e[0]);if(H1(t))return t;const n=e.map(i=>kl(i)),r=[];return n.forEach(i=>{i instanceof he?r.push(i):i instanceof Ee&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ee.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(){this.rn=new ng}addToCollectionParentIndex(e,n){return this.rn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(tn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class ng{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Uint8Array(0);class BM{constructor(e,n){this.user=e,this.databaseId=n,this.on=new ng,this.un=new gi(r=>rs(r),(r,i)=>Vc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Ut(i)};return Fw(e).put(s)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[x1(n),""],!1,!0);return Fw(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push($n(o.parent))}return r})}addFieldIndex(e,n){const r=yu(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ea(e);return s.next(a=>{o.put(Nw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=yu(e),i=ea(e),s=Zo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Zo(e);let i=!0;const s=new Map;return _.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ue();const a=[];return _.forEach(s,(c,u)=>{var l;R("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(T=>`${T.fieldPath}:${T.kind}`).join(",")}`} to execute ${rs(n)}`);const h=function(T,S){const M=Bf(S);if(M===void 0)return null;for(const j of El(T,M.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(u,c),d=function(T,S){const M=new Map;for(const j of Si(S))for(const re of El(T,j.fieldPath))switch(re.op){case"==":case"in":M.set(j.fieldPath.canonicalString(),re.value);break;case"not-in":case"!=":return M.set(j.fieldPath.canonicalString(),re.value),Array.from(M.values())}return null}(u,c),f=function(T,S){const M=[];let j=!0;for(const re of Si(S)){const K=re.kind===0?gw(T,re.fieldPath,T.startAt):yw(T,re.fieldPath,T.startAt);M.push(K.value),j&&(j=K.inclusive)}return new ii(M,j)}(u,c),g=function(T,S){const M=[];let j=!0;for(const re of Si(S)){const K=re.kind===0?yw(T,re.fieldPath,T.endAt):gw(T,re.fieldPath,T.endAt);M.push(K.value),j&&(j=K.inclusive)}return new ii(M,j)}(u,c),y=this.hn(c,u,f),I=this.hn(c,u,g),w=this.ln(c,u,d),b=this.fn(c.indexId,h,y,f.inclusive,I,g.inclusive,w);return _.forEach(b,T=>r.H(T,n.limit).next(S=>{S.forEach(M=>{const j=L.fromSegments(M.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return _.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=UM(Ee.create(e.filters,"and")).map(r=>Kf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.dn(n[h/u]):gu,f=this.wn(e,d,r[h%u],i),g=this._n(e,d,s[h%u],o),y=a.map(I=>this.wn(e,d,I,!0));l.push(...this.createRange(f,g,y))}return l}wn(e,n,r,i){const s=new Oi(e,L.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new Oi(e,L.empty(),n,r);return i?s.Je():s}an(e,n){const r=new FM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return _.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Le(Ye.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new Jo;for(const i of Si(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Pi.Ve._e(s,o)}return r.Qe()}dn(e){const n=new Jo;return Pi.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new Jo;return Pi.Ve._e(ns(this.databaseId,n),r.He(function(i){const s=Si(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new Jo);let s=0;for(const o of Si(e)){const a=r[s++];for(const c of i)if(this.yn(n,o.fieldPath)&&ac(a))i=this.pn(i,o,a);else{const u=c.He(o.kind);Pi.Ve._e(a,u)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Jo;c.seed(a.Qe()),Pi.Ve._e(o,c.He(n.kind)),s.push(c)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof he&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=yu(e),i=ea(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new bl(l.sequenceNumber,new tn(as(l.readTime),new L($n(l.documentKey)),l.largestBatchId)):bl.empty(),d=u.fields.map(([f,g])=>new IL(Ye.fromServerFormat(f),g));return new R1(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ae(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=yu(e),s=ea(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>_.forEach(a,c=>s.put(Nw(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,c=>this.En(e,i,c).next(u=>{const l=this.An(s,c);return u.isEqual(l)?_.resolve():this.vn(e,s,c,u,l)}))))})}Rn(e,n,r,i){return Zo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return Zo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=Zo(e);let s=new Le(Or);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new Oi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new Le(Or);const i=this.mn(n,e);if(i==null)return r;const s=Bf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(ac(o))for(const a of o.arrayValue.values||[])r=r.add(new Oi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Oi(n.indexId,e.key,gu,i));return r}vn(e,n,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let g=Cs(d),y=Cs(f);for(;g||y;){let I=!1,w=!1;if(g&&y){const b=u(g,y);b<0?w=!0:b>0&&(I=!0)}else g!=null?w=!0:I=!0;I?(l(y),y=Cs(f)):w?(h(g),g=Cs(d)):(g=Cs(d),y=Cs(f))}}(i,s,Or,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),_.waitFor(o)}Tn(e){let n=1;return ea(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Or(o,a)).filter((o,a,c)=>!a||Or(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Or(o,e),c=Or(o,n);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,gu,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,gu,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,n){return Or(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Uw)}getMinOffset(e,n){return _.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||q())).next(Uw)}}function Fw(t){return pt(t,"collectionParents")}function Zo(t){return pt(t,"indexEntries")}function yu(t){return pt(t,"indexConfiguration")}function ea(t){return pt(t,"indexState")}function Uw(t){X(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Bm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new tn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class jt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{X(a===1)}));const u=[];for(const l of n.mutations){const h=M1(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return _.waitFor(s).next(()=>u)}function Al(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(41943040,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);class Lh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Lh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ds(e),o=Dr(e);return o.add({}).next(a=>{X(typeof a=="number");const c=new Wm(a,n,r,i),u=function(d,f,g){const y=g.baseMutations.map(w=>lc(d.fe,w)),I=g.mutations.map(w=>lc(d.fe,w));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:y,mutations:I}}(this.serializer,this.userId,c),l=[];let h=new Le((d,f)=>ae(d.canonicalString(),f.canonicalString()));for(const d of i){const f=M1(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,CL))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),_.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Dr(e).get(n).next(r=>r?(X(r.userId===this.userId),Ni(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?_.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Dr(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(X(a.batchId>=r),s=Ni(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Dr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dr(e).j("userMutationsIndex",n).next(r=>r.map(i=>Ni(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=qu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ds(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=$n(l);if(u===this.userId&&n.path.isEqual(d))return Dr(e).get(h).next(f=>{if(!f)throw q();X(f.userId===this.userId),s.push(Ni(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ae);const i=[];return n.forEach(s=>{const o=qu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Ds(e).X({range:a},(u,l,h)=>{const[d,f,g]=u,y=$n(f);d===this.userId&&s.path.isEqual(y)?r=r.add(g):h.done()});i.push(c)}),_.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=qu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Le(ae);return Ds(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,g=$n(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Dr(e).get(s).next(o=>{if(o===null)throw q();X(o.userId===this.userId),r.push(Ni(this.serializer,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return OE(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ds(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=$n(s[1]);i.push(c)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,n){return DE(e,this.userId,n)}xn(e){return LE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function DE(t,e,n){const r=qu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ds(t).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Dr(t){return pt(t,"mutations")}function Ds(t){return pt(t,"documentMutations")}function LE(t){return pt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new cs(0)}static Mn(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new cs(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>Q.fromTimestamp(new Ve(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>xs(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return xs(e).X((o,a)=>{const c=da(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,n){return xs(e).X((r,i)=>{const s=da(i);n(s)})}$n(e){return Bw(e).get("targetGlobalKey").next(n=>(X(n!==null),n))}On(e,n){return Bw(e).put("targetGlobalKey",n)}Fn(e,n){return xs(e).put(RE(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=rs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return xs(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=da(a);Vc(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Br(e);return n.forEach(o=>{const a=Ut(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=Br(e);return _.forEach(n,s=>{const o=Ut(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Br(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Br(e);let s=ue();return i.X({range:r,Y:!0},(o,a,c)=>{const u=$n(o[1]),l=new L(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=Ut(n.path),i=IDBKeyRange.bound([r],[x1(r)],!1,!0);let s=0;return Br(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,n){return xs(e).get(n).next(r=>r?da(r):null)}}function xs(t){return pt(t,"targets")}function Bw(t){return pt(t,"targetGlobal")}function Br(t){return pt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class qM{constructor(e){this.Ln=e,this.buffer=new Le($w),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$w(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mi(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await pi(n)}await this.Qn(3e5)})}}class zM{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(Ht.ct);const r=new qM(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(Vw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vw):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Vf()<=fe.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function HM(t,e){return new zM(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,n){this.db=e,this.garbageCollector=HM(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return vu(e,r)}removeReference(e,n,r){return vu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return vu(e,n)}Xn(e,n){return function(r,i){let s=!1;return LE(r).Z(o=>DE(r,o,i).next(a=>(a&&(s=!0),_.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),Br(e).delete([0,Ut(o.path)])))});i.push(c)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return vu(e,n)}Yn(e,n){const r=Br(e);let i,s=Ht.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Ht.ct&&n(new L($n(i)),s),s=u,i=c):s=Ht.ct}).next(()=>{s!==Ht.ct&&n(new L($n(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function vu(t,e){return Br(t).put(function(n,r){return{targetId:0,path:Ut(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ei(e).put(r)}removeEntry(e,n,r){return Ei(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Sl(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=Oe.newInvalidDocument(n);return Ei(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ta(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:Oe.newInvalidDocument(n)};return Ei(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ta(n))},(i,s)=>{r={document:this.ts(n,s),size:Al(s)}}).next(()=>r)}getEntries(e,n){let r=Gt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=Gt(),i=new xe(L.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Al(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return _.resolve();let i=new Le(zw);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(ta(i.first()),ta(i.last())),o=i.getIterator();let a=o.getNext();return Ei(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&zw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(ta(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Sl(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ei(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Gt();for(const l of c){const h=this.ts(L.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&($c(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=Gt();const o=jw(n,r),a=jw(n,tn.max());return Ei(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.ts(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new WM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return qw(e).get("remoteDocumentGlobalKey").next(n=>(X(!!n),n))}Zn(e,n){return qw(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=NM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Oe.newInvalidDocument(e)}}function FE(t){return new GM(t)}class WM extends ME{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new gi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Le((s,o)=>ae(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=xw(this.os.serializer,o);i=i.add(s.path.popLast());const u=Al(c);r+=u-a.size,n.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=xw(this.os.serializer,o.convertToNoDocument(Q.min()));n.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function qw(t){return pt(t,"remoteDocumentGlobal")}function Ei(t){return pt(t,"remoteDocumentsV14")}function ta(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function jw(t,e){const n=e.documentKey.path.toArray();return[t,Sl(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function zw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ae(n[s],r[s]),i)return i;return i=ae(n.length,r.length),i||(i=ae(n[n.length-2],r[r.length-2]),i||ae(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Aa(r.mutation,i,Kt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=la();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Gt();const o=ka(),a=ka();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Er)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Aa(l.mutation,u,l.mutation.getFieldMask(),Ve.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new YM(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ka();let i=new xe((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Kt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ue()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=rE();l.forEach(d=>{if(!s.has(d)){const f=hE(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(qn());let a=-1,c=s;return o.next(u=>_.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?_.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ue())).next(l=>({batchId:a,changes:nE(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=la();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=la();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const c=function(u,l){return new Ir(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Oe.newInvalidDocument(u)))});let o=la();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Aa(u.mutation,c,Kt.empty(),Ve.now()),$c(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return _.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Qe(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:eg(r.bundledQuery),readTime:Qe(r.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(){this.overlays=new xe(L.comparator),this.ls=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=qn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=qn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return _.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qm(n,r));let s=this.ls.get(n);s===void 0&&(s=ue(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.fs=new Le(ct.ds),this.ws=new Le(ct._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new ct(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new ct(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new L(new pe([])),r=new ct(n,e),i=new ct(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new L(new pe([])),r=new ct(n,e),i=new ct(n,e+1);let s=ue();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return L.comparator(e.key,n.key)||ae(e.As,n.As)}static _s(e,n){return ae(e.As,n.As)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Le(ct.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ae);return n.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),_.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new ct(new L(s),0);let a=new Le(ae);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(n.mutations,i=>{const s=new ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new ct(n,0),i=this.Rs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.Ds=e,this.docs=new xe(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let r=Gt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Gt();const o=n.path,a=new L(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Bm(P1(l),r)<=0||(i.has(l.key)||$c(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}Cs(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new e4(this)}getSize(e){return _.resolve(this.size)}}class e4 extends ME{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.persistence=e,this.xs=new gi(n=>rs(n),Vc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new rg,this.targetCount=0,this.Ms=cs.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),_.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Fn(n),_.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.$s={},this.overlays={},this.Os=new Ht(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new t4(this),this.indexManager=new VM,this.remoteDocumentCache=function(r){return new ZM(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new xE(n),this.qs=new QM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new JM(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new n4(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return _.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class n4 extends D1{constructor(e){super(),this.currentSequenceNumber=e}}class Mh{constructor(e){this.persistence=e,this.Qs=new rg,this.js=null}static zs(e){return new Mh(e)}get Ws(){if(this.js)return this.js;throw q()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),_.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,r=>{const i=L.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return _.or([()=>_.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e){this.serializer=e}O(e,n,r,i){const s=new xh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ow,{unique:!0}),a.createObjectStore("documentMutations")}(e),Hw(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Hw(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ow,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return _.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:BL});c.createIndex("collectionPathOverlayIndex",$L,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",qL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:xL});c.createIndex("documentKeyIndex",RL),c.createIndex("collectionGroupIndex",NL)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:ML}).createIndex("sequenceNumberIndex",FL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:UL}).createIndex("documentKeyIndex",VL,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=Al(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>_.forEach(a,c=>{X(c.userId===s.userId);const u=Ni(this.serializer,c);return OE(e,s.userId,u).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new pe(o),u=function(l){return[0,Ut(l)]}(c);s.push(n.get(u).next(l=>l?_.resolve():(h=>n.put({targetId:0,path:Ut(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>_.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:LL});const r=n.store("collectionParents"),i=new ng,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ut(c)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new pe(o);return s(c.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=$n(a);return s(l.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=da(i),o=RE(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(pe.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):q()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>_.waitFor(i))}si(e,n){const r=n.store("mutations"),i=FE(this.serializer),s=new VE(Mh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ue();Ni(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),_.forEach(a,(c,u)=>{const l=new ut(u),h=Dh.de(this.serializer,l),d=s.getIndexManager(l),f=Lh.de(l,this.serializer,d,s.referenceDelegate);return new UE(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new $f(n,Ht.ct),c).next()})})}}function Hw(t){t.createObjectStore("targetDocuments",{keyPath:OL}).createIndex("documentTargetsIndex",DL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",PL,{unique:!0}),t.createObjectStore("targetGlobal")}const Ud="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ig{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!ig.D())throw new C(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new KM(this,i),this.di=n+"main",this.serializer=new xE(c),this.wi=new vn(this.di,this.ui,new r4(this.serializer)),this.Bs=new $M(this.referenceDelegate,this.serializer),this.remoteDocumentCache=FE(this.serializer),this.qs=new PM,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,Ud);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Ht(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>wu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(mi(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return na(e).get("owner").next(n=>_.resolve(this.Ri(n)))}Pi(e){return wu(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=pt(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?_.resolve(!0):na(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,Ud);return!1}}return!(!this.networkEnabled||!this.inForeground)||wu(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new $f(e,Ht.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>wu(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Lh.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new BM(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Dh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?zL:o===14?V1:o===13?U1:o===12?jL:o===11?F1:void q();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new $f(c,this.Os?this.Os.next():Ht.ct),n==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new C(E.FAILED_PRECONDITION,O1);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return na(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(E.FAILED_PRECONDITION,Ud)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return na(e).put("owner",n)}static D(){return vn.D()}Ai(e){const n=na(e);return n.get("owner").next(r=>this.Ri(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;Ux()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function na(t){return pt(t,"owner")}function wu(t){return pt(t,"clientMetadata")}function sg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new og(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(vw(n))return _.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tl(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(n,a);return this.zi(n,u,o,c.readTime)?this.Ki(e,Tl(n,null,"F")):this.Wi(e,u,n,c)}))})))}Gi(e,n,r,i){return vw(n)||i.isEqual(Q.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Vf()<=fe.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wf(n)),this.Wi(e,o,n,N1(i,-1)))})}ji(e,n){let r=new Le(eE(e));return n.forEach((i,s)=>{$c(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Vf()<=fe.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Wf(n)),this.Ui.getDocumentsMatchingQuery(e,n,tn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new xe(ae),this.Yi=new gi(s=>rs(s),Vc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UE(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function $E(t,e,n,r){return new i4(t,e,n,r)}async function qE(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ue();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function s4(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=_.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const y=c.docVersions.get(f);X(y!==null),g.version.compareTo(y)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jE(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function o4(t,e){const n=V(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(st.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(g,y,I){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,l)&&a.push(n.Bs.updateTargetData(s,f))});let c=Gt(),u=ue();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(zE(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(Q.min())){const l=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ji=i,s))}function zE(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gt();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function a4(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mo(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function go(t,e,n){const r=V(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mi(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Cl(t,e,n){const r=V(t);let i=Q.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=V(a),h=l.Yi.get(u);return h!==void 0?_.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,Yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ue())).next(a=>(GE(r,Z1(e),a),{documents:a,ir:s})))}function HE(t,e){const n=V(t),r=V(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function KE(t,e){const n=V(t),r=n.Xi.get(e)||Q.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,N1(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(GE(n,e,i),i))}function GE(t,e,n){let r=t.Xi.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function c4(t,e,n,r){const i=V(t);let s=ue(),o=Gt();for(const u of n){const l=e.rr(u.metadata.name);u.document&&(s=s.add(l));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await mo(i,function(u){return Yt(Oo(pe.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>zE(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Bs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Bs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.nr,l.sr)).next(()=>l.nr)))}async function u4(t,e,n=ue()){const r=await mo(t,Yt(eg(e.bundledQuery))),i=V(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(st.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function Kw(t,e){return`firestore_clients_${t}_${e}`}function Gw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Vd(t,e){return`firestore_targets_${t}_${e}`}class xl{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new xl(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ca{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new Ca(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rl{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Km();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=L1(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Rl(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ag{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ag(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class tp{constructor(){this.activeTargetIds=Km()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bd{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new xe(ae),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=Kw(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new tp),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(Kw(this.persistenceKey,r));if(i){const s=Rl.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Vd(this.persistenceKey,e));if(r){const i=Ca.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Vd(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=Ht.ct;if(i!=null)try{const o=JSON.parse(i);X(typeof o=="number"),s=o}catch(o){We("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Ht.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new xl(this.currentUser,e,n,r),s=Gw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=Gw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=Vd(this.persistenceKey,e),s=new Ca(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return Rl.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return xl.ar(new ut(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return Ca.ar(i,n)}br(e){return ag.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Km();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class WE{constructor(){this.Hr=new tp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new tp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u=null;function $d(){return _u===null?_u=268435456+Math.round(2147483648*Math.random()):_u++,"0x"+_u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class f4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=$d(),a=this.To(e,n);R("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(u=>(R("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw kn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Po,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=h4[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=$d();return new Promise((o,a)=>{const c=new uL;c.setWithCredentials(!0),c.listenOnce(oL.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Md.NO_ERROR:const l=c.getResponseJson();R(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Md.TIMEOUT:R(Tt,`RPC '${e}' ${s} timed out`),a(new C(E.DEADLINE_EXCEEDED,"Request time out"));break;case Md.HTTP_ERROR:const h=c.getStatus();if(R(Tt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(I)>=0?I:E.UNKNOWN}(f.status);a(new C(g,f.message))}else a(new C(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new C(E.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{R(Tt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(Tt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=$d(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iL(),a=sL(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new cL({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");R(Tt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const g=new d4({ro:I=>{f?R(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(R(Tt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),R(Tt,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),y=(I,w,b)=>{I.listen(w,T=>{try{b(T)}catch(S){setTimeout(()=>{throw S},0)}})};return y(h,fu.EventType.OPEN,()=>{f||R(Tt,`RPC '${e}' stream ${i} transport opened.`)}),y(h,fu.EventType.CLOSE,()=>{f||(f=!0,R(Tt,`RPC '${e}' stream ${i} transport closed`),g.wo())}),y(h,fu.EventType.ERROR,I=>{f||(f=!0,kn(Tt,`RPC '${e}' stream ${i} transport errored:`,I),g.wo(new C(E.UNAVAILABLE,"The operation could not be completed")))}),y(h,fu.EventType.MESSAGE,I=>{var w;if(!f){const b=I.data[0];X(!!b);const T=b,S=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(S){R(Tt,`RPC '${e}' stream ${i} received error:`,S);const M=S.status;let j=function(K){const ie=Ze[K];if(ie!==void 0)return pE(ie)}(M),re=S.message;j===void 0&&(j=E.INTERNAL,re="Unknown error status: "+M+" with message "+S.message),f=!0,g.wo(new C(j,re)),h.close()}else R(Tt,`RPC '${e}' stream ${i} received:`,b),g._o(b)}}),y(a,aL.STAT_EVENT,I=>{I.stat===nw.PROXY?R(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===nw.NOPROXY&&R(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(){return typeof window<"u"?window:null}function Gu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return new bM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new cg(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new C(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p4 extends QE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=TM(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?Qe(s.readTime):Q.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=uc(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Il(a)?{documents:EE(i,a)}:{query:TE(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=vE(i,s.resumeToken);const c=Yf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(Q.min())>0){o.readTime=po(i,s.snapshotVersion.toTimestamp());const c=Yf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=kM(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=uc(this.serializer),n.removeTarget=e,this.Wo(n)}}class m4 extends QE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=SM(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.cu(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=uc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lc(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(E.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(E.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class y4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(We(n),this.mu=!1):R("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{yi(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=V(a);c.vu.add(4),await Mo(c),c.bu.set("Unknown"),c.vu.delete(4),await Kc(c)}(this))})}),this.bu=new y4(r,i)}}async function Kc(t){if(yi(t))for(const e of t.Ru)await e(!0)}async function Mo(t){for(const e of t.Ru)await e(!1)}function Fh(t,e){const n=V(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),hg(n)?lg(n):Uo(n).Ko()&&ug(n,e))}function hc(t,e){const n=V(t),r=Uo(n);n.Au.delete(e),r.Ko()&&XE(n,e),n.Au.size===0&&(r.Ko()?r.jo():yi(n)&&n.bu.set("Unknown"))}function ug(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Uo(t).su(e)}function XE(t,e){t.Vu.qt(e),Uo(t).iu(e)}function lg(t){t.Vu=new yM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Uo(t).start(),t.bu.gu()}function hg(t){return yi(t)&&!Uo(t).Uo()&&t.Au.size>0}function yi(t){return V(t).vu.size===0}function JE(t){t.Vu=void 0}async function w4(t){t.Au.forEach((e,n)=>{ug(t,e)})}async function _4(t,e){JE(t),hg(t)?(t.bu.Iu(e),lg(t)):t.bu.set("Unknown")}async function b4(t,e,n){if(t.bu.set("Online"),e instanceof yE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nl(t,r)}else if(e instanceof Ku?t.Vu.Ht(e):e instanceof gE?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Q.min()))try{const r=await jE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(st.EMPTY_BYTE_STRING,u.snapshotVersion)),XE(i,a);const l=new or(u.target,a,c,u.sequenceNumber);ug(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Nl(t,r)}}async function Nl(t,e,n){if(!mi(e))throw e;t.vu.add(1),await Mo(t),t.bu.set("Offline"),n||(n=()=>jE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Kc(t)})}function ZE(t,e){return e().catch(n=>Nl(t,n,e))}async function Fo(t){const e=V(t),n=si(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;I4(e);)try{const i=await a4(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,E4(e,i)}catch(i){await Nl(e,i)}eT(e)&&tT(e)}function I4(t){return yi(t)&&t.Eu.length<10}function E4(t,e){t.Eu.push(e);const n=si(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function eT(t){return yi(t)&&!si(t).Uo()&&t.Eu.length>0}function tT(t){si(t).start()}async function T4(t){si(t).hu()}async function S4(t){const e=si(t);for(const n of t.Eu)e.uu(n.mutations)}async function k4(t,e,n){const r=t.Eu.shift(),i=Ym.from(r,e,n);await ZE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fo(t)}async function A4(t,e){e&&si(t).ou&&await async function(n,r){if(i=r.code,fE(i)&&i!==E.ABORTED){const s=n.Eu.shift();si(n).Qo(),await ZE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fo(n)}var i}(t,e),eT(t)&&tT(t)}async function Yw(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.vu.add(3),await Mo(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Kc(n)}async function np(t,e){const n=V(t);e?(n.vu.delete(2),await Kc(n)):e||(n.vu.add(2),await Mo(n),n.bu.set("Unknown"))}function Uo(t){return t.Su||(t.Su=function(e,n,r){const i=V(e);return i.fu(),new p4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:w4.bind(null,t),ao:_4.bind(null,t),nu:b4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),hg(t)?lg(t):t.bu.set("Unknown")):(await t.Su.stop(),JE(t))})),t.Su}function si(t){return t.Du||(t.Du=function(e,n,r){const i=V(e);return i.fu(),new m4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:T4.bind(null,t),ao:A4.bind(null,t),au:S4.bind(null,t),cu:k4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Fo(t)):(await t.Du.stop(),t.Eu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new dg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vo(t,e){if(We("AsyncQueue",`${e}: ${t}`),mi(t))return new C(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=la(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.Cu=new xe(L.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):q():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yo(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(){this.Nu=void 0,this.listeners=[]}}class x4{constructor(){this.queries=new gi(e=>J1(e),Bc),this.onlineState="Unknown",this.ku=new Set}}async function fg(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new C4),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Vo(o,`Initialization of query '${Wf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&mg(n)}async function pg(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function R4(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&mg(n)}function N4(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function mg(t){t.ku.forEach(e=>{e.next()})}class gg{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.serializer=e}rr(e){return Hn(this.serializer,e)}ur(e){return e.metadata.exists?IE(this.serializer,e.document,!1):Oe.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Qe(e)}}class O4{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=nT(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=pe.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new Xw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ue()).add(s);n.set(o,a)}}return n}async complete(){const e=await c4(this.localStore,new Xw(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await u4(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function nT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.key=e}}class iT{constructor(e){this.key=e}}class sT{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ue(),this.mutatedKeys=ue(),this.tc=eE(e),this.ec=new Js(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Qw,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=$c(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),I=!0):this.rc(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.tc(f,c)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return f(h)-f(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new yo(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Qw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ue(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new iT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new rT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=ue();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return yo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class D4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class L4{constructor(e){this.key=e,this.fc=!1}}class M4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new gi(a=>J1(a),Bc),this._c=new Map,this.mc=new Set,this.gc=new xe(L.comparator),this.yc=new Map,this.Ic=new rg,this.Tc={},this.Ec=new Map,this.Ac=cs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function F4(t,e){const n=bg(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await mo(n.localStore,Yt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await yg(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Fh(n.remoteStore,o)}return i}async function yg(t,e,n,r,i){t.Rc=(h,d,f)=>async function(g,y,I,w){let b=y.view.sc(I);b.zi&&(b=await Cl(g.localStore,y.query,!1).then(({documents:M})=>y.view.sc(M,b)));const T=w&&w.targetChanges.get(y.targetId),S=y.view.applyChanges(b,g.isPrimaryClient,T);return rp(g,y.targetId,S.cc),S.snapshot}(t,h,d,f);const s=await Cl(t.localStore,e,!0),o=new sT(e,s.ir),a=o.sc(s.documents),c=zc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);rp(t,n,u.cc);const l=new D4(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function U4(t,e){const n=V(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Bc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await go(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hc(n.remoteStore,r.targetId),vo(n,r.targetId)}).catch(pi)):(vo(n,r.targetId),await go(n.localStore,r.targetId,!0))}async function V4(t,e,n){const r=Ig(t);try{const i=await function(s,o){const a=V(s),c=Ve.now(),u=o.reduce((d,f)=>d.add(f.key),ue());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Gt(),g=ue();return a.Zi.getEntries(d,u).next(y=>{f=y,f.forEach((I,w)=>{w.isValidDocument()||(g=g.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{l=y;const I=[];for(const w of o){const b=pM(w,l.get(w.key).overlayedDocument);b!=null&&I.push(new Er(w.key,b,j1(b.value.mapValue),Ue.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:nE(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new xe(ae)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,n),await Tr(r,i.changes),await Fo(r.remoteStore)}catch(i){const s=Vo(i,"Failed to persist write");n.reject(s)}}async function oT(t,e){const n=V(t);try{const r=await o4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?X(o.fc):i.removedDocuments.size>0&&(X(o.fc),o.fc=!1))}),await Tr(n,r,e)}catch(r){await pi(r)}}function Jw(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&mg(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B4(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new xe(L.comparator);o=o.insert(s,Oe.newNoDocument(s,Q.min()));const a=ue().add(s),c=new jc(Q.min(),new Map,new xe(ae),o,a);await oT(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),_g(r)}else await go(r.localStore,e,!1).then(()=>vo(r,e,n)).catch(pi)}async function $4(t,e){const n=V(t),r=e.batch.batchId;try{const i=await s4(n.localStore,e);wg(n,r,null),vg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tr(n,i)}catch(i){await pi(i)}}async function q4(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(X(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);wg(r,e,n),vg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tr(r,i)}catch(i){await pi(i)}}async function j4(t,e){const n=V(t);yi(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=V(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=Vo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function vg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function wg(t,e,n){const r=V(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function vo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||aT(t,r)})}function aT(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(hc(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),_g(t))}function rp(t,e,n){for(const r of n)r instanceof rT?(t.Ic.addReference(r.key,e),z4(t,r)):r instanceof iT?(R("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||aT(t,r.key)):q()}function z4(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.mc.add(r),_g(t))}function _g(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new L(pe.fromString(e)),r=t.Ac.next();t.yc.set(r,new L4(n)),t.gc=t.gc.insert(n,r),Fh(t.remoteStore,new or(Yt(Oo(n.path)),r,"TargetPurposeLimboResolution",Ht.ct))}}async function Tr(t,e,n){const r=V(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=og.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const u=V(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>_.forEach(c,h=>_.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>_.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!mi(l))throw l;R("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,g)}}}(r.localStore,s))}async function H4(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await qE(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new C(E.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tr(n,r.er)}}function K4(t,e){const n=V(t),r=n.yc.get(e);if(r&&r.fc)return ue().add(r.key);{let i=ue();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function G4(t,e){const n=V(t),r=await Cl(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&rp(n,e.targetId,i.cc),i}async function W4(t,e){const n=V(t);return KE(n.localStore,e).then(r=>Tr(n,r))}async function Y4(t,e,n,r){const i=V(t),s=await function(o,a){const c=V(o),u=V(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Sn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):_.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Fo(i.remoteStore):n==="acknowledged"||n==="rejected"?(wg(i,e,r||null),vg(i,e),function(o,a){V(V(o).mutationQueue).Cn(a)}(i.localStore,e)):q(),await Tr(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Q4(t,e){const n=V(t);if(bg(n),Ig(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Zw(n,r.toArray());n.vc=!0,await np(n.remoteStore,!0);for(const s of i)Fh(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(vo(n,o),go(n.localStore,o,!0))),hc(n.remoteStore,o)}),await i,await Zw(n,r),function(s){const o=V(s);o.yc.forEach((a,c)=>{hc(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new xe(L.comparator)}(n),n.vc=!1,await np(n.remoteStore,!1)}}async function Zw(t,e,n){const r=V(t),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await mo(r.localStore,Yt(c[0]));for(const u of c){const l=r.wc.get(u),h=await G4(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await HE(r.localStore,o);a=await mo(r.localStore,u),await yg(r,cT(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function cT(t){return X1(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function X4(t){const e=V(t);return V(V(e.localStore).persistence).$i()}async function J4(t,e,n,r){const i=V(t);if(i.vc)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await KE(i.localStore,Z1(s[0])),a=jc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",st.EMPTY_BYTE_STRING);await Tr(i,o,a);break}case"rejected":await go(i.localStore,e,!0),vo(i,e,r);break;default:q()}}async function Z4(t,e,n){const r=bg(t);if(r.vc){for(const i of e){if(r._c.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await HE(r.localStore,i),o=await mo(r.localStore,s);await yg(r,cT(s),o.targetId,!1,o.resumeToken),Fh(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await go(r.localStore,i,!1).then(()=>{hc(r.remoteStore,i),vo(r,i)}).catch(pi)}}function bg(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B4.bind(null,e),e.dc.nu=R4.bind(null,e.eventManager),e.dc.Pc=N4.bind(null,e.eventManager),e}function Ig(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q4.bind(null,e),e}function eF(t,e,n){const r=V(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=V(h),g=Qe(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.qs.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(nT(a));const c=new O4(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const h=await c.zu(u);h&&o._updateProgress(h),u=await s.bc()}const l=await c.complete();return await Tr(i,l.Ju,void 0),await function(h,d){const f=V(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.qs.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return kn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ip{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $E(this.persistence,new BE,e.initialUser,this.serializer)}createPersistence(e){return new VE(Mh.zs,this.serializer)}createSharedClientState(e){return new WE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uT extends ip{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Ig(this.Vc.syncEngine),await Fo(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return $E(this.persistence,new BE,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new jM(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new kL(n,this.persistence);return new SL(e.asyncQueue,r)}createPersistence(e){const n=sg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new ig(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,YE(),Gu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new WE}}class tF extends uT{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof Bd&&(this.sharedClientState.syncEngine={jr:Y4.bind(null,n),zr:J4.bind(null,n),Wr:Z4.bind(null,n),$i:X4.bind(null,n),Qr:W4.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await Q4(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=YE();if(!Bd.D(n))throw new C(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=sg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Bd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Eg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=H4.bind(null,this.syncEngine),await np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new x4}createDatastore(e){const n=Hc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new f4(i));var i;return function(s,o,a,c){return new g4(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Jw(this.syncEngine,a,0),o=Ww.D()?new Ww:new l4,new v4(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new M4(r,i,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);R("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Mo(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new ht,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new P4(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=V(r),o=uc(s.serializer)+"/documents",a={documents:i.map(h=>cc(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=EM(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());X(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Lo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new Gm(i,this.precondition(i)))}),await async function(n,r){const i=V(n),s=uc(i.serializer)+"/documents",o={writes:r.map(a=>lc(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Q.min())?Ue.exists(!1):Ue.updateTime(n):Ue.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new C(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ue.updateTime(n)}return Ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new cg(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new rF(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Uc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!fE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=C1.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wu(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Tg(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Yw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Yw(e.remoteStore,s)),t._onlineComponents=e}function lT(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Tg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lT(n))throw n;kn("Error using user provided cache. Falling back to memory cache: "+n),await Wu(t,new ip)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Wu(t,new ip);return t._offlineComponents}async function Vh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await sp(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await sp(t,new Eg))),t._onlineComponents}function hT(t){return Tg(t).then(e=>e.persistence)}function Sg(t){return Tg(t).then(e=>e.localStore)}function dT(t){return Vh(t).then(e=>e.remoteStore)}function kg(t){return Vh(t).then(e=>e.syncEngine)}function oF(t){return Vh(t).then(e=>e.datastore)}async function wo(t){const e=await Vh(t),n=e.eventManager;return n.onListen=F4.bind(null,e.syncEngine),n.onUnlisten=U4.bind(null,e.syncEngine),n}function aF(t){return t.asyncQueue.enqueue(async()=>{const e=await hT(t),n=await dT(t);return e.setNetworkEnabled(!0),function(r){const i=V(r);return i.vu.delete(0),Kc(i)}(n)})}function cF(t){return t.asyncQueue.enqueue(async()=>{const e=await hT(t),n=await dT(t);return e.setNetworkEnabled(!1),async function(r){const i=V(r);i.vu.add(0),await Mo(i),i.bu.set("Offline")}(n)})}function uF(t,e){const n=new ht;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=V(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Vo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Sg(t),e,n)),n.promise}function fT(t,e,n={}){const r=new ht;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Uh({next:h=>{s.enqueueAndForget(()=>pg(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gg(Oo(o.path),u,{includeMetadataChanges:!0,Ku:!0});return fg(i,l)}(await wo(t),t.asyncQueue,e,n,r)),r.promise}function lF(t,e){const n=new ht;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Cl(r,i,!0),a=new sT(i,o.ir),c=a.sc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Vo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Sg(t),e,n)),n.promise}function pT(t,e,n={}){const r=new ht;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Uh({next:h=>{s.enqueueAndForget(()=>pg(i,l)),h.fromCache&&a.source==="server"?c.reject(new C(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gg(o,u,{includeMetadataChanges:!0,Ku:!0});return fg(i,l)}(await wo(t),t.asyncQueue,e,n,r)),r.promise}function hF(t,e){const n=new Uh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){V(r).ku.add(i),i.next()}(await wo(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){V(r).ku.delete(i)}(await wo(t),n))}}function dF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?mE().encode(s):s,function(c,u){return new nF(c,u)}(function(c,u){if(c instanceof Uint8Array)return e_(c,u);if(c instanceof ArrayBuffer)return e_(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Hc(e));t.asyncQueue.enqueueAndForget(async()=>{eF(await kg(t),i,r)})}function fF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=V(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Sg(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t,e,n){if(!n)throw new C(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gT(t,e,n,r){if(e===!0&&r===!0)throw new C(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n_(t){if(!L.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function r_(t){if(L.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function ge(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bh(t);throw new C(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function yT(t,e){if(e<=0)throw new C(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new C(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Gc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fL;switch(n.type){case"firstParty":return new yL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=t_.get(e);n&&(R("ComponentProvider","Removing Datastore"),t_.delete(e),n.terminate())}(this),Promise.resolve()}}function pF(t,e,n,r={}){var i;const s=(t=ge(t,Gc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ut.MOCK_USER;else{a=h0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(u)}t._authCredentials=new pL(new A1(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class It{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class Kn extends It{constructor(e,n,r){super(e,n,Oo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new L(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function vT(t,e,...n){if(t=Y(t),Ag("collection","path",e),t instanceof Gc){const r=pe.fromString(e,...n);return r_(r),new Kn(t,null,r)}{if(!(t instanceof Me||t instanceof Kn))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return r_(r),new Kn(t.firestore,null,r)}}function mF(t,e){if(t=ge(t,Gc),Ag("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new It(t,null,function(n){return new Ir(pe.emptyPath(),n)}(e))}function Pl(t,e,...n){if(t=Y(t),arguments.length===1&&(e=C1.A()),Ag("doc","path",e),t instanceof Gc){const r=pe.fromString(e,...n);return n_(r),new Me(t,null,new L(r))}{if(!(t instanceof Me||t instanceof Kn))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return n_(r),new Me(t.firestore,t instanceof Kn?t.converter:null,new L(r))}}function wT(t,e){return t=Y(t),e=Y(e),(t instanceof Me||t instanceof Kn)&&(e instanceof Me||e instanceof Kn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function _T(t,e){return t=Y(t),e=Y(e),t instanceof It&&e instanceof It&&t.firestore===e.firestore&&Bc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new cg(this,"async_queue_retry"),this.Xc=()=>{const n=Gu();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Gu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ht;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!mi(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=dg.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&q()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function op(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class yF{constructor(){this._progressObserver={},this._taskCompletionResolver=new ht,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vF=-1;class Ke extends Gc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new gF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bT(this),this._firestoreClient.terminate()}}function mt(t){return t._firestoreClient||bT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,c,u){return new GL(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,mT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new sF(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function wF(t,e){ET(t=ge(t,Ke));const n=mt(t);if(n._uninitializedComponentsProvider)throw new C(E.FAILED_PRECONDITION,"SDK cache is already specified.");kn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Eg;return IT(n,i,new uT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function _F(t){ET(t=ge(t,Ke));const e=mt(t);if(e._uninitializedComponentsProvider)throw new C(E.FAILED_PRECONDITION,"SDK cache is already specified.");kn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Eg;return IT(e,r,new tF(r,n.cacheSizeBytes))}function IT(t,e,n){const r=new ht;return t.asyncQueue.enqueue(async()=>{try{await Wu(t,n),await sp(t,e),r.resolve()}catch(i){const s=i;if(!lT(s))throw s;kn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function bF(t){if(t._initialized&&!t._terminated)throw new C(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ht;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!vn.D())return Promise.resolve();const r=n+"main";await vn.delete(r)}(sg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function IF(t){return function(e){const n=new ht;return e.asyncQueue.enqueueAndForget(async()=>j4(await kg(e),n)),n.promise}(mt(t=ge(t,Ke)))}function EF(t){return aF(mt(t=ge(t,Ke)))}function TF(t){return cF(mt(t=ge(t,Ke)))}function SF(t,e){const n=mt(t=ge(t,Ke)),r=new yF;return dF(n,t._databaseId,e,r),r}function kF(t,e){return fF(mt(t=ge(t,Ke)),e).then(n=>n?new It(t,null,n.query):null)}function ET(t){if(t._initialized||t._terminated)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(st.fromBase64String(e))}catch(n){throw new C(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xn(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF=/^__.*__$/;class CF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Do(e,this.data,n,this.fieldTransforms)}}class TT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ST(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class qh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new qh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ol(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ST(this.ca)&&AF.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class xF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hc(e)}ya(e,n,r,i=!1){return new qh({ca:e,methodName:n,ga:r,path:Ye.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ws(t){const e=t._freezeSettings(),n=Hc(t._databaseId);return new xF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jh(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Ng("Data must be an object, but it was:",o,r);const a=CT(r,o);let c,u;if(s.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=ap(e,h,n);if(!o.contains(d))throw new C(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);RT(l,d)||l.push(d)}c=new Kt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new CF(new vt(a),c,u)}class Wc extends vs{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}function kT(t,e,n){return new qh({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Cg extends vs{_toFieldTransform(e){return new qc(e.path,new ho)}isEqual(e){return e instanceof Cg}}class RF extends vs{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=kT(this,e,!0),r=this.pa.map(s=>_s(s,n)),i=new is(r);return new qc(e.path,i)}isEqual(e){return this===e}}class NF extends vs{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=kT(this,e,!0),r=this.pa.map(s=>_s(s,n)),i=new ss(r);return new qc(e.path,i)}isEqual(e){return this===e}}class PF extends vs{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new fo(e.serializer,oE(e.serializer,this.Ia));return new qc(e.path,n)}isEqual(e){return this===e}}function xg(t,e,n,r){const i=t.ya(1,e,n);Ng("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();ys(r,(c,u)=>{const l=Pg(e,c,n);u=Y(u);const h=i.da(l);if(u instanceof Wc)s.push(l);else{const d=_s(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Kt(s);return new TT(o,a,i.fieldTransforms)}function Rg(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[ap(e,r,n)],c=[i];if(s.length%2!=0)throw new C(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ap(e,s[d])),c.push(s[d+1]);const u=[],l=vt.empty();for(let d=a.length-1;d>=0;--d)if(!RT(u,a[d])){const f=a[d];let g=c[d];g=Y(g);const y=o.da(f);if(g instanceof Wc)u.push(f);else{const I=_s(g,y);I!=null&&(u.push(f),l.set(f,I))}}const h=new Kt(u);return new TT(l,h,o.fieldTransforms)}function AT(t,e,n,r=!1){return _s(n,t.ya(r?4:3,e))}function _s(t,e){if(xT(t=Y(t)))return Ng("Unsupported field value:",e,t),CT(t,e);if(t instanceof vs)return function(n,r){if(!ST(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=_s(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Y(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return oE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:po(r.serializer,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:po(r.serializer,i)}}if(n instanceof $h)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xn)return{bytesValue:vE(r.serializer,n._byteString)};if(n instanceof Me){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Bh(n)}`)}(t,e)}function CT(t,e){const n={};return B1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,i)=>{const s=_s(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof $h||t instanceof Xn||t instanceof Me||t instanceof vs)}function Ng(t,e,n){if(!xT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Bh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function ap(t,e,n){if((e=Y(e))instanceof oi)return e._internalPath;if(typeof e=="string")return Pg(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const OF=new RegExp("[~\\*/\\[\\]]");function Pg(t,e,n){if(e.search(OF)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oi(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new C(E.INVALID_ARGUMENT,a+t+c)}function RT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DF extends dc{data(){return super.data()}}function zh(t,e){return typeof e=="string"?Pg(t,e):e instanceof oi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Og{}class Yc extends Og{}function Lr(t,e,...n){let r=[];e instanceof Og&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Dg).length,o=i.filter(a=>a instanceof Hh).length;if(s>1||s>0&&o>0)throw new C(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Hh extends Yc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hh(e,n,r)}_apply(e){const n=this._parse(e);return OT(e._query,n),new It(e.firestore,e.converter,Gf(e._query,n))}_parse(e){const n=ws(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){o_(l,u);const d=[];for(const f of l)d.push(s_(a,i,f));h={arrayValue:{values:d}}}else h=s_(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||o_(l,u),h=AT(o,s,l,u==="in"||u==="not-in");return he.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LF(t,e,n){const r=e,i=zh("where",t);return Hh._create(i,r,n)}class Dg extends Og{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Dg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ee.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)OT(s,a),s=Gf(s,a)}(e._query,n),new It(e.firestore,e.converter,Gf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lg extends Yc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lg(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Xs(i,s);return function(a,c){if(zm(a)===null){const u=Nh(a);u!==null&&DT(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new It(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ir(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function MF(t,e="asc"){const n=e,r=zh("orderBy",t);return Lg._create(r,n)}class Kh extends Yc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Kh(e,n,r)}_apply(e){return new It(e.firestore,e.converter,Tl(e._query,this._limit,this._limitType))}}function FF(t){return yT("limit",t),Kh._create("limit",t,"F")}function UF(t){return yT("limitToLast",t),Kh._create("limitToLast",t,"L")}class Gh extends Yc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Gh(e,n,r)}_apply(e){const n=PT(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new Ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function VF(...t){return Gh._create("startAt",t,!0)}function BF(...t){return Gh._create("startAfter",t,!1)}class Wh extends Yc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Wh(e,n,r)}_apply(e){const n=PT(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new Ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function $F(...t){return Wh._create("endBefore",t,!1)}function qF(...t){return Wh._create("endAt",t,!0)}function PT(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof dc)return function(i,s,o,a,c){if(!a)throw new C(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Yi(i))if(l.field.isKeyField())u.push(ns(s,a.key));else{const h=a.data.field(l.field);if(Rh(h))throw new C(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new C(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new ii(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ws(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new C(E.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const g=u[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new C(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Hm(s)&&g.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const y=s.path.child(pe.fromString(g));if(!L.isDocumentKey(y))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const I=new L(y);d.push(ns(o,I))}else{const y=AT(a,c,g);d.push(y)}}return new ii(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function s_(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new C(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hm(e)&&n.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!L.isDocumentKey(r))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ns(t,new L(r))}if(n instanceof Me)return ns(t,n._key);throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bh(n)}.`)}function o_(t,e){if(!Array.isArray(t)||t.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OT(t,e){if(e.isInequality()){const r=Nh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new C(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=zm(t);s!==null&&DT(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function DT(t,e,n){if(!n.isEqual(e))throw new C(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Mg{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new $h(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sc(e));default:return null}}convertTimestamp(e){const n=ei(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);X(CE(r));const i=new ni(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class jF extends Mg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pr extends dc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xa extends pr{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xa(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new xa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new xa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:zF(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function LT(t,e){return t instanceof pr&&e instanceof pr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ai&&e instanceof ai&&t._firestore===e._firestore&&_T(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HF(t){t=ge(t,Me);const e=ge(t.firestore,Ke);return fT(mt(e),t._key).then(n=>Fg(e,t,n))}class bs extends Mg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function KF(t){t=ge(t,Me);const e=ge(t.firestore,Ke),n=mt(e),r=new bs(e);return uF(n,t._key).then(i=>new pr(e,r,t._key,i,new Vi(i!==null&&i.hasLocalMutations,!0),t.converter))}function GF(t){t=ge(t,Me);const e=ge(t.firestore,Ke);return fT(mt(e),t._key,{source:"server"}).then(n=>Fg(e,t,n))}function WF(t){t=ge(t,It);const e=ge(t.firestore,Ke),n=mt(e),r=new bs(e);return NT(t._query),pT(n,t._query).then(i=>new ai(e,r,t,i))}function YF(t){t=ge(t,It);const e=ge(t.firestore,Ke),n=mt(e),r=new bs(e);return lF(n,t._query).then(i=>new ai(e,r,t,i))}function QF(t){t=ge(t,It);const e=ge(t.firestore,Ke),n=mt(e),r=new bs(e);return pT(n,t._query,{source:"server"}).then(i=>new ai(e,r,t,i))}function a_(t,e,n){t=ge(t,Me);const r=ge(t.firestore,Ke),i=Yh(t.converter,e,n);return Qc(r,[jh(ws(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ue.none())])}function c_(t,e,n,...r){t=ge(t,Me);const i=ge(t.firestore,Ke),s=ws(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof oi?Rg(s,"updateDoc",t._key,e,n,r):xg(s,"updateDoc",t._key,e),Qc(i,[o.toMutation(t._key,Ue.exists(!0))])}function XF(t){return Qc(ge(t.firestore,Ke),[new Lo(t._key,Ue.none())])}function JF(t,e){const n=ge(t.firestore,Ke),r=Pl(t),i=Yh(t.converter,e);return Qc(n,[jh(ws(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ue.exists(!1))]).then(()=>r)}function MT(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||op(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(op(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Me)u=ge(t.firestore,Ke),l=Oo(t._key.path),c={next:h=>{e[o]&&e[o](Fg(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ge(t,It);u=ge(h.firestore,Ke),l=h._query;const d=new bs(u);c={next:f=>{e[o]&&e[o](new ai(u,d,h,f))},error:e[o+1],complete:e[o+2]},NT(t._query)}return function(h,d,f,g){const y=new Uh(g),I=new gg(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>fg(await wo(h),I)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>pg(await wo(h),I))}}(mt(u),l,a,c)}function ZF(t,e){return hF(mt(t=ge(t,Ke)),op(e)?e:{next:e})}function Qc(t,e){return function(n,r){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>V4(await kg(n),r,i)),i.promise}(mt(t),e)}function Fg(t,e,n){const r=n.docs.get(e._key),i=new bs(t);return new pr(t,i,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ws(e)}set(e,n,r){this._verifyNotCommitted();const i=$r(e,this._firestore),s=Yh(i.converter,n,r),o=jh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ue.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=$r(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof oi?Rg(this._dataReader,"WriteBatch.update",s._key,n,r,i):xg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$r(e,this._firestore);return this._mutations=this._mutations.concat(new Lo(n._key,Ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $r(t,e){if((t=Y(t)).firestore!==e)throw new C(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ws(e)}get(e){const n=$r(e,this._firestore),r=new jF(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return q();const s=i[0];if(s.isFoundDocument())return new dc(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new dc(this._firestore,r,n._key,null,n.converter);throw q()})}set(e,n,r){const i=$r(e,this._firestore),s=Yh(i.converter,n,r),o=jh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=$r(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof oi?Rg(this._dataReader,"Transaction.update",s._key,n,r,i):xg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=$r(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$r(e,this._firestore),r=new bs(this._firestore);return super.get(e).then(i=>new pr(this._firestore,r,n._key,i._document,new Vi(!1,!1),n.converter))}}function rU(t,e,n){t=ge(t,Ke);const r=Object.assign(Object.assign({},eU),n);return function(i){if(i.maxAttempts<1)throw new C(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ht;return i.asyncQueue.enqueueAndForget(async()=>{const c=await oF(i);new iF(i.asyncQueue,c,o,s,a).run()}),a.promise}(mt(t),i=>e(new nU(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(){return new Wc("deleteField")}function sU(){return new Cg("serverTimestamp")}function oU(...t){return new RF("arrayUnion",t)}function aU(...t){return new NF("arrayRemove",t)}function cU(t){return new PF("increment",t)}(function(t,e=!0){(function(n){Po=n})(wr),hr(new ln("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ke(new mL(n.getProvider("auth-internal")),new wL(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),un(rw,"3.13.0",t),un(rw,"3.13.0","esm2017")})();const uU="@firebase/firestore-compat",lU="0.3.12";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function l_(){if(!HL())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class fc{constructor(e){this._delegate=e}static fromBase64String(e){return l_(),new fc(Xn.fromBase64String(e))}static fromUint8Array(e){return u_(),new fc(Xn.fromUint8Array(e))}toBase64(){return l_(),this._delegate.toBase64()}toUint8Array(){return u_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){return hU(t,["next","error","complete"])}function hU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{enableIndexedDbPersistence(e,n){return wF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return _F(e._delegate)}clearIndexedDbPersistence(e){return bF(e._delegate)}}class FT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ni||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&kn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){pF(this._delegate,e,n,r)}enableNetwork(){return EF(this._delegate)}disableNetwork(){return TF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,gT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return IF(this._delegate)}onSnapshotsInSync(e){return ZF(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _o(this,vT(this._delegate,e))}catch(n){throw Lt(n,"collection()","Firestore.collection()")}}doc(e){try{return new on(this,Pl(this._delegate,e))}catch(n){throw Lt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Dt(this,mF(this._delegate,e))}catch(n){throw Lt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return rU(this._delegate,n=>e(new UT(this,n)))}batch(){return mt(this._delegate),new VT(new tU(this._delegate,e=>Qc(this._delegate,e)))}loadBundle(e){return SF(this._delegate,e)}namedQuery(e){return kF(this._delegate,e).then(n=>n?new Dt(this,n):null)}}class Qh extends Mg{constructor(e){super(),this.firestore=e}convertBytes(e){return new fc(new Xn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return on.forKey(n,this.firestore,null)}}function fU(t){hL(t)}class UT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Qh(e)}get(e){const n=Bi(e);return this._delegate.get(n).then(r=>new pc(this._firestore,new pr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Bi(e);return r?(Ug("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Bi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Bi(e);return this._delegate.delete(n),this}}class VT{constructor(e){this._delegate=e}set(e,n,r){const i=Bi(e);return r?(Ug("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Bi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Bi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class us{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new xa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new mc(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=us.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new us(e,new Qh(e),n),i.set(n,s)),s}}us.INSTANCES=new WeakMap;class on{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Qh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new on(n,new Me(n._delegate,r,new L(e)))}static forKey(e,n,r){return new on(n,new Me(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new _o(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _o(this.firestore,vT(this._delegate,e))}catch(n){throw Lt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof Me?wT(this._delegate,e):!1}set(e,n){n=Ug("DocumentReference.set",n);try{return n?a_(this._delegate,e,n):a_(this._delegate,e)}catch(r){throw Lt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?c_(this._delegate,e):c_(this._delegate,e,n,...r)}catch(i){throw Lt(i,"updateDoc()","DocumentReference.update()")}}delete(){return XF(this._delegate)}onSnapshot(...e){const n=BT(e),r=$T(e,i=>new pc(this.firestore,new pr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return MT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=KF(this._delegate):(e==null?void 0:e.source)==="server"?n=GF(this._delegate):n=HF(this._delegate),n.then(r=>new pc(this.firestore,new pr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new on(this.firestore,e?this._delegate.withConverter(us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Lt(t,e,n){return t.message=t.message.replace(e,n),t}function BT(t){for(const e of t)if(typeof e=="object"&&!cp(e))return e;return{}}function $T(t,e){var n,r;let i;return cp(t[0])?i=t[0]:cp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class pc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new on(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return LT(this._delegate,e._delegate)}}class mc extends pc{data(e){const n=this._delegate.data(e);return dL(n!==void 0),n}}class Dt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Qh(e)}where(e,n,r){try{return new Dt(this.firestore,Lr(this._delegate,LF(e,n,r)))}catch(i){throw Lt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Dt(this.firestore,Lr(this._delegate,MF(e,n)))}catch(r){throw Lt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Dt(this.firestore,Lr(this._delegate,FF(e)))}catch(n){throw Lt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Dt(this.firestore,Lr(this._delegate,UF(e)))}catch(n){throw Lt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Dt(this.firestore,Lr(this._delegate,VF(...e)))}catch(n){throw Lt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Dt(this.firestore,Lr(this._delegate,BF(...e)))}catch(n){throw Lt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Dt(this.firestore,Lr(this._delegate,$F(...e)))}catch(n){throw Lt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Dt(this.firestore,Lr(this._delegate,qF(...e)))}catch(n){throw Lt(n,"endAt()","Query.endAt()")}}isEqual(e){return _T(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=YF(this._delegate):(e==null?void 0:e.source)==="server"?n=QF(this._delegate):n=WF(this._delegate),n.then(r=>new up(this.firestore,new ai(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=BT(e),r=$T(e,i=>new up(this.firestore,new ai(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return MT(this._delegate,n,r)}withConverter(e){return new Dt(this.firestore,e?this._delegate.withConverter(us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class pU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new mc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class up{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Dt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new mc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new pU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new mc(this._firestore,r))})}isEqual(e){return LT(this._delegate,e._delegate)}}class _o extends Dt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new on(this.firestore,e):null}doc(e){try{return e===void 0?new on(this.firestore,Pl(this._delegate)):new on(this.firestore,Pl(this._delegate,e))}catch(n){throw Lt(n,"doc()","CollectionReference.doc()")}}add(e){return JF(this._delegate,e).then(n=>new on(this.firestore,n))}isEqual(e){return wT(this._delegate,e._delegate)}withConverter(e){return new _o(this.firestore,e?this._delegate.withConverter(us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bi(t){return ge(t,Me)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(...e){this._delegate=new oi(...e)}static documentId(){return new Vg(Ye.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof oi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this._delegate=e}static serverTimestamp(){const e=sU();return e._methodName="FieldValue.serverTimestamp",new Di(e)}static delete(){const e=iU();return e._methodName="FieldValue.delete",new Di(e)}static arrayUnion(...e){const n=oU(...e);return n._methodName="FieldValue.arrayUnion",new Di(n)}static arrayRemove(...e){const n=aU(...e);return n._methodName="FieldValue.arrayRemove",new Di(n)}static increment(e){const n=cU(e);return n._methodName="FieldValue.increment",new Di(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU={Firestore:FT,GeoPoint:$h,Timestamp:Ve,Blob:fc,Transaction:UT,WriteBatch:VT,DocumentReference:on,DocumentSnapshot:pc,Query:Dt,QueryDocumentSnapshot:mc,QuerySnapshot:up,CollectionReference:_o,FieldPath:Vg,FieldValue:Di,setLogLevel:fU,CACHE_SIZE_UNLIMITED:vF};function gU(t,e){t.INTERNAL.registerComponent(new ln("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},mU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yU(t){gU(t,(e,n)=>new FT(e,n,new dU)),t.registerVersion(uU,lU)}yU(ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="firebasestorage.googleapis.com",jT="storageBucket",vU=2*60*1e3,wU=10*60*1e3,_U=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ct{constructor(e,n,r=0){super(qd(e),`Firebase Storage: ${n} (${qd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function qd(t){return"storage/"+t}function Bg(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(Fe.UNKNOWN,t)}function bU(t){return new $e(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function IU(t){return new $e(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function EU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(Fe.UNAUTHENTICATED,t)}function TU(){return new $e(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SU(t){return new $e(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zT(){return new $e(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HT(){return new $e(Fe.CANCELED,"User canceled the upload/download.")}function kU(t){return new $e(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function AU(t){return new $e(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function CU(){return new $e(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jT+"' property when initializing the app?")}function KT(){return new $e(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xU(){return new $e(Fe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function RU(){return new $e(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NU(t){return new $e(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zs(t){return new $e(Fe.INVALID_ARGUMENT,t)}function GT(){return new $e(Fe.APP_DELETED,"The Firebase app was deleted.")}function WT(t){return new $e(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ra(t,e){return new $e(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ra(t){throw new $e(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw AU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},y=n===qT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",w=new RegExp(`^https?://${y}/${i}/${I}`,"i"),T=[{regex:a,indices:c,postModify:s},{regex:f,indices:g,postModify:u},{regex:w,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<T.length;S++){const M=T[S],j=M.regex.exec(e);if(j){const re=j[M.indices.bucket];let K=j[M.indices.path];K||(K=""),r=new At(re,K),M.postModify(r);break}}if(r==null)throw kU(e);return r}}class PU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(f,c())},I)}function d(){s&&clearTimeout(s)}function f(I,...w){if(u){d();return}if(I){d(),l.call(null,I,...w);return}if(c()||o){d(),l.call(null,I,...w);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,h(T)}let g=!1;function y(I){g||(g=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function DU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(t){return t!==void 0}function MU(t){return typeof t=="function"}function FU(t){return typeof t=="object"&&!Array.isArray(t)}function Xh(t){return typeof t=="string"||t instanceof String}function h_(t){return $g()&&t instanceof Blob}function $g(){return typeof Blob<"u"&&!rh()}function lp(t,e,n,r){if(r<e)throw Zs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function YT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qi||(Qi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new bu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Qi.NO_ERROR,c=s.getStatus();if(!a||QT(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Qi.ABORT;r(!1,new bu(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new bu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());LU(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Bg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?GT():HT();o(c)}else{const c=zT();o(c)}};this.canceled_?n(!1,new bu(!1,null,!0)):this.backoffId_=OU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function $U(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jU(t,e,n,r,i,s,o=!0){const a=YT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return $U(u,e),VU(u,n),BU(u,s),qU(u,r),new UU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function HU(...t){const e=zU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if($g())return new Blob(t);throw new $e(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(t){if(typeof atob>"u")throw NU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jd{constructor(e,n){this.data=e,this.contentType=n||null}}function XT(t,e){switch(t){case an.RAW:return new jd(JT(e));case an.BASE64:case an.BASE64URL:return new jd(ZT(t,e));case an.DATA_URL:return new jd(YU(e),QU(e))}throw Bg()}function JT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function WU(t){let e;try{e=decodeURIComponent(t)}catch{throw Ra(an.DATA_URL,"Malformed data URL.")}return JT(e)}function ZT(t,e){switch(t){case an.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ra(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case an.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ra(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=GU(e)}catch(i){throw i.message.includes("polyfill")?i:Ra(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class eS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ra(an.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=XU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YU(t){const e=new eS(t);return e.base64?ZT(an.BASE64,e.rest):WU(e.rest)}function QU(t){return new eS(t).contentType}function XU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){let r=0,i="";h_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(h_(this.data_)){const r=this.data_,i=KU(r,e,n);return i===null?null:new nr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if($g()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(HU.apply(null,n))}else{const n=e.map(o=>Xh(o)?XT(an.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new nr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){let e;try{e=JSON.parse(t)}catch{return null}return FU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function tS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e3(t,e){return e}class Pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||e3}}let Iu=null;function t3(t){return!Xh(t)||t.length<2?t:tS(t)}function Jh(){if(Iu)return Iu;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(s,o){return t3(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pt("size");return i.xform=r,t.push(i),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),Iu=t,Iu}function n3(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new At(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function r3(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return n3(r,t),r}function nS(t,e,n){const r=qg(e);return r===null?null:r3(t,r,n)}function i3(t,e,n,r){const i=qg(e);if(i===null||!Xh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=vi(d,n,r),g=YT({alt:"media",token:u});return f+g})[0]}function jg(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="prefixes",f_="items";function s3(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[d_])for(const i of n[d_]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new At(e,s));r.prefixes.push(o)}if(n[f_])for(const i of n[f_]){const s=t._makeStorageReference(new At(e,i.name));r.items.push(s)}return r}function o3(t,e,n){const r=qg(n);return r===null?null:s3(t,e,r)}class Sr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){if(!t)throw Bg()}function Zh(t,e){function n(r,i){const s=nS(t,i,e);return Gn(s!==null),s}return n}function a3(t,e){function n(r,i){const s=o3(t,e,i);return Gn(s!==null),s}return n}function c3(t,e){function n(r,i){const s=nS(t,i,e);return Gn(s!==null),i3(s,i,t.host,t._protocol)}return n}function Bo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=TU():i=EU():n.getStatus()===402?i=IU(t.bucket):n.getStatus()===403?i=SU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ed(t){const e=Bo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=bU(t.path)),s.serverResponse=i.serverResponse,s}return n}function rS(t,e,n){const r=e.fullServerUrl(),i=vi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,Zh(t,n),o);return a.errorHandler=ed(e),a}function u3(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=vi(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Sr(a,c,a3(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Bo(e),l}function l3(t,e,n){const r=e.fullServerUrl(),i=vi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,c3(t,n),o);return a.errorHandler=ed(e),a}function h3(t,e,n,r){const i=e.fullServerUrl(),s=vi(i,t.host,t._protocol),o="PATCH",a=jg(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Sr(s,o,Zh(t,r),u);return l.headers=c,l.body=a,l.errorHandler=ed(e),l}function d3(t,e){const n=e.fullServerUrl(),r=vi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new Sr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=ed(e),a}function f3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function iS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=f3(null,e)),r}function p3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let S=0;S<2;S++)T=T+Math.random().toString().slice(2);return T}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=iS(e,r,i),l=jg(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=nr.getBlob(h,r,d);if(f===null)throw KT();const g={name:u.fullPath},y=vi(s,t.host,t._protocol),I="POST",w=t.maxUploadRetryTime,b=new Sr(y,I,Zh(t,n),w);return b.urlParams=g,b.headers=o,b.body=f.uploadData(),b.errorHandler=Bo(e),b}class Dl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function zg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Gn(!1)}return Gn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function m3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=iS(e,r,i),a={name:o.fullPath},c=vi(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=jg(o,n),d=t.maxUploadRetryTime;function f(y){zg(y);let I;try{I=y.getResponseHeader("X-Goog-Upload-URL")}catch{Gn(!1)}return Gn(Xh(I)),I}const g=new Sr(c,u,f,d);return g.urlParams=a,g.headers=l,g.body=h,g.errorHandler=Bo(e),g}function g3(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=zg(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gn(!1)}h||Gn(!1);const d=Number(h);return Gn(!isNaN(d)),new Dl(d,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Sr(n,o,s,a);return c.headers=i,c.errorHandler=Bo(e),c}const p_=256*1024;function y3(t,e,n,r,i,s,o,a){const c=new Dl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw xU();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw KT();function I(S,M){const j=zg(S,["active","final"]),re=c.current+l,K=r.size();let ie;return j==="final"?ie=Zh(e,s)(S,M):ie=null,new Dl(re,K,j==="final",ie)}const w="POST",b=e.maxUploadRetryTime,T=new Sr(n,w,I,b);return T.headers=g,T.body=y.uploadData(),T.progressCallback=a||null,T.errorHandler=Bo(t),T}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v3={STATE_CHANGED:"state_changed"},Mt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function zd(t){switch(t){case"running":case"pausing":case"canceling":return Mt.RUNNING;case"paused":return Mt.PAUSED;case"success":return Mt.SUCCESS;case"canceled":return Mt.CANCELED;case"error":return Mt.ERROR;default:return Mt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e,n,r){if(MU(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class _3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ra("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class b3 extends _3{initXhr(){this.xhr_.responseType="text"}}function Fn(){return new b3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Jh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Fe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(QT(i.status,[]))if(s)i=zT();else{this.sleepTime=Math.max(this.sleepTime*2,_U),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Fe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=m3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Fn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=g3(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Fn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=p_*this._chunkMultiplier,n=new Dl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=y3(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Fn,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){p_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=rS(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Fn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=p3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Fn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=HT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=zd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new w3(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(zd(this._state)){case Mt.SUCCESS:Rs(this._resolve.bind(null,this.snapshot))();break;case Mt.CANCELED:case Mt.ERROR:const n=this._reject;Rs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(zd(this._state)){case Mt.RUNNING:case Mt.PAUSED:e.next&&Rs(e.next.bind(e,this.snapshot))();break;case Mt.SUCCESS:e.complete&&Rs(e.complete.bind(e))();break;case Mt.CANCELED:case Mt.ERROR:e.error&&Rs(e.error.bind(e,this._error))();break;default:e.error&&Rs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ls(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tS(this._location.path)}get storage(){return this._service}get parent(){const e=JU(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new ls(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WT(e)}}function I3(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new sS(t,new nr(e),n)}function E3(t){const e={prefixes:[],items:[]};return oS(t,e).then(()=>e)}async function oS(t,e,n){const i=await aS(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await oS(t,e,i.nextPageToken)}function aS(t,e){e!=null&&typeof e.maxResults=="number"&&lp("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=u3(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Fn)}function T3(t){t._throwIfRoot("getMetadata");const e=rS(t.storage,t._location,Jh());return t.storage.makeRequestWithTokens(e,Fn)}function S3(t,e){t._throwIfRoot("updateMetadata");const n=h3(t.storage,t._location,e,Jh());return t.storage.makeRequestWithTokens(n,Fn)}function k3(t){t._throwIfRoot("getDownloadURL");const e=l3(t.storage,t._location,Jh());return t.storage.makeRequestWithTokens(e,Fn).then(n=>{if(n===null)throw RU();return n})}function A3(t){t._throwIfRoot("deleteObject");const e=d3(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Fn)}function cS(t,e){const n=ZU(t._location.path,e),r=new At(t._location.bucket,n);return new ls(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C3(t){return/^[A-Za-z]+:\/\//.test(t)}function x3(t,e){return new ls(t,e)}function uS(t,e){if(t instanceof Hg){const n=t;if(n._bucket==null)throw CU();const r=new ls(n,n._bucket);return e!=null?uS(r,e):r}else return e!==void 0?cS(t,e):t}function R3(t,e){if(e&&C3(e)){if(t instanceof Hg)return x3(t,e);throw Zs("To use ref(service, url), the first argument must be a Storage instance.")}else return uS(t,e)}function m_(t,e){const n=e==null?void 0:e[jT];return n==null?null:At.makeFromBucketSpec(n,t)}function N3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:h0(i,t.app.options.projectId))}class Hg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=qT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vU,this._maxUploadRetryTime=wU,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=m_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=m_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ls(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new PU(GT());{const o=jU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const g_="@firebase/storage",y_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P3="storage";function O3(t,e,n){return t=Y(t),I3(t,e,n)}function D3(t){return t=Y(t),T3(t)}function L3(t,e){return t=Y(t),S3(t,e)}function M3(t,e){return t=Y(t),aS(t,e)}function F3(t){return t=Y(t),E3(t)}function U3(t){return t=Y(t),k3(t)}function V3(t){return t=Y(t),A3(t)}function v_(t,e){return t=Y(t),R3(t,e)}function B3(t,e){return cS(t,e)}function $3(t,e,n,r={}){N3(t,e,n,r)}function q3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hg(n,r,i,e,wr)}function j3(){hr(new ln(P3,q3,"PUBLIC").setMultipleInstances(!0)),un(g_,y_,""),un(g_,y_,"esm2017")}j3();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Eu(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Eu(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Eu(o,this,this._ref)):s={next:n.next?o=>n.next(new Eu(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class __{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new lr(e,this._service))}get items(){return this._delegate.items.map(e=>new lr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=B3(this._delegate,e);return new lr(n,this.storage)}get root(){return new lr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new lr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new w_(O3(this._delegate,e,n),this)}putString(e,n=an.RAW,r){this._throwIfRoot("putString");const i=XT(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new w_(new sS(this._delegate,new nr(i.data,!0),s),this)}listAll(){return F3(this._delegate).then(e=>new __(e,this.storage))}list(e){return M3(this._delegate,e||void 0).then(n=>new __(n,this.storage))}getMetadata(){return D3(this._delegate)}updateMetadata(e){return L3(this._delegate,e)}getDownloadURL(){return U3(this._delegate)}delete(){return this._throwIfRoot("delete"),V3(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw WT(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(b_(e))throw Zs("ref() expected a child path but got a URL, use refFromURL instead.");return new lr(v_(this._delegate,e),this)}refFromURL(e){if(!b_(e))throw Zs("refFromURL() expected a full URL but got a child path, use ref() instead.");try{At.makeFromUrl(e,this._delegate.host)}catch{throw Zs("refFromUrl() expected a valid full URL but got an invalid one.")}return new lr(v_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){$3(this._delegate,e,n,r)}}function b_(t){return/^[A-Za-z]+:\/\//.test(t)}const z3="@firebase/storage-compat",H3="0.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3="storage-compat";function G3(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new lS(n,r)}function W3(t){const e={TaskState:Mt,TaskEvent:v3,StringFormat:an,Storage:lS,Reference:lr};t.INTERNAL.registerComponent(new ln(K3,G3,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(z3,H3)}W3(ps);const Kg=ps.initializeApp({apiKey:"AIzaSyBVSnb6qgU4uc_kvUwCOv91bgCn2Njb3kU",authDomain:"corretaje-mora-palomo.firebaseapp.com",projectId:"corretaje-mora-palomo",storageBucket:"corretaje-mora-palomo.appspot.com",messagingSenderId:"254785189750",appId:"1:254785189750:web:1b2479f200ec7f9340ec57"}),E9=Kg.firestore(),Y3=Kg.auth(),T9=Kg.storage().ref(),I_=()=>(t,e,n)=>{Y3.onAuthStateChanged(function(r){if(!r)return n({path:"/admin_login?returnPath=mp_admin"});n()})},Q3=Tx({history:BC("/"),routes:[{path:"/",name:"Door",component:()=>zo(()=>import("./Building.02e2cc29.js"),["assets/Building.02e2cc29.js","assets/Building.58a0923a.css"])},{path:"/web_view",name:"home",component:()=>zo(()=>import("./Public.a1d616c6.js"),["assets/Public.a1d616c6.js","assets/Public.7a1f6ba2.css"])},{path:"/admin_login",name:"login",component:()=>zo(()=>import("./Login.a39aa82a.js"),["assets/Login.a39aa82a.js","assets/Login.4aadef5e.css"])},{path:"/mp_admin",name:"admin",component:()=>zo(()=>import("./Admin.7f9aaff4.js"),["assets/Admin.7f9aaff4.js","assets/Toast.b2dcd40e.js","assets/Toast.a1842265.css","assets/Admin.1e37d876.css"]),beforeEnter:I_(),redirect:"/admin/uploader",children:[{path:"/admin/uploader",name:"uploader",component:()=>zo(()=>import("./Uploader.798b817f.js"),["assets/Uploader.798b817f.js","assets/Toast.b2dcd40e.js","assets/Toast.a1842265.css","assets/Uploader.03ea4cf1.css"]),beforeEnter:I_()}]}]});function E_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E_(Object(n),!0).forEach(function(r){ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ll(t){return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ll(t)}function X3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J3(t,e,n){return e&&T_(t.prototype,e),n&&T_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gg(t,e){return e6(t)||n6(t,e)||hS(t,e)||i6()}function Xc(t){return Z3(t)||t6(t)||hS(t)||r6()}function Z3(t){if(Array.isArray(t))return hp(t)}function e6(t){if(Array.isArray(t))return t}function t6(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function n6(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function hS(t,e){if(!!t){if(typeof t=="string")return hp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hp(t,e)}}function hp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S_=function(){},Wg={},dS={},fS=null,pS={mark:S_,measure:S_};try{typeof window<"u"&&(Wg=window),typeof document<"u"&&(dS=document),typeof MutationObserver<"u"&&(fS=MutationObserver),typeof performance<"u"&&(pS=performance)}catch{}var s6=Wg.navigator||{},k_=s6.userAgent,A_=k_===void 0?"":k_,ci=Wg,De=dS,C_=fS,Tu=pS;ci.document;var kr=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",mS=~A_.indexOf("MSIE")||~A_.indexOf("Trident/"),Su,ku,Au,Cu,xu,mr="___FONT_AWESOME___",dp=16,gS="fa",yS="svg-inline--fa",hs="data-fa-i2svg",fp="data-fa-pseudo-element",o6="data-fa-pseudo-element-pending",Yg="data-prefix",Qg="data-icon",x_="fontawesome-i2svg",a6="async",c6=["HTML","HEAD","STYLE","SCRIPT"],vS=function(){try{return!0}catch{return!1}}(),Ne="classic",je="sharp",Xg=[Ne,je];function Jc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ne]}})}var gc=Jc((Su={},ot(Su,Ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ot(Su,je,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Su)),yc=Jc((ku={},ot(ku,Ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ot(ku,je,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ku)),vc=Jc((Au={},ot(Au,Ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ot(Au,je,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Au)),u6=Jc((Cu={},ot(Cu,Ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ot(Cu,je,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Cu)),l6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,wS="fa-layers-text",h6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,d6=Jc((xu={},ot(xu,Ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ot(xu,je,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xu)),_S=[1,2,3,4,5,6,7,8,9,10],f6=_S.concat([11,12,13,14,15,16,17,18,19,20]),p6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$i={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wc=new Set;Object.keys(yc[Ne]).map(wc.add.bind(wc));Object.keys(yc[je]).map(wc.add.bind(wc));var m6=[].concat(Xg,Xc(wc),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$i.GROUP,$i.SWAP_OPACITY,$i.PRIMARY,$i.SECONDARY]).concat(_S.map(function(t){return"".concat(t,"x")})).concat(f6.map(function(t){return"w-".concat(t)})),Na=ci.FontAwesomeConfig||{};function g6(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function y6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var v6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];v6.forEach(function(t){var e=Gg(t,2),n=e[0],r=e[1],i=y6(g6(n));i!=null&&(Na[r]=i)})}var bS={styleDefault:"solid",familyDefault:"classic",cssPrefix:gS,replacementClass:yS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Na.familyPrefix&&(Na.cssPrefix=Na.familyPrefix);var bo=z(z({},bS),Na);bo.autoReplaceSvg||(bo.observeMutations=!1);var W={};Object.keys(bS).forEach(function(t){Object.defineProperty(W,t,{enumerable:!0,set:function(n){bo[t]=n,Pa.forEach(function(r){return r(W)})},get:function(){return bo[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){bo.cssPrefix=e,Pa.forEach(function(n){return n(W)})},get:function(){return bo.cssPrefix}});ci.FontAwesomeConfig=W;var Pa=[];function w6(t){return Pa.push(t),function(){Pa.splice(Pa.indexOf(t),1)}}var Mr=dp,jn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _6(t){if(!(!t||!kr)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return De.head.insertBefore(e,r),t}}var b6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _c(){for(var t=12,e="";t-- >0;)e+=b6[Math.random()*62|0];return e}function $o(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jg(t){return t.classList?$o(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function IS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I6(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(IS(t[n]),'" ')},"").trim()}function td(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Zg(t){return t.size!==jn.size||t.x!==jn.x||t.y!==jn.y||t.rotate!==jn.rotate||t.flipX||t.flipY}function E6(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function T6(t){var e=t.transform,n=t.width,r=n===void 0?dp:n,i=t.height,s=i===void 0?dp:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&mS?c+="translate(".concat(e.x/Mr-r/2,"em, ").concat(e.y/Mr-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Mr,"em), calc(-50% + ").concat(e.y/Mr,"em)) "):c+="translate(".concat(e.x/Mr,"em, ").concat(e.y/Mr,"em) "),c+="scale(".concat(e.size/Mr*(e.flipX?-1:1),", ").concat(e.size/Mr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var S6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ES(){var t=gS,e=yS,n=W.cssPrefix,r=W.replacementClass,i=S6;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var R_=!1;function Hd(){W.autoAddCss&&!R_&&(_6(ES()),R_=!0)}var k6={mixout:function(){return{dom:{css:ES,insertCss:Hd}}},hooks:function(){return{beforeDOMElementCreation:function(){Hd()},beforeI2svg:function(){Hd()}}}},gr=ci||{};gr[mr]||(gr[mr]={});gr[mr].styles||(gr[mr].styles={});gr[mr].hooks||(gr[mr].hooks={});gr[mr].shims||(gr[mr].shims=[]);var wn=gr[mr],TS=[],A6=function t(){De.removeEventListener("DOMContentLoaded",t),Ml=1,TS.map(function(e){return e()})},Ml=!1;kr&&(Ml=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),Ml||De.addEventListener("DOMContentLoaded",A6));function C6(t){!kr||(Ml?setTimeout(t,0):TS.push(t))}function Zc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?IS(t):"<".concat(e," ").concat(I6(r),">").concat(s.map(Zc).join(""),"</").concat(e,">")}function N_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var x6=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Kd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?x6(n,i):n,c,u,l;for(r===void 0?(c=1,l=e[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,e[u],u,e);return l};function R6(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function pp(t){var e=R6(t);return e.length===1?e[0].toString(16):null}function N6(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function P_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function mp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=P_(e);typeof wn.hooks.addPack=="function"&&!i?wn.hooks.addPack(t,P_(e)):wn.styles[t]=z(z({},wn.styles[t]||{}),s),t==="fas"&&mp("fa",e)}var Ru,Nu,Pu,Fs=wn.styles,P6=wn.shims,O6=(Ru={},ot(Ru,Ne,Object.values(vc[Ne])),ot(Ru,je,Object.values(vc[je])),Ru),ey=null,SS={},kS={},AS={},CS={},xS={},D6=(Nu={},ot(Nu,Ne,Object.keys(gc[Ne])),ot(Nu,je,Object.keys(gc[je])),Nu);function L6(t){return~m6.indexOf(t)}function M6(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!L6(i)?i:null}var RS=function(){var e=function(s){return Kd(Fs,function(o,a,c){return o[c]=Kd(a,s,{}),o},{})};SS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),kS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),xS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Fs||W.autoFetchSvg,r=Kd(P6,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});AS=r.names,CS=r.unicodes,ey=nd(W.styleDefault,{family:W.familyDefault})};w6(function(t){ey=nd(t.styleDefault,{family:W.familyDefault})});RS();function ty(t,e){return(SS[t]||{})[e]}function F6(t,e){return(kS[t]||{})[e]}function qi(t,e){return(xS[t]||{})[e]}function NS(t){return AS[t]||{prefix:null,iconName:null}}function U6(t){var e=CS[t],n=ty("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ui(){return ey}var ny=function(){return{prefix:null,iconName:null,rest:[]}};function nd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ne:n,i=gc[r][t],s=yc[r][t]||yc[r][i],o=t in wn.styles?t:null;return s||o||null}var O_=(Pu={},ot(Pu,Ne,Object.keys(vc[Ne])),ot(Pu,je,Object.keys(vc[je])),Pu);function rd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ot(e,Ne,"".concat(W.cssPrefix,"-").concat(Ne)),ot(e,je,"".concat(W.cssPrefix,"-").concat(je)),e),o=null,a=Ne;(t.includes(s[Ne])||t.some(function(u){return O_[Ne].includes(u)}))&&(a=Ne),(t.includes(s[je])||t.some(function(u){return O_[je].includes(u)}))&&(a=je);var c=t.reduce(function(u,l){var h=M6(W.cssPrefix,l);if(Fs[l]?(l=O6[a].includes(l)?u6[a][l]:l,o=l,u.prefix=l):D6[a].indexOf(l)>-1?(o=l,u.prefix=nd(l,{family:a})):h?u.iconName=h:l!==W.replacementClass&&l!==s[Ne]&&l!==s[je]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?NS(u.iconName):{},f=qi(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||f||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Fs.far&&Fs.fas&&!W.autoFetchSvg&&(u.prefix="fas")}return u},ny());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===je&&(Fs.fass||W.autoFetchSvg)&&(c.prefix="fass",c.iconName=qi(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=ui()||"fas"),c}var V6=function(){function t(){X3(this,t),this.definitions={}}return J3(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=z(z({},n.definitions[a]||{}),o[a]),mp(a,o[a]);var c=vc[Ne][a];c&&mp(c,o[a]),RS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}]),t}(),D_=[],Us={},eo={},B6=Object.keys(eo);function $6(t,e){var n=e.mixoutsTo;return D_=t,Us={},Object.keys(eo).forEach(function(r){B6.indexOf(r)===-1&&delete eo[r]}),D_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ll(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Us[o]||(Us[o]=[]),Us[o].push(s[o])})}r.provides&&r.provides(eo)}),n}function gp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Us[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ds(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Us[t]||[];i.forEach(function(s){s.apply(null,n)})}function yr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return eo[t]?eo[t].apply(null,e):void 0}function yp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ui();if(!!e)return e=qi(n,e)||e,N_(PS.definitions,n,e)||N_(wn.styles,n,e)}var PS=new V6,q6=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,ds("noAuto")},j6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kr?(ds("beforeI2svg",e),yr("pseudoElements2svg",e),yr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,C6(function(){H6({autoReplaceSvgRoot:n}),ds("watch",e)})}},z6={icon:function(e){if(e===null)return null;if(Ll(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:qi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=nd(e[0]);return{prefix:r,iconName:qi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(l6))){var i=rd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ui(),iconName:qi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ui();return{prefix:s,iconName:qi(s,e)||e}}}},nn={noAuto:q6,config:W,dom:j6,parse:z6,library:PS,findIconDefinition:yp,toHtml:Zc},H6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?De:n;(Object.keys(wn.styles).length>0||W.autoFetchSvg)&&kr&&W.autoReplaceSvg&&nn.dom.i2svg({node:r})};function id(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Zc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!kr){var r=De.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function K6(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Zg(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=td(z(z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function G6(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function ry(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,u=t.maskId,l=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,g=r.found?r:n,y=g.width,I=g.height,w=i==="fak",b=[W.replacementClass,s?"".concat(W.cssPrefix,"-").concat(s):""].filter(function(ie){return h.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(h.classes).join(" "),T={children:[],attributes:z(z({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(I)})},S=w&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/I*16*.0625,"em")}:{};f&&(T.attributes[hs]=""),c&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(l||_c())},children:[c]}),delete T.attributes.title);var M=z(z({},T),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:z(z({},S),h.styles)}),j=r.found&&n.found?yr("generateAbstractMask",M)||{children:[],attributes:{}}:yr("generateAbstractIcon",M)||{children:[],attributes:{}},re=j.children,K=j.attributes;return M.children=re,M.attributes=K,a?G6(M):K6(M)}function L_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[hs]="");var l=z({},o.styles);Zg(i)&&(l.transform=T6({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var h=td(l);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function W6(t){var e=t.content,n=t.title,r=t.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=td(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gd=wn.styles;function vp(t){var e=t[0],n=t[1],r=t.slice(4),i=Gg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat($i.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat($i.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat($i.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Y6={found:!1,width:512,height:512};function Q6(t,e){!vS&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function wp(t,e){var n=e;return e==="fa"&&W.styleDefault!==null&&(e=ui()),new Promise(function(r,i){if(yr("missingIconAbstract"),n==="fa"){var s=NS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Gd[e]&&Gd[e][t]){var o=Gd[e][t];return r(vp(o))}Q6(t,e),r(z(z({},Y6),{},{icon:W.showMissingIcons&&t?yr("missingIconAbstract")||{}:{}}))})}var M_=function(){},_p=W.measurePerformance&&Tu&&Tu.mark&&Tu.measure?Tu:{mark:M_,measure:M_},fa='FA "6.5.1"',X6=function(e){return _p.mark("".concat(fa," ").concat(e," begins")),function(){return OS(e)}},OS=function(e){_p.mark("".concat(fa," ").concat(e," ends")),_p.measure("".concat(fa," ").concat(e),"".concat(fa," ").concat(e," begins"),"".concat(fa," ").concat(e," ends"))},iy={begin:X6,end:OS},Yu=function(){};function F_(t){var e=t.getAttribute?t.getAttribute(hs):null;return typeof e=="string"}function J6(t){var e=t.getAttribute?t.getAttribute(Yg):null,n=t.getAttribute?t.getAttribute(Qg):null;return e&&n}function Z6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function e5(){if(W.autoReplaceSvg===!0)return Qu.replace;var t=Qu[W.autoReplaceSvg];return t||Qu.replace}function t5(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function n5(t){return De.createElement(t)}function DS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?t5:n5:n;if(typeof t=="string")return De.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(DS(o,{ceFn:r}))}),i}function r5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Qu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(DS(i),n)}),n.getAttribute(hs)===null&&W.keepOriginalSource){var r=De.createComment(r5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Jg(n).indexOf(W.replacementClass))return Qu.replace(e);var i=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===W.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Zc(a)}).join(`
`);n.setAttribute(hs,""),n.innerHTML=o}};function U_(t){t()}function LS(t,e){var n=typeof e=="function"?e:Yu;if(t.length===0)n();else{var r=U_;W.mutateApproach===a6&&(r=ci.requestAnimationFrame||U_),r(function(){var i=e5(),s=iy.begin("mutate");t.map(i),s(),n()})}}var sy=!1;function MS(){sy=!0}function bp(){sy=!1}var Fl=null;function V_(t){if(!!C_&&!!W.observeMutations){var e=t.treeCallback,n=e===void 0?Yu:e,r=t.nodeCallback,i=r===void 0?Yu:r,s=t.pseudoElementsCallback,o=s===void 0?Yu:s,a=t.observeMutationsRoot,c=a===void 0?De:a;Fl=new C_(function(u){if(!sy){var l=ui();$o(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!F_(h.addedNodes[0])&&(W.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&W.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&F_(h.target)&&~p6.indexOf(h.attributeName))if(h.attributeName==="class"&&J6(h.target)){var d=rd(Jg(h.target)),f=d.prefix,g=d.iconName;h.target.setAttribute(Yg,f||l),g&&h.target.setAttribute(Qg,g)}else Z6(h.target)&&i(h.target)})}}),kr&&Fl.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function i5(){!Fl||Fl.disconnect()}function s5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function o5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=rd(Jg(t));return i.prefix||(i.prefix=ui()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=F6(i.prefix,t.innerText)||ty(i.prefix,pp(t.innerText))),!i.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function a5(t){var e=$o(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||_c()):(e["aria-hidden"]="true",e.focusable="false")),e}function c5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:jn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function B_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=o5(t),r=n.iconName,i=n.prefix,s=n.rest,o=a5(t),a=gp("parseNodeAttributes",{},t),c=e.styleParser?s5(t):[];return z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:jn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var u5=wn.styles;function FS(t){var e=W.autoReplaceSvg==="nest"?B_(t,{styleParser:!1}):B_(t);return~e.extra.classes.indexOf(wS)?yr("generateLayersText",t,e):yr("generateSvgReplacementMutation",t,e)}var li=new Set;Xg.map(function(t){li.add("fa-".concat(t))});Object.keys(gc[Ne]).map(li.add.bind(li));Object.keys(gc[je]).map(li.add.bind(li));li=Xc(li);function $_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kr)return Promise.resolve();var n=De.documentElement.classList,r=function(h){return n.add("".concat(x_,"-").concat(h))},i=function(h){return n.remove("".concat(x_,"-").concat(h))},s=W.autoFetchSvg?li:Xg.map(function(l){return"fa-".concat(l)}).concat(Object.keys(u5));s.includes("fa")||s.push("fa");var o=[".".concat(wS,":not([").concat(hs,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(hs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=$o(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=iy.begin("onTree"),u=a.reduce(function(l,h){try{var d=FS(h);d&&l.push(d)}catch(f){vS||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise(function(l,h){Promise.all(u).then(function(d){LS(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(d){c(),h(d)})})}function l5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;FS(t).then(function(n){n&&LS([n],e)})}function h5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:yp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:yp(i||{})),t(r,z(z({},n),{},{mask:i}))}}var d5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?jn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,h=n.title,d=h===void 0?null:h,f=n.titleId,g=f===void 0?null:f,y=n.classes,I=y===void 0?[]:y,w=n.attributes,b=w===void 0?{}:w,T=n.styles,S=T===void 0?{}:T;if(!!e){var M=e.prefix,j=e.iconName,re=e.icon;return id(z({type:"icon"},e),function(){return ds("beforeDOMElementCreation",{iconDefinition:e,params:n}),W.autoA11y&&(d?b["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(g||_c()):(b["aria-hidden"]="true",b.focusable="false")),ry({icons:{main:vp(re),mask:c?vp(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:j,transform:z(z({},jn),i),symbol:o,title:d,maskId:l,titleId:g,extra:{attributes:b,styles:S,classes:I}})})}},f5={mixout:function(){return{icon:h5(d5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$_,n.nodeCallback=l5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?De:r,s=n.callback,o=s===void 0?function(){}:s;return $_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,h=r.maskId,d=r.extra;return new Promise(function(f,g){Promise.all([wp(i,a),l.iconName?wp(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var I=Gg(y,2),w=I[0],b=I[1];f([n,ry({icons:{main:w,mask:b},prefix:a,iconName:i,transform:c,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=td(a);c.length>0&&(i.style=c);var u;return Zg(o)&&(u=yr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},p5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return id({type:"layer"},function(){ds("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(Xc(s)).join(" ")},children:o}]})}}}},m5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,h=l===void 0?{}:l;return id({type:"counter",content:n},function(){return ds("beforeDOMElementCreation",{content:n,params:r}),W6({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(Xc(a))}})})}}}},g5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?jn:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,h=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return id({type:"text",content:n},function(){return ds("beforeDOMElementCreation",{content:n,params:r}),L_({content:n,transform:z(z({},jn),s),title:a,extra:{attributes:h,styles:f,classes:["".concat(W.cssPrefix,"-layers-text")].concat(Xc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(mS){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return W.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,L_({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},y5=new RegExp('"',"ug"),q_=[1105920,1112319];function v5(t){var e=t.replace(y5,""),n=N6(e,0),r=n>=q_[0]&&n<=q_[1],i=e.length===2?e[0]===e[1]:!1;return{value:pp(i?e[0]:e),isSecondary:r||i}}function j_(t,e){var n="".concat(o6).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=$o(t.children),o=s.filter(function(re){return re.getAttribute(fp)===e})[0],a=ci.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(h6),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&l!=="none"&&l!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?je:Ne,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?yc[d][c[2].toLowerCase()]:d6[d][u],g=v5(h),y=g.value,I=g.isSecondary,w=c[0].startsWith("FontAwesome"),b=ty(f,y),T=b;if(w){var S=U6(y);S.iconName&&S.prefix&&(b=S.iconName,f=S.prefix)}if(b&&!I&&(!o||o.getAttribute(Yg)!==f||o.getAttribute(Qg)!==T)){t.setAttribute(n,T),o&&t.removeChild(o);var M=c5(),j=M.extra;j.attributes[fp]=e,wp(b,f).then(function(re){var K=ry(z(z({},M),{},{icons:{main:re,mask:ny()},prefix:f,iconName:T,extra:j,watchable:!0})),ie=De.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ie,t.firstChild):t.appendChild(ie),ie.outerHTML=K.map(function(ye){return Zc(ye)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function w5(t){return Promise.all([j_(t,"::before"),j_(t,"::after")])}function _5(t){return t.parentNode!==document.head&&!~c6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function z_(t){if(!!kr)return new Promise(function(e,n){var r=$o(t.querySelectorAll("*")).filter(_5).map(w5),i=iy.begin("searchPseudoElements");MS(),Promise.all(r).then(function(){i(),bp(),e()}).catch(function(){i(),bp(),n()})})}var b5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=z_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?De:r;W.searchPseudoElements&&z_(i)}}},H_=!1,I5={mixout:function(){return{dom:{unwatch:function(){MS(),H_=!0}}}},hooks:function(){return{bootstrap:function(){V_(gp("mutationObserverCallbacks",{}))},noAuto:function(){i5()},watch:function(n){var r=n.observeMutationsRoot;H_?bp():V_(gp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},K_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},E5={mixout:function(){return{parse:{transform:function(n){return K_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=K_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:z({},f.outer),children:[{tag:"g",attributes:z({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),f.path)}]}]}}}},Wd={x:0,y:0,width:"100%",height:"100%"};function G_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function T5(t){return t.tag==="g"?t.children:[t]}var S5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?rd(i.split(" ").map(function(o){return o.trim()})):ny();return s.prefix||(s.prefix=ui()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,h=o.width,d=o.icon,f=E6({transform:c,containerWidth:h,iconWidth:u}),g={tag:"rect",attributes:z(z({},Wd),{},{fill:"white"})},y=l.children?{children:l.children.map(G_)}:{},I={tag:"g",attributes:z({},f.inner),children:[G_(z({tag:l.tag,attributes:z(z({},l.attributes),f.path)},y))]},w={tag:"g",attributes:z({},f.outer),children:[I]},b="mask-".concat(a||_c()),T="clip-".concat(a||_c()),S={tag:"mask",attributes:z(z({},Wd),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,w]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:T5(d)},S]};return r.push(M,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(b,")")},Wd)}),{children:r,attributes:i}}}},k5={provides:function(e){var n=!1;ci.matchMedia&&(n=ci.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=z(z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},A5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},C5=[k6,f5,p5,m5,g5,b5,I5,E5,S5,k5,A5];$6(C5,{mixoutsTo:nn});nn.noAuto;var US=nn.config,x5=nn.library;nn.dom;var Ul=nn.parse;nn.findIconDefinition;nn.toHtml;var R5=nn.icon;nn.layer;var N5=nn.text;nn.counter;function W_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?W_(Object(n),!0).forEach(function(r){Bt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vl(t){return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vl(t)}function Bt(t,e,n){return e=V5(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function O5(t,e){if(t==null)return{};var n=P5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Ip(t){return D5(t)||L5(t)||M5(t)||F5()}function D5(t){if(Array.isArray(t))return Ep(t)}function L5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function M5(t,e){if(!!t){if(typeof t=="string")return Ep(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ep(t,e)}}function Ep(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U5(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function V5(t){var e=U5(t,"string");return typeof e=="symbol"?e:String(e)}var B5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},VS={exports:{}};(function(t){(function(e){var n=function(w,b,T){if(!u(b)||h(b)||d(b)||f(b)||c(b))return b;var S,M=0,j=0;if(l(b))for(S=[],j=b.length;M<j;M++)S.push(n(w,b[M],T));else{S={};for(var re in b)Object.prototype.hasOwnProperty.call(b,re)&&(S[w(re,T)]=n(w,b[re],T))}return S},r=function(w,b){b=b||{};var T=b.separator||"_",S=b.split||/(?=[A-Z])/;return w.split(S).join(T)},i=function(w){return g(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(b,T){return T?T.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},s=function(w){var b=i(w);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(w,b){return r(w,b).toLowerCase()},a=Object.prototype.toString,c=function(w){return typeof w=="function"},u=function(w){return w===Object(w)},l=function(w){return a.call(w)=="[object Array]"},h=function(w){return a.call(w)=="[object Date]"},d=function(w){return a.call(w)=="[object RegExp]"},f=function(w){return a.call(w)=="[object Boolean]"},g=function(w){return w=w-0,w===w},y=function(w,b){var T=b&&"process"in b?b.process:b;return typeof T!="function"?w:function(S,M){return T(S,w,M)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(w,b){return n(y(i,b),w)},decamelizeKeys:function(w,b){return n(y(o,b),w,b)},pascalizeKeys:function(w,b){return n(y(s,b),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(B5)})(VS);var $5=VS.exports,q5=["class","style"];function j5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=$5.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function z5(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function oy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return oy(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var l=t.attributes[u];switch(u){case"class":c.class=z5(l);break;case"style":c.style=j5(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=O5(n,q5);return Ec(t.tag,gn(gn(gn({},e),{},{class:i.class,style:gn(gn({},i.style),o)},i.attrs),a),r)}var BS=!1;try{BS=!0}catch{}function H5(){if(!BS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Oa(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Bt({},t,e):{}}function K5(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Bt(e,"fa-".concat(t.size),t.size!==null),Bt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Bt(e,"fa-pull-".concat(t.pull),t.pull!==null),Bt(e,"fa-swap-opacity",t.swapOpacity),Bt(e,"fa-bounce",t.bounce),Bt(e,"fa-shake",t.shake),Bt(e,"fa-beat",t.beat),Bt(e,"fa-fade",t.fade),Bt(e,"fa-beat-fade",t.beatFade),Bt(e,"fa-flash",t.flash),Bt(e,"fa-spin-pulse",t.spinPulse),Bt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Y_(t){if(t&&Vl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ul.icon)return Ul.icon(t);if(t===null)return null;if(Vl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var G5=Ic({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=ze(function(){return Y_(e.icon)}),s=ze(function(){return Oa("classes",K5(e))}),o=ze(function(){return Oa("transform",typeof e.transform=="string"?Ul.transform(e.transform):e.transform)}),a=ze(function(){return Oa("mask",Y_(e.mask))}),c=ze(function(){return R5(i.value,gn(gn(gn(gn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});pa(c,function(l){if(!l)return H5("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=ze(function(){return c.value?oy(c.value.abstract[0],{},r):null});return function(){return u.value}}});Ic({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=US.familyPrefix,s=ze(function(){return["".concat(i,"-layers")].concat(Ip(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Ec("div",{class:s.value},r.default?r.default():[])}}});Ic({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=US.familyPrefix,s=ze(function(){return Oa("classes",[].concat(Ip(e.counter?["".concat(i,"-layers-counter")]:[]),Ip(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=ze(function(){return Oa("transform",typeof e.transform=="string"?Ul.transform(e.transform):e.transform)}),a=ze(function(){var u=N5(e.value.toString(),gn(gn({},o.value),s.value)),l=u.abstract;return e.counter&&(l[0].attributes.class=l[0].attributes.class.replace("fa-layers-text","")),l[0]}),c=ze(function(){return oy(a.value,{},r)});return function(){return c.value}}});var W5={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},Y5={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Q5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},X5={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},J5={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Z5={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},e9={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},t9={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},n9={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},r9={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},i9={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},s9={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},o9={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},a9={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},c9={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},u9={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};x5.add(n9,r9,Q5,X5,o9,c9,a9,u9,e9,W5,Z5,t9,i9,Y5,s9,J5);const ay=mC(_C);ay.use(Q3);ay.component("font-awesome-icon",G5);ay.mount("#app");export{xA as A,h9 as B,d9 as C,LF as D,vT as E,pn as F,E9 as G,xp as H,MT as I,I9 as J,Y3 as K,f9 as L,w9 as M,b9 as N,Cp as O,_9 as P,T9 as Q,Lr as R,XF as S,Wb as T,Pl as U,a_ as V,c_ as W,HF as X,yC as _,g9 as a,$k as b,m9 as c,y9 as d,zb as e,zt as f,Vp as g,Ic as h,zn as i,Kl as j,Ec as k,Bp as l,ze as m,_b as n,Bb as o,Mu as p,pa as q,Tk as r,Yr as s,l9 as t,v9 as u,CA as v,Mk as w,p9 as x,qs as y,qb as z};
