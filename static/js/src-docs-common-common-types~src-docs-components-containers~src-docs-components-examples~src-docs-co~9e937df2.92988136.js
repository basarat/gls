(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/react/index.js"),r=n.n(i),l=r.a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof CSSLength&&CSSLength&&CSSLength===Object(CSSLength)&&Object.isExtensible(CSSLength)&&Object.defineProperty(CSSLength,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSLength",filename:"src/common.tsx"}}),"undefined"!==typeof CSSBox&&CSSBox&&CSSBox===Object(CSSBox)&&Object.isExtensible(CSSBox)&&Object.defineProperty(CSSBox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSBox",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SpacingProp&&SpacingProp&&SpacingProp===Object(SpacingProp)&&Object.isExtensible(SpacingProp)&&Object.defineProperty(SpacingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProp",filename:"src/common.tsx"}}),"undefined"!==typeof AlignmentProps&&AlignmentProps&&AlignmentProps===Object(AlignmentProps)&&Object.isExtensible(AlignmentProps)&&Object.defineProperty(AlignmentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlignmentProps",filename:"src/common.tsx"}}),"undefined"!==typeof BaseProps&&BaseProps&&BaseProps===Object(BaseProps)&&Object.isExtensible(BaseProps)&&Object.defineProperty(BaseProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BaseProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof StyleProp&&StyleProp&&StyleProp===Object(StyleProp)&&Object.isExtensible(StyleProp)&&Object.defineProperty(StyleProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyleProp",filename:"src/common.tsx"}}),"undefined"!==typeof ClassNameProp&&ClassNameProp&&ClassNameProp===Object(ClassNameProp)&&Object.isExtensible(ClassNameProp)&&Object.defineProperty(ClassNameProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClassNameProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/typestyle/lib.es2015/index.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var f={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var m={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var u={overflow:"hidden"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHidden",filename:"src/styles/scroll.ts"}});var d={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var g=Object(s.extend)(d,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var j=Object(s.extend)(d,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var P={"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap",flexWrap:"wrap"};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"wrap",filename:"src/styles/flex.ts"}});var O={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var x={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var v={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var _={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var S={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var h={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var z={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}});var E={"-ms-flex-pack":"justify","-webkit-justify-content":"space-between",justifyContent:"space-between"};"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"betweenJustified",filename:"src/styles/flex.ts"}});var w={"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around",justifyContent:"space-around"};function C(e){return"number"===typeof e?e+"px":e}function A(e){var t=function(e){if("number"==typeof e||"string"==typeof e){var t=C(e);return[t,t,t,t]}if(2==e.length){var n=e.map(C),i=Object(p.a)(n,2),r=i[0],l=i[1];return[r,l,r,l]}return e.map(C)}(e),n=Object(p.a)(t,4);return{paddingTop:n[0],paddingRight:n[1],paddingBottom:n[2],paddingLeft:n[3]}}function k(e,t,n){var i=e.className,l=e.padding,p=e.height,d=e.minHeight,g=e.maxHeight,j=e.width,P=e.minWidth,O=e.maxWidth,y=e.scroll,x=e.styles,v=void 0===x?[]:x,_=e.tag,S=Object(a.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return r.a.createElement(null!=_&&"name"in _&&null!=_.name?_.name:"div",Object(c.a)({className:s.classes(i,t,s.style.apply(s,[null!=y&&("hidden"==y?u:"horizontal"==y?f:"vertical"==y?m:"both"==y?b:null),null!=l&&A(l),null!=p&&{height:C(p)},null!=d&&{minHeight:C(d)},null!=g&&{maxHeight:C(g)},null!=j&&{width:C(j)},null!=P&&{minWidth:C(P)},null!=O&&{maxWidth:C(O)}].concat(Object(o.a)(v)))),"data-comment":n},S,null!=_&&null!=_.props?_.props:{}))}function R(e){var t=e.sizing,n=void 0===t?"content":t;return"content"==n?O:y("flex"==n?1:n)}function N(){var e=Object(i.useContext)(l);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing,breakpoint:null==e.breakpoint?480:e.breakpoint}}"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"aroundJustified",filename:"src/styles/flex.ts"}}),C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"cssLengthToString",filename:"src/internal/utils.tsx"}}),k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createBagTag",filename:"src/internal/utils.tsx"}}),R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processSizingProp",filename:"src/internal/utils.tsx"}}),N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}}),"undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var H=function(e){var t=e.sizing,n=e.verticalAlign,i=void 0===n?"top":n,r=e.horizontalAlign,l=void 0===r?"left":r;return k(Object(a.a)(e,["sizing","verticalAlign","horizontalAlign"]),s.style(y(t),j,"top"==i&&S,"center"==i&&h,"bottom"==i&&z,"left"==l&&x,"center"==l&&v,"right"==l&&_),"Flex")};H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),H.displayName="Flex","undefined"!==typeof ContentProps&&ContentProps&&ContentProps===Object(ContentProps)&&Object.isExtensible(ContentProps)&&Object.defineProperty(ContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContentProps",filename:"src/components/containers.tsx"}});var B=function(e){var t=e.verticalAlign,n=void 0===t?"top":t,i=e.horizontalAlign,r=void 0===i?"left":i;return k(Object(a.a)(e,["verticalAlign","horizontalAlign"]),s.style(O,j,"top"==n&&S,"center"==n&&h,"bottom"==n&&z,"left"==r&&x,"center"==r&&v,"right"==r&&_),"Content")};B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),B.displayName="Content";var F=function(e){return{"&>*":{marginBottom:C(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/styles/spacing.ts"}});var V=function(e){return{"&>*":{marginRight:C(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=C(e),i=C(t);return{marginTop:"-"+n+" !important",marginLeft:"-"+i+" !important",$nest:{"&>*":{marginTop:n+" !important",marginLeft:i+" !important"}}}}V&&V===Object(V)&&Object.isExtensible(V)&&Object.defineProperty(V,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/styles/spacing.ts"}}),W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var L=function(e){var t=N().verticalSpacing,n=(e.sizing,e.spacing),i=void 0===n?t:n,r=e.verticalAlign,l=e.horizontalAlign;return k(Object(a.a)(e,["sizing","spacing","verticalAlign","horizontalAlign"]),s.style(R(e),j,0!==t&&F(i),"center"==r&&h,"bottom"==r&&z,"left"==l&&x,"center"==l&&v,"right"==l&&_),"Vertical")};L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),L.displayName="Vertical","undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var T=function(e){var t=N().horizontalSpacing,n=(e.sizing,e.spacing),i=void 0===n?t:n,r=e.verticalAlign,l=e.horizontalAlign;return k(Object(a.a)(e,["sizing","spacing","verticalAlign","horizontalAlign"]),s.style(R(e),g,0!==t&&V(i),"center"==l&&h,"right"==l&&z,"top"==r&&x,"center"==r&&v,"bottom"==r&&_),"Horizontal")};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),T.displayName="Horizontal","undefined"!==typeof ResponsiveOverridableProps&&ResponsiveOverridableProps&&ResponsiveOverridableProps===Object(ResponsiveOverridableProps)&&Object.isExtensible(ResponsiveOverridableProps)&&Object.defineProperty(ResponsiveOverridableProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveOverridableProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveModeProps&&ResponsiveModeProps&&ResponsiveModeProps===Object(ResponsiveModeProps)&&Object.isExtensible(ResponsiveModeProps)&&Object.defineProperty(ResponsiveModeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveModeProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/responsive.tsx"}});var G=function(e){var t=N(),n=t.verticalSpacing,i=t.horizontalSpacing,r=t.breakpoint,l=e.breakpoint,c=void 0===l?r:l,p=e.vertical,b=e.horizontal,f=e.sizing,m=e.spacing,u=e.verticalAlign,d=e.horizontalAlign,P=Object(a.a)(e,["breakpoint","vertical","horizontal","sizing","spacing","verticalAlign","horizontalAlign"]),O=p&&null!=p.sizing?p.sizing:f,y=b&&null!=b.sizing?b.sizing:f,x=p&&null!=p.spacing?p.spacing:null!=m?m:n,S=b&&null!=b.spacing?b.spacing:null!=m?m:i,E=p&&null!=p.verticalAlign?p.verticalAlign:null!=u?u:null,w=p&&null!=p.horizontalAlign?p.horizontalAlign:null!=d?d:null,C=b&&null!=b.verticalAlign?b.verticalAlign:null!=u?u:null,A=b&&null!=b.horizontalAlign?b.horizontalAlign:null!=d?d:null;return k(P,s.style(s.media({minWidth:0,maxWidth:c},R({sizing:O}),j,0!==x&&F(x),"center"==E&&h,"bottom"==E&&z,"right"==w&&_,"center"==w&&v,p&&p.style),p&&p.styles&&s.media.apply(s,[{minWidth:0,maxWidth:c}].concat(Object(o.a)(p.styles))),s.media({minWidth:c+1},R({sizing:y}),g,0!==S&&V(S),"right"==A&&z,"center"==A&&h,"center"==C&&v,"bottom"==C&&_,b&&b.style),b&&b.styles&&s.media.apply(s,[{minWidth:c+1}].concat(Object(o.a)(b.styles)))),"Responsive")};G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/responsive.tsx"}}),G.displayName="Responsive","undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var J=function(e){e.sizing;var t=e.spacing,n=e.justify,i=Object(a.a)(e,["sizing","spacing","justify"]),r=N(),l=r.verticalSpacing,o=r.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)l=o=t;else{var c=Object(p.a)(t,2);l=c[0],o=c[1]}return k(i,s.style(R(e),g,P,W(l,o),"center"==n&&h,"right"==n&&z,"space-between"==n&&E,"space-around"==n&&w),"Grid")};J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),J.displayName="Grid","undefined"!==typeof FlexSpacerProps&&FlexSpacerProps&&FlexSpacerProps===Object(FlexSpacerProps)&&Object.isExtensible(FlexSpacerProps)&&Object.defineProperty(FlexSpacerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpacerProps",filename:"src/components/spacers.tsx"}});var M=function(e){var t=e.className,n=e.sizing,r=Object(a.a)(e,["className","sizing"]),l=s.classes(t,s.style(y(n)));return i.createElement("div",Object.assign({},r,{className:l,"data-comment":"FlexSpacer"}))};M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpacer",filename:"src/components/spacers.tsx"}}),M.displayName="FlexSpacer","undefined"!==typeof SpacerProps&&SpacerProps&&SpacerProps===Object(SpacerProps)&&Object.isExtensible(SpacerProps)&&Object.defineProperty(SpacerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacerProps",filename:"src/components/spacers.tsx"}});var D=function(e){var t=e.style,n=Object(a.a)(e,["style"]),r=N().horizontalSpacing,l=C(null==e.space?r:e.space),s=Object(c.a)({display:"inline-block",width:l},t);return i.createElement("div",Object.assign({},n,{style:s,"data-comment":"HorizontalSpacer"}))};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpacer",filename:"src/components/spacers.tsx"}}),D.displayName="HorizontalSpacer";var I=function(e){var t=e.style,n=Object(a.a)(e,["style"]),r=N().verticalSpacing,l=C(null==e.space?r:e.space),s=Object(c.a)({height:l},t);return i.createElement("div",Object.assign({},n,{style:s,"data-comment":"VerticalSpacer"}))};I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpacer",filename:"src/components/spacers.tsx"}}),I.displayName="VerticalSpacer",n.d(t,"b",function(){return H}),n.d(t,"a",function(){return B}),n.d(t,"h",function(){return L}),n.d(t,"e",function(){return T}),n.d(t,"g",function(){return G}),n.d(t,"d",function(){return J}),n.d(t,"c",function(){return M}),n.d(t,"f",function(){return D}),n.d(t,"i",function(){return I})}}]);
//# sourceMappingURL=src-docs-common-common-types~src-docs-components-containers~src-docs-components-examples~src-docs-co~9e937df2.fbf16aa72cdb4f602ee2.js.map