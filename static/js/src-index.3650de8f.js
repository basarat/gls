(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var o,i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),c=(o="Flex",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),s={},b="wrapper";function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(b,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"general-layout-system"},"General Layout System"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"gls")," is a general purpose maintainable and simple layout componets for react \ud83c\udf39. "),Object(a.b)("h1",{id:"css-concepts"},"CSS concepts"),Object(a.b)("p",null,"There are a few key CSS concepts (not specific to gls) to maintainable layout in the world of components, ",Object(a.b)("em",{parentName:"p"},"external airspace"),", ",Object(a.b)("em",{parentName:"p"},"flexible expansion")," and ",Object(a.b)("em",{parentName:"p"},"internal airspace"),". Lets tackle them one by one: "),Object(a.b)("h2",{id:"external-airspace"},"External Airspace"),Object(a.b)("p",null,"A fundamental rule (broken quite commonly in the wild sadly) is that a component only renders stuff in its airspace. That is, it does not bleed out resulting in conflicts with its neighbours. "),Object(a.b)("p",null,"Consider a simple'ol ",Object(a.b)("inlineCode",{parentName:"p"},"div"),". We'll give it a background ",Object(a.b)("inlineCode",{parentName:"p"},"lightskyblue")," to denote its airspace. It can render whatever it wants in its airspace: "),Object(a.b)(l.c,{__position:0,__code:"<div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello")),Object(a.b)("p",null,"Now try and layout two of these divs together, a naive way would be to add margins:  "),Object(a.b)(l.c,{__position:1,__code:"<div style={{ backgroundColor: 'lightskyblue', marginBottom: '24px' }}>\n  Hello\n</div>\n<div style={{ backgroundColor: 'lightpink', marginBottom: '24px' }}>\n  World\n</div>\n<div style={{ backgroundColor: 'darkorange' }}>Spacing</div>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue",marginBottom:"24px"}},"Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink",marginBottom:"24px"}},"World"),Object(a.b)("div",{style:{backgroundColor:"darkorange"}},"Spacing")),Object(a.b)("p",null,"A fundamental issue with ",Object(a.b)("inlineCode",{parentName:"p"},"<div style={{marginBottom: '24px'}}>Hello</div>")," component, is that its not useable in isolation. If we render it alone, note that its leaking out ",Object(a.b)("em",{parentName:"p"},"assuming")," its going to be used by something that's going to add another sibling after it: "),Object(a.b)(l.c,{__position:2,__code:"<div style={{ backgroundColor: 'lightskyblue', marginBottom: '24px' }}>\n  Hello\n</div>\n<i\n  style={{\n    position: 'absolute',\n    bottom: '0px',\n    color: 'lightgrey',\n    textAlign: 'center',\n  }}\n>\n  Notice this excess space at the bottom\n</i>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue",marginBottom:"24px"}},"Hello"),Object(a.b)("i",{style:{position:"absolute",bottom:"0px",color:"lightgrey",textAlign:"center"}},"Notice this excess space at the bottom")),Object(a.b)("p",null,"So instead of putting the responsiblity of ",Object(a.b)("em",{parentName:"p"},"space seperation")," on the component, it can be better managed by the container, e.g. Here the container will space each of its children (except the last) using ",Object(a.b)("inlineCode",{parentName:"p"},"margin-bottom"),": "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"parent>* {\n  marginBottom: spacing\n}\nparent>*:last-child {\n  marginBottom: 0px,\n}\n")),Object(a.b)("p",null,"Such a container is the ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," component provided by gls. You can see it seperate the children below:"),Object(a.b)(l.c,{__position:3,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'darkorange' }}>Spacing</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)(r.b,{mdxType:"Vertical"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(a.b)("div",{style:{backgroundColor:"darkorange"}},"Spacing"))),Object(a.b)("p",null,"And no leaking margins occur with lesser children:"),Object(a.b)(l.c,{__position:4,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)(r.b,{mdxType:"Vertical"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(a.b)("p",null,"Furthermore the ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," component itself doesn't bleed into external airspace, allowing you to compose two ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical"),"s seamlessly: "),Object(a.b)(l.c,{__position:5,__code:"<Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Second Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Second World</div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)(r.b,{mdxType:"Vertical"},Object(a.b)(r.b,{mdxType:"Vertical"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(a.b)(r.b,{mdxType:"Vertical"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Second Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink"}},"Second World")))),Object(a.b)("p",null,"Because ",Object(a.b)("inlineCode",{parentName:"p"},"margin"),"s fundamentally result in airspace violation, do not use margins at the root of your components."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"RULE 1: Do not use ",Object(a.b)("inlineCode",{parentName:"p"},"margin")," at the root of your component")),Object(a.b)("p",null,"This rule is also what makes it possible for parents to space children with margins. We also provide a ",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal")," container to layout children horizontally: "),Object(a.b)(l.c,{__position:6,__code:"<Horizontal>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)(r.a,{mdxType:"Horizontal"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Component design tip: never use margins at the root of your component. Internally it is fine to move a ",Object(a.b)("strong",{parentName:"p"},"static number")," children around with it. If you have ",Object(a.b)("strong",{parentName:"p"},"dynamic number")," of children, use our ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal")," etc. ")),Object(a.b)("h2",{id:"internal-airspace"},"Internal Airspace"),Object(a.b)("p",null,"We've already talked about how child css selectors can be used to manage the space between children using margins. One final thing worth mentioning is that you can use ",Object(a.b)("inlineCode",{parentName:"p"},"padding")," to seperate the children from the parent. We call these roots as ",Object(a.b)("em",{parentName:"p"},"islands")," (something with a background). A common island would be ",Object(a.b)("inlineCode",{parentName:"p"},"body"),". Another example of an ",Object(a.b)("em",{parentName:"p"},"island")," is a button, which normally has a background. We use padding to seperate its content from its border (internal airspace management):"),Object(a.b)(l.c,{__position:7,__code:"<button\n  style={{\n    backgroundColor: 'lightskyblue',\n    fontSize: '24px',\n    padding: '24px',\n  }}\n>\n  Hello world\n</button>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},style:{textAlign:"center"},mdxType:"Playground"},Object(a.b)("button",{style:{backgroundColor:"lightskyblue",fontSize:"24px",padding:"24px"}},"Hello world")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"RULE 2: Use ",Object(a.b)("inlineCode",{parentName:"p"},"padding")," explicitly for internal ",Object(a.b)("em",{parentName:"p"},"border")," airspace")),Object(a.b)("p",null,"Similarly ",Object(a.b)("em",{parentName:"p"},"islands")," exist commonly in root level content containers (close children of ",Object(a.b)("inlineCode",{parentName:"p"},"body"),"). For example we are putting a ",Object(a.b)("inlineCode",{parentName:"p"},"padding")," on the root ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," below to seperate it from its children (sub ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal")," layouts):"),Object(a.b)(l.c,{__position:8,__code:"{/** Island */}\n<Vertical style={{ padding: '24px' }}>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Horizontal>\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Second Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>Second World</Flex>\n  </Horizontal>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)(r.b,{style:{padding:"24px"},mdxType:"Vertical"},Object(a.b)(r.b,{mdxType:"Vertical"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(a.b)(r.a,{mdxType:"Horizontal"},Object(a.b)(c,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Second Hello"),Object(a.b)(c,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"Second World")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Component design tip: ",Object(a.b)("inlineCode",{parentName:"p"},"padding")," can be used in any components that have an explict border (e.g buttons, user profile cards) as well as layout containers that might have implicit borders, due to color seperation (e.g. form containers).")),Object(a.b)("h2",{id:"flexible-expansion"},"Flexible expansion"),Object(a.b)("p",null,"A common horizontal layout paradigm is a 12 column layout, used by various frameworks, most notably bootstrap and its inspired derivatives. It worked great back when UI's were not as dynamic as they are today. "),Object(a.b)("p",null,"Let's simplify 12 down and think of a simple ",Object(a.b)("inlineCode",{parentName:"p"},"4")," column layout. If you have an input and two buttons, you might do a ",Object(a.b)("inlineCode",{parentName:"p"},"50%,25%,25%")," split, commonly named with class names like ",Object(a.b)("inlineCode",{parentName:"p"},"take-2,take-1,take-1"),". Here is an example: "),Object(a.b)(l.c,{__position:9,__code:"<Horizontal>\n  <input style={{ width: '50%' }} />\n  <button style={{ width: '25%' }}>Action Foo</button>\n  <button style={{ width: '25%' }}>Action Bar</button>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.b,Horizontal:r.a},mdxType:"Playground"},Object(a.b)(r.a,{mdxType:"Horizontal"},Object(a.b)("input",{style:{width:"50%"}}),Object(a.b)("button",{style:{width:"25%"}},"Action Foo"),Object(a.b)("button",{style:{width:"25%"}},"Action Bar"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TODO: Talk about column grid driven layouts, show their issue and then talk about flex allowing for dynamic displays. ")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"RULE 3: Don't add explicit styles / classes that need to toggle based on external factors (like neighbours).")),Object(a.b)("h1",{id:"components"},"Components"),Object(a.b)("p",null,"All our components are just ",Object(a.b)("inlineCode",{parentName:"p"},"div")," elements with atom CSS generated by typestyle. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"They support ",Object(a.b)("em",{parentName:"li"},"all")," the properties supported by a ",Object(a.b)("inlineCode",{parentName:"li"},"div"),"."),Object(a.b)("li",{parentName:"ul"},"They take some additional properties as needed e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"spacing")," is a common one for layout parents.")),Object(a.b)("p",null,"You can now jump to individual docs for the components (like ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal")," etc.) using the sidebar \ud83d\udc4d\ud83c\udffb."))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/index.mdx"}}),d.isMDXComponent=!0},"./src/index.tsx":function(e,t,n){"use strict";var o={vertical:24,horizontal:24,grid:{vertical:24,horizontal:24}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/common.ts"}});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/typestyle/lib.es2015/index.js"),l=n("./node_modules/react/index.js"),r=n("./node_modules/csstips/lib/index.js");"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var c=function(e){var t=e.className,n=Object(i.a)(e,["className"]),c=Object(a.classes)(t,a.style(r.gridSpaced(null==e.spacing?o.grid.vertical:e.spacing)));return l.createElement("div",Object.assign({},n,{className:c,"data-comment":"Grid"}))};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),c.displayName="Grid","undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var s=function(e){var t=e.className,n=e.horizontalAlign,c=e.verticalAlign,s=Object(i.a)(e,["className","horizontalAlign","verticalAlign"]),b=a.classes(t,a.style(r.content,r.vertical,r.verticallySpaced(null==e.spacing?o.vertical:e.spacing),"center"==c&&r.centerJustified,"bottom"==c&&r.endJustified,"right"==n&&r.end,"center"==n&&r.center));return l.createElement("div",Object.assign({},s,{className:b,"data-comment":"Vertical"}))};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),s.displayName="Vertical","undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var b=function(e){var t=e.className,n=e.horizontalAlign,c=e.verticalAlign,s=Object(i.a)(e,["className","horizontalAlign","verticalAlign"]),b=a.classes(t,a.style(r.content,r.horizontal,r.horizontallySpaced(null==e.spacing?o.horizontal:e.spacing),"right"==n&&r.endJustified,"center"==n&&r.centerJustified,"center"==c&&r.center,"bottom"==c&&r.end));return l.createElement("div",Object.assign({},s,{className:b,"data-comment":"Horizontal"}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),b.displayName="Horizontal";var d=function(e){var t=e.className,n=Object(i.a)(e,["className"]),o=a.classes(t,a.style(r.flex));return l.createElement("div",Object.assign({},n,{className:o,"data-comment":"FlexContainer"}))};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexContainer",filename:"src/components/containers.tsx"}}),d.displayName="FlexContainer";var p=function(e){var t=e.className,n=Object(i.a)(e,["className"]),o=a.classes(t,a.style(r.content));return l.createElement("div",Object.assign({},n,{className:o,"data-comment":"ContentContainer"}))};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContentContainer",filename:"src/components/containers.tsx"}}),p.displayName="ContentContainer",n.d(t,"b",function(){return s}),n.d(t,"a",function(){return b})}}]);
//# sourceMappingURL=src-index.03a202cc41f9f97d4b0f.js.map