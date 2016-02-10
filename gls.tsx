/**
 * This is a level above CSX
 *  - It wraps up the CSX primitives into components
 */
import * as csx from "csx";
import * as Radium from "radium";
import * as React from "react";

/********
 *
 * Primitives
 *
 ********/


interface PrimitiveProps extends React.HTMLProps<HTMLDivElement>{};

/**
 * Takes as much space as it needs, no more, no less
 */
export const Content = Radium((props: PrimitiveProps) => {
    const style = csx.extend(props.style || {},csx.content);
    return (
        <div data-comment="Content" {...props} style={style}>
            {props.children}
        </div>
    );
});

/**
 * Takes up all the parent space, no more, no less
 */
export const Flex = Radium((props: PrimitiveProps) => {
    const style = csx.extend(props.style || {},csx.pass,csx.flex);
    return (
        <div data-comment="Flex" {...props} style={style}>
            {props.children}
        </div>
    );
});

/**
 * When you need a general purpose container. Use this instead of a `div`
 */
export const Pass = Radium((props: PrimitiveProps) => {
    const style = csx.extend(props.style || {},csx.pass);
    return (
        <div data-comment="Pass" {...props} style={style}>
            {props.children}
        </div>
    );
});

/**
 * Provides a Vertical Container. For the parent it behaves like content.
 */
export const ContentVertical = Radium((props: PrimitiveProps) => {
    const style = csx.extend(props.style || {}, csx.content, csx.vertical);
    return (
        <div data-comment="ContentVertical" {...props} style={style}>
            {props.children}
        </div>
    );
});

/**
 * Provides a Horizontal Container. For the parent it behaves like content.
 */
export const ContentHorizontal = Radium((props: PrimitiveProps) => {
    const style = csx.extend(props.style || {},csx.content,csx.horizontal);
    return (
        <div data-comment="ContentHorizontal" {...props} style={style}>
            {props.children}
        </div>
    );
});

/**
 * Provides a Vertical Container. For the parent it behaves like flex.
 */
export const FlexVertical = Radium((props: PrimitiveProps) => {
    const style = csx.extend(props.style || {},csx.flex,csx.vertical);
    return (
        <div data-comment="FlexVertical" {...props} style={style}>
            {props.children}
        </div>
    );
});

/**
 * Provides a Horizontal Container. For the parent it behaves like flex.
 */
export const FlexHorizontal = Radium((props: PrimitiveProps) => {
    const style = csx.extend(props.style || {},csx.flex,csx.horizontal);
    return (
        <div data-comment="FlexHorizontal" {...props} style={style}>
            {props.children}
        </div>
    );
});

/********
 *
 * Grid System
 *
 ********/
interface GridProps extends PrimitiveProps {
    padding: number | string;
}

/**
 * Lays out the children horizontally with
 * - Parent: gets to chose the Width
 * - ThisComponent: gets the overall Height (by max) of the children
 * - Children: get the Width : equally distributed from the parent Width
 * - Children: get the Height : sized by content
 * - ThisComponent: Puts a horizontal padding between each item
 */
export const RowPadded = (props:GridProps) => {
    const basicPadding = props.padding;

    const last = React.Children.count(props.children) - 1;
    const itemPadding = (index: number) => {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, basicPadding, 0, 0);
        }
    }

    return (
        <FlexHorizontal>
            {React.Children.map(props.children,
                (child, i) => <Flex key={i} style={itemPadding(i)}>{child}</Flex>)
            }
        </FlexHorizontal>
    );
}

/**
 * Lays out the children vertically with
 * - Parent: gets to chose the Width
 * - ThisComponent: gets the Height : (by sum) of the children
 * - Children: get the Width : parent
 * - Children: get the Height : sized by content
 * - ThisComponent: Puts a vertical padding between each item
 */
export const ColumnPadded  = (props:GridProps) => {
    const basicPadding = props.padding;

    const last = React.Children.count(props.children) - 1;
    const itemPadding = (index: number) => {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, 0, basicPadding, 0);
        }
    }

    return (
        <ContentVertical>
            {React.Children.map(props.children,
                (child, i) => <Content key={i} style={itemPadding(i)}>{child}</Content>)
            }
        </ContentVertical>
    );
}
