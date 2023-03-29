"use strict";(self.webpackChunkmlyn_react=self.webpackChunkmlyn_react||[]).push([[227],{7227:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});e(2791);var i,a,r,c,s=e(168),o=e(6444),d=e(1087),p=o.ZP.div(i||(i=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: 700px 500px;\n  grid-gap: 10px;\n  grid-auto-flow: dense;\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: repeat(1, 1fr);\n    grid-auto-rows: 250px;\n  }\n"]))),l=o.ZP.div(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  &:hover .text {\n    opacity: 1;\n   animation: move-down 0.3s linear;\n    padding: 1em;\n    width: 90%;\n    @keyframes move-down {\n      0% {\n        top: 10%;\n      }\n      50% {\n        top: 35%;\n      }\n      100% {\n        top: 50%;\n      }\n    }\n  }\n  &.w-1 {\n    grid-column: span 1;\n  }\n  &.w-2 {\n    grid-column: span 2;\n  }\n  &.w-3 {\n    grid-column: span 3;\n  }\n  &.w-4 {\n    grid-column: span 4;\n  }\n\n  @media screen and (max-width: 600px) {\n    &.w-2 {\n      grid-column: span 1;\n    }\n    &.w-3 {\n      grid-column: span 1;\n    }\n    &.w-4 {\n      grid-column: span 1;\n    }\n  }\n"]))),f=(0,o.ZP)(d.rU)(r||(r=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  & img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: 50% 50%;\n    cursor: pointer;\n    transition: 0.5s ease-in-out;\n  }\n  &:hover img {\n    transform: scale(0.9);\n  }\n"]))),u=o.ZP.div(c||(c=(0,s.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #f0eeee;\n  font-size: 25px;\n  pointer-events: none;\n  z-index: 4;\n backdrop-filter: blur(20px) saturate(1.8);\n \n"]))),m=e(7689),g=e(5243),x=e(184),h=function(){return(0,x.jsx)("div",{style:{margin:"0 auto",minHeight:"170 ",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"400"},children:(0,x.jsx)(g.g4,{height:"170",position:"center",width:"80",radius:"9",color:"orange",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},b=e(2606),j=[{id:1,src:e(6384),title:"idealist"},{id:2,src:e(5813),title:"riverside"},{id:3,src:e(3700),title:"club house"},{id:4,src:e(9774),title:"Office in the center of Irpen"},{id:5,src:e(3998),title:"house d28"},{id:6,src:e(7628),title:"naikrashchyi"},{id:7,src:e(8134),title:"office block Unit City"},{id:8,src:e(4359),title:"office for AVG"},{id:9,src:e(3021),title:"z 132"},{id:10,src:e(4682),title:"GT.APT"},{id:11,src:e(9592),title:"rybalsky"},{id:12,src:e(2942),title:"Drigani furniture"},{id:13,src:e(2526),title:"private house. Lytizh"},{id:14,src:e(9122),title:"4x4"},{id:15,src:e(5712),title:"club house3"},{id:16,src:e(347),title:"club house"}];function w(t){return[2,3,5,6,7,10,11,12,13,14,15].includes(t)?"w-1":[1,8,9].includes(t)?"w-2":4===t?"w-3":16===t?"w-4":""}function v(){var t=(0,m.TH)();return(0,x.jsx)(b.W,{children:(0,x.jsx)(p,{className:"gallery-container",children:j.map((function(n){var e=n.id,i=n.src,a=n.title;return(0,x.jsx)(l,{className:"gallery-item ".concat(w(e)),children:(0,x.jsxs)(f,{to:"/works/".concat(e),state:{from:t},className:"image",children:[i?(0,x.jsx)("img",{src:i,alt:"office"}):(0,x.jsx)(h,{}),(0,x.jsx)(u,{className:"text",children:a})]})},e)}))})})}var y=function(){return(0,x.jsx)(v,{})}},6384:function(t,n,e){t.exports=e.p+"static/media/title.1745f4c2ab88455b1b0d.jpg"},5813:function(t,n,e){t.exports=e.p+"static/media/title.47788845c7f576234bd2.jpg"},347:function(t,n,e){t.exports=e.p+"static/media/title.66b68fe331569079afd7.jpg"},9774:function(t,n,e){t.exports=e.p+"static/media/title.e4056f14a5bafa02e478.jpg"},3998:function(t,n,e){t.exports=e.p+"static/media/title.f243bd3f9fe181f636c6.jpg"},7628:function(t,n,e){t.exports=e.p+"static/media/title.08fa4f2e7d019018ace9.jpg"},8134:function(t,n,e){t.exports=e.p+"static/media/title.f4b09e27e676cafcb5eb.jpg"},4359:function(t,n,e){t.exports=e.p+"static/media/title.0649a7b3117b6a6f31f1.jpg"},3021:function(t,n,e){t.exports=e.p+"static/media/title.f47bac58686f069b09f6.jpg"},4682:function(t,n,e){t.exports=e.p+"static/media/title.365ac6edd2f4c51c9ce0.jpg"},9592:function(t,n,e){t.exports=e.p+"static/media/title.b5b325d599707784d680.jpg"},2942:function(t,n,e){t.exports=e.p+"static/media/title.a174e30d9bb99d781b25.jpg"},2526:function(t,n,e){t.exports=e.p+"static/media/title.661837c66e6de659e798.jpg"},9122:function(t,n,e){t.exports=e.p+"static/media/title.ccea34186bdd82ce2866.jpg"},5712:function(t,n,e){t.exports=e.p+"static/media/title.0f9c6ed1e609174d3081.jpg"},3700:function(t,n,e){t.exports=e.p+"static/media/title.437795ceda17e176aaf2.jpg"}}]);
//# sourceMappingURL=227.aab4433c.chunk.js.map