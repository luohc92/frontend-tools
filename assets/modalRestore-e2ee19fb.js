import{d as ee,r as k,b as ne,E as te,e as se,f as le,c as oe,a as I,g as l,w as r,u as x,o as ae,t as D,h as B,i as C,j as q,n as ie,_ as re}from"./index-5914f90c.js";import{c as ue,d as ce,b as fe,E as pe,a as de,e as me,f as ge,M as J}from"./mirrorEditor-ddc7efaf.js";import{j as he}from"./index-841daa79.js";import"./scroll-316263fe.js";const _e={class:"tool-head"},be={class:"value"},ve={class:"value"},ye={class:"right"},we=ee({__name:"modalRestore",setup(xe){const{toClipboard:F}=ue(),v=k(`{
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
}`),E=k(),R="calc(100vh - 130px)",V=k(!1),u=ne({modalAssign:"this",typeSuffix:"0",firstLetter:"default"}),T=k(["0","-1"]),G=n=>{u.typeSuffix=n},H=(n,s)=>{const p=n?T.value.filter(z(n)):T.value;s(p)},M=k(["this","state","data"]),P=n=>{u.modalAssign=n},Q=(n,s)=>{const p=n?M.value.filter(z(n)):M.value;s(p)},z=n=>s=>s.toLowerCase().indexOf(n.toLowerCase())===0,W=()=>{if(!v.value)return;let n=JSON.parse(JSON.stringify(v.value));try{n=JSON.parse(n)}catch{return q.info("JSON格式不正确")}E.value=X(n,"",!1,!1,"","")},X=(n,s,p,f,_,$)=>{let y="";const w=Y(n);let e="";function O(t,d,A,N,i,m){if(t&&typeof t=="object")if(Array.isArray(t))j(t,d,A,N,i,m);else{m?m=m+"."+d:m=d;for(let g=Object.keys(t),h=0,S=g.length;h<S;h++){const a=g[h],b=t[a];let o=!1;const c=h===0;o=h===S-1,O(b,a,c,o,d,m)}}else j(t,d,A,N,i,m)}function j(t,d,A,N,i,m){let g="",h="",S=[];const a=m==null?void 0:m.split(".");switch(u.firstLetter){case"uppercase":g=d.substring(0,1).toLocaleUpperCase()+d.substring(1),i&&(h=i.substring(0,1).toLocaleUpperCase()+i.substring(1)),a&&a.length>0&&a.forEach(o=>{S.push(o.substring(0,1).toLocaleUpperCase()+o.substring(1))});break;case"lowercase":g=d.substring(0,1).toLocaleLowerCase()+d.substring(1),h=i.substring(0,1).toLocaleLowerCase()+i.substring(1),a&&a.length>0&&a.forEach(o=>{S.push(o.substring(0,1).toLocaleLowerCase()+o.substring(1))});break;default:g=d,h=i,S=a;break}let b='""';if(typeof t=="object"&&Array.isArray(t)?b="[]":typeof t=="string"||t==="null"?b='""':typeof t=="number"&&(b=u.typeSuffix),A&&i&&(a&&a.length>1?(e.length===0&&(S.forEach((o,c)=>{c<S.length-1&&(c===0?e=`${u.modalAssign}.${o} = {
`:e=`${e}${o}: {
`)}),y="};"),e=`${e}${h}: {
`,e=`${e}${g}:${b},
`):(e=`${e}${u.modalAssign}.${h} = {
`,e=`${e}${g}:${b},
`)),A&&!i&&(e=`${u.modalAssign}.${g} = ${b};
`),!A&&i&&(e=e+`${g}: ${b}`,e=`${e},
`),!A&&!i&&(e=e+`${u.modalAssign}.${g} = ${b};
`),N&&i){if(a&&a.length>=2){const o=w.find(c=>c.key===i);if(a&&a.length>=3){const c=w.find(L=>L.key===o.key);if(c&&c.parentKey){const L=w.filter(U=>U.parentKey===c.parentKey);if(L.length-1===c.index)e=`${e}},
},`;else for(let U=0;U<L.length-c.index;U++)e=`${e}},
`;return}}else if(o&&o.parentKey){w.filter(L=>L.parentKey===o.parentKey).length-1===o.index?e=`${e}},
};`:e=`${e}},
`;return}e=`${e}},
};`;return}e=`${e}};
`}}return O(n,s,p,f,_,$),e=he.js_beautify(e+y),e},Y=n=>{const s=[];function p(f,_,$,y){f&&typeof f=="object"&&!Array.isArray(f)?(_&&s.push({key:_,parentKey:$,index:y}),$=_,Object.keys(f).forEach((w,e)=>{p(f[w],w,$,e)})):s.push({key:_,parentKey:$,index:y})}return p(n,"","",0),s},Z=()=>{if(v.value)try{const n=JSON.parse(v.value);v.value="",ie(()=>{v.value=JSON.stringify(n,null,4)})}catch(n){return q.info("JSON格式不正确：",n==null?void 0:n.message)}},K=async()=>{if(!E.value)return q.info("没有内容");try{await F(E.value),V.value=!0,setTimeout(()=>{V.value=!1},1e3)}catch{V.value=!1,q.error("复制失败")}};return(n,s)=>{const p=ce,f=fe,_=pe,$=de,y=te,w=me,e=se,O=ge,j=le;return ae(),oe("div",null,[I("div",_e,[l(w,{"label-width":"40px",inline:!0,size:"small",class:"no-bottom"},{default:r(()=>[l(f,{label:"assign定义","label-width":"80px"},{default:r(()=>[l(p,{modelValue:x(u).modalAssign,"onUpdate:modelValue":s[0]||(s[0]=t=>x(u).modalAssign=t),size:"small","fetch-suggestions":Q,onSelect:P,clearable:"",class:"w-100",placeholder:"输入或选择"},{default:r(({item:t})=>[I("div",be,D(t),1)]),_:1},8,["modelValue"])]),_:1}),l(f,{label:"默认number","label-width":"90px"},{default:r(()=>[l(p,{modelValue:x(u).typeSuffix,"onUpdate:modelValue":s[1]||(s[1]=t=>x(u).typeSuffix=t),size:"small","fetch-suggestions":H,onSelect:G,clearable:"",class:"w-100",placeholder:"输入或选择"},{default:r(({item:t})=>[I("div",ve,D(t),1)]),_:1},8,["modelValue"])]),_:1}),l(f,{label:"首字母","label-width":"50px"},{default:r(()=>[l($,{modelValue:x(u).firstLetter,"onUpdate:modelValue":s[2]||(s[2]=t=>x(u).firstLetter=t),class:"w-100"},{default:r(()=>[l(_,{label:"默认",value:"default"}),l(_,{label:"大写",value:"uppercase"}),l(_,{label:"小写",value:"lowercase"})]),_:1},8,["modelValue"])]),_:1}),l(f,null,{default:r(()=>[l(y,{type:"default",onClick:Z},{default:r(()=>[B("格式化")]),_:1}),l(y,{type:"primary",onClick:W},{default:r(()=>[B("转换")]),_:1})]),_:1})]),_:1}),I("div",ye,[l(e,{visible:x(V),"show-arrow":!1,effect:"light",placement:"left",content:"复制成功"},{default:r(()=>[l(y,{type:"default",size:"small",onClick:K},{default:r(()=>[B("复制")]),_:1})]),_:1},8,["visible"])])]),l(j,null,{default:r(()=>[l(O,{span:12},{default:r(()=>[l(J,{class:"r-b",value:x(v),"onUpdate:value":s[3]||(s[3]=t=>C(v)?v.value=t:null),height:R,language:"json",placeholder:"请输入JSON"},null,8,["value"])]),_:1}),l(O,{span:12},{default:r(()=>[l(J,{value:x(E),"onUpdate:value":s[4]||(s[4]=t=>C(E)?E.value=t:null),language:"typescript",height:R},null,8,["value"])]),_:1})]),_:1})])}}}),Le=re(we,[["__file","C:/Users/luohc/Documents/work/frontend-tools-box/src/views/modalRestore/modalRestore.vue"]]);export{Le as default};
