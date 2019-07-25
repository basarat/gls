(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/docs/principles/scrolling.mdx":function(o,t,e){"use strict";e.r(t),e.d(t,"default",function(){return d});var n=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(e("./node_modules/react/index.js"),e("./node_modules/@mdx-js/react/dist/index.es.js")),l=e("./node_modules/docz/dist/index.esm.js"),r=e("./src/index.tsx"),c=e("./src/demos/index.tsx"),a={},s="wrapper";function d(o){var t=o.components,e=Object(n.a)(o,["components"]);return Object(i.b)(s,Object.assign({},a,e,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.Star,null),Object(i.b)("h1",{id:"scrolling"},"Scrolling"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"scroll")," prop can be used to set up when a scroll bar should show. We provide the following scrolling options on our container components:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface ScrollProp {\n  scroll?:\n  | 'overflow' /** default */\n  | 'both'\n  | 'vertical'\n  | 'horizontal'\n  | 'hidden';\n}\n")),Object(i.b)("h2",{id:"overflow"},"overflow"),Object(i.b)("p",null,"By ",Object(i.b)("em",{parentName:"p"},"default")," content will overflow its container. In the example below we force the container to be small (with explicit sizing 80px) and then throw a bunch of content inside it."),Object(i.b)(l.c,{__position:1,__code:"{/* force a small size container */}\n<Vertical height={80} style={{ backgroundColor: 'lightskyblue' }}>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:e,Playground:l.c,Vertical:r.i,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.i,{height:80,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"There is no need to be alarmed by this default value. You normally ",Object(i.b)("em",{parentName:"p"},"don't use explicit sizing")," (covered in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"). Content will overflow to the body, and the browser will add a scrollbar on the body for you (by default).")),Object(i.b)("h2",{id:"both--vertical--horizontal"},"both | vertical | horizontal"),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"scroll: 'both'| 'vertical' | 'horizontal'")," to finely control where you want your scroll bar to appear. "),Object(i.b)("p",null,"Some configuration handled for you: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The scrollbar will only show if the content actually overflows."),Object(i.b)("li",{parentName:"ul"},"The scrolling section is touch-smooth-scroll enabled.")),Object(i.b)("p",null,"Here is an example where content doesn't overflow (and you don't see a scroll bar despite ",Object(i.b)("inlineCode",{parentName:"p"},"scroll='both'"),"): "),Object(i.b)(l.c,{__position:2,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"both\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Not enough content to cause overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:e,Playground:l.c,Vertical:r.i,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.i,{height:80,scroll:"both",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Not enough content to cause overflow"))),Object(i.b)("p",null,"Here is an example where content does overflow: "),Object(i.b)(l.c,{__position:3,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"both\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:e,Playground:l.c,Vertical:r.i,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.i,{height:80,scroll:"both",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"))),Object(i.b)("p",null,"You can use it to fine tune the scroll bar location e.g. below we want the header to stay outside the scroll bar:"),Object(i.b)(l.c,{__position:4,__code:"<Vertical\n  height={200}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  {/* You want this header to stick to top */}\n  <Content\n    style={{\n      backgroundColor: 'darkorange',\n      textAlign: 'center',\n      height: '50px',\n      fontSize: '35px',\n    }}\n  >\n    Header\n  </Content>\n\n  {/* You only want this section to scroll */}\n  <Vertical scroll=\"both\" sizing=\"flex\">\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:e,Playground:l.c,Vertical:r.i,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.i,{height:200,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)(r.a,{style:{backgroundColor:"darkorange",textAlign:"center",height:"50px",fontSize:"35px"},mdxType:"Content"},"Header"),Object(i.b)(r.i,{scroll:"both",sizing:"flex",mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow")))),Object(i.b)("h2",{id:"hidden"},"hidden"),Object(i.b)("p",null,"It behaves exactly like you would expect, cutting off overflowing content and not letting you scroll to it: "),Object(i.b)(l.c,{__position:5,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"hidden\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n</Vertical>",__scope:{props:this?this.props:e,Playground:l.c,Vertical:r.i,Content:r.a,demos:c},mdxType:"Playground"},Object(i.b)(r.i,{height:80,scroll:"hidden",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"))))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/scrolling.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-principles-scrolling.c1e348cc072313c59b0b.js.map