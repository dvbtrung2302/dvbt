(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{38:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(6);a(39);t.a=function(e){var t=e.type,a=e.title,n=e.icon,r=e.url;return l.a.createElement("div",{className:"Button"},function(){switch(t){case"button":return l.a.createElement("button",{type:"submit"},l.a.createElement("p",null,a),n);case"download":return l.a.createElement("a",{href:r,download:!0},l.a.createElement("p",null,a),n);default:return l.a.createElement(c.b,{to:r||""},l.a.createElement("p",null,a),n)}}())}},39:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(42),l=a(58),c=a(14),r=a(0),o=a.n(r),s=a(59),m=a.n(s),i=a(3),u=(a(77),a(13)),p=a(38);t.default=function(){var e=Object(r.useState)({}),t=Object(c.a)(e,2),a=t[0],s=t[1],f=Object(r.useState)(""),d=Object(c.a)(f,2),E=d[0],h=d[1],b=Object(r.useState)(!1),g=Object(c.a)(b,2),v=g[0],y=g[1];Object(r.useEffect)((function(){document.title="Contact - Bao Trung Personal Portfolio"}));var w=[{icon:o.a.createElement(i.e,{size:40}),header:"mail me",content:"dvbtrung23@gmail.com"},{icon:o.a.createElement(i.n,{size:40}),header:"call me",content:"0906 366 223"}],N=[{icon:o.a.createElement(i.g,null),title:"Facebook",href:"https://www.facebook.com/baotrungne/"},{icon:o.a.createElement(i.p,null),title:"Twitter",href:"https://twitter.com/ngVBoTrung1"},{icon:o.a.createElement(i.l,null),title:"Instagram",href:"https://www.instagram.com/dvbtrung_/"},{icon:o.a.createElement(i.i,null),title:"Github",href:"https://github.com/dvbtrung2302"}],j=function(e){e.preventDefault(),s(Object(l.a)({},a,Object(n.a)({},e.target.name,e.target.value)))};return o.a.createElement("div",{className:"Contact container"},o.a.createElement("div",{className:"row d-flex justify-content-center"},o.a.createElement(u.a,{header:{bg:"contact",main:"get in",sub:"touch"}})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"title"},"don't be shy !"),o.a.createElement("p",{className:"contact-p"},"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."),o.a.createElement("div",null,w.map((function(e){return o.a.createElement("div",{className:"info",key:e.header},e.icon,o.a.createElement("div",{className:"main"},o.a.createElement("div",null,e.header),o.a.createElement("div",null,e.content)))}))),o.a.createElement("ul",{className:"socials"},N.map((function(e){return o.a.createElement("li",{key:e.title},o.a.createElement("a",{target:"blank",href:e.href,title:e.title},e.icon))})))),o.a.createElement("div",{className:"col-lg-8 mb-5"},o.a.createElement("form",{className:"contact-form row",onSubmit:function(e){e.preventDefault(),y(!0),m.a.post("https://dvbt-porfolio.herokuapp.com/api/form",a).then((function(e){s({}),h("The message has been sent successfully!"),y(!1)})).catch((function(e){h("The message has been sent unsuccessfully!")}))}},o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("input",{value:a.name||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your name",name:"name",type:"text"})),o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("input",{value:a.email||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your email",name:"email",type:"email"})),o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("input",{value:a.subject||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your subject",name:"subject",type:"text"})),o.a.createElement("div",{className:"form-group col-12"},o.a.createElement("textarea",{value:a.message||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your message",name:"message",type:"text"})),o.a.createElement("div",{className:"col-12 mb-3",style:{color:"The message has been sent successfully!"===E?"#155724":"#721c24",display:E?"block":"none"}},E),o.a.createElement("div",{className:"col-lg-12 align-items-center d-flex"},v?o.a.createElement("div",{class:"spinner-border",role:"status",style:{color:"var(--main-color)"}},o.a.createElement("span",{class:"sr-only"},"Loading...")):o.a.createElement(p.a,{type:"button",title:"send message",icon:o.a.createElement(i.m,null)}))))))}}}]);
//# sourceMappingURL=6.96881650.chunk.js.map