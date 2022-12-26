import{t as R,_ as r,a as m,p as v,D as S,I as V,J as O,b as T,e as P,m as p,K as b,k as A,d as i,C as j,L as N,j as $,M as k}from"./entry.876f6604.js";import{u as B}from"./asyncData.1b3d72b4.js";import{h as c,e as C,j as w}from"./ContentQuery.5a98c339.js";import{w as y,s as x,a as M,b as z}from"./utils.b50c7565.js";import"./Markdown.c0952e7c.js";/* empty css                                                                *//* empty css                                                             */import"./ContentDoc.6229a37e.js";import"./ContentList.e2dc2dbc.js";import"./ContentRenderer.c39285f8.js";import"./ContentRendererMarkdown.e86a8c61.js";import"./ContentSlot.c0b10db4.js";import"./ProseCode.54fee183.js";import{u as H}from"./composables.8439651d.js";import"./_commonjsHelpers.32e42f04.js";const q=async t=>{var o,_;const{content:e}=R().public,n=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((_=(o=n.where)==null?void 0:o.find(u=>u._locale))!=null&&_._locale||(n.where=n.where||[],n.where.push({_locale:e.defaultLocale})));const l=e.experimental.stripQueryParameters?y(`/navigation/${`${c(n)}.${e.integrity}`}/${C(n)}.json`):y(`/navigation/${c(n)}.${e.integrity}.json`);if(x())return(await r(()=>import("./client-db.54fa0475.js"),["./client-db.54fa0475.js","./entry.876f6604.js","./entry.f5487d2b.css","./utils.b50c7565.js","./ContentQuery.5a98c339.js","./asyncData.1b3d72b4.js","./_commonjsHelpers.32e42f04.js"],import.meta.url).then(u=>u.generateNavigation))(n);const a=await $fetch(l,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:w(n),previewToken:M("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const F=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const l=v(null),a=S();return V(o=>{if(!a.isHydrating)return n("error",o),l.value=o,!1}),()=>{var o,_;return l.value?(o=e.error)==null?void 0:o.call(e,{error:l}):(_=e.default)==null?void 0:_.call(e)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),Q=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const l=v(!1);return O(()=>{l.value=!0}),a=>{var u;if(l.value)return(u=e.default)==null?void 0:u.call(e);const o=e.fallback||e.placeholder;if(o)return o();const _=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return T(d,n,_)}}}),g=new WeakMap;function W(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(n,...l)=>{var a;if(n.mounted$){const o=t.render(n,...l);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",(a=n.$attrs)!=null?a:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,l)=>{var o;const a=v(!1);return O(()=>{a.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,n,l))||{}).then(_=>typeof _!="function"?{..._,mounted$:a}:(...d)=>{if(a.value){const u=_(...d);return u.children===null||typeof u.children=="string"?P(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):p(u)}else return p("div",l.attrs)})},g.set(t,e),e}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:W},Symbol.toStringTag,{value:"Module"})),G=m({name:"DevOnly",setup(t,e){return()=>null}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),K=m({name:"ServerPlaceholder",render(){return T("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),X=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=tt({duration:t.duration,throttle:t.throttle}),l=S();return l.hook("page:start",n.start),l.hook("page:finish",n.finish),b(()=>n.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function tt(t){const e=v(0),n=v(!1),l=A(()=>1e4/t.duration);let a=null,o=null;function _(){u(),e.value=0,n.value=!0,t.throttle?o=setTimeout(E,t.throttle):E()}function d(){e.value=100,I()}function u(){clearInterval(a),clearTimeout(o),a=null,o=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){u(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){a=setInterval(()=>{L(l.value)},100)}return{progress:e,isLoading:n,start:_,finish:d,clear:u}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,l)=>(H(()=>t({...rt(n),...l.attrs},l)),()=>{var a,o;return e?(o=(a=l.slots).default)==null?void 0:o.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},it=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const n={...t},l=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return l&&(n.children=l),{noscript:[n]}})}),nt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ot=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),at=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var l,a,o;return{title:((o=(a=(l=e.default)==null?void 0:l.call(e))==null?void 0:a[0])==null?void 0:o.children)||null}})}),lt=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ut=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,o,_;const n={...t},l=(_=(o=(a=e.default)==null?void 0:a.call(e))==null?void 0:o[0])==null?void 0:_.children;return l&&(n.children=l),{style:[n]}})}),_t=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,l;return(l=(n=e.slots).default)==null?void 0:l.call(n)}}),mt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),dt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:it,Link:nt,Base:ot,Title:at,Meta:lt,Style:ut,Head:_t,Html:mt,Body:dt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./InfoBox.722c71e5.js"),["./InfoBox.722c71e5.js","./Markdown.c0952e7c.js","./ContentSlot.c0b10db4.js","./utils.b50c7565.js","./entry.876f6604.js","./entry.f5487d2b.css","./InfoBox.e3e8e04b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.ff329ed4.js"),["./DocumentDrivenEmpty.ff329ed4.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.4101f01f.js"),["./DocumentDrivenNotFound.4101f01f.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Footer.b0fd135e.js"),["./Footer.b0fd135e.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Header.bc0967d9.js"),["./Header.bc0967d9.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Tags.e152fe6a.js"),["./Tags.e152fe6a.js","./entry.876f6604.js","./entry.f5487d2b.css","./asyncData.1b3d72b4.js","./ContentQuery.5a98c339.js","./utils.b50c7565.js","./Tags.0f205e80.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.6229a37e.js"),["./ContentDoc.6229a37e.js","./entry.876f6604.js","./entry.f5487d2b.css","./composables.8439651d.js","./ContentRenderer.c39285f8.js","./ContentRendererMarkdown.e86a8c61.js","./_commonjsHelpers.32e42f04.js","./ContentQuery.5a98c339.js","./asyncData.1b3d72b4.js","./utils.b50c7565.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.e2dc2dbc.js"),["./ContentList.e2dc2dbc.js","./ContentQuery.5a98c339.js","./entry.876f6604.js","./entry.f5487d2b.css","./asyncData.1b3d72b4.js","./utils.b50c7565.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.5a98c339.js").then(t=>t.C),["./ContentQuery.5a98c339.js","./entry.876f6604.js","./entry.f5487d2b.css","./asyncData.1b3d72b4.js","./utils.b50c7565.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.c39285f8.js"),["./ContentRenderer.c39285f8.js","./ContentRendererMarkdown.e86a8c61.js","./entry.876f6604.js","./entry.f5487d2b.css","./_commonjsHelpers.32e42f04.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.e86a8c61.js"),["./ContentRendererMarkdown.e86a8c61.js","./entry.876f6604.js","./entry.f5487d2b.css","./_commonjsHelpers.32e42f04.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.c0b10db4.js"),["./ContentSlot.c0b10db4.js","./utils.b50c7565.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.c0952e7c.js"),["./Markdown.c0952e7c.js","./ContentSlot.c0b10db4.js","./utils.b50c7565.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.122be140.js"),["./ProseA.122be140.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.127af32b.js"),["./ProseBlockquote.127af32b.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.54fee183.js"),["./ProseCode.54fee183.js","./entry.876f6604.js","./entry.f5487d2b.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.3f7c3243.js"),["./ProseCodeInline.3f7c3243.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.3d1dca3d.js"),["./ProseEm.3d1dca3d.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.484c25ba.js"),["./ProseH1.484c25ba.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.9864bba4.js"),["./ProseH2.9864bba4.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.7e24410a.js"),["./ProseH3.7e24410a.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.8d5924bf.js"),["./ProseH4.8d5924bf.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.ea787898.js"),["./ProseH5.ea787898.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.030c83ef.js"),["./ProseH6.030c83ef.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.c9738e5d.js"),["./ProseHr.c9738e5d.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.7014b1d2.js"),["./ProseImg.7014b1d2.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.2170cd89.js"),["./ProseLi.2170cd89.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.af989161.js"),["./ProseOl.af989161.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.87ad8c9e.js"),["./ProseP.87ad8c9e.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.c32454ef.js"),["./ProseStrong.c32454ef.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.f4afacb3.js"),["./ProseTable.f4afacb3.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.c02c124b.js"),["./ProseTbody.c02c124b.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.802b60b4.js"),["./ProseTd.802b60b4.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.ec94e3ab.js"),["./ProseTh.ec94e3ab.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.114eb614.js"),["./ProseThead.114eb614.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.e40ae9c3.js"),["./ProseTr.e40ae9c3.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.575a02a4.js"),["./ProseUl.575a02a4.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./UnoIcon.738b07a7.js"),["./UnoIcon.738b07a7.js","./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.19bed3f0.js"),["./welcome.19bed3f0.js","./composables.8439651d.js","./entry.876f6604.js","./entry.f5487d2b.css","./asyncData.1b3d72b4.js","./ContentQuery.5a98c339.js","./utils.b50c7565.js","./Markdown.c0952e7c.js","./ContentSlot.c0b10db4.js","./ContentDoc.6229a37e.js","./ContentRenderer.c39285f8.js","./ContentRendererMarkdown.e86a8c61.js","./_commonjsHelpers.32e42f04.js","./ContentList.e2dc2dbc.js","./ProseCode.54fee183.js","./ProseCode.e63e49c6.css","./InfoBox.e3e8e04b.css","./Tags.0f205e80.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.876f6604.js").then(t=>t.$),["./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.876f6604.js").then(t=>t.Y),["./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.876f6604.js").then(t=>t.Z),["./entry.876f6604.js","./entry.f5487d2b.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const pt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),n=A(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&N("dd-navigation").value){const{navigation:a}=z();return{navigation:a}}const{data:l}=await B(`content-navigation-${c(n.value)}`,()=>q(n.value));return{navigation:l}},render(t){const e=$(),{navigation:n}=t,l=_=>p(k,{to:_._path},()=>_.title),a=(_,d)=>p("ul",d?{"data-level":d}:null,_.map(u=>u.children?p("li",null,[l(u),a(u.children,d+1)]):p("li",null,l(u)))),o=_=>a(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):o(n)}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{pt as default};