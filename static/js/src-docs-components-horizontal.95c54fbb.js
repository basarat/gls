(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/docs/components/horizontal.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),a=n("./src/demos/index.tsx"),c={},b="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(b,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(a.Star,null),Object(l.b)("h1",{id:"horizontal"},"Horizontal"),Object(l.b)("p",null,"Lays out children in a horiztonally spaced layout (",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../defaults/"}),"default spacing is 24px"),")."),Object(l.b)(i.c,{__position:1,__code:"<Horizontal>\n  <Stretch style={{ backgroundColor: 'lightskyblue' }}>Hello</Stretch>\n  <Stretch style={{ backgroundColor: 'lightpink' }}>World</Stretch>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.j,Stretch:r.h,Content:r.b,StretchSpacer:r.i,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{mdxType:"Horizontal"},Object(l.b)(r.h,{style:{backgroundColor:"lightskyblue"},mdxType:"Stretch"},"Hello"),Object(l.b)(r.h,{style:{backgroundColor:"lightpink"},mdxType:"Stretch"},"World"))),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," follows the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s easily. The following example has two ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s in a ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(Horizontal(blue,pink),Horizontal(blue,pink))")," heirarchy but to the user it looks seemless (like a single ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(blue,pink,blue,pink)"),"). This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(l.b)(i.c,{__position:2,__code:"<Horizontal>\n  <Horizontal sizing=\"stretch\">\n    <Stretch style={{ backgroundColor: 'lightskyblue' }}>Hello</Stretch>\n    <Stretch style={{ backgroundColor: 'lightpink' }}>World</Stretch>\n  </Horizontal>\n  <Horizontal sizing=\"stretch\">\n    <Stretch style={{ backgroundColor: 'lightskyblue' }}>Hello</Stretch>\n    <Stretch style={{ backgroundColor: 'lightpink' }}>World</Stretch>\n  </Horizontal>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.j,Stretch:r.h,Content:r.b,StretchSpacer:r.i,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{mdxType:"Horizontal"},Object(l.b)(r.e,{sizing:"stretch",mdxType:"Horizontal"},Object(l.b)(r.h,{style:{backgroundColor:"lightskyblue"},mdxType:"Stretch"},"Hello"),Object(l.b)(r.h,{style:{backgroundColor:"lightpink"},mdxType:"Stretch"},"World")),Object(l.b)(r.e,{sizing:"stretch",mdxType:"Horizontal"},Object(l.b)(r.h,{style:{backgroundColor:"lightskyblue"},mdxType:"Stretch"},"Hello"),Object(l.b)(r.h,{style:{backgroundColor:"lightpink"},mdxType:"Stretch"},"World")))),Object(l.b)("h2",{id:"alignment"},"Alignment"),Object(l.b)("p",null,"By default ",Object(l.b)("inlineCode",{parentName:"p"},"horizontalAlign:left")," and ",Object(l.b)("inlineCode",{parentName:"p"},"verticalAlign:stretch"),". It helps you write simple horizontal layouts that start horizontally at left and fill the vertical space completely: "),Object(l.b)(i.c,{__position:3,__code:"<Horizontal height={60}>\n  <Content verticalAlign=\"center\" style={{ backgroundColor: 'lightskyblue' }}>\n    Hello\n  </Content>\n  <Content verticalAlign=\"center\" style={{ backgroundColor: 'lightpink' }}>\n    World\n  </Content>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.j,Stretch:r.h,Content:r.b,StretchSpacer:r.i,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{height:60,mdxType:"Horizontal"},Object(l.b)(r.b,{verticalAlign:"center",style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Hello"),Object(l.b)(r.b,{verticalAlign:"center",style:{backgroundColor:"lightpink"},mdxType:"Content"},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign?: 'stretch' /** default */ | 'top' | 'center' | 'bottom' | 'baseline'")," Controls vertical alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign='top'")," gives us:")),Object(l.b)(i.c,{__position:4,__code:"<Horizontal verticalAlign=\"top\" height={60}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.j,Stretch:r.h,Content:r.b,StretchSpacer:r.i,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{verticalAlign:"top",height:60,mdxType:"Horizontal"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign?: 'left' /** default */ | 'center' | 'right'")," Controls horizontal alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign='right'")," gives us:")),Object(l.b)(i.c,{__position:5,__code:'<Horizontal horizontalAlign="right" height={60}>\n  <Content verticalAlign="center" style={{ backgroundColor: \'lightskyblue\' }}>\n    Hello\n  </Content>\n  <Content verticalAlign="center" style={{ backgroundColor: \'lightpink\' }}>\n    World\n  </Content>\n</Horizontal>',__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.j,Stretch:r.h,Content:r.b,StretchSpacer:r.i,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{horizontalAlign:"right",height:60,mdxType:"Horizontal"},Object(l.b)(r.b,{verticalAlign:"center",style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Hello"),Object(l.b)(r.b,{verticalAlign:"center",style:{backgroundColor:"lightpink"},mdxType:"Content"},"World"))),Object(l.b)("h2",{id:"spacing"},"Spacing"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports ",Object(l.b)("inlineCode",{parentName:"a"},"spacing")),"."),Object(l.b)("h2",{id:"baseprops"},"BaseProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."),Object(l.b)("h2",{id:"reverse"},"Reverse"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," takes ",Object(l.b)("inlineCode",{parentName:"p"},"reverse")," prop that lays out its children in ",Object(l.b)("em",{parentName:"p"},"reverse")," order of how they appear in the dom. "),Object(l.b)("p",null,"Common use case: With bottom of the form ",Object(l.b)("inlineCode",{parentName:"p"},"previous ---- next")," buttons, ",Object(l.b)("inlineCode",{parentName:"p"},"reverse")," allows you to have tab order be intutive while the layout being visually appealing: "),Object(l.b)(i.c,{__position:6,__code:"<Vertical spacing={5}>\n  <input />\n  <Horizontal reverse={true}>\n    <button>Next</button>\n    <button>Reset</button>\n    <StretchSpacer />\n    <button>Back</button>\n  </Horizontal>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.j,Stretch:r.h,Content:r.b,StretchSpacer:r.i,demos:a},mdxType:"Playground"},Object(l.b)(r.j,{spacing:5,mdxType:"Vertical"},Object(l.b)("input",null),Object(l.b)(r.e,{reverse:!0,mdxType:"Horizontal"},Object(l.b)("button",null,"Next"),Object(l.b)("button",null,"Reset"),Object(l.b)(r.i,{mdxType:"StretchSpacer"}),Object(l.b)("button",null,"Back")))),Object(l.b)("h2",{id:"tip-baseline"},"Tip: Baseline"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"verticalAlign: 'baseline'")," is really useful with mixed font sizes:"),Object(l.b)(i.c,{__position:7,__code:"<Horizontal verticalAlign=\"baseline\" height={60} spacing={0}>\n  <div style={{ fontSize: '24px' }}>$100</div>\n  <div style={{ fontSize: '16px' }}>/month</div>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.j,Stretch:r.h,Content:r.b,StretchSpacer:r.i,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{verticalAlign:"baseline",height:60,spacing:0,mdxType:"Horizontal"},Object(l.b)("div",{style:{fontSize:"24px"}},"$100"),Object(l.b)("div",{style:{fontSize:"16px"}},"/month"))))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/horizontal.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-horizontal.7c8a2f80c8728a5cd398.js.map