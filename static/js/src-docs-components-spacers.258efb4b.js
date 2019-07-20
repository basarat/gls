(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"BlueDiv",function(){return c}),n.d(t,"PinkDiv",function(){return l}),n.d(t,"Label",function(){return p}),n.d(t,"Input",function(){return d}),n.d(t,"buttonClass",function(){return u}),n.d(t,"Button",function(){return m});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),a=n.n(i),s=n("./node_modules/typestyle/lib.es2015/index.js"),c=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var l=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var r=s.style({}),p=function(e){return a.a.createElement("label",{className:r,children:e.children})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var b=s.style({width:"calc(100% - 5px)",fontSize:"20px"}),d=function(e){return a.a.createElement("input",{className:b})};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var u=s.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var m=function(e){e.className;var t=Object(o.a)(e,["className"]);return a.a.createElement("button",Object.assign({},t,{type:"button",className:s.classes(u,e.className)}))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/spacers.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/index.tsx"),c=n("./src/demos/index.tsx"),l={},r="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(r,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"spacers"},"Spacers"),Object(i.b)("p",null,"Spacers are used to add ",Object(i.b)("em",{parentName:"p"},"space")," to your designs. Spacers should not be abused, but they can be super handy. Consider a simple button on the screen: "),Object(i.b)(a.c,{__position:0,__code:"<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("p",null,"Let's say the design wants you to add some space on top of the button. You can do that easily with ",Object(i.b)("inlineCode",{parentName:"p"},"margin-top"),": "),Object(i.b)(a.c,{__position:1,__code:"<demos.Button style={{ marginTop: '25px' }}>\n  Just a button minding its own business\n</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(c.Button,{style:{marginTop:"25px"}},"Just a button minding its own business")),Object(i.b)("p",null,"We've covered issues with using margin (specifically their collapsing nature which makes them hard to manage and maintain reliably) in our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing-principle"),". Another issue is in the future this ",Object(i.b)("inlineCode",{parentName:"p"},"marginTop")," can easily get lost in code reviews. "),Object(i.b)("p",null,"So instead you can use a simple ",Object(i.b)("inlineCode",{parentName:"p"},"VerticalSpace"),", which doesn't collapse (i.e. magically disappear), and shows up in code reviews: "),Object(i.b)(a.c,{__position:2,__code:"<VerticalSpace space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(s.h,{space:25,mdxType:"VerticalSpace"}),Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("h1",{id:"horizontalspace"},"HorizontalSpace"),Object(i.b)("p",null,"Takes the ",Object(i.b)("inlineCode",{parentName:"p"},"space?:CSSLength")," prop to generate a horizontal space. e.g. you can see the button pushed a bit to the right by a ",Object(i.b)("inlineCode",{parentName:"p"},"HorizontalSpace"),": "),Object(i.b)(a.c,{__position:3,__code:"<HorizontalSpace space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(s.e,{space:25,mdxType:"HorizontalSpace"}),Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("h1",{id:"verticalspace"},"VerticalSpace"),Object(i.b)("p",null,"Takes the ",Object(i.b)("inlineCode",{parentName:"p"},"space?:CSSLength")," prop to generate a vertical space. e.g. you can see the button pushed a bit to the bottom by a ",Object(i.b)("inlineCode",{parentName:"p"},"VerticalSpace"),": "),Object(i.b)(a.c,{__position:4,__code:"<VerticalSpace space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(s.h,{space:25,mdxType:"VerticalSpace"}),Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("h1",{id:"flexspace"},"FlexSpace"),Object(i.b)("p",null,"Takes the ",Object(i.b)("inlineCode",{parentName:"p"},"flex?:number")," prop (",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"flex ratio concept covered in sizing principle"),") to generate a flex amount of space."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FlexSpace")," comes really handy when you want to split items to the sides (left & right) with a flex space in between as shown below:"),Object(i.b)(a.c,{__position:5,__code:"<Horizontal>\n  <demos.Button>On left</demos.Button>\n  <FlexSpace />\n  <demos.Button>On right</demos.Button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(s.d,{mdxType:"Horizontal"},Object(i.b)(c.Button,null,"On left"),Object(i.b)(s.c,{mdxType:"FlexSpace"}),Object(i.b)(c.Button,null,"On right"))),Object(i.b)("p",null,"Here is a button pushed to the bottom of its parent ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," by a preceding ",Object(i.b)("inlineCode",{parentName:"p"},"FlexSpace"),": "),Object(i.b)(a.c,{__position:6,__code:"<Vertical height={100}>\n  <FlexSpace />\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Vertical>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(s.g,{height:100,mdxType:"Vertical"},Object(i.b)(s.c,{mdxType:"FlexSpace"}),Object(i.b)(c.Button,null,"Just a button minding its own business"))),Object(i.b)("p",null,"And here is a button pushed to the right of its parent ",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," by a preceding ",Object(i.b)("inlineCode",{parentName:"p"},"FlexSpace"),": "),Object(i.b)(a.c,{__position:7,__code:"<Horizontal>\n  <FlexSpace />\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(s.d,{mdxType:"Horizontal"},Object(i.b)(s.c,{mdxType:"FlexSpace"}),Object(i.b)(c.Button,null,"Just a button minding its own business"))),Object(i.b)("p",null,"Note that when don't want to split items (all child items are grouped together), you can use the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"alignment properties")," on ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical"),"/",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," to achieve the same effect (no ",Object(i.b)("inlineCode",{parentName:"p"},"FlexSpace")," in the below example):"),Object(i.b)(a.c,{__position:8,__code:'<Horizontal horizontalAlign="right">\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Horizontal>',__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.g,Horizontal:s.d,FlexSpace:s.c,VerticalSpace:s.h,HorizontalSpace:s.e,demos:c},mdxType:"Playground"},Object(i.b)(s.d,{horizontalAlign:"right",mdxType:"Horizontal"},Object(i.b)(c.Button,null,"Just a button minding its own business"))))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/spacers.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-spacers.8f8b35594e271c1d7a66.js.map