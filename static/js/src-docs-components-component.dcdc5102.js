(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/docs/components/component.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),p=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),i=n("./src/demos/index.tsx"),s={},l="wrapper";function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.Star,null),Object(a.b)("h1",{id:"component"},"Component"),Object(a.b)("p",null,"GLS can easily work with components without any special requirements, so you can bring your own or add explicit support for ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps"),". We cover these below."),Object(a.b)("h2",{id:"bring-your-own"},"Bring your own"),Object(a.b)("p",null,"For example, here is a simple ",Object(a.b)("inlineCode",{parentName:"p"},"<input/>")," without any gls use: "),Object(a.b)(p.c,{__position:1,__code:'<input placeholder="Example" />',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)("input",{placeholder:"Example"})),Object(a.b)("p",null,"You can easily place these (raw ",Object(a.b)("inlineCode",{parentName:"p"},"input"),"s) in a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../vertical/"}),"vertical")," and you can see that they get nicely vertically-spaced, and ",Object(a.b)("inlineCode",{parentName:"p"},"stretch")," nicely (thanks to ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical"),"'s default ",Object(a.b)("inlineCode",{parentName:"p"},"horizontalAlign"),"):"),Object(a.b)(p.c,{__position:2,__code:'<Vertical>\n  <input placeholder="Example" />\n  <input placeholder="Example" />\n  <input placeholder="Example" />\n</Vertical>',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)(r.j,{mdxType:"Vertical"},Object(a.b)("input",{placeholder:"Example"}),Object(a.b)("input",{placeholder:"Example"}),Object(a.b)("input",{placeholder:"Example"}))),Object(a.b)("p",null,"You can even have a ",Object(a.b)("em",{parentName:"p"},"single")," input in a ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," and it essentially stretches (horizontally) to match the parent: "),Object(a.b)(p.c,{__position:3,__code:'<Vertical>\n  <input placeholder="Example" />\n</Vertical>',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)(r.j,{mdxType:"Vertical"},Object(a.b)("input",{placeholder:"Example"}))),Object(a.b)("p",null,"This allows you to create a reusable (",Object(a.b)("inlineCode",{parentName:"p"},"Vertical>input"),") pair that you can provide various ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"BaseProps")," for (using the ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical>input")," pair)."),Object(a.b)("p",null,"And you can control various props using either of the ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical"),"/",Object(a.b)("inlineCode",{parentName:"p"},"input")," e.g. you can ",Object(a.b)("inlineCode",{parentName:"p"},"stretch")," on the Vertical (as explained in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../princile-sizing/"}),"sizing principle"),") allowing two streching ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical>input"),"s in a Horziontal: "),Object(a.b)(p.c,{__position:4,__code:'<Horizontal>\n  <Vertical sizing="stretch">\n    <input placeholder="Example" />\n  </Vertical>\n  <Vertical sizing="stretch">\n    <input placeholder="Example" />\n  </Vertical>\n</Horizontal>',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)(r.e,{mdxType:"Horizontal"},Object(a.b)(r.j,{sizing:"stretch",mdxType:"Vertical"},Object(a.b)("input",{placeholder:"Example"})),Object(a.b)(r.j,{sizing:"stretch",mdxType:"Vertical"},Object(a.b)("input",{placeholder:"Example"})))),Object(a.b)("p",null,"You can props to the ",Object(a.b)("inlineCode",{parentName:"p"},"input")," as well e.g. an explicit height can be set: "),Object(a.b)(p.c,{__position:5,__code:'<Vertical sizing="stretch">\n  <input placeholder="Example" style={{ height: \'30px\' }} />\n</Vertical>',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)(r.j,{sizing:"stretch",mdxType:"Vertical"},Object(a.b)("input",{placeholder:"Example",style:{height:"30px"}}))),Object(a.b)("p",null,"Of course you can create a component out of the ",Object(a.b)("inlineCode",{parentName:"p"},"Vertical>input")," pair. However if you want to compose a component that supports various gls props in a single tag, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"gls.ComponentProps")," / ",Object(a.b)("inlineCode",{parentName:"p"},"gls.component")," which we cover next. "),Object(a.b)("h2",{id:"componentprops"},"ComponentProps"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps")," is a grouping of a set of common props that allow you to hook into the layout principles provided by gls:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ClassNameProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Allows you to pass in CSS class names"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ScrollProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specify scrolling behaviours"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PaddingProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specifies padding"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SizingProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specify implicit size control"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SizeProps"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Specify explicit size control"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"StylesProp"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../common-types/"}),"Allows you to use TypeStyle CSS mixins"),". ")),Object(a.b)("h2",{id:"component-1"},"component"),Object(a.b)("p",null,"There is ",Object(a.b)("inlineCode",{parentName:"p"},"gls.component(props) => props")," function which is a simple map:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"OtherProps + ComponentProps (subset or fullset) + { className? }\n  => OtherProps + { className (including existing className if present) }\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"gls.component")," function that takes any set (subset or fullset) of ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps")," and returns props with any ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps")," omitted + processsed and placed into the ",Object(a.b)("inlineCode",{parentName:"p"},"className")," prop (taking into account any existing ",Object(a.b)("inlineCode",{parentName:"p"},"className")," as well). You then use the ",Object(a.b)("inlineCode",{parentName:"p"},"className")," in your component."),Object(a.b)("p",null,"We look at examples below."),Object(a.b)("h2",{id:"creating-a-component"},"Creating a component"),Object(a.b)("p",null,"You can use any partial set of ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps")," in your component e.g here we just use the ",Object(a.b)("inlineCode",{parentName:"p"},"SizeProps"),": "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface OnlySomeProps extends\n  React.ButtonHTMLAttributes<HTMLButtonElement>,\n  gls.SizeProps {\n}\n\nexport const OnlySomePropsButton: React.FC<OnlySomeProps> = (props) => {\n  const processedProps = gls.component(props);\n\n  return <button {...processedProps} />;\n}\n")),Object(a.b)("p",null,"or you can use all the ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps"),": "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface AllTheProps extends\n  React.ButtonHTMLAttributes<HTMLButtonElement>,\n  gls.ComponentProps {\n}\nexport const AllThePropsButton: React.FC<AllTheProps> = (props) => {\n  const processedProps = gls.component(props);\n\n  return <button {...processedProps} />;\n}\n")),Object(a.b)("p",null,"Any props that are not a part of ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps")," are yours to handle and returned as is from ",Object(a.b)("inlineCode",{parentName:"p"},"gls.component")," e.g. below you can see the ",Object(a.b)("inlineCode",{parentName:"p"},"error")," prop passing-through the ",Object(a.b)("inlineCode",{parentName:"p"},"component")," function without any processing: "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface LimitedButtonProps extends\n  gls.ComponentProps {\n  /** Turns red if in error state */\n  error?: boolean\n}\nexport const LimitedButton: React.FC<LimitedButtonProps> = (props) => {\n  /** \n   * Generates a className from component props \n   * + returns the rest\n   **/\n  const {className, error} = gls.component(props);\n  \n  /** Handle the error */\n  const errorStyle = error ? { backgroundColor: 'red' } : {};\n  \n  return <button className={className} style={errorStyle} />;\n}\n")),Object(a.b)("h2",{id:"defaults"},"defaults"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"component")," function takes a second ",Object(a.b)("inlineCode",{parentName:"p"},"defaults: ComponentProps")," argument."),Object(a.b)("p",null,"You can use it to provide defaults for any ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentProps")," e.g.\nit is good practice to have an ",Object(a.b)("inlineCode",{parentName:"p"},"input")," with default ",Object(a.b)("inlineCode",{parentName:"p"},"sizing:'stretch'"),"(",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../guidance-components/"}),"later we also cover best layout practices for components"),"): "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface DefaultInputProps extends\n  React.InputHTMLAttributes<HTMLInputElement>,\n  gls.ComponentProps {\n}\n\nexport const DefaultInput: React.FC<DefaultInputProps> = (props) => {\n  const { className, ...otherProps } =\n    gls.component(props, { sizing: 'stretch' });\n\n  return <input className={className} {...otherProps} />\n};\n")),Object(a.b)("p",null,"Such an input behaves nicely in common vertical, horizontal and responsive layouts: "),Object(a.b)(p.c,{__position:6,__code:'<Vertical>\n  <demos.DefaultInput placeholder="Example" />\n  <demos.DefaultInput placeholder="Example" />\n</Vertical>',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)(r.j,{mdxType:"Vertical"},Object(a.b)(i.DefaultInput,{placeholder:"Example"}),Object(a.b)(i.DefaultInput,{placeholder:"Example"}))),Object(a.b)(p.c,{__position:7,__code:'<Horizontal>\n  <demos.DefaultInput placeholder="Example" />\n  <demos.DefaultInput placeholder="Example" />\n</Horizontal>',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)(r.e,{mdxType:"Horizontal"},Object(a.b)(i.DefaultInput,{placeholder:"Example"}),Object(a.b)(i.DefaultInput,{placeholder:"Example"}))),Object(a.b)(p.c,{__position:8,__code:'<Responsive breakpoint={650}>\n  <demos.DefaultInput placeholder="Example" />\n  <demos.DefaultInput placeholder="Example" />\n</Responsive>',__scope:{props:this?this.props:n,Playground:p.c,Vertical:r.j,Horizontal:r.e,Responsive:r.g,demos:i},mdxType:"Playground"},Object(a.b)(r.g,{breakpoint:650,mdxType:"Responsive"},Object(a.b)(i.DefaultInput,{placeholder:"Example"}),Object(a.b)(i.DefaultInput,{placeholder:"Example"}))),Object(a.b)("h2",{id:"using-third-party-libraries"},"Using third party libraries"),Object(a.b)("p",null,"Since the ",Object(a.b)("inlineCode",{parentName:"p"},"component")," function just returns a ",Object(a.b)("inlineCode",{parentName:"p"},"className")," you can easily use its features with any third party components that support the className prop e.g. material-ui"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"// Use `gls.component`\nconst className = gls.component({width: '100%'});\n\n// With any library\nimport Button from '@material-ui/core/Button';\n\n<Button className={className} variant=\"contained\" color=\"primary\">\n  Hello World\n</Button>\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/component.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-component.f436a83ab6ec4d98f804.js.map