import React from "react";

class Mcompo extends React.Component {
    render() {
        return(
            <h1>Họ của tôi là Trương{this.props.color}</h1>
        )
    }
}

export default Mcompo;