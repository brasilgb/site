import{q as d,W as m,j as e}from"./app-DpPPtAVC.js";import{C as u,a as x,b as p,c as t,B as h,d as j,e as f,S as b}from"./index-URc1ttXD.js";import{H as v,T as g,B as C}from"./index-2Ly3dMK8.js";import{A as N}from"./AuthenticatedLayout-BGwwVog7.js";import{s as y}from"./index--2cbVUUP.js";import{I as k}from"./ApplicationLogo-hOMzEX2s.js";import"./index-2tR79DdX.js";import"./moment-WSJ9un1t.js";import"./index-WK45ou2Z.js";const M=({categories:o})=>{d().props;const{data:s,setData:l,post:i,processing:n,errors:r}=m({name:"",description:"",parent:"",module:"",active:!1});function c(a){a.preventDefault(),i(route("categories.store"))}return e.jsx(N,{children:e.jsxs(u,{children:[e.jsxs(v,{children:[e.jsxs(g,{children:[e.jsx(k,{size:30}),e.jsx("span",{className:"ml-2",children:"Categorias"})]}),e.jsx(C,{links:[{url:route("categories.index"),label:"Categorias"},{url:null,label:"Adicionar categoria"}]})]}),e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(t,{children:e.jsx(h,{url:route("categories.index"),label:"Voltar"})}),e.jsx(t,{children:e.jsx(e.Fragment,{})})]}),e.jsx("form",{onSubmit:c,autoComplete:"off",children:e.jsxs(j,{className:" border-y border-gray-100",children:[e.jsxs("div",{className:"mt-4 px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"category",children:"Categoria"}),e.jsx("input",{id:"category",type:"text",value:s.name,onChange:a=>l("name",a.target.value),className:"input-form"}),r.name&&e.jsx("div",{className:"text-red-500",children:r.name})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"descricao",children:"Descrição"}),e.jsx("textarea",{id:"description",value:s.description,onChange:a=>l("description",a.target.value),className:"input-form"}),r.description&&e.jsx("div",{className:"text-red-500",children:r.description})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"parent",children:"Categoria pai"}),e.jsxs("select",{name:"parent",id:"parent",value:s.parent,onChange:a=>l("parent",a.target.value),className:"input-form",children:[e.jsx("option",{value:" ",children:"Selecione uma categoria pai"}),o.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"module",children:"Módulo"}),e.jsxs("select",{name:"module",id:"module",value:s.module,onChange:a=>l("module",a.target.value),className:"input-form",children:[e.jsx("option",{value:" ",children:"Selecione o módulo"}),y.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))]}),r.module&&e.jsx("div",{className:"text-red-500",children:r.module})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"active",checked:s.active,onChange:a=>l("active",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"active",children:"Ativar em menus"})]})]}),e.jsx(f,{className:"border-t border-gray-100",children:e.jsx(b,{processing:n})})]})})]})]})})};export{M as default};
