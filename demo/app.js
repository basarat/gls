"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");
var gls = require("../gls");
var csx = require("csx");
var lorem = "\nLorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the\n 1500s, when an unknown printer took a galley of type and scrambled it\n  to make a type specimen book. It has survived not only five\n  centuries, but also the leap into electronic typesetting,\n   remaining essentially unchanged.\n    It was popularised in the 1960s with the release of Letraset sheets\n     containing Lorem Ipsum passages, and more recently\n      with desktop publishing software like Aldus PageMaker\n       including versions of Lorem Ipsum.\n";
var SampleContent = function (props) {
    return React.createElement(gls.Content, null, lorem);
};
var sample = React.createElement(gls.ColumnPadded, {padding: 10}, React.createElement(gls.ColumnPadded, {padding: 10}, React.createElement(SampleContent, null), React.createElement(SampleContent, null), React.createElement(SampleContent, null), React.createElement(SampleContent, null)), React.createElement(gls.ColumnPadded, {padding: 10}, React.createElement(SampleContent, null)));
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        _super.call(this, props);
        this.Styles = {
            headerItem: csx.extend(csx.Box.padding(0, 5), csx.centerCenter, {
                cursor: 'pointer',
                borderTop: '2px solid white',
                borderLeft: '2px solid white',
                borderRight: '2px solid white',
                borderRadius: '4px 4px 0px 0px',
                transition: 'border .2s'
            }),
            headerItemSelected: {
                borderTop: '2px solid grey',
                borderLeft: '2px solid grey',
                borderRight: '2px solid grey',
            },
            body: csx.Box.padding(5),
        };
        this.state = { selectedIndex: 0 };
    }
    Tabs.prototype.render = function () {
        var _this = this;
        if (!this.props.tabs.length)
            return React.createElement("noscript", null);
        var selectedIndex = this.props.selectedIndex;
        var selected = this.props.tabs[selectedIndex];
        return (React.createElement(gls.FlexVertical, null, React.createElement(gls.ContentHorizontal, {style: { height: '30px' }}, this.props.tabs.map(function (t, i) {
            return (React.createElement(gls.Content, {key: i, onClick: function () { return _this.props.requestSelectedIndexChange(i); }, style: csx.extend(_this.Styles.headerItem, selectedIndex == i && _this.Styles.headerItemSelected)}, t.header));
        })), React.createElement(gls.Flex, {style: this.Styles.body}, selected.body)));
    };
    return Tabs;
}(React.Component));
var ts = require("ntypescript");
function transpile(str) {
    return ts.transpile(str, { jsx: ts.JsxEmit.React });
}
var DemoComponent = (function (_super) {
    __extends(DemoComponent, _super);
    function DemoComponent() {
        _super.apply(this, arguments);
    }
    DemoComponent.prototype.render = function () {
        var outputStyle = { backgroundColor: '#EEE' };
        var errorStyle = csx.extend(outputStyle, { color: 'red', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '2rem' });
        var compiled = transpile(this.props.code);
        if (!compiled.replace('"use strict";', '').trim()) {
            return React.createElement(gls.Flex, {style: errorStyle}, "ERROR: No code emitted");
        }
        var evaled;
        try {
            evaled = eval(compiled);
        }
        catch (e) {
            return React.createElement(gls.Flex, {style: errorStyle}, "EVAL ERROR:", e.message);
        }
        var html = ReactDOMServer.renderToString(evaled);
        return React.createElement(gls.Flex, {style: outputStyle, dangerouslySetInnerHTML: {
            __html: html
        }});
    };
    return DemoComponent;
}(React.Component));
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo(props) {
        _super.call(this, props);
        this.state = {
            selectedTabIndex: 0,
            samples: [
                {
                    name: 'First',
                    code: "<gls.Content>First Body</gls.Content>"
                },
                {
                    name: 'Second',
                    code: "<gls.Content>Second Body</gls.Content>"
                }
            ]
        };
    }
    Demo.prototype.render = function () {
        var _this = this;
        var samples = this.state.samples;
        return (React.createElement(gls.FlexVertical, null, React.createElement(Tabs, {tabs: samples.map(function (s, i) {
            return {
                header: s.name, body: React.createElement("textarea", {key: i, style: csx.flex, value: s.code, onChange: function (e) {
                    var value = e.target.value;
                    samples[i].code = value;
                    _this.setState({ samples: samples });
                }})
            };
        }), selectedIndex: this.state.selectedTabIndex, requestSelectedIndexChange: function (selectedTabIndex) { return _this.setState({ selectedTabIndex: selectedTabIndex }); }}), React.createElement(DemoComponent, {code: samples[this.state.selectedTabIndex].code})));
    };
    return Demo;
}(React.Component));
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(React.createElement(Demo, null), document.getElementById('root'));
});
