(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/common.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("./node_modules/react/index.js"),r=n.n(i).a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof BoxUnit&&BoxUnit&&BoxUnit===Object(BoxUnit)&&Object.isExtensible(BoxUnit)&&Object.defineProperty(BoxUnit,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxUnit",filename:"src/common.tsx"}}),"undefined"!==typeof BoxSet&&BoxSet&&BoxSet===Object(BoxSet)&&Object.isExtensible(BoxSet)&&Object.defineProperty(BoxSet,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxSet",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}})},"./src/components/containers.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("./node_modules/typestyle/lib.es2015/index.js"),r=n("./src/internal/utils.tsx"),l=n("./src/styles/flex.ts");"undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var a=function(e){var t=i.style(Object(l.f)(e.flex));return Object(r.b)(e,t,"Flex")};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),a.displayName="Flex";var o=function(e){var t=i.style(l.c);return Object(r.b)(e,t,"Content")};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),o.displayName="Content"},"./src/components/grid.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/typestyle/lib.es2015/index.js"),a=n("./src/internal/utils.tsx");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=Object(a.a)(e),i=Object(a.a)(t);return l.style({marginTop:"-"+n,marginLeft:"-"+i,$nest:{"&>*":{marginTop:n,marginLeft:i}}})}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var s=function(e){var t=e.spacing,n=Object(r.a)(e,["spacing"]),l=Object(a.d)(),s=l.verticalSpacing,c=l.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)s=c=t;else{var b=Object(i.a)(t,2);s=b[0],c=b[1]}var p=o(s,c);return Object(a.b)(n,p,"Grid")};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),s.displayName="Grid"},"./src/components/horizontal.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/typestyle/lib.es2015/index.js"),l=n("./src/internal/utils.tsx"),a=n("./src/styles/flex.ts"),o=function(e){return{"&>*":{marginRight:Object(l.a)(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/components/horizontal.tsx"}}),"undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var s=function(e){var t=e.horizontalAlign,n=e.verticalAlign,s=(e.sizing,Object(i.a)(e,["horizontalAlign","verticalAlign","sizing"])),c=Object(l.d)().horizontalSpacing,b=r.style(Object(l.c)(e),a.g,o(null==e.spacing?c:e.spacing),"right"==t&&a.e,"center"==t&&a.b,"center"==n&&a.a,"bottom"==n&&a.d);return Object(l.b)(s,b,"Horizontal")};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),s.displayName="Horizontal"},"./src/components/responsive.tsx":function(e,t){"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/responsive.tsx"}})},"./src/components/spacers.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/typestyle/lib.es2015/index.js"),a=n("./node_modules/react/index.js"),o=n("./src/internal/utils.tsx"),s=n("./src/styles/flex.ts");"undefined"!==typeof FlexSpaceProps&&FlexSpaceProps&&FlexSpaceProps===Object(FlexSpaceProps)&&Object.isExtensible(FlexSpaceProps)&&Object.defineProperty(FlexSpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpaceProps",filename:"src/components/spacers.tsx"}});var c=function(e){var t=e.className,n=e.flex,i=Object(r.a)(e,["className","flex"]),o=l.classes(t,l.style(Object(s.f)(n)));return a.createElement("div",Object.assign({},i,{className:o,"data-comment":"FlexSpace"}))};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpace",filename:"src/components/spacers.tsx"}}),c.displayName="FlexSpace","undefined"!==typeof SpaceProps&&SpaceProps&&SpaceProps===Object(SpaceProps)&&Object.isExtensible(SpaceProps)&&Object.defineProperty(SpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpaceProps",filename:"src/components/spacers.tsx"}});var b=function(e){var t=e.style,n=Object(r.a)(e,["style"]),l=Object(o.d)().horizontalSpacing,s=Object(o.a)(null==e.space?l:e.space),c=Object(i.a)({display:"inline-block",width:s},t);return a.createElement("div",Object.assign({},n,{style:c,"data-comment":"HorizontalSpace"}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpace",filename:"src/components/spacers.tsx"}}),b.displayName="HorizontalSpace";var p=function(e){var t=e.style,n=Object(r.a)(e,["style"]),l=Object(o.d)().verticalSpacing,s=Object(o.a)(null==e.space?l:e.space),c=Object(i.a)({height:s},t);return a.createElement("div",Object.assign({},n,{style:c,"data-comment":"VerticalSpace"}))};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpace",filename:"src/components/spacers.tsx"}}),p.displayName="VerticalSpace"},"./src/components/vertical.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/typestyle/lib.es2015/index.js"),l=n("./src/internal/utils.tsx"),a=n("./src/styles/flex.ts"),o=function(e){return{"&>*":{marginBottom:Object(l.a)(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/components/vertical.tsx"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var s=function(e){var t=e.horizontalAlign,n=e.verticalAlign,s=(e.sizing,Object(i.a)(e,["horizontalAlign","verticalAlign","sizing"])),c=Object(l.d)().verticalSpacing,b=r.style(Object(l.c)(e),a.h,o(null==e.spacing?c:e.spacing),"center"==n&&a.b,"bottom"==n&&a.e,"right"==t&&a.d,"center"==t&&a.a);return Object(l.b)(s,b,"Vertical")};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),s.displayName="Vertical"},"./src/docs/principles/sizing.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/index.tsx"),o={},s="wrapper";function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"sizing"},"Sizing"),Object(r.b)("p",null,"The ability to control the sizing of a container is what fundamentally makes it possible to mix ",Object(r.b)("em",{parentName:"p"},"explicit sized")," (simple) / ",Object(r.b)("em",{parentName:"p"},"flex sized")," (powerful) and ",Object(r.b)("em",{parentName:"p"},"flexible")," (super-powerful) layout items in your designs. We cover them one by one below."),Object(r.b)("h2",{id:"explicit-sized"},"Explicit sized"),Object(r.b)("p",null,"Driven by explicit ",Object(r.b)("inlineCode",{parentName:"p"},"width,height")," arguments. Here we have a simple ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," container with explicit ",Object(r.b)("inlineCode",{parentName:"p"},"height"),": "),Object(r.b)(l.c,{__position:0,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  Hello world\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.Vertical,Horizontal:a.Horizontal},mdxType:"Playground"},Object(r.b)(a.Vertical,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},"Hello world")),Object(r.b)("p",null,"This is essentially what you are doing in most design tools out there. Sadly explicit sizing does not scale to ",Object(r.b)("em",{parentName:"p"},"real")," applications where sizes need to be reactive to either their parent or their content. Fortunately we provide concepts to handle these cases."),Object(r.b)("h2",{id:"flex-sized"},"Flex sized"),Object(r.b)("p",null,"A flex sized component takes up as much space as offered by the parent. "),Object(r.b)("p",null,"In the example below, we have an explicit sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner flex sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps it size to match that of the outer container (observed below as you don't see the background of the parent as it is filled in by the child)."),Object(r.b)(l.c,{__position:1,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical sizing={'flex'} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.Vertical,Horizontal:a.Horizontal},mdxType:"Playground"},Object(r.b)(a.Vertical,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(r.b)(a.Vertical,{sizing:"flex",style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up all the space from the parent"))),Object(r.b)("h2",{id:"content-sized"},"Content sized"),Object(r.b)("p",null,"A content sized component takes up as much space as offered by the parent. This is the most common sizing that you want and is therefore the default."),Object(r.b)("p",null,"In the example below, we have an explicit sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner content-sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps it size to match whatever is needed by its children (observed below as you see the background of the parent where the child ends)"),Object(r.b)(l.c,{__position:2,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up as much space as needed by my children\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.Vertical,Horizontal:a.Horizontal},mdxType:"Playground"},Object(r.b)(a.Vertical,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(r.b)(a.Vertical,{style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up as much space as needed by my children"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can set it explicitly as well if you want ",Object(r.b)("inlineCode",{parentName:"p"},"sizing={'content'}"))))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/sizing.mdx"}}),c.isMDXComponent=!0},"./src/index.tsx":function(e,t,n){"use strict";n("./src/common.tsx");var i=n("./src/components/containers.tsx");n.d(t,"Content",function(){return i.a});var r=n("./src/components/vertical.tsx");n.d(t,"Vertical",function(){return r.a});var l=n("./src/components/horizontal.tsx");n.d(t,"Horizontal",function(){return l.a});n("./src/components/responsive.tsx"),n("./src/components/grid.tsx"),n("./src/components/spacers.tsx")},"./src/internal/utils.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/typestyle/lib.es2015/index.js"),s=n("./src/common.tsx"),c={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var b={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var p={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var d={overflow:"hidden"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollDisable",filename:"src/styles/scroll.ts"}});var m=n("./src/styles/flex.ts"),u=n("./node_modules/react/index.js"),f=n.n(u);function j(e){return"number"===typeof e?e+"px":e}function x(e){if("number"==typeof e||"string"==typeof e){var t=j(e);return{paddingTop:t,paddingRight:t,paddingBottom:t,paddingLeft:t}}if(2==e.length){var n=e.map(j),i=Object(a.a)(n,2),r=i[0],l=i[1];return{paddingTop:r,paddingRight:l,paddingBottom:r,paddingLeft:l}}var o=e.map(j),s=Object(a.a)(o,4);return{paddingTop:s[0],paddingRight:s[1],paddingBottom:s[2],paddingLeft:s[3]}}function g(e,t,n){var a=e.className,s=e.padding,m=e.height,u=e.minHeight,g=e.maxHeight,O=e.width,y=e.minWidth,h=e.maxWidth,P=e.scroll,v=e.styles,_=void 0===v?[]:v,S=e.tag,z=Object(l.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return f.a.createElement(null!=S&&"name"in S&&null!=S.name?S.name:"div",Object(r.a)({className:o.classes(a,t,o.style.apply(o,[null!=P&&("disable"==P?d:"horizontal"==P?b:"vertical"==P?p:"both"==P?c:null),null!=s&&x(s),null!=m&&{height:j(m)},null!=u&&{minHeight:j(u)},null!=g&&{maxHeight:j(g)},null!=O&&{width:j(O)},null!=y&&{minWidth:j(y)},null!=h&&{maxWidth:j(h)}].concat(Object(i.a)(_)))),"data-comment":n},z,null!=S&&null!=S.props?S.props:{}))}function O(e){var t=e.sizing,n=void 0===t?"content":t;return"content"==n?m.c:"flex"==n?Object(m.f)(1):Object(m.f)(n)}function y(){var e=Object(u.useContext)(s.a);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing,breakpoint:null==e.breakpoint?480:e.breakpoint}}n.d(t,"a",function(){return j}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return O}),n.d(t,"d",function(){return y}),j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"boxUnitToString",filename:"src/internal/utils.tsx"}}),g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createGLSTag",filename:"src/internal/utils.tsx"}}),O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processFlexProp",filename:"src/internal/utils.tsx"}}),y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}})},"./src/styles/flex.ts":function(e,t,n){"use strict";n.d(t,"g",function(){return l}),n.d(t,"h",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"f",function(){return s}),n.d(t,"a",function(){return b}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return u});var i=n("./node_modules/typestyle/lib.es2015/index.js"),r={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var l=Object(i.extend)(r,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var a=Object(i.extend)(r,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var o={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var c={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var b={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var p={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var d={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var m={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var u={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}})}}]);
//# sourceMappingURL=src-docs-principles-sizing.371844ff3195a0d83fff.js.map