import{W as d,r as l,j as s,a as p}from"./app-DpPPtAVC.js";import{A as c}from"./AuthLayout-qfOTl0Ok.js";import{T as u,I as f}from"./TextInput-4zTzRl5P.js";import{I as x}from"./InputLabel-rfce1FIR.js";import{P as w}from"./PrimaryButton-X5Pe4QPL.js";function y(){const{data:a,setData:e,post:t,processing:o,errors:i,reset:m}=d({password:""});l.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password",children:s.jsx(s.Fragment,{})}),s.jsx(u,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{y as default};
