import * as gls from "../gls";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import * as Radium from "radium";
import * as csx from "csx";
import {CodeEditor} from "./codeEditor";

const lorem = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
 1500s, when an unknown printer took a galley of type and scrambled it
  to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting,
   remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets
     containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker
       including versions of Lorem Ipsum.
`;

const SampleContent = (props: any) => {
    return <gls.InlineBlock style={{backgroundColor:'yellow'}}>
        {lorem}
    </gls.InlineBlock>
}

const SampleFlex = (props: any) => {
    return <gls.Flex style={{backgroundColor:'yellow'}}>
        {lorem}
    </gls.Flex>;
}

const SampleRect =(props: any) => {
    return (
        <gls.InlineBlock style={{height:'50px',width:'30px',backgroundColor:'#666'}}>
        </gls.InlineBlock>
    );
}

const renderSampleRects = () => {
    return Array.apply(null, Array(300)).map((item,i)=>(
        <gls.InlineBlock key={i} style={{height:'50px',width:'30px',backgroundColor:'#666'}}>
        </gls.InlineBlock>
    ));
}

const SamplePage = (props:any) => {
    return <gls.FlexScrollY style={csx.Box.padding(5,0)}>
        {props.children}
    </gls.FlexScrollY>;
}

type TabProps = {
    tabs: { header: string; body: JSX.Element }[],
    selectedIndex: number,
    onRequestSelectedIndexChange: (index: number) => any
}
@Radium
class Tabs extends React.Component<TabProps, {}>{
    private Styles = {
        headerItem: csx.extend(
            csx.Box.padding(4, 5),
            csx.centerCenter,
            {
                cursor: 'pointer',
                borderTop: '2px solid white',
                borderLeft: '2px solid white',
                borderRight: '2px solid white',
                borderRadius: '4px 4px 0px 0px',
                transition: 'border .2s,background-color .2s',
                ':hover': {
                    backgroundColor:'#DDD'
                }
            }),
        headerItemSelected: {
            borderTop: '2px solid grey',
            borderLeft: '2px solid grey',
            borderRight: '2px solid grey',
        },
        body: csx.Box.padding(5),
    };
    constructor(props: TabProps) {
        super(props);
        this.state = { selectedIndex: 0 };
    }
    render() {
        if (!this.props.tabs.length) return <noscript/>

        const selectedIndex = this.props.selectedIndex;
        const selected = this.props.tabs[selectedIndex];
        return (
            <gls.FlexVertical>
                <gls.ContentHorizontal style={{ overflow:'auto' }}>
                    {this.props.tabs.map((t, i) => {
                        return (
                            <gls.Content
                                key={i}
                                onClick={() => this.props.onRequestSelectedIndexChange(i) }
                                style={
                                    csx.extend(this.Styles.headerItem, selectedIndex == i && this.Styles.headerItemSelected)
                                }>
                                {t.header}
                            </gls.Content>
                        );
                    }) }
                </gls.ContentHorizontal>
                <gls.Flex style={this.Styles.body}>
                    {selected.body}
                </gls.Flex>
            </gls.FlexVertical>
        );
    }
}

import * as ts from "ntypescript";
function transpile(str: string): string {
    return ts.transpile(str, { jsx: ts.JsxEmit.React });
}
/**
 * Renders the `jsx` string to `js` string and then sets it as its innerHTML
 */
class DemoComponent extends React.Component<{ code: string }, {}>{
    render() {

        const outputStyle = { backgroundColor: '#EEE', overflow: 'auto', border:'5px solid #5AD15A' };
        const errorStyle = csx.extend(outputStyle, { color: 'red', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '2rem' });

        const compiled = transpile(this.props.code);
        if (!compiled.replace('"use strict";', '').trim()) {
            return <gls.Flex style={errorStyle}>ERROR: No code emitted</gls.Flex>;
        }

        let evaled: any;
        try {
            evaled = eval(compiled);
        }
        catch (e) {
            return <gls.Flex style={errorStyle}>EVAL ERROR: {e.message}</gls.Flex>;
        }


        const html = ReactDOMServer.renderToString(evaled);

        return <gls.Flex style={outputStyle} dangerouslySetInnerHTML={
            {
                __html: html
            }
        }/>;
    }
}

type Sample = {
    name: string;
    code: string;
}

class Demo extends React.Component<{}, { selectedTabIndex?: number, samples?: { name: string, code: string }[] }>{
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedTabIndex: 0,
            samples: [
                {
                    name: 'Content',
                    code: `
<gls.Content style={{backgroundColor:'yellow'}}>${lorem}</gls.Content>
`.trim()
                },
                {
                    name: 'SampleContent',
                    code: `
<SampleContent/>
`.trim()
                },
                {
                    name: 'Flex',
                    code: `
<gls.Flex style={{backgroundColor:'yellow'}}>${lorem}</gls.Flex>
`.trim()
                },
                {
                    name: 'SampleFlex',
                    code: `
<SampleFlex/>
`.trim()
                },
                {
                    name: 'Column Padded',
                    code: `
<gls.ColumnPadded padding={10}>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
</gls.ColumnPadded>
`.trim()
                },
                {
                    name: 'Column Padded Nested',
                    code: `
<gls.ColumnPadded padding={10}>
    <gls.ColumnPadded padding={10}>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
    </gls.ColumnPadded>
    <gls.ColumnPadded padding={10}>
        <SampleContent/>
        <SampleContent/>
    </gls.ColumnPadded>
</gls.ColumnPadded>
`.trim()
                },
                {
                    name: 'Row Padded',
                    code:`
<gls.RowPadded padding={10}>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
</gls.RowPadded>
`
                },
                {
                    name: 'Header Body Footer',
                    code:`
<gls.FlexVertical>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        HEADER
    </gls.Content>
    <gls.Flex style={csx.centerCenter}>
        BODY
    </gls.Flex>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        FOOTER
    </gls.Content>
</gls.FlexVertical>
`
                },
                {
                    name: 'Body Scroll',
                    code:`
<gls.FlexVertical>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        HEADER
    </gls.Content>
    <gls.FlexScrollY>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
        <SampleContent/>
    </gls.FlexScrollY>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        FOOTER
    </gls.Content>
</gls.FlexVertical>
`
                },
                {
                    name: 'Body Padded Scroll',
                    code:`
<gls.FlexVertical>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        HEADER
    </gls.Content>
    <gls.FlexScrollY>
        <gls.ColumnPadded padding={10}>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
        </gls.ColumnPadded>
    </gls.FlexScrollY>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        FOOTER
    </gls.Content>
</gls.FlexVertical>
`
                },
                {
                    name: 'Sample Page',
                    code:`
<gls.FlexVertical>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        HEADER
    </gls.Content>
    <gls.FlexScrollY>
    <SamplePage>
        <gls.ColumnPadded padding={10}>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
            <SampleContent/>
        </gls.ColumnPadded>
    </SamplePage>
    <gls.Content style={csx.extend({height:'30px'},csx.centerCenter)}>
        FOOTER
    </gls.Content>
</gls.FlexVertical>
`
                },
                {
                    name: 'Rect',
                    code:`
<gls.FlexScrollY>
    <gls.ColumnPadded padding={10} style={csx.center}>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
        <SampleRect/>
    </gls.ColumnPadded>
</gls.FlexScrollY>
`
                },
                {
                    name: 'Grid',
                    code:`
<gls.FlexScrollY>
    <gls.GridMargined margin={10}>
        {renderSampleRects()}
    </gls.GridMargined>
</gls.FlexScrollY>
`
                },
            ]

        }
    }

    render() {
        let samples = this.state.samples;
        return (
            <gls.FlexVertical>

                <Tabs
                    tabs={
                        samples.map((s, i) => {
                            return {
                                header: s.name,
                                body:
                                    <CodeEditor
                                        key={i}
                                        value={s.code}
                                        onChange={(value) => {
                                        samples[i].code = value;
                                        this.setState({ samples });
                                    } }/>
                            };
                        })
                    }
                    selectedIndex={this.state.selectedTabIndex}
                    onRequestSelectedIndexChange={(selectedTabIndex) => this.setState({ selectedTabIndex }) }
                    />

                <DemoComponent code={samples[this.state.selectedTabIndex].code}/>
            </gls.FlexVertical>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Demo />, document.getElementById('root'));
});
