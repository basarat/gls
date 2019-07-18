(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/docs/common/commonTypes.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),p={},a="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(a,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"common-types-and-props"},"Common Types and Props"),Object(o.b)("p",null,"We have a common set of props that are supported by a number of components. These will be mentioned in the docs for the individual components as well. We present them below with a reference component."),Object(o.b)("p",null,"Before we do that, we present some common types referenced by the props."),Object(o.b)("h2",{id:"boxunit"},"BoxUnit"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"type BoxUnit = number | string"),". "),Object(o.b)("p",null,"Examples: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"5 (implies 5px)"),Object(o.b)("li",{parentName:"ul"},"'5rem'")),Object(o.b)("h2",{id:"boxset"},"BoxSet"),Object(o.b)("p",null,"Various versions of providing common shorthand properties"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export type BoxSet =\n  /** top,right,left,bottom */\n  | BoxUnit\n  /** [top & bottom, left & right] */\n  | [BoxUnit, BoxUnit]\n  /** [top,right,bottom,left] */\n  | [BoxUnit, BoxUnit, BoxUnit, BoxUnit]\n")),Object(o.b)("p",null,"e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"5")," (means ",Object(o.b)("inlineCode",{parentName:"p"},"5px")," top,right,left,bottom), ",Object(o.b)("inlineCode",{parentName:"p"},"['5rem','10px']")," (means ",Object(o.b)("inlineCode",{parentName:"p"},"5rem")," top & bottom, ",Object(o.b)("inlineCode",{parentName:"p"},"10px")," left & right), ",Object(o.b)("inlineCode",{parentName:"p"},"[10,5,'10rem', 15]")," (means ",Object(o.b)("inlineCode",{parentName:"p"},"10px")," top, ",Object(o.b)("inlineCode",{parentName:"p"},"5px")," right, ",Object(o.b)("inlineCode",{parentName:"p"},"10rem")," bottom, ",Object(o.b)("inlineCode",{parentName:"p"},"15px")," left)."),Object(o.b)("h2",{id:"glsprops"},"GLSProps"),Object(o.b)("p",null,"Objective: A consistent set of customization options. Members:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"padding?: BoxSet"),": The padding. Using it effectively is covered in the ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"../principle-spacing/"}),"spacing principle")," section."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scroll?"),": specify scrolling behaviours. Covered in ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"../principle-scrolling/"}),"scrolling principle"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"styles?: (typestyle.types.NestedCSSProperties | falsy)[]"),": an array of custom typestyle ",Object(o.b)("inlineCode",{parentName:"li"},"style")," objects. Any falsy array members will be safely ignored.")),Object(o.b)("p",null,"From react: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"className?: string"),": css class name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"style?: React.CSSProperties"),": any custom react ",Object(o.b)("inlineCode",{parentName:"li"},"style")," you want to pass in.")),Object(o.b)("p",null,"For the tag control: "),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"tag?: {\n  name?: 'div' /** default */ | 'a' | 'button' // etc.\n  props?: React.HTMLProps // props passed to the tag\n}\n")),Object(o.b)("h2",{id:"sizingprop"},"SizingProp"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sizing")," prop:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Specifies sizing interaction\n */\nexport interface SizingProp {\n  /** \n   * Specifies `sizing` interaction\n   */\n  sizing?:\n  | 'content' /** default */\n  | 'flex' /** Same as `1` */\n  | number;\n}\n")),Object(o.b)("p",null,"It is covered in our ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle")," section."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/common/commonTypes.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-common-common-types.40264a48365f32379687.js.map