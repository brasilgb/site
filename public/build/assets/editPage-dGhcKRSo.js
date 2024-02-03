import{r as u,q as f,W as x,j as e,y as b}from"./app-Urf7islE.js";import{C as h,a as p,b as g,c as o,B as j,d as y,e as v,S as k}from"./index-XqcmItP9.js";import{F as N}from"./index-dKnMeMrW.js";import{H as C,T as F,B}from"./index-MKLGGgza.js";import{A as w}from"./AuthenticatedLayout-RdiyouPR.js";import{E as z}from"./Editor-Z8e7EQdn.js";import{c as A}from"./ApplicationLogo-2fEXeYNl.js";import"./index-cSSuAO2M.js";import"./moment-WSJ9un1t.js";import"./index-AiNRASeR.js";import"./index-g0p8o0B7.js";const L=({page:r})=>{const i=u.useRef(),{flash:n,errors:s}=f().props,{data:a,setData:l,patch:E,processing:c}=x({title:r.title,summary:r.summary,content:r.content,featured:r.featured,active:r.active,social:r.social,linked:r.linked,type:r.type});function d(t){t.preventDefault(),b.post(`/admin/pages/${r.id}`,{_method:"put",title:a.title,summary:a.summary,content:a.content,featured:a.featured,active:a.active,social:a.social,linked:a.linked,type:a.type})}return e.jsx(w,{children:e.jsxs(h,{children:[e.jsxs(C,{children:[e.jsxs(F,{children:[e.jsx(A,{size:30}),e.jsx("span",{className:"ml-2",children:"Páginas"})]}),e.jsx(B,{links:[{url:route("pages.index"),label:"Páginas"},{url:null,label:"Editar página"}]})]}),e.jsxs(p,{children:[e.jsx(N,{message:n}),e.jsxs(g,{children:[e.jsx(o,{children:e.jsx(j,{url:route("pages.index"),label:"Voltar"})}),e.jsx(o,{children:e.jsx(e.Fragment,{})})]}),e.jsx("form",{onSubmit:d,autoComplete:"off",children:e.jsxs(y,{className:" border-y border-gray-100",children:[e.jsxs("div",{className:"mt-4 px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Título"}),e.jsx("input",{id:"title",type:"text",value:a.title,onChange:t=>l("title",t.target.value),className:"input-form"}),s.title&&e.jsx("div",{className:"text-red-500",children:s.title})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"summary",children:"Descrição"}),e.jsx("textarea",{id:"summary",value:a.summary,onChange:t=>l("summary",t.target.value),className:"input-form"}),s.summary&&e.jsx("div",{className:"text-red-500",children:s.summary})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"content",children:"Conteúdo"}),e.jsx(z,{apiKey:"3v1hskg4ud3hwf1bi5to0pt3xp6zjyksrvujfngcpzzaw2l3",onInit:(t,m)=>i.current=m,initialValue:a.content,onChange:()=>{var t;return l("content",(t=i.current)==null?void 0:t.getContent())},id:"content",init:{language:"pt_BR",height:300,menubar:!1,plugins:"autolink lists link charmap print preview anchor table image",toolbar:"undo redo styles link bold italic image table alignleft aligncenter alignright alignjustify  bullist numlist outdent indent",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}}),s.content&&e.jsx("div",{className:"text-red-500",children:s.content})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"featured",children:"Imagem destacada"}),e.jsx("input",{id:"featured",type:"file",onChange:t=>l("featured",t.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),s.featured&&e.jsx("div",{className:"text-red-500",children:s.featured})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"active",checked:a.active,onChange:t=>l("active",t.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"active",children:"Ativar em menus"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"linked",checked:a.linked,onChange:t=>l("linked",t.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"linked",children:"Abrir em outra página"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"social",checked:a.social,onChange:t=>l("social",t.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"social",children:"Botões redes sociais"})]})]}),e.jsx(v,{className:"border-t border-gray-100",children:e.jsx(k,{processing:c})})]})})]})]})})};export{L as default};
