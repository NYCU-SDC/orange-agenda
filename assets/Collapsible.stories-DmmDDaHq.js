import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-CkVCeQzL.js";import{R as i,T as p,C as l}from"./index-Dj_tUbBr.js";import{B as c}from"./Button-cuFQaYIS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dc_FVRD7.js";import"./index-mjTo0DhL.js";import"./index-C_McDD8y.js";import"./index-CIKi3kUh.js";import"./index-G-9L9WT6.js";import"./index-CqGuzGVc.js";import"./index-D-zlt0Fc.js";import"./index-B_VQWjUE.js";import"./index-D8UbhlPy.js";const d="_content_q6rph_1",m={content:d},s=i,C=p,o=({children:n})=>e.jsx(l,{className:m.content,children:n});o.displayName="CollapsibleContent";o.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Components/Collapsible",component:s,tags:["autodocs"]},t={render:()=>{const[n,r]=a.useState(!1);return e.jsxs(s,{open:n,onOpenChange:r,children:[e.jsx(C,{asChild:!0,children:e.jsxs(c,{children:[n?"Hide":"Show"," Content"]})}),e.jsx(o,{children:e.jsx("div",{style:{padding:"16px",background:"#f5f5f5",marginTop:"8px",borderRadius:"6px"},children:e.jsx("p",{children:"This is the collapsible content that can be hidden or shown."})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button>{open ? 'Hide' : 'Show'} Content</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div style={{
          padding: '16px',
          background: '#f5f5f5',
          marginTop: '8px',
          borderRadius: '6px'
        }}>
            <p>This is the collapsible content that can be hidden or shown.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...t.parameters?.docs?.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,S as default};
