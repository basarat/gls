(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/demos/index.tsx":function(t,e,n){"use strict";n.r(e),n.d(e,"BlueDiv",function(){return b}),n.d(e,"PinkDiv",function(){return d}),n.d(e,"Label",function(){return s}),n.d(e,"Input",function(){return a}),n.d(e,"buttonClass",function(){return c}),n.d(e,"Button",function(){return u});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),i=n.n(l),h=n("./node_modules/typestyle/lib.es2015/index.js"),b=function(t){return i.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:t.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var d=function(t){return i.a.createElement("div",{style:{backgroundColor:"lightpink"},children:t.children})};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var r=h.style({}),s=function(t){return i.a.createElement("label",{className:r,children:t.children})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var g=h.style({width:"calc(100% - 5px)",fontSize:"20px"}),a=function(t){return i.a.createElement("input",{className:g})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var c=h.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var u=function(t){t.className;var e=Object(o.a)(t,["className"]);return i.a.createElement("button",Object.assign({},e,{type:"button",className:h.classes(c,t.className)}))};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/grid.mdx":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),h=n("./src/index.tsx"),b=n("./src/demos/index.tsx"),d={},r="wrapper";function s(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(l.b)(r,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"grid"},"Grid"),Object(l.b)("p",null,"Lays out children in a vertically + horizontally spaced layout. You normally use it with fixed size children as shown below:"),Object(l.b)(i.c,{__position:0,__code:"<Grid>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:i.c,Grid:h.e,Content:h.a,demos:b},mdxType:"Playground"},Object(l.b)(h.e,{mdxType:"Grid"},Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("h2",{id:"spacing"},"Spacing"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"})," /** \n   * Minimum spacing between children\n   */\n  spacing?:\n    | CSSLength\n    | [/** Vertical */ CSSLength, /** Horizontal */ CSSLength]\n")),Object(l.b)("p",null,"Example (",Object(l.b)("inlineCode",{parentName:"p"},"vertical spacing=40px, horizontal spacing=20px"),"): "),Object(l.b)(i.c,{__position:1,__code:"<Grid spacing={[40, 20]}>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:i.c,Grid:h.e,Content:h.a,demos:b},mdxType:"Playground"},Object(l.b)(h.e,{spacing:[40,20],mdxType:"Grid"},Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("h2",{id:"justify"},"Justify"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n   * Controls how the extra space around the children is handled\n   */\n  justify?:\n  /** Controls by content */\n  | 'left' /** default */\n  | 'center'\n  | 'right'\n  /** Controls by space */\n  | 'space-between'\n  | 'space-around'\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We've seen the default ",Object(l.b)("inlineCode",{parentName:"p"},"left")," already (the extra space gets put on the right). We cover the rest below.")),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"center")," (the extra space gets put around the content):"),Object(l.b)(i.c,{__position:2,__code:"<Grid justify=\"center\">\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:i.c,Grid:h.e,Content:h.a,demos:b},mdxType:"Playground"},Object(l.b)(h.e,{justify:"center",mdxType:"Grid"},Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"right")," (the extra space gets put at the left): "),Object(l.b)(i.c,{__position:3,__code:"<Grid justify=\"right\">\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:i.c,Grid:h.e,Content:h.a,demos:b},mdxType:"Playground"},Object(l.b)(h.e,{justify:"right",mdxType:"Grid"},Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"space-between")," (the extra space goes between items): "),Object(l.b)(i.c,{__position:4,__code:"<Grid justify=\"space-between\">\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:i.c,Grid:h.e,Content:h.a,demos:b},mdxType:"Playground"},Object(l.b)(h.e,{justify:"space-between",mdxType:"Grid"},Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"space-around")," (the extra space goes around items): "),Object(l.b)(i.c,{__position:5,__code:"<Grid justify=\"space-around\">\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:i.c,Grid:h.e,Content:h.a,demos:b},mdxType:"Playground"},Object(l.b)(h.e,{justify:"space-around",mdxType:"Grid"},Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(h.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("h2",{id:"baseprops"},"BaseProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Grid")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Grid")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/grid.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-grid.838f410c851688f28ace.js.map