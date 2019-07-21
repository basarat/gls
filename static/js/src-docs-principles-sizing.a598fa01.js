(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/docs/principles/sizing.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/index.tsx"),r={},c="wrapper";function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"sizing"},"Sizing"),Object(o.b)("p",null,"The ability to control the sizing of a container is what fundamentally makes it possible to mix ",Object(o.b)("em",{parentName:"p"},"explicit sized")," (simple) / ",Object(o.b)("em",{parentName:"p"},"flex sized")," (powerful) and ",Object(o.b)("em",{parentName:"p"},"flexible")," (super-powerful) layout items in your designs. We cover them one by one below."),Object(o.b)("h2",{id:"explicit-sized"},"Explicit sized"),Object(o.b)("p",null,"Driven by explicit ",Object(o.b)("inlineCode",{parentName:"p"},"width,height")," arguments. Here we have a simple ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," container with explicit ",Object(o.b)("inlineCode",{parentName:"p"},"height"),": "),Object(o.b)(l.c,{__position:0,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  Hello world\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.h,Horizontal:a.e,Flex:a.b,Content:a.a},mdxType:"Playground"},Object(o.b)(a.h,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},"Hello world")),Object(o.b)("p",null,"This is essentially what you are doing in most design tools out there. Sadly explicit sizing does not scale to ",Object(o.b)("em",{parentName:"p"},"real")," applications where sizes need to be reactive to either their parent or their content. Fortunately we provide concepts to handle these cases."),Object(o.b)("h2",{id:"flex-sized"},"Flex sized"),Object(o.b)("p",null,"A flex sized component takes up as much space as offered by the parent. "),Object(o.b)("p",null,"In the example below, we have an explicit sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner flex sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps its size to match that of the outer container (observed below as you don't see the background of the parent as it is filled in by the child)."),Object(o.b)(l.c,{__position:1,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical sizing={'flex'} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.h,Horizontal:a.e,Flex:a.b,Content:a.a},mdxType:"Playground"},Object(o.b)(a.h,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(o.b)(a.h,{sizing:"flex",style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up all the space from the parent"))),Object(o.b)("h2",{id:"content-sized"},"Content sized"),Object(o.b)("p",null,"A content sized component takes up as much space as needed by the children. This is the most common sizing that you want and is therefore the default."),Object(o.b)("p",null,"In the example below, we have an explicit sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner content-sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps it size to match whatever is needed by its children (observed below as you see the background of the parent where the child ends)"),Object(o.b)(l.c,{__position:2,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up as much space as needed by my children\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.h,Horizontal:a.e,Flex:a.b,Content:a.a},mdxType:"Playground"},Object(o.b)(a.h,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(o.b)(a.h,{style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up as much space as needed by my children"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can set it explicitly as well if you want ",Object(o.b)("inlineCode",{parentName:"p"},"sizing={'content'}"))),Object(o.b)("h2",{id:"flex-sized-ratios"},"Flex sized ratios"),Object(o.b)("p",null,"With flex sizing, you can specify ",Object(o.b)("inlineCode",{parentName:"p"},"number")," values on how much you want differnt items to flex. e.g. We have ",Object(o.b)("inlineCode",{parentName:"p"},"1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"2")," as the sizing on the children of the following horizontal:"),Object(o.b)(l.c,{__position:3,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking 1\n  </Flex>\n  <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n    I'm taking 2\n  </Flex>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.h,Horizontal:a.e,Flex:a.b,Content:a.a},mdxType:"Playground"},Object(o.b)(a.e,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(o.b)(a.b,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking 1"),Object(o.b)(a.b,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"I'm taking 2"))),Object(o.b)("p",null,"You can even mix ",Object(o.b)("inlineCode",{parentName:"p"},"Flex")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Content")," sizing if you want: "),Object(o.b)(l.c,{__position:4,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <Content width={100} style={{ backgroundColor: 'limegreen' }}>\n    Exactly 100px\n  </Content>\n  <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking 1 from remainder\n  </Flex>\n  <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n    I'm taking 2 from remainder\n  </Flex>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.h,Horizontal:a.e,Flex:a.b,Content:a.a},mdxType:"Playground"},Object(o.b)(a.e,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(o.b)(a.a,{width:100,style:{backgroundColor:"limegreen"},mdxType:"Content"},"Exactly 100px"),Object(o.b)(a.b,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking 1 from remainder"),Object(o.b)(a.b,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"I'm taking 2 from remainder"))))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/sizing.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-principles-sizing.db5afc581968c2b77a3a.js.map