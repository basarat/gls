(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"Star",function(){return o}),n.d(t,"BlueDiv",function(){return s}),n.d(t,"PinkDiv",function(){return c}),n.d(t,"Label",function(){return b}),n.d(t,"Input",function(){return f}),n.d(t,"buttonClass",function(){return u}),n.d(t,"Button",function(){return d}),n.d(t,"DemoProfile",function(){return g});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),l=n.n(r),a=n("./node_modules/typestyle/lib.es2015/index.js"),o=function(){var e="https://ghbtns.com/github-btn.html?user=basarat&repo=gls&type=star&count=true";return l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("a",{style:{marginRight:"15px"},href:e,target:"_blank"},"Powered by your \u2b50s"),l.a.createElement("iframe",{src:e,style:{border:"none",marginBottom:"-3px"},scrolling:"0",width:"170px",height:"20px"}))};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Star",filename:"src/demos/index.tsx"}});var s=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var c=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var p=a.style({}),b=function(e){return l.a.createElement("label",{className:p,children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var m=a.style({width:"calc(100% - 5px)",fontSize:"20px"}),f=function(e){return l.a.createElement("input",{className:m})};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var u=a.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var d=function(e){e.className;var t=Object(i.a)(e,["className"]);return l.a.createElement("button",Object.assign({},t,{type:"button",className:a.classes(u,e.className)}))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}});var g=function(e){var t=e.size;return l.a.createElement("img",{style:{borderRadius:"50%",width:"".concat(t,"px"),height:"".concat(t,"px")},src:"http://placekitten.com/g/".concat(t,"/").concat(t)})};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DemoProfile",filename:"src/demos/index.tsx"}})},"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/react/index.js"),r=n.n(i),l=r.a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof CSSLength&&CSSLength&&CSSLength===Object(CSSLength)&&Object.isExtensible(CSSLength)&&Object.defineProperty(CSSLength,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSLength",filename:"src/common.tsx"}}),"undefined"!==typeof CSSBox&&CSSBox&&CSSBox===Object(CSSBox)&&Object.isExtensible(CSSBox)&&Object.defineProperty(CSSBox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSBox",filename:"src/common.tsx"}}),"undefined"!==typeof Sizing&&Sizing&&Sizing===Object(Sizing)&&Object.isExtensible(Sizing)&&Object.defineProperty(Sizing,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Sizing",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SpacingProp&&SpacingProp&&SpacingProp===Object(SpacingProp)&&Object.isExtensible(SpacingProp)&&Object.defineProperty(SpacingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProp",filename:"src/common.tsx"}}),"undefined"!==typeof AlignmentProps&&AlignmentProps&&AlignmentProps===Object(AlignmentProps)&&Object.isExtensible(AlignmentProps)&&Object.defineProperty(AlignmentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlignmentProps",filename:"src/common.tsx"}}),"undefined"!==typeof AlignmentInVerticalProps&&AlignmentInVerticalProps&&AlignmentInVerticalProps===Object(AlignmentInVerticalProps)&&Object.isExtensible(AlignmentInVerticalProps)&&Object.defineProperty(AlignmentInVerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlignmentInVerticalProps",filename:"src/common.tsx"}}),"undefined"!==typeof AlignmentInHorizontalProps&&AlignmentInHorizontalProps&&AlignmentInHorizontalProps===Object(AlignmentInHorizontalProps)&&Object.isExtensible(AlignmentInHorizontalProps)&&Object.defineProperty(AlignmentInHorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlignmentInHorizontalProps",filename:"src/common.tsx"}}),"undefined"!==typeof BaseProps&&BaseProps&&BaseProps===Object(BaseProps)&&Object.isExtensible(BaseProps)&&Object.defineProperty(BaseProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BaseProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof Scroll&&Scroll&&Scroll===Object(Scroll)&&Object.isExtensible(Scroll)&&Object.defineProperty(Scroll,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Scroll",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof StyleProp&&StyleProp&&StyleProp===Object(StyleProp)&&Object.isExtensible(StyleProp)&&Object.defineProperty(StyleProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyleProp",filename:"src/common.tsx"}}),"undefined"!==typeof ClassNameProp&&ClassNameProp&&ClassNameProp===Object(ClassNameProp)&&Object.isExtensible(ClassNameProp)&&Object.defineProperty(ClassNameProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClassNameProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/typestyle/lib.es2015/index.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),m={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var f={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var u={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var d={overflow:"hidden"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHidden",filename:"src/styles/scroll.ts"}});var g={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var j=Object(o.extend)(g,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var O=Object(o.extend)(g,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var P={"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap",flexWrap:"wrap"};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"wrap",filename:"src/styles/flex.ts"}});var x={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var y={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var h={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var _={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var S={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var z={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var E={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}});var R={"-ms-flex-pack":"justify","-webkit-justify-content":"space-between",justifyContent:"space-between"};"undefined"!==typeof R&&R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"betweenJustified",filename:"src/styles/flex.ts"}});var w={"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around",justifyContent:"space-around"};function k(e){return"number"===typeof e?e+"px":e}function H(e){return function(e,t){if("number"==typeof e||"string"==typeof e){var n,i=k(e);return n={},Object(b.a)(n,t+"Top",i),Object(b.a)(n,t+"Right",i),Object(b.a)(n,t+"Bottom",i),Object(b.a)(n,t+"Left",i),n}if(Array.isArray(e)){if(2==e.length){var r,l=e.map(k),a=Object(p.a)(l,2),o=a[0],s=a[1];return r={},Object(b.a)(r,t+"Top",o),Object(b.a)(r,t+"Right",s),Object(b.a)(r,t+"Bottom",o),Object(b.a)(r,t+"Left",s),r}var c,m=e.map(k),f=Object(p.a)(m,4),u=f[0],d=f[1],g=f[2],j=f[3];return c={},Object(b.a)(c,t+"Top",u),Object(b.a)(c,t+"Right",d),Object(b.a)(c,t+"Bottom",g),Object(b.a)(c,t+"Left",j),c}var O={};return null!=e.top&&(O[t+"Top"]=k(e.top)),null!=e.right&&(O[t+"Right"]=k(e.right)),null!=e.bottom&&(O[t+"Bottom"]=k(e.bottom)),null!=e.left&&(O[t+"Left"]=k(e.left)),O}(e,"padding")}function A(e){return"hidden"==e?d:"horizontal"==e?f:"vertical"==e?u:m}function C(e,t,n){var i=e.className,l=e.padding,p=e.height,b=e.minHeight,m=e.maxHeight,f=e.width,u=e.minWidth,d=e.maxWidth,g=e.scroll,j=e.styles,O=void 0===j?[]:j,P=e.tag,x=Object(a.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return r.a.createElement(null!=P&&"name"in P&&null!=P.name?P.name:"div",Object(c.a)({className:o.classes(i,t,o.style.apply(o,[null!=g&&A(g),null!=l&&H(l),null!=p&&{height:k(p)},null!=b&&{minHeight:k(b)},null!=m&&{maxHeight:k(m)},null!=f&&{width:k(f)},null!=u&&{minWidth:k(u)},null!=d&&{maxWidth:k(d)}].concat(Object(s.a)(O)))),"data-comment":n},x,null!=P&&null!=P.props?P.props:{}))}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"content";return"content"==e?x:v("flex"==e?1:e)}function W(){var e=Object(i.useContext)(l),t=e.verticalSpacing,n=void 0===t?24:t,r=e.horizontalSpacing,a=void 0===r?24:r,o=e.breakpoint;return{verticalSpacing:n,horizontalSpacing:a,breakpoint:void 0===o?480:o}}"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"aroundJustified",filename:"src/styles/flex.ts"}}),k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"cssLengthToString",filename:"src/internal/utils.tsx"}}),H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_processPadding",filename:"src/internal/utils.tsx"}}),A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_processScroll",filename:"src/internal/utils.tsx"}}),C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createBaseTag",filename:"src/internal/utils.tsx"}}),B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_processSizing",filename:"src/internal/utils.tsx"}}),W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}}),"undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var N=function(e){var t=e.sizing,n=e.verticalAlign,i=void 0===n?"top":n,r=e.horizontalAlign,l=void 0===r?"left":r;return C(Object(a.a)(e,["sizing","verticalAlign","horizontalAlign"]),o.style(v(t),O,"top"==i&&S,"center"==i&&z,"bottom"==i&&E,"left"==l&&y,"center"==l&&h,"right"==l&&_),"Flex")};N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),N.displayName="Flex","undefined"!==typeof ContentProps&&ContentProps&&ContentProps===Object(ContentProps)&&Object.isExtensible(ContentProps)&&Object.defineProperty(ContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContentProps",filename:"src/components/containers.tsx"}});var V=function(e){var t=e.verticalAlign,n=void 0===t?"top":t,i=e.horizontalAlign,r=void 0===i?"left":i;return C(Object(a.a)(e,["verticalAlign","horizontalAlign"]),o.style(x,O,"top"==n&&S,"center"==n&&z,"bottom"==n&&E,"left"==r&&y,"center"==r&&h,"right"==r&&_),"Content")};V&&V===Object(V)&&Object.isExtensible(V)&&Object.defineProperty(V,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),V.displayName="Content";var F=function(e){return{"&>*":{marginBottom:k(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/styles/spacing.ts"}});var M=function(e){return{"&>*":{marginRight:k(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=k(e),i=k(t);return{marginTop:"-"+n+" !important",marginLeft:"-"+i+" !important",$nest:{"&>*":{marginTop:n+" !important",marginLeft:i+" !important"}}}}M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/styles/spacing.ts"}}),I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var L=function(e){var t=W().verticalSpacing,n=e.sizing,i=e.spacing,r=void 0===i?t:i,l=e.verticalAlign,s=e.horizontalAlign;return C(Object(a.a)(e,["sizing","spacing","verticalAlign","horizontalAlign"]),o.style(B(n),O,0!==r&&F(r),"center"==l&&z,"bottom"==l&&E,"left"==s&&y,"center"==s&&h,"right"==s&&_),"Vertical")};L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),L.displayName="Vertical","undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var T=function(e){var t=W().horizontalSpacing,n=e.sizing,i=e.spacing,r=void 0===i?t:i,l=e.verticalAlign,s=e.horizontalAlign;return C(Object(a.a)(e,["sizing","spacing","verticalAlign","horizontalAlign"]),o.style(B(n),j,0!==r&&M(r),"center"==s&&z,"right"==s&&E,"top"==l&&y,"center"==l&&h,"bottom"==l&&_),"Horizontal")};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),T.displayName="Horizontal","undefined"!==typeof ResponsiveOverridableProps&&ResponsiveOverridableProps&&ResponsiveOverridableProps===Object(ResponsiveOverridableProps)&&Object.isExtensible(ResponsiveOverridableProps)&&Object.defineProperty(ResponsiveOverridableProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveOverridableProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof BreakpointProp&&BreakpointProp&&BreakpointProp===Object(BreakpointProp)&&Object.isExtensible(BreakpointProp)&&Object.defineProperty(BreakpointProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BreakpointProp",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveVerticalModeProps&&ResponsiveVerticalModeProps&&ResponsiveVerticalModeProps===Object(ResponsiveVerticalModeProps)&&Object.isExtensible(ResponsiveVerticalModeProps)&&Object.defineProperty(ResponsiveVerticalModeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveVerticalModeProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveHorizontalModeProps&&ResponsiveHorizontalModeProps&&ResponsiveHorizontalModeProps===Object(ResponsiveHorizontalModeProps)&&Object.isExtensible(ResponsiveHorizontalModeProps)&&Object.defineProperty(ResponsiveHorizontalModeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveHorizontalModeProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveModesProps&&ResponsiveModesProps&&ResponsiveModesProps===Object(ResponsiveModesProps)&&Object.isExtensible(ResponsiveModesProps)&&Object.defineProperty(ResponsiveModesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveModesProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveRootOnlyProps&&ResponsiveRootOnlyProps&&ResponsiveRootOnlyProps===Object(ResponsiveRootOnlyProps)&&Object.isExtensible(ResponsiveRootOnlyProps)&&Object.defineProperty(ResponsiveRootOnlyProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveRootOnlyProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/responsive.tsx"}});var G=function(e){var t=W(),n=t.verticalSpacing,i=t.horizontalSpacing,r=t.breakpoint,l=e.breakpoint,c=void 0===l?r:l,p=e.vertical,b=e.horizontal,m=e.scroll,f=e.padding,u=e.height,d=e.minHeight,g=e.maxHeight,P=e.width,x=e.minWidth,v=e.maxWidth,S=e.sizing,R=e.spacing,w=Object(a.a)(e,["breakpoint","vertical","horizontal","scroll","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","sizing","spacing"]),N=p&&null!=p.scroll?p.scroll:m,V=b&&null!=b.scroll?b.scroll:m,I=p&&null!=p.padding?p.padding:f,L=b&&null!=b.padding?b.padding:f,T=p&&null!=p.height?p.height:u,G=b&&null!=b.height?b.height:u,D=p&&null!=p.minHeight?p.minHeight:d,J=b&&null!=b.minHeight?b.minHeight:d,$=p&&null!=p.maxHeight?p.maxHeight:g,X=b&&null!=b.maxHeight?b.maxHeight:g,Y=p&&null!=p.width?p.width:P,q=b&&null!=b.width?b.width:P,K=p&&null!=p.minWidth?p.minWidth:x,Q=b&&null!=b.minWidth?b.minWidth:x,U=p&&null!=p.maxWidth?p.maxWidth:v,Z=b&&null!=b.maxWidth?b.maxWidth:v,ee=p&&null!=p.sizing?p.sizing:S,te=b&&null!=b.sizing?b.sizing:S,ne=p&&null!=p.spacing?p.spacing:null!=R?R:n,ie=b&&null!=b.spacing?b.spacing:null!=R?R:i,re=p&&null!=p.verticalAlign?p.verticalAlign:null,le=p&&null!=p.horizontalAlign?p.horizontalAlign:null,ae=b&&null!=b.verticalAlign?b.verticalAlign:null,oe=b&&null!=b.horizontalAlign?b.horizontalAlign:null;return C(w,o.style(o.media({minWidth:0,maxWidth:c},B(ee),null!=I&&H(I),O,0!==ne&&F(ne),"center"==re&&z,"bottom"==re&&E,"left"==le&&y,"right"==le&&_,"center"==le&&h,null!=T&&{height:k(T)},null!=D&&{minHeight:k(D)},null!=$&&{maxHeight:k($)},null!=Y&&{width:k(Y)},null!=K&&{minWidth:k(K)},null!=U&&{maxWidth:k(U)},null!=N&&A(N)),p&&p.styles&&o.media.apply(o,[{minWidth:0,maxWidth:c}].concat(Object(s.a)(p.styles))),o.media({minWidth:c+1},B(te),null!=L&&H(L),j,0!==ie&&M(ie),"right"==oe&&E,"center"==oe&&z,"top"==ae&&y,"center"==ae&&h,"bottom"==ae&&_,null!=G&&{height:k(G)},null!=J&&{minHeight:k(J)},null!=X&&{maxHeight:k(X)},null!=q&&{width:k(q)},null!=Q&&{minWidth:k(Q)},null!=Z&&{maxWidth:k(Z)},null!=V&&A(V)),b&&b.styles&&o.media.apply(o,[{minWidth:c+1}].concat(Object(s.a)(b.styles)))),"Responsive")};G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/responsive.tsx"}}),G.displayName="Responsive","undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var D=function(e){var t=e.sizing,n=e.spacing,i=e.justify,r=Object(a.a)(e,["sizing","spacing","justify"]),l=W(),s=l.verticalSpacing,c=l.horizontalSpacing;if(null!=n)if("number"==typeof n||"string"==typeof n)s=c=n;else{var b=Object(p.a)(n,2);s=b[0],c=b[1]}return C(r,o.style(B(t),j,P,I(s,c),"center"==i&&z,"right"==i&&E,"space-between"==i&&R,"space-around"==i&&w),"Grid")};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),D.displayName="Grid","undefined"!==typeof FlexSpacerProps&&FlexSpacerProps&&FlexSpacerProps===Object(FlexSpacerProps)&&Object.isExtensible(FlexSpacerProps)&&Object.defineProperty(FlexSpacerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpacerProps",filename:"src/components/spacers.tsx"}});var J=function(e){var t=e.className,n=e.sizing,r=Object(a.a)(e,["className","sizing"]),l=o.classes(t,o.style(v(n)));return i.createElement("div",Object.assign({},r,{className:l,"data-comment":"FlexSpacer"}))};J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpacer",filename:"src/components/spacers.tsx"}}),J.displayName="FlexSpacer","undefined"!==typeof SpacerProps&&SpacerProps&&SpacerProps===Object(SpacerProps)&&Object.isExtensible(SpacerProps)&&Object.defineProperty(SpacerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacerProps",filename:"src/components/spacers.tsx"}});var $=function(e){var t=e.style,n=Object(a.a)(e,["style"]),r=W().horizontalSpacing,l=k(null==e.space?r:e.space),o=Object(c.a)({display:"inline-block",width:l},t);return i.createElement("div",Object.assign({},n,{style:o,"data-comment":"HorizontalSpacer"}))};$&&$===Object($)&&Object.isExtensible($)&&Object.defineProperty($,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpacer",filename:"src/components/spacers.tsx"}}),$.displayName="HorizontalSpacer";var X=function(e){var t=e.style,n=Object(a.a)(e,["style"]),r=W().verticalSpacing,l=k(null==e.space?r:e.space),o=Object(c.a)({height:l},t);return i.createElement("div",Object.assign({},n,{style:o,"data-comment":"VerticalSpacer"}))};X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpacer",filename:"src/components/spacers.tsx"}}),X.displayName="VerticalSpacer",n.d(t,"d",function(){return l}),n.d(t,"b",function(){return N}),n.d(t,"a",function(){return V}),n.d(t,"i",function(){return L}),n.d(t,"f",function(){return T}),n.d(t,"h",function(){return G}),n.d(t,"e",function(){return D}),n.d(t,"c",function(){return J}),n.d(t,"g",function(){return $}),n.d(t,"j",function(){return X})}}]);
//# sourceMappingURL=src-docs-common-common-types~src-docs-common-defaults~src-docs-components-containers~src-docs-compon~217ff528.f440e3d01b7bb6e47c3d.js.map