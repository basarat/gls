(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/base/base.mdx":function(e,A,t){"use strict";t.r(A),t.d(A,"default",function(){return s});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o=(t("./node_modules/docz/dist/index.esm.js"),t("./src/demos/index.tsx")),a={},i="wrapper";function s(e){var A=e.components,s=Object(n.a)(e,["components"]);return Object(r.b)(i,Object.assign({},a,s,{components:A,mdxType:"MDXLayout"}),Object(r.b)(o.Star,null),Object(r.b)("h1",{id:"base"},"Base"),Object(r.b)("p",null,"We provide a neat ",Object(r.b)("inlineCode",{parentName:"p"},"base(rootSelector?:string)")," utility function to remove any browser specific idiosyncrasies. "),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * Setups:\n * - normalize\n * - border box\n * - fill body into page\n * - fill root-selector into body\n */\nfunction base(rootSelector?: string): void;\n")),Object(r.b)("p",null,"Example use: "),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { base } from 'gls';\nbase('#root');\n")),Object(r.b)("p",null,"We describe its features next:"),Object(r.b)("h2",{id:"normalize"},"Normalize"),Object(r.b)("p",null,"Unifies the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://html.spec.whatwg.org/multipage/rendering.html#the-css-user-agent-style-sheet-and-presentational-hints"}),"user agent style sheets")," (the browser default styles), so that they are consistent. This allows you to test your code in one browser and be fairly confident that it will look the same in the other browsers \ud83d\udc9c"),Object(r.b)("h2",{id:"border-box"},"Border Box"),Object(r.b)("p",null,"Browsers can be confused about whether or not the border is ",Object(r.b)("em",{parentName:"p"},"a part of the width"),". We remove this confusion to provide a simple (and intutive) meaning of width (",Object(r.b)("inlineCode",{parentName:"p"},"= content+padding+border"),") across all browsers \ud83d\udc9a"),Object(r.b)("p",null,Object(r.b)("img",{alt:"borderbox",src:t("./src/docs/images/borderbox.png")})),Object(r.b)("h2",{id:"fill-body-in-to-page"},"Fill body in to page"),Object(r.b)("p",null,"By default browsers come with a nasty ",Object(r.b)("inlineCode",{parentName:"p"},"margin")," around the ",Object(r.b)("inlineCode",{parentName:"p"},"body")," element. This means there is an aweful unmanaged background around your markup. You can remove this of course, and that is what we do. We also make the body ",Object(r.b)("inlineCode",{parentName:"p"},"100%")," of the page so you get complete control of what is on screen \ud83d\udc99"),Object(r.b)("h2",{id:"fill-root-selector-into-body"},"Fill root-selector into body"),Object(r.b)("p",null,"We take a root selector and set it up to fill the entire ",Object(r.b)("inlineCode",{parentName:"p"},"body"),", so your root element design is a true representation of the full page design \u2764\ufe0f"),Object(r.b)("p",null,"It is common to have a ",Object(r.b)("inlineCode",{parentName:"p"},"root")," element in the ",Object(r.b)("em",{parentName:"p"},"index.html")," of React applications e.g."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<html>\n<body>\n  <div id="root"></div>\n  <script src="./build/bundle.js"><\/script>\n</body>\n</html>\n')),Object(r.b)("p",null,"You can set this root element to fill the body by passing it into the ",Object(r.b)("inlineCode",{parentName:"p"},"base")," function. e.g.: "),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { base } from 'gls';\nbase('#root');\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/base/base.mdx"}}),s.isMDXComponent=!0},"./src/docs/images/borderbox.png":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAD7CAYAAADKDUnYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABDXSURBVHhe7d0LdFXVncfxP526RgpBWmwlEHCAJuElGh5VplURBAR5v0GZWSqiAu1IUAaX4wvHKXV4uAZEXsp0sAqCCgFEQF6iAy1KOsg7giVBgrZUHkG6lk6Z+9/Z5+Yk3kBU7vy5934/a5119v+ce3Zcy/Bb++x9cm61sxECAAa+4/cA8P+OAAJghgACYIYAAmCGAAJghgACYIYAgpOd3VSmPjPdV+La3bv38JXIO/+9VapVqyY7Ptglb7y5xrVV0NZt6NDb3HkVfD68aX/hawOxjiE1EEBwWrduI8VHPvaVyL69e2TVqpVy/MQJVx8+XHqu1VUt5OTJU66tgvbLi5ZIrcsuk4ED+rsQatmimTv2xMSnoufH/OIX5a4NxDqG1EAAwWnWvIUcLirylcjGDevdvrDwsNsfOXJEunW71bVjGTKov8yeNVM63NRRnn32WakdCSM9lpWdHT3f/ZYurg0ECCA46fXqyfbt77u2jnr279/n2rv37HV7HR21aNnStc+ld58+Mmf2c9GRE3AuBBCcZs2autDR4Ni5a49kZWXLyHvucyMfpaOj9Hr1Xftcmkf6UdoHcD4J+bdgX/5unXyxfZuvUk/1eyf41oWjwfP92rVl87tbZE9k1LP+rbXS7trr3FyQ3lrpJPHKVavdbdTCV16VoYMHiP7qhNuByj6rYn0+1rFv4sysSb6Vmi5p3U6++5NOvkoMjIDg6JyNjnp0srk4MurROaGmTbPdXNAfDhW6z2TUP/8IKHC+iWUNqWDT8EFq4q/hEaXL6Drq2fbbrdK7bz93O3V1q5ZuNHNrt67y2fHjLqguxAhIV8UC+/ftk8ceffhbj4CQeBgBIUpHPTrZvHDhS5KRUd8tuasN69e7FTANn/MJRku1atVy+8roqliwBStlSD0EEKJ0JSxv2VLX1ud41JAhw9yxBg0buvp8glWz4HrgXAggRAUrYToXFIx2Mho0cMeym1YtUJYtXepWz6oyWgIIIERl1K/n9vowYSAru3RZvV5kdHQuOrfz4PgJbtJ69OjR/ihwbgQQov7uyoZu9BMe7eioSAXP96hatdJ8q6ytE8v6rNDiJa9G545U+LOqYq1iHUNqYBUMgBlGQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEEAAzBBAKSp4HWqXLrfII48+LidOnPRnxLUHDhrizjdu3ER27S57wXxwnR6/f+y4mOe0zxkzZ5fr864RI6Pngy18PFZ/SH4EUAr7l0cek443d5bfvLhAcsc94I+Ka7//3jZZvXadtGnbTnr2KPuGVHXnXXdL7gPjZfeuXe5cYVHpd4cpPad9/nz0vTLi7pH+aKnOnbvK9GdnRbdAxf4IoRSifw2P1KP/67ds/Z1r617rQ4VFbtP2kteWuXMVa21HwsO1jx8/cbZRo8Znf/mrya4On4uEV7nrIiHjtor0WMX+IsHoaiQ/RkCQ665t5/Z5y1fKtve2u3a7tq3dvmGDDDdyKSgocHXYZZfVkps6dpIC/yWGYV1u7igDBg6WzW9v8kfOT/vr1btP9LvIkPwS8n1Ai7e/Inn71/kKvbM6yYDWg3xVNTrvEhn5uPDZ+ttt0v66n7hbrv37C9ztU/jXQudp1PPz5rjr9PZpzKh73LFznZv09BSZM2umHDx4oNznwvR4Tus20Wt0PkoDqOLnzmVJ5PdhWYr/PiwYMtu3EktCBtD0TdPloZ15vsKklr1lzI1jfFU1Ghbzf/2ipKWlyeznZspltWvL4lcWusnjTRs3uHYgHArhkNFJ5pycHBl57yiZMH7cVwJI+wrCTIPm5MmTMm7cOHcuLa2mtGjerFwAucnvgYPk2uuukycnPu4+VxUzNs2QCTuX+So1lYxe61uJhVuwFHbHP94uA/r1lg8/LIgGg6r4lTpX1E33rVKfHC2WNW+tj04yDxs62O3PZ8niRW6kpdvUqdP80fL9rV27WoYMqVp/SHwEUArTW7Cdu3a7eZdhQ4dEV7N0pBKmARH2r08+IV07d3KBsnzFCjdPVBW62qWjId3Ct1jh/vS/SUdGSA0EUIrTf+xPPP6YfPTRQTcJrTQIwipOCutt1pLXSm95Tp0qcftYSkpKpFGjxr6qXLi/k6fO/ZXOSC4EENzqk65YqfT00tut8LM9RYWFkplV/ttLb+7YwYXLypWloRWLPkuko6uq6N+3l1ttW7SwbO4JyS+pJqGH179Wbmx8s69SR/MfNZBWdZv4qmp0wjhYBdMH/1q2aO4mpTvedKNc2bCBG5FoKGgQhevwRLOucj30zw/IocIidxsWPqdzOu62yl9XlVWwYNI66K+qdhw9ILs/LfJVchux+SnfKi9RJ6GTKoBys3rIwDalv+ip5Irq35UfVb/EV1WjYaFPQteomeaWylV+fr4bDWkobFi/TmbNmStz58yRE8ePy5o1b7rPhEMmCKeg1nM6z6OjJe1Tn6IOVtO0Tx1J9erT19VKrwkHUNDfL3812a2qVdWnZ76QT8586avk1v7lXr5VHqtgSDg6+au3SbfdPjwaPmrqlMkuPHQEo+Ez7ZmyFaswHaVo4OQtfd0fEXnh+bmuT/3Tinlzy492dIVLRzjBVpH290/350YDEcmPEVAS+CYjoGTCCIgREAB8bQQQADMEEAAzBBAAM0xCJ4FLvlPNbanqi7+edVsqYBIaFx39x/f5l39N2S1VwicZEUAAzBBAAMwQQADMEEAAzBBAKSZ/80ZpVed7bnvwtgGy5pWX/JlSWuu5woKyF82f75rg3ID2OTL3qcflT8Vlr/IIrg23w+e11uOBMyWn5KX/mOL60nPaRvIigFLMaf/Cr5kLFslPO3WWB+4bIUtfKHuh+aGC/W5f6Pcq1jUaNGETHntS7n9kouzfvVPu7dczGjLBtSpov7Oq/DuEwp+ZFen3tZdflJFjH3Q/73s1a/ozSEYEUIr6Wfee0ufOe2Tyc/Pk0QfHupGH0gBRhR+WBVAguGbxW2/L9KlPy7789/wZkYY/znLnJ86eL40aN5HXX5jnz3zVu+tiP7OiI6H5c56Tqf+1ULoMGhb9eUheBFCKuz7yj1zpLZeG0Oo335A7Rt4nB/ZW/u2k2TltZeDgYfL2Gyv8kTLVa6ZJ5979XEAFoVaR/ozwLV7gvbc3up/dMLP82xeRvAigFKeBof5YXBwNhXbXd5DFi8rP81R0Vdt20dFSRU1z2rj9H4tjf8Gghsz20LxPQPtrlJnlK6QCAijFBaOUH6anu/kfHdk0zclxx2KNUgKX163nRjKxBCOYYxW+TSPQIhJQsW7DtD/tF6mDAEpxm99Y7vYaGhpAdetnyOXpGZKVlS178993576p8ORyWOvrb6j0NkzpBLaugAUbkhcBlKLeiQSPLnHripZOROutmN4CXelvgX7aoWN0ReybqpFWentXkQZcZbdhSs/rCpiurCG5EUApatTwwW6iWf+h64pTMAH9eWSv4aSOflz2vE5Ffzp6RLre0t1X5QVL8HUqfKNqWKzbMO1P+1W6AqYra0huBFCK2nHsc3lk5jz3D10Ft1u6JK/hpMvhOhFd2UrWB+9tk6zmLX1V3t78fLf/YXrl8znBbViY9vfRtxx1IbEQQHAOFexzIxANJt1WbC0NkVjzNPr8j4bTDd17+CNlNLCW/ebX8vPc8dEVtliC27Cwtjd0cMF3rslvJBcCCI6OPMIjmmAlKzwPpLdm+tT0w6PudgGjzwMF9MFFPT95/Fj56OAB6XvnCH+mcrrcH5YTqTWUcv9hiPtzj1gPQyK5EEApprKJ4Xc3ro9OQAc0DDSAgmv01kznbfTPJO5+uPyfYkx64hF55slH3SrarNeWuxGOCv+8ij+7TWTEo8LH743022/o7TJn2r+7PjXokLx4JSuQQHglKwBcIAQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEEAAzPAkdZ8eOHpEta1f7qrz2nbtKnSq+AXDFgvm+dX70W+pC9Jt99TWS2ar0DZEXA56Extfy508/kQ0r8yTtkr/5ytY47W/lqh9Ur9IW6/rKNvot3b5tvx9+8HvZ9z+/9/8nEQ+MgOKsYEe+rHzxP+X5eXP8ESSKGTNny6kv/ld6DL/DH7HHCAgALhACCIAZAgiAGQIIgBkCKM50CZcJ6MQ0ZtQ9F9UEdDIigACYIYAAmCGAAJghgACYIYAAmCGAAJghgACYIYAAmCGAAJghgOLsL6dLZNfuPb5CIiksOuxeKIf4IYDirOhAgUydOs1XSCR5y1dW+jZLXBgEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEUJxVr1FTMrOyfYVEkp6eLnWuqOsrxAMBFGcZTTJlwvhxvkIi6d+3l7Tv0s1XiAcCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCKM4OHyiQSU9P8RUSyauv58mWNat8hXgggOLszOkSKdi/z1dIJMXFxXLsk6O+QjwQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQHHWoEmm5OaO9RUSSa+et0r7zl19hXgggOLs0ho1pUXzZr5CImnYIEPq1K3nK8QDAQTADAEEwAwBBMAMAQTADAEEwAwBBMAMAQTADAEEwAwBFGd/OV0iu3bv8RUSSWHRYTl29IivEA8EUJwVHSiQqVOn+QqJJG/5StmydrWvEA8EEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEUJxVr1FTMrOyfYVEkp6eLnWuqOsrxAMBFGcZTTJlwvhxvkIi6d+3l7Tv0s1XiAcCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCKM4OHyiQSU9P8RUSyauv58mWNat8hXgggOLszOkSKdi/z1dIJMXFxXLsk6O+QjwQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQADMEEAAzBBAAMwQQHHWoEmm5OaO9RUSSa+et0r7zl19hXgggOLs0ho1pUXzZr5CImnYIEPq1K3nK8QDAQTADAEEwAwBBMAMAQTADAEEwAwBBMAMAQTADAEEwAwBBMAMARRnBTvy5a4RI32FRDJj5mxZsWC+rxAPBBAAMwQQADMEEAAzBBAAM9XORvh2wpi+abo8tDPPV2Vys3rIwDYX14SvTkLP+reJ0qtPX3+kjL5vRl/5UBU6IVpV9Fvq2/abv/19+fFV10iP4Xf4I/bav9zLt8orGb3WtxILARRnx44ekS1rV/uqPH3ZVVXfN/N1VmPot9SF6Df76msks1WOr+wRQBeBRAog4EJKtgBiDgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgBkCCIAZAgiAGQIIgJlqZyN8O2FM3zRdHtqZ56syWZfWkobVL/cVkHze+uygb5VXMnqtbyWWpAogIFUlagBxCwbADAEEwAwBBMAMAQTATEJOQh/68x/k488O+wrA3zf5mW8lloQMIADJgVswAGYIIABmCCAAZgggAGYIIABmCCAAZgggAGYIIABmCCAAZgggAGYIIABmCCAAZgggAGYIIABmCCAAZgggAGYIIABGRP4PUIwzPbTx828AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=src-docs-base-base.5e55e8e31f6dbe6bf38a.js.map