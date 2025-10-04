import{j as e,c as C}from"./clsx-36b9529f.js";import{r as _}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const n=_.forwardRef(({className:o,variant:d="default",children:y,...b},T)=>e.jsx("div",{ref:T,className:C("card",{"border border-gray-200":d==="outlined","shadow-lg":d==="elevated","shadow-sm":d==="default"},o),...b,children:y}));n.displayName="Card";try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"elevated"'}]}}}}}catch{}const S={title:"Components/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","outlined","elevated"]}}},a={args:{children:"This is a default card",className:"p-6"}},r={args:{children:"This is an outlined card",variant:"outlined",className:"p-6"}},s={args:{children:"This is an elevated card",variant:"elevated",className:"p-6"}},t={args:{children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"This is a card with more detailed content."}),e.jsx("button",{className:"btn btn-primary",children:"Action"})]})}};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a default card',
    className: 'p-6'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is an outlined card',
    variant: 'outlined',
    className: 'p-6'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'This is an elevated card',
    variant: 'elevated',
    className: 'p-6'
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,N,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
        <p className="text-gray-600 mb-4">This is a card with more detailed content.</p>
        <button className="btn btn-primary">Action</button>
      </div>
  }
}`,...(x=(N=t.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const O=["Default","Outlined","Elevated","WithContent"];export{a as Default,s as Elevated,r as Outlined,t as WithContent,O as __namedExportsOrder,S as default};
