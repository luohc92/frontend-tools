import{af as P,W as pe,X as ie,aj as ke,e as fe,m as te,be as he,bf as ze,bg as Be,ap as Ce,p as ve,bh as $e,r as I,bi as Ne,aq as Te,c as g,w as ue,n as Ee,a5 as me,q as h,s as q,S as c,v,x as d,D as b,A as e,ad as Ae,I as E,a6 as A,ah as Oe,B as $,bj as Re,bk as Fe,F as ee,bl as Pe,bm as De,J as Me,bn as Ve,bo as xe,a8 as Ie,y as He,an as Ye,K as ce,E as Y,ai as Xe,bp as je,_ as ge,bq as le,at as x,br as H,bs as Ue,N as be,a0 as We,ab as Se,H as de,ag as qe,d as Ze,bt as Ke,bu as _e,bv as re,Z as R,g as Ge,b2 as Je,G as Le,R as Qe,bw as et,bx as tt,aw as we,by as st,a9 as at,bc as ot,b6 as nt,b7 as lt,bd as rt}from"./index.d95277e9.js";import{u as it}from"./index.2d26ab0c.js";import{g as ut}from"./scroll.e76ac619.js";const ct=(l,u)=>{if(!P||!l||!u)return!1;const a=l.getBoundingClientRect();let r;return u instanceof Element?r=u.getBoundingClientRect():r={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},a.top<r.bottom&&a.bottom>r.top&&a.right>r.left&&a.left<r.right},dt=()=>P&&/firefox/i.test(window.navigator.userAgent),pt=pe({urlList:{type:ie(Array),default:()=>ke([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),ft={close:()=>!0,switch:l=>fe(l)},vt=["src"],mt={name:"ElImageViewer"},gt=te({...mt,props:pt,emits:ft,setup(l,{emit:u}){const a=l,r={CONTAIN:{name:"contain",icon:he(ze)},ORIGINAL:{name:"original",icon:he(Be)}},D=dt()?"DOMMouseScroll":"mousewheel",{t:C}=Ce(),i=ve("image-viewer"),{nextZIndex:z}=$e(),S=I(),_=I([]),w=Ne(),y=I(!0),f=I(a.initialIndex),m=Te(r.CONTAIN),p=I({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),F=g(()=>{const{urlList:s}=a;return s.length<=1}),O=g(()=>f.value===0),o=g(()=>f.value===a.urlList.length-1),Z=g(()=>a.urlList[f.value]),X=g(()=>{const{scale:s,deg:t,offsetX:n,offsetY:k,enableTransition:N}=p.value;let L=n/s,T=k/s;switch(t%360){case 90:case-270:[L,T]=[T,-L];break;case 180:case-180:[L,T]=[-L,-T];break;case 270:case-90:[L,T]=[-T,L];break}const V={transform:`scale(${s}) rotate(${t}deg) translate(${L}px, ${T}px)`,transition:N?"transform .3s":""};return m.value.name===r.CONTAIN.name&&(V.maxWidth=V.maxHeight="100%"),V}),ae=g(()=>fe(a.zIndex)?a.zIndex:z());function M(){oe(),u("close")}function j(){const s=le(n=>{switch(n.code){case x.esc:a.closeOnPressEscape&&M();break;case x.space:W();break;case x.left:J();break;case x.up:B("zoomIn");break;case x.right:Q();break;case x.down:B("zoomOut");break}}),t=le(n=>{(n.wheelDelta?n.wheelDelta:-n.detail)>0?B("zoomIn",{zoomRate:1.2,enableTransition:!1}):B("zoomOut",{zoomRate:1.2,enableTransition:!1})});w.run(()=>{H(document,"keydown",s),H(document,D,t)})}function oe(){w.stop()}function ne(){y.value=!1}function K(s){y.value=!1,s.target.alt=C("el.image.error")}function G(s){if(y.value||s.button!==0||!S.value)return;p.value.enableTransition=!1;const{offsetX:t,offsetY:n}=p.value,k=s.pageX,N=s.pageY,L=le(V=>{p.value={...p.value,offsetX:t+V.pageX-k,offsetY:n+V.pageY-N}}),T=H(document,"mousemove",L);H(document,"mouseup",()=>{T()}),s.preventDefault()}function U(){p.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function W(){if(y.value)return;const s=Ue(r),t=Object.values(r),n=m.value.name,N=(t.findIndex(L=>L.name===n)+1)%s.length;m.value=r[s[N]],U()}function J(){if(O.value&&!a.infinite)return;const s=a.urlList.length;f.value=(f.value-1+s)%s}function Q(){if(o.value&&!a.infinite)return;const s=a.urlList.length;f.value=(f.value+1)%s}function B(s,t={}){if(y.value)return;const{zoomRate:n,rotateDeg:k,enableTransition:N}={zoomRate:1.4,rotateDeg:90,enableTransition:!0,...t};switch(s){case"zoomOut":p.value.scale>.2&&(p.value.scale=Number.parseFloat((p.value.scale/n).toFixed(3)));break;case"zoomIn":p.value.scale<7&&(p.value.scale=Number.parseFloat((p.value.scale*n).toFixed(3)));break;case"clockwise":p.value.deg+=k;break;case"anticlockwise":p.value.deg-=k;break}p.value.enableTransition=N}return ue(Z,()=>{Ee(()=>{const s=_.value[0];s!=null&&s.complete||(y.value=!0)})}),ue(f,s=>{U(),u("switch",s)}),me(()=>{var s,t;j(),(t=(s=S.value)==null?void 0:s.focus)==null||t.call(s)}),(s,t)=>(h(),q(je,{to:"body",disabled:!s.teleported},[c(Xe,{name:"viewer-fade",appear:""},{default:v(()=>[d("div",{ref_key:"wrapper",ref:S,tabindex:-1,class:b(e(i).e("wrapper")),style:ce({zIndex:e(ae)})},[d("div",{class:b(e(i).e("mask")),onClick:t[0]||(t[0]=Ae(n=>s.hideOnClickModal&&M(),["self"]))},null,2),E(" CLOSE "),d("span",{class:b([e(i).e("btn"),e(i).e("close")]),onClick:M},[c(e(A),null,{default:v(()=>[c(e(Oe))]),_:1})],2),E(" ARROW "),e(F)?E("v-if",!0):(h(),$(ee,{key:0},[d("span",{class:b([e(i).e("btn"),e(i).e("prev"),e(i).is("disabled",!s.infinite&&e(O))]),onClick:J},[c(e(A),null,{default:v(()=>[c(e(Re))]),_:1})],2),d("span",{class:b([e(i).e("btn"),e(i).e("next"),e(i).is("disabled",!s.infinite&&e(o))]),onClick:Q},[c(e(A),null,{default:v(()=>[c(e(Fe))]),_:1})],2)],64)),E(" ACTIONS "),d("div",{class:b([e(i).e("btn"),e(i).e("actions")])},[d("div",{class:b(e(i).e("actions__inner"))},[c(e(A),{onClick:t[1]||(t[1]=n=>B("zoomOut"))},{default:v(()=>[c(e(Pe))]),_:1}),c(e(A),{onClick:t[2]||(t[2]=n=>B("zoomIn"))},{default:v(()=>[c(e(De))]),_:1}),d("i",{class:b(e(i).e("actions__divider"))},null,2),c(e(A),{onClick:W},{default:v(()=>[(h(),q(Me(e(m).icon)))]),_:1}),d("i",{class:b(e(i).e("actions__divider"))},null,2),c(e(A),{onClick:t[3]||(t[3]=n=>B("anticlockwise"))},{default:v(()=>[c(e(Ve))]),_:1}),c(e(A),{onClick:t[4]||(t[4]=n=>B("clockwise"))},{default:v(()=>[c(e(xe))]),_:1})],2)],2),E(" CANVAS "),d("div",{class:b(e(i).e("canvas"))},[(h(!0),$(ee,null,Ie(s.urlList,(n,k)=>He((h(),$("img",{ref_for:!0,ref:N=>_.value[k]=N,key:n,src:n,style:ce(e(X)),class:b(e(i).e("img")),onLoad:ne,onError:K,onMousedown:G},null,46,vt)),[[Ye,k===f.value]])),128))],2),Y(s.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var bt=ge(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ht=be(bt),_t=pe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:ie([String,Object])},previewSrcList:{type:ie(Array),default:()=>ke([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),wt={load:l=>l instanceof Event,error:l=>l instanceof Event,switch:l=>fe(l),close:()=>!0,show:()=>!0},yt=["src","loading"],kt={key:0},Ct={name:"ElImage",inheritAttrs:!1},Et=te({...Ct,props:_t,emits:wt,setup(l,{emit:u}){const a=l;let r="";const{t:D}=Ce(),C=ve("image"),i=We(),z=it(),S=I(),_=I(!1),w=I(!0),y=I(!1),f=I(),m=I(),p=P&&"loading"in HTMLImageElement.prototype;let F,O;const o=g(()=>i.style),Z=g(()=>{const{fit:t}=a;return P&&t?{objectFit:t}:{}}),X=g(()=>{const{previewSrcList:t}=a;return Array.isArray(t)&&t.length>0}),ae=g(()=>{const{previewSrcList:t,initialIndex:n}=a;let k=n;return n>t.length-1&&(k=0),k}),M=g(()=>a.loading==="eager"?!1:!p&&a.loading==="lazy"||a.lazy),j=()=>{!P||(w.value=!0,_.value=!1,S.value=a.src)};function oe(t){w.value=!1,_.value=!1,u("load",t)}function ne(t){w.value=!1,_.value=!0,u("error",t)}function K(){ct(f.value,m.value)&&(j(),W())}const G=Ke(K,200);async function U(){var t;if(!P)return;await Ee();const{scrollContainer:n}=a;qe(n)?m.value=n:Ze(n)&&n!==""?m.value=(t=document.querySelector(n))!=null?t:void 0:f.value&&(m.value=ut(f.value)),m.value&&(F=H(m,"scroll",G),setTimeout(()=>K(),100))}function W(){!P||!m.value||!G||(F==null||F(),m.value=void 0)}function J(t){if(!!t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function Q(){!X.value||(O=H("wheel",J,{passive:!1}),r=document.body.style.overflow,document.body.style.overflow="hidden",y.value=!0,u("show"))}function B(){O==null||O(),document.body.style.overflow=r,y.value=!1,u("close")}function s(t){u("switch",t)}return ue(()=>a.src,()=>{M.value?(w.value=!0,_.value=!1,W(),U()):j()}),me(()=>{M.value?U():j()}),(t,n)=>(h(),$("div",{ref_key:"container",ref:f,class:b([e(C).b(),t.$attrs.class]),style:ce(e(o))},[S.value!==void 0&&!_.value?(h(),$("img",Se({key:0},e(z),{src:S.value,loading:t.loading,style:e(Z),class:[e(C).e("inner"),e(X)&&e(C).e("preview"),w.value&&e(C).is("loading")],onClick:Q,onLoad:oe,onError:ne}),null,16,yt)):E("v-if",!0),w.value||_.value?(h(),$("div",{key:1,class:b(e(C).e("wrapper"))},[w.value?Y(t.$slots,"placeholder",{key:0},()=>[d("div",{class:b(e(C).e("placeholder"))},null,2)]):_.value?Y(t.$slots,"error",{key:1},()=>[d("div",{class:b(e(C).e("error"))},de(e(D)("el.image.error")),3)]):E("v-if",!0)],2)):E("v-if",!0),e(X)?(h(),$(ee,{key:2},[y.value?(h(),q(e(ht),{key:0,"z-index":t.zIndex,"initial-index":e(ae),infinite:t.infinite,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:B,onSwitch:s},{default:v(()=>[t.$slots.viewer?(h(),$("div",kt,[Y(t.$slots,"viewer")])):E("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):E("v-if",!0)],64)):E("v-if",!0)],6))}});var It=ge(Et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const St=be(It),Lt=pe({trigger:_e.trigger,placement:re.placement,disabled:_e.disabled,visible:R.visible,transition:R.transition,popperOptions:re.popperOptions,tabindex:re.tabindex,content:R.content,popperStyle:R.popperStyle,popperClass:R.popperClass,enterable:{...R.enterable,default:!0},effect:{...R.effect,default:"light"},teleported:R.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),zt={"update:visible":l=>Ge(l),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Bt={name:"ElPopover"},$t=te({...Bt,props:Lt,emits:zt,setup(l,{expose:u,emit:a}){const r=l,D="onUpdate:visible",C=g(()=>r[D]),i=ve("popover"),z=I(),S=g(()=>{var o;return(o=e(z))==null?void 0:o.popperRef}),_=g(()=>[{width:Je(r.width)},r.popperStyle]),w=g(()=>[i.b(),r.popperClass,{[i.m("plain")]:!!r.content}]),y=g(()=>r.transition==="el-fade-in-linear"),f=()=>{var o;(o=z.value)==null||o.hide()},m=()=>{a("before-enter")},p=()=>{a("before-leave")},F=()=>{a("after-enter")},O=()=>{a("update:visible",!1),a("after-leave")};return u({popperRef:S,hide:f}),(o,Z)=>(h(),q(e(Qe),Se({ref_key:"tooltipRef",ref:z},o.$attrs,{trigger:o.trigger,placement:o.placement,disabled:o.disabled,visible:o.visible,transition:o.transition,"popper-options":o.popperOptions,tabindex:o.tabindex,content:o.content,offset:o.offset,"show-after":o.showAfter,"hide-after":o.hideAfter,"auto-close":o.autoClose,"show-arrow":o.showArrow,"aria-label":o.title,effect:o.effect,enterable:o.enterable,"popper-class":e(w),"popper-style":e(_),teleported:o.teleported,persistent:o.persistent,"gpu-acceleration":e(y),"onUpdate:visible":e(C),onBeforeShow:m,onBeforeHide:p,onShow:F,onHide:O}),{content:v(()=>[o.title?(h(),$("div",{key:0,class:b(e(i).e("title")),role:"title"},de(o.title),3)):E("v-if",!0),Y(o.$slots,"default",{},()=>[Le(de(o.content),1)])]),default:v(()=>[o.$slots.reference?Y(o.$slots,"reference",{key:0}):E("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Nt=ge($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const ye=(l,u)=>{const a=u.arg||u.value,r=a==null?void 0:a.popperRef;r&&(r.triggerRef=l)};var Tt={mounted(l,u){ye(l,u)},updated(l,u){ye(l,u)}};const At="popover",Ot=et(Tt,At),Rt=be(Nt,{directive:Ot});const Ft=tt({id:"message",state:()=>({messageCount:0}),actions:{getMessages(){setTimeout(()=>{this.messageCount=1},3e3)}}}),se=l=>(nt("data-v-07fe4500"),l=l(),lt(),l),Pt={class:"message-content"},Dt=se(()=>d("div",{class:"message-header"},[d("div",{class:"title"},"\u6D88\u606F\u4E2D\u5FC3")],-1)),Mt={class:"message-info"},Vt=se(()=>d("div",{class:"message-tit"},"\u6B22\u8FCE\u767B\u5F55\u7BA1\u7406\u5E73\u53F0",-1)),xt=se(()=>d("div",{class:"message-des"},"\u8BF7\u53CA\u65F6\u4FEE\u6539\u767B\u5F55\u5BC6\u7801",-1)),Ht={class:"message-dt"},Yt=Le(" 2022-12-12 14:14 "),Xt={class:"view-all"},jt=se(()=>d("span",null,"\u67E5\u770B\u5168\u90E8",-1)),Ut={class:"menu-btn"},Wt=te({__name:"message",setup(l){const u=Ft(),a=g(()=>u.messageCount);return me(()=>{u.getMessages()}),(r,D)=>{const C=St,i=we("Clock"),z=A,S=at,_=ot,w=we("Bell"),y=st,f=Rt;return h(),q(f,{width:320,trigger:"click",placement:"bottom-end","popper-class":"message-popper"},{reference:v(()=>[d("div",Ut,[c(y,{"is-dot":"",class:"item",hidden:e(a)<=0},{default:v(()=>[c(z,{size:22},{default:v(()=>[c(w)]),_:1})]),_:1},8,["hidden"])])]),default:v(()=>[d("div",Pt,[Dt,c(S,{class:"message-list-box","max-height":"260px"},{default:v(()=>[(h(),$(ee,null,Ie([1,2,3,4,5],m=>d("div",{class:"message-list-item",key:m},[c(C,{class:"img",src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}),d("div",Mt,[Vt,xt,d("div",Ht,[c(z,null,{default:v(()=>[c(i)]),_:1}),Yt])])])),64))]),_:1}),d("div",Xt,[c(_,{icon:"go"}),jt])])]),_:1})}}});const Gt=rt(Wt,[["__scopeId","data-v-07fe4500"]]);export{Gt as default};