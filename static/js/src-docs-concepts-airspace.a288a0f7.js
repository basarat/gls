(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/docs/concepts/airspace.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return r});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o={},i="wrapper";function r(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(i,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"external-airspace"},"External Airspace"),Object(l.b)("p",null,"Fundamental rule: Don't camp on external airspace.\nFundamental rule breaker: Border margins."),Object(l.b)("p",null,"Issues: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Collapses. Fundamentally hard to manage"),Object(l.b)("li",{parentName:"ul"},"Reduces reuse. Can't be placed pixel perfectly e.g. at the corner "),Object(l.b)("li",{parentName:"ul"},"Pollutes layout with logic. If a button is on the right that may or may not show, you end up needing to change the margin on the second last button. ")),Object(l.b)("p",null,"Solution:\nNo margins on components. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"show simple button "),Object(l.b)("li",{parentName:"ul"},"show simple label+input+test"),Object(l.b)("li",{parentName:"ul"},"show simple three label+input")),Object(l.b)("h1",{id:"better-way"},"Better Way"),Object(l.b)("p",null,"Realize: your external space, is your parents internal space. Any component is free to manage its internal space anyway it wants. So really whitespace management between components is the responsibility of the container (and we provide plenty of such containers)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Sub children margins using css for children. ")),Object(l.b)("p",null,"Remember how components don't come with bleedy margins, since compoenents don't use margins, our containers can easily create vertical (or horizontal) spacing between their children by adding margins with pure CSS (pseudocode: ",Object(l.b)("inlineCode",{parentName:"p"},"all children except last-child : add margin"),")."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Padding for border whitespace.")),Object(l.b)("p",null,"Continuing on the three input form, we can easily wrap it in a padding."),Object(l.b)("h1",{id:"example-with-our-components"},"Example with our components"),Object(l.b)("p",null,"Here is a nice behaving demo input component we showed previously: "),Object(l.b)("p",null,"Using our vertical layout we can stack them to create a form quite nicely:"),Object(l.b)("p",null,"And then we can even stack two forms in another vertical layout seemlessly: "))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/concepts/airspace.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-concepts-airspace.d310eeb205a2b1e66612.js.map