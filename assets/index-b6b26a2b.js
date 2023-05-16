(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _(){}function C(e){return e()}function N(){return Object.create(null)}function k(e){e.forEach(C)}function W(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let x;function S(e,t){return x||(x=document.createElement("a")),x.href=t,e===x.href}function I(e){return Object.keys(e).length===0}const D=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in D;function d(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function q(){return F(" ")}function H(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}let j;function w(e){j=e}const m=[],M=[];let g=[];const P=[],R=Promise.resolve();let A=!1;function G(){A||(A=!0,R.then(z))}function L(e){g.push(e)}const O=new Set;let h=0;function z(){if(h!==0)return;const e=j;do{try{for(;h<m.length;){const t=m[h];h++,w(t),J(t.$$)}}catch(t){throw m.length=0,h=0,t}for(w(null),m.length=0,h=0;M.length;)M.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];O.has(n)||(O.add(n),n())}g.length=0}while(m.length);for(;P.length;)P.pop()();A=!1,O.clear(),w(e)}function J(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function Q(e){const t=[],n=[];g.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),g=t}const U=new Set;function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}const X=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...X];function Y(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||L(()=>{const i=e.$$.on_mount.map(C).filter(W);e.$$.on_destroy?e.$$.on_destroy.push(...i):k(i),e.$$.on_mount=[]}),s.forEach(L)}function Z(e,t){const n=e.$$;n.fragment!==null&&(Q(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(m.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,r,s,i,v=[-1]){const a=j;w(e);const l=e.$$={fragment:null,ctx:[],props:s,update:_,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:N(),dirty:v,skip_bound:!1,root:t.target||a.$$.root};i&&i(l.root);let y=!1;if(l.ctx=n?n(e,t.props||{},(c,b,...u)=>{const $=u.length?u[0]:b;return l.ctx&&r(l.ctx[c],l.ctx[c]=$)&&(!l.skip_bound&&l.bound[c]&&l.bound[c]($),y&&ee(e,c)),b}):[],l.update(),y=!0,k(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const c=K(t.target);l.fragment&&l.fragment.l(c),c.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&V(e.$$.fragment),Y(e,t.target,t.anchor,t.customElement),z()}w(a)}class ne{$destroy(){Z(this,1),this.$destroy=_}$on(t,n){if(!W(n))return _;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const re="/svelte-tele-bot/assets/logo-daf4c534.png";function oe(e){let t,n,o,r,s,i,v,a,l,y,c,b;return{c(){t=p("script"),o=q(),r=p("main"),s=p("div"),i=p("h2"),i.textContent="Hello, Rashed",v=q(),a=p("a"),l=p("img"),S(t.src,n="https://telegram.org/js/telegram-web-app.js?1")||f(t,"src",n),S(l.src,y=re)||f(l,"src",y),f(l,"class","logo svelte-1urfbhd"),f(l,"alt","false"),f(a,"href","https://vitejs.dev"),f(a,"target","_blank"),f(a,"rel","noreferrer"),f(s,"class","header svelte-1urfbhd")},m(u,$){d(document.head,t),T(u,o,$),T(u,r,$),d(r,s),d(s,i),d(s,v),d(s,a),d(a,l),c||(b=H(t,"load",e[0]),c=!0)},p:_,i:_,o:_,d(u){E(t),u&&E(o),u&&E(r),c=!1,b()}}}function le(e){return[()=>{window.Telegram.WebApp.initData}]}class se extends ne{constructor(t){super(),te(this,t,le,oe,B,{})}}new se({target:document.getElementById("app")});
