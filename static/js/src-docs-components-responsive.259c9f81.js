(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/docs/components/responsive.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return b});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/index.tsx"),l=o("./src/demos/index.tsx"),r={},p="wrapper";function b(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(i.b)(p,Object.assign({},r,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)(l.Star,null),Object(i.b)("h1",{id:"responsive"},"Responsive"),Object(i.b)("p",null,"Lays out children in a vertically or horizontally spaced layout based on given breakpoint (",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../defaults/"}),"default is 480"),"). "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You'll have to resize the browser window to see the following examples in action \ud83d\udc4d")),Object(i.b)("p",null,"As an example, resize your browser window to see the following layout change from horizontal to vertical at 600px:"),Object(i.b)(a.c,{__position:1,__code:"<Responsive breakpoint={600}>\n  <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n  <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n</Responsive>",__scope:{props:this?this.props:o,Playground:a.c,Responsive:s.h,Flex:s.b,Horizontal:s.f,Vertical:s.i,demos:l},mdxType:"Playground"},Object(i.b)(s.h,{breakpoint:600,mdxType:"Responsive"},Object(i.b)(s.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(i.b)(s.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World"))),Object(i.b)("p",null,"Here is an example with left and right buttons collapsing into two rows at breakpoint: "),Object(i.b)(a.c,{__position:2,__code:'<Responsive breakpoint={650} minWidth={250}>\n  <Horizontal sizing="flex">\n    <demos.Button>Back 1</demos.Button>\n    <demos.Button>Back 2</demos.Button>\n  </Horizontal>\n  <Horizontal sizing="flex" horizontalAlign="right">\n    <demos.Button>Next 1</demos.Button>\n    <demos.Button>Next 2</demos.Button>\n  </Horizontal>\n</Responsive>',__scope:{props:this?this.props:o,Playground:a.c,Responsive:s.h,Flex:s.b,Horizontal:s.f,Vertical:s.i,demos:l},mdxType:"Playground"},Object(i.b)(s.h,{breakpoint:650,minWidth:250,mdxType:"Responsive"},Object(i.b)(s.f,{sizing:"flex",mdxType:"Horizontal"},Object(i.b)(l.Button,null,"Back 1"),Object(i.b)(l.Button,null,"Back 2")),Object(i.b)(s.f,{sizing:"flex",horizontalAlign:"right",mdxType:"Horizontal"},Object(i.b)(l.Button,null,"Next 1"),Object(i.b)(l.Button,null,"Next 2")))),Object(i.b)("p",null,"Another similar example is a common layout in designs is presented in pseudocode (can be done in a similar fashion to the buttons shown before):"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-txt"}),"       HORIZONTAL\nPrice                    12.34\nGST                       1.23\n\n       VERTICAL\nPrice \n             12.24 \nGST\n              1.23\n")),Object(i.b)("p",null,"Another example is form inputs: "),Object(i.b)(a.c,{__position:3,__code:'<Responsive breakpoint={600}>\n  <Vertical sizing="flex" spacing={5}>\n    <demos.Label>First name</demos.Label>\n    <demos.Input />\n  </Vertical>\n  <Vertical sizing="flex" spacing={5}>\n    <demos.Label>Last name</demos.Label>\n    <demos.Input />\n  </Vertical>\n</Responsive>',__scope:{props:this?this.props:o,Playground:a.c,Responsive:s.h,Flex:s.b,Horizontal:s.f,Vertical:s.i,demos:l},mdxType:"Playground"},Object(i.b)(s.h,{breakpoint:600,mdxType:"Responsive"},Object(i.b)(s.i,{sizing:"flex",spacing:5,mdxType:"Vertical"},Object(i.b)(l.Label,null,"First name"),Object(i.b)(l.Input,null)),Object(i.b)(s.i,{sizing:"flex",spacing:5,mdxType:"Vertical"},Object(i.b)(l.Label,null,"Last name"),Object(i.b)(l.Input,null)))),Object(i.b)("h1",{id:"props"},"Props"),Object(i.b)("p",null,"Responsive props are categorized into ",Object(i.b)("em",{parentName:"p"},"RootOnly"),", ",Object(i.b)("em",{parentName:"p"},"Modes")," (vertical/horizontal mode) and ",Object(i.b)("em",{parentName:"p"},"Overridable"),"."),Object(i.b)("h2",{id:"responsiverootonlyprops"},"ResponsiveRootOnlyProps"),Object(i.b)("p",null,"These are props that impact the root tag generated by the ",Object(i.b)("inlineCode",{parentName:"p"},"Responsive"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Props that can only be specified at the root of the `Responsive` \n */\nexport interface ResponsiveRootOnlyProps extends\n  StylesProp,\n  StyleProp,\n  ClassNameProp,\n  TagProps,\n  BreakpointProp {\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"StylesProp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"StyleProp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ClassNameProp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"TagProps")," are all covered ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"in the common props section"),".")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"BreakpointProp")," is defined as: "),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface BreakpointProp {\n  /** \n   * windowWidth <= breakpoint : it is vertical (mobile)\n   * else                      : it is horizontal (desktop)\n   **/\n  breakpoint?: number;\n}\n")),Object(i.b)("p",null,"The default ",Object(i.b)("inlineCode",{parentName:"p"},"breakpoint")," is 480 ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../defaults/"}),"and can be configured"),"."),Object(i.b)("h2",{id:"responsivemodesprops"},"ResponsiveModesProps"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ResponsiveModesProps")," consists of ",Object(i.b)("inlineCode",{parentName:"p"},"vertical")," and ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," mode customizations: "),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface ResponsiveModesProps {\n  /** Vertical mode configuration */\n  vertical?: ResponsiveVerticalModeProps;\n  /** Horizontal mode configuration */\n  horizontal?: ResponsiveHorizontalModeProps;\n}\n")),Object(i.b)("p",null,"The alignment options differ by mode: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vertical")," supports the same alignment options offered the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"../vertical/"}),"Vertical component"),". "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"horizontal")," supports the same alignment options offered the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"../horizontal/"}),"Horizontal component"),".")),Object(i.b)("p",null,"Both modes support the following common props: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StylesProp"),": allowing you to provide custom ",Object(i.b)("inlineCode",{parentName:"li"},"styles")," (as covered in ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"common props"),") per mode."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ResponsiveOverridableProps"),": Overridable props (covered in its own section below).")),Object(i.b)("h2",{id:"responsiveoverridableprops"},"ResponsiveOverridableProps"),Object(i.b)("p",null,"You can specify these props at the root, and optionally change their values for the specific mode. Some ways you could use these props:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only at the root (used for both modes)."),Object(i.b)("li",{parentName:"ul"},"For specfic modes (used only in those mode)."),Object(i.b)("li",{parentName:"ul"},"Combination: root + override-in-specific-mode.")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Props that can be specified at\n * - root of `Responsive` \n * - and overridden for `vertical`/`horizontal` modes\n */\nexport interface ResponsiveOverridableProps extends\n  ScrollProp,\n  PaddingProp,\n  SizeProps,\n  SizingProp,\n  SpacingProp {\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"ScrollProp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PaddingProp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"SizeProps"),", ",Object(i.b)("inlineCode",{parentName:"p"},"SizingProp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"SpacingProp")," are all covered ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"in the common props section"),".")),Object(i.b)("p",null,"As an example, below we have a responsive with a default spacing of ",Object(i.b)("inlineCode",{parentName:"p"},"30px")," but in vertical mode it has it changed to ",Object(i.b)("inlineCode",{parentName:"p"},"10px")," (",Object(i.b)("inlineCode",{parentName:"p"},"<Responsive spacing=30 vertical={spacing:10}/>"),"): "),Object(i.b)(a.c,{__position:4,__code:"<Responsive\n  breakpoint={600}\n  style={{ backgroundColor: 'gold' }}\n  spacing={30}\n  vertical={{ spacing: 10 }}\n>\n  <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n  <Flex style={{ backgroundColor: 'darkorange' }}>World</Flex>\n</Responsive>",__scope:{props:this?this.props:o,Playground:a.c,Responsive:s.h,Flex:s.b,Horizontal:s.f,Vertical:s.i,demos:l},mdxType:"Playground"},Object(i.b)(s.h,{breakpoint:600,style:{backgroundColor:"gold"},spacing:30,vertical:{spacing:10},mdxType:"Responsive"},Object(i.b)(s.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(i.b)(s.b,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"World"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/responsive.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-responsive.b5422715754696f928e6.js.map