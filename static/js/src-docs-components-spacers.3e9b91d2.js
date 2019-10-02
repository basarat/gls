(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/docs/components/spacers.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/index.tsx"),c=n("./src/demos/index.tsx"),r={},p="wrapper";function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(p,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.Star,null),Object(a.b)("h1",{id:"spacer"},"Spacer"),Object(a.b)("p",null,"Spacers add ",Object(a.b)("em",{parentName:"p"},"space")," to your designs. Spacers should not be abused, but they can be super handy. Consider a simple button on the screen: "),Object(a.b)(i.c,{__position:1,__code:"<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(c.Button,null,"Just a button minding its own business")),Object(a.b)("p",null,"Let's say the design wants you to add some space on top of the button. You can do that easily with ",Object(a.b)("inlineCode",{parentName:"p"},"margin-top"),": "),Object(a.b)(i.c,{__position:2,__code:"<demos.Button style={{ marginTop: '25px' }}>\n  Just a button minding its own business\n</demos.Button>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(c.Button,{style:{marginTop:"25px"}},"Just a button minding its own business")),Object(a.b)("p",null,"We've covered issues with using margin (specifically their collapsing nature and cross component dependencies, which makes them hard to manage and maintain reliably) in our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing-principle"),". Another issue is that ",Object(a.b)("inlineCode",{parentName:"p"},"marginTop")," can easily get lost in code reviews. "),Object(a.b)("p",null,"If you have a parent container, then you should use ",Object(a.b)("inlineCode",{parentName:"p"},"padding={top}")," but even that can get lost in code reviews. So if you want to be super explict about significant space / or don't have easy access to the parent padding, you can use a simple ",Object(a.b)("inlineCode",{parentName:"p"},"VerticalSpacer"),", which shows up in code reviews:"),Object(a.b)(i.c,{__position:3,__code:"<VerticalSpacer space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(s.k,{space:25,mdxType:"VerticalSpacer"}),Object(a.b)(c.Button,null,"Just a button minding its own business")),Object(a.b)("h2",{id:"horizontalspacer"},"HorizontalSpacer"),Object(a.b)("p",null,"Takes the ",Object(a.b)("inlineCode",{parentName:"p"},"space?:CSSLength")," prop to generate a horizontal space. e.g. you can see the button pushed a bit to the right by a ",Object(a.b)("inlineCode",{parentName:"p"},"HorizontalSpacer"),": "),Object(a.b)(i.c,{__position:4,__code:"<HorizontalSpacer space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(s.h,{space:25,mdxType:"HorizontalSpacer"}),Object(a.b)(c.Button,null,"Just a button minding its own business")),Object(a.b)("h2",{id:"verticalspacer"},"VerticalSpacer"),Object(a.b)("p",null,"Takes the ",Object(a.b)("inlineCode",{parentName:"p"},"space?:CSSLength")," prop to generate a vertical space. e.g. you can see the button pushed a bit to the bottom by a ",Object(a.b)("inlineCode",{parentName:"p"},"VerticalSpacer"),": "),Object(a.b)(i.c,{__position:5,__code:"<VerticalSpacer space={25} />\n<demos.Button>Just a button minding its own business</demos.Button>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(s.k,{space:25,mdxType:"VerticalSpacer"}),Object(a.b)(c.Button,null,"Just a button minding its own business")),Object(a.b)("h2",{id:"flexspacer"},"FlexSpacer"),Object(a.b)("p",null,"Takes the ",Object(a.b)("inlineCode",{parentName:"p"},"sizing?:number")," prop (",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"flex ratio concept covered in sizing principle"),") to generate a flex amount of space."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"FlexSpacer")," comes really handy when you want to split items to the sides (left & right) with a flex space in between as shown below:"),Object(a.b)(i.c,{__position:6,__code:"<Horizontal>\n  <demos.Button>On left</demos.Button>\n  <FlexSpacer />\n  <demos.Button>On right</demos.Button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(s.g,{mdxType:"Horizontal"},Object(a.b)(c.Button,null,"On left"),Object(a.b)(s.d,{mdxType:"FlexSpacer"}),Object(a.b)(c.Button,null,"On right"))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"FlexSpacer")," works automatically for both horizontal and vertical dimensions depending on the parent container. The following two examples demonstrate it with ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical(FlexSpacer,Button)")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal(FlexSpacer,Button)"),": "),Object(a.b)(i.c,{__position:7,__code:"<Vertical height={100}>\n  <FlexSpacer />\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(s.j,{height:100,mdxType:"Vertical"},Object(a.b)(s.d,{mdxType:"FlexSpacer"}),Object(a.b)(c.Button,null,"Just a button minding its own business"))),Object(a.b)(i.c,{__position:8,__code:"<Horizontal>\n  <FlexSpacer />\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(s.g,{mdxType:"Horizontal"},Object(a.b)(s.d,{mdxType:"FlexSpacer"}),Object(a.b)(c.Button,null,"Just a button minding its own business"))),Object(a.b)("p",null,"Note that when don't want to split items (all child items are grouped together), you can use the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"alignment properties")," on ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical"),"/",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal")," to achieve the same effect (no ",Object(a.b)("inlineCode",{parentName:"p"},"FlexSpacer")," in the below example):"),Object(a.b)(i.c,{__position:9,__code:'<Horizontal horizontalAlign="right">\n  <demos.Button>Just a button minding its own business</demos.Button>\n</Horizontal>',__scope:{props:this?this.props:n,Playground:i.c,Vertical:s.j,Horizontal:s.g,FlexSpacer:s.d,VerticalSpacer:s.k,HorizontalSpacer:s.h,demos:c},mdxType:"Playground"},Object(a.b)(s.g,{horizontalAlign:"right",mdxType:"Horizontal"},Object(a.b)(c.Button,null,"Just a button minding its own business"))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/spacers.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-spacers.55bd0f23728a347f8314.js.map