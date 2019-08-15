(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/docs/guidance/components.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/index.tsx"),b=n("./src/demos/index.tsx"),c={},s="wrapper";function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b.Star,null),Object(o.b)("h1",{id:"component-concepts"},"Component Concepts"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This section is in a ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../guidance/"}),"series of sections that provide further guidance for success"),".")),Object(o.b)("p",null,"Following the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle")," there are three categories of ",Object(o.b)("strong",{parentName:"p"},"defaults")," you should follow in components "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#explicit-size"}),"Explicit Size")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#content-sizing"}),"Content Sizing")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#flex-sizing"}),"Flex Sizing"))),Object(o.b)("h2",{id:"explicit-size"},"Explicit Size"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If a component exists to present an explicitly sized piece of information, then it should take explicit ",Object(o.b)("inlineCode",{parentName:"p"},"SizeProps"),".")),Object(o.b)("p",null,"Explicit size is rare, but still plays an active part in UI design. "),Object(o.b)("p",null,"An example would be a profile display picture component where you want to set the width and the height to ensure the image takes up a particular space even before the image (content) is loaded. Notice the explicit ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"style")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export const DemoProfile: React.FC<{ size: number }> = ({ size }) => {\n  return (\n    <img\n      style={{\n        borderRadius: '50%',\n        // Explicit size\n        width: `${size}px`,\n        height: `${size}px`,\n      }}\n      src={`http://placekitten.com/g/${size}/${size}`} />\n  );\n}\n")),Object(o.b)(l.c,{__position:1,__code:"<demos.DemoProfile size={100} />",__scope:{props:this?this.props:n,Playground:l.c,Content:a.a,Vertical:a.i,Horizontal:a.f,Flex:a.b,demos:b},mdxType:"Playground"},Object(o.b)(b.DemoProfile,{size:100})),Object(o.b)("h2",{id:"content-sizing"},"Content Sizing"),Object(o.b)("p",null,"Content sizing is the most common form of sizing in designs out there. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If a component exists only to present the ",Object(o.b)("strong",{parentName:"p"},"dynamic amount of content")," it contains, then it should be ",Object(o.b)("em",{parentName:"p"},"content")," by default.")),Object(o.b)("p",null,"You normally don't need to do anything special for the browsers to reliably size your items by content. "),Object(o.b)("p",null,"Examples: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Links (",Object(o.b)("inlineCode",{parentName:"li"},"a"),")"),Object(o.b)("li",{parentName:"ul"},"Buttons (",Object(o.b)("inlineCode",{parentName:"li"},"button"),")"),Object(o.b)("li",{parentName:"ul"},"Typography (",Object(o.b)("inlineCode",{parentName:"li"},"h1,h2,...,p,li,ul")," etc)")),Object(o.b)("h2",{id:"full-width"},"Full Width"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If a component is going to occupy a significant portion of user's interaction time, then it should be full width by default. ")),Object(o.b)("p",null,"Examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"input")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"select")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"textarea"))),Object(o.b)("h2",{id:"full-height"},"Full Height"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If a component is going to be a critical part of page design then it should be full height by default")),Object(o.b)("p",null,"Example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"page body")))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/guidance/components.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-guidance-components.3acb3df5aa9febc4dcb4.js.map