import * as gls from "../gls";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import * as Radium from "radium";
import * as csx from "csx";
import {CodeEditor} from "./codeEditor";

const blue = '#00ADFF';
const yellow = 'gold';
const orange = '#FF806A';
const green = 'lightgreen';
const pink = 'hotpink';


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
    return <gls.InlineBlock style={{ backgroundColor: 'yellow' }}>
        {lorem}
    </gls.InlineBlock>
}

const SampleContentSmall = (props: any) => {
    return <gls.InlineBlock style={{ backgroundColor: 'yellow' }}>
        Hello World!
    </gls.InlineBlock>
}

const SampleFlex = (props: any) => {
    return <gls.Flex style={{ backgroundColor: 'yellow' }}>
        {lorem}
    </gls.Flex>;
}

const SampleHeader = (props: any) => {
    return (
        <gls.Content style={csx.extend({ height: '30px', backgroundColor: orange }, csx.centerCenter) }>
            HEADER
        </gls.Content>
    );
}

const SamplePage = (props: any) => {
    return <gls.FlexScrollY style={{ backgroundColor: blue, padding: '10px' }}>
        {props.children}
    </gls.FlexScrollY>
}

const SampleFooter = (props: any) => {
    return <gls.Content style={csx.extend({ height: '30px', backgroundColor: green }, csx.centerCenter) }>
        FOOTER
    </gls.Content>
}

const SampleInput = (props: any) => {
    return (
        <gls.ContentHorizontal style={csx.extend(csx.center, props.style) }>
            <label style={{ paddingRight: '5px' }}>Some Label</label>
            <input style={csx.flex} placeholder="Sample Input"/>
        </gls.ContentHorizontal>
    )
}

const SampleRect = (props: any) => {
    return (
        <gls.InlineBlock style={{ height: '100px', width: '150px', backgroundColor: '#666' }}>
        </gls.InlineBlock>
    );
}

const renderSampleRects = () => {
    return Array.apply(null, Array(100)).map((item, i) => (<SampleRect key={i}/>));
}

const SampleButton = (props: any) => {
    return (
        <button>Sample</button>
    )
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
                <gls.ContentHorizontal style={{ overflow: 'auto' }}>
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
class DemoComponent extends React.Component<{ code: string, horizontal?: boolean }, {}>{
    render() {

        const outputStyle = {
            backgroundColor: '#EEE',
            overflow: 'auto',
            border: '5px solid #5AD15A',
            fontFamily: 'sans-serif',
            fontSize: '1rem'
        };
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
        const props = {
            dangerouslySetInnerHTML:
            {
                __html: html
            },
            style: this.props.horizontal ? csx.selfStart : {}
        };

        return <gls.Flex style={outputStyle}>
            <gls.FlexVertical {...props} />
        </gls.Flex>;
    }
}

type Sample = {
    name: string;
    code: string;
    horizontal?: boolean;
}

class Demo extends React.Component<{}, { selectedTabIndex?: number, samples?: Sample[] }>{
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
                    name: 'FlexVertical',
                    code: `
<gls.FlexVertical style={{backgroundColor:blue}}>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
</gls.FlexVertical>
`.trim()
                },
                {
                    name: 'FlexHorizontal',
                    code: `
<gls.FlexHorizontal style={{backgroundColor:blue}}>
    <SampleContentSmall/>
    <SampleContentSmall/>
    <SampleContentSmall/>
    <SampleContentSmall/>
</gls.FlexHorizontal>
`.trim()
                },
                {
                    name: 'ContentVertical',
                    code: `
<gls.ContentVertical style={{backgroundColor:blue}}>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
</gls.ContentVertical>
`.trim()
                },
                {
                    name: 'ContentHorizontal',
                    horizontal: true,
                    code: `
<gls.ContentHorizontal style={{backgroundColor:blue}}>
    <SampleContentSmall/>
    <SampleContentSmall/>
    <SampleContentSmall/>
    <SampleContentSmall/>
</gls.ContentHorizontal>
`.trim()
                },
                {
                    name: 'Header Body Footer',
                    code: `
<gls.FlexVertical>
    <gls.Content style={csx.extend({height:'30px', backgroundColor:orange},csx.centerCenter)}>
        HEADER
    </gls.Content>
    <gls.Flex style={{backgroundColor:blue}}>
        BODY
    </gls.Flex>
    <gls.Content style={csx.extend({height:'30px', backgroundColor:green},csx.centerCenter)}>
        FOOTER
    </gls.Content>
</gls.FlexVertical>
`
                },
                {
                    name: 'Header Body Footer Scroll Pad',
                    code: `
<gls.FlexVertical>
    <gls.Content style={csx.extend({height:'30px', backgroundColor:orange},csx.centerCenter)}>
        HEADER
    </gls.Content>
    <gls.FlexScrollY style={{backgroundColor:blue, padding: '10px'}}>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
    </gls.FlexScrollY>
    <gls.Content style={csx.extend({height:'30px', backgroundColor:green},csx.centerCenter)}>
        FOOTER
    </gls.Content>
</gls.FlexVertical>
`
                },
                {
                    name: 'Samplified',
                    code: `
<gls.FlexVertical>
    <SampleHeader/>
    <SamplePage>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
        <div>BODY</div>
    </SamplePage>
    <SampleFooter/>
</gls.FlexVertical>
`
                },
                {
                    name: 'Input',
                    code: `
<gls.ContentHorizontal>
    <label>Some Label</label>
    <input placeholder="Sample Input"/>
</gls.ContentHorizontal>
`.trim()
                },
                {
                    name: 'Input Managed',
                    code: `
<gls.ContentHorizontal style={csx.center}>
    <label style={{paddingRight:'5px'}}>Some Label</label>
    <input style={csx.flex} placeholder="Sample Input"/>
</gls.ContentHorizontal>
`.trim()
                },
                {
                    name: 'SampleInput',
                    code: `
<SampleInput/>
`.trim()
                },
                {
                    name: '2 Inputs',
                    code: `
<gls.Content>
    <SampleInput/>
    <SampleInput/>
</gls.Content>
`.trim()
                },
                {
                    name: '2 Inputs Bad',
                    code: `
<gls.Content>
    <SampleInput style={{marginBottom:'10px'}}/>
    <SampleInput/>
</gls.Content>
`.trim()
                },
                {
                    name: 'ContentVerticalPadded',
                    code: `
<gls.ContentVerticalPadded padding={10}>
    <SampleInput/>
    <SampleInput/>
</gls.ContentVerticalPadded>
`.trim()
                },
                {
                    name: 'ContentVerticalPadded Nested',
                    code: `
<gls.ContentVerticalPadded padding={10}>
    <gls.ContentVerticalPadded padding={10}>
        <SampleContent/>
        <SampleContent/>
        <SampleInput/>
        <SampleContent/>
    </gls.ContentVerticalPadded>
    <gls.ContentVerticalPadded padding={10}>
        <SampleContent/>
        <SampleContent/>
    </gls.ContentVerticalPadded>
</gls.ContentVerticalPadded>
`.trim()
                },
                {
                    name: 'ContentVerticalPadded Page',
                    code: `
<SamplePage>
    <gls.ContentVerticalPadded padding={10}>
        <gls.ContentVerticalPadded padding={10}>
            <SampleContent/>
            <SampleContent/>
            <SampleInput/>
            <SampleContent/>
        </gls.ContentVerticalPadded>
        <gls.ContentVerticalPadded padding={10}>
            <SampleContent/>
            <SampleContent/>
        </gls.ContentVerticalPadded>
    </gls.ContentVerticalPadded>
</SamplePage>
`.trim()
                },
                {
                    name: 'FlexHorizontalPadded',
                    code: `
<gls.FlexHorizontalPadded padding={10}>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
    <SampleContent/>
</gls.FlexHorizontalPadded>
`
                },
                {
                    name: 'Rect',
                    code: `
<gls.FlexScrollY>
    <gls.ContentVerticalPadded padding={10} style={csx.center}>
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
    </gls.ContentVerticalPadded>
</gls.FlexScrollY>
`
                },
                {
                    name: 'Grid',
                    code: `
<gls.FlexScrollY>
    <gls.GridMargined margin={10}>
        {renderSampleRects()}
    </gls.GridMargined>
</gls.FlexScrollY>
`
                },
                {
                    name: 'Full Featured',
                    code: `
<gls.FlexVertical>
    <SampleHeader/>
    <SamplePage>
        <gls.ContentVerticalPadded padding={10}>
            {/* Actions row */}
            <gls.ContentHorizontal>
                <gls.ContentHorizontalPadded padding={5}>
                    <SampleButton/>
                    <SampleButton/>
                    <SampleButton/>
                    <SampleButton/>
                </gls.ContentHorizontalPadded>
                <gls.Flex/>
                <gls.ContentHorizontalPadded padding={5}>
                    <SampleButton/>
                    <SampleButton/>
                </gls.ContentHorizontalPadded>
            </gls.ContentHorizontal>

            {/* Some info */}
            <gls.FlexHorizontalPadded padding={10}>
                <SampleContent/>
                <SampleContent/>
                <SampleContent/>
                <SampleContent/>
            </gls.FlexHorizontalPadded>

            {/* Some Inputs */}
            <SampleInput/>
            <SampleInput/>
            <SampleInput/>
            <SampleInput/>

            {/* Some more info */}
            <gls.FlexHorizontalPadded padding={10}>
                <SampleContent/>
                <gls.FlexHorizontalPadded padding={10}>
                    <SampleContent/>
                    <SampleContent/>
                </gls.FlexHorizontalPadded>
            </gls.FlexHorizontalPadded>

            {/* Some More Inputs */}
            <SampleInput/>
            <SampleInput/>

            {/* A Grid! */}
            <gls.GridMargined margin={10}>
                {renderSampleRects()}
            </gls.GridMargined>

        </gls.ContentVerticalPadded>
    </SamplePage>
    <SampleFooter/>
</gls.FlexVertical>
`
                }
            ]

        }
    }

    render() {
        let samples = this.state.samples;
        const sample = samples[this.state.selectedTabIndex];
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

                <DemoComponent code={sample.code} horizontal={!!sample.horizontal}/>
            </gls.FlexVertical>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Demo />, document.getElementById('root'));
});
