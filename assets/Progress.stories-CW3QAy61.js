import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-B2-k4i_I.js";import{c as I}from"./index-D07Qq6qO.js";import{P}from"./index-DENBKIz7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CR81kQaK.js";import"./index-Cg6ca84V.js";var p="Progress",f=100,[h]=I(p),[T,S]=h(p),_=c.forwardRef((e,r)=>{const{__scopeProgress:i,value:a=null,max:t,getValueLabel:$=V,...j}=e;(t||t===0)&&!v(t)&&console.error(A(`${t}`,"Progress"));const s=v(t)?t:f;a!==null&&!g(a,s)&&console.error(R(`${a}`,"Progress"));const o=g(a,s)?a:null,y=d(o)?$(o,s):void 0;return n.jsx(T,{scope:i,value:o,max:s,children:n.jsx(P.div,{"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":d(o)?o:void 0,"aria-valuetext":y,role:"progressbar","data-state":E(o,s),"data-value":o??void 0,"data-max":s,...j,ref:r})})});_.displayName=p;var N="ProgressIndicator",b=c.forwardRef((e,r)=>{const{__scopeProgress:i,...a}=e,t=S(N,i);return n.jsx(P.div,{"data-state":E(t.value,t.max),"data-value":t.value??void 0,"data-max":t.max,...a,ref:r})});b.displayName=N;function V(e,r){return`${Math.round(e/r*100)}%`}function E(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function d(e){return typeof e=="number"}function v(e){return d(e)&&!isNaN(e)&&e>0}function g(e,r){return d(e)&&!isNaN(e)&&e<=r&&e>=0}function A(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${f}\`.`}function R(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${f} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var D=_,M=b;const C="_root_tj8xi_1",L="_indicator_tj8xi_10",x={root:C,indicator:L},m=({value:e=0,max:r=100})=>n.jsx(D,{className:x.root,value:e,max:r,children:n.jsx(M,{className:x.indicator,style:{transform:`translateX(-${100-e/r*100}%)`}})});m.displayName="Progress";m.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}}}};const k={title:"Components/Progress",component:m,tags:["autodocs"]},u={args:{value:60}},l={render:()=>{const[e,r]=c.useState(0);return c.useEffect(()=>{const i=setTimeout(()=>r(66),500);return()=>clearTimeout(i)},[]),n.jsx(m,{value:e})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} />;
  }
}`,...l.parameters?.docs?.source}}};const z=["Default","Animated"];export{l as Animated,u as Default,z as __namedExportsOrder,k as default};
