"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var gls = require("../gls");
var lorem = "\nLorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the\n 1500s, when an unknown printer took a galley of type and scrambled it\n  to make a type specimen book. It has survived not only five\n  centuries, but also the leap into electronic typesetting,\n   remaining essentially unchanged.\n    It was popularised in the 1960s with the release of Letraset sheets\n     containing Lorem Ipsum passages, and more recently\n      with desktop publishing software like Aldus PageMaker\n       including versions of Lorem Ipsum.\n";
var SampleContent = function (props) {
    return React.createElement(gls.Content, null, lorem);
};
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        _super.apply(this, arguments);
    }
    Demo.prototype.render = function () {
        return (React.createElement(gls.ColumnPadded, {padding: 10}, React.createElement(gls.ColumnPadded, {padding: 10}, React.createElement(SampleContent, null), React.createElement(SampleContent, null), React.createElement(SampleContent, null), React.createElement(SampleContent, null)), React.createElement(gls.ColumnPadded, {padding: 10}, React.createElement(SampleContent, null))));
    };
    return Demo;
}(React.Component));
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(React.createElement(Demo, null), document.getElementById('root'));
});
