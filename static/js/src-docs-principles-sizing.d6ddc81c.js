(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/docs/principles/sizing.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),l=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/index.tsx"),r=t("./src/demos/index.tsx"),c={},s="wrapper";function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)(s,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(r.Star,null),Object(o.b)("h1",{id:"sizing"},"Sizing"),Object(o.b)("p",null,"When thinking about the size of a container you need to think about ",Object(o.b)("em",{parentName:"p"},"explicit")," size and ",Object(o.b)("em",{parentName:"p"},"implicit")," sizing. We cover these concepts below."),Object(o.b)("h2",{id:"sizeprops-explicit-size"},"SizeProps (Explicit size)"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Add support for explicit size\n */\nexport interface SizeProps {\n  height?: CSSLength,\n  minHeight?: CSSLength,\n  maxHeight?: CSSLength,\n\n  width?: CSSLength,\n  minWidth?: CSSLength,\n  maxWidth?: CSSLength,\n}\n")),Object(o.b)("p",null,"Explicit sizes are driven by ",Object(o.b)("inlineCode",{parentName:"p"},"width,height,minHeight,minWidth,maxHeight,maxWidth")," arguments. You can have an explicit value on only one dimension e.g. here we have a simple ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," container with explicit ",Object(o.b)("inlineCode",{parentName:"p"},"height")," only: "),Object(o.b)(l.c,{__position:1,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  Hello world\n</Vertical>",__scope:{props:this?this.props:t,Playground:l.c,Vertical:a.j,Horizontal:a.g,Flex:a.c,Content:a.b,Box:a.a,demos:r},mdxType:"Playground"},Object(o.b)(a.j,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},"Hello world")),Object(o.b)("p",null,"This is essentially what you are doing in most design tools out there. Sadly explicit ",Object(o.b)("inlineCode",{parentName:"p"},"height+width")," sizing does not scale to ",Object(o.b)("em",{parentName:"p"},"real")," applications, where sizes need to be reactive to either their parent or their content. Fortunately we provide concepts to handle these cases with ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"implicit sizing"))," concepts we cover next."),Object(o.b)("h2",{id:"sizingprop-implicit-sizing"},"SizingProp (Implicit sizing)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Implicit sizing controls the component behaviour when no explicit size properties are provided.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SizingProp")," is what controls the implicit sizing (content / flex / flex-ratio) features: "),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Specifies sizing interaction\n */\nexport interface SizingProp {\n  /** \n   * Specifies `sizing` interaction\n   */\n  sizing?:\n  | 'content' /** default */\n  | 'flex' /** Same as `1` */\n  | number /** A flex ratio */;\n}\n")),Object(o.b)("p",null,"We cover these individually below:"),Object(o.b)("h3",{id:"content-sized"},"Content sized"),Object(o.b)("p",null,"A content sized component takes up as much space as needed by the children. This is the most common sizing that you want and is therefore the default for our containers."),Object(o.b)("p",null,"In the example below, we have an explicit sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner content-sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps it size to match whatever is needed by its children (observed below as you see the background of the parent-lightskyblue where the child-darkorange ends)."),Object(o.b)(l.c,{__position:2,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up as much space as needed by my children\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:t,Playground:l.c,Vertical:a.j,Horizontal:a.g,Flex:a.c,Content:a.b,Box:a.a,demos:r},mdxType:"Playground"},Object(o.b)(a.j,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(o.b)(a.j,{style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up as much space as needed by my children"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can set sizing to ",Object(o.b)("inlineCode",{parentName:"p"},"content")," explicitly as well if you want (",Object(o.b)("inlineCode",{parentName:"p"},"sizing={'content'}"),")")),Object(o.b)("h3",{id:"flex-sized"},"Flex sized"),Object(o.b)("p",null,"A flex sized component takes up as much space as offered by the parent. "),Object(o.b)("p",null,"In the example below, we have an explicit sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner flex-sized ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(o.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps its size to match that of the outer container (observed below as you don't see the background of the parent-lightskyblue as it is filled in by the child-darkorange)."),Object(o.b)(l.c,{__position:3,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical sizing={'flex'} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:t,Playground:l.c,Vertical:a.j,Horizontal:a.g,Flex:a.c,Content:a.b,Box:a.a,demos:r},mdxType:"Playground"},Object(o.b)(a.j,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(o.b)(a.j,{sizing:"flex",style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up all the space from the parent"))),Object(o.b)("h3",{id:"flex-sized-ratios"},"Flex sized ratios"),Object(o.b)("p",null,"With flex sizing, you can specify ",Object(o.b)("inlineCode",{parentName:"p"},"number")," values. This controls how much you want different items dividing the space provided by their parent. e.g. We have ",Object(o.b)("inlineCode",{parentName:"p"},"1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"2")," as the sizing on the children of the following horizontal:"),Object(o.b)(l.c,{__position:4,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking 1\n  </Flex>\n  <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n    I'm taking 2\n  </Flex>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:l.c,Vertical:a.j,Horizontal:a.g,Flex:a.c,Content:a.b,Box:a.a,demos:r},mdxType:"Playground"},Object(o.b)(a.g,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(o.b)(a.c,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking 1"),Object(o.b)(a.c,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"I'm taking 2"))),Object(o.b)("h2",{id:"mixing"},"Mixing"),Object(o.b)("p",null,"You can mix ",Object(o.b)("inlineCode",{parentName:"p"},"Flex"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Content")," and explicit sizing to match your design requirements as shown in the example below (",Object(o.b)("inlineCode",{parentName:"p"},"explicit,content,flex 1,flex 2"),"):"),Object(o.b)(l.c,{__position:5,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  {/* Explicit width 100 */}\n  <Content width={100} style={{ backgroundColor: 'limegreen' }}>\n    Exactly 100px\n  </Content>\n  {/* Implicit content */}\n  <Content style={{ backgroundColor: 'gold' }}>As much as I need</Content>\n  {/* Implicit flex sizing = 1 */}\n  <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking 1 from remainder\n  </Flex>\n  {/* Implicit flex sizing = 2 */}\n  <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n    I'm taking 2 from remainder\n  </Flex>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:l.c,Vertical:a.j,Horizontal:a.g,Flex:a.c,Content:a.b,Box:a.a,demos:r},mdxType:"Playground"},Object(o.b)(a.g,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(o.b)(a.b,{width:100,style:{backgroundColor:"limegreen"},mdxType:"Content"},"Exactly 100px"),Object(o.b)(a.b,{style:{backgroundColor:"gold"},mdxType:"Content"},"As much as I need"),Object(o.b)(a.c,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking 1 from remainder"),Object(o.b)(a.c,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"I'm taking 2 from remainder"))),Object(o.b)("h2",{id:"additional-guidance"},"Additional Guidance"),Object(o.b)("h3",{id:"explicit-size-requires-sizingcontent"},"Explicit Size requires sizing='content'"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sizing=flex")," takes precedence on any explicit sizing e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"width")," has no effect in the following example:"),Object(o.b)(l.c,{__position:6,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  {/* Explicit width 100 */}\n  <Box sizing=\"flex\" width={100} style={{ backgroundColor: 'limegreen' }}>\n    Width 100px will not work because of `sizing=flex`\n  </Box>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:l.c,Vertical:a.j,Horizontal:a.g,Flex:a.c,Content:a.b,Box:a.a,demos:r},mdxType:"Playground"},Object(o.b)(a.g,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(o.b)(a.a,{sizing:"flex",width:100,style:{backgroundColor:"limegreen"},mdxType:"Box"},"Width 100px will not work because of `sizing=flex`"))),Object(o.b)("p",null,"For for explicit size to work sizing needs to be ",Object(o.b)("inlineCode",{parentName:"p"},"content"),". All our components are ",Object(o.b)("inlineCode",{parentName:"p"},"sizing=content")," by default so you don't need to think about it when using our components. The following example demonstrates this default: "),Object(o.b)(l.c,{__position:7,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  {/* Explicit width 100 */}\n  <Box width={100} style={{ backgroundColor: 'limegreen' }}>\n    Width 100px works\n  </Box>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:l.c,Vertical:a.j,Horizontal:a.g,Flex:a.c,Content:a.b,Box:a.a,demos:r},mdxType:"Playground"},Object(o.b)(a.g,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(o.b)(a.a,{width:100,style:{backgroundColor:"limegreen"},mdxType:"Box"},"Width 100px works"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/sizing.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-principles-sizing.f326f328d50fbaa036ff.js.map