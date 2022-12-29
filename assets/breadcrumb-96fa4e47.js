import{H as S,aX as K,d as x,W as $,r as R,aw as q,$ as z,o as v,c as E,a8 as M,a1 as g,u as m,ae as D,I as G,ap as J,ax as V,a as W,a0 as T,w as I,as as X,a4 as Q,t as P,aM as Y,ah as Z,aJ as j,bG as ee,bH as re,av as ae,bI as te,a6 as ne,a7 as oe,ac as ce,_ as se}from"./index-b8ba1d25.js";const O=Symbol("breadcrumbKey"),ie=S({separator:{type:String,default:"/"},separatorIcon:{type:K}}),ue=x({name:"ElBreadcrumb"}),le=x({...ue,props:ie,setup(r){const a=r,e=$("breadcrumb"),s=R();return q(O,a),z(()=>{const i=s.value.querySelectorAll(`.${e.e("item")}`);i.length&&i[i.length-1].setAttribute("aria-current","page")}),(i,n)=>(v(),E("div",{ref_key:"breadcrumb",ref:s,class:g(m(e).b()),"aria-label":"Breadcrumb",role:"navigation"},[M(i.$slots,"default")],2))}});var pe=D(le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const fe=S({to:{type:G([String,Object]),default:""},replace:{type:Boolean,default:!1}}),de=x({name:"ElBreadcrumbItem"}),me=x({...de,props:fe,setup(r){const a=r,e=Y(),s=J(O,void 0),i=$("breadcrumb"),{separator:n,separatorIcon:u}=V(s),l=e.appContext.config.globalProperties.$router,t=R(),p=()=>{!a.to||!l||(a.replace?l.replace(a.to):l.push(a.to))};return(c,o)=>(v(),E("span",{class:g(m(i).e("item"))},[W("span",{ref_key:"link",ref:t,class:g([m(i).e("inner"),m(i).is("link",!!c.to)]),role:"link",onClick:p},[M(c.$slots,"default")],2),m(u)?(v(),T(m(Q),{key:0,class:g(m(i).e("separator"))},{default:I(()=>[(v(),T(X(m(u))))]),_:1},8,["class"])):(v(),E("span",{key:1,class:g(m(i).e("separator")),role:"presentation"},P(m(n)),3))],2))}});var H=D(me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const ve=Z(pe,{BreadcrumbItem:H}),be=j(H);function he(r){for(var a=[],e=0;e<r.length;){var s=r[e];if(s==="*"||s==="+"||s==="?"){a.push({type:"MODIFIER",index:e,value:r[e++]});continue}if(s==="\\"){a.push({type:"ESCAPED_CHAR",index:e++,value:r[e++]});continue}if(s==="{"){a.push({type:"OPEN",index:e,value:r[e++]});continue}if(s==="}"){a.push({type:"CLOSE",index:e,value:r[e++]});continue}if(s===":"){for(var i="",n=e+1;n<r.length;){var u=r.charCodeAt(n);if(u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||u===95){i+=r[n++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(e));a.push({type:"NAME",index:e,value:i}),e=n;continue}if(s==="("){var l=1,t="",n=e+1;if(r[n]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(n));for(;n<r.length;){if(r[n]==="\\"){t+=r[n++]+r[n++];continue}if(r[n]===")"){if(l--,l===0){n++;break}}else if(r[n]==="("&&(l++,r[n+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(n));t+=r[n++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(e));if(!t)throw new TypeError("Missing pattern at ".concat(e));a.push({type:"PATTERN",index:e,value:t}),e=n;continue}a.push({type:"CHAR",index:e,value:r[e++]})}return a.push({type:"END",index:e,value:""}),a}function _e(r,a){a===void 0&&(a={});for(var e=he(r),s=a.prefixes,i=s===void 0?"./":s,n="[^".concat(we(a.delimiter||"/#?"),"]+?"),u=[],l=0,t=0,p="",c=function(h){if(t<e.length&&e[t].type===h)return e[t++].value},o=function(h){var w=c(h);if(w!==void 0)return w;var N=e[t],L=N.type,U=N.index;throw new TypeError("Unexpected ".concat(L," at ").concat(U,", expected ").concat(h))},d=function(){for(var h="",w;w=c("CHAR")||c("ESCAPED_CHAR");)h+=w;return h};t<e.length;){var b=c("CHAR"),_=c("NAME"),y=c("PATTERN");if(_||y){var f=b||"";i.indexOf(f)===-1&&(p+=f,f=""),p&&(u.push(p),p=""),u.push({name:_||l++,prefix:f,suffix:"",pattern:y||n,modifier:c("MODIFIER")||""});continue}var C=b||c("ESCAPED_CHAR");if(C){p+=C;continue}p&&(u.push(p),p="");var k=c("OPEN");if(k){var f=d(),B=c("NAME")||"",A=c("PATTERN")||"",F=d();o("CLOSE"),u.push({name:B||(A?l++:""),pattern:B&&!A?n:A,prefix:f,suffix:F,modifier:c("MODIFIER")||""});continue}o("END")}return u}function ye(r,a){return Ee(_e(r,a),a)}function Ee(r,a){a===void 0&&(a={});var e=ge(a),s=a.encode,i=s===void 0?function(t){return t}:s,n=a.validate,u=n===void 0?!0:n,l=r.map(function(t){if(typeof t=="object")return new RegExp("^(?:".concat(t.pattern,")$"),e)});return function(t){for(var p="",c=0;c<r.length;c++){var o=r[c];if(typeof o=="string"){p+=o;continue}var d=t?t[o.name]:void 0,b=o.modifier==="?"||o.modifier==="*",_=o.modifier==="*"||o.modifier==="+";if(Array.isArray(d)){if(!_)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(d.length===0){if(b)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var y=0;y<d.length;y++){var f=i(d[y],o);if(u&&!l[c].test(f))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(f,'"'));p+=o.prefix+f+o.suffix}continue}if(typeof d=="string"||typeof d=="number"){var f=i(String(d),o);if(u&&!l[c].test(f))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(f,'"'));p+=o.prefix+f+o.suffix;continue}if(!b){var C=_?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(C))}}return p}}function we(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ge(r){return r&&r.sensitive?"":"i"}const xe={key:0,class:"no-redirect"},Ce=["onClick"],Te=x({__name:"breadcrumb",setup(r){const a=R(null),e=ee(),s=()=>{const l=e.matched.filter(t=>t.meta&&t.meta.title);a.value=l.filter(t=>t.meta&&t.meta.title&&t.meta.breadcrumb!==!1)},i=l=>{const{params:t}=e;return ye(l)(t)},n=re(),u=l=>{const{redirect:t,path:p}=l;if(t){n.push(t);return}p&&n.push(i(p))};return ae(()=>e.path,()=>{s()},{immediate:!0}),te(()=>{s()}),(l,t)=>{const p=be,c=ve;return v(),T(c,{class:"app-breadcrumb","separator-icon":"ArrowRight"},{default:I(()=>[(v(!0),E(ne,null,oe(a.value,(o,d)=>(v(),T(p,{key:o.path},{default:I(()=>{var b;return[o.redirect==="noRedirect"||d===a.value.length-1?(v(),E("span",xe,P((b=o.meta)==null?void 0:b.title),1)):(v(),E("a",{key:1,onClick:ce(_=>u(o),["prevent"])},P(o.meta.title),9,Ce))]}),_:2},1024))),128))]),_:1})}}});const Ie=se(Te,[["__scopeId","data-v-008e6c7e"],["__file","C:/Users/luohc/Documents/work/frontend-tools-box/src/layout/components/breadcrumb.vue"]]);export{Ie as default};
