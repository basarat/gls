(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/common/commonTypes.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),p=n("./src/index.tsx"),r=n("./src/demos/index.tsx"),s={},l="wrapper";function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.Star,null),Object(i.b)("h1",{id:"common-types"},"Common Types"),Object(i.b)("p",null,"We present some common types referenced by the props."),Object(i.b)("h2",{id:"csslength"},"CSSLength"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"type CSSLength = number | string"),". "),Object(i.b)("p",null,"Examples: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"5 (implies 5px)"),Object(i.b)("li",{parentName:"ul"},"'5rem'")),Object(i.b)("h2",{id:"cssbox"},"CSSBox"),Object(i.b)("p",null,"Various versions of providing common shorthand properties."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export type CSSBox =\n  /** top,right,left,bottom */\n  | CSSLength\n  /** [top & bottom, left & right] */\n  | [CSSLength, CSSLength]\n  /** [top,right,bottom,left] */\n  | [CSSLength, CSSLength, CSSLength, CSSLength]\n")),Object(i.b)("p",null,"e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"5")," (means ",Object(i.b)("inlineCode",{parentName:"p"},"5px")," top,right,left,bottom), ",Object(i.b)("inlineCode",{parentName:"p"},"['5rem','10px']")," (means ",Object(i.b)("inlineCode",{parentName:"p"},"5rem")," top & bottom, ",Object(i.b)("inlineCode",{parentName:"p"},"10px")," left & right), ",Object(i.b)("inlineCode",{parentName:"p"},"[10,5,'10rem', 15]")," (means ",Object(i.b)("inlineCode",{parentName:"p"},"10px")," top, ",Object(i.b)("inlineCode",{parentName:"p"},"5px")," right, ",Object(i.b)("inlineCode",{parentName:"p"},"10rem")," bottom, ",Object(i.b)("inlineCode",{parentName:"p"},"15px")," left)."),Object(i.b)("h1",{id:"common-props"},"Common Props"),Object(i.b)("p",null,"We have a common set of props that are supported by a number of components. These will be mentioned in the docs for the individual components as well. We present them below with a reference component."),Object(i.b)("h2",{id:"spacingprop"},"SpacingProp"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface SpacingProp {\n  /** Spacing between each child */\n  spacing?: CSSLength,\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spacing?: CSSLength")," Controls spacing between children (",Object(i.b)("a",Object.assign({parentName:"li"},{href:"../principle-spacing/"}),"concepts covered in spacing principle"),"). e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"spacing={10}")," gives us:")),Object(i.b)(a.c,{__position:1,__code:"<Vertical spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'darkorange' }}>Again</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:p.i,demos:r},mdxType:"Playground"},Object(i.b)(p.i,{spacing:10,mdxType:"Vertical"},Object(i.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(i.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(i.b)("div",{style:{backgroundColor:"darkorange"}},"Again"))),Object(i.b)("h2",{id:"sizeprops"},"SizeProps"),Object(i.b)("p",null,"The explicit size props (",Object(i.b)("inlineCode",{parentName:"p"},"height,minHeight,maxHeight,width,minWidth,maxWidth"),") allow for explicit size control as covered in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle")," section."),Object(i.b)("h2",{id:"sizingprop"},"SizingProp"),Object(i.b)("p",null,"The implicit ",Object(i.b)("inlineCode",{parentName:"p"},"sizing")," prop is covered in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle")," section."),Object(i.b)("h2",{id:"paddingprop"},"PaddingProp"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Add support for padding\n */\nexport interface PaddingProp {\n  padding?: CSSBox,\n}\n")),Object(i.b)("p",null,"Allows you to specifiy padding as a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"#cssbox"}),"CSSBox"),". Using padding effectively is covered in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," section."),Object(i.b)("h2",{id:"scrollprop"},"ScrollProp"),Object(i.b)("p",null,"Contains ",Object(i.b)("inlineCode",{parentName:"p"},"scroll?")," member. Type definition and effective use is coverd in the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"../principle-scrolling/"}),"scrolling principle")," section."),Object(i.b)("h2",{id:"stylesprop"},"StylesProp"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Support for mixing in TypeStyle NestedCSSProperties (style function arguments) \n */\nexport interface StylesProp {\n  styles?: (types.NestedCSSProperties | null | false)[];\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"styles")," props is an array that gets passed as arguments to the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://typestyle.github.io/#/core/style"}),Object(i.b)("inlineCode",{parentName:"a"},"typestyle.style")," function"),"."),Object(i.b)("p",null,"E.g you can customize the hover color: "),Object(i.b)(a.c,{__position:2,__code:"<Vertical\n  height={100}\n  styles={[\n    {\n      transition: '.3s',\n      backgroundColor: 'limegreen',\n      $nest: {\n        '&:hover': { backgroundColor: 'gold' },\n      },\n    },\n  ]}\n/>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:p.i,demos:r},mdxType:"Playground"},Object(i.b)(p.i,{height:100,styles:[{transition:".3s",backgroundColor:"limegreen",$nest:{"&:hover":{backgroundColor:"gold"}}}],mdxType:"Vertical"})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Any falsy array members will be safely ignored just like the ",Object(i.b)("inlineCode",{parentName:"p"},"typestyle.style")," function.")),Object(i.b)("h2",{id:"styleprop"},"StyleProp"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Support for React `style` property\n */\nexport interface StyleProp {\n  style?: React.CSSProperties\n}\n")),Object(i.b)("p",null,"Any custom react ",Object(i.b)("inlineCode",{parentName:"p"},"style")," you want to pass in. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that React ",Object(i.b)("inlineCode",{parentName:"p"},"style")," doesn't support things not supported by the html style attribute (e.g. media queries or pseudo elements). For that you can use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"#stylesprop"}),"StylesProp"),".")),Object(i.b)("h2",{id:"classnameprop"},"ClassNameProp"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Support for React `className` property \n */\nexport interface ClassNameProp { \n  className?: string\n}\n")),Object(i.b)("p",null,"Allows you to add your own CSS classnames to the element."),Object(i.b)("h2",{id:"tagprops"},"TagProps"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/** \n * Props supported by the underlying tag \n */\nexport interface TagProps {\n  tag?: {\n    name?: 'div' /** default */ | 'a' | 'button' // etc.\n    props?: React.HTMLProps // props passed to the tag\n  }\n}\n")),Object(i.b)("p",null,"Gives you direct access to the underlying react tag for any customization you might want e.g. generate a ",Object(i.b)("inlineCode",{parentName:"p"},"Vertical")," as a ",Object(i.b)("inlineCode",{parentName:"p"},"section")," tag (instead of the default ",Object(i.b)("inlineCode",{parentName:"p"},"div")," tag) with an ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," handler:"),Object(i.b)(a.c,{__position:3,__code:"<Vertical\n  tag={{\n    name: 'section',\n    props: { onClick: () => alert('Nice you meet you \u2764\ufe0f') },\n  }}\n  height={100}\n  style={{ backgroundColor: 'limegreen' }}\n/>",__scope:{props:this?this.props:n,Playground:a.c,Vertical:p.i,demos:r},mdxType:"Playground"},Object(i.b)(p.i,{tag:{name:"section",props:{onClick:function(){return alert("Nice you meet you \u2764\ufe0f")}}},height:100,style:{backgroundColor:"limegreen"},mdxType:"Vertical"})),Object(i.b)("h2",{id:"baseprops"},"BaseProps"),Object(i.b)("p",null,"A consistent set of customization options. Collects the following props into a common type: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ScrollProp"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"#scrollprop"}),"Specify scrolling behaviours"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PaddingProp"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"#paddingprop"}),"Specifies padding"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SizeProps"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"#sizeprops"}),"Sepecify explicit size control"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StylesProp"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"#stylesprop"}),"Allows you to use TypeStyle CSS mixins"),". "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StyleProp"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"#styleprop"}),"Allows you to specify React.CSSProperties"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClassNameProp"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"#classnameprop"}),"Allows you to pass in CSS class names"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TagProps"),": ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"#tagprops"}),"Allows tag control"),".")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/common/commonTypes.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-common-common-types.c5f68c641e057339ed80.js.map