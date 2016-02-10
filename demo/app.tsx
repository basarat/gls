import * as React from "react";
import * as ReactDOM from "react-dom";
import * as gls from "../gls";
import * as csx from "csx";

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
    return <gls.Content>
        {lorem}
    </gls.Content>
}



class Demo extends React.Component<{}, {}>{
    render() {
        return (
            <gls.ColumnPadded padding={10}>
                <gls.ColumnPadded padding={10}>
                    <SampleContent/>
                    <SampleContent/>
                    <SampleContent/>
                    <SampleContent/>
                </gls.ColumnPadded>
                <gls.ColumnPadded padding={10}>
                    <SampleContent/>
                </gls.ColumnPadded>
            </gls.ColumnPadded>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Demo />, document.getElementById('root'));
});
