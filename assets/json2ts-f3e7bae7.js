var fe=Object.defineProperty;var me=(t,n,e)=>n in t?fe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var y=(t,n,e)=>(me(t,typeof n!="symbol"?n+"":n,e),e);import{d as pe,r as b,b as ye,E as he,e as de,c as ge,a as j,f as a,w as c,u as _,o as _e,t as ve,g as N,i as R,h as S,n as Ee,_ as Ce}from"./index-d9ed2ae6.js";import{c as Te,E as be,a as Ae,b as Oe,d as Ve,e as je,f as Ne,g as Se,M as I}from"./mirrorEditor-9498d342.js";import"./index-c7730d8c.js";const we="Root",P="string",q="number",B="null",U="boolean",F="undefined",K="Object",D="Array",G="Comment",$e="root",A="$ARRAY_ITEM$",z="$LAST_COMMENT$",ke="$NEXT_COMMENT$",L="array should be closed",Me="comment is illegal",Re="value is illegal";function C(t){const{offset:n,column:e,line:s}=t;return{offset:n,column:e,line:s}}function J(t,n,e){return e=e||C(t),{start:n,end:e,source:t.originalSource.slice(n.offset,e.offset)}}function Ie(t,n){return{options:n,column:1,line:1,offset:0,originalSource:t,source:t}}function Le(t){return{key:$e,type:we,value:t}}function W(t){return!t.source}function xe(t,n,e=n.length){let s=0,i=-1;for(let l=0;l<e;l++)n.charCodeAt(l)===10&&(s++,i=l);t.offset+=e,t.line+=s,t.column=i===-1?t.column+e:e-i}function u(t,n){const e=t.source;xe(t,e,n),t.source=e.slice(n)}function h(t){const n=/^[\t\r\n\f ]+/.exec(t.source);n&&n[0]&&u(t,n[0].length)}function X(t,n){h(t);const e=C(t);let s=n||Ye(t);const{value:i,type:l}=Ke(t),r=J(t,e);return h(t),t.source[0]===","&&(u(t,1),h(t)),{key:s,value:i,type:l,loc:r}}function H(t){const n=[];for(;!W(t);){h(t);const e=t.source;if(e[0]==="{")u(t,1);else{if(e[0]==="}")return u(t,1),h(t),n;if(e[0]==="/")if(e[1]==="/"){const s=n[n.length-1];let i=-1;s&&s.loc&&(i=s.loc.end.line),n.push(Q(t,i)),h(t)}else throw new Error(Me);else n.push(X(t))}}return n}function Ye(t){const n=t.source[0];let e=[];return n==='"'?e=/^"(.[^"]*)/i.exec(t.source):n==="'"?e=/^'(.[^']*)/i.exec(t.source):(e=/(.[^:]*)/i.exec(t.source),e[1]=e[1].trim()),u(t,e[0].length+1),h(t),t.source[0]===":"&&(u(t,1),h(t)),e[1]}function Pe(t){const n=/^([0-9]*)/i.exec(t.source);if(n)return u(t,n[0].length),n[1]}function qe(t){const n=/^["|']([^"|']*)/i.exec(t.source);if(n)return u(t,n[0].length+1),n[1]}function Be(t){return u(t,4),"null"}function Ue(t){const n=/^(true|false)/i.exec(t.source);if(n)return u(t,n[0].length),n[1]}function Fe(t){return u(t,9),"undefined"}function Ke(t){let n=null,e=null,s=t.source[0];if(/^[0-9]/.test(s))n=Pe(t),e=q;else if(s==='"'||s==="'")n=qe(t),e=P;else if(s==="[")u(t,1),n=De(t),e=D;else if(s==="{")n=H(t),e=K;else if(t.source.indexOf("null")===0)n=Be(t),e=B;else if(t.source.indexOf("true")===0||t.source.indexOf("false")===0)n=Ue(t),e=U;else if(t.source.indexOf("undefined")===0)n=Fe(t),e=F;else throw new Error(Re);return{value:n,type:e}}function De(t){const n=[];let e=C(t).line;for(h(t);!W(t);){const s=t.source[0];if(s==="]")return u(t,1),n;if(s==="}"||s===":")throw new Error(L);if(t.source.indexOf("//")===0){const i=Q(t,e);n.push(i),h(t)}else{const i=X(t,A);e=i.loc.end.line,n.push(i)}}throw new Error(L)}function Q(t,n){const e=C(t).line,s=n===e?z:ke,i=/^\/\/\s*(.[^\t\n\r\f]*)/i.exec(t.source),l=C(t);if(!i)return;const r=i[1];return u(t,i[0].length),{key:s,value:r,type:G,loc:J(t,l)}}function Ge(t,n){const e=Ie(t,n);return Le(H(e))}function Z(t){return Object.prototype.toString.call(t)}function w(t){return typeof t=="object"&&Z(t).slice(8,-1)==="Array"}function $(t){return typeof t=="object"&&Z(t).slice(8,-1)==="Object"}function ze(t){return t.replace(/( |^)[a-z]/g,n=>n.toUpperCase())}function Je(t){let n=Object.keys(t).sort(),e="{";for(let s of n)e+=`${s}:${t[s]},`;return e=e.replace(/,$/,""),e+="}",e}function We(t,n=""){const e=[],s={};let i=0;const l=[],r={};for(let m=0;m<t.length;m++){const v=t[m];$(v)?(i++,Object.keys(v).forEach(g=>{r[g]=v[g],s[`${n}>${g}`]?s[`${n}>${g}`]+=1:s[`${n}>${g}`]=1})):l.push(v)}return Object.keys(s).forEach(m=>{s[m]<i&&e.push(m)}),Object.keys(r).length&&l.push(r),{optionalKeys:e,newTypes:l}}function Xe(t,n,e=""){const s=e+">"+n;for(const i of t)if(s===i)return!0;return!1}let o=ee();function ee(){return{comments:{},i:0,lastI:null,lastNode:null,nextComment:[]}}function E(t,n,e){t.i=o.i,t.key===A?(o.nextComment=[],e.parseArray&&(n.typeValue=n.typeValue||[],n.typeValue.push(t.type))):(n.typeValue=n.typeValue||{},n.typeValue[t.key]=t.type,k(t))}function k(t){if(o.lastNode=t,o.nextComment.length){const n=o.comments,e=t.key+o.i;n[e]=n[e]||[],n[e]=n[e].concat(o.nextComment),o.nextComment=[]}}function x(t){o.nextComment.length&&(t.nextComment=o.nextComment,o.nextComment=[])}function Y(t){if(t.nextComment){const n=o.comments,e=t.key+t.i;n[e]=n[e]||[],n[e]=n[e].concat(t.nextComment),o.nextComment=[]}}function te(t,n,e){t.forEach(s=>{let i=e[s.type];i&&i.entry&&i.entry(s,n),w(s.value)&&te(s.value,s,e),i&&i.exit&&i.exit(s,n)})}function He(t,n){let e=n.Root;return e&&e.entry&&e.entry(t,null),te(t.value,t,n),e&&e.exit&&e.exit(t,null),t}function Qe(t,n){return He(t,{[P]:{entry(e,s){E(e,s,n)}},[q]:{entry(e,s){E(e,s,n)}},[K]:{entry(e,s){if(e.key===A){if(o.nextComment=[],n&&n.parseArray){if(!s)return;s.typeValue=s.typeValue||[],e.typeValue={},s.typeValue.push(e.typeValue),e.i=o.i,o.i++}}else{if(!s||(s.typeValue=s.typeValue||{},s.typeValue[e.key]=e.typeValue={},!n))return;n.comment==="inline"?x(e):n.comment==="block"&&k(e),e.i=o.i,o.i++}},exit(e){n&&(n.comment==="inline"&&(e.i=o.i,Y(e)),o.lastNode=e)}},[D]:{entry(e,s){if(e.key===A){if(o.nextComment=[],!n)return;if(n.parseArray){if(!s)return;s.typeValue=s.typeValue||[],e.typeValue=[],s.typeValue.push(e.typeValue)}}else{if(!s||(s.typeValue=s.typeValue||{},s.typeValue[e.key]=e.typeValue=[],!n))return;n.comment==="inline"?x(e):n.comment==="block"&&k(e)}e.i=o.i},exit(e){n&&(n.comment==="inline"&&(e.i=o.i,Y(e)),o.lastNode=e)}},[B]:{entry(e,s){E(e,s,n)}},[U]:{entry(e,s){E(e,s,n)}},[F]:{entry(e,s){E(e,s,n)}},[G]:{entry(e){if(e.key===z){const s=o.lastNode.key+o.lastNode.i;o.comments[s]=o.comments[s]||[],o.comments[s].push(e.value)}else o.nextComment.push(e.value)}}}),t.comments=o.comments,o=ee(),t}class Ze{constructor(n,e){y(this,"ast");y(this,"options");y(this,"vars");y(this,"i");y(this,"j");y(this,"level");y(this,"prefix");y(this,"suffix");y(this,"objValueMap");this.ast=n,this.options=e,this.prefix=e.typePrefix||"",this.suffix=e.typeSuffix||"",this.vars="",this.i=0,this.j=-1,this.level=1,this.objValueMap=new Map}beginGen(){const n=this.genName("Result"),e=this.ast.typeValue,s=this.gen(e),i=this.options.genType==="interface";return`${this.vars}${this.options.genType} ${n}${i?"":" ="} ${s}${this.options.semicolon?";":""}
`}gen(n,e=[]){let s=`{
`;for(const i in n){const l=n[i];this.options.comment==="block"&&(s+=this.genBlockComment(i)),s+=this.genKey(i,Xe(e,i)),$(l)?s+=this.genObjcet(i,l):w(l)?s+=this.options.parseArray?this.genArray(i,l):"Array<any>":s+=l,this.options.semicolon&&(s+=";"),this.options.comment==="inline"&&(s+=this.genInlineComment(i)),s+=`
`}return this.options.splitType||(s+=this.genFormatChat(this.level-1)),s+="}",s}genName(n){return this.j++,`${this.prefix}${ze(n)}${this.suffix}`}genKey(n,e=!1){return`${this.genFormatChat(this.level)}${n}${this.options.required&&!e?": ":"?: "}`}genFormatChat(n){const e=this.options.indent||2;return this.options.splitType?" ".repeat(e):" ".repeat(n*e)}genInlineComment(n){const e=n+this.i;let s;if(this.ast.comments&&(s=this.ast.comments[e]),s&&s.length){let i=" // ";return s.forEach(l=>{i+=l+"; "}),i=i.substring(0,i.length-2),i}return""}genBlockComment(n){let e="";const s=n+this.i;let i;return this.ast.comments&&(i=this.ast.comments[s]),i&&i.length&&i.forEach(l=>{e+=this.genFormatChat(this.level)+"// "+l+`
`}),e}genObjcet(n,e,s=[]){let i="";this.level++,this.i++;const l=this.gen(e,s);return this.options.splitType?i+=this.genObjectCodeWithVar(l,n,e):i+=l,this.level--,i}genObjectCodeWithVar(n,e,s){const i=Je(s);if(this.objValueMap.has(i))return this.objValueMap.get(i);const l=this.genName(e),r=this.options.genType==="interface";return this.objValueMap.set(i,l),this.vars+=`${this.options.genType} ${l}${r?"":" ="} ${n}${this.options.semicolon?";":""}

`,l}genArray(n,e){if(e.length===0)return"Array< unknow >";let s="Array< ";const i=new Set;let l=[];if(this.options.optimizeArrayOptional){const{optionalKeys:r,newTypes:m}=We(e);l=r,e=m}return e.forEach(r=>{w(r)&&i.add(this.genArray(n,r)),$(r)?i.add(this.genObjcet(n,r,l)):i.add(r)}),s+=Array.from(i).join(" | "),s+=" >",s}}function et(t,n){return new Ze(t,n).beginGen()}function tt(t){const n={splitType:!0,parseArray:!1,required:!0,semicolon:!1,typeSuffix:"Type",typePrefix:"",indent:2,comment:!1,optimizeArrayOptional:!1,genType:"type"};return Object.assign(n,t),n}function nt(t,n={}){const e=tt(n),s=Ge(t,e);return Qe(s,e),et(s,e)}const st={class:"tool-head"},it={class:"value"},lt={class:"right"},ot=pe({__name:"json2ts",setup(t){const{toClipboard:n}=Te(),e=b(`{
    "createId": 9,
    "ab": {
        "categoryId": 56,
        "extension": "voluptate cupidatat consequat nisi aliquip",
        "updatedAt": "2016-10-01 10:29:56",
        "deletedAt": null,
        "dd": {
            "categoryId": 56,
            "extension": "voluptate cupidatat consequat nisi aliquip",
            "updatedAt": "2016-10-01 10:29:56",
            "deletedAt": null
        }
    },
    "data": {
        "categoryId": 56,
        "extension": "voluptate cupidatat consequat nisi aliquip",
        "updatedAt": "2016-10-01 10:29:56",
        "deletedAt": null
    },
    "cc": [
        {
            "categoryId": 56,
            "extension": "voluptate cupidatat consequat nisi aliquip",
            "updatedAt": "2016-10-01 10:29:56",
            "deletedAt": null
        },
        {
            "categoryId": 56,
            "extension": "voluptate cupidatat consequat nisi aliquip",
            "updatedAt": "2016-10-01 10:29:56",
            "deletedAt": null
        }
    ]
}`),s=b(),i="calc(100vh - 160px)",l=b(!1),r=ye({typeSuffix:"Dto",genType:"interface"}),m=b(["Dto","Type","Modal"]),v=p=>{r.typeSuffix=p},g=(p,f)=>{const T=p?m.value.filter(ne(p)):m.value;f(T)},ne=p=>f=>f.toLowerCase().indexOf(p.toLowerCase())===0,se=()=>{if(e.value)try{s.value=nt(e.value,{splitType:!0,semicolon:!0,parseArray:!0,typeSuffix:r.typeSuffix,comment:"inline",genType:r.genType})}catch{s.value="",S.error("JSON格式不正确")}},ie=()=>{if(!e.value)return;const p=JSON.parse(e.value);e.value="",Ee(()=>{e.value=JSON.stringify(p,null,4)})},le=async()=>{if(!s.value)return S.info("没有内容");try{await n(s.value),l.value=!0,setTimeout(()=>{l.value=!1},1e3)}catch{l.value=!1,S.error("复制失败")}};return(p,f)=>{const T=be,oe=Ae,O=Oe,re=Ve,V=he,ae=je,ue=de,M=Ne,ce=Se;return _e(),ge("div",null,[j("div",st,[a(ae,{"label-width":"40px",inline:!0,size:"small",class:"no-bottom"},{default:c(()=>[a(O,{label:"定义"},{default:c(()=>[a(oe,{modelValue:_(r).genType,"onUpdate:modelValue":f[0]||(f[0]=d=>_(r).genType=d),class:"w-100"},{default:c(()=>[a(T,{label:"type",value:"type"}),a(T,{label:"interface",value:"interface"})]),_:1},8,["modelValue"])]),_:1}),a(O,{label:"后缀"},{default:c(()=>[a(re,{modelValue:_(r).typeSuffix,"onUpdate:modelValue":f[1]||(f[1]=d=>_(r).typeSuffix=d),size:"small","fetch-suggestions":g,onSelect:v,clearable:"",class:"w-100",placeholder:"输入或选择"},{default:c(({item:d})=>[j("div",it,ve(d),1)]),_:1},8,["modelValue"])]),_:1}),a(O,null,{default:c(()=>[a(V,{type:"default",onClick:ie},{default:c(()=>[N("格式化")]),_:1}),a(V,{type:"primary",onClick:se},{default:c(()=>[N("转换")]),_:1})]),_:1})]),_:1}),j("div",lt,[a(ue,{visible:_(l),"show-arrow":!1,effect:"light",placement:"left",content:"复制成功"},{default:c(()=>[a(V,{type:"default",size:"small",onClick:le},{default:c(()=>[N("复制")]),_:1})]),_:1},8,["visible"])])]),a(ce,null,{default:c(()=>[a(M,{span:12},{default:c(()=>[a(I,{class:"r-b",value:_(e),"onUpdate:value":f[2]||(f[2]=d=>R(e)?e.value=d:null),height:i,language:"json",placeholder:"请输入需要转换的JSON"},null,8,["value"])]),_:1}),a(M,{span:12},{default:c(()=>[a(I,{value:_(s),"onUpdate:value":f[3]||(f[3]=d=>R(s)?s.value=d:null),language:"typescript",height:i},null,8,["value"])]),_:1})]),_:1})])}}}),ft=Ce(ot,[["__file","C:/Users/luohc/Documents/work/frontend-tools-box/src/views/json2ts/json2ts.vue"]]);export{ft as default};
