"use strict";
var csx = require("csx");
var Radium = require("radium");
var React = require("react");
;
exports.Content = Radium(function (props) {
    var style = csx.extend(csx.content, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "Content"}, props, {style: style}), props.children));
});
exports.Content.displayName = "Content";
exports.InlineBlock = Radium(function (props) {
    var style = csx.extend({ display: 'inline-block' }, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "InlineBlock"}, props, {style: style}), props.children));
});
exports.InlineBlock.displayName = "InlineBlock";
exports.Flex = Radium(function (props) {
    var style = csx.extend(csx.pass, csx.flex, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "Flex"}, props, {style: style}), props.children));
});
exports.Flex.displayName = "Flex";
exports.FlexScrollY = Radium(function (props) {
    var style = csx.extend(csx.pass, csx.flex, { overflowY: 'auto' }, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "FlexScrollY"}, props, {style: style}), props.children));
});
exports.FlexScrollY.displayName = "FlexScrollY";
exports.Pass = Radium(function (props) {
    var style = csx.extend(csx.pass, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "Pass"}, props, {style: style}), props.children));
});
exports.Pass.displayName = "Pass";
exports.ContentVertical = Radium(function (props) {
    var style = csx.extend(csx.content, csx.vertical, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "ContentVertical"}, props, {style: style}), props.children));
});
exports.ContentVertical.displayName = "ContentVertical";
exports.ContentHorizontal = Radium(function (props) {
    var style = csx.extend(csx.content, csx.horizontal, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "ContentHorizontal"}, props, {style: style}), props.children));
});
exports.ContentHorizontal.displayName = "ContentHorizontal";
exports.FlexVertical = Radium(function (props) {
    var style = csx.extend(csx.flex, csx.vertical, { maxWidth: '100%' }, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "FlexVertical"}, props, {style: style}), props.children));
});
exports.FlexVertical.displayName = "FlexVertical";
exports.FlexHorizontal = Radium(function (props) {
    var style = csx.extend(csx.flex, csx.horizontal, props.style || {});
    return (React.createElement("div", React.__spread({"data-comment": "FlexHorizontal"}, props, {style: style}), props.children));
});
exports.FlexHorizontal.displayName = "FlexHorizontal";
exports.ContentHorizontalFlexPadded = function (props) {
    var basicPadding = props.padding;
    var children = React.Children.toArray(props.children).filter(function (c) { return !!c; });
    var last = children.length - 1;
    var itemPadding = function (index) {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, basicPadding, 0, 0);
        }
    };
    return (React.createElement(exports.ContentHorizontal, React.__spread({}, props), children.map(function (child, i) { return React.createElement(exports.Flex, {key: i, style: itemPadding(i)}, child); })));
};
exports.ContentHorizontalFlexPadded.displayName = "ContentHorizontalFlexPadded";
exports.FlexHorizontalFlexPadded = function (props) {
    var basicPadding = props.padding;
    var children = React.Children.toArray(props.children).filter(function (c) { return !!c; });
    var last = children.length - 1;
    var itemPadding = function (index) {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, basicPadding, 0, 0);
        }
    };
    return (React.createElement(exports.FlexHorizontal, React.__spread({}, props), children.map(function (child, i) { return React.createElement(exports.Flex, {key: i, style: itemPadding(i)}, child); })));
};
exports.FlexHorizontalFlexPadded.displayName = "FlexHorizontalFlexPadded";
exports.ContentHorizontalContentPadded = function (props) {
    var basicPadding = props.padding;
    var children = React.Children.toArray(props.children).filter(function (c) { return !!c; });
    var last = children.length - 1;
    var itemPadding = function (index) {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, basicPadding, 0, 0);
        }
    };
    return (React.createElement(exports.ContentHorizontal, React.__spread({}, props), children.map(function (child, i) { return React.createElement(exports.Content, {key: i, style: itemPadding(i)}, child); })));
};
exports.ContentHorizontalContentPadded.displayName = "ContentHorizontalContentPadded";
exports.ContentVerticalContentPadded = function (props) {
    var basicPadding = props.padding;
    var children = React.Children.toArray(props.children).filter(function (c) { return !!c; });
    var last = children.length - 1;
    var itemPadding = function (index) {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, 0, basicPadding, 0);
        }
    };
    return (React.createElement(exports.ContentVertical, React.__spread({}, props), children.map(function (child, i) { return React.createElement(exports.Content, {key: i, style: itemPadding(i)}, child); })));
};
exports.ContentVerticalContentPadded.displayName = "ContentVerticalContentPadded";
exports.GridMargined = function (props) {
    var style = csx.extend(csx.wrap, { marginTop: '-' + props.margin, marginLeft: '-' + props.margin }, props.style || {});
    var children = React.Children.toArray(props.children).filter(function (c) { return !!c; });
    return (React.createElement(exports.ContentHorizontal, React.__spread({}, props, {style: style}), children.map(function (child, i) { return React.createElement(exports.Content, {key: i, style: { marginLeft: props.margin, marginTop: props.margin }}, child); })));
};
exports.GridMargined.displayName = "GridMargined";
