(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"Star",function(){return a}),n.d(t,"BlueDiv",function(){return s}),n.d(t,"PinkDiv",function(){return c}),n.d(t,"Label",function(){return b}),n.d(t,"Input",function(){return u}),n.d(t,"buttonClass",function(){return f}),n.d(t,"Button",function(){return d}),n.d(t,"DemoProfile",function(){return g});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),l=n.n(r),o=n("./node_modules/typestyle/lib.es2015/index.js"),a=function(){var e="https://ghbtns.com/github-btn.html?user=basarat&repo=gls&type=star&count=true";return l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("a",{style:{marginRight:"15px"},href:e,target:"_blank"},"Powered by your \u2b50s"),l.a.createElement("iframe",{src:e,style:{border:"none",marginBottom:"-3px"},scrolling:"0",width:"170px",height:"20px"}))};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Star",filename:"src/demos/index.tsx"}});var s=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var c=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var p=o.style({}),b=function(e){return l.a.createElement("label",{className:p,children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var m=o.style({width:"calc(100% - 5px)",fontSize:"20px"}),u=function(e){return l.a.createElement("input",{className:m})};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var f=o.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var d=function(e){e.className;var t=Object(i.a)(e,["className"]);return l.a.createElement("button",Object.assign({},t,{type:"button",className:o.classes(f,e.className)}))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}});var g=function(e){var t=e.size;return l.a.createElement("img",{style:{borderRadius:"50%",width:"".concat(t,"px"),height:"".concat(t,"px")},src:"http://placekitten.com/g/".concat(t,"/").concat(t)})};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DemoProfile",filename:"src/demos/index.tsx"}})},"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/react/index.js"),r=n.n(i),l=r.a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof CSSLength&&CSSLength&&CSSLength===Object(CSSLength)&&Object.isExtensible(CSSLength)&&Object.defineProperty(CSSLength,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSLength",filename:"src/common.tsx"}}),"undefined"!==typeof CSSBox&&CSSBox&&CSSBox===Object(CSSBox)&&Object.isExtensible(CSSBox)&&Object.defineProperty(CSSBox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CSSBox",filename:"src/common.tsx"}}),"undefined"!==typeof Sizing&&Sizing&&Sizing===Object(Sizing)&&Object.isExtensible(Sizing)&&Object.defineProperty(Sizing,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Sizing",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SpacingProp&&SpacingProp&&SpacingProp===Object(SpacingProp)&&Object.isExtensible(SpacingProp)&&Object.defineProperty(SpacingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProp",filename:"src/common.tsx"}}),"undefined"!==typeof AlignmentProps&&AlignmentProps&&AlignmentProps===Object(AlignmentProps)&&Object.isExtensible(AlignmentProps)&&Object.defineProperty(AlignmentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlignmentProps",filename:"src/common.tsx"}}),"undefined"!==typeof AlignmentInVerticalProps&&AlignmentInVerticalProps&&AlignmentInVerticalProps===Object(AlignmentInVerticalProps)&&Object.isExtensible(AlignmentInVerticalProps)&&Object.defineProperty(AlignmentInVerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlignmentInVerticalProps",filename:"src/common.tsx"}}),"undefined"!==typeof AlignmentInHorizontalProps&&AlignmentInHorizontalProps&&AlignmentInHorizontalProps===Object(AlignmentInHorizontalProps)&&Object.isExtensible(AlignmentInHorizontalProps)&&Object.defineProperty(AlignmentInHorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlignmentInHorizontalProps",filename:"src/common.tsx"}}),"undefined"!==typeof BaseProps&&BaseProps&&BaseProps===Object(BaseProps)&&Object.isExtensible(BaseProps)&&Object.defineProperty(BaseProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BaseProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof Scroll&&Scroll&&Scroll===Object(Scroll)&&Object.isExtensible(Scroll)&&Object.defineProperty(Scroll,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Scroll",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof StyleProp&&StyleProp&&StyleProp===Object(StyleProp)&&Object.isExtensible(StyleProp)&&Object.defineProperty(StyleProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyleProp",filename:"src/common.tsx"}}),"undefined"!==typeof ClassNameProp&&ClassNameProp&&ClassNameProp===Object(ClassNameProp)&&Object.isExtensible(ClassNameProp)&&Object.defineProperty(ClassNameProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClassNameProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}});var o=n("./node_modules/typestyle/lib.es2015/index.js");function a(){Object(o.cssRaw)("\n    html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n    ".trim())}function s(e){a(),Object(o.cssRule)("html",{"-moz-box-sizing":"border-box","-webkit-box-sizing":"border-box",boxSizing:"border-box"}),Object(o.cssRule)("*,*:before,*:after",{boxSizing:"inherit"}),Object(o.cssRule)("html, body",{height:"100%",width:"100%",padding:0,margin:0}),e&&Object(o.cssRule)(e,{width:"100%",height:"100%"})}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"normalize",filename:"src/base/normalize.ts"}}),s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"base",filename:"src/base/base.tsx"}});var c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),f={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var d={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var g={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var j={overflow:"hidden"};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHidden",filename:"src/styles/scroll.ts"}});var x={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var O=Object(o.extend)(x,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var y=Object(o.extend)(x,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var P={"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap",flexWrap:"wrap"};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"wrap",filename:"src/styles/flex.ts"}});var v={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var _={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var S={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var z={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var E={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var w={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var k={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof k&&k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}});var R={"-ms-flex-pack":"justify","-webkit-justify-content":"space-between",justifyContent:"space-between"};"undefined"!==typeof R&&R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"betweenJustified",filename:"src/styles/flex.ts"}});var H={"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around",justifyContent:"space-around"};function C(e){return"number"===typeof e?e+"px":e}function A(e){return function(e,t){if("number"==typeof e||"string"==typeof e){var n,i=C(e);return n={},Object(u.a)(n,t+"Top",i),Object(u.a)(n,t+"Right",i),Object(u.a)(n,t+"Bottom",i),Object(u.a)(n,t+"Left",i),n}if(Array.isArray(e)){if(2==e.length){var r,l=e.map(C),o=Object(m.a)(l,2),a=o[0],s=o[1];return r={},Object(u.a)(r,t+"Top",a),Object(u.a)(r,t+"Right",s),Object(u.a)(r,t+"Bottom",a),Object(u.a)(r,t+"Left",s),r}var c,p=e.map(C),b=Object(m.a)(p,4),f=b[0],d=b[1],g=b[2],j=b[3];return c={},Object(u.a)(c,t+"Top",f),Object(u.a)(c,t+"Right",d),Object(u.a)(c,t+"Bottom",g),Object(u.a)(c,t+"Left",j),c}var x={};return null!=e.top&&(x[t+"Top"]=C(e.top)),null!=e.right&&(x[t+"Right"]=C(e.right)),null!=e.bottom&&(x[t+"Bottom"]=C(e.bottom)),null!=e.left&&(x[t+"Left"]=C(e.left)),x}(e,"padding")}function W(e){return"hidden"==e?j:"horizontal"==e?d:"vertical"==e?g:f}function B(e,t,n){var i=e.className,l=e.padding,a=e.height,s=e.minHeight,m=e.maxHeight,u=e.width,f=e.minWidth,d=e.maxWidth,g=e.scroll,j=e.styles,x=void 0===j?[]:j,O=e.tag,y=Object(p.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return r.a.createElement(null!=O&&"name"in O&&null!=O.name?O.name:"div",Object(b.a)({className:o.classes(i,t,o.style.apply(o,[null!=g&&W(g),null!=l&&A(l),null!=a&&{height:C(a)},null!=s&&{minHeight:C(s)},null!=m&&{maxHeight:C(m)},null!=u&&{width:C(u)},null!=f&&{minWidth:C(f)},null!=d&&{maxWidth:C(d)}].concat(Object(c.a)(x)))),"data-comment":n},y,null!=O&&null!=O.props?O.props:{}))}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"content";return"content"==e?v:h("flex"==e?1:e)}function V(){var e=Object(i.useContext)(l),t=e.verticalSpacing,n=void 0===t?24:t,r=e.horizontalSpacing,o=void 0===r?24:r,a=e.breakpoint;return{verticalSpacing:n,horizontalSpacing:o,breakpoint:void 0===a?480:a}}function F(e,t){var n=[],i=e.padding,r=e.scroll,l=e.sizing,a=e.height,s=e.minHeight,b=e.maxHeight,m=e.width,u=e.minWidth,f=e.maxWidth,d=e.styles,g=Object(p.a)(e,["padding","scroll","sizing","height","minHeight","maxHeight","width","minWidth","maxWidth","styles"]);return null!=i&&n.push(A(i)),null!=r&&n.push(W(r)),null!=l&&n.push(N(l)),null!=a&&n.push({height:C(a)}),null!=s&&n.push({minHeight:C(s)}),null!=b&&n.push({maxHeight:C(b)}),null!=m&&n.push({width:C(m)}),null!=u&&n.push({minWidth:C(u)}),null!=f&&n.push({maxWidth:C(f)}),null!=d&&(n=n.concat(d)),g.className=o.classes(e.className,o.style.apply(o,Object(c.a)(n))),g}"undefined"!==typeof H&&H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"aroundJustified",filename:"src/styles/flex.ts"}}),C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"cssLengthToString",filename:"src/internal/utils.tsx"}}),A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_processPadding",filename:"src/internal/utils.tsx"}}),W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_processScroll",filename:"src/internal/utils.tsx"}}),B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createBaseTag",filename:"src/internal/utils.tsx"}}),N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_processSizing",filename:"src/internal/utils.tsx"}}),V&&V===Object(V)&&Object.isExtensible(V)&&Object.defineProperty(V,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}}),"undefined"!==typeof ComponentProps&&ComponentProps&&ComponentProps===Object(ComponentProps)&&Object.isExtensible(ComponentProps)&&Object.defineProperty(ComponentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ComponentProps",filename:"src/component/component.tsx"}}),F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"component",filename:"src/component/component.tsx"}}),"undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var M=function(e){var t=e.sizing,n=e.verticalAlign,i=void 0===n?"top":n,r=e.horizontalAlign,l=void 0===r?"left":r;return B(Object(p.a)(e,["sizing","verticalAlign","horizontalAlign"]),o.style(h(t),y,"top"==i&&E,"center"==i&&w,"bottom"==i&&k,"left"==l&&_,"center"==l&&S,"right"==l&&z),"Flex")};M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),M.displayName="Flex","undefined"!==typeof ContentProps&&ContentProps&&ContentProps===Object(ContentProps)&&Object.isExtensible(ContentProps)&&Object.defineProperty(ContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContentProps",filename:"src/components/containers.tsx"}});var I=function(e){var t=e.verticalAlign,n=void 0===t?"top":t,i=e.horizontalAlign,r=void 0===i?"left":i;return B(Object(p.a)(e,["verticalAlign","horizontalAlign"]),o.style(v,y,"top"==n&&E,"center"==n&&w,"bottom"==n&&k,"left"==r&&_,"center"==r&&S,"right"==r&&z),"Content")};I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),I.displayName="Content";var L=function(e){return{"&>*":{marginBottom:C(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/styles/spacing.ts"}});var T=function(e){return{"&>*":{marginRight:C(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=C(e),i=C(t);return{marginTop:"-"+n+" !important",marginLeft:"-"+i+" !important",$nest:{"&>*":{marginTop:n+" !important",marginLeft:i+" !important"}}}}T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/styles/spacing.ts"}}),G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/styles/spacing.ts"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var D=function(e){var t=V().verticalSpacing,n=e.sizing,i=e.spacing,r=void 0===i?t:i,l=e.verticalAlign,a=e.horizontalAlign;return B(Object(p.a)(e,["sizing","spacing","verticalAlign","horizontalAlign"]),o.style(N(n),y,0!==r&&L(r),"center"==l&&w,"bottom"==l&&k,"left"==a&&_,"center"==a&&S,"right"==a&&z),"Vertical")};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),D.displayName="Vertical","undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var J=function(e){var t=V().horizontalSpacing,n=e.sizing,i=e.spacing,r=void 0===i?t:i,l=e.verticalAlign,a=e.horizontalAlign;return B(Object(p.a)(e,["sizing","spacing","verticalAlign","horizontalAlign"]),o.style(N(n),O,0!==r&&T(r),"center"==a&&w,"right"==a&&k,"top"==l&&_,"center"==l&&S,"bottom"==l&&z),"Horizontal")};J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),J.displayName="Horizontal","undefined"!==typeof ResponsiveOverridableProps&&ResponsiveOverridableProps&&ResponsiveOverridableProps===Object(ResponsiveOverridableProps)&&Object.isExtensible(ResponsiveOverridableProps)&&Object.defineProperty(ResponsiveOverridableProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveOverridableProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof BreakpointProp&&BreakpointProp&&BreakpointProp===Object(BreakpointProp)&&Object.isExtensible(BreakpointProp)&&Object.defineProperty(BreakpointProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BreakpointProp",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveVerticalModeProps&&ResponsiveVerticalModeProps&&ResponsiveVerticalModeProps===Object(ResponsiveVerticalModeProps)&&Object.isExtensible(ResponsiveVerticalModeProps)&&Object.defineProperty(ResponsiveVerticalModeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveVerticalModeProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveHorizontalModeProps&&ResponsiveHorizontalModeProps&&ResponsiveHorizontalModeProps===Object(ResponsiveHorizontalModeProps)&&Object.isExtensible(ResponsiveHorizontalModeProps)&&Object.defineProperty(ResponsiveHorizontalModeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveHorizontalModeProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveModesProps&&ResponsiveModesProps&&ResponsiveModesProps===Object(ResponsiveModesProps)&&Object.isExtensible(ResponsiveModesProps)&&Object.defineProperty(ResponsiveModesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveModesProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveRootOnlyProps&&ResponsiveRootOnlyProps&&ResponsiveRootOnlyProps===Object(ResponsiveRootOnlyProps)&&Object.isExtensible(ResponsiveRootOnlyProps)&&Object.defineProperty(ResponsiveRootOnlyProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveRootOnlyProps",filename:"src/components/responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/responsive.tsx"}});var $=function(e){var t=V(),n=t.verticalSpacing,i=t.horizontalSpacing,r=t.breakpoint,l=e.breakpoint,a=void 0===l?r:l,s=e.vertical,b=e.horizontal,m=e.scroll,u=e.padding,f=e.height,d=e.minHeight,g=e.maxHeight,j=e.width,x=e.minWidth,P=e.maxWidth,v=e.sizing,h=e.spacing,E=Object(p.a)(e,["breakpoint","vertical","horizontal","scroll","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","sizing","spacing"]),R=s&&null!=s.scroll?s.scroll:m,H=b&&null!=b.scroll?b.scroll:m,F=s&&null!=s.padding?s.padding:u,M=b&&null!=b.padding?b.padding:u,I=s&&null!=s.height?s.height:f,G=b&&null!=b.height?b.height:f,D=s&&null!=s.minHeight?s.minHeight:d,J=b&&null!=b.minHeight?b.minHeight:d,$=s&&null!=s.maxHeight?s.maxHeight:g,X=b&&null!=b.maxHeight?b.maxHeight:g,Y=s&&null!=s.width?s.width:j,q=b&&null!=b.width?b.width:j,K=s&&null!=s.minWidth?s.minWidth:x,Q=b&&null!=b.minWidth?b.minWidth:x,U=s&&null!=s.maxWidth?s.maxWidth:P,Z=b&&null!=b.maxWidth?b.maxWidth:P,ee=s&&null!=s.sizing?s.sizing:v,te=b&&null!=b.sizing?b.sizing:v,ne=s&&null!=s.spacing?s.spacing:null!=h?h:n,ie=b&&null!=b.spacing?b.spacing:null!=h?h:i,re=s&&null!=s.verticalAlign?s.verticalAlign:null,le=s&&null!=s.horizontalAlign?s.horizontalAlign:null,oe=b&&null!=b.verticalAlign?b.verticalAlign:null,ae=b&&null!=b.horizontalAlign?b.horizontalAlign:null;return B(E,o.style(o.media({minWidth:0,maxWidth:a},N(ee),null!=F&&A(F),y,0!==ne&&L(ne),"center"==re&&w,"bottom"==re&&k,"left"==le&&_,"right"==le&&z,"center"==le&&S,null!=I&&{height:C(I)},null!=D&&{minHeight:C(D)},null!=$&&{maxHeight:C($)},null!=Y&&{width:C(Y)},null!=K&&{minWidth:C(K)},null!=U&&{maxWidth:C(U)},null!=R&&W(R)),s&&s.styles&&o.media.apply(o,[{minWidth:0,maxWidth:a}].concat(Object(c.a)(s.styles))),o.media({minWidth:a+1},N(te),null!=M&&A(M),O,0!==ie&&T(ie),"right"==ae&&k,"center"==ae&&w,"top"==oe&&_,"center"==oe&&S,"bottom"==oe&&z,null!=G&&{height:C(G)},null!=J&&{minHeight:C(J)},null!=X&&{maxHeight:C(X)},null!=q&&{width:C(q)},null!=Q&&{minWidth:C(Q)},null!=Z&&{maxWidth:C(Z)},null!=H&&W(H)),b&&b.styles&&o.media.apply(o,[{minWidth:a+1}].concat(Object(c.a)(b.styles)))),"Responsive")};$&&$===Object($)&&Object.isExtensible($)&&Object.defineProperty($,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/responsive.tsx"}}),$.displayName="Responsive","undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var X=function(e){var t=e.sizing,n=e.spacing,i=e.justify,r=Object(p.a)(e,["sizing","spacing","justify"]),l=V(),a=l.verticalSpacing,s=l.horizontalSpacing;if(null!=n)if("number"==typeof n||"string"==typeof n)a=s=n;else{var c=Object(m.a)(n,2);a=c[0],s=c[1]}return B(r,o.style(N(t),O,P,G(a,s),"center"==i&&w,"right"==i&&k,"space-between"==i&&R,"space-around"==i&&H),"Grid")};X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),X.displayName="Grid","undefined"!==typeof FlexSpacerProps&&FlexSpacerProps&&FlexSpacerProps===Object(FlexSpacerProps)&&Object.isExtensible(FlexSpacerProps)&&Object.defineProperty(FlexSpacerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpacerProps",filename:"src/components/spacers.tsx"}});var Y=function(e){var t=e.className,n=e.sizing,r=Object(p.a)(e,["className","sizing"]),l=o.classes(t,o.style(h(n)));return i.createElement("div",Object.assign({},r,{className:l,"data-comment":"FlexSpacer"}))};Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpacer",filename:"src/components/spacers.tsx"}}),Y.displayName="FlexSpacer","undefined"!==typeof SpacerProps&&SpacerProps&&SpacerProps===Object(SpacerProps)&&Object.isExtensible(SpacerProps)&&Object.defineProperty(SpacerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacerProps",filename:"src/components/spacers.tsx"}});var q=function(e){var t=e.style,n=Object(p.a)(e,["style"]),r=V().horizontalSpacing,l=C(null==e.space?r:e.space),o=Object(b.a)({display:"inline-block",width:l},t);return i.createElement("div",Object.assign({},n,{style:o,"data-comment":"HorizontalSpacer"}))};q&&q===Object(q)&&Object.isExtensible(q)&&Object.defineProperty(q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpacer",filename:"src/components/spacers.tsx"}}),q.displayName="HorizontalSpacer";var K=function(e){var t=e.style,n=Object(p.a)(e,["style"]),r=V().verticalSpacing,l=C(null==e.space?r:e.space),o=Object(b.a)({height:l},t);return i.createElement("div",Object.assign({},n,{style:o,"data-comment":"VerticalSpacer"}))};K&&K===Object(K)&&Object.isExtensible(K)&&Object.defineProperty(K,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpacer",filename:"src/components/spacers.tsx"}}),K.displayName="VerticalSpacer",n.d(t,"d",function(){return l}),n.d(t,"b",function(){return M}),n.d(t,"a",function(){return I}),n.d(t,"i",function(){return D}),n.d(t,"f",function(){return J}),n.d(t,"h",function(){return $}),n.d(t,"e",function(){return X}),n.d(t,"c",function(){return Y}),n.d(t,"g",function(){return q}),n.d(t,"j",function(){return K})}}]);
//# sourceMappingURL=src-docs-common-common-types~src-docs-common-defaults~src-docs-components-component~src-docs-compone~2cfd28b4.bb6932be752c550bdeda.js.map