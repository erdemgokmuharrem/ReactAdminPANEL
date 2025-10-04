import{j as e,c as q}from"./clsx-36b9529f.js";import{r as A}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const n=A.forwardRef(({className:d,label:i,error:r,helperText:p,id:D,...S},W)=>{const c=D||`input-${Math.random().toString(36).substr(2,9)}`;return e.jsxs("div",{className:"space-y-1",children:[i&&e.jsx("label",{htmlFor:c,className:"block text-sm font-medium text-gray-700",children:i}),e.jsx("input",{id:c,className:q("input",{"border-red-500 focus-visible:ring-red-500":r},d),ref:W,...S}),r&&e.jsx("p",{className:"text-sm text-red-600",children:r}),p&&!r&&e.jsx("p",{className:"text-sm text-gray-500",children:p})]})});n.displayName="Input";try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Components/Input",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number"]},disabled:{control:{type:"boolean"}}}},a={args:{placeholder:"Enter text..."}},s={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},t={args:{label:"Email Address",placeholder:"Enter your email",error:"This field is required"}},l={args:{label:"Password",placeholder:"Enter your password",type:"password",helperText:"Must be at least 8 characters"}},o={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,f,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    error: 'This field is required'
  }
}`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var T,_,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters'
  }
}`,...(I=(_=l.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var w,N,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const L=["Default","WithLabel","WithError","WithHelperText","Disabled"];export{a as Default,o as Disabled,t as WithError,l as WithHelperText,s as WithLabel,L as __namedExportsOrder,H as default};
