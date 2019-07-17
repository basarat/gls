(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/concepts/space.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o={},i="wrapper";function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(i,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"space"},"Space"),Object(l.b)("p",null,"The difference between pixel perfect and good enough mostly boils down to whitespace management. Here we discuss the ",Object(l.b)("inlineCode",{parentName:"p"},"Space")," thought pattern developed in GLS."),Object(l.b)("h2",{id:"external-airspace"},"External Airspace"),Object(l.b)("p",null,"Fundamental rule: Don't camp on external airspace.\nFundamental rule in CSS terms: Components should not have external margins."),Object(l.b)("p",null,"Issues: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Collapses. Fundamentally hard to manage"),Object(l.b)("li",{parentName:"ul"},"Reduces reuse. Can't be placed pixel perfectly e.g. at the corner "),Object(l.b)("li",{parentName:"ul"},"Pollutes layout with logic. If a button is on the right that may or may not show, you end up needing to change the margin on the second last button. ")),Object(l.b)("p",null,"Solution:\nNo margins on components. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Applies to simple components e.g. input"),Object(l.b)("li",{parentName:"ul"},"Applies to composite e.g. label+input"),Object(l.b)("li",{parentName:"ul"},"And composite of composites e.g. 3 x label+input")),Object(l.b)("h2",{id:"how-to-do-spacing-correctly"},"How to do spacing correctly"),Object(l.b)("p",null,"Realize: your external airspace, is your parents internal airspace. Any component is free to manage its internal space anyway it wants. So really whitespace management between components is the responsibility of the container (and we provide plenty of such containers)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Sub children margins using css for children. ")),Object(l.b)("p",null,"Remember how components don't come with bleedy margins, since compoenents don't use margins, our containers can easily create vertical (or horizontal) spacing between their children by adding margins with pure CSS (pseudocode: ",Object(l.b)("inlineCode",{parentName:"p"},"all children except last-child : add margin"),")."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Padding for border whitespace.")),Object(l.b)("p",null,"Continuing on the three input form, we can easily wrap it in a padding."),Object(l.b)("h2",{id:"code-example-with-gls-components"},"Code example with gls components"),Object(l.b)("p",null,"Here is a nice behaving demo input component we showed previously: "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'<DemoInput label="Name"/>')),Object(l.b)("p",null,"Using our vertical layout we can stack them to create a composite input quite nicely:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'<DemoInput label="First Name"/> middle last')),Object(l.b)("p",null,"Similarly here is a nice demo button with no bleedy margins:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Submit")),Object(l.b)("p",null,"And two of these in a nice horizontal composite component: "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Verify Submit")," "),Object(l.b)("p",null,"And then we can even stack two forms in another vertical layout seemlessly: "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'<DemoInput label="First Name"/> middle last , cancel submit')))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/concepts/space.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-concepts-space.3c132c1cda74c3e352b9.js.map