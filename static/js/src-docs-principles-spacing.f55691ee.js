(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/demos/index.tsx":function(e,n,t){"use strict";t.r(n),t.d(n,"BlueDiv",function(){return c}),t.d(n,"PinkDiv",function(){return r}),t.d(n,"Label",function(){return A}),t.d(n,"Input",function(){return p}),t.d(n,"buttonClass",function(){return g}),t.d(n,"Button",function(){return m});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),l=t.n(i),o=t("./node_modules/typestyle/lib.es2015/index.js"),c=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var r=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=o.style({}),A=function(e){return l.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var b=o.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return l.a.createElement("input",{className:b})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var g=o.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var m=function(e){e.className;var n=Object(a.a)(e,["className"]);return l.a.createElement("button",Object.assign({},n,{type:"button",className:o.classes(g,e.className)}))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/images/borderbox.png":function(e,n){e.exports="data:image/png;base64,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"},"./src/docs/images/margincollapse.png":function(e,n,t){e.exports=t.p+"static/img/margincollapse.5e3abf25.png"},"./src/docs/images/margindependency.png":function(e,n){e.exports="data:image/png;base64,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"},"./src/docs/images/marginfree.png":function(e,n){e.exports="data:image/png;base64,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"},"./src/docs/images/marginplacement.png":function(e,n,t){e.exports=t.p+"static/img/marginplacement.e27ea215.png"},"./src/docs/principles/spacing.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return A});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),l=t("./node_modules/docz/dist/index.esm.js"),o=t("./src/index.tsx"),c=t("./src/demos/index.tsx"),r={},s="wrapper";function A(e){var n=e.components,A=Object(a.a)(e,["components"]);return Object(i.b)(s,Object.assign({},r,A,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"space"},"Space"),Object(i.b)("p",null,"The difference between pixel perfect and good enough mostly boils down to perfect space management. Here we discuss the ",Object(i.b)("em",{parentName:"p"},"spacing principle")," developed in GLS."),Object(i.b)("h2",{id:"spacing-principle"},"Spacing principle"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fundamental rule: Don't camp on external space. "),Object(i.b)("li",{parentName:"ul"},"Fundamental rule in CSS terms: Components should not have external margins.")),Object(i.b)("h3",{id:"issues-with-external-margins"},"Issues with external margins"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fundamentally external e.g. outside the width of the component in the recommended ",Object(i.b)("inlineCode",{parentName:"li"},"border-box")," box sizing:")),Object(i.b)("p",null,Object(i.b)("img",{alt:"borderbox",src:t("./src/docs/images/borderbox.png")})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Collapses. You set a value, but it renders as something else depending on the neighbours. A maintainability nightmare.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"margincollapse",src:t("./src/docs/images/margincollapse.png")})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Makes pixel-perfect placement impossible. Margins on components disable pixel-perfect placement as they push themselves away from borders.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"marginplacement",src:t("./src/docs/images/marginplacement.png")})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pollutes layout with logic. Suppose you want to conditionally render some buttons. If you are using component margins for spacing then there a conditional logic dependency leaking into your CSS. These dependencies quickly become unmanagable.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"margindependency",src:t("./src/docs/images/margindependency.png")})),Object(i.b)("p",null,"So the question: If the components are coming without margins, how are they being spaced from their neighbours e.g. how is the margin-free label and the input spaced? "),Object(i.b)("p",null,Object(i.b)("img",{alt:"marginfree",src:t("./src/docs/images/marginfree.png")})),Object(i.b)("p",null,"Lets discuss that next."),Object(i.b)("h2",{id:"how-to-do-space-correctly"},"How to do space correctly"),Object(i.b)("p",null,"Realize that a component's external space, is its parent's internal space. A parent is free to manage its internal space anyway it wants. So really space management between components is the responsibility of the container (and we provide plenty of such containers)."),Object(i.b)("h3",{id:"space-among-children-spacing-prop"},"Space among children: ",Object(i.b)("inlineCode",{parentName:"h3"},"spacing")," prop"),Object(i.b)("p",null,"Remember good components don't come with bleedy margins. Since components don't use margins, our containers can easily create spacing between their children by adding margins with pure CSS (pseudocode: ",Object(i.b)("inlineCode",{parentName:"p"},"CSS-selector(all children except last-child): CSS-property(margin)"),")."),Object(i.b)("p",null,"Lets look at some examples of external-margin-free components and how they nicely compose. First a simple margin-free component e.g. an input:"),Object(i.b)(l.c,{__position:0,__code:"<demos.Input />",__scope:{props:this?this.props:A,Playground:l.c,Vertical:o.h,demos:c},mdxType:"Playground"},Object(i.b)(c.Input,null)),Object(i.b)("p",null,"Because the input was margin free, it can easily reuseable in any given context. It can easily be composed with a",Object(i.b)("inlineCode",{parentName:"p"},"label")," to create a ",Object(i.b)("inlineCode",{parentName:"p"},"label+input")," set:"),Object(i.b)(l.c,{__position:1,__code:"<Vertical spacing={5}>\n  <demos.Label>Name</demos.Label>\n  <demos.Input />\n</Vertical>",__scope:{props:this?this.props:A,Playground:l.c,Vertical:o.h,demos:c},mdxType:"Playground"},Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"Name"),Object(i.b)(c.Input,null))),Object(i.b)("p",null,"In the above example, notice"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the spacing is coming from the parent ",Object(i.b)("inlineCode",{parentName:"li"},"Vertical spacing=5"),". So our ",Object(i.b)("inlineCode",{parentName:"li"},"input")," and ",Object(i.b)("inlineCode",{parentName:"li"},"label")," don't have to fight each other to see whose margin wins."),Object(i.b)("li",{parentName:"ul"},"the vertical itself has no external margins. So the ",Object(i.b)("inlineCode",{parentName:"li"},"Vertical(input+label)")," set is once again resuseable.")),Object(i.b)("p",null,"We can easily compose multiple ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical(input+label)")," into another ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical"),", demonstrating creating a composite of composites e.g. 3 x label+input:"),Object(i.b)(l.c,{__position:2,__code:"<Vertical spacing={15}>\n  <Vertical spacing={5}>\n    <demos.Label>First name</demos.Label>\n    <demos.Input />\n  </Vertical>\n  <Vertical spacing={5}>\n    <demos.Label>Middle name</demos.Label>\n    <demos.Input />\n  </Vertical>\n  <Vertical spacing={5}>\n    <demos.Label>Last name</demos.Label>\n    <demos.Input />\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:A,Playground:l.c,Vertical:o.h,demos:c},mdxType:"Playground"},Object(i.b)(o.h,{spacing:15,mdxType:"Vertical"},Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"First name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"Middle name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"Last name"),Object(i.b)(c.Input,null)))),Object(i.b)("p",null,"Notice that this composite of composites (",Object(i.b)("inlineCode",{parentName:"p"},"Vertical( 3 x Vertical(label+input) )"),") is also external margin free, and we can continue down this path of reuse. We'll stop here, but feel free to play with the provided examples."),Object(i.b)("h3",{id:"space-at-the-border-padding-prop"},"Space at the border: ",Object(i.b)("inlineCode",{parentName:"h3"},"padding")," prop"),Object(i.b)("p",null,"We've talked about spacing children among each other, one final thing to talk about is how to seperate children from the parent border. The answer is to simply use padding: "),Object(i.b)(l.c,{__position:3,__code:"<Vertical spacing={15} padding={15}>\n  <Vertical spacing={5}>\n    <demos.Label>First name</demos.Label>\n    <demos.Input />\n  </Vertical>\n  <Vertical spacing={5}>\n    <demos.Label>Middle name</demos.Label>\n    <demos.Input />\n  </Vertical>\n  <Vertical spacing={5}>\n    <demos.Label>Last name</demos.Label>\n    <demos.Input />\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:A,Playground:l.c,Vertical:o.h,demos:c},mdxType:"Playground"},Object(i.b)(o.h,{spacing:15,padding:15,mdxType:"Vertical"},Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"First name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"Middle name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"Last name"),Object(i.b)(c.Input,null)))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Component design tip: ",Object(i.b)("inlineCode",{parentName:"p"},"padding")," can be used in any components that have an explict border (e.g buttons, user profile cards).")),Object(i.b)("p",null,"You normally:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"don't put ",Object(i.b)("inlineCode",{parentName:"li"},"padding")," on any ",Object(i.b)("em",{parentName:"li"},"layout")," components that you want to ",Object(i.b)("em",{parentName:"li"},"compose")," into other layouts."),Object(i.b)("li",{parentName:"ul"},"put ",Object(i.b)("inlineCode",{parentName:"li"},"padding")," on ",Object(i.b)("em",{parentName:"li"},"page level")," layout components.")),Object(i.b)("p",null,"So a page level form layout component would have padding, whereas a reusable form component would not. You can observe this pattern in the example below where the ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical"),"s for the reuseable ",Object(i.b)("inlineCode",{parentName:"p"},"First/Middle/Last")," name component does not have a padding (enabling seemless reuse): "),Object(i.b)(l.c,{__position:4,__code:"{/* Not meant to be nested further */}\n<Vertical spacing={15} padding={15}>\n  {/* User A: Reusable child */}\n  <Vertical spacing={15}>\n    <Vertical spacing={5}>\n      <demos.Label>UserA first name</demos.Label>\n      <demos.Input />\n    </Vertical>\n    <Vertical spacing={5}>\n      <demos.Label>UserA middle name</demos.Label>\n      <demos.Input />\n    </Vertical>\n    <Vertical spacing={5}>\n      <demos.Label>UserA last name</demos.Label>\n      <demos.Input />\n    </Vertical>\n  </Vertical>\n  {/* User B: Reusing the same code as A, inline here, but you can componentify */}\n  <Vertical spacing={15}>\n    <Vertical spacing={5}>\n      <demos.Label>UserB first name</demos.Label>\n      <demos.Input />\n    </Vertical>\n    <Vertical spacing={5}>\n      <demos.Label>UserB middle name</demos.Label>\n      <demos.Input />\n    </Vertical>\n    <Vertical spacing={5}>\n      <demos.Label>UserB last name</demos.Label>\n      <demos.Input />\n    </Vertical>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:A,Playground:l.c,Vertical:o.h,demos:c},mdxType:"Playground"},Object(i.b)(o.h,{spacing:15,padding:15,mdxType:"Vertical"},Object(i.b)(o.h,{spacing:15,mdxType:"Vertical"},Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"UserA first name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"UserA middle name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"UserA last name"),Object(i.b)(c.Input,null))),Object(i.b)(o.h,{spacing:15,mdxType:"Vertical"},Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"UserB first name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"UserB middle name"),Object(i.b)(c.Input,null)),Object(i.b)(o.h,{spacing:5,mdxType:"Vertical"},Object(i.b)(c.Label,null,"UserB last name"),Object(i.b)(c.Input,null))))))}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/principles/spacing.mdx"}}),A.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-principles-spacing.fbf16aa72cdb4f602ee2.js.map