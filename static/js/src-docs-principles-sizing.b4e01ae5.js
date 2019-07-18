(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/docs/principles/sizing.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/index.tsx"),o={},s="wrapper";function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"sizing"},"Sizing"),Object(r.b)("p",null,"The ability to control the sizing of a container is what fundamentally makes it possible to mix ",Object(r.b)("em",{parentName:"p"},"explicit sized")," (simple) / ",Object(r.b)("em",{parentName:"p"},"flex sized")," (powerful) and ",Object(r.b)("em",{parentName:"p"},"flexible")," (super-powerful) layout items in your designs. We cover them one by one below."),Object(r.b)("h2",{id:"explicit-sized"},"Explicit sized"),Object(r.b)("p",null,"Driven by explicit ",Object(r.b)("inlineCode",{parentName:"p"},"width,height")," arguments. Here we have a simple ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," container with explicit ",Object(r.b)("inlineCode",{parentName:"p"},"height"),": "),Object(r.b)(l.c,{__position:0,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  Hello world\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.b,Horizontal:a.a},mdxType:"Playground"},Object(r.b)(a.b,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},"Hello world")),Object(r.b)("p",null,"This is essentially what you are doing in most design tools out there. Sadly explicit sizing does not scale to ",Object(r.b)("em",{parentName:"p"},"real")," applications where sizes need to be reactive to either their parent or their content. Fortunately we provide concepts to handle these cases."),Object(r.b)("h2",{id:"flex-sized"},"Flex sized"),Object(r.b)("p",null,"A flex sized component takes up as much space as offered by the parent. "),Object(r.b)("p",null,"In the example below, we have an explicit sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner flex sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps it size to match that of the outer container (observed below as you don't see the background of the parent as it is filled in by the child)."),Object(r.b)(l.c,{__position:1,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical sizing={'flex'} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.b,Horizontal:a.a},mdxType:"Playground"},Object(r.b)(a.b,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(r.b)(a.b,{sizing:"flex",style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up all the space from the parent"))),Object(r.b)("h2",{id:"content-sized"},"Content sized"),Object(r.b)("p",null,"A content sized component takes up as much space as offered by the parent. This is the most common sizing that you want and is therefore the default."),Object(r.b)("p",null,"In the example below, we have an explicit sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner content-sized ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(r.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner vertical keeps it size to match whatever is needed by its children (observed below as you see the background of the parent where the child ends)"),Object(r.b)(l.c,{__position:2,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Vertical style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up as much space as needed by my children\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:a.b,Horizontal:a.a},mdxType:"Playground"},Object(r.b)(a.b,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(r.b)(a.b,{style:{backgroundColor:"darkorange"},mdxType:"Vertical"},"I'm taking up as much space as needed by my children"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can set it explicitly as well if you want ",Object(r.b)("inlineCode",{parentName:"p"},"sizing={'content'}"))))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/sizing.mdx"}}),c.isMDXComponent=!0},"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/react/index.js"),r=n.n(i),l=r.a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof BoxUnit&&BoxUnit&&BoxUnit===Object(BoxUnit)&&Object.isExtensible(BoxUnit)&&Object.defineProperty(BoxUnit,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxUnit",filename:"src/common.tsx"}}),"undefined"!==typeof BoxSet&&BoxSet&&BoxSet===Object(BoxSet)&&Object.isExtensible(BoxSet)&&Object.defineProperty(BoxSet,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxSet",filename:"src/common.tsx"}}),"undefined"!==typeof BoxFunction&&BoxFunction&&BoxFunction===Object(BoxFunction)&&Object.isExtensible(BoxFunction)&&Object.defineProperty(BoxFunction,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxFunction",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b=n("./node_modules/typestyle/lib.es2015/index.js"),m={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var p={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var d={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var f={overflow:"hidden"};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollDisabled",filename:"src/styles/scroll.ts"}});var u={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var g=Object(b.extend)(u,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var j=Object(b.extend)(u,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var x={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var y={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var h={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var P={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var v={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var _={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var z={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};function S(e){return"number"===typeof e?e+"px":e}function k(e){if("number"==typeof e||"string"==typeof e){var t=S(e);return{paddingTop:t,paddingRight:t,paddingBottom:t,paddingLeft:t}}if(2==e.length){var n=e.map(S),i=Object(c.a)(n,2),r=i[0],l=i[1];return{paddingTop:r,paddingRight:l,paddingBottom:r,paddingLeft:l}}var a=e.map(S),o=Object(c.a)(a,4);return{paddingTop:o[0],paddingRight:o[1],paddingBottom:o[2],paddingLeft:o[3]}}function w(e,t,n){var i=e.className,l=e.padding,c=e.height,u=e.minHeight,g=e.maxHeight,j=e.width,x=e.minWidth,O=e.maxWidth,y=e.scroll,h=e.styles,P=void 0===h?[]:h,v=e.tag,_=Object(s.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return r.a.createElement(null!=v&&"name"in v&&null!=v.name?v.name:"div",Object(o.a)({className:b.classes(i,t,b.style.apply(b,[null!=y&&("disabled"==y?f:"horizontal"==y?p:"vertical"==y?d:m),null!=l&&k(l),null!=c&&{height:S(c)},null!=u&&{minHeight:S(u)},null!=g&&{maxHeight:S(g)},null!=j&&{width:S(j)},null!=x&&{minWidth:S(x)},null!=O&&{maxWidth:S(O)}].concat(Object(a.a)(P)))),"data-comment":n},_,null!=v&&null!=v.props?v.props:{}))}function E(e){var t=e.sizing,n=void 0===t?"content":t;return"content"==n?x:O("flex"==n?1:n)}function C(){var e=Object(i.useContext)(l);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing,breakpoint:null==e.breakpoint?480:e.breakpoint}}function V(e){return function(t,n,i,r){return void 0===n&&void 0===i&&void 0===r?n=i=r=t:void 0===i&&void 0===r&&(i=t,r=n),e(S(t),S(n),S(i),S(r))}}"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}}),S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"boxUnitToString",filename:"src/internal/utils.tsx"}}),w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createGLSTag",filename:"src/internal/utils.tsx"}}),E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processFlexProp",filename:"src/internal/utils.tsx"}}),C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}});var T=V(function(e,t,n,i){return{paddingTop:e,paddingRight:t,paddingBottom:n,paddingLeft:i}});"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"padding",filename:"src/styles/box.ts"}});var B=V(function(e,t,n,i){return{borderTop:e,borderRight:t,borderBottom:n,borderLeft:i}});"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/styles/box.ts"}});var H=function(e){return{width:S(e)}};H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"width",filename:"src/styles/box.ts"}});var N=function(e){return{height:S(e)}};N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"height",filename:"src/styles/box.ts"}});var F=function(e){return{maxWidth:S(e)}};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"maxWidth",filename:"src/styles/box.ts"}});var G=function(e){return{maxHeight:S(e)}};function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=S(e),i=S(t);return b.style({marginTop:"-"+n,marginLeft:"-"+i,$nest:{"&>*":{marginTop:n,marginLeft:i}}})}G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"maxHeight",filename:"src/styles/box.ts"}}),L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var A=function(e){var t=e.spacing,n=Object(s.a)(e,["spacing"]),i=C(),r=i.verticalSpacing,l=i.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)r=l=t;else{var a=Object(c.a)(t,2);r=a[0],l=a[1]}return w(n,L(r,l),"Grid")};A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),A.displayName="Grid";var W=function(e){return{"&>*":{marginBottom:S(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/components/vertical.tsx"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var D=function(e){var t=e.horizontalAlign,n=e.verticalAlign,i=(e.sizing,Object(s.a)(e,["horizontalAlign","verticalAlign","sizing"])),r=C().verticalSpacing;return w(i,b.style(E(e),j,W(null==e.spacing?r:e.spacing),"center"==n&&_,"bottom"==n&&z,"right"==t&&P,"center"==t&&h),"Vertical")};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),D.displayName="Vertical";var I=function(e){return{"&>*":{marginRight:S(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/components/horizontal.tsx"}}),"undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var R=function(e){var t=e.horizontalAlign,n=e.verticalAlign,i=(e.sizing,Object(s.a)(e,["horizontalAlign","verticalAlign","sizing"])),r=C().horizontalSpacing;return w(i,b.style(E(e),g,I(null==e.spacing?r:e.spacing),"right"==t&&z,"center"==t&&_,"center"==n&&h,"bottom"==n&&P),"Horizontal")};R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),R.displayName="Horizontal","undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var U=function(e){return w(e,b.style(O(e.flex)),"Flex")};U&&U===Object(U)&&Object.isExtensible(U)&&Object.defineProperty(U,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),U.displayName="Flex";var J=function(e){return w(e,b.style(x),"Content")};J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),J.displayName="Content",n.d(t,"b",function(){return D}),n.d(t,"a",function(){return R})}}]);
//# sourceMappingURL=src-docs-principles-sizing.cb5be54178f63b2414e8.js.map