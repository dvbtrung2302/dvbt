(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{38:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(6);t(39);a.a=function(e){var a=e.type,t=e.title,n=e.icon,r=e.url;return c.a.createElement("div",{className:"Button"},function(){switch(a){case"button":return c.a.createElement("button",{type:"submit"},c.a.createElement("p",null,t),n);case"download":return c.a.createElement("a",{href:r,download:!0},c.a.createElement("p",null,t),n);default:return c.a.createElement(l.b,{to:r||""},c.a.createElement("p",null,t),n)}}())}},39:function(e,a,t){},40:function(e,a,t){"use strict";var n=t(0),c=t.n(n);t(41);a.a=function(e){var a=e.type;return c.a.createElement("div",{className:"about"===a?"MobileAvatar d-block d-sm-none":"MobileAvatar d-none d-xl-none d-md-block"})}},41:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(3),r=(t(52),t(13)),m=t(38),s=(t(53),function(e){var a=e.item;return c.a.createElement("div",{className:"Achievement"},c.a.createElement("h3",{className:"amount"},a.amount),c.a.createElement("div",{className:"text"},a.text,c.a.createElement("p",null,a.subText)))}),o=t(40),i=(t(54),function(e){var a=e.skill;return c.a.createElement("div",{className:"Skill"},c.a.createElement("div",{className:"percent"},c.a.createElement("svg",null,c.a.createElement("circle",{cx:"70",cy:"70",r:"70"}),c.a.createElement("circle",{cx:"70",cy:"70",r:"70",style:{strokeDashoffset:parseInt("-calc(440 - (440 * ".concat(a.percent,")) / 100)"))<0?"-calc(440 - (440 * ".concat(a.percent,") / 100)"):"calc(440 - (440 * ".concat(a.percent,") / 100)")}})),c.a.createElement("div",{className:"number"},c.a.createElement("h2",null,a.percent,"%"))),c.a.createElement("div",{className:"text"},a.name))}),u=(t(55),function(e){var a=e.icon,t=e.time,n=e.text,l=e.place,r=e.des;return c.a.createElement("div",{className:"Experience"},c.a.createElement("div",{className:"icon"},a),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"time"},t),c.a.createElement("div",{className:"text"},n,c.a.createElement("span",null,l)),c.a.createElement("p",{className:"des"},r)))});a.default=function(){Object(n.useEffect)((function(){document.title="About - Bao Trung Personal Portfolio"}));var e=[{key:"first name",value:"Dang"},{key:"last name",value:"Trung"},{key:"age",value:"20 Years"},{key:"nationality",value:"Viet Nam"},{key:"freelance",value:"Available"},{key:"address",value:"Ho Chi Minh"},{key:"phone",value:"0906366223"},{key:"email",value:"dvbtrung23@gmail.com"},{key:"instagram",value:"dvbtrung_"},{key:"languages",value:"Vietnamese, English"}],a=[{icon:c.a.createElement(l.j,null),time:"2018-present",text:"engineering degree",place:"University of Information Technology",des:"Learn Information Technology, major in Information System"}];return c.a.createElement("div",{className:"About container"},c.a.createElement("div",{className:"row d-flex justify-content-center"},c.a.createElement(r.a,{header:{bg:"resume",main:"about",sub:"me"}})),c.a.createElement("div",{className:"row info"},c.a.createElement("div",{className:"col-12 col-xl-6 mb-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"title col-12"},"personal infos"),c.a.createElement("div",{className:"col-12 mb-3"},c.a.createElement(o.a,{type:"about"})),c.a.createElement("ul",{className:"col-6"},e.slice(0,5).map((function(e){return c.a.createElement("li",{key:e.key},c.a.createElement("span",null,e.key,": "),c.a.createElement("span",{className:"d-block d-sm-inline-block"},e.value))}))),c.a.createElement("ul",{className:"col-6"},e.slice(5,10).map((function(e){return c.a.createElement("li",{key:e.key},c.a.createElement("span",null,e.key,": "),c.a.createElement("span",{className:"d-block d-sm-inline-block"},e.value))}))),c.a.createElement("div",{className:"col"},c.a.createElement(m.a,{type:"download",url:"https://res.cloudinary.com/dofqucuyy/image/upload/v1596724684/portfolio/CV.pdf",title:"download cv",icon:c.a.createElement(l.d,null)})))),c.a.createElement("div",{className:"col-12 col-xl-6"},c.a.createElement("div",{className:"row"},[{amount:"1",text:"years of",subText:"experience"},{amount:"5",text:"completed",subText:"projects"},{amount:"0",text:"happy",subText:"customers"},{amount:"0",text:"awards",subText:"won"}].map((function(e){return c.a.createElement("div",{key:e.text,className:"col-6"},c.a.createElement(s,{item:e}))}))))),c.a.createElement("hr",{className:"separator"}),c.a.createElement("div",{className:"row skill"},c.a.createElement("div",{className:"col-12 title text-center mb-5"},"my skills"),[{name:"html",percent:90},{name:"css",percent:85},{name:"javascript",percent:75},{name:"react",percent:60},{name:"nodejs",percent:45},{name:"expressjs",percent:45},{name:"mongodb",percent:45},{name:"c++",percent:60}].map((function(e){return c.a.createElement("div",{key:e.name,className:"col-6 col-md-3"},c.a.createElement(i,{skill:e}))}))),c.a.createElement("hr",{className:"separator"}),c.a.createElement("div",{className:"row experience mb-5"},c.a.createElement("div",{className:"col-12 title text-center mb-5"},"experience & education"),a.map((function(e){return c.a.createElement("div",{key:e.des,className:"col-12 col-md-6"},c.a.createElement(u,{icon:e.icon,time:e.time,text:e.text,place:e.place,des:e.des}))}))))}}}]);
//# sourceMappingURL=4.8d1a5564.chunk.js.map