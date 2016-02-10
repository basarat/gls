"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        _super.apply(this, arguments);
    }
    Demo.prototype.render = function () {
        return (React.createElement("div", null, " Hello Demo! "));
    };
    return Demo;
}(React.Component));
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(React.createElement(Demo, null), document.getElementById('root'));
});
