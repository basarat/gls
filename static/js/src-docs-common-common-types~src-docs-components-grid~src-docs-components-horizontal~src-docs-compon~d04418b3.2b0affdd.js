(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/react/index.js"),l=n.n(i),r=l.a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof CSSLength&&CSSLength&&CSSLength===Object(CSSLength)&&Object.isExtensible(CSSLength)&&Object.defineProperty(CSSLength,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSLength",filename:"src/common.tsx"}}),"undefined"!==typeof CSSBox&&CSSBox&&CSSBox===Object(CSSBox)&&Object.isExtensible(CSSBox)&&Object.defineProperty(CSSBox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSBox",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof ChildPlacementProps&&ChildPlacementProps&&ChildPlacementProps===Object(ChildPlacementProps)&&Object.isExtensible(ChildPlacementProps)&&Object.defineProperty(ChildPlacementProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ChildPlacementProps",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof StyleProp&&StyleProp&&StyleProp===Object(StyleProp)&&Object.isExtensible(StyleProp)&&Object.defineProperty(StyleProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyleProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}});var a=n("./node_modules/typestyle/lib.es2015/index.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var f={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var m={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var u={overflow:"hidden"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHidden",filename:"src/styles/scroll.ts"}});var d={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var g=Object(a.extend)(d,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var j=Object(a.extend)(d,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var O={"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap",flexWrap:"wrap"};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"wrap",filename:"src/styles/flex.ts"}});var P={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var y={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var v={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var _={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var S={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var h={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var z={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}});var E={"-ms-flex-pack":"justify","-webkit-justify-content":"space-between",justifyContent:"space-between"};function w(e){return"number"===typeof e?e+"px":e}function k(e){var t=function(e){if("number"==typeof e||"string"==typeof e){var t=w(e);return[t,t,t,t]}if(2==e.length){var n=e.map(w),i=Object(p.a)(n,2),l=i[0],r=i[1];return[l,r,l,r]}return e.map(w)}(e),n=Object(p.a)(t,4);return{paddingTop:n[0],paddingRight:n[1],paddingBottom:n[2],paddingLeft:n[3]}}function C(e,t,n){var i=e.className,r=e.padding,p=e.height,d=e.minHeight,g=e.maxHeight,j=e.width,O=e.minWidth,P=e.maxWidth,x=e.scroll,y=e.styles,v=void 0===y?[]:y,_=e.tag,S=Object(c.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return l.a.createElement(null!=_&&"name"in _&&null!=_.name?_.name:"div",Object(o.a)({className:a.classes(i,t,a.style.apply(a,[null!=x&&("hidden"==x?u:"horizontal"==x?f:"vertical"==x?m:"both"==x?b:null),null!=r&&k(r),null!=p&&{height:w(p)},null!=d&&{minHeight:w(d)},null!=g&&{maxHeight:w(g)},null!=j&&{width:w(j)},null!=O&&{minWidth:w(O)},null!=P&&{maxWidth:w(P)}].concat(Object(s.a)(v)))),"data-comment":n},S,null!=_&&null!=_.props?_.props:{}))}function R(e){var t=e.sizing,n=void 0===t?"content":t;return"content"==n?P:x("flex"==n?1:n)}function A(){var e=Object(i.useContext)(r);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing,breakpoint:null==e.breakpoint?480:e.breakpoint}}"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"betweenJustified",filename:"src/styles/flex.ts"}}),w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"cssLengthToString",filename:"src/internal/utils.tsx"}}),C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createGLSTag",filename:"src/internal/utils.tsx"}}),R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processSizingProp",filename:"src/internal/utils.tsx"}}),A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}}),"undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var H=function(e){return C(e,a.style(x(e.sizing)),"Flex")};H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),H.displayName="Flex";var L=function(e){return C(e,a.style(P),"Content")};L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),L.displayName="Content";var F=function(e){return{"&>*":{marginBottom:w(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/styles/spacing.ts"}});var G=function(e){return{"&>*":{marginRight:w(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=w(e),i=w(t);return{marginTop:"-"+n+" !important",marginLeft:"-"+i+" !important",$nest:{"&>*":{marginTop:n+" !important",marginLeft:i+" !important"}}}}G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/styles/spacing.ts"}}),N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var V=function(e){var t=A().verticalSpacing,n=(e.sizing,e.spacing),i=void 0===n?t:n,l=e.horizontalAlign,r=e.verticalAlign;return C(Object(c.a)(e,["sizing","spacing","horizontalAlign","verticalAlign"]),a.style(R(e),j,0!==t&&F(i),"center"==r&&h,"bottom"==r&&z,"center"==l&&v,"right"==l&&_),"Vertical")};V&&V===Object(V)&&Object.isExtensible(V)&&Object.defineProperty(V,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),V.displayName="Vertical","undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var W=function(e){var t=A().horizontalSpacing,n=(e.sizing,e.spacing,e.horizontalAlign),i=e.verticalAlign;return C(Object(c.a)(e,["sizing","spacing","horizontalAlign","verticalAlign"]),a.style(R(e),g,0!==t&&G(t),"center"==n&&h,"right"==n&&z,"center"==i&&v,"bottom"==i&&_),"Horizontal")};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),W.displayName="Horizontal","undefined"!==typeof ResponsiveOverridableProps&&ResponsiveOverridableProps&&ResponsiveOverridableProps===Object(ResponsiveOverridableProps)&&Object.isExtensible(ResponsiveOverridableProps)&&Object.defineProperty(ResponsiveOverridableProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveOverridableProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveModeProps&&ResponsiveModeProps&&ResponsiveModeProps===Object(ResponsiveModeProps)&&Object.isExtensible(ResponsiveModeProps)&&Object.defineProperty(ResponsiveModeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveModeProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/responsive.tsx"}});var T=function(e){var t=A(),n=t.verticalSpacing,i=t.horizontalSpacing,l=t.breakpoint,r=e.breakpoint,o=void 0===r?l:r,p=e.vertical,b=e.horizontal,f=e.sizing,m=e.spacing,u=e.verticalAlign,d=e.horizontalAlign,O=Object(c.a)(e,["breakpoint","vertical","horizontal","sizing","spacing","verticalAlign","horizontalAlign"]),P=p&&null!=p.sizing?p.sizing:f,x=b&&null!=b.sizing?b.sizing:f,y=p&&null!=p.spacing?p.spacing:null!=m?m:n,S=b&&null!=b.spacing?b.spacing:null!=m?m:i,E=p&&null!=p.verticalAlign?p.verticalAlign:null!=u?u:null,w=p&&null!=p.horizontalAlign?p.horizontalAlign:null!=d?d:null,k=b&&null!=b.verticalAlign?b.verticalAlign:null!=u?u:null,H=b&&null!=b.horizontalAlign?b.horizontalAlign:null!=d?d:null;return C(O,a.style(a.media({minWidth:0,maxWidth:o},R({sizing:P}),j,0!==y&&F(y),"center"==E&&h,"bottom"==E&&z,"right"==w&&_,"center"==w&&v,p&&p.style),p&&p.styles&&a.media.apply(a,[{minWidth:0,maxWidth:o}].concat(Object(s.a)(p.styles))),a.media({minWidth:o+1},R({sizing:x}),g,0!==S&&G(S),"right"==H&&z,"center"==H&&h,"center"==k&&v,"bottom"==k&&_,b&&b.style),b&&b.styles&&a.media.apply(a,[{minWidth:o+1}].concat(Object(s.a)(b.styles)))),"Responsive")};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/responsive.tsx"}}),T.displayName="Responsive","undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var B=function(e){e.sizing;var t=e.spacing,n=e.justify,i=Object(c.a)(e,["sizing","spacing","justify"]),l=A(),r=l.verticalSpacing,s=l.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)r=s=t;else{var o=Object(p.a)(t,2);r=o[0],s=o[1]}return C(i,a.style(R(e),g,O,N(r,s),"content-center"==n&&h,"content-right"==n&&z,"space-between"==n&&E),"Grid")};B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),B.displayName="Grid","undefined"!==typeof FlexSpaceProps&&FlexSpaceProps&&FlexSpaceProps===Object(FlexSpaceProps)&&Object.isExtensible(FlexSpaceProps)&&Object.defineProperty(FlexSpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpaceProps",filename:"src/components/spacers.tsx"}});var M=function(e){var t=e.className,n=e.flex,l=Object(c.a)(e,["className","flex"]),r=a.classes(t,a.style(x(n)));return i.createElement("div",Object.assign({},l,{className:r,"data-comment":"FlexSpace"}))};M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpace",filename:"src/components/spacers.tsx"}}),M.displayName="FlexSpace","undefined"!==typeof SpaceProps&&SpaceProps&&SpaceProps===Object(SpaceProps)&&Object.isExtensible(SpaceProps)&&Object.defineProperty(SpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpaceProps",filename:"src/components/spacers.tsx"}});var J=function(e){var t=e.style,n=Object(c.a)(e,["style"]),l=A().horizontalSpacing,r=w(null==e.space?l:e.space),a=Object(o.a)({display:"inline-block",width:r},t);return i.createElement("div",Object.assign({},n,{style:a,"data-comment":"HorizontalSpace"}))};J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpace",filename:"src/components/spacers.tsx"}}),J.displayName="HorizontalSpace";var D=function(e){var t=e.style,n=Object(c.a)(e,["style"]),l=A().verticalSpacing,r=w(null==e.space?l:e.space),a=Object(o.a)({height:r},t);return i.createElement("div",Object.assign({},n,{style:a,"data-comment":"VerticalSpace"}))};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpace",filename:"src/components/spacers.tsx"}}),D.displayName="VerticalSpace",n.d(t,"b",function(){return H}),n.d(t,"a",function(){return L}),n.d(t,"h",function(){return V}),n.d(t,"e",function(){return W}),n.d(t,"g",function(){return T}),n.d(t,"d",function(){return B}),n.d(t,"c",function(){return M}),n.d(t,"f",function(){return J}),n.d(t,"i",function(){return D})}}]);
//# sourceMappingURL=src-docs-common-common-types~src-docs-components-grid~src-docs-components-horizontal~src-docs-compon~d04418b3.596eb6f5e8096cc3d481.js.map