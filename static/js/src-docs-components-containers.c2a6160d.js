(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/demos/index.tsx":function(e,n,t){"use strict";t.r(n),t.d(n,"BlueDiv",function(){return l}),t.d(n,"PinkDiv",function(){return c}),t.d(n,"Label",function(){return b}),t.d(n,"Input",function(){return p}),t.d(n,"buttonClass",function(){return u}),t.d(n,"Button",function(){return m});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),a=t.n(i),r=t("./node_modules/typestyle/lib.es2015/index.js"),l=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var c=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=r.style({}),b=function(e){return a.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var d=r.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return a.a.createElement("input",{className:d})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var u=r.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var m=function(e){e.className;var n=Object(o.a)(e,["className"]);return a.a.createElement("button",Object.assign({},n,{type:"button",className:r.classes(u,e.className)}))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/containers.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=t("./node_modules/docz/dist/index.esm.js"),r=t("./src/index.tsx"),l=t("./src/demos/index.tsx"),c={},s="wrapper";function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(s,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"containers"},"Containers"),Object(i.b)("p",null,"We have two general purpose ",Object(i.b)("em",{parentName:"p"},"single child")," containers ",Object(i.b)("inlineCode",{parentName:"p"},"Flex")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Content"),". The ideas of ",Object(i.b)("em",{parentName:"p"},"flex")," and ",Object(i.b)("em",{parentName:"p"},"content")," are explained in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),". If you have more than one child item, you probably want to use something like a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../vertical/"}),"Vertical")," or ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../horizontal/"}),"Horizontal"),"."),Object(i.b)("h1",{id:"flex"},"Flex"),Object(i.b)("p",null,"Flexes into the parent container."),Object(i.b)("p",null,"In the example below, we have an explicit sized ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(i.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner ",Object(i.b)("inlineCode",{parentName:"p"},"Flex")," (background ",Object(i.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner ",Object(i.b)("inlineCode",{parentName:"p"},"Flex")," keeps its size to match that of the outer container (observed below as you don't see the background of the parent as it is filled in by the child)."),Object(i.b)(a.c,{__position:0,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Flex style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Flex>\n</Vertical>",__scope:{props:this?this.props:t,Playground:a.c,Vertical:r.h,Horizontal:r.e,Flex:r.b,Content:r.a,demos:l},mdxType:"Playground"},Object(i.b)(r.h,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)(r.b,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking up all the space from the parent"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sizing?: number")," prop allows you to control the flex ratio (concept covered in ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),") eg. a 1,2 ratio (",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal(Flex:1,Flex:2)"),") is shown below:"),Object(i.b)(a.c,{__position:1,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking 1\n  </Flex>\n  <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n    I'm taking 2\n  </Flex>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:a.c,Vertical:r.h,Horizontal:r.e,Flex:r.b,Content:r.a,demos:l},mdxType:"Playground"},Object(i.b)(r.e,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(i.b)(r.b,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking 1"),Object(i.b)(r.b,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"I'm taking 2"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/containers.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-containers.488356fa0c2f483a7a07.js.map