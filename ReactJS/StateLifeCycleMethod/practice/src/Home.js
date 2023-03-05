import React from "react";

class Home extends React.Component {
    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <h1>Welcome</h1>
                <button onClick={this.props.onLogOut}>Logout</button>
            </div>
        );
    };
};
export default Home