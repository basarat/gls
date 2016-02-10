import * as React from "react";
import * as ReactDOM from "react-dom";

class Demo extends React.Component<{},{}>{
    render(){
        return (
            <div> Hello Demo! </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Demo />, document.getElementById('root'));
});
