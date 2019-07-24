(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/common/commonTypes.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),p=n("./src/index.tsx"),r=n("./src/demos/index.tsx"),s={},l="wrapper";function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.Star,null),Object(a.b)("h1",{id:"common-types-and-props"},"Common Types and Props"),Object(a.b)("p",null,"We have a common set of props that are supported by a number of components. These will be mentioned in the docs for the individual components as well. We present them below with a reference component."),Object(a.b)("p",null,"Before we do that, we present some common types referenced by the props."),Object(a.b)("h2",{id:"csslength"},"CSSLength"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"type CSSLength = number | string"),". "),Object(a.b)("p",null,"Examples: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"5 (implies 5px)"),Object(a.b)("li",{parentName:"ul"},"'5rem'")),Object(a.b)("h2",{id:"cssbox"},"CSSBox"),Object(a.b)("p",null,"Various versions of providing common shorthand properties"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export type CSSBox =\n  /** top,right,left,bottom */\n  | CSSLength\n  /** [top & bottom, left & right] */\n  | [CSSLength, CSSLength]\n  /** [top,right,bottom,left] */\n  | [CSSLength, CSSLength, CSSLength, CSSLength]\n")),Object(a.b)("p",null,"e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"5")," (means ",Object(a.b)("inlineCode",{parentName:"p"},"5px")," top,right,left,bottom), ",Object(a.b)("inlineCode",{parentName:"p"},"['5rem','10px']")," (means ",Object(a.b)("inlineCode",{parentName:"p"},"5rem")," top & bottom, ",Object(a.b)("inlineCode",{parentName:"p"},"10px")," left & right), ",Object(a.b)("inlineCode",{parentName:"p"},"[10,5,'10rem', 15]")," (means ",Object(a.b)("inlineCode",{parentName:"p"},"10px")," top, ",Object(a.b)("inlineCode",{parentName:"p"},"5px")," right, ",Object(a.b)("inlineCode",{parentName:"p"},"10rem")," bottom, ",Object(a.b)("inlineCode",{parentName:"p"},"15px")," left)."),Object(a.b)("h2",{id:"spacingprop"},"SpacingProp"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface SpacingProp {\n  /** Spacing between each child */\n  spacing?: CSSLength,\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"spacing?: CSSLength")," Controls spacing between children (",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../principle-spacing/"}),"concepts covered in spacing principle"),"). e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"spacing={10}")," gives us:")),Object(a.b)(i.c,{__position:1,__code:"<Vertical spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'darkorange' }}>Again</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:p.i,demos:r},mdxType:"Playground"},Object(a.b)(p.i,{spacing:10,mdxType:"Vertical"},Object(a.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(a.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(a.b)("div",{style:{backgroundColor:"darkorange"}},"Again"))),Object(a.b)("h2",{id:"sizeprops"},"SizeProps"),Object(a.b)("p",null,"The size props (",Object(a.b)("inlineCode",{parentName:"p"},"height,minHeight,maxHeight,width,minWidth,maxWidth"),") allow for explicit size control as covered in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle")," section."),Object(a.b)("h2",{id:"sizingprop"},"SizingProp"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"sizing")," prop is covered in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle")," section."),Object(a.b)("h2",{id:"paddingprop"},"PaddingProp"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Add support for padding\n */\nexport interface PaddingProp {\n  padding?: CSSBox,\n}\n")),Object(a.b)("p",null,"Allows you to specifiy padding as a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"#cssbox"}),"CSSBox"),". Using padding effectively is covered in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," section."),Object(a.b)("h2",{id:"scrollprop"},"ScrollProp"),Object(a.b)("p",null,"Contains ",Object(a.b)("inlineCode",{parentName:"p"},"scroll?")," member. Type definition and effective use is coverd in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../principle-scrolling/"}),"scrolling principle")," section."),Object(a.b)("h2",{id:"stylesprop"},"StylesProp"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Support for mixing in TypeStyle NestedCSSProperties (style function arguments) \n */\nexport interface StylesProp {\n  styles?: (types.NestedCSSProperties | null | false)[];\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"styles")," props is an array that gets passed as arguments to the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://typestyle.github.io/#/core/style"}),Object(a.b)("inlineCode",{parentName:"a"},"typestyle.style")," function"),"."),Object(a.b)("p",null,"E.g you can customize the hover color: "),Object(a.b)(i.c,{__position:2,__code:"<Vertical\n  height={100}\n  styles={[\n    {\n      transition: '.3s',\n      backgroundColor: 'limegreen',\n      $nest: {\n        '&:hover': { backgroundColor: 'gold' },\n      },\n    },\n  ]}\n/>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:p.i,demos:r},mdxType:"Playground"},Object(a.b)(p.i,{height:100,styles:[{transition:".3s",backgroundColor:"limegreen",$nest:{"&:hover":{backgroundColor:"gold"}}}],mdxType:"Vertical"})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Any falsy array members will be safely ignored just like the ",Object(a.b)("inlineCode",{parentName:"p"},"typestyle.style")," function.")),Object(a.b)("h2",{id:"styleprop"},"StyleProp"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Support for React `style` property\n */\nexport interface StyleProp {\n  style?: React.CSSProperties\n}\n")),Object(a.b)("p",null,"Any custom react ",Object(a.b)("inlineCode",{parentName:"p"},"style")," you want to pass in. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that React ",Object(a.b)("inlineCode",{parentName:"p"},"style")," doesn't support things not supported by the html style attribute (e.g. media queries or pseudo elements). For that you can use ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"#stylesprop"}),"StylesProp"),".")),Object(a.b)("h2",{id:"classnameprop"},"ClassNameProp"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Support for React `className` property \n */\nexport interface ClassNameProp { \n  className?: string\n}\n")),Object(a.b)("p",null,"Allows you to add your own CSS classnames to the element."),Object(a.b)("h2",{id:"tagprops"},"TagProps"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Props supported by the underlying tag \n */\nexport interface TagProps {\n  tag?: {\n    name?: 'div' /** default */ | 'a' | 'button' // etc.\n    props?: React.HTMLProps // props passed to the tag\n  }\n}\n")),Object(a.b)("p",null,"Gives you direct access to the underlying react tag for any customization you might want e.g. generate a ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," as a ",Object(a.b)("inlineCode",{parentName:"p"},"section")," tag (instead of the default ",Object(a.b)("inlineCode",{parentName:"p"},"div")," tag):"),Object(a.b)(i.c,{__position:3,__code:"<Vertical\n  tag={{\n    name: 'section',\n    props: { onClick: () => alert('Nice you meet you \u2764\ufe0f') },\n  }}\n  height={100}\n  style={{ backgroundColor: 'limegreen' }}\n/>",__scope:{props:this?this.props:n,Playground:i.c,Vertical:p.i,demos:r},mdxType:"Playground"},Object(a.b)(p.i,{tag:{name:"section",props:{onClick:function(){return alert("Nice you meet you \u2764\ufe0f")}}},height:100,style:{backgroundColor:"limegreen"},mdxType:"Vertical"})),Object(a.b)("h2",{id:"baseprops"},"BaseProps"),Object(a.b)("p",null,"A consistent set of customization options. Collects the following props into a common type: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PaddingProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"#paddingprop"}),"Specifies padding"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ScrollProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"#scrollprop"}),"Specify scrolling behaviours"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SizeProps"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"#sizeprops"}),"Sepecify explicit size control"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"StylesProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"#stylesprop"}),"Allows you to use TypeStyle CSS mixins"),". "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"StyleProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"#styleprop"}),"Allows you to specify React.CSSProperties"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ClassNameProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"#classnameprop"}),"Allows you to pass in CSS class names"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"TagProps"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"#tagprops"}),"Allows tag control"),".")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/common/commonTypes.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-common-common-types.dcb47deea5f265f8d8ab.js.map