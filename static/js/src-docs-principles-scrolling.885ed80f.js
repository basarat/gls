(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/common.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/react/index.js"),i=n.n(o).a.createContext({verticalSpacing:24,horizontalSpacing:24,breakpoint:480});"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSDefaults",filename:"src/common.tsx"}}),"undefined"!==typeof BoxUnit&&BoxUnit&&BoxUnit===Object(BoxUnit)&&Object.isExtensible(BoxUnit)&&Object.defineProperty(BoxUnit,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxUnit",filename:"src/common.tsx"}}),"undefined"!==typeof BoxSet&&BoxSet&&BoxSet===Object(BoxSet)&&Object.isExtensible(BoxSet)&&Object.defineProperty(BoxSet,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxSet",filename:"src/common.tsx"}}),"undefined"!==typeof SizingProp&&SizingProp&&SizingProp===Object(SizingProp)&&Object.isExtensible(SizingProp)&&Object.defineProperty(SizingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizingProp",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}}),"undefined"!==typeof PaddingProp&&PaddingProp&&PaddingProp===Object(PaddingProp)&&Object.isExtensible(PaddingProp)&&Object.defineProperty(PaddingProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaddingProp",filename:"src/common.tsx"}}),"undefined"!==typeof SizeProps&&SizeProps&&SizeProps===Object(SizeProps)&&Object.isExtensible(SizeProps)&&Object.defineProperty(SizeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeProps",filename:"src/common.tsx"}}),"undefined"!==typeof ScrollProp&&ScrollProp&&ScrollProp===Object(ScrollProp)&&Object.isExtensible(ScrollProp)&&Object.defineProperty(ScrollProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollProp",filename:"src/common.tsx"}}),"undefined"!==typeof StylesProp&&StylesProp&&StylesProp===Object(StylesProp)&&Object.isExtensible(StylesProp)&&Object.defineProperty(StylesProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StylesProp",filename:"src/common.tsx"}}),"undefined"!==typeof TagProps&&TagProps&&TagProps===Object(TagProps)&&Object.isExtensible(TagProps)&&Object.defineProperty(TagProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TagProps",filename:"src/common.tsx"}})},"./src/components/containers.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/typestyle/lib.es2015/index.js"),i=n("./src/internal/utils.tsx"),l=n("./src/styles/flex.ts");"undefined"!==typeof FlexProps&&FlexProps&&FlexProps===Object(FlexProps)&&Object.isExtensible(FlexProps)&&Object.defineProperty(FlexProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexProps",filename:"src/components/containers.tsx"}});var r=function(e){var t=o.style(Object(l.f)(e.flex));return Object(i.b)(e,t,"Flex")};r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),r.displayName="Flex";var a=function(e){var t=o.style(l.c);return Object(i.b)(e,t,"Content")};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),a.displayName="Content"},"./src/components/grid.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/typestyle/lib.es2015/index.js"),r=n("./src/internal/utils.tsx");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=Object(r.a)(e),o=Object(r.a)(t);return l.style({marginTop:"-"+n,marginLeft:"-"+o,$nest:{"&>*":{marginTop:n,marginLeft:o}}})}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var s=function(e){var t=e.spacing,n=Object(i.a)(e,["spacing"]),l=Object(r.d)(),s=l.verticalSpacing,c=l.horizontalSpacing;if(null!=t)if("number"==typeof t||"string"==typeof t)s=c=t;else{var b=Object(o.a)(t,2);s=b[0],c=b[1]}var d=a(s,c);return Object(r.b)(n,d,"Grid")};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),s.displayName="Grid"},"./src/components/horizontal.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/typestyle/lib.es2015/index.js"),l=n("./src/internal/utils.tsx"),r=n("./src/styles/flex.ts"),a=function(e){return{"&>*":{marginRight:Object(l.a)(e)+" !important"},"&>*:last-child":{marginRight:"0px !important"}}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontallySpaced",filename:"src/components/horizontal.tsx"}}),"undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var s=function(e){var t=e.horizontalAlign,n=e.verticalAlign,s=(e.sizing,Object(o.a)(e,["horizontalAlign","verticalAlign","sizing"])),c=Object(l.d)().horizontalSpacing,b=i.style(Object(l.c)(e),r.g,a(null==e.spacing?c:e.spacing),"right"==t&&r.e,"center"==t&&r.b,"center"==n&&r.a,"bottom"==n&&r.d);return Object(l.b)(s,b,"Horizontal")};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),s.displayName="Horizontal"},"./src/components/responsive.tsx":function(e,t){"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/responsive.tsx"}})},"./src/components/spacers.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/typestyle/lib.es2015/index.js"),r=n("./node_modules/react/index.js"),a=n("./src/internal/utils.tsx"),s=n("./src/styles/flex.ts");"undefined"!==typeof FlexSpaceProps&&FlexSpaceProps&&FlexSpaceProps===Object(FlexSpaceProps)&&Object.isExtensible(FlexSpaceProps)&&Object.defineProperty(FlexSpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpaceProps",filename:"src/components/spacers.tsx"}});var c=function(e){var t=e.className,n=e.flex,o=Object(i.a)(e,["className","flex"]),a=l.classes(t,l.style(Object(s.f)(n)));return r.createElement("div",Object.assign({},o,{className:a,"data-comment":"FlexSpace"}))};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexSpace",filename:"src/components/spacers.tsx"}}),c.displayName="FlexSpace","undefined"!==typeof SpaceProps&&SpaceProps&&SpaceProps===Object(SpaceProps)&&Object.isExtensible(SpaceProps)&&Object.defineProperty(SpaceProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpaceProps",filename:"src/components/spacers.tsx"}});var b=function(e){var t=e.style,n=Object(i.a)(e,["style"]),l=Object(a.d)().horizontalSpacing,s=Object(a.a)(null==e.space?l:e.space),c=Object(o.a)({display:"inline-block",width:s},t);return r.createElement("div",Object.assign({},n,{style:c,"data-comment":"HorizontalSpace"}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpace",filename:"src/components/spacers.tsx"}}),b.displayName="HorizontalSpace";var d=function(e){var t=e.style,n=Object(i.a)(e,["style"]),l=Object(a.d)().verticalSpacing,s=Object(a.a)(null==e.space?l:e.space),c=Object(o.a)({height:s},t);return r.createElement("div",Object.assign({},n,{style:c,"data-comment":"VerticalSpace"}))};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpace",filename:"src/components/spacers.tsx"}}),d.displayName="VerticalSpace"},"./src/components/vertical.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/typestyle/lib.es2015/index.js"),l=n("./src/internal/utils.tsx"),r=n("./src/styles/flex.ts"),a=function(e){return{"&>*":{marginBottom:Object(l.a)(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/components/vertical.tsx"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var s=function(e){var t=e.horizontalAlign,n=e.verticalAlign,s=(e.sizing,Object(o.a)(e,["horizontalAlign","verticalAlign","sizing"])),c=Object(l.d)().verticalSpacing,b=i.style(Object(l.c)(e),r.h,a(null==e.spacing?c:e.spacing),"center"==n&&r.b,"bottom"==n&&r.e,"right"==t&&r.d,"center"==t&&r.a);return Object(l.b)(s,b,"Vertical")};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),s.displayName="Vertical"},"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"BlueDiv",function(){return r}),n.d(t,"PinkDiv",function(){return a}),n.d(t,"Label",function(){return c}),n.d(t,"Input",function(){return d});var o=n("./node_modules/react/index.js"),i=n.n(o),l=n("./node_modules/typestyle/lib.es2015/index.js"),r=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var a=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=l.style({}),c=function(e){return i.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var b=l.style({width:"calc(100% - 5px)",fontSize:"20px"}),d=function(e){return i.a.createElement("input",{className:b})};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}})},"./src/docs/principles/scrolling.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),a=n("./src/demos/index.tsx"),s={},c="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"scrolling"},"Scrolling"),Object(i.b)("p",null,"Setting up when a scroll bar should show is not particularly hard, but worth covering. We provide the following scrolling options as a prop to our container components:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface ScrollProp {\n  scroll?:\n  | 'overflow' /** default */\n  | 'both'\n  | 'vertical'\n  | 'horizontal'\n  | 'disable';\n}\n")),Object(i.b)("h2",{id:"overflow"},"overflow"),Object(i.b)("p",null,"By default content will overflow its container. In the example below we force the container to be small (with explicit sizing 80px) and then throw a bunch of content inside it."),Object(i.b)(l.c,{__position:0,__code:"{/* force a small size container */}\n<Vertical height={80} style={{ backgroundColor: 'lightskyblue' }}>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.Vertical,Content:r.Content,demos:a},mdxType:"Playground"},Object(i.b)(r.Vertical,{height:80,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"))),Object(i.b)("p",null,"There is no need to be alarmed by this default value. You normally ",Object(i.b)("em",{parentName:"p"},"don't use explicit sizing")," (covered in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"). Content will overflow to the body, and the browser will add a scrollbar on the body for you (by default)."),Object(i.b)("h2",{id:"both--vertical--horizontal"},"both | vertical | horizontal"),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"scroll: 'both'| 'vertical' | 'horizontal'")," to finely control where you want your scroll bar to appear. "),Object(i.b)("p",null,"Some configuration handled for you: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The scrollbar will only show if the content actually overflow."),Object(i.b)("li",{parentName:"ul"},"The scrolling section is touch-smooth-scroll enabled.")),Object(i.b)("p",null,"Here is an example where content doesn't overflow: "),Object(i.b)(l.c,{__position:1,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"both\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Not enough content to cause overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.Vertical,Content:r.Content,demos:a},mdxType:"Playground"},Object(i.b)(r.Vertical,{height:80,scroll:"both",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Not enough content to cause overflow"))),Object(i.b)("p",null,"Here is an example where content does overflow: "),Object(i.b)(l.c,{__position:2,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"both\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow\n  </div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.Vertical,Content:r.Content,demos:a},mdxType:"Playground"},Object(i.b)(r.Vertical,{height:80,scroll:"both",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow"))),Object(i.b)("h2",{id:"disable"},"disable"),Object(i.b)("p",null,"There are actually two reasons why you might want disable scroll (",Object(i.b)("inlineCode",{parentName:"p"},"scroll='disable'"),"): "),Object(i.b)("h3",{id:"1-hide-content-when-it-overflows"},"1. Hide content when it overflows"),Object(i.b)("p",null,"This is actually the less common use case. It behaves exactly like you would expect, cutting off overflowing content and not letting you scroll to it: "),Object(i.b)(l.c,{__position:3,__code:"{/* force a small size container */}\n<Vertical\n  height={80}\n  scroll=\"disable\"\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n  <div style={{ backgroundColor: 'lightpink' }}>\n    Lots of content to make it overflow, but it will get hidden\n  </div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.Vertical,Content:r.Content,demos:a},mdxType:"Playground"},Object(i.b)(r.Vertical,{height:80,scroll:"disable",style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Lots of content to make it overflow, but it will get hidden"))),Object(i.b)("h3",{id:"2-fine-tune-scroll-bar-location"},"2. Fine tune scroll bar location"),Object(i.b)("p",null,"The browser will try to put the scroll-bar as high up in the tree as it can find by default. Even if you have ",Object(i.b)("inlineCode",{parentName:"p"},"scroll: both")," on your container, the browser might choose to put the scroll-bar on the body. "),Object(i.b)("p",null,"An example is shown below, notice that the scrolling is happening on the ",Object(i.b)("inlineCode",{parentName:"p"},"body")," level instead of the ",Object(i.b)("inlineCode",{parentName:"p"},"main section")," level (despite ",Object(i.b)("inlineCode",{parentName:"p"},"scroll:'both'"),"):"),Object(i.b)(l.c,{__position:4,__code:"<Vertical\n  height={200}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  {/* You want this header to stick to top */}\n  <Content\n    style={{\n      backgroundColor: 'darkorange',\n      textAlign: 'center',\n      height: '50px',\n      fontSize: '35px',\n    }}\n  >\n    Header\n  </Content>\n\n  {/* You only want this section to scroll */}\n  <Vertical sizing=\"flex\" scroll=\"both\">\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.Vertical,Content:r.Content,demos:a},style:{overflow:"auto"},mdxType:"Playground"},Object(i.b)(r.Vertical,{height:200,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)(r.Content,{style:{backgroundColor:"darkorange",textAlign:"center",height:"50px",fontSize:"35px"},mdxType:"Content"},"Header"),Object(i.b)(r.Vertical,{sizing:"flex",scroll:"both",mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow")))),Object(i.b)("p",null,"To fix it, we tell the browser to disable scroll (",Object(i.b)("inlineCode",{parentName:"p"},"scroll:'disable'"),") at the parent of the item we want to scroll:"),Object(i.b)(l.c,{__position:5,__code:"{/* scroll:disable => your way of telling the browser insert scroll bars on something inside if it needs to */}\n<Vertical\n  scroll=\"disable\"\n  height={200}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  {/* You want this header to stick to top */}\n  <Content\n    style={{\n      backgroundColor: 'darkorange',\n      textAlign: 'center',\n      height: '50px',\n      fontSize: '35px',\n    }}\n  >\n    Header\n  </Content>\n\n  {/* You only want this section to scroll */}\n  <Vertical sizing=\"flex\" scroll=\"both\">\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n    <div style={{ backgroundColor: 'lightpink' }}>\n      Main section with lots of text to make it overflow\n    </div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:l.c,Vertical:r.Vertical,Content:r.Content,demos:a},style:{overflow:"auto"},mdxType:"Playground"},Object(i.b)(r.Vertical,{scroll:"disable",height:200,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(i.b)(r.Content,{style:{backgroundColor:"darkorange",textAlign:"center",height:"50px",fontSize:"35px"},mdxType:"Content"},"Header"),Object(i.b)(r.Vertical,{sizing:"flex",scroll:"both",mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"Main section with lots of text to make it overflow")))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/scrolling.mdx"}}),b.isMDXComponent=!0},"./src/index.tsx":function(e,t,n){"use strict";n("./src/common.tsx");var o=n("./src/components/containers.tsx");n.d(t,"Content",function(){return o.a});var i=n("./src/components/vertical.tsx");n.d(t,"Vertical",function(){return i.a});var l=n("./src/components/horizontal.tsx");n.d(t,"Horizontal",function(){return l.a});n("./src/components/responsive.tsx"),n("./src/components/grid.tsx"),n("./src/components/spacers.tsx")},"./src/internal/utils.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/typestyle/lib.es2015/index.js"),s=n("./src/common.tsx"),c={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var b={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var d={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var p={overflow:"hidden"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollDisable",filename:"src/styles/scroll.ts"}});var u=n("./src/styles/flex.ts"),f=n("./node_modules/react/index.js"),m=n.n(f);function g(e){return"number"===typeof e?e+"px":e}function y(e){if("number"==typeof e||"string"==typeof e){var t=g(e);return{paddingTop:t,paddingRight:t,paddingBottom:t,paddingLeft:t}}if(2==e.length){var n=e.map(g),o=Object(r.a)(n,2),i=o[0],l=o[1];return{paddingTop:i,paddingRight:l,paddingBottom:i,paddingLeft:l}}var a=e.map(g),s=Object(r.a)(a,4);return{paddingTop:s[0],paddingRight:s[1],paddingBottom:s[2],paddingLeft:s[3]}}function h(e,t,n){var r=e.className,s=e.padding,u=e.height,f=e.minHeight,h=e.maxHeight,j=e.width,x=e.minWidth,v=e.maxWidth,O=e.scroll,k=e.styles,P=void 0===k?[]:k,_=e.tag,w=Object(l.a)(e,["className","padding","height","minHeight","maxHeight","width","minWidth","maxWidth","scroll","styles","tag"]);return m.a.createElement(null!=_&&"name"in _&&null!=_.name?_.name:"div",Object(i.a)({className:a.classes(r,t,a.style.apply(a,[null!=O&&("disable"==O?p:"horizontal"==O?b:"vertical"==O?d:"both"==O?c:null),null!=s&&y(s),null!=u&&{height:g(u)},null!=f&&{minHeight:g(f)},null!=h&&{maxHeight:g(h)},null!=j&&{width:g(j)},null!=x&&{minWidth:g(x)},null!=v&&{maxWidth:g(v)}].concat(Object(o.a)(P)))),"data-comment":n},w,null!=_&&null!=_.props?_.props:{}))}function j(e){var t=e.sizing,n=void 0===t?"content":t;return"content"==n?u.c:"flex"==n?Object(u.f)(1):Object(u.f)(n)}function x(){var e=Object(f.useContext)(s.a);return{verticalSpacing:null==e.verticalSpacing?24:e.verticalSpacing,horizontalSpacing:null==e.horizontalSpacing?24:e.horizontalSpacing,breakpoint:null==e.breakpoint?480:e.breakpoint}}n.d(t,"a",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return j}),n.d(t,"d",function(){return x}),g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"boxUnitToString",filename:"src/internal/utils.tsx"}}),h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createGLSTag",filename:"src/internal/utils.tsx"}}),j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processFlexProp",filename:"src/internal/utils.tsx"}}),x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useGLSDefaults",filename:"src/internal/utils.tsx"}})},"./src/styles/flex.ts":function(e,t,n){"use strict";n.d(t,"g",function(){return l}),n.d(t,"h",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"a",function(){return b}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return f});var o=n("./node_modules/typestyle/lib.es2015/index.js"),i={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var l=Object(o.extend)(i,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var r=Object(o.extend)(i,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var a={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{"-ms-flex":e,"-webkit-flex":e,flex:e}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flex",filename:"src/styles/flex.ts"}});var c={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var b={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var d={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var p={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var u={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var f={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}})}}]);
//# sourceMappingURL=src-docs-principles-scrolling.a520bc7c72014807b93a.js.map