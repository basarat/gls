# Setup
```
git clone
npm install
```

# Dev
```
npm start
```

> Note: `docz` will generate docs on `http://127.0.0.1:3000/gls/`. 

# Releasing
* Think if your change is `major (breaking api) / minor (potentially breaking but you tried your best not to) / patch (safe)`.
* See current version in `package.json` and update `CHANGELOG.md` adding the *planned release version* notes.
* Commit all your changes (including changelog)
* Run `npm version major|minor|patch`. It will automatically push to github, run `npm publish` on your behalf.

# Component guide 
Each component should do 5 things: 
* take all the props supported on a `div` i.e. `React.HTMLProps<HTMLDivElement>` :
```ts
export interface GridProps extends React.HTMLProps<HTMLDivElement> {
  spacing?: number
}
```
* isolate `className`:
```ts
const { className, ...otherProps } = props;
```
* append to `className` adding its own props as a className generated from typestyle:
```ts
const klass = classes(
  className,
  typestyle.style(/*stuff*/),
);
```
* render with all props + customized class + `data-comment`:
```ts
<div {...otherProps} className={klass} data-comment='WrappingGrid' />
```
* have a `displayName`: 
```ts
WrappingGrid.displayName = 'WrappingGrid';
```

# BaseProps
The props we want to be supported by a potential wysiwyg editor get added to `BaseProps`. 

> Potentially all of these can be done by the user in `style` Or `className`, but its easier this way as we get explicit properties to test on the component (instead of trying to do code flow analysis to determine the calculated styles).

# Docs Images

Drawn using [draw.io](https://draw.io). Just open the xml files from the images directory.