(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/demos/index.tsx":function(e,t,o){"use strict";o.r(t),o.d(t,"BlueDiv",function(){return r}),o.d(t,"PinkDiv",function(){return c}),o.d(t,"Label",function(){return s}),o.d(t,"Input",function(){return b});var n=o("./node_modules/react/index.js"),i=o.n(n),l=o("./node_modules/typestyle/lib.es2015/index.js"),r=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var c=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var a=l.style({}),s=function(e){return i.a.createElement("label",{className:a,children:e.children})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var d=l.style({width:"calc(100% - 5px)",fontSize:"20px"}),b=function(e){return i.a.createElement("input",{className:d})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}})},"./src/docs/principles/scrolling.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return d});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),l=o("./node_modules/docz/dist/index.esm.js"),r=o("./src/index.tsx"),c=o("./src/demos/index.tsx"),a={},s="wrapper";function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)(s,Object.assign({},a,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"scrolling"},"Scrolling"),Object(i.b)("p",null,"Setting up when a scroll bar should show is not particularly hard, but worth covering. We provide the following scrolling options as a prop to our container components:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface ScrollProp {\n  scroll?:\n  | 'overflow' /** default */\n  | 'both'\n  | 'vertical'\n  | 'horizontal'\n  | 'hidden';\n}\n")),Object(i.b)("h2",{id:"overflow"},"overflow"),Object(i.b)("p",null,"By default content will overflow its container. In the example below we force the container to be small (with explicit sizing 80px) and then throw a bunch of content inside it."),Object(i.b)(l.c,{__position:0,__code:"{/* force a small size container */}\n<Vertical height={80} style={{ backgroundColor: 'lightskyblue' }}>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:o,Playground:l.c,Vertical:r.e,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.e,{height:80,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"))),Object(i.b)("p",null,"There is no need to be alarmed by this default value. You normally ",Object(i.b)("em",{parentName:"p"},"don't use explicit sizing")," (covered in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"). Content will overflow to the body, and the browser will add a scrollbar on the body for you (by default)."),Object(i.b)("h2",{id:"both--vertical--horizontal"},"both | vertical | horizontal"),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"scroll: 'both'| 'vertical' | 'horizontal'")," to finely control where you want your scroll bar to appear. "),Object(i.b)("p",null,"Some configuration handled for you: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The scrollbar will only show if the content actually overflow."),Object(i.b)("li",{parentName:"ul"},"The scrolling section is touch-smooth-scroll enabled.")),Object(i.b)("p",null,"Here is an example where content doesn't overflow: "),Object(i.b)(l.c,{__position:1,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"both\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Not enough content to cause overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:o,Playground:l.c,Vertical:r.e,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.e,{height:80,scroll:"both",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Not enough content to cause overflow"))),Object(i.b)("p",null,"Here is an example where content does overflow: "),Object(i.b)(l.c,{__position:2,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"both\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:o,Playground:l.c,Vertical:r.e,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.e,{height:80,scroll:"both",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"))),Object(i.b)("p",null,"You can use it to fine tune the scroll bar location e.g. below we want the header to stay outside the scroll bar:"),Object(i.b)(l.c,{__position:3,__code:"<Vertical\n  height={200}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  {/* You want this header to stick to top */}\n  <Content\n    style={{\n      backgroundColor: 'darkorange',\n      textAlign: 'center',\n      height: '50px',\n      fontSize: '35px',\n    }}\n  >\n    Header\n  </Content>\n\n  {/* You only want this section to scroll */}\n  <Vertical scroll=\"both\" sizing=\"flex\">\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:o,Playground:l.c,Vertical:r.e,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.e,{height:200,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)(r.a,{style:{backgroundColor:"darkorange",textAlign:"center",height:"50px",fontSize:"35px"},mdxType:"Content"},"Header"),Object(i.b)(r.e,{scroll:"both",sizing:"flex",mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow")))),Object(i.b)("h2",{id:"hidden"},"hidden"),Object(i.b)("p",null,"It behaves exactly like you would expect, cutting off overflowing content and not letting you scroll to it: "),Object(i.b)(l.c,{__position:4,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"hidden\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n</Vertical>",__scope:{props:this?this.props:o,Playground:l.c,Vertical:r.e,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.e,{height:80,scroll:"hidden",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"))))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/scrolling.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-principles-scrolling.777004466562891ae362.js.map