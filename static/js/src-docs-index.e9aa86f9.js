(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/docs/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),a={},c="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(c,Object.assign({},a,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"general-layout-system"},"General Layout System"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"gls")," is a simple (but powerful) general purpose layout system for React \ud83c\udf39. "),Object(l.b)("h1",{id:"css-concepts"},"CSS concepts"),Object(l.b)("p",null,"There are a few key CSS concepts (not specific to gls) to maintainable layout in the world of components, ",Object(l.b)("em",{parentName:"p"},"external airspace"),", ",Object(l.b)("em",{parentName:"p"},"flexible expansion")," and ",Object(l.b)("em",{parentName:"p"},"internal airspace"),". Lets tackle them one by one: "),Object(l.b)("h2",{id:"external-airspace"},"External Airspace"),Object(l.b)("p",null,"A fundamental rule (broken quite commonly in the wild sadly) is that a component only renders stuff in its airspace. That is, it does not bleed out resulting in conflicts with its neighbours. "),Object(l.b)("p",null,"Consider a simple'ol ",Object(l.b)("inlineCode",{parentName:"p"},"div"),". We'll give it a background ",Object(l.b)("inlineCode",{parentName:"p"},"lightskyblue")," to denote its airspace. It can render whatever it wants in its airspace: "),Object(l.b)(i.c,{__position:0,__code:"<div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello")),Object(l.b)("p",null,"Now try and layout two of these divs together, a naive way would be to add margins:  "),Object(l.b)(i.c,{__position:1,__code:"<div style={{ backgroundColor: 'lightskyblue', marginBottom: '24px' }}>\n  Hello\n</div>\n<div style={{ backgroundColor: 'lightpink', marginBottom: '24px' }}>\n  World\n</div>\n<div style={{ backgroundColor: 'darkorange' }}>Spacing</div>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue",marginBottom:"24px"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink",marginBottom:"24px"}},"World"),Object(l.b)("div",{style:{backgroundColor:"darkorange"}},"Spacing")),Object(l.b)("p",null,"A fundamental issue with ",Object(l.b)("inlineCode",{parentName:"p"},"<div style={{marginBottom: '24px'}}>Hello</div>")," component, is that its not useable in isolation. If we render it alone, note that its leaking out ",Object(l.b)("em",{parentName:"p"},"assuming")," its going to be used by something that's going to add another sibling after it: "),Object(l.b)(i.c,{__position:2,__code:"<div style={{ backgroundColor: 'lightskyblue', marginBottom: '24px' }}>\n  Hello\n</div>\n<i\n  style={{\n    position: 'absolute',\n    bottom: '0px',\n    color: 'lightgrey',\n    textAlign: 'center',\n  }}\n>\n  Notice this excess space at the bottom\n</i>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue",marginBottom:"24px"}},"Hello"),Object(l.b)("i",{style:{position:"absolute",bottom:"0px",color:"lightgrey",textAlign:"center"}},"Notice this excess space at the bottom")),Object(l.b)("p",null,"So instead of putting the responsiblity of ",Object(l.b)("em",{parentName:"p"},"space seperation")," on the component, it can be better managed by the container, e.g. the ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," component provided by gls can drive the margins of its children to create vertical spacing between them."),Object(l.b)(i.c,{__position:3,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'darkorange' }}>Spacing</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)(r.c,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(l.b)("div",{style:{backgroundColor:"darkorange"}},"Spacing"))),Object(l.b)("p",null,"And no leaking margins occur with lesser children:"),Object(l.b)(i.c,{__position:4,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)(r.c,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("p",null,"Furthermore the ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," component itself doesn't bleed into external airspace, allowing you to compose two ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical"),"s seamlessly: "),Object(l.b)(i.c,{__position:5,__code:"<Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Second Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Second World</div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)(r.c,{mdxType:"Vertical"},Object(l.b)(r.c,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(l.b)(r.c,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Second Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"Second World")))),Object(l.b)("p",null,"Because ",Object(l.b)("inlineCode",{parentName:"p"},"margin"),"s fundamentally result in airspace violation, do not use margins at the root of your components."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"RULE 1: Do not use ",Object(l.b)("inlineCode",{parentName:"p"},"margin")," at the root of your component")),Object(l.b)("p",null,"This rule is also what makes it possible for parents to space children with margins. We also provide a ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," container to layout children horizontally: "),Object(l.b)(i.c,{__position:6,__code:"<Horizontal>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)(r.b,{mdxType:"Horizontal"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Component design tip: never use margins at the root of your component. Internally it is fine to move a ",Object(l.b)("strong",{parentName:"p"},"static number")," children around with it. If you have ",Object(l.b)("strong",{parentName:"p"},"dynamic number")," of children, use our ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," etc. ")),Object(l.b)("h2",{id:"internal-airspace"},"Internal Airspace"),Object(l.b)("p",null,"A parent uses ",Object(l.b)("inlineCode",{parentName:"p"},"margin"),"s to create visual space ",Object(l.b)("em",{parentName:"p"},"between its children"),". A parent can use ",Object(l.b)("em",{parentName:"p"},"padding")," to insert space ",Object(l.b)("em",{parentName:"p"},"inside")," its border to push the children (internal airspace management). For example a button is a common example that has padding to seperate its content from its border:"),Object(l.b)(i.c,{__position:7,__code:"<button\n  style={{\n    backgroundColor: 'lightskyblue',\n    fontSize: '24px',\n    padding: '24px',\n  }}\n>\n  Hello world\n</button>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},style:{textAlign:"center"},mdxType:"Playground"},Object(l.b)("button",{style:{backgroundColor:"lightskyblue",fontSize:"24px",padding:"24px"}},"Hello world")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"RULE 2: Use ",Object(l.b)("inlineCode",{parentName:"p"},"padding")," explicitly for internal ",Object(l.b)("em",{parentName:"p"},"border")," airspace")),Object(l.b)("p",null,"Commonly in root level content containers (close children of ",Object(l.b)("inlineCode",{parentName:"p"},"body"),") will use padding to create an ",Object(l.b)("em",{parentName:"p"},"island")," effect. For example we are putting a ",Object(l.b)("inlineCode",{parentName:"p"},"padding")," on the root ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," below to seperate it from its children (sub ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," layouts):"),Object(l.b)(i.c,{__position:8,__code:"{/** Island */}\n<Vertical style={{ padding: '24px' }}>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Horizontal>\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Second Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>Second World</Flex>\n  </Horizontal>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)(r.c,{style:{padding:"24px"},mdxType:"Vertical"},Object(l.b)(r.c,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(l.b)(r.b,{mdxType:"Horizontal"},Object(l.b)(r.a,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Second Hello"),Object(l.b)(r.a,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"Second World")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Component design tip: ",Object(l.b)("inlineCode",{parentName:"p"},"padding")," can be used in any components that have an explict border (e.g buttons, user profile cards) as well as layout containers that might have implicit borders, due to color seperation (e.g. form containers).")),Object(l.b)("h2",{id:"flexible-expansion"},"Flexible expansion"),Object(l.b)("p",null,"A common horizontal layout paradigm is a 12 column layout, used by various frameworks, most notably bootstrap and its inspired derivatives. It worked great back when UI's were not as dynamic as they are today. "),Object(l.b)("p",null,"Let's simplify 12 down and think of a simple ",Object(l.b)("inlineCode",{parentName:"p"},"4")," column layout. If you have an input and two buttons, you might do a ",Object(l.b)("inlineCode",{parentName:"p"},"50%,25%,25%")," split, commonly named with class names like ",Object(l.b)("inlineCode",{parentName:"p"},"take-2,take-1,take-1"),". Here is an example: "),Object(l.b)(i.c,{__position:9,__code:"<Horizontal>\n  <input style={{ width: '50%' }} />\n  <button style={{ width: '25%' }}>Action Foo</button>\n  <button style={{ width: '25%' }}>Action Bar</button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:r.c,Horizontal:r.b,Flex:r.a},mdxType:"Playground"},Object(l.b)(r.b,{mdxType:"Horizontal"},Object(l.b)("input",{style:{width:"50%"}}),Object(l.b)("button",{style:{width:"25%"}},"Action Foo"),Object(l.b)("button",{style:{width:"25%"}},"Action Bar"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"TODO: Talk about column grid driven layouts, show their issue and then talk about flex allowing for dynamic displays. ")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"RULE 3: Don't create layout components with classes that need to toggle based on external factors (like neighbours).")),Object(l.b)("h1",{id:"components"},"Components"),Object(l.b)("p",null,"All our components are just ",Object(l.b)("inlineCode",{parentName:"p"},"div")," elements with atom CSS generated by typestyle. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"They support ",Object(l.b)("em",{parentName:"li"},"all")," the properties supported by a ",Object(l.b)("inlineCode",{parentName:"li"},"div"),"."),Object(l.b)("li",{parentName:"ul"},"They take some additional prxzoperties as needed e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"spacing")," is a common one for layout parents.")),Object(l.b)("p",null,"You can now jump to individual docs for the components (like ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," etc.) using the sidebar \ud83d\udc4d\ud83c\udffb."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/index.mdx"}}),s.isMDXComponent=!0},"./src/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),l=n.n(o),i=l.a.createContext({verticalSpacing:24,horizontalSpacing:24});"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof BoxUnit&&BoxUnit&&BoxUnit===Object(BoxUnit)&&Object.isExtensible(BoxUnit)&&Object.defineProperty(BoxUnit,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxUnit",filename:"src/common.tsx"}}),"undefined"!==typeof BoxFunction&&BoxFunction&&BoxFunction===Object(BoxFunction)&&Object.isExtensible(BoxFunction)&&Object.defineProperty(BoxFunction,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxFunction",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}}),"undefined"!==typeof FlexGrow&&FlexGrow&&FlexGrow===Object(FlexGrow)&&Object.isExtensible(FlexGrow)&&Object.defineProperty(FlexGrow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexGrow",filename:"src/common.tsx"}}),"undefined"!==typeof FlexProp&&FlexProp&&FlexProp===Object(FlexProp)&&Object.isExtensible(FlexProp)&&Object.defineProperty(FlexProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProp",filename:"src/common.tsx"}});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/typestyle/lib.es2015/index.js"),b={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var p={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var d={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var u={overflow:"hidden"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollDisabled",filename:"src/styles/scroll.ts"}});var m={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var f=Object(s.extend)(m,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var g=Object(s.extend)(m,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var y={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var O={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var x={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var v={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var h={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var _={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var k={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};function P(e){return"number"===typeof e?e+"px":e}function C(e,t,n){var o=e.className,i=e.scroll,m=e.styles,f=void 0===m?[]:m,g=e.tag,y=void 0===g?{}:g,j=Object(c.a)(e,["className","scroll","styles","tag"]);return l.a.createElement("name"in y&&null!=y.name?y.name:"div",Object(a.a)({className:s.classes(o,t,s.style.apply(s,[null!=i&&("disabled"==i?u:"horizontal"==i?p:"vertical"==i?d:b)].concat(Object(r.a)(f)))),"data-comment":n},j,null!=y.props?e.tag.props:{}))}function w(e){var t=e.flex,n=void 0===t?"content":t;return"content"==n?y:j("flex"==n?1:n)}function S(){var e=Object(o.useContext)(i);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing}}function H(e){return function(t,n,o,l){return void 0===n&&void 0===o&&void 0===l?n=o=l=t:void 0===o&&void 0===l&&(o=t,l=n),e(P(t),P(n),P(o),P(l))}}"undefined"!==typeof k&&k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}}),P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"boxUnitToString",filename:"src/internal/utils.tsx"}}),C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createGLSTag",filename:"src/internal/utils.tsx"}}),w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processFlexProp",filename:"src/internal/utils.tsx"}}),S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}});var N=H(function(e,t,n,o){return{paddingTop:e,paddingRight:t,paddingBottom:n,paddingLeft:o}});"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"padding",filename:"src/styles/box.ts"}});var z=H(function(e,t,n,o){return{borderTop:e,borderRight:t,borderBottom:n,borderLeft:o}});"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/styles/box.ts"}});var E=function(e){return{width:P(e)}};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"width",filename:"src/styles/box.ts"}});var F=function(e){return{height:P(e)}};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"height",filename:"src/styles/box.ts"}});var V=function(e){return{maxWidth:P(e)}};V&&V===Object(V)&&Object.isExtensible(V)&&Object.defineProperty(V,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"maxWidth",filename:"src/styles/box.ts"}});var T=function(e){return{maxHeight:P(e)}};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"maxHeight",filename:"src/styles/box.ts"}});var B=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=P(e),o=P(t);return s.style({marginTop:"-"+n,marginLeft:"-"+o,$nest:{"&>*":{marginTop:n,marginLeft:o}}})}G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var A=function(e){var t=e.spacing,n=Object(c.a)(e,["spacing"]),o=S(),l=o.verticalSpacing,i=o.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)l=i=t;else{var r=Object(B.a)(t,2);l=r[0],i=r[1]}return C(n,G(l,i),"Grid")};A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),A.displayName="Grid";var W=function(e){return{"&>*":{marginBottom:P(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/components/vertical.tsx"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var L=function(e){var t=e.horizontalAlign,n=e.verticalAlign,o=(e.flex,Object(c.a)(e,["horizontalAlign","verticalAlign","flex"])),l=S().verticalSpacing;return C(o,s.style(w(e),g,W(null==e.spacing?l:e.spacing),"center"==n&&_,"bottom"==n&&k,"right"==t&&v,"center"==t&&x),"Vertical")};L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),L.displayName="Vertical";var U=function(e){return{"&>*":{marginRight:P(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};U&&U===Object(U)&&Object.isExtensible(U)&&Object.defineProperty(U,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/components/horizontal.tsx"}}),"undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var I=function(e){var t=e.horizontalAlign,n=e.verticalAlign,o=(e.flex,Object(c.a)(e,["horizontalAlign","verticalAlign","flex"])),l=S().horizontalSpacing;return C(o,s.style(w(e),f,U(null==e.spacing?l:e.spacing),"right"==t&&k,"center"==t&&_,"center"==n&&x,"bottom"==n&&v),"Horizontal")};I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),I.displayName="Horizontal","undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var q=function(e){return C(e,s.style(j(e.flex)),"Flex")};q&&q===Object(q)&&Object.isExtensible(q)&&Object.defineProperty(q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),q.displayName="Flex";var D=function(e){return C(e,s.style(y),"Content")};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),D.displayName="Content",n.d(t,"c",function(){return L}),n.d(t,"b",function(){return I}),n.d(t,"a",function(){return q})}}]);
//# sourceMappingURL=src-docs-index.1a3886f2d28348413cc3.js.map