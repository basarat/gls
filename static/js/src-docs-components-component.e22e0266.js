(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/docs/components/component.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),p=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=t("./node_modules/docz/dist/index.esm.js"),i=t("./src/index.tsx"),l=t("./src/demos/index.tsx"),r={},s="wrapper";function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)(s,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)(l.Star,null),Object(p.b)("h1",{id:"component"},"Component"),Object(p.b)("p",null,"GLS can easily work with components without any special requirements, so you can bring your own or add explicit support for ",Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps"),". We cover these below."),Object(p.b)("h2",{id:"bring-your-own"},"Bring your own"),Object(p.b)("p",null,"For example, here is a simple ",Object(p.b)("inlineCode",{parentName:"p"},"<input/>")," without any gls use: "),Object(p.b)(a.c,{__position:1,__code:'<input placeholder="Example" />',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)("input",{placeholder:"Example"})),Object(p.b)("p",null,"You can easily place these (raw ",Object(p.b)("inlineCode",{parentName:"p"},"input"),"s) in a ",Object(p.b)("a",Object.assign({parentName:"p"},{href:"../vertical/"}),"vertical")," and you can see that they get nicely vertically-spaced, and ",Object(p.b)("inlineCode",{parentName:"p"},"stretch")," nicely (thanks to ",Object(p.b)("inlineCode",{parentName:"p"},"Vertical"),"'s default ",Object(p.b)("inlineCode",{parentName:"p"},"horizontalAlignment"),"):"),Object(p.b)(a.c,{__position:2,__code:'<Vertical>\n  <input placeholder="Example" />\n  <input placeholder="Example" />\n  <input placeholder="Example" />\n</Vertical>',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)(i.i,{mdxType:"Vertical"},Object(p.b)("input",{placeholder:"Example"}),Object(p.b)("input",{placeholder:"Example"}),Object(p.b)("input",{placeholder:"Example"}))),Object(p.b)("p",null,"You can even have a ",Object(p.b)("em",{parentName:"p"},"single")," input in a ",Object(p.b)("inlineCode",{parentName:"p"},"Vertical")," and it essentially stretches (horizontally) to match the parent: "),Object(p.b)(a.c,{__position:3,__code:'<Vertical>\n  <input placeholder="Example" />\n</Vertical>',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)(i.i,{mdxType:"Vertical"},Object(p.b)("input",{placeholder:"Example"}))),Object(p.b)("p",null,"This allows you to create a reusable (",Object(p.b)("inlineCode",{parentName:"p"},"Vertical>input"),") pair that you can provide various ",Object(p.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"BaseProps")," for (using the ",Object(p.b)("inlineCode",{parentName:"p"},"Vertical")," in the ",Object(p.b)("inlineCode",{parentName:"p"},"Vertical>input")," pair)."),Object(p.b)("p",null,"And you can control various props using either of the ",Object(p.b)("inlineCode",{parentName:"p"},"Vertical"),"/",Object(p.b)("inlineCode",{parentName:"p"},"input")," e.g. you can ",Object(p.b)("inlineCode",{parentName:"p"},"flex")," on the Vertical (as explained in the ",Object(p.b)("a",Object.assign({parentName:"p"},{href:"../princile-sizing/"}),"sizing principle"),") allowing two flexing ",Object(p.b)("inlineCode",{parentName:"p"},"Vertical>input"),"s in a Horziontal: "),Object(p.b)(a.c,{__position:4,__code:'<Horizontal>\n  <Vertical sizing="flex">\n    <input placeholder="Example" />\n  </Vertical>\n  <Vertical sizing="flex">\n    <input placeholder="Example" />\n  </Vertical>\n</Horizontal>',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)(i.f,{mdxType:"Horizontal"},Object(p.b)(i.i,{sizing:"flex",mdxType:"Vertical"},Object(p.b)("input",{placeholder:"Example"})),Object(p.b)(i.i,{sizing:"flex",mdxType:"Vertical"},Object(p.b)("input",{placeholder:"Example"})))),Object(p.b)("p",null,"You can props to the ",Object(p.b)("inlineCode",{parentName:"p"},"input")," as well e.g. an explicit height can be set: "),Object(p.b)(a.c,{__position:5,__code:'<Vertical sizing="flex">\n  <input placeholder="Example" style={{ height: \'30px\' }} />\n</Vertical>',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)(i.i,{sizing:"flex",mdxType:"Vertical"},Object(p.b)("input",{placeholder:"Example",style:{height:"30px"}}))),Object(p.b)("p",null,"Of course you can create a component out of the ",Object(p.b)("inlineCode",{parentName:"p"},"Vertical>input")," pair. However if you want to compose a component that supports various gls props in a single tag, you can use ",Object(p.b)("inlineCode",{parentName:"p"},"gls.ComponentProps")," / ",Object(p.b)("inlineCode",{parentName:"p"},"gls.component")," which we cover next. "),Object(p.b)("h2",{id:"componentprops"},"ComponentProps"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps")," is a grouping of a set of common props that allow you to hook into the layout principles provided by gls:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"ClassNameProp"),": ",Object(p.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Allows you to pass in CSS class names"),"."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"ScrollProp"),": ",Object(p.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specify scrolling behaviours"),"."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"PaddingProp"),": ",Object(p.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specifies padding"),"."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"SizingProp"),": ",Object(p.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specify implicit size control"),"."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"SizeProps"),": ",Object(p.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specify explicit size control"),"."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"StylesProp"),": ",Object(p.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Allows you to use TypeStyle CSS mixins"),". ")),Object(p.b)("h2",{id:"component-1"},"component"),Object(p.b)("p",null,"There is ",Object(p.b)("inlineCode",{parentName:"p"},"gls.component(props) => props")," function which is a simple map:"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{}),"OtherProps + ComponentProps (subset or fullset) + { className? }\n  => OtherProps + { className (including existing className if present) }\n")),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"gls.component")," function that takes any set (subset or fullset) of ",Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps")," and returns props with any ",Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps")," omitted + processsed and placed into the ",Object(p.b)("inlineCode",{parentName:"p"},"className")," prop (taking into account any existing ",Object(p.b)("inlineCode",{parentName:"p"},"className")," as well). You then use the ",Object(p.b)("inlineCode",{parentName:"p"},"className")," in your component."),Object(p.b)("p",null,"We look at examples below."),Object(p.b)("h2",{id:"creating-a-component"},"Creating a component"),Object(p.b)("p",null,"You can use any partial set of ",Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps")," in your component e.g here we just use the ",Object(p.b)("inlineCode",{parentName:"p"},"SizeProps"),": "),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface OnlySomeProps extends\n  React.ButtonHTMLAttributes<HTMLButtonElement>,\n  gls.SizeProps {\n}\n\nexport const OnlySomePropsButton: React.FC<OnlySomeProps> = (props) => {\n  const processedProps = gls.component(props);\n\n  return <button {...processedProps} />;\n}\n")),Object(p.b)("p",null,"or you can use all the ",Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps"),": "),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface AllTheProps extends\n  React.ButtonHTMLAttributes<HTMLButtonElement>,\n  gls.ComponentProps {\n}\nexport const AllThePropsButton: React.FC<AllTheProps> = (props) => {\n  const processedProps = gls.component(props);\n\n  return <button {...processedProps} />;\n}\n")),Object(p.b)("p",null,"Any props that are not a part of ",Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps")," are yours to handle and returned as is from ",Object(p.b)("inlineCode",{parentName:"p"},"gls.component")," e.g. below you can see the ",Object(p.b)("inlineCode",{parentName:"p"},"error")," prop passing-through the ",Object(p.b)("inlineCode",{parentName:"p"},"component")," function without any processing: "),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface LimitedButtonProps extends\n  gls.ComponentProps {\n  /** Turns red if in error state */\n  error?: boolean\n}\nexport const LimitedButton: React.FC<LimitedButtonProps> = (props) => {\n  /** \n   * Generates a className from component props \n   * + returns the rest\n   **/\n  const {className, error} = gls.component(props);\n  \n  /** Handle the error */\n  const errorStyle = error ? { backgroundColor: 'red' } : {};\n  \n  return <button className={className} style={errorStyle} />;\n}\n")),Object(p.b)("h2",{id:"defaults"},"defaults"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"component")," function takes a second ",Object(p.b)("inlineCode",{parentName:"p"},"defaults: ComponentProps")," argument."),Object(p.b)("p",null,"You can use it to provide defaults for any ",Object(p.b)("inlineCode",{parentName:"p"},"ComponentProps")," e.g.\nit is good practice to have an ",Object(p.b)("inlineCode",{parentName:"p"},"input")," with default ",Object(p.b)("inlineCode",{parentName:"p"},"sizing:'flex'"),"(",Object(p.b)("a",Object.assign({parentName:"p"},{href:"../guidance-components/"}),"later we also cover best layout practices for components"),"): "),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface DefaultInputProps extends\n  React.InputHTMLAttributes<HTMLInputElement>,\n  gls.ComponentProps {\n}\n\nexport const DefaultInput: React.FC<DefaultInputProps> = (props) => {\n  const { className, ...otherProps } =\n    gls.component(props, { sizing: 'flex' });\n\n  return <input className={className} {...otherProps} />\n};\n")),Object(p.b)("p",null,"Such a button behaves nicely in common vertical / horizontal and responsive layouts: "),Object(p.b)(a.c,{__position:6,__code:'<Vertical>\n  <demos.DefaultInput placeholder="Example" />\n  <demos.DefaultInput placeholder="Example" />\n</Vertical>',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)(i.i,{mdxType:"Vertical"},Object(p.b)(l.DefaultInput,{placeholder:"Example"}),Object(p.b)(l.DefaultInput,{placeholder:"Example"}))),Object(p.b)(a.c,{__position:7,__code:'<Horizontal>\n  <demos.DefaultInput placeholder="Example" />\n  <demos.DefaultInput placeholder="Example" />\n</Horizontal>',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)(i.f,{mdxType:"Horizontal"},Object(p.b)(l.DefaultInput,{placeholder:"Example"}),Object(p.b)(l.DefaultInput,{placeholder:"Example"}))),Object(p.b)(a.c,{__position:8,__code:'<Responsive breakpoint={650}>\n  <demos.DefaultInput placeholder="Example" />\n  <demos.DefaultInput placeholder="Example" />\n</Responsive>',__scope:{props:this?this.props:t,Playground:a.c,Vertical:i.i,Horizontal:i.f,Responsive:i.h,demos:l},mdxType:"Playground"},Object(p.b)(i.h,{breakpoint:650,mdxType:"Responsive"},Object(p.b)(l.DefaultInput,{placeholder:"Example"}),Object(p.b)(l.DefaultInput,{placeholder:"Example"}))))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/component.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-component.ae07f6a120723e16eb51.js.map