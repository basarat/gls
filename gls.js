"use strict";
var csx = require("csx");
var Radium = require("radium");
var React = require("react");
;
exports.Content = Radium(function (props) {
    var style = csx.extend(props.style || {}, csx.content);
    return (React.createElement("div", React.__spread({"data-comment": "Content"}, props, {style: style}), props.children));
});
exports.InlineBlock = Radium(function (props) {
    var style = csx.extend(props.style || {}, { display: 'inline-block' });
    return (React.createElement("div", React.__spread({"data-comment": "InlineBlock"}, props, {style: style}), props.children));
});
exports.Flex = Radium(function (props) {
    var style = csx.extend(props.style || {}, csx.pass, csx.flex);
    return (React.createElement("div", React.__spread({"data-comment": "Flex"}, props, {style: style}), props.children));
});
exports.Pass = Radium(function (props) {
    var style = csx.extend(props.style || {}, csx.pass);
    return (React.createElement("div", React.__spread({"data-comment": "Pass"}, props, {style: style}), props.children));
});
exports.ContentVertical = Radium(function (props) {
    var style = csx.extend(props.style || {}, csx.content, csx.vertical);
    return (React.createElement("div", React.__spread({"data-comment": "ContentVertical"}, props, {style: style}), props.children));
});
exports.ContentHorizontal = Radium(function (props) {
    var style = csx.extend(props.style || {}, csx.content, csx.horizontal);
    return (React.createElement("div", React.__spread({"data-comment": "ContentHorizontal"}, props, {style: style}), props.children));
});
exports.FlexVertical = Radium(function (props) {
    var style = csx.extend(props.style || {}, csx.flex, csx.vertical);
    return (React.createElement("div", React.__spread({"data-comment": "FlexVertical"}, props, {style: style}), props.children));
});
exports.FlexHorizontal = Radium(function (props) {
    var style = csx.extend(props.style || {}, csx.flex, csx.horizontal);
    return (React.createElement("div", React.__spread({"data-comment": "FlexHorizontal"}, props, {style: style}), props.children));
});
exports.RowPadded = function (props) {
    var basicPadding = props.padding;
    var last = React.Children.count(props.children) - 1;
    var itemPadding = function (index) {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, basicPadding, 0, 0);
        }
    };
    return (React.createElement(exports.FlexHorizontal, null, React.Children.map(props.children, function (child, i) { return React.createElement(exports.Flex, {key: i, style: itemPadding(i)}, child); })));
};
exports.ColumnPadded = function (props) {
    var basicPadding = props.padding;
    var last = React.Children.count(props.children) - 1;
    var itemPadding = function (index) {
        if (index == last) {
            return csx.Box.padding(0);
        }
        else {
            return csx.Box.padding(0, 0, basicPadding, 0);
        }
    };
    return (React.createElement(exports.ContentVertical, null, React.Children.map(props.children, function (child, i) { return React.createElement(exports.Content, {key: i, style: itemPadding(i)}, child); })));
};
