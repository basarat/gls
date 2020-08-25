(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/docs/components/containers.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/esm.js")),r=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/index.tsx"),l=n("./src/demos/index.tsx"),c={};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l.Star,null),Object(a.b)("h1",{id:"containers"},"Containers"),Object(a.b)("p",null,"We have two general purpose ",Object(a.b)("em",{parentName:"p"},"single child")," containers ",Object(a.b)("inlineCode",{parentName:"p"},"Stretch")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Content"),". The ideas of ",Object(a.b)("em",{parentName:"p"},"stretch")," and ",Object(a.b)("em",{parentName:"p"},"content")," are explained in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),". If you have more than one child item, you probably want to use something like a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../vertical/"}),"Vertical")," or ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../horizontal/"}),"Horizontal"),"."),Object(a.b)("p",null,"Here are few reasons why you should use these containers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Allow you to work with the stretch / content sizing principle."),Object(a.b)("li",{parentName:"ul"},"Allow you to control their child alignment."),Object(a.b)("li",{parentName:"ul"},"They support ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"BaseProps"),".")),Object(a.b)("p",null,"These containers behave the same as a ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," with ",Object(a.b)("inlineCode",{parentName:"p"},"horizontalAlign='left'")," (instead of the default ",Object(a.b)("inlineCode",{parentName:"p"},"stretch"),") and ",Object(a.b)("inlineCode",{parentName:"p"},"spacing={0}"),"."),Object(a.b)("h2",{id:"stretch"},"Stretch"),Object(a.b)("p",null,"Stretch into the parent container."),Object(a.b)("p",null,"In the example below, we have an explicit sized ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(a.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner ",Object(a.b)("inlineCode",{parentName:"p"},"Stretch")," (background ",Object(a.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner ",Object(a.b)("inlineCode",{parentName:"p"},"Stretch")," keeps its size to match that of the outer container (observed below as you don't see the background of the parent-lightskyblue as it is filled in by the child-darkorange)."),Object(a.b)(r.c,{__position:1,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Stretch style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Stretch>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.j,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(i.h,{style:{backgroundColor:"darkorange"},mdxType:"Stretch"},"I'm taking up all the space from the parent"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sizing?: number")," prop allows you to control the stretch ratio (concept covered in ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../principle-sizing/"}),"sizing principle"),") eg. a 1,2 ratio (",Object(a.b)("inlineCode",{parentName:"li"},"Horizontal(Stretch:1,Stretch:2)"),") is shown below:")),Object(a.b)(r.c,{__position:2,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <Stretch sizing={1} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking 1\n  </Stretch>\n  <Stretch sizing={2} style={{ backgroundColor: 'lightpink' }}>\n    I'm taking 2\n  </Stretch>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.e,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(a.b)(i.h,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Stretch"},"I'm taking 1"),Object(a.b)(i.h,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Stretch"},"I'm taking 2"))),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("p",null,"Content takes up as much space as needed its child."),Object(a.b)("p",null,"In the example below we throw a few ",Object(a.b)("inlineCode",{parentName:"p"},"Content")," items in a ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical(Content,Content,Content)")," structure: "),Object(a.b)(r.c,{__position:3,__code:"<Vertical style={{ backgroundColor: 'lightskyblue' }}>\n  <Content style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up as much space as needed by this text\n  </Content>\n  <Content style={{ backgroundColor: 'lightpink' }}>\n    I'm taking up as much space as needed by this text\n  </Content>\n  <Content style={{ backgroundColor: 'limegreen' }}>\n    I'm taking up as much space as needed by this text\n  </Content>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.j,{style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(i.b,{style:{backgroundColor:"darkorange"},mdxType:"Content"},"I'm taking up as much space as needed by this text"),Object(a.b)(i.b,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"I'm taking up as much space as needed by this text"),Object(a.b)(i.b,{style:{backgroundColor:"limegreen"},mdxType:"Content"},"I'm taking up as much space as needed by this text"))),Object(a.b)("p",null,"If you want to have multiple children e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"<Content><b>Hello</b> is it me you are looking for</Content>")," you can use ",Object(a.b)("inlineCode",{parentName:"p"},"wrapInSpan")," to ensure flexbox sees a single child and flex-direction properies don't mess with children."),Object(a.b)(r.c,{__position:4,__code:"<Content style={{ backgroundColor: 'darkorange' }} wrapInSpan>\n  <b>Hello</b> is it me you are looking for.\n  <b>Hello</b> is it me you are looking for.\n  <b>Hello</b> is it me you are looking for.\n  <b>Hello</b> is it me you are looking for.\n  <b>Hello</b> is it me you are looking for.\n</Content>",__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.b,{style:{backgroundColor:"darkorange"},wrapInSpan:!0,mdxType:"Content"},Object(a.b)("b",null,"Hello")," is it me you are looking for.",Object(a.b)("b",null,"Hello")," is it me you are looking for.",Object(a.b)("b",null,"Hello")," is it me you are looking for.",Object(a.b)("b",null,"Hello")," is it me you are looking for.",Object(a.b)("b",null,"Hello")," is it me you are looking for.")),Object(a.b)("h2",{id:"box"},"Box"),Object(a.b)("p",null,"A more general purpose ",Object(a.b)("inlineCode",{parentName:"p"},"Box")," component exists that supports the ",Object(a.b)("inlineCode",{parentName:"p"},"sizing")," property allowing you to dynamically switch between ",Object(a.b)("inlineCode",{parentName:"p"},"Content")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Stretch")," based on your requirement."),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"<Box sizing='stretch'/>")," same as ",Object(a.b)("inlineCode",{parentName:"p"},"<Stretch/>"),": "),Object(a.b)(r.c,{__position:5,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Box sizing=\"stretch\" style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Box>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.j,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(i.a,{sizing:"stretch",style:{backgroundColor:"darkorange"},mdxType:"Box"},"I'm taking up all the space from the parent"))),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"<Box sizing='content'/>")," same as ",Object(a.b)("inlineCode",{parentName:"p"},"<Content/>"),": "),Object(a.b)(r.c,{__position:6,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Box sizing=\"content\" style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up as much space as needed by this text\n  </Box>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.j,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(i.a,{sizing:"content",style:{backgroundColor:"darkorange"},mdxType:"Box"},"I'm taking up as much space as needed by this text"))),Object(a.b)("h2",{id:"baseprops"},"BaseProps"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Stretch"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Content")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Box")," ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"support all ",Object(a.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(a.b)("h2",{id:"alignment"},"Alignment"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Stretch"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Content")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Box")," support the same alignment as ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../vertical/"}),Object(a.b)("inlineCode",{parentName:"a"},"Vertical")),". "),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"center,center"),": "),Object(a.b)(r.c,{__position:7,__code:'<Content\n  height="100px"\n  verticalAlign="center"\n  horizontalAlign="center"\n  style={{ backgroundColor: \'darkorange\' }}\n>\n  <div style={{ backgroundColor: \'lightskyblue\' }}>\n    I\'m just a div in a orange Content(center,center)\n  </div>\n</Content>',__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.b,{height:"100px",verticalAlign:"center",horizontalAlign:"center",style:{backgroundColor:"darkorange"},mdxType:"Content"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"I'm just a div in a orange Content(center,center)"))),Object(a.b)("h2",{id:"example-use-case-table"},"Example use case: Table"),Object(a.b)("p",null,"It is common to have a table of items with some fixed width, some stretch items. "),Object(a.b)("p",null,"Below we power the table with a ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," containing rows of ",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal(Content(width=explicit),Stretch(1),Stretch(2))"),":"),Object(a.b)(r.c,{__position:8,__code:"<Vertical spacing={10} style={{ backgroundColor: 'lightskyblue' }}>\n  <Horizontal height={100} spacing={10}>\n    <Content width={100} style={{ backgroundColor: 'limegreen' }}>\n      Exactly 100px\n    </Content>\n    <Stretch sizing={1} style={{ backgroundColor: 'darkorange' }}>\n      I'm taking 1 from remainder\n    </Stretch>\n    <Stretch sizing={2} style={{ backgroundColor: 'lightpink' }}>\n      I'm taking 2 from remainder\n    </Stretch>\n  </Horizontal>\n  <Horizontal height={100} spacing={10}>\n    <Content width={100} style={{ backgroundColor: 'limegreen' }}>\n      Row 2\n    </Content>\n    <Stretch sizing={1} style={{ backgroundColor: 'darkorange' }}>\n      Row 2\n    </Stretch>\n    <Stretch sizing={2} style={{ backgroundColor: 'lightpink' }}>\n      Row 2\n    </Stretch>\n  </Horizontal>\n</Vertical>",__scope:{props:this?this.props:n,Playground:r.c,Vertical:i.j,Horizontal:i.e,Stretch:i.h,Content:i.b,Box:i.a,demos:l},mdxType:"Playground"},Object(a.b)(i.j,{spacing:10,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(i.e,{height:100,spacing:10,mdxType:"Horizontal"},Object(a.b)(i.b,{width:100,style:{backgroundColor:"limegreen"},mdxType:"Content"},"Exactly 100px"),Object(a.b)(i.h,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Stretch"},"I'm taking 1 from remainder"),Object(a.b)(i.h,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Stretch"},"I'm taking 2 from remainder")),Object(a.b)(i.e,{height:100,spacing:10,mdxType:"Horizontal"},Object(a.b)(i.b,{width:100,style:{backgroundColor:"limegreen"},mdxType:"Content"},"Row 2"),Object(a.b)(i.h,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Stretch"},"Row 2"),Object(a.b)(i.h,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Stretch"},"Row 2")))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/containers.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-containers.cf6f51cbc50ca653249f.js.map