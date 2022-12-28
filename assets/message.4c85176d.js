import{ar as A,as as ze,u as fe,v as ie,at as ke,au as pe,d as te,av as _e,aw as $e,ax as Be,ay as Ce,C as ve,az as Ne,r as I,aA as Oe,aB as Te,A as g,D as ue,$ as Ee,W as me,o as _,a6 as Z,a as c,a5 as v,b as d,O as w,P as e,aC as Ae,ab as E,ag as T,aD as Pe,c as B,aE as Re,aF as Fe,F as ee,aG as De,aH as Me,aa as Ve,aI as xe,aJ as He,aK as Ie,aL as Ye,aM as Xe,a9 as ce,N as Y,ac as Ue,aN as We,Q as ge,aO as le,aP as x,aQ as H,aR as je,ad as we,aS as Ze,aT as Ke,aU as Se,a8 as de,aV as Ge,y as Qe,aW as qe,aX as he,aY as re,aZ as F,z as Je,a3 as et,a7 as Le,a_ as tt,a$ as st,b0 as at,b1 as be,b2 as ot,b3 as nt,al as lt,am as rt,an as it,_ as ut}from"./index.a72ce3bf.js";const ct=(n,r)=>{if(!A||!n||!r)return!1;const s=n.getBoundingClientRect();let i;return r instanceof Element?i=r.getBoundingClientRect():i={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},s.top<i.bottom&&s.bottom>i.top&&s.right>i.left&&s.left<i.right},dt=(n,r)=>{if(!A)return!1;const s={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(r)],i=ze(n,s);return["scroll","auto","overlay"].some(P=>i.includes(P))},ft=(n,r)=>{if(!A)return;let s=n;for(;s;){if([window,document,document.documentElement].includes(s))return window;if(dt(s,r))return s;s=s.parentNode}return s},pt=()=>A&&/firefox/i.test(window.navigator.userAgent),vt=fe({urlList:{type:ie(Array),default:()=>ke([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),mt={close:()=>!0,switch:n=>pe(n)},gt=["src"],wt={name:"ElImageViewer"},_t=te({...wt,props:vt,emits:mt,setup(n,{emit:r}){const s=n,i={CONTAIN:{name:"contain",icon:_e($e)},ORIGINAL:{name:"original",icon:_e(Be)}},P=pt()?"DOMMouseScroll":"mousewheel",{t:C}=Ce(),u=ve("image-viewer"),{nextZIndex:z}=Ne(),S=I(),h=I([]),b=Oe(),y=I(!0),p=I(s.initialIndex),m=Te(i.CONTAIN),f=I({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=g(()=>{const{urlList:a}=s;return a.length<=1}),R=g(()=>p.value===0),o=g(()=>p.value===s.urlList.length-1),K=g(()=>s.urlList[p.value]),X=g(()=>{const{scale:a,deg:t,offsetX:l,offsetY:k,enableTransition:N}=f.value;let L=l/a,O=k/a;switch(t%360){case 90:case-270:[L,O]=[O,-L];break;case 180:case-180:[L,O]=[-L,-O];break;case 270:case-90:[L,O]=[-O,L];break}const V={transform:`scale(${a}) rotate(${t}deg) translate(${L}px, ${O}px)`,transition:N?"transform .3s":""};return m.value.name===i.CONTAIN.name&&(V.maxWidth=V.maxHeight="100%"),V}),ae=g(()=>pe(s.zIndex)?s.zIndex:z());function M(){oe(),r("close")}function U(){const a=le(l=>{switch(l.code){case x.esc:s.closeOnPressEscape&&M();break;case x.space:j();break;case x.left:q();break;case x.up:$("zoomIn");break;case x.right:J();break;case x.down:$("zoomOut");break}}),t=le(l=>{(l.wheelDelta?l.wheelDelta:-l.detail)>0?$("zoomIn",{zoomRate:1.2,enableTransition:!1}):$("zoomOut",{zoomRate:1.2,enableTransition:!1})});b.run(()=>{H(document,"keydown",a),H(document,P,t)})}function oe(){b.stop()}function ne(){y.value=!1}function G(a){y.value=!1,a.target.alt=C("el.image.error")}function Q(a){if(y.value||a.button!==0||!S.value)return;f.value.enableTransition=!1;const{offsetX:t,offsetY:l}=f.value,k=a.pageX,N=a.pageY,L=le(V=>{f.value={...f.value,offsetX:t+V.pageX-k,offsetY:l+V.pageY-N}}),O=H(document,"mousemove",L);H(document,"mouseup",()=>{O()}),a.preventDefault()}function W(){f.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function j(){if(y.value)return;const a=je(i),t=Object.values(i),l=m.value.name,N=(t.findIndex(L=>L.name===l)+1)%a.length;m.value=i[a[N]],W()}function q(){if(R.value&&!s.infinite)return;const a=s.urlList.length;p.value=(p.value-1+a)%a}function J(){if(o.value&&!s.infinite)return;const a=s.urlList.length;p.value=(p.value+1)%a}function $(a,t={}){if(y.value)return;const{zoomRate:l,rotateDeg:k,enableTransition:N}={zoomRate:1.4,rotateDeg:90,enableTransition:!0,...t};switch(a){case"zoomOut":f.value.scale>.2&&(f.value.scale=Number.parseFloat((f.value.scale/l).toFixed(3)));break;case"zoomIn":f.value.scale<7&&(f.value.scale=Number.parseFloat((f.value.scale*l).toFixed(3)));break;case"clockwise":f.value.deg+=k;break;case"anticlockwise":f.value.deg-=k;break}f.value.enableTransition=N}return ue(K,()=>{Ee(()=>{const a=h.value[0];a!=null&&a.complete||(y.value=!0)})}),ue(p,a=>{W(),r("switch",a)}),me(()=>{var a,t;U(),(t=(a=S.value)==null?void 0:a.focus)==null||t.call(a)}),(a,t)=>(_(),Z(We,{to:"body",disabled:!a.teleported},[c(Ue,{name:"viewer-fade",appear:""},{default:v(()=>[d("div",{ref_key:"wrapper",ref:S,tabindex:-1,class:w(e(u).e("wrapper")),style:ce({zIndex:e(ae)})},[d("div",{class:w(e(u).e("mask")),onClick:t[0]||(t[0]=Ae(l=>a.hideOnClickModal&&M(),["self"]))},null,2),E(" CLOSE "),d("span",{class:w([e(u).e("btn"),e(u).e("close")]),onClick:M},[c(e(T),null,{default:v(()=>[c(e(Pe))]),_:1})],2),E(" ARROW "),e(D)?E("v-if",!0):(_(),B(ee,{key:0},[d("span",{class:w([e(u).e("btn"),e(u).e("prev"),e(u).is("disabled",!a.infinite&&e(R))]),onClick:q},[c(e(T),null,{default:v(()=>[c(e(Re))]),_:1})],2),d("span",{class:w([e(u).e("btn"),e(u).e("next"),e(u).is("disabled",!a.infinite&&e(o))]),onClick:J},[c(e(T),null,{default:v(()=>[c(e(Fe))]),_:1})],2)],64)),E(" ACTIONS "),d("div",{class:w([e(u).e("btn"),e(u).e("actions")])},[d("div",{class:w(e(u).e("actions__inner"))},[c(e(T),{onClick:t[1]||(t[1]=l=>$("zoomOut"))},{default:v(()=>[c(e(De))]),_:1}),c(e(T),{onClick:t[2]||(t[2]=l=>$("zoomIn"))},{default:v(()=>[c(e(Me))]),_:1}),d("i",{class:w(e(u).e("actions__divider"))},null,2),c(e(T),{onClick:j},{default:v(()=>[(_(),Z(Ve(e(m).icon)))]),_:1}),d("i",{class:w(e(u).e("actions__divider"))},null,2),c(e(T),{onClick:t[3]||(t[3]=l=>$("anticlockwise"))},{default:v(()=>[c(e(xe))]),_:1}),c(e(T),{onClick:t[4]||(t[4]=l=>$("clockwise"))},{default:v(()=>[c(e(He))]),_:1})],2)],2),E(" CANVAS "),d("div",{class:w(e(u).e("canvas"))},[(_(!0),B(ee,null,Ie(a.urlList,(l,k)=>Ye((_(),B("img",{ref_for:!0,ref:N=>h.value[k]=N,key:l,src:l,style:ce(e(X)),class:w(e(u).e("img")),onLoad:ne,onError:G,onMousedown:Q},null,46,gt)),[[Xe,k===p.value]])),128))],2),Y(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ht=ge(_t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const bt=we(ht),yt=fe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:ie([String,Object])},previewSrcList:{type:ie(Array),default:()=>ke([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),kt={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>pe(n),close:()=>!0,show:()=>!0},Ct=["src","loading"],Et={key:0},It={name:"ElImage",inheritAttrs:!1},St=te({...It,props:yt,emits:kt,setup(n,{emit:r}){const s=n;let i="";const{t:P}=Ce(),C=ve("image"),u=Ze(),z=Ke(),S=I(),h=I(!1),b=I(!0),y=I(!1),p=I(),m=I(),f=A&&"loading"in HTMLImageElement.prototype;let D,R;const o=g(()=>u.style),K=g(()=>{const{fit:t}=s;return A&&t?{objectFit:t}:{}}),X=g(()=>{const{previewSrcList:t}=s;return Array.isArray(t)&&t.length>0}),ae=g(()=>{const{previewSrcList:t,initialIndex:l}=s;let k=l;return l>t.length-1&&(k=0),k}),M=g(()=>s.loading==="eager"?!1:!f&&s.loading==="lazy"||s.lazy),U=()=>{!A||(b.value=!0,h.value=!1,S.value=s.src)};function oe(t){b.value=!1,h.value=!1,r("load",t)}function ne(t){b.value=!1,h.value=!0,r("error",t)}function G(){ct(p.value,m.value)&&(U(),j())}const Q=qe(G,200);async function W(){var t;if(!A)return;await Ee();const{scrollContainer:l}=s;Ge(l)?m.value=l:Qe(l)&&l!==""?m.value=(t=document.querySelector(l))!=null?t:void 0:p.value&&(m.value=ft(p.value)),m.value&&(D=H(m,"scroll",Q),setTimeout(()=>G(),100))}function j(){!A||!m.value||!Q||(D==null||D(),m.value=void 0)}function q(t){if(!!t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function J(){!X.value||(R=H("wheel",q,{passive:!1}),i=document.body.style.overflow,document.body.style.overflow="hidden",y.value=!0,r("show"))}function $(){R==null||R(),document.body.style.overflow=i,y.value=!1,r("close")}function a(t){r("switch",t)}return ue(()=>s.src,()=>{M.value?(b.value=!0,h.value=!1,j(),W()):U()}),me(()=>{M.value?W():U()}),(t,l)=>(_(),B("div",{ref_key:"container",ref:p,class:w([e(C).b(),t.$attrs.class]),style:ce(e(o))},[S.value!==void 0&&!h.value?(_(),B("img",Se({key:0},e(z),{src:S.value,loading:t.loading,style:e(K),class:[e(C).e("inner"),e(X)&&e(C).e("preview"),b.value&&e(C).is("loading")],onClick:J,onLoad:oe,onError:ne}),null,16,Ct)):E("v-if",!0),b.value||h.value?(_(),B("div",{key:1,class:w(e(C).e("wrapper"))},[b.value?Y(t.$slots,"placeholder",{key:0},()=>[d("div",{class:w(e(C).e("placeholder"))},null,2)]):h.value?Y(t.$slots,"error",{key:1},()=>[d("div",{class:w(e(C).e("error"))},de(e(P)("el.image.error")),3)]):E("v-if",!0)],2)):E("v-if",!0),e(X)?(_(),B(ee,{key:2},[y.value?(_(),Z(e(bt),{key:0,"z-index":t.zIndex,"initial-index":e(ae),infinite:t.infinite,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:$,onSwitch:a},{default:v(()=>[t.$slots.viewer?(_(),B("div",Et,[Y(t.$slots,"viewer")])):E("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):E("v-if",!0)],64)):E("v-if",!0)],6))}});var Lt=ge(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const zt=we(Lt),$t=fe({trigger:he.trigger,placement:re.placement,disabled:he.disabled,visible:F.visible,transition:F.transition,popperOptions:re.popperOptions,tabindex:re.tabindex,content:F.content,popperStyle:F.popperStyle,popperClass:F.popperClass,enterable:{...F.enterable,default:!0},effect:{...F.effect,default:"light"},teleported:F.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Bt={"update:visible":n=>Je(n),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Nt={name:"ElPopover"},Ot=te({...Nt,props:$t,emits:Bt,setup(n,{expose:r,emit:s}){const i=n,P="onUpdate:visible",C=g(()=>i[P]),u=ve("popover"),z=I(),S=g(()=>{var o;return(o=e(z))==null?void 0:o.popperRef}),h=g(()=>[{width:et(i.width)},i.popperStyle]),b=g(()=>[u.b(),i.popperClass,{[u.m("plain")]:!!i.content}]),y=g(()=>i.transition==="el-fade-in-linear"),p=()=>{var o;(o=z.value)==null||o.hide()},m=()=>{s("before-enter")},f=()=>{s("before-leave")},D=()=>{s("after-enter")},R=()=>{s("update:visible",!1),s("after-leave")};return r({popperRef:S,hide:p}),(o,K)=>(_(),Z(e(tt),Se({ref_key:"tooltipRef",ref:z},o.$attrs,{trigger:o.trigger,placement:o.placement,disabled:o.disabled,visible:o.visible,transition:o.transition,"popper-options":o.popperOptions,tabindex:o.tabindex,content:o.content,offset:o.offset,"show-after":o.showAfter,"hide-after":o.hideAfter,"auto-close":o.autoClose,"show-arrow":o.showArrow,"aria-label":o.title,effect:o.effect,enterable:o.enterable,"popper-class":e(b),"popper-style":e(h),teleported:o.teleported,persistent:o.persistent,"gpu-acceleration":e(y),"onUpdate:visible":e(C),onBeforeShow:m,onBeforeHide:f,onShow:D,onHide:R}),{content:v(()=>[o.title?(_(),B("div",{key:0,class:w(e(u).e("title")),role:"title"},de(o.title),3)):E("v-if",!0),Y(o.$slots,"default",{},()=>[Le(de(o.content),1)])]),default:v(()=>[o.$slots.reference?Y(o.$slots,"reference",{key:0}):E("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Tt=ge(Ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const ye=(n,r)=>{const s=r.arg||r.value,i=s==null?void 0:s.popperRef;i&&(i.triggerRef=n)};var At={mounted(n,r){ye(n,r)},updated(n,r){ye(n,r)}};const Pt="popover",Rt=st(At,Pt),Ft=we(Tt,{directive:Rt});const Dt=at({id:"message",state:()=>({messageCount:0}),actions:{getMessages(){setTimeout(()=>{this.messageCount=1},3e3)}}}),se=n=>(rt("data-v-07fe4500"),n=n(),it(),n),Mt={class:"message-content"},Vt=se(()=>d("div",{class:"message-header"},[d("div",{class:"title"},"\u6D88\u606F\u4E2D\u5FC3")],-1)),xt={class:"message-info"},Ht=se(()=>d("div",{class:"message-tit"},"\u6B22\u8FCE\u767B\u5F55\u7BA1\u7406\u5E73\u53F0",-1)),Yt=se(()=>d("div",{class:"message-des"},"\u8BF7\u53CA\u65F6\u4FEE\u6539\u767B\u5F55\u5BC6\u7801",-1)),Xt={class:"message-dt"},Ut=Le(" 2022-12-12 14:14 "),Wt={class:"view-all"},jt=se(()=>d("span",null,"\u67E5\u770B\u5168\u90E8",-1)),Zt={class:"menu-btn"},Kt=te({__name:"message",setup(n){const r=Dt(),s=g(()=>r.messageCount);return me(()=>{r.getMessages()}),(i,P)=>{const C=zt,u=be("Clock"),z=T,S=nt,h=lt,b=be("Bell"),y=ot,p=Ft;return _(),Z(p,{width:320,trigger:"click",placement:"bottom-end","popper-class":"message-popper"},{reference:v(()=>[d("div",Zt,[c(y,{"is-dot":"",class:"item",hidden:e(s)<=0},{default:v(()=>[c(z,{size:22},{default:v(()=>[c(b)]),_:1})]),_:1},8,["hidden"])])]),default:v(()=>[d("div",Mt,[Vt,c(S,{class:"message-list-box","max-height":"260px"},{default:v(()=>[(_(),B(ee,null,Ie([1,2,3,4,5],m=>d("div",{class:"message-list-item",key:m},[c(C,{class:"img",src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}),d("div",xt,[Ht,Yt,d("div",Xt,[c(z,null,{default:v(()=>[c(u)]),_:1}),Ut])])])),64))]),_:1}),d("div",Wt,[c(h,{icon:"go"}),jt])])]),_:1})}}});const Qt=ut(Kt,[["__scopeId","data-v-07fe4500"]]);export{Qt as default};
