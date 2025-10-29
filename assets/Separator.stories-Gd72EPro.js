import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as n}from"./index-NQO8HSkr.js";import"./iframe-CkVCeQzL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-G-9L9WT6.js";import"./index-CqGuzGVc.js";import"./index-D-zlt0Fc.js";const l="_root_qm5vu_1",d="_horizontal_qm5vu_5",p="_vertical_qm5vu_10",i={root:l,horizontal:d,vertical:p},r=({orientation:a="horizontal",...s})=>e.jsx(n,{className:`${i.root} ${i[a]}`,orientation:a,...s});r.displayName="Separator";r.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},decorative:{required:!1,tsType:{name:"boolean"},description:""}}};const y={title:"Components/Separator",component:r,tags:["autodocs"]},t={render:()=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx("div",{children:"Above the separator"}),e.jsx(r,{style:{margin:"16px 0"}}),e.jsx("div",{children:"Below the separator"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",height:"50px",alignItems:"center",gap:"16px"},children:[e.jsx("div",{children:"Left side"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Right side"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <div>Above the separator</div>
      <Separator style={{
      margin: '16px 0'
    }} />
      <div>Below the separator</div>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '50px',
    alignItems: 'center',
    gap: '16px'
  }}>
      <div>Left side</div>
      <Separator orientation="vertical" />
      <div>Right side</div>
    </div>
}`,...o.parameters?.docs?.source}}};const _=["Horizontal","Vertical"];export{t as Horizontal,o as Vertical,_ as __namedExportsOrder,y as default};
