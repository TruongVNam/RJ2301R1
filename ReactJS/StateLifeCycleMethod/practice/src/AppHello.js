import Hello from "./Hello";
import React from "react";

class AppHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
    }
    delete =() => {
        this.setState({
            display: false,
        });
    };
    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello/>;
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>Delete the component</button>
            </div>
        );
    };
};

export default AppHello;