"use strict";
var csx = require("csx");
var Radium = require("radium");
var React = require("react");
;
exports.Content = Radium(function (props) {
    var style = props.style || {};
    props.style = csx.extend(style, csx.content);
    return (React.createElement("div", React.__spread({"data-comment": "Content"}, props), props.children));
});
exports.Flex = Radium(function (props) {
    var style = props.style || {};
    props.style = csx.extend(style, csx.flex);
    return (React.createElement("div", React.__spread({"data-comment": "Flex"}, props), props.children));
});
exports.Pass = Radium(function (props) {
    var style = props.style || {};
    props.style = csx.extend(style, csx.pass);
    return (React.createElement("div", React.__spread({"data-comment": "Pass"}, props), props.children));
});
exports.ContentVertical = Radium(function (props) {
    var style = props.style || {};
    props.style = csx.extend(style, csx.content, csx.vertical);
    return (React.createElement("div", React.__spread({"data-comment": "ContentVertical"}, props), props.children));
});
exports.ContentHorizontal = Radium(function (props) {
    var style = props.style || {};
    props.style = csx.extend(style, csx.content, csx.vertical);
    return (React.createElement("div", React.__spread({"data-comment": "ContentHorizontal"}, props), props.children));
});
exports.FlexVertical = Radium(function (props) {
    var style = props.style || {};
    props.style = csx.extend(style, csx.flex, csx.vertical);
    return (React.createElement("div", React.__spread({"data-comment": "FlexVertical"}, props), props.children));
});
exports.FlexHorizontal = Radium(function (props) {
    var style = props.style || {};
    props.style = csx.extend(style, csx.flex, csx.horizontal);
    return (React.createElement("div", React.__spread({"data-comment": "FlexHorizontal"}, props), props.children));
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
