import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as d,T as p,P as m,O as g,C as u,a as f,D as h,b as x}from"./index-CjYGFR2w.js";import{B as n}from"./Button-cuFQaYIS.js";import"./iframe-CkVCeQzL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dc_FVRD7.js";import"./index-G-9L9WT6.js";import"./index-CqGuzGVc.js";import"./index-D-zlt0Fc.js";import"./index-mjTo0DhL.js";import"./index-D8UbhlPy.js";import"./index-CIKi3kUh.js";import"./index-C_McDD8y.js";import"./index-CgfUX8GY.js";import"./index-DATgh9jk.js";import"./index-BeqEKnyG.js";import"./index-Cz28c4wx.js";import"./index-B_VQWjUE.js";const y="_overlay_9za0m_1",D="_content_9za0m_9",_="_title_9za0m_29",T="_description_9za0m_37",j="_close_9za0m_44",i={overlay:y,content:D,title:_,description:T,close:j},s=({children:o,...t})=>e.jsx(d,{...t,children:o}),r=({children:o,asChild:t=!1})=>e.jsx(p,{asChild:t,children:o}),l=({children:o,title:t,description:c})=>e.jsxs(m,{children:[e.jsx(g,{className:i.overlay}),e.jsxs(u,{className:i.content,children:[t&&e.jsx(f,{className:i.title,children:t}),c&&e.jsx(h,{className:i.description,children:c}),o,e.jsx(x,{className:i.close,"aria-label":"Close",children:"✕"})]})]});s.displayName="Dialog";r.displayName="DialogTrigger";l.displayName="DialogContent";s.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Dialog",component:s,tags:["autodocs"]},a={render:()=>e.jsxs(s,{children:[e.jsx(r,{asChild:!0,children:e.jsx(n,{children:"Open Dialog"})}),e.jsxs(l,{title:"Dialog Title",description:"This is a description of the dialog.",children:[e.jsx("p",{children:"Here is some content inside the dialog."}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",marginTop:"24px"},children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{children:"Confirm"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent title="Dialog Title" description="This is a description of the dialog.">
        <p>Here is some content inside the dialog.</p>
        <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'flex-end',
        marginTop: '24px'
      }}>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
}`,...a.parameters?.docs?.source}}};const G=["Default"];export{a as Default,G as __namedExportsOrder,F as default};
