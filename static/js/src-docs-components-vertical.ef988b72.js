(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/common.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n("./node_modules/react/index.js"),l=n.n(i).a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof CSSLength&&CSSLength&&CSSLength===Object(CSSLength)&&Object.isExtensible(CSSLength)&&Object.defineProperty(CSSLength,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSLength",filename:"src/common.tsx"}}),"undefined"!==typeof CSSBox&&CSSBox&&CSSBox===Object(CSSBox)&&Object.isExtensible(CSSBox)&&Object.defineProperty(CSSBox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSBox",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof ChildPlacementProps&&ChildPlacementProps&&ChildPlacementProps===Object(ChildPlacementProps)&&Object.isExtensible(ChildPlacementProps)&&Object.defineProperty(ChildPlacementProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ChildPlacementProps",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}})},"./src/components/containers.tsx":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var i=n("./node_modules/typestyle/lib.es2015/index.js"),l=n("./src/internal/utils.tsx"),r=n("./src/styles/flex.ts");"undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var o=function(e){var t=i.style(Object(r.f)(e.sizing));return Object(l.a)(e,t,"Flex")};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),o.displayName="Flex";var a=function(e){var t=i.style(r.c);return Object(l.a)(e,t,"Content")};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),a.displayName="Content"},"./src/components/grid.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/typestyle/lib.es2015/index.js"),o=n("./src/internal/utils.tsx");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=Object(o.b)(e),i=Object(o.b)(t);return r.style({marginTop:"-"+n,marginLeft:"-"+i,$nest:{"&>*":{marginTop:n,marginLeft:i}}})}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var s=function(e){var t=e.spacing,n=Object(l.a)(e,["spacing"]),r=Object(o.d)(),s=r.verticalSpacing,c=r.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)s=c=t;else{var b=Object(i.a)(t,2);s=b[0],c=b[1]}var p=a(s,c);return Object(o.a)(n,p,"Grid")};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),s.displayName="Grid"},"./src/components/horizontal.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/typestyle/lib.es2015/index.js"),r=n("./src/internal/utils.tsx"),o=n("./src/styles/flex.ts"),a=function(e){return{"&>*":{marginRight:Object(r.b)(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/components/horizontal.tsx"}}),"undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var s=function(e){var t=e.horizontalAlign,n=e.verticalAlign,s=(e.sizing,Object(i.a)(e,["horizontalAlign","verticalAlign","sizing"])),c=Object(r.d)().horizontalSpacing,b=l.style(Object(r.c)(e),o.g,a(null==e.spacing?c:e.spacing),"right"==t&&o.e,"center"==t&&o.b,"center"==n&&o.a,"bottom"==n&&o.d);return Object(r.a)(s,b,"Horizontal")};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),s.displayName="Horizontal"},"./src/components/responsive.tsx":function(e,t){"undefined"!==typeof ResponsiveConditionalProps&&ResponsiveConditionalProps&&ResponsiveConditionalProps===Object(ResponsiveConditionalProps)&&Object.isExtensible(ResponsiveConditionalProps)&&Object.defineProperty(ResponsiveConditionalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveConditionalProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/responsive.tsx"}})},"./src/components/spacers.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/typestyle/lib.es2015/index.js"),o=n("./node_modules/react/index.js"),a=n("./src/internal/utils.tsx"),s=n("./src/styles/flex.ts");"undefined"!==typeof FlexSpaceProps&&FlexSpaceProps&&FlexSpaceProps===Object(FlexSpaceProps)&&Object.isExtensible(FlexSpaceProps)&&Object.defineProperty(FlexSpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpaceProps",filename:"src/components/spacers.tsx"}});var c=function(e){var t=e.className,n=e.flex,i=Object(l.a)(e,["className","flex"]),a=r.classes(t,r.style(Object(s.f)(n)));return o.createElement("div",Object.assign({},i,{className:a,"data-comment":"FlexSpace"}))};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpace",filename:"src/components/spacers.tsx"}}),c.displayName="FlexSpace","undefined"!==typeof SpaceProps&&SpaceProps&&SpaceProps===Object(SpaceProps)&&Object.isExtensible(SpaceProps)&&Object.defineProperty(SpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpaceProps",filename:"src/components/spacers.tsx"}});var b=function(e){var t=e.style,n=Object(l.a)(e,["style"]),r=Object(a.d)().horizontalSpacing,s=Object(a.b)(null==e.space?r:e.space),c=Object(i.a)({display:"inline-block",width:s},t);return o.createElement("div",Object.assign({},n,{style:c,"data-comment":"HorizontalSpace"}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpace",filename:"src/components/spacers.tsx"}}),b.displayName="HorizontalSpace";var p=function(e){var t=e.style,n=Object(l.a)(e,["style"]),r=Object(a.d)().verticalSpacing,s=Object(a.b)(null==e.space?r:e.space),c=Object(i.a)({height:s},t);return o.createElement("div",Object.assign({},n,{style:c,"data-comment":"VerticalSpace"}))};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpace",filename:"src/components/spacers.tsx"}}),p.displayName="VerticalSpace"},"./src/components/vertical.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/typestyle/lib.es2015/index.js"),r=n("./src/internal/utils.tsx"),o=n("./src/styles/flex.ts"),a=function(e){return{"&>*":{marginBottom:Object(r.b)(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/components/vertical.tsx"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var s=function(e){var t=e.horizontalAlign,n=e.verticalAlign,s=(e.sizing,Object(i.a)(e,["horizontalAlign","verticalAlign","sizing"])),c=Object(r.d)().verticalSpacing,b=l.style(Object(r.c)(e),o.h,a(null==e.spacing?c:e.spacing),"center"==n&&o.b,"bottom"==n&&o.e,"right"==t&&o.d,"center"==t&&o.a);return Object(r.a)(s,b,"Vertical")};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),s.displayName="Vertical"},"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"BlueDiv",function(){return o}),n.d(t,"PinkDiv",function(){return a}),n.d(t,"Label",function(){return c}),n.d(t,"Input",function(){return p});var i=n("./node_modules/react/index.js"),l=n.n(i),r=n("./node_modules/typestyle/lib.es2015/index.js"),o=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var a=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=r.style({}),c=function(e){return l.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var b=r.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return l.a.createElement("input",{className:b})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}})},"./src/docs/components/vertical.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),o=n("./src/index.tsx"),a=n("./src/demos/index.tsx"),s={},c="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"vertical"},"Vertical"),Object(l.b)("p",null,"Lays out children in a vertically spaced layout."),Object(l.b)(r.c,{__position:0,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Vertical:o.Vertical,demos:a},mdxType:"Playground"},Object(l.b)(o.Vertical,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," follows the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical"),"s easily. The following example has three ",Object(l.b)("inlineCode",{parentName:"p"},"Verticals")," in a ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical(Vertical(blue,pink),Vertical(blue,pink))")," heirarchy but to the user it looks seemless. This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(l.b)(r.c,{__position:1,__code:"<Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Second Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Second World</div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Vertical:o.Vertical,demos:a},mdxType:"Playground"},Object(l.b)(o.Vertical,{mdxType:"Vertical"},Object(l.b)(o.Vertical,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(l.b)(o.Vertical,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Second Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"Second World")))),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"spacing?: CSSLength")," Controls spacing between children (",Object(l.b)("a",Object.assign({parentName:"li"},{href:"../principle-spacing/"}),"concepts covered in spacing principle"),").")),Object(l.b)(r.c,{__position:2,__code:"<Vertical spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'darkorange' }}>Again</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Vertical:o.Vertical,demos:a},mdxType:"Playground"},Object(l.b)(o.Vertical,{spacing:10,mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(l.b)("div",{style:{backgroundColor:"darkorange"}},"Again"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign?: 'top' /** default */ | 'center' | 'bottom'")," Controls vertical alignment of children.")),Object(l.b)(r.c,{__position:3,__code:"<Vertical verticalAlign=\"bottom\" style={{ height: '100px' }} spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Vertical:o.Vertical,demos:a},mdxType:"Playground"},Object(l.b)(o.Vertical,{verticalAlign:"bottom",style:{height:"100px"},spacing:10,mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign?: 'left' /** default */ | 'center' | 'right'")," Controls horizontal alignment of children.")),Object(l.b)(r.c,{__position:4,__code:'<Vertical horizontalAlign="right">\n  <button>Hello</button>\n  <button>World</button>\n</Vertical>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Vertical:o.Vertical,demos:a},mdxType:"Playground"},Object(l.b)(o.Vertical,{horizontalAlign:"right",mdxType:"Vertical"},Object(l.b)("button",null,"Hello"),Object(l.b)("button",null,"World"))),Object(l.b)("h2",{id:"glsprops"},"GLSProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"GLSProps")," e.g. ",Object(l.b)("inlineCode",{parentName:"a"},"padding")),": "),Object(l.b)(r.c,{__position:5,__code:"<Vertical padding={20}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Vertical:o.Vertical,demos:a},mdxType:"Playground"},Object(l.b)(o.Vertical,{padding:20,mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/vertical.mdx"}}),b.isMDXComponent=!0},"./src/index.tsx":function(e,t,n){"use strict";n("./src/common.tsx");var i=n("./src/components/containers.tsx");n.d(t,"Content",function(){return i.a}),n.d(t,"Flex",function(){return i.b});var l=n("./src/components/vertical.tsx");n.d(t,"Vertical",function(){return l.a});var r=n("./src/components/horizontal.tsx");n.d(t,"Horizontal",function(){return r.a});n("./src/components/responsive.tsx"),n("./src/components/grid.tsx"),n("./src/components/spacers.tsx")},"./src/internal/utils.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/typestyle/lib.es2015/index.js"),s=n("./src/common.tsx"),c={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var b={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var p={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var d={overflow:"hidden"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHidden",filename:"src/styles/scroll.ts"}});var u=n("./src/styles/flex.ts"),m=n("./node_modules/react/index.js"),f=n.n(m);function j(e){return"number"===typeof e?e+"px":e}function g(e){var t=function(e){if("number"==typeof e||"string"==typeof e){var t=j(e);return[t,t,t,t]}if(2==e.length){var n=e.map(j),i=Object(o.a)(n,2),l=i[0],r=i[1];return[l,r,l,r]}return e.map(j)}(e),n=Object(o.a)(t,4);return{paddingTop:n[0],paddingRight:n[1],paddingBottom:n[2],paddingLeft:n[3]}}function O(e,t,n){var o=e.className,s=e.padding,u=e.height,m=e.minHeight,O=e.maxHeight,y=e.width,x=e.minWidth,v=e.maxWidth,P=e.scroll,_=e.styles,h=void 0===_?[]:_,S=e.tag,k=Object(r.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return f.a.createElement(null!=S&&"name"in S&&null!=S.name?S.name:"div",Object(l.a)({className:a.classes(o,t,a.style.apply(a,[null!=P&&("hidden"==P?d:"horizontal"==P?b:"vertical"==P?p:"both"==P?c:null),null!=s&&g(s),null!=u&&{height:j(u)},null!=m&&{minHeight:j(m)},null!=O&&{maxHeight:j(O)},null!=y&&{width:j(y)},null!=x&&{minWidth:j(x)},null!=v&&{maxWidth:j(v)}].concat(Object(i.a)(h)))),"data-comment":n},k,null!=S&&null!=S.props?S.props:{}))}function y(e){var t=e.sizing,n=void 0===t?"content":t;return"content"==n?u.c:"flex"==n?Object(u.f)(1):Object(u.f)(n)}function x(){var e=Object(m.useContext)(s.a);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing,breakpoint:null==e.breakpoint?480:e.breakpoint}}n.d(t,"b",function(){return j}),n.d(t,"a",function(){return O}),n.d(t,"c",function(){return y}),n.d(t,"d",function(){return x}),j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"cssLengthToString",filename:"src/internal/utils.tsx"}}),O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createGLSTag",filename:"src/internal/utils.tsx"}}),y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processSizingProp",filename:"src/internal/utils.tsx"}}),x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}})},"./src/styles/flex.ts":function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"h",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"a",function(){return b}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return m});var i=n("./node_modules/typestyle/lib.es2015/index.js"),l={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var r=Object(i.extend)(l,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var o=Object(i.extend)(l,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var a={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var c={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var b={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var p={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var d={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var u={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var m={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}})}}]);
//# sourceMappingURL=src-docs-components-vertical.3875b35a7de39e8e7655.js.map