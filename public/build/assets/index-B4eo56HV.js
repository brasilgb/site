import{q as x,j as s,r as c}from"./app-waZe9uyu.js";import{C as j,a as h,b as m,c as l,A as p,d as u,E as f,D as C,e as b}from"./index-Y8qTO-HQ.js";import{F as g}from"./index-K6cYAPBY.js";import{I as T,T as B,a as y,b as t,c as a,d as P,e as r,P as H}from"./index-kHBztUsM.js";import{H as A,T as D,B as E}from"./index-dpfBYQ4P.js";import{A as F}from"./AuthenticatedLayout-HaCVwdcF.js";import{h as N}from"./moment-WSJ9un1t.js";import{d as Y}from"./ApplicationLogo-SfyOEA5m.js";import"./index-WdWdT_HV.js";import"./index-ElrQwnwa.js";const _=({products:d})=>{const{flash:i}=x().props;return s.jsx(F,{children:s.jsxs(j,{children:[s.jsxs(A,{children:[s.jsxs(D,{children:[s.jsx(Y,{size:30}),s.jsx("span",{className:"ml-2",children:"Produtos"})]}),s.jsx(E,{links:[{url:null,label:"Produtos"}]})]}),s.jsxs(h,{children:[s.jsxs(m,{children:[s.jsx(l,{children:s.jsx(T,{placeholder:"Buscar por produto",url:"products.index"})}),s.jsx(l,{children:s.jsx(p,{url:route("products.create"),label:"Produtos"})})]}),s.jsx(g,{message:i}),s.jsx(u,{children:s.jsxs(B,{children:[s.jsx(y,{children:s.jsxs(t,{children:[s.jsx(a,{children:"#"}),s.jsx(a,{children:"Produto"}),s.jsx(a,{children:"Slug"}),s.jsx(a,{children:"Categorias"}),s.jsx(a,{children:"Ativa"}),s.jsx(a,{children:"Cadastro"}),s.jsx(a,{})]})}),s.jsx(P,{children:d.data.map(e=>s.jsx(c.Fragment,{children:s.jsxs(t,{children:[s.jsx(r,{children:e.id}),s.jsx(r,{children:e.title}),s.jsx(r,{children:e.slug}),s.jsx(r,{children:s.jsx("div",{className:"flex items-center justify-start gap-2",children:e.categories.map((n,o)=>s.jsx("span",{className:"bg-yellow-100 rounded border p-1",children:n.name},o))})}),s.jsx(r,{children:e.active}),s.jsx(r,{children:N(e.created_at).format("DD/MM/YYYY")}),s.jsxs(r,{className:"flex items-center justify-end gap-2",children:[s.jsx(f,{url:route("products.edit",e.id)}),s.jsx(C,{url:"products.destroy",param:e.id,identify:`a postagem ${e.title}`})]})]})},e.id))})]})}),s.jsx(b,{children:s.jsx(H,{data:d})})]})]})})};export{_ as default};