(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/docs/common/defaults.mdx":function(e,i,l){"use strict";l.r(i),l.d(i,"default",function(){return s});var t=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(l("./node_modules/react/index.js"),l("./node_modules/@mdx-js/react/dist/index.es.js")),c=l("./node_modules/docz/dist/index.esm.js"),a=l("./src/index.tsx"),o=l("./src/demos/index.tsx"),r={},b="wrapper";function s(e){var i=e.components,l=Object(t.a)(e,["components"]);return Object(n.b)(b,Object.assign({},r,l,{components:i,mdxType:"MDXLayout"}),Object(n.b)(o.Star,null),Object(n.b)("h1",{id:"defaults"},"Defaults"),Object(n.b)("p",null,"There are some default values configured into GLS for spacing and breakpoint: "),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"verticalSpacing: CSSLength = 24;\nhorizontalSpacing: CSSLength = 24;\nbreakpoint: number = 480;\n")),Object(n.b)("h2",{id:"usage-by-components"},"Usage by components"),Object(n.b)("p",null,"The following components use the following defaults if an explicit prop value is not passed in:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"../vertical/"}),"Vertical"),": ",Object(n.b)("inlineCode",{parentName:"li"},"verticalSpacing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"../horizontal/"}),"Horizontal"),": ",Object(n.b)("inlineCode",{parentName:"li"},"horizontalSpacing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"../grid/"}),"Grid"),": ",Object(n.b)("inlineCode",{parentName:"li"},"verticalSpacing"),"/",Object(n.b)("inlineCode",{parentName:"li"},"horizontalSpacing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"../responsive/"}),"Responsive"),": ",Object(n.b)("inlineCode",{parentName:"li"},"verticalSpacing"),"/",Object(n.b)("inlineCode",{parentName:"li"},"horizontalSpacing"),"/",Object(n.b)("inlineCode",{parentName:"li"},"breakpoint"))),Object(n.b)("h2",{id:"configuring"},"Configuring"),Object(n.b)("p",null,"These are exported using React Context. You can import it as ",Object(n.b)("inlineCode",{parentName:"p"},"import { GLSDefaults } from 'gls'"),"."),Object(n.b)("p",null,"In the pseudo code example below, you can see ",Object(n.b)("inlineCode",{parentName:"p"},"Vertical")," using default ",Object(n.b)("inlineCode",{parentName:"p"},"verticalSpacing")," (powered by the closest parent provider) for its ",Object(n.b)("inlineCode",{parentName:"p"},"spacing"),", or the explicit value when its passed in:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"Vertical (will use default 24)\nVertical {explicit:10} (will use 10)\nGLSDefaults.Provider value={{verticalSpacing:0}}\n  Vertical (will use 0)\n  Vertical {explicit:10} (will use 10)\n  GLSDefaults.Provider value={{verticalSpacing:30}}\n    Vertical (will use 30)\n    Vertical {explicit:10} (will use 10)\n")),Object(n.b)("p",null,"Here is the pseudocode coded up, so you can play around with it:"),Object(n.b)(c.c,{__position:1,__code:"<Vertical style={{ border: '5px solid black' }}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Implicit 24</div>\n  <div style={{ backgroundColor: 'lightpink' }}>Implicit 24</div>\n</Vertical>\n<Vertical spacing={10} style={{ border: '5px solid black' }}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Explicit 10</div>\n  <div style={{ backgroundColor: 'lightpink' }}>Explicit 10</div>\n</Vertical>\n<GLSDefaults.Provider value={{ verticalSpacing: 0 }}>\n  <Vertical style={{ border: '5px solid black' }}>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Implicit 0</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Implicit 0</div>\n  </Vertical>\n  <Vertical spacing={10} style={{ border: '5px solid black' }}>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Explicit 10</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Explicit 10</div>\n  </Vertical>\n  <GLSDefaults.Provider value={{ verticalSpacing: 30 }}>\n    <Vertical style={{ border: '5px solid black' }}>\n      <div style={{ backgroundColor: 'lightskyblue' }}>Implicit 30</div>\n      <div style={{ backgroundColor: 'lightpink' }}>Implicit 30</div>\n    </Vertical>\n    <Vertical spacing={10} style={{ border: '5px solid black' }}>\n      <div style={{ backgroundColor: 'lightskyblue' }}>Explicit 10</div>\n      <div style={{ backgroundColor: 'lightpink' }}>Explicit 10</div>\n    </Vertical>\n  </GLSDefaults.Provider>\n</GLSDefaults.Provider>",__scope:{props:this?this.props:l,Playground:c.c,Vertical:a.j,GLSDefaults:a.e,demos:o},mdxType:"Playground"},Object(n.b)(a.j,{style:{border:"5px solid black"},mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Implicit 24"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"Implicit 24")),Object(n.b)(a.j,{spacing:10,style:{border:"5px solid black"},mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Explicit 10"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"Explicit 10")),Object(n.b)(a.e.Provider,{value:{verticalSpacing:0}},Object(n.b)(a.j,{style:{border:"5px solid black"},mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Implicit 0"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"Implicit 0")),Object(n.b)(a.j,{spacing:10,style:{border:"5px solid black"},mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Explicit 10"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"Explicit 10")),Object(n.b)(a.e.Provider,{value:{verticalSpacing:30}},Object(n.b)(a.j,{style:{border:"5px solid black"},mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Implicit 30"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"Implicit 30")),Object(n.b)(a.j,{spacing:10,style:{border:"5px solid black"},mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Explicit 10"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"Explicit 10"))))))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/common/defaults.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-common-defaults.f4a598d628e907e922aa.js.map