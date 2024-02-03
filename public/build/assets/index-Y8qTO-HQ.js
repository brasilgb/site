import{j as e,d as a,r as x,W as u}from"./app-waZe9uyu.js";import{G as m,j as h,k as j,l as f,m as b,n as g}from"./ApplicationLogo-SfyOEA5m.js";import{F as p}from"./index-WdWdT_HV.js";function y(s){return m({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"},child:[]},{tag:"path",attr:{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"},child:[]},{tag:"path",attr:{d:"M16 5l3 3"},child:[]}]})(s)}const w=({url:s,label:t})=>e.jsxs(a,{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:s,as:"button",type:"button",children:[e.jsx(h,{size:18}),e.jsx("span",{children:t})]}),z=({url:s,label:t})=>e.jsxs(a,{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:s,as:"button",type:"button",children:[e.jsx(j,{size:18}),e.jsx("span",{children:t})]}),k=({url:s})=>e.jsx(a,{className:"flex items-center justify-center bg-orange-600 hover:bg-orange-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:s,as:"button",type:"button",title:"Editar registro",children:e.jsx(y,{size:18})}),B=({identify:s,param:t,url:n})=>{const[d,r]=x.useState(!1),{delete:l}=u();function i(c){c.preventDefault(),l(route(n,t)),r(!1)}const o=()=>e.jsx("div",{onClick:()=>r(!1),className:"fixed z-20 top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-500 bg-opacity-40",children:e.jsxs("div",{className:"w-1/4 bg-gray-50 rounded-md shadow-md border border-white",children:[e.jsx("div",{className:"text-gray-400 flex justify-end pt-0.5 pr-0.5",children:e.jsx("button",{onClick:()=>r(!1),children:e.jsx(g,{size:18})})}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:"text-red-500 pb-2",children:e.jsx(p,{size:40})}),e.jsx("div",{className:"text-xl",children:"Excluir registro"})]})}),e.jsxs("div",{className:"my-2 flex flex-col items-center justify-center",children:[e.jsxs("h2",{className:"text-base text-center",children:["Você realmente deseja excluir ",s,"?"]}),e.jsx("h2",{className:"test-sm mt-1",children:"Esta operação não pode ser desfeita."})]}),e.jsxs("div",{className:"flex items-center justify-end gap-3 p-3 mt-2",children:[e.jsx("button",{onClick:()=>r(!1),className:"py-2 px-3 flex-1 bg-zinc-600 hover:bg-zinc-700 rounded-md",children:e.jsx("span",{className:"text-sm text-gray-50",children:"Cancelar"})}),e.jsx("button",{onClick:i,className:"py-2 px-3 flex-1 bg-red-500 hover:bg-red-600 rounded-md",children:e.jsx("span",{className:"text-sm text-gray-50",children:"Excluir"})})]})]})});return e.jsxs(e.Fragment,{children:[d&&e.jsx(o,{}),e.jsx("button",{className:"flex items-center justify-center bg-red-600 hover:bg-red-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",onClick:()=>r(!0),title:`Deletar registro ${t}`,children:e.jsx(f,{size:18})})]})},E=({processing:s,value:t="Salvar"})=>e.jsx("div",{className:"flex justify-end",children:e.jsxs("button",{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",disabled:s,type:"submit",children:[e.jsx(b,{size:18}),e.jsx("span",{className:"ml-1",children:t})]})}),I=({children:s,className:t})=>e.jsx("div",{className:`shadow z-10 ${t}`,children:s}),S=({children:s,className:t})=>e.jsx("div",{className:`w-full md:m-4 z-10 ${t}`,children:s}),$=({children:s})=>e.jsx("div",{className:"flex items-center justify-between bg-white p-2 rounded-t-md",children:s}),D=({children:s,className:t})=>e.jsx("div",{className:`${t} z-10`,children:s}),M=({children:s,className:t})=>e.jsx("div",{className:`bg-white ${t}`,children:s}),A=({children:s,className:t})=>e.jsx("div",{className:`bg-white p-2 rounded-b-md ${t}`,children:s});export{w as A,z as B,S as C,B as D,k as E,E as S,I as a,$ as b,D as c,M as d,A as e};