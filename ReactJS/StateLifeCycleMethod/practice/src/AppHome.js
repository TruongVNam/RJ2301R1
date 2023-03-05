import Home from "./Home";
import React from "react";

class AppHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLogIn=()=>{this.setState({isLoggedIn:true})};

    handleLogOut=()=>{this.setState({isLoggedIn:false})};

    render(){
        const {isLoggedIn} = this.state;
        if (isLoggedIn) {
            return(<Home onLogOut={this.handleLogOut}/>)
        }
        return(
            <div style={{textAlign: 'center'}}>
                <div>
                    <h1>Please Login</h1>
                    <button onClick={this.handleLogIn}>Login</button>
                </div>
            </div>
        )
    };
}

export default AppHome;