(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"Star",function(){return o}),n.d(t,"BlueDiv",function(){return s}),n.d(t,"PinkDiv",function(){return c}),n.d(t,"Label",function(){return u}),n.d(t,"Input",function(){return p}),n.d(t,"buttonClass",function(){return m}),n.d(t,"Button",function(){return f}),n.d(t,"DemoProfile",function(){return j});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),a=n.n(r),l=n("./node_modules/typestyle/lib.es2015/index.js"),o=function(){var e="https://ghbtns.com/github-btn.html?user=basarat&repo=gls&type=star&count=true";return a.a.createElement("div",{style:{marginTop:"20px"}},a.a.createElement("a",{style:{marginRight:"15px"},href:e,target:"_blank"},"Powered by your \u2b50s"),a.a.createElement("iframe",{src:e,style:{border:"none",marginBottom:"-3px"},scrolling:"0",width:"170px",height:"20px"}))};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Star",filename:"src/demos/index.tsx"}});var s=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var c=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var b=l.style({}),u=function(e){return a.a.createElement("label",{className:b,children:e.children})};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var d=l.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return a.a.createElement("input",{className:d})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var m=l.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var f=function(e){e.className;var t=Object(i.a)(e,["className"]);return a.a.createElement("button",Object.assign({},t,{type:"button",className:l.classes(m,e.className)}))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}});var j=function(e){var t=e.size;return a.a.createElement("img",{style:{borderRadius:"50%",width:"".concat(t,"px"),height:"".concat(t,"px")},src:"http://placekitten.com/g/".concat(t,"/").concat(t)})};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DemoProfile",filename:"src/demos/index.tsx"}})},"./src/docs/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./src/demos/index.tsx"),l={},o="wrapper";function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(o,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(a.Star,null),Object(r.b)("h1",{id:"general-layout-system"},"General Layout System"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"gls")," is a simple (but powerful) general purpose layout system for React \ud83c\udf39. "),Object(r.b)("p",null,"Having been a part of a fair share of component libraries, this library isolates the layout system from past efforts. This library allows you to offload the ",Object(r.b)("em",{parentName:"p"},"layout")," portion of building your team's own component library system \u2764\ufe0f."),Object(r.b)("h1",{id:"installation"},"Installation"),Object(r.b)("p",null,"Install ",Object(r.b)("inlineCode",{parentName:"p"},"gls")," along with its peer dependencies: ",Object(r.b)("inlineCode",{parentName:"p"},"react")," (for html) and ",Object(r.b)("inlineCode",{parentName:"p"},"typestyle")," (for css):"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"npm i gls react typestyle\n")),Object(r.b)("h1",{id:"css-principles"},"CSS principles"),Object(r.b)("p",null,"There are a few key CSS principles developed with gls. These ideas are designed to help build maintainable layouts in the world of components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"./principle-spacing/"}),"Spacing principle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"./principle-sizing/"}),"Sizing principle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"./principle-scrolling/"}),"Scrolling principle"))),Object(r.b)("h1",{id:"components"},"Components"),Object(r.b)("p",null,"All our components are just browser native react tags (default ",Object(r.b)("inlineCode",{parentName:"p"},"div"),") with atomic CSS generated by typestyle. The layout system is powered by pure (and minimal) CSS resulting in high performance while still providing excellent developer ergonomics."),Object(r.b)("p",null,"You can now jump to individual docs and demos using the sidebar. View them in order (recommended \ud83d\udc4d\ud83c\udffb) or jump to whatever catches your eye \ud83d\udd76."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/index.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-index.ab787d50e7bf9c598fd9.js.map