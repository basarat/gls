"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CodeMirror = require('codemirror');
var React = require("react");
var ReactDOM = require("react-dom");
var csx = require("csx");
require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');
require('codemirror/keymap/sublime');
require('codemirror/addon/comment/comment');
require('codemirror/addon/fold/foldcode');
require('codemirror/addon/fold/foldgutter');
require('codemirror/addon/fold/brace-fold');
require('codemirror/addon/fold/xml-fold');
require('codemirror/addon/fold/markdown-fold');
require('codemirror/addon/fold/comment-fold');
require('codemirror/addon/selection/active-line');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/edit/matchtags');
require('codemirror/addon/search/match-highlighter');
require('./codeEditor.css');
var mode = 'jsx';
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
var CodeEditor = (function (_super) {
    __extends(CodeEditor, _super);
    function CodeEditor(props) {
        var _this = this;
        _super.call(this, props);
        this.ready = false;
        this.afterReadyQueue = [];
        this.afterReady = function (cb) {
            if (_this.ready)
                cb();
            else {
                _this.afterReadyQueue.push(cb);
            }
        };
        this.codemirrorValueChanged = function (doc, change) {
            var newValue = doc.getValue();
            _this._currentCodemirrorValue = newValue;
            _this.props.onChange && _this.props.onChange(newValue);
        };
        this.focusChanged = function (focused) {
            _this.setState({
                isFocused: focused
            });
            _this.props.onFocusChange && _this.props.onFocusChange(focused);
        };
        this.state = {
            isFocused: false
        };
    }
    CodeEditor.prototype.componentDidMount = function () {
        var _this = this;
        var options = {
            mode: mode,
            lineNumbers: true,
            keyMap: 'sublime',
            theme: 'monokai',
            indentUnit: 4,
            gutters: ["CodeMirror-linenumbers"],
            styleActiveLine: true,
            matchBrackets: true,
            highlightSelectionMatches: { showToken: /\w/ },
            autoCloseBrackets: true,
            matchTags: { bothTags: true },
            lineWrapping: true,
        };
        options.foldGutter = true;
        options.gutters.push("CodeMirror-foldgutter");
        var textareaNode = ReactDOM.findDOMNode(this.refs.textarea);
        this.codeMirror = CodeMirror.fromTextArea(textareaNode, options);
        this.codeMirror.on('focus', this.focusChanged.bind(this, true));
        this.codeMirror.on('blur', this.focusChanged.bind(this, false));
        this.codeMirror.on('change', this.codemirrorValueChanged);
        this._currentCodemirrorValue = this.props.value || '';
        this.codeMirror.setValue(this._currentCodemirrorValue);
        setTimeout(function () { return _this.codeMirror.refresh(); }, 200);
    };
    CodeEditor.prototype.componentWillUnmount = function () {
        if (this.codeMirror) {
            this.codeMirror.toTextArea();
            this.codeMirror.getDoc().cm = null;
        }
    };
    CodeEditor.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.codeMirror && nextProps.value !== undefined && this._currentCodemirrorValue !== nextProps.value) {
            this.codeMirror.setValue(nextProps.value);
        }
    };
    CodeEditor.prototype.getCodeMirror = function () {
        return this.codeMirror;
    };
    CodeEditor.prototype.getValue = function () {
        return this.codeMirror.getDoc().getValue();
    };
    CodeEditor.prototype.render = function () {
        var className = 'ReactCodeMirror';
        if (this.state.isFocused) {
            className += ' ReactCodeMirror--focused';
        }
        return (React.createElement("div", {className: className, style: csx.extend(csx.vertical, csx.flex, { position: 'relative' })}, React.createElement("textarea", {ref: "textarea", autoComplete: "false"})));
    };
    return CodeEditor;
}(React.Component));
exports.CodeEditor = CodeEditor;
