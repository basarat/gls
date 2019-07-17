(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/docs/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),a={},c="wrapper";function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)(c,Object.assign({},a,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"general-layout-system"},"General Layout System"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"gls")," is a simple (but powerful) general purpose layout system for React \ud83c\udf39. "),Object(i.b)("h1",{id:"css-concepts"},"CSS concepts"),Object(i.b)("p",null,"There are a few key CSS concepts developed with GLS for maintainable layouts in the world of components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Space"),Object(i.b)("li",{parentName:"ul"},"Flex")),Object(i.b)("h2",{id:"external-airspace"},"External Airspace"),Object(i.b)("p",null,"A fundamental rule (broken quite commonly in the wild sadly) is that a component only renders stuff in its airspace. That is, it does not bleed out resulting in conflicts with its neighbours. "),Object(i.b)("p",null,"Consider a simple'ol ",Object(i.b)("inlineCode",{parentName:"p"},"div"),". We'll give it a background ",Object(i.b)("inlineCode",{parentName:"p"},"lightskyblue")," to denote its airspace. It can render whatever it wants in its airspace: "),Object(i.b)(o.c,{__position:0,__code:"<div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello")),Object(i.b)("p",null,"Now try and layout two of these divs together, a naive way would be to add margins:  "),Object(i.b)(o.c,{__position:1,__code:"<div style={{ backgroundColor: 'lightskyblue', marginBottom: '24px' }}>\n  Hello\n</div>\n<div style={{ backgroundColor: 'lightpink', marginBottom: '24px' }}>\n  World\n</div>\n<div style={{ backgroundColor: 'darkorange' }}>Spacing</div>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue",marginBottom:"24px"}},"Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink",marginBottom:"24px"}},"World"),Object(i.b)("div",{style:{backgroundColor:"darkorange"}},"Spacing")),Object(i.b)("p",null,"A fundamental issue with ",Object(i.b)("inlineCode",{parentName:"p"},"<div style={{marginBottom: '24px'}}>Hello</div>")," component, is that its not useable in isolation. If we render it alone, note that its leaking out ",Object(i.b)("em",{parentName:"p"},"assuming")," its going to be used by something that's going to add another sibling after it: "),Object(i.b)(o.c,{__position:2,__code:"<div style={{ backgroundColor: 'lightskyblue', marginBottom: '24px' }}>\n  Hello\n</div>\n<i\n  style={{\n    position: 'absolute',\n    bottom: '0px',\n    color: 'lightgrey',\n    textAlign: 'center',\n  }}\n>\n  Notice this excess space at the bottom\n</i>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue",marginBottom:"24px"}},"Hello"),Object(i.b)("i",{style:{position:"absolute",bottom:"0px",color:"lightgrey",textAlign:"center"}},"Notice this excess space at the bottom")),Object(i.b)("p",null,"So instead of putting the responsiblity of ",Object(i.b)("em",{parentName:"p"},"space seperation")," on the component, it can be better managed by the container, e.g. the ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," component provided by gls can drive the margins of its children to create vertical spacing between them."),Object(i.b)(o.c,{__position:3,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'darkorange' }}>Spacing</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)(r.c,{mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(i.b)("div",{style:{backgroundColor:"darkorange"}},"Spacing"))),Object(i.b)("p",null,"And no leaking margins occur with lesser children:"),Object(i.b)(o.c,{__position:4,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)(r.c,{mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(i.b)("p",null,"Furthermore the ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," component itself doesn't bleed into external airspace, allowing you to compose two ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical"),"s seamlessly: "),Object(i.b)(o.c,{__position:5,__code:"<Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Second Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Second World</div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)(r.c,{mdxType:"Vertical"},Object(i.b)(r.c,{mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(i.b)(r.c,{mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Second Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Second World")))),Object(i.b)("p",null,"Because ",Object(i.b)("inlineCode",{parentName:"p"},"margin"),"s fundamentally result in airspace violation, do not use margins at the root of your components."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"RULE 1: Do not use ",Object(i.b)("inlineCode",{parentName:"p"},"margin")," at the root of your component")),Object(i.b)("p",null,"This rule is also what makes it possible for parents to space children with margins. We also provide a ",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," container to layout children horizontally: "),Object(i.b)(o.c,{__position:6,__code:"<Horizontal>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)(r.b,{mdxType:"Horizontal"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Component design tip: never use margins at the root of your component. Internally it is fine to move a ",Object(i.b)("strong",{parentName:"p"},"static number")," children around with it. If you have ",Object(i.b)("strong",{parentName:"p"},"dynamic number")," of children, use our ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," etc. ")),Object(i.b)("h2",{id:"internal-airspace"},"Internal Airspace"),Object(i.b)("p",null,"A parent uses ",Object(i.b)("inlineCode",{parentName:"p"},"margin"),"s to create visual space ",Object(i.b)("em",{parentName:"p"},"between its children"),". A parent can use ",Object(i.b)("em",{parentName:"p"},"padding")," to insert space ",Object(i.b)("em",{parentName:"p"},"inside")," its border to push the children (internal airspace management). For example a button is a common example that has padding to seperate its content from its border:"),Object(i.b)(o.c,{__position:7,__code:"<button\n  style={{\n    backgroundColor: 'lightskyblue',\n    fontSize: '24px',\n    padding: '24px',\n  }}\n>\n  Hello world\n</button>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},style:{textAlign:"center"},mdxType:"Playground"},Object(i.b)("button",{style:{backgroundColor:"lightskyblue",fontSize:"24px",padding:"24px"}},"Hello world")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"RULE 2: Use ",Object(i.b)("inlineCode",{parentName:"p"},"padding")," explicitly for internal ",Object(i.b)("em",{parentName:"p"},"border")," airspace")),Object(i.b)("p",null,"Commonly in root level content containers (close children of ",Object(i.b)("inlineCode",{parentName:"p"},"body"),") will use padding to create an ",Object(i.b)("em",{parentName:"p"},"island")," effect. For example we are putting a ",Object(i.b)("inlineCode",{parentName:"p"},"padding")," on the root ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," below to seperate it from its children (sub ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," layouts):"),Object(i.b)(o.c,{__position:8,__code:"{/** Island */}\n<Vertical style={{ padding: '24px' }}>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Horizontal>\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Second Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>Second World</Flex>\n  </Horizontal>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(i.b)(r.c,{style:{padding:"24px"},mdxType:"Vertical"},Object(i.b)(r.c,{mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(i.b)(r.b,{mdxType:"Horizontal"},Object(i.b)(r.a,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Second Hello"),Object(i.b)(r.a,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"Second World")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Component design tip: ",Object(i.b)("inlineCode",{parentName:"p"},"padding")," can be used in any components that have an explict border (e.g buttons, user profile cards) as well as layout containers that might have implicit borders, due to color seperation (e.g. form containers).")),Object(i.b)("h1",{id:"components"},"Components"),Object(i.b)("p",null,"All our components are just ",Object(i.b)("inlineCode",{parentName:"p"},"div")," elements with atom CSS generated by typestyle. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"They support ",Object(i.b)("em",{parentName:"li"},"all")," the properties supported by a ",Object(i.b)("inlineCode",{parentName:"li"},"div"),"."),Object(i.b)("li",{parentName:"ul"},"They take some additional prxzoperties as needed e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"spacing")," is a common one for layout parents.")),Object(i.b)("p",null,"You can now jump to individual docs for the components (like ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Horizontal")," etc.) using the sidebar \ud83d\udc4d\ud83c\udffb."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/index.mdx"}}),s.isMDXComponent=!0},"./src/index.tsx":function(e,t,n){"use strict";var l=n("./node_modules/react/index.js"),i=n.n(l),o=i.a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof BoxUnit&&BoxUnit&&BoxUnit===Object(BoxUnit)&&Object.isExtensible(BoxUnit)&&Object.defineProperty(BoxUnit,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxUnit",filename:"src/common.tsx"}}),"undefined"!==typeof BoxFunction&&BoxFunction&&BoxFunction===Object(BoxFunction)&&Object.isExtensible(BoxFunction)&&Object.defineProperty(BoxFunction,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxFunction",filename:"src/common.tsx"}}),"undefined"!==typeof FlexGrow&&FlexGrow&&FlexGrow===Object(FlexGrow)&&Object.isExtensible(FlexGrow)&&Object.defineProperty(FlexGrow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexGrow",filename:"src/common.tsx"}}),"undefined"!==typeof FlexProp&&FlexProp&&FlexProp===Object(FlexProp)&&Object.isExtensible(FlexProp)&&Object.defineProperty(FlexProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProp",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b=n("./node_modules/typestyle/lib.es2015/index.js"),d={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var p={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var u={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var m={overflow:"hidden"};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollDisabled",filename:"src/styles/scroll.ts"}});var f={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var g=Object(b.extend)(f,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var j=Object(b.extend)(f,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var y={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var x={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var v={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var h={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var _={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var P={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var k={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};function C(e){return"number"===typeof e?e+"px":e}function w(e){if("number"==typeof e||"string"==typeof e){var t=C(e);return{paddingTop:t,paddingRight:t,paddingBottom:t,paddingLeft:t}}if(2==e.length){var n=e.map(C),l=Object(s.a)(n,2),i=l[0],o=l[1];return{paddingTop:i,paddingRight:o,paddingBottom:i,paddingLeft:o}}var r=e.map(C),a=Object(s.a)(r,4);return{paddingTop:a[0],paddingRight:a[1],paddingBottom:a[2],paddingLeft:a[3]}}function S(e,t,n){var l=e.className,o=e.scroll,s=e.padding,f=e.styles,g=void 0===f?[]:f,j=e.tag,y=void 0===j?{}:j,O=Object(c.a)(e,["className","scroll","padding","styles","tag"]);return i.a.createElement("name"in y&&null!=y.name?y.name:"div",Object(a.a)({className:b.classes(l,t,b.style.apply(b,[null!=o&&("disabled"==o?m:"horizontal"==o?p:"vertical"==o?u:d),null!=s&&w(s)].concat(Object(r.a)(g)))),"data-comment":n},O,null!=y.props?e.tag.props:{}))}function H(e){var t=e.flex,n=void 0===t?"content":t;return"content"==n?y:O("flex"==n?1:n)}function E(){var e=Object(l.useContext)(o);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing,breakpoint:null==e.breakpoint?480:e.breakpoint}}function N(e){return function(t,n,l,i){return void 0===n&&void 0===l&&void 0===i?n=l=i=t:void 0===l&&void 0===i&&(l=t,i=n),e(C(t),C(n),C(l),C(i))}}"undefined"!==typeof k&&k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}}),C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"boxUnitToString",filename:"src/internal/utils.tsx"}}),S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createGLSTag",filename:"src/internal/utils.tsx"}}),H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processFlexProp",filename:"src/internal/utils.tsx"}}),E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}});var z=N(function(e,t,n,l){return{paddingTop:e,paddingRight:t,paddingBottom:n,paddingLeft:l}});"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"padding",filename:"src/styles/box.ts"}});var F=N(function(e,t,n,l){return{borderTop:e,borderRight:t,borderBottom:n,borderLeft:l}});"undefined"!==typeof F&&F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/styles/box.ts"}});var V=function(e){return{width:C(e)}};V&&V===Object(V)&&Object.isExtensible(V)&&Object.defineProperty(V,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"width",filename:"src/styles/box.ts"}});var T=function(e){return{height:C(e)}};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"height",filename:"src/styles/box.ts"}});var B=function(e){return{maxWidth:C(e)}};B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"maxWidth",filename:"src/styles/box.ts"}});var G=function(e){return{maxHeight:C(e)}};function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=C(e),l=C(t);return b.style({marginTop:"-"+n,marginLeft:"-"+l,$nest:{"&>*":{marginTop:n,marginLeft:l}}})}G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"maxHeight",filename:"src/styles/box.ts"}}),L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var W=function(e){var t=e.spacing,n=Object(c.a)(e,["spacing"]),l=E(),i=l.verticalSpacing,o=l.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)i=o=t;else{var r=Object(s.a)(t,2);i=r[0],o=r[1]}return S(n,L(i,o),"Grid")};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),W.displayName="Grid";var A=function(e){return{"&>*":{marginBottom:C(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/components/vertical.tsx"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var R=function(e){var t=e.horizontalAlign,n=e.verticalAlign,l=(e.flex,Object(c.a)(e,["horizontalAlign","verticalAlign","flex"])),i=E().verticalSpacing;return S(l,b.style(H(e),j,A(null==e.spacing?i:e.spacing),"center"==n&&P,"bottom"==n&&k,"right"==t&&h,"center"==t&&v),"Vertical")};R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),R.displayName="Vertical";var U=function(e){return{"&>*":{marginRight:C(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};U&&U===Object(U)&&Object.isExtensible(U)&&Object.defineProperty(U,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/components/horizontal.tsx"}}),"undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var q=function(e){var t=e.horizontalAlign,n=e.verticalAlign,l=(e.flex,Object(c.a)(e,["horizontalAlign","verticalAlign","flex"])),i=E().horizontalSpacing;return S(l,b.style(H(e),g,U(null==e.spacing?i:e.spacing),"right"==t&&k,"center"==t&&P,"center"==n&&v,"bottom"==n&&h),"Horizontal")};q&&q===Object(q)&&Object.isExtensible(q)&&Object.defineProperty(q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),q.displayName="Horizontal","undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var D=function(e){return S(e,b.style(O(e.flex)),"Flex")};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),D.displayName="Flex";var I=function(e){return S(e,b.style(y),"Content")};I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),I.displayName="Content",n.d(t,"c",function(){return R}),n.d(t,"b",function(){return q}),n.d(t,"a",function(){return D})}}]);
//# sourceMappingURL=src-docs-index.2dfb72e8ee8225d1c665.js.map