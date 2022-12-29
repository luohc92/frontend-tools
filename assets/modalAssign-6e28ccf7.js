import{b6 as xe,S as ke,z as Le,b7 as Ve,b8 as je,A as We,b9 as Qe,ba as Xe,bb as Ie,U as de,K as $e,ar as ye,at as ce,ap as le,X as I,bc as fe,V as Ye,aS as be,av as Ae,au as Be,n as ve,aM as Ne,r as j,af as ne,Q as Ze,aK as Se,ak as we,bd as Oe,d as W,aE as ze,W as me,o as O,a0 as pe,w as S,a as X,a1 as T,u as s,aN as oe,c as q,i as Z,be as ie,a8 as he,a6 as Ke,h as Y,t as ue,am as re,as as Ue,ae as ge,a2 as en,H as nn,I as ln,aw as tn,ax as an,ah as sn,aJ as Te,b as on,E as un,e as rn,f as dn,g as y,j as se,_ as cn}from"./index-6b00a475.js";import{i as Fe,g as fn,h as bn,j as vn,c as mn,d as pn,b as hn,E as gn,a as xn,e as kn,f as $n,M as _e}from"./mirrorEditor-d3f4385d.js";import{j as yn}from"./index-841daa79.js";import"./scroll-10938d25.js";function Sn(e){return e}function wn(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}var _n=800,Cn=16,En=Date.now;function Ln(e){var n=0,a=0;return function(){var t=En(),o=Cn-(t-a);if(a=t,o>0){if(++n>=_n)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Vn(e){return function(){return e}}var In=xe?function(e,n){return xe(e,"toString",{configurable:!0,enumerable:!1,value:Vn(n),writable:!0})}:Sn;const An=In;var Bn=Ln(An);const Nn=Bn;var Ce=Math.max;function On(e,n,a){return n=Ce(n===void 0?e.length-1:n,0),function(){for(var t=arguments,o=-1,d=Ce(t.length-n,0),l=Array(d);++o<d;)l[o]=t[n+o];o=-1;for(var i=Array(n+1);++o<n;)i[o]=t[o];return i[n]=a(l),wn(e,this,i)}}var Ee=ke?ke.isConcatSpreadable:void 0;function zn(e){return Le(e)||Fe(e)||!!(Ee&&e&&e[Ee])}function De(e,n,a,t,o){var d=-1,l=e.length;for(a||(a=zn),o||(o=[]);++d<l;){var i=e[d];n>0&&a(i)?n>1?De(i,n-1,a,t,o):fn(o,i):t||(o[o.length]=i)}return o}function Un(e){var n=e==null?0:e.length;return n?De(e,1):[]}function Tn(e){return Nn(On(e,void 0,Un),e+"")}function Fn(e,n){return e!=null&&n in Object(e)}function Dn(e,n,a){n=Ve(n,e);for(var t=-1,o=n.length,d=!1;++t<o;){var l=je(n[t]);if(!(d=e!=null&&a(e,l)))break;e=e[l]}return d||++t!=o?d:(o=e==null?0:e.length,!!o&&bn(o)&&We(l,o)&&(Le(e)||Fe(e)))}function Gn(e,n){return e!=null&&Dn(e,n,Fn)}function Rn(e,n,a){for(var t=-1,o=n.length,d={};++t<o;){var l=n[t],i=Qe(e,l);a(i,l)&&Xe(d,Ve(l,e),i)}return d}function Pn(e,n){return Rn(e,n,function(a,t){return Gn(e,t)})}var Mn=Tn(function(e,n){return e==null?{}:Pn(e,n)});const qn=Mn,K=Symbol("checkboxGroupContextKey"),Ge={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Ie,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},Re={[de]:e=>$e(e)||ye(e)||ce(e),change:e=>$e(e)||ye(e)||ce(e)},Jn=({model:e,isChecked:n})=>{const a=le(K,void 0),t=I(()=>{var d,l;const i=(d=a==null?void 0:a.max)==null?void 0:d.value,k=(l=a==null?void 0:a.min)==null?void 0:l.value;return!fe(i)&&e.value.length>=i&&!n.value||!fe(k)&&e.value.length<=k&&n.value});return{isDisabled:Ye(I(()=>(a==null?void 0:a.disabled.value)||t.value)),isLimitDisabled:t}},Hn=(e,{model:n,isLimitExceeded:a,hasOwnLabel:t,isDisabled:o,isLabeledByFormItem:d})=>{const l=le(K,void 0),{formItem:i}=be(),{emit:k}=Ne();function u(f){var h,m;return f===e.trueLabel||f===!0?(h=e.trueLabel)!=null?h:!0:(m=e.falseLabel)!=null?m:!1}function g(f,h){k("change",u(f),h)}function C(f){if(a.value)return;const h=f.target;k("change",u(h.checked),f)}async function G(f){a.value||!t.value&&!o.value&&d.value&&(f.composedPath().some(p=>p.tagName==="LABEL")||(n.value=u([!1,e.falseLabel].includes(n.value)),await ve(),g(n.value,f)))}const c=I(()=>(l==null?void 0:l.validateEvent)||e.validateEvent);return Ae(()=>e.modelValue,()=>{c.value&&(i==null||i.validate("change").catch(f=>Be(f)))}),{handleChange:C,onClickRoot:G}},jn=e=>{const n=j(!1),{emit:a}=Ne(),t=le(K,void 0),o=I(()=>fe(t)===!1),d=j(!1);return{model:I({get(){var i,k;return o.value?(i=t==null?void 0:t.modelValue)==null?void 0:i.value:(k=e.modelValue)!=null?k:n.value},set(i){var k,u;o.value&&ne(i)?(d.value=((k=t==null?void 0:t.max)==null?void 0:k.value)!==void 0&&i.length>(t==null?void 0:t.max.value),d.value===!1&&((u=t==null?void 0:t.changeEvent)==null||u.call(t,i))):(a(de,i),n.value=i)}}),isGroup:o,isLimitExceeded:d}},Wn=(e,n,{model:a})=>{const t=le(K,void 0),o=j(!1),d=I(()=>{const u=a.value;return ce(u)?u:ne(u)?Ze(e.label)?u.map(Se).some(g=>vn(g,e.label)):u.map(Se).includes(e.label):u!=null?u===e.trueLabel:!!u}),l=we(I(()=>{var u;return(u=t==null?void 0:t.size)==null?void 0:u.value}),{prop:!0}),i=we(I(()=>{var u;return(u=t==null?void 0:t.size)==null?void 0:u.value})),k=I(()=>!!(n.default||e.label));return{checkboxButtonSize:l,isChecked:d,isFocused:o,checkboxSize:i,hasOwnLabel:k}},Qn=(e,{model:n})=>{function a(){ne(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&a()},Pe=(e,n)=>{const{formItem:a}=be(),{model:t,isGroup:o,isLimitExceeded:d}=jn(e),{isFocused:l,isChecked:i,checkboxButtonSize:k,checkboxSize:u,hasOwnLabel:g}=Wn(e,n,{model:t}),{isDisabled:C}=Jn({model:t,isChecked:i}),{inputId:G,isLabeledByFormItem:c}=Oe(e,{formItemContext:a,disableIdGeneration:g,disableIdManagement:o}),{handleChange:f,onClickRoot:h}=Hn(e,{model:t,isLimitExceeded:d,hasOwnLabel:g,isDisabled:C,isLabeledByFormItem:c});return Qn(e,{model:t}),{inputId:G,isLabeledByFormItem:c,isChecked:i,isDisabled:C,isFocused:l,checkboxButtonSize:k,checkboxSize:u,hasOwnLabel:g,model:t,handleChange:f,onClickRoot:h}},Xn=["tabindex","role","aria-checked"],Yn=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Zn=["id","aria-hidden","disabled","value","name","tabindex"],Kn=W({name:"ElCheckbox"}),el=W({...Kn,props:Ge,emits:Re,setup(e){const n=e,a=ze(),{inputId:t,isLabeledByFormItem:o,isChecked:d,isDisabled:l,isFocused:i,checkboxSize:k,hasOwnLabel:u,model:g,handleChange:C,onClickRoot:G}=Pe(n,a),c=me("checkbox"),f=I(()=>[c.b(),c.m(k.value),c.is("disabled",l.value),c.is("bordered",n.border),c.is("checked",d.value)]),h=I(()=>[c.e("input"),c.is("disabled",l.value),c.is("checked",d.value),c.is("indeterminate",n.indeterminate),c.is("focus",i.value)]);return(m,p)=>(O(),pe(Ue(!s(u)&&s(o)?"span":"label"),{class:T(s(f)),"aria-controls":m.indeterminate?m.controls:null,onClick:s(G)},{default:S(()=>[X("span",{class:T(s(h)),tabindex:m.indeterminate?0:void 0,role:m.indeterminate?"checkbox":void 0,"aria-checked":m.indeterminate?"mixed":void 0},[m.trueLabel||m.falseLabel?oe((O(),q("input",{key:0,id:s(t),"onUpdate:modelValue":p[0]||(p[0]=A=>Z(g)?g.value=A:null),class:T(s(c).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",name:m.name,tabindex:m.tabindex,disabled:s(l),"true-value":m.trueLabel,"false-value":m.falseLabel,onChange:p[1]||(p[1]=(...A)=>s(C)&&s(C)(...A)),onFocus:p[2]||(p[2]=A=>i.value=!0),onBlur:p[3]||(p[3]=A=>i.value=!1)},null,42,Yn)),[[ie,s(g)]]):oe((O(),q("input",{key:1,id:s(t),"onUpdate:modelValue":p[4]||(p[4]=A=>Z(g)?g.value=A:null),class:T(s(c).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",disabled:s(l),value:m.label,name:m.name,tabindex:m.tabindex,onChange:p[5]||(p[5]=(...A)=>s(C)&&s(C)(...A)),onFocus:p[6]||(p[6]=A=>i.value=!0),onBlur:p[7]||(p[7]=A=>i.value=!1)},null,42,Zn)),[[ie,s(g)]]),X("span",{class:T(s(c).e("inner"))},null,2)],10,Xn),s(u)?(O(),q("span",{key:0,class:T(s(c).e("label"))},[he(m.$slots,"default"),m.$slots.default?re("v-if",!0):(O(),q(Ke,{key:0},[Y(ue(m.label),1)],64))],2)):re("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var nl=ge(el,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ll=["name","tabindex","disabled","true-value","false-value"],tl=["name","tabindex","disabled","value"],al=W({name:"ElCheckboxButton"}),sl=W({...al,props:Ge,emits:Re,setup(e){const n=e,a=ze(),{isFocused:t,isChecked:o,isDisabled:d,checkboxButtonSize:l,model:i,handleChange:k}=Pe(n,a),u=le(K,void 0),g=me("checkbox"),C=I(()=>{var c,f,h,m;const p=(f=(c=u==null?void 0:u.fill)==null?void 0:c.value)!=null?f:"";return{backgroundColor:p,borderColor:p,color:(m=(h=u==null?void 0:u.textColor)==null?void 0:h.value)!=null?m:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}}),G=I(()=>[g.b("button"),g.bm("button",l.value),g.is("disabled",d.value),g.is("checked",o.value),g.is("focus",t.value)]);return(c,f)=>(O(),q("label",{class:T(s(G))},[c.trueLabel||c.falseLabel?oe((O(),q("input",{key:0,"onUpdate:modelValue":f[0]||(f[0]=h=>Z(i)?i.value=h:null),class:T(s(g).be("button","original")),type:"checkbox",name:c.name,tabindex:c.tabindex,disabled:s(d),"true-value":c.trueLabel,"false-value":c.falseLabel,onChange:f[1]||(f[1]=(...h)=>s(k)&&s(k)(...h)),onFocus:f[2]||(f[2]=h=>t.value=!0),onBlur:f[3]||(f[3]=h=>t.value=!1)},null,42,ll)),[[ie,s(i)]]):oe((O(),q("input",{key:1,"onUpdate:modelValue":f[4]||(f[4]=h=>Z(i)?i.value=h:null),class:T(s(g).be("button","original")),type:"checkbox",name:c.name,tabindex:c.tabindex,disabled:s(d),value:c.label,onChange:f[5]||(f[5]=(...h)=>s(k)&&s(k)(...h)),onFocus:f[6]||(f[6]=h=>t.value=!0),onBlur:f[7]||(f[7]=h=>t.value=!1)},null,42,tl)),[[ie,s(i)]]),c.$slots.default||c.label?(O(),q("span",{key:2,class:T(s(g).be("button","inner")),style:en(s(o)?s(C):void 0)},[he(c.$slots,"default",{},()=>[Y(ue(c.label),1)])],6)):re("v-if",!0)],2))}});var Me=ge(sl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const ol=nn({modelValue:{type:ln(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Ie,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),il={[de]:e=>ne(e),change:e=>ne(e)},ul=W({name:"ElCheckboxGroup"}),rl=W({...ul,props:ol,emits:il,setup(e,{emit:n}){const a=e,t=me("checkbox"),{formItem:o}=be(),{inputId:d,isLabeledByFormItem:l}=Oe(a,{formItemContext:o}),i=async u=>{n(de,u),await ve(),n("change",u)},k=I({get(){return a.modelValue},set(u){i(u)}});return tn(K,{...qn(an(a),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:k,changeEvent:i}),Ae(()=>a.modelValue,()=>{a.validateEvent&&(o==null||o.validate("change").catch(u=>Be(u)))}),(u,g)=>{var C;return O(),pe(Ue(u.tag),{id:s(d),class:T(s(t).b("group")),role:"group","aria-label":s(l)?void 0:u.label||"checkbox-group","aria-labelledby":s(l)?(C=s(o))==null?void 0:C.labelId:void 0},{default:S(()=>[he(u.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var qe=ge(rl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const dl=sn(nl,{CheckboxButton:Me,CheckboxGroup:qe});Te(Me);Te(qe);const cl={class:"tool-head"},fl={class:"value"},bl={class:"value"},vl={class:"right"},ml=W({__name:"modalAssign",setup(e){const{toClipboard:n}=mn(),a=j(`{
    "BigIntSupported": 995815895020119800000,
    "date": "20180322",
    "message": "Success !",
    "status": 200,
    "city": "北京",
    "count": 632,
    "data": {
        "shidu": "34%",
        "pm25": 73,
        "pm10": 91,
        "quality": "良",
        "wendu": "5",
        "ganmao": "极少数敏感人群应减少户外活动",
        "yesterday": {
            "date": "21日星期三",
            "sunrise": "06:19",
            "high": "高温 11.0℃",
            "low": "低温 1.0℃",
            "sunset": "18:26",
            "aqi": 85,
            "fx": "南风",
            "fl": "<3级",
            "type": "多云",
            "notice": "阴晴之间，谨防紫外线侵扰",
            "yesterday": {
                "date": "21日星期三",
                "sunrise": "06:19",
                "high": "高温 11.0℃",
                "low": "低温 1.0℃",
                "sunset": "18:26",
                "aqi": 85,
                "fx": "南风",
                "fl": "<3级",
                "type": "多云",
                "notice": "阴晴之间，谨防紫外线侵扰"
            }
        },
        "forecast": [
            {
                "date": "22日星期四",
                "sunrise": "06:17",
                "high": "高温 17.0℃",
                "low": "低温 1.0℃",
                "sunset": "18:27",
                "aqi": 98,
                "fx": "西南风",
                "fl": "<3级",
                "type": "晴",
                "notice": "愿你拥有比阳光明媚的心情"
            },
            {
                "date": "23日星期五",
                "sunrise": "06:16",
                "high": "高温 18.0℃",
                "low": "低温 5.0℃",
                "sunset": "18:28",
                "aqi": 118,
                "fx": "无持续风向",
                "fl": "<3级",
                "type": "多云",
                "notice": "阴晴之间，谨防紫外线侵扰"
            },
            {
                "date": "24日星期六",
                "sunrise": "06:14",
                "high": "高温 21.0℃",
                "low": "低温 7.0℃",
                "sunset": "18:29",
                "aqi": 52,
                "fx": "西南风",
                "fl": "<3级",
                "type": "晴",
                "notice": "愿你拥有比阳光明媚的心情"
            },
            {
                "date": "25日星期日",
                "sunrise": "06:13",
                "high": "高温 22.0℃",
                "low": "低温 7.0℃",
                "sunset": "18:30",
                "aqi": 71,
                "fx": "西南风",
                "fl": "<3级",
                "type": "晴",
                "notice": "愿你拥有比阳光明媚的心情"
            },
            {
                "date": "26日星期一",
                "sunrise": "06:11",
                "high": "高温 21.0℃",
                "low": "低温 8.0℃",
                "sunset": "18:31",
                "aqi": 97,
                "fx": "西南风",
                "fl": "<3级",
                "type": "多云",
                "notice": "阴晴之间，谨防紫外线侵扰"
            }
        ]
    }
}`),t=j(),o="calc(100vh - 130px)",d=j(!1),l=on({banRepeat:!0,typeSuffix:"svr",firstLetter:"default",modalAssign:"this",construction:"default"}),i=j(["svr","res","data"]),k=b=>{l.typeSuffix=b},u=(b,x)=>{const z=b?i.value.filter(c(b)):i.value;x(z)},g=j(["this","state","data"]),C=b=>{l.modalAssign=b},G=(b,x)=>{const z=b?g.value.filter(c(b)):g.value;x(z)},c=b=>x=>x.toLowerCase().indexOf(b.toLowerCase())===0,f=()=>{if(!a.value)return;let b=JSON.parse(JSON.stringify(a.value));try{b=JSON.parse(b)}catch{return se.info("JSON格式不正确")}t.value=h(b,"",!1,!1,"","")},h=(b,x,z,L,N,R)=>{const P=A(b),M=[];let Q="",r="";function ee(v,F,ae,B,D,_){if(v&&typeof v=="object")if(Array.isArray(v))te(F,ae,B,D,_);else{_?_=_+"."+F:_=F;for(let J=Object.keys(v),U=0,w=J.length;U<w;U++){const $=J[U],V=v[$];let E=!1;const H=U===0;E=U===w-1,ee(V,$,H,E,F,_)}}else te(F,ae,B,D,_)}function te(v,F,ae,B,D){let _="",J="",U=[];const w=D==null?void 0:D.split(".");switch(l.firstLetter){case"uppercase":_=p(v),J=p(B),w&&w.length>0&&w.forEach($=>{U.push(p($))});break;case"lowercase":_=m(v),J=m(B),w&&w.length>0&&w.forEach($=>{U.push(m($))});break;default:_=v,J=B,U=w;break}if(l.construction==="tile"){let $=`${_}`;B?(l.banRepeat&&M.find(E=>E.toLocaleUpperCase()===v.toLocaleUpperCase())&&($=p($),w.reverse().forEach((E,H)=>{H!=w.length-1&&(E=p(E)),$=E+$}),l.firstLetter==="uppercase"?$=p($):l.firstLetter==="lowercase"&&($=m($))),r=r+`${l.modalAssign}.${$} = ${l.typeSuffix}.${D}.${v};
`):r=r+`${l.modalAssign}.${$} = ${l.typeSuffix}.${v};
`,M.push(v)}else if(F&&B&&(w&&w.length>1?(r.length===0&&(U.forEach(($,V)=>{V<U.length-1&&(V===0?r=`${l.modalAssign}.${$} = {
`:r=`${r}${$}: {
`)}),Q="};"),r=`${r}${J}: {
`,r=`${r}${_}:${l.typeSuffix}.${D}.${v},
`):(r=`${r}${l.modalAssign}.${J} = {
`,r=`${r}${_}:${l.typeSuffix}.${D}.${v},
`)),F&&!B&&(r=`${l.modalAssign}.${_} = ${l.typeSuffix}.${v};
`),!F&&B&&(r=r+`${_}: ${l.typeSuffix}.${D}.${v}`,r=`${r},
`),!F&&!B&&(r=r+`${l.modalAssign}.${_} = ${l.typeSuffix}.${v};
`),ae&&B){if(w&&w.length>=2){const $=P.find(V=>V.key===B);if(w&&w.length>=3){const V=P.find(E=>E.key===$.key);if(V&&V.parentKey){const E=P.filter(H=>H.parentKey===V.parentKey);if(E.length-1===V.index)r=`${r}},
},`;else for(let H=0;H<E.length-V.index;H++)r=`${r}},
`;return}}else if($&&$.parentKey){P.filter(E=>E.parentKey===$.parentKey).length-1===$.index?r=`${r}},
};`:r=`${r}},
`;return}r=`${r}},
};`;return}r=`${r}};
`}}return ee(b,x,z,L,N,R),r=yn.js_beautify(r+Q),r},m=b=>b?b.substring(0,1).toLocaleLowerCase()+b.substring(1):"",p=b=>b?b.substring(0,1).toLocaleUpperCase()+b.substring(1):"",A=b=>{const x=[];function z(L,N,R,P){L&&typeof L=="object"&&!Array.isArray(L)?(N&&x.push({key:N,parentKey:R,index:P}),R=N,Object.keys(L).forEach((M,Q)=>{z(L[M],M,R,Q)})):x.push({key:N,parentKey:R,index:P})}return z(b,"","",0),x},Je=()=>{if(a.value)try{const b=JSON.parse(a.value);a.value="",ve(()=>{a.value=JSON.stringify(b,null,4)})}catch(b){return se.info("JSON格式不正确：",b==null?void 0:b.message)}},He=async()=>{if(!t.value)return se.info("没有内容");try{await n(t.value),d.value=!0,setTimeout(()=>{d.value=!1},1e3)}catch{d.value=!1,se.error("复制失败")}};return(b,x)=>{const z=pn,L=hn,N=gn,R=xn,P=dl,M=un,Q=kn,r=rn,ee=$n,te=dn;return O(),q("div",null,[X("div",cl,[y(Q,{"label-width":"40px",inline:!0,size:"small",class:"no-bottom"},{default:S(()=>[y(L,{label:"modal定义","label-width":"80px"},{default:S(()=>[y(z,{modelValue:s(l).typeSuffix,"onUpdate:modelValue":x[0]||(x[0]=v=>s(l).typeSuffix=v),size:"small","fetch-suggestions":u,onSelect:k,clearable:"",class:"w-100",placeholder:"输入或选择"},{default:S(({item:v})=>[X("div",fl,ue(v),1)]),_:1},8,["modelValue"])]),_:1}),y(L,{label:"assign定义","label-width":"80px"},{default:S(()=>[y(z,{modelValue:s(l).modalAssign,"onUpdate:modelValue":x[1]||(x[1]=v=>s(l).modalAssign=v),size:"small","fetch-suggestions":G,onSelect:C,clearable:"",class:"w-100",placeholder:"输入或选择"},{default:S(({item:v})=>[X("div",bl,ue(v),1)]),_:1},8,["modelValue"])]),_:1}),y(L,{label:"首字母","label-width":"50px"},{default:S(()=>[y(R,{modelValue:s(l).firstLetter,"onUpdate:modelValue":x[2]||(x[2]=v=>s(l).firstLetter=v),class:"w-100"},{default:S(()=>[y(N,{label:"默认",value:"default"}),y(N,{label:"大写",value:"uppercase"}),y(N,{label:"小写",value:"lowercase"})]),_:1},8,["modelValue"])]),_:1}),y(L,{label:"结构","label-width":"50px"},{default:S(()=>[y(R,{modelValue:s(l).construction,"onUpdate:modelValue":x[3]||(x[3]=v=>s(l).construction=v),class:"w-100"},{default:S(()=>[y(N,{label:"默认",value:"default"}),y(N,{label:"平铺",value:"tile"})]),_:1},8,["modelValue"])]),_:1}),s(l).construction==="tile"?(O(),pe(L,{key:0},{default:S(()=>[y(P,{modelValue:s(l).banRepeat,"onUpdate:modelValue":x[4]||(x[4]=v=>s(l).banRepeat=v)},{default:S(()=>[Y("禁止重复")]),_:1},8,["modelValue"])]),_:1})):re("v-if",!0),y(L,null,{default:S(()=>[y(M,{type:"default",onClick:Je},{default:S(()=>[Y("格式化")]),_:1}),y(M,{type:"primary",onClick:f},{default:S(()=>[Y("转换")]),_:1})]),_:1})]),_:1}),X("div",vl,[y(r,{visible:s(d),"show-arrow":!1,effect:"light",placement:"left",content:"复制成功"},{default:S(()=>[y(M,{type:"default",size:"small",onClick:He},{default:S(()=>[Y("复制")]),_:1})]),_:1},8,["visible"])])]),y(te,null,{default:S(()=>[y(ee,{span:12},{default:S(()=>[y(_e,{class:"r-b",value:s(a),"onUpdate:value":x[5]||(x[5]=v=>Z(a)?a.value=v:null),height:o,language:"json",placeholder:"请输入JSON"},null,8,["value"])]),_:1}),y(ee,{span:12},{default:S(()=>[y(_e,{value:s(t),"onUpdate:value":x[6]||(x[6]=v=>Z(t)?t.value=v:null),language:"typescript",height:o},null,8,["value"])]),_:1})]),_:1})])}}}),kl=cn(ml,[["__file","C:/Users/luohc/Documents/work/frontend-tools-box/src/views/modalAssign/modalAssign.vue"]]);export{kl as default};
