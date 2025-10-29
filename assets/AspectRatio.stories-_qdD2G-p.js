import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-CkVCeQzL.js";import{P as l}from"./index-G-9L9WT6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqGuzGVc.js";import"./index-D-zlt0Fc.js";var m="AspectRatio",s=c.forwardRef((i,o)=>{const{ratio:d=1/1,style:n,...p}=i;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/d}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(l.div,{...p,ref:o,style:{...n,position:"absolute",top:0,right:0,bottom:0,left:0}})})});s.displayName=m;var h=s;const t=({ratio:i=16/9,children:o})=>e.jsx(h,{ratio:i,children:o});t.displayName="AspectRatio";t.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16 / 9",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v={title:"Components/AspectRatio",component:t,tags:["autodocs"]},r={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{ratio:16/9,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:"Landscape",style:{objectFit:"cover",width:"100%",height:"100%",borderRadius:"8px"}})})})},a={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{ratio:1,children:e.jsx("div",{style:{background:"linear-gradient(135deg, #ff6b35 0%, #f59e0b 100%)",width:"100%",height:"100%",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600},children:"1:1 Square"})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt="Landscape" style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '8px'
      }} />
      </AspectRatio>
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <AspectRatio ratio={1}>
        <div style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #f59e0b 100%)',
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 600
      }}>
          1:1 Square
        </div>
      </AspectRatio>
    </div>
}`,...a.parameters?.docs?.source}}};const b=["Default","Square"];export{r as Default,a as Square,b as __namedExportsOrder,v as default};
