(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/docs/components/containers.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/index.tsx"),r=t("./src/demos/index.tsx"),c={},b="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(b,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(r.Star,null),Object(a.b)("h1",{id:"containers"},"Containers"),Object(a.b)("p",null,"We have two general purpose ",Object(a.b)("em",{parentName:"p"},"single child")," containers ",Object(a.b)("inlineCode",{parentName:"p"},"Flex")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Content"),". The ideas of ",Object(a.b)("em",{parentName:"p"},"flex")," and ",Object(a.b)("em",{parentName:"p"},"content")," are explained in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),". If you have more than one child item, you probably want to use something like a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../vertical/"}),"Vertical")," or ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../horizontal/"}),"Horizontal"),"."),Object(a.b)("p",null,"Here are few reasons why you should use these containers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Allow you to work with the flex / content sizing principle."),Object(a.b)("li",{parentName:"ul"},"Allow you to control their child alignment."),Object(a.b)("li",{parentName:"ul"},"They support ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"BaseProps"),".")),Object(a.b)("h2",{id:"flex"},"Flex"),Object(a.b)("p",null,"Flexes into the parent container."),Object(a.b)("p",null,"In the example below, we have an explicit sized ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," (background ",Object(a.b)("inlineCode",{parentName:"p"},"lightskyblue"),") with an inner ",Object(a.b)("inlineCode",{parentName:"p"},"Flex")," (background ",Object(a.b)("inlineCode",{parentName:"p"},"darkorange"),"). The inner ",Object(a.b)("inlineCode",{parentName:"p"},"Flex")," keeps its size to match that of the outer container (observed below as you don't see the background of the parent-lightskyblue as it is filled in by the child-darkorange)."),Object(a.b)(i.c,{__position:1,__code:"<Vertical height={100} style={{ backgroundColor: 'lightskyblue' }}>\n  <Flex style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up all the space from the parent\n  </Flex>\n</Vertical>",__scope:{props:this?this.props:t,Playground:i.c,Vertical:l.i,Horizontal:l.f,Flex:l.b,Content:l.a,demos:r},mdxType:"Playground"},Object(a.b)(l.i,{height:100,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(l.b,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking up all the space from the parent"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sizing?: number")," prop allows you to control the flex ratio (concept covered in ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../principle-sizing/"}),"sizing principle"),") eg. a 1,2 ratio (",Object(a.b)("inlineCode",{parentName:"li"},"Horizontal(Flex:1,Flex:2)"),") is shown below:")),Object(a.b)(i.c,{__position:2,__code:"<Horizontal\n  height={100}\n  spacing={0}\n  style={{ backgroundColor: 'lightskyblue' }}\n>\n  <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n    I'm taking 1\n  </Flex>\n  <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n    I'm taking 2\n  </Flex>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:i.c,Vertical:l.i,Horizontal:l.f,Flex:l.b,Content:l.a,demos:r},mdxType:"Playground"},Object(a.b)(l.f,{height:100,spacing:0,style:{backgroundColor:"lightskyblue"},mdxType:"Horizontal"},Object(a.b)(l.b,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking 1"),Object(a.b)(l.b,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"I'm taking 2"))),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("p",null,"Content takes up as much space as needed its child."),Object(a.b)("p",null,"In the example below we throw a few ",Object(a.b)("inlineCode",{parentName:"p"},"Content")," items in a ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical(Content,Content,Content)")," structure: "),Object(a.b)(i.c,{__position:3,__code:"<Vertical style={{ backgroundColor: 'lightskyblue' }}>\n  <Content style={{ backgroundColor: 'darkorange' }}>\n    I'm taking up as much space as needed by this text\n  </Content>\n  <Content style={{ backgroundColor: 'lightpink' }}>\n    I'm taking up as much space as needed by this text\n  </Content>\n  <Content style={{ backgroundColor: 'limegreen' }}>\n    I'm taking up as much space as needed by this text\n  </Content>\n</Vertical>",__scope:{props:this?this.props:t,Playground:i.c,Vertical:l.i,Horizontal:l.f,Flex:l.b,Content:l.a,demos:r},mdxType:"Playground"},Object(a.b)(l.i,{style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(l.a,{style:{backgroundColor:"darkorange"},mdxType:"Content"},"I'm taking up as much space as needed by this text"),Object(a.b)(l.a,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"I'm taking up as much space as needed by this text"),Object(a.b)(l.a,{style:{backgroundColor:"limegreen"},mdxType:"Content"},"I'm taking up as much space as needed by this text"))),Object(a.b)("h2",{id:"baseprops"},"BaseProps"),Object(a.b)("p",null,"Both ",Object(a.b)("inlineCode",{parentName:"p"},"Flex")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Content")," ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(a.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(a.b)("h2",{id:"alignment"},"Alignment"),Object(a.b)("p",null,"Both ",Object(a.b)("inlineCode",{parentName:"p"},"Flex")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Content")," support alignment. "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface AlignmentProps {\n  /** Child alignment in vertical axis */\n  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',\n  /** Child alignment in horizontal axis */\n  horizontalAlign?: 'left' /** default */ | 'center' | 'right',\n}\n")),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"center,center"),": "),Object(a.b)(i.c,{__position:4,__code:'<Content\n  height="100px"\n  verticalAlign="center"\n  horizontalAlign="center"\n  style={{ backgroundColor: \'darkorange\' }}\n>\n  <div style={{ backgroundColor: \'lightskyblue\' }}>\n    I\'m just a div in a orange Content(center,center)\n  </div>\n</Content>',__scope:{props:this?this.props:t,Playground:i.c,Vertical:l.i,Horizontal:l.f,Flex:l.b,Content:l.a,demos:r},mdxType:"Playground"},Object(a.b)(l.a,{height:"100px",verticalAlign:"center",horizontalAlign:"center",style:{backgroundColor:"darkorange"},mdxType:"Content"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"I'm just a div in a orange Content(center,center)"))),Object(a.b)("h2",{id:"example-use-case-table"},"Example use case: Table"),Object(a.b)("p",null,"It is common to have a table of items with some fixed width, some flexible items. "),Object(a.b)("p",null,"Below we power the table with a ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," containing rows of ",Object(a.b)("inlineCode",{parentName:"p"},"Horizontal(Content(width=explicit),Flex(1),Flex(2))"),":"),Object(a.b)(i.c,{__position:5,__code:"<Vertical spacing={10} style={{ backgroundColor: 'lightskyblue' }}>\n  <Horizontal height={100} spacing={10}>\n    <Content width={100} style={{ backgroundColor: 'limegreen' }}>\n      Exactly 100px\n    </Content>\n    <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n      I'm taking 1 from remainder\n    </Flex>\n    <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n      I'm taking 2 from remainder\n    </Flex>\n  </Horizontal>\n  <Horizontal height={100} spacing={10}>\n    <Content width={100} style={{ backgroundColor: 'limegreen' }}>\n      Row 2\n    </Content>\n    <Flex sizing={1} style={{ backgroundColor: 'darkorange' }}>\n      Row 2\n    </Flex>\n    <Flex sizing={2} style={{ backgroundColor: 'lightpink' }}>\n      Row 2\n    </Flex>\n  </Horizontal>\n</Vertical>",__scope:{props:this?this.props:t,Playground:i.c,Vertical:l.i,Horizontal:l.f,Flex:l.b,Content:l.a,demos:r},mdxType:"Playground"},Object(a.b)(l.i,{spacing:10,style:{backgroundColor:"lightskyblue"},mdxType:"Vertical"},Object(a.b)(l.f,{height:100,spacing:10,mdxType:"Horizontal"},Object(a.b)(l.a,{width:100,style:{backgroundColor:"limegreen"},mdxType:"Content"},"Exactly 100px"),Object(a.b)(l.b,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"I'm taking 1 from remainder"),Object(a.b)(l.b,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"I'm taking 2 from remainder")),Object(a.b)(l.f,{height:100,spacing:10,mdxType:"Horizontal"},Object(a.b)(l.a,{width:100,style:{backgroundColor:"limegreen"},mdxType:"Content"},"Row 2"),Object(a.b)(l.b,{sizing:1,style:{backgroundColor:"darkorange"},mdxType:"Flex"},"Row 2"),Object(a.b)(l.b,{sizing:2,style:{backgroundColor:"lightpink"},mdxType:"Flex"},"Row 2")))))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/containers.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-containers.d69c4694312c8ad61e10.js.map