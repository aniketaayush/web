_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"8aGg":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),i=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,i=e.className,l=Object(o.a)(e,["classes","className"]);return r.createElement("span",Object(n.a)({className:Object(s.a)(a.root,i),ref:t},l))}));t.a=Object(i.a)((function(e){return{root:{width:2,backgroundColor:e.palette.grey[400],flexGrow:1}}}),{name:"MuiTimelineConnector"})(l)},CKDk:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),i=a("NqtD"),l=a("H2TA"),c=a("l0AW"),u=a("eI/F"),d=r.forwardRef((function(e,t){var a=e.classes,l=e.className,d=Object(o.a)(e,["classes","className"]),p=r.useContext(c.a).align,f=void 0===p?"left":p,m=r.useContext(u.a).classes,g=void 0===m?{}:m;return r.createElement("div",Object(n.a)({className:Object(s.a)(a.root,g.content,a["align".concat(Object(i.a)(f))],l),ref:t},d))}));t.a=Object(l.a)((function(){return{root:{flex:1,padding:"6px 16px"},alignRight:{textAlign:"right"}}}),{name:"MuiTimelineContent"})(d)},Evdv:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("5Yp1"),s=a("R/WZ"),i=a("PsJY"),l=a("OvNQ"),c=a("djpt"),u=a("8aGg"),d=a("CKDk"),p=a("MLBd"),f=a("mPFD"),m=a("mQs5"),g=a.n(m),b=a("kKAo"),x=a("ofer"),v=a("Ji2X"),h=o.a.createElement,w=Object(s.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},date:{margin:"5px",color:"white",fontSize:"1rem"},content:{margin:"5px",textAlign:"left"}}}));t.default=function(){var e=w();return h(r.a,{title:"PIL | Join Us",active:"Join Us"},h(x.a,{className:"pageHeader"},"Become a member of PES Innovation Lab"),h(v.a,null),h(v.a,null,h(i.a,{align:"alternate"},[{step:"1",step_name:"Keep your eyes peeled",step_desc:"Lookout for posters on campus and social media posts"},{step:"2",step_name:"Register",step_desc:"Once you see a post, register for the recruitment process"},{step:"3",step_name:"Show us what you are made of",step_desc:"Compete with your peers in an aptitude challenge"},{step:"4",step_name:"Show us your passion",step_desc:"Show us how much engineering and problem-solving excites you"},{step:"5",step_name:"Formalities",step_desc:"Wait for further announcements and complete any formalities"},{step:"6",step_name:"Yay! All Done",step_desc:"If you get selected, welcome to PES Innovation Lab! If you didn't, don't worry! We look forward to seeing you the following year!"}].map((function(t){return h(l.a,null,h(p.a,null,h(x.a,{variant:"body2",className:e.date},["Step",t.step].join(" "))),h(c.a,null,h(f.a,{style:{color:"white",backgroundColor:"green"}},h(g.a,null)),h(u.a,null)),h(d.a,null,h(b.a,{elevation:3,className:e.paper},h(x.a,{variant:"h5",component:"h1",className:e.content},h("strong",null,t.step_name)),h(x.a,{variant:"h6",component:"h1",className:e.content},t.step_desc))))})))))}},MLBd:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),i=a("NqtD"),l=a("H2TA"),c=a("l0AW"),u=a("eI/F"),d=r.forwardRef((function(e,t){var a=e.classes,l=e.className,d=Object(o.a)(e,["classes","className"]),p=r.useContext(c.a).align,f=void 0===p?"left":p,m=r.useContext(u.a).classes,g=void 0===m?{}:m;return r.createElement("div",Object(n.a)({className:Object(s.a)(a.root,g.oppositeContent,a["align".concat(Object(i.a)(f))],l),ref:t},d))}));d.muiName="TimelineOppositeContent",t.a=Object(l.a)((function(){return{root:{padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},alignRight:{textAlign:"left"}}}),{name:"MuiTimelineOppositeContent"})(d)},OvNQ:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),i=a("ucBr"),l=a("NqtD"),c=a("H2TA"),u=a("l0AW"),d=a("eI/F"),p=r.forwardRef((function(e,t){var a=e.classes,c=e.className,p=Object(o.a)(e,["classes","className"]),f=r.useContext(u.a).align,m=void 0===f?"left":f,g=!1;return r.Children.forEach(e.children,(function(e){Object(i.a)(e,["TimelineOppositeContent"])&&(g=!0)})),r.createElement(d.a.Provider,{value:{classes:{content:a.content,oppositeContent:a.oppositeContent}}},r.createElement("li",Object(n.a)({className:Object(s.a)(a.root,a["align".concat(Object(l.a)(m))],c,!g&&a.missingOppositeContent),ref:t},p)))}));t.a=Object(c.a)((function(){return{root:{listStyle:"none",display:"flex",position:"relative",minHeight:70},alignLeft:{},alignRight:{flexDirection:"row-reverse"},alignAlternate:{"&:nth-child(even)":{flexDirection:"row-reverse","& $content":{textAlign:"right"},"& $oppositeContent":{textAlign:"left"}}},missingOppositeContent:{"&:before":{content:'""',flex:1,padding:"6px 16px"}},content:{},oppositeContent:{}}}),{name:"MuiTimelineItem"})(p)},PsJY:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),i=a("NqtD"),l=a("H2TA"),c=a("l0AW"),u=r.forwardRef((function(e,t){var a=e.align,l=void 0===a?"left":a,u=e.classes,d=e.className,p=Object(o.a)(e,["align","classes","className"]);return r.createElement(c.a.Provider,{value:{align:l}},r.createElement("ul",Object(n.a)({className:Object(s.a)(u.root,u["align".concat(Object(i.a)(l))],d),ref:t},p)))}));t.a=Object(l.a)((function(){return{root:{display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1},alignLeft:{},alignRight:{},alignAlternate:{}}}),{name:"MuiTimeline"})(u)},c4oM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/join_us",function(){return a("Evdv")}])},djpt:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),i=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,i=e.className,l=Object(o.a)(e,["classes","className"]);return r.createElement("div",Object(n.a)({className:Object(s.a)(a.root,i),ref:t},l))}));t.a=Object(i.a)((function(){return{root:{display:"flex",flexDirection:"column",flex:0,alignItems:"center"}}}),{name:"MuiTimelineSeparator"})(l)},"eI/F":function(e,t,a){"use strict";var n=a("q1tI"),o=n.createContext({});t.a=o},l0AW:function(e,t,a){"use strict";var n=a("q1tI"),o=n.createContext({});t.a=o},mPFD:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),i=a("NqtD"),l=a("H2TA"),c=r.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.color,u=void 0===c?"grey":c,d=e.variant,p=void 0===d?"default":d,f=Object(o.a)(e,["classes","className","color","variant"]);return r.createElement("span",Object(n.a)({className:Object(s.a)(a.root,l,"inherit"!==u&&a["".concat(p).concat(Object(i.a)(u))]),ref:t},f))}));t.a=Object(l.a)((function(e){return{root:{display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:e.shadows[2],marginTop:8,marginBottom:8},defaultGrey:{borderColor:"transparent",color:e.palette.grey[50],backgroundColor:e.palette.grey[400]},outlinedGrey:{boxShadow:"none",color:e.palette.grey.contrastText,borderColor:e.palette.grey[400],backgroundColor:"transparent"},defaultPrimary:{borderColor:"transparent",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},outlinedPrimary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.primary.main},defaultSecondary:{borderColor:"transparent",color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},outlinedSecondary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.secondary.main}}}),{name:"MuiTimelineDot"})(c)},mQs5:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=r}},[["c4oM",0,2,1,3,5,4]]]);