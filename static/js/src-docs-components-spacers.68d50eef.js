(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/docs/components/spacers.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/index.tsx"),c=n("./src/demos/index.tsx"),p={},r="wrapper";function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(r,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.Star,null),Object(i.b)("h1",{id:"spacer"},"Spacer"),Object(i.b)("p",null,"Spacers add ",Object(i.b)("em",{parentName:"p"},"space")," to your designs. Spacers should not be abused, but they can be super handy. Consider a simple button on the screen: "),Object(i.b)(a.c,{__position:1,__code:"<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("p",null,"Let's say the design wants you to add some space on top of the button. You can do that easily with ",Object(i.b)("inlineCode",{parentName:"p"},"margin-top"),": "),Object(i.b)(a.c,{__position:2,__code:"<demos.Button style={{ marginTop: '25px' }}>\n  Just a button minding its own business\n</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(c.Button,{style:{marginTop:"25px"}},"Just a button minding its own business")),Object(i.b)("p",null,"We've covered issues with using margin (specifically their collapsing nature which makes them hard to manage and maintain reliably) in our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing-principle"),". Another issue is that ",Object(i.b)("inlineCode",{parentName:"p"},"marginTop")," can easily get lost in code reviews. "),Object(i.b)("p",null,"So instead you can use a simple ",Object(i.b)("inlineCode",{parentName:"p"},"VerticalSpacer"),", which doesn't collapse (i.e. magically disappear), and shows up in code reviews: "),Object(i.b)(a.c,{__position:3,__code:"<VerticalSpacer space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(s.j,{space:25,mdxType:"VerticalSpacer"}),Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("h1",{id:"horizontalspacer"},"HorizontalSpacer"),Object(i.b)("p",null,"Takes the ",Object(i.b)("inlineCode",{parentName:"p"},"space?:CSSLength")," prop to generate a horizontal space. e.g. you can see the button pushed a bit to the right by a ",Object(i.b)("inlineCode",{parentName:"p"},"HorizontalSpacer"),": "),Object(i.b)(a.c,{__position:4,__code:"<HorizontalSpacer space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(s.g,{space:25,mdxType:"HorizontalSpacer"}),Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("h1",{id:"verticalspacer"},"VerticalSpacer"),Object(i.b)("p",null,"Takes the ",Object(i.b)("inlineCode",{parentName:"p"},"space?:CSSLength")," prop to generate a vertical space. e.g. you can see the button pushed a bit to the bottom by a ",Object(i.b)("inlineCode",{parentName:"p"},"VerticalSpacer"),": "),Object(i.b)(a.c,{__position:5,__code:"<VerticalSpacer space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(s.j,{space:25,mdxType:"VerticalSpacer"}),Object(i.b)(c.Button,null,"Just a button minding its own business")),Object(i.b)("h1",{id:"flexspacer"},"FlexSpacer"),Object(i.b)("p",null,"Takes the ",Object(i.b)("inlineCode",{parentName:"p"},"sizing?:number")," prop (",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"flex ratio concept covered in sizing principle"),") to generate a flex amount of space."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FlexSpacer")," comes really handy when you want to split items to the sides (left & right) with a flex space in between as shown below:"),Object(i.b)(a.c,{__position:6,__code:"<Horizontal>\n  <demos.Button>On left</demos.Button>\n  <FlexSpacer />\n  <demos.Button>On right</demos.Button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(s.f,{mdxType:"Horizontal"},Object(i.b)(c.Button,null,"On left"),Object(i.b)(s.c,{mdxType:"FlexSpacer"}),Object(i.b)(c.Button,null,"On right"))),Object(i.b)("p",null,"Here is a button pushed to the bottom of its parent ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," by a preceding ",Object(i.b)("inlineCode",{parentName:"p"},"FlexSpacer"),": "),Object(i.b)(a.c,{__position:7,__code:"<Vertical height={100}>\n  <FlexSpacer />\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Vertical>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(s.i,{height:100,mdxType:"Vertical"},Object(i.b)(s.c,{mdxType:"FlexSpacer"}),Object(i.b)(c.Button,null,"Just a button minding its own business"))),Object(i.b)("p",null,"And here is a button pushed to the right of its parent ",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," by a preceding ",Object(i.b)("inlineCode",{parentName:"p"},"FlexSpacer"),": "),Object(i.b)(a.c,{__position:8,__code:"<Horizontal>\n  <FlexSpacer />\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(s.f,{mdxType:"Horizontal"},Object(i.b)(s.c,{mdxType:"FlexSpacer"}),Object(i.b)(c.Button,null,"Just a button minding its own business"))),Object(i.b)("p",null,"Note that when don't want to split items (all child items are grouped together), you can use the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"alignment properties")," on ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical"),"/",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," to achieve the same effect (no ",Object(i.b)("inlineCode",{parentName:"p"},"FlexSpacer")," in the below example):"),Object(i.b)(a.c,{__position:9,__code:'<Horizontal horizontalAlign="right">\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Horizontal>',__scope:{props:this?this.props:n,Playground:a.c,Vertical:s.i,Horizontal:s.f,FlexSpacer:s.c,VerticalSpacer:s.j,HorizontalSpacer:s.g,demos:c},mdxType:"Playground"},Object(i.b)(s.f,{horizontalAlign:"right",mdxType:"Horizontal"},Object(i.b)(c.Button,null,"Just a button minding its own business"))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/spacers.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-spacers.d290ec962052e679a190.js.map