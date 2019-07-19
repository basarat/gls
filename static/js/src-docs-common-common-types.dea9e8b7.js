(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/common/commonTypes.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/index.tsx"),r={},c="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"common-types-and-props"},"Common Types and Props"),Object(l.b)("p",null,"We have a common set of props that are supported by a number of components. These will be mentioned in the docs for the individual components as well. We present them below with a reference component."),Object(l.b)("p",null,"Before we do that, we present some common types referenced by the props."),Object(l.b)("h2",{id:"csslength"},"CSSLength"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type CSSLength = number | string"),". "),Object(l.b)("p",null,"Examples: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"5 (implies 5px)"),Object(l.b)("li",{parentName:"ul"},"'5rem'")),Object(l.b)("h2",{id:"cssbox"},"CSSBox"),Object(l.b)("p",null,"Various versions of providing common shorthand properties"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export type CSSBox =\n  /** top,right,left,bottom */\n  | CSSLength\n  /** [top & bottom, left & right] */\n  | [CSSLength, CSSLength]\n  /** [top,right,bottom,left] */\n  | [CSSLength, CSSLength, CSSLength, CSSLength]\n")),Object(l.b)("p",null,"e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"5")," (means ",Object(l.b)("inlineCode",{parentName:"p"},"5px")," top,right,left,bottom), ",Object(l.b)("inlineCode",{parentName:"p"},"['5rem','10px']")," (means ",Object(l.b)("inlineCode",{parentName:"p"},"5rem")," top & bottom, ",Object(l.b)("inlineCode",{parentName:"p"},"10px")," left & right), ",Object(l.b)("inlineCode",{parentName:"p"},"[10,5,'10rem', 15]")," (means ",Object(l.b)("inlineCode",{parentName:"p"},"10px")," top, ",Object(l.b)("inlineCode",{parentName:"p"},"5px")," right, ",Object(l.b)("inlineCode",{parentName:"p"},"10rem")," bottom, ",Object(l.b)("inlineCode",{parentName:"p"},"15px")," left)."),Object(l.b)("h2",{id:"glsprops"},"GLSProps"),Object(l.b)("p",null,"Objective: A consistent set of customization options. Members:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"padding?: BoxSet"),": The padding. Using it effectively is covered in the ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"../principle-spacing/"}),"spacing principle")," section."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scroll?"),": specify scrolling behaviours. Covered in ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"../principle-scrolling/"}),"scrolling principle"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"styles?: (typestyle.types.NestedCSSProperties | falsy)[]"),": an array of custom typestyle ",Object(l.b)("inlineCode",{parentName:"li"},"style")," objects. Any falsy array members will be safely ignored.")),Object(l.b)("p",null,"From react: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"className?: string"),": css class name."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"style?: React.CSSProperties"),": any custom react ",Object(l.b)("inlineCode",{parentName:"li"},"style")," you want to pass in.")),Object(l.b)("p",null,"For the tag control: "),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"tag?: {\n  name?: 'div' /** default */ | 'a' | 'button' // etc.\n  props?: React.HTMLProps // props passed to the tag\n}\n")),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Specifies sizing interaction\n */\nexport interface SizingProp {\n  /** \n   * Specifies `sizing` interaction\n   */\n  sizing?:\n  | 'content' /** default */\n  | 'flex' /** Same as `1` */\n  | number /** A flex ratio */;\n}\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"content"),"/",Object(l.b)("inlineCode",{parentName:"p"},"flex"),"/",Object(l.b)("inlineCode",{parentName:"p"},"flex ratio")," are covered in our ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle")," section."),Object(l.b)("h2",{id:"childplacementprops"},"ChildPlacementProps"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Specifies children layout options \n */\nexport interface ChildPlacementProps {\n  /** Spacing between each child */\n  spacing?: number,\n  /** Child alignment in vertical axis */\n  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',\n  /** Child alignment in horizontal axis */\n  horizontalAlign?: 'left' /** default */ | 'center' | 'right',\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"spacing?: CSSLength")," Controls spacing between children (",Object(l.b)("a",Object.assign({parentName:"li"},{href:"../principle-spacing/"}),"concepts covered in spacing principle"),"). e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"spacing={10}")," gives us:")),Object(l.b)(o.c,{__position:0,__code:"<Vertical spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'darkorange' }}>Again</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:a.g},mdxType:"Playground"},Object(l.b)(a.g,{spacing:10,mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(l.b)("div",{style:{backgroundColor:"darkorange"}},"Again"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign?: 'top' /** default */ | 'center' | 'bottom'")," Controls vertical alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign='bottom'")," gives us:")),Object(l.b)(o.c,{__position:1,__code:"<Vertical verticalAlign=\"bottom\" style={{ height: '100px' }} spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:a.g},mdxType:"Playground"},Object(l.b)(a.g,{verticalAlign:"bottom",style:{height:"100px"},spacing:10,mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign?: 'left' /** default */ | 'center' | 'right'")," Controls horizontal alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign='right'")," gives us:")),Object(l.b)(o.c,{__position:2,__code:'<Vertical horizontalAlign="right">\n  <button>Hello</button>\n  <button>World</button>\n</Vertical>',__scope:{props:this?this.props:n,Playground:o.c,Vertical:a.g},mdxType:"Playground"},Object(l.b)(a.g,{horizontalAlign:"right",mdxType:"Vertical"},Object(l.b)("button",null,"Hello"),Object(l.b)("button",null,"World"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/common/commonTypes.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-common-common-types.cdd90199e0a6660215eb.js.map