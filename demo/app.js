"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var gls = require("../gls");
var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");
var Radium = require("radium");
var csx = require("csx");
var codeEditor_1 = require("./codeEditor");
var blue = '#00ADFF';
var yellow = 'gold';
var orange = '#FF806A';
var green = 'lightgreen';
var pink = 'hotpink';
var lorem = "\nLorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the\n 1500s, when an unknown printer took a galley of type and scrambled it\n  to make a type specimen book. It has survived not only five\n  centuries, but also the leap into electronic typesetting,\n   remaining essentially unchanged.\n    It was popularised in the 1960s with the release of Letraset sheets\n     containing Lorem Ipsum passages, and more recently\n      with desktop publishing software like Aldus PageMaker\n       including versions of Lorem Ipsum.\n";
var SampleContent = function (props) {
    return React.createElement(gls.InlineBlock, {style: { backgroundColor: 'yellow' }}, lorem);
};
var SampleContentSmall = function (props) {
    return React.createElement(gls.InlineBlock, {style: { backgroundColor: 'yellow' }}, "Hello World!");
};
var SampleFlex = function (props) {
    return React.createElement(gls.Flex, {style: { backgroundColor: 'yellow' }}, lorem);
};
var SampleHeader = function (props) {
    return (React.createElement(gls.Content, {style: csx.extend({ height: '30px', backgroundColor: orange }, csx.centerCenter)}, "HEADER"));
};
var SamplePage = function (props) {
    return React.createElement(gls.FlexScrollY, {style: { backgroundColor: blue, padding: '5px' }}, props.children);
};
var SampleFooter = function (props) {
    return React.createElement(gls.Content, {style: csx.extend({ height: '30px', backgroundColor: green }, csx.centerCenter)}, "FOOTER");
};
var SampleInput = function (props) {
    return (React.createElement(gls.ContentHorizontal, {style: csx.extend(csx.center, props.style)}, React.createElement("label", {style: { paddingRight: '5px' }}, "Some Label"), React.createElement("input", {style: csx.flex, placeholder: "Sample Input"})));
};
var SampleRect = function (props) {
    return (React.createElement(gls.InlineBlock, {style: { height: '100px', width: '150px', backgroundColor: '#666' }}));
};
var renderSampleRects = function () {
    return Array.apply(null, Array(100)).map(function (item, i) { return (React.createElement(SampleRect, {key: i})); });
};
var SampleButton = function (props) {
    return (React.createElement("button", null, "Sample"));
};
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        _super.call(this, props);
        this.Styles = {
            headerItem: csx.extend(csx.Box.padding(4, 5), csx.centerCenter, {
                fontFamily: 'sans-serif',
                cursor: 'pointer',
                borderTop: '2px solid white',
                borderLeft: '2px solid white',
                borderRight: '2px solid white',
                borderRadius: '4px 4px 0px 0px',
                transition: 'border .2s,background-color .2s',
                ':hover': {
                    backgroundColor: '#DDD'
                }
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
        return (React.createElement(gls.FlexVertical, null, React.createElement(gls.ContentHorizontal, {style: { overflow: 'auto' }}, this.props.tabs.map(function (t, i) {
            return (React.createElement(gls.Content, {key: i, onClick: function () { return _this.props.onRequestSelectedIndexChange(i); }, style: csx.extend(_this.Styles.headerItem, selectedIndex == i && _this.Styles.headerItemSelected)}, t.header));
        })), React.createElement(gls.Flex, {style: this.Styles.body}, selected.body)));
    };
    Tabs = __decorate([
        Radium, 
        __metadata('design:paramtypes', [Object])
    ], Tabs);
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
        var outputStyle = {
            backgroundColor: '#EEE',
            overflow: 'auto',
            border: '5px solid #5AD15A',
            fontFamily: 'sans-serif',
            fontSize: '1rem'
        };
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
            return React.createElement(gls.Flex, {style: errorStyle}, "EVAL ERROR: ", e.message);
        }
        var html = ReactDOMServer.renderToString(evaled);
        var props = {
            dangerouslySetInnerHTML: {
                __html: html
            },
            style: this.props.horizontal ? csx.selfStart : {}
        };
        return React.createElement(gls.Flex, {style: outputStyle}, React.createElement(gls.FlexVertical, React.__spread({}, props)));
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
                    name: 'Content',
                    code: ("\n<gls.Content style={{backgroundColor:'yellow'}}>" + lorem + "</gls.Content>\n").trim()
                },
                {
                    name: 'SampleContent',
                    code: "\n<SampleContent/>\n".trim()
                },
                {
                    name: 'Flex',
                    code: ("\n<gls.Flex style={{backgroundColor:'yellow'}}>" + lorem + "</gls.Flex>\n").trim()
                },
                {
                    name: 'SampleFlex',
                    code: "\n<SampleFlex/>\n".trim()
                },
                {
                    name: 'FlexVertical',
                    code: "\n<gls.FlexVertical style={{backgroundColor:blue}}>\n    <SampleContent/>\n    <SampleContent/>\n    <SampleContent/>\n</gls.FlexVertical>\n".trim()
                },
                {
                    name: 'FlexHorizontal',
                    code: "\n<gls.FlexHorizontal style={{backgroundColor:blue}}>\n    <SampleContentSmall/>\n    <SampleContentSmall/>\n    <SampleContentSmall/>\n    <SampleContentSmall/>\n</gls.FlexHorizontal>\n".trim()
                },
                {
                    name: 'ContentVertical',
                    code: "\n<gls.ContentVertical style={{backgroundColor:blue}}>\n    <SampleContent/>\n    <SampleContent/>\n    <SampleContent/>\n</gls.ContentVertical>\n".trim()
                },
                {
                    name: 'ContentHorizontal',
                    horizontal: true,
                    code: "\n<gls.ContentHorizontal style={{backgroundColor:blue}}>\n    <SampleContentSmall/>\n    <SampleContentSmall/>\n    <SampleContentSmall/>\n    <SampleContentSmall/>\n</gls.ContentHorizontal>\n".trim()
                },
                {
                    name: 'Header Body Footer',
                    code: "\n<gls.FlexVertical>\n    <gls.Content style={csx.extend({height:'30px', backgroundColor:orange},csx.centerCenter)}>\n        HEADER\n    </gls.Content>\n    <gls.Flex style={{backgroundColor:blue}}>\n        BODY\n    </gls.Flex>\n    <gls.Content style={csx.extend({height:'30px', backgroundColor:green},csx.centerCenter)}>\n        FOOTER\n    </gls.Content>\n</gls.FlexVertical>\n"
                },
                {
                    name: 'Header Body Footer Scroll Pad',
                    code: "\n<gls.FlexVertical>\n    <gls.Content style={csx.extend({height:'30px', backgroundColor:orange},csx.centerCenter)}>\n        HEADER\n    </gls.Content>\n    <gls.FlexScrollY style={{backgroundColor:blue, padding: '5px'}}>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n    </gls.FlexScrollY>\n    <gls.Content style={csx.extend({height:'30px', backgroundColor:green},csx.centerCenter)}>\n        FOOTER\n    </gls.Content>\n</gls.FlexVertical>\n"
                },
                {
                    name: 'Samplified',
                    code: "\n<gls.FlexVertical>\n    <SampleHeader/>\n    <SamplePage>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n        <div>BODY</div>\n    </SamplePage>\n    <SampleFooter/>\n</gls.FlexVertical>\n"
                },
                {
                    name: 'Input',
                    code: "\n<gls.ContentHorizontal>\n    <label>Some Label</label>\n    <input placeholder=\"Sample Input\"/>\n</gls.ContentHorizontal>\n".trim()
                },
                {
                    name: 'Input Managed',
                    code: "\n<gls.ContentHorizontal style={csx.center}>\n    <label style={{paddingRight:'5px'}}>Some Label</label>\n    <input style={csx.flex} placeholder=\"Sample Input\"/>\n</gls.ContentHorizontal>\n".trim()
                },
                {
                    name: 'SampleInput',
                    code: "\n<SampleInput/>\n".trim()
                },
                {
                    name: '2 Inputs',
                    code: "\n<gls.Content>\n    <SampleInput/>\n    <SampleInput/>\n</gls.Content>\n".trim()
                },
                {
                    name: '2 Inputs Bad',
                    code: "\n<gls.Content>\n    <SampleInput style={{marginBottom:'10px'}}/>\n    <SampleInput/>\n</gls.Content>\n".trim()
                },
                {
                    name: 'ContentVerticalPadded',
                    code: "\n<gls.ContentVerticalPadded padding={10}>\n    <SampleInput/>\n    <SampleInput/>\n</gls.ContentVerticalPadded>\n".trim()
                },
                {
                    name: 'ContentVerticalPadded Nested',
                    code: "\n<gls.ContentVerticalPadded padding={10}>\n    <gls.ContentVerticalPadded padding={10}>\n        <SampleContent/>\n        <SampleContent/>\n        <SampleInput/>\n        <SampleContent/>\n    </gls.ContentVerticalPadded>\n    <gls.ContentVerticalPadded padding={10}>\n        <SampleContent/>\n        <SampleContent/>\n    </gls.ContentVerticalPadded>\n</gls.ContentVerticalPadded>\n".trim()
                },
                {
                    name: 'ContentVerticalPadded Page',
                    code: "\n<SamplePage>\n    <gls.ContentVerticalPadded padding={10}>\n        <gls.ContentVerticalPadded padding={10}>\n            <SampleContent/>\n            <SampleContent/>\n            <SampleInput/>\n            <SampleContent/>\n        </gls.ContentVerticalPadded>\n        <gls.ContentVerticalPadded padding={10}>\n            <SampleContent/>\n            <SampleContent/>\n        </gls.ContentVerticalPadded>\n    </gls.ContentVerticalPadded>\n</SamplePage>\n".trim()
                },
                {
                    name: 'FlexHorizontalPadded',
                    code: "\n<gls.FlexHorizontalPadded padding={10}>\n    <SampleContent/>\n    <SampleContent/>\n    <SampleContent/>\n    <SampleContent/>\n</gls.FlexHorizontalPadded>\n"
                },
                {
                    name: 'Rect',
                    code: "\n<gls.FlexScrollY>\n    <gls.ContentVerticalPadded padding={10} style={csx.center}>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n        <SampleRect/>\n    </gls.ContentVerticalPadded>\n</gls.FlexScrollY>\n"
                },
                {
                    name: 'Grid',
                    code: "\n<gls.FlexScrollY>\n    <gls.GridMargined margin={10}>\n        {renderSampleRects()}\n    </gls.GridMargined>\n</gls.FlexScrollY>\n"
                },
                {
                    name: 'Full Featured',
                    code: "\n<gls.FlexVertical>\n    <SampleHeader/>\n    <SamplePage>\n        <gls.ContentVerticalPadded padding={10}>\n            <gls.ContentHorizontal>\n                <gls.FlexHorizontalPadded padding={10}>\n                    <SampleButton/>\n                    <SampleButton/>\n                    <SampleButton/>\n                    <SampleButton/>\n                </gls.FlexHorizontalPadded>\n            </gls.ContentHorizontal>\n        </gls.ContentVerticalPadded>\n    </SamplePage>\n    <SampleFooter/>\n</gls.FlexVertical>\n"
                }
            ]
        };
    }
    Demo.prototype.render = function () {
        var _this = this;
        var samples = this.state.samples;
        var sample = samples[this.state.selectedTabIndex];
        return (React.createElement(gls.FlexVertical, null, React.createElement(Tabs, {tabs: samples.map(function (s, i) {
            return {
                header: s.name,
                body: React.createElement(codeEditor_1.CodeEditor, {key: i, value: s.code, onChange: function (value) {
                    samples[i].code = value;
                    _this.setState({ samples: samples });
                }})
            };
        }), selectedIndex: this.state.selectedTabIndex, onRequestSelectedIndexChange: function (selectedTabIndex) { return _this.setState({ selectedTabIndex: selectedTabIndex }); }}), React.createElement(DemoComponent, {code: sample.code, horizontal: !!sample.horizontal})));
    };
    return Demo;
}(React.Component));
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(React.createElement(Demo, null), document.getElementById('root'));
});
