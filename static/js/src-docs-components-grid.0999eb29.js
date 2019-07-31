(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/docs/components/grid.mdx":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),h=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/index.tsx"),b=n("./src/demos/index.tsx"),d={},g="wrapper";function s(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(l.b)(g,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)(b.Star,null),Object(l.b)("h1",{id:"grid"},"Grid"),Object(l.b)("p",null,"Lays out children in a vertically + horizontally spaced layout. You normally use it with fixed size children as shown below:"),Object(l.b)(h.c,{__position:1,__code:"<Grid>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:h.c,Grid:i.e,Content:i.a,demos:b},mdxType:"Playground"},Object(l.b)(i.e,{mdxType:"Grid"},Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("h2",{id:"spacing"},"Spacing"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"})," /** \n   * Minimum spacing between children\n   */\n  spacing?:\n    | CSSLength\n    | [/** Vertical */ CSSLength, /** Horizontal */ CSSLength]\n")),Object(l.b)("p",null,"Example (",Object(l.b)("inlineCode",{parentName:"p"},"vertical spacing=40px, horizontal spacing=20px"),"): "),Object(l.b)(h.c,{__position:2,__code:"<Grid spacing={[40, 20]}>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:h.c,Grid:i.e,Content:i.a,demos:b},mdxType:"Playground"},Object(l.b)(i.e,{spacing:[40,20],mdxType:"Grid"},Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Default ",Object(l.b)("inlineCode",{parentName:"p"},"vertical")," and ",Object(l.b)("inlineCode",{parentName:"p"},"horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../defaults/"}),"spacing is 24px"),".")),Object(l.b)("h2",{id:"justify"},"Justify"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"})," /** \n   * Controls how the extra space around the children is handled\n   */\n  justify?:\n  /** Controls by child placement */\n  | 'left' /** default */\n  | 'center'\n  | 'right'\n  /** Controls by space */\n  | 'space-between'\n  | 'space-around'\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We've seen the default ",Object(l.b)("inlineCode",{parentName:"p"},"left")," already (the extra space gets put on the right). We cover the rest below.")),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"center")," (the extra space gets put around the children):"),Object(l.b)(h.c,{__position:3,__code:"<Grid justify=\"center\">\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:h.c,Grid:i.e,Content:i.a,demos:b},mdxType:"Playground"},Object(l.b)(i.e,{justify:"center",mdxType:"Grid"},Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"right")," (the extra space gets put at the left): "),Object(l.b)(h.c,{__position:4,__code:"<Grid justify=\"right\">\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={180}\n    height={200}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:h.c,Grid:i.e,Content:i.a,demos:b},mdxType:"Playground"},Object(l.b)(i.e,{justify:"right",mdxType:"Grid"},Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:180,height:200,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"space-between")," (the extra space goes between items): "),Object(l.b)(h.c,{__position:5,__code:"<Grid justify=\"space-between\">\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:h.c,Grid:i.e,Content:i.a,demos:b},mdxType:"Playground"},Object(l.b)(i.e,{justify:"space-between",mdxType:"Grid"},Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"space-around")," (the extra space goes around items): "),Object(l.b)(h.c,{__position:6,__code:"<Grid justify=\"space-around\">\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n  <Content\n    width={145}\n    height={145}\n    style={{ backgroundColor: 'lightskyblue' }}\n  >\n    Item\n  </Content>\n</Grid>",__scope:{props:this?this.props:n,Playground:h.c,Grid:i.e,Content:i.a,demos:b},mdxType:"Playground"},Object(l.b)(i.e,{justify:"space-around",mdxType:"Grid"},Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"),Object(l.b)(i.a,{width:145,height:145,style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Item"))),Object(l.b)("h2",{id:"baseprops"},"BaseProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Grid")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Grid")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/grid.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-grid.bba782d11fe1f6c8f5ff.js.map