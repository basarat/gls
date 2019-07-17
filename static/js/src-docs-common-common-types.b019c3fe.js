(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/docs/common/commonTypes.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i={},b="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(b,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"common-types-and-props"},"Common Types and Props"),Object(s.b)("p",null,"We have a common set of props that are supported by a number of components. These will be mentioned in the docs for the individual components as well. We present them below with a reference component."),Object(s.b)("p",null,"Before we do that, we present some common types referenced by the props."),Object(s.b)("h2",{id:"boxunit"},"BoxUnit"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"type BoxUnit = number | string"),". "),Object(s.b)("p",null,"Examples: "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"5 (implies 5px)"),Object(s.b)("li",{parentName:"ul"},"'5rem'")),Object(s.b)("h2",{id:"boxset"},"BoxSet"),Object(s.b)("p",null,"Various versions of providing common shorthand properties"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export type BoxSet =\n  /** top,right,left,bottom */\n  | BoxUnit\n  /** [topBottom,leftRight] */\n  | [BoxUnit, BoxUnit]\n  /** [top,right,bottom,left] */\n  | [BoxUnit, BoxUnit, BoxUnit, BoxUnit]\n")),Object(s.b)("h2",{id:"glsprops"},"GLSProps"),Object(s.b)("p",null,"Objective: A consistent set of customization options. Members:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"className?: string"),": css class name."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"padding?: BoxSet"),": the padding.")))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/common/commonTypes.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-common-common-types.63aeaa55c4eba2426966.js.map