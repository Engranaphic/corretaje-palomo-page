import{_ as m,J as p,r as t,a as f,o as a,c as v,e as c,w as g,T as y,d as e,K as h,y as x,b as k}from"./index.a729e5ea.js";import{T as w}from"./Toast.152fb343.js";const C={id:"admin"},b={id:"navbar",class:"z-5 shadow-5 flex justify-content-between"},j={__name:"Admin",setup(B){const s=p();t(!1);const r=t(""),i=t(""),l=t(!1),u=()=>{h.signOut(),s.push({name:"home"})},_=o=>{s.push({name:o})};return(o,n)=>{const d=f("router-view");return a(),v("div",C,[c(y,{name:"fade"},{default:g(()=>[l.value?(a(),x(w,{key:0,message:r.value,type:i.value},null,8,["message","type"])):k("",!0)]),_:1}),e("div",b,[e("div",{onClick:n[0]||(n[0]=T=>_("home")),class:"button-link logo cursor-pointer select-none flex align-items-center justify-content-center"},"Volver a Inicio"),e("div",{class:"flex justify-content-center"},[e("div",{onClick:u,class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Cerrar Sesion")])]),e("div",null,[c(d)])])}}},N=m(j,[["__scopeId","data-v-1ac896d2"]]);export{N as default};
